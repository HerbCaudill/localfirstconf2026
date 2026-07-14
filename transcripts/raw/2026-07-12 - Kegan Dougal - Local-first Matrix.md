---
source: local-first-conf-recording
title: "Local-first Matrix"
date: 2026-07-12
speakers:
  - "Kegan Dougal"
source_recording: "../../recordings/2026-07-12 - Kegan Dougal - Local-first Matrix.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1445-local-first-matrix"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Local-first Matrix

**00:00:00**

Hi again. So my name's Kegan. I'm being part of the whole team about Matrix for since its inception.

**00:00:06**

And yes, I'll spend some time today talking to you about how we're trying to move Matrix from a federated model to a pay-to-pay model and some of the issues that we've had.

**00:00:14**

So if you don't know Matrix, Matrix is a decentralized network. It's federated, so it's an email, Mastodon, so it uses registered onto a particular server.

**00:00:24**

And those servers will communicate with each other using the federation protocol.

**00:00:29**

The important thing here is that you don't need all servers to be online in order to communicate.

**00:00:35**

So if you create a group chat and you can't talk to the other servers, users on your own server can continue communicating.

**00:00:43**

So it's very resilient to any network partitions that are leveraged.

**00:00:48**

And the user who creates the room is the administrator of the room.

**00:00:51**

And they're able to manage the room. They're able to promote other people to be an administrator.

**00:00:55**

They're able to demote users, kick or bans, and things like that.

**00:01:01**

So in Matrix, the kind of unique relation against mobile first is that the Matrix room is a CRIT.

**00:01:09**

And it's just that each server is the CRIT and if you know CRIT merge functions, the state resolution algorithm and the matrix is the merge function.

**00:01:21**

So this is specifically focusing on the federation side, not the client server API side.

**00:01:26**

We'll be talking about that a little bit later.

**00:01:28**

You can see, following the Apex paper here, which kind of analyzed the matrix to determine that, yes,

**00:01:34**

the facts they are for replicating this.

**00:01:36**

So you have a matrix federated model where many users exist on a single replica area and this replica talks to each other.

**00:01:43**

And you have a local first model where the replica area is directly tied to one user and those users communicate with each other via some protocol, some P2K protocol as well.

**00:01:54**

These are very similar models.

**00:01:56**

In fact, the only real difference between the two is that the local first model, these network partitions are much longer lasting and much more severe.

**00:02:04**

So it's likely that you won't be able to talk to all phones at the same time.

**00:02:08**

But in the federated model, you can be reasonably sure that most of the servers in that group are online at the same time.

**00:02:14**

So to kind of describe what these CRITs look like, so you can have the kind of intuition of how they work.

**00:02:21**

If ask creates the root, this is just a JSON object.

**00:02:24**

And you hash that JSON object and you get a unique ID and that is the event ID for that event.

**00:02:32**

Now, if Bob joins the algorithm, Bob needs to say that I'm joining after Alice created the root.

**00:02:37**

And the way that we represent that is there's a field in that JSON object for previous events and you just specify that event ID as the previous event.

**00:02:45**

So it's pointing back to the creation event.

**00:02:47**

And that then also gets its own idea because the previous events also form part of that hash structure.

**00:02:55**

So you can continue doing this operation and then you can sometimes end up with a fork.

**00:03:00**

Because if you have multiple servers, you can write to this data structure.

**00:03:03**

And Alice and Bob were unaware of each other's updates and they've done something at the same time.

**00:03:07**

They've done something concurrently.

**00:03:09**

And this is okay because you can also merge these forks together.

**00:03:13**

And this is the CRIT merge function that happens and it's represented by just representing multiple IDs in this previous event field.

**00:03:20**

So this merge function is the state resolution algorithm.

**00:03:22**

And it can be quite tricky to implement because, I mean, in this example it's quite simple.

**00:03:26**

And you can kind of mix, trickily add these operations together.

**00:03:30**

And if they're conflicting operations and you can kind of choose the winner and handle the work sensibly,

**00:03:35**

it gets very very difficult to work out what to do.

**00:03:38**

So the bison-time aspects of this we've covered really nicely in the mark-cutting paper, which I'll look over here,

**00:03:45**

which covers kind of why the state structure is quite good at bison, even if you have bison-time replicas,

**00:03:53**

they can't really corrupt the state structure, unlike other forms of causality representations such as vector-force.

**00:03:59**

So, time or life. So if you want to design a local first chat-up, because that's effectively what you want to do.

**00:04:05**

It could be a chat-up, it could be a file with a document, it could be a whiteboard.

**00:04:09**

You need to do this. It doesn't really matter just so long as you've got some notion of these three things.

**00:04:14**

You need to synchronize your message data such as using CRITs, which I've kind of explained about.

**00:04:19**

You need a way to globally identify users and group traffic.

**00:04:23**

So this is generally some kind of overlay network, so something like IRA, or reticulum, or Yggdrasil.

**00:04:29**

There's a whole range of different overlay networks that you can use, which I'm not going to talk too much about,

**00:04:34**

but you can talk to me afterwards about that.

**00:04:36**

And then you need this third thing: the awaiting group is authorized to do which operation.

**00:04:41**

So if you have the idea that you have an admin group who's Alice, and a normal user who's Bob,

**00:04:46**

and then Bob tries to remove Alice from the room, what is stopping that from happening?

**00:04:51**

Who enforces that? And there's a few options here, right?

**00:04:54**

You can have this be server-enforced, so you can talk to a central server, and then server says,

**00:04:58**

"No, Bob, you're not allowed to go and remove Alice because of Alice isn't happening."

**00:05:02**

You can use something like capability tokens, so the idea is that Bob would physically not have access to a token

**00:05:08**

that would let Bob be able to convince other people that they're able to remove Alice from the room.

**00:05:14**

Or you can use CRITs as well to try to solve this problem.

**00:05:18**

So the first thing is why not server-enforced?

**00:05:21**

This surely seems like the easiest option, and is, and a lot of applications do do this.

**00:05:25**

But the fundamental problem here is that you have all these CRTV replicates

**00:05:29**

which can accept reads and accept writes at any time, even at the partition.

**00:05:33**

But if you're gating your writes behind being able to talk to that alt server, if you can't talk to your server, you can't accept writes.

**00:05:41**

And if an alt server disappears, you can't accept writes at all in your entire system.

**00:05:46**

So despite the fact that these replicas can in theory synchronize, it's not safe to accept any writes because there's no one to enforce those group permissions.

**00:05:55**

So capability tokens are maybe an alternative.

**00:05:59**

Capability tokens are pretty good for certain things, particularly for live data access.

**00:06:04**

If you have an ADI that you need to gate behind, and you're protecting access to that ADI, you can use something like capability tokens.

**00:06:11**

But they really struggle for things like historical data.

**00:06:13**

So the idea here is that the local first setting, if I walk past Alice's phone, and we're in the same group with a bunch of other people,

**00:06:21**

and Alice has got a whole bunch of new information in his group chat, which I haven't seen.

**00:06:25**

So for that brief moment, as we pass each other, I synchronize a week's worth of traffic.

**00:06:30**

And in that week's worth of traffic, in there, is information that says that Alice back, what, five days ago.

**00:06:37**

So Alice isn't an admin now, she was maybe a week ago, and she back, well, five days ago.

**00:06:43**

So was that authorized or not?

**00:06:44**

Like, it's very difficult to represent that using something like capability tokens,

**00:06:48**

because they tend to track the current time for the live system.

**00:06:51**

So the other alternative here is UCIT's to solve this problem.

**00:06:56**

But then you end up with this problem, which is the Julie Adams problem.

**00:06:59**

So if you imagine a world where Alice creates the room, and Bob joins the room,

**00:07:03**

and then Alice is prone to Bob to be an admin, and then two things happen at the same time.

**00:07:08**

Alice demotes Bob, and Bob demotes Alice.

**00:07:12**

Now what is the merge function going to do here?

**00:07:15**

You decide who wins.

**00:07:17**

Now, the way I like to think about how to implement these merge functions is that we're effectively sorting them into an execution.

**00:07:23**

So really the question is, how are these two events ordered with respect to each other?

**00:07:29**

And that matters, because the validity of one of these events depends on the other.

**00:07:34**

Bob demotes Alice is only authorized if Alice demotes Bob has not already executed.

**00:07:41**

So for the sake of life, we're just going to assume that Alice has managed to win this tie-break.

**00:07:47**

Maybe because she joined the room first.

**00:07:49**

So it's a fairly accurate tie-break, let's go with the most senior user.

**00:07:54**

So okay, we've got this.

**00:07:56**

All sorted, fun.

**00:07:57**

So now imagine this other scenario.

**00:08:00**

First of all, there's no concurrency here at all.

**00:08:02**

Alice joined the room.

**00:08:04**

She's an admin.

**00:08:05**

She's the first person.

**00:08:06**

She promotes Bob to be an admin.

**00:08:08**

Bob demotes Alice.

**00:08:09**

The only Bob is an admin.

**00:08:11**

Alice's mother is an admin.

**00:08:12**

And then several days before, okay?

**00:08:14**

Everything's fine.

**00:08:15**

No problems.

**00:08:16**

And then Alice thinks, you know what?

**00:08:18**

I'd really like to be an admin, and I want to be an admin again.

**00:08:21**

So she maliciously sends this admin.

**00:08:24**

Now the problem is, is that this graph is exactly the same as the previous graph.

**00:08:29**

So any rule, deterministic rule, that's going to guarantee that Alice wins in that

**00:08:34**

legitimate case, also guarantees that Alice will win in this malicious backdated case,

**00:08:39**

because those graphs are identical.

**00:08:41**

So you might think, okay, you've got the wrong idea here.

**00:08:45**

Doing it by users is not the right idea.

**00:08:47**

Why don't you release hashes?

**00:08:48**

You can't predict hashes.

**00:08:49**

Well, you can do anything called hash by doing it.

**00:08:51**

So if you know that the demotion event had the ID in 567, you can just keep making demotion

**00:08:56**

events until you happen to get one that hashes to a lower value, and then send that and discard

**00:09:01**

the rest.

**00:09:02**

So you can't really rely on hashes.

**00:09:04**

You can say the most senior user wins, but that's what we just did, and we need to see

**00:09:07**

that there's vulnerabilities there, because the most senior user can obviously do this

**00:09:10**

attack.

**00:09:11**

You can say that the entire idea wrong, that you shouldn't be ordering events whatsoever,

**00:09:15**

and that you should be using what's called a concurrent specification, which says when

**00:09:18**

there are concurrent events, you apply maybe all the events, or maybe they cancel out.

**00:09:22**

If they cancel out, that doesn't really make any sense, because it means that you can cancel

**00:09:25**

out your own demotion.

**00:09:27**

You can't enforce access control.

**00:09:29**

So really, the only option there would be to enforce both demotions.

**00:09:33**

But the problem is, is that if Bob demotes Alice, that any time in the future, Alice

**00:09:37**

could just retaliate and say, you know what, I actually don't like you, Bob.

**00:09:40**

I'm going to just maliciously send you, send a demotion to you.

**00:09:44**

You know, I'm not authorized, just because the algorithm allows you to.

**00:09:49**

You also have this problem that you can get locked out.

**00:09:51**

If only Alice and Bob, Alice and Bob will get the elements in the room, you can edit

**00:09:55**

no elements in the room, which is obviously not great.

**00:09:58**

So you might think consensus will save us all.

**00:10:00**

But the problem with consensus, particularly in a local first setting, is that identities are

**00:10:04**

very, very cheap.

**00:10:05**

You typically just need a public private key pair.

**00:10:07**

And so you can make lots of identities.

**00:10:09**

So when I got classed Alice, nothing is saying that Alice, when I sink that

**00:10:14**

week's load of traffic, saying, oh, by the way, Alice 2, Alice 3, Alice 4, Alice 5,

**00:10:18**

are now also in the room, and they happen to be Alice.

**00:10:21**

So now they've stacked the odds in their favour, and then they can

**00:10:24**

win any kind of consensus of both.

**00:10:26**

So this is a form of civil attack.

**00:10:28**

You might say, blockchain will save us, proof of work, proof of sake.

**00:10:31**

But this has got similar problems to the most senior user here, right?

**00:10:35**

So it means that this user with more resources is able to do this attack.

**00:10:39**

And that assumes that you have like some kind of blockchain.

**00:10:42**

However, I will pat you on this first by saying, if you didn't use the local

**00:10:47**

Ethereum network, then in theory, this actually could solve this problem.

**00:10:51**

Simply because it's not really possible for Alice or Bob to muster up the

**00:10:56**

necessary resources to go and enable a vaccination attack.

**00:11:00**

But that's not really what we're first, because you now

**00:11:02**

need to go and talk to the local Ethereum network.

**00:11:05**

So what other things can we do here?

**00:11:07**

So maybe we can change the rules of the game.

**00:11:10**

Maybe we can just forbid demotions and time.

**00:11:12**

You can't have duty happens if you can't demote after all.

**00:11:15**

And that's true.

**00:11:16**

You can absolutely have a system that works without demotions and doesn't have any of these problems.

**00:11:22**

But in practice, like mistakes happen, devices get compromised.

**00:11:27**

I don't think you can really have a production system that doesn't have the ability to have any kind of production.

**00:11:33**

So you might think, okay, maybe we can refine this idea a little bit.

**00:11:37**

Maybe we can forbid same-level productions.

**00:11:39**

So this is what matrix does today.

**00:11:41**

If you have two apps in a room, they can't demote each other.

**00:11:43**

The rules do not allow it.

**00:11:45**

But you can always backdate to do just the same thing.

**00:11:48**

So the problem with this is that one user promoted the other user to be an add-on.

**00:11:54**

So what can happen is that user can backdate some events.

**00:11:59**

So in this scenario, Alice and Bob were both admins.

**00:12:03**

And now maliciously, Alice has backdated some events.

**00:12:07**

One to promote Alice Prime as well as the softcover account.

**00:12:10**

They retain access to the room.

**00:12:12**

And then they will self-demote.

**00:12:13**

Now they've crafted these events such that when we merge them together, they get ordered before Bobby joins the room.

**00:12:19**

So in this scenario, Alice joins his promotion, a softcover account to be an add-on, has self-demoted.

**00:12:26**

Then Bob joins.

**00:12:27**

And then Alice tries to promote Bob to be an add-on.

**00:12:30**

Well that's not otherwise anymore, because Alice Prime is the add-on, not Alice.

**00:12:35**

So you might think, okay, this is a bit dodgy.

**00:12:39**

This is a bit of a weird situation.

**00:12:40**

You've got Alice doing stuff on forks and stuff.

**00:12:43**

Maybe we can detect this behavior, and maybe we can forbid this behavior.

**00:12:47**

And this is precisely what Michael Blockley's paper would propose doing.

**00:12:50**

But the problem with this is this could also happen innocently.

**00:12:53**

So if you dropped your phone into the seat and you have to load up a backup, you may have forgotten that you can go to Bob to be an add-on.

**00:13:01**

And now you're sending events on the floor.

**00:13:03**

So again, I don't think it's really practical for a production system.

**00:13:06**

So what can we do?

**00:13:08**

We really need three things, right?

**00:13:10**

We need more information to be able to distinguish between these graph shapes.

**00:13:13**

That information must be created by an independent party, so not Alice or Bob.

**00:13:17**

And then we use that information to control the execution of it.

**00:13:20**

And that's behind an academic paper that I wrote earlier this year.

**00:13:23**

And I'm going to explain a little bit about how that works now.

**00:13:26**

So the idea behind this is you have this third entity.

**00:13:30**

And this third entity is only responsible for saying, hey, these are the latest events I've seen.

**00:13:36**

That's it.

**00:13:37**

It's just only one.

**00:13:38**

So in this scenario, you've got Alice promoted Bob to be an add-on.

**00:13:42**

Bob demoting Alice.

**00:13:43**

So only Bob is about it now.

**00:13:45**

And now the finality arbiters are going to come in and say, okay, the latest event I've seen is this one.

**00:13:50**

And it does this by sending an event.

**00:13:52**

What this does is it locks in the history.

**00:13:55**

Because all of these events point back to their pairing, their previous events field,

**00:14:00**

you can't add it.

**00:14:01**

It's a closed set.

**00:14:02**

You can't add any more events to this.

**00:14:04**

So now, when Alice tries to back a demotion, it's not part of that event.

**00:14:10**

And it can't ever be part of that event.

**00:14:13**

It becomes part of what's called the pending event.

**00:14:15**

And the executional way here is to always execute stuff that is inside of the event before stuff that is not in the event.

**00:14:21**

So you can hopefully see here that if the event was the other way around, then Alice would want this.

**00:14:26**

But, you know, it critically is not up to Alice or Bob to decide who creates that.

**00:14:31**

To kind of extend the analogy a little bit more.

**00:14:34**

Obviously you get more events, that sort of thing.

**00:14:36**

If Bob did some right to say hello or something like that, and then another epoch was made, you get these kind of onion ring layers form.

**00:14:43**

Maybe Alice is doing its own thing and hasn't seen any of this.

**00:14:46**

Now, the interesting thing here is to see what happens to the execution order.

**00:14:49**

Because what effectively happens is Alice demotes Bob gets rebased after that first epoch.

**00:14:55**

And then Alice's right gets rebased after all of the epochs.

**00:14:58**

So the execution order becomes like this, reading from top to bottom.

**00:15:03**

There are still some concurrent events within an epoch.

**00:15:06**

But that's fine.

**00:15:07**

You will still have some notion of the typewriter now that will decide what makes it first.

**00:15:11**

You might think, this sounds a lot like the second also we had right at the beginning, right?

**00:15:18**

But it's not quite the same because it's not blocking any synchronous.

**00:15:22**

So one replica can accept the right to communicate it to all other replicas including the finality alter, which itself is a replica.

**00:15:29**

And the arbiter's job is just to clear this buffer effectively of pending events.

**00:15:34**

If the arbiter disappears, that's fine.

**00:15:36**

You can still accept your rights and you can still communicate as normal, just with unstable sequence.

**00:15:43**

So that means anything in the pending epoch would potentially be vulnerable to the backlink attacks that I'm describing.

**00:15:49**

So you might think, okay, what about trust?

**00:15:52**

Okay, you sound like you're giving a lot of trust to the arbiter.

**00:15:55**

And really the arbiter's role is just ordering concurrent events.

**00:15:59**

It can't promote people, it can't demote people, it can't forge events.

**00:16:03**

You can, if you're doing something like eHUD, which encrypts the event tracing, you can go and encrypt it from the arbiter potentially.

**00:16:12**

So it's sorting a bunch of cycle tests and that sort of thing.

**00:16:15**

And if it does do some sort of concurrent events, because nothing after all stops the finality algorithm setting the concurrent events, concurrent e-bog events, you can detect that behavior and then you can flag the finality arbiter as malicious.

**00:16:30**

So the kind of lessons here that I've learned is that authorization, basically all authorization, kind of assumes that there is some sort of trusted sequencing that can't be manipulated by anyone using the system, such as when requests hit the server.

**00:16:43**

So the problem comes when you go entirely local first is that if you remove that server, you're kind of just trusting all your peers to be honest about the time they've set stuff.

**00:16:52**

So in this scenario, Alice can genuinely use the real time and say, I'm banning you, Bob.

**00:16:56**

Bob can just be malicious and say, oh, I'm going to ban you.

**00:16:59**

Sorry, Alice, didn't you know I banned you a while ago.

**00:17:02**

Sorry, let's cancel that but banned me.

**00:17:04**

And you can never prove whether that was just a delayed event that took a while to get through the network or was done in retaliation to that ban.

**00:17:11**

And you can't tell because ultimately data is blanks.

**00:17:16**

So what this looks like, I think, in a local first world is, you know, SIG servers already exist.

**00:17:21**

They're already entrusted to do a lot of operations for availability, such as store and forwarding, and map traversal, and things like that.

**00:17:27**

So they could potentially be used as the kind of finality arbiter.

**00:17:31**

So it means you'll go out to a document or a chat group.

**00:17:34**

You're going to nominate and enhance trust one SIG server to omit these Epoch events.

**00:17:39**

That can then give you the guarantees against that, the protection against that.

**00:17:43**

So matrix, in recent conversions, the group creator is an immutably all-powerful entity in the group.

**00:17:51**

So we don't need to add an external arbiter.

**00:17:54**

We can use the group creator to serve that.

**00:17:58**

So how does this relate to peer-to-beer matrix?

**00:18:00**

The idea behind peer-to-beer matrix is that we are taking these servers that are federating and have the main things and everything,

**00:18:07**

and we're basically putting the servers onto the client and then using some kind of overlay network to communicate with each other,

**00:18:13**

client-to-client, using the federation API.

**00:18:16**

So we've designed a very small embedded home server in Rust for Cucina.

**00:18:20**

And it's very, very alpha at this moment.

**00:18:22**

It's very, very fresh code.

**00:18:24**

But if you've actually got links to PowerBP2P yet, which kind of gives you a status update for the kind of progress that we've made in this area.

**00:18:33**

The main kind of utility here, at least from my perspective, is that it gives us a way to kind of evaluate matrix in the really harsh conditions of peer-to-peer,

**00:18:41**

when you have very, very bad long-lasting network conditions.

**00:18:45**

So add a little down to recalling what a lot of local first metrics.

**00:18:50**

This is using Bluetooth to communicate directly between phones.

**00:18:53**

We're using Aira as our open network, using the custom Bluetooth transport with a bunch of modifications to make it a bit more robust.

**00:19:02**

So here I will hopefully go and play this.

**00:19:05**

So if you are really, really keen and want to run side-loaded APKs, you're more than welcome to scan a QR code and download the APKs,

**00:19:12**

and you can try those for yourself.

**00:19:14**

But in this scenario, I'm registering, I'm loading element X, and I'm registering three accounts, Alice, Bob, and Charlie.

**00:19:19**

And then I'm registering with the local server.

**00:19:21**

All of these servers, all these phones are in airplane mode.

**00:19:24**

So there's no network actors here, there's just breach that's been enabled.

**00:19:28**

The reason why I asked for explaining on startup is so that you could just type in the friendly human readable name,

**00:19:33**

and we use Bluetooth advertising packets to then advertise that, oh yeah, there's the device here called Bob or the device here called Charlie.

**00:19:40**

So here Alice is creating a group, and we'll then go and invite Bob and Charlie.

**00:19:47**

And that will establish a Bluetooth connection with eldercap, and it will then put Aira over the top of that,

**00:19:54**

and then send federation requests over the top of that, which is using the co-app and SQL.

**00:20:00**

It does that in serial, so you'll see it'll go to Bob first, and then it will go again to Charlie a couple seconds later.

**00:20:06**

This is a multi-card chair.

**00:20:08**

But then they go through, and then Bob and Charlie can go and accept this.

**00:20:13**

It's all using Bluetooth, there's no, there's no, there's no public internet access.

**00:20:17**

Or even LAN access here.

**00:20:19**

And then he goes, okay.

**00:20:20**

Very great afterstage at the moment.

**00:20:25**

There's still a fair number of bugs of it, but there's something out there to do for me.

**00:20:31**

Hopefully I can do a little reaction.

**00:20:33**

And then it comes through.

**00:20:34**

It comes through later on Bob's device, because Charlie and Bob might have an active connection.

**00:20:38**

So it takes a few seconds to react to this language.

**00:20:40**

And there we go.

**00:20:41**

So where do we kind of go from here in terms of like what's next?

**00:20:53**

We don't have a sort of forward layer, so the devices need to be online at the same time.

**00:20:58**

If they're not, then sorry, nothing's going to happen.

**00:21:01**

They just rely on those two phones to actually be online at the same time.

**00:21:04**

So it's not the most practical at the moment.

**00:21:08**

We'd like to maybe make use of the existing, we have lots of home servers in Matrix already running.

**00:21:13**

So maybe we can use them in some way as we saw and followed at home.

**00:21:16**

We would like to interrupt the normal Matrix.

**00:21:18**

So the green version here is using a bunch of custom MSCs.

**00:21:22**

It doesn't interoperate with normal Matrix and the normal Federation network.

**00:21:26**

We'd like to add a whole bunch of new features.

**00:21:28**

There's no EDUs.

**00:21:29**

There's no EDUs in typing receipts, in fact related to that sort of thing.

**00:21:33**

The main thing, yeah, is just trying to use it as a test code for the year and finalizing of the IP reception.

**00:21:41**

So the kind of final thoughts here is that data is timeless.

**00:21:46**

You really don't know when a piece of data was created.

**00:21:50**

You can't trust a timestamp on a vector block or position on a graph.

**00:21:54**

And the only way that you can really rule out that past is to have a trusted timekeeper kind of say when a certain time has passed.

**00:22:03**

And that's especially what this arbiter is doing.

**00:22:05**

And it feels like there is this kind of trifecta here between having a trusted part of your timekeeper versus the ability to have these emotions and the ability to have protection against that data.

**00:22:16**

And you can kind of choose two of these when ideally one or three.

**00:22:20**

So Matrix, because Matrix already has in the latest version this idea of a beautiful trusted creator that everyone already trusts and you can't change that.

**00:22:29**

You can't demote themselves.

**00:22:30**

And then we effectively have that trusted party.

**00:22:33**

And so for us that trifecta is quite obvious.

**00:22:37**

But what about you?

**00:22:39**

If you have a local first application that has group permissions and multiple people can go and do these sorts of operations,

**00:22:46**

then you need to really consider what traders really want to do.

**00:22:50**

So thank you very much.

**00:22:52**

Thank you very much.
