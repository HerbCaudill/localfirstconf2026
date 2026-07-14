---
source: local-first-conf-recording
title: "Your Own AI Infrastructure: Building a Complete Local AI Stack"
date: 2026-07-12
speakers:
  - "Confidence Okoghenun"
source_recording: "../../recordings/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1430-your-own-ai-infrastructure-building-a-complete-loc"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Confidence Okoghenun - Your Own AI Infrastructure - Building a Complete Local AI Stack.md"
---

**Presenter:** I want you to watch it because I like when you have opinions from different people. I don't believe everything it says in the video, but check it out; I think it's a good reference to think about.

Just after seeing this video, I thought, “Oh shit, I'm giving a talk about running local models, and here he is shooting holes in my idea of why it makes sense to run local models.” But not to worry: ten minutes later, these were the comments on the video, and people were shitting on Theo for his ideas, some of which were correct and some of which were not. This is me being happy that I'm going to give the talk, because people basically said Theo is wrong and we're right.

Let's get into it. The idea is that you don't need a cloud subscription. For many tasks—apart from coding jobs or running agents—you can get them running locally on models that run on your laptop or a GPU farm. How do you go about that?

Before that, there are three reasons to run models locally. First is privacy. I'm happy we're in Europe; privacy is a big issue. Everybody wants their data to be private. No one wants their data used to train models or, even worse, to sell ads to them. When you have models running locally, privacy is generally something you don't have to worry about.

Then there's cost. The cost you pay up front is buying the hardware. Once you've purchased it, you can run as many models as you want, generate billions of tokens on that hardware, and keep going.

The best part is control. I'm sure you've had the experience where you rely on a model, then a few months later a new one comes out and the one you rely on is nerfed or removed, and you're forced to upgrade to the newer, more expensive model. Nobody wants that. Yesterday I saw a video about Anthropic changing the tokenizer of newer models so that the same amount of text costs 30 percent more in decoding tokens, which is great. You want control so that things don't change at that level, especially when these are systems you depend on.

Let's go back eight months. Claude Code came out and Sonnet 4.5 was a really cool model. We had people building $200,000-a-year coding apps. Around the same time, developers were crying that coding was over because Sonnet was so good—why should anyone learn to code? The encouragement was to stop coding.

But guess what? This is a graph from Artificial Analysis. You can see Sonnet over here; that's the model people were building million-dollar coding apps on. This is Qwen [unclear] 27B, a model you can run on a 16-gigabyte-RAM Mac today. Something considered frontier intelligence about eight months ago is now in the same class as a model you can run on your device. With a little more RAM, you can run bigger models like DeepSeek [unclear] or MiniMax. These are not today's frontier models, of course.

You might want to run frontier models, and open source has caught up. Here are the frontier models from Anthropic, OpenAI, and Google, and here are the open-source ones. You have DeepSeek, which you can run on a device with around 120 gigabytes of RAM, and GLM, which requires about 300 gigabytes. These are models you can download today and run on a device you own. It's a really good time to take back control of the models you depend on to build software.

Let's figure out how to do it. To host the models, you need hardware that can run them, an inference engine, an orchestration tool, and finally a gateway to provide the models as a service to applications.

Let's start with hardware. If you're choosing hardware to run AI models, there are three things to consider, in this order of priority. First is VRAM. You want as much as you can get, because it determines the size of the model you can run.

The second is memory bandwidth: how fast is the memory bandwidth on the GPU you're considering? That affects the model's token-generation speed. The higher the memory bandwidth, the faster the model is able to write.

The other thing to keep in mind is raw compute. This affects how quickly the model can process input data. If you're giving it a codebase and want it to complete the process of reading that codebase, raw compute is what it needs.

My personal recommendation if you're starting out is that the best and cheapest hardware is an M-series Mac. Get a Mac Studio with an Ultra chip. That gives you as much VRAM as you can have for a relatively cheap price, with good memory bandwidth and not-so-bad raw compute.

If you want to go specialized, there's a company called Taalas. They burn the model into the GPU, and you get crazy performance. This model is hitting 16,000 tokens per second, whereas Nvidia's Blackwell can hit about 500. That's roughly a 30-times jump in performance. If you want to experiment with this, it's another real option.

Something else to consider is [unclear]. The idea is that you don't have to buy new hardware to experiment with AI. It's a mobile GPU you can connect to a device you own and use to run inference. Check it out; it's a good product for getting started today.

Now let's talk about the inference layer. There are three main options: Ollama, llama.cpp, and vLLM. Ollama is beginner-friendly, with an awesome user experience, but there is a 20-to-30-percent performance penalty if you're serving with Ollama. My recommendation for individual use is llama.cpp. For a self-hosted inference stack serving maybe five to ten people, llama.cpp is great. It's very performant, Ollama is built on top of it, and it's highly customizable. vLLM is great if you're trying to serve a lot of models and squeeze as much throughput as possible out of the routine. Llama.cpp is my preferred approach.

Model families come in different sizes, and your choice will be based on how much VRAM you have. Use a model you can fit in VRAM, but remember to leave enough room for the model's context to fit too. Unsloth is a good resource. They're very good at shrinking models while retaining quality, so you can run them on devices with less RAM. Artificial Analysis can help you figure out which models are smart and what they're good for, so you can pick the right one.

The next issue is choosing how to orchestrate. When you're experimenting with models locally, you want to determine which is best for your use case, and sometimes you may want three: perhaps Kimi for coding, Qwen for summaries, and another for general use. But you can't necessarily run all three in VRAM at the same time.

Llama-swap lets you define a configuration so that when an inference request arrives for a particular model, that model is loaded into VRAM. If it cannot fit beside the model already there, the previous model is unloaded and the requested one is loaded to serve the request. If multiple models fit in VRAM at the same time, you can load-balance across them and configure as many models as you want for inference. It's a great, open-source tool that runs on your device.

The last piece is an AI gateway. You already have your stack running on GPUs with an inference engine and compute, and you need a way to provide it as an API to clients. Clients might be tools like OpenCode or Open WebUI, or any application with AI capabilities where you can enter a URL and API key.

An AI gateway helps manage API keys for applications and other users of your inference stack. You can set model aliases—defined names whose underlying model you can swap later—so you don't have to change configurations everywhere else. You also get features such as observability, prompt caching, and connection components that improve the stack's performance.

To put it all together, you need a GPU—my recommendation is Apple, of course—an inference engine such as llama.cpp, an orchestrator such as llama-swap, and a gateway to present the service to clients. In practice, you could have multiple instances of llama.cpp running models such as Kimi, GLM, or Qwen. Llama-swap load-balances across them and figures out how to run them when there isn't enough GPU memory to run all of them simultaneously. LiteLLM, Kong, or Bifrost can act as the AI gateway, presenting a private, OpenAI-compatible API to a client such as OpenCode, which can then call the models you've set up.

It's a really cool setup. The payoffs are enormous. First, it's always available because it runs on a device you own. If the internet goes down, you can still use your services. You know it's private, and you don't depend on cloud providers. It's a one-time hardware cost, and you can keep upgrading to open models as they are developed. You can even run uncensored models if you want. Once you have the hardware, you can do whatever you like.

Get started this weekend. Here's a guide for getting started in about one or two hours on a laptop you own. It walks through everything you need to begin running local models. That's it. Thank you so much. You all rock.

**MC:** Thanks for the overview. I encourage everyone to experiment with this, even just on your local MacBook without all the fancy stuff. You can run very small models. If nothing else, when you try a much smaller, older language model and use it with agentic coding, you appreciate the frontier models more.

One question for you. Hardware prices, and VRAM in particular, are through the roof these days. I don't know how that changes your calculus. But a related question: let's say you have an unlimited budget to blow on your home lab. What would you do in your home lab?
