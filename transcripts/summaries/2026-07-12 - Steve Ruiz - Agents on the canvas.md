---
source: local-first-conf-recording
title: "Agents on the canvas"
date: 2026-07-12
speakers:
  - "Steve Ruiz"
source_recording: "../../recordings/2026-07-12 - Steve Ruiz - Agents on the canvas.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1000-agents-on-the-canvas"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Steve Ruiz - Agents on the canvas.md"
cleaned_transcript: "../cleaned/2026-07-12 - Steve Ruiz - Agents on the canvas.md"
---

# Agents on the canvas

**Steve Ruiz · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1000-agents-on-the-canvas) · [Raw transcript](../raw/2026-07-12%20-%20Steve%20Ruiz%20-%20Agents%20on%20the%20canvas.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Steve%20Ruiz%20-%20Agents%20on%20the%20canvas.md)

## Overview

Steve Ruiz traces tldraw's experiments in combining AI with a spatial canvas, from turning sketches into working prototypes to giving multiple agents visible, collaborative roles on the canvas. He then introduces tldraw Offline, a local desktop application whose server and scripting capabilities let computer-based coding agents inspect and alter both drawings and their behavior. His main proposal is that a canvas can be a high-bandwidth interaction environment between people and agents, particularly when local execution gives those agents access and capabilities that would be unsafe or impractical in a hosted service.

## Detailed notes

### tldraw's side-project flywheel

Ruiz begins by explaining that tldraw is both a roughly 20-person London startup and the maker of two products: the free tldraw.com application and the commercial tldraw SDK. Customers such as Google, Replit, and BlackRock use the SDK when they need a canvas but do not want to implement basic canvas features themselves. The free app and a series of experimental side projects demonstrate and market the SDK, creating what Ruiz describes as a business flywheel that also obliges the company to keep building interesting things with AI.

### Make Real and visual meaning

The first major experiment followed the arrival of vision models in 2023. Make Real sent a screenshot of a hand-drawn interface to a language model with a deliberately elaborate “senior front-end developer” prompt, then produced a functioning prototype. In the live example, controls and an image row work from the drawing alone. A user could annotate the generated site, take another screenshot, and ask the model to fix it, making the canvas part of an iterative debugging workflow. Ruiz notes that the project received about 25 million views on Twitter and convinced the team that AI might be a major use case for the canvas.

He frames the canvas as a high-bandwidth, unstructured medium. Two ordinary rectangles can become a progress bar to people sharing the context, even though the application only knows they are rectangles; coffee cups and salt shakers can similarly stand in for traffic in an improvised explanation. Vision and reasoning models suggested that computers might participate in this ad hoc interpretation too. Although the models were unreliable, the team chose to build ahead of their capabilities and let them improve.

### Teaching models to draw and revise

In work with Lu Wilson and Ryan Reed beginning in summer 2024, the team built Teach. It sends the model both a screenshot and a text-based, pseudo-SVG representation of the canvas, then streams back ordinary tldraw shapes. Ruiz contrasts this with generating an image: the result consists of the same editable primitives a person can create. His recurring example asks the model to make a drawn cat blow out a “candle” that is not semantically labeled as one, only represented by rectangles. The model must combine the image and structured canvas data to understand and alter the scene.

The idea evolved into a more complete, Cursor-like harness. Rather than relying on a single exchange, the model could call tools, inspect updated screenshots, evaluate its own work, and continue. The team also added linting feedback for difficult layout problems such as overlapping text. This moved the system toward an iterative agent rather than a one-shot generator.

### Fairies as spatial agents

The next step was to move agents out of a sidebar and onto the canvas as visible collaborators. Ruiz says the still-unpredictable models felt less like dependable coworkers than strange sprites, which led to the Fairies project. Fairies can be moved or thrown, customized with hats and leg length, and given canvas tasks. Their on-canvas appearance exposes whether they are working, thinking, or reviewing.

Ruiz argues that spatial placement supplies useful agent-interface conventions almost for free. When several agents occupy the same area, users can infer that they are working on the same material, something he finds difficult to track with multiple concurrent coding agents. Users can select several fairies and address them as a group; one becomes an orchestrator, writes a to-do list, delegates tasks to the others through a visible chat, reviews their results, and follows up. He demonstrates agents jointly completing animal drawings and describes giving them larger inputs such as wireframes or a product requirements document.

### Escaping the canvas through local execution

Fairies revealed a limitation: agents confined to the canvas cannot retrieve outside information or use the broader context on a user's computer. A hosted product can build and permission connectors to other services, but Ruiz did not want the infrastructure or inherent limits that approach would impose on a free side project. By contrast, he was already seeing Claude Code and Codex perform powerful work through harnesses running locally on his machine.

That observation led to tldraw Offline, which Ruiz soft-launches during the talk. Its obvious value is a file-based Electron version of tldraw that works without signing in or storing documents in tldraw's cloud. Its deeper value is that a local application can safely place risky capabilities within the “blast radius” of the user's own computer rather than tldraw's servers.

The desktop app runs a small local server. A screenshot endpoint lets an agent inspect a drawing, while another endpoint executes JavaScript in the editor's renderer context. Ruiz demonstrates an agent adding to a Spider-Man scene and mentions using it to make illustrations for a technical blog post. He then shows a drawn circuit whose switch turns a light bulb on—behavior that is not a built-in tldraw feature but is implemented by generated scripting and persists when the file is closed and reopened. The circuit can also change the application's theme.

To reach beyond the renderer, scripts can post messages to a separate, permissioned process created by the coding agent. Ruiz uses this to extend the circuit's effect to the operating-system theme. In another improvised scene, he asks for a spider to chase a man, for eyes to follow the spider, and for the spider's face to flip. He acknowledges that the generated prototype code is ugly, but emphasizes that tldraw's HTML, CSS, and React-based rendering and interaction layer gives an agent broad room to create behavior and even additional interface elements.

### The canvas as an agent interaction layer

Ruiz suggests that an agent's best canvas contribution may not be drawing pictures or making slides, but bringing a user's existing ideas to life and connecting them to other data. A coding agent might generate a state-machine diagram from an application, let the person edit it visually in tldraw, and then implement the application to match the revised diagram. In this model, background work can happen without attention elsewhere, while moments requiring human feedback return to the canvas as a shared, high-bandwidth space.

He closes by describing the progression: the team taught models to see, use, and move around the canvas, and is now exploring the canvas as an interactive environment into which an agent can plug. He explicitly says he does not yet know how people will use tldraw Offline, asks attendees to try the free Windows or Mac builds, report breakage, and share anything interesting they make. The local architecture is central: these capabilities would be too dangerous in a hosted application, but become plausible when their effects remain on the user's machine.

In the final question, the MC asks whether fairies are canvas objects or extensions of a user. Ruiz says the current implementation makes them work for and arrive with each user. In a collaborative canvas, each participant brings three fairies; one test placed 15 people and 45 agents in the same document, which he says was chaotic but still legible because the spatial interface continued to coordinate them. The fairies currently belong to the user's client and stop when the laptop closes, though he imagines persistent fairies whose work could be reviewed later in a time lapse—“work done by creatures of the forest.”
