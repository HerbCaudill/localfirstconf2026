---
source: local-first-conf-recording
title: "Tiles: Own your AI with local models and open protocols"
date: 2026-07-13
speakers:
  - "Ankesh Bharti"
source_recording: "../../recordings/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1500-tiles-own-your-ai-with-local-models-and-open-proto"
source_transcript: "../raw/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.md"
cleaned_transcript: "../cleaned/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Tiles: Own your AI with local models and open protocols

**Ankesh Bharti · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1500-tiles-own-your-ai-with-local-models-and-open-proto) · [Raw transcript](../raw/2026-07-13%20-%20Ankesh%20Bharti%20-%20Tiles%20-%20Own%20your%20AI%20with%20local%20models%20and%20open%20protocols.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Ankesh%20Bharti%20-%20Tiles%20-%20Own%20your%20AI%20with%20local%20models%20and%20open%20protocols.md)

## Overview

Ankesh Bharti presents Tiles, an alpha local-first AI system intended to preserve the convenience and polish of cloud assistants while giving users ownership of their models, memory, identity, and collaboration data. He argues that improving open-weights models, more capable consumer hardware, and mature open protocols now make this practical, then outlines a hybrid architecture that keeps core state on-device while using ATProto identities and encrypted Iroh-based peer-to-peer synchronization for collaboration.

## Detailed notes

Bharti opens by describing his attachment to ChatGPT. Its consistent experience and cross-surface memory make it feel like an application that knows him rather than a disposable chatbot. That relationship, however, is one-sided: the service accumulates power over his digital life, memory may become inaccessible if he stops paying, and uncertainty about data access limits how freely he expresses himself. He wants the same convenience while retaining a portable identity and memory, verifiable trust, and control over the relationship.

He argues that three changes make such a system possible. First, many practical frontier-level capabilities are now available through open-weights models rather than only proprietary APIs. Second, consumer hardware has become powerful enough for meaningful local inference. Apple's UltraFusion combines two Max chips in an Ultra system, while distillation continually transfers frontier improvements into smaller, more efficient models. Bharti also describes an upcoming Apple mobile model that uses a 20-billion-parameter mixture-of-experts architecture and loads selected expert weights from flash storage to fit inference within phone constraints.

Third, open social protocols have matured. ATProto and ActivityPub provide alternatives to closed identity and collaboration platforms, and Bluesky's ATProto ecosystem has grown beyond 35 million users. Bharti concludes that models, compute, and protocols are ready even though products have not yet combined them effectively.

Existing local AI tools handle private, personal work well but often stop at one device. Users still want collaboration, sharing, and device mobility on their own terms. Where those features exist, they commonly depend on centralized platform accounts such as Google login, replacing one dependency with another.

Bharti's desired product combines on-device models, peer-to-peer synchronization, user-owned identity, shareable links, developer extensibility, and the polish of cloud software. He says a post shared by Eileen earlier in the day described a similar vision of open, owned AI.

### Tiles architecture

Bharti announces an alpha release of Tiles with a command-line interface. Its guiding principle is to keep ownership on the device and use the network only where it adds value. The application, model, and agent data remain local. Network services support collaboration: ATProto identities provide social features, and end-to-end encrypted synchronization uses Iroh relays.

The implementation has three layers. Rust handles core systems, Python runs inference, and a TypeScript agent runtime embeds Pi as a Bun binary. Tiles ships with `gpt-oss-20b` by default and uses a plain-text Modelfile format to define and customize local models. Plugins store persistent skills as `SKILL.md` files, making workflows reusable.

Tiles can reach a local model running on another machine through a peer-to-peer network, allowing a user to access an ambient AI computer remotely. The same foundation synchronizes encrypted chats among linked devices. Locally generated decentralized identifiers and UCAN provide identity and authorization without trusting a central account provider. Chat sessions can be shared through public or private links and published as ATProto lexicon records.

### Recorded demo and community roots

Bharti shows a recorded demonstration of another command-line tool running as a Tiles plugin with remote inference. The transcript does not capture the demo's specific task clearly, but it ends with him sharing the chat and showing corresponding data as a Tiles lexicon record. He attributes the local speed to the plugin's simple, plain-text-first design and Tiles' vertical integration across its layers.

Three people have worked full-time on Tiles for six months. Bharti credits Boris Mann, Dietrich Ayala, Gordon Brander, the User & Agents community, sponsors, advisers, and design collaborators. He describes Tiles as a direct product of the local-first community because much of its technology originated in work by people at the conference. He invites sponsorship, funding, and collaboration.

Bharti closes by returning to his opening distinction: he values ChatGPT but does not want it to control his context. Local AI combined with open protocols can retain modern convenience while making data, identity, and AI behavior genuinely user-owned. The recording ends as the MC begins asking what has been hardest or most surprising about building the system, before Bharti's response is captured.
