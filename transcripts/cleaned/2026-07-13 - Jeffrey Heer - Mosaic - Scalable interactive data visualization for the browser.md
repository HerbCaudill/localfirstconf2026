---
source: local-first-conf-recording
title: "Mosaic: Scalable interactive data visualization for the browser"
date: 2026-07-13
speakers:
  - "Jeffrey Heer"
source_recording: "../../recordings/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1030-mosaic-scalable-interactive-data-visualization-for"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.md"
---

**Presenter:** Thank you. Hi, I'm Jeffrey Heer from the University of Washington in Seattle. On behalf of my collaborator, Dominik Moritz, I'll share our work on Mosaic, a system for scalable, interactive data visualizations in your browser.

We may have gotten used to the idea that analyzing big data means shipping it to a cloud data warehouse, but our laptops are often more powerful than many think. Modern computers have large memories, fast storage bandwidth, and parallelism, along with a fast analytical database such as DuckDB.

Let's consider exploring patterns in a massive dataset about flights. We may want to know how the number of flights has changed over time and how departure delays affect arrival delays. We may also want to know how other variables, such as departure time or distance flown, interact with delays.

In the United States, the Bureau of Transportation Statistics, or BTS, publishes flight records covering all commercial flights in the U.S. since 1987. We can write a script to download one CSV file for each month. Each line contains information about one flight: its date, origin, destination, duration, distance, departure and arrival delay, and so on. After a few minutes, we have 344 files totaling about 80 gigabytes of data.

This is no obstacle for local analysis with systems such as DuckDB. If you're unfamiliar with it, DuckDB is a convenient and fast database. It's also very easy to use, which is one of its strongest selling points. It's deployable in a browser, in your own process with bindings for many programming languages, or directly from the command line.

We can query the downloaded files as a single table. It takes about one minute to load 170 million flight records into a table we can work with. Once that finishes, we can inspect the data and start answering real questions.

First, let's query how many flights we have over time. DuckDB not only runs queries but has a built-in bar function, so we can make visualizations—not the greatest visualizations, perhaps, but useful to have in the terminal. The naive plot reveals that the entire 1990s are missing. BTS returned 404 Not Found errors for those years, so we don't have that data. This is a reminder to validate data quality; visualization is one of the best tools for doing so.

Now we want to examine delays and associations with departure time and distance. Histograms show that arrival delays can be negative, because flights sometimes arrive early. Distances skew toward shorter flights. Departure time shows a pattern through the day, with flights picking up around 6 a.m. local time.

If we want to ask, “How delayed are flights that leave later in the day?”, we have to write a new query, wait for the results, and repeat a less ergonomic process. Wouldn't it be better to use the charts themselves as input devices for exploration and discovery? We would like to select regions of interest in one chart and see the other plots update.

That requires a program distributed between the browser, where visualizations render, and the database. It involves asynchronous updates and multiple queries that must be coordinated. My argument is that we benefit from a middleware layer mediating between the database and client-side visualizations. Mosaic is our attempt to build that middleware.

In Mosaic, visualizations define their data needs as queries. The middleware determines when and how to query the database and triggers dynamic chart updates as needed.

Here is a demo application built with Mosaic. We begin by visualizing the total number of flights over time. The gap in the 1990s is immediately visible, and we can enrich the display with annotations for significant dates that add explanatory context.

Next, we assess the relationship between departure and arrival delay in a heat map using a binned hexagonal grid. The main trend is a vertical line showing arrival delays for flights that left on time but arrived late. A strong diagonal shows flights whose arrival delay largely matches their departure delay: they arrived late because they left late. Those are the main trends, but the visualization also shows the full space of other, less likely outcomes.

We can recreate the original histograms for arrival delay, departure time, and distance that we previously made in the database terminal. To build these visualizations, we also created a proof-of-concept component library on top of Mosaic that supports diverse visualization and input types. Each component interoperates with Mosaic by publishing its data needs as declarative queries. Components can also publish filter criteria to shared selections managed by Mosaic.

More specifically, a Mosaic application consists of data-driven components called clients. They publish their data needs as declarative queries. The Mosaic coordinator manages the requests and submits queries to a backing database. We use SQL as the query language and DuckDB by default, running either locally or in the browser through WebAssembly. Query results return to clients for browser rendering.

We transport data with Apache Arrow, a binary format that enables efficient transfer with zero-copy access on the client side and no subsequent parsing overhead. The coordinator also caches query results for faster responses to repeated queries.

The coordinator mediates linked interactions. Updates from clients or input widgets populate dynamic parameters called selections. These manage multivariate filtering predicates that filter the data and trigger new queries to repopulate displays. Selections resolve updates across multiple clients, supporting cross-filtered views where interaction in one view filters many others.

Interactive selections translate to a small, manageable set of types. Point selections choose discrete values and become predicates such as inclusion or equality checks. Initiating interactions include clicking a chart element or selecting a menu option. Interval selections appear continuous and can come from brushes, sliders, and range sliders, but their endpoints have at most pixel-level resolution. There are only a few hundred possible positions for an endpoint. This matters because Mosaic can exploit that discreteness to optimize selection processing.

Together, these abstractions support expressive, extensible, interoperable views that combine diverse visualization and interaction techniques, while the analytical database handles all data updates.

Now we can use linked selections for cross-filtering to assess relationships among variables. But on every update, filter and aggregation queries rerun across full tables. This naive approach is too slow. For real-time interaction with large datasets, modern computers and fast analytical databases still need visualization-aware optimization.

Consider an area chart. A basic query selects all points to render, in this case 50,000 rows. The database merely hands us the data, and the browser must render it all, which can degrade speed and quality at high volumes.

Mosaic's area and line marks instead apply M4, an optimization developed in the database community. It performs pixel-aware binning and often reduces data by more than an order of magnitude, while guaranteeing that the visualization's appearance does not change. This is a local optimization based on the semantics of visualized data: Mosaic generates a query tailored to the visualization.

We can duplicate the area chart and coordinate the two to create an overview-and-detail interaction. Interactions in the top chart filter the bottom chart, with M4 queries and cache optimizations applied on each update.

Let's break down cross-filtered histograms showing flight delays and departure times. We bin along the x-axis and show counts on the y-axis. Selecting an interval in one plot filters records in the other, requiring re-aggregation for every update. How can we do that with sufficiently low latency?

As a way of reasoning about the problem—not something shown to users—we can represent the data behind the charts as a two-dimensional histogram. Take the cross-product of the bins for both charts and count records in each intersecting 2D bin. In database terms, this matrix is a pre-aggregated materialized view. Rather than operate on the much larger input, we filter and aggregate this matrix.

If we select an interval and look only at its columns, we can sum across rows to re-aggregate the data. But this simplified picture cannot support rich interaction. The pre-aggregation shown so far has the resolution of the histogram's displayed bins, while interactive resolution should be at the level of screen pixels.

We therefore need a pixel-by-bin pre-aggregation, with one column for each screen pixel. Selecting an interval filters to the relevant columns, then sums each row. That materialized view is specific to interaction with the departure-time histogram. Filtering from the delay histogram requires a different pre-aggregation: pixels along the y-axis and displayed bins along the x-axis. Each update isolates rows and sums along columns to re-aggregate the first plot.

Combining query caching, consolidation of compatible queries, and especially pre-aggregation makes cross-filtering very fast. Even with massive data volumes, a query takes only a few milliseconds before rendering.

Under the hood, Mosaic analyzes current selection semantics and query structure to generate pre-aggregated materialized views automatically. It bins over every pixel that a selection interval endpoint might occupy and precomputes aggregates. Subsequent updates query this smaller data and gain substantial speedups.

For simple counts, per-bin counts are sufficient statistics. Mosaic sums the counts for bins included in the interactive selection. Other aggregate functions may need more sufficient statistics. To optimize averages, it pre-aggregates per-bin averages and counts, then computes a weighted average. Min and max can apply the same aggregation both when building the materialized view and when answering a selection. Argmin and argmax need two statistics so Mosaic can map an extreme value back to its associated value. More complex schemes support standard deviations, covariance, correlation, and linear regression.

Does it work? We benchmarked both creation time for pre-aggregated views and update time for selections across several visualization designs and configurations. We tested a local DuckDB server, with access to the laptop's full memory and parallelism, and DuckDB-Wasm, which runs inside the browser's sandbox.

For up to 100 million input rows, creating pre-aggregations on the fly is feasible with a local server. At billions of rows, creation can take multiple seconds and, in the worst cases, minutes. Additional precomputation can happen at publication time rather than runtime, allowing applications to deploy with pre-aggregated data already available.

With pre-aggregation, Mosaic maintains rapid interactive rates with a billion backing rows. Without it, latency eventually makes the display unusable. We also compared the flight-histogram example with VegaPlus and VegaFusion, systems that perform their own database optimizations. They performed relatively poorly in this case and were outperformed by Mosaic even before Mosaic's pre-aggregation optimization was enabled.

What can we build with this machinery? One of my favorite examples explores 1.8 billion stars from the European Space Agency's Gaia catalog. Selecting stars with higher parallax reveals the main sequence of stellar lifespans in a Hertzsprung–Russell diagram of star color versus brightness, beside a density map of the Milky Way.

We can trace the sequence and ask how those stars distribute on the sky map. The distribution appears relatively uniform until we brush the brightest stars. A large blob at the bottom of the chart is another data-quality lesson: billions of sky images analyzed by computer vision produce many errors. This cluster reflects processing problems. The visualization not only reveals patterns but helps users understand data quality and avoid analytical failures that opaque methods might hide.

Mosaic's standardized selection abstraction links tables, visualizations, sliders, search boxes, menus, and other widgets through dynamic parameters and data queries. Regression models, interquartile ranges, and other transformations are pushed down to the database. Table views pre-section data to provide smooth infinite scrolling without overwhelming the database.

Because Mosaic uses standard SQL, it can leverage database extensions. One example uses DuckDB's spatial extension to project geographic data and compare New York City taxi pickups and drop-offs over time.

We've also applied Mosaic in our day jobs. In addition to being a professor at Carnegie Mellon, Dominik runs a team at Apple that develops the open-source Embedding Atlas. It's a local exploration tool for embeddings of high-dimensional datasets such as text and images. Additional fields can be cross-filtered for what-if analyses. Mosaic coordinates these interactions with DuckDB, running through WebAssembly or as a local server. You can drag your own dataset into the browser and explore it directly.

I also recently co-founded a startup called [unclear] AI, which provides composable embedded analytics. Mosaic powers its dashboard and combines with an LLM-driven data agent that answers questions the dashboard doesn't support and generates new charts. Both dashboard and agent use Mosaic for interactive linked views and local database access. The agent can query as much as it wants without cloud charges because everything runs locally in the browser through WebAssembly.

This project is backed by years of research from my lab at the University of Washington and others. Beyond the technical results, experiments show that fast, responsive visualizations significantly affect the content and depth of analysis. People ask more questions and develop more hypotheses when a display doesn't impede their rate of thought. People who started with a slow display continued acting more slowly for a while after receiving a fast one; it takes time to recover from a high-latency experience.

To summarize, Mosaic provides a middle-tier architecture that coordinates linked selections among data views and automatically optimizes queries. Clients communicate their data needs declaratively, and a central coordinator manages and optimizes the resulting SQL. Mosaic unifies abstractions inspired by years of work on D3, Vega, and Vega-Lite with research on database-backed scalable interaction, including automatic pre-aggregation. We demonstrate orders-of-magnitude improvements over existing web visualization tools.

Mosaic and its components are available as open-source software on GitHub. I also want to apologize on Dominik's behalf; he wanted to be here but had to return to the United States early because of visa complications. We designed this talk together here in Berlin last month over lunch. Thank you for your attention. I'm happy to answer questions.

**MC:** You're a busy guy, both a professor and a startup founder, especially flying across continents to speak at conferences. We have several questions, so before the break I'll pick a couple of representative ones. For the Gaia example, does it retain the entire dataset in memory? It sounds like that might be too much for browser technology.

**Presenter:** You're correct; it would be too much for browser memory. To drive that application, we load the full dataset from compressed CSV files. The first step is to convert it to a more efficient format such as Parquet. I'm running that locally.

We don't even load the files into DuckDB tables. DuckDB has such a great Parquet scanner, and solid-state storage can scan it quickly. That frees more RAM to manage and build the pre-aggregated views. It's all done locally and can happen on the fly using the full power of a laptop through a local DuckDB server.

You can have similar experiences in the browser, but in that case you precompute views to service the queries, load only those, and route queries to them. Mosaic allows you to do that.

**MC:** So having everything on your computer, without the confines of a browser tab, would be good for initial exploration. Running in a browser tab would be more like publishing a dataset with precomputed optimizations for someone to do more limited exploration.

**Presenter:** Yes. As a rough estimate, you can do this entirely in the browser with WebAssembly for up to about ten million rows and a reasonable number of columns—perhaps no more than two dozen. Beyond that, it helps to use a more fully resourced DuckDB instance.

**MC:** Last question: are you using Vega for rendering?

**Presenter:** No. For this proof of concept, mostly for fun and to learn other people's software, we're using Observable Plot by my former student Mike Bostock, the lead developer of D3. At [unclear] AI, we've built a new plotting library from scratch in Svelte that is Mosaic-native. That's been a lot of fun. We hope to make it an open-source release in the coming months or year.

**MC:** Amazing. Please give a round of applause to Jeffrey.
