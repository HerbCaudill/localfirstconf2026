---
source: local-first-conf-recording
title: "The Harness Is the App"
date: 2026-07-13
speakers:
  - "Sunil Pai"
source_recording: "../../recordings/2026-07-13 - Sunil Pai - The Harness Is the App.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1630-the-harness-is-the-app"
source_transcript: "../raw/2026-07-13 - Sunil Pai - The Harness Is the App.md"
cleaned_transcript: "../cleaned/2026-07-13 - Sunil Pai - The Harness Is the App.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# The Harness Is the App

**Sunil Pai · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1630-the-harness-is-the-app) · [Raw transcript](../raw/2026-07-13%20-%20Sunil%20Pai%20-%20The%20Harness%20Is%20the%20App.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Sunil%20Pai%20-%20The%20Harness%20Is%20the%20App.md)

## Overview

Sunil Pai argues that the useful essence of a coding agent is not code generation or a chat interface but a reusable harness: an agent loop attached to a workspace, tools, and a runtime that can act directly on a user's existing document. Through a music-workstation demo, he proposes “two hands, one document,” where a deterministic, synchronized application remains primary and an invited agent manipulates the same objects and controls as the user. He then presents stateful serverless infrastructure—specifically Cloudflare Durable Objects and Project Think—as a scalable way to give every application such an always-available agent, concluding that consumer software should embed agent capabilities into familiar interfaces while users retain ownership of their underlying work.

## Detailed notes

### What made coding agents work

Pai opens by connecting his former company, PartyKit, to the local-first and sync-engine community, then acknowledges that this is a Cloudflare sponsor talk and repeatedly jokes that the product costs five dollars per month. His first demo is a coding agent built the day before, running in the browser with its backend on Cloudflare Workers and Durable Objects. He asks it to generate a large click counter, posts to Twitter while it works, and returns to find generated code and an application living in a nearby edge-hosted Durable Object. The counter itself fails, giving him a running joke for the rest of the talk.

He asks why coding agents feel magical to developers when many agent frameworks existed before their recent adoption. His answer is that successful coding agents combine an agent loop with a computer. They have a workspace or file system, tools such as Bash and external services, and a place to execute what they produce. The loop can act, observe, and adjust rather than merely return text.

Once connected to a user's environment, that loop can run in response to events or schedules: process incoming email, summarize weekly GitHub activity, or perform work for a person, team, or organization. Programmers experienced product-market fit first because generated code is executable. Whatever its quality, developers can run the output and let the agent operate the machine itself.

Pai warns that developers mistake this successful special case for the whole opportunity. Ordinary users do not care about code repositories or generating applications. They want to accomplish goals, learn, and amplify their capabilities. Coding is only one domain in which a more general agent harness can act.

### Two hands on one document

Pai introduces the phrase “two hands on one document.” Traditionally, an application presents a UI for manipulating a document: changing a shape's color or size and renaming it. An agent loop can become another participant operating on the same document. A user can express intent—“make it calmer,” “make it warmer,” “go bolder,” or “make it smaller”—and let the agent translate that into concrete changes.

This extends a capability developers have long held through IDEs and scripts. A developer can batch-rename or classify photos, but a regular user has historically needed to find and buy a narrowly specialized app that may not perform the exact desired operation. A general agent embedded in software can make intent-driven manipulation available to everyone.

Pai also rejects the claim that text alone will replace graphical interfaces. People may enjoy conversational tools such as ChatGPT without wanting an e-commerce site to become a chat window that generates a new interface for every request. Familiar windows, icons, menus, pointers, and domain-specific applications remain valuable. The agent should be invited into the interface and work alongside the user rather than hide the user's documents behind an agent-controlled layer. Users should retain ownership of their documents, songs, and other artifacts.

### A music workstation with an embedded agent

To demonstrate the interaction model, Pai shows a small digital audio workstation he built. It is a conventional hands-on music application rather than a model that generates a finished audio track from a prompt. It contains a chord lab, beat sequencer, modular synthesizer, and a learning panel that explains why selected chord progressions work. Pai jokes that everything he makes sounds like the GoldenEye soundtrack.

The same coding agent from the first demo is embedded in the workstation and has access to its controls, tools, and capabilities. Pai asks it to make a jungle beat and select instruments for “unhinged DnB.” The agent shows its work in a trace, changes the application state, and produces an odd-sounding track that Pai quickly stops. Other requests could make the track cinematic, select instruments, or alter multiple tracks.

The point is not autonomous generation of a complete song. The user continues interacting with the actual musical objects while the agent works on those same objects. Pai contrasts this with a chat that takes one prompt, runs for 30 minutes, and returns a finished imitation of a known artist. He describes the desired foundation as one document, two hands, a deterministic core, and synchronization as the spine.

Live shared interaction requires a sync engine rather than a pull-based architecture. Pai mentions Jazz Tools and LiveStore but treats the particular engine as an implementation choice. The important part is that user actions and agent actions operate against one synchronized state.

### Stateful serverless as the runtime

Pai then gives Cloudflare's answer for building the architecture. Each document can live in a Durable Object, an infrastructure-level actor that runs close to users on Cloudflare's edge network. He reports 15-to-20-millisecond latency in Berlin. A document instance can be shared through a link for multiplayer collaboration; his presentation deck itself runs as a Durable Object with agent capabilities, though he removed an audience-editing QR code because it lacked authentication.

Durable Objects supply stateful serverless execution. Pai argues that a personal agent for every application cannot economically require a dedicated container, VM, Kubernetes cluster, or Mac Mini for every person. Plain stateless functions are also insufficient because the agent needs durable state and may have to operate in the background even when the user is disconnected. The infrastructure must support millions or billions of concurrent logical agents without provisioning an always-running machine for each one.

Unlike conventional websites, where only a fraction of registered shoppers are concurrent, agents may need to react around the clock. A Durable Object persists the document and computation close to the user and can eventually move geographically with them. Pai clarifies that a Durable Object is not itself a database, though it includes database storage.

### Turning the runtime into a computer

On top of the Durable Object, Pai places Project Think, a hosted serverless coding agent developed by his team. It is designed to survive deploys and repeated crashes without visible interruption; even a midstream failure can resume the response.

Project Think connects to a workspace through a virtual file system inside the Durable Object or a remote sandbox or VM. Workloads can escalate to or de-escalate from those environments as needed. Dynamic Workers provide safe dynamic code execution, and tools give the agent access to application capabilities. Together, the workspace, runtime, and tools constitute a computer without requiring a physical box.

Pai summarizes the design advice as “build substrates, not chatbots.” Developers should take the harness pattern that made coding agents useful and connect it to the concrete interfaces used by musicians, accountants, canvas users, and others. The design question is which objects and controls users already manipulate with their hands and how an agent can be given controlled access to those same operations.

### The harness becomes the application

In closing, Pai says coding agents are usually treated as heavyweight developer tools running on laptops or cloud VMs. That framing can make the execution environment cost more than model inference. Conceptually, however, an agent is a loop with tools, a workspace, and the ability to run things. When that loop can emit HTML, CSS, and JavaScript or connect to a native application, the harness itself becomes the app.

He does not make Durable Objects mandatory despite the sponsor pitch; a VM or another runtime can implement the same idea. The essential point is that users already have decades of documents, workflows, and familiar applications. Developers should not replace all of that with a blank chat. They should define the computer-like capabilities their application can expose and plug an agent loop into them as a collaborative partner.
