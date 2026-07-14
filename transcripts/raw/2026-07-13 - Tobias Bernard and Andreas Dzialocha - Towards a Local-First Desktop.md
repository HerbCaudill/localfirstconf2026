---
source: local-first-conf-recording
title: "Towards a Local-First Desktop"
date: 2026-07-13
speakers:
  - "Tobias Bernard"
  - "Andreas Dzialocha"
source_recording: "../../recordings/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1200-towards-a-local-first-desktop"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Towards a Local-First Desktop

**00:00:00**

...in YouTube-Canada.

**00:00:10**

Hi, everyone. We're here to tell you about what's first on the Linux desktop.

**00:00:14**

A few words about us. I'm Tobias. I work on the Chrome project, which is a very large project making an entire computing stack.

**00:00:21**

So not everyone is on this photo. It's only a small percentage of the project, but I didn't have one with everyone, so done.

**00:00:28**

But they have a much better photo with everyone.

**00:00:30**

Yeah, exactly. We're the whole Peer to Panda team on this picture. This is me, Andreas, Glyph, and Sam and Gray.

**00:00:36**

Together we started Peer to Panda in 2020, and we all have more to maintain our software project.

**00:00:42**

Right. And together we're part of a new structure, a collective called MOLA, which is sort of a joint effort from people across the free software landscape,

**00:00:54**

including not just Peer to Panda, but also, for example, SystemD, Postmark, Buzz, Flatback, many others.

**00:01:00**

And I think what brings us together is sort of this general feeling that everything kind of sucks about computing right now.

**00:01:06**

Like, I think for the non-German speakers here, I'm going to teach you a great German word.

**00:01:16**

It's sort of this idea that everything sucks and it's all connected.

**00:01:18**

Between, like, the rancid global fascism, the imperial war, like, whatever, rambling really expensive, and yeah, everything sort of is going the wrong direction and computers are part of the problem rather than the solution.

**00:01:32**

And I think sort of our idea here is maybe, like, some of the movements that we've had in the past to address issues in computing are no longer enough.

**00:01:42**

I think software freedom is still very important, but we need maybe a little bit more than that.

**00:01:46**

So, we've started calling this "mancipatory computing" that includes software freedom, but it also needs to be designed first.

**00:01:51**

It needs to take sustainability and resilience seriously.

**00:01:54**

It needs to be much more paranoid because everything is much more dangerous.

**00:01:57**

It needs to take into account that all the supply chains that we're relying on for hardware are more than ever, as is Internet.

**00:02:04**

And sort of this much more realistic look at the actual risks that we're facing nowadays if we want to do computing in this context.

**00:02:13**

And I think for us, the thing that all that comes together in is an end-user operating system.

**00:02:19**

I think, like, there are many other important parts of this landscape, right?

**00:02:24**

A lot of the questions that we're facing our policy or, like, just general political questions.

**00:02:28**

But when it comes to, sort of, the basic infrastructure that people are using, the OS that you're using on your computer is very important.

**00:02:36**

And I think maybe for those of you not too familiar with the Linux landscape, I want to give, like, a rough idea of what it actually entails.

**00:02:44**

Just comparing it a little bit to macOS.

**00:02:46**

So, for example, macOS, you have, like, I don't know, 30 apps pre-installed, like, for managing files and connecting to Wi-Fi and managing color and so on.

**00:02:55**

We have that too.

**00:02:56**

We have a pretty solid and well-mintained set of programs.

**00:02:58**

You need a developer platform, you need a widget toolkit, you need design guidelines, you need developer tools, debugging tools, and so on.

**00:03:05**

We have that too.

**00:03:06**

And built on those, we actually have a pretty amazing app-ing system nowadays.

**00:03:11**

There's, like, hundreds of apps built on the GDK, they provide a sort of stack nowadays.

**00:03:16**

Most of them very well-designed because the widgets do a lot of the work for you.

**00:03:19**

And then when you have these apps, you need an app store to ship them to people.

**00:03:23**

We have that as well.

**00:03:25**

Flatpack as an app format, I think, has worked out amazingly in this regard.

**00:03:29**

And we have Flatpack as a format, Flathub as the app store.

**00:03:34**

And then we have various frontlets that basically consume that.

**00:03:38**

But, of course, if you want to do this, you also need, like, a way to manage permissions and system resources.

**00:03:44**

We have that as well.

**00:03:46**

It's called Portals.

**00:03:47**

It's the sandbox APIs that we use to access system stuff.

**00:03:50**

And all of this actually works quite well and well.

**00:03:53**

It's much less mature than on the desktop, but it's also not that far off, just as an aside.

**00:03:58**

But one thing we don't have that Magmas has, and that the proprietary platforms have, is a built-in sync.

**00:04:04**

As an app developer, you can't just be like, okay, I'm making this little to-do app, I just want to sync it between all the user devices.

**00:04:10**

And that's for a reason.

**00:04:12**

Just structurally, free software projects are not set up to do server stuff, there's no support stuff, there's not really any money.

**00:04:20**

So it's beyond, like, some donations and, like, some people's free time.

**00:04:24**

And so you can't do the kind of things you need to do to do cloud sync.

**00:04:27**

But I think the thesis has been, for the last number of years, I don't know, yeah, going back to, I think, when Adam once came to present the user part of our web series or anything like that.

**00:04:38**

But maybe with local first, that's actually feasible.

**00:04:40**

Like, it changes the game in some way.

**00:04:42**

And then we've been exploring, essentially, how to do that.

**00:04:45**

I think at a very, like, high level, what that means is, you have a huge stack of, like, an actual Linux S, like, an actual developer platform, and then the apps build on top of it.

**00:04:56**

And somewhere in, like, this developer platform side, you need to insert the primitives to do the networking, to do sync, to do CRT stuff.

**00:05:04**

And we need to figure out what architecture that makes the most sense.

**00:05:09**

And also, like, how as a developing system we can get there.

**00:05:13**

Yeah, and bringing a local first system into an operating system, you can imagine that's not a very simple task.

**00:05:20**

And obviously we don't know exactly how to do that yet.

**00:05:23**

And then we end up in this vicious circle of, like, you need app developers to tell you what they need.

**00:05:29**

But they don't want to build anything yet when your stack is not ready yet, like your local first stack.

**00:05:34**

So we have this infinite loop of never getting anywhere.

**00:05:38**

So we tried to break that and thought a little bit, like, what is something we really, really want to use that should be very stable?

**00:05:46**

Something we would rely on every day.

**00:05:49**

This is reflection, our note-taking tool, because we are every day in meetings.

**00:05:54**

We always write background documents all the time.

**00:05:56**

And many of us and other communities do the same.

**00:06:01**

So we decided our first local first tool should be that.

**00:06:04**

And this was the ground of exploration.

**00:06:06**

You can already download it in the FlatHub store.

**00:06:10**

There's even an experimental Mac OS built.

**00:06:13**

This is still in the data phase, because all the lower stacks are also still in data.

**00:06:20**

And we can't show breaking changes until then.

**00:06:23**

As I mentioned, this for us was also the kick of a whole series of workshops, of developer events over the last two years.

**00:06:33**

We've been exploring what does it mean to build a local first application in this stack.

**00:06:38**

This obviously informed all the developments in Peer-to-Panda as well.

**00:06:42**

These applications use our new high-level API, we call this the Peer-to-Panda node.

**00:06:48**

And this allows us now a more stable API surface where we can also express bindings on top.

**00:06:55**

So the object developers like the ones who usually like to work with the GTK ecosystem,

**00:07:01**

they can now rely on other programming languages.

**00:07:05**

Yeah, so I mentioned this high-level API.

**00:07:08**

Maybe some words about Peer-to-Panda.

**00:07:10**

So Peer-to-Panda has been around for a while and we've been working on all of these small modules

**00:07:15**

which help to solve the Peer-to-Panda problems.

**00:07:17**

Like how do you agree on a group key together?

**00:07:20**

How do we manage multiple devices?

**00:07:22**

How do we sync?

**00:07:24**

How do we connect two computers with each other?

**00:07:27**

All of that.

**00:07:28**

And these are all like very independent modules.

**00:07:30**

You can use them.

**00:07:31**

They're Rust-craze.

**00:07:32**

The issue is you need to be a Peer-to-Panda expert.

**00:07:35**

You know, like you need to know what causal watering is and hole punching and whatnot.

**00:07:40**

So yeah, of course this is not great for application developers.

**00:07:45**

So now we finally released a higher level API.

**00:07:48**

You can think about it as something like Nets Jetstream or Kafka

**00:07:53**

but with causal ordering and eventual consistency.

**00:07:57**

And yeah, all of this is plugged together in one event streaming interface.

**00:08:02**

And then you plug in whatever database you want to use on top of that or CRDT or whatnot.

**00:08:08**

And underneath we're currently working with IRO for the internet protocol.

**00:08:13**

But we are also interested in something we call the walk-away stack,

**00:08:18**

which is also the possibility of applications to continue to function

**00:08:22**

even though the connectivity substrate underneath changes.

**00:08:25**

So we are also interested specifically in mesh networking topologies over Bluetooth flow energy and NORA

**00:08:31**

even towards packet radio.

**00:08:34**

So you can see like we try to cover quite a lot on the event delivery layer as well.

**00:08:39**

So yeah, and first this whole research of reflection obviously is so much more.

**00:08:48**

It's not only talking about the underlying peer-to-peer stacks

**00:08:52**

but also discovering a lot of your X problems, right?

**00:08:56**

And yeah, we're super happy to work with people like Tobias

**00:08:59**

because we have a designer on board.

**00:09:02**

And yeah, with this sort of process we identified and shared patterns

**00:09:08**

and slowly, slowly questions arise of like,

**00:09:11**

"Okay, what can we actually move to the operating system later?"

**00:09:17**

Right.

**00:09:18**

And we're going to talk through a few of those research areas

**00:09:20**

that we've discussed over the last few years

**00:09:23**

and I think more completely explored as part of this reflection project.

**00:09:27**

So, indicative of the kind of things we're interested in.

**00:09:30**

But yeah, that's obviously a lot more.

**00:09:32**

I think obviously one of the big ones is always identity, right?

**00:09:36**

Like how do you invite people is immediately a question

**00:09:39**

once you want to do collaboration.

**00:09:40**

And I think there's a lot of questions there even at the highest theoretical level.

**00:09:45**

Like our good friend, Kate Piem from the New Design Congress

**00:09:48**

is also a part of Binole Collective and we've talked about this quite a bit.

**00:09:54**

And like there's not so many good overall solutions to impersonation attacks,

**00:09:58**

especially in peer-to-peer.

**00:10:00**

So what you want to do is you want to encourage in-person verification as much as possible

**00:10:04**

and do essentially pet names on the client side as much as possible.

**00:10:09**

For reflection, for now we decided to sidestep the issues a little bit

**00:10:14**

and just go with just sudanimas, like color plus animal sort of identities

**00:10:19**

because that way at least we're not doing any harm.

**00:10:21**

But like long-term we're thinking about like what we want

**00:10:24**

sort of as a full solution.

**00:10:27**

As a sort of wrap idea, this is a wireframe for like how this kind of verification will work.

**00:10:32**

It sort of strongly pushes you towards doing this in-person

**00:10:37**

but also like you can do it by a voice call

**00:10:39**

and it guides you through this process

**00:10:41**

and in the end you decide the name, not the other side.

**00:10:43**

So if you sidestep this verification thing, the impersonation thing.

**00:10:48**

And how this works on a technical model is apps that in our ecosystem are sandboxed.

**00:10:54**

You generally don't have access to any system resources.

**00:10:56**

So if you want that access you go through the portal.

**00:10:59**

And the way this works is actually like here you like click the app button.

**00:11:04**

It like requests from the portal which has like all the contacts and also the pen names

**00:11:09**

and also the syncs to your devices.

**00:11:12**

It requests via the system dialog which contacts you want to give access to.

**00:11:17**

And that essentially shares the public keys and the pen names.

**00:11:21**

And then the app can do with that whatever it wants.

**00:11:23**

But like sort of it gives the scope of access to this.

**00:11:27**

And here's another sort of far away future kind of thing where like maybe I've been so far away.

**00:11:32**

Like just in the regular system context app you have like people's phone number, people's email address.

**00:11:36**

And then also all these peer-peer contacts because it includes the public key ID.

**00:11:43**

Another interesting one is how do you remove all devices?

**00:11:46**

Right? Like even if you only need cities between your own devices or like small groups or something.

**00:11:51**

And you're like okay well we don't really care about exit controls yet.

**00:11:54**

It's usually not true because you want to at least remove devices that were stolen or lost or something.

**00:11:59**

And so it turns out you need it.

**00:12:01**

Luckily P2Panda has this already.

**00:12:03**

Like the primitive is there.

**00:12:05**

The P2Panda auth CRT which is essentially like the system of nested groups.

**00:12:09**

Like your devices are one group.

**00:12:11**

So this group is your user.

**00:12:13**

And then other groups are like these groups of groups.

**00:12:15**

And then you can add those to documents or also just whatever.

**00:12:19**

Individual groups directly and so on.

**00:12:22**

And they can have different levels of access.

**00:12:24**

And this is another wireframe how this would look like in UI.

**00:12:28**

If you're an admin you can then change the access of these members.

**00:12:32**

In this case the members are actually groups of the devices.

**00:12:35**

And you can remove, block, downgrade to only reading and so on.

**00:12:41**

So yeah.

**00:12:42**

And then the next problem is now we've all written our meeting documents.

**00:12:47**

We had a meeting.

**00:12:48**

Someone didn't attend the meeting.

**00:12:50**

They want to catch up on what happened.

**00:12:52**

But everyone is offline.

**00:12:53**

So how do we actually sync, right?

**00:12:55**

I guess you all know this problem.

**00:12:58**

So Peer2Panda works currently on something we call support nodes.

**00:13:02**

These are like more available nodes in the network.

**00:13:05**

We see them as equal.

**00:13:06**

They're not there to support.

**00:13:08**

They're not necessary.

**00:13:10**

The idea is here that like the more regular nodes who can actually decrypt the data.

**00:13:16**

They push like the encrypted versions to the support nodes.

**00:13:20**

So they're completely, they don't know what they're actually containing.

**00:13:24**

And this is, there's some differences to that for like a cloud provider.

**00:13:29**

The first thing is we really push fully encrypted blocks into support nodes.

**00:13:33**

There's almost no metadata attached.

**00:13:35**

You can maybe observe connection patterns but not much more.

**00:13:38**

Which is different to a lot of cloud providers where the data actually just lies in plain text.

**00:13:43**

And obviously it's, it should be easy to host them.

**00:13:47**

So underneath it's powered by iRow.

**00:13:49**

So we can, you know, run these support nodes on our old smartphones or on a Raspberry Pi.

**00:13:55**

And the idea is quite simple.

**00:13:58**

You might have heard it also in, in, in, in other projects is we simply just use a key value store.

**00:14:03**

Think about it as Redis, but even simpler.

**00:14:06**

The thing we need is an API to put and get items from the store.

**00:14:10**

Um, with a prefix.

**00:14:13**

Um, and, uh, this is already enough to then issue a token to any sort of client, independent of protocol actually.

**00:14:20**

This doesn't need to be clear to Panda.

**00:14:22**

And that client can now like shove data into that store.

**00:14:25**

Very simple.

**00:14:26**

Um, the access token itself is not signed.

**00:14:28**

We decided to not attach any identifiers to that information.

**00:14:32**

It can expire.

**00:14:33**

It can give you like a time to live on the key value store and the space to live.

**00:14:38**

So you can allocate 512 megabytes for that to care for example.

**00:14:42**

Um, yeah.

**00:14:43**

And then how do we do this with greater Panda?

**00:14:45**

So we have something like adapter, which translates our app and the only log data type, which can

**00:14:50**

then also like extend to a multi-righted deck.

**00:14:53**

Um, um, and we sign every entry and that's in that data type, uh, fully.

**00:14:59**

So the payloads are completely garbage.

**00:15:01**

Uh, and we only use the identifier as the key.

**00:15:04**

Uh, with a little bit of a, of a prefix path there as well for easier retrieval and, yeah.

**00:15:10**

Um, traversal of that route back into the decryption buffer.

**00:15:13**

Um, which then has to do a little bit more of work because you can imagine fix it right out of order and so on.

**00:15:19**

This is a trade off if you, you know, don't have enough metadata to have to do these things, but we, yeah, we want to focus on the privacy here.

**00:15:27**

Um, how do we do group encryption?

**00:15:29**

Um, so, um, last year we worked on our creative peer-to-pandemic encryption, which was very heavily inspired by this paper from 2021.

**00:15:37**

Uh, also from people here from this community.

**00:15:39**

And, um, so whenever like two peers meet for the first time, they use signals, it's 3DH as an initial key agreement.

**00:15:47**

And, and then we step with forward secrecy, uh, and, and, and continue to introduce new keys, um, with the two-party protocol, which is also specified in that paper.

**00:15:58**

Um, then we have like a group key agreement scheme on top we, um, developed ourselves, which is very simple.

**00:16:04**

Um, it's called data encryption that allows you to decrypt old data when you enter the documents.

**00:16:10**

Uh, so this is interesting for building a wiki, for example.

**00:16:13**

Uh, you know, you enter the group, you want to catch up on all the old state, which has been encrypted in the past.

**00:16:18**

Uh, we only rotate the key on the removal right now.

**00:16:21**

Um, which, uh, is good for post-compromised security.

**00:16:25**

And then if you want to get really fancy, then we also implemented the full double ratcheting, uh, paper here, fully, um, open first and decentralized, uh, using signals double ratcheting.

**00:16:35**

And we have one team right now, the dash chat, uh, messenger, which actually builds a peer-to-peer, uh, chat messenger on top of that.

**00:16:42**

Um, yeah, and then we can now manage these support nodes on operating system layer.

**00:16:47**

These are still wireframes.

**00:16:48**

You're going to see this is what you're going to work on next.

**00:16:51**

Um, so I'm adding these support nodes because I have the token, right?

**00:16:55**

I have the access and then my applications in the background can just leverage from suddenly this capability, including full end-to-end encryption.

**00:17:03**

Yeah.

**00:17:04**

So, uh, what's next on the radar?

**00:17:06**

Like now we talked about a theory.

**00:17:08**

So what are we actually doing?

**00:17:09**

So for peer-to-panda, that is a grant we currently got from the NLNet, um, to actually bring this thing service into the operating system layer as a very experimental thing.

**00:17:21**

Um, we obviously, um, yeah, understand that peer-to-panda currently has this unique position to do this for the first time.

**00:17:27**

Uh, but this is all an exploration and we also hope to like bring more protocols into this space so we can also think about like more unified layers for different sorts of strategies.

**00:17:38**

Um, for example, optimizing for file sync and so on.

**00:17:41**

Um, but yeah, we already work on all the encryption parts and all the data management parts we saw at CRDT.

**00:17:47**

Now the, now the next steps we're currently working on is to bring all of this into our events processing API.

**00:17:53**

Um, so you get this really nice high-level interface with all of the guarantees.

**00:17:56**

Um, um, and then we work together with the community on actual like building the UI and the system services, uh, the portal APIs to experiment with these goals, um, we explored.

**00:18:10**

Uh, another grant we are working with right now came, came from the German government through Prototype Fund.

**00:18:16**

This is our collaboration with the Dash Charge team, another project building on top of peer-to-panda.

**00:18:21**

Uh, they are very interested in resilience and encrypted communication and situation where there is just no internet.

**00:18:27**

And, um, there we are looking into mesh routing protocols and strategies how to deliver messages efficiently for groups.

**00:18:33**

This is an ongoing research subject, it's not solved yet.

**00:18:36**

Um, and this allows us to also propagate care-to-panda data over gluten-free energy and lower with, yeah, full eventual consistency.

**00:18:44**

And the encryption scheme we use as something we call broadcast transport or multicast transport encryption doesn't maybe really make sense,

**00:18:52**

but we like to think about it as this, so you agree on a group key for transport encryption actually.

**00:18:58**

Not only to store it on support nodes, but also in our store and forward, um, replicating mesh protocol.

**00:19:04**

I know, sorry, there was one more slide for me.

**00:19:07**

Uh, um, yeah, we, obviously, like, this is a lot of features, and these are the last ones.

**00:19:13**

Um, so we can slowly, slowly look at peer-to-panda version one.

**00:19:17**

It's still way too early to announce it, but, um, we can slowly see the ends.

**00:19:22**

Because all the hard parts have been engineered and tested, we just need to now, like, bring them into our high-level APIs.

**00:19:28**

Um, and, of course, have conversations with our partners on how to improve them.

**00:19:33**

Um, but, um, peer-to-panda version one is essentially, like, continuing to work on the backward and forward compatibility of the data types to allow, like, changes in the future.

**00:19:43**

Um, there's still a lot of more fast testing to do.

**00:19:46**

We want to also extend more of our network simulations.

**00:19:49**

Um, we want to publish our specifications.

**00:19:52**

And, obviously, at one point, allow a stable Rust API for developers, so they don't expect any breaking changes anymore for a while.

**00:19:59**

And, um, the most important thing may be our new website.

**00:20:02**

Our website is not a great introduction right now into peer-to-panda.

**00:20:06**

It also comes from the fact that we're so close working with all our partners.

**00:20:09**

Um, but this needs to change, and we want to have more accessible getting-started guides coming up.

**00:20:15**

Right.

**00:20:16**

And beyond, sort of, like, maturing the lower layers, we're also still in an ongoing, uh, kind of, experimentation process with, uh, the GNOME app developer community.

**00:20:25**

Uh, a very recent cool example was, uh, a friend Titorn, uh, has this calendar map mascara, and he, like, added an experimental teeth on the back end.

**00:20:34**

Uh, as a hacker as a few weeks ago.

**00:20:36**

And another interesting example was Felicitas as this, uh, collaborative, uh, video player, and she was also playing with it.

**00:20:43**

And then we've been doing this series of workshops where just, like, in an hour we start from an, like, empty app template and just, like, make something that syncs.

**00:20:51**

And I think that's opened a lot of, uh, interesting doors to just, like, a new-comer developer experience, uh, learning.

**00:20:56**

So, for example, we built this tic-tac-toe thing at some point.

**00:20:59**

It's just, like, a quick-sharp thing to, like, see what, like, most- the smallest version of what kind of product is like.

**00:21:05**

And, on that note, um, we, uh, have this event series here in Berlin where we've, uh, done these kind of workshops on a bunch of plants.

**00:21:13**

It's called Boiling the Ocean, uh, because, uh, all the problems we're bringing in are, like, ten-year problems or longer.

**00:21:19**

And also, the ocean is literally being boiled, and we need to kind of, uh, protect that.

**00:21:23**

Um, uh, and, I don't know, we do all kinds of stuff.

**00:21:26**

We, like, do hacking, sometimes there's talks, sometimes there's just, like, threading discussions.

**00:21:30**

And it's always a fun time.

**00:21:32**

So, if you're in Berlin, uh, late August, uh, maybe come to Germany.

**00:21:36**

We talk about these and, or other similar topics, uh, there, usually.

**00:21:40**

Um, and also, yeah, generally, if you're interested in learning more about this,

**00:21:44**

the Peter Fanta and, uh, more websites have blocked.

**00:21:47**

Uh, the local website also has the events page, in case we, uh, didn't, uh, get to take a photo of the previous thing.

**00:21:53**

Um, and we're always happy about, uh, who are getting involved.

**00:21:57**

Uh, here are some of the places you can do that.

**00:21:59**

Uh, but you can find all of these layers of...

**00:22:01**

Uh, a few closing words.

**00:22:04**

Um, I think it's, it's, it's pretty clear that, like, maybe our, uh, where we're coming from here is a little bit different than, uh, some of the, uh, other talks in this stage.

**00:22:17**

But we thought it's maybe, nevertheless, kind of, like, an interesting perspective.

**00:22:21**

Um, just maybe as a, as a concrete example that you can do things differently.

**00:22:26**

Like, you don't have to use a big-type platform.

**00:22:29**

Um, it always proves that you can make a good end-user, um, OS and stack, um, that's fully in the comments.

**00:22:35**

You don't have to use web technology.

**00:22:37**

You don't have to ship a 400 megabyte cloud to everyone.

**00:22:40**

You can use a nice, uh, small native app that's faster and cooler.

**00:22:46**

Uh, and you can ship it by a flashlight.

**00:22:48**

And, uh, the whole thing is only going to be, like, 15 megabytes.

**00:22:51**

Um, you don't have to use the cloud, uh, obviously.

**00:22:54**

I, I think, in general, like, this move towards peer-to-peer customers.

**00:22:57**

So, supporting all of the infrastructure, uh, idea, like, that's getting a lot of, uh, momentum.

**00:23:02**

I, I think, it's, it's, it's part of this, like, change in, in how we think about power and, like, where, uh, uh, how, how we want to do so many things.

**00:23:13**

And also, just in how we organize ourselves.

**00:23:15**

Um, startups, um, are one way to do it.

**00:23:18**

Open-source communities are another.

**00:23:20**

And I think, like, sometimes the wireless is more of a one.

**00:23:23**

Um, so, maybe just, like, as a parting thought, um, we can build real alternatives at the end of the capital.

**00:23:30**

Thank you very much.

**00:23:43**

Very inspiring.

**00:23:44**

Uh, you know, the idea of a sick layer that's sort of built into the operating system

**00:23:49**

with these permatives of identity that people are connected to.

**00:23:52**

This is what you're calling the support nodes.

**00:23:54**

All these are, as you said, you've seen very few days in other systems.

**00:23:59**

But you are in a position to be able to actually truly build it into the operating system.

**00:24:04**

And that will keep you really excited.

**00:24:05**

Now we're being compelling enough for me to consider switching my own list.

**00:24:09**

So I don't know if people are the same, obviously.

**00:24:11**

Just a couple of quick questions, because I know everyone is hungry for lunch.

**00:24:16**

Uh, one person wanted to know, actually, a few people wanted to know, our support nodes kind of like, share infrastructure that you can kind of donate to the pool.

**00:24:22**

Are they really intended to be private?

**00:24:24**

It's like your own personal mask that you just share with your family or your work?

**00:24:28**

Yeah, I think both.

**00:24:30**

So, um, it's, it's possible to share, share the support node with your family or with the collective.

**00:24:37**

Um, um, yeah, and, or just keep it for yourself.

**00:24:41**

Um, um, oh yeah, I would say yes to both.

**00:24:44**

Um, this is the intention.

**00:24:45**

I mean, obviously there's still questions around, um, governance, how do you do that?

**00:24:50**

Um, um, right now we just have the simple access control scheme where you, you know, just give people access.

**00:24:57**

And if that's their family, that's their family.

**00:24:59**

Um, but, um, if things get larger, then maybe we need, you know, more patterns around the steps for, like, a better experience.

**00:25:07**

Yeah.

**00:25:08**

Uh, why push identities in person?

**00:25:10**

It seems like a step back in the US is identity probably.

**00:25:14**

It is a step back in the US.

**00:25:16**

Uh, I think, I don't know, it's, it's, it's a question of, like, what, what are the, the parameters that you, like, are thinking about this.

**00:25:23**

And, like, uh, if you talk to, sort of, experts in, sort of, uh, issues in identity, uh, uh, like, systems, they'll, like, do it.

**00:25:33**

With, with everything that's happening, um, that's kind of the only thing that we can provide.

**00:25:38**

And I think if we want to do bigger things, like, large systems don't have no solution to this.

**00:25:43**

Um, but this is the one thing that we kind of know is safe.

**00:25:46**

And I, I think there's far a reason to find, like, the, the increasing, between, like, your small group of collaborators, where you can't exist,

**00:25:54**

and then the wide world where, like, whatever, really found out.

**00:25:58**

Because you can't know who it is, and it could pretend to be your mom at any time.

**00:26:02**

I think it's on the mock, if you have voice calls, like, of course, voice calls can be spooked, including the sound of someone's voice.

**00:26:07**

But that does seem like it kind of intermediary, like possible, or in your voice.

**00:26:11**

Right.

**00:26:12**

Although, I mean, Kate, I would like to point out that nowadays it's very easy to go to Detroit kids' voice and voices too.

**00:26:17**

So, like, ooh.

**00:26:19**

But, yes, I think, like, we're, we're gonna have to figure out in practice how some of these things work when we start building these systems.

**00:26:26**

And it's still a research area at every level.

**00:26:29**

So, yeah.

**00:26:31**

And then one question was, how do you solve a mutual replication problem, which I think Mayfus was talking about last night?

**00:26:36**

It might also be in Aaron's paper, but what do you do for that right now?

**00:26:40**

Right.

**00:26:41**

So, yeah, I mentioned that CRDT, and obviously there's a lot of, like, nasty edge cases to be thinking about.

**00:26:47**

And one of it is the mutual removal of two group admins.

**00:26:51**

In the, I mean, Peer-to-Pandem off-codes, this is plug-able, so we, you can have your own logic injected into this as a Rust trait.

**00:27:00**

By default, we do a mutual removal, actually, so you just nuke both admins.

**00:27:06**

This is a very extreme thing, I know that.

**00:27:09**

The thing here is we talked to some activists, and they said, in a visiting environment, full peer-to-peer system, no consensus involved, or, like, sort of, you know, like, threshold signing.

**00:27:21**

This is the best effort you can give.

**00:27:24**

I think another solution is to just allow the fork.

**00:27:27**

This is, I think, also really nice.

**00:27:30**

This also came out during the D-Web seminar.

**00:27:33**

Christine proposed that I think this is also total balance.

**00:27:36**

So these are, like, things we can do right now in a very decentralized world here to pandemics.

**00:27:40**

And I think later we might want to, like, also do it, like, you know, like, a soft form of consensus finding, like, this, that is three or five signs and acknowledge that this action happens.

**00:27:51**

And then we actually take action.

**00:27:53**

And these things can maybe help us as well to stabilize these things even better.

**00:27:58**

Wonderful.

**00:27:59**

Round of applause.

**00:28:07**

We're at lunch time.

**00:28:08**

We're pretty much right on time.

**00:28:09**

Maybe five minutes late.

**00:28:10**

So, yeah, we've got an hour lunch.

**00:28:12**

Let's say we'll start at 1:35.

**00:28:13**

Look in the announcements.

**00:28:15**

So let's write about food.

**00:28:16**

Set the lines.

**00:28:17**

Look at the menus.

**00:28:18**

And we'll celebrate this.

**00:28:20**

See you back.

**00:28:50**

See you back.

**00:29:20**

Yeah, I guess where it was a decade ago a lot better.

**00:29:50**

See you back.

**00:30:20**

Yeah, it works.

**00:30:32**

All right.

**00:30:38**

I'm going to chat.

**00:30:40**

Yeah.

**00:30:41**

Come on.

**00:30:42**

Yeah.

**00:30:43**

Yeah.

**00:30:43**

Yeah.

**00:30:43**

Yeah.

**00:30:43**

Yeah.

**00:30:44**

Yeah.

**00:30:45**

Yeah.

**00:30:46**

Yeah.

**00:30:47**

Yeah.

**00:30:47**

Yeah.

**00:30:48**

Yeah.

**00:30:49**

Yeah.

**00:30:50**

Yeah.

**00:30:51**

Yeah.

**00:30:52**

Yeah.

**00:30:52**

Yeah.

**00:30:52**

Yeah.

**00:30:53**

Yeah.

**00:30:55**

Yeah.

**00:30:56**

Yeah.

**00:30:58**

Yeah.

**00:30:59**

Yeah.

**00:31:00**

Yeah.

**00:31:01**

Yeah.

**00:31:02**

Yeah.

**00:31:02**

Yeah.

**00:31:03**

Yeah.

**00:31:05**

Yeah.

**00:31:06**

Yeah.

**00:31:06**

Yeah.

**00:31:07**

Yeah.

**00:31:08**

Yeah.

**00:31:09**

Yeah.

**00:31:10**

Yeah.

**00:31:11**

Yeah.

**00:31:12**

Yeah.

**00:31:12**

Yeah.

**00:31:13**

Yeah.

**00:31:13**

Yeah.

**00:31:14**

Yeah.

**00:31:15**

Yeah.

**00:31:15**

Yeah.

**00:31:16**

Yeah.

**00:31:17**

Yeah.

**00:31:18**

Yeah.

**00:31:19**

Yeah.

**00:31:19**

Yeah.

**00:31:20**

Yeah.

**00:31:21**

Yeah.

**00:31:22**

Oh.

**00:31:51**

Yeah.

**00:31:53**

I hope you get a little bit.

**00:32:23**

I like your t-shirt.

**00:32:25**

Thank you.

**00:32:53**

Thank you.

**00:33:23**

Thank you.

**00:33:53**

Thank you.
