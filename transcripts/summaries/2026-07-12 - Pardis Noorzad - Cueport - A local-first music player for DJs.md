---
source: local-first-conf-recording
title: "Cueport: A local-first music player for DJs"
date: 2026-07-12
speakers:
  - "Pardis Noorzad"
source_recording: "../../recordings/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1630-cueport-a-local-first-music-player-for-djs"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.md"
cleaned_transcript: "../cleaned/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.md"
---

# Cueport: A local-first music player for DJs

**Pardis Noorzad · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1630-cueport-a-local-first-music-player-for-djs) · [Raw transcript](../raw/2026-07-12%20-%20Pardis%20Noorzad%20-%20Cueport%20-%20A%20local-first%20music%20player%20for%20DJs.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Pardis%20Noorzad%20-%20Cueport%20-%20A%20local-first%20music%20player%20for%20DJs.md)

## Overview

Pardis Noorzad presents Cueport, a Mac and iPhone companion system that extends a Serato DJ library beyond the single laptop where it normally lives. The desktop application reads and safely writes Serato's local files, while LAN pairing copies music and metadata to an iPhone for fully offline listening, playlist work, cue points, and other preparation. By keeping the desktop canonical today and planning relay-based pairing and multi-writer synchronization later, Cueport aims to add multi-device and collaborative capabilities while preserving Serato's existing speed, offline operation, longevity, privacy, and user control.

## Detailed notes

### Why a DJ library is already mostly local-first

The MC introduces DJing at a remote music festival as a strong local-first use case: music and metadata must be immediately available without spinners, intermediaries, or internet access. Noorzad, who combines experience as a data leader with work as a DJ, introduces Cueport as a local-first music player and companion for Serato.

A DJ's library ordinarily lives on one laptop used both to prepare sets and perform live. Preparation requires spending time with tracks, building playlists, adding cue points, tags, comments, and other metadata. Noorzad wanted to do that while traveling, walking, or otherwise away from the laptop, including when there was no network.

Serato already satisfies five of Ink & Switch's seven local-first ideals, in her account. Playback and preparation are fast because they run locally. The network is optional. The binary format has been decoded and is used by open-source and proprietary tools, which helps the data outlive a particular application. The DJ owns and controls music and metadata stored on the device. What Serato lacks is multi-device access and a way for multiple DJs to collaborate on a crate or library.

### Desktop and mobile workflow

Cueport consists of a desktop application that reads Serato files and an iPhone application paired with it over a local network. Pairing copies music and metadata onto the phone. Both applications can create edits, but the current design treats the desktop as authoritative: mobile changes enter a desktop review queue before the DJ publishes them to Serato.

In the desktop demo, Noorzad loads her Serato crates and shows familiar preparation tasks. She listens through tracks, places cue points at the beginning, where vocals enter, and at suitable mix-out locations, adds notes, and reviews pending changes. In one example, a song accelerates toward the end, so she moves the intended mix-out point into the middle. The desktop app lets her publish the queued changes to Serato or discard them.

She then displays a QR code for phone pairing. On the iPhone, playlists, audio, and metadata are cached locally without audio-quality optimization. She demonstrates adding a song to a crate. The mobile app is not merely a remote control: in the later Q&A, she explains that she used it independently and offline while traveling to listen to songs and assemble playlists.

### Reading and safely rewriting Serato data

Serato stores information both in its own folder and in ID3 tags inside MP3 files. The embedded data includes beat markers, cue points, and spectrogram information; other track data supplies values such as BPM and key. Cueport reuses this analysis for its waveform and preparation interface rather than recomputing it.

Noorzad credits documentation of the Serato binary format and the Triceratops Rust library used to read it. When Cueport writes back, it recreates the whole MP3 rather than changing selected bytes, reducing the risk of an inconsistent file. It also saves the previous file before publishing so a particular change can be restored. Edits made on mobile travel first to the desktop queue and then, after review, into Serato.

### LAN-first synchronization and its limits

Cueport uses the local network because initial pairing naturally happens near the DJ laptop after music has been downloaded and analyzed. Noorzad reports that metadata for 250 tracks transfers in a median of about 80 milliseconds on private Wi-Fi. Roughly 250 songs, or three gigabytes, transfer in under two minutes.

This approach fails on many public Wi-Fi networks because client isolation prevents devices from reaching each other. Noorzad encountered the limitation in coffee shops, hotels, and similar venues. The roadmap keeps LAN pairing as the default but adds a relay fallback, with Tailscale and Iroh mentioned as technologies to investigate.

### From one writer to multiple DJs

The canonical desktop gives Cueport a single-writer model, avoiding concurrent edits and deletion conflicts for now. That model becomes inadequate if the phone should write directly to Serato, two DJs want to prepare a back-to-back set, or a duo shares a library without designating one member to approve every change.

Noorzad identifies two next steps: a server-powered relay to handle networks where direct LAN pairing is unavailable, and synchronization that allows both devices to push changes into Serato. The latter would also enable multi-DJ setups and complete the collaborative part of the local-first goal.

She closes by announcing that Cueport version 1.01 is available at usecueport.com as a Mac application with an iPhone companion, and asks DJs and people interested in the architecture for feedback.

### Questions about independence and DJ hardware

The MC first asks whether the phone is only a desktop controller. Noorzad says the synchronized phone contains the required music and data and works independently and fully offline; she used it during her trip to listen and prepare playlists.

Asked whether the phone could also replace the laptop when connected to physical DJ control surfaces, Noorzad explains that Serato itself requires a laptop and serves DJs who want the additional control it provides during performances, including settings such as weddings where requests arise. Other software and newer controllers can operate without a laptop, but the final phrase about how Cueport might relate to those systems is unclear in the supplied transcript.
