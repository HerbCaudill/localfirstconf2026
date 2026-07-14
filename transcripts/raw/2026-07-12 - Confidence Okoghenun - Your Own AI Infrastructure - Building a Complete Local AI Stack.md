---
source: local-first-conf-recording
title: "Your Own AI Infrastructure: Building a Complete Local AI Stack"
date: 2026-07-12
speakers:
  - "Confidence Okoghenun"
source_recording: "../../recordings/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1430-your-own-ai-infrastructure-building-a-complete-loc"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Your Own AI Infrastructure: Building a Complete Local AI Stack

**00:00:00**

I want you to go watch it because I like it when you have the opinions from different sort of people.

**00:00:05**

I believe you print me and I don't believe everything it says in the videos, correct?

**00:00:09**

But go check out the other video, I think it's a good reference to think about.

**00:00:13**

And this is what I was thinking just after seeing this video, that, oh shit, I'm giving a talk about running local windows,

**00:00:19**

and here it's still shooting holes in my idea of why it makes sense to run local windows.

**00:00:25**

But, not to worry, ten minutes later, these are the comments on the video, and people are just like shivin' on Theo for his ideas,

**00:00:33**

some of which were correct and some of which were not, and this is me being happy that I'm going to be here to give the talk

**00:00:39**

because people basically said that Theo's wrong and we are right.

**00:00:43**

So let's get into the talk because the idea in here is that you don't need a cloud subscription.

**00:00:49**

For many of the tasks, except from like coding jobs or running agents,

**00:00:54**

you can actually get them running locally on models that run on your laptop or a GPU phone.

**00:01:01**

So how do you actually go about that?

**00:01:04**

Before that, there are three reasons you want to have those models run locally.

**00:01:09**

First is privacy.

**00:01:11**

I'm happy when in Europe, privacy is a big issue.

**00:01:14**

Everybody wants their data to be private.

**00:01:15**

No one wants their data to be used to train models, or even worse, used to sell ads to them.

**00:01:21**

So when you have those models running, and privacy is something you generally don't have to worry about.

**00:01:26**

Cost, of course, the only cost you're paying upfront is the cost of buying the hardware.

**00:01:32**

And once you have that hardware purchase, you can run as many models as you want,

**00:01:36**

have billions of tokens generated on that hardware, and it keeps going.

**00:01:40**

And the best part is control, because I'm sure you've had this experience where you rely on a model,

**00:01:45**

and a few months later, a new one comes out, and the one you rely on is NERP or NERP-DOMA,

**00:01:51**

and you first upgrade to the newer and more expensive model.

**00:01:55**

Nobody wants that.

**00:01:57**

Yesterday I saw this video about Anthropik changing the tokenizer of their newer models,

**00:02:03**

so that it costs 30% more in decoding tokens from the same amount of text, which is great.

**00:02:09**

So you want that control so that things don't change on that level,

**00:02:13**

especially these are systems independent.

**00:02:16**

So let's get some more minds back to eight months ago.

**00:02:20**

CloudCode came out, Summer 4.5 was a really cool model out there.

**00:02:26**

And we had lots of people buy coding 200k per year apps.

**00:02:32**

Around that same time, developers were crying that coding is over,

**00:02:36**

because Summer was so good at coding, so why should anyone care to learn about coding?

**00:02:40**

And the encouragement was to stop coding.

**00:02:43**

But let me let me let me let me let your minds guess what.

**00:02:46**

This is a graph from artificial analysis, and you can see Sonet over here.

**00:02:52**

That's the model people were buying coding million dollar apps on.

**00:02:56**

This is coin 3.627b, it's a model you can run on a 16 gig RAM map for today, which is amazing,

**00:03:04**

because something that was considered frontier intelligence about eight months ago,

**00:03:10**

is the same class of model you can actually run on your device.

**00:03:13**

And you have a little bit more around.

**00:03:14**

You can run bigger models like DeepSync, V4Flash, or Mimax, or anything.

**00:03:20**

But of course, these are not frontier models today.

**00:03:23**

So you might actually want to run frontier models, and open-source got here.

**00:03:28**

So these are the frontier models, both from Catropic and OpenAI.

**00:03:33**

You have Fable, GPT, Gemini, and you have the open-source ones.

**00:03:38**

So you have DeepSync, which you can run on a device with around 120 gigs of RAM.

**00:03:44**

And you have GLM, which requires about 300 gigs of RAM.

**00:03:48**

But this is something you can download today and run it on a device you want.

**00:03:53**

So which is amazing.

**00:03:54**

It's a really good time to take back control of the models and depend on to do software.

**00:04:00**

So let's figure out how to actually get it done.

**00:04:04**

Thank you.

**00:04:05**

Let's figure out how to get it done.

**00:04:06**

Here, we're going to go into hosting the models in the world we need.

**00:04:10**

These are all the things you need.

**00:04:11**

You need hardware that can run for the model.

**00:04:13**

You need an engine, an inference engine for the model to run on.

**00:04:17**

You need an orchestra tool and finally you need a gateway to provide this model as a service to the applications you may want to use.

**00:04:25**

So let's start with the hardware, because that's the first VRAM.

**00:04:29**

Hardware is the most important thing.

**00:04:30**

If you're picking up the hardware to run the annual zone, these are the three things to consider.

**00:04:36**

And these are then the other priority.

**00:04:39**

The first is VRAM.

**00:04:40**

You want to get as much VRAM as you can, because that determines the size of the model you want.

**00:04:46**

So VRAM is the most important piece here.

**00:04:50**

The second most important piece is the memory bandwidth.

**00:04:53**

How fast is the memory bandwidth on that GPU you're considering.

**00:04:57**

Because that affects the token generation speed of the model.

**00:05:01**

So the higher memory bandwidth you can get, the better cost.

**00:05:04**

That affects how fast the model is able to write.

**00:05:07**

Then the other thing you want to keep in mind is the raw compute.

**00:05:11**

This affects how quickly the model is able to make stream data.

**00:05:14**

So if you're giving you the code base, and you want it to complete the process of that code base,

**00:05:18**

raw compute is what to next.

**00:05:21**

So these are the three things to keep in mind.

**00:05:23**

My personal recommendation, if you're just starting out, is the best hardware, and the cheapest hardware,

**00:05:30**

it's an N-series mark.

**00:05:31**

Get the Macs to know with a Mac Ultra chip.

**00:05:35**

Because that's going to give you as much VRAM as you can have for a really cheap price with good memory bandwidth.

**00:05:41**

And not so bad raw content.

**00:05:43**

But you want to go specialized.

**00:05:45**

There's a company called Talas, they want the model into the GPU, and you can see you get crazy performance when you do that.

**00:05:54**

Like this model is hitting 16,000 tokens per second.

**00:05:58**

Whereas Nvidia's back sheet can hit 200, it's just about 500 tokens.

**00:06:03**

That's like a 30x jump in performance.

**00:06:06**

So if you want to experiment with this, this is also another real option.

**00:06:10**

Something else to consider is Tiny.

**00:06:12**

The idea behind Tiny is you don't have to buy new hardware to experiment with VR.

**00:06:18**

So it's a mobile GPU, you can connect to a device you own, and run inference on that really small mobile GPU that's the size of what you have to buy.

**00:06:27**

So check them out, it's a really good product for you to get started today.

**00:06:32**

Okay, so let's talk about the inference layer.

**00:06:35**

Three main inference layers or options to choose from.

**00:06:39**

I'm sure you've learned about Olama.

**00:06:40**

There's lama.cpp, and then there's also VLNM.

**00:06:44**

Olama is very beginner friendly, it's nice to get started.

**00:06:47**

The UX is awesome, but there is a 20% to 30% performance amount in the PIN, if you start with this in Olama.

**00:06:54**

So my recommendation would be to use lama.cpp for individual resources, your inference.

**00:07:01**

So-for-set inference stack will be 7, maybe 5 to 10 people.

**00:07:06**

Lama.cpp is great.

**00:07:07**

It's very performant.

**00:07:08**

Olama is built on top of it.

**00:07:10**

You can customize it, it's very customizable.

**00:07:14**

VLNM is great if you're trying to be honest.

**00:07:16**

So you can use it to like a team of models in English.

**00:07:18**

You can squeeze as much, full-toe-toe-toe-toe-toe in the head of the routine.

**00:07:23**

So those are the options there.

**00:07:25**

Lama.cpp is my point of the approach.

**00:07:27**

And for model sizes, the model, the family of model classes has different sizes.

**00:07:33**

Of course, it's going to be based on how much urine you have.

**00:07:37**

So you can use a model you can fit on the URAM.

**00:07:40**

But don't forget to leave enough space so you have the context length of the model to be able to fit from inside of the URAM you have yet.

**00:07:50**

So good resources here to note is OnSlot.

**00:07:54**

I mean, I really good at shrinking models and retaining their quality so you can get them running on devices with lower RAMs.

**00:08:02**

I also want to share analysis to figure out which ones are smart or what they are good for to help you fit up one model to be able to be.

**00:08:10**

The other thing here is choosing how to get straight up.

**00:08:16**

So usually, when you're playing with models locally, you want to figure out which ones are the best for the risk case.

**00:08:23**

And in some situations, it might be all three of them.

**00:08:26**

So you might want to have key for coding, coin for like summaries, and general condition.

**00:08:32**

But really, you can run off three models at the same time in the URAM.

**00:08:36**

What that has to have done is it allows you to define a configuration call such that when an inference request comes for a particular model,

**00:08:44**

that model is loaded up into the URAM and if it cannot fit with the model already in URAM,

**00:08:49**

the previous model is unloaded for the one you need to be loaded to set that request.

**00:08:55**

And if multiple can fit in URAM at the same time, you can load balance across the models

**00:09:00**

and have as many models configured for you to run your inference on.

**00:09:05**

So it's a really great software.

**00:09:07**

Here's a QR code for you to go check it out.

**00:09:09**

It's open source.

**00:09:10**

It's something that runs a device.

**00:09:11**

So happy to go check it out.

**00:09:15**

One other thing, and I think this is the last thing here,

**00:09:17**

is having an AI gateway.

**00:09:19**

So this is the last piece of the puzzle.

**00:09:22**

The idea is you already have your stats running on GPUs,

**00:09:25**

with your inference engine and your computer.

**00:09:28**

So we need a way to provide it as a pipeline to clients who would want to use this AI stack.

**00:09:36**

And clients meaning like tools like open code or open web UI,

**00:09:40**

or any application that benefits from using AI key possibilities,

**00:09:43**

where you can put in the URL and the API key.

**00:09:47**

So an AI gateway does this for you.

**00:09:48**

It helps you manage API keys for applications or other users for using your reference stuff.

**00:09:55**

Then you can also set up things like modal aliases, where you can have defined names,

**00:10:01**

and actually swap them on the line though, so you don't have to do all these configurations everywhere else.

**00:10:07**

And you see features like observability, prompt caching, and connection components to enhance the performance of your stack.

**00:10:16**

To put it all together, so you need to have the GPU, and my recommendation is Apple, of course.

**00:10:22**

You need an inference engine, lambda.cppcd, to start.

**00:10:27**

You need an orchestrator, lambda swap is better than that.

**00:10:30**

And you need a gateway to present this to clients who would want to use this application.

**00:10:36**

So this is what an example of this would look like in practice.

**00:10:39**

Where you have multiple instances of lambda typically running several different models,

**00:10:47**

like Kini or GFM or Quen.

**00:10:49**

And you have lambda swap load balancing across these models,

**00:10:53**

and figuring out a way to run them.

**00:10:54**

You don't have, you know, GPU to run all of them simultaneously.

**00:10:58**

And you have LightEledM, or maybe Kong, or Bifrost, that's your AI gateway.

**00:11:05**

And that presents in private API to a prime, like, open code.

**00:11:09**

You just use, like, an open AI compatible with API, and it's able to call the networks you have set up.

**00:11:14**

So it's a really cool set up.

**00:11:16**

I want you to go try this video, and the payloads are, like, enormous.

**00:11:20**

First thing is, you always have to look at it, right?

**00:11:23**

Because it's running on the device if you want, so if the internet goes down,

**00:11:27**

you can still use your services because it's all you want to do.

**00:11:30**

Know that it's private.

**00:11:32**

You don't have to depend on cloud providers.

**00:11:35**

It's such a challenge for the only people that have it once,

**00:11:38**

and you're going to open with networks as they are developed.

**00:11:42**

And you can even run on the center of networks if you want to.

**00:11:46**

So if you want to tell them, you have to do your life, basically.

**00:11:50**

So get started this weekend.

**00:11:53**

Here's your guide to get started in about an hour to two hours,

**00:11:56**

um, on a laptop you want to do.

**00:11:59**

So if you actually want to go run this this weekend,

**00:12:02**

here's the guide to working through from here to here,

**00:12:04**

everything you need to get started running with networks.

**00:12:07**

And, uh, that's it.

**00:12:09**

Thank you so much.

**00:12:10**

You all rock.

**00:12:11**

Thank you so much.

**00:12:12**

Thank you so much.

**00:12:13**

Thank you so much.

**00:12:17**

Thank you so much.

**00:12:17**

Thanks for the overview.

**00:12:19**

Yeah, I encourage everyone to experiment with this.

**00:12:20**

Even just on your local Macbook with all the fancy stuff, you can run very small models.

**00:12:25**

Certainly if nothing else, when you try a much smaller, older language model and use it

**00:12:29**

with chirurgentic coding, you appreciate the frontier models more.

**00:12:32**

One question for you, uh, hardware prices, you know, and, and, uh,

**00:12:37**

VRAM in particular is kind of through the roof these days.

**00:12:43**

I don't know how that changes your calculus is one, but a related thing would be,

**00:12:47**

let's say you just have unlimited budget to blow in your home, uh, lab.

**00:12:50**

What, uh, what, what would you do in your home lab?

**00:12:52**

What would you do in your home lab, what would you do in your home lab?

**00:12:54**

What would you do in your home lab?

**00:12:55**

What would you do in your home lab?

**00:12:56**

What would you do in your home lab?

**00:12:57**

What would you do in your home lab?

**00:12:58**

What would you do in your home lab?

**00:12:59**

What would you do in your home lab?

**00:13:00**

What would you do in your home lab?

**00:13:02**

What would you do in your home lab?

**00:13:03**

What would you do in your home lab?

**00:13:04**

What would you do in your home lab?

**00:13:05**

What would you do in your home lab?

**00:13:07**

What would you do in your home lab?

**00:13:09**

What would you do in your home lab?

**00:13:10**

What would you do in your home lab?

**00:13:11**

What would you do in your home lab?

**00:13:12**

What would you do in your home lab?

**00:13:13**

What would you do in your home lab?

**00:13:14**

What would you do in your home lab?

**00:13:15**

What would you do in your home lab?

**00:13:16**

What would you do in your home lab?

**00:13:17**

What would you do in your home lab?

**00:13:18**

What would you do in your home lab?

**00:13:19**

What would you do in your home lab?

**00:13:20**

What would you do in your home lab?

**00:13:21**

What would you do in your home lab?

**00:13:22**

What would you do in your home lab?

**00:13:23**

What would you do in your home lab?

**00:13:24**

What would you do in your home lab?

**00:13:25**

What would you do in your home lab?

**00:13:26**

What would you do in your home lab?

**00:13:27**

What would you do in your home lab?

**00:13:28**

What would you do in your home lab?

**00:13:29**

What would you do in your home lab?

**00:13:30**

What would you do in your home lab?

**00:13:31**

What would you do in your home lab?

**00:13:32**

What would you do in your home lab?

**00:13:33**

What would you do in your home lab?

**00:13:34**

What would you do in your home lab?

**00:13:35**

What would you do in your home lab?

**00:13:36**

What would you do in your home lab?

**00:13:37**

What would you do in your home lab?

**00:13:38**

What would you do in your home lab?

**00:13:39**

What would you do in your home lab?

**00:13:40**

What would you do in your home lab?

**00:13:41**

What would you do in your home lab?

**00:13:42**

What would you do in your home lab?

**00:13:43**

What would you do in your home lab?

**00:13:44**

What would you do in your home lab?

**00:13:45**

What would you do in your home lab?

**00:13:46**

What would you do in your home lab?

**00:13:47**

What would you do in your home lab lab?

**00:13:48**

What would you do in your home lab lab?
