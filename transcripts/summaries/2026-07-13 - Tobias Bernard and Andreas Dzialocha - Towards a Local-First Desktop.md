---
source: local-first-conf-recording
title: "Towards a Local-First Desktop"
date: 2026-07-13
speakers:
  - "Tobias Bernard"
  - "Andreas Dzialocha"
source_recording: "../../recordings/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1200-towards-a-local-first-desktop"
source_transcript: "../raw/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.md"
cleaned_transcript: "../cleaned/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Towards a Local-First Desktop

**Tobias Bernard and Andreas Dzialocha · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1200-towards-a-local-first-desktop) · [Raw transcript](../raw/2026-07-13%20-%20Tobias%20Bernard%20and%20Andreas%20Dzialocha%20-%20Towards%20a%20Local-First%20Desktop.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Tobias%20Bernard%20and%20Andreas%20Dzialocha%20-%20Towards%20a%20Local-First%20Desktop.md)

## Overview

Tobias Bernard and Andreas Dzialocha describe an effort to make local-first synchronization a native capability of the Linux desktop rather than a server service every application must build independently. Starting from GNOME's existing app, sandbox, portal, Flatpak, and Flathub infrastructure, they use the Reflection note-taking application to discover common UX and systems requirements, then develop p2panda primitives for identity, device groups, encrypted synchronization, support nodes, mesh networking, and high-level event APIs. Their main takeaway is that free-software communities can build a resilient, privacy-preserving alternative to proprietary cloud platforms by moving shared local-first capabilities into the operating system while keeping applications small, native, and independently maintained.

## Detailed notes

### From software freedom to emancipatory computing

Bernard introduces his work on GNOME, while Dzialocha introduces the five-person p2panda team, which has developed and maintained the project since 2020. Both projects participate in MOLA, a collective that brings together contributors from across the free-software landscape.

Bernard says the collective is responding to a broad sense that computing's problems are connected to worsening political, economic, environmental, and supply-chain conditions. Traditional software freedom remains essential but is no longer sufficient. The group uses the term “emancipatory computing” for an approach that also puts design first, treats sustainability and resilience as requirements, adopts a more threat-aware posture, and recognizes dependencies on fragile hardware and internet infrastructure.

An end-user operating system is where these concerns meet concrete infrastructure. Bernard compares GNOME's stack with macOS: both include system applications, a developer platform, widget toolkit, design guidance, debugging tools, and a broader application ecosystem. GNOME applications use GTK and related native components. Flatpak provides an application format, Flathub distributes applications, and Portals mediate sandboxed access to system resources.

The major missing proprietary-platform feature is built-in synchronization. A small macOS application can rely on platform cloud services to sync user data, but free-software projects generally lack the money, servers, and support organization to provide equivalent infrastructure. Bernard and Dzialocha's thesis is that local-first architecture changes this constraint. Networking, synchronization, and CRDT primitives could live in the operating-system developer platform, allowing independent applications to reuse them.

### Reflection as an application-led experiment

The team faced a circular dependency: platform developers need applications to reveal requirements, but application developers will not adopt an unfinished synchronization stack. They broke the loop by building Reflection, a collaborative note-taking tool for the meetings and background documents they produce every day.

Reflection is available from Flathub, with an experimental macOS build, but remains in beta along with its lower-level dependencies. It became the basis for two years of workshops and development events about local-first applications on GNOME. Those experiments informed a new high-level p2panda node API with a more stable surface and language bindings suitable for GTK developers.

Dzialocha contrasts that API with p2panda's earlier collection of independent Rust crates. The modules address key agreement, multi-device management, synchronization, and peer connectivity, but using them directly requires expertise in concepts such as causal ordering and hole punching. The higher-level interface resembles an event stream such as NATS JetStream or Kafka, adding causal ordering and eventual consistency while allowing applications to choose their own database or CRDT.

Iroh currently provides internet transport. The team also wants a “walk-away stack,” in which applications continue operating when the connectivity substrate changes. Potential transports include Bluetooth Low Energy, LoRa, packet radio, and mesh topologies. Reflection's value is therefore not only testing protocol components but also exposing UX patterns that may belong in the operating system.

### Identity, contacts, and device groups

Identity is one such pattern. Collaboration immediately raises questions about inviting people and resisting impersonation, especially in peer-to-peer systems. Bernard says the safest known practice is to encourage in-person verification and use client-assigned pet names. Reflection currently avoids making strong identity claims by using color-and-animal pseudonyms.

The longer-term wireframe pushes users toward in-person verification but also allows a voice call. The local user, rather than the remote party, decides the verified person's name. At the system level, applications remain sandboxed and request contacts through a Portal dialog. The portal can store peer identities and pet names, synchronize them among the user's devices, and disclose only the selected public keys to an application. A future GNOME Contacts application could display peer-to-peer identifiers beside phone numbers and email addresses.

Device removal is necessary even for personal synchronization because devices can be lost or stolen. p2panda's auth CRDT represents one user as a group of devices, then forms collaboration groups from those user groups. Documents can grant different access levels to groups or individuals. A proposed OS interface lets administrators remove or block members or downgrade them to read-only without requiring applications to implement the model themselves.

### Encrypted support nodes

Pure peer-to-peer synchronization fails when the person who needs an update and all peers holding it are offline. p2panda addresses this with optional support nodes: more available peers that temporarily hold fully encrypted blocks with almost no metadata. They do not need decryption keys and are not authoritative. Connection patterns may remain observable, but the stored content is unlike cloud services that hold data in plaintext.

Support nodes are intentionally simple and easy to self-host through Iroh, including on a Raspberry Pi or old smartphone. At their core is a minimal prefixed key-value store with put and get operations. An access token can expire and specify storage and time limits without being tied to a user's identifier, and any protocol can use the service.

For p2panda, an adapter maps its signed append-only log and multi-writer DAG into opaque encrypted values. Minimal metadata improves privacy but forces clients to handle out-of-order blocks and do more work after retrieval. Dzialocha presents this as a deliberate tradeoff.

The encryption system begins with Signal's X3DH when two peers meet, then adds forward secrecy through continuing key updates. A group-key scheme allows a new member to decrypt historical document data, as required when joining a wiki. Keys currently rotate when members are removed, providing post-compromise security. The team has also implemented a decentralized form of Signal's Double Ratchet, which the Dash Chat project is using for peer-to-peer messaging.

At the operating-system level, a user could configure support nodes once, after which sandboxed applications would inherit a background synchronization capability with end-to-end encryption.

### Current engineering work

An NLnet grant funds the experimental work of integrating p2panda synchronization into the operating-system layer. The team sees p2panda as the first protocol used for exploration, not necessarily the only one. It wants to accommodate other strategies, including file synchronization, behind more unified system interfaces. Current tasks include bringing encryption, data management, and the auth CRDT into the high-level event-processing API, then collaborating with the GNOME community on portal APIs, services, and UI.

A German Prototype Fund grant supports work with Dash Chat on resilient encrypted communication without the internet. The project is researching mesh-routing and efficient group delivery over Bluetooth Low Energy and LoRa while preserving eventual consistency. A shared group key protects both data stored by support nodes and messages traveling through a store-and-forward mesh.

Dzialocha says the hard p2panda components have been engineered and tested, making a version-one release visible but not yet ready to announce. Remaining work includes stabilizing high-level APIs, preserving backward and forward data-type compatibility, expanding fuzz tests and network simulations, publishing specifications, and offering a stable Rust API. The project also needs a more accessible website and getting-started documentation.

### Growing an application ecosystem

The team continues to test p2panda with GNOME application developers. Recent experiments added a p2panda backend to a calendar application and explored collaboration in a video player. In workshops, newcomers start from an empty template and produce a syncing application in about an hour; a small tic-tac-toe app serves as a minimal example. These sessions reveal where APIs remain difficult and what system services applications actually need.

Bernard also describes the Berlin event series Boiling the Ocean, which brings people together for hacking, talks, and discussions about problems expected to take a decade or more. The name also acknowledges the literal environmental crisis. The p2panda and MOLA sites provide further information and ways to participate.

In closing, Bernard presents GNOME as evidence that a high-quality end-user operating system and app stack can exist in the commons. Developers do not have to depend on big-tech platforms, ship a 400-megabyte Chromium runtime, or use a proprietary cloud. They can distribute a fast, native, roughly 15-megabyte application through Flatpak and use peer-to-peer or support-node infrastructure. The technical architecture reflects a broader redistribution of power, and open-source communities offer an organizational alternative to startups.

### Questions about deployment, identity, and governance

In the Q&A, Dzialocha says support nodes can be private, shared within a family or collective, or potentially contributed more broadly. The current model simply grants access to selected people. Larger groups will require better governance and UX patterns.

Asked why the proposed identity flow favors in-person verification despite its UX cost, Bernard agrees that it is a step backward in convenience. It is nevertheless the one approach the team currently knows can resist impersonation with reasonable confidence. Internet-scale systems do not solve the problem either. Voice calls might offer an intermediate option, but voices can now be deepfaked, leaving identity an open research problem.

The final question concerns two administrators removing each other concurrently. p2panda's auth logic is pluggable through a Rust trait. Its current default is mutual removal: both administrators lose access. Dzialocha acknowledges that this is extreme but says activists considered it the best available behavior in an adversarial, fully peer-to-peer environment without consensus or threshold signing. Another valid option is to allow the group to fork. Future systems might use a softer consensus rule, such as requiring three of five members to approve a removal before applying it.
