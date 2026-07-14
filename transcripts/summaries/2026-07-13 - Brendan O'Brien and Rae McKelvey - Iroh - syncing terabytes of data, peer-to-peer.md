---
source: local-first-conf-recording
title: "Iroh: syncing terabytes of data, peer-to-peer"
date: 2026-07-13
speakers:
  - "Brendan O'Brien"
  - "Rae McKelvey"
source_recording: "../../recordings/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1330-iroh-syncing-terabytes-of-data-peer-to-peer"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.md"
cleaned_transcript: "../cleaned/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.md"
---

# Iroh: syncing terabytes of data, peer-to-peer

**Brendan O'Brien and Rae McKelvey · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1330-iroh-syncing-terabytes-of-data-peer-to-peer) · [Raw transcript](../raw/2026-07-13%20-%20Brendan%20O'Brien%20and%20Rae%20McKelvey%20-%20Iroh%20-%20syncing%20terabytes%20of%20data%2C%20peer-to-peer.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Brendan%20O'Brien%20and%20Rae%20McKelvey%20-%20Iroh%20-%20syncing%20terabytes%20of%20data%2C%20peer-to-peer.md)

## Overview

Brendan O'Brien recounts the four-year path by which Number 0 turned Iroh from a broad IPFS implementation into a focused open-source networking library that connects devices by cryptographic keys rather than IP addresses. The talk emphasizes the organizational lessons behind the recent 1.0 release: test ideals against indifferent users, make room to leave a community's preferred architecture, encourage frightening questions, narrow the product to the primitive people value, and persist through a long implementation phase. Iroh now combines multipath QUIC, hole punching, optional relays, WebAssembly, and custom transports to provide reliable peer-to-peer connectivity while keeping its infrastructure open and most traffic direct.

## Detailed notes

### A networking primitive reaches 1.0

O'Brien introduces Iroh as an open-source Rust library from Number 0 that applications embed to connect any two devices. Its key abstraction is “dialing keys, not IP addresses.” Each endpoint has a key pair; another device uses its public key as the stable address. Iroh maintains connectivity as devices move and their network locations change.

The project had reached 1.0 slightly more than three weeks before the talk. O'Brien offers scale statistics to establish that it works in production: about 30 billion observable relay connections over six months, including nearly half a billion on one day, along with active adoption by recognizable companies.

Rather than giving a protocol deep dive, he sets out to demystify the path to a polished project. Iroh 1.0 took four years, ten people, more than 65 releases, and substantial uncertainty. He divides the story into idealism, learning to “paddle our own canoe,” and the hard implementation phase, hoping that people working on long-running local-first problems will find relevant lessons.

The schedule metadata names Brendan O'Brien and Rae McKelvey as speakers, but the supplied recording identifies only O'Brien as speaking.

### Chapter one: idealism and IPFS

Number 0 began in a Berlin airport hotel on April 1. Its founders came from the distributed-web movement and shared its conviction that the internet was broken. Iroh started as an implementation of IPFS.

Brooklyn Zelenka described being stuck in the “food, water, and shelter” stage of distributed applications: if devices could not reliably connect, developers could not build the more ambitious products that might change the world. Number 0 adopted “make something that works” as its enduring mandate.

Iroh 0.1 shipped at IPFS Camp in 2022. It had a command-line interface, microservices, content addressing, and a goal of interoperability with other IPFS implementations. The team believed that solving connectivity within the distributed web's shared architecture would unlock broad benefits. Iroh also became a library during this period, the only major element from that version that remains.

Performance evidence forced a reckoning. The new Rust version was slower than the Go implementation, and O'Brien believed neither was close to useful. The project faced a conflict between its community's architectural ideals and the practical goal of delivering reliable connectivity.

### Chapter two: narrowing to a dumb pipe

O'Brien describes the decision to break from IPFS and start over as his hardest leadership call. The team still shared the distributed-web mission and cared about its peers, so leaving the preferred architecture felt like risking exclusion from the community. They nevertheless needed independent design space to reach the “it just works” standard.

The team entered a “move slow and break things” phase and reduced the objective to sending a file over the internet. Delta Chat became the first production partner, initially using Iroh to transfer chat backups between devices on the same Wi-Fi network. Outside feedback was often simply that users did not care about the team's worldview. O'Brien says absorbing that feedback is difficult enough that doing it one day a week counts as success.

Delta Chat's limitations pointed to NAT traversal, implemented experimentally in Iroh 0.5.1. Dialing by key and hole punching established the outline of modern Iroh, but years of work remained. The project still bundled a thick stack of protocols, a console, synchronization, and a key-value store because the team thought a peer-to-peer product had to cover the path from connectivity through applications.

Early adopters built games and other systems on Iroh, but repeated feedback asked for a “dumb pipe” between machines. A simple website marketing that capability became more compelling to users than the higher-level features. Team members began voicing deliberately uncomfortable possibilities: perhaps Iroh should be only its networking component; perhaps everything else should be deleted; perhaps the team should temporarily support only Rust rather than struggle with multiple language bindings.

O'Brien interprets this period as learning to steer a technical project. A trustworthy substrate requires maintainers able to ask hard questions without shame and to protect a narrow abstraction over the long term. At a retreat, the team finally described Iroh as “a stack of IETF protocols in a trench coat,” avoiding novel protocols where existing standards could work. The desired core became QUIC plus multipath QUIC.

### Chapter three: implementing multipath

No Rust implementation of multipath QUIC existed, so the team split. Two engineers focused on multipath while the others kept releasing incremental improvements beginning in October 2024.

Production scale arrived unexpectedly when an application with two million daily users added Iroh. On the night of the U.S. election, roughly two million nodes appeared. The team discovered the source only by asking publicly in Discord who had onboarded millions of nodes. The incident gave Iroh real-scale experience while the core rewrite continued.

WebAssembly support required replacing Tokio task-spawn assumptions so the library could run single-threaded in a browser. The team built performance tracking to understand behavior across commits, studied and implemented the long multipath specification, and created network simulators and packet-flow tools to diagnose acknowledgments and hole punching. Claude helped locate a difficult bug in an inadequate Python simulator. Moving faster than the available Quinn integration allowed ultimately led the team to write its own QUIC implementation.

The effort accumulated a 67-check CI suite. Iroh 0.96 replaced the previous core with multipath. Later releases added custom transports, including Bluetooth Low Energy as an underlying path, before bug fixing, cleanup, a release candidate, and 1.0. O'Brien redirects applause to the engineering team and stresses that the last year and a half felt exhausting and frightening, not like the smooth line shown in hindsight.

### Adoption restores the original ideals

After 1.0, references to trusted networking built on Iroh became a career highlight for O'Brien. Applications now use it for remote coding without VPNs or port forwarding, Kubernetes tunnels, account-free unified clipboards, phone access to desktop music libraries, agents, and home-lab monitoring. The reliable primitive lets other projects move beyond connectivity's food-water-and-shelter phase.

This adoption allows the project to recover its idealism without rebuilding the entire application stack. Distributed-web and local-first applications can share the same connectivity layer. O'Brien describes the next mission as treating Iroh like “IPv7”: stewarding it as reliable commons infrastructure embedded in many places.

His lessons are to use a values-aligned community for support but take products outside it; expose the work to people who may not share its premises; keep a hand in the “pain box” of difficult feedback when possible; let a team ask hard questions; steer independently; and expect the work to take much longer than planned. He explicitly urges the audience not to give up on difficult projects.

O'Brien ends the presentation by announcing, without a live demo on the unreliable venue Wi-Fi, an experimental SSH wrapper that uses Iroh to reach machines anywhere. He uses it to access a Mac Studio running local models and compiling Rust faster than his laptop.

### Sustainability and relay tradeoffs

The wording of the first audience question is missing, but O'Brien's answer explains Number 0's funding. He and his co-founder initially invested their own money, and the company is now venture-backed. Revenue comes from hosted support infrastructure—customers can buy a managed network—and enterprise engagements with service-level agreements. He argues that these offerings can sustain the open-source project without compromising it: relays and discovery remain open-source, and applications must be able to operate the complete stack without becoming dependent on Number 0.

Asked whether discovery and relay infrastructure reintroduces centralization, O'Brien characterizes Iroh as federated at best. The design moves networking intelligence to endpoint devices, and deployments can omit relays entirely, using mechanisms including DNS and Bluetooth Low Energy. In practice, reliability wins over purity. Iroh's deliberately simple relays coordinate connections and forward encrypted traffic they cannot read; if necessary, they can carry encrypted data over HTTP/1.1 to escape restrictive corporate Wi-Fi.

The MC compares this with WebRTC systems that claim peer-to-peer operation but tunnel most traffic. O'Brien acknowledges that some networks prevent direct paths, but reports an expected direct-data rate around 95 percent for stock Iroh. In observed deployments, 96 to 98 percent of bytes travel directly over IPv4 or IPv6 rather than through relays.
