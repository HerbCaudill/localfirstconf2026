/** One canonical talk and recording. */
export type TalkMetadata = {
  /** Conference date in ISO date format. */
  date: string;
  /** Canonical recording filename. */
  filename: string;
  /** Official conference schedule URL. */
  scheduleUrl: string;
  /** Scheduled speakers. */
  speakers: string[];
  /** Official talk title. */
  title: string;
};

/** One timestamped speech-model segment. */
export type TranscriptSegment = {
  /** Segment start offset in milliseconds. */
  fromMs: number;
  /** Recognized segment text. */
  text: string;
};
