---
source: local-first-conf-recording
title: "Mosaic: Scalable interactive data visualization for the browser"
date: 2026-07-13
speakers:
  - "Jeffrey Heer"
source_recording: "../../recordings/2026-07-13 - Jeffrey Heer - Mosaic - Scalable interactive data visualization for the browser.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1030-mosaic-scalable-interactive-data-visualization-for"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Mosaic: Scalable interactive data visualization for the browser

**00:00:00**

Jeffrey Heer: Thank you. Hi, I'm Jeffrey Heer from the University of Washington in Seattle, and on behalf of my collaborator, Dominic Moritz, I'll be sharing our work on Mosaic, which is a system for scalable, interactive data visualizations in your browser.

**00:00:13**

And we may have gotten used to the idea that Analyze is big data and is shipping it off to a cloud data warehouse, but of course our laptops are often more powerful than many think.

**00:00:23**

Modern computers have large memories, fast storage bandwidth, and these parallel with a fast analytic database like DuckDB.

**00:00:30**

So let's consider an example of exploring patterns in a massive data set about flights.

**00:00:35**

So for example, we may want to know, you know, simply how has the number of flights changed over time?

**00:00:41**

But also how do departure delays affect arrival delays?

**00:00:44**

But also how do other variables like our departure time or the distance flown interact with delays?

**00:00:50**

Well, in the United States, the Bureau of Transportation Statistics, or BTS, publishes flight records.

**00:00:56**

And their data covers all commercial flights in the U.S. since 1987.

**00:01:01**

So we can write a script to download data files, in this case one for each month in CSV format.

**00:01:06**

And in those files, each line contains information about one flight.

**00:01:10**

So it's date, origin, destination, duration, distance, departure and arrival delay, and so on.

**00:01:16**

And after a few minutes, we now have 344 individual files.

**00:01:21**

In total it's about 80 gigabytes of data.

**00:01:23**

This is no obstacle for local analysis with systems like DuckDB.

**00:01:26**

And I'm sure many of you are familiar, but if not, DuckDB is a convenient and fast database.

**00:01:31**

It's also really easy to use.

**00:01:32**

I think it's one of its strongest selling points.

**00:01:34**

It's deployable on a browser, in your own process, with bindings from a variety of programming languages,

**00:01:39**

or just directly from the command line.

**00:01:42**

So we can query those files downloaded, and now as a single table.

**00:01:47**

And it takes about one minute to load the 170 million flight records into a table we can work with.

**00:01:53**

And then once that finishes loading, we can then inspect the data.

**00:01:57**

And now we're ready to start answering some real questions.

**00:02:00**

So first, let's query how many flights we have over time.

**00:02:05**

It turns out not just queries, but DuckDB has a built-in bar function.

**00:02:09**

So we can start to make some visualizations.

**00:02:11**

Maybe not the greatest visualizations, but still very, very useful to have in your terminal.

**00:02:15**

But the naive plot missed, but the data actually has the entire 1990s missing.

**00:02:21**

Well, it turns out ETS returned 404 not found errors for those years, so we're missing that data.

**00:02:27**

So just as a reminder, it's always important to validate data quality,

**00:02:31**

and data visualizations are one of the best tools out there to help you do that.

**00:02:35**

But now we want to look at delays and any associations with departure time and distance flown.

**00:02:41**

So we can plot some histograms of each, and we can see that first with our initial query.

**00:02:45**

The arrival delay actually is sometimes negative.

**00:02:47**

Things arrive ahead of time.

**00:02:49**

We can look at distance and see that it skews towards shorter flights.

**00:02:53**

And then in the third query, we can look at departure time,

**00:02:55**

where we can see sort of the pattern throughout the day,

**00:02:58**

noticing that the flights really pick up around 6 a.m. in the local time.

**00:03:02**

But if we want to ask questions like,

**00:03:05**

"How delayed are the flights that leave later in the day?"

**00:03:08**

Of course, we then have to write a new query and wait for the results,

**00:03:12**

and then repeat this process in a way that's going to be less ergonomic.

**00:03:15**

So wouldn't it be great that instead we could actually use the charts themselves

**00:03:19**

as input devices for exploration and discovery?

**00:03:22**

In this case, we'd like to use the charts as filters,

**00:03:25**

for example, by selecting regions of interest and then seeing updates in the other plots.

**00:03:29**

But now we have to write a program that's distributed between a browser

**00:03:33**

where we can render the visualizations and our database.

**00:03:36**

And this, of course, involves asynchronous updates,

**00:03:38**

but also multiple queries that we're going to need to coordinate.

**00:03:42**

And so my argument is that we benefit from a middleware layer

**00:03:45**

that helps us mediate between the database and the client-side visualizations.

**00:03:50**

And so Mosaic is our attempt at building that middleware.

**00:03:53**

So in Mosaic, visualizations simply define their data needs in terms of queries.

**00:03:58**

The Mosaic middleware then figures out when and how to query the database

**00:04:03**

and also triggers dynamic updates to the charts as needed.

**00:04:07**

So here we have a demo application built using Mosaic.

**00:04:11**

And again, to start, let's visualize the total number of flights over time.

**00:04:15**

Now we can immediately see that gap of missing data in the 1990s,

**00:04:19**

but we can also further enrich our visualizations.

**00:04:22**

So for example, we can include annotations for significant dates,

**00:04:25**

which bring a lot more explanatory context into that display.

**00:04:30**

Next, let's assess the relationship between departure delay and arrival delay.

**00:04:35**

Here shown as a heat map using a bin hexagonal grid.

**00:04:39**

And the main trend is, of course, that vertical line,

**00:04:41**

which is showing arrival delays for flights that actually left on time

**00:04:44**

but then arrived late.

**00:04:45**

We also see this strong diagonal line,

**00:04:47**

and that's showing us the density of those flights

**00:04:50**

whose arrival delay largely matches the departure delay.

**00:04:53**

So basically you're late because you left late.

**00:04:55**

And while those are the main trends,

**00:04:57**

these visualizations allow us to see more.

**00:04:59**

We actually see that many other outcomes are also possible,

**00:05:01**

even if they're not quite as likely,

**00:05:03**

and we can see that total space of what happened.

**00:05:09**

And of course, we can recreate those original histograms

**00:05:12**

for arrival delay, departure time, and distance,

**00:05:14**

which earlier we were creating in the database terminal itself.

**00:05:19**

Well, to build these visualizations,

**00:05:21**

we also built a proof-of-concept component library

**00:05:23**

on top of the Mosaic architecture,

**00:05:25**

and these enable diverse visualization and input types.

**00:05:28**

Now, each component interoperates with Mosaic

**00:05:31**

by publishing data needs as declarative queries.

**00:05:34**

They can also publish filter criteria to shared selections,

**00:05:38**

which are then managed by Mosaic.

**00:05:40**

But more specifically, a Mosaic application

**00:05:43**

consists of data-driven components called clients,

**00:05:46**

and these publish their data needs as declarative queries.

**00:05:50**

The Mosaic coordinator then manages these requests

**00:05:53**

and then submits those queries to a backing database.

**00:05:55**

We use SQL, of course, as the query language,

**00:05:58**

and by default we use DuckDB,

**00:06:00**

which can either run locally or in a browser via WebAssembly.

**00:06:03**

Query results are then returned to clients for rendering in the browser.

**00:06:09**

Now, to transport data, we use Apache Arrow.

**00:06:12**

This is a binary format that enables efficient transfer

**00:06:15**

with zero data copy, at least on the client side,

**00:06:18**

and importantly, no subsequent parsing overhead,

**00:06:20**

so we can process the data very quickly.

**00:06:23**

The coordinator also patches these query results

**00:06:26**

for faster responses to repeated queries.

**00:06:29**

It also mediates linked interactions.

**00:06:32**

So, updates from clients or different input widgets

**00:06:35**

can populate dynamic parameters that we call selections.

**00:06:39**

And these can manage multi-ortical filtering predicates,

**00:06:42**

which we can then use to filter the data,

**00:06:44**

triggering new queries to repopulate our displays.

**00:06:49**

Selections resolve updates across multiple clients,

**00:06:52**

and this supports techniques such as cross-filtered views,

**00:06:55**

where interactions in one view

**00:06:56**

can then trigger filtering updates to many others.

**00:07:00**

Now, interactive selections translate to a very small and manageable set of selection types.

**00:07:06**

So, the first of point selections, or point clauses,

**00:07:09**

which select discrete data values,

**00:07:11**

and then translate those to predicates that perform things like inclusion or equality checks.

**00:07:15**

And so here, initiating interactions might include clicking an element in a chart,

**00:07:20**

or selecting options in a menu.

**00:07:22**

But I also want to point out something.

**00:07:23**

This seemingly continuous nature of interval selections,

**00:07:28**

well, if you think about it, of course, actually discrete.

**00:07:31**

So here, initiating widgets might include brushes, sliders, and range sliders.

**00:07:36**

But I also want to point out something.

**00:07:38**

This seemingly continuous nature of interval selections,

**00:07:41**

well, if you think about it, of course, actually discrete.

**00:07:44**

So here, the interval endpoints, you know, the edges of our brush,

**00:07:48**

have at most pixel-level resolution.

**00:07:50**

So there's actually only a few hundred possible options for an endpoint.

**00:07:54**

And the reason this is important is we'll see later,

**00:07:56**

we can actually take advantage of this to optimize how we're processing these selections.

**00:08:01**

But putting it all together, through these abstractions,

**00:08:04**

Mosaic supports expressive, extensible, and interoperable data views

**00:08:09**

that compose diverse visualization and interaction techniques.

**00:08:12**

And again, where all data updates are being handled by our backing analytical database.

**00:08:17**

And so now we can use link selections over charts to perform cross-filtering.

**00:08:22**

So for example, to try and further assess the relationships between the variables that we see.

**00:08:27**

But on every update, filter and aggregation queries are being rerun across the full tables.

**00:08:32**

And unfortunately, this naive approach of requerying the data from scratch is just too slow.

**00:08:38**

So for real-time interaction with large datasets,

**00:08:41**

modern computers and fast analytical databases still need visualization-aware optimizations.

**00:08:48**

For our first example, let's look at an area chart.

**00:08:52**

And so a basic query here would select all the data points we want to render in the chart.

**00:08:57**

In this case, this results in 50,000 rows.

**00:09:00**

Our database really isn't doing anything for us other than just handing us the data.

**00:09:04**

And then we have to handle rendering all of that,

**00:09:06**

which with large volumes can obviously degrade the rendering speed and quality.

**00:09:11**

But in Mosaic, our area and line marks instead apply optimization developed in the database community called M4.

**00:09:17**

This performs pixel-aware binning to reduce the data in many cases by over an order of magnitude,

**00:09:24**

but in a way that's guaranteed not to change how the visualization actually looks.

**00:09:29**

So this is an example of a local optimization based on the known semantics of the visualized data.

**00:09:34**

So we can be smart about how we generate the queries here to get these optimized results for these specific visualization use cases.

**00:09:41**

Putting this together, we can create an overview plus detailed interaction.

**00:09:45**

We duplicate that area chart and then coordinate the two.

**00:09:48**

Such that interactions in the top chart now filter the bottom chart.

**00:09:52**

In this way we can explore the data with both the M4 queries and caching optimizations being applied on every update.

**00:09:59**

But let's further break down another example.

**00:10:03**

We'll come back to these cross-filtered histograms.

**00:10:05**

Here again showing airline data, in this case flight delays and departure times.

**00:10:09**

We bin along the x-axis and visualize counts per bin on the y-axis.

**00:10:14**

And by selecting an interval in one plot, we filter the records shown in other.

**00:10:18**

So again this requires re-aggregating the data on each interactive update.

**00:10:22**

So the core question here is, well how can we do this quickly so that we have low latency responses for the person exploring the data?

**00:10:30**

Well to think through this, let's consider our visualization.

**00:10:33**

This is not something we show to users, but rather a way of thinking through the problem.

**00:10:36**

We can represent the data backing these charts as a two-dimensional histogram.

**00:10:41**

So here imagine we take the cross product between the histogram bins for both charts.

**00:10:45**

And then we can count the number of records in each one of those intersecting 2D bins.

**00:10:50**

And in database terms, this matrix is an example of what we can call a pre-aggregated materialized view.

**00:10:57**

We've pre-aggregated the data from its source form into this intermediate form that's going to be faster to query.

**00:11:03**

So rather than operate over the much larger original input data, we can filter and aggregate just using this matrix as our backing data structure.

**00:11:12**

So let's select an interval to filter by.

**00:11:15**

Now looking only at the column selected by the interval, we can then sub across the rows, in this case, to re-aggregate the data.

**00:11:22**

I want you to stop and think about this for a second.

**00:11:25**

I've simplified the picture here, and we have a problem in actually supporting a richer interaction.

**00:11:31**

And to make that a little bit clearer, let's slide our selection interval over just a little bit.

**00:11:36**

And maybe some of you are starting to realize what the problem is.

**00:11:40**

In this case, our data resolution that I'm showing and also pre-aggregated by is at the level of those histogram bins.

**00:11:47**

However, our interactive resolution should be at the level of screen pixels, not just the histogram bins that we're visualizing.

**00:11:56**

So rather than a bin by bin pre-aggregate like this, we need a pixel by bin pre-aggregate like this.

**00:12:04**

And so now when we select an interval, we still filter to relative columns, but with one column per screen pixel.

**00:12:11**

And then as before, we can sum across each row to re-aggregate the data.

**00:12:16**

But this pre-aggregated materialized view is now specifically for interactions with that histogram of departure times that we see above.

**00:12:25**

To filter from the histogram of delays, we need a different pre-aggregation.

**00:12:29**

We bin by pixels now along that y-axis and then the bins that are along the x-axis.

**00:12:34**

And so now upon each update, we isolate the filter rows and then sum along the columns to re-aggregate the data in the first plot.

**00:12:43**

Hopefully it gives you a sense of how this works.

**00:12:45**

So bringing together Mosaic's optimizations of query caching, consolidating compatible queries,

**00:12:51**

and especially this pre-aggregation, cross-filtering is now super fast.

**00:12:55**

Even with these massive data volumes, it requires only a few milliseconds to actually service that query

**00:13:00**

and then we can render the update.

**00:13:02**

But let's take a look under the hood to see what's going on.

**00:13:06**

Grounding this in actual database queries, a naive selection, one that updates, you know, right,

**00:13:13**

by requerying the full backing table leads to these very slow updates like we saw before.

**00:13:19**

So what the pre-aggregation is doing is instead we're analyzing automatically the current selection semantics

**00:13:25**

and the query structure to automatically generate these pre-aggregated materialized views.

**00:13:30**

Here binning over all pixels that the selection integral endpoints might occupy in order to pre-compute those aggregate results.

**00:13:38**

So then on each update we can instead, again, query this pre-aggregated data, providing substantial speed-ups.

**00:13:44**

But this was only for a very simple aggregation where we're looking at counts.

**00:13:48**

We pre-aggregate those counts and then, of course, we sum those counts to get the final total count.

**00:13:53**

This diagram shows what we're doing a bit more schematically.

**00:13:56**

We first determine the bins that we need to group by and then pre-aggregate the data by counting the number of records in each of those bins.

**00:14:04**

Now these per-bin counts provide what we can call a sufficient statistic.

**00:14:08**

That is, they provide sufficient information for us to then compute the results for filter selection updates.

**00:14:14**

Now given sufficient statistics for each bin, here we just need to sum over those bins that have been interactively selected.

**00:14:21**

But we can apply this same idea to a number of other aggregate functions beyond count, though this often requires more than one sufficient statistic.

**00:14:30**

So for example, to optimize averages, we can pre-aggregate both per-bin averages and the counts.

**00:14:35**

And then we can compute selection updates as weighted averages over those pre-aggregate values.

**00:14:41**

Computing min or max values is straightforward as we can just apply that same aggregation function for both creating the materialized pre-aggregate view and the selection update itself.

**00:14:51**

Our min and our max that can be similarly supported will require two sufficient statistics for min so we can map back from the min or maximum value to the corresponding value associated with that.

**00:15:03**

And don't worry, I'm not going to walk through the details on this slide, but this is demonstrating how we can similarly support more complex aggregates such as standard deviations as well as other statistics such as covariance, correlation, and linear regressions.

**00:15:18**

Okay, does it work?

**00:15:20**

Well, to evaluate the scalability of these optimizations, we conducted performance benchmarks measuring both pre-aggregated view creation and selection update times.

**00:15:30**

We experimented using various visualization designs and configurations, as you can see here.

**00:15:35**

And here are the results.

**00:15:37**

Well, looking at the top row, this shows the creation times for those pre-aggregated materialized views.

**00:15:43**

Here, testing against two different local backends.

**00:15:46**

So either a local DuckDB server that's kind of getting the full memory and the parallelization that your laptop provides, or a DuckDB lab.

**00:15:54**

So using WebAssembly to run in the browser, but of course limited to what the browser allows you to do within that sandbox.

**00:16:00**

And we can see that for up to 100 million input rows, performing pre-aggregation just on the fly is feasible for a local server.

**00:16:09**

As we move into larger data regimes with billions or more rows, that creation latency can grow to multiple seconds and in the worst cases even minutes.

**00:16:17**

But the good news is that additional pre-computation can also be applied at publish time rather than run time.

**00:16:23**

So you can still deploy applications like this by doing the pre-aggregation in advance.

**00:16:28**

The bottom row here shows the query updates times both with and without the pre-aggregation optimizations.

**00:16:34**

And so with pre-aggregation, we're able to maintain rapid interactive rates even with a billion backing rows.

**00:16:40**

But without this optimization, the interactive latency eventually grows too high, rendering the display unusable.

**00:16:47**

We also compared to some other systems, particularly for a flight's histogram example, we looked at Vega Plus and Vega Fusion.

**00:16:54**

And these are systems that perform their own database optimizations.

**00:16:57**

However, in this case, we actually found that these platforms unfortunately perform relatively poorly,

**00:17:02**

as they were already outperformed by Mosaic even without any aggregation optimizations being applied.

**00:17:08**

Okay, so given all this machinery, let's look at some examples of the types of scalable visualizations we can now build.

**00:17:16**

One of my favorites is we can use Mosaic to explore 1.8 billion stars from the European Space Agency's Gaia catalog.

**00:17:24**

Here we've selected higher parallax stars, and this reveals the main sequence of stellar lifespans.

**00:17:30**

Some of you may also know this as a Hertz-From-Russell diagram, showing a plot of star color versus brightness on the right.

**00:17:36**

And of course on the left, you're seeing in density map form a view of our Milky Way galaxy.

**00:17:42**

Turning our attention to the diagram on the right, we can trace the sequence to ask questions like how do these stars distribute in the sky map on the left?

**00:17:50**

And the distribution appears relatively uniform until we brush down to the brightest stars.

**00:17:56**

You might also, like, can't help but notice this big blob in the bottom of the chart.

**00:18:02**

And I mentioned earlier that data quality is really important.

**00:18:04**

Well, it turns out, taking billions of images of the sky and then analyzing them with computer vision techniques leads to a high degree of error in many cases.

**00:18:12**

So this is actually a whole cluster of things where there were data quality problems in processing the data.

**00:18:18**

So again, the visualization helps us reveal things, but also helps us understand our data in ways that maybe helps us avoid analytic failures that more opaque methods might leave us unaware of.

**00:18:28**

Mosaic, as I mentioned, provides a standardized selection abstraction.

**00:18:33**

And this allows linking across tables, visualizations, and input widgets such as sliders, search boxes, and names.

**00:18:39**

And all of these components are linked via dynamic parameters and core data queries.

**00:18:44**

And again, computation of regression models, interquartile ranges, and other transformations are all being automatically pushed down to the database.

**00:18:52**

And meanwhile, we have standard things like table views.

**00:18:55**

And these are actually pre-sectioning data so that as we get infinite scrolling and smooth, they're also not overwhelming our database along the way.

**00:19:04**

And since Mosaic works on top of standard SQL, it can leverage extensions that are built into a database.

**00:19:09**

So here we use DevDB's spatial extension to project geodata and use it to compare New York City taxicab pickups and drop-offs over time.

**00:19:19**

We've also been applying this in our art of day jobs.

**00:19:22**

So for example, in addition to being a professor at Carnegie Mellon, Dominic also runs a team at Apple, where they develop the open source embedding Atlas.

**00:19:29**

This is a local data exploration tool for quickly exploring the embedding of high-dimensional data sets like text and images.

**00:19:37**

And additional fields can be cross-filtered to ask what-if analysis questions.

**00:19:41**

And this application is leveraging those data to coordinate all of these interactions with DevDB, either running again in WebAssembly or locally as a server.

**00:19:50**

If you want to play with this, you can use it directly in your browser with your own data sets by dragging and dropping it in and then exploring the data within the tool.

**00:20:00**

I also recently mentioned, I recently co-founded a new startup called Bridge AI, and it provides composable embedded analytics.

**00:20:08**

So here we're using Mosaic to power the dashboard.

**00:20:11**

It's also combined with an LLM-driven data agent that allows you to ask follow-up questions that maybe the dashboard doesn't support and generate new charts in the process.

**00:20:19**

And both the dashboard and the data agent are using Mosaic to provide interactive linked views and manage all the access to that local database.

**00:20:27**

Which also means your agent can query it as much as you want without you incurring cloud charges or other issues.

**00:20:33**

And I'll write locally here in the browser via WebAssembly.

**00:20:37**

And this project is backed by multiple years of research conducted by my lab at the University of Washington as well as others.

**00:20:44**

And beyond the technical results, one key finding from experimental work that we've done is that making these scalable visualizations fast and highly responsive

**00:20:53**

It isn't just a fun systems nerd out technical problem.

**00:20:58**

It has real significant impacts on the content and depth of analysis that people perform.

**00:21:03**

People ask more questions and develop more hypotheses when their rate of thought is not being impeded by the display.

**00:21:09**

And interestingly, when we actually did experiments and we started people off with a slow display,

**00:21:14**

they actually still acted slower for a while given the faster display.

**00:21:18**

So we actually sort of suffer and it takes a while to recover from the impacts of these very, you know, latency experiences.

**00:21:25**

Okay, let's wrap this all up.

**00:21:28**

To summarize, Mosaic provides a middle-tier architecture that coordinates link selections among different views of data.

**00:21:35**

And it provides automatic query optimizations.

**00:21:38**

So Mosaic clients communicate their data needs as they declare their queries.

**00:21:42**

And then Mosaic's central coordinator manages and optimize these queries on our behalf.

**00:21:47**

And Mosaic unifies the abstractions of popular visualization toolkits.

**00:21:52**

This is inspired by the work we've done over many years on tools like D3, Vega, and Vega-Lite.

**00:21:57**

We're then combining it with leading research on how to best leverage databases and build scalable interactive visualization techniques.

**00:22:03**

Here including the automatic application of these pre-aggregation methods.

**00:22:07**

And doing so we're able to demonstrate, you know, orders of magnitude improvements over existing web-based visualization tools.

**00:22:14**

So if you're interested in playing with this, Mosaic architecture and all of these components are available as open source software.

**00:22:20**

You can go grab it from GitHub.

**00:22:22**

I also want to send an apology on behalf of Dominic who really wanted to be here today.

**00:22:28**

But unfortunately had to return to the States early due to visa complications.

**00:22:32**

However, we did design this talk locally here in Berlin last month while having lunch at a very aptly-made restaurant.

**00:22:39**

Over by the Hop-on-Holfe if you want to go, I give you a minute of fail.

**00:22:45**

So, thank you very much for your attention.

**00:22:47**

Don't want to stand between you and Greg, but I'm also very happy to answer any questions you might have.

**00:22:51**

Thank you very much.

**00:22:53**

You're a busy guy being both a professor and starting startups.

**00:23:05**

Talk about it.

**00:23:06**

Not especially applying cross-continents to speaking conferences.

**00:23:10**

Well, we have a bunch of questions in here.

**00:23:12**

Before we go to break, I'll just pick a couple of representative ones.

**00:23:14**

Thank you.

**00:23:15**

One is for the Gaia example.

**00:23:17**

Does it retain the entire data set in memory?

**00:23:19**

It sounds like it could be too much for browser tech.

**00:23:21**

Oh, actually, yeah.

**00:23:22**

So, in the Gaia example, you're absolutely correct.

**00:23:25**

It would be too much to put in the browser memory.

**00:23:27**

So, to drive that application, what we do is actually load the entirety of the data.

**00:23:32**

It's actually in these compressed CSV files.

**00:23:34**

So, the first thing you do is convert that to a bit more efficient format like Marquette.

**00:23:39**

I'm actually running that locally.

**00:23:40**

And then one of the things that we found, even in case you really want to get into the details,

**00:23:43**

is we don't even load those into DuckDB tables.

**00:23:46**

It has such a great Marquette scanner.

**00:23:48**

And with solid-state storage, you can actually scan it pretty quickly.

**00:23:51**

Which then frees up even more RAM to allow you to quickly manage and build all those pre-aggregate views.

**00:23:57**

And so, that's all being done locally.

**00:23:59**

And it could be done on the fly, using the power of your full laptop with that local DuckDB server.

**00:24:05**

You can also have similar experiences in the browser.

**00:24:08**

But in those cases, what you would do is pre-computation to build some pre-aggregate views

**00:24:12**

that actually service those queries.

**00:24:14**

And then you might load just those and route your queries to that.

**00:24:17**

Which is something that BookMosaic allows you to do.

**00:24:20**

So, would I imagine that maybe the local, kind of everything's on your computer, you don't need to be kind of in the confines of a browser tab.

**00:24:26**

It would be good for your initial explorations.

**00:24:28**

And then the runs in a browser tab would be more like publishing a dataset with a bunch of pre-computed optimizations for someone to do more limited exploration.

**00:24:36**

Yeah.

**00:24:37**

Just demonstrate something.

**00:24:38**

I'd say for up to millions of rows, let's just like, as a verse, I'd say something around 10 million.

**00:24:43**

And a reasonable number of columns.

**00:24:45**

So maybe no more than say two dozen.

**00:24:47**

You can do this purely in the browser with WebAssembly.

**00:24:50**

But beyond that, it helps to be able to kick off to a more fully resource-adducting instance.

**00:24:55**

Makes sense.

**00:24:56**

Last question.

**00:24:57**

Are you using Vega for the rendering?

**00:24:59**

No.

**00:25:00**

So in this case, for the proof of concept here, mostly just for fun to play with and get to learn other people's software,

**00:25:07**

we're actually using Observable Plot by my former student Mike Bostock, who's the lead developer of D3.

**00:25:12**

We're actually, what we're doing at Ridge AI is actually we built an entirely new plotting library in Svelte from scratch,

**00:25:18**

that sort of mosaic native.

**00:25:20**

And that's been a lot of fun.

**00:25:22**

It can also be heard of, but we want to hopefully in the coming month or year make that an open source release as well.

**00:25:28**

Amazing.

**00:25:29**

Please give a round of applause to Jennifer.
