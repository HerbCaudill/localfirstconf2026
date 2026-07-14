---
source: local-first-conf-recording
title: "The Harness Is the App"
date: 2026-07-13
speakers:
  - "Sunil Pai"
source_recording: "../../recordings/2026-07-13 - Sunil Pai - The Harness Is the App.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1630-the-harness-is-the-app"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# The Harness Is the App

**00:00:00**

The AI agents team, you should look into those, those are apparently making a big comeback.

**00:00:06**

I was also the founder of a company called PartKid, and that's how I developed my relationship with Local-First and the Sync Engine community.

**00:00:16**

I loved that half of them were telling me that I was doing Sync Engine's wrong, some people were telling me it was right, it's been a heavy couple of years.

**00:00:22**

I don't think that argument has gone away.

**00:00:25**

Also, as you can tell, we are on the sponsor board, so this is a sponsor talk, so I get to shill and ask for your money.

**00:00:33**

The specific amount of money is $5 a month, that's what it takes to do the thing, and if enough of you pay, then the ROI on this conference just makes work for the coffee booth and the stuff we have outside.

**00:00:45**

Excellent.

**00:00:47**

Everyone here has used coding agents.

**00:00:51**

This is one that I built yesterday, but it lives, not only does it live in my browser, but it's running fully on CloudFlare workers and durable objects.

**00:01:02**

And I'll say, first demo, I'll say, I'll generate me a big click counter, and it'll start doing the thing, and, well, the internet's been a bit shaky.

**00:01:15**

When I use coding agents, the other thing I like to do is I like going on Twitter and bullshipping, so while this is working and doing its thing, we do a thing, let's go on Twitter.

**00:01:24**

Let's say, let's say, in Berlin, a clap when you tweet on stage.

**00:01:40**

Okay, back here.

**00:01:41**

Oh, it's generated the whole thing.

**00:01:42**

What's nice about this is the app that it's generated as well is also living inside a Google object, on the edge.

**00:01:49**

I assume about 20 milliseconds away from here.

**00:01:52**

And it works like...

**00:01:55**

Oh, well, it actually doesn't work at all.

**00:01:57**

Thanks, thanks, thanks a lot.

**00:01:59**

But it did generate a whole bunch of code, it imports durable objects, it uses dynamic workers.

**00:02:04**

CloudFlare loves to be a snowflake in the JavaScript ecosystem.

**00:02:07**

Like, none of our stuff works with our regular things, but when it works, it's quite amazing.

**00:02:13**

Anyway, so a coding agent that runs in workers, why is that a big deal?

**00:02:16**

I'll get to that.

**00:02:19**

Why do coding agents feel like magic at all to developers like us?

**00:02:25**

And the theory is that...

**00:02:28**

So, in 2025, there were a whole number of agent frameworks.

**00:02:32**

I'm not going to take any names, I'm friends with, like, lots of them.

**00:02:36**

And then some dude took the Py coding agent on a Mac Mini and we said, "Figure it out."

**00:02:42**

And that's a big deal, because coding agents are a combination of a few items.

**00:02:46**

One is they have this idea of a workspace.

**00:02:49**

A file system that it can generate files to, can read files from, it can read it from everywhere else.

**00:02:55**

It has access to tools, famously, the only tool you might need on a laptop is Bash, but you can connect it to other tools, your Gmail, your this, your that, and the other is, like, it gives it a place to run things.

**00:03:10**

But the point being, like, it takes the agent loop and it attaches a computer to it, a thing that can do things for you.

**00:03:16**

And then you connect that to your personal life and you just run that on a loop.

**00:03:20**

It doesn't have to be just based on input, right?

**00:03:22**

It can be based any time an email comes in, do a thing.

**00:03:25**

Every Friday evening at 9pm, summarize all my GitHub commits and send it to my manager.

**00:03:32**

I'm working hard.

**00:03:34**

It is what it is.

**00:03:35**

So the big thing is, one, is we figure out the loop early enough.

**00:03:37**

This idea of act, observe, adjust, um, you can tell that the text is cloud slot, by the way.

**00:03:46**

I don't, no human being talks like that.

**00:03:48**

That's a machine.

**00:03:50**

But A, like, you have the idea of the loop, uh, but while everyone was trying to build chatbots that they could embed into websites, uh, in 255,

**00:04:02**

what you really wanted to do was attach the loop to a computer and say, like, do things.

**00:04:06**

Build, be a personal assistant, uh, for, not just for a person, for an organization, for a team,

**00:04:13**

and things like that.

**00:04:14**

And that's why a whole number of personal assistants stuff, uh, kicked off.

**00:04:19**

The reason that programmers are feeling it right now is that the output of these coding agents are things that can run, right?

**00:04:26**

Like, it, it's really good, really good at generating code, uh, opinions might differ on the quality of the actual code.

**00:04:35**

But the thing is that once these coding agents did that, we saw it and we were like, oh, like, let's run it and, like, let it be the machine itself.

**00:04:42**

So, that's how we, uh, uh, uh, uh, that's why programmers are feeling the PMF with LLMs.

**00:04:50**

But there's a subtle trap here.

**00:04:52**

There's a mistake and developers are very famous at navel-gazing and thinking that we have the be-all and end-all of these things.

**00:04:59**

Uh, but there's a trap.

**00:05:02**

One is that we don't recognize that code is the special case.

**00:05:06**

We call these things coding agents and we think, oh, they're meant for coding.

**00:05:11**

But the truth is that it's, uh, A, normies don't want to, like, generate code and build apps.

**00:05:19**

They just want to do things and, like, live their lives and feel that their own capability is amplified and be able to, like, learn and do stuff.

**00:05:27**

They do not give a shit about GitHub.

**00:05:29**

Like, it's just not in the lexicon at, uh, at all.

**00:05:34**

Uh, so at this point, I want to introduce the idea of two hands on one document.

**00:05:40**

Uh, uh, uh, the reason I'm bringing this about is we're generating all this code and all the code is very developer-focused,

**00:05:47**

but I don't really see a consumer AI movement or the idea of, like, how do these things affect normal life.

**00:05:52**

So, this is the idea of two hands on one document.

**00:05:56**

Uh, you have a document, a thing, uh, the orange square in the middle and traditionally you would have built a UI for it.

**00:06:02**

Something that changes the color, perhaps, something that changes the size, uh, and maybe you can rename the thing to, say, um, my box, I guess.

**00:06:15**

Uh, but now we have this ability to attach this magical loop onto it, onto the document and start manipulating it.

**00:06:22**

You can say, hey, make it calmer and it might change it to something like blue.

**00:06:26**

Make it warmer, go bolder, smaller, rename it.

**00:06:30**

What does it rename it to?

**00:06:31**

Ship it.

**00:06:31**

Ship it.

**00:06:32**

Uh, uh, rename it to ship it.

**00:06:34**

So, I suspect this is going to start becoming the, the interaction model going forward in harnesses.

**00:06:41**

And I will make that point in a minute.

**00:06:44**

But I do want you to start thinking, like rethinking the idea that previously, I say you, but you're developers.

**00:06:52**

Look, developers have always been in this stratified layer where, given a task to do on a computer, they could open up an IDE.

**00:06:59**

Like, hey, like, rename all these photos to be, uh, so and so.

**00:07:02**

And now you'll probably post it to a vision model so you get captions for it.

**00:07:06**

But those capabilities were never, uh, available to a regular person.

**00:07:10**

They had to spend three dollars on the app store and it only does, like, one thing.

**00:07:14**

It doesn't do the thing that they want.

**00:07:16**

Uh, but the truth is that every human being on the planet now gets this little coding buddy in their pocket.

**00:07:21**

And the thing that you can do to your app is that you can express not just actions, but intent.

**00:07:28**

Uh, that actually manipulates these things.

**00:07:31**

Remember, two hands, one document.

**00:07:33**

It's actually, it should be four hands.

**00:07:34**

It should be four hands, but the agent doesn't have hands.

**00:07:37**

Anyway, uh, message number two is we believe, like, you will notice that everyone's like, well, text is all you need to interface with these kinds of, uh, with, with software.

**00:07:49**

And I'm telling you, I don't think that's true either.

**00:07:52**

Uh, like, like my dad loves using ChatGPT and talking to it and like generating images and stuff.

**00:08:00**

But I don't think he's going to use an e-commerce site if it is chat first.

**00:08:04**

People love using the e-commerce site.

**00:08:06**

Oh, you go to e-commerce and say, uh, show me clothes for my four-year-old grandson.

**00:08:11**

I will generate like a random UI.

**00:08:13**

People are going to try and some of it will be interesting.

**00:08:16**

Like, there are like vested interests in making that happen.

**00:08:19**

But that can't be the thing either.

**00:08:20**

Like, we've spent 40 years with Windows icons, mouse pointer as a, as an interaction paradigm.

**00:08:28**

Uh, the, I think that the model is that you invite these coding agents to interact with you in the document.

**00:08:37**

Again, like, two hands, one document.

**00:08:39**

I do have a demo for this and, oh my god.

**00:08:41**

I'm going to open the terminal and, oh, it absolutely did not start.

**00:08:45**

Okay, um, uh, we're going to try again.

**00:08:48**

Um, but that's just it.

**00:08:51**

I do not want, uh, I do not want companies to build these applications where the agent is a layer and all your stuff,

**00:08:57**

all your documents are behind it.

**00:08:59**

Instead, you need to have ownership of your documents and your, uh, your songs and the things you're working on.

**00:09:04**

And the agent is invited as a partner to, uh, collaborate with you on it.

**00:09:08**

So, what does right look like?

**00:09:12**

Many people have ideas.

**00:09:13**

I'm on stage.

**00:09:14**

I get to say this is, uh, what is right with me.

**00:09:17**

Uh, what I think is right.

**00:09:18**

Uh, so the demo is a thing that I call a pizza.

**00:09:24**

Uh, great time to start the server right on stage.

**00:09:30**

Uh, are people liking my tweet?

**00:09:35**

Yes.

**00:09:36**

Okay.

**00:09:36**

People actually, uh, are liking my tweet.

**00:09:40**

Oh, oh, and I think my thing is, uh, starting.

**00:09:43**

Okay.

**00:09:43**

Excellent.

**00:09:44**

Okay.

**00:09:45**

So I, uh, like many of us here, uh, I am a failed artist.

**00:09:50**

I wanted to be a musician and I wanted to be a writer.

**00:09:54**

And I only got into court because it was paying the bills.

**00:09:57**

So, boo-hoo me, right?

**00:09:58**

Uh, I still have dreams of, uh, well, just taking a billion of guitar and performing in pubs,

**00:10:05**

uh, in the UK.

**00:10:06**

But dude, like the JavaScript money is so good.

**00:10:09**

So I built a little, uh, digital audio workstation.

**00:10:13**

Not one of these audio generation LLM things, by the way.

**00:10:17**

It's a thing where I have a chord lab.

**00:10:19**

I can choose chords.

**00:10:21**

Uh, it's got a little beat machine.

**00:10:22**

Let me, I mean, everyone's built like some version of this, like a sequencer.

**00:10:26**

I mean, click a few of these.

**00:10:28**

I'm going to click play.

**00:10:30**

And I don't know if the audio is wired up.

**00:10:33**

Or it's just playing like on my lap.

**00:10:35**

Well, you can hear it.

**00:10:36**

The front row people can hear it.

**00:10:41**

It's playing something.

**00:10:42**

Uh, let me stop that because...

**00:10:45**

By the way, I built it and everything sounds like the GoldenEye soundtrack.

**00:10:48**

So anyone over the age of 40 knows what I'm talking about.

**00:10:50**

There's also a little modular synth.

**00:10:52**

I love this.

**00:10:53**

You can, uh, build things that do stuff.

**00:10:56**

Uh, and it's nice.

**00:10:57**

So, uh, I've also built this as a learning experience.

**00:11:00**

So anytime I pick a bunch of chords, I have a little section down here that

**00:11:04**

shows me why that chord selection works.

**00:11:07**

It's quite cool.

**00:11:09**

Let me just play this anyway for like a minute.

**00:11:11**

Keep the volume down.

**00:11:12**

But what I have then is I have my same little coding agent embedded into the app.

**00:11:19**

Which means I can start seeing things like...

**00:11:21**

Let me zoom in so you see what I'm actually typing.

**00:11:26**

Make it a jungle beat.

**00:11:32**

Choose the right instruments to make...

**00:11:40**

For it to be unhinged data.

**00:11:45**

And the thing about this coding agent is...

**00:11:47**

This coding agent is that not only does it run like on a server in the background where it's like generating code,

**00:11:53**

but I've given it access to all the tools, and all the buttons, and all the capabilities...

**00:12:07**

Oh, it's thinking.

**00:12:08**

Okay, all right.

**00:12:08**

There you go.

**00:12:09**

It's doing a little trace.

**00:12:12**

Creating a jungle track.

**00:12:15**

I don't know if you can...

**00:12:16**

Oh, yeah.

**00:12:17**

It's sounding kind of weird.

**00:12:19**

Can you hear it?

**00:12:20**

Yeah.

**00:12:20**

Yeah.

**00:12:28**

Okay, yeah.

**00:12:29**

Okay, and it does a thing.

**00:12:30**

My point...

**00:12:31**

I gotta stop this.

**00:12:32**

This sounds...

**00:12:33**

This sounds weird as hell.

**00:12:34**

You can do a lot of things.

**00:12:35**

You can say, make me the GoldenEye soundtrack.

**00:12:37**

Hey, make it greeny, cinematic.

**00:12:39**

It can choose different...

**00:12:43**

Different instruments.

**00:12:45**

It does a multi-track thing.

**00:12:46**

This is super fun to play with.

**00:12:48**

By the way, like...

**00:12:49**

When I'm not doing my day job, I just do this, and every five minutes my wife knocks on the door.

**00:12:53**

She's like...

**00:12:53**

What the fuck is going on inside there?

**00:12:57**

Point B.

**00:12:57**

Two hands, one document.

**00:12:59**

Instead of trying to build this...

**00:13:02**

One chat experience where you type in a prompt and it works for like 30 minutes and spits out...

**00:13:08**

Something that sounds really close to Taylor Swift, which is just disturbing as hell.

**00:13:12**

You get to like interact with the actual things that you're working on.

**00:13:17**

And I like that.

**00:13:18**

I think this is how software should be...

**00:13:20**

I think this is how you collaborate with...

**00:13:24**

With LLMs, these god computers.

**00:13:29**

One document, two hands.

**00:13:31**

Deterministic core and sync as the spine.

**00:13:33**

Of course, this is built with a sync engine.

**00:13:35**

There is no way in hell that a pull-based architecture would make sense to build a live interactive thing.

**00:13:41**

Feel free to use the sync engine of your choice.

**00:13:44**

I assume jazz folks are here somewhere.

**00:13:49**

Well, use jazz tools.

**00:13:50**

There you go.

**00:13:51**

Use jazz tools.

**00:13:53**

It's a good one.

**00:13:53**

I like it.

**00:13:54**

Also, it's for a musical though.

**00:13:56**

Same thing.

**00:13:56**

So, like, same word.

**00:13:58**

There are many...

**00:13:59**

It's up to you.

**00:14:00**

I assume Johannes is mad because I didn't say live store.

**00:14:03**

I use live store.

**00:14:05**

Now, let's add a quick progression into like how to actually build it.

**00:14:10**

How do you build a system like this?

**00:14:12**

And this is where you pay me five dollars.

**00:14:16**

You put the document in a durable object.

**00:14:18**

Durable objects are this cloudflare...

**00:14:21**

You can do it your way.

**00:14:22**

This is how I think you should do it.

**00:14:24**

Where every...

**00:14:26**

Durable objects are an implementation of the

**00:14:28**

actor model in an infrastructure layer.

**00:14:32**

And the idea is that for a given instance of a document or any entity,

**00:14:37**

it will spin up on the crazy 313 city-spanning bajillion

**00:14:43**

pop network that Cloudflare has.

**00:14:47**

I tested in Berlin the latency is anywhere between 15 to 20 milliseconds,

**00:14:51**

which is just amazing for doing these things.

**00:14:54**

Also, it means that you can build a collaborative, you can build a multi-player apps, you can open up a link to that

**00:14:58**

and share it with someone else.

**00:15:00**

The first version of this deck pipe, the entire deck is a durable object that's a think agent,

**00:15:04**

which is why I get to like do all these things.

**00:15:07**

The first version of this had a QR code where you folks could join me on it.

**00:15:11**

But you don't want to do that without odds on a stage where people can write things in public.

**00:15:15**

So you put the document in a durable object and people ask people to sync it.

**00:15:22**

As a sponsor, and I got permission from one person, I don't know who else would be mad at me.

**00:15:27**

We have new durable object swag, and I am on stage.

**00:15:31**

We couldn't afford a t-shirt cannon, but I am willing to swing this into the audience if anyone thinks it's a good idea.

**00:15:42**

For years, I've wanted to be cool enough to do this.

**00:15:45**

Okay, fine.

**00:15:46**

That way, some are there, I see hands over there.

**00:15:49**

Alright.

**00:15:52**

Oh, perfect.

**00:15:59**

It's five dollars a month, just to be clear.

**00:16:02**

Neural objects are an interesting primitive because they are stateful serverless.

**00:16:07**

I do not see a world where this model of a coding agent for all your apps works if you're spinning up

**00:16:14**

a container, a VM, a Kubernetes cluster for every person on the planet.

**00:16:22**

Like, you're not going to be spinning up billions of these.

**00:16:24**

I mean, can you imagine how expensive that would be?

**00:16:27**

You're not going to get that many Mac communities.

**00:16:29**

You're not going to get this thing.

**00:16:30**

You want a serverless model, but you can't do it with plain serverless functions.

**00:16:34**

You need stateful serverless.

**00:16:35**

And durable objects conveniently are primitive where you can spin up millions.

**00:16:40**

The other thing about concurrency, like for websites, we would be able to say,

**00:16:44**

okay, we're expecting like 100,000 shoppers, but we expect only 5,000 concurrent, right?

**00:16:52**

Like that's how you would do like server provisioning.

**00:16:55**

In a new world, you can't do that because you need these agents to be running 24 hours a day

**00:16:59**

behind the scenes, even if they're like not connected to your room.

**00:17:02**

So you do need like a million concurrent, a billion concurrent,

**00:17:07**

and conveniently that company has a solution for it.

**00:17:10**

Use durable objects.

**00:17:11**

Somebody gave durable objects a 2 out of 10 rating yesterday on Twitter.

**00:17:15**

It was amazing.

**00:17:16**

It's not bad for a 2 out of 10 technology.

**00:17:19**

So the document lives with the user, very close to you.

**00:17:22**

We have technology that you actually like migrated over the planet.

**00:17:25**

We haven't shipped that yet, but it'll happen.

**00:17:28**

It sits, it persists, you can add on, it's just JavaScript, like it's...

**00:17:33**

The thing about durable objects is it's such a terrible name for technology,

**00:17:36**

but the company has leaned into it, which is why we have t-shirts that are just for durable objects.

**00:17:41**

Now we've said it so many times that we figured people are okay with it.

**00:17:45**

But it's not a database, just to be clear.

**00:17:47**

It has a database which makes it more confusing, but yeah, never mind.

**00:17:52**

You take that durable object and you add Project Think.

**00:17:57**

Project Think is the hardest coding, serverless coding agent that

**00:18:02**

myself and my team have been working on for a while, and it's incredibly resilient.

**00:18:07**

Like you can do it deploys, the thing can crash, and there is...

**00:18:12**

We work very hard on making it so that even if it like continuously crashes,

**00:18:16**

there's no user-facing effect to it, like...

**00:18:19**

I wish I could laptop in the demo that I gave you.

**00:18:22**

But even midstream, if it crashes, it recovers and it continues the stream without any user-facing changes.

**00:18:29**

It's nice, it's software that I make.

**00:18:32**

But you take Project Think, which gives you the points where you can connect a workspace.

**00:18:37**

So we have a virtual file system that you can connect inside your durable object or you can connect it

**00:18:42**

to a sandbox or VM somewhere else and you can like escalate, de-escalate based on that.

**00:18:47**

You give it the ability to run things and we have these things called dynamic workers, which let you basically do eval, but safely.

**00:18:54**

You give it tools and the combination of all those things are the computer.

**00:19:00**

A computer doesn't have to be like a beige box that is underneath your desk that you turn on with your big tool, right?

**00:19:06**

Like it's just a thing that has these pieces.

**00:19:11**

You can tell that Claude made this because it loves the word substrate.

**00:19:16**

So you build substrates, not chatbots.

**00:19:19**

But it's true, like I feel like this is the way we take elements and the things that have brought PMF for developers

**00:19:27**

and coding use cases and you bring it to everyone else.

**00:19:30**

You bring it to musicians, accountants.

**00:19:33**

I said Canvas is here because my boy Steve is there and I want to connect Project Think to it as well.

**00:19:39**

To all of these things.

**00:19:41**

The idea is that you should be looking for the things that you already use your hands for,

**00:19:47**

for the tools and software that you use.

**00:19:49**

How do you give an agent this access to the same hand interface?

**00:19:55**

Something like that.

**00:19:57**

Cool.

**00:19:59**

Oh, I'm ahead of time, which is nice.

**00:20:01**

And my demos worked.

**00:20:03**

Well, kind of.

**00:20:04**

The counter thing was a bit of a wash.

**00:20:07**

To close, this is what I mean when I say the hardness is the app.

**00:20:13**

People have been looking at coding agents as specialized heavy software for developers

**00:20:18**

that run on laptops or like VMs in the cloud.

**00:20:24**

And every model company wants to sell you their VMs in the cloud right now.

**00:20:29**

It's funny.

**00:20:30**

It could be, if you do it wrong, it's actually more expensive than the inference itself.

**00:20:34**

It's a bit of a mess.

**00:20:36**

But if you think about it more conceptually as the shape of an agent loop with tools

**00:20:42**

and access to like a workspace, a file system,

**00:20:46**

and then you let it spit out HTML, CSS, JavaScript, or connect your mobile app,

**00:20:50**

like the hardness truly becomes the app.

**00:20:53**

So your job now is to go back from here.

**00:20:57**

Don't use durable objects.

**00:20:58**

Use durable objects.

**00:20:59**

It can be like anything else.

**00:21:00**

You can spin up a VM.

**00:21:02**

I don't care.

**00:21:04**

But your users are already working on things.

**00:21:06**

Like it's been 14 years of computing.

**00:21:08**

They're not starting from scratch.

**00:21:10**

How do you introduce this magical agent buddy as a harness in your application?

**00:21:16**

And I think the way you do it is you form your idea of what the computer is,

**00:21:20**

and you plug an agent loop into it.

**00:21:24**

Thank you.

**00:21:25**

Agents.flourflare.com

**00:21:28**

@3.1 on Twitter.

**00:21:30**

Are people still liking my tweet?

**00:21:33**

That seven should be ten now.

**00:21:39**

90.

**00:21:40**

Amazing.

**00:21:42**

You can find me on Twitter at 3.1.

**00:21:44**

And we have a book.

**00:21:46**

We're around.

**00:21:47**

We might be doing some fun stuff tomorrow for the labs day as well.

**00:21:51**

I'd like to thank Adam, Johannes,

**00:21:56**

Anjana, the entire crew for having me over.

**00:21:59**

These are the events that we like going to because people have back pain and they remember 40 years
