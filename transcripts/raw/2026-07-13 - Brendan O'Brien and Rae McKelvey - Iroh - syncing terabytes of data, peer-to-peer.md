---
source: local-first-conf-recording
title: "Iroh: syncing terabytes of data, peer-to-peer"
date: 2026-07-13
speakers:
  - "Brendan O'Brien"
  - "Rae McKelvey"
source_recording: "../../recordings/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1330-iroh-syncing-terabytes-of-data-peer-to-peer"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Iroh: syncing terabytes of data, peer-to-peer

**00:00:00**

Brendan O'Brien: And so, Chief Grace Grace just sent a friendly new ticket. So, I'm going to talk to you today. Hope that's good.

**00:00:06**

Brendan O'Brien: For those of you who don't know me, I go by P5 on the internet. My name is Brendan O'Brien in BeatSpace. Iroh is called number zero.

**00:00:13**

Brendan O'Brien: We make an open source project called Iroh. Aw, thanks. It's been very nice. Things have changed a little bit for Iroh. That's kind of what I want to talk to you about today.

**00:00:24**

Brendan O'Brien: But first, let's start with the basics. What is it? Iroh is a library. The thing you do with Iroh is you put in

**00:00:30**

inside of your app and you use it to connect any two devices on the planet. That's the thing that you need to know.

**00:00:35**

Brendan O'Brien: Today, we're not going to talk too much in terms of technical details, but I do think there's some important bits that you need to understand.

**00:00:40**

Brendan O'Brien: It's really in Rust, but we now have support for a lot of languages. And the core thing that you've made up for a bunch is this idea that we think is a really critical

**00:00:48**

extension, which is dialing keys, not IP addresses. And so, each phone is getting a key, which is a key pair, technically.

**00:00:55**

Brendan O'Brien: And the public app now works like your IP address. Inside of Iroh, you pop a key into

**00:01:00**

the thing you want to dial, you get a connection. And those devices can be anywhere. And as they move around, it's going to just keep that persistent.

**00:01:05**

Brendan O'Brien: This is a very important primitive that we'll get into why it exists in a bit.

**00:01:10**

Brendan O'Brien: We think there's a bunch of awesome things that come out of the subtraction, but this is not going to be a super technical talk.

**00:01:16**

Brendan O'Brien: Instead, I'm going to talk to you a little bit about kind of this moment that we're at historically as a project.

**00:01:21**

Brendan O'Brien: We as it was mentioned that we hit 1.0 recently a little over three weeks ago. And things have changed since. This is how our life looks right now.

**00:01:31**

Brendan O'Brien: That was when 1.0 came out. And we've been busy. And so I -- it's been very fun to sit on this project. There's a couple of things that you should know about it.

**00:01:41**

Brendan O'Brien: You know, you may ask, "Is our web scale? Can we do this?" A couple of stats that are fun to share.

**00:01:46**

Brendan O'Brien: In the last six months, we have done 30 billion connections on related that we can see.

**00:01:56**

Brendan O'Brien: And we had one day where we did almost half a billion in a day. And so if you're asking yourself, "Hey, is this going to work for real?"

**00:02:04**

Brendan O'Brien: I can tell you with high confidence that it's going to work for real. And we have the pleasure of working with some really lovely companies.

**00:02:13**

Brendan O'Brien: These are the logos that you may or may not recognize. Some of these folks are delightful and are building on higher actively.

**00:02:19**

Brendan O'Brien: And I want to talk to you today about what it was like to get here and what it meant to get to 1.0.

**00:02:26**

Brendan O'Brien: Because it took us four years as 10 people working on the project. And we had over 65 releases as part of the road to get to this.

**00:02:33**

Brendan O'Brien: And this is going to be a little bit more of a spiritual talk because I want--this crowd has a very specific role, I think, to play that we really want to try and motivate.

**00:02:44**

Brendan O'Brien: And so I want to talk to you about this kind of road to 1.0 and what got us there.

**00:02:49**

Brendan O'Brien: Because, yeah, you know, this project is going fast. That's going to be easy. You're going to sell mentions of our own.

**00:02:54**

Brendan O'Brien: And maybe we hit some inflection point. Great.

**00:02:56**

Brendan O'Brien: But I think my job is to sort of explain to you that we are full of shit.

**00:02:59**

Brendan O'Brien: And sometimes figuring this out was not easy.

**00:03:02**

Brendan O'Brien: And because I think, you know, sometimes you watch someone get on stage and talk about a project that feels polished.

**00:03:07**

Brendan O'Brien: I want to demystify that as much as possible and motivate as many people as possible to get onto the stage to talk about your great thing.

**00:03:13**

Brendan O'Brien: That's why we're here.

**00:03:14**

Brendan O'Brien: And so I'm going to take the four year history of us building this and bring it into three chapters.

**00:03:18**

Brendan O'Brien: The first chapter is all about idealism.

**00:03:20**

Brendan O'Brien: The second chapter is learning how to paddle our own canoe.

**00:03:23**

Brendan O'Brien: Very important note, how can you tell if somebody is Canadian or not?

**00:03:26**

Brendan O'Brien: Anybody know?

**00:03:27**

Brendan O'Brien: Don't worry, they'll tell you.

**00:03:29**

Brendan O'Brien: And they will work canoeing metaphors into their...

**00:03:32**

Brendan O'Brien: Yeah, we'll get to it.

**00:03:34**

Brendan O'Brien: Woo!

**00:03:35**

Brendan O'Brien: And then we'll talk about the hard part.

**00:03:37**

Brendan O'Brien: And the hard part is the fun part to talk about now that it's over.

**00:03:40**

Brendan O'Brien: And then we'll talk about one another.

**00:03:42**

Brendan O'Brien: If you overlay this with our history, it sort of forms this story that I think is nice for.

**00:03:46**

Brendan O'Brien: Where sometimes people see like overnight successes and then it's like in reality, you know, this is like a multi-multi-year project that sort of leads to this.

**00:03:52**

Brendan O'Brien: And I want to show you what the background of that felt like at the time.

**00:03:55**

Brendan O'Brien: And retroactively apply lessons that we feel like we learned so that you can take them and decide whether or not they apply to your work.

**00:04:01**

Brendan O'Brien: For a show of hands, who thinks their best software is ahead of them?

**00:04:05**

Brendan O'Brien: See, we are still optimistic.

**00:04:09**

Brendan O'Brien: Which can happen, all right?

**00:04:10**

Brendan O'Brien: And so we did a bunch of mistakes.

**00:04:12**

Brendan O'Brien: We learned a lot of lessons.

**00:04:13**

Brendan O'Brien: This is not to be bridging.

**00:04:14**

Brendan O'Brien: This is to sort of show you what we feel like we learned.

**00:04:16**

Brendan O'Brien: And so let's start with idealism.

**00:04:18**

Brendan O'Brien: This is a picture of what four years of running a startup will do to you.

**00:04:22**

Brendan O'Brien: So then, now.

**00:04:24**

Brendan O'Brien: This is the day that we formed the company.

**00:04:26**

Brendan O'Brien: This is my company, Dick.

**00:04:28**

Brendan O'Brien: We got together and started over zero on April 1st.

**00:04:32**

Brendan O'Brien: And the original stuff was actually in a hotel at the Berlin airport.

**00:04:36**

Brendan O'Brien: That's where all of this got kicked off.

**00:04:37**

Brendan O'Brien: And we came from the distributed government.

**00:04:40**

Brendan O'Brien: That's the thing that we aligned with.

**00:04:41**

Brendan O'Brien: So like, even prior to the local first, the world that we sort of originated in was this idea

**00:04:45**

Brendan O'Brien: that a whole bunch of people were trying to say the internet is broken.

**00:04:49**

Brendan O'Brien: We need to make a better internet.

**00:04:51**

Brendan O'Brien: And it was so popular that it got turned into the plot lines of HBO shows.

**00:04:55**

Brendan O'Brien: And Ira was originally an implementation of the interplanetary file system.

**00:04:59**

Brendan O'Brien: And show hands who knows what I think about this.

**00:05:01**

Brendan O'Brien: Hey, appreciate the water.

**00:05:03**

Brendan O'Brien: Alright.

**00:05:04**

Brendan O'Brien: And I was actually building something with P2P as well.

**00:05:07**

Brendan O'Brien: And so we clearly didn't end there.

**00:05:09**

Brendan O'Brien: And so how did we get there?

**00:05:11**

Brendan O'Brien: And this is kind of -- at this moment when we started the project, we had very simple pieces.

**00:05:16**

Brendan O'Brien: I talked to -- I apologize for Brooke if I'm calling you up.

**00:05:18**

Brendan O'Brien: I spoke with Brooklyn Zelenka, and she was the one who gave me this line.

**00:05:21**

Brendan O'Brien: She said, "I am stuck in the food, water, and shelter phase of building the distributed web.

**00:05:27**

Brendan O'Brien: I cannot get devices to connect to each other.

**00:05:30**

Brendan O'Brien: So how the hell am I supposed to build something that is exciting and interesting

**00:05:33**

Brendan O'Brien: and going to change the world when I don't have the foundational characteristics

**00:05:36**

Brendan O'Brien: that we can rely on to be able to build this stuff?"

**00:05:39**

Brendan O'Brien: And we're like, "Cool, let's go make something that works."

**00:05:43**

Brendan O'Brien: That's going to be our core mandate.

**00:05:45**

Brendan O'Brien: And that has been the one guiding principle that truly hasn't changed.

**00:05:49**

Brendan O'Brien: Dave Micro Founder is the one who truly is the sort of bearer of this bar.

**00:05:53**

Brendan O'Brien: It's like, you know, if it's not needing that bar, then we just don't ship it.

**00:05:57**

Brendan O'Brien: So, in 2022, we shipped 0.1.

**00:06:01**

Brendan O'Brien: And it was at IPFS camp, and it was an implementation of IPFS, and it had a CLI.

**00:06:07**

Brendan O'Brien: It was a microservice-based architecture.

**00:06:10**

Brendan O'Brien: It had, like, there's almost zero resemblance between what it was now and what it was then.

**00:06:16**

Brendan O'Brien: And it had a content addressing system built into it.

**00:06:19**

Brendan O'Brien: It was, like, you know, intending to be interoperable without IPFS implementation.

**00:06:23**

Brendan O'Brien: And the reason for this was because we believed fully in the ideals that the distributed web was pushing.

**00:06:29**

Brendan O'Brien: Not just to have the best project, but, like, I was with DAT and HyperCore and SSP, and, like, you know who you are.

**00:06:34**

Brendan O'Brien: And this, like, we were just on this core principle that, like, if we can operate in this box, if we can get something to work in that phase,

**00:06:41**

Brendan O'Brien: You can solve that food, water, and shelter problem, and we will unlock incredible amounts of benefit.

**00:06:45**

Brendan O'Brien: And so we go through about a year of this, where we cut our own 1.0.

**00:06:50**

Brendan O'Brien: Along the way, we ship IR as a library.

**00:06:52**

Brendan O'Brien: That is the only thing from this phase that remains.

**00:06:55**

Brendan O'Brien: Which is an interesting, you know, leftover.

**00:06:58**

Brendan O'Brien: But the thing that we realized quickly is this isn't working.

**00:07:00**

Brendan O'Brien: We ship the version, and this, just to illustrate this chart,

**00:07:03**

Brendan O'Brien: This is adding data, like, I can test those files around,

**00:07:07**

Brendan O'Brien: And this is the Go implementation.

**00:07:09**

Brendan O'Brien: And rewriting it in Rust is supposed to make it faster, right?

**00:07:12**

Brendan O'Brien: That was not happening.

**00:07:14**

Brendan O'Brien: We were slower.

**00:07:15**

Brendan O'Brien: And not only were we slower, we were of the mind that both of these charts

**00:07:19**

Brendan O'Brien: were nowhere near where they needed to be, to be useful for people.

**00:07:23**

Brendan O'Brien: And so we had this idealism versus practices moment.

**00:07:26**

Brendan O'Brien: It's like, what are we, what are we doing?

**00:07:28**

Brendan O'Brien: And so we actually, it wasn't then that we made this trade off,

**00:07:31**

Brendan O'Brien: but we really had to sort of get into what we kind of call chapter two.

**00:07:36**

Brendan O'Brien: This is the single hardest leadership call that I think I made in the course of the project.

**00:07:42**

Brendan O'Brien: We decided to start over and break entirely from IPFest

**00:07:46**

Brendan O'Brien: and just say, no, we need a bunch of space for ourselves.

**00:07:49**

Brendan O'Brien: Internally at the time, it was very difficult because we still, then and now,

**00:07:55**

Brendan O'Brien: still very much believed that the internet is broken and needs to be fixed.

**00:07:59**

Brendan O'Brien: And these people in the D-Web movement are our friends.

**00:08:01**

Brendan O'Brien: And if that feels very similar to when you're in the local first movement,

**00:08:05**

Brendan O'Brien: you're wondering like, am I local first enough or not?

**00:08:07**

Brendan O'Brien: Am I in the crowd or not?

**00:08:08**

Brendan O'Brien: Am I, you know, am I going to make a decision that might put us on an outside footing

**00:08:12**

Brendan O'Brien: to some people or maybe upset some people that I really care about?

**00:08:15**

Brendan O'Brien: This is kind of what that felt like for us.

**00:08:17**

Brendan O'Brien: And that was incredibly hard.

**00:08:19**

Brendan O'Brien: But we needed this space to focus on getting to it just works.

**00:08:23**

Brendan O'Brien: And it wasn't just working.

**00:08:24**

Brendan O'Brien: And so we just kind of had to generate that room

**00:08:26**

Brendan O'Brien: and try to be really kind to the people that we still really cared about

**00:08:29**

Brendan O'Brien: and say like, hey, we're still all chasing the same kind of mission.

**00:08:31**

Brendan O'Brien: We just need a little bit of room to design ourselves.

**00:08:34**

Brendan O'Brien: We like to call this space the move slow and break things chapter,

**00:08:38**

Brendan O'Brien: where we wrote a lot of stuff.

**00:08:40**

Brendan O'Brien: We needed freedom to make our own mistakes.

**00:08:42**

Brendan O'Brien: I'm not going to play this.

**00:08:44**

Brendan O'Brien: But like we got to a place where we could do that level of speed versus this level of speed.

**00:08:47**

Brendan O'Brien: And so the before and after was like palpable immediately.

**00:08:51**

Brendan O'Brien: And we just got really simple.

**00:08:54**

Brendan O'Brien: Can we focus on just sending a forking file over the internet?

**00:08:58**

Brendan O'Brien: Can we just do that one thing?

**00:09:00**

Brendan O'Brien: And we got in touch with a project that might actually use this.

**00:09:04**

Brendan O'Brien: And so we worked with a project on double chat.

**00:09:06**

Brendan O'Brien: This is, you know, getting from zero to one in terms of users often involves a little bit of like,

**00:09:10**

Brendan O'Brien: Hey, do you know somebody?

**00:09:11**

Brendan O'Brien: And we absolutely knew some people.

**00:09:12**

Brendan O'Brien: We knew people double chat.

**00:09:13**

Brendan O'Brien: And what we focused on was this core feature of just like,

**00:09:16**

Brendan O'Brien: Can we do device backups?

**00:09:17**

Brendan O'Brien: This is the first thing that I empowered on a real production app.

**00:09:19**

Brendan O'Brien: It's just like, can I get stuff from this device to this device and transfer it this way?

**00:09:24**

Brendan O'Brien: This is the first thing we did.

**00:09:25**

Brendan O'Brien: And this did not have mad hole punching.

**00:09:27**

Brendan O'Brien: So it came with the requirement that you'd be on the same Wi-Fi number

**00:09:30**

Brendan O'Brien: to do this backup and transfer device between these two,

**00:09:32**

Brendan O'Brien: to get your chats on two different devices.

**00:09:35**

Brendan O'Brien: And this is the phenomenon that I think we got right in this chapter.

**00:09:42**

Brendan O'Brien: It is really hard when you're – you can come to a conference like this and feel really good

**00:09:48**

Brendan O'Brien: because you are amongst people who are supporting your world view.

**00:09:51**

Brendan O'Brien: And then you go take your stuff and you show it to someone and they're like,

**00:09:53**

Brendan O'Brien: I don't care.

**00:09:54**

Brendan O'Brien: And you have to kind of sit there with this very difficult feedback and incorporate it.

**00:09:59**

Brendan O'Brien: The one thing that I wish more people would say is this is so hard to do

**00:10:03**

Brendan O'Brien: that you should feel good about yourself if you do it one day a week.

**00:10:06**

Brendan O'Brien: Because that's all we managed to do.

**00:10:09**

Brendan O'Brien: We definitely weren't good at this.

**00:10:11**

Brendan O'Brien: But we realized very quickly, oh, if we had an attroversal, Delta check would be better.

**00:10:15**

Brendan O'Brien: And so after six months of work, we implement our first attroversal inside of IRO 051.

**00:10:20**

Brendan O'Brien: It is still years before we will shift the real thing.

**00:10:23**

Brendan O'Brien: We then add over time this idea of .my key.

**00:10:26**

Brendan O'Brien: This is the first moment where it shows up.

**00:10:27**

Brendan O'Brien: And this is the first point in this project where everything that is now modern IRO is now in.

**00:10:32**

Brendan O'Brien: And so we have our hands around the total.

**00:10:34**

Brendan O'Brien: The whole abstraction is in there.

**00:10:36**

Brendan O'Brien: It's done.

**00:10:37**

Brendan O'Brien: It's over.

**00:10:38**

Brendan O'Brien: It's going to be great.

**00:10:39**

Brendan O'Brien: The amount of doing that was left is very painful.

**00:10:42**

Brendan O'Brien: We had this whole idea of protocols bundled in to IRO.

**00:10:46**

Brendan O'Brien: And this one published is a big step toward IRO 1.0.

**00:10:53**

Brendan O'Brien: And this is September 5th, 2023.

**00:10:55**

Brendan O'Brien: So we're a little off.

**00:10:57**

Brendan O'Brien: Just a little off.

**00:10:58**

Brendan O'Brien: IRO had layers at the time.

**00:11:00**

Brendan O'Brien: I had this idea of this very thick thing that we thought you could opt into.

**00:11:04**

Brendan O'Brien: We thought we had to solve all of these problems to make a peer-to-peer stack useful.

**00:11:08**

Brendan O'Brien: And we, again, kind of had to unlearn this possible thing.

**00:11:13**

Brendan O'Brien: And I know that there was a talk before us that had and celebrated this idea of floating the ocean.

**00:11:17**

Brendan O'Brien: I promise that both of these ideas can be held in tension.

**00:11:21**

Brendan O'Brien: For us, this is actually a really bad thing.

**00:11:24**

Brendan O'Brien: This idea that if you're a peer-to-peer project and you've been familiar with others,

**00:11:28**

Brendan O'Brien: there is a real temptation to boil the entire ocean.

**00:11:30**

Brendan O'Brien: Like the desire to get from connectivity all the way up into an application stack

**00:11:35**

Brendan O'Brien: means that basically your entire innovation budget goes with you.

**00:11:38**

Brendan O'Brien: And you feel that need because you're trying to sort of meet users where they are.

**00:11:42**

Brendan O'Brien: And for us, this giant stack became very unwieldy.

**00:11:46**

Brendan O'Brien: Iro had a console inside of it.

**00:11:48**

Brendan O'Brien: It had a synchronized key value store inside of it.

**00:11:50**

Brendan O'Brien: It was just like all this gap.

**00:11:52**

Brendan O'Brien: That we did have some wins, though.

**00:11:54**

Brendan O'Brien: People started building stuff like this.

**00:11:56**

Brendan O'Brien: This was Jumby, which is one of the first games built on top of an Iro connection.

**00:12:00**

Brendan O'Brien: This is now actually in the Steam store.

**00:12:02**

Brendan O'Brien: And this is actually literally a screen grab of me playing with a couple of people on the numbers of our team.

**00:12:06**

Brendan O'Brien: We had a project chip, a peer-to-peer gaming tool,

**00:12:09**

Brendan O'Brien: that would like literally synchronize this stuff.

**00:12:11**

Brendan O'Brien: Where you could play on a phone and this was using Iro to actually move the package

**00:12:15**

Brendan O'Brien: So this is C++, convert it into Rust, turn it into cryptic packets,

**00:12:19**

Brendan O'Brien: send it to the other side, turn back into C++.

**00:12:21**

Brendan O'Brien: The packet just works as it blows my mind.

**00:12:23**

Brendan O'Brien: Projects like B and Panda started to show up and started to adopt us.

**00:12:27**

Brendan O'Brien: And so thankfully someone else was going to blow the issues for us.

**00:12:30**

Brendan O'Brien: But we got this again, like sitting with our hands in the pane box.

**00:12:35**

Brendan O'Brien: We got this just like, I just want a dump pipe that's going to do machines.

**00:12:38**

Brendan O'Brien: Get out of my way.

**00:12:39**

Brendan O'Brien: I just want the dump pipe.

**00:12:40**

Brendan O'Brien: And so we said, okay, let's make dump pipe.

**00:12:42**

Brendan O'Brien: And so we made our first version of this, which was just like intended to be a bit of a marketing hack,

**00:12:47**

Brendan O'Brien: where it was like this website that we put out that was like, okay, cool, dump pipe.

**00:12:51**

Brendan O'Brien: You can have that.

**00:12:52**

Brendan O'Brien: And so we published that and we get to this moment where we now are starting to get the feedback that like,

**00:12:57**

Brendan O'Brien: documents are nice, blogs are great, syncing data is cool.

**00:13:01**

Brendan O'Brien: But like really the thing that's keeping me coming back to Iro is the dump pipe thing.

**00:13:05**

Brendan O'Brien: The fact that you guys can actually get connections, that's actually special.

**00:13:08**

Brendan O'Brien: And so this is still too big.

**00:13:10**

Brendan O'Brien: And so we start to establish internally what I think is one of the most important characteristics that we try to still cultivate to this day.

**00:13:17**

Brendan O'Brien: Team members at number zero will use a phrase like this.

**00:13:20**

Brendan O'Brien: I'm afraid to even bring this up.

**00:13:22**

Brendan O'Brien: I'm scared of what will happen when I tell the group that I think, what if all of Iro is just the Iro net part?

**00:13:28**

Brendan O'Brien: What if we just got rid of all the other stuff and just said, it's just that network connection thing that seems to be what's working.

**00:13:35**

Brendan O'Brien: What if we just redefined what Iro is to be Iro net?

**00:13:38**

Brendan O'Brien: What if we just focused on Rust for a while?

**00:13:41**

Brendan O'Brien: At the time we supported multiple languages and we were really struggling to sort of like keep up the bi-mindings in place.

**00:13:45**

Brendan O'Brien: It was just like, it was really hard.

**00:13:47**

Brendan O'Brien: And what I realized in hindsight as part of this chapter is what we were really doing in that year and a half

**00:13:53**

Brendan O'Brien: was getting good as a team at steering a technical project.

**00:13:58**

Brendan O'Brien: I think that we have successfully cultivated a group of people who know how to ask really hard questions,

**00:14:03**

Brendan O'Brien: who don't feel ashamed of that.

**00:14:04**

Brendan O'Brien: And we do know how to paddle our own canoe, whether we're in Canada or otherwise.

**00:14:09**

Brendan O'Brien: And I think that's actually a really critical characteristic.

**00:14:11**

Brendan O'Brien: If I'm going to come up here and say to you, I genuinely think you should be building on top of Iro.

**00:14:16**

Brendan O'Brien: It's a reliable substrate.

**00:14:17**

Brendan O'Brien: You need to know that the people protecting that abstraction care about it in the long haul, right?

**00:14:22**

Brendan O'Brien: And so we can hold our hand in the paint box.

**00:14:25**

Brendan O'Brien: And we end up in this place where we can finally articulate what is the one that I designed.

**00:14:30**

Brendan O'Brien: This was from our team retreat.

**00:14:32**

Brendan O'Brien: And this whiteboard haunts my dreams.

**00:14:35**

Brendan O'Brien: This is the first time we sketched out that actually ours should just be a stack of IETF protocols in a trench coat.

**00:14:42**

Brendan O'Brien: And we should do everything we can to avoid any major innovation.

**00:14:46**

Brendan O'Brien: Really what we are going to need is just like quick and map multi-path and there's a speck of quick natural.

**00:14:51**

Brendan O'Brien: So it's kind of tracking, but we should implement it.

**00:14:53**

Brendan O'Brien: And that puts us in the hard part.

**00:14:56**

Brendan O'Brien: So now as a group we understand what our needs to be and now we have to execute against it.

**00:15:00**

Brendan O'Brien: And we're going to need an implementation of quick multi-path.

**00:15:03**

Brendan O'Brien: There is not a Rust implementation of quick multi-path.

**00:15:06**

Brendan O'Brien: And so what we do is we split the team.

**00:15:10**

Brendan O'Brien: We say two people, Floris and Viva, bless you.

**00:15:14**

Brendan O'Brien: You go work on team multi-path.

**00:15:16**

Brendan O'Brien: Everybody else is coming.

**00:15:18**

Brendan O'Brien: Just ship more stuff.

**00:15:20**

Brendan O'Brien: And so we start to incrementally release against starting from October 2024 to what was now the thing that released three weeks ago.

**00:15:29**

Brendan O'Brien: This, we get the protocols out.

**00:15:31**

Brendan O'Brien: We still have the protocols, they're still great.

**00:15:33**

Brendan O'Brien: We're now working on progressive nodes to 1.0.

**00:15:35**

Brendan O'Brien: We have some space for that.

**00:15:37**

Brendan O'Brien: We have along the way this project just like kind of YOLOs support for Airo into an app that has 2 million daily active users.

**00:15:44**

Brendan O'Brien: And on the night of the election in the United States, this happens to us where we get 2 million nodes just coming online kind of overnight.

**00:15:52**

Brendan O'Brien: And so we start to get our first real taste of scale at the time.

**00:15:55**

Brendan O'Brien: And so we actually kind of reap some of the benefits of keeping our hand in that paintbox because we're now getting used by some of these projects.

**00:16:02**

Brendan O'Brien: We literally had to hop into the Airo Discord and be like, did anybody onboard millions of nodes?

**00:16:06**

Brendan O'Brien: And one person puts their hand up like, yeah, that's me.

**00:16:08**

Brendan O'Brien: It's like, maybe we don't use a public release for that, but okay.

**00:16:11**

Brendan O'Brien: And we land a bunch of incremental things.

**00:16:14**

Brendan O'Brien: So the team covering for the core people, and there's some like revolving door between the core people.

**00:16:18**

Brendan O'Brien: But we land support for WASM.

**00:16:20**

Brendan O'Brien: We can take Airo, we can take all of this and compile it into WASM.

**00:16:22**

Brendan O'Brien: That meant going through all of the places in the Airo code base where we had async calls.

**00:16:26**

Brendan O'Brien: Async calls.

**00:16:27**

Brendan O'Brien: He actually wrote it.

**00:16:29**

Brendan O'Brien: It's not async calls.

**00:16:30**

Brendan O'Brien: What are we going to move?

**00:16:31**

Brendan O'Brien: We had to-

**00:16:32**

Brendan O'Brien: Task spawns.

**00:16:33**

Brendan O'Brien: All Tokyo task spawns.

**00:16:34**

Brendan O'Brien: We had to write our own task spawned libraries so that we can compile this down and run single thread in the browser.

**00:16:39**

Brendan O'Brien: We had to build our own perf chart.

**00:16:41**

Brendan O'Brien: This is where things get really hard.

**00:16:42**

Brendan O'Brien: We had to like actually understand how hard we behave.

**00:16:44**

Brendan O'Brien: Commit to commit.

**00:16:45**

Brendan O'Brien: I just had to scroll it so you can see this is the multipath spec.

**00:16:50**

Brendan O'Brien: And so we had to read this and implement this.

**00:16:53**

Brendan O'Brien: I'll play it again.

**00:16:55**

Brendan O'Brien: Like it's just-

**00:16:57**

Brendan O'Brien: And the thing I want-

**00:16:59**

Brendan O'Brien: Speaking of mistakes were made, technically I'm the CEO of the company.

**00:17:03**

Brendan O'Brien: We were six months in before I opened this webpage.

**00:17:06**

Brendan O'Brien: Trust in your team.

**00:17:09**

Brendan O'Brien: But we were at this moment.

**00:17:11**

Brendan O'Brien: I hit this moment in that six months.

**00:17:13**

Brendan O'Brien: I opened this webpage and I'm like shit, is this going to work?

**00:17:15**

Brendan O'Brien: Like we are actually genuinely gambled really hard on something that like,

**00:17:19**

Brendan O'Brien: you know, it didn't work out in the end.

**00:17:21**

Brendan O'Brien: But lots of refactoring, lots of shipping, lots of just like clean up,

**00:17:25**

Brendan O'Brien: get things to work.

**00:17:26**

Brendan O'Brien: We ended up writing our own patch bay library to like stimulate networks

**00:17:29**

Brendan O'Brien: because we had one in Python, but it wasn't performing enough,

**00:17:32**

Brendan O'Brien: and it didn't cover certain cases.

**00:17:33**

Brendan O'Brien: And we actually found a bug in it.

**00:17:34**

Brendan O'Brien: We used Claude to find that bug and it was gnarly.

**00:17:36**

Brendan O'Brien: We built our own tooling to watch how packets flow between two nodes,

**00:17:39**

Brendan O'Brien: because it's so hard to understand how in a multi-pass scenario,

**00:17:43**

Brendan O'Brien: a path is being acknowledged and when hole punching is happening.

**00:17:46**

Brendan O'Brien: We still kind of don't really use that tool, but it's kind of fun to put on slides.

**00:17:49**

Brendan O'Brien: We ended up writing our own quick implementation because we needed our own quick implementation.

**00:17:53**

Brendan O'Brien: We were just in this moment where we were trying to work with the Quinn maintainers,

**00:17:55**

Brendan O'Brien: who are lovely, but we needed just, we were moving too fast.

**00:17:58**

Brendan O'Brien: We needed to be able to get this done.

**00:17:59**

Brendan O'Brien: This is our CI test suite.

**00:18:01**

Brendan O'Brien: Again, I just need to scroll it because I'm very proud of it.

**00:18:04**

Brendan O'Brien: There's 67 checks.

**00:18:05**

Brendan O'Brien: There's like process in here.

**00:18:06**

Brendan O'Brien: This is just like what it looks like to make production great software.

**00:18:09**

Brendan O'Brien: And more shipping gets 96.

**00:18:12**

Brendan O'Brien: We finally ship multi-pack on 96 and we're all very terrified because we have

**00:18:16**

Brendan O'Brien: like completely removed this final IR and changed it to this new thing.

**00:18:19**

Brendan O'Brien: We go through lists and lists of what must ship.

**00:18:22**

Brendan O'Brien: And then we say when we were bored or when we were sure we were doing this,

**00:18:25**

Brendan O'Brien: you know, just like maybe we'll get to this.

**00:18:27**

Brendan O'Brien: We'll see.

**00:18:28**

Brendan O'Brien: We ship custom transports and now you can take Bluetooth low energy and use that

**00:18:31**

Brendan O'Brien: as a transport that IR can leverage as a path underneath it.

**00:18:33**

Brendan O'Brien: We do more boat fixing, more closing.

**00:18:35**

Brendan O'Brien: And then we're in RC zero and then it's out.

**00:18:38**

Brendan O'Brien: And we're on hyper news.

**00:18:39**

Brendan O'Brien: And there's a bunch of points.

**00:18:41**

Brendan O'Brien: And it's just kind of like over.

**00:18:43**

Brendan O'Brien: Please forward your applause to the IR team.

**00:18:53**

Brendan O'Brien: I did not, you know.

**00:18:55**

Brendan O'Brien: I'm fucking the clown who just has to get up there and riff about this.

**00:18:58**

Brendan O'Brien: But this did not feel linear.

**00:19:00**

Brendan O'Brien: I know it's a line.

**00:19:01**

Brendan O'Brien: But like, and what I want you to think about is like in your project.

**00:19:04**

Brendan O'Brien: Like this, we started talking about one out of here.

**00:19:07**

Brendan O'Brien: And like this year and a half, this was the scariest part because we're the most exhausted.

**00:19:12**

Brendan O'Brien: And wow, like had we not, had we stopped and we give it up.

**00:19:17**

Brendan O'Brien: Don't give up.

**00:19:18**

Brendan O'Brien: You know, like think about the thing that you've been working on.

**00:19:20**

Brendan O'Brien: This is the group of people who have spent years looking at hard problems.

**00:19:24**

Brendan O'Brien: The world needs you to keep doing that.

**00:19:26**

Brendan O'Brien: Right?

**00:19:27**

Brendan O'Brien: Because what comes at the other side is now some of the most wonderful people in the world

**00:19:32**

Brendan O'Brien: start to put subtle references to IRO in their stuff.

**00:19:37**

Brendan O'Brien: And this just puts us on cloud nine.

**00:19:39**

Brendan O'Brien: Like I, this is the highlight of my career by a mile.

**00:19:43**

Brendan O'Brien: To see people saying like, hey, yeah, this is networking you can trust.

**00:19:46**

Brendan O'Brien: It's built on IRO.

**00:19:47**

Brendan O'Brien: And we start to see the emergence of that stuff that we talked about.

**00:19:51**

Brendan O'Brien: You know, this idea of like these apps, these apps coming out, take back your data.

**00:19:54**

Brendan O'Brien: And you're seeing, to my delight, I'm like this is an IRO app.

**00:19:57**

Brendan O'Brien: It's a little go first app.

**00:19:59**

Brendan O'Brien: Right?

**00:20:00**

Brendan O'Brien: And now we can re-bring in some of that idealism.

**00:20:01**

Brendan O'Brien: We can bring in the idea of like, hey, distributed web for me, local first for others.

**00:20:05**

Brendan O'Brien: Oh, why not?

**00:20:06**

Brendan O'Brien: But these apps that are emerging, we're now like, you know, one every couple of days.

**00:20:10**

Brendan O'Brien: This was from this morning.

**00:20:11**

Brendan O'Brien: This was from last week.

**00:20:13**

Brendan O'Brien: Code from anywhere.

**00:20:14**

Brendan O'Brien: No VPN record forwarding.

**00:20:15**

Brendan O'Brien: Cube direct tunnel.

**00:20:16**

Brendan O'Brien: A unified clipboard.

**00:20:18**

Brendan O'Brien: It works with no accounts.

**00:20:19**

Brendan O'Brien: You know, your desktop music library on your phone.

**00:20:22**

Brendan O'Brien: Cmox, which does agents and is huge, and is experimenting with IRO.

**00:20:26**

Brendan O'Brien: And like, deploy hardware in the home.

**00:20:29**

Brendan O'Brien: Like, home labor monitoring work.

**00:20:32**

Brendan O'Brien: Like, we're past food, water, and shelter now on the connection stuff.

**00:20:36**

Brendan O'Brien: And look at what's coming out the other side.

**00:20:38**

Brendan O'Brien: Like, the things that we can do now and the speed with which we can do it because of this moment,

**00:20:43**

Brendan O'Brien: because we now have this wonderful abundant combination of the capacity to execute with our new robot friends,

**00:20:50**

Brendan O'Brien: and some big primitives.

**00:20:52**

Brendan O'Brien: I think this is like a really exciting point.

**00:20:54**

Brendan O'Brien: And so next for us, we now get to just keep going.

**00:20:58**

Brendan O'Brien: Our job becomes, we need to upgrade the internet.

**00:21:00**

Brendan O'Brien: We now need to start thinking about IRO as IPv7.

**00:21:02**

Brendan O'Brien: How do we steward this?

**00:21:04**

Brendan O'Brien: How do we make this into something that is reliable, built in more places?

**00:21:07**

Brendan O'Brien: Is steward as commons infrastructure?

**00:21:09**

Brendan O'Brien: And I feel like we've learned a bunch of lessons along the way,

**00:21:13**

Brendan O'Brien: that I hope that you will take and decide whether or not they apply to you.

**00:21:16**

Brendan O'Brien: And if they do, they look like this.

**00:21:19**

Brendan O'Brien: Your community is for you.

**00:21:21**

Brendan O'Brien: Everybody here, this is where we go to feel like we're doing good work

**00:21:25**

Brendan O'Brien: and to get the only kind of feedback that we can get from our contemporaries.

**00:21:29**

Brendan O'Brien: But our job is to go take this outside.

**00:21:32**

Brendan O'Brien: And I really want to commend the curators of the conference.

**00:21:35**

Brendan O'Brien: I feel like this is a much more take it outside.

**00:21:37**

Brendan O'Brien: This is not a CRDT conference.

**00:21:39**

Brendan O'Brien: Which is great.

**00:21:40**

Brendan O'Brien: There should be some CRDT stuff.

**00:21:41**

Brendan O'Brien: It's amazing.

**00:21:42**

Brendan O'Brien: Keep your hand in the paint box if you can.

**00:21:44**

Brendan O'Brien: It's very hard.

**00:21:45**

Brendan O'Brien: Don't be upset if you don't do it every day.

**00:21:47**

Brendan O'Brien: Power your arm today.

**00:21:49**

Brendan O'Brien: Come hard.

**00:21:50**

Brendan O'Brien: Hang out.

**00:21:51**

Brendan O'Brien: Encourage the hard questions.

**00:21:53**

Brendan O'Brien: And it's just going to take a lot longer than you think you're going.

**00:21:56**

Brendan O'Brien: So that's me.

**00:21:57**

Brendan O'Brien: I think I have a little time if you want.

**00:21:59**

Brendan O'Brien: I said I would promise something new.

**00:22:01**

Brendan O'Brien: I'm not going to demo it just because I don't want to waste too much time.

**00:22:03**

Brendan O'Brien: But we are just kind of YOLOing this out into the wild right now.

**00:22:07**

Brendan O'Brien: If you go to Pigeons.com.

**00:22:09**

Brendan O'Brien: This is going to be the next thing after jump pipe.

**00:22:11**

Brendan O'Brien: This is SSH, which will let you wrap SSH with the ability to just SSH in any machine anywhere.

**00:22:18**

Brendan O'Brien: I permanently use this because we bought a Mac Studio, so we run local MLMs.

**00:22:21**

Brendan O'Brien: And it compiles rust faster than my local machine cam.

**00:22:24**

Brendan O'Brien: And so come play with this.

**00:22:25**

Brendan O'Brien: This will be a fun trick for you.

**00:22:27**

Brendan O'Brien: I don't have to demo it because it's just like the Wi-Fi here is terrible.

**00:22:29**

Brendan O'Brien: Even for I will.

**00:22:31**

Brendan O'Brien: Yeah.

**00:22:32**

Brendan O'Brien: That's learning.

**00:22:33**

Brendan O'Brien: That's learning.

**00:22:34**

Brendan O'Brien: Thank you.

**00:22:35**

Brendan O'Brien: Thank you.

**00:22:36**

Brendan O'Brien: Thank you.

**00:22:37**

Brendan O'Brien: Thank you.

**00:22:38**

Brendan O'Brien: Thank you.

**00:22:39**

Brendan O'Brien: Thank you.

**00:22:40**

Brendan O'Brien: Thank you.

**00:22:41**

Brendan O'Brien: Thank you.

**00:22:42**

Brendan O'Brien: Thank you.

**00:22:43**

Brendan O'Brien: Thank you.

**00:22:44**

Brendan O'Brien: Thank you.

**00:22:45**

Brendan O'Brien: Thank you.

**00:22:46**

Brendan O'Brien: Thank you.

**00:22:47**

Brendan O'Brien: Thank you.

**00:22:48**

Brendan O'Brien: Thank you.

**00:22:49**

Brendan O'Brien: Thank you.

**00:22:50**

Brendan O'Brien: Thank you.

**00:22:51**

Brendan O'Brien: Thank you.

**00:22:52**

Brendan O'Brien: Thank you.

**00:22:53**

Brendan O'Brien: Thank you.

**00:22:54**

Brendan O'Brien: Thank you.

**00:22:55**

Brendan O'Brien: Thank you.

**00:23:04**

Brendan O'Brien: Thank you.

**00:23:05**

Brendan O'Brien: Absolutely.

**00:23:06**

Brendan O'Brien: And I'm glad that it's being asked directly

**00:23:07**

Brendan O'Brien: and we knew we would get this question.

**00:23:09**

Brendan O'Brien: So first, my co-founder and I invested some of our own cash in the beginning.

**00:23:12**

Brendan O'Brien: We are VC backed now.

**00:23:14**

Brendan O'Brien: And so we have it for some time.

**00:23:15**

Brendan O'Brien: The way that we make money is twofold.

**00:23:17**

Brendan O'Brien: We have services on our computer.

**00:23:19**

Brendan O'Brien: We will sell you supporting infrastructure that we can run for you.

**00:23:22**

Brendan O'Brien: So you can buy a network from us.

**00:23:23**

Brendan O'Brien: And that's really useful.

**00:23:25**

Brendan O'Brien: And so you can run it that way if you want to support us.

**00:23:27**

Brendan O'Brien: And then we also just have a bunch of enterprise outreach work.

**00:23:29**

Brendan O'Brien: And so there's a bunch of places where we can work directly with companies

**00:23:32**

Brendan O'Brien: to give them SLAs around this stuff.

**00:23:34**

Brendan O'Brien: And normally that would feel really weird to be like, we want to do enterprise work.

**00:23:37**

Brendan O'Brien: But we genuinely believe in the sustainability model of this.

**00:23:39**

Brendan O'Brien: And we think there's a nice wind of like, hey, we can maintain the open-source side

**00:23:43**

Brendan O'Brien: and we can maintain some enterprise-looking stuff and not invade the core value.

**00:23:47**

Brendan O'Brien: Right?

**00:23:48**

Brendan O'Brien: The relays are open-source.

**00:23:49**

Brendan O'Brien: The DNS address is open-source.

**00:23:50**

Brendan O'Brien: You need to be able to take this entire stack, jam in your app

**00:23:52**

Brendan O'Brien: and know that you're not going to be deployed into another certain company.

**00:23:55**

Brendan O'Brien: That would be true.

**00:23:56**

Brendan O'Brien: Right.

**00:23:57**

Brendan O'Brien: That's the goal of the project.

**00:23:58**

Brendan O'Brien: It's usually what people ask about conversation.

**00:23:59**

Brendan O'Brien: Because they don't want to talk about enterprise testing.

**00:24:01**

Brendan O'Brien: Tell me about the, you mentioned like, yeah, relay servers or usually

**00:24:08**

Brendan O'Brien: these kinds of, in any kind of peer-to-peer system like BitTorrent,

**00:24:11**

Brendan O'Brien: I think it was one of the first really successful at scale.

**00:24:13**

Brendan O'Brien: A lot of that is they have that initial discovery network.

**00:24:16**

Brendan O'Brien: Yeah.

**00:24:17**

Brendan O'Brien: Which is very lightweight, but does still represent, not quite centralization.

**00:24:21**

Brendan O'Brien: Yeah, yeah.

**00:24:22**

Brendan O'Brien: Yeah, yeah.

**00:24:23**

Brendan O'Brien: Or DNS, I guess you could argue.

**00:24:24**

Brendan O'Brien: Yeah.

**00:24:25**

Brendan O'Brien: How does that work for you?

**00:24:26**

Brendan O'Brien: Yeah.

**00:24:27**

Brendan O'Brien: So, IRB is at best federated.

**00:24:28**

Brendan O'Brien: One of the core things that we're trying to do here is move the intelligence

**00:24:31**

Brendan O'Brien: about how to do networking to the edge.

**00:24:33**

Brendan O'Brien: Right.

**00:24:34**

Brendan O'Brien: We want the device to get smarter about how it does this networking.

**00:24:36**

Brendan O'Brien: So, IRB can configure it to a function where it can't come out

**00:24:39**

Brendan O'Brien: We don't have a relay server at all.

**00:24:40**

Brendan O'Brien: We use that DNS, we use split-to-flow energy.

**00:24:42**

Brendan O'Brien: That is absolutely on-site and like a use case that we want to see flourish.

**00:24:46**

Brendan O'Brien: But in that idealism versus pragmatism, this is where we went with relay servers.

**00:24:51**

Brendan O'Brien: We've made the relay servers as dumb as possible.

**00:24:53**

Brendan O'Brien: They cannot see the encrypted traffic, but they do coordinate connections.

**00:24:55**

Brendan O'Brien: And that's part of how IRB gets its magic.

**00:24:58**

Brendan O'Brien: It's how it works so consistently.

**00:25:00**

Brendan O'Brien: We have to.

**00:25:01**

Brendan O'Brien: We will take your traffic and send it over HTTP 1.1 in an encrypted form

**00:25:05**

Brendan O'Brien: just to get outside of like corporate Wi-Fi.

**00:25:07**

Brendan O'Brien: And so like, it does, that is part of where we make these trade-offs.

**00:25:10**

Brendan O'Brien: We firmly believe that it has to work first, and then we take the ideology

**00:25:14**

Brendan O'Brien: as close as we can to that functionality threshold.

**00:25:17**

Brendan O'Brien: Yeah, and that makes sense.

**00:25:20**

Brendan O'Brien: But of course the flip side of that, and I think I've mentioned to you

**00:25:24**

Brendan O'Brien: every time we talked about it, is my experience with WebRTC

**00:25:28**

Brendan O'Brien: you've seen back in the day where it's like, oh, you've got this

**00:25:30**

Brendan O'Brien: peer-to-peer connection, and then you realize most traffic's

**00:25:32**

Brendan O'Brien: actually tunneling.

**00:25:33**

Brendan O'Brien: Yeah.

**00:25:34**

Brendan O'Brien: So it kind of feels a little bit pretend, and I know you've mostly

**00:25:38**

Brendan O'Brien: overcome that, but still, for example, the venue Wi-Fi here, you can't

**00:25:41**

Brendan O'Brien: have no connection between devices, it just blocks that.

**00:25:44**

Brendan O'Brien: If it's just fully blocked, yeah.

**00:25:46**

Brendan O'Brien: You'd be amazed at what we can do, to be honest.

**00:25:48**

Brendan O'Brien: Yeah.

**00:25:49**

Brendan O'Brien: But yeah, the point stands when you can't get direct.

**00:25:52**

Brendan O'Brien: Just to give you some numbers that we use as juristics,

**00:25:58**

Brendan O'Brien: so this will be weird, but if you don't do that, and you just do stock

**00:26:01**

Brendan O'Brien: always, we expect to see a 95% direct data rate.

**00:26:04**

Brendan O'Brien: And so what direct data rate for us is, over the lifetime of the connection,

**00:26:07**

Brendan O'Brien: how much is actually sent over either IPv4 or IPv6, not the relay.

**00:26:11**

Brendan O'Brien: And so for us, we see 96, 97.

**00:26:14**

Brendan O'Brien: I see regularly 98% of traffic is sent directly.

**00:26:17**

Brendan O'Brien: Very good.

**00:26:18**

Brendan O'Brien: All right.

**00:26:19**

Brendan O'Brien: And a round of applause for Brendan.

**00:26:20**

Brendan O'Brien: Thank you, guys.
