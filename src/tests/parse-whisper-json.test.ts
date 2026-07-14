import { describe, expect, test } from "vitest";

import { parseWhisperJson } from "../parse-whisper-json.js";

describe("parseWhisperJson", () => {
  test("extracts timestamped text segments", () => {
    const result = parseWhisperJson(
      JSON.stringify({
        transcription: [
          { offsets: { from: 0, to: 1200 }, text: " First point. " },
          { offsets: { from: 1500, to: 2900 }, text: "Second point." },
        ],
      }),
    );

    expect(result).toEqual([
      { fromMs: 0, text: "First point." },
      { fromMs: 1500, text: "Second point." },
    ]);
  });

  test("rejects malformed speech-model output", () => {
    expect(() => parseWhisperJson('{"transcription":[{"text":"Missing offsets"}]}')).toThrow(
      "Invalid Whisper segment at index 0",
    );
  });
});
