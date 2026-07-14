---
source: local-first-conf-recording
title: "Reflections on building cloud and local hybrid machine entities"
date: 2026-07-13
speakers:
  - "Armin Ronacher"
  - "Colin Daymond Hanna"
source_recording: "../../recordings/2026-07-13 - Armin Ronacher and Colin Daymond Hanna - Reflections on building cloud and local hybrid machine entities.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1130-reflections-on-building-cloud-and-local-hybrid-mac"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Reflections on building cloud and local hybrid machine entities

**00:00:00**

Good morning, everybody. Pleasure to be with you all here. Thanks, Adam, for the kind introduction. I think he's absolutely right. We're standing for, I think, a company and a set of ideals that just says, here's the technology, but we're the ones who wield it, and we've got to learn it, we've got to use it, but that doesn't mean you need to forego our control or our power.

**00:00:29**

So, I'm Colin. I'm a partner in a company called Airendel. A company called Airendel. Airendel was formed last year, and it's a public benefit corporation that was created to craft software and open protocols that strengthen human agency, and this is embedded, actually, in the founding charter of our company.

**00:00:53**

Today, we're a small band of humans dedicated to crafting better ways to wield AI, and we do that by building tools out of the open, designed to be shaped by the humans we're using.

**00:01:08**

So, I think, one of the problems we solved when we started the company was that the frontier AI staff, the impact between pre-training capacity, the models themselves, often reinforce losing data, harnesses, and the opportunity to sit on top of them, are rapidly converging toward a few wall platforms.

**00:01:30**

Not only that, those same platforms are actively encouraging humans and builders to forego their agency, and let the agents, quote-unquote, do the full job.

**00:01:42**

A solution that we'd like to see in the world and that we're building towards is an open-source frontier AI stack that is neutral, freely composable, and maximally controlled by the enemy.

**00:01:56**

This is the stack as it stands today. It's evolving. You can see right in the middle is a harness that was built by our friend and partner Mario called Pi, and Pi has been a phenomenal example of the kind of principles that we stand for.

**00:02:15**

But there's other aspects up and down the stack that we're actively working towards. Our intention is to either they're open-source out of the box or progressively making them more open-source.

**00:02:26**

And we think that these kinds of primitives, when delivered to end-users, give them freedom and control over a really, really powerful new technology that we, as the end-users and as humans, deserve to be in control over.

**00:02:41**

And that's one of the kind of the guiding forces for us as a company.

**00:02:45**

Now, we're at the local FIRST conference. And I think what's really interesting about this new set of technologies is almost at each layer, almost at every component, one can make a choice about whether it's going to run locally or whether it's going to run in the cloud.

**00:03:02**

And, in fact, a lot of the architectures, as many of you know, they're already hybrid, right? So, the harness layer is often running locally on your machine, while the entity leverages some global stake.

**00:03:15**

Now, what do we mean by an entity? An entity is an agent. It's just that we believe that we are the agents. So, an entity is often something that is sitting on top of a harness, or it's a more opinionated version of a harness that has access to, perhaps,

**00:03:32**

a more robust set of tools, some deeper context, perhaps a personality has been placed in it. And the quality of an entity above the harness, I think, above all else, is that entities aim to be persistent and coherent across different service areas.

**00:03:47**

And I think, here, we'll dive into it a little bit, because people want to interact with entities that bring the benefits of local FIRST. They want context, the inception ownership to be local, they want that customizability, and they want privacy.

**00:04:02**

At the same time, they want that entity to feel coherent and capable across interfaces, and to be able to manage access to relevant context, to relevant data stored globally.

**00:04:14**

And so, the entity inherently needs to be a hybrid. There are pros and cons to this, right? For example, one of the great things about running things completely locally is you can leverage residential IPs,

**00:04:29**

and a lot of third-party services and things on the web, assume that you're a human, even when a human fact may not be.

**00:04:35**

The other benefit of it is you can access a cheaper compute that you own that's sitting on your lap or on your desk at home,

**00:04:41**

rather than relying on some sort of markup on compute that some third-party provider is giving you.

**00:04:45**

You have ownership over the context of data, to the extent that you're not sending it over API to some LLM,

**00:04:51**

but, you know, Armin will get into that a little bit later. And things are inherently private.

**00:04:57**

On the con side, you have availability issues. If the device that you're primarily relying on for compute is off,

**00:05:03**

how do you access that session? How do you access that context? And there are sort of inherent issues around multiplayer and collaboration,

**00:05:11**

which are not as normal, but nevertheless, you're sort of challenging to architect towards in a completely local first environment.

**00:05:19**

On the flip side of the cloud side, you get available, you get access to cloud-based third-party interfaces,

**00:05:25**

but the downside is you have cloud IPs where people are often blocking you out and you have sort of auth issues.

**00:05:31**

Your data ownership and access is no longer yours. It's not sort of within your four walls, within your hardware.

**00:05:37**

And there are a lot of security aspects. One of the first enemies that we built is we built to be email native,

**00:05:43**

and something that is globally accessible and globally reachable inherently is going to have a larger threat service area

**00:05:50**

than something that you can't contain on your machine.

**00:05:54**

So navigating these trade-offs overall to build these hybrid entities in a principled way without compromising on trustworthiness is really, really non-trivial.

**00:06:06**

And to give you an example of both the opportunities and sort of challenges associated with architecting these in the right way,

**00:06:13**

Arm is going to take you away.

**00:06:21**

I don't want to ditch you too much of our stuff, but a lot of what I'm going to talk about in the next couple of slides is build a top of Pi,

**00:06:33**

or like, it's based on the architecture of the Pi focus.

**00:06:35**

So if you want to learn more about it, you can go to the data and you want to find plenty of it.

**00:06:41**

And I think what's important is that when I talk about Pi, there's basically two parts.

**00:06:46**

One is a coding agent, so you can download this and it sort of works like a protocol or a codex or whatever.

**00:06:51**

But more importantly, it's a building block. It's a harness you can build and make your own harness out of it.

**00:06:56**

It's very minimal out of the works.

**00:06:59**

But it has some really important qualities, which ironically are, even without being intentionally designed,

**00:07:06**

are very close to what Local First has to deal with.

**00:07:11**

And in fact, at the end of this, I'm going to link to a work post that I wrote at the end of last year.

**00:07:17**

I encouraged some people building harnesses in LLens to the Local First community

**00:07:23**

because they have to deal with a lot of problems that actually ideally an LLN also deal with.

**00:07:27**

And so the way we like to think about this, there's three parts of states that can live in different places

**00:07:56**

with different primary stakeholders, like whoever is the responsible that has the master record.

**00:08:04**

One is the GPU state, so when you, unfortunately today, most likely your GPU is not on your computer,

**00:08:10**

your GPU is somewhere in the data center.

**00:08:12**

And so there's some state over there.

**00:08:15**

And the reason why there's a state over there is because the kind of interactions are,

**00:08:19**

maybe you should do a little poll, like how many people have worked with codex or codex?

**00:08:23**

Okay.

**00:08:24**

So you should be familiar with it.

**00:08:25**

So basically you're, you're writing to the machine, the machine response.

**00:08:39**

So it's really, really close to learning.

**00:08:41**

It doesn't just reply you with text, it also replies to tool calls.

**00:08:44**

It's tool calls that they have executed.

**00:08:46**

So each time the machine stops naturally interacting and you're giving it another prompt,

**00:08:52**

you want to continue where you left off.

**00:08:54**

And so what you maintain on the cloud is a KV cache, so that you don't have to put the whole thing from start.

**00:08:59**

You're going to continue where you left off.

**00:09:01**

So there's some state that's sitting in some open studio.

**00:09:04**

And then we have ancient local state, which is data that actually never goes to the LLM,

**00:09:09**

but it's functionally still relevant to continue your state.

**00:09:12**

So for instance, if you use something like pi, it's possible for you to change your thinking level in the stream.

**00:09:17**

Or you can change the model from a GD family model to an entropic family model to an open weights model.

**00:09:23**

And that transition is still maintained in the session log, but it's actually never sent to the LLM.

**00:09:28**

So there's an ancient local state.

**00:09:30**

And then we have what I would call persistent state, which is when the agent executes two calls,

**00:09:34**

it's manipulating the files, it's maybe writing to a memory file.

**00:09:38**

So there's this state as well.

**00:09:40**

So it's all about how to figure out which state to send where.

**00:09:44**

And I hope it's somewhat readable, but you don't have to read the details.

**00:09:49**

But this is basically a mock session transcript, session file.

**00:09:54**

I don't know if you've ever seen this, some spit out like this, but it's usually as a header,

**00:09:59**

which says like what session I write.

**00:10:01**

And then it has entries in it.

**00:10:03**

In Pi's case, and this is also the case for some of our coding practices like a plot quote,

**00:10:08**

this is in fact a tree.

**00:10:10**

Trees are great because it means you can branch, you can fork it,

**00:10:13**

so it's possible for you to rewind the conversation and have another go.

**00:10:18**

Go without losing all of this.

**00:10:20**

Trees are also great for replication.

**00:10:22**

So the second line here is what's called the model change message that basically says that

**00:10:26**

from this point onwards we're talking with GPT 5.3 codex.

**00:10:29**

So if I'm replaying this append on the log,

**00:10:31**

I know that from this point I'm going with our codex.

**00:10:34**

You could have another message in the end,

**00:10:36**

like from this point we're going to continue talking with anthropic models, for instance.

**00:10:41**

And then the third message here, or third entry here is a user prompt,

**00:10:45**

where the user says like added article toggle to settings,

**00:10:48**

and then the agent replies with, oh add the toggle to persistent reference.

**00:10:52**

This is how you think about this.

**00:10:54**

So this probably looks familiar.

**00:10:58**

But it is actually when you think about it a little bit not as straightforward

**00:11:03**

because this append on the log basically maintains different kind of state everywhere.

**00:11:09**

So the agent has some state on its side that has to maintain.

**00:11:12**

And then I have to send messages to the GPU for the GPU to give me more data.

**00:11:16**

And then obviously you have file systems that I also state here that gets changed.

**00:11:21**

And in a perfect world I should be able to take my session transcript

**00:11:28**

and take it to a different machine.

**00:11:30**

So it's like I started my task locally in my computer.

**00:11:33**

I should be able to take session transcript, put it in the cloud, and think in New York.

**00:11:37**

And if in fact all my tool calls are sort of running on some remote sandbox,

**00:11:42**

it doesn't actually matter that much if my session transcript is here

**00:11:46**

or if the session transcript is over there, I should be able to continue.

**00:11:50**

We are in fact doing that.

**00:11:52**

So if you ever spent time in the last week or so with the PI issues right,

**00:11:56**

you will see that when someone adds PI Analyze label on an issue,

**00:12:01**

in the cloud in GitHub Actions we will run some analysis.

**00:12:04**

And the output of that is a session transcript that the developer can take

**00:12:08**

and continue on the machine only.

**00:12:10**

Maybe just so that they don't have to wait five minutes for the analysis to run,

**00:12:14**

but they have the session state exactly the state of the model.

**00:12:17**

So it's very, very convenient.

**00:12:19**

In theory, you're supposed to be able to take my session transcript

**00:12:23**

and take it to another model and continue there.

**00:12:25**

Right?

**00:12:26**

And if you have used PI Anifon, you will probably notice that this is true for the code as well.

**00:12:30**

You can switch from one model to another model and things continue as long.

**00:12:33**

And it's a very nice property.

**00:12:37**

There's a reason for that.

**00:12:39**

We'll go into this.

**00:12:40**

But in theory, it should be possible.

**00:12:41**

Because I should have all my state locally on my machine or wherever I'm running this.

**00:12:45**

All the states should be there.

**00:12:46**

Like I'm the authoritative point in the whole thing.

**00:12:49**

It's like my state.

**00:12:50**

I should be able to do anything I want to do with it.

**00:12:52**

It doesn't quite work like this because, first of all, not all the sessions always get sent to the GPU.

**00:13:00**

So I'm taking my session log entries and I'm going to say,

**00:13:03**

"Hey, here's some stuff that happened so far.

**00:13:06**

This is my new instruction.

**00:13:07**

Please tell me what's going to happen next."

**00:13:09**

So I'm taking this PI generic session transcript or open-port generic session transcript

**00:13:14**

and I'm going to adapt it to whatever model I'm going to talk to.

**00:13:17**

So if I talk to local LLM running Deep Seek,

**00:13:21**

I'm going to have to put a different format in there than if I talk to open-eye conditions.

**00:13:26**

And this is sort of a very basic visualization that's actually going on.

**00:13:33**

So the user sends a prompt.

**00:13:35**

What is the Capital of France?

**00:13:36**

And then that gets replied with.

**00:13:39**

The Capital of France is Paris.

**00:13:41**

And at that point, the inference provider will hash the whole thing

**00:13:45**

and will maintain it on an SSD sitting somewhere in the distributed cloud.

**00:13:49**

And if I come back in the next five minutes to an hour, in some cases in seven days,

**00:13:53**

I don't have to run this computation again if I ask another question

**00:13:57**

because it will be able to restore its GPU exactly in the state that it was.

**00:14:01**

And then if I ask what's the population,

**00:14:03**

I get a cache hit on the first couple of messages and at a point,

**00:14:07**

it concludes the Delta from there on.

**00:14:09**

And then I also have Paris in the population by 2.1 million.

**00:14:12**

In case, I don't have a cache hit.

**00:14:14**

So in case I travel to a GPU from the same provider that didn't have the cache,

**00:14:18**

it's going to recalculate in fact.

**00:14:19**

It's going to be more expensive, it's going to be slower.

**00:14:21**

But at least in principle, that's possible.

**00:14:25**

And what's happening behind the scenes is this is great if you use overweights model

**00:14:31**

because you can sort of look at this in sort of fully expanded form,

**00:14:37**

is that this JSON request that I'm sending to the LLM

**00:14:41**

actually gets filled out into the special tokens.

**00:14:44**

So at the beginning, there's a special marker that looks like a system

**00:14:48**

or the system prompt gets into or you can do your expert putting into it, blah, blah, blah, blah.

**00:14:53**

And you can use a message, a system message, a system message.

**00:14:56**

There's one huge text block that's going to get sent into the LLM.

**00:15:00**

And then all that's going to happen is like,

**00:15:02**

please continue this thing with more stuff coming in.

**00:15:05**

And so as an example, at some point in time,

**00:15:10**

it was perfectly possible for you to say like,

**00:15:14**

imagine you asked, what's the capital of France?

**00:15:17**

And then you start as a system block and say like,

**00:15:20**

the capital of France is Berlin.

**00:15:23**

And then it would continue.

**00:15:25**

And then it would say like, oh, I'm just joking.

**00:15:28**

It's actually Paris.

**00:15:29**

Because it already understood, it answered incorrectly.

**00:15:32**

So now it has to do something else.

**00:15:34**

So it's like on the pure underlying inference layer, you can lie to it.

**00:15:39**

You can say like you answered something wrong and just see what happens.

**00:15:43**

That's totally possible.

**00:15:45**

Except that's no longer possible on most models.

**00:15:50**

And this is sort of, I want you to pay attention to,

**00:15:53**

which is increasingly when we went three years ago,

**00:15:56**

when we had all these powers to do everything that we wanted.

**00:15:59**

So the state is on my machine and taking it to some office, GTO,

**00:16:02**

and it's going to continue working there.

**00:16:04**

And now we have all this sort of restrictions being put on us.

**00:16:08**

The first one that came was these hidden server-side tokens.

**00:16:12**

So if you've ever used web search, for instance,

**00:16:14**

the web search results, if Antropic API runs it,

**00:16:18**

or like any host API runs it, are just stored in the server.

**00:16:21**

They're never revealed to you.

**00:16:22**

So if I make a model switch, the search results,

**00:16:25**

I cannot travel from one model to another model

**00:16:28**

because they were never revealed to me.

**00:16:29**

Only the server ever fills them in.

**00:16:31**

So it's a hidden state.

**00:16:32**

I'm not very happy about it.

**00:16:34**

Because by now it's sort of a, what is it,

**00:16:38**

freaky environment, and also presumably because

**00:16:40**

people want to close the door behind them,

**00:16:42**

all their reasoning tokens are a lot of revealed.

**00:16:44**

So that means that when I take a session transcript

**00:16:46**

that runs on Antropic models,

**00:16:48**

I cannot see the reasoning.

**00:16:49**

So if I then take it to a QPD model,

**00:16:51**

none of the reasoning tokens are in there.

**00:16:53**

So the model is usually quite confused

**00:16:56**

about how it came to that conclusion

**00:16:58**

because it can no longer read its reasoning.

**00:17:00**

Some APIs now encourage server-side storage.

**00:17:04**

We have used the response API with OpenAI.

**00:17:07**

You can actually just append a new delta to it.

**00:17:10**

But that means your entire session log

**00:17:12**

is actually no longer on your computer.

**00:17:14**

It's actually in the cloud.

**00:17:15**

That didn't work well to enterprises,

**00:17:17**

which is why it's more optional.

**00:17:19**

Now this idea that I gave you earlier

**00:17:22**

where you can lie on that the capital of France

**00:17:25**

is actually brought in.

**00:17:26**

It's called a persistent refill.

**00:17:27**

It's not blocked for safety reasons.

**00:17:29**

So you can no longer do that,

**00:17:30**

even though the other one can do it.

**00:17:32**

And now certain session logs are fully retained

**00:17:34**

on the server because of cyber security risks.

**00:17:36**

So basically what's happening is we moved

**00:17:38**

from something that was fully under your control

**00:17:40**

to increasingly being restricted

**00:17:42**

by these model providers.

**00:17:44**

Probably for good reasons, but still.

**00:17:46**

It takes us away from where we once were.

**00:17:49**

And this is maybe a little bit more controversial,

**00:17:54**

but for good reasons, I would say,

**00:17:57**

there's a lot of pushback against AI.

**00:18:00**

And this is understandable.

**00:18:03**

If someone puts a data sample and the electricity price goes up.

**00:18:07**

There's a lot of pressure being put on the source now

**00:18:13**

as a result of how capable these conversations are.

**00:18:15**

And we are now entering a world of massive scraping

**00:18:21**

where people are, I don't know if you buy now a projector

**00:18:25**

or a streaming device out of Timo or AliExpress,

**00:18:30**

you will find that part of the way it used to make money

**00:18:33**

is there's a VPN running on it that resells your IP address

**00:18:36**

to people who ever want them.

**00:18:38**

So you can now buy residential e-press,

**00:18:42**

basically from all kinds of providers on internet.

**00:18:46**

And so you have all these sort of weird things going on

**00:18:50**

where there's some sort of-- something is shifting here, I would say.

**00:18:56**

And I want to put a little bit of emphasis on this,

**00:18:58**

because if you look at the community of home-source developers

**00:19:03**

into the community of people who have developed interest in privacy and support,

**00:19:07**

there's always like an intuitive way now to push back into AI entirely,

**00:19:12**

but it actually makes it increasingly harder for open-weight models

**00:19:15**

to compete with these massive multi-trillion dollar enterprises

**00:19:20**

that are having all the power and they already reach all IP rights and so forth.

**00:19:24**

So it's increasingly becoming harder for small people

**00:19:27**

to try to build actually open-weight models in this space

**00:19:30**

because of like increasing the pushback.

**00:19:35**

Okay, so given all of this, what can I ask you?

**00:19:39**

How do our teams empower this and still use this?

**00:19:43**

So the first thing is if you build an agent yourself,

**00:19:46**

you can obviously start from source principles and build it completely from scratch,

**00:19:50**

but in practice you're going to start building one of the agent arts framework.

**00:19:53**

I would recommend you to start building one of the source ones,

**00:19:58**

but specifically one that is intentionally provider-neutral,

**00:20:03**

that makes it so that you can actually take from one product to another as much as possible.

**00:20:08**

I cannot take your reasoning traces from one model to another one,

**00:20:11**

but if you take an open-source harness,

**00:20:16**

like the open-ali harness is open-source,

**00:20:19**

but it always means open-ali.

**00:20:21**

So it logs into the system.

**00:20:22**

And then if you retain your data with you,

**00:20:28**

there's a great benefit to do.

**00:20:29**

There's a huge difference to building an agent system

**00:20:32**

that requires you to put all your data into someone's specific cloud

**00:20:36**

versus one that you have with you,

**00:20:39**

opt on the one that you're staying in control of the data.

**00:20:42**

But ultimately, actually, if we build systems like this,

**00:20:45**

we should make a conscious effort to try to make them work with open-way models.

**00:20:49**

I know it's hard because they're usually small,

**00:20:52**

but if you go to my blog, you'll find some really interesting cases now

**00:20:57**

where the way the large labs are training these models

**00:21:01**

are increasingly making the state-of-the-art models worse for certain behaviors.

**00:21:05**

And so there is actually quite a bit of benefit now

**00:21:08**

to all the experiments with this world.

**00:21:10**

We also should train some of the work.

**00:21:13**

And this, I think, is probably something that community has learned already.

**00:21:19**

Unless we experience at the end that it's actually user-friendly,

**00:21:23**

it doesn't really matter.

**00:21:25**

In some ways, it's actually impressive how well things like open-draw or pile

**00:21:32**

or even talk to work because they are so raw

**00:21:36**

and, in a way, not really user-friendly

**00:21:41**

compared to the polished experience of J3D.

**00:21:44**

But still, it would be an unfortunate outcome

**00:21:48**

if the only polished experience you can get on the internet

**00:21:51**

is fully in the cloud, closed-way model,

**00:21:55**

closed sandbox, closed ecosystem.

**00:21:58**

So it is important that we work towards actually focusing on user experience.

**00:22:03**

And I think what is really interesting nowadays is that we have commoditized

**00:22:07**

so many cool technologies that actually allow you to have a thing running locally

**00:22:11**

on your machine but making it available anywhere.

**00:22:13**

I want to give a shout-out to iLow, for instance,

**00:22:15**

which has made it possible for you to do net hole-punching

**00:22:19**

in a very convenient way so you can have your agent run anywhere,

**00:22:22**

just run a little re-day and you can connect the user interface to it.

**00:22:25**

And it doesn't really matter where your data is.

**00:22:27**

You can get the same experience that you have with, for instance,

**00:22:30**

and madness with something like OV12 if you push it in this direction.

**00:22:35**

So, it works with me.

**00:22:37**

You can run the harness on your hardware, ideally with the mods,

**00:22:39**

also running Square or R, but still connected to the world

**00:22:42**

so that you might want to implement it.

**00:22:44**

And that then increasingly becomes possible in the open source environment.

**00:22:49**

I mentioned this earlier.

**00:22:51**

There was a blog post where I brought a little bit more in detail

**00:22:54**

about sort of surprising similarities of the problems that dole-first companies have solved

**00:22:59**

versus where the present-day API sort of rules would be that rich of it.

**00:23:08**

And then this, I want to call that a little bit.

**00:23:10**

Yeah.

**00:23:11**

Well, this is just actually a restate of what our purpose statement for the company is.

**00:23:17**

And we feel like really the purpose of this small bag of maintenance is to set a foundation

**00:23:23**

where we can build a bunch of technology that feels kind of de facto aligned

**00:23:28**

with what's going to empower us to have the tools on our side working for us

**00:23:32**

because there's still our assistance in solving this.

**00:23:34**

So, I think, you know, what Armin was speaking about a little bit earlier,

**00:23:38**

this idea that as a community gets more critical of AI

**00:23:43**

and society is looking for the right reasons for doing so,

**00:23:45**

we need to be careful that we're not kind of closing and shutting the door behind us

**00:23:48**

when only a few people have gotten in that have gotten to scale

**00:23:51**

and gotten a huge size and not making it harder

**00:23:54**

or maybe smaller or grass roots or open stores and open way things

**00:23:57**

but also kind of get an option to get traction.

**00:24:00**

But this is all nuanced.

**00:24:03**

Read more about the company here.

**00:24:05**

Follow us along, frankly, on our GitHub on all the platforms

**00:24:10**

and looking forward also to answering some questions with that.

**00:24:13**

So, thanks everybody.

**00:24:21**

I'm continually surprised with conference by speakers ending their talks on time, but pleasantly surprised.

**00:24:39**

All right, many questions to ask you, but maybe we can start with this one.

**00:24:44**

Does Pi create reasoning traces by default?

**00:24:50**

So, Pi doesn't do anything, it's whatever the model provided us, and so the way this works is that Pi asks the provider to select a certain amount of reasoning effort, the UI hides that, so the press control team will see what comes out.

**00:25:08**

The unfortunate reality is that particularly the latest generation in eyeballs, not only do we no longer have reasoning summaries and other reasoning blocks,

**00:25:19**

but there's a little information on what's going on, but it's, you might as well keep it off because it's not something you want.

**00:25:24**

A follow-up question there, which is similar to what I asked the MPMX folks yesterday, do you feel like you're in sometimes an adversarial relationship with these providers,

**00:25:33**

you're trying to work around, but they're pulling back from you, or maybe even they're aware of what you're doing, not that thrilled about it,

**00:25:40**

they'd rather the certain people use the first-party analysis, or does it not feel out there?

**00:25:45**

Are they happy to have people paying for API tokens through whatever front-end is available?

**00:25:49**

I think adversarial, but not a real word, I would say that we are in a situation where it feels like there's imbalance,

**00:25:57**

and the imbalance is just a function of how quickly these companies have got to scale, and what happens with scale is not quite like thoughtlessness,

**00:26:07**

but it's, when you get to a certain scale, everything you're looking at becomes relative to the perspective of the size of the company,

**00:26:14**

sort of, maybe not existential, or possibly you're going to put a huge amount of care and thought in every single dimension,

**00:26:19**

because how could you, and so when you're a small net user, or when you're sort of a partner in the ecosystem,

**00:26:24**

I think when you don't have that same scale, there's an inherent imbalance in the relationship,

**00:26:30**

that I think maybe the way to counter that is, as users, as developers, if we, if people show as a group,

**00:26:40**

kind of clear preferences and priorities, I think that's how you counter the scale, if that makes sense,

**00:26:45**

because it's sort of through collaboration and community that individuals with inherently,

**00:26:50**

smaller scale, electronically, can flex, basically.

**00:26:54**

I mean, I guess that's basically platform risk, and certainly people in the Apple app store ecosystem

**00:26:59**

know about this, seeing the point of people talking about making a union for app developers,

**00:27:03**

something like that, and you have to assume that users of these platforms coming through the front end

**00:27:08**

you're providing are basically just, it's a time point in terms of traffic, right?

**00:27:14**

So maybe there's pros and cons to that, you can get away with stuff because they're not really paying attention to you,

**00:27:19**

but also, you know, you're not that noticeable to them.

**00:27:22**

Yeah, I would say, they are paying attention to, in particular, to, I think, like, high signal when it comes to

**00:27:31**

smart or thoughtful people making their preferences known, and so I don't think anybody should feel discouraged,

**00:27:37**

when, you know, about their own voice, I think, that people are listening, and it's just like,

**00:27:42**

we have to demonstrate our preferences through our actions.

**00:27:45**

I think that we certainly feel like that's a way that we can get to an ecosystem that kind of serves people broadly.

**00:27:56**

Another question is, how do you handle, or do you handle, PRs from language models?

**00:28:02**

That is to say, it's a soft problem there, sort of, turn them completely off, but maybe that feels a little odd, even what you're building?

**00:28:10**

Yeah, yeah, yeah.

**00:28:11**

So, high support right now is to mostly choose PRs, so, like, you have to get on an approved on the list of people that the PR states will come.

**00:28:20**

It's actually true for issues, like, we close all the issues, but in goal, and we treat them on today, to figure out which ones are high enough signal,

**00:28:28**

because a lot of the issue reports also not written by humans, and that is challenging for many reasons.

**00:28:36**

Actually, I must prefer the human slope, short summary, this is still what your thing is, rather than the human slope going into the agent and then turning it into a massive issue description that is mostly fabricated.

**00:28:49**

I think it's hard, like, open source, that means changing how it behaves.

**00:28:57**

I don't think what we have right now is going to be the solution kind of six months, because it also kind of makes it harder for people to contribute.

**00:29:04**

I think people, whether it's in bounds, on the issue tracker, like, when people write something that came from their own brain, that is unique, like, it shines through very clearly because it is so rare these days.

**00:29:27**

And so, like, I think, like, like, one sentence that came from your own brain, even after you have to do a whole bunch of stuff, like, if the header is one original sentence, like, it really shines through, so don't be discouraged.

**00:29:45**

It's not like people aren't taking attention, it's just they want to hear from you, not from your machine.

**00:29:50**

You mentioned training your own models here in Europe in passing, can you say a few more sentences about that?

**00:29:57**

Well, I've got a lot of thoughts on this.

**00:30:00**

So, I think, what is sort of interesting about how we do this now is that there's an inherent cultural bias in these models, because this improves language.

**00:30:11**

So, in the past, for instance, if you would have, I don't know, teaching an open source library from a person in North Korea, you probably wouldn't have worried about it, maybe put it back to work, but like, there was nothing really cultural related to your open source library.

**00:30:28**

Like, it can come from anywhere, it's just bits and bytes.

**00:30:31**

With the models, it's a little different, like, everybody has their cultural bias, and I think it would be, from that reason alone, it would be very nice if Europe has the models, because Europe has its own view of the world, which is not necessarily represented in these models.

**00:30:45**

How to actually scale that down so that we have many more companies and people trying to do model training?

**00:30:51**

Because right now we are living in a world where money really is what matters the most.

**00:30:58**

And it's very clear that Europe is on this sort of hard scale, and it's just not the same.

**00:31:05**

Yeah, anywhere on the same scale.

**00:31:08**

Now, it makes it hard in the meantime to really get competitive there, but it's also most likely the case that we're going to have a lot of models in the future, even for very specific tasks.

**00:31:20**

And maybe one sort of thought on this is that the biggest blocker right now in model training is actually neither money nor data in Europe.

**00:31:32**

It is actually, there are not enough people that know how to do it.

**00:31:35**

Like, even if you were to raise a lot of money right now and say, "I actually want to do this."

**00:31:39**

Why are you going to find all the people?

**00:31:41**

They left, they are somewhere over a large company already.

**00:31:45**

Obviously, there are many reasons why they might be on this large batch.

**00:31:48**

But even just training people to train models would be good for a step.

**00:31:54**

That prevents right now competition.

**00:31:57**

Makes sense.

**00:31:58**

And as a related follow-up question, you mentioned local and open-way models.

**00:32:03**

I think they are having a real moment.

**00:32:04**

You know, things like .

**00:32:06**

What is your, like, level of, like, hopefulness maybe that that represents a path forward or not an e-path forward, but a path forward versus those sort of always be like .

**00:32:19**

I'm very optimistic.

**00:32:22**

I think that there are going to be certain applications where people are going to want to pay premium prices for premium LLMs.

**00:32:28**

And that would make sense when you're in hyper-competitive industry or something where precision is absolutely crucial.

**00:32:34**

But for a lot of applications, I think, you know, if you want something that can't even be able to run a loop and can't be able to execute a task without hallucination in a reliable fashion.

**00:32:44**

And I'm very optimistic kind of, you know, given the competitive market that's been forming across the Pacific Ocean and, you know, hopefully here in Europe more and more.

**00:32:54**

That we're getting to a place very, very quickly where we have that level of capability for something that is open.

**00:32:58**

And then human ingenuity can go and take that and specialize in a certain way or fit into a better culture or application context.

**00:33:06**

So I think we're really optimistic.

**00:33:08**

We want to play a role in that happening.

**00:33:11**

And it's, you know, it's a fun time to be a tinker for that very reason.

**00:33:16**

Certainly something I like about pg harnesses outside of, you know, the all-in-one is it's turning inference into more of a commodity.

**00:33:24**

And then there's the additional thing that, yes, you can always paint for the best model, but at some point you can say, actually what I have, get the job done.

**00:33:31**

I feel like this happened with, you know, display pixel density.

**00:33:33**

At some point we said, can we continue making pixels smaller?

**00:33:36**

Yes.

**00:33:37**

But in some way I can't see the difference anymore.

**00:33:38**

Yeah.

**00:33:39**

What do we do now?

**00:33:40**

Okay.

**00:33:41**

All right.

**00:33:42**

Please give the .

**00:33:43**

Thank you.

**00:33:44**

Thank you.

**00:33:45**

Thank you.

**00:33:46**

All right.

**00:33:47**

Please give the .
