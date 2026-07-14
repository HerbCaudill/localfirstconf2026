---
source: local-first-conf-recording
title: "How the Desktop UX needs to evolve to keep up with Local First"
date: 2026-07-12
speakers:
  - "Scott Jenson"
source_recording: "../../recordings/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1700-how-the-desktop-ux-needs-to-evolve-to-keep-up-with"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Scott Jenson - How the Desktop UX needs to evolve to keep up with Local First.md"
---

**MC:** We're going to round things out with the last talk of the day. It's a real pleasure to have a true industry veteran with us. Scott Jenson is one of the few people at this conference who has been in technology longer than me and has worked at some incredible companies. He worked at Apple on the Newton and Human Interface Guidelines, as well as at Google and many other companies you know. He gave an incredible talk in the past that many people have cited to me over the years about what's next for the desktop user experience and how we can evolve it, so I'm excited to hear a kind of part two. Here's Scott.

**Presenter:** Can you hear me? Great. I'm excited to be here because local-first represents so much of what we're thinking about and want to do today.

I've been very lucky to be a UX designer with many big companies. It's been exciting for me to view that history, whether it was at Apple, [unclear], Ford, Disney, or Google. I started off working on [unclear] and the original version of [unclear] as a UX designer. I learned a lot, and the biggest thing I learned was cultural. Back in 2005, we weren't evil. We were people who wanted to do cool shit. We didn't care about money; we wanted to do the right thing. Later, things got worse, so I left many years ago and am trying to atone for my sins a little.

Now I work more with open source. I mentor junior UX designers, I've been [unclear] as a local assistant, and I've been trying to work on many of these projects and squeeze a little more UX into open source. I hope you don't mind, but open source needs a lot of UX.

The reason I'm here is that I gave a talk last fall for about 200 people. It was an esoteric topic: are we going to use the same desktop UX forever? I thought it was nothing. They put it on YouTube and it went nuts, going from about 150 views to half a million. By YouTube standards that's nothing; by Scott standards, that's crazy. I was shocked, and it felt like I'd hit a nerve.

I've been trying to follow up and figure out what we can do about this idea, because people don't appreciate the problem. Desktop UX has not changed much in 20 years. When I mention that, people say, “What do you mean? It's fine.” But it isn't keeping up with local-first needs. If local-first gets what it wants, we're going to have more files, not fewer. Of course, local-first doesn't have to happen at all; I get that. But there are many things we need to do to manage our data and control what's going on, and we don't want to rely on our 40-year-old paradigm to do it.

I really like Alan Kay, one of the original thinkers in this field and a very inspirational guy. I love his quote that a point of view is worth 80 IQ points. It's the same problem and you're the same person, but you see the problem much better. That's an important insight.

That's what this talk is about. I want to recap the problem quickly, then find some perspective so I can talk about what to do next. The biggest critique of my earlier talk was that I didn't give many examples. I did that on purpose, because I wanted to make sure we understood the problem and got the question right. But I have more time now, so I want to give some specifics.

The problem is simple. Microsoft has kind of given up. For good reasons, the Linux community trailed behind and copied what the big desktop companies did. That's not meant as criticism; it's smart to let them make mistakes and then pick up the pieces. Linux has done many innovative things too, so I don't mean it was entirely copying.

Apple made its play in 2017. It clearly wanted the iPad to kill the Macintosh. Those of us who were around in the mid-2010s saw Apple taking ports out of the MacBook Pro, making that stupid keyboard, and doing many other things. Then an ad crystallized it. A cute young student used an iPad to do incredible, fun things. At the end, she's lying in the grass and a neighbor asks what she's doing on her computer. She turns, completely cold, and says, “What's a computer?”

It solidified that Apple wanted the Macintosh to die, and it didn't. Now they're picking up the pieces. Apple has integrated more of the iPhone, bolstering and tying together its ecosystem, but it hasn't fundamentally changed what's on the desktop. The last big play was with Glass, and we know how well that did; the latest version of the OS undid a lot of it.

Microsoft isn't much better. There are forced OneDrive and Edge sign-ups. There's Recall, which I'll go out on a limb and say I thought was kind of cool; it was just really poorly done. Then there are [unclear] disasters and advertising in the OS.

About eight years ago, I interviewed there to head UX. They flew me out and I talked with senior vice presidents. I want to be careful not to talk about details, because that's not cool. But when you look for a role like that, you come into an existing game. Nobody wants you to blow things up; everybody hates change. Of course, I wanted to improve the desktop, not change everything. I'm not a monster. I wanted to try small experiments behind flags, see if anything was good, and then slowly and gently integrate what proved valuable. It didn't work out; they didn't hire me, and I wouldn't have been happy that way.

Microsoft is much more interested in the status quo. The bottom line is that nothing new is coming. What are we going to do about it? We can't just copy anymore, and we don't feel empowered to do something because changing the OS is a big deal.

When I say this, I get two responses. The first is, “Okay, boomer. Mobile won; the desktop is walking off into the sunset.” Of course mobile won. It won consumers, but it didn't win productivity. You don't see consulting firms with everyone at their desks writing reports on phones. Desktops are shockingly awesome, and we don't seem to notice. They have huge screens, keyboards, and good pointers. Going toward mobile means throwing away everything awesome about the desktop. We need to appreciate what it does.

The second response is that the desktop is a standard and we shouldn't reinvent the wheel. That's what I mean about not blowing up windows. Of course it's a standard. Changing everything would be annoying and freak everybody out. But standards can be wrong: BlackBerry was a standard. We will not be using exactly the same operating system 50 years from now. Something will change. Who is going to change it? Do you want Apple or Google to change it? No, thank you.

I even think the laptop has become an ergonomic standard: the keyboard size, the type of pointer, and the screen. There's nothing wrong with the laptop. But it limits what we feel is possible for the desktop. We have a perfect dilemma: desktop UX has stopped improving and no one wants to do anything about it. At least, I don't think so. I'm trying to change that.

The purpose of this talk is to discuss perspectives. What's the insight we need? What should we do? I do not want to do Minority Report. I want small, incremental changes that build on what we already know and love, figuring out what needs to change and why.

Alan Kay has an interesting way of phrasing this. Start by asking what's happening now and appreciate it. Next, know your past; a lot of good work has been done, and you shouldn't forget it. Many young people don't learn the past, and I think that's a problem. Finally, get the questions right. If you obsess about answers, you usually miss the right question.

What's happening now? I'll give you three guesses. I did not want this talk to be about AI, but I have to talk about AI. I'm not against AI; it's just sucking all the oxygen out of the room and making it impossible to talk about other cool things. Can we talk about something else, just for a little bit?

AI is effectively ignoring the desktop. Google has two recent projects, one called the AI Pointer and another called [unclear]. They're interesting, and I don't want to throw shade at them. They're trying to inject AI through the cursor, which means ignoring the desktop and sticking something into it. That's fine.

At the opposite end, has anybody heard of Screenpipe or [unclear] AI? Screenpipe is effectively an open-source version of Recall, and [unclear] AI does something similar. Both try to create a memory of what happens on your laptop, so you can ask what you did yesterday, what you talked about, what you should be learning, or what that thing was before.

It's interesting to analyze the pain they go through. Screenpipe makes a deal with the devil: it abuses the accessibility API, scrapes every pixel on the screen, and records audio constantly, gathering everything you do into a database. That's incredibly powerful, but it has downsides. I think the Screenpipe people are good people trying hard to solve this; I'm not saying they're insensitive. I'm saying they have a radioactive pile of nuclear waste and are building walls around it. If they don't build those walls correctly, they have an issue.

[Unclear] AI takes a more goody-two-shoes approach by using APIs, but gathers much less information. I don't want to dwell on the products; I want to look at what and how they do it. For the most part, all they want is to plug the information into a chat box and let you talk to it. They completely ignore desktop UX.

The OS companies—Apple, Android, and even the free desktops, which are doing a better job on privacy—are now exposing context from the frontmost application window to a chat box. Of course, Apple and Android will make it work only for their own AIs. We seem to have a continuum where some projects sit above the UX and OS integrations sit below it. They are all afraid to touch the UX itself, and their only answer is to talk to a chat box, the most boring thing imaginable. What would it mean for these systems to touch the real things you're touching?

Something interesting may be here, but what? This field is changing very fast, but I'm talking about the shape of what's happening. Last summer, people were worried because AI mostly generated stuff. Then people saw coding and thought it was cool because it could be useful and produce something. Coding agents looked at your file system. Whether you were coding or using Obsidian, this flipped the problem around.

An editorial comment: many people here like foundation models. I don't. As a personal point of view, I think they are ethical and environmental nightmares. I appreciate their utility; the technology has probably been proven, but there's much to discuss. I'm more interested in things like Apertus, a Swiss government model trained on ethical data and meant to run locally. If we can do local-first AI, I'm much more interested. We have a lot of work to do, but I personally feel that three years from now cloud-based models will be in deep trouble because local models will work quite well.

The main point is that focusing on the file system made AI about context, not generation. That's the first glimmer that embracing the desktop can improve AI itself. Coding agents didn't change much; they just used the file system in an unusual way. Let's say that gives us a few pixels of movement. What does it mean, and can we expand its impact?

What are the desktop building blocks we can push on? We have windows, files and folders, and the clipboard. We also have the keyboard and mouse for daily input. The first three are foundational elements of direct manipulation: how you view, edit, store, retrieve, and move things.

The problem is that direct manipulation is stateless by design. It doesn't know what you did yesterday, where you stored a file, or where you found a book you browsed three days ago. You could dig through history, but it's long and laborious. That's the curse of direct manipulation: it doesn't help you remember what you've done.

When people, especially in the Linux community, try to fix the desktop, they work within these silos. There are perhaps 38 Linux window managers, along with Finder alternatives and clipboard managers. They're all good, but each tries to make a slightly better version of what it replaces. I think something should cut across all three and address working memory.

That's the perspective shift that excites me: how can we manipulate or improve desktop UX to help working memory? I'm all about fixing this for people. It's a people-first issue. If we do it right, AI can come along too. It's welcome, but it's second.

Next, know your past. There was a seminal paper from the 1990s called Lifestreams. It proposed storing all your documents in a timeline so you knew what you'd worked on during the day. Researchers found something surprising. The timeline itself wasn't amazing, but it provided scaffolding: “I worked on that right before I went to the meeting,” or, “I had lunch after that.” A little structure bridged your memories and unlocked much more.

That led to things like WinFS, an exciting relational file system. A file wasn't only its contents: it had been downloaded from an application, had these three editors, and contained this metadata. It gave you a richer story and working memory about the file. There was also Zeitgeist. All three failed. You could say they failed for good reasons, but much of it was because the hardware wasn't up to the task. There were privacy issues too, and I don't want to oversimplify. But it's time to revisit them because we understand privacy better, have much better hardware, and can expand on what they meant.

Finally, get the questions right. Questions don't represent everything I should do, but they're my entry point.

People are surprised that the original Macintosh screen can fit inside an iPad mini. It really was that small—nine inches. I worked on it, and people don't appreciate that. Its size motivated the menu system. Windows overlapped because they had no choice. My first question is: how can we abuse large monitors? Explore what large monitors could do to make windows spatially aware. It may not work on a laptop. I don't care; I want to see what it unlocks.

The second question is: can we tightly integrate the clipboard, files, and windows to manage messy work in progress? The third is: how can we capture user intent over time? These are the questions I want to play with in prototypes.

One more thing: Donald Knuth's quote that premature optimization is the root of all evil is important. My goal is not to convince you that my prototypes are good. You can disagree with them. I'm testing a hypothesis: are these questions interesting, and are the conversations around them interesting? If you dislike a prototype, tell me, but ask what that means for the question. Should I ask a different one?

The first prototype simulates an ultrawide screen. An ultrawide reveals how stupid the current experience is: applications are all over the place. I shrink the main orange area so it's closer. It's still 50 percent of the screen, but it's the area where you can actually work. If you put a window at the far side of an ultrawide and work there for a while, you'll need my chiropractor.

How can we unlock that extra space? I add a background pattern that changes size to create perspective. I'm not suggesting this exact presentation for users; it helps demonstrate the idea. Exposé looks cool with five windows, but double that to ten and it becomes an XY Cartesian search problem. It breaks down quickly. My biggest issue is that Exposé is a mode. Some windows remain useful at that small size, but I can't leave them there because the view is temporary.

I'd like to blend Exposé, window management, and perhaps rigid management, while avoiding an overreliance on virtual desktops. Virtual desktops are great for highly organized people, but many normal people don't divide their lives into neat spaces. I want something more organic and messy.

When I drag a window toward the side, it scales according to the perspective and can be parked there. It remains legible. This creates a parking area where windows stack at one side. I can shake a window off to the side, but unlike Exposé, this remains a full window manager: I can click and drag icons inside the window or use a music player's controls.

Borrowing from responsive web design, a window dragged farther to the side can reformat. A music player may turn into a button that still lets me play and pause. My understanding is that Wayland can do all of this today; it's not rocket science. If I bring up many windows, the layout degrades fairly nicely. An organic model like this may reduce the need for virtual desktops, though I wouldn't remove them. This is my first idea: use the available space and play with it.

The second prototype asks how to keep a document from existing by itself. I want a space at its side that caches related things. Suppose I select some text that I don't want to work on right now and drag it to the side. It's gone, but not forgotten; it's saved. This is not merely clipboard history but a clipboard file, and it's associated with the document. I can copy and paste things that persist.

If another item is a budget record, I can drag it in. This isn't just a viewer; I can edit it. Local-first applications now have a harness for editing related files in a shared space. I can bring in a hotel from a browser, with another copy format representing it. I'm collecting material. When I close the file and reopen it the next day, I don't have to hunt anything down; it's all there.

This isn't quite a clipboard manager or a file manager. I can even create a two-up view with two files at once, encroaching a little on what virtual desktops do. It brings my stuff together. We can then borrow what Claude Code did, because I have local context. The system can notice four hotels and offer to group or map them. It can create a map that I drag into the document. I now have a history of my material and a playground where a local LLM can work. That fundamentally changes how I organize things. It's a small addition that requires multiple applications to run in one frame, but it's interesting to explore.

The final prototype revisits telemetry, a dangerous word with many privacy issues. I generated telemetry while browsing 50 websites for e-bikes. Browser history shows 50 pages; some browsers show a tree, which is a little better, but it's still too much information.

I captured only simple telemetry: URL and title, plus weak signals such as how far I scrolled, how long I stayed, and whether a copy event occurred. I did not record the copied text, only that I copied or pasted. These are imperfect signals, but gathered together they can do something interesting. The prototype reduces the 50 items to seven likely winners. It may be wrong because the signals are weak, but if it provides a way to browse the result, it can be opinionated while letting the user explore.

It shows the original Google search, all the pages, pages likely to be unimportant, pages likely to be important, and pages where I spent time or copied and pasted. I am not suggesting this exact UX for users. I was playing with dummy telemetry to see whether I could reduce 50 things to seven. I didn't even use an LLM; it was simple math.

I feel there's something here. I'd like to go back to Lifestreams and build something like this: here's my morning and what I did. The higher and wider a bar is, the more important it is. Eventually, I opened these documents, found something interesting in a web browser, and pasted it here. I have a timeline of material. Over here is a collapsed version that the system is aggressively compressing—
