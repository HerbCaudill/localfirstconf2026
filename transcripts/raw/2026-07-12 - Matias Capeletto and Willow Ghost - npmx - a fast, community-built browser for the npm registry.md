---
source: local-first-conf-recording
title: "npmx: a fast, community-built browser for the npm registry"
date: 2026-07-12
speakers:
  - "Matias Capeletto"
  - "Willow Ghost"
source_recording: "../../recordings/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1330-npmx-a-fast-community-built-browser-for-the-npm-re"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# npmx: a fast, community-built browser for the npm registry

**00:00:00**

The conversion community is about building bridges. We are, ourselves, part of many communities.

**00:00:06**

Willow, for example, with the SBEL community, that they are known for innovating a lot.

**00:00:13**

We are, together, part also from the VIT community, that grow to the place it is now.

**00:00:21**

It took us six years to get to where Webpack was, but now I hope that there are some of you using VIT here in the audience.

**00:00:29**

And VIT is a story of building bridges. VIT is where it is, because a lot of projects, like SBEL, like Naxx, like a lot of frameworks, and like even the plugin platform, and like go together and say, like, let's build this sharp piece together.

**00:00:48**

And yeah, Daniel started the project with Naxx, and it's right there. Lovely framework, if you haven't used it.

**00:00:55**

And another very big example of community that is building bridges is EMPN, Ecosystem Performance, that they, I don't know, if you have an NPM package around, probably they go around and like fixing, like, your performance, making it more lean.

**00:01:11**

So, the talk today is about NPM, and it is the largest JavaScript and TypeScript registry in the world.

**00:01:20**

This was last year, actually, like in the middle of last year. From then on, I really want to see this graph next year, because things have gone completely bananas.

**00:01:30**

This is, yeah, I don't know what happened in January this year, maybe you have some ideas of like who is actually using VIT, but it grow like 4x in 6 months.

**00:01:43**

Like for the last years, like for the last years that it was like a, oh, it's growing a lot, it was 2x a year.

**00:01:48**

So, NPM is an interesting story because it is owned by Microsoft at this point, a very large company.

**00:01:59**

And all the data is managed by them, and it is a nice story with how this conference started, about like, how we can assure, like, the long term, you know?

**00:02:15**

NPM was a startup at first, and they almost went under, and Microsoft was there to like, keep it running.

**00:02:23**

But this is basically what they have done, like since Microsoft was keeping it running, but basically just keep it running.

**00:02:31**

And this is one tool that we all use to share, to build bridges between our projects that we really, really need to innovate.

**00:02:41**

And people, because it wasn't innovative enough, have been doing things like in all these categories.

**00:02:48**

There are like three different parts: there is the registry, there is the CLI, and there is the website that we use to browse things,

**00:02:57**

and like, find our packages and get information about them.

**00:03:01**

The registry, like, has seen innovation, we project like HSR and DLT.

**00:03:06**

And one of the problems this project has is that the network effect of something like NPM is just huge.

**00:03:13**

It's like, it's very, very difficult to compete, and if we want to do, like, trying to even think at one point about decentralizing something like NPM,

**00:03:25**

we need to start thinking about how we are going to work out these network effects, what we can do to help them.

**00:03:31**

In the CLI, there are projects very interesting, like YARN, and PNPN, that we use a lot in our ecosystems.

**00:03:39**

And, yeah, so, in the website side, there was not many things, like some little websites showing information.

**00:03:47**

And this was, this is the website.

**00:03:53**

And I can't, yes, I cannot show it in that mode now because the colors are not working.

**00:03:58**

They actually are in that mode.

**00:04:00**

But there was a lot to want from this website.

**00:04:04**

Daniel posted this in Blue Sky saying like, hey, for reasons, like, what are your pain points?

**00:04:10**

And there was like a huge threat of people asking for things.

**00:04:14**

Like, one of the things, like, please start the mode.

**00:04:17**

And then there was a lot of other things about, like, better surfacing, maintainers, like, so many things that we can build up.

**00:04:26**

A lot of people actually were using this page just as a trampoline.

**00:04:30**

You get to mpmx.com and then you go to the github or, like, to the website.

**00:04:36**

And, like, we were not really using the website.

**00:04:39**

And that is something that we wanted to change.

**00:04:43**

We had this pain point.

**00:04:45**

We were actually all just complaining about it.

**00:04:48**

And if you go at an x right now there, you are going to see what we end up doing in community.

**00:04:55**

We actually, like, got mpmx.dev going.

**00:05:01**

And, yeah, now you can go to mpmx.dev for automark, for example.

**00:05:07**

And you can, like, not only see the information that was displayed before, but there's so many more.

**00:05:12**

Like, you can filter by version.

**00:05:13**

There is, like, automatic box generation.

**00:05:16**

And the main thing is that now, as a community, we have this tool.

**00:05:20**

This is at our hands.

**00:05:21**

And we don't have to complain anymore.

**00:05:23**

We can just say, hey, I want to add things to you.

**00:05:26**

If you want to put the work, you are invited to help us build it.

**00:05:31**

And the way that we build it is one very interesting.

**00:05:35**

Is that this ended up being the top, faster growing, emerging open source in Q1.

**00:05:42**

Like, in GitHub, like, by contributors, it was the top one.

**00:05:46**

And it was very interesting because it was actually the only one in the top ten that was not AI related.

**00:05:54**

Like, everything else was AI.

**00:05:56**

So, and yes, this is the people that are building mpmx right now.

**00:06:04**

Almost.

**00:06:13**

I think there must be many of you there, I hope.

**00:06:15**

And one of the things that we have to do is, like, when we in the community, we need, there's, like, things that need access control and, like, decision making.

**00:06:25**

And, like, quickly we needed to put up governance and organize it.

**00:06:29**

This project started five months ago in January.

**00:06:33**

And we already have, like, I see, like, more than 22 maintainers that are, like, recognized by all the work they have done.

**00:06:40**

And our core team already have, like, 11 members.

**00:06:43**

Several of them are here in the audience.

**00:06:46**

And, yeah, like, this has been, like, an amazing journey with the community.

**00:06:52**

Just an example, like, we launched the Alpha, sorry for the flashes.

**00:06:57**

We launched the Alpha with, like, 15 blog posts from everyone in the community.

**00:07:02**

Like, I love the idea that there were a lot of people, they were their first open source project, their first contribution.

**00:07:08**

And they were writing a blog post about their own experience.

**00:07:12**

And, like, mbmx is serving as this community that is helping, like, new, like, people get involved in open source.

**00:07:20**

And we love that product.

**00:07:22**

And this is a very interesting example of, like, this piece of software is now in the hands of the community.

**00:07:30**

Like, we have, like, these noodles that we just put, like, these are already six and they are working on the next one.

**00:07:36**

And I see, like, this is a very interesting detail that shows we can do whatever we want with their website.

**00:07:42**

Like, we are building it for us.

**00:07:44**

And, like, if a lot of people are actually finding it very useful, they are, like, I see, like,

**00:07:49**

200,000 unique users right now, after five months, that is quite a number.

**00:07:55**

But we are building it for us, you know?

**00:07:57**

Like, and you are more than invited to build it with us.

**00:08:01**

And why work for us?

**00:08:03**

Like, first, we really care about empowering people that care, like, from the accessibility community, like,

**00:08:13**

like, international sales station.

**00:08:15**

And, like, this is one of the reasons we think it is good to be here today, is that we want, like, we need people from local first communities in our communities, you know?

**00:08:25**

And it is sometimes a little bit hard, because a lot of the projects that we work on are not local first directly.

**00:08:33**

But they are probably never going to be if there is no people there working with us.

**00:08:39**

So, like, yeah, this is, like, a big invitation to join us and, like, make it yours, make it an example of, like, a good application that you want to show others.

**00:08:47**

And, yeah, we really optimize for adoption with a pragmatic approach.

**00:08:53**

And, like, we didn't like the URL sheet of having, like, a slash package, but we maintain it anyways.

**00:08:59**

Because, like, we care about these little details.

**00:09:02**

Or, like, very trying to get a lot of adoption, and then once we have adoption, we can do things with that.

**00:09:09**

And we are building a sort of an ecosystem, like we say, with, like, building all the bridges.

**00:09:15**

And working in communities is extremely important for us.

**00:09:18**

Like, first, it is human first.

**00:09:20**

We have, like, some stickers that say that around, like, everybody is using actions, but, like, they are working for us.

**00:09:27**

We are not working for them.

**00:09:29**

And everybody that shares our values is welcome.

**00:09:33**

It's, like, this is not, like, a carte blanche.

**00:09:35**

But if you share our values, you are more than welcome to work with us.

**00:09:38**

And new contributors are treated as peers.

**00:09:42**

And new contributors, as Charles started, has a lot to give to the project.

**00:09:47**

And it's always about community.

**00:09:49**

So, like, we are doing these talks together, normally, in MPMX.

**00:09:53**

So, I'll pass.

**00:09:54**

Hi.

**00:09:55**

So, I want to start off with a little anecdote.

**00:10:00**

For me, I got my, sort of, real start in my tech career, really, through meetups.

**00:10:06**

I've been hanging to them since the 2021.

**00:10:10**

And I think without that, I wouldn't be standing here today.

**00:10:15**

There's a thing somewhere about the four types of luck, one of which is the luck of emotion.

**00:10:21**

And I say I'm lucky to be here, not because it randomly happened, but because I joined a community, and through that, I was heading in the right direction.

**00:10:31**

And then things happened along the way, like being this talk, like MPMX.

**00:10:36**

I was talking to someone before this, called Mateo, who will show their project soon.

**00:10:42**

And they shared that MPMX was able to help them, like, overcome burnout, they felt for a couple of years, with open source.

**00:10:53**

Because the missing piece they didn't have was the community.

**00:10:57**

The point isn't, like, MPMX is some magical thing.

**00:11:02**

Communities exist everywhere, and you just have to find them.

**00:11:05**

I mean, the people in this room are more now.

**00:11:09**

MPMX is built on the shoulders of giants.

**00:11:12**

These are just some of the projects that are most visible, that we depend on.

**00:11:16**

But there are hundreds of dependencies under these, that make it possible.

**00:11:20**

All of them have communities.

**00:11:22**

As Mathias mentioned earlier, a lot of us are part of the VE community, or the NUX community.

**00:11:28**

But we've been able to build bridges to things like the aperture community.

**00:11:36**

I thought it was interesting, this is just over the last month, how much activity we've had in the NPMX repo.

**00:11:43**

And I wouldn't say NPMX is, like, one of the most active.

**00:11:47**

But this is incredible.

**00:11:50**

Most of these are human, well, all of these are human-driven contributions, regardless of whether they use AI or not.

**00:11:57**

We can use their voice.

**00:12:01**

This is some statistics from a project called Agentscan, which is by Mateo.

**00:12:06**

And the goal of this is to try and help reduce sort of the spam.

**00:12:12**

For example, we've had, like, two instances, I think, of people coming and, like, spamming a dozen PRs.

**00:12:20**

That are, like, fine, but they're not interacting with us.

**00:12:26**

Daniel Rowe wrote this blog post, and he's the oldest student of NPMX, about never letting AI speak for you or think for you.

**00:12:35**

We don't mind whether you use AI, but we want you to interact with us in NPR.

**00:12:41**

And we want to build a community with people, not Clankers.

**00:12:53**

This also makes me think of Blue Sky.

**00:12:55**

And I know a lot of you here will be using Blue Sky in part because of Aperto.

**00:13:00**

But I think the platform would have succeeded without that.

**00:13:04**

The reason a lot of us left X and went to Macedon or Blue Sky isn't because the platform itself is bad.

**00:13:13**

It's because the people running it are.

**00:13:15**

They took an idea that I think is fundamentally great.

**00:13:25**

The idea we can write our thoughts online and reach those people.

**00:13:30**

I think currently I have about 500 bookmarks on Blue Sky, all of which are blog posts with incredible ideas that I hope one time I can read them all.

**00:13:40**

These are two examples, one of which Mateus shared at the beginning, which is kind of the start of NPMX.

**00:13:48**

And then this one is from Mateo, who showed, like, this is the agent scams born through a conversation on Blue Sky.

**00:13:59**

Which then leads us to the obvious, right?

**00:14:02**

Blue Sky is built on Aperto, which is a wonderful decision.

**00:14:06**

And we can have a PDS, for those who don't know.

**00:14:09**

A PDS is essentially your own database with all your data.

**00:14:15**

So that's like your Blue Sky likes and your posts.

**00:14:19**

The way that Blue Sky is designed allows it to be, like, largely decentralized.

**00:14:25**

So you can take your data and put it on a server that Blue Sky doesn't control.

**00:14:31**

Whether that's something you run yourself, or more likely something like NPMX Social.

**00:14:36**

And we already have nearly 600 people migrating.

**00:14:40**

And it's super easy to move.

**00:14:42**

Bailey, the one who runs this, also known as pds.dad, also makes a thing called PDS Mover, which makes it super easy.

**00:14:54**

NPMX is really why I took the time to learn about Aperto.

**00:14:58**

And so, moving my account away from Blue Sky was a part of that.

**00:15:04**

We're also working with Eurosky.

**00:15:07**

Their mission is to create a European PDS, sort of a help for digital sovereignty.

**00:15:15**

It's always been in the back of our minds that over-reliance on foreign clouds is a terrible idea.

**00:15:23**

Governments who rely on these have lost a lot of power to these countries that have complete control over the data.

**00:15:34**

And us as individuals have no direct say over how our data is handled.

**00:15:39**

The idea that if our country or the European Union holds our data,

**00:15:45**

then theoretically we have the power to help keep that data safe by voting.

**00:15:51**

But we don't have any say about what America does with our data.

**00:15:56**

If you take a stay, well, short cycle ride, then you can end up at Hebsen's data center in Nuremberg,

**00:16:04**

which is where the PDS is running.

**00:16:07**

All of the data on NPMX Social is loose in Germany, in the EU, and is much safer than in Blue Sky.

**00:16:18**

The interesting thing is that everything on the PDS is open.

**00:16:24**

There are these ideas and RFCs about private data.

**00:16:29**

But the most interesting part here is we can see that our handle, our ID, which is effectively an address to find us.

**00:16:39**

Like, we can change our handle, we can move our data, and we don't lose our followers and our interactions with other people.

**00:16:48**

Taproot, which is this website, or this PDSLS, also lets you see this kind of little timeline.

**00:16:55**

You can see that we signed up as NPMX dot Blue Sky dot Social.

**00:16:59**

And then we quickly changed our handle to NPMX dot Dev.

**00:17:03**

This can be changed any time, and you won't lose anything.

**00:17:07**

And then later, we moved to NPMX Social.

**00:17:12**

From here, we started to think, okay, how can we make, what does having our data in APRO to unlock for us?

**00:17:20**

And the most fun thing we could think of was Likes.

**00:17:24**

So here you can see I'm liking the auto-merge package, and this is a nice little animation.

**00:17:30**

And this data is actually stored in your PDS.

**00:17:35**

This is my one.

**00:17:36**

You can see that I have this collection, which is sort of grouping data together, called dev.np-next.feed.like.

**00:17:45**

We can take a look inside, and we see that we have this pointing to auto-merge, which we just liked.

**00:17:52**

So the reason it's a link instead of just the string is because another community tool from Microcosm called Constellation automatically indexes every link it sees.

**00:18:04**

And part of the protocol that you can learn more about in other talks, I'm sure, is a live event log of everything that happens in the network.

**00:18:15**

So we can then ask Constellation for everything that points to this link.

**00:18:21**

We use the API here, and then we can pass in the collection, dev.np-next.feed.like, and the field that we're looking for.

**00:18:32**

In this case, it's called subject ref.

**00:18:34**

And then the subject, which is our URL.

**00:18:38**

We then get back a list, a total amount of records.

**00:18:42**

In this case, four.

**00:18:43**

And the records individually, which on our platform we don't currently look at unless it's your, like...

**00:18:51**

From this, we can build some fun things.

**00:18:54**

For example, leaderboard.

**00:18:55**

It's called leaderboard.

**00:18:56**

It's very clearly learning.

**00:18:57**

Thank you very much.

**00:19:03**

And that's coming in a close second.

**00:19:08**

But we can also build other cool things.

**00:19:13**

This is in a PR from Philippe, where he is playing with streaming the likes live on the website.

**00:19:21**

And you can see here, that when you turn on relative dates, the leaves of the light are shot higher.

**00:19:30**

We can also integrate with other communities.

**00:19:32**

You might have seen these warnings on the website saying you might not need a dependency.

**00:19:37**

And this is from the E18E community, who maintain a list of module replacements that suggest modules that can be placed with either faster ones, smaller ones, or even native code.

**00:19:51**

You might be using something like chalk, which can cover text in JavaScript.

**00:19:56**

But did you know that Node added, I think it was Node 20, a built-in way to do that?

**00:20:03**

You can also read the website.

**00:20:06**

For example, Fastball can be replaced with Tiny Bobby, and now it can also be replaced with a Node native built-in.

**00:20:13**

You can see that the E18E community has had a good amount of success in helping migrate packages to these smaller and faster ones, depending on their needs, and overall improving the performance of the ecosystem.

**00:20:28**

And we integrate with this data to make it more visible to users and yourself what's changing.

**00:20:38**

The last thing that we've done with E2Me is added a package timeline, which can show you the size of the package, as well as interesting events here.

**00:20:46**

You can see that data finesse has shrunk over time.

**00:20:51**

It's important to remember that packages' size and dependencies aren't all bad.

**00:20:55**

It's about being mindful with them.

**00:20:57**

I'm a bit biased here because I'm part of the E2Me team, but it's very fun to build these things.

**00:21:09**

Thank you.

**00:21:10**

Yeah, so where do we go from here?

**00:21:14**

MPMX is as much as a community as it is a website.

**00:21:19**

And this is that we have other pain points and we like working together.

**00:21:24**

So the idea is that let's see what else we can do.

**00:21:28**

And also try, if not ourselves, we don't need MPMX to do everything, but let's build bridges and help others and get help from others.

**00:21:36**

And to do that first, I think that this is one of the things that Local First has a lot to give.

**00:21:43**

Not only on the data part, but on the long-term sustainability part.

**00:21:47**

Like, you have to really care about this for Local First.

**00:21:50**

So that you can help us, like, help us understand better how to do governance, how to do funding, how to have healthy communities long-term.

**00:21:58**

So that we have, yeah, our tools can last and our data can be accessed forever.

**00:22:05**

And we have some examples of where we can go from here, but maybe I shall go through them quickly.

**00:22:13**

And in the update, if you are around and want to talk with us, there are several of us and we can, like, talk about some of these.

**00:22:21**

One of the first things that we can do is just to keep improving MPMX and just focus on making it the best browser for the MPM pressure stream.

**00:22:29**

But maybe, like, the browser idea can help us in other ways.

**00:22:33**

Let's say that it could be a neutral layer over, like, Shavascript registries and let's try to have JSR or if there is a decentralized MPM registry later on.

**00:22:44**

Maybe we can help with discoverability.

**00:22:46**

You have, like, a search that shows you packages across all the registries and not only one.

**00:22:51**

Or maybe we can try to expand into other registries and give a more unified browser experience across PiPi or Crates.

**00:22:59**

These are other foundations and they have, like, but there is also things that we can still do there.

**00:23:05**

And maybe we can extend the browser idea, like, wider.

**00:23:11**

Let's, like, maybe do a browser for notifications.

**00:23:14**

For example, people from Tangle are here.

**00:23:17**

There is a lot of innovation on, like, four sheets right now.

**00:23:21**

And we are going to have, like, notification in several windows.

**00:23:24**

It would be nice to have, like, a unified experience over them.

**00:23:27**

And maybe we can try to do some innovations, like, show us the security of the experts and things like that.

**00:23:34**

And, yeah, this one is, like, Daniel is playing with the proof of concept for this.

**00:23:39**

And this is interesting, maybe, like, there is an air store that is a data layer native to you.

**00:23:45**

And maybe it's interesting for people here that we can talk about it.

**00:23:49**

And, yeah, for me, like, one of the things that is very exciting is all the app proto stuff.

**00:23:55**

And, like, one interesting project is Keytrace that Ortha, one of the maintainers of the MPMX, is also working on.

**00:24:03**

And this is the idea of, like, it, like, puts all the claims in your own PDS so it is very stable.

**00:24:11**

You can later on move your domain, your identity anywhere, or you can move the data.

**00:24:15**

But then you can, like, prove that this domain is actually this user in MPM, this user in GitHub, this user in another.

**00:24:24**

And we can use this information maybe to start saying, like, where is actually our project data?

**00:24:30**

Like, these are, for example, our sponsors and our team.

**00:24:35**

But this information, every open source project has their own ad hoc stuff.

**00:24:39**

And if we could start having, like, lexicons and, like, conventions for these things, we could do so much.

**00:24:45**

We could, like, start to show, like, yeah, a little more for sponsors and maybe have more funding.

**00:24:50**

Or, like, yeah, or show who is really behind a package.

**00:24:53**

Because the maintainers that you see in MPM, that is only the one that has permission, not the real people.

**00:24:59**

And, yeah, so, we are doing a lot of time.

**00:25:04**

So, yeah, let's build for the long-term, gain control over our data and also our tools.

**00:25:12**

Like, even if data is, I agree, more important, like, also, like, building tools in a communal way, it is extremely important.

**00:25:19**

And I see that we have more agency when we work in community, when we learn from each other.

**00:25:25**

Like, we put breaches all around and, like, all work together.

**00:25:31**

So, yes, let's raise new breaches.

**00:25:34**

Like, if you want to build with us, you can go to build.mpmx.dev.

**00:25:38**

The repo is there and the social link is there.

**00:25:41**

We have a meetup on Wednesday that if you go to social.mpmx.dev, you can actually, like, see the details.

**00:25:48**

Like, see that it does for you.

**00:25:51**

Thank you.

**00:26:02**

All right, time for just one quick question.

**00:26:04**

So, obviously, you're building this front-end, but you don't control the registry itself.

**00:26:09**

So, I can imagine that both creates challenges.

**00:26:12**

Maybe there's features you want to do that would be easier or work possible if you have registry control.

**00:26:17**

But there's also platforms.

**00:26:18**

Maybe at some point, the registry controller decides, you don't like what you're doing.

**00:26:22**

And that cuts you off.

**00:26:23**

How do you think about those pieces of it?

**00:26:26**

Yeah, the registry, there's a lot we can do.

**00:26:30**

Like, you're playing around with analyzing it and trying to normalize the data because there's no structure to it.

**00:26:37**

And I think that the best we can do from the website, we are not going to do a registry ourselves, but if somebody here wants to do a decentralized registry and we can help in any way to get you adoption, then let's talk.

**00:26:53**

Okay.

**00:26:54**

Let's give Matthias and Willow a hand.

**00:26:55**

All right.

**00:26:56**

Up next, Lightning Talks.

**00:26:57**

I like this.

**00:26:58**

The energy's up.

**00:26:59**

The demos are up.

**00:27:00**

And for this next one, plain text always wins, right?

**00:27:01**

It's having a moment.

**00:27:02**

But let's be honest, we've all loved plain text files for a long time.

**00:27:16**

Before they were cool.

**00:27:17**

Is that the way they put it?

**00:27:19**

And then the domain of calendars is one I'm personally very interested in.

**00:27:23**

It's one of the very pieces of software infrastructure we all rely on in our daily lives, but it doesn't get that much flow.

**00:27:30**

So give it up for Tristan.

**00:27:32**

Thank you.

**00:27:37**

All right, hi, everyone.

**00:27:39**

I'm Tristan.

**00:27:40**

And I've got a confession to make.

**00:27:43**

to make. I am a plate-text-a-hole-wake.
