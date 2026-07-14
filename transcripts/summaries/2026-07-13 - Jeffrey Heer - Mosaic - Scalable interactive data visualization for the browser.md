---
source: local-first-conf-recording
title: "Mosaic: Scalable interactive data visualization for the browser"
date: 2026-07-13
speakers:
  - "Jeffrey Heer"
source_recording: "../../recordings/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1030-mosaic-scalable-interactive-data-visualization-for"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.md"
cleaned_transcript: "../cleaned/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.md"
---

# Mosaic: Scalable interactive data visualization for the browser

**Jeffrey Heer · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1030-mosaic-scalable-interactive-data-visualization-for) · [Raw transcript](../raw/2026-07-13%20-%20Jeffrey%20Heer%20-%20Mosaic%20-%20Scalable%20interactive%20data%20visualization%20for%20the%20browser.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Jeffrey%20Heer%20-%20Mosaic%20-%20Scalable%20interactive%20data%20visualization%20for%20the%20browser.md)

## Overview

Jeffrey Heer presents Mosaic, an open-source middleware architecture for building responsive, database-backed interactive visualizations that run locally or in the browser. Mosaic lets visualization components declare SQL data needs and linked selections, while a coordinator handles DuckDB queries, Arrow transport, caching, and automatic visualization-aware optimizations such as pixel-level pre-aggregation. Through flight, astronomy, geospatial, embedding, and analytics examples, Heer shows that local machines can interactively explore datasets reaching billions of rows, and argues that reducing display latency leads people to ask more questions and conduct deeper analysis.

## Detailed notes

### Local analysis of 170 million flights

Heer introduces Mosaic as joint work with Dominik Moritz at the University of Washington. He challenges the assumption that large-scale analysis must be shipped to a cloud warehouse: modern laptops combine large memory, fast storage, parallel compute, and analytical databases such as DuckDB.

His opening dataset contains all U.S. commercial-flight records published by the Bureau of Transportation Statistics since 1987. A script downloads 344 monthly CSV files totaling about 80 gigabytes and 170 million records. DuckDB loads them into a working table in about one minute.

A terminal bar chart of flights over time immediately exposes a missing decade: the source returned 404 errors for files from the 1990s. Heer uses this to emphasize visualization as a data-quality check. Additional histograms show that arrival delay can be negative, flight distance skews short, and departures increase around 6 a.m. local time.

Static queries become cumbersome when questions involve relationships among variables. To find how late-day departures affect delays, an analyst must write and wait for another query. Heer instead wants charts to serve as input devices: selecting an interval in one view should update the others. This creates an asynchronous, distributed program spanning a browser and database, motivating a middleware layer.

### Mosaic's declarative coordination model

Mosaic clients are visualization or input components that declare their data needs as SQL queries. A central coordinator schedules those queries against DuckDB, which may run as a local process or through WebAssembly in the browser. Results return as Apache Arrow, allowing efficient binary transport, zero-copy client access, and no parsing step. The coordinator caches results and consolidates work.

Clients publish interactions as shared selections. Point selections represent discrete values and become predicates such as equality or inclusion. Interval selections come from brushes or sliders. Although they appear continuous, their endpoints have only pixel-level resolution, leaving a few hundred possible positions. Mosaic uses this bounded space to optimize interaction.

Selections can apply multivariate filter predicates and trigger updated queries across many clients. In the flight dashboard, a time-series chart makes the missing years visible and adds annotations for significant events. A hex-binned heat map of departure versus arrival delay shows a vertical concentration of flights that left on time but arrived late, plus a diagonal of flights whose arrival delay mirrors their departure delay. Linked histograms for delay, departure time, and distance can then cross-filter one another.

### Visualization-aware queries

Rerunning every filter and aggregation over the full dataset is too slow for direct manipulation. Mosaic therefore uses knowledge of the visual representation to change the queries.

For area and line charts, Mosaic applies the M4 optimization from database research. Pixel-aware binning reduces the number of returned points, often by more than an order of magnitude, while guaranteeing that the rendered image remains unchanged. This supports coordinated overview-and-detail charts without sending tens of thousands of unnecessary rows to the browser.

Cross-filtered histograms require a different optimization. Mosaic models two histograms as a two-dimensional matrix whose cells count records in the cross-product of their bins. This matrix is a pre-aggregated materialized view. Interactive filtering can operate on the much smaller matrix rather than scanning original records.

Displayed histogram bins are too coarse for a brush whose endpoints move one pixel at a time, so Mosaic builds pixel-by-bin views. For interaction in the departure-time chart, columns represent possible pixel endpoints and rows represent bins of the other chart; selecting a range isolates columns and sums rows. Filtering in the other direction uses a separate orientation. Mosaic derives these materialized views automatically from query structure and selection semantics.

Counts serve as sufficient statistics for count aggregation. Other functions require different precomputed values: average needs per-bin average and count for weighted recombination; min and max can be recomputed from per-bin extremes; argmin and argmax additionally retain associated values. The technique extends to standard deviation, covariance, correlation, and linear regression.

### Performance results

Benchmarks measure both materialized-view creation and selection updates using a full local DuckDB server and browser-sandboxed DuckDB-Wasm. On a local server, on-demand pre-aggregation is feasible through roughly 100 million input rows. For billions of records, creating views may take seconds or, in the worst cases, minutes, but those views can be generated at publication time.

Once pre-aggregated, updates remain rapidly interactive with a billion backing rows. Without the optimization, latency eventually makes the visualization unusable. In the flight-histogram comparison, Mosaic also outperforms VegaPlus and VegaFusion even before enabling its own pre-aggregation.

### Applications at larger scale

Heer's astronomy example explores 1.8 billion stars from the European Space Agency's Gaia catalog. A density map of the Milky Way is linked to a Hertzsprung–Russell diagram of color and brightness. Brushing the main stellar sequence reveals how subsets distribute across the sky. A suspicious blob exposes records affected by image-processing errors, again showing how visual exploration can reveal data problems that opaque methods may miss.

Mosaic's selection model also links tables, sliders, search boxes, menus, maps, and charts. Database pushdown handles regressions, interquartile ranges, and other transformations. Table components segment data for smooth infinite scrolling without overwhelming the database. Because the system speaks standard SQL, it can use DuckDB extensions; Heer shows its spatial extension comparing New York City taxi pickups and drop-offs over time.

Embedding Atlas, developed by Moritz's team at Apple, uses Mosaic and DuckDB for local exploration of high-dimensional text and image embeddings. Users can drag their own datasets into the browser and cross-filter additional fields. Heer also describes a startup whose name is unclear in the transcript, where Mosaic powers composable embedded-analytics dashboards. An LLM-driven data agent answers questions not covered by a dashboard and generates charts, while both agent and dashboard share Mosaic's linked views and local database. Running in DuckDB-Wasm avoids cloud query charges.

### Responsiveness changes analytical behavior

Heer connects the systems work to experimental findings from years of visualization research. Responsive displays do more than feel pleasant: people ask more questions and form more hypotheses when the interface does not interrupt their rate of thought. Participants first exposed to a slow display continued working slowly for a period even after moving to a faster one, suggesting that latency's effects persist.

Heer summarizes Mosaic as a middle tier that unifies abstractions developed through D3, Vega, and Vega-Lite with database research on scalable interactive visualization. Clients declare needs, the coordinator manages SQL and linked selections, and optimizations such as automatic pre-aggregation produce orders-of-magnitude improvements. The architecture and components are available as open-source software on GitHub.

### Browser limits and rendering

In response to a question about the Gaia dataset, Heer confirms that 1.8 billion rows cannot fit in browser memory. The local application converts compressed CSV to Parquet and lets DuckDB scan the files directly from solid-state storage instead of loading them into database tables, preserving RAM for pre-aggregated views. A published browser experience can load precomputed views and route queries to them.

As a rough threshold, Heer suggests that pure DuckDB-Wasm works for about ten million rows with no more than roughly two dozen columns. Larger exploratory workloads benefit from a fully resourced local DuckDB process, while browser publication can offer a more bounded interaction over prepared data.

Asked whether Mosaic uses Vega for rendering, Heer says the proof of concept uses Observable Plot by Mike Bostock. At his startup, the team has built a new Mosaic-native plotting library in Svelte and hopes to release it as open source in the coming months or year.
