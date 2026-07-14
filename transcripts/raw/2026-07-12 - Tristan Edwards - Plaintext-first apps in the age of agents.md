---
source: local-first-conf-recording
title: "Plaintext-first apps in the age of agents"
date: 2026-07-12
speakers:
  - "Tristan Edwards"
source_recording: "../../recordings/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1400-plaintext-first-apps-in-the-age-of-agents"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Plaintext-first apps in the age of agents

**00:00:00**

I've been obsessed with storing all my data in these simple plain text files on my computer.

**00:00:07**

Now this obsession started about five years ago, and I read this blog post by a guy called Jeff Wang,

**00:00:14**

and in it he talked about how his whole productivity system is just this one text file on his computer,

**00:00:22**

and he's been using this for 14 years.

**00:00:26**

I thought, this is really cool, this is really inspiring, and I was already a Vim user,

**00:00:32**

so obviously if I see an interface like this, I think this is the best thing ever, I have to try this.

**00:00:39**

So I threw away my old fancy to-do app, I replaced it with this, and I really liked it, it was so simple.

**00:00:48**

And it was almost like a gateway drug for me to think about all the other software that I'm using on my computer.

**00:00:56**

And I started wondering, why apps today are so bloated?

**00:01:01**

Why do I need an internet connection just to update an item in my to-do list somewhere?

**00:01:07**

And why do we send so much of our data to companies like Google?

**00:01:11**

So I started feeling very strongly about this, and I became increasingly radicalized,

**00:01:16**

and then I decided, you know what, I'm just going to use plain text for everything.

**00:01:22**

So I started using all kinds of things like that, obviously I wrote all my documents in Markdown,

**00:01:28**

I started using plain text accounting tools, really, really cool,

**00:01:31**

and even dabble the bin in things like Ordnode and Emacs.

**00:01:37**

Yeah.

**00:01:39**

And I loved it so much, I thought, this is obviously what computing should be, right?

**00:01:46**

Unix philosophy, local first, own your data.

**00:01:51**

And I felt so strongly about it, because I started telling all my friends,

**00:01:54**

you know, don't you know that Google is spying on you?

**00:01:58**

Don't you want to own your data?

**00:02:01**

Have you used them, by the way?

**00:02:04**

Now, unfortunately, most of these arguments didn't really work that well.

**00:02:09**

I mean, some were a little bit curious, but then they asked me what my tools looked like,

**00:02:13**

and I showed them this,

**00:02:14**

and they went that enthusiastic and they gave me a stick to all I had.

**00:02:20**

So for a long time,

**00:02:22**

I felt a bit like a lonely enthusiast.

**00:02:26**

And I thought that maybe this ancient art of storing the files in plain text,

**00:02:32**

maybe that would just be a niche interest that some people have,

**00:02:35**

and in the future, maybe it's inevitable that we're all just going to

**00:02:39**

store more and more of our files, you know, in a cloud provider side of the way.

**00:02:43**

And I just had to accept it.

**00:02:46**

But then something happened.

**00:02:49**

AI became this huge thing that everyone was talking about.

**00:02:54**

And more importantly,

**00:02:57**

Claude Code and coding agents showed everyone

**00:02:59**

that the best way to use AI

**00:03:01**

is actually not to use some cloud-based AI app

**00:03:06**

or to connect to a million MSP services.

**00:03:09**

It turns out that the best way is just

**00:03:11**

you install an agent on your computer

**00:03:13**

and you let it read all your plain text files.

**00:03:18**

And this was an amazing turn of events

**00:03:20**

because all of a sudden,

**00:03:23**

all these friends that I tried to convert for so long,

**00:03:27**

they started getting really interested in this.

**00:03:30**

even if they had no experience in programming whatsoever,

**00:03:34**

they were learning how to use the terminal,

**00:03:36**

they were writing markdown files,

**00:03:38**

they were installing OpenFlow,

**00:03:40**

their Mac minis,

**00:03:42**

and then they even started using some newer tools

**00:03:45**

that I thought were really cool.

**00:03:47**

One of them was Obsidian.

**00:03:49**

Because it was like everyone was realizing

**00:03:51**

that the best way to give your AI the context that it needs

**00:03:55**

is just to have a big directory of markdown files.

**00:04:01**

And Obsidian is great for that.

**00:04:03**

And it's kind of funny with Obsidian

**00:04:06**

because they themselves,

**00:04:08**

they don't really describe themselves

**00:04:10**

as like an AI note-taking app

**00:04:12**

or a note app for agents.

**00:04:16**

In fact, if you go to their website,

**00:04:19**

there's not a single mention of AI agents anyway.

**00:04:24**

All they're talking about

**00:04:25**

is the value of owning your plaintext files.

**00:04:30**

I thought that's very interesting.

**00:04:33**

And it's especially interesting

**00:04:35**

if you compare it to some other companies.

**00:04:38**

Now, Microsoft.

**00:04:42**

They can't stop talking about AI.

**00:04:44**

It's like every day,

**00:04:46**

they're trying to shut it down your throat.

**00:04:48**

They're like, please, please click the code bio button.

**00:04:51**

And the user's like, no.

**00:04:53**

I don't want to co-pilot

**00:04:54**

if I fucking know about that, okay?

**00:04:56**

All right.

**00:04:59**

So there's this curious paradox going on.

**00:05:02**

It seems like it's ironic

**00:05:06**

that a lot of the best tools for AI,

**00:05:10**

or a lot of the tools for AI

**00:05:11**

that people are really enthusiastic about

**00:05:13**

are actually the ones with zero AI features.

**00:05:18**

Perhaps like Obsidian,

**00:05:19**

they don't have a special purple magic AI button.

**00:05:23**

they don't have a sparkle emoji anywhere.

**00:05:26**

They don't have a sidebar with a chat assistant

**00:05:29**

that bugs you all the time.

**00:05:31**

Instead, they just go back to this

**00:05:33**

very old-school principle

**00:05:35**

of being plaintext first.

**00:05:39**

I think this is really exciting

**00:05:41**

because it means that if today,

**00:05:44**

if you want the best AI workflows,

**00:05:47**

you're kind of naturally going to gravitate

**00:05:49**

to tools that are a bit more like this.

**00:05:53**

And it's because it comes with these obvious benefits, right?

**00:05:56**

Like, you can bring your own agents,

**00:05:58**

and you can use Git for version control.

**00:06:01**

So you can send your AI off to do some things,

**00:06:03**

and if it messes up,

**00:06:05**

you can just Git revert.

**00:06:06**

It's great.

**00:06:08**

So I think the tools we have now

**00:06:09**

are actually really nice.

**00:06:11**

We have a lot of control and freedom over them.

**00:06:14**

But it might not stay this way forever.

**00:06:16**

Obviously, big tech

**00:06:17**

is working very hard

**00:06:18**

on making sure that the best way to use AI

**00:06:20**

is to stay in their closed ecosystem.

**00:06:24**

Now, if you want some cool AI information,

**00:06:26**

why don't you just connect everything to Google, right?

**00:06:30**

Just put all your data there,

**00:06:32**

and then you can use Google's AI,

**00:06:33**

and it will have all the context.

**00:06:35**

It will be super convenient.

**00:06:38**

I don't know about you,

**00:06:39**

but I don't like this.

**00:06:41**

If this is the future of computing,

**00:06:43**

I think it could be very disturbing.

**00:06:47**

So I think that we have a choice right now.

**00:06:50**

And I think that if people can value local first,

**00:06:54**

I think that we have almost a duty

**00:06:56**

to build out this plain text-first ecosystem

**00:07:00**

as quickly as we can.

**00:07:03**

And when I say build the ecosystem,

**00:07:05**

I don't mean just building more

**00:07:07**

markdown-based notes.

**00:07:08**

I mean building everything.

**00:07:11**

All the apps that we use in our daily life

**00:07:13**

that have some valuable context

**00:07:16**

that an agent might want.

**00:07:19**

Now, one of the most important ones,

**00:07:21**

in my opinion,

**00:07:22**

is the calendar.

**00:07:24**

Because if you think about the calendar,

**00:07:26**

it knows who you are,

**00:07:28**

it knows who you meet,

**00:07:29**

it knows what you're working on.

**00:07:31**

So that's exactly the kind of context

**00:07:33**

that an AI would want.

**00:07:36**

So what I've been working on recently

**00:07:37**

is an open-source plain text-first calendar

**00:07:41**

called Calvia.

**00:07:44**

And you might think that a plain text-first calendar,

**00:07:46**

that sounds a bit weird, right?

**00:07:47**

Because isn't one of the data structures

**00:07:49**

for a calendar much more complicated

**00:07:51**

than something like markdown notes?

**00:07:54**

And that is true,

**00:07:56**

but calendars also happen to have

**00:07:58**

this plain text format already

**00:08:00**

that everyone uses

**00:08:01**

called ICS.

**00:08:03**

All the calendars supported

**00:08:04**

and whenever you're invited to an event,

**00:08:07**

you get a notification,

**00:08:09**

usually behind the scenes.

**00:08:10**

It's just an ICS file somewhere

**00:08:13**

attached to an email.

**00:08:16**

So I was thinking,

**00:08:17**

what would it look like

**00:08:18**

if we stopped treating ICS

**00:08:20**

as just a form that they'd import and export to?

**00:08:24**

And what if we could make this

**00:08:25**

the source of truth?

**00:08:27**

So if you connect your calendar

**00:08:29**

with Calvia,

**00:08:30**

what it will do

**00:08:31**

is it will take all your data

**00:08:33**

from your calendar app,

**00:08:36**

it will convert it

**00:08:36**

into these human-readable ICS files

**00:08:39**

and it will put it

**00:08:40**

in a directory

**00:08:41**

on your computer.

**00:08:44**

And this is great

**00:08:45**

because now

**00:08:46**

you can manage your calendar

**00:08:48**

a bit more like a Git Reaper.

**00:08:51**

So my Google calendar now

**00:08:52**

is just a remote

**00:08:54**

and if someone invites

**00:08:55**

my Google user

**00:08:57**

to an event somewhere,

**00:08:59**

I can just pull that down

**00:09:01**

into my local directory

**00:09:02**

and see the diff very clearly

**00:09:03**

and it works the other way too.

**00:09:06**

So if I create

**00:09:07**

a local event

**00:09:08**

on my computer,

**00:09:10**

I can choose

**00:09:11**

which remote

**00:09:12**

I want to push it to.

**00:09:14**

So maybe I want to push it

**00:09:15**

to my Google calendar,

**00:09:17**

maybe I want to push it

**00:09:18**

to a self-hosted calendar instance.

**00:09:20**

It's up to me.

**00:09:21**

So the point is that

**00:09:22**

my data is no longer

**00:09:24**

locked to this one

**00:09:25**

specific provider

**00:09:27**

in this one ecosystem.

**00:09:30**

I think this is really cool

**00:09:31**

but my friends,

**00:09:34**

you know,

**00:09:34**

this is probably not

**00:09:35**

the stuff they do,

**00:09:36**

this is still a bit nerdy.

**00:09:39**

But what my friends

**00:09:39**

might think is interesting

**00:09:40**

is that because my calendar

**00:09:42**

is now just plain text files,

**00:09:44**

I can also use it

**00:09:45**

with my agents.

**00:09:48**

So here's an example

**00:09:49**

of something I can do.

**00:09:51**

A few months ago,

**00:09:53**

I had to win you my visa

**00:09:54**

and for that

**00:09:56**

I needed to figure out

**00:09:57**

how many days

**00:09:58**

I spent abroad

**00:09:59**

in the last three years.

**00:10:01**

And normally this would be

**00:10:02**

a pretty annoying thing

**00:10:03**

to track down.

**00:10:05**

But now I can just

**00:10:06**

ask my agent,

**00:10:08**

you know,

**00:10:08**

how many days

**00:10:09**

did I spend abroad

**00:10:10**

in the last three years?

**00:10:12**

and my agent will just

**00:10:13**

read the Calvary directory,

**00:10:15**

look at the ICS files,

**00:10:17**

filter them out,

**00:10:18**

find the ones related

**00:10:19**

to you traveling

**00:10:20**

or with a location

**00:10:21**

set to abroad

**00:10:22**

and then they'll just

**00:10:23**

give me an answer.

**00:10:24**

Boom,

**00:10:24**

87 days.

**00:10:26**

Saved so much time,

**00:10:27**

so easy.

**00:10:29**

Here's another example.

**00:10:32**

A few days ago,

**00:10:32**

I went to the

**00:10:33**

local FirstConf website

**00:10:34**

and I saw that the

**00:10:36**

schedule had been published,

**00:10:37**

which is great.

**00:10:39**

I really wanted to put that

**00:10:40**

in my own calendar

**00:10:41**

and there was no way

**00:10:42**

to do that.

**00:10:43**

There was no download

**00:10:44**

or anything.

**00:10:45**

What I could do

**00:10:46**

is just bring up my agent,

**00:10:48**

copy the URL

**00:10:49**

to the conference

**00:10:50**

and say,

**00:10:51**

hey,

**00:10:51**

add these talks

**00:10:52**

to my calendar.

**00:10:53**

And they'll just

**00:10:54**

go to the website,

**00:10:55**

we'll pass the HTML,

**00:10:57**

start creating

**00:10:58**

the ICS files for me.

**00:11:00**

And one thing

**00:11:00**

that's really cool

**00:11:01**

is that because

**00:11:01**

my calendar app

**00:11:03**

is also just reading

**00:11:04**

from my calendar directory,

**00:11:06**

as soon as it creates

**00:11:07**

the files,

**00:11:07**

they just appear

**00:11:08**

in my calendar.

**00:11:10**

Really nice.

**00:11:18**

So these are

**00:11:19**

the kind of workflows

**00:11:20**

that you can get

**00:11:22**

and that can feel

**00:11:23**

really magical actually.

**00:11:25**

And the thing

**00:11:25**

I really want to emphasize

**00:11:26**

is that

**00:11:27**

in order to get this,

**00:11:28**

it's not like

**00:11:29**

I'm going to build

**00:11:29**

some special AI calendar.

**00:11:32**

There's no magic AI button,

**00:11:33**

there's no LLM API

**00:11:36**

that I'm integrating.

**00:11:38**

All I'm doing

**00:11:38**

is building a calendar

**00:11:40**

that's plain text first.

**00:11:43**

And just by doing that,

**00:11:44**

I just get all these

**00:11:45**

AI functionalities

**00:11:47**

for free, basically.

**00:11:49**

So to me,

**00:11:50**

this really seems like

**00:11:51**

the biggest opportunity

**00:11:52**

for little first software

**00:11:53**

right now.

**00:11:55**

And I think

**00:11:56**

that thinking more

**00:11:57**

in terms of plain text first

**00:11:58**

can be like a bridge

**00:12:00**

to make your local

**00:12:01**

first apps

**00:12:02**

also become

**00:12:03**

agent first.

**00:12:05**

So maybe this guy

**00:12:06**

wasn't wrong after all.

**00:12:08**

Maybe it was just

**00:12:09**

early to a trend

**00:12:11**

and getting ready

**00:12:12**

for the age of AI.

**00:12:14**

So hopefully

**00:12:14**

we'll all go out

**00:12:15**

and build

**00:12:15**

really cool plain text

**00:12:16**

first apps

**00:12:17**

and let's make sure

**00:12:18**

that this exciting

**00:12:20**

agentic future

**00:12:21**

stays open

**00:12:22**

and doesn't get

**00:12:23**

captured by Big Tech.

**00:12:25**

Thank you.

**00:12:26**

One quick question

**00:12:38**

for you.

**00:12:41**

Calendar is obviously

**00:12:42**

a naturally

**00:12:42**

spatial format.

**00:12:44**

How do you see that

**00:12:44**

fitting in with your

**00:12:45**

universe?

**00:12:46**

The data part

**00:12:46**

makes sense

**00:12:47**

but do you see it as

**00:12:48**

plain text

**00:12:50**

can be fundamentally

**00:12:51**

a substrate

**00:12:52**

and then we can

**00:12:53**

build UIs

**00:12:54**

on top of that?

**00:12:55**

Or are you

**00:12:55**

terminal T UIs

**00:12:56**

forever?

**00:12:57**

Maybe if you're lucky

**00:12:58**

we'll get some stuff

**00:12:59**

blocked out

**00:12:59**

and you're fine

**00:13:00**

with just reading

**00:13:01**

on text.

**00:13:02**

Yeah, I think maybe

**00:13:03**

it wasn't clear

**00:13:04**

from my demo

**00:13:04**

but the calendar

**00:13:05**

that I was showing

**00:13:06**

is actually powered

**00:13:07**

by Calvary

**00:13:09**

so this is just

**00:13:11**

the absolute simplest

**00:13:12**

data format

**00:13:13**

but then you can

**00:13:14**

use all those

**00:13:16**

abstractions

**00:13:16**

in a really nice

**00:13:17**

GUI app

**00:13:18**

and basically

**00:13:19**

get all the cool

**00:13:20**

calendar features

**00:13:21**

they normally have

**00:13:22**

in something like

**00:13:23**

Notion Calendar

**00:13:24**

or Google Calendar

**00:13:25**

and I really build

**00:13:27**

this as a proof

**00:13:28**

of concept

**00:13:28**

to show that

**00:13:29**

this is possible

**00:13:30**

it doesn't have to be

**00:13:31**

stuff to the app

**00:13:32**

just to see a lot

**00:13:33**

and it can be

**00:13:34**

can go all the way

**00:13:35**

that's like

**00:13:35**

everything you want

**00:13:36**

is pretty good

**00:13:37**

Thank you Justin

**00:13:39**

Thank you

**00:13:40**

All right

**00:13:48**

up next we have

**00:13:49**

Rachel Lee

**00:13:49**

who's going to tell you

**00:13:50**

about

**00:13:51**

how you can use

**00:13:52**

smaller

**00:13:53**

on-device models

**00:13:54**

I think there's
