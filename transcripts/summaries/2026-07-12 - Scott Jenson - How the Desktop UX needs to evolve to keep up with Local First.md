---
source: local-first-conf-recording
title: "How the Desktop UX needs to evolve to keep up with Local First"
date: 2026-07-12
speakers:
  - "Scott Jenson"
source_recording: "../../recordings/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1700-how-the-desktop-ux-needs-to-evolve-to-keep-up-with"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.md"
cleaned_transcript: "../cleaned/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.md"
---

# How the Desktop UX needs to evolve to keep up with Local First

**Scott Jenson · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1700-how-the-desktop-ux-needs-to-evolve-to-keep-up-with) · [Raw transcript](../raw/2026-07-12%20-%20Scott%20Jenson%20-%20How%20the%20Desktop%20UX%20needs%20to%20evolve%20to%20keep%20up%20with%20Local%20First.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Scott%20Jenson%20-%20How%20the%20Desktop%20UX%20needs%20to%20evolve%20to%20keep%20up%20with%20Local%20First.md)

## Overview

Scott Jenson argues that desktop user experience has barely evolved in two decades and is poorly equipped for a local-first future containing more user-controlled files. Rather than replacing familiar desktop conventions, he reframes the design problem around human working memory and presents three incremental prototype directions: spatial window management for large displays, a persistent work area connecting documents, files, and clipboard material, and privacy-conscious activity telemetry that reconstructs meaningful work over time. AI is secondary in his proposal, though local models could benefit from the same structured context created primarily for people.

## Detailed notes

### A mature platform with no clear steward

The MC introduces Jenson as a veteran UX designer whose past work includes Apple's Newton and Human Interface Guidelines and whose earlier talk about the future of desktop UX attracted substantial attention. Jenson explains that a talk he expected to remain obscure reached roughly half a million YouTube views, suggesting that the stagnation of desktop interfaces had struck a nerve.

His concern is especially relevant to local-first software. If users keep more data under their own control, they will manage more files rather than fewer, yet the desktop still relies on a roughly 40-year-old organizational model. Drawing on Alan Kay's statement that a point of view is worth 80 IQ points, Jenson sets out to find a better perspective on the problem before prescribing solutions.

He sees little leadership from the dominant platforms. Apple appeared to expect the iPad to replace the Mac, a strategy epitomized by its 2017 “What's a computer?” advertisement, but the desktop survived and has mostly gained ecosystem integration rather than a fundamental redesign. Microsoft promotes OneDrive and Edge, mishandled an idea Jenson found promising in Recall, and remains committed to the status quo. He recounts interviewing for a senior Microsoft UX role and wanting to run small, flag-gated experiments that could be integrated gradually, but the job did not materialize.

Jenson rejects two reasons for leaving the desktop alone. Mobile won consumer computing but not productivity: keyboards, precise pointers, and large displays remain unusually effective for complex work. Familiarity is also not proof of permanence; BlackBerry once represented a standard. He does not want to discard windows or imitate science-fiction interfaces, but argues that the desktop will eventually change and that the open-source community should not wait for Apple or Google to decide how.

### Find the present problem, remember the past, ask better questions

Jenson organizes his investigation around three practices attributed to Alan Kay: understand what is happening now, know the history of prior work, and get the questions right rather than prematurely fixing on answers.

AI dominates the present, despite Jenson's reluctance to let it consume the talk. Current integrations mostly avoid changing the desktop itself. Cursor-based projects inject AI through an existing pointer. Screenpipe and a similar product build memories of computer activity, but ultimately funnel those memories into chat. Screenpipe captures pixels and audio through accessibility interfaces, producing powerful context but what Jenson calls a “radioactive pile of nuclear waste” that must be contained with strong privacy safeguards. More conservative API-based approaches collect less. Operating-system vendors are beginning to expose the frontmost application's context, but Jenson expects those features to favor their own assistants.

These products sit either above or below the existing user experience and avoid touching its core. Coding agents offer a more interesting clue: by reading a file system, they shift AI from generation toward context. Jenson is personally critical of the ethical and environmental costs of foundation models and expresses more interest in locally runnable, ethically trained work such as the Swiss Apertus model. His desktop proposals remain people-first; a local AI may participate later if it benefits from the same context.

The core desktop primitives are windows, files and folders, and the clipboard, with keyboard and mouse providing input. They enable direct manipulation but are intentionally stateless. They do not remember what the user did yesterday, where a file was stored, or how one discovered a resource. Existing improvements usually stay inside one silo—another Linux window manager, Finder replacement, or clipboard manager—rather than creating working memory across all three.

Historical systems demonstrate what such memory can provide. The 1990s Lifestreams project placed documents on a timeline. Even a simple record of sequence helped users reconstruct richer memories through associations with meetings, lunch, and adjacent work. WinFS proposed files enriched by relationships, editors, provenance, and metadata, while Zeitgeist explored related activity history. Jenson says these efforts failed partly because hardware was inadequate and privacy was difficult, but argues that better hardware and a deeper understanding of privacy make their ideas worth revisiting.

He distills three questions for prototyping. How can large monitors be exploited to make windows spatially aware? Can windows, files, and the clipboard be tightly integrated around messy work in progress? How can a system capture user intent over time? Citing Donald Knuth's warning about premature optimization, he asks the audience to judge whether these questions are fruitful, not whether his initial prototypes are finished answers.

### Prototype one: a spatial periphery for windows

The first prototype simulates an ultrawide display. Current window management spreads applications across a physically uncomfortable span. Jenson centers a primary working area and adds a perspective-like background that shrinks toward the edges. Windows dragged into the periphery scale and can remain parked there.

He contrasts this persistent state with Exposé. Exposé becomes hard to search as the number of windows rises and is only a temporary mode, even though some windows remain usable at thumbnail size. Jenson's peripheral windows are still live: icons can be dragged, and music controls still work. Drawing on responsive web design, a window pushed farther away can reformat into a simpler representation, such as a play/pause button. He believes Wayland can support the required behavior today.

This creates an organic, messy alternative to requiring users to partition work into virtual desktops. Jenson would not remove virtual desktops, but wants working windows to remain spatially available around a focused center and to degrade gracefully as their number grows.

### Prototype two: persistent material around a document

The second prototype places a persistent work area beside a document. A user can drag selected text out of the document for later use. Unlike ordinary clipboard history, the material becomes an editable, durable item associated with that document. Other records, files, and browser objects such as hotel choices can be collected in the same space.

Closing and reopening the primary document restores the surrounding material, eliminating the need to rediscover it. The area cuts across clipboard management, file management, and multi-window organization; it can also display two related files together. Because the material forms a coherent local context, a local model might recognize several hotel records, group them, or create a map that can be dragged back into the document. Jenson frames the result as both a human work history and a playground for optional local AI.

### Prototype three: weak telemetry as memory scaffolding

The third prototype examines whether minimal, privacy-conscious telemetry can recover user intent. After visiting 50 e-bike websites, Jenson records URLs and titles plus weak behavioral signals: scroll depth, time on page, and whether copying occurred, but not the copied content. Simple math, without an LLM, reduces the 50 entries to seven likely important ones.

Because the signals are imperfect, the interface remains browsable and lets users inspect or correct the system's opinion. Jenson experiments with separating the original search, less useful pages, likely useful pages, and pages that received attention or copy activity. He stresses that the displayed prototype is exploratory, not a proposed final interface.

He then begins adapting the idea into a Lifestreams-like view of a morning. Visual bars encode estimated importance, and the timeline connects documents, browser discoveries, and material pasted between them. He starts describing a more aggressively compressed parallel view, but the supplied transcript cuts off mid-sentence before the prototype explanation or talk conclusion is complete.
