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
cleaned_transcript: "../cleaned/2026-07-13 - Armin Ronacher and Colin Daymond Hanna - Reflections on building cloud and local hybrid machine entities.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Reflections on building cloud and local hybrid machine entities

**Armin Ronacher and Colin Daymond Hanna · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1130-reflections-on-building-cloud-and-local-hybrid-mac) · [Raw transcript](../raw/2026-07-13%20-%20Armin%20Ronacher%20and%20Colin%20Daymond%20Hanna%20-%20Reflections%20on%20building%20cloud%20and%20local%20hybrid%20machine%20entities.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Armin%20Ronacher%20and%20Colin%20Daymond%20Hanna%20-%20Reflections%20on%20building%20cloud%20and%20local%20hybrid%20machine%20entities.md)

## Overview

Armin Ronacher and Colin Daymond Hanna argue that persistent AI “entities” will necessarily combine local and cloud components, but should preserve user agency through open, provider-neutral harnesses and locally controlled state. Using Pi's architecture, they distinguish GPU, agent-local, and persistent state, show how hosted model providers increasingly introduce hidden or non-portable state, and recommend portable transcripts, open-weights support, strong local-first user experiences, and collective pressure on platforms.

## Detailed notes

### An open AI stack for human agency

Hanna introduces Airendel as a public-benefit corporation chartered to build software and open protocols that strengthen human agency. Its small team wants people to wield AI rather than surrender control to agents or the few walled platforms toward which frontier compute, models, harnesses, and surrounding opportunities are converging. The company is building toward a neutral, composable, open-source frontier AI stack controlled as much as possible by end users. Pi, a harness built by their partner Mario, sits at its center.

Hanna calls a persistent, coherent agent-like system an “entity,” while reserving agency itself for humans. An entity may add tools, context, or personality to a harness and operate across several interfaces. Users want its context, customization, ownership, and privacy to be local, while also expecting continuous availability and access to globally stored data. That makes the architecture inherently hybrid.

Local execution provides residential IP addresses, owned compute, local context, and privacy, but a powered-off device makes sessions unavailable and complicates multiplayer collaboration. Cloud execution is available and can integrate with hosted interfaces, but cloud IPs are often blocked, data leaves the user's hardware, and globally reachable systems expose a larger attack surface. Hanna hands off to Ronacher to examine how those trade-offs appear in a concrete harness.

### Three locations of agent state

Ronacher describes Pi both as a coding agent comparable to other coding assistants and, more importantly, as a minimal building block for custom harnesses. Its architecture independently arrived at problems familiar to local-first developers.

He divides an agent session into three kinds of state. GPU state includes the inference provider's KV cache, which lets subsequent prompts continue without reprocessing the entire conversation. Agent-local state influences a session but is not sent to the model, such as a change in thinking level or a switch from a GPT model to an Anthropic or open-weights model. Persistent state consists of tool effects such as modified files and written memories.

Pi stores a generic, append-only session transcript as a tree. Entries include model changes, user messages, and assistant actions. A tree permits branching, rewinding, and replication. In principle, the transcript should be portable between computers and models because the user is its authority. As an example, a Pi Analyze label can trigger a cloud analysis in GitHub Actions and produce a transcript that a developer continues locally, avoiding a wait while retaining the model's stopping point.

Each model nevertheless needs a provider-specific rendering of the generic transcript. A hosted inference provider hashes the prompt prefix and caches its computed KV state, allowing a later prompt to reuse the prefix and calculate only a delta. Without a cache hit, it recomputes the prefix at greater latency and cost. Open-weights models expose the underlying format: system, user, and assistant messages become one sequence marked with special tokens for the model to continue.

Historically, a caller could prefill an assistant response—even a false one—and let the model continue from it. That demonstrated that the local transcript could define the model's apparent history. Most hosted APIs now restrict this behavior.

### Hidden state and declining portability

Provider-hosted tools may keep search results server-side, so those results cannot accompany a transcript to another model. Providers also hide reasoning tokens, leaving a replacement model without the context that led to earlier conclusions. APIs such as OpenAI's Responses API can retain an entire session in the cloud and accept only later deltas. Assistant-message prefilling is blocked for safety, and some sessions are retained for cybersecurity reasons.

Ronacher acknowledges possible justifications but says the overall movement is from user-controlled, portable state toward provider-controlled restrictions. Even an open-source framework can remain tied to one vendor if it always authenticates with and assumes that vendor's services.

He places this concern within broader resistance to AI. Data centers can raise electricity costs, and large-scale scraping has produced markets for residential IP addresses, sometimes supplied by inexpensive consumer devices running hidden VPN services. Yet indiscriminate pushback may entrench multitrillion-dollar incumbents by making it harder for small open-weights efforts to acquire data, train, and compete.

### Building a user-controlled hybrid

Ronacher recommends an open-source, intentionally provider-neutral harness that moves between providers as far as their APIs permit. Users should retain session data rather than depositing it in a single company's cloud. Developers should consciously support open-weights models; large labs' training choices can make their newest models worse at particular behaviors, so smaller open models may offer useful alternatives.

Technical openness is insufficient without a polished experience. Raw tools such as Pi may work surprisingly well, but it would be a poor outcome if only closed cloud models, sandboxes, and ecosystems offered approachable products. Local-first infrastructure can close that gap: Ronacher cites Iroh's convenient NAT hole punching as a way to run a harness and possibly its model on owned hardware while exposing a remote interface through a relay.

Hanna returns to connect these choices to the company's mission. As legitimate criticism of AI grows, he warns against shutting the door after only a few companies have achieved enormous scale. Smaller grassroots, open-source, and open-weights projects still need room to develop.

### Questions on platform power and open source

Asked whether Pi creates reasoning traces, Ronacher says Pi only requests a reasoning effort and displays what the provider returns. Newer models expose so little useful reasoning information that the feature may as well be disabled.

Asked whether the relationship with model providers is adversarial, Hanna describes it instead as structurally imbalanced. Companies at enormous scale cannot give every smaller ecosystem partner equal attention. Developers and users can counter that imbalance by expressing clear shared preferences through community and action. He believes providers do notice thoughtful, high-signal feedback.

On AI-authored contributions, Ronacher says Pi currently accepts pull requests only from an approved list and closes issues by default before triage. Many verbose AI-generated reports are partly fabricated; he prefers a short human explanation. The policy may change because it also impedes contribution, but even one original sentence is now conspicuous and valuable. Maintainers want to hear from the person, not merely their machine.

### European and open-weights models

Ronacher argues that language models inevitably embody cultural bias, unlike a conventional library whose bits can travel without carrying the same cultural worldview. Europe therefore has a reason to develop its own models. Money and scale remain constraints, but he identifies the immediate European bottleneck as expertise: too few people know how to train models, and many already work for large companies. Training more practitioners is a necessary first step.

Hanna is optimistic about open-weights models. Some precision-critical or hypercompetitive applications will keep paying for premium frontier systems, but many tasks only require a model that can execute a loop reliably. Competition in Asia and, he hopes, Europe is rapidly bringing that capability into the open, where developers can specialize models for particular cultures and applications.

The MC closes by suggesting that provider-neutral harnesses commoditize inference. The best model may remain available at a premium, but many applications will reach a point where an open alternative is simply good enough, much as additional display pixel density eventually becomes imperceptible.
