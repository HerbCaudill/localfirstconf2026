---
source: local-first-conf-recording
title: "Tiles: Own your AI with local models and open protocols"
date: 2026-07-13
speakers:
  - "Ankesh Bharti"
source_recording: "../../recordings/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1500-tiles-own-your-ai-with-local-models-and-open-proto"
source_transcript: "../raw/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Hi, everyone. I'm Ankesh. I was here in the audience last year, and it really changed [unclear], so it's an honor to be back as a speaker.

Today I want to talk about reclaiming control of our digital lives in the age of AI. I think it starts by running AI locally on our own devices and continues by building on open protocols instead of closed platforms. Together, those two ideas let us own our data, our identity, and how our AI works.

I love ChatGPT and have used its products since launch. What keeps me coming back isn't just the models; it's the consistency of the user experience and the productivity that memory provides across its surfaces. It feels less like using a chatbot and more like using an app that knows me. It started feeling more like a relationship, which made me ask a different question: what kind of relationship do I actually have with this system?

That's when I realized the relationship had become one-sided. The more ChatGPT learns about me, the more power it has over my digital life. If I stop paying rent, part of my digital memory becomes inaccessible. Because I don't fully trust who can access what I share, I can't always express myself freely.

I love using AI; I just don't love depending on something I don't own or control. I believe we can do better. I want the same convenience without depending on black boxes. I want my identity and memory to stay with me across every app I use, with trust I can verify computationally. I still want a relationship; I just want it on my terms.

That leads to one question: can we build AI like this today? I think we finally can. Three things have changed.

First, frontier AI is no longer locked behind proprietary APIs. For many practical workloads, frontier-level capabilities are available in open-weights models, as shown in this chart by Artificial Analysis.

The second change is the compute in consumer devices. Apple's UltraFusion combines two Apple Silicon Max chips into one Ultra chip, enabling medium-class open models to run on-device. But this isn't only about running frontier models on expensive on-device setups. As frontier open-weights models improve, techniques such as distillation transfer those gains to smaller open models. Small models are delivering significantly more intelligence per watt.

We're also finding smarter ways to run large models at the edge. Apple's upcoming Siri in iOS 27 is powered by Foundation Models 3, a distilled version of Gemini, and runs a 20-billion-parameter mixture-of-experts model directly on the iPhone. It loads expert weights from fast flash storage instead of keeping the whole model in memory. By loading one expert per prompt rather than per token, it largely compensates for flash storage's higher latency.

The third change is growing adoption of open protocols such as ATProto and ActivityPub. Bluesky, built on ATProto, has grown to more than 35 million users, with a highly developed ecosystem building user-owned applications.

We now have the models, compute, and protocols. The technology is finally here, but products haven't caught up.

Today's local AI tools are technically excellent. They're built for private, personal use, and local AI is naturally great for that. But privacy doesn't mean I don't want to collaborate. I still want to share, work together, and move between my own devices, just on my own terms. Most local AI tools don't support that. When they do, they still depend on platforms. Collaboration features usually require a centralized login, such as “Sign in with Google.” Instead of owning my identity, I still rely on somebody else's platform. I've traded one platform dependency for another, even in supposedly private local AI tools.

I started thinking about what my dream local AI would look like. Everything on this slide comes down to one idea: all the polish of modern AI products, but working for me instead of the platform. That means polished on-device models, peer-to-peer sync, user-owned identity, shared links, and developer tools that make local AI feel as simple as the cloud.

It's not only my dream; it's shared. A post Eileen shared earlier today described a similar vision of open and owned AI.

That led me to build Tiles. It's a local-first AI system. Today I'm releasing an alpha with a CLI shown on the screen. Tiles is built to make ownership the default without compromising convenience.

The architecture follows one simple principle: keep ownership on the device and use the network only where it adds value. The app, model, and agent data live on local devices. The cloud is used only for collaboration. ATProto identities power social features, while end-to-end encrypted peer-to-peer synchronization uses Iroh relays.

The technical architecture has three layers. Rust handles core systems, Python powers inference, and TypeScript runs the agent runtime, embedding Pi as a Bun binary. If you're interested in the [unclear] protocol module, I'm happy to discuss it after the talk.

Here is one more graph of Tiles' features. Tiles includes `gpt-oss-20b` by default. It uses the Modelfile format, a plain-text blueprint for building and customizing local AI models. Plugins turn persistent skills into reusable workflows by storing `SKILL.md` files.

[Unclear] connects to local models running on remote machines over a peer-to-peer network, giving you access to your ambient AI computer wherever you are. That same peer-to-peer foundation enables encrypted chat synchronization across linked devices, using locally generated DIDs and UCAN for zero-trust identity and authorization.

Finally, chat sessions can be shared through public or private links and published as ATProto lexicon records.

With that overview, let's move to the demo I recorded yesterday after being inspired by Christian's demo of the [unclear] CLI. This recorded demo shows it running as a Tiles plugin with remote inference. [The remainder of the demo narration is unclear.] Finally, I share the chat. This shared-chat example shows the same [unclear] as a Tiles lexicon record.

What impressed me was that this speed was possible locally because of the tool's simple, plain-text-first design combined with the vertical integration behind Tiles across its internal layers.

The three of us have been working full-time on Tiles for the past six months. I'm grateful for the guidance of Boris Mann, Dietrich Ayala, and Gordon Brander on this project. Tiles is really a product of the local-first community, and many of its technologies come directly from the work of people in this room.

User & Agents has been an incredible community partner where many of these ideas took shape. [Unclear] was our design partner, designed the Tiles logo, and helped turn our ideas into its visual identity. Special thanks to Dietrich and [unclear], my co-founder at User & Agents. Thank you to Boris, [unclear], Hugo, and everyone who sponsored Tiles, shared advice, and helped along the way. I truly would not be standing here without you.

If you're interested in sponsoring Tiles, providing funding, or exploring collaboration opportunities, please talk to me afterward.

To recap, I love ChatGPT, but I don't want it to control my context. Local AI and open protocols let us keep the convenience while making our data, identity, and how our AI works truly ours. I'd love for you to try Tiles and tell me what you think. That's my talk. Thank you.

**MC:** What's been the hardest or most surprising part of doing this so far? Because the way you've described it—
