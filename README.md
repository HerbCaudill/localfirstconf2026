# Local-First Conf 2026 transcripts

Transcripts and summaries of recorded talks from Local-First Conf 2026 in Berlin.

Each talk has three Markdown artifacts with the same filename stem:

- `transcripts/raw/` contains timestamped output from whisper.cpp.
- `transcripts/cleaned/` contains conservatively edited transcripts.
- `transcripts/summaries/` contains an overview and chronological notes.

The source recordings are kept locally in `recordings/` and are not tracked by Git. See `recordings/README.md` for details about the recording manifest, source exports, and missing sessions.

## Development

Install dependencies with pnpm:

```sh
pnpm install
```

Run the tests:

```sh
pnpm test
```

Generate any missing raw transcripts:

```sh
pnpm transcribe
```

Transcription requires FFmpeg, `whisper-cli`, and the whisper.cpp `large-v3-turbo-q5_0` model. Set `WHISPER_MODEL` to use a model outside the default `~/.cache/whisper.cpp/` location.

The processing approach and artifact conventions are documented in `plans/001-transcriptions.md`.
