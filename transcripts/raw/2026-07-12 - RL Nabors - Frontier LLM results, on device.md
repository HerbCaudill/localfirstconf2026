---
source: local-first-conf-recording
title: "Frontier LLM results, on device"
date: 2026-07-12
speakers:
  - "RL Nabors"
source_recording: "../../recordings/2026-07-12 - RL Nabors - Frontier LLM results, on device.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1415-frontier-llm-results-on-device"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Frontier LLM results, on device

**00:00:00**

All right. Quick show of hands. How many of you are using a Frontier model in production in some capacity?

**00:00:09**

All right. How many of you would like to, but you're kind of nervous about doing a round trip to somebody else's servers?

**00:00:16**

Yeah, I thought so. All right. Right audience here. I'm Rachel Lee Nabors.

**00:00:20**

You may remember me from such awesome projects as getting my clipper to work.

**00:00:26**

I've spent 10 years at Open Source in the world, spent five years at FANG.

**00:00:31**

I was on the React team, and I've spent the past three years consulting with AI startups in the Bay Area.

**00:00:36**

And like every other engineer in the H&H era, and who's been on stage today, I also have a product that you should go sign up for.

**00:00:44**

I'm kidding. It's on a wait list, but this is a, I'm a solo founder trying to get out of stealth.

**00:00:50**

Mima is a client that, you know, it's basically a client for all your social things, which I'm like, wow, this would have been a really good event to launch Mima at.

**00:00:59**

She's not ready, but because it's like, it uses the app Proto and X, because I got tired of having to switch between seven different apps, and I was like, I should be able to build this with web properties.

**00:01:08**

Anyway, 100% private, lives on your device, no servers, because I don't want to have to pay for your cat memes.

**00:01:16**

All right, no, we go forward. Why did they do a barrel for forward? That doesn't make sense.

**00:01:22**

All right, so the issue is that some of Mima's features are only possible with language models.

**00:01:28**

We're talking about like summarizing a long chain of threads.

**00:01:31**

You wake up in the morning and 20 people have said something, and you're like, oh God, I have to read this.

**00:01:36**

No, no, no. Mima summarizes that stuff, so you do not have to go read he said, she said all the way back to the morning.

**00:01:42**

But the problem is that language models are typically too big to bid on devices, well, large ones are.

**00:01:48**

Thank goodness, we have something called an SLM, or as I like to call it, a smoother language model.

**00:01:55**

SLMs contain millions to billions of parameters, whereas an LLM contains closer to like billions or trillions.

**00:02:03**

If this big blob up here were a large language model, or a smaller of the large language models,

**00:02:09**

this itty-bitty dot over here represents the biggest small language model.

**00:02:14**

So you get an idea of the difference in size of parameters and exactly how much compute we need to host these numbers.

**00:02:21**

So, when I was building Mima, obviously, I wanted to put the LLM on device.

**00:02:27**

But there are a lot of little itty-bitty language models out there.

**00:02:30**

How do you pick the right one?

**00:02:31**

I have built a framework, actually worked with Google on this framework, you can find it at web.dev.

**00:02:37**

You do have allies, are you even recorded?

**00:02:40**

You have allies inside the big companies.

**00:02:43**

A lot of people are rooting for the best possible future for humanity.

**00:02:47**

Anyway, I've built down this framework to prototype big, deploy small.

**00:02:52**

Prototype your system with a foundation model to prove that it's possible.

**00:02:55**

And the goal is to use the smallest, well, what I call the age model.

**00:03:01**

The smallest possible model that can give you the same results, or at least a smaller, good-enough model.

**00:03:07**

But to measure the models, you're going to need a measuring stick.

**00:03:10**

And feels-good-bro vibes are not a proper measuring stick.

**00:03:15**

Alright, we'll get into that.

**00:03:17**

Fortunately, we have inherited so much from the test-driven development era that we can reapply in this situation.

**00:03:23**

So first off, test whether what you're trying to accomplish is possible at all by using the largest model.

**00:03:29**

You can recruit something like Gemini, or a task-specific model that's too big to fit on your machine.

**00:03:34**

This is an example, actually, of Mima's summarization feature.

**00:03:39**

You notice that I have you configured your own API key.

**00:03:42**

This was the version of Mima that actually let you use Claude with it, Claude Science specifically.

**00:03:47**

And you can see that there is a summary, I thought, it's backwards, that's why, a summary right there.

**00:03:53**

Discussion on email harnesses, discipline, and split-role verification methods.

**00:03:58**

So it's not just giving the last thing that was said in the thread.

**00:04:03**

It works.

**00:04:04**

Good.

**00:04:05**

Sweet.

**00:04:06**

So this is possible, Claude.

**00:04:08**

You can give a language model summarized in a long series of conversations.

**00:04:13**

We figured that was possible.

**00:04:14**

Just, it's a little contract, but live with me.

**00:04:16**

So first, you want to collect a set of inputs and outputs.

**00:04:20**

In this case, I collected sets of public conversations that I was having with people,

**00:04:25**

and the summaries that Claude Science was creating based on them.

**00:04:29**

I considered them good enough.

**00:04:31**

I investigated each of them and found that they did not want more.

**00:04:34**

So those were my success criteria.

**00:04:36**

This is called a golden data set.

**00:04:39**

And a golden data set comes from machine learning.

**00:04:42**

It's basically that curated collection of, when I give you this, model should give me this in return.

**00:04:50**

And you maintain it.

**00:04:51**

You keep it throughout the life of your project.

**00:04:53**

You add to that data set.

**00:04:54**

There's new challenges and edge cases arise.

**00:04:56**

It's always evolving.

**00:04:58**

So I grabbed 14 threads, each for evaluated for summaries and the annotations that should appear in the model.

**00:05:05**

And this is the data.

**00:05:07**

You can see an example of what this data file looks like down below.

**00:05:14**

Now, these are the things that I measure in the experiment.

**00:05:21**

Based on the validability, does the output parse.

**00:05:25**

If it's outputting malformed JSON, it's not going to work.

**00:05:28**

Because I need JSON for these summaries to be, you know, hydrated into the interface.

**00:05:34**

It's an Electron app that uses React.

**00:05:36**

No surprise there.

**00:05:39**

Reference structural validity.

**00:05:40**

So when it's, when the summary references goes further down in the 100 goes deep dog pile on why the amazing digital circus was broke cool all along, you can find the correct tweet that cites that summary.

**00:05:54**

You've got to make sure that it actually exists in that list.

**00:05:58**

Factual consistency.

**00:06:01**

Does the summary stay faithful to the thread or does it invent claims?

**00:06:04**

You know, if the thread is about whether or not Jenny's skirt looks good, it shouldn't be summarized.

**00:06:10**

It's about whether Tina's cap was appropriate.

**00:06:13**

Length compliance.

**00:06:15**

I needed to stay a certain length.

**00:06:16**

It's got to be short.

**00:06:17**

Come on.

**00:06:17**

You can give me 90 characters, can't you?

**00:06:20**

Surprisingly, LLMs are bad at that, especially the small ones.

**00:06:22**

They're not very good at counting their own characters.

**00:06:25**

And P50 latency.

**00:06:26**

That means, like, the mean time across the entire set.

**00:06:30**

How long did it take for the action to compute with the model?

**00:06:34**

And P95 latency is your worst case scenario.

**00:06:37**

Something went wrong.

**00:06:38**

And this user is going to give you a hard thumbs down and a one on the NPS score.

**00:06:43**

You need to know what that looks like.

**00:06:44**

Don't just pay attention to averages, people.

**00:06:47**

Okay.

**00:06:49**

And this is important.

**00:06:50**

Because latency above four seconds in a VR situation where people were given the ability

**00:06:57**

to interact with AI-generated outputs.

**00:07:00**

Over four seconds, the experience was degraded to the point that the people stopped engaging.

**00:07:05**

So consider four seconds a rough guideline for your outputs should be done in this time.

**00:07:10**

No higher.

**00:07:12**

Okay.

**00:07:13**

Step three.

**00:07:14**

You're going to test your models from smallest to largest until you get results as good as what you got on your big fat model.

**00:07:23**

Meet your next top models.

**00:07:25**

We got Quen 2.5 and start, which I chose because I like Quen.

**00:07:28**

Quen is really cool.

**00:07:29**

It's very small.

**00:07:30**

We have a good relationship.

**00:07:32**

Quen 3 because I was like, you know, there's a new one.

**00:07:35**

Why don't I try that one?

**00:07:36**

And I wanted to do Gemma 4 because all of my engineering friends were like, oh, you have to use Gemma 4.

**00:07:41**

Gemma's got hot on Apple.

**00:07:43**

And I was like, oh, okay, yeah.

**00:07:44**

Gemma's got to be good.

**00:07:45**

I mean, it's a bit bulky at five billion parameters or 3.1 gigabytes, but, you know, what's an extra gigabyte amongst friends?

**00:07:52**

And I talked to Claude about this, and Claude was like, you really need to add Lama 3.2 to that.

**00:07:56**

And I was like, I don't know what Lama 3.2 is.

**00:07:58**

Isn't that for meta?

**00:07:59**

Gross.

**00:07:59**

Well, maybe I'll get something from them after all these years of working on the React team.

**00:08:04**

Okay.

**00:08:05**

So I allowed it.

**00:08:06**

And I just pulled this picture.

**00:08:08**

I worked for the rise of the wonderful people who built Phoenix.

**00:08:10**

So naturally, I would choose Phoenix.

**00:08:12**

Phoenix is an email's an awesome observability library.

**00:08:15**

It is open source.

**00:08:16**

And importantly, it runs locally, which means I'm going to make it a part of my local CICD process in the future.

**00:08:21**

Ooh, because you will want that later.

**00:08:24**

So what I'm doing right now is building a capability of the email.

**00:08:29**

We're going to perform it.

**00:08:30**

This is where you compare the performance of your base model or Claude Sonnet against those of the select.

**00:08:35**

Some other models.

**00:08:37**

And if you can see what this looks like across all these parameters.

**00:08:40**

The baseline models here at the bottom, you can see Claude's like knocking JSON out of the park.

**00:08:47**

It's doing great on length compliance, reference accuracy, semantic similarity.

**00:08:52**

You run the test like three times to kind of get the average of how it would return.

**00:08:57**

And it costs 22 cents every time I do it, which means an average user is going to cost me about a dollar a day.

**00:09:03**

No thank you.

**00:09:04**

So, step four.

**00:09:06**

You select the smallest good enough model that gives the acceptable responses or use case within this range.

**00:09:12**

So, I put this on a chart here to make it super easy.

**00:09:17**

All you need to know is Claude is the big blue diamond at the top.

**00:09:20**

This is Claude Sonnet.

**00:09:21**

This is our ceiling.

**00:09:23**

Super accurate.

**00:09:24**

And it's clocking in around three seconds at P50.

**00:09:27**

You know, it's under four seconds.

**00:09:29**

That's pretty good.

**00:09:30**

Gemma is all the way up here at eight seconds.

**00:09:34**

Gemma is a little slow on regular hardware.

**00:09:38**

I'm an aqua pro, so I don't want to know what that's going to be like for teenage girls.

**00:09:42**

That made Gemma just no way no way.

**00:09:44**

I was surprised by that.

**00:09:45**

At first, I thought Quinn, this big circle down here, could be my chosen one.

**00:09:50**

But, because look how fast that is.

**00:09:52**

One second.

**00:09:53**

The problem is, its accuracy was so low, I'd have to run it several times to get a correct answer.

**00:09:58**

And that would essentially double its latency.

**00:10:01**

So, that wasn't an answer.

**00:10:02**

So, surprise, surprise.

**00:10:04**

The best model would turn out, oh, I also recommend that you actually go and read the outputs.

**00:10:13**

Because, along with 3.2's output, when it's summarizing this conversation with Sunil, that I was listening in on,

**00:10:19**

actually is incredibly close to what Claude Sonnet came up with.

**00:10:23**

It got the point of the joke.

**00:10:25**

Whereas, Gemma didn't really get it.

**00:10:28**

Gemma didn't have a sense of humor.

**00:10:31**

So, it gave a similar response to Claude, and it was faster.

**00:10:34**

Ultimately, Lama 3.2 ended up being the winner.

**00:10:37**

Yay, woo!

**00:10:38**

I mean, it was developed by a company that does social media.

**00:10:40**

So, in retrospect, of course, it would be good at summarizing conversations.

**00:10:44**

All the more reason to add regression evals.

**00:10:47**

Now, the thing is, though, you noticed it wasn't perfect.

**00:10:49**

It wasn't completely right there on Claude Sonnets, but we can squeeze better performance out of these smaller models

**00:10:56**

with things like prompt engineering.

**00:10:58**

Prompt engineering is great because you don't always have the chance to control what model you're using.

**00:11:03**

You join a team.

**00:11:04**

They're already all in on Gemma 4.

**00:11:05**

All of their evouts are passing.

**00:11:07**

They are not ready to adopt Lama 3.2b for your weird use case or upgrade to Gemma 4.

**00:11:14**

You're going to have to find a way to make your test pass without changing that model.

**00:11:20**

Or maybe you just don't want to force your users to download more and more models.

**00:11:24**

I mean, gateways of models on a device is also not acceptable.

**00:11:29**

So, you can use prompt engineering where all you do is you edit the prompt to get a response closer to that target response that you want.

**00:11:35**

Plus, closing that little gap there.

**00:11:38**

These are the measurements I ended up holding in on.

**00:11:40**

Coming in on.

**00:11:42**

The JSON validity, factual consistency, P50 latency, and the P95 latency.

**00:11:47**

They are the most important ones to getting my MVP out.

**00:11:51**

Getting it good enough.

**00:11:52**

You really have to know what you're measuring for.

**00:11:53**

Not just, it feels good.

**00:11:55**

It must be good.

**00:11:57**

Measurably good.

**00:11:59**

If you don't know what measurably good is, what are you building really?

**00:12:02**

So, I recommend you go in and test each variable per prompt.

**00:12:09**

So, you're testing, like, come up with some ideas.

**00:12:13**

In this case, I added a numbered input.

**00:12:16**

The idea being that the same prompt reformatted as a numbered spread would be easier for the model to follow.

**00:12:21**

If they're little, they need a little help.

**00:12:23**

A few shot, where I give it a couple of examples of what Claude Sonnehan did.

**00:12:27**

Could you make it more like this, please?

**00:12:29**

And strict rules, where I'm like, no, you will not go over 90 characters.

**00:12:34**

No, that.

**00:12:35**

I call this a strict teacher rule.

**00:12:37**

And then there's the chain of thought, which is the idea that the little model can't think for itself,

**00:12:41**

so you have to tell it to remember to think in the chain of thought.

**00:12:45**

Now, interestingly enough, the strict teacher mode,

**00:12:49**

mama would have none of that.

**00:12:51**

And not like the strict teacher, noticeably hurt performance across all of the variables.

**00:12:55**

But few shot, meaningfully increased performance, got us closer to overlap at only an additional 200 milliseconds.

**00:13:03**

Not bad.

**00:13:03**

That's a good trade.

**00:13:05**

Whew.

**00:13:05**

So this is how they compare next to each other.

**00:13:08**

You can see that Claude Sonne is pretty slow in the latency department,

**00:13:12**

whereas Lama 3.2b is doing very well in the latency, even comes in under four seconds for that edge case.

**00:13:20**

So Claude, I went and I dove deep on why they were still not aligning on things like factual correctness.

**00:13:26**

Turns out Claude just didn't agree with parts of the conversation that Lama was choosing to highlight.

**00:13:30**

Part of that was because I was using Claude Opus as the judge, and Claude Opus favors her little sister, Claude Sonne.

**00:13:38**

I should have brought in chat GPT to be a neutral third party, but I learned my lesson.

**00:13:44**

Just be careful about testing members of the same family.

**00:13:47**

They do favor their own kind.

**00:13:49**

But you had to go and actually look and be like, this says that Jenny's dress was atrocious,

**00:13:54**

and you're saying that's actually incorrect because Claude said Jenny's dress was inappropriate.

**00:13:59**

I feel like they're both similar enough.

**00:14:02**

And the next one, use post-processing.

**00:14:05**

Ref consistency and length, they can be handled inside the harness to slap down things that didn't work.

**00:14:10**

So anyway, this is how I beat Claude using the same harness and got better latency on the P50 and P95s.

**00:14:19**

This is the end tally together, side by side.

**00:14:22**

It runs on your device.

**00:14:23**

It's two gigabytes, and I haven't paid for it.

**00:14:26**

Hang on.

**00:14:27**

Just a head is up.

**00:14:28**

Don't lose one ground.

**00:14:30**

Next step, you'll want to update the prompt or upgrade the model in the future.

**00:14:34**

So you need to set up some additional evals for that.

**00:14:37**

They're called regression evals.

**00:14:39**

That's what I'm going to be doing on the workshop day.

**00:14:41**

If you want to come over and see what I'm up to.

**00:14:44**

Keep moving.

**00:14:46**

Remember, you can right-size your model in four easy steps.

**00:14:49**

Prove it, define it, test it, select the stage model.

**00:14:52**

And prompt engineering can help you get even better results from your SLMs.

**00:14:57**

I challenge you to go forth, find your stage model.

**00:15:00**

And you can find all of my socials.

**00:15:02**

You can find the evals library, and you can sign up for a preview of me, my if you so choose.

**00:15:08**

I look forward to hanging out and chatting with you more about my device models at the rest of this conference.

**00:15:13**

Thank you.
