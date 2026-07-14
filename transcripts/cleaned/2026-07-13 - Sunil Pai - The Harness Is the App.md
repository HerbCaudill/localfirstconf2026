---
source: local-first-conf-recording
title: "The Harness Is the App"
date: 2026-07-13
speakers:
  - "Sunil Pai"
source_recording: "../../recordings/2026-07-13 - Sunil Pai - The Harness Is the App.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1630-the-harness-is-the-app"
source_transcript: "../raw/2026-07-13 - Sunil Pai - The Harness Is the App.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** The AI agents team—you should look into those. They're apparently making a big comeback.

I was also the founder of a company called PartyKit, and that's how I developed my relationship with the local-first and sync-engine community. I loved that half of them told me I was doing sync engines wrong and some told me it was right. It's been a heavy couple of years. I don't think that argument has gone away.

As you can tell, we're on the sponsor board, so this is a sponsor talk. I get to shill and ask for your money. The specific amount is five dollars a month. That's what it takes to do the thing. If enough of you pay, the ROI on this conference works out for the coffee booth and the stuff outside. Excellent.

Everyone here has used coding agents. This is one I built yesterday. It lives in my browser but runs fully on Cloudflare Workers and Durable Objects. For the first demo, I'll say, “Generate me a big click counter,” and it'll start doing the thing. The internet has been a bit shaky.

When I use coding agents, the other thing I like to do is go on Twitter and bullshit. While this is working and doing its thing, let's go on Twitter. Let's say, “In Berlin, clap when you tweet on stage.”

Back here: it's generated the whole thing. What's nice is that the app it generated also lives inside a Durable Object on the edge, I assume about 20 milliseconds away from here. It works like—oh, well, it actually doesn't work at all. Thanks a lot. But it did generate a whole bunch of code. It imports Durable Objects and uses Dynamic Workers. Cloudflare loves to be a snowflake in the JavaScript ecosystem. None of our stuff works with regular things, but when it works, it's quite amazing.

Why is a coding agent running in Workers a big deal? I'll get to that. Why do coding agents feel like magic to developers like us?

In 2025, there were a whole number of agent frameworks. I'm not going to name names; I'm friends with lots of them. Then some dude took a coding agent, put it on a Mac Mini, and said, “Figure it out.” That's a big deal because coding agents combine a few things.

One is a workspace: a file system it can generate files in and read files from. It has access to tools. Famously, the only tool you might need on a laptop is Bash, but you can connect it to other tools—your Gmail, this, that, and the other. And it has a place to run things.

The point is that it takes the agent loop and attaches a computer to it: a thing that can do things for you. Then you connect it to your personal life and run that on a loop. It doesn't have to be based only on input. Any time an email comes in, do a thing. Every Friday evening at 9 p.m., summarize all my GitHub commits and send them to my manager. I'm working hard. It is what it is.

The big thing is that we figured out the loop early enough: this idea of act, observe, adjust. You can tell that text is Claude slop, by the way. No human being talks like that. That's a machine.

We had the loop, but while everyone was trying to build chatbots they could embed into websites in 2025, what you really wanted was to attach the loop to a computer and say, “Do things. Be a personal assistant”—not just for a person, but for an organization or team. That's why a whole number of personal-assistant products kicked off.

Programmers are feeling it right now because the output of coding agents can run. They're really good at generating code, though opinions may differ on the quality of the code. Once coding agents did that, we saw it and thought, “Let's run it and let it be the machine itself.” That's why programmers are feeling product-market fit with LLMs.

But there's a subtle trap. Developers are famous for navel-gazing and thinking we're the be-all and end-all. We don't recognize that code is the special case. We call these things coding agents and think they're meant for coding.

The truth is that normal people don't want to generate code and build apps. They want to do things, live their lives, feel that their capabilities are amplified, learn, and do stuff. They do not give a shit about GitHub. It's not in the lexicon at all.

At this point, I want to introduce the idea of “two hands on one document.” We're generating all this developer-focused code, but I don't see much of a consumer-AI movement or discussion of how these things affect normal life.

You have a document, a thing—the orange square in the middle—and traditionally you would build a UI for it, perhaps something that changes its color or size and lets you rename it “My box.” Now we can attach this magical loop to the document and start manipulating it. You say, “Make it calmer,” and it might change it to blue. “Make it warmer. Go bolder. Smaller. Rename it.” What does it rename it to? “Ship it.”

I suspect this is going to become the interaction model in harnesses going forward. I want you to rethink the fact that developers have always occupied a stratified layer. Given a task on a computer, they could open an IDE. “Rename all these photos,” or now send them to a vision model to get captions. Those capabilities were never available to a regular person. They had to spend three dollars in the app store for something that did only one thing, and it didn't do exactly what they wanted.

Every human being on the planet now gets this little coding buddy in their pocket. The thing you can do to your app is express not just actions, but intent that manipulates the underlying things. Remember: two hands, one document. It should actually be four hands, but the agent doesn't have hands.

Message number two: everyone says text is all you need to interface with software. I don't think that's true either. My dad loves using ChatGPT, talking to it, and generating images, but I don't think he'll use an e-commerce site if it's chat-first. People love using the e-commerce site. Some will try saying, “Show me clothes for my four-year-old grandson,” and generating a random UI. Some of it will be interesting, and there are vested interests in making that happen, but that can't be the whole thing.

We've spent 40 years with windows, icons, menus, and pointers as an interaction paradigm. I think the model is that you invite coding agents to interact with you in the document. Again: two hands, one document.

I have a demo for this, and—oh my God—I'm going to open the terminal, and it absolutely did not start. We're going to try again.

But that's just it. I don't want companies to build applications where the agent is a layer and all your documents are behind it. You need ownership of your documents, songs, and things you're working on. The agent is invited as a partner to collaborate with you on them.

What does “right” look like? Many people have ideas. I'm onstage, so I get to say what I think is right.

Like many of us here, I am a failed artist. I wanted to be a musician and writer. I only got into code because it paid the bills, so boo-hoo me. I still have dreams of taking a guitar and performing in pubs in the UK. But dude, the JavaScript money is so good.

I built a little digital audio workstation. It's not one of those audio-generation LLM things. It has a chord lab where I can choose chords and a little beat machine—a sequencer. I'm going to click a few of these and press play. I don't know whether the audio is wired up or just playing on my laptop. The front row can hear it. It's playing something. Let me stop it.

By the way, I built it, and everything sounds like the GoldenEye soundtrack. Anyone over 40 knows what I'm talking about. There's also a little modular synth. I love this. You can build things that do stuff, and it's nice.

I also built it as a learning experience. Any time I pick a bunch of chords, a section below explains why that chord selection works. It's quite cool.

I have the same little coding agent embedded in the app. I can say, “Make it a jungle beat. Choose the right instruments for it to be unhinged DnB.” This coding agent not only runs on a server in the background generating code; I've given it access to all the tools, buttons, and capabilities.

It's thinking. There you go: it's doing a little trace and creating a jungle track. It's sounding kind of weird. Can you hear it? It does a thing. I have to stop this; it sounds weird as hell.

You can do many things. You can say, “Make me the GoldenEye soundtrack. Make it dreamy and cinematic.” It can choose different instruments and do a multitrack thing. This is super fun to play with. When I'm not doing my day job, I do this, and every five minutes my wife knocks on the door and asks, “What the fuck is going on in there?”

Point B: two hands, one document. Instead of building one chat experience where you type a prompt, it works for 30 minutes, and spits out something that sounds disturbingly close to Taylor Swift, you get to interact with the actual things you're working on. I like that. I think this is how software should be and how you collaborate with LLMs, these god computers.

One document, two hands. A deterministic core and sync as the spine. Of course, this is built with a sync engine. There is no way in hell that a pull-based architecture would make sense for a live, interactive thing. Feel free to use the sync engine of your choice. I assume the Jazz folks are here somewhere. Use Jazz Tools; it's a good one. It's also for a musical, so same word. There are many; it's up to you. I assume Johannes is mad because I didn't say LiveStore. I use LiveStore.

Let's quickly progress into how to build a system like this. This is where you pay me five dollars. You put the document in a Durable Object. Durable Objects are Cloudflare's implementation of the actor model at the infrastructure layer. You can do it your way; this is how I think you should do it.

For a given instance of a document or any entity, it spins up on the crazy, 313-city-spanning, bajillion-point-of-presence network Cloudflare has. I tested it in Berlin; latency is anywhere between 15 and 20 milliseconds, which is amazing for these things.

It also means you can build collaborative, multiplayer applications. You can open a link and share it with someone else. The entire slide deck is a Durable Object with an agent, which is why I get to do all these things. The first version had a QR code where you could join me, but you don't want to do that onstage without auth, where people can write things in public.

As a sponsor, and because I got permission from one person, we have new Durable Object swag. We couldn't afford a T-shirt cannon, but I'm willing to swing this into the audience if anyone thinks that's a good idea. For years, I've wanted to be cool enough to do this. It's five dollars a month, just to be clear.

Durable Objects are an interesting primitive because they are stateful serverless. I don't see a world where this model—a coding agent for all your apps—works if you're spinning up a container, VM, or Kubernetes cluster for every person on the planet. You're not going to spin up billions of these. Imagine how expensive that would be. You're not going to get that many Mac Minis.

You want a serverless model, but you can't do it with plain serverless functions. You need stateful serverless. Durable Objects conveniently are a primitive where you can spin up millions.

For websites, we might say we expect 100,000 shoppers but only 5,000 concurrent users. That's how you do server provisioning. In the new world, you can't do that because these agents need to run 24 hours a day behind the scenes even when they're not connected to your room. You need a million or a billion concurrent agents, and conveniently, that company has a solution. Use Durable Objects.

Somebody gave Durable Objects a 2-out-of-10 rating on Twitter yesterday. It was amazing. It's not bad for a 2-out-of-10 technology.

The document lives very close to the user. We have technology that can migrate it across the planet. We haven't shipped that yet, but it'll happen. It sits there and persists. You can add on to it. It's just JavaScript.

“Durable Objects” is such a terrible name for a technology, but the company has leaned into it, which is why we have T-shirts just for Durable Objects. Now we've said it so many times that we figure people are okay with it. But it's not a database, just to be clear. It has a database, which makes it more confusing. Never mind.

You take that Durable Object and add Project Think. Project Think is the hosted, serverless coding agent my team and I have been working on for a while. It's incredibly resilient. You can do deploys, the thing can crash, and we've worked very hard so that even if it continuously crashes, there's no user-facing effect. Even if it crashes midstream, it recovers and continues the stream without user-facing changes. It's nice. It's software that I make.

Project Think gives you connection points for a workspace. We have a virtual file system you can connect inside your Durable Object, or connect to a sandbox or VM somewhere else and escalate or de-escalate based on that. You give it the ability to run things. We have Dynamic Workers, which basically let you do `eval`, but safely. You give it tools, and the combination of all those things is the computer.

A computer doesn't have to be a beige box underneath your desk that you turn on with your big toe. It's just a thing that has these pieces. You can tell that Claude made this slide because it loves the word “substrate.”

Build substrates, not chatbots. But it's true. I think this is how we take the elements that brought product-market fit to developers and coding use cases and bring them to everyone else: musicians, accountants, and all these other people. I put canvas here because my boy Steve is there, and I want to connect Project Think to it as well.

Look for the things you already use your hands for in the tools and software you use. How do you give an agent access to that same hands-on interface?

I'm ahead of time, which is nice, and my demos worked—kind of. The counter thing was a bit of a wash.

To close, this is what I mean when I say “the harness is the app.” People have looked at coding agents as specialized, heavy software for developers that runs on laptops or VMs in the cloud. Every model company wants to sell you its VMs in the cloud right now. It's funny. If you do it wrong, it can be more expensive than the inference itself. It's a bit of a mess.

But if you think about it conceptually as the shape of an agent loop with tools and access to a workspace and file system, then let it output HTML, CSS, and JavaScript or connect to your mobile app, the harness truly becomes the app.

Your job now is to go back from here. Don't use Durable Objects. Use Durable Objects. It can be anything else. You can spin up a VM; I don't care. Your users are already working on things. It's been 40 years of computing; they're not starting from scratch. How do you introduce this magical agent buddy as a harness in your application?

I think you do it by forming your idea of what the computer is and plugging an agent loop into it. Thank you.

Agents.cloudflare.com. I'm @threepointone on Twitter. Are people still liking my tweet? That seven should be 10 now. Ninety. Amazing.

You can find me on Twitter at @threepointone. We have a booth, and we're around. We might do some fun stuff tomorrow for lab day as well. I'd like to thank Adam, Johannes, Anjana, and the entire crew for having me. These are the events we like going to because people have back pain and remember 40 years.
