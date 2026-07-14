---
source: local-first-conf-recording
title: "Your Own AI Infrastructure: Building a Complete Local AI Stack"
date: 2026-07-12
speakers:
  - "Confidence Okoghenun"
source_recording: "../../recordings/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1430-your-own-ai-infrastructure-building-a-complete-loc"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.md"
cleaned_transcript: "../cleaned/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.md"
---

# Your Own AI Infrastructure: Building a Complete Local AI Stack

**Confidence Okoghenun · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1430-your-own-ai-infrastructure-building-a-complete-loc) · [Raw transcript](../raw/2026-07-12%20-%20Confidence%20Okoghenun%20-%20Your%20Own%20AI%20Infrastructure%20-%20Building%20a%20Complete%20Local%20AI%20Stack.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Confidence%20Okoghenun%20-%20Your%20Own%20AI%20Infrastructure%20-%20Building%20a%20Complete%20Local%20AI%20Stack.md)

## Overview

Confidence Okoghenun presents a practical architecture for running an AI service locally rather than depending entirely on cloud subscriptions. He motivates the approach through privacy, cost, and control, then walks through its four layers: suitable hardware, an inference engine, model orchestration, and an API gateway. His recommended starter stack combines an Apple M-series machine, llama.cpp, llama-swap, and an OpenAI-compatible gateway, allowing applications to share locally hosted open models that remain available and under the operator's control.

## Detailed notes

### Why run models locally

Okoghenun opens by referring to a video in which Theo challenged the case for local models. He encourages the audience to hear differing opinions and jokes that the video's critical comments reassured him that his own talk was still worth giving. His central claim is that many AI tasks, apart from demanding coding and agent workloads, can run on models hosted by a laptop or other personally controlled GPU hardware without a cloud subscription.

He gives three motivations. The first is privacy: local execution keeps personal data away from model training and advertising systems. The second is cost: after purchasing hardware, the owner can generate tokens without per-token fees. The third is control: cloud providers may remove or weaken a model, force an upgrade to a more expensive replacement, or change tokenization and pricing. A locally retained model remains stable for systems that depend on it.

Okoghenun then compares the rapid evolution of open models with the previous year's frontier systems. Sonnet 4.5 had recently seemed powerful enough to prompt claims that coding was over and to support expensive coding businesses. A chart from Artificial Analysis now placed a smaller Qwen model, runnable on a 16-gigabyte Mac, in a similar performance class. Larger open models can run with more memory. He distinguishes these from today's frontier proprietary models, but points to downloadable DeepSeek and GLM models requiring roughly 120 and 300 gigabytes of RAM as evidence that open models are catching up and can be operated on hardware the user controls.

### The four layers of a local stack

The complete stack has four parts: hardware capable of holding and computing the model, an inference engine, an orchestrator that manages multiple models, and a gateway that exposes the service to client applications.

For hardware, Okoghenun ranks three characteristics. VRAM comes first because it determines which model sizes fit. Memory bandwidth comes second because it governs token-generation speed. Raw compute comes third and affects how quickly a model processes input, such as reading a codebase before answering. For someone starting out, he recommends an M-series Mac, particularly a Mac Studio with an Ultra chip, as a relatively inexpensive way to obtain a large shared memory pool, good bandwidth, and acceptable compute.

He also mentions more specialized options. Taalas burns a model into hardware and demonstrates around 16,000 tokens per second, which he contrasts with roughly 500 tokens per second on Nvidia Blackwell. A second, less clearly captured product offers a small mobile GPU that can attach to an existing device, allowing experimentation without replacing the whole computer.

### Inference engines and model sizing

Okoghenun compares Ollama, llama.cpp, and vLLM. Ollama is easy to begin with and has a polished user experience, but he estimates a 20-to-30-percent serving performance penalty. He recommends llama.cpp for individuals and small self-hosted services, describing it as performant and customizable and noting that Ollama itself builds on it. For higher-volume serving where throughput is the priority, he points to vLLM.

The appropriate model size depends on available VRAM, but the model weights cannot consume all of it: the model's context also needs memory. He recommends Unsloth as a resource for reduced-size models that retain quality and Artificial Analysis for comparing model capability and suitability to a task.

### Orchestration with llama-swap

A local operator may prefer different models for coding, summaries, and general tasks, yet lack enough VRAM to keep them all loaded. Llama-swap accepts a model configuration and loads the requested model when a call arrives. If the new model cannot coexist with the one currently in memory, it unloads the old model first. When several models do fit, it can balance traffic across them. This allows one machine to offer a larger catalog of models than it can run simultaneously.

### Presenting the stack through a gateway

The final layer exposes local inference to clients such as OpenCode, Open WebUI, and other applications that accept an API URL and key. An AI gateway manages client credentials and stable model aliases, allowing the underlying model to change without reconfiguring every client. It can also provide observability, prompt caching, and connection-management features.

Okoghenun's complete example runs several llama.cpp instances for models such as Kimi, GLM, and Qwen. Llama-swap manages loading and balancing according to available memory. LiteLLM, Kong, or Bifrost then presents a private OpenAI-compatible API, so existing clients can use the locally hosted models through a familiar interface.

### Availability and next steps

Okoghenun summarizes the payoffs: the service remains usable when the internet is unavailable, data stays private, cloud-provider dependencies disappear, and costs are concentrated in a one-time hardware purchase. The owner can replace models as better open releases appear and has full discretion over which models to run.

He closes by sharing a guide intended to get the stack running on an existing laptop in one or two hours and challenges the audience to try it over the weekend. The MC reinforces that even very small models are worth experimenting with and jokes that their limitations can increase one's appreciation of frontier systems.

The MC then asks how high hardware and VRAM prices affect Okoghenun's recommendations and what he would build in a home lab with an unlimited budget. The supplied recording ends while the question is being asked, so it contains no answer.
