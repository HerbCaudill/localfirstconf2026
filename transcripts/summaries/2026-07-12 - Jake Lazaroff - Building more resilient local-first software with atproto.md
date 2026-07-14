---
source: local-first-conf-recording
title: "Building more resilient local-first software with atproto"
date: 2026-07-12
speakers:
  - "Jake Lazaroff"
source_recording: "../../recordings/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1130-building-more-resilient-local-first-software-with"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.md"
cleaned_transcript: "../cleaned/2026-07-12 - Jake Lazaroff - Building more resilient local-first software with atproto.md"
---

# Building more resilient local-first software with atproto

**Jake Lazaroff · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1130-building-more-resilient-local-first-software-with) · [Raw transcript](../raw/2026-07-12%20-%20Jake%20Lazaroff%20-%20Building%20more%20resilient%20local-first%20software%20with%20atproto.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Jake%20Lazaroff%20-%20Building%20more%20resilient%20local-first%20software%20with%20atproto.md)

## Overview

Jake Lazaroff argues that local-first applications can become more resilient by replacing bespoke application and sync servers with shared, standardized atproto infrastructure. After explaining how PDSs, relays, and optional AppViews fit together, he demonstrates three static web applications that use atproto primitives for collaborative text editing, collaborative to-do records, and WebRTC signaling. His main takeaway is that atproto may already offer a practical route toward a “local-first endgame” in which applications depend on simple, interchangeable infrastructure rather than servers whose disappearance breaks the product.

## Detailed notes

### A local-first app outlives its sync server

Lazaroff opens with a trip-planning application he built after finding existing tools inadequate. Inspired by Ink & Switch's Embark case study, it combined a rich-text editor with a map and let users move between informal notes and a structured itinerary. It was collaborative and local-first, using Yjs and a managed version of an open-source sync server.

About a year later, the sync server's developer was acquired and the service disappeared. The local data survived, which Lazaroff calls a limited local-first success, but smooth synchronization did not. Users were effectively pushed back toward sending files to one another. This illustrates his central problem: multi-device applications need infrastructure, yet application-specific infrastructure makes its operator the app's single point of failure.

### Atproto without an AppView

Lazaroff became interested in atproto after the previous Local-First Conf. He contrasts it with conventional architectures in which each application keeps a separate data silo behind its own server. In atproto, users keep data in a personal data server, or PDS, and grant applications access. Multiple apps can work with the same user-controlled data rather than being confined to private, app-specific portions.

Atproto also supplies storage, fine-grained authorization tied to identity, and network-wide push updates. A client such as Bluesky authenticates with a PDS and reads or writes records. PDS writes flow to relays, which aggregate distributed event logs into a firehose. An AppView can materialize and index that data, but applications often turn it into a bespoke application server and may place private data behind it. PDSs and relays have standardized behavior and can be run by third parties; an AppView, by contrast, becomes another component the app developer must keep alive.

Lazaroff's experiments therefore omit the AppView entirely. Each is a collection of static files whose dynamic behavior uses only PDS and relay primitives.

### Experiment one: Yjs synchronization over atproto

The first experiment is a collaborative ProseMirror text editor backed by Yjs. Each user has a repository within a PDS that resembles a NoSQL database: collections contain JSON records. Whenever Alice's Yjs document changes, it emits a binary update. Her client encodes each update as a record containing Base64 data and a document ID, then writes it to her PDS. To reopen the document, it fetches the relevant records and lets Yjs merge them into the full in-memory state.

Collaboration works through replication rather than multiple users writing to one PDS. Alice creates a document metadata record listing collaborators, identified by DID, and sends its URI to Bob. Bob reads the metadata from Alice's PDS, fetches updates from every collaborator, merges them, and copies them into his own PDS. Both clients also listen to a relay, so new PDS writes arrive in near real time and can immediately be merged into the displayed document.

In the demo, Lazaroff shows his main and alternate accounts alongside development panels displaying their PDS records. Typing first produces relay updates on the other screen without copying records into the alternate PDS, because the alternate account is not yet an editor. After he adds it, existing updates replicate to the second PDS and edits flow in both directions. He pauses the simulated network, makes changes on both sides, then resumes it and shows the records synchronizing. This produces real-time collaborative editing without a dedicated Yjs sync server.

The drawback is interoperability. The logical document is spread across binary Yjs update records and must be reconstructed. Other atproto applications cannot understand the document without knowing Yjs and the application's document structure.

### Experiment two: independently meaningful CRDT records

The second experiment, a collaborative to-do list, tries to be more native to atproto. Each to-do is ordinary, standalone JSON that another app can understand as if collaboration did not exist. CRDT metadata is added in a separate object that other applications may ignore.

The metadata implements last-write-wins registers at field granularity. Each field's logical clock increments when that field changes, and merges select the value with the higher clock. Separate edits to a to-do's text and completion state therefore do not conflict. As in the editor, a metadata record names collaborators; each participant fetches and merges their records, replicates them to their own PDS, and listens to the relay for new writes.

Unlike the append-only Yjs updates, to-do edits overwrite records and can race. Atproto's compare-and-swap mechanism lets a client submit the hash of the record version it expects. If the PDS has a different version, it rejects the write; the client fetches that version, merges it with its own CRDT state, and retries until it succeeds.

After refreshing a briefly uncooperative demo and adding his alternate account as an editor, Lazaroff shows changes replicated between PDSs. He then disconnects the simulated network, changes the same item on both sides, reconnects, and shows the states merging. The result remains collaborative while individual records are independently legible to other atproto software.

### Experiment three: WebRTC signaling

The third experiment, which Lazaroff calls “atprotocol,” uses atproto to arrange video calls. WebRTC peers typically contact STUN servers to learn their public IP address and port, then exchange that information through a signaling channel such as a WebSocket server. Once they have each other's details, they attempt a direct connection.

Because WebRTC signaling is transport-agnostic, the application replaces the dedicated signaling server with PDS records and the relay. Alice writes her connection information and Bob's identity to her PDS. Bob, already watching the relay for records addressed to him, receives it and can write an answer record to his own PDS. The relay carries that response back to Alice so the peers can attempt to connect.

Lazaroff invites attendees with an atproto account to call him through the demo. The venue Wi-Fi cannot support the direct connection, so he enables a TURN server that proxies the traffic, a concession he notes is common in peer-to-peer systems. A call request and its signaling record arrive, but repeated attempts do not establish the video connection.

He tries to recover by demonstrating that WebRTC can also carry arbitrary data. His text editor normally throttles atproto writes to stay below PDS rate limits; adding WebRTC as a second Yjs transport should allow immediate peer-to-peer updates while atproto continues to provide persistent synchronization. This connection also fails on stage, so he asks the audience to take the behavior on trust. He counts the session as three demos with two working properly.

### Shared infrastructure as the resilience strategy

Lazaroff closes by returning to why he imposed the constraint of using no application server beyond PDSs and relays. He cites Ink & Switch's goal that servers be simple, generic, fungible, decentralized, and replaceable. He once interpreted that as a reason merely to open-source application servers, expecting another operator to replace one that disappeared. His travel app convinced him that almost nobody will step in, leaving the application broken despite the available source.

His alternative is to stop treating each app as an island and invest in shared infrastructure. He compares this to DNS resolvers: applications rely on them without each developer building and operating one. He believes atproto is moving toward this condition. Multiple independent providers host PDSs, individuals can run one even on a Raspberry Pi, larger applications provide full-network relays for public use, and community projects such as Microcosm can supply more complex aggregation without every app maintaining a bespoke AppView.

Lazaroff connects this architecture to Martin Kleppmann's “local-first endgame”: a standard synchronization protocol implemented by multiple services, allowing an app to switch providers when one disappears. Although atproto was not designed for that purpose and remains new, Lazaroff considers it the strongest current candidate and emphasizes that developers can experiment with it today. He invites others to improve his work, including by making a WebRTC demo that survives conference Wi-Fi.

### Questions on replication and longevity

In response to a question about whether PDSs should allow collaborators to write directly to another user's repository, Lazaroff agrees that this might be more efficient. He nevertheless defends the demonstrated replication model: like file synchronization, each participant receives peer changes, merges them into a local copy, and preserves primary data in multiple places. Referring to Martin Kleppmann's earlier talk, he argues that this distribution increases resilience to outages and hostile states, making replication a feature rather than a bug.

Asked whether a PDS is easier to run than DNS infrastructure, Lazaroff jokes that he has never run a DNS server and, given DNS's role in major cloud outages, guesses that a PDS is easier. Finally, he says the original travel planner was completed but has not been rebuilt since its sync server disappeared. He now intends to port it to the atproto architecture described in the talk and hopes a future report can be as short as, “It works.”
