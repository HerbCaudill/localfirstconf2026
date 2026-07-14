import { describe, expect, test } from "vitest";

import { renderRawTranscript } from "../render-raw-transcript.js";

describe("renderRawTranscript", () => {
  test("renders deterministic metadata and timestamped transcript segments", () => {
    const result = renderRawTranscript({
      date: "2026-07-12",
      model: "whisper-large-v3-turbo-q5_0",
      recordingFilename: "2026-07-12 - Steve Ruiz - Agents on the canvas.m4a",
      scheduleUrl: "https://example.com/schedule/agents-on-the-canvas",
      segments: [
        { fromMs: 0, text: " Welcome everyone. " },
        { fromMs: 65_240, text: "This is the next point." },
      ],
      speakers: ["Steve Ruiz"],
      title: "Agents on the canvas",
    });

    expect(result).toBe(`---
source: local-first-conf-recording
title: "Agents on the canvas"
date: 2026-07-12
speakers:
  - "Steve Ruiz"
source_recording: "../../recordings/2026-07-12 - Steve Ruiz - Agents on the canvas.m4a"
schedule_url: "https://example.com/schedule/agents-on-the-canvas"
artifact_type: raw_transcript
transcription_model: whisper-large-v3-turbo-q5_0
---

# Agents on the canvas

**00:00:00**

Welcome everyone.

**00:01:05**

This is the next point.
`);
  });
});
