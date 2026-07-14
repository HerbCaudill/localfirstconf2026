---
source: local-first-conf-recording
title: "Local first collaborative Spreadsheets. Are CRDTs useful?"
date: 2026-07-13
speakers:
  - "Nicolás Hatcher Andrés"
source_recording: "../../recordings/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1430-local-first-collaborative-spreadsheets-are-crdts-u"
source_transcript: "../raw/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.md"
cleaned_transcript: "../cleaned/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Local first collaborative Spreadsheets. Are CRDTs useful?

**Nicolás Hatcher Andrés · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1430-local-first-collaborative-spreadsheets-are-crdts-u) · [Raw transcript](../raw/2026-07-13%20-%20Nicol%C3%A1s%20Hatcher%20Andr%C3%A9s%20-%20Local%20first%20collaborative%20Spreadsheets%20-%20Are%20CRDTs%20useful.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Nicol%C3%A1s%20Hatcher%20Andr%C3%A9s%20-%20Local%20first%20collaborative%20Spreadsheets%20-%20Are%20CRDTs%20useful.md)

## Overview

Nicolás Hatcher Andrés argues that CRDTs are not necessary for every collaborative application but are highly useful for building a scalable, local-first spreadsheet that preserves user intent without exposing merge conflicts. Using the open-source IronCalc engine as his starting point, he separates low-latency real-time collaboration from prolonged offline work, catalogs the structural conflicts peculiar to spreadsheets, and shows how stable cell identities plus commutative conflict rules can reconcile a concurrent column deletion and cell edit without losing data. His main takeaway is that CRDT-based spreadsheets remain a difficult research problem, but existing work suggests they can produce better, lossless outcomes and are worth implementing.

## Detailed notes

### IronCalc's current capabilities and missing collaboration

Hatcher answers the title question immediately: applications do not always need CRDTs, but a scalable collaborative spreadsheet benefits greatly from them. He introduces IronCalc, which began as a side project about a year and a half earlier and has recently become full-time work for him and his partner Danny.

The small team already has a working spreadsheet engine and application at ironcalc.com. It implements around 500 Excel-style functions, defined names, conditional formatting, the Turing-complete `LAMBDA` function, dynamic arrays that spill into neighboring cells, named cell styles, partial internationalization, and other features expected of a real spreadsheet. Hatcher says the team has a clear multi-year product roadmap and acknowledges grant support from NLnet and Horizon Europe.

The major missing capability is collaboration. Hatcher initially expected to add it in a few months, despite 15 years of experience building spreadsheets with limited collaborative behavior. He had not previously confronted collaboration at the required scale and now expects the problem to be difficult, though he is encouraged by help from people with relevant synchronization experience.

His practical goal is a high-quality spreadsheet engine under a highly permissive license, which anyone can read, copy, and modify. He sees spreadsheets as foundational modern software, alongside infrastructure such as email and operating systems, and identifies them as the area where he can contribute.

### Requirements and two collaboration modes

The desired spreadsheet must be collaborative and eventually consistent, so every participant converges on the same document. It must also preserve intent: the system should respect what users meant their edits to do. Hatcher explicitly rejects presenting spreadsheet users with Git-like merge conflicts or requiring them to resolve technical synchronization details.

He separates two related scenarios. In classic real-time collaboration, as in Google Sheets or Microsoft 365, users edit the same document simultaneously with a working network connection. Very fast server synchronization can resolve much of that case because peers see one another's operations quickly. Hatcher says similar speed-based approaches handled perhaps 90% of the collaboration problems he encountered five or 10 years ago.

Offline work creates a different requirement. A user may edit on a plane, lack internet access, or deliberately disconnect, then need to merge a larger body of concurrent work later. Hatcher suggests that real-time and offline collaboration may require different tools even though they belong to the same broader system.

### Why spreadsheet conflicts are unusually structural

CRDTs map naturally to linear text, but spreadsheets are two-dimensional, interdependent structures. Editing one cell can change its dimensions or its row. Deleting a cell may break formulas elsewhere that refer to it. Borders couple neighboring cells because one cell's left border is another's right border.

Row and column insertion can shift the entire sheet. Moving a region is semantically different from deleting it and inserting a replacement. Merged ranges create further structural coupling. Dynamic-array formulas are written in one cell but occupy and determine values in many others. A synchronization model therefore needs to represent more than independent scalar cell values.

Hatcher presents results from a research paper that tested concurrent spreadsheet operations in Google Sheets and Notion. Green cases represent optimal results, yellow cases suboptimal results, and red cases actual data loss. Concurrent edits to the same cell are the familiar conflict, but combinations such as one user deleting a column while another edits a cell inside it demonstrate deeper structural problems.

He says Google Sheets reportedly uses operational transformation and notes that this was the dominant collaborative-editing approach through at least the mid-2000s, though he has not independently verified its current implementation. His interest is whether CRDTs can produce better results.

### Commutativity as a design guide

Hatcher cautions that a spreadsheet CRDT will be involved and must account for many operations and interactions. His working intuition is to make concurrent operations commute: define the combined outcome so it is independent of their arrival order. He stresses that this is not a complete definition of a CRDT, but it is a useful path toward a convergent system.

Production spreadsheet software does not yet appear to use CRDTs, in contrast with several collaborative text editors. Hatcher points to two papers and a detailed blog post as important prior work, presenting the implementation as an active research project rather than a solved engineering pattern.

His concrete example combines a column deletion with an edit to a cell in that column. A server-first implementation from 10 years earlier would accept whichever operation arrived first and produce an error for the conflicting one. That cannot support offline or local-first work.

A CRDT-oriented solution first gives columns and cells stable identities. A location cannot be known only as column D or cell D3 because those coordinates change when rows and columns move. Hatcher illustrates persistent identities with the names Chandra for a column and Surya for a cell.

If Bob deletes Chandra while another user edits Surya inside it, the chosen conflict rule is edit-wins: ignore the deletion and restore the column so the edited data survives. Because this result is the same regardless of operation order, the operations commute. In the research results Hatcher cites, CRDT rules turn all tested outcomes green, avoiding data loss.

### Planned work and invitation

Hatcher plans to spend the next four to six months building this approach, aiming for an IronCalc engine that is collaborative and local-first out of the box and can be embedded wherever developers need it.

The MC frames the talk as an account of an unsolved problem rather than a finished product and asks whether it is an invitation to collaborate. Hatcher says it is. He wants to form a community around spreadsheets and invites anyone interested in learning Rust or CRDTs to participate.

Asked about a group collaborating together on a LAN while disconnected from the remote server—a partition where peers synchronize locally and later reconnect—Hatcher gives a direct answer: the team has not explored it and has not yet written collaboration code. At this stage, it is still determining the shape of the problem. The exchange closes by emphasizing that two-dimensional spreadsheet data presents a very different challenge from rich text.
