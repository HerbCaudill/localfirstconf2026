---
source: local-first-conf-recording
title: "Solving for scale in open networks"
date: 2026-07-13
speakers:
  - "Paul Frazee"
source_recording: "../../recordings/2026-07-13 - Paul Frazee - Solving for scale in open networks.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/0930-solving-for-scale-in-open-networks"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Solving for scale in open networks

**00:00:00**

I'm the CEO of Luzgat, one of the co-designers of the Ad Park Paul, and the topic I talk is Start From Scale.

**00:00:06**

Adam mentioned a whole bit of my history, but to step through it, I first took an interest in, a direct interest in decentralization around 2012-2013, I was working on Secure Skullline.

**00:00:18**

And for anybody that is not familiar with Secure Skullline, it is an aggressively local-first social network.

**00:00:25**

Peer-to-peer, there was a constraint that Dominic Tarr, the originator of the technology, put on, which was no singletons,

**00:00:32**

which essentially meant no authorities in the system, not even temporary authorities.

**00:00:36**

You would gossip all of your messages along the contours of the social graph, so when your device talked to somebody else,

**00:00:45**

you would do a social graph exchange, and that's how you would decide how messages should flow through the system.

**00:00:50**

It's an intuitive idea, but it meant that there was absolutely nobody that was in charge of that network.

**00:00:55**

Highly resilient, but perhaps some of those coordination challenges.

**00:01:00**

Things like, if you have the ID for a user, how do you reliably find them?

**00:01:05**

There was no DHT, there were no services to ensure discovery, so even having the public key of a user didn't guarantee that you were able to find their profile.

**00:01:13**

Challenges like that eventually led me to look around and see if we couldn't go a little bit, perhaps trading a couple of those designs.

**00:01:23**

So staying in the local-first mentality, I then worked on the Beaker Browser, which is a peer-to-peer web browser using the DAP protocol,

**00:01:30**

that it became known as the HyperCore protocol.

**00:01:33**

And that technology was essentially a variant of BitTorrent, similar in that regard to IPFS,

**00:01:40**

where you shared much more with BitTorrent.

**00:01:43**

In this case, you were using a DHT to discover peers and trying to hole punch with them.

**00:01:48**

For the DAP protocol, we used a Merkle tree, sort of flipped on its side, to provide an append-only log of information.

**00:01:57**

And because there was a Merkle tree, you could actually do partial synchronization of the Merkle tree,

**00:02:02**

which had much better technical properties and things like that.

**00:02:05**

I worked on Beaker for about five years.

**00:02:08**

It was one of those things that you could make the best demo on, but not a great product.

**00:02:14**

But that was the goal, is to make a product that everybody could one day find themselves using,

**00:02:21**

because the theory of change was, if we're trying to get malleability and information access to everybody,

**00:02:26**

that needs to be software that the average person is going to use.

**00:02:29**

That's how you get out to people.

**00:02:31**

And so the fact that the demo was great, but the product didn't stick for most was a big problem.

**00:02:36**

And there were a number of things that we started to look at.

**00:02:40**

In fact, it wasn't just me.

**00:02:41**

It was other people in the P2P community at this time started looking at, with how the P2P system worked,

**00:02:46**

and going, okay, we know we want high-scale information systems,

**00:02:51**

but we're really having trouble making all that work entirely on the edge of devices, especially with mobile.

**00:02:57**

So we had to engage with our requirements a little bit more directly.

**00:03:01**

And this eventually led us to the app protocol, which we now work on.

**00:03:06**

And let me do a kind of a, Marshall had a couple of overviews already, so if you can bear with me for one more.

**00:03:12**

Generally speaking, I like to talk about it as just a new way to publish online like you have always done.

**00:03:19**

Publishing online is a common thing, but it is designed to be a locked open conference.

**00:03:24**

It's something that ensures that it can't get gated by companies that are looking to, for instance, monetize the data set,

**00:03:33**

much like X and Reddit has happened to do in the last few years.

**00:03:36**

It's dispositionally opposed to that.

**00:03:38**

It's trying to create a network that actually ensures that once the data is out, you certainly can't take that back,

**00:03:45**

because this should be something that is communally owned.

**00:03:50**

Nobody, nobody, no company should have exclusive rights to the user's collective activity.

**00:03:57**

On the spectrum of the sort of options here, if the cloud is the way things are normally done,

**00:04:02**

and local first is what we're all here to talk about, which tends to think about the devices being the canonical store of data,

**00:04:09**

and we are of course right in the middle with federated, which is on that spectrum.

**00:04:16**

To develop a little bit of intuition, we love to say it's just JSON.

**00:04:20**

Nothing to be scared about then.

**00:04:22**

The JSON has types in it, so it's actually a strongly typed JSON system,

**00:04:28**

and we call these things lexicons, but they're like JSON schema.

**00:04:32**

It's actually quite familiar to anybody that has done validation previously.

**00:04:38**

It's also hyperlinked.

**00:04:41**

So every user sort of shows up almost like they have a website,

**00:04:45**

and they're publishing JSON instead of HTML.

**00:04:48**

So when I make a post, I'm just sort of publishing on my personal account the post as JSON.

**00:04:55**

If somebody replies to me, they also publish a post, but they include a link to my post in the reply field,

**00:05:02**

saying I'm replying to that post.

**00:05:04**

And then applications aggregate that, almost like a search engine might aggregate the web.

**00:05:09**

And because of the link, the application knows, oh, that's a reply, I should put that in a thread.

**00:05:15**

And that's exactly how Blue Sky functions.

**00:05:18**

And what's quite nice about that is that anybody can aggregate them at any time.

**00:05:23**

So that's where you get that malleability.

**00:05:25**

It's highly remixable because the data is published out there.

**00:05:28**

Other applications can come along and choose new interpretations,

**00:05:31**

new types of data, and so on and so forth.

**00:05:36**

So the name of the talk is Start From Scale.

**00:05:39**

And let's get into why.

**00:05:41**

I think everybody probably has some familiarity with how Blue Sky started,

**00:05:47**

but for those who don't, we were actually created through a grant,

**00:05:51**

sort of positioned as a consultancy to Twitter that was created for a specific purpose.

**00:05:56**

And that purpose was to create an open protocol which Twitter could adopt.

**00:06:01**

And that was in the contract.

**00:06:03**

That was our goal to do.

**00:06:05**

And these are broadly the requirements.

**00:06:07**

We needed to create an open network.

**00:06:10**

We needed to preserve the existing features in Twitter.

**00:06:13**

If they were going to migrate over, we couldn't be dropping things.

**00:06:16**

So that generalized into a no-steps-backward disposition in terms of the UX that people expect out of the application.

**00:06:25**

Then you've got that bottom one, support Twitter scale, which was a tall order.

**00:06:30**

In 2022, when we were starting, Twitter had 240 million DAU.

**00:06:35**

And we needed to do that.

**00:06:37**

We needed to create an open network.

**00:06:38**

We needed to create an open network.

**00:06:39**

We needed to create an open network.

**00:06:40**

We needed to create an open network.

**00:06:41**

And we needed to create an open network.

**00:06:42**

We needed to create an open network.

**00:06:43**

We needed to create an open network.

**00:06:44**

We needed to create an open network.

**00:06:45**

And we needed to create an open network.

**00:06:46**

We needed to create an open network.

**00:06:47**

And we needed to create an open network.

**00:06:48**

And we needed to create an open network.

**00:06:49**

And we needed to create an open network.

**00:06:50**

And we needed to create an open network.

**00:06:51**

We needed to create an open network.

**00:06:52**

And we needed to create an open network.

**00:06:53**

And we needed to create an open network.

**00:06:54**

And we needed to create an open network.

**00:06:55**

And we needed to create an open network.

**00:06:56**

And we needed to create an open network.

**00:06:57**

And we needed to create an open network.

**00:06:58**

And we needed to create an open network.

**00:06:59**

And we needed to create an open network.

**00:07:00**

And we needed to create an open network.

**00:07:01**

And we needed to create an open network.

**00:07:02**

And we needed to create an open network.

**00:07:03**

And we needed to create an open network.

**00:07:04**

And we needed to create an open network.

**00:07:05**

And we needed to create an open network.

**00:07:06**

And we needed to create an open network.

**00:07:07**

So it's a pretty high scale.

**00:07:10**

And definitely a scale that's going to require some different ways of thinking.

**00:07:14**

Than we had done previously in the pure-to-pure world.

**00:07:17**

When you're trying to show a post that has 10,000 likes on it.

**00:07:20**

You're just not going to do that on an edge device entirely.

**00:07:23**

So we sat down and began with that question.

**00:07:28**

How do you scale a service?

**00:07:30**

How does anybody do this?

**00:07:32**

Forget the open network part.

**00:07:33**

How on earth did the Twitter do it?

**00:07:35**

And we thought about it really hard and realized.

**00:07:38**

Well, more servers.

**00:07:39**

Okay.

**00:07:40**

Obviously, it's a little more complicated than that.

**00:07:44**

And we actually drew a lot of inspiration.

**00:07:47**

We'd like to joke that we have our Bible on our desk.

**00:07:50**

And that is, of course, Marvin Clinton's book.

**00:07:52**

So a lot of what I'll talk about are the techniques that we were drawing from him.

**00:07:56**

And learning from what he wrote about.

**00:07:58**

Now here is a diagram of the Twitter architecture in 2022 that Elon posted out.

**00:08:04**

At the time.

**00:08:05**

I've got a simplified version.

**00:08:06**

Don't try to read that.

**00:08:08**

This is specifically regarding how the timeline is served.

**00:08:14**

So this is just a subset of the system.

**00:08:16**

And I've extracted it down relatively significantly.

**00:08:19**

Which we'll see that the API server is getting a get timeline request.

**00:08:24**

And it's going to farm that out to the timeline server.

**00:08:26**

Which in turn has to go to a number of other services to handle specific functions in there.

**00:08:31**

User recommendations.

**00:08:33**

In their case, advertising.

**00:08:35**

What's your onboarding state?

**00:08:37**

What do we need to show them to educate them of their journey and to understand the application?

**00:08:42**

All those, we've got three services up there that don't even touch on the core of what we think of as the timeline serving.

**00:08:48**

That's the ranked poster, which in and of itself is quite a sophisticated piece of technology.

**00:08:53**

Now, in the larger architecture, when the user sends something other than get timeline, like post tweet, you're not going to fan out the tweet to each of those individual services.

**00:09:07**

You're going to send off to some canonical data cluster.

**00:09:10**

The place where you kind of consider your source of truth for all the user activity.

**00:09:15**

And then you're going to consult that from all the different services that are more purpose oriented.

**00:09:20**

And this is again in service of scaling out your system.

**00:09:24**

You're beginning to farm out to these individual services so that you can isolate the workloads.

**00:09:29**

But now you have to engage with this question of how do you ensure that you don't have a bottleneck on the one database.

**00:09:35**

You've got the biggest Postgres in the world and at some point it's really dying on you.

**00:09:40**

So you start to think about your latency tolerances.

**00:09:46**

How long do I really have to make sure that we're serving the user in time?

**00:09:52**

And this is ballpark, but you have these upper latency balance that would be 300 milliseconds.

**00:09:57**

Generally speaking, it's kind of the worst case that you want to be responding to the user.

**00:10:01**

You might get away with that with the timeline, but a lot of things you actually want to be significantly lower.

**00:10:06**

I think most of us aspire to 30 millisecond response times.

**00:10:10**

And that cascades backwards.

**00:10:12**

For every point that you need to go up the chain of satisfying requests, you need tighter and tighter latencies.

**00:10:17**

So load on that user data cluster could be quite a problem.

**00:10:20**

Of course you have outages.

**00:10:25**

And if the outage happens, now your entire system is down because you haven't built any resiliency into your cluster.

**00:10:32**

So you say, of course, here's what we're going to do.

**00:10:36**

We're going to put databases at each of the different services so that we can isolate the workloads.

**00:10:41**

And this is actually the correct direction.

**00:10:43**

This allows you to provide the resilience and provide the read performance at each of these little localized pools of computation in the way that you need.

**00:10:52**

But now you need to think about how you are sending information into these micro databases.

**00:10:58**

You now have a sync problem.

**00:11:00**

You can't do this transactionally.

**00:11:02**

You can't say, just as before, whenever I write a tweet, you can't wait for each of these individual databases to also get written to before you tell the user, yes, we're done.

**00:11:12**

You can do that in some small cases.

**00:11:14**

But generally speaking, now the entire system is your single point of failure and writes are going to take much too long.

**00:11:20**

So you're not going to try to do that transactionally.

**00:11:22**

You're going to try to create some kind of an asynchronous approach.

**00:11:24**

And now you're thinking about problems of distributed systems like messages coming from the database out of order, messages being delivered multiple times, messages getting delivered multiple times, ha, ha, ha.

**00:11:41**

Or the reverse problem.

**00:11:42**

You try to create a system which sends at most once, but that means you risk not sending the message and dropping it entirely.

**00:11:49**

Or maybe the message is not formed.

**00:11:51**

You have service contracts to think about now.

**00:11:54**

What does the receiving server expect?

**00:11:57**

So generally speaking, the way we solve this is with a data replication model of some kind.

**00:12:02**

And we use technologies like Kafka to do this, which is a pull-based sync mechanism.

**00:12:07**

You write the event log of the canonical data source into something which can be pulled from by each of these services.

**00:12:14**

And this is a very resilient way of approaching this question of how you sync a data set, a canonical data set, throughout all of these caches in your cluster.

**00:12:25**

You tend to do this with event logs.

**00:12:27**

And this is kind of a Kafka versus RabbitMQ argument.

**00:12:30**

If you think about anybody sitting down to try to create an architecture, you're going to make more or less this choice.

**00:12:35**

You could use RabbitMQ to sync out your data cluster, but it's a messaging system.

**00:12:39**

It's a message broker.

**00:12:40**

And message queues are ephemeral.

**00:12:42**

They target specific services.

**00:12:43**

They don't support replay.

**00:12:44**

They highly help the system.

**00:12:46**

So they're really designed more for things like scheduling an email to get sent to users.

**00:12:50**

Or scheduling a push notification to get sent out.

**00:12:53**

They're not really suitable for things like data replication.

**00:12:56**

Whereas an event log like Kafka, it's durable to a tunable amount.

**00:13:00**

You can choose how long in the history you want to maintain.

**00:13:03**

It broadcasts out.

**00:13:04**

Anybody can pull from it at any time.

**00:13:06**

And consequently, they can replay from it at any time.

**00:13:09**

And it has a little coupling.

**00:13:10**

This is really nice because if you have a partition in your network, some service goes down.

**00:13:14**

It's actually quite straightforward to bring it back up to sync with the canonical data store.

**00:13:19**

You just have it replay from the database to catch up.

**00:13:22**

So there's a lot more resiliency in the event log approach.

**00:13:27**

So this is a very common approach to how you scale a high-scale system.

**00:13:31**

Obviously, there are many other things that you have to do to handle Twitter's original scale.

**00:13:35**

But we will tend to use many different services that are decoupled from each other.

**00:13:39**

And they can be custom-fixed to the particular workload that they have.

**00:13:42**

So an ads server is probably going to need an analytics database.

**00:13:46**

But a user recommendation server might need a graph database.

**00:13:49**

That's a pretty reasonable approach.

**00:13:51**

So you want to have different databases for the different tasks.

**00:13:53**

And now that you're replicating out from your canonical data store,

**00:13:56**

you can actually do this kind of testing.

**00:13:58**

The particular sort of miniature applications that each of the services are providing.

**00:14:02**

You do this with event queues, and you have the canonical store at the center,

**00:14:06**

and you cache that canonical store throughout all of the dependent services in the cluster.

**00:14:14**

We were talking about open systems at some point.

**00:14:17**

So why don't we remember that, yes, this is just one piece of the puzzle.

**00:14:21**

We actually need this to be in cooperation with many other services that look much like this.

**00:14:27**

So we'll go ahead and introduce this symbol to represent an entire cluster,

**00:14:30**

this little triangle symbol.

**00:14:32**

It's going to be one of these clusters.

**00:14:34**

And now we're going to try to make them work together

**00:14:37**

to provide more or less the same application, but in an open fashion.

**00:14:43**

Well, now we have to deal with the wide area network, which is slow.

**00:14:47**

And I put over 300 milliseconds just to point out that the forward 300 milliseconds are upper bound.

**00:14:52**

And now we're looking at something which is frequently higher than that.

**00:14:55**

That's a problem.

**00:14:56**

It's unreliable.

**00:14:57**

It can be hostile.

**00:14:58**

And if you really think about the properties of this thing, you start to think about,

**00:15:02**

well, okay, because it is slow and it has these problems, you start to run through a campaign transaction.

**00:15:07**

That sounds familiar.

**00:15:08**

You have out of order delivery.

**00:15:09**

Messages delivered multiple times.

**00:15:11**

That response means likely zero amount of messages and unbound outages.

**00:15:15**

And then messages getting delivered multiple times.

**00:15:18**

So it's actually the same category of problems that we were dealing with before.

**00:15:22**

And so this was our basic thought.

**00:15:24**

Like, oh, you know what?

**00:15:25**

This is kind of an equivalent problem.

**00:15:27**

The same problems that you have scaling up an internal data center to provide a high-scale service

**00:15:32**

is actually quite similar to the problems that you have inside of an open network.

**00:15:36**

Both of them are high-scale engineering in a distributed system challenges.

**00:15:41**

So we try to use the same solution, which is data replication.

**00:15:47**

And so instead of using Kafka, we built an open protocol which does data replication.

**00:15:52**

And for your canonical user store, you have the user data network instead of a single database

**00:15:57**

inside of your data center.

**00:15:59**

And the replication stream moves not just within your cluster to all of the services that you have,

**00:16:04**

but also to external organizations and their clusters.

**00:16:08**

And you create this fire hose of data, which I think many people have heard us talk about.

**00:16:15**

So this is what it looks like perhaps a little bit more in the app front of the flavor.

**00:16:20**

You have each of the personal data servers.

**00:16:22**

These are the canonical data stores, but they're hosted throughout the internet.

**00:16:26**

Sometimes on our servers.

**00:16:28**

Sometimes on people's droplets that they're renting, perhaps at a home lab.

**00:16:33**

They all provide data replication streams.

**00:16:37**

And the applications can subscribe to their streams and adjust them in to create applications.

**00:16:43**

So it's the exact same model as before.

**00:16:48**

If you look closely, it's the same slide.

**00:16:51**

That's the idea.

**00:16:52**

We decided to essentially apply our Kotlin to an open network.

**00:17:01**

We also added a little bit of cryptography into the system in that the messages, the records,

**00:17:07**

that the users write into their common store are signed at rest.

**00:17:10**

Meaning that you can prove their authenticity without having to speak to the database directly.

**00:17:15**

You don't have to ask the PDS, is this actually from you?

**00:17:18**

You can check the cryptography, the signature on the data and say, yes, this is in fact from that user.

**00:17:24**

Which is why it's called the AT protocol.

**00:17:26**

It stands for the Authenticated Transfer Protocol.

**00:17:29**

So that provides some nice benefits.

**00:17:32**

One of them is a nice optimization, which is entirely optional.

**00:17:36**

That's the relay, which are services that go ahead and do that listening to all of the PDSs

**00:17:41**

on behalf of the applications.

**00:17:43**

And then the applications can just go to a relay and say, hey, I will take the combined stream

**00:17:48**

so that I don't have to go through that talking to each PDS for myself.

**00:17:54**

Nice for the application developers, but actually also nice for the PDS operators

**00:17:58**

because it means they have to engage with fewer people.

**00:18:01**

It creates a sort of optional emergent star topology

**00:18:04**

to reduce the overall complexity of the network.

**00:18:07**

Not strictly necessary.

**00:18:08**

You can always do without the relay, but it helps.

**00:18:14**

So this is, broadly speaking, how we try to define the replication model we put in.

**00:18:18**

We wanted to have strong dataset completeness guarantees.

**00:18:21**

If I am interested in a user's data, I need to know that I have all of it.

**00:18:25**

I don't want to drop any of their messages.

**00:18:27**

I don't want to drop their replies.

**00:18:29**

I need a good protocol for ensuring that I can sync entire user datasets

**00:18:33**

so I can give them a good application experience.

**00:18:35**

We wanted to provide fewer message ordering, but at least once delivery

**00:18:39**

so that I don't, again, have to worry about dropping information.

**00:18:43**

We knew that partitions would be common.

**00:18:45**

These servers are going to go out all the time.

**00:18:47**

So you have to be able to recover from that.

**00:18:50**

And we also wanted low coordination.

**00:18:52**

We didn't want to have to be concerned that at the time of write,

**00:18:55**

you had to talk to some other service that might not have the software written

**00:18:59**

the right way or have some incompatibility that causes it to fail.

**00:19:02**

So we wanted this to actually be a highly decoupled system, especially at write time,

**00:19:06**

so that every time you could figure out how to recover from perhaps an incompatibility.

**00:19:11**

So a very low coordination system.

**00:19:13**

And then with the signed data stored forward as it is in the case of the relays.

**00:19:19**

I like to sometimes say that RSS was really darn close to what we ended up building.

**00:19:24**

It is almost kind of like a small data replication protocol.

**00:19:29**

And so the RSS comparison tends to resonate with people who are especially first learning about the app protocol.

**00:19:35**

They go, "Oh, okay. I understand the RSS shape. That's actually quite similar."

**00:19:39**

I also know that Jan is here, and I had to check with him before I put this slide and say this with him.

**00:19:50**

You know, this is an applaud line every time.

**00:19:52**

The CouchDB lovers know what I'm talking about.

**00:19:55**

It was so close.

**00:19:57**

The cross-organizational database replication was amazing.

**00:20:00**

The two-tiered model for Couch apps was so exciting.

**00:20:05**

It was almost there.

**00:20:06**

They ended up choosing to focus in on some things.

**00:20:08**

But as Jan was saying, we're really leading the way out of a lot of stuff that ended up becoming

**00:20:12**

how we do computing now.

**00:20:17**

Okay.

**00:20:18**

This is something that I do like to clarify and is often asked.

**00:20:20**

And so just to handle this quickly, I think that this event log versus message passing orientation

**00:20:26**

is a pretty good way to look at the difference between the two.

**00:20:29**

Activity Pub takes a much more message passing orientation, and the app protocol takes

**00:20:35**

the event log orientation.

**00:20:37**

We are a data replication network.

**00:20:39**

We are not a message sending network.

**00:20:42**

It's a difference of disposition.

**00:20:44**

This in particular affects the data set of completeness guarantees.

**00:20:48**

We feel that we have a much easier time ensuring that we are getting all of the data,

**00:20:52**

whereas the message passing orientation can struggle to do that much.

**00:20:55**

As I said before, if you were using Rabbit and Q, instead of the Couch inside of your data center,

**00:21:00**

you're having the same challenge.

**00:21:02**

So that's one of the technical core differences between the activity of an app protocol model.

**00:21:08**

So we are here to talk about local first property.

**00:21:11**

And so now that we talk about the intersection or the relation between the app protocol and local first,

**00:21:16**

which generally speaking has to do with scaling down.

**00:21:19**

There are two different methods for scaling down inside of the app protocol.

**00:21:24**

Here you are with your smaller server wanting to participate in the system.

**00:21:28**

You don't want all the data perhaps.

**00:21:30**

You want something that is designed for a smaller community.

**00:21:33**

How is that done?

**00:21:35**

Well, the simple answer is to just get less of the data.

**00:21:38**

Ask for fewer of the data, fewer of the repositories, choose a subset, and sync just them.

**00:21:44**

And that works absolutely fine.

**00:21:46**

You're just going to be working with a subset of the network.

**00:21:49**

There are a couple of different techniques for it.

**00:21:53**

But at the end of the day, you're going to resolve and fetch users as needed instead of in totality.

**00:21:58**

You're going to be selective about who you pull.

**00:22:00**

You'll do these crawls based on some kind of logic.

**00:22:04**

For instance, a social graph is a really good way to do that.

**00:22:07**

You might say every time a user logs in, the SSB heads will know where I'm going with this one.

**00:22:12**

I'm going to go ahead and sync the user that logged in and then I'll look at their follows and I will pull their follows too.

**00:22:18**

And maybe I'll pop one friend of a friend and pop upwards and I'll get them too.

**00:22:23**

And you can kind of build a social cluster oriented limited subset of the network.

**00:22:28**

And frankly, I think that's the most fun way to do it.

**00:22:31**

But you can also use things like the discovery services.

**00:22:35**

The relays, well, optionally, but at least ours has an endpoint called List Repos by Collection,

**00:22:41**

which tells you about all of the repositories that might have some particular lexicon there in their repository,

**00:22:47**

such as a Tangle repository or an NPMX Live or something like that.

**00:22:52**

And you can get a subset about what kind of applications that they're engaging with

**00:22:56**

and choose that subset and filter out the dominant form of content, which would be the blue sky content.

**00:23:02**

So you can choose the particular users this way.

**00:23:05**

You can also still offload some of the queries to somebody else if you need it,

**00:23:08**

much like using microcosm or blue sky service service, things like that,

**00:23:12**

to patch in some of the missing information but keep most of your system entirely on your small device

**00:23:18**

and just make sure that you're not highly dependent on those queries,

**00:23:23**

that it's an optional part of the system.

**00:23:25**

And just to give an intuition for what this is like,

**00:23:28**

I don't think I'm kind of beating a horse at this point,

**00:23:30**

but here you have all the network, all the users interacting with each other,

**00:23:33**

and you're just going to slice it down.

**00:23:35**

Okay, option two is to bootstrap subnetworks.

**00:23:40**

And this is essentially going off the app protocol, right?

**00:23:43**

You reuse the user identity system that exists there.

**00:23:47**

That is anchored in DITs.

**00:23:49**

DITs have DIT documents, and DIT documents can distribute key material and service pointers.

**00:23:55**

And so they're quite handy for helping to introduce other kinds of protocols on top of the app protocol.

**00:24:04**

Those, of course, get matched to domain names and those user profiles become searchable in services like blue sky.

**00:24:12**

And so you can take advantage of user search and discovery to help connect with people,

**00:24:17**

to find the DIT documents and then get to the key material and things like that.

**00:24:21**

And then you can form subnetworks with the members.

**00:24:23**

Now we've been, I think, variously talking, I don't know if it's been mentioned in any of the talks,

**00:24:28**

but permission data has a proposal now for the app protocol.

**00:24:32**

This is a new upgrade to the app protocol to have non-public data.

**00:24:35**

And this is more or less, the subnetwork premise is more or less how the permission data proposal,

**00:24:41**

which is called permission spaces, is designed.

**00:24:44**

So if you have these nodes together, they are an app call, then the permissions data is little baby app calls

**00:24:55**

that are being bootstrapped off of the main net.

**00:24:58**

And you do this by declaring the space and declaring the members of the space

**00:25:02**

and then forming a little site network with them where you're going to be exchanging records

**00:25:07**

with very similar semantics to the public network, but entirely off with just the people

**00:25:13**

that you want to be sharing them with.

**00:25:16**

But this is a generalizable approach.

**00:25:19**

You can do this with any kind of protocol that you're interested in.

**00:25:22**

And I think actually Jake Lazarus yesterday demonstrated that quite well

**00:25:25**

by bootstrapping a web RTC connection using that protocol to do the signaling.

**00:25:30**

You can set up any kind of network if it is of use to you using the app protocol.

**00:25:36**

So we see these as being complimentary in a pretty significant way.

**00:25:41**

The atmosphere is designed to handle high scale.

**00:25:44**

It's not fine to be a local first network.

**00:25:46**

But it is creating space for it.

**00:25:48**

And it is useful to do, to take advantage of it, to help bootstrapped local first networks

**00:25:53**

and perhaps cut down on the number of problems that you have to deal with

**00:25:57**

whenever you're working on a local first system.

**00:25:59**

All right, now I was talking to Daniel about this and he sort of jokingly said,

**00:26:06**

"We should come up with an acronym for this."

**00:26:08**

And then we had fun thinking about that.

**00:26:10**

And then he came up with something that's so dumb that we had to hear it.

**00:26:14**

So that would be, of course, the low-fat network.

**00:26:19**

Same great taste, now the clowery.

**00:26:24**

Ha-ha.

**00:26:29**

All right then.

**00:26:33**

So, to summarize, we started from scale.

**00:26:38**

Scale was a requirement for this project.

**00:26:41**

Historically, I think, perhaps if I had thought more about what I was trying to do before working at Blue Sky,

**00:26:47**

I might have really grappled with this sooner.

**00:26:49**

But eventually, it became clear, certainly for Blue Sky, that we had to think about this from the scale requirement.

**00:26:56**

And so, app protocol is designed for global identity, global discovery, and global data publishing.

**00:27:04**

But that is just the requirement that we have.

**00:27:07**

And that is why, having come from the local first community, we moved into this federated world,

**00:27:11**

is to make sure that we were meeting the requirements.

**00:27:15**

We ultimately concluded to think about this as a distributed systems challenge,

**00:27:19**

like anybody trying to create a high-scale service thinks about a distributed systems challenge.

**00:27:24**

Your server links are bad, whether it's inside of your data center or over the internet.

**00:27:29**

So you can apply the same techniques.

**00:27:31**

You decouple your workloads.

**00:27:33**

Make sure you have good synchronization and guarantees.

**00:27:36**

And you isolate the faults inside the system.

**00:27:39**

And that is it.

**00:27:42**

So, thank you all very much.

**00:27:43**

Wonderful. Thank you.

**00:27:57**

So, I'm really curious about this, kind of the small nodes.

**00:28:01**

You know, the one you represented with the brackets and the three dots.

**00:28:04**

And you sort of, I assume you have long tail.

**00:28:06**

You have some huge ones that your company runs.

**00:28:08**

There's probably some big-ish ones.

**00:28:11**

And then probably long tail, really tiny ones.

**00:28:14**

And I feel like the case of, okay, Twitter and other big-scale companies need to, you know,

**00:28:20**

maybe have three homogenous, large data centers that all have this problem.

**00:28:24**

But it feels like quite a unique thing, perhaps even unprecedented to do it with the hugely different scale of those things.

**00:28:32**

What are some of the challenges you've had with that?

**00:28:34**

Or has it been working pretty well with this design so far?

**00:28:36**

I think that the technical approach generally works pretty well.

**00:28:40**

But it can be challenging, I think, for new developers to get in.

**00:28:44**

So, there's a tooling challenge in front of us.

**00:28:46**

It's going to get it better.

**00:28:48**

On the technical side, the goal that you have is to make sure that the cost and the complexity scales with how much you're trying to actually pull in.

**00:28:56**

So, if you're trying to do a big network mini, you're going to just have the laws of physics kick in.

**00:29:00**

You have a lot of data dealing with.

**00:29:02**

So, that ends up being your first cost scale.

**00:29:04**

And then your second one ends up being the number of local users on your node that you're dealing with.

**00:29:09**

And as long as it actually stays proportional to those two things, we're in business.

**00:29:13**

And so far that isn't, broadly speaking, how it's played out.

**00:29:17**

But, interesting tools like the Realize Discovery System before just giving the repositories that fit a particular application.

**00:29:25**

That was just something where, for instance, they came along later and realized, oh, that is a huge benefit.

**00:29:30**

Somebody was just trying to do something new so that they could prop out a lot of good activity.

**00:29:37**

One question we have is, there was a little mention of PLC in the protocol discussion.

**00:29:42**

Can you do a quick overview of what Bills and why it's design was chosen?

**00:29:47**

Yeah.

**00:29:48**

In one sentence.

**00:29:49**

In what sentence?

**00:29:50**

Two sentences.

**00:29:51**

Oh, I'm sure that's higher than that one.

**00:29:53**

Yeah, you're challenged.

**00:29:54**

PLC stands for the Public Ledger of Credentials.

**00:29:56**

It's a registry which is going to be an internet organization that we think of as, hopefully, if I can.

**00:30:04**

And that is how that works.

**00:30:06**

But, I don't know what my absence is.

**00:30:09**

It's kind of the name service.

**00:30:11**

It maps the unique non-human readable ID to the DIT document so that you can look up the keys.

**00:30:20**

That sounds like a good topic for discussion over lunch, I would say.

**00:30:25**

Last question.

**00:30:26**

Someone asked, they understand AppProto better.

**00:30:29**

Why would you use it for WebRTC signaling of its data storage?

**00:30:33**

Yeah, that makes sense for messaging, but this is actually a replicated database.

**00:30:38**

Does AppProto have any program for message passing or should we be leaving that to use in AppProto?

**00:30:45**

We don't currently have plans to introduce message passing.

**00:30:49**

We might, but we don't currently.

**00:30:52**

I think Jake made a really good case for why you might go ahead and use that protocol to do this,

**00:30:56**

which is that its infrastructure which is available.

**00:30:58**

The PDF is there.

**00:31:00**

And especially once permissioned spaces lands, you know, you can just clean up those old signaling documents at some point.

**00:31:06**

But if it makes life easier, then go around.

**00:31:08**

Yeah, maybe it just feels funny to put something so ephemeral in the permanent record forever.

**00:31:13**

Well, permissioned spaces are pretty throw away, probably.

**00:31:16**

You know, so.

**00:31:18**

Makes sense.

**00:31:20**

A round of applause for Paul.

**00:31:21**

Thank you.

**00:31:22**

Thank you.
