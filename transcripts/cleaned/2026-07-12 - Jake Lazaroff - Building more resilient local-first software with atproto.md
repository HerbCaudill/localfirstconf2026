---
source: local-first-conf-recording
title: "Building more resilient local-first software with atproto"
date: 2026-07-12
speakers:
  - "Jake Lazaroff"
source_recording: "../../recordings/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1130-building-more-resilient-local-first-software-with"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.md"
---

**Presenter:** My job was to figure out a route between them. I didn't like any of the trip-planning apps that I found, so I made my own. It was heavily inspired by an Ink & Switch case study called Embark. Like Embark, it was this rich-text editor with a map bolted onto the side, and you could quickly move between loose, informal notes and a structured itinerary that you could visualize. It was collaborative: you could send someone a link and work on an itinerary together in real time.

I built it as a local-first web app with the CRDT library Yjs and an open-source sync server. To avoid a big cloud provider bill, I used a managed version of the sync server. About a year later, the developer was acquired and the sync server went away. So what happened to the app?

In one sense, it's a local-first success story. There's no incredible journey: you can still work on your documents, your itineraries, and collaborate with others if you undertake a little bit [unclear]. But I think that's a low bar. Without the sync server, we're back in this pre-cloud workflow where you're sending files back and forth and back and forth.

Like a lot of you, I've been noodling on these problems for some time. They're tough, because you do need infrastructure in the middle to have multi-device functionality. But as soon as you run that infrastructure yourself, you become the single point of failure for your app. Not long after last year's Local-First Conf, I became interested in atproto. You may also know it as AT Protocol or “at protocol.” The exact name is an ongoing bikeshed within the community.

Whatever you call it, it exists to escape the status quo architecture, where a service has your private data locked behind an application server and that's the only way to access it. This person here is frowning because she needs to pay Twitter something like $6,000 a month to access her own tweets. Atproto, in contrast, gives each user their own data in a place they control, and apps simply request access to it.

The difference becomes even starker when you look at multiple apps. In the status quo architecture, each app has a separate silo with a slice of your data. In atproto, all apps write their data to the same place that you control. Further, there's no cordoned-off area each app has within your data. Each app can write to whatever you give it access to. If you wanted to make an alternate Bluesky client, it's very easy to have it arbitrarily edit any data that Bluesky creates for you.

You might think this makes development more difficult, but atproto gives us useful primitive functionality: storage that developers don't need to maintain, fine-grained authentication to users' data and identity, and push updates of changes across the entire network. These are powerful capabilities. Often they're the difference between an app that can be just a bunch of static files and one where you need to maintain a server and database.

Let's look at how this works in more detail. We'll start with a client—say, Bluesky on your phone. That client authenticates with a PDS, a personal data server. That's the name for the place where all your data lives that you control. The client can read and write data. Those writes get forwarded to a relay, which aggregates the distributed event log of changes from all the PDSs into a single firehose.

At the end of the line, there's something called an AppView. In theory, an AppView is just a materialized view, like a cache, for data from PDSs and relays. In practice, a lot of apps use it as an application server, positioning it between clients and PDSs, where it takes actions on the user's behalf. Sometimes there's even a private database that can only be accessed via the AppView where some of the data is stored.

You might notice a problem. The PDS and relay have standardized behavior and are run by third parties. The AppView is bespoke to your app, and you're responsible for developing, maintaining, and generally keeping it available. The good news is that the AppView is optional. You can make your app without it. The more I think about it, the more I am convinced that this architecture can give us much more resilient local-first apps.

I'm going to show three experiments in that spirit. Each one is just a bunch of static files using primitive functionality from the PDS and relay. There's no AppView or other application server handling the dynamic behavior.

The first experiment was a collaborative text editor. I think of this as the hello world of local-first apps, because the off-the-shelf components are so good that it's relatively easy to throw something together quickly. I chose ProseMirror and Yjs. The main difference between this and something like Google Docs is that the data is stored in the user's PDS rather than a private database I control.

I want to go into more detail about how a PDS works. Technically, a PDS can hold multiple users' data; each gets what's called a repository. People tend to use these terms interchangeably, so when I speak of a PDS, I'm specifically referring to one user's repository. That repository is akin to a NoSQL database. Instead of tables, there are collections. Instead of rows, there are JSON documents called records.

Alice and Bob want to collaborate on a document. The first step is Alice editing on her own. Whenever a Yjs document changes, it emits an update event containing a binary description of that change. Alice takes each of those update descriptions and writes it as a record to her PDS. Each has the update encoded in Base64 and a document ID. To load a document from her PDS, Alice gets all these records, filters them down to the ones for her document ID, and uses Yjs to merge them. Because Yjs is a CRDT, this works out fine. At the end, she has a full document in memory that she can view and edit.

But what about collaboration? Alice and Bob can each write only to their own PDS. How can they edit a single shared document? Alice writes one metadata record for the document to her PDS. It has a document ID and a list of people with whom she'd like to collaborate. The DID PLC alphanumeric string identifies Bob's account. Once she's written that record, she can send its URI to Bob. He uses it to fetch the record from her PDS, goes through the collaborators, fetches updates from their PDSs, and replicates them to his own PDS. He has a full copy of the data.

That would bring Alice and Bob up to date whenever they opened a document, but we want to see updates live as they happen. The key is that writes from a PDS are forwarded to the relay in more or less real time. Alice and Bob each connect to the relay. When another collaborator makes a change and writes to their PDS, it is forwarded over the relay to the other client. They can merge it and display the updated document as it happens. We're essentially turning atproto into an ersatz Yjs sync server.

Here's my little text editor. On the left is my main account; on the right is my alt. DevTools show what's happening under the hood. There are no editors and no objects here. I'll type “hello.” You see the record come into my PDS, and it pops up on the other screen keystroke by keystroke. This is the binary displayed visually, but it hasn't been replicated to the other PDS yet because the other account isn't an editor.

I'm going to add [unclear] as an editor. As that happens, these updates come through. You can see them replicated to the other PDS. I can type “Local-First Conf” on this side, and the updates are replicated back. We can also hit pause to simulate the network going away, make a bunch of changes on either side, and hit play. It syncs again and all the records are replicated. That is collaborative text editing in real time over atproto with no dedicated sync server.

There is one drawback. All the updates for a document are smeared over different records. There's no cohesive document; we have to reconstitute it. Even if you do that, you get a Yjs document and have to understand its structure to do anything meaningful with it. That makes it difficult for other atproto apps to interoperate.

Experiment number two was figuring out what a more atproto-native CRDT is. The case study was a collaborative to-do list. Once again, Alice and Bob want to collaborate. Alice writes some to-do items to her PDS. The goal was for the JSON to look as it would if collaboration were not an issue—if this were a totally single-player app. These records are legible to other apps as standalone records. That's the foundation; any CRDT behavior needs to happen on top of it.

I chose to add a CRDT object to every record. Other apps can ignore it, but this metadata helps us collaborate. If you're familiar with CRDTs, you might recognize these as last-write-wins registers. On edits to a field, we increment the clock by one; when merging, we pick the field with the higher clock. The granularity is by field, so if I type edits into a text box while you check off a to-do, those edits will never conflict.

The rest looks similar. Alice has her metadata record. She adds Bob as an editor and sends him the URI. Bob fetches it from her PDS, fetches the to-do items from all collaborators, merges them, replicates them to his own PDS, and connects to the relay to get live updates.

There is one big difference. Before, we appended updates to a collection, so concurrent updates could never conflict. Now we're overwriting records in place, so it isn't safe to make concurrent changes to the same record. Atproto provides a guard against this called a compare-and-swap. When updating a record, you can provide a hash of what you expect. If it doesn't match what the PDS has, the PDS rejects the update. You then fetch the latest version, merge it, and retry the write. Because these are CRDTs, any two records can be merged, so we can retry as many times as needed until it works.

Here is another demo. Once again, the left side is my main account and the right side is my alt. We have all these to-do items, and we don't need to go through a list of records and work out how they fit together; each is meaningful on its own. I'm going to make changes, and they should show up on the other side. [He refreshes the demo and adds his alt to the list of editors.] There we go. We're back, and all the changes are back on the other side.

Now that my alt is an editor, when I make changes, the items are replicated to its PDS. We can see that “practice talk” is false and “finish slides” is true. If I make changes, they'll replicate back. If I pause to simulate the network disappearing, I can make changes to the same item, and when I press play again they merge together. That is collaborative to-do editing with a more atproto-native CRDT.

The last demo is something I affectionately call atprotocol: video chat over atproto. You type in someone's handle and a message pops up on their screen saying they have an incoming call. It uses WebRTC to connect the two peers, so I'm going to go briefly over how WebRTC works.

First, Alice connects to a STUN server to get her public IP and port. These servers are commoditized. Many big internet companies run them, and you can use them for free with no sign-in required. Once Alice has that information, she sends it to Bob in a process called signaling. Usually this involves a WebSocket server. If Bob wants to accept, he also uses STUN and sends his information back to Alice over the same channel. Once either peer has the other's information, they send packets; hopefully one reaches its destination and they can connect directly.

The key is that WebRTC signaling is transport-agnostic. In the same way we used atproto as an ersatz CRDT sync server, we can use it as an ersatz WebRTC signaling server. Alice uses STUN, then writes a record to her PDS containing the information from the STUN server and naming Bob as the recipient. That record makes its way to Bob, who must already be listening to the relay for records addressed to him. If Bob wants to answer, he also uses STUN and writes his own record to his PDS. It is forwarded to Alice, and eventually they will hopefully send packets and make the connection.

Now it's time for a somewhat risky conference demo—riskier than the last one. This QR code sends you to atprotocol.jakelazaroff.com. If you already have an atproto account, via Bluesky, Tangled, or your own PDS, you can go there and call me. My handle is jakelazaroff.com. I will confess that I tested this backstage and the Wi-Fi is not amenable to actual peer-to-peer connections, so I checked this “TURN server of shame” button, which inserts a middleman between the two. From the clients' perspective, they're just connecting to another peer, but this proxies everything through. It's not totally decentralized, but that's not peculiar to this demo. It's a common tip for peer-to-peer applications.

[An audience member calls. The signaling record arrives, but the video connection repeatedly fails.] All right, I'm going to move on for real. But I do have a way to maybe rescue this, because WebRTC doesn't only let you send video to other peers; you can also send arbitrary data.

You might have noticed this text editor. It's not quite real time: I'm throttling updates to stay below the PDS rate limits. I think this is a problem for the Wi-Fi. When I press this little turtle icon, it should turn into a rabbit, and we'll connect via atproto and WebRTC. Once this connects, the updates should be more or less instant. You can use this pattern to add real-time behavior to any local-first app. Yjs is really good at this sort of thing. You connect multiple transports, like atproto and WebRTC, and it figures everything out on the fly for you. But it doesn't look like this is working, so you'll have to take my word for it.

Those are three demos—two working properly—of local-first apps built over atproto. But why do it this way? Why impose the constraints of no application server and only the PDS and relay?

I think a lot about this quote from Ink & Switch: “Where servers are used, we want them to be as simple, generic, and fungible as possible, so that one unavailable server can easily be replaced by another. Further, these servers should ideally not be centralized: any user or organization should be able to provide servers to serve their needs.”

For a while, I thought this meant just using an open-source server, so if the app developer stopped providing it, someone else could step up. But I think that in 99 percent of cases, exactly what happened to my app will happen: no one steps up, and the app remains broken. So I've soured on that interpretation.

Instead, I think we should stop treating every app like an island and build on shared infrastructure. We do this already. No one sits around wondering how their app will resolve domain names to IP addresses. Someone somewhere is running DNS resolvers, but we mostly take them for granted because we've collectively invested in shared infrastructure that makes this stuff work.

My thesis is that we're getting there on atproto. There are multiple independent PDS hosts, and it's relatively easy to host one yourself; you can do it on a Raspberry Pi. Multiple larger apps host full-network relays that anyone can use for free. If you need more complex aggregation than you can get out of the box with a PDS and relay, projects like Microcosm run community-supported infrastructure to provide those aggregations without running your own bespoke AppView.

At the first Local-First Conf, Martin Kleppmann talked about the local-first endgame: a standardized sync protocol that multiple services could implement. Apps would point at one of those services, and if it went away, they could point at another. Atproto is pretty new and wasn't built with this in mind, but I think it's our best shot right now at that local-first endgame. You can build this stuff on it today.

If you want to build this stuff, hit me up and let me know what you're doing. Try it out and improve on what I've done. Come up with a WebRTC demo that works at a conference. Thank you so much.

**MC:** I feel like shared infrastructure that is more commodity is a concept we've been circling a lot in the last year or so. The fact that this infrastructure already exists, starting with Bluesky but now spreading out from there, is a really compelling opportunity.

We've got time for a couple of questions. Someone asks: great use of the protocol for syncing, but it feels like we're working around the restriction that PDSs don't allow other users to write directly to them, so we have to replicate and relay data across a lot of users. Could the protocol support PDSs allowing collaborative editing on a document in one user's PDS?

**Presenter:** Maybe. That would definitely make things more efficient. But if you think about the way I've done it here, where each user replicates changes to their own PDS, it's like file-level sync. You get changes from other peers and merge them into your local file. We just saw Martin up here a couple of talks ago talking about how this distributed source of truth—the primary data in multiple places—makes us more resilient to outages or hostile countries, or what have you. So we could do that, but I think this replication is a feature rather than a bug.

**MC:** How would you compare the difficulty of running a PDS to other kinds of infrastructure, say DNS servers?

**Presenter:** I've never run a DNS server, so since that seems to be a persistent issue in all these big cloud outages, I would guess a PDS is probably easier.

**MC:** The last question is: did you finish building your travel-planning app?

**Presenter:** I did finish building it, but I haven't rebuilt it since the sync server went away. My goal now that I've stopped spending all my time on this talk is to do it with atproto, using the implementation that I described.

**MC:** Do this for us: port it across, come back next year, and give us a report on how things turned out.

**Presenter:** Hopefully it's very short and I can just say, “It works.”

**MC:** Because it really is about how, over time, you start to learn that it's not just about building it in the first place; it's about how it unfolds. Everyone, give Jake a good hand.
