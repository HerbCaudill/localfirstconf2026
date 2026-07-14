---
source: local-first-conf-recording
title: "Panel: Data Ownership Beyond Local First"
date: 2026-07-12
speakers:
  - "Eileen Wagner"
  - "Robin Berjon"
  - "Paul Frazee"
  - "Boris Mann"
  - "Zenna Fiscella"
source_recording: "../../recordings/2026-07-12 - Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella - Panel - Data Ownership Beyond Local First.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1545-panel-data-ownership-beyond-local-first"
source_transcript: "../raw/2026-07-12 - Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella - Panel - Data Ownership Beyond Local First.md"
cleaned_transcript: "../cleaned/2026-07-12 - Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella - Panel - Data Ownership Beyond Local First.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Panel: Data Ownership Beyond Local First

**Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1545-panel-data-ownership-beyond-local-first) · [Raw transcript](../raw/2026-07-12%20-%20Eileen%20Wagner%2C%20Robin%20Berjon%2C%20Paul%20Frazee%2C%20Boris%20Mann%2C%20and%20Zenna%20Fiscella%20-%20Panel%20-%20Data%20Ownership%20Beyond%20Local%20First.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Eileen%20Wagner%2C%20Robin%20Berjon%2C%20Paul%20Frazee%2C%20Boris%20Mann%2C%20and%20Zenna%20Fiscella%20-%20Panel%20-%20Data%20Ownership%20Beyond%20Local%20First.md)

## Overview

Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella discuss what meaningful data ownership requires beyond possessing a copy of one's data: usable capabilities, shared infrastructure, standards, governance, community-specific values, and bridges between applications and protocols. Moving between local-first systems, atproto, peer-to-peer communities, technological sovereignty, and public policy, the panel argues for pragmatic reuse and interoperability without flattening local needs. Its main conclusion is that user agency will require communities to collaborate on common primitives—particularly identity, storage, sync, encryption, governance, and basic personal tools—while operating independent infrastructure and building applications that make those capabilities understandable to ordinary people.

## Detailed notes

### Ownership as access and capability

The discussion opens with a vision of the internet as an open commons where everyone can learn, connect, build, and participate. One panelist describes almost 25 years of widening access to publishing tools, from blogging and open-source content management onward, but says the work is far from complete. “Data ownership” is too abstract to communicate by itself; systems must fit people's lives, and communities need enough digital literacy to use them. The speaker proposes pursuing “cultural victory,” borrowing the term from Civilization, rather than assuming technical invention alone will prevail.

Another panelist grounds ownership in capability. A bicycle sealed in a box is not meaningfully owned if its supposed owner cannot use it. Likewise, a formal right to vote means little if practical barriers make voting impossible. GDPR may entitle Europeans to copies of their personal data, but services often return obscure JSON whose field names and structure are useless outside the original service. Meaningful data ownership therefore requires the practical ability to act on the data, not merely a legal right or export file.

The moderator connects this to local-first software. Data that cannot be used or loaded elsewhere does not protect users from an “incredible journey” shutdown. Yet local-first applications often assume small, high-trust groups, while public social networks operate at the scale of millions. This raises the first major question: whether atproto can supply infrastructure missing from local-first systems.

### Atproto as adjacent infrastructure

Frazee describes a path from Secure Scuttlebutt and Beaker Browser into public social systems. The use cases he kept pursuing needed high scale because part of public social's appeal is reaching and observing the wider world. Rather than abandoning open-system goals, atproto adapts them to that scale. He sees local-first, peer-to-peer, and AT Protocol as points on a continuum where the appropriate architecture depends on the use case.

Although atproto is neither local-first nor peer-to-peer, Frazee says it can bootstrap those systems. Its identities, published keys, and username search can help users find one another and establish a direct connection; after that, an application can leave the network and operate locally or peer-to-peer. Permissioned data could occupy a middle ground, and an atproto identity can help bootstrap WebRTC or another direct transport.

Asked why local-first developers are adopting atproto, Mann points to the cost of repeatedly inventing foundational primitives. Small teams spend their limited “innovation points” on identity, accounts, and naming even when those are not the problem they want to solve. Atproto supplies pragmatic choices such as DNS-based identifiers plus a network large enough to attract experimentation. He cites an unexpected shared-email use case that builds on atproto accounts and web-of-trust relationships. Its components also descend from lessons and pieces developed in earlier projects, demonstrating the value of reuse across adjacent communities.

### Standards, infrastructure, and local values

Berjon argues that the local-first community has much to contribute to technological sovereignty but is overly attached to locally inventing every component. Reusing one another's work matters. He reluctantly but emphatically calls for standards, connecting them to Kleppmann's earlier argument about commoditization. Today's cloud is difficult to leave partly because services are not standardized or interchangeable. Without commoditizing local-first infrastructure, developers risk reproducing cloud lock-in on the user's laptop.

Standards alone are insufficient. Independent parties must also operate the infrastructure. Berjon points to Eurosky and other independent AT deployments: a nominally open protocol controlled in practice by one operator has not achieved the desired resilience. Better sync standards and genuinely independent infrastructure are both necessary for a sovereign internet.

Fiscella warns that standards encounter ecosystems whose technology embodies different local values. Peer-to-peer and decentralized communities do not necessarily converge on one global model. The discussion cites Māori identity systems in Aotearoa as an example where tribal belonging and local community structures conflict with a centralized regional-government identity system. A standard that ignores those differences can erase precisely the agency it intends to support.

Mann reinforces the point with varied community contexts. Signal is accessible and secure enough to recommend widely, but its concentration in one organization remains a single point of failure; a distributed, federated, encrypted alternative will likely emerge only from a community that urgently needs it. In Uganda, a local engineering community chose a straightforward PHP and Laravel stack instead of a more technically ambitious option because local developers could maintain it. A federated event platform built in an Italian squat likewise succeeded because punk communities in Italy and Spain adopted something appropriate to them. These are examples of “cultural victory”: converge where shared building blocks are valuable, then assemble locally suitable systems and bridge them where necessary.

Fiscella identifies bridges as a critical missing piece. An application can be reused by placing an adapter between it and a different protocol, while protocol-to-protocol bridges can connect broader ecosystems. The goal is to preserve local values and multiple independent systems while still building an ecosystem capable of representing and connecting everyone.

### Pragmatism and Bluesky's “future adversary”

The moderator asks whether Bluesky or atproto could exist if every decision had waited for perfect alignment with the community's highest ideals. Frazee says the project has been intentionally pragmatic. Introducing servers, forming a public-benefit corporation, and accepting funding differ from choices he made in earlier decentralized projects, but the system had to meet a concrete scale requirement: it began as a protocol Twitter might adopt, when Twitter had roughly 240 million daily active users.

The company tries to counterbalance those choices through an explicit cultural principle: “the company is the future adversary.” Technology companies often begin with good intentions and later become ordinary or harmful institutions. Since organizations come and go, the protocol and ecosystem should survive and replace them. Frazee describes Bluesky as a commercial cocoon intended to bootstrap something that can outlive it.

That logic motivates account portability and credible exit. Independent systems such as Eurosky and Blacksky, where users can migrate away from Bluesky, are evidence that the design may work. Frazee actively encourages others to build alternatives and “steal” Bluesky's users because the company does not own them.

### Sovereignty through unbundling

The moderator turns to European policy and warns against defining sovereignty as a locally hosted giant cloud that still runs Microsoft software. Berjon says policymakers should care because the internet is foundational infrastructure. If captured infrastructure is governed in an authoritarian way, society itself becomes more authoritarian. Policymakers need not understand every protocol, but they must understand the governance and democratic possibilities that different technical architectures enable.

Mew Social offers a small demonstration of the needed mental-model shift. People expect a new social application to require a new account, then are surprised when they log in with a Bluesky identity and find their existing network and data. Vertically integrated platforms have taught users and governments to treat an application, account, data, infrastructure, and governance as one inseparable product. Atproto's contribution is an unbundling model in which those responsibilities can be distributed among competing operators.

Berjon frames this as a possible European or “middle powers” technology model: shared infrastructure with many smaller participants on top, rather than reproducing Silicon Valley's vertically integrated giants. The panel briefly notes Mew Social's playful cats and dogs as an example of how independently built clients can differentiate themselves even while sharing an underlying network.

### Shared layers across local-first applications

Mann asks the local-first community to imagine similar reuse around common sync standards. Without shared accounts and data shapes, moving from one local-first application to another merely replaces centralized silos with disconnected local ones. A shared end-to-end-encrypted layer is too difficult for every project to build alone, so communities must identify layers where collaboration is worth the investment.

He describes an experiment combining Automerge, atproto lexicons, and an atproto login. The application could create notes, posts, and bookmarks offline, then publish a public version after reconnecting. Sharing a data shape allowed information to move between an independent local-first system and the public network, either directly or through a transformation. Mann calls for a map of local-first's layers—including encryption, accounts, and other common capabilities—to reveal where interoperability is feasible.

Another panelist cautions that this architecture must not burden users with a million technical choices. Interoperability should reduce decisions rather than exposing every layer of the system.

### What the community should build next

In a final round, the moderator asks each panelist for one thing the local-first community should build, borrow, or stop doing to make data ownership achievable. Berjon returns to standards but emphasizes collective tooling and governance. Empowerment is not purely individual: data can belong to a community, city, or wider public, and people need mechanisms for making decisions about it together.

Frazee calls for storytelling, awareness, and organized community action beyond Bluesky itself. He wants the broader “Atmosphere” ecosystem to become a recognizable concept, enabling a phrase such as “log in with the Atmosphere” to carry meaning for ordinary users. The story should belong to the ecosystem, not one company.

Fiscella returns to bridges and multiplicity. Applications should not be isolated from one another or from users' broader networks of tools. Collaboration must exist at both protocol and application layers. Fiscella also points to operating-system integration, mesh networking, and transport-agnostic routing as areas where peer-to-peer work could provide shared foundations.

Mann tells the audience to prepare to rebuild large parts of the internet. Search engines already determine which parts of the web people can see, undermining an older expectation that their contract with users would remain stable. He sees operating systems as another necessary layer and argues that accounts with attached storage are a minimum primitive, analogous to the iCloud-shaped foundation available to iOS applications. This work is too large for isolated individuals.

He also urges the community to organize joint regional events across adjacent ecosystems rather than divide itself into technology-specific meetups. Rebuilding foundations still requires unglamorous basics: contacts, calendars, and email are where people's and organizations' lives reside. JMAP, standardized at the IETF and discussed elsewhere at the conference, is one existing piece worth reusing. The panel closes by directing attendees toward later talks and the lab-day unconference, where participants can continue the discussions and begin working together.
