---
source: local-first-conf-recording
title: "Tiles: Own your AI with local models and open protocols"
date: 2026-07-13
speakers:
  - "Ankesh Bharti"
source_recording: "../../recordings/2026-07-13 - Ankesh Bharti - Tiles - Own your AI with local models and open protocols.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1500-tiles-own-your-ai-with-local-models-and-open-proto"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Tiles: Own your AI with local models and open protocols

**00:00:00**

Hi everyone, I am Ankesh. Usually I came back to the non-inventure. I was here in the audience last year, and I really changed the lives of the world, so it is an honor to be back in the speaker.

**00:00:13**

Today I want to talk about reclaiming control of our digital lives in the age of AI.

**00:00:18**

I think I start by running AI locally on our own devices, and it continues by building on open protocols instead of closed protocols.

**00:00:27**

Together those two ideas lead us on our data, our identity, and how our AI works.

**00:00:34**

I love ChatGPT, and I have been using their products since they launched.

**00:00:39**

What keeps me coming back is not just the models, it's the consistency of the user experience and the productivity that memory provides across its purpose.

**00:00:48**

It feels less like using a chatbot, and more like using an app that knows me.

**00:00:52**

I started feeling more like a relationship, and that made me ask a different question.

**00:00:57**

What kind of relationship do I actually have in the system?

**00:01:01**

That's when I realized the relationship has become one-sided.

**00:01:06**

The more chat you will learn about me, the more power it will work on my digital life.

**00:01:11**

If I start paying the rent, part of my digital memory will be successful.

**00:01:15**

And because I do not fully trust who can access what I share, I cannot always press myself freely.

**00:01:21**

I love using AI, I just do not love depending on something I do not want or control.

**00:01:26**

I believe in the boundaries.

**00:01:29**

I want to keep the same convenience without depending on blank shows.

**00:01:34**

I want my identity and memory to stay with me across every happy mix.

**00:01:39**

With trust that I can verify computationally.

**00:01:42**

I still want a relationship, I just want it online.

**00:01:45**

That which will lead me to one question, can we actually build AI like this today?

**00:01:51**

I think we finally can, with the technology we have today.

**00:01:55**

Three things have changed.

**00:01:57**

First, the frontier API is no longer locked behind proprietary API.

**00:02:01**

For many practical workloads, frontier level capabilities are already available in open-witch models, such as GOS Y.2, as shown in this chart by artificial analysis.

**00:02:12**

The second change is the amount of compute we now have in our consumer devices.

**00:02:17**

The technology is why Ultra Fusion combines two Apple Silicon Max chips into a single Ultra chip, enabling medium-class open models to run on-device.

**00:02:26**

It is not just about running frontier models on expensive on-device setups.

**00:02:30**

As frontier open-witch models improve, techniques like installation repeatedly transfer those games to smaller open models.

**00:02:37**

Small models are literally living significantly more on intelligence per watch.

**00:02:41**

We are also finding smarter ways to run large models at the edge.

**00:02:45**

Apple's upcoming series in iOS 27 is powered by Foundation Model 3, a distilled version of Gemini, and runs a 20 billion mixture of spurt model directly on the iPhone.

**00:02:56**

It loads its spurt waves from past flash storage instead of keeping the entire model in memory, and by loading them one spurt prompt rather than one spurt total, it largely compensates for the higher latency of flash storage.

**00:03:10**

The third change is the growing adoption of open protocols like ADProtor and ActivityProtor among others.

**00:03:17**

Blue sky unit on ADProtor has grown to over 35 million users with a highly-developed ecosystem building user-owned application.

**00:03:24**

We now have the models, we now have the compute, and we now have the protocols.

**00:03:30**

The technology is finally here, but products have not caught up yet.

**00:03:34**

Today's local AI tools are technically excellent.

**00:03:37**

They are built on private personal use, and local AI is naturally great for that.

**00:03:43**

But privacy doesn't mean I do not want to collaborate.

**00:03:46**

I still want to share, work together, and move between my own devices, just for my own terms.

**00:03:52**

Most local AI models simply do not support that.

**00:03:56**

And when they do, they still depend on platforms.

**00:03:59**

Collaboration features is really required of centralized logging, like silent and Google.

**00:04:04**

So instead of online identity, I am still relying on someone else's platform.

**00:04:09**

I just created one platform dependency for all of them, even if it's supposedly private local AI tools.

**00:04:14**

So I started thinking about what my dream in local AI would look like.

**00:04:19**

Everything on this slide comes down to one idea.

**00:04:22**

I wanted all the polish of modern AI products, but working for me, it's all the platform.

**00:04:27**

And that means polish on device models, peer-to-peer sync, user-owned identity, shared links, and developer tools that make local AI feel just as similar as a cloud.

**00:04:39**

And it's just not my dream, it's a shared one.

**00:04:42**

This post shared earlier today by Aileen, described a similar vision upon Open and Open.

**00:04:49**

That led me to build tiles.

**00:04:51**

It's a local-first cloud AI system.

**00:04:54**

To raise an alpha with a CLI on the screen, tiles is built to make ownership the default, without compromising of convenience.

**00:05:01**

The architecture forum's one simple principle.

**00:05:04**

Keep ownership on the device, use the network monthly where it adds value.

**00:05:08**

The app, model, Android data, be on the local devices.

**00:05:11**

The cloud is only used for collaboration.

**00:05:14**

The AT prototype videos power social features, while end-to-end encrypted peer-to-peer sync is done with IOM release.

**00:05:21**

The technical architecture is split across three layers.

**00:05:26**

Rust handles the whole system's Python power inference, and TypeScript runs the alien runtime, which embeds Pi as a bug binary.

**00:05:33**

If there is a micro-store and particular module, I will be happy to discuss it in more detail after the talk.

**00:05:40**

Next, here is one that looks like a graph, tiles' various features.

**00:05:44**

So, tiles include GPT-OS X-20 deep-by-deform.

**00:05:47**

It uses the model file format, a plain-text blueprint for building and customizing local AI models.

**00:05:53**

Plugged it with persistent tiles with usable workflows, by stories, fill.mv files.

**00:06:01**

Time security connects to local models running on remote machines over peer-to-peer network, giving you access to your ambient AI computer, wherever you are.

**00:06:12**

That same peer-to-peer foundation enables encrypted chat synchronization across link devices, using locally generated DIDs and UCAN for zero-trust parity and authorization.

**00:06:29**

Finally, chat sessions can be shared through public or private links, and published as 80 proto-lexicon reports.

**00:06:37**

Now, with that overview, let's move on to the demo I recorded yesterday, after being invited by Christian's demo of Cali CLI.

**00:06:53**

This recorded demo shows Cali running as a tiles plugin with remote inference.

**00:06:59**

Now, we will ask it to 50 minutes, then 3 times.

**00:07:00**

I will ask it to 50 minutes, then 3 times.

**00:07:20**

Finally, I will share the chat.

**00:07:22**

So, this is a shared chat example.

**00:07:43**

And it shows the same YouTube photo, previous record, as a tiles-lexicon.

**00:07:47**

What impressed me is that the speed was possible locally because of Cali's simple, plain-tished-first design,

**00:08:02**

combined with the vertical integration behind the tiles across entrance tiles.

**00:08:06**

The cheer of us have been working full-time on maintaining tiles for the past 6 minutes.

**00:08:12**

I'm grateful for the guidance of Boris Mayer, Dittrich Ayala, and Gordon Brander on this project.

**00:08:17**

Tiles is really a product of local-first community, and many of the technologies being used in tiles

**00:08:22**

can directly from the work of people in this room.

**00:08:25**

User and Agents have been an encrypted community partner, where many of these ideas took shape.

**00:08:30**

That shapes our design partner, designed the tiles logo, and helped turn our ideas into the visual identity of tiles.

**00:08:36**

Special thanks to Dittrich and you, my co-founder, at User and Agents.

**00:08:40**

Thank you to Boris, Lizanne, Hugo, and everyone who sponsored tiles, shared advice, and helped along the way.

**00:08:46**

I truly would not be standing here to develop you.

**00:08:49**

If you are additionally sponsoring tiles, providing funding, or scoring vibration opportunities, please come talk to me afterwards.

**00:08:55**

To recap, I love challenging you, but I don't want to control my confidence.

**00:08:59**

Local AI and open protocols let us keep the convenience while meeting our data, identity, and when reporting truly out.

**00:09:07**

I love for you to try tiles on my colleagues and tell me what you think.

**00:09:11**

Yeah, that's my talk. Thank you.

**00:09:23**

I have a question for you.

**00:09:24**

What's been the hardest or most surprising part of doing this so far?

**00:09:28**

Because the way you've described it.
