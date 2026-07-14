---
source: local-first-conf-recording
title: "Reflections on building cloud and local hybrid machine entities"
date: 2026-07-13
speakers:
  - "Armin Ronacher"
  - "Colin Daymond Hanna"
source_recording: "../../recordings/2026-07-13 - Armin Ronacher and Colin Daymond Hanna - Reflections on building cloud and local hybrid machine entities.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1130-reflections-on-building-cloud-and-local-hybrid-mac"
source_transcript: "../raw/2026-07-13 - Armin Ronacher and Colin Daymond Hanna - Reflections on building cloud and local hybrid machine entities.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Good morning, everybody. It's a pleasure to be with you all. Thanks, Adam, for the kind introduction. I think he's absolutely right. Our company and ideals say: here's the technology, but we're the ones who wield it. We've got to learn and use it, but that doesn't mean we need to forgo our control or power.

I'm Colin. I'm a partner in a company called Airendel. Airendel was formed last year as a public-benefit corporation created to craft software and open protocols that strengthen human agency. This is embedded in our company's founding charter.

Today we're a small band of humans dedicated to crafting better ways to wield AI. We do that by building tools in the open, designed to be shaped by the humans who use them.

One of the problems we saw when we started the company was that the frontier AI stack—the compute capacity, models, [unclear] data, harnesses, and opportunities sitting on top of them—is rapidly converging toward a few walled platforms. Those same platforms are actively encouraging humans and builders to forgo their agency and let the agents, quote-unquote, do the full job.

The solution we'd like to see, and are building toward, is an open-source frontier AI stack that is neutral, freely composable, and maximally controlled by the end user. This is the stack as it stands today; it's evolving. Right in the middle is a harness built by our friend and partner Mario called Pi. Pi has been a phenomenal example of the principles we stand for. There are other aspects up and down the stack that we're actively working toward. They're either open source out of the box, or we're progressively making them more open source.

We think these primitives, when delivered to end users, give them freedom and control over a powerful new technology that we, as end users and humans, deserve to control. That's one of our guiding forces as a company.

We're at a local-first conference. What's interesting about these new technologies is that at almost every layer and component, you can choose whether it runs locally or in the cloud. In fact, many architectures are already hybrid. The harness often runs locally on your machine, while the entity leverages some global state.

What do we mean by an entity? An entity is an agent, but we believe that we are the agents. An entity often sits on top of a harness, or is a more opinionated version of a harness. It may have a more robust toolset, deeper context, or a personality. Above all, entities aim to be persistent and coherent across different surfaces.

People want to interact with entities that bring the benefits of local-first. They want context and [unclear] ownership to be local, along with customizability and privacy. At the same time, they want an entity to feel coherent and capable across interfaces and to manage access to relevant context and globally stored data. The entity inherently needs to be a hybrid.

There are pros and cons. Running things completely locally lets you use residential IP addresses; many third-party web services assume you're human, even when in fact you may not be. You can use cheaper compute you own on your lap or desk rather than paying a third-party markup. You own the contextual data to the extent you aren't sending it through an API to an LLM—Armin will discuss that later—and things are inherently private.

On the con side, there are availability problems. If the device you're relying on for compute is off, how do you access the session or context? Multiplayer and collaboration are less common but nevertheless challenging to architect in a completely local-first environment.

The cloud gives you availability and access to cloud-based third-party interfaces. But cloud IPs may be blocked and create authentication issues. You no longer own and access data entirely within your walls and hardware. There are also security concerns. One of the first entities we built was email-native. Something globally accessible and reachable inherently has a larger threat surface than something contained on your machine.

Navigating these trade-offs to build hybrid entities in a principled way without compromising trustworthiness is non-trivial. To give an example of the opportunities and challenges involved, Armin is going to take it away.

**Presenter:** I don't want to pitch too much of our stuff, but much of what I'll discuss is built on top of Pi or based on Pi's architecture. If you want to learn more, you can find plenty online.

When I talk about Pi, there are two parts. One is a coding agent you can download that works like Claude Code, Codex, or whatever. More importantly, it's a building block: a harness from which you can make your own harness. It's very minimal out of the box, but it has important qualities that, without being intentionally designed this way, are close to what local-first deals with.

At the end, I'll link to a blog post I wrote late last year. I encouraged people building harnesses and LLMs to look to the local-first community because they face many problems an LLM ideally also deals with.

We think about three parts of state that can live in different places with different primary stakeholders—the party responsible for the master record.

One is GPU state. Unfortunately, today your GPU most likely isn't on your computer; it's in a data center, so some state is there. How many people have worked with Claude Code or Codex? You should be familiar with the interaction: you write to the machine and it responds. It doesn't only respond with text, but also with tool calls that then get executed. Every time the machine stops and you give it another prompt, you want to continue where you left off. The cloud maintains a KV cache so it doesn't have to process the whole interaction from the start. Some state sits at the inference provider.

Then we have agent-local state: data that never goes to the LLM but is still functionally relevant to continuing your session. In Pi, for example, you can change the thinking level midstream or move from a GPT-family model to an Anthropic-family or open-weights model. That transition is retained in the session log but never sent to the LLM.

Then there is persistent state. When the agent executes tool calls, it manipulates files and might write to a memory file. That state also exists. The problem is figuring out which state to send where.

This is a mock session transcript. It usually has a header saying which session it is, then entries. In Pi, and in some other coding agents such as Claude Code, it is a tree. Trees are great because you can branch or fork: rewind the conversation and try another path without losing what happened. Trees are also good for replication.

The second line is a model-change message saying that from this point onward we're talking to GPT-5.3 Codex. If I replay this append-only log, I know which model is active. A later message could say we're continuing with Anthropic models. The third entry is a user prompt: “Add article toggle to settings.” The agent replies that it will add the toggle to persistent preferences. This probably looks familiar.

But the append-only log maintains different kinds of state in different places. The agent maintains state on its side, sends messages to a GPU to get more data, and changes filesystem state.

In a perfect world, I could take my session transcript to another machine. If I started a task locally, I should be able to put the transcript in the cloud and continue. If all tool calls run in a remote sandbox, it shouldn't matter much whether the transcript is here or there.

We are doing that. If you've looked at Pi issues recently, you'll see that when someone adds a Pi Analyze label to an issue, GitHub Actions runs an analysis in the cloud. Its output is a session transcript the developer can take and continue locally. They don't have to wait five minutes for analysis, but receive the session state exactly where the model left it.

In theory, you should be able to take a transcript to another model and continue there. If you've used Pi, you have probably noticed that this works for coding: you can switch models and continue. It's a very nice property. It should be possible because all my state ought to be local, wherever I'm running this. I'm the authoritative point; it's my state, and I should be able to do what I want with it.

It doesn't quite work that way. First, not every session entry is sent to the GPU. I take generic Pi session-log entries and adapt them to the model I'm talking to. A local DeepSeek model expects a different format from an OpenAI Codex model.

Here's a basic visualization. The user asks, “What is the capital of France?” The model replies, “The capital of France is Paris.” The inference provider hashes the whole thing and keeps the resulting KV cache on an SSD somewhere in its distributed cloud. If I return within the next five minutes, hour, or in some cases seven days, it doesn't have to repeat that computation for my next question; it restores the GPU to the same state. If I then ask, “What's the population?” it gets a cache hit for the earlier messages and computes only the delta, replying with Paris's population. If traffic lands on a GPU at the same provider without that cache, it recomputes the prefix. It's more expensive and slower, but possible.

With open-weights models, you can inspect the fully expanded form. The JSON request becomes one text block with special tokens: a system marker and prompt, user and assistant message markers, and so on. The LLM is asked to continue that text.

At one point, you could exploit this directly. After asking for France's capital, you could insert an assistant block saying, “The capital of France is Berlin.” The model might continue, “I'm just joking; it's actually Paris,” because it interpreted the supplied text as its own incorrect answer and tried to recover. At the underlying inference layer, you could lie about what the model had answered and observe what happened.

That is no longer possible with most hosted models. Three years ago, we had the power to keep state on our machine, take it to an inference API, and continue. Now providers are imposing restrictions.

The first were hidden server-side tokens. If a hosted API performs web search, for example, the search results may remain on the server and never be revealed. If I switch models, I can't take those results with me because only the server fills them in. It's hidden state, and I'm not happy about it.

Reasoning tokens are also often not revealed, presumably partly because this is a competitive environment and providers want to close the door behind them. If I take a transcript from an Anthropic model to a GPT model, the reasoning tokens aren't there. The new model can be confused about how the conversation reached its conclusion because it can't read the prior reasoning.

Some APIs encourage server-side storage. With OpenAI's Responses API, you can append a delta to a server-held response, but then your full session log is no longer on your computer. It is in the cloud. That did not work well for enterprises, which is why it is optional.

The earlier technique of lying about the model's answer is called assistant-message prefilling. It is now blocked for safety reasons, even though the underlying model can do it. Certain session logs are fully retained on servers because of cybersecurity risks. We moved from something fully under user control to something increasingly restricted by model providers—probably for good reasons, but it still takes us away from where we once were.

This may be more controversial, but for good reasons there is a lot of pushback against AI. It's understandable: if someone builds a data center and electricity prices rise, pressure follows from the capabilities of these systems.

We're also entering a world of massive scraping. If you buy a projector or streaming device from Temu or AliExpress, part of its business model may be a VPN that resells your IP address. Residential IPs can be bought from many providers online. Something is shifting.

I emphasize this because open-source developers and people interested in privacy intuitively push back against AI entirely. But that increasingly makes it harder for open-weights models to compete with massive multitrillion-dollar enterprises that already have the power and rights. Pushback can make it harder for small teams to build open models.

Given all of this, how do our tools empower users while still using this technology? If you build an agent, you could start from first principles and build it completely from scratch, but in practice you'll begin with an agent or SDK framework. I recommend starting from an open-source framework, specifically one that is intentionally provider-neutral and lets you move between providers as much as possible. I can't take reasoning traces from one model to another. The OpenAI harness may be open source, but it always means OpenAI; it logs into that system.

Retain your data with you. There is a huge difference between an agent system that requires all data to go into one company's cloud and one where you keep control of the data.

Ultimately, we should consciously make these systems work with open-weights models. I know it's hard because they're usually smaller, but on my blog you'll find cases where the way large labs train their models makes state-of-the-art models worse for certain behaviors. There can be real benefits to experimenting with open models. We should also train some of the work ourselves.

The local-first community has probably already learned that if the experience isn't user-friendly, it doesn't really matter. It is impressive that things like OpenCode or Pi work as well as they do because they are raw and less user-friendly than the polished experience of ChatGPT. But it would be unfortunate if the only polished internet experience were fully in the cloud, using closed models, sandboxes, and ecosystems. We must focus on user experience.

Many commoditized technologies now let something run locally while being available anywhere. A shout-out to Iroh, which makes NAT hole punching convenient. You can run an agent anywhere, run a little relay, and connect a user interface to it. It doesn't matter where the data is. You can get the same experience as a hosted system if you push in this direction.

You can run the harness on your own hardware, ideally with the model also running there, while still connecting it to the world wherever you want to implement it. That is increasingly possible in the open-source environment.

I mentioned a blog post that goes into more detail about the surprising similarities between problems the local-first community has solved and where present-day APIs fall short.

**Presenter:** This restates our company's purpose. We feel that the purpose of this small band of humans is to set a foundation on which we can build technology aligned by default with empowering us to have tools on our side, working for us, because there is still resistance to solving this.

As Armin said, while communities and society are becoming more critical of AI for the right reasons, we need to be careful not to shut the door after only a few players have gotten in, reached scale, and grown huge. We shouldn't make it harder for smaller, grassroots, open-source, and open-weights efforts to gain traction. This is nuanced. You can read more about the company and follow us on GitHub and other platforms. We look forward to questions. Thanks, everybody.

**MC:** I'm continually surprised by speakers ending their talks on time at this conference, but pleasantly surprised. Many questions, but let's start with this one: does Pi create reasoning traces by default?

**Presenter:** Pi doesn't create anything; it uses whatever the model provides. Pi asks the provider for a certain amount of reasoning effort, and the UI exposes what comes out. Unfortunately, particularly with the latest generation of models, not only do we no longer get reasoning summaries or reasoning blocks, but there's very little information about what's happening. You might as well keep it off because it isn't useful.

**MC:** A follow-up, similar to what I asked the npmx folks yesterday: do you sometimes feel you're in an adversarial relationship with providers? You're trying to work around them while they pull back, or maybe they know what you're doing and would prefer people use first-party harnesses. Or are they happy to have people paying for API tokens through any frontend?

**Presenter:** I wouldn't say adversarial. There is an imbalance, a function of how quickly these companies reached scale. When you reach a certain scale, everything you look at becomes relative to the company's size. Unless something is existential, how could you put a huge amount of care and thought into every dimension? When you're a small end user or ecosystem partner, there is an inherent imbalance. Users and developers can counter scale by showing clear preferences and priorities as a group. Through collaboration and community, individuals with inherently less economic scale can flex.

**MC:** That's platform risk. People in Apple's App Store ecosystem know about it, and some discuss a union for app developers. Users coming through your frontend may be only a tiny point in the providers' traffic. You may get away with things because they aren't paying attention, but you're also not very noticeable.

**Presenter:** They do pay attention, particularly to high-signal, smart, thoughtful people making their preferences known. Nobody should feel discouraged about their voice. People are listening. We have to demonstrate our preferences through actions, and we think that can lead to an ecosystem serving people broadly.

**MC:** Another question: how do you handle pull requests from language models? Svelte has mostly turned them off, but perhaps that would feel odd for what you're building.

**Presenter:** Pi currently mostly restricts PRs. You have to be on an approved list for a PR to pass. That's true for issues: we close them all by default and triage them to determine which are high-signal, because many issue reports are not written by humans. That's challenging for many reasons.

I much prefer a human's short summary of the problem to a human putting it into an agent and turning it into a massive, mostly fabricated issue description. Open source is changing how it behaves. I don't think our current solution will still be the solution in six months, because it makes contributing harder. When people write something from their own brain, it shines through because it is so rare these days. Even one original sentence at the top of a body of assisted work shines through. Don't be discouraged. People want to hear from you, not your machine.

**MC:** You mentioned training models here in Europe. Can you say more?

**Presenter:** Models have inherent cultural bias because this involves language. In the past, if you used an open-source library from a person in another country, you probably wouldn't worry about it; there was nothing culturally specific about the bits and bytes. Models are different. Everybody has cultural bias. For that reason alone, it would be good for Europe to have models because Europe has its own view of the world, not necessarily represented in existing models.

How do we scale training down so more companies and people can do it? Right now money matters most, and Europe is not operating at the same scale. That makes it hard to compete, though we will probably have many models for specific tasks in the future.

The biggest blocker to model training in Europe is currently neither money nor data, but a shortage of people who know how to do it. Even if you raise the money, where do you find the people? They have left or already work for large companies. Training people to train models would be a good first step; that shortage prevents competition.

**MC:** As a related question, local and open-weights models are having a moment. How hopeful are you that they represent a path forward rather than always remaining second-class?

**Presenter:** I'm very optimistic. Some applications will pay premium prices for premium LLMs, which makes sense in hypercompetitive industries or where precision is crucial. But many applications only need a system capable of running a loop and executing a task reliably without hallucination. Given the competitive market forming across the Pacific, and hopefully increasingly in Europe, we're quickly reaching that level of capability in open models. Human ingenuity can then specialize them for a culture or application context. We're optimistic and want to play a role. It's a fun time to be a tinkerer.

**MC:** Something I like about provider-neutral harnesses is that they turn inference into more of a commodity. You can always pay for the best model, but at some point you can say what you have gets the job done. It reminds me of display pixel density: you can continue making pixels smaller, but at some point I can't see the difference. Please thank Armin and Colin.
