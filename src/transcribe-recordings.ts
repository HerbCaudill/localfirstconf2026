import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import { basename, join } from "node:path";

import { parseWhisperJson } from "./parse-whisper-json.js";
import { renderRawTranscript } from "./render-raw-transcript.js";
import type { TalkMetadata } from "./types.js";

/** Root of the conference artifact workspace. */
const root = process.cwd();

/** Canonical recording metadata. */
const metadataPath = join(root, "recordings", "metadata.json");

/** Destination for raw transcripts. */
const rawDirectory = join(root, "transcripts", "raw");

/** Local whisper.cpp model used for transcription. */
const modelPath =
  process.env.WHISPER_MODEL ??
  join(homedir(), ".cache", "whisper.cpp", "ggml-large-v3-turbo-q5_0.bin");

/** Stable model identifier stored in transcript frontmatter. */
const model = basename(modelPath)
  .replace(/^ggml-/, "")
  .replace(/\.bin$/, "");

/** Conference vocabulary supplied to the speech model. */
const glossary =
  "Local-First Conf, local-first software, CRDTs, atproto, tldraw, Automerge, npmx, JMAP, Matrix, Mosaic, DuckDB, Iroh, p2panda, GNOME, GTK, Cueport, Habitat, Tiles, Earendil";

const metadata = JSON.parse(await readFile(metadataPath, "utf8")) as TalkMetadata[];
await mkdir(rawDirectory, { recursive: true });

for (const [index, talk] of metadata.entries()) {
  const stem = talk.filename.replace(/\.m4a$/, "");
  const rawPath = join(rawDirectory, `${stem}.md`);
  if (existsSync(rawPath)) {
    console.log(`[${index + 1}/${metadata.length}] Skipping ${talk.title}`);
    continue;
  }

  console.log(`[${index + 1}/${metadata.length}] Transcribing ${talk.title}`);
  const temporaryDirectory = await mkdtemp(join(tmpdir(), "localfirstconf-"));
  const wavPath = join(temporaryDirectory, "audio.wav");
  const whisperOutput = join(temporaryDirectory, "transcript");

  try {
    execFileSync(
      "/opt/homebrew/opt/ffmpeg/bin/ffmpeg",
      [
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-i",
        join(root, "recordings", talk.filename),
        "-vn",
        "-ac",
        "1",
        "-ar",
        "16000",
        wavPath,
      ],
      { stdio: "ignore" },
    );
    execFileSync(
      "/opt/homebrew/bin/whisper-cli",
      [
        "-m",
        modelPath,
        "-f",
        wavPath,
        "-l",
        "en",
        "-oj",
        "-of",
        whisperOutput,
        "-np",
        "--prompt",
        `${talk.title}. ${talk.speakers.join(", ")}. ${glossary}.`,
      ],
      { stdio: "ignore" },
    );

    const segments = parseWhisperJson(await readFile(`${whisperOutput}.json`, "utf8"));
    const markdown = renderRawTranscript({
      date: talk.date,
      model,
      recordingFilename: talk.filename,
      scheduleUrl: talk.scheduleUrl,
      segments,
      speakers: talk.speakers,
      title: talk.title,
    });
    await writeFile(rawPath, markdown, "utf8");
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
}

console.log("Raw transcription complete.");
