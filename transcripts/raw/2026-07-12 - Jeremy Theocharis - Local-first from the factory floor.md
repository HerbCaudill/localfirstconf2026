---
source: local-first-conf-recording
title: "Local-first from the factory floor"
date: 2026-07-12
speakers:
  - "Jeremy Theocharis"
source_recording: "../../recordings/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1030-local-first-from-the-factory-floor"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Local-first from the factory floor

**00:00:00**

This community calls local-first, by necessity, not by choice. And this is the story in three parts. First, we start by explaining the world that forested, then what we built for, and then we evaluate how local-first it really is.

**00:00:15**

So, how do these production lines manufacturing the juices actually work? A production line is nothing else than just a dozen of machines wired together, controlling each other, and it is a distributed system,

**00:00:29**

but not like any other distributed system that you might know. The smallest piece is the control room. I'm sorry for being so academic, let me make a better example here, the thermostat.

**00:00:41**

So, I know it's difficult to imagine when it's so warm outside, but in the winter, sometimes you want to warm up the room, and there's a target temperature that you go and set in your thermostat, and you have, so this is this, there's a thermometer somewhere in the room which measures

**00:00:59**

the temperature, which could be 80 degrees, you calculate the error, which are 3 degrees over time, then you have the thermostat, which does some pretty amazing algorithms in there, and then controls the heating elements in the room,

**00:01:11**

which then heat up the room, and then in the room you can have some disturbances, the window could be open at the room temperature, and it goes on.

**00:01:22**

And fun fact, if you have ever run Kubernetes, Kubernetes is also based on these control room mechanisms. And now a control, now a production line, is nothing else than a complex distributed systems with these control rooms all stacked upon each other. So, there's the concept of the automating permit, where you have on the lower levels, you have the sensors, and then the next level above it, you have the PLCs, and then the next level above it, you have the PLCs, so that you have the PLCs. So, there's the concept of the automating permit, where you have on the lower levels, you have the sensors, and then the next level above it, you have the PLCs, and then the next level above it, you have the PLCs.

**00:01:51**

We're going to talk a lot about PLCs here, programming with logic controllers, and PLCs, they interact with the levels underneath it, so the sensors and actuators to control them, and then, because a production line has multiple PLCs, you have a system above it, that then controls all of these control loops, and then you have multiple production lines, and so on and so forth.

**00:02:15**

So, how that works is, you have the order of 3000 volts, that comes in, and the other layer system says, okay, defaults in volts due to Friday, then the underlying system says, okay, it knows all of the production capacity, okay, schedules it to this specific line, line 3, 500, we shift, and then so on and so forth, and then it also goes back above, so how much was active produced, do we need to reschedule, etc.

**00:02:39**

And all of those groups, they all run in parallel, it's not only real-time, it's not only distributed, but also, I'm pretty sure, that when you ever are in the need to press this button there, you want it to work, and you want it to always work, and you want it to always work, even if someone's updating virtual machine, or your software has the next output.

**00:03:01**

And the software here has to adhere to the same safety standards that you know from mechanical engineering. If Cloudflare goes down in the IT world, it's like, okay, you have some lost revenue, but, yeah, it's pretty annoying, but, yeah.

**00:03:17**

But what happens in industrial systems, if the system goes down, and you cannot press this button here, people can die. So, and now this is going to get interactive. So, first read out the questions and the two options, and then you can raise your hands.

**00:03:35**

So, who keeps this distributed system running? Is it option A, a PhD in distributed systems with a full team of IT engineers behind them? Or B, two electricians from the next home over?

**00:03:46**

Alright, so, who's for option A? Alright, who's for option B? Yeah, I might have already asked the question already. It is B. It is a three and a half years learned apprenticeship. You can even study it, but even then the term distributed system never comes up. And how are they able to manage it?

**00:04:09**

Because there is a whole ecosystem around the concept of OT for the electricians. And they have in this ecosystem, they have everything they need. They have their own computers, which are called PLCs. They have their own trainees, they have their own programming languages.

**00:04:25**

You cannot just expect to a PLC in programming. It's a program like you would design an electric circuit diagram. And because it is so large, changing it is quite expensive.

**00:04:36**

So, it has stayed rather the same to when it originally developed in the 90s. And for example, here you can see two rather modern dashboards you will find in a more modern interaction line.

**00:04:49**

If you are now like from UX design or something, it looks quite old, but this is just how it looks. And it's really everything that's controlled by it.

**00:04:59**

It could be, as I just went there, it could be like some bottling of some bottles that you can find there in the drink section, or it could be this cap. Everything is manufactured using exactly the same technologies.

**00:05:12**

And fun fact, the SCADA system of your friendly nuclear reactor is also running on the Windows server. So it really doesn't matter what you have, it's all of it.

**00:05:22**

And even now you would think, okay, if you buy a new line, how does it look then? Even if you buy a new line, you can still go for those technologies.

**00:05:33**

Because you have already the entire, you're already in this ecosystem, and you already have to, all your workforce already knows it.

**00:05:40**

So, and now the pain starts, beside this, you're right here for example. The pain starts. Now try reaching it from the outside. And this is not a joke, this is not a joke, you actually have to do this.

**00:05:54**

So imagine you're this person and you want to configure a PLC. You have to first install some custom VPN software on your laptop, then you have a browser based remote desktop that you need to log in.

**00:06:05**

From this one, you RDP into the jump host, because the networks are segregated there. And only then you can SSH into the actual machine.

**00:06:13**

So if you're trying to move the mouse, it takes five seconds for the mouse to appear where you want. It's extremely frustrating to work with.

**00:06:22**

And everyone knows it, so the solution is just to fly the people there. And it's a normal problem, and you're spending a lot of money on just a lot of workers just solving this problem.

**00:06:34**

But the pain doesn't stop. In a large enterprise, the man in the middle is not the attacker, it's actually the security department.

**00:06:42**

So what they do is they put an attack in there, basically bypassing everything. We've learned about security so far, which we have to trust the rule certificate, so every client needs to trust it.

**00:06:54**

It decrypt, inspects, and encrypts all the traffic again, and to make it even better, like sometimes it will drop packages, it has latency, whatever, because the department that runs this is run as a cost center.

**00:07:06**

Which means they're just, they're all engineers here, so all of us are usually in revenue centers.

**00:07:12**

But if you're working in IT, where the only task is to close as many tickets as possible, yeah, we've had this as well.

**00:07:19**

Creating EVM, virtual machine, can uptake to six months.

**00:07:23**

And all of this was just for reaching the system, just for configuration. The hard part is actually doing anything useful with it.

**00:07:30**

So, here with it, you will see some dashboard that we've developed ourselves.

**00:07:36**

Imagine when you're the plan manager, you just want to know how it might be produced at the end of the day.

**00:07:41**

What are you going to get this? If you don't have this dashboard, you have to take a phone call and literally phone around where is the current order.

**00:07:48**

And in order to get the data out of there, you need to collect over 50 different protocols.

**00:07:53**

It's a topic for another talk. Then you need to take the data out there and model it.

**00:07:59**

So it's all you need to say, and only then you can start building applications on it.

**00:08:04**

So, how is it then done today? And now it feels weird to think like, okay, we don't know at the end of the day how much they have produced.

**00:08:13**

So, the first option we've already talked about a little bit is hire someone to install or develop software,

**00:08:20**

then just fly it there for every software update. So basically there's no software updates.

**00:08:25**

And the second is to ship all production data into some random SAS provider's cloud, usually a US-based one.

**00:08:33**

But this doesn't work for a lot of, especially in Europe, this rarely works.

**00:08:38**

Because now imagine you like a German hidden champion.

**00:08:41**

You know exactly how we have to pull this single metal down over the temperature curve to get the required strength of this metal.

**00:08:49**

And this temperature curve is the entire company. You don't want to send it into some random cloud.

**00:08:55**

So this is why the second approach is almost always failed.

**00:08:59**

And the law also looks the same way.

**00:09:01**

There is the German Vertical Infrastructure Act called CRITIS, but it's the same in other countries as well.

**00:09:08**

And also a lot of ordinary human captures are classified by it.

**00:09:13**

And it doesn't say specifically if something is allowed or forbidden.

**00:09:18**

It's just all about risk classification, etc.

**00:09:21**

But the more ownership and control you have over your data, the easier it is to pass these audits.

**00:09:27**

And trusting some random SAS provider isn't in there.

**00:09:31**

So they need a third way.

**00:09:33**

And way too late we learned that this committee already has a word for it, which is called Local First.

**00:09:40**

So part two, what did we build?

**00:09:43**

So we build two things.

**00:09:46**

A data plane that stays on the customer's infrastructure fully open source.

**00:09:52**

And then a management console that allows you to access the data also remotely.

**00:09:58**

It's just passing like a small backend server that doesn't do any of the data storage.

**00:10:02**

It's just a small relay.

**00:10:04**

And companies wanting to now know how much they have produced at the end of the day.

**00:10:08**

They have to make two decisions.

**00:10:10**

One, where is the data lift?

**00:10:12**

Pretty sure this temperature curve you want to have locally.

**00:10:15**

And then who builds the system?

**00:10:17**

Either they build it themselves, but they usually run as cost centers.

**00:10:21**

So there's not much innovation happening there or the buy it.

**00:10:25**

And then it's quite attractive to go for an open source solution in the core.

**00:10:29**

Because you are not locked in by vendors.

**00:10:32**

And you buy it and it's still there.

**00:10:36**

And even if it were to disappear, it can still keep on running.

**00:10:40**

So we build the data layer for this world.

**00:10:43**

And it starts with one instance.

**00:10:45**

You made core.

**00:10:46**

That's a single locker container.

**00:10:48**

This is a brief excerpt from the management console.

**00:10:52**

I can just show it to you quickly.

**00:10:54**

You can add an instance how it looks.

**00:10:56**

Hello, local, first.

**00:11:02**

You can add an instance and then you get a single docker run command.

**00:11:06**

Docker compose or put it in kubernetes or whatever you want.

**00:11:10**

Let me quickly delete this as well.

**00:11:13**

Because I know you guys and there was an authentication token in there.

**00:11:16**

All right.

**00:11:17**

So what you do then is you drop it into a network zone and then you can do all of it.

**00:11:30**

And now if you have a new h-core for every production line, whatever, the question is how do you then get a global view?

**00:11:36**

And you get it by stacking it upon each other.

**00:11:39**

So on the left side you still have the automation pyramid, which is already shown.

**00:11:44**

And then you have a new h-core for example at the production line.

**00:11:48**

It extracts all the data and models the data.

**00:11:50**

And then it sends it one level above to the site level.

**00:11:53**

So there you can connect to everything.

**00:11:55**

And then you have the, usually in the customer's cloud.

**00:11:59**

You make coincidence that aggregates all the data to send it to some data lake or data warehouse or whatever.

**00:12:06**

And this is now a new problem because now we have a lot of instances and how do you manage and configure it.

**00:12:13**

And this is where the management console comes in.

**00:12:16**

So in here you can see all of your instances.

**00:12:20**

This is my instance.

**00:12:21**

I will be doing some CPU stressing on it.

**00:12:23**

You can take a look at it.

**00:12:26**

You can see, okay, what are, what data is flowing through it.

**00:12:30**

So where is it connected to?

**00:12:32**

You can see the actual data points that are in this instance.

**00:12:41**

And this is also just that you can configure it and that the customer can build the applications he wants.

**00:12:48**

And this is now the two halves of what we built.

**00:12:51**

There's the data layer and then there's the management layer.

**00:12:55**

But now what's in between it, it's the sync.

**00:13:01**

And when we found the name local first, we were really quite excited because we found all of these tools.

**00:13:07**

And we were super excited.

**00:13:08**

How cool we can get finally rid of our sync code.

**00:13:11**

But then we realized, hey, our system has five more requirements and no cool tool could cover all of them.

**00:13:19**

Or maybe we just misunderstand something and if you could come to me afterwards and correct me, I'm open for all types of pictures to get rid of our sync code.

**00:13:27**

So let's go through them.

**00:13:29**

So the first one is the language boundary.

**00:13:32**

A lot of the tools assume you have JavaScript or TypeScript on both ends.

**00:13:37**

And because your 8-core is developed in Go, you need to have Golang and TypeScript or JavaScript.

**00:13:44**

The second, it's a little bit more complex, are the access patterns.

**00:13:48**

So the typical access pattern you know is likely a document.

**00:13:53**

Let's take linear, for example.

**00:13:55**

We're big fans of it.

**00:13:56**

So you have a ticket or you have an issue and when you change something, what happens is an opportunistic update.

**00:14:02**

So when you write something, it will automatically show this to the user and it tries to sync in the background.

**00:14:09**

And only if that one fails, it will actually give you an error message and roll it back.

**00:14:14**

While working with it, I've never experienced it.

**00:14:16**

So it's a good assumption.

**00:14:19**

However, what we're doing is not everything is a document.

**00:14:24**

Actually, only very few things are a document.

**00:14:31**

And we have three types of objects we want to sync.

**00:14:36**

The first one is actually the easiest.

**00:14:37**

It's like the integration.

**00:14:39**

It's just exactly what you know.

**00:14:41**

It's a document.

**00:14:42**

The browser can write to it or multiple browsers can write to it.

**00:14:46**

If you have the new 8-core, we can also write to it.

**00:14:48**

For example, if input comes there via GitOps, they're quite easy.

**00:14:53**

Now it gets a little tricky, which is the observation.

**00:14:56**

Because the current sensors that are going around there,

**00:15:00**

they can only be read by the new 8-core, only written by the new 8-core into it.

**00:15:04**

And all the browsers can only read from it.

**00:15:06**

It doesn't make sense if what's the crew temperature if the browser would write it.

**00:15:10**

And now the most complex one is, I call it like an action,

**00:15:14**

is where you actually write to it.

**00:15:17**

So for example, when you have a configuration, you do not only want to save it.

**00:15:21**

Saving is just like the first part.

**00:15:23**

Rather easy.

**00:15:25**

You want to deploy it.

**00:15:26**

And what it means?

**00:15:27**

The front end is emitting a command, so writing an object.

**00:15:31**

Then the new 8-core can only read from it and can only execute it here.

**00:15:36**

There's also a small control loop running on there.

**00:15:39**

And then it can, to this object, it can only append information,

**00:15:42**

intermediary results.

**00:15:44**

And then the front end can only read those intermediary results.

**00:15:48**

So it's a more complex access pattern there.

**00:15:51**

The third requirement is data merging.

**00:15:56**

So every instance is a single source of truth for its own zone.

**00:16:00**

But if you now want to trace data through all these paths,

**00:16:04**

you need to aggregate the data from all three of them for monitoring purposes.

**00:16:09**

And now what you need to do is, because there is no back-end,

**00:16:12**

you have to start merging them, all this real-time data that comes in,

**00:16:16**

with 10,000 updates per second, all in the browser.

**00:16:19**

And we're doing it with text and index.db.

**00:16:22**

But they're fine for documents, but there are a lot of groups around it,

**00:16:26**

like reading out of continuous writes.

**00:16:28**

And if you have five tabs open, you need to work with a shared worker.

**00:16:32**

So one thing that reads all of it, starts merging it.

**00:16:36**

So you can also split up the CPU core.

**00:16:38**

So I guess you know this type of thing.

**00:16:40**

So one of the biggest things for us, biggest improvement,

**00:16:44**

was to actually ensure that the data coming here from UH core

**00:16:48**

is actually prepared in such a way that you can easily merge it here in the logic

**00:16:53**

and then easily insert it into index.db.

**00:16:57**

Fourth requirement, partial subscription.

**00:16:59**

I think most tools actually support it.

**00:17:01**

So you have a lot of data points and you only want to get partial data from it,

**00:17:06**

because otherwise you would just overload the browser.

**00:17:12**

And the fifth requirement, our hostile networks.

**00:17:15**

So remember these firewalls that we've talked about,

**00:17:18**

because the IT layer is run as a cost center.

**00:17:23**

So everything that you want to do there, it takes a real long time.

**00:17:29**

It's better if you're trying to travel through WebSockets or whatever.

**00:17:32**

It's just too complex of a protocol.

**00:17:34**

It's even HTTP2, it's almost too complex.

**00:17:36**

If you're sitting in a meeting, your spend is running down,

**00:17:39**

and if you have in front of ten people, you need to tell why your product isn't working.

**00:17:43**

So we decided to go for the most simplistic thing we could ever do.

**00:17:47**

Just the HTTP, non-talling, get post.

**00:17:50**

Just one outgoing port to 443.

**00:17:54**

And it's just the easiest to explain and troubleshoot.

**00:17:59**

So these are our five non-trivial or non-trivial requirements,

**00:18:03**

and we didn't find a tool that were to cover all of them.

**00:18:06**

And that's not criticism.

**00:18:08**

I think it's just built for a little bit different use case than we have.

**00:18:12**

But also feel free to correct me afterwards.

**00:18:15**

So the verdict: are we really local first?

**00:18:18**

I think we are, but in an extended sense.

**00:18:23**

I think the term grew up around a lot of personal apps,

**00:18:26**

but we took its values, ownership and agency,

**00:18:29**

and just applied them to factory infrastructure.

**00:18:32**

And we graded ourselves against the original SA7I tools,

**00:18:37**

and we have to split it up.

**00:18:39**

Up there is one with data infrastructure,

**00:18:41**

the UMH core, which is open source, but also headless.

**00:18:45**

So something like fast,

**00:18:47**

which device with user experience just simply cannot apply.

**00:18:51**

But it's very, very strong on the offline sense,

**00:18:54**

on the longevity, on privacy, and controls.

**00:18:57**

Because everything, all the critical data can even keep on running

**00:19:00**

if you even disconnect the connections between the UMH cores,

**00:19:05**

and of course also the internet.

**00:19:07**

And then the second part is commercial.

**00:19:10**

We're a company.

**00:19:11**

We also need to make money.

**00:19:12**

is to provide a good user experience on top of it.

**00:19:15**

And then we borrowed the concept of fast,

**00:19:18**

like no spinners and multi-device and multiple browsers there.

**00:19:22**

It's really quick.

**00:19:24**

We haven't built in proper offline or collaboration support there.

**00:19:28**

I mean, we're a company.

**00:19:30**

We have to build what user wants.

**00:19:32**

If the users want it, we will bring it in.

**00:19:34**

What's not a checkbox here is longevity.

**00:19:37**

But this is also on purpose.

**00:19:39**

And most customers are actually fine with it.

**00:19:42**

I mean, we're business.

**00:19:43**

We have to make money somehow.

**00:19:45**

And it's absolutely fine.

**00:19:47**

So if we were to disappear suddenly,

**00:19:49**

the most critical infrastructure,

**00:19:51**

it would all keep on running.

**00:19:53**

And they still have options to use GitOps

**00:19:55**

or anything else to configure it.

**00:19:57**

It's just that the management console

**00:19:59**

couldn't configure it there anymore.

**00:20:04**

So let me end this.

**00:20:06**

The way a lot of text talks end.

**00:20:08**

What we like and what we think needs to improve.

**00:20:11**

So what we like, it's a crazy local first.

**00:20:14**

It has a crazy good user experience.

**00:20:17**

Sometimes people come to me

**00:20:18**

that have tried to build it themselves in the industry

**00:20:20**

and this makes me quite proud.

**00:20:22**

And they're like, oh, I just had this Docker,

**00:20:24**

this command, and now I can just have

**00:20:26**

all of these 100,000 of text just live here in the browser.

**00:20:29**

Wow, crazy.

**00:20:30**

And the second part is,

**00:20:32**

it's really good for critical infrastructure.

**00:20:34**

I can only speak here now for manufacturing

**00:20:36**

or manufacturing in the extended sense,

**00:20:38**

pharmaceuticals, energy, oil and gas, etc.

**00:20:42**

Because there you also have the laws

**00:20:44**

that you need to have control ownership of your data.

**00:20:47**

So there it fits perfectly.

**00:20:49**

But I could also imagine,

**00:20:50**

but I'm not an expert in there,

**00:20:52**

that you can also use it for other critical infrastructure

**00:20:54**

like healthcare.

**00:20:55**

Now, what do we think we need to improve?

**00:20:58**

If you work with new engineers,

**00:21:00**

it confuses them a lot.

**00:21:02**

Like where's my back end?

**00:21:04**

Where do I post my data?

**00:21:06**

Everything you learn in programming courses

**00:21:08**

whatever is suddenly obsolete.

**00:21:10**

And assuming like most of you are all senior engineers

**00:21:12**

so we're all already in this mindset

**00:21:14**

and can easily work with it.

**00:21:16**

But if you're just starting new,

**00:21:17**

it's a little bit difficult.

**00:21:19**

Same model for L&Ms.

**00:21:20**

You first have to put them on the right path there.

**00:21:23**

And I think the ecosystem is growing.

**00:21:26**

But we're not in the business of sink engines.

**00:21:28**

We just want to get like a business web out of it.

**00:21:30**

And for this, it still requires a lot of engineering.

**00:21:33**

And working around the depth, the indexing work.

**00:21:36**

But local first works.

**00:21:39**

So the juice in your fridge was made

**00:21:43**

on a production line like this.

**00:21:45**

And it's kept running by two electricians

**00:21:47**

from the next time over.

**00:21:48**

And they used to fly to it to configure it.

**00:21:51**

And now they can use the management console

**00:21:53**

to quickly work with it.

**00:21:54**

And the data and the ownership

**00:21:57**

still remains fully under the company's customer's control.

**00:22:01**

For us, local first was never a plan.

**00:22:03**

It didn't come from an idealistic perspective.

**00:22:06**

It was just if you cross out all the stupid user experience

**00:22:10**

that you can do, it was just what remained.

**00:22:13**

And we only found the work for it later.

**00:22:15**

One last, since we now found the world,

**00:22:19**

we're still building this protocol.

**00:22:21**

We're still improving the protocol,

**00:22:23**

but not out of pride or for ideals.

**00:22:26**

So if there are any libraries or pieces

**00:22:28**

that we should be reusing or that we should know of,

**00:22:31**

please come and tell me.

**00:22:33**

The data infrastructure is fully open source.

**00:22:36**

You can find it on GitHub.

**00:22:37**

And if you have any questions, come find me after.

**00:22:40**

Thank you.
