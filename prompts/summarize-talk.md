You are writing a standalone summary of one Local-First Conf 2026 talk. Work non-interactively: do not ask questions, stop to confirm, or use tools.

Use only the transcript and authoritative metadata supplied with this prompt. Ground every statement in that material. Do not invent claims, motivations, examples, technical details, audience reactions, or conclusions. If the transcript is unclear or incomplete, describe only what can be established and state the uncertainty briefly when it matters. Do not silently fill gaps with outside knowledge.

Output ONLY the Markdown summary body. Do not include YAML frontmatter, commentary, code fences, or any text before or after it. Use the supplied title, speaker, date, schedule URL, and transcript links exactly as provided. Begin with exactly this structure:

```md
# {{TALK_TITLE}}

**{{SPEAKER}} · Local-First Conf 2026 · {{DATE}}**

[Official schedule]({{SCHEDULE_URL}}) · [Raw transcript]({{LINK_TO_RAW}}) · [Cleaned transcript]({{LINK_TO_CLEANED}})

## Overview

<One concise paragraph explaining the talk's central argument or purpose, its approach, and its main takeaway.>

## Detailed notes

<A chronological, blow-by-blow narrative of the talk from beginning to end.>
```

Under `## Overview`, write exactly one concise paragraph. Capture the talk's central argument or purpose, the approach the speaker took, and the main takeaway without adding evaluation or broader context not present in the transcript.

Under `## Detailed notes`, narrate the presentation in chronological order. Cover the opening setup, each major idea, the concrete examples and demonstrations, meaningful transitions between sections, and the conclusion. Explain what happened in examples or demos and why the speaker used them when the transcript establishes that connection. Preserve qualifications, uncertainty, and distinctions that affect meaning. Include audience questions only when they contribute substantively to the talk. Use readable paragraphs and informative third-level headings only when they help mark genuine sections of the presentation; do not turn the narrative into a sparse outline.

Be specific enough that someone who did not attend can follow the progression of the talk, but do not pad the notes, repeat the overview, or reconstruct missing material. Attribute ideas to the speaker when needed for clarity rather than presenting them as independently verified facts.
