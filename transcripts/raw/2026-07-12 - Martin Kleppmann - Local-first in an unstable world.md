---
source: local-first-conf-recording
title: "Local-first in an unstable world"
date: 2026-07-12
speakers:
  - "Martin Kleppmann"
source_recording: "../../recordings/2026-07-12 - Martin Kleppmann - Local-first in an unstable world.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/0930-local-first-in-an-unstable-world"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Local-first in an unstable world

**00:00:00**

...have this community here back in Berlin again. And in a place like Berlin, which is a lovely city, but which is also a city full of history, the history is never far away.

**00:00:12**

And one of the things I was reflecting on preparing for this talk was what happened here in 1989, which was of course the fall of the Berlin Wall,

**00:00:21**

which was this momentous moment in European history, which now has come to symbolize the end of the Cold War, the start of the new era of, you know, the last 35 years of really remarkable peace and prosperity, at least here in the global north.

**00:00:40**

And that is sort of like some guiding point here that I want to use in this talk.

**00:00:48**

There's also something else quite remarkable that's happened in 1989. I don't know how up-to-date any of you are on your history.

**00:00:56**

This chap called Tim Berners-Lee wrote a proposal for something that was then going to become the World Wide Web, or the web as we know it today.

**00:01:05**

Now, of course, it's not really causally related to the fall of the Berlin Wall, they just happened to be in the same year.

**00:01:11**

But I do feel there is actually an interesting connection there between the sort of politics level that happened at that time and the technological changes that this movement in a way kicked off.

**00:01:25**

So, on the political level, as I said, we moved in 1989, roughly speaking, from the Cold War era to the post-Cold War stability era.

**00:01:36**

And at the same time, on the technological side, we had the internet prior to 1989.

**00:01:42**

The internet was a product of the 1970s when ARPANET was developed.

**00:01:47**

And, but what started with the development of the web is that, of course, the internet became much more mainstream.

**00:01:54**

And, you know, the average population started using the internet, mostly through websites.

**00:02:02**

And then the growth of these large centralized websites then led to the development of cloud computing in order to provide the computing resources required to build those large web properties.

**00:02:16**

And so, on a very high level, it seems like we had a trend where prior to the web era, things were focused on protocols, like email was a pre-web technology.

**00:02:28**

And then later on, we kind of, email still exists, of course, but we moved towards more of a centralized model where there are products provided by companies that are the central way of how people are thinking about their communications.

**00:02:41**

Similarly, with social networking, the pre-web social networking was Usenet, but Usenet, in the end, was not able to cope with the growth in users and spam.

**00:02:54**

And so, we ended up with the centralized social networks instead.

**00:02:59**

And so, on a high level, there seems to be this trend where if we break this very simplistically into two eras, there's like this protocols era previously, which was very open, open for innovation.

**00:03:12**

And then since then, a move toward much more closed products and platforms.

**00:03:17**

Obviously, they still use protocols, like everything still uses HTTP and TLS and TCP and so on, but the locus of control is much more centralized in these things.

**00:03:30**

And that's really quite a difference compared to the prior design of the Internet, which was designed to be very decentralized.

**00:03:38**

So, people argue to what extent the ARPANET and the Internet were designed to be resilient against nuclear strikes, being a Cold War era technology design.

**00:03:51**

Probably, it was not actually one of the main design concerns, but actually, this idea that the Internet is resilient against, you know, if you knock out one of the network links, the network as a whole still continues working.

**00:04:03**

If one of the sites goes down, the network as a whole continues working, it's built with resilience in mind.

**00:04:10**

So, in this shift from this sort of pre-web to post-web era, I think a lot of positives happened, and I do want to emphasize that as well.

**00:04:19**

In particular, I think the user experience got massively better.

**00:04:22**

The reason why people use a lot of these centralized platforms is because, on the whole, they actually provide a pretty good user experience,

**00:04:30**

whereas the sort of protocols, technical, geeky technologies that preceded them, you know, often just were not quite as convenient to use.

**00:04:42**

Another big thing was spam and abuse.

**00:04:45**

As I said, that's what brought down Usenet.

**00:04:47**

It was just not able to cope with the massive influx of spam and abuse, whereas the centralized platforms have done a reasonably good job of combating that.

**00:04:56**

And another thing that we gained through the centralization is efficiency, actually, because generally doing things in a decentralized way is less efficient than doing them in a centralized way.

**00:05:07**

If you need to have multiple copies of the data in lots of different places, and then some cryptography to validate that the integrity is all there, that is doing additional computational work that you don't have to do if your data is all in one place.

**00:05:21**

But those are the positives, of course, there's a big negative that we got from this move towards centralization, and that's a reduced resilience against things going wrong.

**00:05:33**

So, that is like my sort of nutshell history of the last 80 years, and what I would like to argue is that unfortunately this era of peace and stability that we've enjoyed for the last approximately 35 years seems to no longer be holding up so well.

**00:05:48**

It's looking a bit ropey, to be honest, and there are several factors for this, I think one is, as Adam already said, AI is, you know, it's just becoming a thing.

**00:06:00**

Whether you like it or whether you don't, it looks like it's going to be the biggest technological disruption in our lifetimes.

**00:06:06**

It will probably have some positive effects, it will probably have lots of negative effects, nobody really knows what those effects are going to be, but we can certainly count on things being interesting in the coming few years.

**00:06:20**

Another thing which is just plainly sad is that, well, the big power rivalry that, of course, dominated the Cold War and then subsided after the fall of the Soviet Union, that big power rivalry seems to be back in geopolitics.

**00:06:35**

And war in Europe is back. The war in Ukraine has been grinding on for years now, and it's still as terrible as it's been all along.

**00:06:41**

And then, finally, what is very upsetting to me is that, unfortunately, it seems like the US is no longer a reliable ally of Europe.

**00:06:50**

And we can see this in several different ways.

**00:06:53**

One particularly pointed way was when US President Trump, six months ago, posted these things and made these announcements about wanting Greenland to be part of the US, which, obviously, Europe and Denmark were not so happy about.

**00:07:09**

And this made me then think that, you know, what if this actually goes wrong? What if he's serious?

**00:07:18**

This was six months ago, so you might think, actually, six months is an ancient time in politics.

**00:07:22**

Probably Trump has forgotten about this in the meantime, but I'm sad to inform you that at the NATO summit just a few days ago, Donald Trump repeated his calls for Greenland to be part of the US.

**00:07:34**

So what if this really did go horribly wrong and the tensions over Greenland escalated?

**00:07:39**

Well, what would happen then?

**00:07:40**

Well, it seems very likely that some sort of trade sanctions would be the very minimum of what would happen between the EU and the US.

**00:07:48**

And trade sanctions could affect all sorts of different industries.

**00:07:52**

In particular, they could affect computing services because computing services are actually quite a large point of leverage.

**00:08:01**

So what if that left Europe suddenly, with very little warning, locked out of all US cloud services?

**00:08:07**

In case you think I'm being hysterical, he is the economist who wrote six months ago, a year ago, it would have been absurd to worry about European access to American technology.

**00:08:16**

But as Donald Trump recklessly exploits the transatlantic alliance over Greenland, an executive order limiting American AI firms' business in Europe no longer seems unthinkable.

**00:08:27**

Some European restrictions on American technology, including the computing clouds where AIs reside, are also plausible.

**00:08:34**

This is talking about AI, but you can substitute the word cloud in there and it would be equally true.

**00:08:40**

And, well, that was six months ago.

**00:08:42**

Well, what has happened in the meantime?

**00:08:43**

Well, in the meantime, we have seen the US demonstrating their willingness to lock foreigners out of American technology, as they did just a few weeks ago with limiting the access of the anthropic fable model to US citizens only.

**00:08:58**

In fact, anthropic did then just block everybody's access, but the state, the requirement from the US government was specifically to block foreign access.

**00:09:08**

And in case you're thinking this is, you know, it's just software and AI, it's not just that, it's like everything is software nowadays.

**00:09:14**

Software has eaten the world, including tractors or software.

**00:09:18**

And so there was this funny story in 2022, a few years ago, just after Russia invaded Ukraine, the Russian army stole a bunch of agricultural machinery from a dealership in Ukraine aiming to sell it on.

**00:09:33**

But the American manufacturer of this machinery, John Deere, remotely disabled this machinery and then the Russians had a bunch of tractors that wouldn't drive anymore.

**00:09:43**

And so, you know, this is, maybe, maybe it's funny, maybe it's tragic, I don't know, maybe it's a good use of this kind of remote access, maybe not, we can argue about that either way.

**00:09:53**

But it seems pretty clear that there's a lot of power there put in the hands of people who might not necessarily share our own interests.

**00:10:03**

And coming back to cloud specifically, what would the impact be if Europe was suddenly locked out of US cloud services?

**00:10:10**

Well, here, there's a graph of the market share of European cloud providers in the European market for cloud services.

**00:10:19**

And you can see from the yellow line that over the years, the market share of European cloud providers has actually gone down,

**00:10:27**

while at the same time, the size of the market has increased massively,

**00:10:30**

and about 15% of the European cloud market is now served by European cloud providers.

**00:10:36**

Contrast that with AWS, Azure and Google Cloud, which together have 70% of the European market.

**00:10:44**

In other words, Europe is completely dependent on US cloud services, and it would be really hard to migrate off them in a hurry.

**00:10:54**

And this unfortunately then creates points where geopolitically pressure can be applied.

**00:11:01**

If you remember back in 2022, just after Russia invaded Ukraine, of course, Europe wanted to put up sanctions against Russia as like one measure of trying to respond here.

**00:11:17**

And this was quite a problem for Germany, because at the time, Germany was highly dependent on imports of natural gas from Europe.

**00:11:25**

And so, like, there was this desire to block all imports of Russian gas, but at the same time, Germany was so dependent that there was a risk that in the winter of 2022-2023,

**00:11:35**

the German population would be freezing, unable to heat their homes because of the lack of access to Russian gas.

**00:11:42**

And this was then, you know, something that limited the ability to respond to Russia with sanctions.

**00:11:50**

And in the end, we got lucky because that winter was fairly mild, so the gas demand was low,

**00:11:55**

and Germany was able to very quickly build up a bunch of infrastructure for importing liquid natural gas.

**00:12:01**

And so, in the end, no freezing happened, but it was a tense time.

**00:12:06**

And you could very easily imagine something similar happening with cloud services in some unspecified near future,

**00:12:15**

where the point of dependency on American technology becomes a point of geopolitical leverage.

**00:12:23**

Now, to be clear, I don't want to be overly alarmist here.

**00:12:26**

I think the actual probability of a conflict between Europe and the US is still very low,

**00:12:31**

and I very much hope it stays so.

**00:12:33**

Nobody here wants that conflict to happen.

**00:12:36**

But my point is that a year ago, I would have said the probability of such a conflict is zero.

**00:12:42**

Now, it's non-zero.

**00:12:44**

I don't know what it is.

**00:12:46**

But it is sufficiently non-zero, I would say, that it's worth thinking about carefully

**00:12:51**

and start taking measured steps towards mitigating that risk

**00:12:57**

in case things were to go horribly wrong,

**00:13:00**

because the impact would be so huge if a conflict did arise.

**00:13:06**

So all of this work can be packaged under the banner of technological sovereignty,

**00:13:11**

and we are here at Local First Conf.

**00:13:13**

And so I was thinking about, to what extent can Local First actually be something

**00:13:18**

that helps support technological sovereignty?

**00:13:22**

To what extent is Local First part of the answer here?

**00:13:27**

So let me briefly introduce what Local First is.

**00:13:30**

I'm sure all of the people in this room know what it is.

**00:13:32**

Otherwise, why did you buy a ticket to Local First Conf?

**00:13:35**

But maybe for those watching this video online later on, just a very quick one-minute summary.

**00:13:40**

So in the typical cloud model, which is the dominant way of building software as a service

**00:13:45**

and web apps today, you have a cloud service.

**00:13:48**

It has a database.

**00:13:49**

There's some data stored in the database.

**00:13:50**

That's the primary copy of your data.

**00:13:52**

If any users want to access that data, they do so typically via a web browser or mobile app,

**00:13:57**

which is just a thin client.

**00:13:59**

So any data that the client wants, it has to fetch from the server.

**00:14:03**

Any data that the client wants to store, it has to upload to the server.

**00:14:07**

And, you know, this works fine.

**00:14:11**

And most of the web works this way, but it has this huge degree of centralization in that cloud service.

**00:14:18**

And what Local First is is essentially saying, let's invert the relationship here.

**00:14:23**

Let's say we will make the copy of the data that lives on the user's own device,

**00:14:27**

we will make that the primary copy.

**00:14:30**

And we might still have some services.

**00:14:32**

I'm not totally against cloud services.

**00:14:34**

I just want to knock them down a level, deprioritize them.

**00:14:38**

I'm going to say that the cloud services that are involved here are really just a mechanism

**00:14:43**

for backup and data synchronization between users' devices to enable collaboration between users.

**00:14:50**

Of course, we still want all of that real-time collaboration that we know and love from cloud software.

**00:14:55**

But we can still do that in a way where the user's local copy is primary and the copy in the cloud is secondary.

**00:15:02**

And what that enables, if we have that relationship, is that we could have, for example, multiple different sync services, potentially by different providers.

**00:15:10**

And we could just use those sync services side by side, because a sync service is no longer special in the local first world.

**00:15:17**

It's no longer the authority on what the data is.

**00:15:19**

And if you're doing this, you can then even go a step further and potentially sync peer-to-peer directly between the devices of the collaborators.

**00:15:28**

So why is this a good idea?

**00:15:29**

Well, in 2019, we wrote this essay introducing the term local first software, and in this essay, we identified seven ideals that we thought local first software should at least aspire to, if not satisfy.

**00:15:45**

I won't go through all seven, but just to summarize the key ideas from these briefly, our idea was that we want a good user experience by making the user interface really fast.

**00:15:55**

That's enabled by local first, because you're not waiting on network route trips.

**00:15:59**

If the data is really local to the client, you just load the data locally without having to wait for a potentially slow networker.

**00:16:05**

Another thing this enables is being able to work offline, because if you've got the primary copy of the data locally on your own device, it doesn't matter whether you have an internet connection right now.

**00:16:15**

You can just read and write your local copy, update it, edit it, whatever you like, and then sometime later, when you get an internet connection back, then you sync it to your server and to the other collaborators.

**00:16:25**

And finally, local first software allows us to be what I call incredible journey proof, that this is a reference to this classical Tumblr here, our incredible journey, which catalogs these announcements by startups who are shutting down their products, often after the startup got acquired, where the startup founders gush about what a wonderful journey they had building the startup.

**00:16:48**

And thank you to all of our users and investors who allowed us to have this, go on this incredible journey.

**00:16:55**

And by the way, here's a zip file containing some JSON that you can't reload into any other software.

**00:17:01**

And we're giving you two months to download your zip file, and then all of your data is gone.

**00:17:05**

So what we want with local first is also to make a software resilient against the company that made the software going out of business.

**00:17:15**

And we can do that, well, if the software still continues working locally on your machine, even if the software provider is gone.

**00:17:23**

And if you can still sync the data via a service from a different provider to your collaborators, even after the original creator is gone, then we have achieved incredible journey proof software.

**00:17:35**

But another thing that was sort of the underlying thread of all of this 2019 essay was a focus on user agency, giving users more control, better privacy, better security over their own data.

**00:17:51**

And this really summarizes the whole philosophy of what we originally articulated local first as being, as being really focusing on the benefits to the end user that local first offers.

**00:18:03**

But then since we wrote that essay, we actually realized that there's some other benefits as well, which we completely failed to notice and write down in our original essay, which are to do with benefits for the app developer.

**00:18:14**

We realized that actually writing software, writing client-side apps against the sync engine is a much nicer programming model than writing them against the REST API.

**00:18:23**

Because with the REST API, you have to worry about, like, what if the request failed, if timed out, did the data actually get to the server or did it not?

**00:18:31**

How do you tell the user about the fact that this request failed?

**00:18:34**

What do you do now?

**00:18:35**

Do you still allow the user to edit?

**00:18:37**

All of those problems just go away if you just use the sync engine, because you're just reading and writing local data, and then the sync engine takes care of the annoying distributed systems problems of getting the data to other devices.

**00:18:49**

And also, if you can rely on a backend that's provided by somebody else, then you don't need a backend team anymore, which is also tremendously empowering for the app developer.

**00:18:57**

But then, thinking about this even further, I realized that we don't only have benefits to the user and the app developer, but coming back to this point about geopolitics, with which I started this talk, is that actually, local first also gives us this resilience against getting locked out by an entire country, potentially.

**00:19:17**

And that is really a benefit, not so much just to the individual user or to the app developer, but a benefit to society as a whole, by making society more resilient against geopolitical blackmail.

**00:19:32**

And so the fundamental thing that enables this is decentralization, and decentralization could mean different things.

**00:19:50**

It could mean simply avoiding dependence on a single server, a single point of failure, but thinking somewhat bigger, really, it means also avoiding dependence on any one company, so that if that company goes out of business, you can still continue working.

**00:20:05**

And even thinking even further, avoiding dependence on any single country, so that even if that country were to lock you out, you can still keep working.

**00:20:13**

And so, for avoiding dependence on a single server, well, we have existing distributed systems techniques for doing that.

**00:20:20**

That's what distributed systems is all about, really.

**00:20:22**

Avoiding single points of failure, we do that through replication, having a copy of the data on multiple devices, and that gives us full tolerance.

**00:20:29**

This is very well understood stuff.

**00:20:31**

But if you want to avoid dependence on a single company, then really what you need is the ability to easily switch from one provider to another, and then that avoids lock-in in a single provider.

**00:20:42**

Ideally, what you would like is even to be able to use multiple providers side-by-side, so that if one of them disappears, you don't even need to do a migration, but the data is already somewhere else, and you just keep working with the other providers seamlessly.

**00:20:55**

And if you want to go even further now and avoid dependency on any single country, actually, that's pretty much the same as avoiding dependence on a single company, it's just that you're also using providers based in different countries.

**00:21:07**

So, really, the core idea here is making it easy to switch providers is the fundamental enabling primitive that then gives us these nice desirable properties.

**00:21:19**

And how do we make it easy to switch providers?

**00:21:21**

I would argue the right answer is commoditization.

**00:21:24**

So, this is a term from economics.

**00:21:26**

Commodity is just a product that you can get from multiple suppliers, and they're basically the same.

**00:21:31**

If you don't care which supplier you got it from, you can just buy it from the cheapest, for example, because it's an interchangeable product.

**00:21:38**

So, if you buy a bag of wheat flour, generally, you don't care particularly which farmer grew it, unless, like, it's very specialized flour, and you really care about that particular farmer.

**00:21:48**

But, on the whole, you can bake your loaf of bread equally well, regardless of which farm the wheat came from, because it's a standardized product.

**00:21:56**

And so, it's a commodity.

**00:21:59**

And so, what enables this commoditization is standardization.

**00:22:02**

It needs that there's a standard that writes down how fine are the grains of the flour, so that the flour that you get from one manufacturer is interchangeable with the flour that you get from a different manufacturer.

**00:22:13**

Now, a great success story of standardization is, of course, the internet.

**00:22:18**

And the internet has enabled this huge amount of innovation to flourish.

**00:22:24**

You know, you can have collaborative docs, you can have video calls, you can have email, social media, transfer your files, chat, streaming video, whatever you like.

**00:22:31**

So many different things you can build, and they all go over the same internet.

**00:22:35**

They all go over the same internet protocol, and in terms of the protocols, we say that then this internet protocol, IP, is the narrow waste of this stack.

**00:22:46**

This is the internet hourglass.

**00:22:48**

And maybe you argue that nowadays actually HTTP is the narrow waste.

**00:22:52**

Doesn't really matter.

**00:22:53**

Either way, there's a protocol that essentially everything goes over, and that is our points at which we apply the standardization.

**00:23:01**

Once you've been designed on this protocol, it's very hard to change it again, hence the difficulty of migrating to IPv6.

**00:23:08**

But actually, it's still a great thing, because it means that on top, you can have lots of different applications, and they can all just rely on this common protocol.

**00:23:16**

Underneath, you can have lots of different networking technologies.

**00:23:19**

You can have Wi-Fi, wired ethernet, you can have cellular data on your phone, you can have wired fiber backbone, you can have satellite internet.

**00:23:26**

And all of these are just underlying infrastructure that you really don't care about, because they all serve IP, and because they all serve IP, you can run all of these different applications over it.

**00:23:37**

But this is really just for communication.

**00:23:40**

It doesn't really tell us anything about persistent state or state synchronization.

**00:23:45**

And so, this made me think, like, if we want this benefit of standardization in the context of Local First, we probably also need a similar hourglass.

**00:23:55**

What does the hourglass for Local First software look like?

**00:23:59**

Because on top, we have lots of different Local First applications that we want to build.

**00:24:03**

You know, there are collaborative docs, there's notes, there's spreadsheets, graphics editors.

**00:24:08**

Underneath that, underline are various different CRDT libraries, there are lots of people building CRDT libraries.

**00:24:13**

That's a great thing, we want to have that diversity of different data models, different approaches, different trade-offs.

**00:24:19**

We have version control systems, which are another form of collaboration.

**00:24:22**

What is a common standard that all of those things could live upon?

**00:24:28**

So that underneath that, we can have also a flourishing of lots of different SYNC providers from different providers, SYNC servers from different providers, but also self-hosted SYNC servers, if you feel like self-hosting, or peer-to-peer SYNC, if you are able to establish a peer-to-peer connection between your devices, and end-to-end encryption.

**00:24:45**

What does that narrow waste look like that provides that commonality?

**00:24:50**

Now, we at INC and SWITCH have been working on a protocol and a data structure called sedimentary, which I don't really have time to talk about today.

**00:25:00**

There's not very much information about it online yet either, so this is really just kind of a little teaser that we are thinking about this.

**00:25:07**

We are not sure yet whether this is actually the right answer, but we are at least thinking about this problem,

**00:25:12**

and we invite others to also think about the problem of what could a good narrow waste look like for local-first software.

**00:25:19**

So, to wrap things up, what is local-first software and why does it exist?

**00:25:24**

I told you what we articulated initially in our essay on why local-first software was this idealistic vision for software that ETA serves users by enhancing user agency,

**00:25:38**

giving users better control over their own data.

**00:25:40**

And that remains as true as ever, and there will be a lot of talks about user agency at this conference,

**00:25:45**

and I think it's wonderful that this conference has broadened the scope now so that it's not just about CRDTs in the narrow sense,

**00:25:53**

but user agency in the broad sense.

**00:25:55**

But, as I said earlier, that's not the only thing we care about.

**00:25:58**

Actually, there's also pragmatic reasons for wanting local-first software.

**00:26:02**

It makes life easier and better for app developers as well.

**00:26:05**

And in doing so, it hopefully enables a larger ecosystem of software to flourish.

**00:26:11**

If we make it cheaper to build software, we can have more different software.

**00:26:14**

That's excellent.

**00:26:15**

But even that is not everything.

**00:26:17**

I want to encourage you to also think big.

**00:26:20**

Think not just at a personal level and at the pragmatic app developer company level, but potentially at the societal level as well.

**00:26:28**

And I believe that actually local-first software is also here is a strategic bet to improve the sovereignty and the resilience of our democratic societies.

**00:26:39**

Thank you very much.

**00:26:40**

Thank you.
