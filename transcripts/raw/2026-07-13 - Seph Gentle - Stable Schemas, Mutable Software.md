---
source: local-first-conf-recording
title: "Stable Schemas, Mutable Software"
date: 2026-07-13
speakers:
  - "Seph Gentle"
source_recording: "../../recordings/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1700-stable-schemas-mutable-software"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Stable Schemas, Mutable Software

**00:00:00**

It was a lot of fun. I was there to wear it the entire talk and just not acknowledge it. And if I was asked about it, I'd say, what puppet? But, yeah, thank you for calling out, everybody, and hanging around. What an amazing session. Like, I feel like I've learned so many things and there's been so many, like, wild technologies. I was here last year and almost none of the projects that I saw today existed then, I think.

**00:00:27**

Can I get a show of hands who's local? And who's flown at least five hours to get here? That's a lot of people. That's wild. Thank you all for coming. Can I also, just before I start getting to my talk, can we have a round of applause for everyone who's organized this?

**00:00:54**

I'm here beautifully backstage by a whole bunch of people that really want to make sure that this event happens, and I have no idea how much effort it takes to put on an event like this, but I bet it's huge.

**00:01:05**

I've never done it because it's scary, even though making CRTs is my thing.

**00:01:11**

So, I'm here to talk about schemas, which are obviously so hot right now.

**00:01:15**

Thank you for hanging around until the last talk.

**00:01:17**

I hope that I can entertain you and inspire you to do cool software.

**00:01:23**

I'm Seth. This is a bad picture of me that I drew.

**00:01:26**

I've done a bunch of things.

**00:01:28**

Can I have a show of hands who still remembers Google Wave?

**00:01:31**

Oh, that's great.

**00:01:33**

These numbers are going up, by the way.

**00:01:34**

I don't know what we did, but it's really exciting.

**00:01:37**

I worked on Google Wave back in 2011 at Google, and it really inspired me and sent me down this road of working on real-time collaborative software that started with operational transform, and then eventually ended up doing CRT research.

**00:01:49**

I wrote this CRTs Go Borrow paper that people come up to me sometimes and say, oh, you're that guy.

**00:01:54**

And I'm like, yeah, I guess so.

**00:01:57**

I wrote Egg Walker at Diamond Types.

**00:02:00**

Martin Cutland and I wrote this beautiful paper on how we can make CRTs better, but I'm not here to talk to you about any of that.

**00:02:07**

Really, I want to write beautiful software.

**00:02:10**

I've been working as...

**00:02:12**

I've been programming since I was a little kid, and back in the day, programming was so inspiring because I could make anything that I could imagine, and that was huge.

**00:02:19**

I'm a great deal.

**00:02:21**

I still really love this quote from Steve Jobs that I want computers to be a bicycle for the mind, and I feel like these days, with the amount of hours people spend on Instagram and these different things,

**00:02:31**

it feels like computers are becoming this vessel for ad tech companies to just advertise to us.

**00:02:37**

And as a software engineer, I have to make this horrible decision between making local software, which only works on one of my devices, or making cloud software, and then I become a rent seeker.

**00:02:46**

I'm holding onto people's data that I can charge them money for.

**00:02:49**

But I want something better.

**00:02:51**

I was going to go on a whole little sidetrack talking about why a local-first operating system is really important, but so many speakers at this session have talked about it already.

**00:03:01**

Can I get a show of hands if I say local-first operating system, if people have some idea of what I might mean by that?

**00:03:08**

Great. That's almost everybody. I still don't 100% know what I mean by it, but I feel like making all of these principles deep into our operating systems is the only way that we're going to be able to have a beautiful computing environment that really respects the user.

**00:03:21**

So, I'm going to skip through some slides very quickly since you're all up to speed as far as I can see.

**00:03:28**

I think of a program kind of like a tree that we've got all of this part above the surface of the earth with user interface and code and everything.

**00:03:36**

But sitting underneath is all of this root structure that buries deep into the data layers of our systems.

**00:03:42**

And really what I want is I want a beautiful ecosystem.

**00:03:45**

This is a terrible drawing.

**00:03:47**

I want a beautiful ecosystem of lots of plants and bushes and trees and underneath the earth they can all talk to each other because they're all part of the same system.

**00:03:54**

You know, and very practically, like, I've got a file system and, you know, I open up my editor and I write some Rust code and then, you know, I send it to the Rust compiler.

**00:04:04**

And the Rust compiler then saves an executable file into the file system which I can execute and I can interact with all of these tools.

**00:04:12**

We're not special as software developers using lots and lots and lots of different pieces of software.

**00:04:17**

Like, this is a tiny amount of the work that I do.

**00:04:19**

In an average day I might use 20 or 30 computer programs.

**00:04:23**

Artists, musicians, film writers, people that work at, like, any company, they all also use a large suite of lots of different programs.

**00:04:34**

And it's something myopic about us as software engineers that we think that our program is the most important thing in the world.

**00:04:39**

Whereas, actually, it's kind of the entire ecosystem working together that can produce that sort of beautiful computing experience.

**00:04:47**

So, I can skip some things.

**00:04:50**

I love a whole bunch of the talks that have pointed this stuff out.

**00:04:53**

We had Lillard yesterday saying that version control should be universal.

**00:04:57**

We've had the people who work on GTK, Tobias and Andreas, talking about building this stuff into GTK.

**00:05:04**

We've had a talk about Habitat, showing, like, you know, how maybe we can put some data model into the network itself.

**00:05:11**

All of these steps, like, I feel like we're slowly converging as a community on some shared vision around how computing should work.

**00:05:17**

And that's the vision that I really want to bring into the world and help you, me, work together on all of this stuff.

**00:05:26**

But we're here to talk about schemas.

**00:05:27**

And I promise schemas, and I will deliver.

**00:05:31**

So, really, the question for me for schemas is this.

**00:05:34**

If we have files, if we're storing data, what should that data actually be?

**00:05:41**

Right now, in Unix, files are this big binary block.

**00:05:45**

And anyone that's caught in here in this session has probably heard me rant about this.

**00:05:49**

The API for this is terrible.

**00:05:50**

I'm just saying, overwrite these bytes with these other bytes.

**00:05:53**

As an external, as a user, I have no idea what the bytes are.

**00:05:58**

In my computer program, I can't figure out what has actually changed in a file.

**00:06:02**

I can't have two programs interacting with the data at the same time.

**00:06:05**

And maybe JSON will solve this.

**00:06:08**

So, auto-merge and YJS both interact with JSON-like data.

**00:06:12**

And this makes a lot of sense.

**00:06:14**

JSON data, and this reads very terribly if you want to close.

**00:06:17**

I hope you can read it.

**00:06:18**

This is just some JSON data.

**00:06:20**

JSON data at least is self-describing, which means that I can open any JSON document

**00:06:24**

and actually just look inside and see what's there and interact with it.

**00:06:28**

JSON data also lets us describe semantic changes.

**00:06:31**

So, in a collaborative piece of software, I can say,

**00:06:34**

hey, I actually want to modify this number here, this one.

**00:06:37**

I want to change it to a three.

**00:06:39**

And that change itself is what we would want to propagate to other computers,

**00:06:43**

other programs, other users, instead of just overwriting some other two bytes.

**00:06:47**

But I wonder if there might be something that we could do that would be even better than JSON.

**00:06:51**

And something maybe with strong types that's going to give us better guarantees

**00:06:55**

and better capacities for evolution.

**00:06:58**

Now, if something like that did exist, here's the things that I would want it to do.

**00:07:01**

Of course.

**00:07:02**

First of all, just like JSON, I would love it if it was self-describing.

**00:07:05**

If I could look at any file on my computer and I could see exactly what's inside it

**00:07:10**

and I could interact with it and I could write any computer program using any piece of data on my computer.

**00:07:15**

There was a fabulous blog post years ago which was describing Adobe Photoshop's binary format

**00:07:21**

as like this absolute nightmare fuel full of inconsistencies and confusion.

**00:07:25**

People have spent like years of their life trying to reverse engineer these binary formats.

**00:07:30**

And if you end up there, then you end up with something that's still incorrect and may have security bones.

**00:07:37**

So I want something self-describing so we can avoid giving anyone that work.

**00:07:41**

I want static types.

**00:07:42**

I think about extending the computer program all the way down into the operating system itself

**00:07:47**

so that the way I write my computer program, which usually involves static types these days,

**00:07:51**

is also part of the way that the computer understands the file and the data itself.

**00:07:55**

I don't want to have to worry about security vulnerabilities

**00:07:59**

or I don't want to worry about user data changing a number one into a string

**00:08:03**

and what will my program do?

**00:08:05**

That's a terrifying idea.

**00:08:07**

But if we have static types, then we can guarantee that when I open the file

**00:08:11**

I know exactly what all the types are going to be and everything works.

**00:08:15**

I want it to be forwards and backwards compatible.

**00:08:18**

And I'm going to get to what this means in a minute.

**00:08:20**

I also want foreign data preservation.

**00:08:23**

And I'll also explain this in the context of compatibility.

**00:08:25**

And I want it to be able to synchronize across the network.

**00:08:28**

And I want it to be able to be performant.

**00:08:29**

And I want it to use not much space on disk.

**00:08:32**

So this is all good stuff.

**00:08:34**

And I think we can do all of it.

**00:08:35**

I don't think it's that hard.

**00:08:37**

So for compatibility, this is how I think of things.

**00:08:40**

This is a very simple example.

**00:08:41**

But let's say we're in version 1 of some calendar program.

**00:08:44**

And we've got these events structs that just have a time and a description.

**00:08:48**

And later, someone comes along and says,

**00:08:50**

ah, let's add version 2 of this application.

**00:08:53**

And when they do, we add a color to events.

**00:08:56**

Because it's nice to have them show up with the color.

**00:08:59**

I want that if I open a calendar event in version 1 in version 2 of the calendar,

**00:09:04**

obviously it should work.

**00:09:06**

So this is called backwards compatibility.

**00:09:08**

But also, if I open a version 2 calendar event in version 1 of the calendar,

**00:09:12**

it should just work.

**00:09:13**

It should just not show colors.

**00:09:14**

So that seems reasonable.

**00:09:17**

To do that, there's a few things that we need.

**00:09:19**

First of all, if I open a version 2 calendar event in version 1,

**00:09:23**

I need to make sure that that color doesn't accidentally get deleted.

**00:09:26**

That would be really annoying.

**00:09:28**

I need a way for this application to preserve it and store it.

**00:09:31**

I need a way to be able to describe which fields different applications understand.

**00:09:34**

And if I then open up this calendar event inside version 2,

**00:09:38**

then I want maybe the color gets filled in with a default value or null.

**00:09:43**

I also want sort of sideways compatibility.

**00:09:46**

So this is sort of forwards and backwards compatibility.

**00:09:48**

I want to be able to open up a program, open up a file that came from the 70s

**00:09:52**

and open it in a modern email client and still be able to read the email.

**00:09:55**

Which, by the way, you can do with email and you can do with HTTP.

**00:09:58**

I also want sideways compatibility.

**00:10:01**

Yesterday, we had a lightning talk by Tristan,

**00:10:04**

who was talking about making a text-based calendar program.

**00:10:08**

And let's say Tristan just decided that he wanted to add a party true or false flag

**00:10:11**

to all of his calendar events.

**00:10:13**

I don't want Tristan to need to talk to the calendar working group at the IETF

**00:10:18**

to make that happen.

**00:10:20**

He should just be able to add arbitrary fields

**00:10:21**

or make whatever modifications he wants to his calendar.

**00:10:24**

And it should still be interoperable with all of the existing software.

**00:10:28**

Now, when you start thinking about this, there's an obvious question,

**00:10:31**

which is what kinds of changes to our schema and our data models

**00:10:33**

are we allowed to have?

**00:10:35**

Like, what can we do if it's going to work

**00:10:36**

and what's going to break everything?

**00:10:38**

Now, here, I don't agree with everybody in the room, I think.

**00:10:42**

So, obviously, we need to be able to add optional struct fields.

**00:10:45**

I think that a good schema format should support enums

**00:10:47**

because I spend enough time with Rust and I can't give them up.

**00:10:52**

Should you be able to make fields required that was previously optional?

**00:10:55**

Well, that's going to break backwards compatibility

**00:10:57**

because if I open a file made by an older program,

**00:11:00**

it's not going to work.

**00:11:01**

So, maybe not.

**00:11:02**

Should I be able to rename fields?

**00:11:04**

Well, obviously, inside my computer program,

**00:11:06**

I want to rename variables,

**00:11:07**

but I don't think that the schema format should...

**00:11:09**

I mean, I don't want to break compatibility for no reason.

**00:11:12**

Should I be able to change the type of a field?

**00:11:15**

Now, this is something that the Inconswitch project,

**00:11:18**

and I can see Peter is somewhere in the audience,

**00:11:21**

they worked on a research project called Project Embria,

**00:11:24**

where they made a very complicated, very sophisticated schema migration system

**00:11:28**

which allows even field changes.

**00:11:31**

You can change a single value into a list,

**00:11:33**

and when it goes backwards,

**00:11:34**

it'll interpret it as the first item in the list.

**00:11:37**

It's more worth checking that out if you want.

**00:11:38**

But I think that...

**00:11:40**

Well, I have a question, which is,

**00:11:42**

how much juice do we want?

**00:11:43**

Is it worth the squeeze?

**00:11:44**

This is old Australian saying,

**00:11:45**

is the juice worth the squeeze?

**00:11:47**

So, I'm not entirely sure how much complexity we need to put into our systems

**00:11:51**

to be able to make them useful,

**00:11:52**

and I think that we're going to have to build some things

**00:11:55**

and find out with our feet.

**00:11:57**

You know, go and see if something simple is good enough,

**00:12:00**

or if we need something more complicated.

**00:12:03**

So, we get to the final part of this talk,

**00:12:06**

which is, I want to talk about what I've done.

**00:12:08**

So, I made a schema system.

**00:12:09**

It's called Schema Boy,

**00:12:11**

and it's for local first software.

**00:12:13**

This is obviously the Schema Boy, I guess.

**00:12:16**

It's a very simple binary serialization format.

**00:12:21**

It supports all of the things that you'd expect,

**00:12:23**

so all of our primitive types,

**00:12:24**

including a byte buffer, like a blob,

**00:12:27**

which Jason doesn't support.

**00:12:29**

We support lists, optional values,

**00:12:31**

so I can put an optional number or something.

**00:12:33**

We support maps from primitive types to anything else.

**00:12:37**

I support structs and also enums,

**00:12:39**

and I've actually combined structs and enums

**00:12:41**

taking some inspiration from Captain Proto,

**00:12:45**

which was made by the original Protobuff developer.

**00:12:49**

And the format is self-describing.

**00:12:51**

So, this, I feel, is one of these ideas

**00:12:53**

that seems both really obvious,

**00:12:54**

and I'm really surprised I haven't seen it around.

**00:12:56**

The idea is, if I save a file,

**00:12:58**

then the start of the file,

**00:12:59**

so the first, you know, a few hundred bytes,

**00:13:01**

because schemas are usually tiny,

**00:13:02**

describes how the rest of the file is stored.

**00:13:05**

So, the schema says,

**00:13:07**

hey, this is a drawing,

**00:13:08**

and it's going to have these particular fields

**00:13:09**

structured in this particular way,

**00:13:11**

encoded in this particular way,

**00:13:12**

and then the rest of the data

**00:13:13**

is really, really compactly packed.

**00:13:16**

Now, the downside is

**00:13:17**

you can't open these files in a text editor,

**00:13:19**

but because the schema's right there,

**00:13:21**

we can still build tools

**00:13:21**

which can open them, edit them,

**00:13:23**

make whatever changes we want to.

**00:13:25**

This also works, of course, of the network,

**00:13:27**

that when peers A and B first connect,

**00:13:29**

they can just send each other

**00:13:30**

the schema that they're expecting,

**00:13:32**

and all messages that follow

**00:13:33**

can be interpreted by both sides,

**00:13:35**

because if you send me the schema

**00:13:36**

that you're expecting,

**00:13:37**

that you're going to use,

**00:13:38**

and then send me a bunch of messages,

**00:13:40**

I can always interpret those messages

**00:13:41**

in my own context.

**00:13:45**

When you open a file,

**00:13:46**

we have to do this schema merge process,

**00:13:48**

which sounds really complicated.

**00:13:50**

The idea is that

**00:13:51**

the file describes

**00:13:53**

what schema is stored

**00:13:54**

in the encoding schema,

**00:13:56**

and the application

**00:13:57**

also has a schema

**00:13:59**

that describes what fields it's expecting.

**00:14:01**

And when I open that file,

**00:14:03**

we need to merge

**00:14:04**

these two perspectives together

**00:14:05**

to say,

**00:14:06**

oh,

**00:14:07**

I know about this stroke width field,

**00:14:09**

but the file doesn't contain that,

**00:14:11**

so I'm,

**00:14:11**

and also,

**00:14:12**

I know that that stroke width field

**00:14:13**

could be filled in

**00:14:14**

with a default value of one

**00:14:16**

if it's not present,

**00:14:17**

so we're going to populate one

**00:14:19**

into the stroke width field

**00:14:19**

for all of the values.

**00:14:21**

If the encoding schema

**00:14:22**

contains things

**00:14:23**

the application doesn't know about,

**00:14:24**

then we also need to store that

**00:14:26**

alongside the actual data,

**00:14:27**

because we want to preserve

**00:14:28**

any foreign data.

**00:14:29**

we don't want to accidentally

**00:14:30**

break other applications

**00:14:31**

while we build our own.

**00:14:32**

And then when we say back,

**00:14:34**

we can use this merge schema

**00:14:35**

to add any missing fields

**00:14:37**

into the file itself.

**00:14:42**

So we can get to a demo.

**00:14:43**

I think it's always fun

**00:14:44**

to show things of practice.

**00:14:47**

So,

**00:14:48**

yes.

**00:14:51**

So this is a real little

**00:14:52**

Rust project.

**00:14:53**

I made it for fun,

**00:14:55**

and by made it,

**00:14:55**

I mean I asked Claude Code

**00:14:57**

to make it,

**00:14:57**

which I have very complicated

**00:14:59**

opinions about.

**00:15:01**

So I can draw a little

**00:15:03**

person,

**00:15:05**

lots of my nose,

**00:15:06**

and a little rectangle ears

**00:15:08**

or something.

**00:15:09**

So here's my cool little drawing.

**00:15:12**

By the way,

**00:15:13**

I'm a CNET guy,

**00:15:14**

but this is just

**00:15:14**

a totally local program,

**00:15:15**

and I can hit save

**00:15:16**

and say this is like

**00:15:17**

cool guy.

**00:15:20**

Then,

**00:15:20**

I can open this

**00:15:21**

schema boy viewer program.

**00:15:25**

And open,

**00:15:26**

and open this file

**00:15:27**

up here.

**00:15:28**

So we can see immediately

**00:15:29**

that this is what

**00:15:30**

the file is actually

**00:15:31**

storing,

**00:15:31**

and that's impossible

**00:15:32**

to read.

**00:15:32**

Let me...

**00:15:33**

So here's the schema

**00:15:36**

itself that we're storing.

**00:15:38**

This says that the root

**00:15:39**

object is a drawing,

**00:15:40**

and drawings are only

**00:15:41**

a list of shapes.

**00:15:43**

Each shape

**00:15:43**

has this type,

**00:15:45**

and we can see

**00:15:45**

that every shape

**00:15:46**

has all of these

**00:15:46**

common fields

**00:15:47**

of color,

**00:15:48**

width and height,

**00:15:49**

identifying and so on.

**00:15:51**

And shapes are also,

**00:15:53**

every shape is one

**00:15:54**

of these particular

**00:15:54**

variants.

**00:15:55**

So every shape

**00:15:56**

has these fields,

**00:15:57**

and there's also

**00:15:58**

either a circle,

**00:15:59**

a path,

**00:15:59**

or a rectangle.

**00:16:00**

And if it's a path,

**00:16:02**

then it's going to

**00:16:02**

contain an array,

**00:16:04**

a list of tuples

**00:16:06**

of path position.

**00:16:10**

And width.

**00:16:12**

So that's the schema.

**00:16:13**

And then use all the data.

**00:16:17**

So that's pretty cool.

**00:16:20**

Thanks.

**00:16:26**

If I want to...

**00:16:28**

So I've got a CLI tool

**00:16:29**

because, of course,

**00:16:30**

if I grab that,

**00:16:32**

I can print it out

**00:16:33**

in the terminal.

**00:16:34**

I can also...

**00:16:35**

Gen...

**00:16:36**

Is it Gen Rust?

**00:16:37**

Yeah, there we go.

**00:16:38**

So I can ask

**00:16:39**

the Scale Avoid program

**00:16:40**

to generate me some

**00:16:41**

getting-started Rust code,

**00:16:43**

which I can use

**00:16:43**

to interact with this shape.

**00:16:44**

But it's not like

**00:16:45**

other generative code things

**00:16:46**

where I can't change

**00:16:47**

the code after it's written.

**00:16:49**

In fact,

**00:16:49**

if I go to the...

**00:16:50**

This is the drawing program

**00:16:51**

we were just looking at.

**00:16:54**

No idea.

**00:16:55**

I guess.

**00:16:56**

Just checking the time.

**00:16:58**

Then this is the Rust code

**00:17:00**

that we're using.

**00:17:00**

And notice that it's actually

**00:17:01**

a real inner.

**00:17:02**

And it's a real struct.

**00:17:04**

And we just populate

**00:17:05**

and fill these objects

**00:17:06**

in like normal.

**00:17:07**

And actually,

**00:17:07**

if I wanted to add

**00:17:08**

a new field to this,

**00:17:09**

I could just add,

**00:17:10**

you know,

**00:17:10**

say,

**00:17:11**

add, you know,

**00:17:12**

stroke width

**00:17:14**

to F64.

**00:17:17**

And I'm going to need

**00:17:18**

to give every single field

**00:17:19**

a unique identifier.

**00:17:21**

The reason everything

**00:17:22**

needs a unique identifier

**00:17:23**

is if I'm working

**00:17:24**

on something

**00:17:25**

and I add some fields

**00:17:26**

to my application

**00:17:27**

and the Chef puppet here

**00:17:29**

is also working

**00:17:30**

on an application

**00:17:31**

that uses the same struct,

**00:17:33**

then I don't want

**00:17:34**

any of my fields

**00:17:34**

to collide with the fields

**00:17:36**

of other applications.

**00:17:38**

There's a bunch

**00:17:40**

of other protocol

**00:17:41**

definition formats

**00:17:42**

and schema systems

**00:17:43**

which, for example,

**00:17:44**

if you look at protobuf,

**00:17:45**

protobuf gives every single field

**00:17:47**

an integer,

**00:17:48**

an incrementing integer.

**00:17:49**

But in a local first context,

**00:17:50**

we want to be able

**00:17:51**

to modify these structs

**00:17:52**

without having to coordinate,

**00:17:54**

without having to have

**00:17:54**

conversation.

**00:17:55**

I want anyone in the room

**00:17:56**

to be able to make a program

**00:17:57**

that uses the data

**00:17:58**

that my applications create.

**00:18:00**

And I also want to be able

**00:18:01**

to grab any of the files

**00:18:02**

your application creates,

**00:18:03**

use the fields

**00:18:04**

that you've already defined,

**00:18:05**

however you've defined them,

**00:18:06**

and then add that

**00:18:07**

to my user interface.

**00:18:10**

So, yeah.

**00:18:11**

So that's pretty cool.

**00:18:14**

Here.

**00:18:15**

Hands up,

**00:18:15**

who saw my talk last year?

**00:18:18**

Okay.

**00:18:18**

That's about half.

**00:18:22**

So, I've got, say,

**00:18:24**

this is the same drawing program

**00:18:25**

we just saw

**00:18:26**

in a web version.

**00:18:27**

But let's say

**00:18:27**

we make a new version

**00:18:28**

of the drawing program

**00:18:29**

that also supports text notes.

**00:18:32**

So I'm going to grab

**00:18:33**

this drawing I have here

**00:18:35**

and connect it in here

**00:18:36**

and connect it in here.

**00:18:37**

So this is just loading the file.

**00:18:39**

And then as I draw

**00:18:41**

I can obviously see

**00:18:43**

the data being updated live.

**00:18:45**

This is cheating.

**00:18:46**

I'm not actually using a CRDT.

**00:18:47**

I'm just using the power

**00:18:48**

of the synchronous function call

**00:18:49**

right now.

**00:18:50**

But I would love to hook this up

**00:18:51**

to a CRDT.

**00:18:52**

The same schema format,

**00:18:53**

by the way,

**00:18:53**

should absolutely be able

**00:18:54**

to work with any CRDTs

**00:18:56**

if we do the work

**00:18:57**

inside the CRDT libraries

**00:18:58**

for that.

**00:19:00**

But, unfortunately,

**00:19:01**

obviously if I add a text field,

**00:19:03**

my,

**00:19:05**

then version one

**00:19:05**

of the application

**00:19:06**

doesn't understand

**00:19:07**

the text field.

**00:19:08**

There's an open question

**00:19:09**

of what old programs

**00:19:10**

should do if they see data

**00:19:11**

that they don't understand.

**00:19:12**

Because, of course,

**00:19:13**

maybe this drawing

**00:19:14**

only makes sense

**00:19:15**

with those text fields.

**00:19:17**

And maybe this drawing,

**00:19:18**

so maybe the drawing

**00:19:20**

should fail

**00:19:21**

to be displayed

**00:19:22**

if the text field

**00:19:23**

is not understood.

**00:19:24**

This is something

**00:19:25**

that I listened to

**00:19:26**

a wonderful talk

**00:19:27**

by Paul Frazee

**00:19:28**

if he's somewhere around here.

**00:19:31**

Hey,

**00:19:31**

over near the door.

**00:19:32**

Paul, who works

**00:19:33**

with Blue Sky,

**00:19:33**

gave a wonderful talk

**00:19:34**

a few years ago

**00:19:35**

talking about how

**00:19:36**

if I have a tweet

**00:19:37**

or something like a tweet

**00:19:38**

that has an image in it,

**00:19:40**

but I'm viewing that tweet

**00:19:41**

on a program

**00:19:42**

that doesn't understand

**00:19:43**

the images,

**00:19:44**

then displaying the tweet

**00:19:45**

without the image

**00:19:46**

might put the whole tweet

**00:19:47**

right out of context.

**00:19:48**

And that doesn't

**00:19:48**

respect the user.

**00:19:50**

Some user wrote a tweet

**00:19:51**

assuming that people

**00:19:52**

would see the image.

**00:19:53**

And if we show them

**00:19:53**

the tweet

**00:19:53**

with the image missing,

**00:19:55**

then maybe it's better

**00:19:56**

to not show the tweet

**00:19:57**

at all

**00:19:57**

or show it behind

**00:19:57**

a warning message.

**00:19:59**

So these are the kinds

**00:19:59**

of things

**00:20:00**

that I think

**00:20:00**

as a community

**00:20:01**

we should start

**00:20:01**

thinking about.

**00:20:04**

SkinOboy is very fast,

**00:20:05**

by the way.

**00:20:06**

This is the file size.

**00:20:07**

So I grabbed a benchmark

**00:20:09**

online,

**00:20:10**

I asked Paul to compare

**00:20:11**

SkinOboy

**00:20:11**

to a bunch of other

**00:20:12**

systems.

**00:20:14**

So in these benchmarks

**00:20:14**

we can see that

**00:20:15**

the JSON files

**00:20:16**

are between

**00:20:17**

two and a half,

**00:20:19**

four,

**00:20:20**

four times larger

**00:20:21**

than SkinOboy files.

**00:20:24**

SkinOboy ends up

**00:20:25**

being very similar

**00:20:26**

in size

**00:20:26**

to some of the best

**00:20:27**

most efficient

**00:20:27**

binary formats

**00:20:28**

which I'm very happy

**00:20:29**

with.

**00:20:30**

And obviously

**00:20:31**

we're actually storing

**00:20:32**

an entire schema

**00:20:33**

inside the file itself

**00:20:34**

but it doesn't really

**00:20:35**

matter

**00:20:35**

because if you've got

**00:20:36**

a one megabyte file

**00:20:37**

and 200 bytes

**00:20:38**

of schema

**00:20:38**

then the schema

**00:20:40**

doesn't matter.

**00:20:41**

It's also very fast

**00:20:43**

so we can

**00:20:44**

encode and decode data.

**00:20:45**

The blue bar

**00:20:46**

is the time to encode

**00:20:47**

and the green bars

**00:20:48**

are time to decode.

**00:20:49**

And we can see

**00:20:49**

that with a nice

**00:20:50**

efficient binary

**00:20:51**

serialization format

**00:20:52**

we can get

**00:20:52**

several times faster

**00:20:53**

than JSON

**00:20:54**

across all of these

**00:20:55**

benchmarks

**00:20:56**

which is really nice.

**00:21:00**

Yes, so

**00:21:01**

that's SkinOboy.

**00:21:02**

That's everything

**00:21:03**

that I wanted to talk

**00:21:03**

about.

**00:21:04**

We've got about

**00:21:04**

four minutes left.

**00:21:05**

I think we've got

**00:21:06**

time for a couple

**00:21:06**

questions

**00:21:07**

if our delightful

**00:21:08**

host is around.

**00:21:11**

Otherwise

**00:21:12**

thank you for

**00:21:13**

my time.

**00:21:19**

Sorry, I lied.

**00:21:22**

I have one more slide.

**00:21:23**

There's one more thing

**00:21:23**

that I want to say.

**00:21:26**

Actually, two more slides.

**00:21:27**

First of all,

**00:21:28**

very quickly,

**00:21:28**

here's some advanced tips.

**00:21:29**

So don't use

**00:21:31**

SkinOboy directly.

**00:21:32**

This is an experimental

**00:21:32**

project.

**00:21:33**

I want to get it

**00:21:33**

into a working state

**00:21:34**

very soon

**00:21:35**

but right now

**00:21:35**

it's very experimental

**00:21:37**

and there's going to be bugs.

**00:21:39**

Just quickly to say

**00:21:40**

for anyone else

**00:21:40**

working in this space,

**00:21:41**

here's some tips.

**00:21:43**

Globally unique

**00:21:43**

field names

**00:21:44**

which I talked about.

**00:21:45**

Coordination-free

**00:21:46**

evolution of schemas

**00:21:47**

I think is really important.

**00:21:48**

I love coordination.

**00:21:49**

I love standards committees.

**00:21:50**

I've been to the IETF

**00:21:51**

a bunch

**00:21:52**

and the IETF

**00:21:53**

the people that spend

**00:21:53**

a lot of time

**00:21:54**

talking about standards

**00:21:55**

will be the first ones

**00:21:56**

to tell you

**00:21:57**

get your software working

**00:21:58**

before you go to the IETF.

**00:22:00**

Build your software

**00:22:01**

get it working

**00:22:02**

and only once you've got

**00:22:03**

multiple people

**00:22:04**

that have built

**00:22:05**

incompatible software

**00:22:06**

then they will give you

**00:22:07**

a room to talk about it.

**00:22:08**

So that's how we want

**00:22:09**

to be approaching things.

**00:22:11**

I talked about AppPredo

**00:22:12**

and also

**00:22:13**

I really love it when

**00:22:15**

sorry, it's hard to see over there

**00:22:16**

when

**00:22:17**

serialization

**00:22:18**

formats

**00:22:19**

also have a canonical

**00:22:20**

form of serialization.

**00:22:23**

Yes, there's a few people

**00:22:24**

cheering because they know

**00:22:25**

the horror

**00:22:25**

and we try to do

**00:22:28**

content-addressable data

**00:22:29**

where you want a hatch

**00:22:29**

for some object

**00:22:30**

but unfortunately

**00:22:31**

the fields keep

**00:22:31**

walking under

**00:22:32**

and I changed the hatch.

**00:22:33**

So, yeah.

**00:22:36**

So,

**00:22:37**

Willen Dank

**00:22:37**

Deutschlands

**00:22:38**

and lots of

**00:22:40**

beautiful software.

**00:22:41**

So, thank you.

**00:22:42**

Let's talk to questions now.

**00:22:50**

Love the vision for

**00:22:53**

local first OS

**00:22:54**

of course

**00:22:55**

and I feel like

**00:22:57**

that's the end state

**00:22:57**

of all of it

**00:22:58**

but something I realized

**00:23:00**

many years ago

**00:23:00**

is it's going to take

**00:23:01**

certainly more than

**00:23:02**

any one team building

**00:23:03**

and more than

**00:23:03**

any one project

**00:23:04**

and we're all

**00:23:05**

iterating towards

**00:23:07**

both divergently

**00:23:07**

and sometimes

**00:23:09**

convergently.

**00:23:10**

Let me add a kitchen

**00:23:11**

with a few questions here.

**00:23:13**

So, let's see.

**00:23:15**

Many folks are basically

**00:23:16**

asking a variation

**00:23:17**

of like there's a lot

**00:23:18**

of great existing

**00:23:20**

data coding formats

**00:23:21**

protobuf obviously

**00:23:22**

comes to mind

**00:23:22**

you referenced already.

**00:23:24**

What made you lean

**00:23:25**

towards

**00:23:25**

something new here?

**00:23:28**

It's a great question.

**00:23:28**

I couldn't find

**00:23:29**

any that met

**00:23:30**

all of the needs

**00:23:30**

that I had.

**00:23:31**

So, that's like

**00:23:31**

earlier on

**00:23:32**

when I said

**00:23:32**

that I want

**00:23:33**

I mean essentially

**00:23:34**

I want

**00:23:34**

I want

**00:23:35**

globally unique

**00:23:36**

identifiers

**00:23:36**

that aren't just

**00:23:37**

an incrementing integer

**00:23:38**

because only one

**00:23:39**

organization can handle it.

**00:23:41**

That puts protobuf

**00:23:41**

out of the running.

**00:23:43**

I want something

**00:23:43**

that's self-describing

**00:23:44**

which many of these

**00:23:45**

protocols don't do.

**00:23:46**

So, for example

**00:23:47**

protobuf

**00:23:47**

many of these

**00:23:48**

different algorithms

**00:23:49**

you have to pre-share

**00:23:51**

ahead of time

**00:23:51**

what the scheme

**00:23:52**

is going to be

**00:23:52**

before we can

**00:23:53**

interact with potato.

**00:23:55**

JSON, of course

**00:23:57**

I want to be able to

**00:23:57**

I want something

**00:23:58**

that's smaller

**00:23:59**

faster

**00:23:59**

more explicit

**00:24:00**

about what types

**00:24:01**

are stored.

**00:24:02**

I went through

**00:24:03**

a whole lot of

**00:24:03**

different serialization

**00:24:04**

formats

**00:24:05**

and unfortunately

**00:24:05**

I think that

**00:24:06**

we might need

**00:24:06**

something that's

**00:24:07**

our own

**00:24:07**

to be able

**00:24:08**

to solve this problem

**00:24:09**

but if there are

**00:24:10**

any serialization

**00:24:10**

formats I don't know

**00:24:11**

about

**00:24:11**

which could work

**00:24:12**

then I'm all ears.

**00:24:15**

And you referenced

**00:24:15**

Cambria

**00:24:16**

one person asked

**00:24:17**

about backwards

**00:24:18**

compatibility

**00:24:18**

and maybe there's

**00:24:19**

times when

**00:24:19**

actually old versions

**00:24:21**

had fundamental

**00:24:22**

problems

**00:24:22**

even like security

**00:24:23**

issues or something

**00:24:24**

like that

**00:24:24**

you need to handle

**00:24:25**

obviously Cambria

**00:24:26**

was this lens-based

**00:24:28**

very real-time

**00:24:29**

trying to handle

**00:24:30**

every possibility

**00:24:31**

as you described

**00:24:31**

there's another version

**00:24:33**

of schema design

**00:24:35**

which is just

**00:24:35**

trying to break

**00:24:36**

stuff

**00:24:37**

where

**00:24:38**

yeah

**00:24:39**

how much do you

**00:24:40**

think it's important

**00:24:41**

to stretch that

**00:24:41**

and then

**00:24:42**

there's even a time

**00:24:43**

you just said

**00:24:43**

look

**00:24:43**

this isn't a drawing

**00:24:44**

anymore

**00:24:45**

it's now a

**00:24:46**

drawing too

**00:24:47**

right

**00:24:47**

right

**00:24:48**

right

**00:24:48**

I mean this is a

**00:24:49**

really tough one

**00:24:50**

I don't know

**00:24:51**

like

**00:24:51**

I don't think anyone

**00:24:52**

in the room knows

**00:24:53**

email and HTTP

**00:24:55**

and HTML

**00:24:56**

I think are the

**00:24:57**

golden children

**00:24:57**

of compatibility

**00:24:58**

for a really long

**00:24:59**

time

**00:24:59**

you can still use

**00:25:01**

a modern web browser

**00:25:01**

TLS is the one

**00:25:02**

problem

**00:25:02**

but you can use

**00:25:03**

a modern web browser

**00:25:04**

to open a website

**00:25:05**

from the 90s

**00:25:06**

and you can use

**00:25:07**

a web browser

**00:25:07**

from the 90s

**00:25:08**

to open a modern

**00:25:08**

website

**00:25:09**

as long as you

**00:25:09**

can get through TLS

**00:25:10**

which has got

**00:25:11**

essentially progressive

**00:25:12**

enhancement

**00:25:12**

that you know

**00:25:13**

if the old web browser

**00:25:14**

doesn't understand CSS

**00:25:15**

it's not going to look

**00:25:16**

very pretty

**00:25:17**

and those systems

**00:25:19**

work just with a key

**00:25:20**

value pair

**00:25:20**

like emails

**00:25:21**

just have the top

**00:25:22**

of the email

**00:25:22**

and email headers

**00:25:23**

which are just

**00:25:24**

keys and values

**00:25:25**

and they've managed

**00:25:26**

to do schema evolution

**00:25:27**

just by adding

**00:25:27**

more key value pairs

**00:25:28**

I worked at Google

**00:25:30**

years ago

**00:25:30**

Google is very

**00:25:31**

big on protocol

**00:25:32**

all of Google's

**00:25:33**

internal systems

**00:25:34**

even though Google

**00:25:35**

has a central source

**00:25:36**

of truth

**00:25:37**

for how to do

**00:25:37**

schema evolution

**00:25:38**

they still tell

**00:25:39**

everybody

**00:25:40**

they've never

**00:25:41**

ever had new fields

**00:25:42**

and that seems

**00:25:43**

to work for them

**00:25:44**

so I don't know

**00:25:46**

I think that we

**00:25:47**

can have something

**00:25:47**

very simple

**00:25:48**

I think that we

**00:25:48**

should learn

**00:25:49**

from the fact

**00:25:49**

that JSON

**00:25:49**

is incredibly popular

**00:25:51**

probably because

**00:25:51**

of how simple it is

**00:25:52**

but also it might be

**00:25:54**

that there are

**00:25:54**

some cases

**00:25:54**

where we want

**00:25:55**

the features

**00:25:55**

of Project Patriot

**00:25:56**

and I think we're

**00:25:58**

going to have to

**00:25:58**

build a whole bunch

**00:25:58**

of applications

**00:25:59**

to figure that out

**00:26:00**

that's all

**00:26:00**

yeah well

**00:26:02**

the self-describing

**00:26:03**

aspect

**00:26:04**

and I would even

**00:26:04**

call it

**00:26:05**

inspectability

**00:26:05**

you didn't talk

**00:26:06**

about that as much

**00:26:07**

but for me

**00:26:08**

that's always been

**00:26:08**

the very first version

**00:26:09**

Autoverge

**00:26:10**

had a doc inspector

**00:26:11**

piece of it

**00:26:11**

I feel like

**00:26:12**

the developer tools

**00:26:13**

built into the browser

**00:26:14**

were one of the

**00:26:15**

biggest breakthroughs

**00:26:17**

in terms of

**00:26:17**

like the sense

**00:26:19**

of hackability

**00:26:21**

you feel in that

**00:26:22**

and to me

**00:26:23**

data ownership

**00:26:23**

is not just

**00:26:24**

about

**00:26:25**

I can make a copy

**00:26:26**

of the file

**00:26:27**

I can leave the file

**00:26:28**

give it to someone

**00:26:29**

that I want

**00:26:29**

but also I can

**00:26:30**

look inside of it

**00:26:31**

even if the software

**00:26:32**

is long gone

**00:26:33**

the software has a bug

**00:26:34**

or the data got corrupted

**00:26:36**

somehow

**00:26:36**

or whatever

**00:26:37**

so

**00:26:37**

more of a statement

**00:26:39**

than a question

**00:26:39**

now I'm that guy

**00:26:40**

I can't put it in a lot

**00:26:42**

and also edit

**00:26:43**

your own data

**00:26:43**

like

**00:26:43**

the fact that I can

**00:26:45**

open up an internal

**00:26:45**

and hack any file

**00:26:47**

on my computer

**00:26:47**

is great

**00:26:47**

and there's no API

**00:26:49**

that the different

**00:26:49**

programs on my computer

**00:26:50**

need to provide to me

**00:26:51**

to make that work

**00:26:52**

like I don't need

**00:26:53**

a special commission

**00:26:54**

from say

**00:26:56**

to get your resolve

**00:26:57**

to be able

**00:26:58**

to look through

**00:26:58**

how to get your resolve

**00:26:59**

stores this data

**00:27:00**

and I think that's

**00:27:01**

something we've lost

**00:27:01**

in the cloud era

**00:27:02**

like

**00:27:03**

the Google Docs API

**00:27:04**

doesn't actually

**00:27:05**

give you access

**00:27:05**

to all the data

**00:27:06**

Google Docs stores

**00:27:07**

which is horrific

**00:27:08**

to me

**00:27:09**

and I don't even think

**00:27:10**

that applications

**00:27:11**

should need to build

**00:27:12**

an API

**00:27:12**

if we could just

**00:27:13**

read the data

**00:27:14**

that's actually

**00:27:14**

stored on this

**00:27:15**

and see it

**00:27:16**

in all of its full glory

**00:27:17**

I think there's

**00:27:17**

all sorts of things

**00:27:18**

we could do with that

**00:27:18**

like you know

**00:27:19**

if you're using

**00:27:20**

Blender

**00:27:21**

build a third party

**00:27:22**

tool that does

**00:27:23**

script some

**00:27:24**

movement

**00:27:24**

or creation of objects

**00:27:25**

and I want to

**00:27:26**

open the door

**00:27:27**

to all of that

**00:27:27**

kind of hackability

**00:27:28**

about computers

**00:27:29**

last one

**00:27:30**

before we wrap

**00:27:31**

are all the unique

**00:27:32**

schema keys

**00:27:33**

intention

**00:27:33**

to say

**00:27:34**

these compatibility

**00:27:35**

sorry

**00:27:35**

can you say that again

**00:27:36**

our globally

**00:27:37**

unique schema keys

**00:27:39**

intention

**00:27:39**

with sideways

**00:27:40**

compatibility

**00:27:40**

that is say

**00:27:41**

you were giving

**00:27:42**

the mergeability

**00:27:42**

case

**00:27:43**

and protocol

**00:27:43**

has incrementing

**00:27:44**

numbers

**00:27:44**

but we can use

**00:27:45**

unique names

**00:27:46**

but now we both

**00:27:47**

chose the unique name

**00:27:48**

what happens

**00:27:48**

right right

**00:27:50**

so the danger

**00:27:50**

just to be really

**00:27:52**

clear about it

**00:27:52**

is if let's say

**00:27:53**

we're just using

**00:27:53**

JSON

**00:27:54**

and I have a name

**00:27:55**

field to some

**00:27:55**

object

**00:27:56**

but you also

**00:27:57**

add a name field

**00:27:58**

to the object

**00:27:58**

at the same time

**00:27:59**

without me realizing

**00:28:00**

that my name field

**00:28:01**

is a string

**00:28:01**

and your name field

**00:28:02**

is a list of numbers

**00:28:04**

because it's some

**00:28:04**

kind of encoded thing

**00:28:05**

suddenly our applications

**00:28:07**

are all uncompatible

**00:28:07**

using globally unique

**00:28:10**

field names

**00:28:10**

means that we've got

**00:28:11**

a bigger namespace

**00:28:12**

essentially

**00:28:12**

so that I can

**00:28:13**

you know

**00:28:13**

say

**00:28:14**

give them all a domain

**00:28:15**

based name

**00:28:15**

or something

**00:28:16**

and you can do the same

**00:28:17**

and the only real cost

**00:28:18**

is that the schema

**00:28:19**

at the top

**00:28:19**

has slightly longer

**00:28:20**

strips in every file

**00:28:21**

but it's a few bites

**00:28:22**

and I think that

**00:28:23**

even in the right

**00:28:24**

crisis

**00:28:24**

we can afford that

**00:28:25**

I mean I think

**00:28:26**

the larger

**00:28:27**

we can probably

**00:28:27**

get away with

**00:28:27**

using the same keys

**00:28:28**

but it's just a bit

**00:28:29**

more dangerous

**00:28:30**

it feels like

**00:28:30**

walking on landlines

**00:28:31**

it's like

**00:28:32**

make sure you don't

**00:28:32**

put the wrong field

**00:28:33**

name in the wrong place

**00:28:34**

and having to believe

**00:28:36**

it feels

**00:28:36**

means that you

**00:28:37**

completely aren't

**00:28:37**

whatever the semantics

**00:28:38**

your fields are

**00:28:39**

without having to

**00:28:40**

worry about other people

**00:28:40**

thank you Seth

**00:28:42**

all right well that brings us

**00:28:52**

just about to a wrap

**00:28:53**

for the day

**00:28:53**

quickly I want to tell you

**00:28:54**

what to expect for tomorrow

**00:28:55**

actually Boris will do that

**00:28:57**

let me first thank our sponsors

**00:28:58**

Jazz who sponsors

**00:29:00**

the party tomorrow

**00:29:00**

Soul who sponsors

**00:29:02**

community tickets

**00:29:03**

Cloudflare

**00:29:04**

Code Rabbit

**00:29:05**

Tangled

**00:29:05**

and PowerSync

**00:29:06**

they really do

**00:29:07**

make it possible

**00:29:08**

to keep our ticket prices

**00:29:09**

reasonable

**00:29:09**

which indeed is fundamental

**00:29:11**

to this conference

**00:29:12**

which is that

**00:29:13**

if the ticket prices

**00:29:14**

aren't low enough

**00:29:14**

then we won't be able

**00:29:16**

to get the diversity

**00:29:16**

of people that we want

**00:29:17**

so thank you sponsors

**00:29:19**

thank you also

**00:29:20**

the volunteers

**00:29:21**

that make this happen

**00:29:22**

and thank you to the venue

**00:29:23**

as Seth pointed out

**00:29:24**

lots of people

**00:29:25**

behind the scenes

**00:29:26**

who are making

**00:29:27**

a smooth event

**00:29:28**

for you all

**00:29:28**

round of applause

**00:29:29**

and now I'm almost

**00:29:38**

off the clock

**00:29:39**

as your MC

**00:29:40**

but tomorrow

**00:29:41**

we have something

**00:29:41**

quite different

**00:29:42**

and fun

**00:29:43**

Boris is here

**00:29:44**

to tell you about

**00:29:44**

great thank you

**00:29:45**

very much Adam

**00:29:46**

it's been

**00:29:47**

an amazing two days

**00:29:49**

I've been amazed

**00:29:51**

to see every single talk

**00:29:52**

just basically packed

**00:29:53**

and then we have breaks

**00:29:55**

and we gather

**00:29:56**

and there's all this

**00:29:57**

other space

**00:29:58**

that we have as well

**00:29:59**

so tomorrow

**00:30:00**

is day three

**00:30:01**

it's lab day

**00:30:02**

what is lab day

**00:30:03**

I don't know

**00:30:05**

but we're about

**00:30:06**

to get there together

**00:30:07**

so basically

**00:30:08**

after these single track talks

**00:30:10**

we're

**00:30:11**

we have some

**00:30:13**

incredible information

**00:30:14**

we want to get out

**00:30:15**

of the way

**00:30:15**

and make sure

**00:30:16**

that everyone

**00:30:17**

can talk

**00:30:18**

and connect

**00:30:19**

and demo

**00:30:20**

and hack

**00:30:21**

or just hang out

**00:30:22**

in a corner

**00:30:22**

or maybe play some music

**00:30:24**

or something like that

**00:30:25**

we're going to get started

**00:30:27**

a little bit later

**00:30:28**

doors open

**00:30:30**

at 830

**00:30:30**

so if you just want

**00:30:31**

to come here

**00:30:32**

and grab your coffee

**00:30:34**

and the breakfast

**00:30:34**

we have

**00:30:34**

totally fine

**00:30:35**

but we're going to

**00:30:36**

get started a little later

**00:30:37**

we're going to talk

**00:30:38**

a little bit more

**00:30:39**

about how the day happens

**00:30:40**

and the same new schedule

**00:30:41**

it's like filled out

**00:30:43**

with a couple of things

**00:30:44**

and then we've got

**00:30:45**

some empty spots

**00:30:45**

in it as well

**00:30:46**

Peter is going to start

**00:30:50**

the day

**00:30:50**

from the lab

**00:30:50**

from EconSwitch

**00:30:51**

and talk a little

**00:30:52**

about how the lab

**00:30:54**

has gotten here

**00:30:55**

this is the 10th anniversary

**00:30:56**

of EconSwitch

**00:30:58**

you'll hear a little bit

**00:31:00**

I don't think Peter

**00:31:00**

is going to talk

**00:31:01**

about a bunch of that

**00:31:02**

but for those

**00:31:03**

that don't know

**00:31:03**

it really comes out

**00:31:05**

of those

**00:31:05**

Haroku

**00:31:05**

and Adam

**00:31:06**

and his co-founders

**00:31:07**

saying

**00:31:08**

we made a lot of cloud

**00:31:11**

we should maybe

**00:31:12**

make less cloud

**00:31:13**

now

**00:31:13**

and figure out

**00:31:14**

where that heads

**00:31:15**

which is going to be great

**00:31:16**

we've got colleagues

**00:31:19**

from EconSwitch

**00:31:20**

who are going to

**00:31:21**

do some demos

**00:31:23**

and talks

**00:31:24**

about some of the stuff

**00:31:24**

that we've been working

**00:31:25**

in the lab

**00:31:26**

and share it with you

**00:31:27**

and then we're going to have

**00:31:29**

three rooms

**00:31:31**

for those who haven't

**00:31:31**

found them yet

**00:31:32**

OM

**00:31:34**

ARC

**00:31:36**

affectionately
