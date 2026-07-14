import type { TranscriptSegment } from "./types.js";

/** Render a raw timestamped talk transcript as Markdown. */
export function renderRawTranscript(
  /** Talk metadata and speech-model segments. */
  input: RenderRawTranscriptInput,
): string {
  const speakers = input.speakers.map((speaker) => `  - ${JSON.stringify(speaker)}`).join("\n");
  const transcript = input.segments
    .map((segment) => {
      const totalSeconds = Math.floor(segment.fromMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const timestamp = [hours, minutes, seconds]
        .map((part) => part.toString().padStart(2, "0"))
        .join(":");
      return `**${timestamp}**\n\n${segment.text.trim()}`;
    })
    .join("\n\n");

  return `---
source: local-first-conf-recording
title: ${JSON.stringify(input.title)}
date: ${input.date}
speakers:
${speakers}
source_recording: ${JSON.stringify(`../../recordings/${input.recordingFilename}`)}
schedule_url: ${JSON.stringify(input.scheduleUrl)}
artifact_type: raw_transcript
transcription_model: ${input.model}
---

# ${input.title}

${transcript}
`;
}

/** Inputs used to render one raw talk transcript. */
type RenderRawTranscriptInput = {
  /** Conference date in ISO date format. */
  date: string;
  /** Speech model identifier. */
  model: string;
  /** Canonical source recording filename. */
  recordingFilename: string;
  /** Official conference schedule URL. */
  scheduleUrl: string;
  /** Timestamped speech-model segments. */
  segments: TranscriptSegment[];
  /** Scheduled talk speakers. */
  speakers: string[];
  /** Official talk title. */
  title: string;
};
