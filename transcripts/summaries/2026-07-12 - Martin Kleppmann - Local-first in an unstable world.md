---
source: local-first-conf-recording
title: "Local-first in an unstable world"
date: 2026-07-12
speakers:
  - "Martin Kleppmann"
source_recording: "../../recordings/2026-07-12 - Martin Kleppmann - Local-first in an unstable world.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/0930-local-first-in-an-unstable-world"
source_transcript: "../raw/2026-07-12 - Martin Kleppmann - Local-first in an unstable world.md"
cleaned_transcript: "../cleaned/2026-07-12 - Martin Kleppmann - Local-first in an unstable world.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Local-first in an unstable world

**Martin Kleppmann · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/0930-local-first-in-an-unstable-world) · [Raw transcript](../raw/2026-07-12%20-%20Martin%20Kleppmann%20-%20Local-first%20in%20an%20unstable%20world.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Martin%20Kleppmann%20-%20Local-first%20in%20an%20unstable%20world.md)

## Overview

Martin Kleppmann argues that local-first software can contribute to technological sovereignty as geopolitical instability makes dependence on centralized, foreign-controlled cloud services a societal risk. He connects the post-1989 rise of the web and centralized platforms to diminished resilience, then develops a path from local-first data ownership through provider interchangeability, commoditization, and open standards. His main takeaway is that local-first software is not only a way to improve user agency and app development, but also a strategic bet on the sovereignty and resilience of democratic societies.

## Detailed notes

### From 1989 to centralized platforms

Kleppmann opens by locating the talk in Berlin and recalling two events from 1989: the fall of the Berlin Wall and Tim Berners-Lee's proposal for what became the World Wide Web. He says the events were not causally related, but uses their coincidence to connect the political shift from the Cold War to a long period of relative stability with a technological shift that made the internet mainstream.

Before the web, he characterizes the internet as more focused on open protocols. Email preceded the web, and Usenet served as a form of social networking. As websites grew, cloud computing emerged to supply the resources required by large web properties, and communications increasingly became products controlled by centralized companies. Although modern platforms still rely on protocols such as HTTP, TLS, and TCP, he says their locus of control is far more centralized than in the internet's earlier, decentralized design.

He emphasizes that centralization brought genuine benefits. Centralized products offered much better user experiences than many of the technical, protocol-oriented tools that preceded them. They were more capable of combating spam and abuse, which Usenet could not handle, and they were more efficient because decentralized systems require replicated data and additional integrity checks. The cost, however, was reduced resilience when things go wrong.

### Geopolitical instability and cloud dependence

Kleppmann argues that the approximately 35-year era of peace and stability following 1989 is looking increasingly uncertain. He points to AI as a major technological disruption whose effects remain unknown, the return of great-power rivalry, the continuing war in Ukraine, and his concern that the United States is no longer a reliable ally of Europe.

He uses President Trump's repeated statements about making Greenland part of the US to construct a low-probability but high-impact scenario: escalating tensions could lead to trade sanctions between the EU and US, potentially including restrictions on computing services. He cites an argument from The Economist that restrictions on European access to American AI and cloud technology had ceased to be unthinkable. He then describes a recent requirement to restrict foreign access to an Anthropic model as evidence that the US is willing to exclude foreigners from American technology.

To show how remote technological control reaches beyond conventional cloud software, he recounts the 2022 story of Russian forces stealing John Deere agricultural machinery in Ukraine, only for the American manufacturer to disable it remotely. Kleppmann does not take a firm position on whether that particular intervention was good or bad; he uses it to demonstrate the power held by technology providers whose interests may not align with those of their users.

Returning to cloud infrastructure, he says European providers serve only about 15% of Europe's cloud market, while AWS, Azure, and Google Cloud together serve 70%. Europe would therefore find it extremely difficult to move away from US services quickly. He compares this dependence to Germany's reliance on imported natural gas in 2022, which constrained its ability to sanction Russia because cutting imports risked leaving people unable to heat their homes. A mild winter and rapidly built infrastructure for liquefied natural gas prevented that outcome, but the episode illustrates how dependency becomes geopolitical leverage.

Kleppmann is careful not to predict a US–Europe conflict. He considers its probability very low and hopes it remains so. His point is that a risk he would have assessed as zero a year earlier had become non-zero, while its potential impact remained enormous. That is enough, he argues, to justify measured steps toward mitigation under the banner of technological sovereignty.

### Local-first as a different relationship with the cloud

He then asks whether local-first software can support technological sovereignty. For viewers unfamiliar with the concept, he contrasts it with the dominant cloud model. In a typical web application, the database in a cloud service holds the primary copy of the data, and thin clients must fetch data from and send updates to that server.

Local-first software inverts this relationship by making the data on a user's device the primary copy. Cloud services can remain, but in a secondary role: backing up data, synchronizing devices, and enabling collaboration. This preserves real-time collaborative experiences while making the cloud copy subordinate to local data. Because a sync service is no longer the authority, an application could use multiple providers side by side or sync directly between peers.

Kleppmann revisits the seven ideals in the 2019 essay that introduced the term “local-first software.” He focuses on three benefits. Local data makes interfaces fast because users do not wait for network round trips. It enables offline work because reads and writes continue without an internet connection and synchronize later. And it makes software “incredible journey proof,” a reference to startup shutdown announcements that thank users for sharing the company's journey before offering a short window to download unusable JSON. Local-first software can continue running after its original provider disappears and, with alternative sync services, can continue supporting collaboration.

The essay's underlying theme was user agency: giving users greater control, privacy, and security over their data. Since publishing it, however, Kleppmann and his collaborators have recognized benefits for application developers as well. Programming against a local sync engine avoids the application-level questions raised by REST requests that fail or time out, such as whether data reached the server or whether the user should be allowed to keep editing. The sync engine handles those distributed-systems problems, and a backend supplied by someone else may eliminate the need for an application-specific backend team.

He extends these user and developer benefits to society. By reducing the ability of an entire country to lock people out of essential services, local-first software can make society more resilient to geopolitical blackmail.

### Provider choice through commoditization and standards

Kleppmann describes decentralization at three scales. Replication across devices avoids dependence on one server and provides fault tolerance using established distributed-systems techniques. Avoiding dependence on one company requires users to switch providers easily, ideally by using multiple providers concurrently so that one can disappear without forcing a migration. Avoiding dependence on one country applies the same principle across providers based in different countries. Across these scales, easy provider switching is the key enabling capability.

He proposes commoditization as the way to achieve that capability. A commodity is interchangeable across suppliers: ordinary wheat flour can come from different farmers and still serve the same purpose. Such interchangeability depends on standards that specify the relevant properties of the product.

The internet provides his model of successful standardization. Many different applications—collaborative documents, video calls, email, social media, file transfer, chat, and streaming video—run over a shared protocol. IP forms the “narrow waist” of an hourglass, though Kleppmann notes that HTTP might be considered the narrow waist today. Above it, diverse applications can flourish; below it, Wi-Fi, Ethernet, cellular networks, fiber backbones, and satellite connections can all carry the same protocol. Standardizing this layer makes it difficult to change, as the slow migration to IPv6 demonstrates, but it also lets applications ignore the underlying network technology.

### A narrow waist for local-first software

The internet's narrow waist standardizes communication but says nothing about persistent state or synchronization. Kleppmann therefore asks what an equivalent hourglass for local-first software would look like. Above the narrow waist would sit diverse applications such as collaborative documents, notes, spreadsheets, and graphics editors, as well as CRDT libraries and version-control systems with different data models and trade-offs. Below it could sit sync servers from many providers, self-hosted services, peer-to-peer synchronization, and end-to-end encryption.

He briefly introduces Sedimentree, a protocol and data structure under development at Ink & Switch. He describes it only as a teaser because little information is available and there is not enough time to explain it. The team does not yet know whether it is the right answer. He invites others to think about the broader question of what common narrow waist could support local-first software.

### Conclusion

Kleppmann closes by returning to the original idealistic vision of local-first software as a way to enhance user agency and control over data. He welcomes the conference's expansion beyond CRDTs in a narrow technical sense toward user agency more broadly. He reiterates the pragmatic developer benefits: easier application development can lower the cost of building software and allow a larger, more diverse ecosystem to flourish.

Finally, he asks the audience to think beyond individual users and software companies to society as a whole. He presents local-first software as a strategic bet to improve the sovereignty and resilience of democratic societies.
