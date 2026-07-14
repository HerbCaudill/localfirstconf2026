---
source: local-first-conf-recording
title: "Plaintext-first apps in the age of agents"
date: 2026-07-12
speakers:
  - "Tristan Edwards"
source_recording: "../../recordings/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1400-plaintext-first-apps-in-the-age-of-agents"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.md"
cleaned_transcript: "../cleaned/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.md"
---

# Plaintext-first apps in the age of agents

**Tristan Edwards · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1400-plaintext-first-apps-in-the-age-of-agents) · [Raw transcript](../raw/2026-07-12%20-%20Tristan%20Edwards%20-%20Plaintext-first%20apps%20in%20the%20age%20of%20agents.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Tristan%20Edwards%20-%20Plaintext-first%20apps%20in%20the%20age%20of%20agents.md)

## Overview

Tristan Edwards argues that the rise of local coding agents has turned plaintext-first software from a niche preference into a practical foundation for powerful AI workflows. He illustrates the idea with Calvia, an open-source calendar that treats local ICS files as its source of truth while synchronizing with providers such as Google Calendar. Because general-purpose agents can read and write those files directly, the calendar gains useful AI workflows without embedding an AI assistant, supporting Edwards's broader call for an open, local-first application ecosystem that does not require users to centralize their context with Big Tech.

## Detailed notes

### From text-file enthusiasm to an agent workflow

Edwards begins with his five-year obsession with keeping data in plain-text files. A blog post by Jeff Wang described a productivity system built around one text file used for 14 years. As a Vim user, Edwards found the idea irresistible, replaced his feature-rich to-do app with a text file, and appreciated its simplicity.

That change led him to question why applications were bloated, why simple edits required internet access, and why so much personal data went to companies such as Google. He adopted Markdown documents, plaintext accounting tools, Org mode, and Emacs, connecting those practices to Unix philosophy, local-first software, and data ownership. His attempts to persuade friends largely failed once they saw the austere interfaces. For a while, he assumed plaintext tools would remain a niche while mainstream users put more data into cloud-provider silos.

AI agents changed that assessment. Edwards says Claude Code and other coding agents showed that an effective way to use AI is to install an agent locally and let it read plaintext files, rather than relying on a dedicated cloud AI application or connecting many MCP services. Friends without programming backgrounds began learning terminals and Markdown and adopting tools such as Obsidian.

Obsidian is significant to Edwards precisely because it does not present itself as an AI product. Its website emphasizes ownership of plaintext files rather than an AI button, sparkle icon, or persistent chat sidebar. He contrasts this with Microsoft's repeated promotion of Copilot. The apparent paradox is that tools with no built-in AI features can be among the most useful tools for AI, because users can bring their preferred agents and use Git to inspect or revert their changes.

### A choice between open files and closed ecosystems

Edwards warns that this moment of control may not last. Large technology companies have an incentive to make their own closed ecosystems the most convenient place to use AI: users put all their data with one provider, and that provider's model gains complete context. He finds that possible future disturbing.

His response is a call to build a plaintext-first ecosystem quickly. He does not mean more Markdown note applications alone, but every everyday application that contains context useful to an agent. Calendars are particularly important because they encode whom a person meets, what they work on, and where their time goes.

### Calvia and ICS as the source of truth

Edwards introduces Calvia, an open-source plaintext-first calendar. Although calendars have more complex data structures than notes, they already share a widely supported text format: ICS, commonly carried as an email attachment when someone receives an invitation. Conventional calendars treat ICS mainly as an interchange format. Calvia instead treats it as the source of truth.

When connected to an existing calendar, Calvia converts its data into human-readable ICS files in a local directory. Edwards compares the model to a Git repository. Google Calendar becomes one remote: invitations can be pulled into the local directory and reviewed as diffs. Locally created events can be pushed to a selected remote, whether Google or a self-hosted calendar. The authoritative local representation therefore is not locked to one provider.

Edwards acknowledges that this repository-like workflow may still sound too technical to persuade his friends. Its agent workflows, however, offer a more immediate benefit.

### Calendar workflows without an AI calendar

When renewing his visa, Edwards needed to calculate how many days he had spent abroad during the previous three years. Rather than manually searching his history, he asked an agent. It read the Calvia directory, filtered the ICS files for travel-related events or foreign locations, and reported 87 days.

In a second example, Edwards wanted to add the published Local-First Conf schedule to his calendar, but the conference website offered no calendar download. He gave an agent the site URL and asked it to add the talks. The agent parsed the HTML and created ICS files. Because the graphical calendar application watched the same local directory, the new events appeared immediately as the files were written.

Edwards emphasizes that Calvia contains no special AI button and integrates no LLM API. Its agent capabilities arise from making standard, readable files the application's primary data. A general-purpose agent can act on those files using its existing tools, so plaintext-first design provides AI functionality without coupling the application to one model or AI vendor.

### Plain text as a GUI substrate

Edwards presents plaintext-first design as a bridge from local-first to agent-first software. He asks the audience to build applications on this basis so that the emerging agent ecosystem remains open rather than being captured by large platforms.

In the closing question, the MC asks whether a naturally spatial tool such as a calendar can work with plain text only as its substrate, with richer interfaces layered above it, or whether Edwards envisions terminal interfaces indefinitely. Edwards clarifies that the polished calendar shown in his demo is powered by Calvia. ICS is the simple underlying representation, but a graphical application can still provide the familiar capabilities of Notion Calendar or Google Calendar. He describes the project as proof that plaintext-first storage need not limit the quality or completeness of the user interface.
