---
source: local-first-conf-recording
title: "Solving for scale in open networks"
date: 2026-07-13
speakers:
  - "Paul Frazee"
source_recording: "../../recordings/2026-07-13 - Paul Frazee - Solving for scale in open networks.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/0930-solving-for-scale-in-open-networks"
source_transcript: "../raw/2026-07-13 - Paul Frazee - Solving for scale in open networks.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** I'm the CEO of Bluesky, one of the co-designers of the AT Protocol, and the topic of my talk is “Start From Scale.”

Adam mentioned a bit of my history, but to step through it: I first took a direct interest in decentralization around 2012 or 2013, when I was working on Secure Scuttlebutt. For anyone not familiar with Secure Scuttlebutt, it is an aggressively local-first social network. It's peer-to-peer. Dominic Tarr, the originator of the technology, imposed a constraint: no singletons. That essentially meant no authorities in the system, not even temporary authorities.

You would gossip all of your messages along the contours of the social graph. When your device talked to somebody else's, you would exchange social graphs, and that's how you would decide how messages should flow through the system. It's an intuitive idea, but it meant there was absolutely nobody in charge of the network. It was highly resilient, but had coordination challenges. If you had a user's ID, how did you reliably find them? There was no DHT and there were no services ensuring discovery, so even having a user's public key didn't guarantee that you could find their profile.

Challenges like that eventually led me to see whether we could trade a couple of those design choices. Staying in the local-first mentality, I then worked on Beaker Browser, a peer-to-peer web browser using the Dat protocol, which became known as Hypercore. That technology was essentially a variant of BitTorrent, similar in that regard to IPFS, though it shared much more with BitTorrent. It used a DHT to discover peers and tried to hole-punch connections to them.

For the Dat protocol, we used a Merkle tree, flipped on its side, to provide an append-only log of information. Because it was a Merkle tree, you could partially synchronize it, which had much better technical properties.

I worked on Beaker for about five years. It was one of those things you could make the best demo with, but not a great product. The goal was to make a product everybody could one day use, because the theory of change was that if we wanted to give everyone malleability and information access, the software had to be usable by an average person. The fact that the demo was great but the product didn't stick for most people was a big problem.

Other people in the peer-to-peer community and I started looking at how these systems worked. We knew we wanted high-scale information systems, but were having trouble making that work entirely at the edge, especially on mobile. We had to engage more directly with our requirements. That eventually led us to the AT Protocol, which we work on now.

Generally, I describe it as a new way to publish online, as you have always done. It is designed to be an open commons, something that can't be gated by companies looking to monetize the dataset, as X and Reddit have done in the last few years. It is dispositionally opposed to that. It tries to ensure that once data is published, it can't be taken back into exclusivity, because it should be communally owned. No company should have exclusive rights to users' collective activity.

On the spectrum of options, the cloud is how things are normally done. Local-first tends to treat devices as the canonical data store. We're in the middle, with federation.

To build intuition, we love to say it's just JSON—nothing scary about that. The JSON has types, so it's actually a strongly typed JSON system. We call the schemas lexicons, but they're like JSON Schema and familiar to anyone who has done validation.

It's also hyperlinked. Every user appears almost as if they have a website, publishing JSON instead of HTML. When I make a post, I publish it as JSON on my personal account. If somebody replies, they publish their own post with a link to mine in the reply field. Applications aggregate the data, almost as a search engine aggregates the web. Because of the link, an application knows it's a reply and puts it in a thread. That's exactly how Bluesky functions.

Anyone can aggregate this data at any time. That's where you get malleability: it is highly remixable because the data is published, and other applications can introduce new interpretations, new data types, and so on.

The name of the talk is “Start From Scale,” so let's get into why. Bluesky was created through a grant, positioned as a consultancy to Twitter for a specific purpose: to create an open protocol Twitter could adopt. That was in the contract.

The broad requirements were to create an open network, preserve Twitter's existing features, and support Twitter's scale. If Twitter migrated, we couldn't drop functionality. That generalized into a “no steps backward” disposition toward the user experience people expected. Supporting Twitter scale was a tall order. In 2022, Twitter had 240 million daily active users. That's a scale that requires different thinking from what we had done in the peer-to-peer world. When you're trying to show a post with 10,000 likes, you're not going to do that entirely on an edge device.

We began with the question: how does anybody scale a service? Forget the open-network part; how did Twitter do it? We thought hard and realized: more servers. Obviously it's a little more complicated than that. We drew a lot of inspiration from what we jokingly call the Bible on our desks: Martin Kleppmann's book.

Here is a diagram Elon posted of Twitter's 2022 architecture, specifically how the timeline is served. I've simplified it significantly. The API server receives a “get timeline” request and farms it out to the timeline server, which calls other services for particular functions: user recommendations, advertising, and the user's onboarding state. Those three don't even touch the core ranked-post service, itself a sophisticated piece of technology.

When a user sends something other than “get timeline,” such as “post tweet,” you don't fan the tweet out directly to each individual service. You send it to a canonical data cluster, the source of truth for user activity. The purpose-built services consult that. Farming work out isolates workloads, but you then need to prevent the one database from becoming a bottleneck. At some point, the world's biggest Postgres is dying on you.

You think about latency tolerances. Roughly, 300 milliseconds is an upper bound for responding to a user. You might get away with that for a timeline, but many operations need to be significantly lower. Most of us aspire to 30-millisecond response times. That cascades backward: every point in the request chain requires tighter latency. Load on the user-data cluster becomes a problem. An outage could also take down the entire system if you haven't built resilience into the cluster.

The correct direction is to put databases at the different services and isolate the workloads. That provides resilience and read performance in localized pools of computation. But now you need to send information into these micro-databases. You have a sync problem.

You can't do this transactionally. When you write a tweet, you can't wait for every individual database to be written before telling the user it's done. You can do that in small cases, but in general the entire system becomes your single point of failure and writes take too long. You need an asynchronous approach, which brings distributed-systems problems: messages arriving out of order, being delivered multiple times, or not being delivered. At-most-once delivery risks dropping the message entirely. Malformed messages introduce service-contract questions about what the receiving server expects.

We generally solve this with data replication. Technologies like Kafka provide a pull-based sync mechanism. You write the canonical source's event log into something each service can pull from. This is a resilient way to synchronize a canonical dataset throughout the caches in a cluster.

This is the Kafka-versus-RabbitMQ choice. RabbitMQ is a message broker. Message queues are ephemeral, target specific services, don't support replay, and tightly couple the system. They're designed for tasks such as scheduling email or push notifications, not data replication.

An event log like Kafka is durable for a tunable period, broadcasts so anyone can pull from it, supports replay, and creates little coupling. If a network partition occurs or a service goes down, you can bring the service back and replay from the log to catch up with the canonical store. The event-log approach has much more resilience.

This is a common way to scale a high-volume system. Many services are decoupled and customized to their workloads. An advertising server may need an analytics database; a user-recommendation server may need a graph database. Replicating from the canonical store lets you create those task-specific miniature applications. You use event logs, keep the canonical store at the center, and cache it throughout dependent services.

But we're talking about open systems. This cluster needs to cooperate with many other clusters that provide more or less the same application openly. Now you have to deal with the wide-area network, which is slow—frequently beyond the 300-millisecond upper bound—unreliable, and potentially hostile. You can't rely on transactions. You face out-of-order and duplicate delivery, ambiguous responses, and unbounded outages. These are the same category of problems.

That was our basic thought: the problems of scaling an internal data center are similar to those inside an open network. Both are high-scale distributed-systems engineering. We tried to use the same solution: data replication.

Instead of Kafka, we built an open data-replication protocol. Instead of one canonical user database inside a data center, you have a user-data network. The replication stream moves not only within a cluster to its services, but to external organizations and their clusters. That creates the data firehose many people have heard us discuss.

In AT Protocol terms, personal data servers are the canonical stores, hosted across the internet: sometimes on our servers, sometimes on rented droplets or in home labs. Each provides a replication stream. Applications subscribe to and ingest the streams to create applications. It's the exact same model as before—the same slide. We essentially applied our Kafka model to an open network.

We added cryptography. Records users write into their canonical store are signed at rest, so you can prove authenticity without asking the database whether the record came from that user. You check the signature. That's why it's called the AT Protocol: Authenticated Transfer Protocol.

This allows an entirely optional optimization: relays. A relay listens to all the PDSs on behalf of applications. An application can request a combined stream instead of talking to every PDS itself. That's nice for application developers and PDS operators, who interact with fewer parties. It creates an optional, emergent star topology that reduces network complexity. It isn't strictly necessary; you can always operate without a relay.

We wanted strong dataset-completeness guarantees. If I'm interested in a user's data, I need to know I have all of it: no dropped messages or replies. We wanted per-repository message ordering and at-least-once delivery. We expected common partitions and required recovery. We also wanted low coordination, especially at write time. A write shouldn't depend on another service that might have incompatible software. The system should be highly decoupled so incompatibilities can be recovered from later. Signed data supports store-and-forward, as relays demonstrate.

I sometimes say RSS was really close to what we built: it's almost a small data-replication protocol. The RSS comparison helps people understand AT Protocol's shape.

Jan is here, and I checked with him before putting up this slide. The CouchDB lovers know what I'm talking about: it was so close. Cross-organizational database replication was amazing, and the two-tiered Couch-app model was exciting. They chose to focus elsewhere, but, as Jan said, it led the way toward a lot of what became modern computing.

I also want to clarify the difference between ActivityPub and AT Protocol. ActivityPub takes a message-passing orientation; AT Protocol takes an event-log orientation. We are a data-replication network, not a message-sending network. This affects dataset-completeness guarantees. We have an easier time ensuring we get all the data, whereas message passing can struggle. Using RabbitMQ instead of Kafka inside a data center would create the same challenge. That's a core technical difference.

We're here to talk about local-first, so let's discuss its relationship with AT Protocol, which generally has to do with scaling down. There are two methods.

First, a smaller server can simply get less data. Ask for fewer repositories, select a subset, and synchronize only them. You work with a subset of the network, resolving and fetching users as needed instead of in totality. You can crawl according to some logic. A social graph is a good basis: synchronize a user who logs in, pull that user's follows, perhaps follow one friend-of-a-friend hop, and build a socially clustered subset of the network. The Secure Scuttlebutt people know where I'm going with this. I think it's the most fun approach.

You can also use discovery services. Our relay has an endpoint called “List Repos by Collection,” which identifies repositories containing a particular lexicon, such as one for Tangle or npmx Live. You can select users by the applications they engage with and filter out the dominant Bluesky content. You can offload some queries to services like Microcosm or Bluesky while keeping most of your system on a small device, as long as those queries remain optional rather than a hard dependency. In effect, you slice down the whole network.

The second option is to bootstrap subnetworks. This goes off the main AT Protocol network while reusing its user-identity system. Identity is anchored in DIDs. DID documents distribute key material and service pointers, and are therefore useful for introducing other protocols on top of AT Protocol. DIDs are matched to domain names, and user profiles become searchable in services like Bluesky. You can use that discovery to find people, retrieve their DID documents and keys, and form subnetworks with selected members.

AT Protocol now has a proposal for permissioned, non-public data called permissioned spaces. If the public network is AT Protocol, the permissioned spaces are little baby AT Protocol networks bootstrapped from the main network. You declare a space and its members, then form a small side network that exchanges records with semantics similar to the public network, but only among the people you want to share with.

This approach is generalizable to any protocol. Jake Lazaroff demonstrated it yesterday by using AT Protocol for signaling to bootstrap a WebRTC connection. You can use AT Protocol to set up any network that is useful to you.

We see the systems as significantly complementary. The Atmosphere is designed for high scale, not as a local-first network. But it creates space for local-first, and can help bootstrap local-first networks while reducing the number of problems their developers must solve.

Daniel jokingly said we should create an acronym for this, then came up with something so dumb we had to share it: the “low-fat network.” Same great taste, now with lower calories.

To summarize, we started from scale because scale was a requirement. Perhaps if I'd thought harder about my goals before Bluesky, I would have grappled with this sooner. For Bluesky, it was clear we had to begin with that requirement. AT Protocol is designed for global identity, discovery, and data publishing. Having come from local-first, we moved into federation to meet those requirements.

We concluded that this is a distributed-systems challenge, like creating any high-scale service. Server links are bad whether they're inside a data center or across the internet, so you can apply the same techniques: decouple workloads, establish good synchronization guarantees, and isolate faults. Thank you all very much.

**MC:** I'm curious about the small nodes, the one you represented with brackets and three dots. I assume you have a long tail: some huge ones your company runs, some big-ish ones, and then many tiny ones. Twitter and other large-scale companies may have three homogeneous data centers with this problem, but doing it across nodes of hugely different scales feels unique, perhaps unprecedented. What challenges have you had, or has this design worked well so far?

**Presenter:** The technical approach generally works well, but it can be challenging for new developers, so there's a tooling challenge in front of us. It will get better. Technically, the goal is to ensure cost and complexity scale with how much you're pulling in. If you're trying to operate a big network mirror, the laws of physics kick in because you have a lot of data. That's the first dimension of cost. The second is the number of local users on your node. As long as cost stays proportional to those two things, we're in business, and so far that's broadly how it has played out.

Interesting tools like the relay discovery system, which provides only repositories fitting a particular application, came later. We realized that was a huge benefit. Somebody trying something new can prune out a lot of unrelated activity.

**Audience:** There was a brief mention of PLC in the protocol discussion. Can you quickly explain what it is and why its design was chosen?

**Presenter:** PLC stands for Public Ledger of Credentials. It's a registry that we hope will become an independent internet organization. It's the name service: it maps a unique, non-human-readable ID to a DID document so you can look up the keys.

**MC:** That sounds like a good topic for lunch. Last question: someone says they now understand AT Protocol better. Why use it for WebRTC signaling if it's data storage? Messaging makes sense, but this is a replicated database. Does AT Protocol have plans for message passing, or should we leave that to protocols using AT Protocol?

**Presenter:** We don't currently plan to introduce message passing. We might, but not currently. Jake made a good case for using AT Protocol because the infrastructure is available and the PDS is there. Especially once permissioned spaces land, you can clean up old signaling documents at some point. If it makes life easier, go ahead.

**MC:** Maybe it feels funny to put something so ephemeral in the permanent record forever.

**Presenter:** Permissioned spaces are probably pretty disposable.

**MC:** Makes sense. A round of applause for Paul.
