---
source: local-first-conf-recording
title: "Solving for scale in open networks"
date: 2026-07-13
speakers:
  - "Paul Frazee"
source_recording: "../../recordings/2026-07-13 - Paul Frazee - Solving for scale in open networks.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/0930-solving-for-scale-in-open-networks"
source_transcript: "../raw/2026-07-13 - Paul Frazee - Solving for scale in open networks.md"
cleaned_transcript: "../cleaned/2026-07-13 - Paul Frazee - Solving for scale in open networks.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Solving for scale in open networks

**Paul Frazee · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/0930-solving-for-scale-in-open-networks) · [Raw transcript](../raw/2026-07-13%20-%20Paul%20Frazee%20-%20Solving%20for%20scale%20in%20open%20networks.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Paul%20Frazee%20-%20Solving%20for%20scale%20in%20open%20networks.md)

## Overview

Paul Frazee explains why Bluesky designed AT Protocol by starting with Twitter-scale requirements rather than a purely edge-based local-first architecture. His central move is to treat an open network like a large distributed data center: use durable event-log replication to decouple services, isolate failures, and preserve complete user datasets, then scale the resulting public network down through selective synchronization or by using its identity and discovery infrastructure to bootstrap private local-first subnetworks.

## Detailed notes

### From peer-to-peer experiments to federation

Frazee traces his path from aggressively local-first systems toward AT Protocol. Secure Scuttlebutt prohibited even temporary authorities and gossiped messages along social-graph connections. This made it resilient and leaderless, but basic coordination was difficult: without a DHT or discovery service, possessing a user's public key did not ensure that their profile could be found.

Beaker Browser used Dat, later known as Hypercore, to create a peer-to-peer web. Its DHT found peers, hole punching established connections, and a sideways Merkle tree represented append-only logs that could be partially synchronized. Frazee says Beaker produced excellent demonstrations but not a product ordinary people consistently used. That failure mattered because his goal was to put information access and malleable software in everyone's hands, and high-scale applications proved difficult to run entirely on edge devices, especially phones.

AT Protocol emerged from confronting those requirements. Frazee describes it as familiar online publishing in a network designed as an open commons: no company should be able to enclose or exclusively monetize users' collective activity. Architecturally it sits between the conventional cloud and local-first's device-canonical model.

AT Protocol records are strongly typed JSON validated by “lexicon” schemas. Users resemble websites publishing JSON rather than HTML. A reply is a new record linking to the original post, and applications aggregate those linked records into threads. Bluesky works this way, but any application can aggregate and reinterpret the public data or introduce new data types.

### Starting from Twitter scale

Bluesky began through a grant as a consultancy tasked with creating an open protocol Twitter could adopt. The system had to remain open, preserve Twitter's existing user experience without backward steps, and support Twitter's scale—about 240 million daily active users in 2022. Frazee argues that a phone cannot independently compute a post's 10,000 likes, so the team studied how large centralized services scale, drawing heavily from Martin Kleppmann's work.

In Frazee's simplified Twitter timeline architecture, an API server calls a timeline service, which depends on separate recommendation, advertising, onboarding, and ranking services. New writes go first to a canonical data cluster rather than synchronously to every dependent service. A single central database eventually becomes a latency, load, and availability bottleneck, so each specialized service gets a workload-appropriate local database—perhaps analytics storage for advertising and a graph database for recommendations.

This creates a synchronization problem. A user-facing write cannot wait transactionally for every service database without making the entire system slow and fragile. Asynchronous delivery introduces duplicate, missing, malformed, and out-of-order messages. Large systems therefore replicate a canonical event log through technology such as Kafka.

Frazee contrasts Kafka with RabbitMQ. A message queue is ephemeral, targeted, tightly coupled, and generally not replayable, making it suitable for jobs such as sending emails or push notifications. An event log is durably retained for a configurable period, available to multiple consumers, and replayable. A failed or partitioned service can recover by replaying the log, so event-log replication provides resilient, decoupled caches of canonical data.

### Applying the data-center pattern to an open network

An open network joins many independently operated service clusters across a wide-area network that is slow, unreliable, and potentially hostile. Yet it produces the same distributed-systems problems as a data center: transactions are impractical, delivery is delayed or duplicated, responses are ambiguous, and outages can last indefinitely. Bluesky therefore reused the data-center solution.

AT Protocol is an open data-replication protocol analogous to Kafka. Personal data servers distributed across hosted infrastructure, rented droplets, and home labs hold canonical user repositories and expose replication streams. Applications ingest those streams both within and across organizational boundaries, creating the network's firehose.

Records are signed at rest, letting recipients verify their authenticity without contacting the originating PDS; Frazee identifies this as the source of the name “Authenticated Transfer Protocol.” Optional relays ingest streams from many PDSs and provide applications with one combined stream. This emergent star topology reduces operational complexity for both application and PDS developers, but direct synchronization remains possible.

The design targets complete user datasets, ordered repository events, at-least-once delivery, partition recovery, and low coordination at write time. Signed records can be stored and forwarded. Frazee compares the shape to RSS and praises CouchDB's early cross-organizational replication model as a near precedent.

This event-log orientation is also the central distinction Frazee draws from ActivityPub. ActivityPub sends messages, while AT Protocol replicates datasets. He argues that replication makes it easier to know that an application has received all of a user's records, much as Kafka is more appropriate than RabbitMQ for copying canonical data within a data center.

### Two ways to scale down

The first way for small servers to participate is selective synchronization. A node can resolve and fetch only chosen repositories instead of mirroring the network. Social-graph crawling can start with a local user, pull their follows, and perhaps include friends of friends, producing a community-shaped subset reminiscent of Secure Scuttlebutt. Relay discovery endpoints can list repositories using a particular lexicon, letting a node select people using a specific application and omit most Bluesky traffic. Optional external services can fill particular query gaps without becoming hard dependencies.

The second way is to bootstrap a separate subnetwork using AT Protocol's identity and discovery facilities. Decentralized identifiers, or DIDs, expose keys and service pointers through DID documents, while domain handles and Bluesky search help people discover one another. A local-first protocol can reuse those pieces to form its own network among selected members.

Frazee presents the proposed “permissioned spaces” feature as one example. Members declare a private space and exchange records with semantics resembling the public network, but only within a small side network. More generally, AT Protocol can bootstrap any protocol; Jake Lazaroff's WebRTC demonstration used it as a signaling mechanism. Frazee calls the Atmosphere a high-scale network that is not itself local-first but creates useful space and infrastructure for local-first systems—a combination jokingly named the “low-fat network.”

### Conclusion and questions

Frazee concludes that global identity, discovery, and publishing were hard requirements, which drove a team with local-first roots toward federation. Links are unreliable both inside data centers and across the internet, so the same disciplines apply: decouple workloads, build explicit synchronization guarantees, and isolate faults.

Asked about nodes ranging from Bluesky-scale infrastructure to tiny community servers, Frazee says technical cost should remain proportional to two factors: how much global data the node ingests and how many local users it serves. He says the architecture has broadly achieved that, though developer tooling remains difficult. Relay discovery that filters repositories by application is an example of a later feature that helps small nodes exclude irrelevant activity.

In response to an audience question, Frazee defines PLC as the Public Ledger of Credentials, a registry intended eventually to become an independent internet organization. It maps a stable, non-human-readable identifier to a DID document containing keys.

The final question asks why a durable replicated database should carry ephemeral WebRTC signaling and whether AT Protocol plans to add message passing. Frazee says no such plans currently exist, though that could change. Existing PDS infrastructure can make signaling convenient, especially when permissioned spaces allow old signaling documents to be cleaned up; he suggests those spaces may themselves be disposable.
