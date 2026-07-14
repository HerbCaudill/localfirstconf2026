---
source: local-first-conf-recording
title: "Local first collaborative Spreadsheets. Are CRDTs useful?"
date: 2026-07-13
speakers:
  - "Nicolás Hatcher Andrés"
source_recording: "../../recordings/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1430-local-first-collaborative-spreadsheets-are-crdts-u"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Local first collaborative Spreadsheets. Are CRDTs useful?

**00:00:00**

Thank you. My name is Nicolás Hatcher. I'm going to talk about Aidencalc and if we can use CRDTs for collaborative Spreadsheets, if they are useful or not. I'm going to answer that question right away.

**00:00:20**

There you are. I started thinking about all the possibilities, all the blog posts that I've read in the last few months about you don't need really CRDTs. You can do away without CRDTs. All that is true. You don't need in every situation CRDTs.

**00:00:39**

I think I'm going to tell you that if you want to do a Scalable Spreadsheet collaborative system CRDTs are very, very useful. Let's see.

**00:00:56**

So, Aidencalc is a product I've been working on mostly as a site project for the last few and a half. And lately, with my partner Danny over there, we've been full-time on this in the last couple of months.

**00:01:17**

So, we don't have a lot of people power. It's a very small project yet. But we do have a proof of concept. If you go to Aidencal.com, you're going to see a very sleek, a very fast, a very functional Spreadsheet engine and a Spreadsheet app that has many of the things that a Spreadsheet should have.

**00:01:42**

Well, yeah, we have 500 function. That's a lot. Any kind of a Spread Excel function you might want to think. It's probably there.

**00:01:53**

We can use defined names. We can use conditional for money in many ways. We can do really nice things with conditional for money these days.

**00:02:01**

We can use Lambda function, which is my favorite of mine. It's a Turing complete language right now.

**00:02:07**

And it's a real Spreadsheet. You can... We have dynamic arrays, these formulas that, you know, go to other cells and beyond the cell and the formula.

**00:02:18**

We have name cell styles. We have internationalization to a point. And we have many other things.

**00:02:25**

And we know how to build the product. I think we have a clear role for the next couple of years.

**00:02:31**

From pretty much to the NLNES that started all of this. Without their help, we couldn't do that.

**00:02:37**

And thank you now to the Horizon Euro program. We have a good grant together with blog notes. Some members are here. And some other folks from the Alpha Consortium.

**00:02:49**

And yeah, we're pretty sure we can build a nice product. But it's not collaborative. And that's probably the single biggest mistake I made when I started doing this.

**00:03:03**

And I thought, okay, I can do this, you know, probably in a couple of months. I can do something collaborative.

**00:03:09**

It turns out that's really difficult. And I've never heard this before. And I've been actually in the business for 15 years, believe it or not.

**00:03:17**

Building a spreadsheet. It's like this one. For many companies. And I always did it collaborative to some extent. But it wasn't at a scale that matter. It wasn't...

**00:03:31**

I didn't know it was going to be this difficult. Yes.

**00:03:39**

Sam, whoever is in charge. I'm in good hands. I just met fantastic people that know what they are doing.

**00:03:47**

I'm doing the people from YDS internets around and wires that in support of us, that will be working alongside us to make this happen.

**00:03:59**

And so other folks that I'm going to make in a bit. So I'm pretty sure we can do this. Although I'm going to tell you that it's not going to be easy.

**00:04:11**

First, I'd like to tell you what we need. What is... I'm a very practical person. Although I'm a mathematician, a physicist by training.

**00:04:23**

But I'm very practical in this case. I really want to build something that works. I want to give you... I want to have the best spreadsheet software I can give you so that you can do whatever you want with it.

**00:04:35**

I want to give you the most permissive license. And I want you to read that. I want you to copy, to modify it or do whatever you want with it.

**00:04:45**

Because I think spreadsheets are a building block of modern software. Right? There are many others that are also very important. Like email, of course, way more important. And operative systems and many other things.

**00:04:59**

But I think spreadsheets is something I can do. I can contribute. And I can probably do that. Right?

**00:05:05**

I do want to give you a spreadsheet that can be used collaboratively. That has eventual consistency. That everybody that is working on that spreadsheet will have the same spreadsheet at the end of the day.

**00:05:19**

But I want to present intent. And that's a key word when people are talking about CRDTs. Invent is what the user wants to do when they make changes. Right?

**00:05:29**

I don't... I totally don't want to have merge conflicts. You know? I don't want to give a spreadsheet user a git interface with all the weird deals that they have to fight against.

**00:05:44**

So, yeah, we probably don't want an output with a server. Do we? Do we need it? I split this being practical. I split it into two different scenarios.

**00:06:00**

One scenario is the real-time collaborative, classical apps, like we do with Google Sheets or with 365, in which people are at the same time collaborating on,

**00:06:12**

and I documented this case in the spreadsheet. Now, this is a slightly different problem. It's related, but it's a slightly different problem that what happens if I want to work offline for a while.

**00:06:23**

Because I don't want to be interrupted, because I'm on a plane, because I don't have internet, because whatever reason. Right?

**00:06:29**

They're a little bit different problems. And they might be solved by different tools. And that's something I was thinking when I was building all these things.

**00:06:40**

Now, for example, the first problem might be solved, or I could solve 90% of the first problem, but you have a quick sync of whatever is happening with different users working on the same spreadsheet.

**00:06:54**

If I'm able to sync everything as fast as possible, I don't need a lot of algorithms, which is what I was doing five, ten years ago.

**00:07:02**

I want to highlight some of the common problems in a spreadsheet. Now, you all know what CRBTs are. CRBTs apply very well to text. When it comes to two-dimensional things, they apply, but it's not so straightforward.

**00:07:21**

And let me tell you some of the common problems that you might find when you're working with spreadsheets. Now, when you're editing a cell, you're not just editing that cell.

**00:07:33**

You might change the shape of it, of the rope, for example, where the cell is. When you're believing a cell, a lot of cells might refer to that cell, and all of a sudden that's protein, right?

**00:07:45**

And what if you're styling a cell? Well, if you're styling this and you're putting some borders in here, it turns out that there's no spreadsheet application. The left border of this cell is the right border of this cell.

**00:07:58**

And this kind of coupling makes things a little bit difficult. Now, inserting columns and rows is a pain. It's a pain because it can move the whole spreadsheet. You need to be smarter on that, on how to do that.

**00:08:14**

Moving is yet another difficulty, which is not solved by deleting and inserting in any way.

**00:08:21**

Yeah, duplications, you can create main ranges. You can have complex computations. I was talking about dynamic rates before.

**00:08:34**

There are formulas that are written in one cell, but still many other cells.

**00:08:40**

Now, this is taken from a paper that is called Agus Sheets. I don't know if Julian is around here, but one of the authors from the paper is here and just copied without permission the paper.

**00:08:56**

It's very nice. What they did is they did several of these operations and see how they're working in Google Sheets. They actually did it in Notion, but I'm skipping that one.

**00:09:08**

You can see there are some green rectangles. That means, okay, that's probably an optimal result. There's some yellow ones that are a little bit suboptimal, and there's red ones that means we actually lost data.

**00:09:25**

So what happens if two people are editing the same cell, then you might have a problem. That's an easy to understand problem.

**00:09:41**

So what happens if somebody is deleting a column and somebody is editing a cell that is within that column, right?

**00:09:46**

Those kind of conflicts make the life of this spreadsheet, whatever algorithm you want to use to sync those spreadsheets, difficult.

**00:09:57**

Now, can we do better than that? I am told Google Sheets uses something called operational transformation. I'm not sure if that's completely true or not. I haven't said it myself.

**00:10:11**

It is true that they did start with that. They did open all that. And that was the winning algorithm at least to the mid-2000s.

**00:10:22**

So, as I said, they are. They are very, very useful. But the implementation at least, as far as I can understand, I'm a newbie, I'm a rookie, but as far as I can understand, it's fairly important.

**00:10:36**

It's not going to be a walk in the park. There are many, many things to consider.

**00:10:43**

I was talking about all these different operations that you can do on a spreadsheet.

**00:10:49**

All these different operations might lie and might make things difficult.

**00:10:54**

Now, one of the intuitions I am building around CRT, and we'll get to this, but if you can make these operations from Moodle Tech,

**00:11:06**

you're in a good fashion of success. That's not the definition of CRT. That's not what it is.

**00:11:15**

But if you manage to say what happens when you have two different polling operations, conflicting operations, and you say,

**00:11:22**

okay, the result of these two is going to be this, and it doesn't matter in which order they are, I'm in a good path to actually making something that is going to work.

**00:11:31**

And I think that's one of the first things that I am trying to do.

**00:11:36**

Now, CRTs and spreadsheets, as I said there, is pretty much a research project at the time being.

**00:11:44**

I don't know of any spreadsheet software, like production spreadsheet software,

**00:11:51**

I don't know of any of the things that are using CRTs at the moment.

**00:11:56**

I suppose, for example, the different text editors that we have up there that use CRTs.

**00:12:06**

This is three papers that are important for me.

**00:12:09**

I think Annette is here from the first one.

**00:12:12**

As I mentioned, Julian is here from the second one.

**00:12:15**

And Bartosz is not here. This is not a paper.

**00:12:18**

It's a really nice blog post from Bartosz.

**00:12:23**

Who are you working with?

**00:12:26**

About the problems of how to use CRTs in the spreadsheets.

**00:12:34**

I just want to give you an example.

**00:12:36**

One very quick example.

**00:12:38**

If you have this operation I just mentioned.

**00:12:41**

Somebody deletes a column and somebody edits a cell in that column.

**00:12:49**

Now those two operations, if I do that, the way I was doing it ten years ago,

**00:12:54**

is whoever arrives first to the server is right.

**00:13:00**

And then if the other is conflicting, you will have to have hardware over the browser.

**00:13:04**

And that's the end of the story.

**00:13:06**

Now, we don't want that because that's not going to work offline.

**00:13:10**

That's not going to be local first, right?

**00:13:14**

Now, the path to solve this is first we need somehow to name columns and name cells.

**00:13:21**

It's not going to be column D anymore.

**00:13:23**

It's not going to be cell D3 anymore.

**00:13:26**

Because they can change when I move them.

**00:13:31**

We need something that is stable like this.

**00:13:34**

Some names.

**00:13:35**

This can be column Chandra.

**00:13:37**

And this can be the cell Surya, for example.

**00:13:40**

And then Bob deletes column Chandra.

**00:13:42**

What happens when these two things, when these two operations are in different order?

**00:13:49**

Now, in this case, what we do is we forget about the delete operation.

**00:13:55**

We just ignore the fact that we really did a column and we bring everything back.

**00:14:00**

And we can do this, and that makes the process communicate.

**00:14:05**

Now, we have this horrible thing, or certain horrible thing in this paper there.

**00:14:13**

I am in this sheet paper.

**00:14:16**

With CRDTs, they manage to make everything green, you know, optimal.

**00:14:21**

That is, you are not using data.

**00:14:24**

So, that is a fairly good outcome for CRDTs.

**00:14:30**

And, yeah, that is what I would like to build.

**00:14:33**

That is what I will be building in the next four to six months.

**00:14:38**

And, hopefully, you will have a spreadsheet engine that you can use wherever you want.

**00:14:45**

And out of the box is collaborative and novel first.

**00:14:48**

Thank you.

**00:14:49**

I like that this event, all three years, we've had both.

**00:15:02**

Look at what I've built and look at the problems I've solved.

**00:15:04**

There's also, look at what problems we're in the process of solving that are not finished yet.

**00:15:09**

And, in this case, outlining problems to be solved.

**00:15:13**

Which, I think, you tell me, is that an invitation for collaboration?

**00:15:16**

Yeah, yeah, that's definitely an invitation for collaboration.

**00:15:20**

I really very much would like to form a community around the spreadsheets.

**00:15:24**

This is done in Rust.

**00:15:26**

If somebody wants to learn Rust, if somebody wants to learn CRDTs, please talk to me.

**00:15:31**

Thank you.

**00:15:32**

All right.

**00:15:33**

One quick question for you.

**00:15:34**

You mentioned two modes, real-time collaborative and offline.

**00:15:37**

Have you explored for the sideline with a collaborative document edited by people with devices on some LAN without access to a remote server?

**00:15:46**

You can imagine that sort of, basically you would probably call this a network partition.

**00:15:50**

Me and you are offline doing things together.

**00:15:52**

We're far away from the server.

**00:15:54**

We might be connected to the server later.

**00:15:56**

Sure.

**00:15:57**

I have a simple answer.

**00:15:58**

No.

**00:15:59**

I don't know.

**00:16:00**

We haven't put a single line of code yet.

**00:16:03**

An exploration layer.

**00:16:04**

So I think everything is possible.

**00:16:07**

At this point, we're still getting in the shape of the problem, but you can see already why spreadsheets of the two-dimensional data is a different, a very different challenge problem than, for example, winter test.

**00:16:17**

Correct.

**00:16:18**

Yeah.

**00:16:19**

Wonderful.

**00:16:20**

Please a hand for Nicholas.

**00:16:28**

All right.

**00:16:29**

Up next, Hiroshi spent, what, four years at Figma building one of their sync engines there, and now has her own startup built on AT Pro.

**00:16:36**

ATProto and doing things that are malleable software.
