---
source: local-first-conf-recording
title: "Local-first from the factory floor"
date: 2026-07-12
speakers:
  - "Jeremy Theocharis"
source_recording: "../../recordings/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1030-local-first-from-the-factory-floor"
source_transcript: "../raw/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** We built what this community calls local-first by necessity, not by choice. This is the story in three parts. First, we explain the world that forced it, then what we built for it, and then we evaluate how local-first it really is.

How do the production lines manufacturing the juices actually work? A production line is nothing other than a dozen machines wired together, controlling each other. It is a distributed system, but not like any other distributed system that you might know. The smallest piece is the control loop. I'm sorry for being so academic; let me give a better example: the thermostat.

I know it's difficult to imagine when it's so warm outside, but in the winter sometimes you want to warm up the room. There's a target temperature that you set in your thermostat, and there's a thermometer somewhere in the room that measures the temperature. You calculate the error over time. Then you have the thermostat, which does some pretty amazing algorithms in there and controls the heating elements in the room, which heat up the room. You can have disturbances—the window could be open at room temperature—and it goes on. Fun fact: if you have ever run Kubernetes, Kubernetes is also based on these control-loop mechanisms.

A production line is nothing other than a complex distributed system with these control loops stacked upon each other. There's the concept of the automation pyramid. On the lower levels you have the sensors; on the next level above, you have the PLCs. We're going to talk a lot about PLCs here: programmable logic controllers. PLCs interact with the levels underneath—the sensors and actuators—to control them. Because a production line has multiple PLCs, you have a system above that which controls all of these control loops. Then you have multiple production lines, and so on and so forth.

An order of 3,000 bottles comes in, and the higher-layer system says, “These bottles are due Friday.” The underlying system knows all of the production capacity and schedules it to a specific line—line three, 500 per shift—and so on. Information also goes back up: how much was actually produced, do we need to reschedule, et cetera.

All of those loops run in parallel. It's not only real-time and distributed; I'm also pretty sure that whenever you need to press this button, you want it to work. You want it always to work, even if someone's updating a virtual machine or your software has the next outage. The software here has to adhere to the same safety standards that you know from mechanical engineering. If Cloudflare goes down in the IT world, you have some lost revenue. It's pretty annoying. But in industrial systems, if the system goes down and you cannot press this button, people can die.

Now this is going to get interactive. First I'll read out the question and the two options, and then you can raise your hands. Who keeps this distributed system running? Is it option A, a PhD in distributed systems with a full team of IT engineers behind them, or B, two electricians from the next town over? Who's for option A? Who's for option B? I might have already answered the question. It is B. It is a three-and-a-half-year apprenticeship. You can even study it, but even then the term “distributed system” never comes up.

How are they able to manage it? There is a whole ecosystem around the concept of OT for electricians. In this ecosystem, they have everything they need. They have their own computers, which are called PLCs. They have their own training and their own programming languages. You cannot just [unclear] a PLC in programming. It's programmed like you would design an electrical circuit diagram. Because this ecosystem is so large, changing it is quite expensive, so it has stayed rather the same as when it was originally developed in the '90s.

Here you can see two rather modern dashboards you will find in a more modern production line. If you are from UX design or something, it looks quite old, but this is just how it looks. Really everything is controlled by it. It could be the bottling of bottles that you can find in the drinks section, or it could be this cap. Everything is manufactured using exactly the same technologies. Fun fact: the SCADA system of your friendly nuclear reactor is also running on a Windows server. It really doesn't matter what you have; it's all of it.

Even if you buy a new line, you can still go for those technologies because you're already in this ecosystem and your whole workforce already knows it.

Now the pain starts. Try reaching it from the outside. This is not a joke; you actually have to do this. Imagine you're this person and you want to configure a PLC. You first have to install some custom VPN software on your laptop. Then you have a browser-based remote desktop that you need to log in to. From this one, you RDP into the jump host because the networks are segregated there. Only then can you SSH into the actual machine. If you're trying to move the mouse, it takes five seconds for the mouse to appear where you want. It's extremely frustrating to work with. Everyone knows it, so the solution is just to fly the people there. It's a normal problem, and you're spending a lot of money on workers just solving it.

But the pain doesn't stop. In a large enterprise, the man in the middle is not the attacker; it's actually the security department. What they do is put a man-in-the-middle in there, basically bypassing everything we've learned about security so far. We have to trust the root certificate, so every client needs to trust it. It decrypts, inspects, and encrypts all the traffic again. To make it even better, sometimes it will drop packets, have latency, or whatever, because the department that runs this is run as a cost center. We're all engineers here, so all of us are usually in revenue centers. But if you're working in IT, where the only task is to close as many tickets as possible, we've had this as well: creating a VM, a virtual machine, can take up to six months.

All of this was just for reaching the system, just for configuration. The hard part is actually doing anything useful with it. Here you see a dashboard that we've developed ourselves. Imagine you're the plant manager and you just want to know how much might be produced at the end of the day. Where are you going to get this? If you don't have this dashboard, you have to take a phone and literally phone around to ask where the current order is. In order to get the data out of there, you need to connect over 50 different protocols. It's a topic for another talk. Then you need to take the data out and model it. Only then can you start building applications on it.

How is it done today? It feels weird to think, “We don't know at the end of the day how much they have produced.” The first option, which we've already talked about a little, is to hire someone to install or develop software, then fly them there for every software update. So basically there are no software updates. The second is to ship all production data into some random SaaS provider's cloud, usually a US-based one. But especially in Europe, this rarely works.

Imagine you're a German hidden champion. You know exactly how you have to cool this single metal down over the temperature curve to get the required strength of this metal, and this temperature curve is the entire company. You don't want to send it into some random cloud. This is why the second approach almost always fails.

The law also looks at it the same way. There is the German critical-infrastructure regulation called KRITIS, but it's the same in other countries as well, and a lot of ordinary manufacturers are classified by it. It doesn't say specifically if something is allowed or forbidden. It's all about risk classification, et cetera. But the more ownership and control you have over your data, the easier it is to pass these audits. Trusting some random SaaS provider isn't in there.

They need a third way. Way too late, we learned that this community already has a word for it: local-first.

Part two: what did we build? We built two things: a data plane that stays on the customer's infrastructure and is fully open source, and a management console that allows you to access the data remotely. It's just passing through a small backend server that doesn't do any data storage. It's just a small relay.

Companies wanting to know how much they have produced at the end of the day have to make two decisions. One: where does the data live? I'm pretty sure you want to have this temperature curve locally. Then, who builds the system? Either they build it themselves, but they usually run as cost centers, so there's not much innovation happening there, or they buy it. Then it's quite attractive to go for an open-source solution in the core, because you are not locked in by vendors. You buy it and it's still there. Even if the vendor were to disappear, it can still keep running.

We built the data layer for this world. It starts with one instance, UMH Core. That's a single Docker container. This is a brief excerpt from the management console. I can show it to you quickly. You can add an instance. “Hello, local-first.” You add an instance, and then you get a single `docker run` command. Use Docker Compose or put it in Kubernetes, or whatever you want. Let me quickly delete this as well, because I know you guys, and there was an authentication token in there.

What you do then is drop it into a network zone, and then you can do all of it. If you have a new UMH Core for every production line, the question is how you get a global view. You get it by stacking them upon each other. On the left side you still have the automation pyramid that I already showed. Then you have a UMH Core, for example, at the production line. It extracts and models all the data, then sends it one level above to the site level, where you can connect to everything. Then you have the [unclear], usually in the customer's cloud, that aggregates all the data to send it to some data lake, data warehouse, or whatever.

This creates a new problem: now we have a lot of instances, and how do you manage and configure them? This is where the management console comes in. In here you can see all of your instances. This is my instance; I will be doing some CPU stressing on it. You can take a look at it. You can see what data is flowing through it and where it is connected. You can see the actual data points that are in this instance. This lets you configure it and lets the customer build the applications they want.

These are the two halves of what we built: the data layer and the management layer. But what's in between them is the sync.

When we found the name local-first, we were really quite excited because we found all of these tools. We thought, “How cool—we can finally get rid of our sync code.” But then we realized our system has five more requirements, and no cool tool could cover all of them. Or maybe we just misunderstand something. If you could come to me afterward and correct me, I'm open to all types of pitches to get rid of our sync code.

The first requirement is the language boundary. A lot of tools assume you have JavaScript or TypeScript on both ends. Because our UMH Core is developed in Go, you need to have Golang and TypeScript or JavaScript.

The second, which is a little more complex, is the access patterns. The typical access pattern you know is likely a document. Take Linear, for example; we're big fans of it. You have a ticket or issue, and when you change something, what happens is an optimistic update. When you write something, it automatically shows this to the user and tries to sync in the background. Only if that fails will it give you an error message and roll it back. While working with it, I've never experienced that, so it's a good assumption.

However, not everything we're doing is a document. Actually, only very few things are documents. We have three types of objects we want to sync. The first is the easiest: the integration. It's exactly what you know—a document. The browser can write to it, multiple browsers can write to it, and UMH Core can also write to it, for example if input comes in via GitOps. They're quite easy.

The next type, the observation, gets a little tricky. The current sensors can only be read by UMH Core, and only UMH Core can write their values into it. All the browsers can only read from it. It doesn't make sense for a browser to write the current temperature.

The most complex one, which I call an action, is where you actually write to it. For example, when you have a configuration, you do not only want to save it. Saving is just the first, rather easy part. You want to deploy it. The frontend emits a command by writing an object. Then UMH Core can only read from it and can only execute it. There's also a small control loop running there. It can only append information—intermediary results—to this object, and the frontend can only read those intermediary results. It's a more complex access pattern.

The third requirement is data merging. Every instance is a single source of truth for its own zone. But if you want to trace data through all these paths, you need to aggregate the data from all three of them for monitoring purposes. Because there is no backend, you have to start merging all this real-time data, which comes in at 10,000 updates per second, in the browser. We're doing it with [unclear] and IndexedDB. They're fine for documents, but there are a lot of [unclear] around continuous writes. If you have five tabs open, you need to work with a shared worker—one thing that reads all of it and starts merging it—so you can also split up the CPU core. I guess you know this type of thing.

One of the biggest improvements for us was to ensure that the data coming from UMH Core is prepared in such a way that you can easily merge it in the logic and then easily insert it into IndexedDB.

The fourth requirement is partial subscription. I think most tools actually support it. You have a lot of data points, and you only want to get partial data from them because otherwise you would overload the browser.

The fifth requirement is our hostile networks. Remember the firewalls we talked about. Because the IT layer is run as a cost center, everything you want to do there takes a really long time. Trying to get WebSockets or whatever through is difficult; it's just too complex a protocol. Even HTTP/2 is almost too complex. If you're sitting in a meeting, your demo is running down, and you have ten people in front of you, you need to explain why your product isn't working.

We decided to go for the most simplistic thing we could do: just HTTP long polling, GET and POST, with one outgoing port, 443. It's the easiest to explain and troubleshoot.

Those are our five non-trivial requirements, and we didn't find a tool that could cover all of them. That's not criticism. I think they're just built for a slightly different use case than we have. But feel free to correct me afterward.

The verdict: are we really local-first? I think we are, but in an extended sense. I think the term grew up around a lot of personal apps, but we took its values—ownership and agency—and applied them to factory infrastructure.

We graded ourselves against the original seven ideals, and we have to split it up. One part is the data infrastructure, UMH Core, which is open source but also headless. Something like “fast,” which deals with user experience, simply cannot apply. But it's very strong in the offline sense, in longevity, privacy, and control. All the critical data can keep running even if you disconnect the connections between the UMH Cores and, of course, the internet.

The second part is commercial. We're a company; we also need to make money. It provides a good user experience on top of the infrastructure. We borrowed the concept of “fast”—no spinners—as well as multi-device and multiple browsers. It's really quick. We haven't built in proper offline or collaboration support there. We're a company; we have to build what users want. If the users want it, we will bring it in.

What's not a checkbox here is longevity, but this is also on purpose, and most customers are actually fine with it. We're a business; we have to make money somehow, and it's absolutely fine. If we were to disappear suddenly, the most critical infrastructure would all keep running. Customers would still have options to use GitOps or anything else to configure it. It's just that the management console couldn't configure it anymore.

Let me end this the way a lot of tech talks end: what we like, and what we think needs to improve.

What we like is that it's crazy local-first. It has a crazy-good user experience. Sometimes people who have tried to build it themselves in the industry come to me, and this makes me quite proud. They're like, “I just had this Docker command, and now I can have all of these 100,000 tags live here in the browser. Wow, crazy.”

The second part is that it's really good for critical infrastructure. I can only speak here for manufacturing, or manufacturing in the extended sense: pharmaceuticals, energy, oil and gas, et cetera. There you also have laws requiring you to have control and ownership of your data, so it fits perfectly. I could also imagine—but I'm not an expert there—that you could use it for other critical infrastructure, like healthcare.

What do we think we need to improve? If you work with new engineers, it confuses them a lot: “Where's my backend? Where do I post my data?” Everything you learn in programming courses is suddenly obsolete. I'm assuming most of you are senior engineers, so you're already in this mindset and can easily work with it. But if you're just starting, it's a little difficult. It's the same problem for LLMs: you first have to put them on the right path.

I think the ecosystem is growing, but we're not in the business of sync engines. We just want to get business value out of it. For this, it still requires a lot of engineering and working around [unclear], the indexing work. But local-first works.

The juice in your fridge was made on a production line like this, and it's kept running by two electricians from the next town over.
