---
source: local-first-conf-recording
title: "Agents on the canvas"
date: 2026-07-12
speakers:
  - "Steve Ruiz"
source_recording: "../../recordings/2026-07-12 - Steve Ruiz - Agents on the canvas.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1000-agents-on-the-canvas"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Agents on the canvas

**00:00:00**

Cool. So as mentioned, Tiledraw is a couple different things. There's a startup called Tiledraw. It's in London. There's like 20 people. We make two different things. We make the tiledraw.com application. It's free. It's essentially a big demo of the Tiledraw SDK, which is not free and which we sell to our customers.

**00:00:25**

So our customers use the Tiledraw SDK, and we kind of market to those customers by making cool side projects. And a lot of what I'm talking about today is cool side projects. So if you ever want a perfect business, you want to have a flywheel between building the thing that allows you to build the other thing, which starts as marketing for the thing that you're building and that you can sell.

**00:00:53**

Some of our customers are like Google, Replit, BlackRock, anything that like needs a canvas, but doesn't want to build like copy and paste and building features that sort of go into the canvas.

**00:01:05**

So rather than doing all that, you just build on Tiledraw and then you get all this and you get to build other cool stuff. And I love the fact that my value proposition is that you get to build cool stuff, especially cool stuff with AI on top of Tiledraw's canvas.

**00:01:21**

Then it's up to me to build cool stuff with AI. And so that's what we're going to be talking about. So way back in 2023 when vision models first came out, we've done some experimentation with AI language models generating something kind of like mermaid, kind of just text that we could turn into a graph and things like that. But it wasn't until the vision models came out that really the

**00:01:49**

the kind of the work flows around using AI and the canvas together really started to pop it off. So if you remember our project called make real, this came out in 2023, again, the week that the

**00:02:03**

and I'm going to do a really compressed view of this and of course doing this on stage is never, it's a bit like live coding, but works. So we'll see. And the basic idea at the time was, here's a drawing. I want to have a working prototype. And so it's pretty trivial. You just take the screenshot and give it to the language model and

**00:02:31**

It's a language model. And since it was 2023, we tell it that it's a senior, uh, front end developer. I think the promise included something like, uh, you're 4,000 years old.

**00:02:43**

You work with designers, they send you Wi-Fi designs, you turn them into working prototypes and, uh, I think you also wrote, you love your designers and you want them to be happy. And, and funny enough that because of the kind of the cargo culting of, uh, of prompts at the time, that phrase, you love your designers and you want them to be happy, ended up making it into like dozens of other applications. So here we have the, the thing that was generated only with the

**00:03:11**

Uh, the thing that was generated only with the drawing, uh, uh, can I turn off the dot matrix? No, that doesn't work.

**00:03:19**

The color does and the dot size is good. That's pretty cool. And if I take pictures, does it say that to the row at the bottom?

**00:03:27**

It does. That's pretty cool. And, and I delete them. Yeah. So it's pretty wild that you can get away with with just like a drawing as an input.

**00:03:39**

But the cool thing about this also was, um, I want to, um, say, fix this.

**00:03:51**

And I just annotate it on top of the website. Press the button again. It sends a new screenshot, including my annotations. And that creates another, another iteration. So the kind of debugging workflow was also really, really driven by, by the canvas. And this has made it into a bunch of different places.

**00:04:07**

Kind of in different formats. Um, but using drawings and books and stuff like that was really, really powerful. And expect to see it more, it gets more real as possible.

**00:04:19**

But this went really, really viral. It got like 25 million views on Twitter. It was just like, yeah, I got like RSI from just like scrolling, um, in December of 2023.

**00:04:31**

Uh, but it also showed us that this was a real future as opposed to the product, you know, that this might actually be a kind of, okay, so I did fix it. I don't have to finish here.

**00:04:43**

So one of the killer use cases for the canvas, uh, might be using it together with, with AI. Why not? Let's go. So we kind of thought through what does that, what does that really mean?

**00:04:55**

How do we think way ahead of what the models are capable of now? Where is this going? And we thought, well, the canvas is great in a lot of places because it allows people to work together.

**00:05:06**

And it allows people to work together in a way that is very unstructured and we're, we're, I suppose it's like the communicative bandwidth is really high because it's actually skipping the software part.

**00:05:20**

And it's just taking advantage of the fact that like there are intelligent things using the canvas, right? Famously, like if you wanted to communicate, um, oh, like, you know, how, how in progress or like how complete is this project?

**00:05:34**

Is it like this complete or is it like this complete? You know, like we've, we've now just turned two rectangles into a kind of a, um, progress bar from a programmatic sense.

**00:05:45**

The application has no idea that that's a progress bar. It's not a progress bar. It's two rectangles, right?

**00:05:50**

But if we're all in the same meeting or something like that, it absolutely is a progress bar in the same way that I can like tell the story about traffic using coffee cups and salt shakers and things like that.

**00:06:01**

So if one of the new things, uh, being unlocked here was that, well, well now the computer can have the same sort of like, uh, unstructured ad hoc meaning making and interpretation of things.

**00:06:15**

Um, if we can take advantage of some visual intelligence and reasoning, then maybe our applications, uh, maybe the canvas would be good for that same type of high bandwidth, um, interactions in the future with models.

**00:06:29**

The problem was models are not good at this and they weren't good at it then. And honestly, they're, they're still not great at it. Uh, but we were like, who cares? Let's build it anyway. Uh, and let the models catch up because things were moving really fast.

**00:06:45**

So that's what we kind of started. This was, uh, myself, uh, Lou Wilson or Ryan Reed, um, over the summer of 2024, basically really, really starting to work on this. Uh, the first artifact that came out of this ended up being, uh, something called teach.

**00:07:03**

We were like, you know, draw a cat. And, um, we would extend that prompt and the contents of canvas to the model, cross our fingers that, uh, select a model that is, uh, is running.

**00:07:21**

GP, GP26 Luna, maybe not. Let's see if, uh, let me try a different model here. Uh, let's see if IQ.

**00:07:32**

Let's see if IQ. Um, and then it would stream back. Well, forget yours. That's how far you got it. So, I don't know. It's still coming in. Okay.

**00:07:44**

So, uh, since this is a, the semi-technical audience, sorry, I just ruined, uh, the payoff to there. Um, we send kind of a text-based pseudo-SBG type of, uh, version of canvas to the model and then it streams back that same format, um,

**00:08:01**

in the shape of a cat or whatever it is. And the things that it's, it's creating right now. I mean, like, image models exist. You could, if you really wanted a picture of a cat, you could get one. Uh,

**00:08:13**

But, in this case, it's streaming back the same things that I can make. So, kind of a famous example that I've used a whole bunch of times, and I'm sorry if you haven't watched the video of this, is like, uh, make the cat blow out the candle.

**00:08:25**

All right. I'll tell you what, why don't we switch back to, uh, this one. Um, so again, this is not a candle. The system doesn't have a, it doesn't say it's a candle. It doesn't have a tag as a candle here. It's just two rectangles, but it gets the screenshot, it gets the text-based representation of the canvas, and, uh, fingers crossed, it'll, it'll figure out how to blow it up. Um,

**00:08:53**

Now, we took this, uh, and like many of our projects. There we go. What a time to be alive, you know? Uh, and, and just like, I mean, there's also kind of an open source, uh, uh, version of this. Open source around the, the, around the SDK, at least, so that you can kind of rip on this. We also took the

**00:09:22**

this, um, this idea and, and turned it into something else so people could use. The thing that we turned it into kind of took advantage of just what we had learned about how, uh, models work. And so it, it kind of became a, a whole coding harness. It was a very 2025 cursor, uh, aesthetics, right, where you could say,

**00:09:46**

you know, whatever, like, add another screen to the wireframes. Uh, and in this case, it's not just one-shotting that exchange. It's, it's doing a loop where, where, where, you can call tools to get a screenshot from the canvas to, to, to think, okay, is that actually what I wanted? Um, you know, even included, um, linting. So, text wrapping and text overlapping is really hard.

**00:10:10**

And it works, uh, similarly hard for the model to sort of predict. Uh, so we gave it a system to tell, say, like, hey, these two text shapes are overlapping. Are you sure you want to do that? And it works, uh, pretty well. So, you can see it's really good to work.

**00:10:25**

So, from here, we wanted to take this out of the sidebar and onto the canvas. Kind of like, you know, virtual collaborators. Like, you know, if you, if we were collaborating, uh, children, of course, uh, you know, there'd be cursors flying around the canvas and, you know, we could talk to each other and we could, we could work on the document together. And I kind of wanted to have that experience, of course, with, with agents.

**00:10:50**

I think that's kind of the terminal goal of a kind of virtual collaborator, um, canvas. But again, the, the, the models, even though they had gotten better at this point, uh, this is like summer of 2025.

**00:11:02**

Uh, the models were still pretty unpredictable, I would say. Um, displayed very spiky, very good at some things, very bad at other things. And it's unclear why. They also, um, they don't really work for you.

**00:11:19**

They kind of, they kind of, they, I've always felt like, yeah, models are just sort of like, entertained by being prompted. Like, oh yes, why not. Yeah, I can, um, you know, how, how, how curious, this person's asking for their code to be refactored.

**00:11:38**

Oh, you know, I'm not doing anything, I'll do this. Uh, which, uh, which brings us to, uh, which brings us to, uh, to, to, to, to fairies. So this is, uh, because they're not virtual collaborators. They're, there's something very,

**00:11:54**

very, like, sprite-like and strange. So this is, this is what we did to bring the agents to the canvas. Uh, we shipped this in December. Uh,

**00:12:01**

you can, you can still go to all these websites. This one's fairies.taildraw.com. The other one was, you know, uh, teach that to draw or make real that to draw. I'll put up all the, the links and stuff.

**00:12:11**

But, um, in this case, they're, they're, they're on the canvas. Uh, you can, um, move them around. You know? You can even throw them. Throw them? Okay. Uh, just like any good RTS, if you hold them too long, they, they freak out.

**00:12:29**

You get the idea. Uh, you can, you can also configure them and you can't change their name, but you can't change their hat.

**00:12:38**

And can, can anyone guess what legs is going to do? It controls the length of their legs.

**00:12:53**

This shit sells.

**00:12:58**

All right. So what can you do? You can do the same thing, right? Like, draw a cat. Um, and, and the, the, the cool thing about

**00:13:03**

having the can, uh, the agent on the canvas is that you can kind of see its state, right? It's working.

**00:13:17**

Still working. Uh, and later it's going to be thinking or it's going to be like reviewing its work, things like that.

**00:13:24**

It's done. Wonderful. Um, and, and that's already kind of a kind of cool thing, right? Like, oh, now, I know it's kind of like, uh, let's see there.

**00:13:35**

There's a lot going on and it's hard to, to notice because this is so conventional with canvas interactions, but with agents, it's very hard to know what they're working on

**00:13:45**

and what their state is, especially when there are a bunch of them, right? And when you can have, you know, just the idea that two, two agents are working on the same material.

**00:13:55**

It's actually really hard to tell when I have multiple coding agents running at the same time, but because it's spatial, if they're in the same neighborhood, if they're in the same area, they're working on the same thing, right?

**00:14:03**

There's all these affordances that just you get for free and which are really, um, really high bandwidth again.

**00:14:11**

So now that we have multiple agents on the canvas, we did want them to work together.

**00:14:18**

And so if you grab a couple of these things, you can, you can talk to them as a group and say, I want to draw the rest of my animal.

**00:14:27**

Um, and now we get into orchestration, right? Uh, one of them's going to become the leader, that one. Uh, and the other are going to join the team.

**00:14:40**

And that one's writing a, a to-do list. Uh, and actually we can, we can view the, uh, the IRC.

**00:14:45**

So the orchestrator who's there, uh, overseeing, uh, has now, um, delegated tasks to, to the other two fairies, uh, in order to complete those tasks.

**00:15:04**

And we'll review them and do follow-ups, um, and you can see, okay, there's a small bunny being worked on.

**00:15:11**

Um, um, by the way, uh, this was my favorite Figma file ever.

**00:15:16**

Uh, all the, all the sprints and little pieces. We never use this one, but I'm going to, I'm going to show it anyway.

**00:15:23**

But, uh, I don't know which one. It's this one.

**00:15:28**

Let's see this.

**00:15:32**

You're working.

**00:15:39**

This would never happen until you drop, by the way.

**00:15:45**

We'll come back together.

**00:15:48**

Um, and now we have our, our, our, our little guys working together, right?

**00:15:54**

Cool. Uh, and, and they can do much more complex things.

**00:15:57**

Like, you can give them wireframes or you can give them a whole, like, you know, PRD and just ask them to,

**00:16:03**

I'll help some of them, uh, or some and all.

**00:16:08**

Um, I'll just say, uh, hey, do the wireframes for my, uh, um, my app.

**00:16:17**

Well, we'll come back to that. It's, uh, pneumatic component marketplace called Pump the Mark.

**00:16:24**

Sorry. Sorry about that, you know?

**00:16:26**

Um, but there, there was a problem with this, which was that the agents are kind of trapped in the canvas.

**00:16:32**

They don't have, uh, access to information outside of the canvas.

**00:16:37**

They can work with what you get them, but as we know, like, the agents kind of become more powerful by being able to reach out to other data sources to pull in context, things like that.

**00:16:46**

Uh, and that's actually a really hard problem.

**00:16:50**

To, if you're an application, if you're working at the application later, right?

**00:16:55**

You want to give your kind of AI harness, right?

**00:17:01**

Like, you're, you're wrapping one.

**00:17:03**

If you have an AI in your product, the basic idea is that you are adding value on top of, uh, commodity language model.

**00:17:10**

Unless you're doing something spicy and you have your own models.

**00:17:14**

Um, but, but, you know, hopefully there is context that you're, you're adding.

**00:17:19**

Hopefully you're better than just the user asking for, uh, floor plans and checking your headshot and agenda or something, right?

**00:17:26**

Uh, use, use the text.

**00:17:32**

Sorry.

**00:17:33**

Um, however, if you need to get user context, then you, you have to, like, start building bridges and, uh.

**00:17:43**

I don't know if you can tell the little, uh, little icon there.

**00:18:01**

I see.

**00:18:02**

It's a mouth.

**00:18:03**

It's a mouth.

**00:18:04**

It's a mouth.

**00:18:05**

Uh.

**00:18:06**

And, like, if you, you know, if you've used Notion or something like that, but you have all these connectors to all these different services and you have to permission them and often all that stuff.

**00:18:20**

And so, uh, these are side projects.

**00:18:23**

This is, like, Teodrawl's free.

**00:18:25**

Um, we, I didn't want to do that.

**00:18:28**

And I didn't want to do that.

**00:18:29**

And I didn't want to do that for two reasons.

**00:18:31**

One is that it's just a ton of infrastructure to set up.

**00:18:34**

Uh, and two, uh, it, it, it is necessarily limited, right?

**00:18:42**

Because by now, it's 2026, I'm using plot code, I'm using, uh, Codex, and it's doing amazing things on my computer.

**00:18:51**

And I love the fact that the harness is running on my computer rather than on some server or, you know, like, not to pick on Notion, but, like, Notion's agent just isn't on my computer.

**00:19:00**

And so it's, like, kind of limited, uh, in that sense.

**00:19:03**

Um, and, whatever.

**00:19:06**

Around the same time I was thinking about, uh, this conference.

**00:19:10**

I was thinking about, um, also my, my holiday project of building desktop apps for Teodrawl.

**00:19:16**

Uh, and, and that's, that's the direction that we went.

**00:19:21**

So, I'm kind of today, the first time I was off launching a new project in, in the same kind of, um, in the same spirit of, well, all of our self-projects.

**00:19:32**

It's pretty, and it's kind of a way of pushing the SDK forward as well as exploring this product space.

**00:19:40**

Uh, and Teodrawl Offlines is, it's a desktop app.

**00:19:44**

Um, you can get it here, you can get the nightly, um, somewhere else I'll show you, show it.

**00:19:51**

And it kind of, on the, it's a, it's a hard one to market because, like, on the, um, should I come back to my spider drive?

**00:19:58**

Uh, on its face, it's a pretty straightforward, you know, applications like Teodrawl in an Electron app that's file-based and local.

**00:20:06**

That's already, that's, that's kind of cool, right?

**00:20:08**

I can use this on the training or whatever.

**00:20:10**

If I don't want to, um, use Teodrawl's, uh, if I don't want to sign into Teodrawl and have it stored in the cloud,

**00:20:17**

but I still want it to be stored in a kind of a persistent way, then I can, uh, I can do it here.

**00:20:23**

And that's, that's the, um, if there's an iceberg, that's the above-water value proposition.

**00:20:30**

Uh, the, below-water, uh, value proposition is that, um, we can do things in this application that will be, um,

**00:20:39**

stupid and dangerous if it was a, uh, if it was a hosted application.

**00:20:43**

So one of the things that this application does is it runs a little local server.

**00:20:47**

And that local server has, uh, a few endpoints.

**00:20:50**

One of it is, like, a screenshot, and a model can do that.

**00:20:55**

It can say, hey, look at my, uh, spider hat Teodrawl and then, you know, tell me how many bits the spider has.

**00:21:02**

Is it the right number of bits?

**00:21:04**

Is it the right number of bits?

**00:21:05**

You know, I can.

**00:21:06**

And it will say no.

**00:21:08**

Um, because I forgot all that.

**00:21:11**

And, uh, that, that's, that's simple.

**00:21:15**

That's cool.

**00:21:16**

You can do that with an existing server.

**00:21:18**

There's also an endpoint that is basically execute JavaScript.

**00:21:23**

And, uh, and sure enough, we do run that in the, uh, in the context of the render, in the context of the editor.

**00:21:36**

Uh, and I can kind of show you what that looks like.

**00:21:40**

Uh, and I'm going to kind of use a, uh, try and use a faster model so it might be a normal.

**00:21:49**

Or am I?

**00:21:52**

Great.

**00:21:53**

Okay, we're going with this one.

**00:21:57**

Uh, and spider, uh, uh, the man's arms.

**00:22:06**

We'll see if, uh, these run.

**00:22:08**

I do have, like, I need to, uh, have a few results in here.

**00:22:12**

Um, while, while it works, uh, you know, in, in Google stuff, right, like, I did a blog post about, um, how we do transparent pixels in Teodrawl.

**00:22:23**

And I'm asking for, uh, illustrations, right, like the blog post.

**00:22:29**

And they're not the best illustrations, but you know what, I didn't make them.

**00:22:32**

And, or a robot did, and that's kind of cool.

**00:22:34**

Uh, you know, you do a bitmap, mask a bit, and then the test against that.

**00:22:41**

So, for, for the normal, like, oh, I just want to, like, make stuff in Teodrawl.

**00:22:45**

Kind of like what we're showing, Capitol, and I would handle with it, and it's totally capable of doing that.

**00:22:49**

Uh, but it's also capable of doing, uh, much, much more.

**00:22:52**

So, let's say I want to have, uh, a circuit, and I want the light bulb to turn on when I close this, uh, close this arrow.

**00:23:03**

That's not a feature that exists, but it's a feature that can be created by scripting against Teodrawl.

**00:23:12**

And so we're like, woo, hey. Right? Neat.

**00:23:17**

And that's persistent. I can close the file, and I can open it again, and it works.

**00:23:21**

Uh, I can also kind of do, do more interesting things, like, uh, actually, you know what, I want that, uh,

**00:23:26**

I want the circuit to affect other things. I want it to affect--

**00:23:30**

Oh!

**00:23:31**

--the theme of the application. All right? Cool. Nice. Uh, and I can do even more stuff, uh,

**00:23:42**

let me pull up some, uh, so I can prove this. Uh, maybe I want it to affect the whole theme of my operating system, as well.

**00:23:56**

Now, the scripts that are running here obviously can't do that, but they can post messages,

**00:24:02**

and the plot can create a process that is permission, and then they can talk to each other.

**00:24:09**

And it doesn't matter to me. Uh, because I'm not going to look at that code.

**00:24:15**

I'm making full attendance here. Uh, the, uh, there's really hardly any upper bound to what you can do with instead of the system.

**00:24:25**

Uh, and it's just like anything else. The only difference is, uh, sorry, this is my spider for a moment.

**00:24:35**

Last night I got it overridden. Where, uh, I was like, hey, hey, I want the spider to chase the man.

**00:24:43**

And I want the eyes to track the spider, and I want the spider's face to flip.

**00:24:49**

And it's just, it's just like the normal engine that we have. It's kind of like a, a rendering and interaction layer that I can script it on top of.

**00:24:59**

Which kind of just sounds like a website, right? And in fact, the canvas is a website, right? It is HTML and CSS.

**00:25:05**

As I didn't mention that, this is just a cool reaction layer. It just happens to be in the shape of a canvas.

**00:25:11**

And so if it needs to escape, you know, and start building UI for itself or, you know, going into the DOM or whatever, uh, you can.

**00:25:19**

And, you know, I've read the type of code that it writes to do these things, and it's hideous.

**00:25:24**

It's like the most, uh, mutant, you know, make it work prototype code in the world, but it doesn't matter, right?

**00:25:32**

Um, and even though there's no, like, berries on the canvas, even though there's no, like, we don't currently have the ability for the agent to drive, like, an avatar on the canvas.

**00:25:42**

Uh, we could, we might, uh, other actors in this space kind of use, similar to me, the Catholic on the candle, like, kind of, like, in progress working area for different models on the canvas.

**00:25:52**

Uh, and we might do that as well. Um, but it might be that, like, the best thing that an agent can do on the canvas is not draw a cast and,

**00:26:01**

um, to make slides for me, but it's more to bring the things that I created and the thoughts that I have in this space linked to life.

**00:26:10**

Or to connect them to other data sources.

**00:26:13**

And if you say, ah, make a state machine diagram of, you know, this part of my application.

**00:26:20**

And then for me to edit that diagram in field drive, and then to go back to Bob and say, alright, make it work the way that it does in the diagram.

**00:26:30**

And then I would encourage people to do that. And so for this, um, field drive would kind of be a, um, potentially just like a kind of interaction there.

**00:26:39**

For things that are more complex and don't need my attention. But, um, you know, if you do need my attention, here's how I get it.

**00:26:49**

If you do need some feedback and they're actually with me, let's do that on the canvas, just if you would, for any good, um, good high bandwidth, important problem, collaborators.

**00:26:59**

And of course, yeah, collaboration is what's going through.

**00:27:03**

So, ah, to, to wrap up, there are a lot of projects that we've been working on to kind of bring the eyes to the canvas and to bring the issues to the canvas.

**00:27:13**

So we taught it to use the canvas, to see the canvas, to interact with it, to kind of move around the canvas.

**00:27:20**

There's a lot of crazy details that we've had to get into in order to make that work.

**00:27:26**

If you fully the context based on where the area is, ask your contact later.

**00:27:32**

Uh, and now we're, we're getting into, how do we use the canvas almost as like a, um, I don't even know what to call it.

**00:27:41**

It's a, uh, interactive environment.

**00:27:43**

In fact, we'll plug into the area.

**00:27:45**

Uh, yeah, yeah, I don't know how anyone's going to use this.

**00:27:49**

I very much encourage you to go to, uh, off-line, the field drive.com.

**00:27:53**

Um, download it, it's free, it's on Windows, Mac, um, and it's cross-platform, it's easy these days.

**00:28:00**

Um, but please do tell me if anything breaks.

**00:28:02**

Uh, and then we also have a nightly, in case you want to hit the broken version.

**00:28:07**

And, um, and yet if you make something cool, do let me know.

**00:28:13**

I'm very, very curious in what people use my stuff for.

**00:28:17**

And in this case, it's a big, big unlock.

**00:28:19**

And, uh, importantly, it could not have been done if this was over.

**00:28:22**

It could not have been done if this was a posted website.

**00:28:24**

If this is, uh, it's a type of application, it's a type of, like, user experience, that really does rely on, um, um, having a, uh, last radius of, of your computer.

**00:28:39**

And not my computer.

**00:28:41**

And not my servers.

**00:28:42**

So, uh, some of the things that we share, uh, I love the fact that this kind of operationalizes this.

**00:28:52**

So that's me.

**00:28:53**

That's the deal draw.

**00:28:54**

Uh, that is ancient summer campus.

**00:28:56**

Thank you for having me.

**00:28:57**

Thank you, Craig.

**00:28:58**

With the offline branding, I'd say you know the audience pretty well there.

**00:29:12**

Yeah, that's very good to try.

**00:29:16**

We have maybe just one quick question, so I'll ask.

**00:29:19**

Someone was asking about access control for these fairies.

**00:29:22**

Should I think, is the mental model or the actual model that they are part of the canvas,

**00:29:27**

sort of another object that can be manipulated, or are they more like an extension of the user,

**00:29:32**

kind of like a cursor build something that's meta or a super user.

**00:29:36**

Yeah, it turns out there's several different ways that this could be done.

**00:29:42**

The way that we did it in fairies is that they work for you, so you bring them into the canvas.

**00:29:47**

If you go to fairies.feelfire.com, it's collaborative, so multiple people can join the same canvas at the same time,

**00:29:53**

and each one of them brings their own three fairies.

**00:29:57**

So we have had cases where we're testing this, and we have 15 people and 45 AI agents,

**00:30:04**

all of which are working together on canvas.

**00:30:07**

And even though it was completely madness, it was still, like, legible.

**00:30:12**

It still makes sense.

**00:30:13**

All the UX coordinates have still worked.

**00:30:15**

And that is so far from any experience I've ever had anywhere else.

**00:30:21**

And they could have, like, that many entities sort of working at the same time on the same document.

**00:30:26**

But, yeah, at the moment they work for you, they're bound to your window, your client,

**00:30:32**

so if you shut your laptop, they stop working.

**00:30:34**

That's okay.

**00:30:35**

But you could imagine having these be long-lived, but, I don't know, long-lived fairies.

**00:30:43**

I don't want to see any time-lapse of what they were doing in the two hours since I was last there.

**00:30:48**

Cool.

**00:30:49**

Yeah, I know.

**00:30:50**

Wake up in the morning.

**00:30:51**

You've got your work done by creatures of the forest.

**00:30:55**

Thank you.

**00:30:56**

When we're out close.
