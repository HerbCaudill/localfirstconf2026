---
source: local-first-conf-recording
title: "Building more resilient local-first software with atproto"
date: 2026-07-12
speakers:
  - "Jake Lazaroff"
source_recording: "../../recordings/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1130-building-more-resilient-local-first-software-with"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Building more resilient local-first software with atproto

**00:00:00**

And my job was to figure out a route between them. I didn't like any of the trip planning apps that I found, so I made my own.

**00:00:08**

It was heavily inspired by an ink-and-switch case study called Embark.

**00:00:12**

Like Embark, it was this rich text editor with a map bolted onto the side, and you could really quickly move between these loose and formal notes and a structured itinerary that you could visualize.

**00:00:23**

And it was collaborative. You could send someone a link and work on an itinerary together in real-time.

**00:00:31**

I built it as a local-first web app, which was a CRDT library called YJS and an open-source sync server.

**00:00:39**

Except, to avoid a big cloud-player bill, I used to manage virtually the sync server.

**00:00:46**

About a year later, the developer was acquired, and the sync server went away.

**00:00:50**

So what happened to the app?

**00:00:53**

In one case, in one sense, it's a local-first-success group.

**00:00:57**

There's no incredible journey.

**00:00:58**

You can still work on and collaborate with others on your documents, your itineraries, if you have to take a little bit.

**00:01:07**

But I think that's a low bar.

**00:01:09**

Without the sync server, we're back in this free cloud workflow where you're sending these files back and forth and back and forth.

**00:01:17**

And like a lot of you, I've been noodling on these problems for some time.

**00:01:22**

And they're tough problems, right?

**00:01:24**

Because you do need infrastructure in the middle to have this multi-device functionality.

**00:01:29**

But as soon as you run that infrastructure yourself, you become the single point of failure for your app.

**00:01:35**

So I've been pondering, and not long after last year's local first con, I became interested in AppRoto.

**00:01:41**

You may also know it as ATRoto or AppRotoCall.

**00:01:45**

The exact name is sort of an ongoing bike shed within the community.

**00:01:50**

But whatever you call it, it exists to escape this status quo architecture here, where you have a service that has your private data locked behind an application server.

**00:02:01**

That's the only way to access it.

**00:02:03**

This person here is frowning because she needs to pay Twitter like $6,000 a month or whatever to access her own tweets.

**00:02:10**

AppRoto, in contrast, gives each user their own data in a place that they control.

**00:02:16**

And apps simply request access to it.

**00:02:19**

The difference becomes even more stark when you look at multiple apps.

**00:02:24**

In the status quo architecture, each app has its own separate silo with a slice of your data.

**00:02:29**

But in AppRoto, all apps write their data to the exact same place that you control.

**00:02:36**

Further, there's no, like, cordoned-off area that each app has within your data.

**00:02:41**

Each app can write to whatever you give it access to.

**00:02:45**

So if you wanted to make, like, an alternate loose guy client,

**00:02:48**

it's very easy to have it adversarially edit any data that loose guy creates for you.

**00:02:54**

You might think that this makes development more difficult.

**00:02:58**

But AppRoto gives us a bunch of very useful primitive functionality.

**00:03:02**

Storage that developers don't need to worry about maintaining.

**00:03:06**

Find brand authentication to users' data and identity.

**00:03:09**

And push updates of any changes across the entire network.

**00:03:12**

These are powerful capabilities.

**00:03:14**

A lot of the time, they're the difference between an app that can just be a bunch of static files

**00:03:20**

and one in which you need to maintain a server in the database.

**00:03:23**

So let's look at how this works in a bit more detail.

**00:03:30**

We'll start with a client.

**00:03:31**

Let's say blue sky on your phone.

**00:03:34**

That client authenticates with a PDS, a personal data server.

**00:03:38**

That's the name for the place for all your data links that you control.

**00:03:42**

So the client authenticates.

**00:03:44**

It can read and write data.

**00:03:45**

And those writes get forwarded to a relay, which aggregates the distributed event model changes from all the PDSs into one single firewalls.

**00:03:57**

At the end of the line, there's something called an app view.

**00:04:00**

Now in theory, an app view is just a materialized view, like a cache, for data from PDSs and relays.

**00:04:08**

But in practice, a lot of apps use it as an application server, positioning it between the clients and the PDSs where it takes actions on the user's behalf.

**00:04:19**

Sometimes, there's even a private database that can only be accessed via the app view or some of the data it's stored.

**00:04:25**

So you might be noticing a problem here.

**00:04:28**

The PDS and relay both have standardized behavior and they're run by third parties.

**00:04:33**

That the app view is this component that's bespoke to your app, that you're responsible for developing, maintaining, and generally keeping available.

**00:04:41**

The good news is, the app view is an optional piece of this puzzle.

**00:04:46**

You can make your app look like this.

**00:04:48**

And the more I think about it, the more I am convinced that this architecture can give us much more resilient local first apps.

**00:04:57**

So I'm going to show off three experiments in that spirit.

**00:05:01**

Each one is just a bunch of static files with this collection of primitive functionality from the PDS and the relay.

**00:05:08**

There's no app view or other application server handling the dynamic behavior here.

**00:05:15**

The first experiment was a collaborative text editor.

**00:05:19**

I think of this as the hello world of local first apps because the off-the-shelf components are so good that it's relatively easy to throw something together quickly.

**00:05:28**

I chose pros mirror and YJS.

**00:05:32**

The main difference between this and something like Google Docs is that your data is stored in the user's PDS rather than a private database that I control.

**00:05:41**

So I want to go into a little bit more detail about how a PDS works.

**00:05:45**

Technically, a PDS can hold multiple users' data.

**00:05:49**

Each gets what's called a repository.

**00:05:51**

People tend to use these terms interchangeably.

**00:05:53**

So when I speak of a PDS, I'm specifically referring to one user's repository.

**00:06:00**

And that repository is akin to a NoSQL database.

**00:06:04**

Instead of tables, there are collections.

**00:06:06**

Instead of rows, there are JSON documents called records.

**00:06:11**

So, Alice and Bob want to collaborate on a document.

**00:06:15**

The first step is Alice editing a document on her own.

**00:06:19**

Whenever a YJS document changes, it emits an update event containing a binary description of that change.

**00:06:26**

Alice will take each of those update events, the descriptions, and write them as records of her PDS.

**00:06:33**

Here's what they look like.

**00:06:34**

You can see they each have the update encoded in ACP4 and a document's ID.

**00:06:39**

To load a document from her PDS, Alice will get all of these records, filter down to just the ones for her document ID, and then use YJS to merge them.

**00:06:49**

Because YJS is a CRDT, this works out fine.

**00:06:51**

At the end of the process, she has a full document in memory that she can view and edit.

**00:06:57**

But what about collaboration?

**00:06:59**

Alice and Bob can each only write to their own PDS.

**00:07:03**

How can they edit a single shared document?

**00:07:06**

Alice will write a metadata record to her PDS, only one for the document.

**00:07:12**

It has a document ID and a list of people with whom she'd like to collaborate.

**00:07:16**

That DIG PLC alphanumeric string there identifies Bob's account.

**00:07:21**

Once she's written that record, she can send that metadata URI to Bob.

**00:07:26**

When he has that, he can use it to fetch that record from her PDS.

**00:07:31**

Once he has the record, he goes through all of the collaborators, fetches the updates from their PDSs, and replicates them to his PDS.

**00:07:39**

So he has a full copy of the data.

**00:07:43**

That would bring Alice and Bob up to date whenever they open a document with the other peer exchanges.

**00:07:48**

But we want to see updates as they have it live.

**00:07:52**

The key there is that any writes from the PDS are forwarded to the relay in more or less real-time.

**00:08:00**

So Alice and Bob each connect to the relay, and when another collaborator makes a change and writes to their PDS, it gets forwarded over the relay to their client.

**00:08:09**

They can merge it and display the updated document as it happens.

**00:08:16**

So we're essentially turning Adfrotto into an ersatz YJS 6-order.

**00:08:20**

So I'm going to show a demo of this.

**00:08:22**

Here's my little text editor.

**00:08:24**

On the left, there's my main account.

**00:08:26**

On the right, we have my alt.

**00:08:28**

And there's dev tools that show what's happening under the code.

**00:08:32**

There's no editors.

**00:08:33**

There's no objects here.

**00:08:34**

I'll type below.

**00:08:36**

You'll see the record coming in my PDS.

**00:08:38**

And it pops up on the other screen.

**00:08:41**

You can see that it's keystroke by keystroke.

**00:08:43**

This is the binary kind of displayed visually.

**00:08:46**

But it's not replicated to the other PDS yet.

**00:08:48**

That's because the other account is not an editor.

**00:08:50**

Oops.

**00:08:51**

I'm going to add JSFault.MSguide.social as an editor here.

**00:08:57**

And we should see, as that happens, these updates will come through.

**00:09:03**

And you can see them replicated now to the other PDS.

**00:09:06**

And I can type now on this side, the first conf, and the updates will get replicated back.

**00:09:13**

We can also hit pause.

**00:09:14**

This simulates the network going away with a bunch of changes on either side.

**00:09:24**

And when we hit play, it syncs up again.

**00:09:27**

And all the records are replicated.

**00:09:29**

So that is elaborate text editing in real time over at Proto with no dedicated syncs for it.

**00:09:36**

There is one drawback to this approach.

**00:09:45**

And it's that all the updates for a document are sort of smeared over these different records here.

**00:09:50**

There's no cohesive document.

**00:09:53**

We have to reconstitute it.

**00:09:55**

And even if you do do that, you get the YJS document absolutely to understand the structure of it in order to do anything meaningful with it.

**00:10:06**

It makes it difficult for other at Proto apps to interoperate.

**00:10:09**

So experiment number two was figuring out what a more at Proto-dated series team is.

**00:10:14**

The case study here was a collaborative to-do list.

**00:10:19**

Once again, Alice and Bob want to collaborate.

**00:10:22**

Alice writes some to-do items to her PDS.

**00:10:25**

This is what they look like.

**00:10:27**

The goal here was for the JSON to be what it would be if their collaboration were not an issue here at all.

**00:10:35**

It was a totally single-player app.

**00:10:37**

These records are legible to other apps as a standalone record.

**00:10:41**

That's the foundation.

**00:10:42**

Any CRDT stuff needs to happen on top of this.

**00:10:46**

What I chose to do was add this CRDT object to every record.

**00:10:50**

Other apps can simply ignore it.

**00:10:52**

But this is the metadata that will help us collaborate.

**00:10:56**

If you're familiar with CRDTs, you might recognize these as last-reference registers.

**00:10:59**

What that means is on edits to a field, we increment the clock by one, and in merging them, we simply pick the field with the higher clock.

**00:11:09**

But the granularity here is by field, so if I type some edits to a text box, you check off what to do.

**00:11:16**

Those edits will never complete.

**00:11:18**

The rest of this looks very similar.

**00:11:20**

Alice has its metadata record.

**00:11:22**

She adds Bob as an editor, sends in the QRI, a band.

**00:11:26**

Bob fetches that from her PDS, then fetches the to-do items from all the collaborators, merges them and replicates them to his own PDS, and then they connect to the relay to get a lot of updates.

**00:11:39**

There's one big difference here that's worth mentioning.

**00:11:41**

Before, we were appending updates to a collection, so we know that concurrent updates will never conflict.

**00:11:48**

But now we're writing over records in place, so it's not safe to make changes concurrently to the same record.

**00:11:56**

AppRoto provides a way to guard against this, called the parent swap.

**00:12:00**

When you are updating a record, you can give a hash of what you expect, and if the hash doesn't match what the PDS has, it will reject the update.

**00:12:09**

When that happens, you can just fetch the latest version of the record, merge it, memorise it, and retry it right.

**00:12:16**

Because these are CRT's, any two records can be merged, so we can retry this process as many times as we need until it just works.

**00:12:25**

So here I have another demo, here's a to-do list, once again, the left side is my main account, the right side is my all, and we have all these to-do items, and you can see that we don't need to go through the list of records and figure out how they all fit together, each one is kind of meaningful on its own.

**00:12:44**

So I'm going to show you by making changes, you should show up on the other side.

**00:12:49**

I'm going to show you.

**00:12:56**

I'm going to refresh real quick.

**00:13:03**

All that happens, I will add my all to the list of editors.

**00:13:19**

There we go.

**00:13:20**

Okay.

**00:13:21**

We're back.

**00:13:22**

All the changes are back on the other side.

**00:13:23**

If we look, now that I'm an editor of my all, when I make changes, they should, the items should be replicated to the PDS.

**00:13:34**

We can see that practice talk is false, finish line is true, if I make changes, they'll replicate back, and if I pause to simulate the network going away, I can make changes to the same item, and when I press play again, they will sync out together.

**00:13:56**

So, that is collaborative to-do editing with a more new app-coto-native CRD team.

**00:14:07**

The last demo is something that affectionately called app-protocol, video chat over app-coto.

**00:14:13**

You just type in someone's handle, and a message pops up on their screen saying that they have an incoming call.

**00:14:23**

It uses WebRTC to connect the two peers, and so I'm going to go over briefly how an RTC works.

**00:14:28**

First, Alice connects to something called a stun server to get her public IP report.

**00:14:33**

These servers are totally commoditized.

**00:14:35**

Many big internet companies run them, and you can use them for free with no sign of requiring.

**00:14:42**

Once Alice has that information, she'll send it over to Bob in a process called signaling.

**00:14:46**

Usually this involves some sort of web socket server.

**00:14:50**

If Bob wants to accept the call, he'll also stun, and he'll send that information back to Alice over the same channel.

**00:14:57**

Once either of here has the other's information, they'll send packets, and hopefully one reaches their destination and they can connect directly.

**00:15:05**

The key here is that WebRTC signaling is transport agnostic.

**00:15:10**

So in the same way that we use @proto as a nayshift CRDT sync server, we can also use it as a nayshift WebRTC signaling server.

**00:15:19**

So first, Alice stunts.

**00:15:21**

She writes a record to her PDS containing the information that she got from the stun server.

**00:15:26**

Here it's truncated, and naming Bob as the recipient.

**00:15:29**

That record makes its way over to Bob, who needs to already be listening on the relay for any records that come through addressed to him.

**00:15:37**

If Bob wants to answer, he will also stun, write his own record to the PDS that gets forwarded to Alice, and eventually they will hopefully start sending packets and make the connection.

**00:15:48**

So, now it's time for a somewhat risky conference demo, riskier than the last one.

**00:15:53**

This QR code sends you to @protocol.jakelazaroff.com.

**00:15:57**

So if you already have an @protocol account, via any BlueSky, or Tangled, or your own PDS, you can go there and call me.

**00:16:04**

My handle is jakelazaroff.com.

**00:16:09**

It's top-related here, you can just hit call.

**00:16:13**

I will confess that I did test this backstage, and our wifi is not amenable to actual peer-to-peer connections.

**00:16:20**

So I checked this "turn server of shame" button, which inserts a man in the middle between the two.

**00:16:26**

From the clients, it's kind of the same from their perspective.

**00:16:31**

They're just connecting to another peer, but this proxies everything through.

**00:16:34**

So it's not totally decentralized, but that's not peculiar to this demo.

**00:16:40**

So that's a common tip for peer-to-peer applications.

**00:16:43**

Nothing's going to do.

**00:16:44**

I have my phone here.

**00:16:45**

I'm going to try and do it.

**00:16:47**

Let's see.

**00:16:53**

Oh, here we go.

**00:16:57**

Someone's called.

**00:16:58**

Let's see.

**00:16:59**

All right.

**00:17:00**

Let's see if this works.

**00:17:01**

Here is the author.

**00:17:02**

This is like the record that's come through from you.

**00:17:04**

Yeah, that's great.

**00:17:05**

Okay.

**00:17:06**

Great answer.

**00:17:07**

Send answer.

**00:17:08**

Oh.

**00:17:09**

More opportunity.

**00:17:10**

Yeah.

**00:17:11**

Okay.

**00:17:12**

Hi-fi don't film me now.

**00:17:13**

Oh.

**00:17:14**

Didn't pick the other person.

**00:17:15**

No.

**00:17:16**

All right.

**00:17:17**

Let me try one more time.

**00:17:18**

Here we go.

**00:17:19**

Something's happening.

**00:17:20**

I just want to go over some turns.

**00:17:21**

I'm going to go over some turns.

**00:17:23**

I'm going to go over some turns.

**00:17:24**

Yeah.

**00:17:25**

Oh.

**00:17:26**

I'm going to try one more time.

**00:17:27**

I'm going to try one more time.

**00:17:28**

Here we go.

**00:17:29**

Something's happening.

**00:17:30**

I'm going to go over some turns.

**00:17:32**

I'm going to try one more time.

**00:17:33**

I'm going to try one more time.

**00:17:34**

I'm going to try one more time.

**00:17:35**

I'm going to try one more time.

**00:17:36**

I'm going to try one more time.

**00:17:37**

I'm going to try one more time.

**00:17:38**

I'm going to try one more time.

**00:17:39**

I'm going to try one more time.

**00:17:40**

I'm going to try one more time.

**00:17:41**

I'm going to try one more time.

**00:17:42**

I'm going to try one more time.

**00:17:43**

I'm going to try one more time.

**00:17:44**

I'm going to try one more time.

**00:17:45**

I'm going to try one more time.

**00:17:46**

I'm going to try one more time.

**00:17:47**

I'm going to try one more time.

**00:17:48**

I'm going to try one more time.

**00:17:49**

I'm going to try one more time.

**00:17:50**

I'm going to try one more time.

**00:17:51**

I'm going to try one more time.

**00:18:02**

I'm going to try one more time.

**00:18:04**

I'm going to try one more time.

**00:18:05**

I'm going to try one more time.

**00:18:06**

I'm going to try one more time.

**00:18:07**

I'm going to try one more time.

**00:18:08**

I'm going to try one more time.

**00:18:09**

I'm going to try one more time.

**00:18:10**

I'm going to try one more time.

**00:18:11**

I'm going to try one more time.

**00:18:12**

I'm going to try one more time.

**00:18:13**

I'm going to try one more time.

**00:18:14**

I'm going to try one more time.

**00:18:15**

I'm going to try one more time.

**00:18:16**

I'm going to try one more time.

**00:18:17**

I'm going to try one more time.

**00:18:18**

I'm going to try one more time.

**00:18:19**

I'm going to try one more time.

**00:18:20**

I'm going to try one more time.

**00:18:22**

I'm going to try one more time.

**00:18:23**

I'm going to try one more time.

**00:18:32**

All right, I'm going to move on for real.

**00:18:37**

But I do have a way to maybe rescue this.

**00:18:39**

Because WebRTC doesn't only let you send video to other peers.

**00:18:45**

You can also send arbitrary data.

**00:18:47**

So you might have noticed this text editor.

**00:18:50**

It's not quite real time.

**00:18:51**

And throttling updates to stay below the PDFs rate limits.

**00:18:55**

So, I think this is a problem for the Wi-Fi.

**00:19:01**

It shouldn't come through, but it's much lower right now.

**00:19:04**

If I press - I'm going to wait for this to refresh -

**00:19:11**

When I press this little turtle icon, it should turn into a rapid.

**00:19:25**

And we'll connect via @torto and also the RTC.

**00:19:41**

Refresh to the other end.

**00:19:43**

Refresh session.

**00:19:52**

Okay.

**00:19:53**

So we're loading the document.

**00:20:07**

Once this connects, the update should be more or less instant.

**00:20:11**

Use this pattern to add real-time behavior to any local first app.

**00:20:19**

So we'll try this now.

**00:20:22**

And YJS is really good at this sort of thing.

**00:20:25**

You just connect the multiple transports like @torto and WebRTC.

**00:20:32**

And it just kind of figures everything out on the fly for you.

**00:20:37**

But it doesn't look like this is working.

**00:20:39**

So you'll have to take my word for it.

**00:20:42**

Thank you.

**00:20:43**

Okay.

**00:20:50**

So there's three demos.

**00:20:52**

Two working properly.

**00:20:54**

Local first apps to the very after.

**00:20:57**

But why do it this way?

**00:20:59**

Why use these constraints of no application server and only the TDS and reload?

**00:21:05**

I think a lot about this quote from 18-switch.

**00:21:08**

Where servers are used, we want them to be as simple, generic, and fungible as possible,

**00:21:14**

so that one unavailable server can easily be replaced by none.

**00:21:18**

Further, these servers should ideally not be centralized.

**00:21:21**

Any user or organization should be able to provide servers to serve their needs.

**00:21:26**

For a while, I thought that this meant to just use an open source server.

**00:21:31**

So that if the app developer stops providing it, someone else can step up in their place.

**00:21:36**

But what I think will happen in 99% of cases is exactly what happened to my app.

**00:21:41**

No one steps up to do that and the app remains broken.

**00:21:45**

So I sour on that interpretation.

**00:21:50**

Instead, what I think we should do is stop treating every app like an island and build on shared infrastructure.

**00:21:59**

We do this already.

**00:22:00**

Like no one is sitting around wondering how their app will resolve the main names to IP addresses.

**00:22:06**

Someone somewhere is running EMS resolvers.

**00:22:10**

But we mostly just take them for granted because we've collectively invested in the shared infrastructure

**00:22:15**

that makes this stuff just work.

**00:22:19**

So my thesis is that we're getting there on App Store.

**00:22:22**

There are multiple independent PDS posts.

**00:22:26**

And it's relatively easy to host one yourself.

**00:22:29**

You can do it on a Raspberry Pi.

**00:22:30**

There are multiple larger apps that host full network relays that anyone can use for free.

**00:22:35**

And if you really need more complex aggregation than what you can get out of the box with a PDS and relay,

**00:22:42**

there are projects like Microcosm that run community-supported infrastructure to get through those aggregations

**00:22:48**

without running your own We Spoke Avenue.

**00:22:52**

At the first Local First Conf, Martin Kleppman talked about the Local First Endgame,

**00:22:57**

a standardized sync protocol that multiple services could implement.

**00:23:02**

Apps would point at one of those services.

**00:23:04**

And if it went away for whatever reason, they could just point at another one.

**00:23:09**

AppRoto is pretty new.

**00:23:12**

It was not built with this in mind.

**00:23:14**

But I think it's the best shot that we have right now at that Local First Endgame.

**00:23:20**

And you can build this stuff on it today.

**00:23:23**

So, if you want to build this stuff, hit me up and let me know what you're doing.

**00:23:29**

Try it out and improve on what I've done.

**00:23:31**

Come up with a WebRTC demo that works at a conference.

**00:23:34**

Yeah, thank you so much for the first conference, Penriola.

**00:23:37**

I feel like shared infrastructure that is more commodity is a concept we've been circling a lot in the last year or so.

**00:23:53**

And the fact that this infrastructure already exists, starting with Moose Guide, but of course now spreading out from there is a really compelling opportunity.

**00:24:06**

Alright, we've got time for a couple of questions here.

**00:24:08**

Just checking the Discord.

**00:24:09**

So, someone asks:

**00:24:12**

Great use of the protocol for syncing, but it does feel like we're working around the restriction that PDSs don't allow other users to write correctly to them, so we have to replicate and relay data across a lot of users.

**00:24:27**

So, the protocol and support for PDSs to allow collaborative editing on a document on your own device in the PDFs.

**00:24:34**

Maybe, I mean, that would definitely make things more efficient, I think, but if you think about it the way that I've done it here, where each user replicates changes to their own PDS.

**00:24:48**

It's sort of like file level sync, how file sync works, right?

**00:24:51**

You get changes from other peers and replicate them to... you merge them into your local file.

**00:24:57**

And, you know, we just saw Martin up here a couple of talks ago talking about how this sort of distributed source of truth, like the primary data in multiple places, actually makes us more resilient to outages or, you know, hostile countries, what have you.

**00:25:16**

So, we could do that, but I think that this replication is actually a feature, rather than a bug.

**00:25:23**

How would you compare the difficulty of running PDS to other kinds of infrastructure, say DNS servers, where do you now?

**00:25:30**

I have never run a DNS server, so that seems to be a persistent, like, issue in all these big cloud averages, so I would guess probably easier.

**00:25:42**

And the last question, then, is did you finish building your travel point account?

**00:25:47**

I did finish building it, but I haven't rebuilt it since the sync server went away, and my goal now that I've stopped spending all my time on this talk is to do it with AdRoto, the implementation that I described.

**00:26:03**

All right, so do this for us. Port it across, come back, it's next year, and give us a report on how things turned out.

**00:26:10**

Hopefully it's very short, and I need to say it works.

**00:26:12**

Because it really is about the, over time, you start to learn to see that it's not just a building in the first place, how does it unfold?

**00:26:21**

All right, everyone give you a good one.

**00:26:22**

Thank you.

**00:26:23**

All right, everyone give you a good one.

**00:26:23**

.
