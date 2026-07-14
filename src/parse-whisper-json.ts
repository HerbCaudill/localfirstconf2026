import type { TranscriptSegment } from "./types.js";

/** Parse timestamped transcript segments from whisper.cpp JSON output. */
export function parseWhisperJson(
  /** Raw whisper.cpp JSON output. */
  content: string,
): TranscriptSegment[] {
  const parsed = JSON.parse(content) as WhisperOutput;
  if (!Array.isArray(parsed.transcription)) throw new Error("Invalid Whisper transcription");

  return parsed.transcription.map((segment, index) => {
    if (typeof segment?.offsets?.from !== "number" || typeof segment.text !== "string") {
      throw new Error(`Invalid Whisper segment at index ${index}`);
    }

    return {
      fromMs: segment.offsets.from,
      text: segment.text.trim(),
    };
  });
}

/** Minimal whisper.cpp JSON shape used by the workflow. */
type WhisperOutput = {
  /** Timestamped recognized segments. */
  transcription?: Array<{
    /** Segment offsets in milliseconds. */
    offsets?: {
      /** Segment start offset. */
      from?: number;
    };
    /** Recognized text. */
    text?: string;
  }>;
};
