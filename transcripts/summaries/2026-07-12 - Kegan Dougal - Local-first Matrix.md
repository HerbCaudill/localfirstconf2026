---
source: local-first-conf-recording
title: "Local-first Matrix"
date: 2026-07-12
speakers:
  - "Kegan Dougal"
source_recording: "../../recordings/2026-07-12 - Kegan Dougal - Local-first Matrix.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1445-local-first-matrix"
source_transcript: "../raw/2026-07-12 - Kegan Dougal - Local-first Matrix.md"
cleaned_transcript: "../cleaned/2026-07-12 - Kegan Dougal - Local-first Matrix.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Local-first Matrix

**Kegan Dougal · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1445-local-first-matrix) · [Raw transcript](../raw/2026-07-12%20-%20Kegan%20Dougal%20-%20Local-first%20Matrix.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Kegan%20Dougal%20-%20Local-first%20Matrix.md)

## Overview

Kegan Dougal explains the authorization problem Matrix encounters when moving from always-available federated servers toward peer-to-peer, local-first clients: because replicated data does not prove when it was created, malicious users can backdate permission changes into an event graph. He proposes non-blocking finality arbiters that periodically lock event history into epochs, then demonstrates an early Bluetooth-only peer-to-peer Matrix prototype and asks local-first developers to make explicit trade-offs among trusted sequencing, reversible permissions, and protection from backdating.

## Detailed notes

### From federated Matrix to local-first replicas

Dougal introduces Matrix as a decentralized, federated network resembling email or Mastodon. Users register with servers that exchange events through a federation protocol. A room remains usable by people on one server even when other participating servers are unreachable, making Matrix resilient to network partitions. Room creators administer membership and can grant or revoke privileges, kick users, and ban them.

A Matrix room is a CRDT: each server holds a replica, and Matrix's state-resolution algorithm acts as the merge function. In the federated model, many users share each server replica. A peer-to-peer local-first model instead places a replica with each user. The structures are similar, but partitions among phones are typically longer and more severe than partitions among servers.

Dougal illustrates the Matrix event graph. A room-creation event is a JSON object whose hash becomes its event ID. Bob's join event includes the creation event's ID in a previous-events field, and its own hash therefore incorporates that causal link. Concurrent writes by different servers produce forks. A merge event refers to multiple previous event IDs, joining the forks. Choosing a result is easy for compatible operations but difficult when operations conflict. He notes that the hash-linked graph remains robust even when some replicas are Byzantine.

### Why group authorization needs sequencing

A local-first collaborative application needs data synchronization, globally identifiable users and routable traffic, and rules defining who may perform each operation. Overlay networks such as Iroh, Reticulum, or Yggdrasil can provide routing, but authorization is harder. If Bob tries to remove administrator Alice, something must reject the operation.

Central server enforcement is simple but undermines local availability. If every write requires an authorization server, a partition prevents writes even though the CRDT replicas could otherwise accept and later synchronize them. Losing that server can stop the entire system.

Capability tokens can protect access to a live API, but they struggle with delayed history. Two phones passing briefly might exchange a week of group-chat events, including a ban issued five days earlier by someone who has since lost administrator status. A token representing current authority does not readily establish whether that historical operation was authorized when created.

Encoding permissions in the CRDT produces what Dougal calls the dueling-admins problem. Alice creates a room, promotes Bob, and then Alice and Bob concurrently demote each other. A merge must order those events because whichever executes first invalidates the other. A deterministic tie-break, such as preferring the most senior member, can settle the legitimate concurrent case.

The same event graph, however, can be produced maliciously. After Bob legitimately demotes Alice and several days pass, Alice can create a backdated demotion of Bob. To a replica, the delayed malicious graph is indistinguishable from the legitimate concurrent graph. Any deterministic rule that lets Alice win the first case also lets her win the attack.

### Why common alternatives fail

Hash ordering is vulnerable to grinding: an attacker can create and discard events until one has a favorable hash. Applying all concurrent demotions permits retaliation by someone already stripped of authority and can leave a room with no administrators. Consensus is vulnerable to Sybil attacks because peer identities are cheap public-private key pairs; Alice can fabricate enough accounts to control a vote.

Proof of work or stake gives an advantage to whoever has more resources and assumes an external blockchain. Dougal concedes that a large existing network such as Ethereum might make reorganization impractical for individual room members, but relying on it would no longer be meaningfully local-first.

Forbidding demotions avoids the conflict but leaves no practical response to mistakes or compromised devices. Matrix currently forbids administrators at the same power level from demoting one another, yet a user can still backdate a fork. Alice can create a sock-puppet administrator, self-demote, and craft the fork to precede Bob's join, invalidating her later promotion of Bob. Rejecting all forked behavior is also impractical because an innocent user restoring a lost phone from backup can create the same shape without malice.

### Finality arbiters and epoch events

Dougal concludes that the graph needs additional information produced by an independent party and used to constrain execution order. His proposed finality arbiter has one limited responsibility: announce the latest events it has observed by emitting an epoch event.

Because every event links backward to previous events, an epoch closes the set of history it contains. A later backdated event cannot be inserted into that finalized set; it remains in the pending epoch. The execution rule processes finalized events before pending ones. Continued epoch events create nested layers and effectively rebase disconnected writes after already finalized history.

The arbiter differs from a synchronous authorization server. Replicas continue accepting and exchanging writes while the arbiter is unreachable; only their order remains unstable and susceptible to backdating until a new epoch clears the pending buffer. The arbiter cannot create membership changes, forge signed events, or exercise permissions. With end-to-end encryption, it can order ciphertext without seeing event contents. If it equivocates by issuing concurrent epoch events, participants can detect that behavior and identify it as malicious.

Dougal generalizes the lesson: authorization usually relies on a trusted sequence that users cannot manipulate, such as request arrival order at a server. Fully local peers cannot prove whether an apparently old event was delayed by the network or created in retaliation, because the data itself does not reveal its creation time.

Existing signaling servers, already trusted for store-and-forward and NAT traversal, could act as finality arbiters for a document or chat group. Matrix may not need an external service: in recent room versions, the room creator is an immutable, all-powerful member and can provide the trusted finality role.

### Bluetooth peer-to-peer Matrix demo

Peer-to-peer Matrix moves the homeserver onto each client and lets clients exchange the existing federation API over an overlay network. Dougal says the team has built a small embedded Rust homeserver, though the code is still extremely early. Its immediate value is as a test environment for Matrix under long-lived, severe peer-to-peer partitions.

In the demonstration, three Android phones running Element X are placed in airplane mode with only Bluetooth enabled. Alice, Bob, and Charlie register with their local servers. Bluetooth advertisements expose friendly device names. Alice creates a group and invites Bob and Charlie; the clients establish Bluetooth L2CAP links, run Iroh over them, and send federation requests. Invitations and chat activity propagate serially between the devices without internet or LAN access. A reaction reaches Bob after a short delay because Bob and Charlie do not initially have an active connection. Dougal calls the prototype rough and buggy but makes sideloadable APKs available through a QR code.

The prototype has no store-and-forward layer, so two devices must be online together. Existing Matrix homeservers might eventually provide that function. It also uses custom Matrix specification changes and does not yet interoperate with the normal federation network. Missing features include ephemeral data units such as typing indicators and receipts.

### The final trade-off

Dougal closes with the claim that data is timeless: timestamps, vector-clock positions, and graph positions cannot prove when data was created. Ruling out additions to the past requires a trusted timekeeper to declare that a boundary has passed, which is the arbiter's role.

He frames a three-way trade-off among a trusted third-party timekeeper, the ability to demote users, and protection from backdating attacks. Matrix's immutable trusted creator makes its choice comparatively straightforward. Other local-first applications with group permissions must decide explicitly which guarantees and trust assumptions they are willing to adopt.
