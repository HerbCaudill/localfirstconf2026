---
source: local-first-conf-recording
title: "Habitat: building a world with data agency"
date: 2026-07-13
speakers:
  - "Arushi Bandi"
source_recording: "../../recordings/2026-07-13 - Arushi Bandi - Habitat - building a world with data agency.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1445-habitat-building-a-world-with-data-agency"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Habitat: building a world with data agency

**00:00:00**

So, hi everyone, my name is Arushi and I'm the CEO and co-founder of Habitat, a company whose mission is to bring user data agency to the world.

**00:00:24**

And originally this was supposed to be a tech talk explaining some of the details about how we plan to do that.

**00:00:31**

But instead, in the last couple of days, I decided I wanted to stir things up a little bit.

**00:00:37**

Because in the context of local-first, if you were to sum up what it is Habitat is doing, it's really this. It's giving people servers.

**00:00:47**

But a super brief intro about me first. The last few years, as Adam said, I've worked on building sync engines to power real-time collaboration at Figma,

**00:00:58**

and spoke at Syncomps about that. And prior to that, I studied computer science with a focus on security and privacy,

**00:01:05**

particularly web privacy and how users are tracked across the internet. So both the values and the technical ideas of the conference are very near to my heart and important to me.

**00:01:17**

So let's get into it. So this is my recreation of one of Martin's slides from yesterday, demonstrating what kind of the north star of local-first looks like.

**00:01:27**

And I wanted to unpack some of the ideas in this diagram. Specifically the idea that a server, including but not limited to sync servers,

**00:01:36**

can be avoided or not a primary source of data. And also I want to clarify that in this kind of setup,

**00:01:44**

we're typically talking about application provider servers, so like Google, cloud servers, Slack, Figma, etc.

**00:01:52**

Like Jake pointed out before, there's already a lot of shared infrastructure in the form of servers that we depend upon beneath this layer.

**00:02:02**

And I think that diagram in this situation holds true for data we think of as personal. So things like your computer's files,

**00:02:10**

or what you might back up to add cloud or something similar. But of course, we need collaboration across devices and people.

**00:02:21**

And there's a lot of work in this space around peer-to-peer protocols and data structures, such as WebRTCs, CRDTs, that are trying to make this sort of thing possible.

**00:02:31**

But as we've seen, that's obviously not easy. That's the whole reason IRAM exists, why this conference exists, and things like this.

**00:02:41**

And even if these technologies do succeed, which I hope they do, that's still not the whole picture.

**00:02:47**

Because we need servers for a variety of other reasons. For example, what about data that's not mine or yours, but part of a larger entity?

**00:02:56**

Should that really be stored across local devices? And permissions are really hard in this model, because there's no essential authority.

**00:03:03**

But sometimes you just want that. Another example is search. How does search work in this model?

**00:03:09**

I think it's possible to build up a search index like this, but it's hard and it's unclear if it makes sense to do.

**00:03:18**

So, I think what we refer to as think servers or application servers are not necessarily backups and not necessarily secondary.

**00:03:27**

I think they're a very primary use of this puzzle.

**00:03:30**

But I do think that diagram got something right. And what it gets right is this intuition that the cloud is a source of power, centralization, and often entrapment for users.

**00:03:41**

It's worse for users and even worse for society. But as you know, the cloud is just someone else's server.

**00:03:50**

So what if we could just give people servers? And that's the approach that we're taking at Habitat.

**00:03:56**

So this is Erin Brockovich's map from the community data center reporting project. And we know that many data centers are about to be built.

**00:04:05**

Many data centers and servers exist already. So there's a lot of existing infrastructure.

**00:04:12**

What if we can make use of this infrastructure to achieve some of the common goals of local first?

**00:04:17**

Habitat is also building for organizations. So that term can be understood in a variety of ways, but really we're building for groups of people working together on a shared cloud.

**00:04:30**

And I think that's a big reason that we've approached things differently when thinking about local first.

**00:04:35**

So a lot of the discussion in local first imagines things from an individual's perspective. How can I get rid of big tech products and how can I get my data back from the cloud?

**00:04:49**

But most of what people do on their computer isn't alone. A lot of the data they work with might not even be their own.

**00:04:56**

Whether that's for work or for play, much of the data we create is meant to outlive us and our contribution to it and search someone or something else.

**00:05:06**

So for us, we're asking, what does it look like to have agency over the data we use to do things together?

**00:05:12**

And what are the technical primitives we need to build to achieve that?

**00:05:17**

And then I use the term data agency because we are really trying to think about this beyond an ownership lens.

**00:05:23**

So you can imagine tomorrow there's a law passed saying every single provider needs to give me a way to get my data out of it.

**00:05:30**

And I think Europe may have some of these laws already.

**00:05:33**

It's not clear that that necessarily makes my data more useful to me or puts me more in control of my data.

**00:05:39**

Especially concerning things like interoperability or governance.

**00:05:43**

Okay, so what are we actually building?

**00:05:48**

How we had is building an organizational data server, which is roughly analogous to and inspired by personal data servers and app protocol.

**00:05:57**

But we're also building a feederset that's specific to groups of people and organizations.

**00:06:02**

So that includes things like permissions and groups that are owned.

**00:06:05**

For example, your team and docs should be the same as your team and your chat app.

**00:06:10**

But also foundational developer platforms for it is like search and things.

**00:06:19**

Yeah, and going back to the original diagram, our work star looks something more like this.

**00:06:25**

And I think it's probably true of app protocol as well.

**00:06:28**

So peer-to-peer sync becomes much less load-bearing when you can rely on a server that you own.

**00:06:33**

And that's exactly what Jake's demoed with the app for the docs editing.

**00:06:38**

Application servers can still be implemented in the quote-unquote classic way of seeing things in Web 2.0.

**00:06:45**

The goal is that over time, these owned data servers can become more powerful so that less work can be done by the application server.

**00:06:53**

So for example, right now in both Habitat and App Protocols PDF, you can't really build up an index on the data server for what it just says.

**00:07:04**

As another example, Habitat server implements a search API which both users can use to search over all of their data as well as developers can use it instead of implementing their own.

**00:07:15**

So like Martin said, in order for this new one to become successful, we need to standardize and commoditize.

**00:07:26**

And for us at Habitat, we believe that there needs to be a data layer within kind of the internet stack operating between transport and application,

**00:07:35**

where data can be owned by users and entities.

**00:07:38**

That's why we pick that protocol so often because the PDFs and all the other pieces give a lot of good permits for that.

**00:07:47**

But we want to standardize and commoditize this data server layer.

**00:07:54**

So one of the things that I like about this approach is that it's really honest.

**00:08:07**

Servers are useful.

**00:08:09**

You can do a lot of data about a server that is simply not practical or it does not make sense to do on your own devices or across distributed local devices.

**00:08:18**

But I think that honesty opens a space for new ideas and new problem statements.

**00:08:23**

So for example, rather than asking how can we avoid a centralized server,

**00:08:28**

a Habitat we're asking how do we ensure people can choose where their servers are and what infrastructure they depend on.

**00:08:35**

So one thing we're going to do is deploy Habitat across many cloud providers, hopefully including local cloud providers, if people have that choice.

**00:08:47**

The other thing I like is that local first becomes an application concern.

**00:08:51**

And what I mean by that is that it's about whether your products can be faster and not relying on network calls or whether it works in airplanes.

**00:09:00**

But if we can give people servers and architects it the right way, then we actually get a lot of these values for free.

**00:09:11**

A lot of people have been asking me why now? What made you leave Pigma to build Habitat?

**00:09:17**

I decided to stop being a worker and join the chat.

**00:09:21**

But like I said, Habitat's mission is to build a world with data agency.

**00:09:25**

And increasingly we are seeing people and businesses and organizations actually ask for that.

**00:09:31**

They're saying, I have all this data.

**00:09:33**

How do I make it parsable and usable to someone else by giving it to an LLM?

**00:09:39**

Context engineering or giving agents the right context requires data agency.

**00:09:44**

It requires getting access to your data at the time and in the form that an agent needs.

**00:09:50**

Which touches things like data access and interoperability.

**00:09:53**

Historically our brains have been such an interface with excellent properties for on-demand access and interoperability across the data types.

**00:10:03**

But obviously agents don't have a brain and that's not the provocative part of this time.

**00:10:12**

So, I think also if you think about the lifespan of software, the tools that we use used to change across the span of decades.

**00:10:20**

Then it became years.

**00:10:22**

And it's probably going to get a lot shorter than that.

**00:10:25**

But the piece that should become ephemeral is the application layer or the surface level.

**00:10:31**

That requires unbundling data from the application so that underlying data still remains even after the surface changes.

**00:10:39**

And to do that, we really need standards around how data is stored, what it looks like, how you access it.

**00:10:45**

Which is exactly what is happening in our protocol and how that happens.

**00:10:50**

And then finally, as web coding has gone mainstream, many people are creating what I call contextual spaces online.

**00:11:01**

And these are all real examples of what I've seen people make.

**00:11:04**

I didn't make any of them.

**00:11:06**

These feel to me maybe like the 2026 equivalent of building your own website in the 90s.

**00:11:12**

But it's social.

**00:11:13**

So people are sharing data back and forth.

**00:11:15**

And oftentimes it's not public.

**00:11:17**

You can't get it.

**00:11:18**

You can't just look at what's happening.

**00:11:20**

You have to be incited into a group.

**00:11:22**

Wouldn't it be nice if these operators were on the same data layer?

**00:11:26**

So they're not rebuilding the whole stack from scratch.

**00:11:29**

And the data's not saddled and can be reused in other places.

**00:11:33**

So that's really all I have for today.

**00:11:40**

If you're interested in learning more or working with Habitat, we're looking for developers to collaborate with.

**00:11:46**

And I'll also be in Berlin for about a month.

**00:11:49**

Feel free to email me or put your email on this website.

**00:11:52**

I'll reach out to everybody out here.

**00:11:54**

And thank you so much for coming to my talk.

**00:11:56**

I hope you enjoyed it.

**00:12:06**

I like all this talk of removing servers.

**00:12:07**

And your answer is just give people a server.

**00:12:10**

Yeah.

**00:12:11**

But it makes a lot of sense.

**00:12:12**

There are things you cannot do on mobile devices.

**00:12:14**

Something that's connected all the time is a lot of storage.
