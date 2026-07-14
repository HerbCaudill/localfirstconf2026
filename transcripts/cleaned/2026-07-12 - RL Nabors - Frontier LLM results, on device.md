---
source: local-first-conf-recording
title: "Frontier LLM results, on device"
date: 2026-07-12
speakers:
  - "RL Nabors"
source_recording: "../../recordings/2026-07-12 - RL Nabors - Frontier LLM results, on device.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1415-frontier-llm-results-on-device"
source_transcript: "../raw/2026-07-12 - RL Nabors - Frontier LLM results, on device.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Quick show of hands: how many of you are using a frontier model in production in some capacity? How many would like to but are nervous about doing a round trip to somebody else's servers? Yeah, I thought so. Right audience here.

I'm Rachel Lee Nabors. You may remember me from such awesome projects as getting my clicker to work. I've spent 10 years in the open-source world, spent five years at FAANG, was on the React team, and have spent the past three years consulting with AI startups in the Bay Area.

Like every other engineer in the AI era who's been on stage today, I also have a product you should go sign up for. I'm kidding; it's on a waitlist. I'm a solo founder trying to get out of stealth. Mima is basically a client for all your social things. Wow, this would have been a really good event to launch Mima at. She's not ready, but she uses atproto and X because I got tired of having to switch between seven different apps. I thought I should be able to build this with web protocols. It's 100% private, lives on your device, and has no servers because I don't want to have to pay for your cat memes.

The issue is that some of Mima's features are only possible with language models. We're talking about summarizing a long chain of threads. You wake up in the morning and 20 people have said something, and you're like, “Oh God, I have to read this.” No, Mima summarizes that stuff, so you do not have to go read “he said, she said” all the way back to the morning.

The problem is that large language models are typically too big to fit on devices. Thank goodness we have something called an SLM, or, as I like to call it, a “smol language model.” SLMs contain millions to billions of parameters, whereas an LLM contains closer to billions or trillions. If this big blob up here were one of the smaller large language models, this itty-bitty dot over here represents the biggest small language model. That gives you an idea of the difference in parameter count and exactly how much compute we need to host these models.

When I was building Mima, obviously I wanted to put the LLM on the device. But there are a lot of little itty-bitty language models out there. How do you pick the right one?

I built a framework and worked with Google on it. You can find it at web.dev. You do have allies—are you even recording? You have allies inside the big companies. A lot of people are rooting for the best possible future for humanity.

I've boiled this framework down to “prototype big, deploy small.” Prototype your system with a foundation model to prove that it's possible. The goal is to use the smallest possible model that can give you the same results, or at least a smaller, good-enough model. I call that the edge model. But to measure the models, you're going to need a measuring stick, and “feels good, bro” vibes are not a proper measuring stick.

Fortunately, we have inherited so much from the test-driven development era that we can reapply in this situation. First, test whether what you're trying to accomplish is possible at all by using the largest model. You can recruit something like Gemini or a task-specific model that's too big to fit on your machine.

This is an example of Mima's summarization feature. Notice that I have you configure your own API key. This was the version of Mima that let you use Claude with it, specifically Claude Sonnet. You can see a summary right there: “Discussion on eval harnesses, discipline, and split-role verification methods.” It's not just giving the last thing said in the thread. It works. Good. Sweet. This is possible. You can give a language model a long series of conversations to summarize.

First, you want to collect a set of inputs and outputs. In this case, I collected sets of public conversations I was having with people and the summaries that Claude Sonnet created from them. I considered them good enough. I investigated each of them and found that they did not hallucinate, so those were my success criteria.

This is called a golden dataset. It comes from machine learning. It's basically that curated collection of, “When I give you this, the model should give me this in return.” You maintain it throughout the life of your project and add to it as new challenges and edge cases arise. It's always evolving. I grabbed 14 threads, each evaluated for summaries and the annotations that should appear in the model. This is the data, and you can see an example of what the data file looks like below.

These are the things I measure in the experiment. First, validity: does the output parse? If it's outputting malformed JSON, it's not going to work, because I need JSON for these summaries to be hydrated into the interface. It's an Electron app that uses React—no surprise there.

Next is reference structural validity. When a summary references something further down in a hundred-post-deep dogpile about why The Amazing Digital Circus was “broke cool” all along, you should be able to find the correct post that supports that summary. You've got to make sure it actually exists in that list.

Then there's factual consistency. Does the summary stay faithful to the thread, or does it invent claims? If the thread is about whether Jenny's skirt looks good, it shouldn't be summarized as being about whether Tina's cap was appropriate.

There's length compliance. I need it to stay a certain length. It's got to be short. You can give me 90 characters, can't you? Surprisingly, LLMs are bad at that, especially the small ones. They're not very good at counting their own characters.

Then there is P50 latency. That means the mean time across the entire set: how long did it take for the action to compute with the model? P95 latency is your worst-case scenario. Something went wrong, and this user is going to give you a hard thumbs-down and a one on the NPS score. You need to know what that looks like. Don't just pay attention to averages, people.

This is important because, in a VR situation where people were given the ability to interact with AI-generated outputs, latency above four seconds degraded the experience to the point that people stopped engaging. Consider four seconds a rough guideline: your outputs should be done in this time, no higher.

Step three is to test models from smallest to largest until you get results as good as those from your big model. Meet the next top models. We've got Qwen 2.5 Instruct, which I chose because I like Qwen. Qwen is really cool, and it's very small. We have a good relationship. We have Qwen 3 because I thought, “There's a new one; why don't I try that one?”

I wanted to do Gemma 4 because all my engineering friends said, “You have to use Gemma 4. Gemma's got hot on Apple.” I thought, “Okay, yeah, Gemma's got to be good.” It's a bit bulky at five billion parameters, or 3.1 gigabytes, but what's an extra gigabyte among friends?

I talked to Claude about this, and Claude said, “You really need to add Llama 3.2 to that.” I said, “I don't know what Llama 3.2 is. Isn't that from Meta? Gross.” Maybe I'll get something from them after all those years of working on the React team. I allowed it.

I worked for Arize, the wonderful people who built Phoenix, so naturally I chose Phoenix. Phoenix is an awesome LLM observability library. It is open-source and, importantly, runs locally, which means I'm going to make it part of my local CI/CD process in the future. You'll want that later.

What I'm doing now is building a capability eval for Mima. This is where you compare the performance of your baseline model, Claude Sonnet, against the selected smaller models across all these parameters. The baseline is at the bottom. Claude is knocking JSON out of the park. It's doing great on length compliance, reference accuracy, and semantic similarity. You run the test around three times to get an average of how it returns. It costs 22 cents every time I do it, which means an average user is going to cost me about a dollar a day. No, thank you.

Step four is to select the smallest good-enough model that gives acceptable responses for your use case within this range. I've put this on a chart to make it easy. All you need to know is that Claude Sonnet is the big blue diamond at the top. This is our ceiling: super accurate and clocking in around three seconds at P50. It's under four seconds, which is pretty good.

Gemma is all the way up at eight seconds. Gemma is a little slow on regular hardware. I'm on a MacBook Pro, so I don't want to know what that's going to be like for teenage girls. That made Gemma a definite no. I was surprised by that.

At first, I thought Qwen, this big circle down here, could be my chosen one. Look how fast that is: one second. The problem is that its accuracy was so low I'd have to run it several times to get a correct answer, which would essentially double its latency. That wasn't an answer.

I also recommend that you actually read the outputs. Llama 3.2's output, when summarizing this conversation with Sunil that I was listening in on, is incredibly close to what Claude Sonnet came up with. It got the point of the joke, whereas Gemma didn't really get it. Gemma didn't have a sense of humor. It gave a similar response to Claude, and it was faster. Ultimately, Llama 3.2 ended up being the winner. Yay! It was developed by a company that does social media, so in retrospect, of course it would be good at summarizing conversations. All the more reason to add regression evals.

It wasn't perfect. It wasn't completely at Claude Sonnet's level, but we can squeeze better performance out of these smaller models with things like prompt engineering. Prompt engineering is great because you don't always have the chance to control what model you're using. You join a team and they're already all-in on Gemma 4. All of their evals are passing. They're not ready to adopt Llama 3.2 for your weird use case or upgrade to another model. You're going to have to make your test pass without changing that model.

Or maybe you just don't want to force your users to download more and more models. Gigabytes of models on a device are also not acceptable. You can use prompt engineering, where all you do is edit the prompt to get a response closer to the target response you want, closing that little gap.

These are the measurements I ended up homing in on: JSON validity, factual consistency, P50 latency, and P95 latency. They are the most important ones for getting my MVP out and getting it good enough. You really have to know what you're measuring for—not just, “It feels good; it must be good.” It must be measurably good. If you don't know what measurably good is, what are you building, really?

I recommend testing each variable per prompt. Come up with some ideas. In this case, I added a numbered input, on the theory that formatting the same prompt as a numbered list would make it easier for the model to follow. If they're little, they need a little help.

I tried few-shot prompting, where I give it a couple of examples of what Claude Sonnet did: “Could you make it more like this, please?” I tried strict rules: “No, you will not go over 90 characters.” I call this the strict-teacher rule. Then there's chain of thought, which is the idea that the little model can't think for itself, so you have to tell it to remember to think through a chain of thought.

Interestingly enough, Llama would have none of the strict teacher. It did not like the strict teacher, which noticeably hurt performance across all the variables. But few-shot prompting meaningfully increased performance and got us closer to overlap at the cost of only an additional 200 milliseconds. Not bad. That's a good trade.

This is how they compare next to each other. You can see that Claude Sonnet is pretty slow in the latency department, whereas Llama 3.2 is doing very well on latency and even comes in under four seconds for the edge case.

I dove deep on why they were still not aligning on things like factual correctness. It turns out Claude just didn't agree with parts of the conversation that Llama chose to highlight. Part of that was because I was using Claude Opus as the judge, and Claude Opus favors her little sister, Claude Sonnet. I should have brought in ChatGPT to be a neutral third party, but I learned my lesson. Be careful about testing members of the same family. They favor their own kind.

You have to actually look and say, “This says that Jenny's dress was atrocious, and you're saying that's incorrect because Claude said Jenny's dress was inappropriate. I feel like they're both similar enough.”

Next, use post-processing. Reference consistency and length can be handled inside the harness to slap down things that didn't work. This is how I beat Claude using the same harness and got better latency on P50 and P95. This is the end tally, side by side. It runs on your device, it's two gigabytes, and I haven't paid for it.

In the future, you'll want to update the prompt or upgrade the model, so you need to set up additional evals for that. They're called regression evals. That's what I'm going to be doing on the workshop day, if you want to come over and see what I'm up to.

Remember, you can right-size your model in four easy steps: prove it, define it, test it, and select the edge model. Prompt engineering can help you get even better results from your SLMs. I challenge you to go forth and find your edge model.

You can find all my socials, the evals library, and sign up for a preview of Mima if you so choose. I look forward to hanging out and chatting with you more about on-device models during the rest of this conference. Thank you.
