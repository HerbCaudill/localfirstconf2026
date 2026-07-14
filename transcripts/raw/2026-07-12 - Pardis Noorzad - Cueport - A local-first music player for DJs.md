---
source: local-first-conf-recording
title: "Cueport: A local-first music player for DJs"
date: 2026-07-12
speakers:
  - "Pardis Noorzad"
source_recording: "../../recordings/2026-07-12 - Pardis Noorzad - Cueport - A local-first music player for DJs.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1630-cueport-a-local-first-music-player-for-djs"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Cueport: A local-first music player for DJs

**00:00:00**

You know how when you're in the deep desert at an underground music festival DJing, as one does, that's a place where, well, local-first can really apply to that use case.

**00:00:10**

You need your data, which in this case is music, metadata, everything you need with millisecond-level response times.

**00:00:18**

No spinners, no waiting, no intermediary. So that's why I think this next talk will be a lot of fun.

**00:00:26**

Pardis has been a data leader at companies like Twitter, but she's also a DJ in her spare time, and she's brought those interests together.

**00:00:35**

Pardis?

**00:00:56**

Pardis?

**00:00:57**

Pardis?

**00:00:58**

Pardis?

**00:00:59**

Pardis?

**00:01:00**

Pardis?

**00:01:01**

move up to like eight-year-old jokes although then maybe it starts to get a little uh and so

**00:01:06**

it doesn't really start to get into a toilet humor

**00:01:20**

okay here we go

**00:01:24**

thank you adam um hi i'm party um aka dj party um it's so great to be here um today i want to talk

**00:01:35**

about two court a local first music player for dj um you might be wondering what's so special about

**00:01:44**

a music player for djs and um why is it cool first um well um a dj's entire library uh lives on one

**00:01:57**

laptop and that's the deep laptop and they use that to prep uh sex but also to actually um play live

**00:02:08**

and uh however sometimes you want to um you know once you download your music you want to be able to

**00:02:16**

get to know it and uh you know not have to fit at your laptop for hours and hours

**00:02:23**

maybe you're on a plane along the plane ride or on a train or walking and sometimes you might not have

**00:02:33**

access to internet um you want to still be able to listen to your music make playlists um add points

**00:02:41**

um add legal tags comments and so on um and so what that's why uh you know as a serato customer i thought

**00:02:52**

um you know what if uh we built a serato companion

**00:03:00**

the great uh news is that uh serato is local only and so it already meets five of the seven local first

**00:03:10**

ideals as outlined uh by using twitch so you know there's uh no standards because um playback and prep

**00:03:19**

run locally with no cloud um the network is optional because uh serato works offline

**00:03:29**

um as for long now um the serato binary has been decoded and it's being used in a lot of apps and tools both

**00:03:38**

uh open source and proprietary so um you know the metadata will survive uh even if the app is no longer there

**00:03:49**

and then for ownership and control um the data music everything uh is on both of this um so it's secure

**00:04:01**

and um so we have two remaining uh kind of ideals uh that are not currently captured um one is that uh

**00:04:12**

you're trapped to one device as i mentioned initially and also you know djs can't really uh share a crate

**00:04:20**

and work on uh a crate or a library together and so um that's where a keyboard comes in

**00:04:30**

and uh so we built a um mobile app and also a desktop app um and i'll show you the demo uh right after this but

**00:04:42**

essentially the uh desktop app will um read the serato file and um that you um and then the mobile app pairs to it uh by online

**00:04:55**

uh and um so it will uh yeah a copy of all the audio and metadata uh impact it um and so uh both um

**00:05:07**

uh can um add edits and uh with the only difference that the mobile edits need to go through desktop first

**00:05:18**

to get into one queue by the dj and then be written to serato

**00:05:27**

um let's uh run this uh okay this is the desktop app you can see my crates from serato have been loaded

**00:05:36**

that's where i can kind of go in and tell it where the serato files are i can sort a lot of serato

**00:05:46**

functionality is already on this that may be useful for set prep um oh it looks like the music isn't

**00:05:55**

playing um but anyways uh here we're um you know setting up two points you want one two point right at the

**00:06:04**

beginning of the beginning of the track and then one where the vocals um usually start um and can be

**00:06:13**

probably be going right uh towards the end where um you know there's maybe no no more vocals and it's uh

**00:06:21**

pretty constant and it's a good place to mix out um

**00:06:27**

and uh you can add notes this is good to go um and here is where you can look at the edit queue uh and um

**00:06:40**

you know have um have a list of those

**00:06:45**

uh and now looking for another song um adding two points so you can see how the kind of desktop uh app helps you in

**00:06:57**

um in your um set prep uh pretty simple interface um okay um

**00:07:06**

okay um give it a little more

**00:07:10**

oh

**00:07:18**

let's try that again um

**00:07:32**

um

**00:07:32**

you have to listen to some song

**00:07:40**

um and then you see there there's also a restore and pair buttons um

**00:07:46**

that i'll talk about uh later um

**00:07:56**

um

**00:07:56**

yeah so we're trying to find out where we'll be starting

**00:07:58**

um

**00:08:00**

yeah so we're trying to find out where we'll be starting

**00:08:12**

now i'm trying to find out here

**00:08:16**

where it's kind of fun uh to find them next out

**00:08:21**

great

**00:08:23**

and you can tell that um these are the changes that are um kind of not in serotity yet

**00:08:37**

um

**00:08:47**

so

**00:08:47**

okay

**00:08:56**

so

**00:08:56**

okay

**00:08:56**

okay

**00:08:56**

i just want you to be the care

**00:08:56**

um

**00:09:06**

okay

**00:09:06**

okay

**00:09:17**

so here we realize that the song really accelerates towards the end

**00:09:23**

which is not the end which is not good so we need um to make that the middle somewhere

**00:09:41**

okay

**00:09:43**

okay so um

**00:09:45**

you can either publish the serato or um also discard the changes

**00:09:51**

okay

**00:10:00**

okay

**00:10:00**

okay so here is the qr code

**00:10:04**

for sharing um with your phone and okay so now we're ready to go to the um iphone app

**00:10:20**

and you can see um the uh kind of plates uh are cached on the phone and i also found the quality is very high because um sounds are cached locally

**00:10:28**

um and we don't do any optimizations uh either

**00:10:40**

uh here i'm adding a new song to this rate

**00:10:46**

so um yeah i i'm just gonna go to the next slide but um

**00:10:55**

let's get to the implementation details

**00:11:13**

the more fun part um so um you know um

**00:11:22**

the way serato kind of stores um data is through one its own folder

**00:11:28**

but also inside the mv3 uh in the id3 tag

**00:11:33**

uh so you have uh heat markers cues in uh the spectrogram

**00:11:39**

on uh the mv3 itself and then you have uh track list and uh ppm

**00:11:46**

the the stuff uh takes from the track itself uh over there

**00:11:51**

and then um we actually use the spectrogram as well for the

**00:11:56**

wake point display um so we're not um and and we're using ppm and see we're not

**00:12:02**

doing that analysis um shout out to uh again beyond

**00:12:08**

workplace uh for serato tags which is um a documentation of the serato binary

**00:12:16**

and uh triceratops which is a uh russ library for uh reading serato binary

**00:12:23**

which we actually used here um also very jealous of the name

**00:12:32**

now that we know how uh through serato uh the important thing on writing back to serato is that

**00:12:39**

uh we recreate the entire mv3 not the specific bytes that we changed

**00:12:45**

um so there's less error um and also um you know uh we have

**00:12:53**

um um we saved files before um i published so that uh you can only restore um uh that particular change at any

**00:13:06**

time and on the mobile side uh the way that edits right back to serato is just one more step which is the step to get um

**00:13:17**

um care back mobile to desktop uh right right goes back to the tube on deck on the desktop app and then right ahead to serato

**00:13:29**

okay on the transport side i think uh you know i mentioned that we're using land first and uh the reason is uh you know it makes sense uh when you download the music you've analyzed the files in serato

**00:13:45**

uh you're in that same room um landing fast and so uh that's what we used uh for uh for the parent um

**00:13:57**

on both and so um and it's quite fast so uh for 250 tracks uh metadata takes uh around 80 milliseconds and uh it's the median

**00:14:12**

time run uh uh from uh for private wi-fi um and then for around 250 songs that's around three uh gigabytes

**00:14:29**

and that's less than two minutes uh so pretty fast uh to get that all into the phone

**00:14:37**

um so as we said today our decision was uh land and um there is one uh how we at um

**00:14:48**

it only works for private wi-fi public

**00:14:52**

wi-fi uh client isolation as we found out so coffee shops hotels they say new um all sorts of uh other

**00:15:03**

places uh you can't really use this type of pairing and so need to look into uh cloud relay solutions um like

**00:15:12**

tail scale and our and um our plan is to have land be um kind of default uh and then have that as a follow-up

**00:15:28**

in terms of crdp um you know we talked about having the desktop as canonical so um you know we will have

**00:15:35**

single writer that way so right now we don't have to deal with some current

**00:15:40**

um edits and purges and anything like that um but uh in cases where you do want your um phone to also

**00:15:49**

be able to be able to write back for dorado um or um you have two djs kind of uh wanting to do back to

**00:15:58**

back uh work on a crate or um you know you have a dj duo they have a shared library that they want to

**00:16:05**

work together you don't want to make one be the uh approver of edits and so um you kind of want a

**00:16:13**

um so you know what i think is to deal with the public wi-fi issue and um so that would be a sensor power

**00:16:35**

relay solution um but then uh working on uh having both devices be able to push back or push into

**00:16:45**

survivor and that also then allows us to do multi-day setups um

**00:16:55**

um and so here we can see how we are able to

**00:17:00**

make survival a little reverse uh by solving those two problems of not being trapped on my device

**00:17:07**

um making able to um cache all the signs and metadata on your phone

**00:17:13**

but also uh you know on the road map is a multi-day solution

**00:17:22**

well thank you for being here qport is that useqport.com

**00:17:29**

and version 1.01 is available uh shipped as the mac app and a companion iphone app

**00:17:37**

um if there are any djs in the room i you know click class ones maybe um yeah i'd love to

**00:17:45**

talk and uh also if you have any feedback on the uh you know architecture decisions and designs as well

**00:17:53**

i'd love to hear from you um thank you

**00:18:07**

love it one question we have right away is uh whether the phone app is kind of uh you know you

**00:18:15**

describe it as a companion app just sort of chain to

**00:18:20**

is it sort of in order to play that music that is to say can i sort of sync the devices take my phone

**00:18:25**

with me and i've got all the data on the phone and i could play straight from there or is it more like a

**00:18:30**

controller for the business no exactly so i use it on my trip over uh listening to songs put together

**00:18:37**

to do playlists and all that so it works independently um yeah completely um offline excellent one of the things

**00:18:47**

that i think i think is really cool about the whole music industry and and i think surrounded

**00:18:51**

in particular has those control surfaces really cool looking job wheels and dials and things like

**00:18:57**

that how does uh how does that mean that's compatible that's the whole idea that do i have a world

**00:19:02**

where i've kind of got my phone i can leave my laptop at home and i can somehow connect it to a

**00:19:06**

control surface or do you kind of need the desktop computer or how does it come through so so the

**00:19:12**

interesting part about serato is yes it actually requires a laptop and that has upsides for a lot of

**00:19:19**

djs who are in places with let's say where there's um you know people coming up to the booth and saying

**00:19:26**

you know pk requires them like weddings and places like that um and so deep serato kind of stayed in

**00:19:33**

that niche of like uh people who actually want their laptops to be um with them uh during the game

**00:19:42**

process because they have a bit more control um but um absolutely is uh you know uh with other some

**00:19:51**

of the other tools you kind of uh don't actually need a laptop there are also new controllers where you

**00:19:58**

you don't need a laptop well and uh in the opinion of software it's um just uh apparently hard for

**00:20:07**

wonderful round of applause
