# Conference transcripts and summaries

## Goal

Produce raw transcripts, cleaned transcripts, and useful summaries for every recorded talk from Local-First Conf 2026 days 1 and 2.

## Approach

Follow the core processing pattern from the `zoom-transcripts` repo. Match recordings to the official schedule using recording times, durations, embedded Voice Memos metadata, speaker introductions, and talk order. Before transcription, create one canonical recording per talk: rename one-to-one recordings, split recordings that contain multiple talks, and join fragments that belong to one talk. Move superseded source files into `recordings/originals/` so nothing is lost.

Use the same filename stem for the canonical recording and all derived artifacts:

`YYYY-MM-DD - Speaker - Talk title`

Canonical audio will live in `recordings/`; its raw transcript, cleaned transcript, and summary will use that stem in their respective folders.

Run the work as a coordinated, resumable workflow rather than holding every talk in one long conversation. The coordinating thread owns schedule matching, recording boundaries, canonical filenames, fixed prompts, and final validation. Once raw transcripts exist, bounded subagents can process separate talks concurrently using the same cleaning and summary prompts. Each subagent receives one raw transcript, its authoritative metadata, exact output paths, and no responsibility outside that talk. The coordinator reviews every result for completeness and consistency.

Store three artifacts for each talk under `transcripts/`:

- `raw/`: the direct speech-model output with timestamps and speaker roles where they can be identified. Preserve recognition errors and verbal noise so this remains an auditable source artifact.
- `cleaned/`: a conservative readability edit that removes fillers, repeated starts, and transcription noise; merges fragments into paragraphs; and corrects obvious errors without summarizing or reinterpreting the speaker.
- `summaries/`: a standalone account of the talk with a paragraph-length overview followed by detailed chronological notes that narrate the presentation from beginning to end.

Verify speaker names, titles, product names, and technical terms against the official schedule, talk descriptions, slides or project pages when available, and the audio itself. Mark unclear audio explicitly rather than guessing.

The same filename will be used in all three folders. Each file will include deterministic frontmatter with the talk title, speaker, date, official schedule link, source recording, artifact type, and generation details. Cleaned transcripts will link back to their raw source; summaries will link to the cleaned and raw transcripts.

Each summary will use this structure:

```md
# Talk title

Speaker and conference metadata

## Overview

One paragraph explaining the central argument, approach, and main takeaway.

## Detailed notes

A chronological, blow-by-blow narrative of what the presenter said, including major examples, demonstrations, transitions, and conclusions.
```

## Tasks

1. Build a recording-to-schedule manifest for both days.
2. Extract embedded timing and transcript metadata and verify talk boundaries.
3. Create `recordings/originals/` and move the current exports there with descriptive names.
4. Create one canonically named recording per talk in `recordings/`, splitting and joining audio where needed.
5. Write and test fixed prompts for transcript cleaning and talk summarization.
6. Generate one timestamped raw transcript per canonical recording in `transcripts/raw/`.
7. Use bounded subagents to produce conservative cleaned transcripts in `transcripts/cleaned/` and overview-plus-narrative summaries in `transcripts/summaries/`.
8. Verify names and technical terminology against authoritative sources.
9. Perform a final completeness and spot-check pass against every canonical recording and all three artifact sets.

## Unresolved questions

None.
