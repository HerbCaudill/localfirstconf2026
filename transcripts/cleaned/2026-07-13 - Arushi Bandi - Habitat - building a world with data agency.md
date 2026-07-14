---
source: local-first-conf-recording
title: "Habitat: building a world with data agency"
date: 2026-07-13
speakers:
  - "Arushi Bandi"
source_recording: "../../recordings/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1445-habitat-building-a-world-with-data-agency"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.md"
---

**Presenter:** Hi, everyone. My name is Arushi, and I'm the CEO and co-founder of Habitat, a company whose mission is to bring user data agency to the world.

Originally, this was supposed to be a technical talk explaining some of the details of how we plan to do that. But in the last couple of days, I decided I wanted to stir things up a little. In the context of local-first, if you sum up what Habitat is doing, it's really this: giving people servers.

A brief introduction about me first. For the last few years, as Adam said, I worked on building sync engines to power real-time collaboration at Figma and spoke at SyncConf about that. Before that, I studied computer science with a focus on security and privacy, particularly web privacy and how users are tracked across the internet. Both the values and technical ideas of this conference are close to my heart and important to me.

Let's get into it. This is my recreation of one of Martin's slides from yesterday, demonstrating the local-first north star. I want to unpack some ideas in this diagram, specifically the idea that a server—including, but not limited to, a sync server—can be avoided or not serve as a primary source of data.

I also want to clarify that in this setup we're typically talking about application-provider servers: Google cloud servers, Slack, Figma, and so on. As Jake pointed out, there is already a lot of shared infrastructure, in the form of servers, that we depend on beneath this layer.

I think the diagram holds true for data we consider personal, such as files on your computer or what you might back up to iCloud. But of course, we need collaboration across devices and people. A lot of work in this space uses peer-to-peer protocols and data structures such as WebRTC and CRDTs to make that possible.

As we've seen, that's not easy. It's the reason Iroh exists and why this conference exists. Even if those technologies succeed, which I hope they do, that is not the whole picture. We need servers for many other reasons.

For example, what about data that isn't mine or yours but is part of a larger entity? Should it really be stored across local devices? Permissions are hard in that model because there is no central authority, but sometimes you want one. Another example is search. How does search work? I think it is possible to build up a search index in that model, but it's hard and unclear whether it makes sense.

What we refer to as sync servers or application servers are not necessarily backups and are not necessarily secondary. I think they're a primary piece of the puzzle.

But the diagram gets something right: the intuition that the cloud is a source of power, centralization, and often entrapment for users. It's worse for users and even worse for society. But, as you know, the cloud is just someone else's server. What if we could give people servers? That's the approach we're taking at Habitat.

This is Erin Brockovich's map from the Community Data Center Reporting Project. We know many data centers are about to be built, and many already exist. There is a lot of existing infrastructure. What if we could use it to achieve some common local-first goals?

Habitat is building for organizations. That term can be understood in several ways, but we're building for groups of people working together on a shared cloud. I think that's a big reason we've approached local-first differently.

Much local-first discussion imagines an individual's perspective: how can I get rid of Big Tech products, and how can I get my data back from the cloud? But most of what people do on computers isn't done alone. Much of the data they work with may not even be their own. Whether for work or play, much of the data we create is intended to outlive us and our contribution and to serve someone or something else.

We're asking what it looks like to have agency over the data we use to do things together, and what technical primitives we need to achieve that. I use the term “data agency” because we're thinking beyond an ownership lens.

Imagine a law passed tomorrow requiring every provider to let me export my data. I think Europe may already have some laws like that. It isn't clear that this necessarily makes my data more useful to me or puts me more in control, especially for interoperability and governance.

What are we building? Habitat is building an organizational data server, roughly analogous to and inspired by personal data servers in AT Protocol. We're also building a feature set specifically for groups and organizations. That includes owned permissions and groups. For example, your team in a document app should be the same as your team in a chat app. It also includes foundational developer-platform features such as search.

Returning to the original diagram, our north star looks more like this, and I think this is probably true of AT Protocol as well. Peer-to-peer sync becomes much less load-bearing when you can rely on a server you own. That's what Jake demonstrated with AT Protocol document editing.

Application servers can still be implemented in the classic Web 2.0 way. The goal is that these owned data servers become more powerful over time, so the application server has less work to do. For example, right now, neither Habitat nor an AT Protocol PDS really lets you build an arbitrary index on the server over the data it stores.

As another example, a Habitat server implements a search API that users can use to search all their data and developers can use instead of implementing their own search.

As Martin said, for this new world to succeed, we need to standardize and commoditize. At Habitat, we believe there should be a data layer in the internet stack, operating between transport and application, where users and entities can own data. That's why we mention AT Protocol so often: PDSs and its other pieces provide good primitives for that. We want to standardize and commoditize this data-server layer.

One thing I like about this approach is that it's honest. Servers are useful. You can do a lot with data on a server that is impractical or nonsensical on one device or across distributed local devices. That honesty opens space for new ideas and problem statements.

Rather than asking how to avoid a centralized server, at Habitat we're asking how to ensure people can choose where their servers are and what infrastructure they depend on. One thing we'll do is deploy Habitat across many cloud providers, hopefully including local cloud providers, so people have that choice.

The other thing I like is that local-first becomes an application concern. By that, I mean questions such as whether a product is fast, avoids unnecessary network calls, and works on airplanes. But if we give people servers and architect them correctly, we get many local-first values for free.

Many people have asked me, “Why now? What made you leave Figma to build Habitat?” I decided to stop being a worker and join the chat. But, as I said, Habitat's mission is to build a world with data agency. Increasingly, people, businesses, and organizations are asking for it. They're saying, “I have all this data. How do I make it parseable and useful to someone else by giving it to an LLM?”

Context engineering—giving agents the right context—requires data agency. It requires access to your data at the time and in the form an agent needs, touching on data access and interoperability. Historically, our brains have been an interface with excellent properties for on-demand access and interoperability across data types. Agents obviously don't have a brain, and that's not the provocative part of this talk.

Think about the lifespan of software. The tools we use once changed over decades. Then it became years, and it will probably become much shorter. The piece that should become ephemeral is the application layer, or surface layer. That requires unbundling data from the application so the underlying data remains even after the surface changes.

To do that, we need standards for how data is stored, what it looks like, and how it is accessed. That's exactly what is happening in AT Protocol and Habitat.

Finally, as vibe coding has become mainstream, many people are creating what I call contextual spaces online. These are all real examples I've seen; I didn't make any of them. They feel like the 2026 equivalent of building your own website in the 1990s, but they're social. People share data back and forth, and often the spaces aren't public. You can't just look at what's happening; you have to be invited into a group.

Wouldn't it be nice if these applications were built on the same data layer, so they weren't rebuilding the whole stack from scratch and the data wasn't siloed and could be reused elsewhere?

That's all I have today. If you're interested in learning more or working with Habitat, we're looking for developers to collaborate with. I'll also be in Berlin for about a month. Feel free to email me or put your email on this website; I'll reach out. Thank you for coming to my talk. I hope you enjoyed it.

**MC:** I like all this talk of removing servers, and your answer is just to give people a server. But it makes a lot of sense. There are things you cannot do on mobile devices. Something connected all the time with a lot of storage—
