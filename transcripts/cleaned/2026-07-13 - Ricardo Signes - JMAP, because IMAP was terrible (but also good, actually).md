---
source: local-first-conf-recording
title: "JMAP, because IMAP was terrible (but also good, actually)"
date: 2026-07-13
speakers:
  - "Ricardo Signes"
source_recording: "../../recordings/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1000-jmap-because-imap-was-terrible-but-also-good-actua"
source_transcript: "../raw/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** We made it to IMAP. It's terrible, but actually it has something going for it, so I'm going to look at both sides of this.

I work at Fastmail. Fastmail is a company that makes email, calendar, and contact software, and its web interface is terrific. We are based in Melbourne, Australia, but we also have an office in Philadelphia, which is where I work. We love email.

I've been in the email business for 21 years this year. I couldn't be happier; I really like it. But it's email for 20 years. I write most of my code in Perl 5, and sometimes in C, so I always worry that I'm going to give a technical talk, especially here where everyone's talking about cutting-edge new, exciting things, and the reaction will be, “Hey, everybody, look. This old man is talking, and he's got a slide from 4.3!”

I thought I would come in and talk about something really exciting. I want to talk about the future: how do all these new technologies let us set up the real future? How do you send email to Mars? This is a real problem. I was really excited, started to think about it, made a diagram, and was happy with it.

Then I read the CFP guidance and got totally nerd-sniped. First by these blobs, which I just moved around for four hours. Then this thing: Adam is called out correctly, but here in the CFP, “the OG of social media: Facebook, Twitter, Instagram.” No. This is not okay. The original social network is electronic mail.

I love this image. It's from an advert in the 1980s explaining that electronic mail is just like mail. You've got an office, an in tray, and an out tray. Sometimes the intern comes, brings your mail to the in tray, takes the mail from the out tray, puts it in the post office, and magic happens. After you've read the mail, you either throw it away or put it in your filing cabinet. Electronic mail is exactly the same thing. Your mail comes in, the little interns from the post office put it in your inbox, you read it, and put it in your filing cabinet.

When you're sending mail out, most people use something called SMTP submission. When you used to get your mail, you'd get it over something called the Post Office Protocol. There are protocols before this that I would love to talk about, but I won't.

POP was terrible. What happened with POP was the least local-first thing—or maybe it was only local. Once you got your mail with POP, it was on your computer, and that was it. You couldn't have it anywhere else. That was fine when your only computer was in your university office in 1982.

IMAP was meant to fix that. It lets you access your mail from wherever you are. The model people often have is that even when you're not in your office, you can access your mail. For most people who just want to install some mail software and read their mail, that's fine. It gets the job done: it's better because I can still read my mail while I'm somewhere else. But in this room, it's a terrible model and has to be corrected.

What really happens when you're using IMAP is that you've duplicated your office onto your phone and laptop. You have all that information with you; you're not just talking to something else. There is a source of truth: the server acts as the arbiter of what will be replicated everywhere else. But you have a complete offline cache containing all your information, and you operate on it locally. IMAP is the synchronization and cache-management protocol.

This isn't just going to be your home computer. Maybe you've got several: your office computer, home computer, and cool little BlackBerry. These are all replicas of your data that you can work with locally, and IMAP is the protocol that keeps them synchronized. It's great.

You can look at some of the principles behind making a good email protocol in 1986, when IMAP was made. Your work is always right where you want it, already on your computer. It's not trapped on one device. You don't need the network and can work on an airplane. There's seamless collaboration with your colleagues—that's what email is; you send them an email. That's the only collaboration you need. The long now: I said yesterday that email is a Cold War technology, so it has pretty good legs. Security and privacy by default are complicated topics we can talk about later. And you maintain control of your data: you've got full replicas anywhere you want and can take them with you.

Now you're probably thinking, “You're right. IMAP is perfect. It gives us everything we want.” Unfortunately, that's also not true.

IMAP is the Internet Message Access Protocol, created in 1986. We haven't gotten rid of it yet, but we're working really hard. Here's a simple bit of IMAP. I love to dunk on IMAP, but I'm going to try to keep it short. We see the server in white and the client in yellow. We connect to the server, it says hi, we log in, and then start looking at our mail.

Some things to note: this little asterisk means the server sent you a message even though you didn't ask for it. That `A001`: you have to put something in front of every command you issue so the server can echo it back and tell you which command it's responding to. This is a list of stuff. This is a response code in square brackets. You don't need to know what they are, but to speak this protocol, you've already built a tokenizer, lexer, and parser for a grammar that was specified poorly in 1986 and extended for the past 40 years.

It's a complicated, painful endeavor, and anything we can do to simplify it is a kindness, because it sits on top of email documents, which are already complicated.

Let's keep going with our conversation. I'm going to tell the server that we want to get some mail. We say `FETCH 12 FULL`. Twelve is the message number—every message has a number—and I want the full details. You get back this response, and then it says it's done. The response tells you that you're fetching message 12 and what message 12 is. There are some flags, and then this thing, the envelope.

The envelope is all positional. If you're parsing it and want to know the Reply-To so you can construct a reply, you pull out the envelope, read the fourth left parenthesis, and start there. Or you pull it into an array in memory. These aren't the worst problems in the world, but when you start from these problems, everything else is harder. And these aren't really the biggest problems we have to deal with.

Here's how the body is specified: another nasty little instruction. IMAP was designed by somebody who really liked Lisp, which is not a sin. When we fetch the body, we say, “I want to get the header of this message.” The server responds, “Okay, get ready. Here come 342 bytes.” At that point, you switch out of line-oriented protocol mode and read 342 bytes. Then you're ready for the rest of the response, and it says, “Oh yeah, end parenthesis.” How many implementations have gotten this wrong? All of them. There's also a version where you put a plus inside the braces. Ask me later.

Then it says the fetch is done. Now that I've read this message, I want to delete it. How do you delete it? You say to store a new `Deleted` flag on the message. Here, you said, “Fetch the message.” It says, “Now you fetch the message; fetch complete.” You say, “Store this flag,” and it says `FETCH`.

This response is the most interesting thing in IMAP, and it's how you understand the whole damn thing. You told it you wanted to store a flag, and it tells you you're getting a fetch response. What's up?

IMAP is a cache-management and synchronization protocol. The whole thing is about making sure you have the correct set of data. Connected over the internet are your client—the cache—and the server—the source of truth. The client can say, “I want to know about this message. I want to update this message. I want to delete this message.” In response to anything you've asked for, the server tells you how to update your cache.

For example, if you want to work with the inbox, you say `SELECT INBOX`. The server says, “172 messages exist, and here are the flags they may or may not have.” That means: here's how to initialize your local cache. You say you want to see this mail, and it says, “Great, fetch, fetch, fetch; update those things in your cache.” When you say, “I want to mark this message as read,” you tell it to store that, and it says, “Update your cache. It worked. Change your locally stored data to reflect the new state you caused on the system.” Everything in IMAP works that way.

Another communication with the server is search. You say, “I want to search my mail,” send a little search, and get back a list of message IDs. You say, “I want to search for flagged mail from Rik.” It says, “You found messages 284 and 82. Search complete.” Then you say, “Now I'd like those messages.”

It works that way because, if you already have all those messages cached, why would it send you the whole body? A good thing about being written in 1986 is that they weren't messing around with bandwidth. Here's the answer. If you don't have those messages yet, you can fetch them—or maybe you don't need to.

The last IMAP interaction I'll show begins with `SELECT`, which means you want to work on one mailbox. One of the things I'm not going to talk about is that IMAP stinks because you're always working on one mailbox at a time. Ask me later; I'll rant about it for you.

You select the inbox, then say, “I want to perform a quick resync from position 123. The last time I synchronized, you called the server state 123. What's new?” The server responds with changes that, once applied, bring you to state 130. When you synchronize, you get a nice incremental sync, which is what you want for offline synchronization. Each object can have its own state, and you can understand the version of the data in your cache.

If it weren't for all the brackets, braces, interleaving, and weird byte-oriented string mode, it would be a pretty good protocol. Now you understand it, so who wants to implement an IMAP client or server? No hands. Good work.

You have other options. For calendars or contacts, you would use DAV, and DAV is its own symphony of lore. It's like, what if HTTP had a crayon up its nose? The payloads are XML, and inside the XML are other legacy formats. Horrible.

There's also ActiveSync. ActiveSync does a great job of solving this problem, but its payloads are a binary representation of XML developed during WAP, if anybody remembers WAP. Another old person in the audience. It's horrible.

What are you going to do? There's an XKCD for this: we need a standard that solves this in a sustainable, realistic way.

This is about the simplest thing you're going to do in JMAP. It's a normal `POST` to your API endpoint. Every request is a post in which you say, “I want to do some stuff.” The stuff we're doing here is getting some email. This is just like the sketches we saw before: I want to fetch emails 1, 2, and 3. You get a response back from the server.

There's a little bit cut out; I'll show you more of it. This is workable. How do you parse this? Probably no one even had to ask that question because it's just JSON. It's a data structure every language supports and has 76 parsers for. It's not going to be your problem, unlike IMAP, where the first thing you have to do is figure out how to parse the protocol.

This is a roughly complete email message. You don't have to read the whole thing, but it's straightforward. It reduces this to the smallest amount of complexity you can have and still have email. It has a nice date format. If you've ever worked with email, a nice date format is a real comfort. Some people can stop here and say that's all they wanted. I'm going to keep going.

There was one part of the `GET` I didn't show you. When you perform a `GET`, the server also tells you, “This data is current as of this state.” I made a bad choice here and put a number in it. It's just an opaque string, not a number that moves up or down. It's saying, “Here's the state you're at.”

Because you know the state, later you can issue a method call like `Email/changes`: “Hey server, tell me what's changed since state 616.” The server says, “Here you go. Since 616, two messages were created, one was updated, and none was destroyed.” You can synchronize from that just like with IMAP Quick Resync, but it's just JSON.

If you want to make changes—our equivalent of storing the `Deleted` flag—you make a method call like `Email/set`. If we've already seen read in `Email/get`, this is the create, update, and destroy part of CRUD. You can update an email by telling it which one and how.

`keywords` is a property on email. It includes things like whether it's a draft, whether you've replied to it, or whether you've read it. Here, we aren't setting all keywords. If we passed the JSON object, it would replace the entire property. You can do that, but with multiple readers and writers, you're much more likely to have a conflict if you overwrite the whole property. Structured data in JMAP can be patched at the leaf level. Here, we're saying, “Turn on this one keyword and leave everything else intact.”

Everything works this way. You can destroy an email, which is what it sounds like: nuke it. You can create a new email. If you're going to send a message, you can create the email first and then send it. All of this is really simple and works the way you expect. With JMAP, you never have to remember how to encode a non-ASCII string to put in a header, which is worth the cost of entry.

The last basic method I'll show you is query—our search. If you want to search server-side data, you say, “I want to perform an `Email/query`. Here's the actual query.” You get back the IDs of emails 4, 8, 15, and 16, just as you did in IMAP. Then you need those messages, so you issue a `GET` and retrieve them. Great. The system works.

The problem is that this recreates the same IMAP pattern: issue a search, get IDs, then fetch the messages you don't have. It's understandable, but it requires two round trips.

Fastmail was started by a bunch of people in Australia. If you haven't used the internet in Australia, it's a whole thing. It's slow. Latency was slow when they started in 1999, and it's still slow. All these round trips stink. Why have them if you don't need them? You send the search across the Pacific or Atlantic, get its result, then send the fetch and get the data.

JMAP initially looks like the same problem: send the query, get its result, send the `GET`, get its result—the same speed-of-light delay. But JMAP fixes this. When you send your post with an instruction to perform `Email/get`, `Email/query`, or whatever, you can send as many methods as you want, as long as there are no more than 256. Each method can use the results of previous methods as arguments.

Here, we've said, “Perform a query and search for something.” The next method in the same post says, “Then get the messages whose IDs were the result of the first thing you did.” This now has one round trip. If you can get it down to zero round trips, I'd be very interested to talk to you.

This also makes `Email/changes` interesting. You can say, “Tell me what's changed since this state, and in the same request, give me all the mail you're telling me has changed.” It's really simple and makes it easy to write a client that gets everything you want. A lot of JMAP's design is about making clients easy to write correctly.

If you want to write a client that's a little better, you probably won't fetch everything this way. Just because something changed doesn't mean you need it immediately. Full synchronization as soon as possible is nice, but you don't need it in every case.

In your local storage, you can receive an update that the first message changed and stamp its cached copy as dirty. You can keep it around because it's informational. Some things are immutable: the subject of an email can't change, so you can retain much of that record. You may need to re-fetch some things later.

If a message has been deleted, you can replace it with a tombstone. That keeps references correct and lets the UI continue working until the next garbage collection or whatever else you want. If a new email has been created, you can allocate storage for it. You can understand how many results will exist in a query and render that correctly even before you've retrieved the data. The synchronization primitives describe both data that exists as units and the properties of that data. This is really nice.

I've shown little JSON samples with ellipses. I don't like doing that because more than once I've attended a conference presentation, gone home, tried it myself, and found it horrible because the speaker skipped everything that made it suck.

The actual whole JMAP request contains everything you've seen—the methods—and one other bit: the capabilities in `using`. You tell the server all the capabilities you expect it to have. The server tells you what it can do, and if you don't ask for something, it must not use it. When new capabilities and features are added, a client that hasn't been updated to understand them won't have them used at it. The server works only with what the client understands.

Here, I'm using the bare minimum: core, which you must use because it means you're speaking JMAP, and mail, because the slides so far have been about email. But there are many other capabilities. You could issue a request saying, “I want to use core, mail, contacts, and calendars.”

We use a system called Cyrus JMAP, the server that stores all our users' calendars, contacts, and email. It has custom extensions for features ranging from large to small, and we can turn on some of those.

JMAP handles all the data you would have had on your PalmPilot, your personal-information-management system. In one request, using one synchronization protocol and one kind of data model, with patchable data, you can get all your data, synchronize it to your device, and synchronize it back to the server.

It's normal HTTP, normal JSON, and data that's as simple as it can be given the complex domain it's recording. It has simple CRUD. It's network-efficient because it's highly cache-oriented, and you can resynchronize by polling. But synchronization by polling is kind of lousy.

We fixed that in IMAP in 1997 with something called IDLE. When you tell your IMAP client to idle, it switches into a long-polling mode. It sits connected to a TCP stream and waits for the server to say something happened, so you're not reconnecting over and over.

JMAP can do this with an event-source stream. You connect to an event-source API, and it sends state updates. Your main thread wakes up and decides how to update the cache: clear things, create tombstones, fetch all the data, or whatever you want.

That's great if you can stay connected. In 1997, when IDLE was created, keeping something connected all the time was fine. Your computer was going to be connected to the internet or not, and if it was, you could remain connected to the server. Your desktop computer is probably still connected all the time. But mobile devices need to go offline, come back online, and synchronize. Major vendors will not let your background mail app keep a TCP stream open to its mail server.

Instead of streaming updates, you can register for push updates. This uses RFC 8030 Web Push, basically the technology underlying Apple Push Notifications and Google's Firebase Cloud Messaging. You say, “I've created a little pigeonhole somewhere on the internet. When there's an email, go tell it. Later, I'll check in with it, which I will do frequently when I come online.”

What does switching to JMAP do to the fundamental structure of your technical interaction with your email server? Kind of nothing. You become much cooler, but fundamentally it's the same model. It just works much better. You can build features more easily, clients can be more efficient, and mobile applications can be more reliable.

There is one interesting thing. This is what Fastmail looked like in 2024. Fastmail has webmail running in your browser, and it would build a cache in the browser runtime, sitting in your tab's process. It works great. It keeps things and caches them before you use them. But eventually you close the tab or reboot your computer, and the cache is gone. This doesn't meet the local-first, IMAP, or email design principle that the network should be optional and you should be able to work without it.

Mail clients normally fix that by adding offline mode. They write their data to a local storage format, expose it through an internal native API, and build internal data structures and libraries for talking to it. But because JMAP is a nice data model and an easy protocol to build on, we were able to make the API between the browser's cache layer and the web client running in the foreground just more JMAP.

You open the browser, it starts the in-browser application—the JMAP client—and instead of connecting to Fastmail, it connects to a tiny JMAP proxy with a full cache running in your browser. That proxy can talk across the internet to the remote server when it needs to.

This pattern means you can stack proxies wherever you want. Your local mail experience can be extremely fast, with no spinners and all your data local, even though the canonical source of truth and the people you communicate with are across a connection with extremely high latency and cost—worse than Australia to the US. This is basically how we would email Mars. I'll talk about that next time.

I love talking about JMAP and IMAP. If you want to corner me at any point, let me know. I'd be happy to help anybody get up and running with it. I've shown you a lot of why it's great, but not how to write it in your little Python window. It's very easy, and I can help. That's it. Thanks.

**MC:** Good news: there are tons of questions in Discord. I want you to go in and answer them there, but let me hit you with a couple of representative ones. Can you use JMAP to update contacts and calendars, or is there an SMTP equivalent for certain writes?

**Presenter:** If you want to update your calendar, there is a data type called `CalendarEvent`, which is just like email. If you want to get your calendar events, you say `CalendarEvent/get`; if you want to change them, use `CalendarEvent/set` and update your calendars. To interoperate with the rest of the calendar universe, your server sends an email with an attached message telling other servers that it's an invitation or update.

**MC:** What's the authentication story?

**Presenter:** Early on, JMAP had an authentication layer written into the protocol. Eventually, we realized authentication is a really big question and not something you want to bake into a protocol that needs to focus on something else. JMAP is authentication-neutral.

Most people authenticate with OAuth, and there's work at the IETF right now on automatic discovery of authentication for applications involving contacts and calendars. You type in your email address, and everything automatically and reliably configures. All of that is OAuth. The short version is that there are many ways to do it, but OAuth is the future.

**MC:** I'll note that I built my own personal mail fetcher, and in that case you can grab an API token from the dashboard for personal use. OAuth is more for when I'm making an application for other people, right?

**Presenter:** That's right. We have OAuth for normal OAuth usage and API tokens you can make for your own account. It's worth noting that we've recently rolled out dynamic client registration for OAuth, which makes it much easier to build your own OAuth software that you want to share. You don't need to go through our compliance process.

**MC:** That makes sense. To me, it's a good example where, even though there's a server or cloud component, I felt immediate ownership of my email. I have both Fastmail and Gmail accounts and needed to connect to both. With Gmail, you always feel like a guest in someone else's house: don't do anything wrong so they won't kick you out. With Fastmail, you grab your token and connect to JMAP, which is a really well-designed protocol, and it gives you what you want with your email.

Many more questions are in Discord, so please check them out.

**Presenter:** I'll answer them.

**MC:** Please give Ricardo a great round.
