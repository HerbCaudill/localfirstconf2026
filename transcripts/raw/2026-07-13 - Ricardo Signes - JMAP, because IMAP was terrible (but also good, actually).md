---
source: local-first-conf-recording
title: "JMAP, because IMAP was terrible (but also good, actually)"
date: 2026-07-13
speakers:
  - "Ricardo Signes"
source_recording: "../../recordings/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1000-jmap-because-imap-was-terrible-but-also-good-actua"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# JMAP, because IMAP was terrible (but also good, actually)

**00:00:00**

We made it this IMAP, it's terrible, but actually I got something to do it, so I'm going to look at both sides of this.

**00:00:06**

I work at Fastmail. Fastmail's a company that makes email, calendar, and contact software, and so its web interface is terrific.

**00:00:14**

We are based in Melbourne, Australia, but we also have an office in Philadelphia, which is where I work, and we love email.

**00:00:20**

I've been in the email business for 21 years this year. I couldn't be happier, I really like it, but it's email for 20 years.

**00:00:30**

And I write most of my code in Perl 5, and sometimes in C, and so I always worry that I'm going to give a technical talk,

**00:00:37**

especially here where everyone's talking about like the cutting-edge new exciting things.

**00:00:41**

The reaction is like, "Hey everybody, look, this old man is talking, and he's got a slide from 4.3!"

**00:00:47**

Like, what is it? I was like, I'm going to come in and I'm going to talk about something really exciting.

**00:00:52**

I want to talk about the future, I want to talk about like how do all these new technologies let us set up the real future?

**00:00:58**

Like, how do you send email to Mars? Right? This is a real problem, I was really excited, I started to think about it, I made a diagram, I was happy with it.

**00:01:06**

And then I went, I read the CFP guidance, and I got totally nerd sniped. First by these blobs, which I just walked, moved around for like 4 hours.

**00:01:14**

And then this thing, Adam, Adam is called out correctly, but here in the CFP, the OG of social media,

**00:01:21**

Facebook, Twitter, Instagram, no, this is not okay. Right? They're not good. Thank you.

**00:01:30**

The original social network is electronic mail. And I love this image, it's from like an advert in the 1980s,

**00:01:39**

explaining, I don't know why it's a mystery, because electronic mail is just like mail. Right? You've got an

**00:01:46**

office, and there's an in tray and an out tray. And sometimes the intern comes and they bring your

**00:01:51**

mail to the in tray and they take the mail out of the out tray and they put it in the post office and

**00:01:54**

magic happens. And after you've read the mail, you either throw it away or you put it in your filing

**00:01:59**

cabinet. Right? And electronic mail is exactly the same thing. Right? You've got your mail, it comes in,

**00:02:05**

the little interns from the post office, they put it in your inbox and you read it, you put it in your

**00:02:09**

filing cabinet. It's all the same. And the protocols here, when you're sending mail out, most people are

**00:02:16**

using something called SMTP submission. And when you used to get your mail, you'd get your mail over

**00:02:21**

something called the post office protocol. Now, there are protocols before this that I would love to talk

**00:02:28**

about. But I won't. Pop was terrible. What happened with pop was the least local first thing. Or maybe it was

**00:02:35**

only local. Once you got your mail with pop, it was on your computer and that was it. You couldn't

**00:02:39**

have it anywhere else. Which is fine when your only computer was in your office in 1982 at the university.

**00:02:46**

iMac was meant to fix that. It lets you access your mail from wherever you are. The model people often

**00:02:51**

have is even when you're not in your office, you can access your mail. Right? And this is the mental

**00:02:56**

model. But it's wrong. It's not the right model. And for most people who just want to install a piece

**00:03:01**

of mail software and read their mail, it's fine. It gets the job done. You're like, yeah, it's better

**00:03:05**

because I can still read my mail while I'm somewhere else. But in this room, it's a terrible model and

**00:03:10**

has to be corrected. What really happens is that when you're using iMac, you have duplicated your office

**00:03:15**

into your phone. And you've duplicated it onto your laptop. You have all of that information with you.

**00:03:20**

You're not talking to something else. There's a source of truth, right? The

**00:03:25**

server here acts as the one arbiter of what is going to be replicated everywhere else.

**00:03:30**

But you have a complete offline cache that has all your information that you operate with.

**00:03:35**

You work with that locally. And then iMac is the protocol. It's the synchronization protocol,

**00:03:40**

the cache management protocol. And you know, this isn't just going to be your home computer.

**00:03:45**

You maybe got several. Your office computer, your home computer, your cool little Blackberry that you

**00:03:49**

take with you. These are all replicas of your data that you can work with locally. And iMac is the

**00:03:56**

protocol that makes it all synchronized. It's great. You can look at what like some of the principles

**00:04:01**

were behind how to make a good email protocol in 1986 when iMac was made. And there's something like

**00:04:07**

this. Your work is always right there, right? Right where you want it. It's on your computer already.

**00:04:12**

It's not trapped on one device. You don't need the network. You can work while you're on an airplane.

**00:04:16**

Seamless collaboration with your colleagues. I mean, that's what email is, right? You send them an email.

**00:04:20**

That's the only collaboration you need. The long now. I just told yesterday that email is a cold

**00:04:26**

door technology. So I feel like it's got some pretty good legs. Securing privacy by default is a complicated

**00:04:31**

topic we can talk about later. And maintaining control of your data, you've got full replicas of

**00:04:37**

your data anywhere you want it, right? And you can take that with you anywhere you want. So now you're

**00:04:41**

probably thinking, well, you're right. Your iMac is perfect. It gives everything we want. Unfortunately,

**00:04:47**

it's also not true. And I do want to spend a little more time talking about iMac.

**00:04:53**

iMac is the internet message access protocol created in 1986. We haven't gotten rid of it yet,

**00:04:58**

but we're working real hard. Here's a really simple bit of iMac. I love to talk about iMac and kind of

**00:05:06**

dunk on it and show how great it is, but I'm going to try and keep it short about iMac. Here we see the

**00:05:12**

server in white, the client in yellow. We connect to the server and it says hi, and we log in, and then we

**00:05:18**

start looking at our map. Some things to note. This little asterisk means the server has sent you this

**00:05:25**

message even though you didn't ask for it. That A001, you've got to put something in front of every

**00:05:30**

command you've issued so the server can echo it back to you, telling you which command it's responding to.

**00:05:35**

This is a list. A list of stuff. This is a response code in square brackets. Now, you don't need to know what these are, but you need to see that to speak this protocol, you've already built a tokenizer,

**00:05:48**

an elixir for a set of grammar that was specified poorly in 1986 and extended for the past 40 years.

**00:06:00**

So it's a really complicated, painful endeavor, and anything we can do to simplify all of this,

**00:06:06**

because it's sitting on top of email, which is, you know, documents, which are already complicated.

**00:06:10**

Anything to simplify this is of kindness. Let's keep going with our conversation. I'm going to tell the

**00:06:17**

server that we want to get some of our mail. So we're going to say fetch 12 full. 12 is the message number,

**00:06:24**

every message has a number. I want the full details. And you get back to this. And we'll break that down.

**00:06:31**

And then it says it's done. 12 fetch. So this response is telling you you are now fetching message 12.

**00:06:38**

And here's what message 12 is. There's some flags. And then there's this thing, the envelope,

**00:06:46**

which breaks down like that. It's all positional. So what you need to do is if you're parsing the envelope,

**00:06:53**

you need to know, I want to know, you know, the reply to so I can construct or apply to this.

**00:06:57**

So I'm going to pull out the envelope and then read the one, two, three, fourth, left parenthesis,

**00:07:03**

and start there. Or you just pull it into an array in memory. Again, like, these aren't the worst

**00:07:07**

problems in the world. But when you're starting from these problems, everything else is harder.

**00:07:11**

And these aren't really the biggest problems we have to deal with. Here's the body. How the body

**00:07:18**

is specified. It's another one of these nasty little instructions. iMac was designed by somebody

**00:07:22**

who really liked to listen, which is not a sin. But when we fetch the body back, we're going to say,

**00:07:28**

I want to get the header of this message. And the server responds, okay, get ready. Here come 342 bytes.

**00:07:35**

At which point, you switch out of line-oriented protocol mode and you read 342 bytes. And then you're like,

**00:07:40**

okay, I'm ready for the rest of the response. And it says, oh yeah, end parenthesis. And how many

**00:07:46**

implementations have gotten this wrong? Yes, all of them. There's also a version where you put a plus

**00:07:52**

inside the braces. Ask me later. And it says, the fetch is done. And then you want to say,

**00:07:57**

now that I've read this message, I want to delete it. So how do you delete it? You send back a response

**00:08:02**

and you say, store a new flag deleted on the message. So here you said,

**00:08:09**

fetch the message. It says, now you fetch the message. Fetch complete. Store this flag. And it

**00:08:14**

says, fetch. And this response is the most interesting thing in iMac. And it's the way you

**00:08:22**

understand the whole damn thing. Because what's really happening here is that you are telling it

**00:08:29**

you want to store a flag and it tells you you're getting a fetch response. What's up?

**00:08:34**

Well, iMac is a cache management protocol. It's a synchronization protocol. The whole thing is

**00:08:40**

about you making sure you have the correct set of data. So connected on the internet is your client,

**00:08:47**

the cache, and the server, the source of truth. You can send stuff to like, hey, I want to know about

**00:08:53**

this message. I want to update this message. I want to delete this message. That's what a client does.

**00:08:58**

The server only will tell you, in response to what you have asked for, here's how to update your cache.

**00:09:04**

So, for example, if you say, I want to work with the inbox. You say, select inbox. And the server says,

**00:09:10**

172 messages exist. And here are the flags that they may or may not have. That means here's how to

**00:09:17**

initialize your local cache. You say, I want to see this mail. And it says, great. Fetch, fetch, fetch,

**00:09:21**

update those things in your cache. And when you say, I want to mark this message as read, you say,

**00:09:27**

store this. And it says, update your cache. It worked. You should change your locally stored data to

**00:09:33**

reflect the new state that you caused on the system. Everything in iMac is going to work that way.

**00:09:39**

The other communication you might have in the server is that you say, I want to search my mail. And you

**00:09:44**

send a little search, and the response you get back is a list of IDs of messages. It looks like this.

**00:09:50**

And you say, I want to search for flag mail from Rick. And it says, okay, you searched. You found

**00:09:56**

messages 284 and 82. Search complete. And then you say, I would, now I'd like those messages.

**00:10:04**

And the reason it works that way is that if you already have all of those messages cached,

**00:10:08**

why would it send you the whole body? Like, a good thing about being written in 1986 is they

**00:10:13**

weren't messing around with bandwidth. Right? Here's the answer. If you don't have those messages

**00:10:18**

yet, now you can fetch them. Or maybe you don't need to. The last thing, I think this is the last thing

**00:10:24**

I'm going to show you on iMac, is this interaction. What you see at the top is a select. Select means I want to

**00:10:31**

work on one mailbox. One of the things I'm not going to talk about is iMac kind of stinks because you're

**00:10:36**

always working on one mailbox at a time. Again, ask me later. I'll rant about it for you. I want to look at the inbox. And then you say, I want to perform a quick

**00:10:45**

re-sync from position one, two, three. So you're saying,

**00:10:50**

the last time I synchronized was you called the server. You called it state one, two, three. What's new?

**00:10:57**

And the server responds with all this stuff. And this means if you apply all these changes, you will have reached state one, three, zero.

**00:11:05**

So when you synchronize, you get a nice incremental sync. It's what you want for offline synchronization.

**00:11:13**

Each object can have its own state. You can understand what is the version of this data in your cache. Great.

**00:11:19**

If it weren't for all of this, like brackets, braces, interleaving, weird, bite-oriented string mode,

**00:11:26**

it would be a pretty good protocol. And now you understand it, right? And so who wants to go

**00:11:32**

implement an iMac client or an iMac server? No hands. Good work. You have other options, right? For example,

**00:11:40**

if you want to work with calendars or contacts, you would be using DAF. And DAF is its own symphony of lore.

**00:11:46**

It's like, what if HTTP had a crayon on its nose? And the payloads are XML, and inside the XML are other legacy formats. Horrible.

**00:11:57**

There's also ActiveSync. ActiveSync does a great job of solving this problem, but its payloads are a binary

**00:12:03**

representation of HTML that were developed during WAP, if anybody remembers WAP, another old person in the

**00:12:09**

audience. It's horrible. So what are you going to do? There's an XKCD for this. We're like, we need a

**00:12:18**

standard that solves this in a way that is sustainable and realistic. It looks like this. So this is about

**00:12:25**

the simplest thing you're going to do in JMAP. It's a normal post to your API endpoint. And every request

**00:12:33**

is a post in which you say, I want to do some stuff. And the stuff we're doing here is getting some email.

**00:12:40**

This is just like those sketches we saw before. I want to fetch emails 1, 2, 3. And you get a response

**00:12:46**

back from the server. It looks like this. So again, there's a little bit of stuff cut out. I'll show you

**00:12:52**

more of it. This is workable. How do you parse this? Probably. No one even had to ask themselves that

**00:13:00**

question. Because it's just JSON. It's just stuff you know. It's a data structure every language supports.

**00:13:09**

Every language has 76 different parsers for. It's not going to be your problem. Not like an IMAP where

**00:13:14**

the first thing you have to do is figure out how to parse the vertical. This is a roughly complete email

**00:13:21**

message. You don't have to read the whole thing, but it's pretty straightforward. What's going on here?

**00:13:25**

It reduces this to the smallest amount of complexity you can do. And still have email. It's got a nice

**00:13:30**

date format. If you've ever worked with email, a nice date format is a real comfort. And there are

**00:13:35**

people who can just stop here and really that's all I want. I'm going to keep going though. There was one

**00:13:40**

part of the GET I didn't show you, which is this. When you perform a GET, the server will also tell you,

**00:13:46**

by the way, this data is current as of this state. I made a bad choice here and I put a number in there.

**00:13:52**

It's just a string. It's an opaque string. It's not a number that moves up or down. It's just saying,

**00:13:55**

here's the state you are at. And because you know the state of this, later you can issue a command,

**00:14:00**

a method call like email changes. Hey server, tell me what has changed since state 616. And the server's going to

**00:14:08**

say, oh here you go. Changes since 616 are, I've created two messages. One has been updated. Nothing

**00:14:15**

has been destroyed since then. And you can synchronize from that just like with the IMAP Quick Resync,

**00:14:20**

but it's just JSON. If you want to make changes, so this is our store, our deleted flag. I'm going to

**00:14:26**

make an method call like this. I'm going to say email set and we can do several things. If we've already

**00:14:34**

seen the read and email GET, this is the COD of our CRUD. So you can update an email. You just tell

**00:14:41**

which email you want to update and how. This is actually interesting. Keywords is a property on

**00:14:47**

email. It's things like, is it a draft? Have you replied to it? Have you read it? And here, we aren't

**00:14:54**

setting keywords. If we set keywords, it would be passing the JSON object. It would replace the whole

**00:14:58**

thing. You can do it. But if you have multiple readers and writers, you are much more likely to

**00:15:03**

have a conflict if you're bladding this whole property. So all of this kind of structured data in

**00:15:08**

JMAP can be patched at the least level. So here we're saying, I just want to turn on this one

**00:15:14**

keyword. Leave everything else intact. And it's great. Everything works this way. You can destroy an

**00:15:19**

email. That's what it sounds like. Nuke it. And you can create a new email. So if you are going to send

**00:15:24**

the message, you can create the email first and then send it. All of this, I hope, is really simple.

**00:15:31**

Works the way you expect. I think with JMAP, you will never have to remember how do you encode

**00:15:37**

a non-ASCII string to go in a header. Which is, I mean, that, again, worth the cost of entries.

**00:15:44**

Last bit I think I'm going to show you about the basic methods is query. This is our search. If you

**00:15:51**

want to search the data you've got on the server, you're going to say, I want to form an email query.

**00:15:56**

Here's the actual query itself. There's other stuff you can do with these basics. And you get back this.

**00:16:02**

So we sent off that query and we get back. The result of that query is emails 4, 8, 15, 16. Just

**00:16:09**

like you did in IMAP. And then you need those messages. So you issue a query. And you get them.

**00:16:15**

Great. The system works. The problem is, we go back and look at IMAP. This is what we were doing. We were

**00:16:21**

saying, I want to search these messages. I issue a search. I get back the IDs. I don't have them. So I fetch them.

**00:16:28**

And this is, it's fine. It makes sense. You can understand it. But it's got these two round trips.

**00:16:35**

And Fastnail was started by a bunch of folks in Australia. And if you have not used the internet

**00:16:43**

in Australia, it's a whole thing. It's slow. It's like you kind of feel like Launcher was slow in 1999

**00:16:50**

when they started. It's still slow. It's slow. All of these round trips stink. And why are you going to

**00:16:55**

happen when you don't need them? Well, this is slow because you have to send off the search,

**00:17:00**

get the result back from across the Atlantic, or this is it, I suppose. And then you send off the

**00:17:04**

fetch and you get the data. In JMAP, I've just rebuilt the same problem. We send off the query,

**00:17:10**

we get the query result. We send off the get, we get the get result. Right? Same pattern,

**00:17:15**

same speed of light delay. But we fixed the problem in JMAP and we've done it like this.

**00:17:21**

When you send your post with the instruction that you want to perform, email, get, email, whatever,

**00:17:27**

you can send as many of those as you want as long as it's not more than 256.

**00:17:32**

You can send a whole bunch of these. And each method is permitted to use the results of previous

**00:17:39**

methods as arguments to the new one. So here we've said, I want to perform a query and I want to search for

**00:17:46**

something. And the next method in the same post will say, and then get the messages whose IPs were

**00:17:52**

the result of the first thing you did. That's incredibly narrow. So this round, this has one round

**00:17:59**

trip now. If you could get this down to zero round trips, I'd be very interested to talk to you.

**00:18:05**

But this also makes email changes interesting. With email changes, you could now say, well,

**00:18:11**

what did we do before? We said, tell me what's changed since this state. Now I would like you to

**00:18:17**

get all the mail. So what would happen if we created some mail, we updated some mail, here we didn't

**00:18:22**

destroy email. We can change this together. So I would like to get all the changes since my last synchronization point.

**00:18:28**

And in the same transaction, please give me all the mail that you're telling me has changed. This is great.

**00:18:34**

It's really simple. It makes it easy to write a client that gets all the stuff you want. A lot of

**00:18:38**

JMAP's design is around making clients easy to write correctly. But if you want to write a client that's a

**00:18:46**

little better than this, you probably won't do this. Just because something changed doesn't mean you need it.

**00:18:53**

It's nice to have full synchronization as soon as you can. But you don't really need it as soon as you

**00:18:58**

can get it in every case. So in your local storage, you can do things like this. Here's the mail that's in

**00:19:05**

my database. I receive the update, tell me what's changed. And the first message has been updated. So I'm just

**00:19:11**

going to stamp it and say this cached copy is now dirty. You can keep it around. It's informational.

**00:19:17**

And some things are immutable. So lots of those properties can still, the subject of an email can't

**00:19:22**

change. So you can keep a lot of that record. Some things you might need to re-fetch later. This one's

**00:19:27**

been deleted. So we're just going to replace it with a tombstone. Keeps all your references correct,

**00:19:32**

lets your UI continue to work until the next garbage collection, whatever else you want.

**00:19:36**

And if you get a new email, an email's been created, you can allocate storage for it. You can

**00:19:41**

understand the number of results that are going to exist in a query and render that correctly even

**00:19:47**

before you've gotten the data. I guess the synchronization prerequisites are about the data

**00:19:52**

that exists as units and then the properties of that data. This is really nice. And

**00:20:00**

I've shown you these. This is my little sample of what a bit of JSON looks like. But I've only shown

**00:20:07**

you the stuff in bright white and there's all these ellipses in there. And I really don't like doing

**00:20:12**

that because more than once I've gone to a conference presentation and at the end of it they, you get

**00:20:18**

home and you try to do it yourself and it's horrible because they skipped all the stuff that made it suck.

**00:20:23**

The whole thing in here looks like this. This is the actual whole JMet request. This is everything you

**00:20:28**

already saw. The methods. And one other bit is this. Is the usings of the capabilities. And what happens is you tell the server, here's all the capabilities

**00:20:39**

I expect you to have. And you should be able to do all of those. The server will tell you what it can do.

**00:20:44**

And if you don't ask for something, the server must not do it. Which means when new capabilities come

**00:20:50**

out, new features are added, and your client hasn't been updated to understand them yet, the server won't

**00:20:55**

use them at you. It will just work with everything you understand. Here I'm using just about the bare

**00:21:00**

minimum. I'm going to be using core, which you must use. It means I'm speaking JMet and mail because

**00:21:06**

all the slides I've shown you so far have been about email. But there's lots of other capabilities. So you

**00:21:11**

could issue a request like this. I want to use the core and mail and contacts and calendars capability.

**00:21:19**

And then we use a system called Cyrus JMet, which is the server that stores all of our users,

**00:21:24**

calendars, contacts, and email. It has custom extensions for features ranging from large to small.

**00:21:29**

We're going to turn on some of those. JMet handles all of this data, all of the data you would have

**00:21:36**

had on your POM pilot, your personal information management system. So you can now in one request,

**00:21:42**

using one synchronization protocol, with one kind of data model, everything being stored in these nice

**00:21:47**

patches with patchable data, get all your data and synchronize it to your device, synchronize it back

**00:21:53**

to the server. You've got a really nice setup here. It's normal HTTP, normal JSON, simple data as much as

**00:21:59**

it can be simple given the complex done you're recording, simple CRUD. It's network efficient because it's

**00:22:04**

highly cache-oriented and you can resynchronize easily by polling. But synchronized by polling, kind of lousy.

**00:22:12**

And we even fixed that in IMAP in 1997 with something called idle. When you tell your IMAP client to idle,

**00:22:19**

it basically switches into a long polling mode. It sits there connected to TCP stream and

**00:22:26**

waits for the server to tell if something happened. So you're not reconnecting over and over and over.

**00:22:30**

JMAP could do this. JMAP does this with event stream, event source. So you can connect to an event

**00:22:37**

source API and it will send you state updates and then your main thread can wake up and decide how

**00:22:43**

does it want to update the cache. Does it want to clear things? Does it have tombstones? Does it want to

**00:22:47**

fetch all the data? Whatever you want. That's great if you can really stay connected. But in 1997 when idle was created and

**00:22:58**

the idea of keeping something connected all the time is fine. Your server, your computer was going to be

**00:23:03**

connected to the internet or not. And if it was, you could stay connected to the server. Now your desktop

**00:23:09**

computer is probably connected all the time. But you want your mobile device to be able to go offline,

**00:23:13**

come back online, and synchronize. And they're not going to let your mail app in the background open

**00:23:18**

a TCP stream to your mail server that's just not allowed by the major vendors. So instead of streaming

**00:23:26**

these updates, you can register for push updates. This uses RFC 8030 web push. It's basically the

**00:23:32**

technology that underlies Apple push notifications and Google's Firebase cloud listing. If you say,

**00:23:38**

I've created a little pigeonhole somewhere out on the internet, when there's an email, I want you to just go

**00:23:43**

tell it. And later I will check in with it, which I will do frequently when I come online. So what does this

**00:23:50**

really do for the picture of how email works? If you switch to using JMAP, how does it change the

**00:23:57**

fundamental structure of your technical interaction with your email server? Kind of not at all. You

**00:24:03**

become much cooler. But fundamentally, it's the same model. It just works much better. You can build

**00:24:11**

features more easily. Your clients can be more efficient. You can build things that run on mobile

**00:24:15**

more reliably. But there is one interesting thing I'm going to talk about a little bit. This is what

**00:24:20**

Fastmail looked like in 2024. Fastmail has webmail, it runs in your browser, and it would

**00:24:26**

build a webmail cache in your browser's runtime. It's sitting there in your tabs process. And it works

**00:24:33**

great. It keeps everything, and it caches it before you use it. But eventually, you close that tab,

**00:24:39**

or you reboot your computer, and that cache is gone. This doesn't mean the design principles

**00:24:44**

for local first or for iMac or email, because the network is optional. You're supposed to be able

**00:24:50**

to work with that network. So the way they fix is by adding offline mode. Offline mode is a normal thing

**00:24:55**

that the mail clients have. They write their data locally to some storage format that they're

**00:24:59**

then going to let you query via native API internally. You build your internal data structures and your

**00:25:05**

internal libraries for talking to it. But because JMAP is such a nice data model, because JMAP is such an

**00:25:13**

easy protocol to use and build on, we were able to make the protocol, make the API between the cache layer

**00:25:20**

of the browser in your browser. And the web client running in the front thread just be more JMAP.

**00:25:31**

So what happens is, you open the web browser, it starts running the in-browser app, the JMAP client,

**00:25:39**

and instead of connecting to fast mail, it connects to a little tiny JMAP proxy with a full cache running

**00:25:45**

in your browser, which then, when it needs to, can go talk across the internet to remote. And this

**00:25:52**

pattern means you can kind of stack these, you can build proxies anywhere you want to be able to say

**00:25:57**

things like, I want to have my local mail experience be extremely fast, right, no spinners, everything just

**00:26:05**

works, all my data is local. Even though the canonical source of truth and the people I need to communicate with are

**00:26:11**

across a very high latency, high cost, you know, worse than Australia to the US. This is basically how we would email Mars.

**00:26:22**

This I will talk about maybe next time. I think that matches the end of what I have here. I love talking about JMAP and IMAP.

**00:26:30**

If you want to corner me at any point, let me know, and I'd be happy to help anybody who wants to get up and running with it,

**00:26:34**

because I've showed you a lot of why it's great, but I haven't shown you, I haven't shown you how to actually

**00:26:41**

write it in your little Python window. Uh, it's very easy, but I, first I can help. So that's it. Thanks.

**00:26:57**

Well, it's good news. There's tons of questions in the discord. Okay, great.

**00:27:00**

I wanted you to go in and answer them there or a bunch or what have you, but let me just hit you with a couple

**00:27:05**

representative ones here. So, uh, one question is, uh, can you use JMAP to update contacts and calendar

**00:27:12**

updates, or in this case, is there an SMPP equivalent for certain of the rights?

**00:27:18**

So, if you want to update your calendar, you can do this, uh, a data type called calendar event,

**00:27:24**

which is just like email. So if you want to get your calendar events, you can say calendar event get,

**00:27:29**

and if you want to change it, use calendar event set, update your calendars,

**00:27:32**

then for interoperation with the rest of the calendar universe, what will happen is your server sends

**00:27:37**

out an email with an attached message that tells other servers it's an invitation or update.

**00:27:43**

What's the authentication story? So, uh, early on, JMAP didn't have,

**00:27:48**

early on, JMAP had an authentication layer written in the protocol, and eventually we kind of realized that

**00:27:53**

authentication is a really big question, and it's not the kind of thing you want to bake into a protocol

**00:27:58**

that's got to focus on something else. So, JMAP is authentication neutral.

**00:28:02**

We mostly have people authenticating with OAuth, and there's work at the IETF right now for automatic

**00:28:09**

discovery of authentication for these kind of applications, you know, on contacts and calendars,

**00:28:13**

where you type in your email address and everything automatically configures reliably,

**00:28:17**

and all of that is OAuth. So, the short version is, there are many ways to do it, but OAuth is the future.

**00:28:23**

I'll note that, because I have built my own personal mail fetcher, and in that case, you can just grab the API token

**00:28:28**

of the dashboard for personal use. Correct. The OAuth is more like I'm making an application for other people, right?

**00:28:33**

That's right. We have OAuth for normal OAuth usage, API tokens you can make for your own account.

**00:28:39**

It's worth noting that we've rolled out recently, uh, dynamic client registration for OAuth, which makes

**00:28:45**

building your own OAuth stuff that you want to share much easier. You don't kind of need to go through our compliance.

**00:28:49**

It makes sense. And to me, it's a good example of where, even though there's a server cloud component here,

**00:28:55**

I felt immediate ownership of my email. I have both Fastmail and Gmail accounts. I need to connect

**00:29:00**

to both of them. With Gmail, you always feel like you're a guest in someone else's house. Don't do anything

**00:29:05**

wrong so that we won't kick you out. With Fastmail, you grab your token, connect to JMAP, which is a really well-designed

**00:29:11**

protocol. And I'll give you what you want with your email. Well, that's nice. Well, Alex here. Well, like I said,

**00:29:16**

many more questions in there, so please, uh, check out. I'll answer. Please give, uh, a great round.

**00:29:29**

So, I'll confess something.
