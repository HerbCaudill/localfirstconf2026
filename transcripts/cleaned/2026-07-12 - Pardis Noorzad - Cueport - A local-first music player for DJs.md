---
source: local-first-conf-recording
title: "Cueport: A local-first music player for DJs"
date: 2026-07-12
speakers:
  - "Pardis Noorzad"
source_recording: "../../recordings/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1630-cueport-a-local-first-music-player-for-djs"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.md"
---

**MC:** You know how, when you're in the deep desert at an underground music festival DJing—as one does—that's a place where local-first can really apply. You need your data, which in this case is music, metadata, and everything else, with millisecond-level response times: no spinners, no waiting, no intermediary. That's why I think this next talk will be a lot of fun.

Pardis has been a data leader at companies like Twitter, but she's also a DJ in her spare time, and she's brought those interests together. Pardis?

**Presenter:** Thank you, Adam. Hi, I'm Pardis, also known as DJ Pardi. It's so great to be here. Today I want to talk about Cueport, a local-first music player for DJs.

You might be wondering what's special about a music player for DJs and why it's local-first. A DJ's entire library lives on one laptop: the DJ laptop. They use it to prepare sets, but also to play live. Once you download your music, however, you want to get to know it without having to sit at your laptop for hours and hours. Maybe you're on a long plane ride, on a train, or walking, and you might not have internet access. You still want to listen to your music, make playlists, add cue points, and add tags, comments, and so on. As a Serato customer, I thought: what if we built a Serato companion?

The great news is that Serato is local-only, so it already meets five of the seven local-first ideals outlined by Ink & Switch. There are no spinners, because playback and preparation run locally with no cloud. The network is optional, because Serato works offline. As for longevity, the Serato binary format has been decoded and is used in many open-source and proprietary apps and tools, so the metadata will survive even if the app is no longer there. For ownership and control, the data, music, and everything else are on the DJ's device, so it's secure.

Two ideals remain. You're trapped on one device, as I mentioned, and DJs can't share a crate and work on a crate or library together. That's where Cueport comes in.

We built a mobile app and a desktop app. I'll show you the demo, but essentially the desktop app reads the Serato files, and the mobile app pairs with it over the LAN. It copies all the audio and metadata and packs it onto the phone. Both apps can add edits. The only difference is that mobile edits need to go through the desktop first, enter a queue for review by the DJ, and then be written to Serato.

Let's run this. This is the desktop app. You can see that my crates from Serato have been loaded. I can go in and tell it where the Serato files are. A lot of Serato functionality that may be useful for set preparation is already here.

It looks like the music isn't playing, but here we're setting up cue points. You want one cue point at the beginning of the track and another where the vocals usually start. There can probably be one toward the end, where there may be no more vocals and it's pretty constant, making it a good place to mix out. You can add notes, such as “This is good to go.” Here you can look at the edit queue and have a list of those changes.

Now I'm looking for another song and adding cue points. You can see how the desktop app helps with set preparation. It's a pretty simple interface. [She listens through the track to locate transition points.] Here we realize that the song really accelerates toward the end, which is not good, so we need to make the mix-out point somewhere in the middle. You can either publish the changes to Serato or discard them.

Here is the QR code for sharing with your phone. Now we're ready to go to the iPhone app. You can see the playlists are cached on the phone, and the audio quality is very high because the songs are cached locally and we don't do any optimization. Here I'm adding a new song to this crate.

Let's get to the implementation details—the more fun part. Serato stores data in its own folder, but also inside the MP3 in ID3 tags. The MP3 itself has beat markers, cues, and the spectrogram. You also have the track list, BPM, and key taken from the track itself. We use the spectrogram for the waveform display, and we use the existing BPM and key rather than doing that analysis ourselves.

Shout-out to the work on Serato Tags, which documents the Serato binary format, and to Triceratops, a Rust library for reading Serato binary data, which we used here. I'm also very jealous of the name.

Now that we know how to read Serato, the important thing when writing back is that we recreate the entire MP3, not only the specific bytes we changed, so there's less risk of error. We also save files before publishing, so you can restore that particular change at any time.

On the mobile side, writing edits back to Serato adds one more step: carrying them from mobile to desktop. They go into the edit queue on the desktop app, and then are written ahead to Serato.

On the transport side, I mentioned that we're LAN-first. When you've downloaded the music and analyzed the files in Serato, you're in the same room and the LAN is fast, so that's what we use for pairing. It's quite fast. For 250 tracks, metadata takes around 80 milliseconds—the median time on private Wi-Fi. Around 250 songs is about three gigabytes, and that takes less than two minutes to transfer to the phone.

Our decision today was to use the LAN, but there is one caveat: it only works on private Wi-Fi. Public Wi-Fi uses client isolation. As we found in coffee shops, hotels, and all sorts of other places, you can't use this type of pairing. We need to look at cloud relay solutions such as Tailscale and Iroh. Our plan is for LAN to remain the default, with a relay as a fallback.

In terms of CRDTs, we talked about having the desktop be canonical. That gives us a single writer, so right now we don't have to deal with concurrent edits, purges, or anything like that. But you may want your phone to write directly back to Serato, or two DJs may want to work back-to-back on a crate, or a DJ duo may have a shared library they want to work on together. You don't want to make one person the approver of edits, so you need a different model.

Our next step is to deal with the public-Wi-Fi issue through a server-powered relay solution. After that, we'll work on having both devices able to push changes into Serato, which will also allow multi-DJ setups.

This is how we're able to make Serato a little more local-first by solving the problem of being trapped on one device: caching all the songs and metadata on your phone. A multi-DJ solution is also on the roadmap.

Thank you for being here. Cueport is at usecueport.com, and version 1.01 has shipped as a Mac app and a companion iPhone app. If there are any DJs in the room, I'd love to talk. If you have feedback on the architecture decisions and designs, I'd love to hear from you. Thank you.

**MC:** Love it. One question we have right away is whether the phone app is just a companion app chained to the desktop. Can I sync the devices, take my phone with me, have all the data on the phone, and play straight from there? Or is it more like a controller for the desktop?

**Presenter:** No, exactly—I used it on my trip over, listening to songs, putting together playlists, and all of that. It works independently and completely offline.

**MC:** Excellent. One of the things I think is really cool about the music industry, and Serato in particular, is those control surfaces: the cool-looking jog wheels, dials, and things like that. How does that compatibility work? Is there a world where I've got my phone, leave my laptop at home, and somehow connect it to a control surface? Or do you need the desktop computer?

**Presenter:** The interesting part about Serato is that it actually requires a laptop. That has upsides for many DJs in places where people come up to the booth and make requests—weddings and places like that. Serato has stayed in the niche of people who want their laptops with them during the DJing process because they have a bit more control. With some other tools, you don't actually need a laptop, and there are new controllers where you don't need one. But in terms of software, it's apparently hard for [unclear].

**MC:** Wonderful. A round of applause.
