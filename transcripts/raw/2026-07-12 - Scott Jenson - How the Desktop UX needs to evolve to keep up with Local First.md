---
source: local-first-conf-recording
title: "How the Desktop UX needs to evolve to keep up with Local First"
date: 2026-07-12
speakers:
  - "Scott Jenson"
source_recording: "../../recordings/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1700-how-the-desktop-ux-needs-to-evolve-to-keep-up-with"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# How the Desktop UX needs to evolve to keep up with Local First

**00:00:00**

All right, we're going to round things out. Last talk of the day here, but a real pleasure to have a true industry veteran here with us. Scott Jenson has been, I think one of the few folks here at the conference here has been in technology longer than me, and has worked at some incredible companies.

**00:00:15**

I think he's worked at Apple on the Newton and human enterprise guidelines, also Google, and many others that you know, but he's given an incredible talk in the past that many people have cited to me over the years about what's next for the desktop user experience and how we can evolve that, so I'm really excited to hear kind of a part two of that here for Scott.

**00:00:43**

Can you guys hear me again?

**00:00:44**

Great. I'm really excited to be here because I think Local First represents so much of what we're thinking and wanting to do today.

**00:00:53**

I've been very lucky, as you mentioned, to be a UX designer with a lot of big companies, and it's been really exciting for me to kind of view that history, whether it was with, you know, on Apple, I've had a movie project, I've worked at Ford on the biggest Disney projects, and Google, I started off

**00:01:13**

working on, um, uh, working on, uh, uh, the, uh, fan race team and, um, uh, I think the original version of Google, uh, as a UX designer, but I learned a lot from that, and the biggest thing I learned actually was cultural, because back in 2005, we weren't equal.

**00:01:30**

And, um, we were people that just really wanted to do cool shit, we didn't care about money, and we just really wanted to do the right thing, and then around later, things got worse, and so I left, a lot of people years ago, and I'm trying to atone for my sins a little bit, um, and so now I work more, you know, with the source.

**00:01:55**

I, uh, basically, I've been mentoring for, uh, junior UX designers, I work, uh, I've been solving as a local assistant, and I, yes, I've been trying to work on a lot of these projects, and just trying to squeeze a little bit more UX in open source, because, I hope you don't mind, but open source means a lot of UX.

**00:02:11**

So, the reason I'm here is I can't even talk about when to last fall, that it's, like, for 200 people, and it was an esoteric topic about, we're going to use the same desktop UX forever, and I thought it was like nothing, and they put it up on YouTube, and it kind of went nuts, it's like, about 150 views from a half a million views,

**00:02:39**

for, you know, by YouTube standards, that's nothing, right, by, by Scott's standards, that's like crazy, and I was really shocked, and it maybe felt like I had hit a nerve, and so I've been trying to kind of follow up on this, to figure out what we could actually do about this idea, because people, I don't think, really appreciate the problem,

**00:02:57**

because the desktop UX has not changed much in 20 years, I want to mention to people, so we can go, what do you mean? It's like, it's fine. And so, the problem I'm finding is it isn't keeping up with the Local First needs, because if Local First gets what it wants, we're going to have more files, not less.

**00:03:15**

You know, of course, Local First doesn't even happen at all, I get that, but I believe that there's so many things that we need to do to kind of manage our data, to be able to control what's going on, and we don't want to just realign our four-year-old paradigm to do that.

**00:03:29**

And I really like this guy, Ellen Gopkay is one of the OG thinkers of this stuff, and he's a very inspirational guy, and I love this quote about perspective is worth, you know, 89 key points.

**00:03:40**

Same problem, you're the same person, but basically, you just see the problem a whole lot better now. I think that's actually a really important insight to have.

**00:03:49**

And so that's what this talk is about today. I want to quickly recap what the problem is, a few minutes on that, and then try to find some perspective on this problem,

**00:03:57**

so I can actually start to talk about what we want to do next. The biggest critique I got of the talk I gave at Canonical last year was I did not give that many examples.

**00:04:06**

And I did it on purpose, because we really want to make sure we understand the problem, and really get that question right, but I had a little more time, so I want to give a few more specific things.

**00:04:16**

So what is the problem? The problem is pretty simple. Out of the Microsoft, I've kind of given up, and for very good reasons, the Linux community

**00:04:25**

trailed behind you copy what they did, and that is not meant as a criticism at all. It's a very smart thing to do.

**00:04:31**

And of course, Linux did a lot of things on this, oh, it wasn't entirely on copying, I didn't want to apply that.

**00:04:37**

But for the most part, you let them make mistakes, and we come back and pick up the pieces, right? And that's a good model.

**00:04:42**

But Apple kind of made its play in 2017, right? It clearly wanted the iPad to kill Macintosh. And for those of us who were around in the mid-teens,

**00:04:55**

when Apple started, like, completely taking all the points out of Macintosh Pro, and they did that stupid keyboard.

**00:05:01**

And a lot of things went through, and then on top of all of that was this ad in 2017 that really kind of crystallized the whole thing.

**00:05:10**

There was a cute young student using her iPad, and she was going to do these really incredible fun things.

**00:05:16**

And at the very end of the day, she was flying in the grass, stepping away, and a neighbor leans over the fence, very friendly.

**00:05:22**

And she kind of goes, "What are you doing on your computer?" And she turns, just cold, totally cold, and goes, "What's a computer?"

**00:05:32**

And it really kind of solidified that Apple wanted the Macintosh to die, and it didn't.

**00:05:39**

And now they're picking up the pieces and trying to figure out what's going on.

**00:05:43**

And so Apple hasn't really done what they intended to do, is to integrate more of the iPhone, right?

**00:05:48**

The best thing is, of course, bolstering their ecosystem and tying it in.

**00:05:52**

But they haven't fundamentally changed what's on the desktop.

**00:05:55**

And the last big play is with Glass, and they don't know how well that did, right?

**00:05:58**

The last version of the OS is basically undid a whole lot of them.

**00:06:04**

And Microsoft, I'm afraid, is not much better, right?

**00:06:08**

Because they have the first one drive and edge signups.

**00:06:11**

They have Recall, which I'll go out on a little limb here.

**00:06:14**

I actually thought Recall was kind of cool.

**00:06:16**

It was just really poorly done.

**00:06:18**

And that was its problem.

**00:06:20**

And then the, you know, life disasters and the adaptation of the OS.

**00:06:23**

My one personal story was about eight years ago, I actually interviewed them.

**00:06:26**

He had a UX.

**00:06:27**

And they flew me out.

**00:06:28**

I talked about the senior VPs.

**00:06:29**

You really want to be careful to not talk about the details too much.

**00:06:33**

That's kind of not cool.

**00:06:34**

But what I will say is that if you look for a role like that, you come into the game, right?

**00:06:39**

And obviously nobody wants you to build things up.

**00:06:43**

Everybody hates change.

**00:06:45**

Of course, I want to improve the desktop.

**00:06:47**

I don't want to, like, change at all.

**00:06:50**

I'm not a monster.

**00:06:52**

But I wanted to kind of do some small things.

**00:06:55**

But I wanted to kind of add some experiments.

**00:06:57**

Try a few things.

**00:06:58**

Put behind some flags.

**00:06:59**

See if you find something good.

**00:07:01**

If you really found something valuable.

**00:07:03**

Then slowly, gently integrate it in with the thing that was the big thing.

**00:07:07**

It didn't work out.

**00:07:08**

It didn't work out.

**00:07:09**

It didn't hire you in the United States.

**00:07:10**

It's really kind of like that.

**00:07:11**

I mean, it's kind of like, I wouldn't have been happy that way.

**00:07:14**

So Microsoft is completely more interested in the status quo for this.

**00:07:17**

And so the bottom line here is that there isn't anything new coming.

**00:07:21**

And what the hell are we going to do about it?

**00:07:23**

Because we just can't copy anymore.

**00:07:25**

And I just feel like we don't feel that we're empowered to kind of do something.

**00:07:30**

Because frankly, changing the OS is a big deal.

**00:07:33**

And when I say this, I get two responses.

**00:07:35**

The first is, okay, boomer, right?

**00:07:38**

Okay, like, mobile one desktop is all getting it off the street that mobile does.

**00:07:41**

And I'm like, of course, mobile one.

**00:07:44**

I'm not going to argue with you.

**00:07:45**

Of course, mobile one.

**00:07:46**

But it won the consumers.

**00:07:47**

It didn't win productivity.

**00:07:48**

You don't see consulting houses all sitting on their desk with their phones

**00:07:51**

having their reports.

**00:07:52**

It's like, no.

**00:07:53**

Desktops are shockingly awesome.

**00:07:55**

And we don't seem to notice that.

**00:07:58**

It's huge screen.

**00:07:59**

It's lovely people.

**00:08:00**

It's a good point in there.

**00:08:05**

And going towards mobile means we're throwing away all the things that are awesome about desktop.

**00:08:10**

And I think we need to kind of appreciate what it does.

**00:08:13**

The next one is, eh, it's a standard.

**00:08:15**

It's like, don't reinvent the wheel.

**00:08:17**

This is kind of what I meant about not blowing up windows.

**00:08:20**

Of course it's a standard.

**00:08:21**

We don't want to change everything that will be annoying and freak everybody out.

**00:08:25**

But, you see, you're wrong with the standard.

**00:08:27**

BlackBerry is a standard.

**00:08:29**

Right?

**00:08:30**

We're not going to be doing the same operating system.

**00:08:33**

Can I sign?

**00:08:36**

No.

**00:08:37**

We're not going to be doing the exact same operating system 50 years from now.

**00:08:42**

Something's going to change.

**00:08:43**

Who's going to change it?

**00:08:44**

Do you want Apple or Google to change it?

**00:08:47**

No.

**00:08:48**

Thank you.

**00:08:49**

Thank you.

**00:08:50**

So, by the way, I even think that the laptop has become an ergonomic standard.

**00:08:55**

It just makes us feel like the size of the keyboard is, the type of pointer that we have,

**00:08:59**

the type of screen that we have.

**00:09:00**

There's nothing wrong with the laptop.

**00:09:02**

But it's kind of lingering, I think, what we feel is an option for the desktop.

**00:09:06**

So we have this perfect DEA here, which is desktop UX.

**00:09:09**

It's basically stopped improving.

**00:09:11**

And no one wants to do anything about it.

**00:09:14**

At least I don't think so.

**00:09:15**

I'm trying to change that.

**00:09:17**

So, the purpose of this talk then is to now talk about perspectives.

**00:09:20**

What is the insight that we need?

**00:09:22**

What should we be doing?

**00:09:24**

So, I do not want to do minority reporting.

**00:09:27**

Let's be really clear here.

**00:09:29**

I want to do a small, incremental thing that builds in what we already know and love.

**00:09:33**

Right?

**00:09:34**

And figure out what needs to change and why.

**00:09:36**

And so, let's just go back to St. L here.

**00:09:39**

And he basically has a really interesting way, I think, of phrasing these things.

**00:09:43**

He says, start off by talking about what's happening now.

**00:09:46**

Just appreciate what's going on.

**00:09:47**

Next, know your past.

**00:09:49**

There's a lot of good work that's been done, and you should make sure that you don't forget that.

**00:09:53**

So many youngsters these days don't learn the best.

**00:09:57**

I think that's a good problem.

**00:09:59**

And next is, get the questions right.

**00:10:01**

If you obsess about the answers, you're usually missed the right question.

**00:10:05**

So, what is happening right now?

**00:10:08**

I'll give you three guesses.

**00:10:13**

I did not want this talk to be about AI.

**00:10:16**

I have to talk about AI.

**00:10:18**

I'm not against AI.

**00:10:20**

It's just sucking up all the oxygen in the room.

**00:10:22**

And you can't talk about other things that are also cool.

**00:10:26**

So, I'm not anti-AI.

**00:10:34**

I'm just saying this.

**00:10:35**

Can we talk about something else?

**00:10:37**

Just for a little bit.

**00:10:38**

And so, AI is effectively ignoring the desktop.

**00:10:42**

And I think that's actually an interesting insight.

**00:10:44**

It's giving you something.

**00:10:45**

Because Google has got two projects out there that came up recently.

**00:10:48**

One's called the AI Pointer, and one's called the Shake Recursor thing.

**00:10:51**

They're very interesting.

**00:10:52**

I don't want to throw any shade in them.

**00:10:54**

They're basically trying to inject AI through the cursor.

**00:10:58**

Which is basically ignoring the desktop and saying,

**00:11:01**

"We're just going to steal something."

**00:11:03**

You know, stick it in.

**00:11:05**

And that's fine.

**00:11:07**

But on the opposite end, has anybody heard of ScreenPipe or Sanger AI?

**00:11:12**

A lot of people have not heard much about them.

**00:11:14**

But ScreenPipe is effectively an open-source version of Recall.

**00:11:18**

And Sanger AI is a similar thing.

**00:11:21**

But both of them are trying to create a memory of what's happening on your laptop.

**00:11:26**

And so then you can just say, "What did I do yesterday?"

**00:11:28**

"What did I talk to you about?"

**00:11:29**

"What should I be learning about?"

**00:11:30**

"What was that thing before?"

**00:11:31**

"Is that other thing?"

**00:11:32**

And you can talk to them about that.

**00:11:34**

And it's interesting to see what they're doing because you analyze the pain of what they're going through.

**00:11:38**

Now, what ScreenPipe does is they do this deal with the devil.

**00:11:41**

They're just abusing the accessibility of API and scraping every pixel on the screen

**00:11:47**

and recording your audio constantly to gather everything that you're doing and putting it into the database.

**00:11:53**

That's incredibly powerful.

**00:11:55**

And it has lots of stuff.

**00:11:56**

But as you can imagine, it has a few hands of it.

**00:11:59**

And I think the ScreenPipe people are good people.

**00:12:07**

They're trying really hard to solve this.

**00:12:09**

I don't want to make it sound like they're insensitive to it.

**00:12:12**

All I'm saying is they've got a radioactive pile of nuclear waste and they're just building lots of walls around it.

**00:12:18**

And if they don't put walls right, they've got an issue.

**00:12:21**

Say your AI is taking a good two-shoes approach.

**00:12:23**

They're using API keys.

**00:12:25**

But they gather so much less information.

**00:12:27**

But I don't want to dwell on them.

**00:12:29**

I kind of want to say what they're doing and how they're doing it.

**00:12:32**

Because all they want to do, for the most part, is plug into the chat box and talk to the chat box.

**00:12:37**

They're kind of completely ignoring the desktop UX entirely.

**00:12:41**

And what's interesting to me is that after this started coming out, we now have the OS companies.

**00:12:46**

Both Apple and Android and even the free desktop.

**00:12:49**

Which is why they're doing a much better job of putting their privacy.

**00:12:52**

All these things are coming out now to get context from the frontless window of the application and deliver it to the chat box.

**00:12:57**

But of course you know that Apple and Android are going to do it so they only work for their AI's and so forth.

**00:13:02**

Now, my point about saying all this is that we now seem to have this interesting continuum where Google is up here at the top.

**00:13:08**

And all the OS members are down here at the bottom.

**00:13:11**

And I'm kind of thinking that you're either above the UX or you're below the UX.

**00:13:16**

But it looks like they're definitely afraid of touching the UX at all.

**00:13:21**

And their only answer is to like, talk to the chat box.

**00:13:25**

Which is like the most boring thing you can possibly imagine to do.

**00:13:28**

So they say, well it's everything for a chat box.

**00:13:30**

And so what I found is interesting.

**00:13:32**

What does it mean to these things that actually touch real things that you're touching?

**00:13:40**

Now, what I found interesting is there's probably something interesting here, but what is it?

**00:13:44**

So when I started playing around with this, I was, people, it is just changing so fast.

**00:13:49**

But I'm not talking about the shape of what's been happening.

**00:13:53**

Because the way I remember it is we were getting pretty worried about AI last summer.

**00:13:58**

Because all people were doing was just generating stuff.

**00:14:01**

And a lot of people called coding and were like, oh, that's cool.

**00:14:04**

Because it actually revitalized.

**00:14:06**

And all of a sudden, AI can actually reduce something.

**00:14:09**

And what I was doing, of course, is looking at your file system.

**00:14:11**

Whether you were coding or people were talking about using obsidian or other things like that.

**00:14:15**

It basically flipped the problem around and said, oh, it's not necessarily entirely,

**00:14:19**

but oh, let me just put it back. Editorial comment here.

**00:14:22**

A lot of people here like these foundation levels.

**00:14:25**

I don't.

**00:14:27**

As a personal point of view, I sort of say it because I think they are ethical.

**00:14:30**

And environmental nightmares.

**00:14:38**

I appreciate your utility.

**00:14:40**

The technology has probably been proven.

**00:14:42**

But there is so much to talk about.

**00:14:44**

And so what I'm truly interested in is things like Paretix,

**00:14:47**

which is a Swiss government model, which is actually trained on ethical data.

**00:14:51**

And it is actually meant to be run locally.

**00:14:53**

So if we can do local-first AI, I'm actually much more interested in this technology.

**00:14:59**

because it can be run locally and ethically trained.

**00:15:01**

We have a lot of work to go there.

**00:15:03**

But I personally feel that three years from now, the cloud-based files are going to be in deep trouble.

**00:15:08**

Because it's actually going to be working quite well locally.

**00:15:10**

But that's a side comment.

**00:15:12**

The bottom point I'm trying to say here is that by flipping the problem around and focusing on the file system,

**00:15:16**

it was not about generation but context.

**00:15:18**

So this is the first glimmer that if you actually embrace the desktop, you can actually improve the AI itself.

**00:15:23**

I thought that was really interesting.

**00:15:24**

So we go back to this list here and there's like a clog.

**00:15:27**

It is here.

**00:15:28**

And they didn't really change much.

**00:15:30**

They just used the file system in kind of a funky way.

**00:15:32**

So let's just give them the benefit of the doubt and say, you have a few pixels of volume.

**00:15:35**

Well, what does that really mean?

**00:15:37**

Can we expand that impact?

**00:15:38**

That just seems like an interesting thing to me because what would happen if we push that down out a little further?

**00:15:44**

So what are the building blocks of desktop that you push out?

**00:15:48**

Well, we've got Windows, right?

**00:15:50**

And we've got files and folders.

**00:15:51**

And we've got the clipboard.

**00:15:52**

And there's the keyboard and the mouse, too.

**00:15:54**

And those are more for like daily input.

**00:15:55**

These are like the foundational building blocks of just direct manipulation.

**00:15:59**

How you say things, how you view things, how you edit things, how you store things, retrieve things, and new stuff.

**00:16:05**

These are like the core things.

**00:16:07**

The problem is that direct manipulation is stateless by design.

**00:16:11**

It doesn't know what you did yesterday and it doesn't know where you stored that file.

**00:16:16**

And it doesn't know that, you know, three days ago when you browse that book, say, where you found that from.

**00:16:21**

I mean, you could dig in history, but it's long and long.

**00:16:23**

And so there's this curse of direct manipulation, which is it doesn't help you remember what you've done.

**00:16:30**

And so that is the first problem.

**00:16:33**

The next issue, though, is that whenever we have people, especially in the Linux community, in general,

**00:16:38**

trying to fix the desktop, they work within each of these silos.

**00:16:42**

So there's like, what, 38 window managers on Linux?

**00:16:45**

I'm sure there's probably a dozen more I don't know about.

**00:16:48**

But there's also like finder alternatives, there's additional clipboard managers, and that's fine.

**00:16:53**

They're all good.

**00:16:54**

But they're all trying to just make a slightly better version of the replacing.

**00:16:58**

I actually think that there should be something that kind of cuts across all three of these things that addresses this issue of working memory.

**00:17:05**

So that's kind of where I'm leaning.

**00:17:07**

And so to me, it's like, okay, now if you want to push this dot out, how do we manipulate or improve the desktop UX to help working memory?

**00:17:16**

At least that's the perspective shift that I've gone through that makes me feel kind of excited.

**00:17:20**

So, and by the way, I'm all about fixing this for people.

**00:17:24**

This is the people-first issue.

**00:17:25**

And by the way, if you do it right, the AI can come along to the right.

**00:17:28**

They're welcome.

**00:17:29**

I mean, they're second.

**00:17:30**

They're welcome.

**00:17:31**

They're welcome.

**00:17:32**

So, now, the next point that they talk about is to know your past.

**00:17:36**

And so there was this great paper from the '90s.

**00:17:38**

If you haven't read about this, this is a seminal paper called Lifescream.

**00:17:42**

So it talked about storing all of your documents and kind of this timeline so you knew what you worked on during the day.

**00:17:47**

And they found this really surprising thing.

**00:17:49**

Because it wasn't that amazing a thing.

**00:17:52**

It was what you worked on.

**00:17:53**

But by having that structure, you gave people this scaffolding.

**00:17:58**

It was all right.

**00:17:59**

When I was working on that, it's like right before I went to the meeting.

**00:18:01**

Or actually, I had lunch after that one.

**00:18:03**

It gave you something to bridge your memories.

**00:18:06**

All of a sudden, you remembered all sorts of other stuff.

**00:18:08**

So by giving the user a little bit of a structure, it unlocked even more memories.

**00:18:13**

And that unlocked things like WinFS, which is called some really exciting digital relational database.

**00:18:18**

Because now a file wasn't just as content.

**00:18:20**

It's like this file is downloaded from that application.

**00:18:23**

It has these three editors.

**00:18:24**

It contains this metadata.

**00:18:26**

And it gave you a much richer story.

**00:18:28**

It gave you a working memory about what this file was about.

**00:18:31**

And of course, I don't know if anybody remembers who knows Zeitgeist.

**00:18:36**

There's also a cool product.

**00:18:40**

But it also, now all three of these failed.

**00:18:42**

And if you're wrong about it, you say, well, they failed for good reasons.

**00:18:45**

It's like, no.

**00:18:46**

Most of them failed because the hardware was set up to the task.

**00:18:49**

And you could argue there was also some privacy issues.

**00:18:51**

So I don't want to say, I don't oversimplify.

**00:18:53**

But my point is, I think it's time to revisit these things because we have to know about privacy better.

**00:18:58**

We have much better hardware.

**00:18:59**

And we can start to expand what these meant.

**00:19:02**

So finally, the last question is, get the questions right.

**00:19:06**

So for me, I always start with questions, not because they represent everything I should be doing, but they're like my entry point.

**00:19:14**

Where am I starting?

**00:19:16**

A lot of people get a little freaked out when they find out that the original Macintosh can actually fit inside an iPad mini screen.

**00:19:26**

It really was that small.

**00:19:28**

I worked on that, and people don't appreciate it.

**00:19:30**

That's really 9 inches.

**00:19:31**

It's really tiny.

**00:19:32**

And that was what motivated the menu system.

**00:19:35**

Guess what?

**00:19:36**

They overlapped a lot because they had no choice.

**00:19:39**

And so I think the first question I would ask is, how can we abuse large monitors?

**00:19:44**

Explore what large monitors could do to make Windows spatially aware.

**00:19:48**

It may not work in a laptop.

**00:19:50**

I don't care.

**00:19:51**

I just want to see what we can do and see that unlock some of the interesting.

**00:19:54**

The next one is, can we tightly integrate the clipboard files in Windows to manage your messy work in progress?

**00:20:00**

And the last one is, how can we capture the user intent at a time?

**00:20:03**

So these are the three questions I'd like to play with and start to meet these prototypes.

**00:20:08**

So, oh, sorry, one more thing I have to say.

**00:20:11**

I want to, this quote from God on the community is really important.

**00:20:15**

But premature optimization is the root of all evil.

**00:20:17**

My rule here is to not convince you that my prototypes are good.

**00:20:24**

I want you to disagree with my prototypes.

**00:20:26**

That's fine.

**00:20:27**

I'm testing a hypothesis.

**00:20:29**

Are these questions interested?

**00:20:31**

Are we on the coverings of them interested?

**00:20:33**

So if you don't like the prototypes, please let me know.

**00:20:35**

I'm happy to talk about it.

**00:20:36**

But what does it mean for the question?

**00:20:38**

Should I be asking a different question?

**00:20:40**

So in that spirit, let's go explore.

**00:20:44**

So, what I'm trying to do right now is to simulate an ultra-wide screen.

**00:20:50**

And what's funny about an ultra-wide screen is it shows you just what a stupid experience this is.

**00:20:57**

Right?

**00:20:58**

Because, you know, Appalachians are over here.

**00:21:00**

It's just, it's a ridiculous kind of place to be.

**00:21:03**

And the first thing I would do is to say, let's just take the main orange screen so it's a little bit closer.

**00:21:09**

Now, it's still 50% of the screen, but this is the screen you actually can work on.

**00:21:12**

I don't know if you guys have worked on the ultra-wide display, but if you put a window on this side,

**00:21:17**

you've got to go visit my chiropractor if you do it for a little while.

**00:21:20**

It's not good for you to work there.

**00:21:22**

So, well, how can we unlock that space a little bit?

**00:21:25**

So the second thing I want to do is to put in a background pattern which actually morphs the size a little bit.

**00:21:32**

So that we have this kind of perspective for it.

**00:21:35**

I'm not suggesting that this is for all users from the screen to show you guys this stuff.

**00:21:39**

And then I'll just bring these windows.

**00:21:41**

Because what isn't happening today is that we tend to do things like expose.

**00:21:47**

Which kind of looks cool when you have five.

**00:21:49**

But only double the windows.

**00:21:50**

And now we have ten.

**00:21:51**

And this turns into this XY Cartesian search thing.

**00:21:54**

Expose breaks down quite quickly.

**00:21:56**

And my biggest issue with expose is that it's a mode.

**00:21:59**

These windows are actually useful at this size in some cases.

**00:22:02**

I like to release them.

**00:22:03**

I can't.

**00:22:04**

Because it's very temporary.

**00:22:05**

So, what I'd like to do is to have something that kind of blends expose, window management,

**00:22:11**

there's an even idea of rigid management over there.

**00:22:14**

And by the way, I'm not a really fan of virtual desktops either.

**00:22:17**

Ritual desktops are great for people who are very organized and very smart.

**00:22:21**

But they're not good for normal people.

**00:22:22**

And a lot of people do not have their lives divvied up in these things very easily.

**00:22:31**

So I want something a little bit more organic.

**00:22:33**

A little bit more messy.

**00:22:34**

So let's take my window and drag it.

**00:22:36**

So now that I drag it off to the side, it basically starts to scale proportional to this thing.

**00:22:40**

And eventually I can park the window off to the side.

**00:22:42**

That's fine.

**00:22:43**

That's not terribly exciting.

**00:22:44**

And by the way, for those of you who really want to play with stuff, yes, I've played around.

**00:22:50**

And it was fun, right?

**00:22:54**

But it wasn't legible.

**00:22:56**

And so I basically said, okay, let's just keep it legible.

**00:22:59**

But now what we do is I have effectively this parking spot over here.

**00:23:03**

I have this kind of stacked one side where I have my windows.

**00:23:06**

So now my table, you know what?

**00:23:07**

I just shake it, windows off the side.

**00:23:09**

And now I basically have my windows off the side and I can kind of play with it.

**00:23:13**

But here's the thing.

**00:23:14**

It's not just expose.

**00:23:15**

It's actually a full window manager.

**00:23:17**

So if I go over here, I can still click on icons.

**00:23:19**

I can still drag icons and use my windows.

**00:23:21**

I can still go to my music player.

**00:23:22**

I can play the music.

**00:23:24**

But I also want to then take a trick from effectively responsive web design.

**00:23:29**

And if I drag this off to the side, it can actually reformat and turn it into a button.

**00:23:35**

So then I can actually then be able to play and pause this and even know it's really been fun.

**00:23:40**

My understanding is that Whalen can do all of this today.

**00:23:46**

This is not rocket science.

**00:23:48**

And the other issue is if I want to reset this and bring up all the windows.

**00:23:52**

If I were to do effectively a shape and say a lot of windows, it degrades fairly nicely.

**00:23:57**

And you can actually get a lot more.

**00:23:58**

So I would argue that with a messy organic version like this, you don't need virtual dust tops as much.

**00:24:04**

But I wouldn't ever say I can do them.

**00:24:06**

What I'm just saying is I want something that kind of floats over there.

**00:24:09**

So this is my first idea.

**00:24:10**

Just to have something that can advantage of the space and play around with it.

**00:24:14**

I only have a few minutes, so I'm going to rush through.

**00:24:17**

I'm happy, by the way, to talk to people about these after this.

**00:24:20**

The next one is to say, well, given a document, how do we not have a document just by itself?

**00:24:26**

And I feel like I just want to steal what effectively I'm seeing a bit of.

**00:24:31**

We just have this thing on the side which allows me to cache various things.

**00:24:35**

And the idea here is that -- sorry, I'm bored.

**00:24:41**

I basically want to say -- let's say I want to take some text.

**00:24:44**

And I don't want to work on this right now.

**00:24:46**

So what I want to do is basically drag this over here to the side.

**00:24:49**

And now it's gone, but it's not forgotten.

**00:24:51**

It's actually saved.

**00:24:52**

So now it's not only a clipboard history, it's a clipboard file.

**00:24:55**

And more than that, it's associated with this document.

**00:24:58**

So I can now start to copy and paste things that are going to stick around.

**00:25:01**

And so if I have other things in the system, like say this is a budget recorder, I can drag this in.

**00:25:07**

And the idea here is that it's not just a viewer, I can actually edit this stuff.

**00:25:11**

So people that are working on local first apps, we now have a harness to edit all of my files in a related space.

**00:25:17**

So I can edit them all.

**00:25:19**

And if I wanted to say, here's a browser, I want to grab this hotel, bring it over.

**00:25:23**

And as a shortcut another, copy format goes in.

**00:25:26**

So what we're doing here is I'm now just collecting a bunch of stuff.

**00:25:30**

And then if I end up closing this file, right, it now comes back to open it up the next day.

**00:25:35**

I don't have to hunt stuff down.

**00:25:36**

It's just all there.

**00:25:38**

It's really handy.

**00:25:39**

Because now I'm not really doing a clipboard manager.

**00:25:41**

I'm not really doing a file manager.

**00:25:43**

And in fact, by the way, I can even do like a two-up view.

**00:25:46**

So I actually have two files at once.

**00:25:48**

I'm now versioning on what virtual desktops do a little bit.

**00:25:51**

And it's just basically taking all my stuff and just bringing it together.

**00:25:55**

And now the other advantage that we have with this is that we are now going to steal effectively what Quad Code did.

**00:26:01**

Because I now have a local context.

**00:26:03**

So the local context, if you look at that, you can say, oh look, we've got four hotels here.

**00:26:07**

Why don't I just group them for you?

**00:26:09**

And if I then click on this, I can, and all of that is a little lazy here.

**00:26:13**

It's like a map, this, or map these.

**00:26:17**

And you know what?

**00:26:18**

Take them and then actually create a map of all those hotels, which I can then drag into my document.

**00:26:22**

So I now actually have a history of my stuff, a playground that the local LN do stuff with.

**00:26:30**

And I think it just fundamentally changes how I'm organizing my stuff.

**00:26:34**

So this is a small little thing that I think would be also helpful.

**00:26:37**

It does change the fact that you have multiple apps running in a single frame.

**00:26:43**

But I think it's an interesting thing to play.

**00:26:45**

Now the final thing I want to do is to revisit telemetry.

**00:26:48**

Because telemetry is a dangerous word.

**00:26:50**

It has a lot of privacy issues.

**00:26:51**

And so I created some telemetry when I browsed 50 websites for e-bikes.

**00:26:56**

And when you go to the browser, it shows you, here's the 50 web pages that you might need to import.

**00:27:02**

And some browsers will try to show you like a tree, which is a little bit better.

**00:27:06**

But it's just too much information.

**00:27:08**

So what I did was I just captured some simple telemetry.

**00:27:10**

They just had the URL and the title.

**00:27:12**

But I would call very weak signals.

**00:27:14**

How much, how far did I scroll on the page?

**00:27:16**

How much was I on the page?

**00:27:18**

Did I have a quick word event?

**00:27:19**

I didn't copy the text.

**00:27:21**

I just said did you do a copy or paste?

**00:27:23**

These are very unique, perfect symbols.

**00:27:25**

But to gather them enough, you can start to do something very interesting.

**00:27:28**

And just say, I'll take this preview, which is like 50 notes, and say, you know what?

**00:27:32**

These are 700 words.

**00:27:34**

And you know what?

**00:27:35**

I might be wrong because these are pretty weak signals.

**00:27:38**

But because what we can do is provide a way to browse it, I can be opinionated and allow the user to explore it.

**00:27:45**

So here's the Google search idea.

**00:27:46**

Here's all the web pages.

**00:27:47**

Useful for you to import.

**00:27:48**

And then useful for you to import.

**00:27:49**

And then useful for you to get all the time on.

**00:27:51**

And I copy and paste it from there, and I need this key factor.

**00:27:54**

I am not suggesting this is a UX for users.

**00:27:57**

I was just playing around with telemetry, dummy telemetry, to see if I could reduce 50 things down to 7 things.

**00:28:04**

And I didn't even use an L1 ever.

**00:28:05**

This is like a simple little math thing.

**00:28:07**

And so I feel like there's something here.

**00:28:10**

And so what I would like to do is to basically go back to the live streams and fix something more like this.

**00:28:14**

Which is to say, here's my morning.

**00:28:17**

This is what I did.

**00:28:18**

The higher the bar, the wider it is, the more important it is.

**00:28:21**

So eventually I opened up these documents.

**00:28:23**

I've got something interesting.

**00:28:24**

I went to the web browser.

**00:28:25**

I found it.

**00:28:26**

I paste it into here.

**00:28:27**

So I have this timeline of stuff.

**00:28:30**

But over here is effectively a collapsed version, which the system is aggressively compressing
