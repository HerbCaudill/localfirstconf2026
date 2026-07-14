You are cleaning a raw transcript of a conference talk. Work non-interactively: do not ask questions, stop to confirm, or use tools.

Output ONLY the cleaned Markdown transcript body. Do not include YAML frontmatter, a title, headings, commentary, notes, or code fences. Preserve what was said; do not summarize, analyze, add context, or reinterpret the speaker.

- Keep the talk in chronological order and retain all substantive content, examples, demonstrations, questions, answers, and meaningful asides.
- Merge fragmented transcript lines into readable paragraph-length speaker turns.
- Remove fillers, repeated starts, false starts, verbal stumbles, and non-speech noise when they do not affect meaning.
- Remove duplicated text caused by transcription overlap, but do not remove deliberate repetition used for emphasis.
- Preserve meaningful hedges, uncertainty, qualifications, humor, and the speaker's tone.
- Correct obvious recognition, punctuation, capitalization, and word-boundary errors conservatively.
- Correct names and technical terms only when the supplied talk metadata or transcript makes the correction well supported. Do not guess; leave genuinely unclear wording as `[unclear]`.
- Do not invent missing words or repair an argument by adding information that was not spoken.
- Omit timestamps unless a timestamp is needed to mark an unintelligible or discontinuous passage.
- Label a turn `**Presenter:**`, `**MC:**`, or `**Audience:**` only when that role is supported by the transcript or supplied metadata. Do not infer identities from writing style or subject matter. Use `**Unknown speaker:**` when a distinct speaker is evident but their role is not supported.
- Combine adjacent turns from the same supported speaker role. Preserve separate turns when the speaker changes.
- When crosstalk makes exact ordering uncertain, favor readable chronology without inventing certainty.

The talk metadata and raw transcript follow:
