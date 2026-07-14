---
source: local-first-conf-recording
title: "Habitat: building a world with data agency"
date: 2026-07-13
speakers:
  - "Arushi Bandi"
source_recording: "../../recordings/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1445-habitat-building-a-world-with-data-agency"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.md"
cleaned_transcript: "../cleaned/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.md"
---

# Habitat: building a world with data agency

**Arushi Bandi · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1445-habitat-building-a-world-with-data-agency) · [Raw transcript](../raw/2026-07-13%20-%20Arushi%20Bandi%20-%20Habitat%20-%20building%20a%20world%20with%20data%20agency.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Arushi%20Bandi%20-%20Habitat%20-%20building%20a%20world%20with%20data%20agency.md)

## Overview

Arushi Bandi argues that servers are not an unfortunate secondary component to eliminate from local-first systems, but a useful and sometimes primary part of collaboration, organizational governance, and search. Habitat's answer to the cloud's centralizing power is therefore to give organizations data servers they control, along with standardized permissions, groups, search, and access primitives shared across applications. Bandi frames this as “data agency” rather than mere ownership: people and organizations should be able to choose their infrastructure and use interoperable data across changing applications, including as context for AI agents.

## Detailed notes

### Challenging a serverless local-first north star

Bandi introduces herself as Habitat's CEO and co-founder. Her background includes building Figma's real-time collaboration sync engines and studying security, web privacy, and online tracking. Although she originally planned a technical talk, she instead chooses a provocative summary of Habitat's approach: it gives people servers.

She recreates a diagram from Martin Kleppmann's prior talk showing a local-first north star in which sync or application-provider servers are absent or are not the primary data source. She distinguishes those servers from the substantial shared server infrastructure beneath applications, a distinction also raised in Jake Lazaroff's atproto talk.

The server-light model works naturally for personal files, including material one might back up to iCloud. Collaboration across devices and people introduces peer-to-peer protocols and structures such as WebRTC and CRDTs, but reliable implementation is difficult—the reason projects such as Iroh and the conference itself exist.

Even successful peer-to-peer synchronization does not cover every need. Some data belongs to an organization rather than an individual and may not make sense replicated across personal devices. Permissions can benefit from a central authority. Search indexes are possible to distribute but difficult to build, and it is unclear whether doing so is worthwhile. Bandi therefore treats sync and application servers as potentially primary parts of the system rather than backups.

### Give people the servers

The local-first diagram nevertheless captures an important intuition: cloud infrastructure concentrates power and can entrap users, with consequences for individuals and society. Because “the cloud” is someone else's server, Habitat proposes giving people servers of their own. Bandi points to Erin Brockovich's map from the Community Data Center Reporting Project to note the large amount of existing and planned data-center infrastructure that could be used toward local-first goals.

Habitat focuses on organizations, meaning groups of people working together on a shared cloud. Bandi contrasts this with local-first discussions centered on one person escaping Big Tech and recovering personal data. Much computer activity is collaborative; participants may work with data they do not individually own, and the data may be intended to outlive any one contributor and serve a larger entity.

This leads Habitat to ask how groups can exercise agency over data they use together. Bandi deliberately says “data agency,” not only “data ownership.” Even a legal right to export data does not necessarily make it useful, interoperable, governable, or genuinely under the user's control.

### An organizational data-server layer

Habitat is building an organizational data server inspired by the personal data servers in AT Protocol. Its group-specific feature set includes permissions and organization-owned groups. A team identity in a document application, for example, should be the same team in a chat application. The server also supplies foundational developer-platform features such as search.

With an owned server available, peer-to-peer synchronization becomes less load-bearing. Conventional Web 2.0 application servers may still exist, but Habitat's goal is to move more responsibilities into the owned data layer over time. Bandi notes that neither Habitat nor an AT Protocol PDS currently supports every arbitrary index an application might want. Habitat does, however, provide a shared search API that users can apply across their data and developers can use rather than building separate search systems.

Following Kleppmann's call for standardization and commoditization, Bandi proposes a data layer in the internet stack between transport and applications. Users and organizations would control data there, while changing applications operate above it. She sees AT Protocol's PDS and related pieces as useful primitives and wants Habitat to help commoditize this server layer.

The approach is intentionally honest about what servers provide. Many operations over shared data are impractical or conceptually wrong on a single device or a collection of local devices. Instead of asking how to avoid centralized servers categorically, Habitat asks how people can choose where their servers run and which infrastructure they depend on. Bandi plans to deploy across multiple cloud providers, including local providers where possible.

Once that controlled data infrastructure exists, local-first can become an application-level concern: whether the product responds quickly, avoids network dependency when possible, and works on an airplane. Correct server ownership and architecture can provide many broader values without making every application solve infrastructure governance itself.

### Why data agency matters now

Bandi says people often ask why she left Figma to start Habitat. Her answer is that demand for data agency is becoming explicit. People and organizations want to make their accumulated data parseable and useful to LLMs. Context engineering requires access to data at the time and in the form an agent needs, which makes data access and interoperability central concerns.

Software's lifespan is also shrinking. Tools once changed over decades, then years, and may soon change even faster. Bandi argues that the application surface should be the ephemeral layer. Data must be unbundled from applications so it survives when an interface is replaced, which requires standards for storage format and access. She identifies both AT Protocol and Habitat as efforts in this direction.

Finally, mainstream vibe coding is producing “contextual spaces”: small, custom, online social applications that Bandi compares to personal websites in the 1990s. These spaces exchange data within invited groups rather than publishing it openly. If they shared a common data layer, their creators would not have to rebuild the whole stack, and information created in one space would remain reusable elsewhere rather than becoming another silo.

Bandi closes by inviting developers to collaborate with Habitat and offers to meet while she is in Berlin. The supplied recording captures the MC agreeing that always-connected storage can do things mobile devices cannot, but it ends mid-sentence before any question or further response.
