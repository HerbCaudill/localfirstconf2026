---
source: local-first-conf-recording
title: "npmx: a fast, community-built browser for the npm registry"
date: 2026-07-12
speakers:
  - "Matias Capeletto"
  - "Willow Ghost"
source_recording: "../../recordings/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1330-npmx-a-fast-community-built-browser-for-the-npm-re"
source_transcript: "../raw/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.md"
cleaned_transcript: "../cleaned/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# npmx: a fast, community-built browser for the npm registry

**Matias Capeletto and Willow Ghost · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1330-npmx-a-fast-community-built-browser-for-the-npm-re) · [Raw transcript](../raw/2026-07-12%20-%20Matias%20Capeletto%20and%20Willow%20Ghost%20-%20npmx%20-%20a%20fast,%20community-built%20browser%20for%20the%20npm%20registry.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Matias%20Capeletto%20and%20Willow%20Ghost%20-%20npmx%20-%20a%20fast,%20community-built%20browser%20for%20the%20npm%20registry.md)

## Overview

Matias Capeletto and Willow Ghost present npmx as both a community-built alternative browser for the npm registry and a vehicle for connecting open-source communities. They trace its rapid growth, demonstrate how atproto and community-maintained ecosystem data enable new features, and invite the local-first community to help npmx develop durable governance, broader data ownership, and tools that can outlast any single company or platform.

## Detailed notes

### Building bridges around npm

Capeletto begins with the idea that open source is about building bridges. He points to connections among the Svelte, Nuxt, and Vite communities, arguing that Vite reached its current position because projects and frameworks cooperated on shared infrastructure. He offers e18e, the Ecosystem Performance community, as another example of contributors improving packages across the ecosystem.

He turns to npm, which he describes as the world's largest JavaScript and TypeScript registry and as a tool projects depend on to share work. Usage had historically doubled annually, but a graph showed fourfold growth in six months. npm began as a startup that nearly failed before Microsoft acquired it; Capeletto credits Microsoft with keeping it operational but says the service has not innovated enough. Because Microsoft controls the data, npm also raises the conference's question of how to ensure important infrastructure lasts.

Capeletto separates npm into the registry, command-line clients, and browsing website. Alternative registries face npm's enormous network effects, while Yarn and pnpm have innovated on the CLI. The website had attracted fewer alternatives and was often merely a route from npmjs.com to GitHub or a project's own site. A Bluesky thread asking developers about pain points elicited requests for dark mode, better visibility for maintainers, and many other improvements.

The community's response was npmx.dev, a richer package browser with version filtering, generated documentation, and other information. The key difference, Capeletto says, is agency: contributors no longer need merely complain about the website but can implement desired changes themselves. After five months, npmx had become GitHub's fastest-growing emerging open-source project by contributor count in the first quarter, the only non-AI project in that top ten. It had more than 22 recognized maintainers, an 11-person core team, and about 200,000 unique users.

The alpha launch was accompanied by 15 posts from community members, many describing their first open-source contribution. Capeletto presents this as evidence that npmx helps newcomers enter open source. The project established governance quickly to handle access and decisions, treats new contributors as peers, and welcomes people who share its values.

Capeletto invites accessibility, internationalization, and local-first contributors in particular. Many adjacent projects are not yet local-first and will not become so without people bringing that knowledge into their communities. npmx prioritizes pragmatic adoption—for example, retaining a `/package` URL structure it did not prefer—and hopes adoption will create room for further change. He summarizes the philosophy as human-first: tools should work for people, not the reverse.

### Community, human contribution, and social infrastructure

Ghost describes meetups and community as the source of their own technology career. Referring to “luck from motion,” they distinguish passive chance from the opportunities that arise after joining a community and moving in a useful direction. They recount speaking with Mateo, who said npmx's community helped him recover from years of open-source burnout, while emphasizing that npmx is not unique: communities are everywhere, including among the conference audience.

npmx depends on hundreds of projects and their communities. Its contributors bridge Vite and Nuxt with communities such as atproto. Ghost shows a month of repository activity as an example of extensive human-driven work, whether or not contributors used AI. Mateo's AgentScan project responds to people submitting many adequate but impersonal pull requests. Ghost cites Daniel Roe's argument that AI should not speak or think for contributors: npmx accepts AI use but expects the person to engage directly in a pull request, because the project wants a community of people rather than “clankers.”

Ghost links this human dimension to social platforms. People moved from X to Mastodon or Bluesky, they argue, not because publishing thoughts online is a bad idea but because of the people controlling X. Bluesky conversations helped originate both npmx and AgentScan.

### Moving npmx Social onto atproto

Bluesky's atproto foundation lets users keep posts, likes, and other data in a personal data server, or PDS, that Bluesky does not control. npmx Social offers such a server and had nearly 600 migrated users. Bailey, also known as pds.dad, provides a PDS Mover that makes migration easy.

Ghost says npmx motivated them to learn atproto and move their own account away from Bluesky's servers. npmx is also working with EuroSky on a European PDS for digital sovereignty. They argue that governments and individuals lose power when foreign clouds control their data, whereas EU-hosted data is at least subject to institutions citizens can influence through voting. npmx Social runs at Hetzner in Nuremberg, keeping its data in Germany and the European Union.

A PDS exposes a stable identity separate from a changeable handle or server location. Ghost demonstrates a timeline in a PDS explorer: the project began at `npmx.bsky.social`, changed its handle to `npmx.dev`, and later moved its data to npmx Social without losing followers or interactions.

### Likes, links, and shared ecosystem data

The first feature npmx built with its atproto data was package likes. Ghost demonstrates liking Automerge and then viewing the resulting record in the `dev.npmx.feed.like` collection in their PDS. The record links to the package rather than storing only a string. Constellation, a tool from the Microcosm community, indexes links from atproto's live network event stream, so npmx can query every record pointing to a package URL. The API receives the collection, the `subject.ref` field, and the target URL, and returns both a count and individual records. This supports features such as a package leaderboard and an experimental live stream of likes.

npmx also incorporates data from e18e. Its package warnings surface opportunities to replace dependencies with smaller, faster, or native alternatives. Ghost cites Node's built-in text-coloring capability as a possible alternative to Chalk and describes replacing `fast-glob` with `tinyglobby` or a native Node implementation. A package timeline combines size history with noteworthy events; a `date-fns` example shows the package shrinking over time. Ghost cautions that dependencies and package size are not inherently bad—the goal is to make deliberate choices.

### Possible directions and a local-first invitation

Capeletto returns to stress that npmx is as much a community as a website. It can keep improving as an npm browser, but it can also serve as a neutral discovery layer over multiple JavaScript registries, including JSR or a future decentralized npm registry. The same browser concept might extend across PyPI and crates, or aggregate notifications from multiple software forges and expose information such as dependency security.

Capeletto asks the local-first community for knowledge beyond data architecture: npmx also needs durable governance, funding, and healthy communities so its tools endure and its data remains accessible. He discusses atproto-based identity projects such as Keytrace, which stores claims in a user's PDS and could link a stable identity to npm, GitHub, domains, and other services. Shared lexicons and conventions could replace each open-source project's ad hoc team and sponsor data, improve recognition and funding, and show the people actually behind a package rather than only those with npm publication permission.

The speakers close by calling for long-term control over both data and tools. Building communally, learning across communities, and creating bridges provide more agency. They direct prospective contributors to `build.npmx.dev` and the project's social site and announce an upcoming meetup.

In the brief Q&A, the MC asks how the team handles not controlling the underlying npm registry, including unavailable features and the risk of being cut off. Capeletto says the team can analyze and normalize the registry's unstructured data but does not plan to build a registry itself. If someone else develops a decentralized registry, however, npmx is willing to help it gain adoption.
