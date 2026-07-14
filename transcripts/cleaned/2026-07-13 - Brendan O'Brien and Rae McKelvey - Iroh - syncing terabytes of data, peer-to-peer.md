---
source: local-first-conf-recording
title: "Iroh: syncing terabytes of data, peer-to-peer"
date: 2026-07-13
speakers:
  - "Brendan O'Brien"
  - "Rae McKelvey"
source_recording: "../../recordings/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1330-iroh-syncing-terabytes-of-data-peer-to-peer"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Brendan O'Brien and Rae McKelvey - Iroh - syncing terabytes of data, peer-to-peer.md"
---

**Presenter:** [The opening words are unclear.] For those who don't know me, I go by b5 on the internet. My name is Brendan O'Brien, and Number 0 is the company. We make an open-source project called Iroh. Things have changed a little for Iroh, and that's what I want to talk about today.

But first, the basics. What is it? Iroh is a library that you put inside your app and use to connect any two devices on the planet. That's what you need to know.

This isn't going to be a highly technical talk, but there are important bits to understand. Iroh is written in Rust, and we now support many languages. The core concept you've heard me mention is dialing keys, not IP addresses. Each endpoint gets a key—technically a key pair—and the public half works like an IP address. Inside Iroh, you give it the key you want to dial and get a connection. The devices can be anywhere, and as they move around, Iroh keeps that connection persistent. This is an important primitive, and we'll get into why it exists.

Instead of going deeper technically, I want to talk about where we are historically as a project. We reached 1.0 a little over three weeks ago, and life has changed since. We've been busy.

You may ask, “Is Iroh web-scale? Can it do this?” Here are a couple of fun statistics. In the last six months, we've handled 30 billion connections on relays that we can see. On one day, we did almost half a billion. If you're asking whether this will work for real, I can say with high confidence that it will. We also have the pleasure of working with some lovely companies that are actively building on Iroh.

I want to talk about what it was like to get here and what it meant to reach 1.0. It took four years, ten people, and more than 65 releases. This will be a little more spiritual, because I think this crowd has a specific role to play that I want to motivate.

The project looks as if it's moving fast now, and maybe we've reached an inflection point. But my job is to explain that we're full of shit: figuring this out was not easy. Sometimes someone gets onstage and presents a polished project. I want to demystify that and motivate more people to get onstage and talk about the great thing they're building.

I'm going to compress our four-year history into three chapters. The first is idealism. The second is learning to paddle our own canoe. How can you tell if somebody is Canadian? Don't worry; they'll tell you, and they'll work canoeing metaphors into their talk. The third is the hard part, which is fun to talk about now that it's over.

Overlaid with our history, these chapters form a story about an apparent overnight success that was really a multi-year project. I want to describe what the background felt like and retroactively apply lessons that you can decide whether to use in your own work.

By a show of hands, who thinks their best software is ahead of them? See, we're still optimistic. We made many mistakes and learned many lessons. This isn't bragging; it's showing what we think we learned.

Let's start with idealism. This is what four years of running a startup does to you: then and now. This is the day we formed the company. My co-founder and I started Number 0 on April 1, and the original startup meeting was at a hotel at Berlin airport.

We came from the distributed-web movement. Before local-first, our world was full of people saying the internet was broken and that we needed to make a better one. It became popular enough to turn into the plot of HBO shows. Iroh was originally an implementation of the InterPlanetary File System, IPFS.

When we started, we had a simple thesis. Brooklyn Zelenka gave me this line: “I am stuck in the food, water, and shelter phase of building the distributed web. I cannot get devices to connect to each other. How am I supposed to build something exciting and interesting that will change the world when I don't have foundational characteristics I can rely on?” We said, “Cool. Let's make something that works.” That core mandate has never changed. [Unclear name] is the person on our team who bears that standard: if it doesn't meet the bar, we don't ship it.

In 2022, we shipped version 0.1 at IPFS Camp. It was an IPFS implementation with a CLI, a microservice architecture, and a built-in content-addressing system intended to interoperate with other IPFS implementations. Almost nothing resembles modern Iroh.

We fully believed in the ideals of the distributed web. We were alongside DAT, Hypercore, IPFS, and others. We thought that if we could operate within that box, solve the food-water-and-shelter problem, and get something working, we'd unlock enormous benefit.

After about a year, we cut 0.1. Along the way, we shipped Iroh as a library, the only piece from that phase that remains. We quickly realized it wasn't working. A performance chart compared adding data and passing files around in our Rust implementation with the Go implementation. Rewriting in Rust was supposed to make it faster, but ours was slower. More importantly, both were nowhere near fast enough to be useful.

We reached an idealism-versus-practicality moment: what were we doing? That led into chapter two and the hardest leadership decision I made during the project. We decided to start over, break entirely from IPFS, and create space for ourselves.

Internally, this was difficult because we still believed—and still believe—that the internet is broken and needs fixing. The people in the DWeb movement were our friends. If you're in local-first, you may recognize the feeling: am I local-first enough? Am I in the group? Will this decision put me outside it or upset people I care about?

We needed space to focus on “it just works,” because it wasn't working. We had to make room while being kind to people we cared about and explain that we were still chasing the same mission, but needed room to design for ourselves.

We call this the “move slow and break things” chapter. We rewrote a lot and needed freedom to make our own mistakes. The performance difference before and after was immediately palpable. We simplified: can we focus on sending a fucking file over the internet? Can we do that one thing?

We got in touch with a project that might actually use it: Delta Chat. Getting from zero to one user often involves asking whether you know somebody, and we did. We focused on device backup. Could I get material from one device to another and transfer chats between them? This first production use did not have NAT hole punching, so both devices needed to be on the same Wi-Fi network.

This chapter taught us something. At a conference like this, you can feel good among people who support your worldview. Then you show your work to someone else and they say, “I don't care.” You have to sit with that difficult feedback and incorporate it. That's so hard that you should feel good if you manage it one day a week. That's all we did. We weren't good at it.

We soon realized that NAT traversal would make Delta Chat better. After six months, we implemented our first NAT traversal in Iroh 0.5.1, still years before the real product shipped. Over time we added dialing by key. This was the first point where every element of modern Iroh was present: NAT hole punching and the whole abstraction. We thought it was done and would be great. The amount of work remaining was painful.

We had protocols bundled into Iroh. A post called it a big step toward 1.0 in September 2023, so our prediction was a little off. Iroh had layers, a very thick thing that users could supposedly opt into. We thought we needed to solve all these problems to make a peer-to-peer stack useful, and had to unlearn that.

Another talk celebrated boiling the ocean, and I promise these ideas can coexist in tension. For us, boiling the ocean was bad. Peer-to-peer projects are tempted to cover everything from connectivity through the application stack, spending their entire innovation budget. The desire comes from trying to meet users where they are, but our giant stack became unwieldy. Iroh included a console, a synchronized key-value store, and all this other stuff.

We did have wins. People built things like Jumpy, one of the first games using an Iroh connection and now available on Steam. A peer-to-peer gaming tool synchronized game packets across a phone and another endpoint, converting C++ into Rust, turning it into encrypted packets, sending it, and converting it back. The fact that it worked blew my mind. Projects such as [unclear] and Pkarr began adopting us, so thankfully other people would boil the ocean for us.

But the feedback was, “I just want a dumb pipe between two machines. Get out of my way.” We said, okay, let's make the dumb pipe. We published a website as a marketing hack that offered exactly that. Feedback increasingly said the documents, blogs, and data-sync features were nice, but what kept people returning was the dumb pipe: Iroh could actually make connections, and that was special. The product was still too big.

At Number 0, team members cultivated an important habit: “I'm afraid to bring this up. I'm scared of what happens when I tell the group what I think.” What if all of Iroh were just the iroh-net part? What if we deleted everything else and defined Iroh as the networking connection that worked? What if we focused only on Rust for a while? We supported multiple languages at the time and struggled to keep the bindings current.

In hindsight, that year and a half was about getting good as a team at steering a technical project. We cultivated people who can ask hard questions without shame. We learned to paddle our own canoe. If I tell you to build on Iroh as a reliable substrate, you need to know that the people protecting that abstraction care about it for the long haul.

At a team retreat, we finally articulated what Iroh should be. A whiteboard that haunts my dreams showed Iroh as a stack of IETF protocols in a trench coat. We should avoid major innovation whenever possible. What we needed was essentially QUIC and multipath QUIC. There was a multipath specification, so we should implement it.

That took us into the hard part. We knew what Iroh needed to be and had to execute. We needed multipath QUIC, but no Rust implementation existed. We split the team. Two people, Floris and [unclear], worked on multipath; everyone else kept shipping.

Starting in October 2024, we released incrementally toward the version that shipped three weeks ago. The protocols came out and remained useful. Then a project casually added Iroh to an app with two million daily active users. On the night of the United States election, two million nodes came online almost overnight. We got our first real taste of scale. We had to ask in the Iroh Discord whether anyone had onboarded millions of nodes, and one person raised their hand. Maybe don't use a public release for that—but okay.

The rest of the team landed incremental improvements while the core work continued. We added WebAssembly support, which meant finding all the Tokio task spawns in the codebase and writing our own task-spawning libraries so Iroh could compile and run single-threaded in a browser.

We built our own performance charts because we needed to understand Iroh's behavior commit by commit. We read and implemented the long multipath specification. Technically I'm the company's CEO, and we were six months into that work before I opened the specification webpage. Trust your team. But when I saw it, I thought, “Shit, is this going to work?” We had made a serious gamble.

There was lots of refactoring, cleanup, and shipping. We wrote a network-simulation library because our Python tool was not performant enough, missed cases, and contained a difficult bug that Claude helped find. We built tooling to watch packets flow between nodes because multipath acknowledgments and hole punching are hard to understand. We don't use that tool much now, but it's fun on slides.

We ended up writing our own QUIC implementation. The Quinn maintainers were lovely, but we were moving too fast and needed to finish. Our CI suite reached 67 checks. This is what production-grade software looks like.

More releases followed. In 0.96, we shipped multipath and were terrified because we'd removed the old Iroh implementation and replaced it. We worked through must-ship lists and maybe-later lists. We shipped custom transports, allowing Bluetooth Low Energy to serve as a path underneath Iroh. Then came more bug fixing, cleanup, release candidate zero, and finally 1.0. We landed on Hacker News and then it was over.

Please direct your applause to the Iroh team. I'm the fucking clown who gets onstage and riffs about it. The work did not feel linear, despite how the timeline looks. The final year and a half was the scariest part because we were most exhausted. What if we'd stopped and given up?

Don't give up. Think about the thing you've been working on. This is a group of people who have spent years looking at hard problems, and the world needs you to keep doing that.

On the other side, wonderful people begin putting subtle references to Iroh in their work. It's the highlight of my career to see people say, “This is networking you can trust. It's built on Iroh.” We see apps emerging that let users take back their data, and to my delight I recognize them as Iroh and local-first apps. Now we can bring back the idealism: distributed web for me, local-first for others—why not?

New apps are appearing every few days: coding from anywhere without VPNs or port forwarding, direct Kubernetes tunnels, unified clipboards with no accounts, desktop music libraries on phones, agents experimenting with Iroh, and home-lab monitoring. We're past food, water, and shelter for connectivity. Look at what comes out the other side. We have an abundant combination of execution capacity from our new robot friends and solid primitives. This is an exciting moment.

Next, we keep going. Our job becomes upgrading the internet. We need to think of Iroh as IPv7 and ask how to steward it as reliable, widely embedded commons infrastructure.

Here are the lessons I hope you'll consider. Your community is for you: it's where you feel that you're doing good work and receive feedback from contemporaries. But your job is to take the work outside it. I commend this conference's curators; this isn't a CRDT conference, and that's great. There should be CRDT material, of course, but the work has to reach beyond it.

Keep your hand in the pain box if you can. It's hard, and don't be upset if you can't do it every day. Paddle your own canoe. Encourage the hard questions. It's going to take much longer than you think.

I promised something new. I'm not going to demo it because I don't want to waste time and the Wi-Fi is terrible, even for Iroh. We're YOLOing it into the wild right now at [unclear URL]. This is the next thing after the dumb pipe: an SSH wrapper that lets you SSH into any machine anywhere. I use it because we bought a Mac Studio to run local LLMs, and it compiles Rust faster than my local machine can. Come play with it.

**Unknown speaker:** [The opening question is not captured in the recording.]

**Presenter:** Absolutely. I'm glad it's being asked directly, and we knew we would get this question. First, my co-founder and I invested some of our own money in the beginning. We're now VC-backed, so we have funding for some time.

We make money in two ways. We have services on our computers: we'll sell you supporting infrastructure that we run for you, so you can buy a network from us. That's useful, and you can run it that way if you want to support us. We also do enterprise work, working directly with companies to provide SLAs.

Normally it might feel weird to say we want enterprise work, but we believe in the sustainability of this model. We can maintain the open-source side and enterprise-facing services without compromising the core value. The relays are open-source. DNS discovery is open-source. You need to be able to take this entire stack, put it in your app, and know you won't become dependent on another company. That's the goal.

**MC:** Tell me about relay servers. In peer-to-peer systems such as BitTorrent, which was one of the first to succeed at scale, there is often an initial discovery network. It's lightweight but still represents something not quite centralized—or like DNS, perhaps. How does that work for you?

**Presenter:** Iroh is federated at best. One of our core goals is moving intelligence about networking to the edge. We want the device to become smarter about networking. You can configure Iroh to work with no relay server at all, using DNS and Bluetooth Low Energy. That's an on-site use case we want to flourish.

But in the idealism-versus-pragmatism tradeoff, we chose to have relay servers. We've made them as dumb as possible. They cannot see encrypted traffic, but they coordinate connections. That's part of Iroh's magic and why it works consistently. If necessary, we'll send your encrypted traffic over HTTP/1.1 just to escape corporate Wi-Fi. We believe it has to work first, then we bring the ideology as close as possible to that functionality threshold.

**MC:** That makes sense. The flip side, which I mention every time we talk, is my experience with WebRTC. It promises peer-to-peer connections, then you realize most traffic is tunneling and it feels a little pretend. I know you've mostly overcome that, but this venue Wi-Fi, for example, blocks connections between devices.

**Presenter:** If it's fully blocked, yes, though you'd be amazed by what we can do. The point stands when we can't get a direct connection. Here are the heuristics we use. With stock Iroh, we expect a 95-percent direct data rate. By direct data rate, we mean the proportion of data sent over IPv4 or IPv6 rather than a relay during the connection's lifetime. We see 96 or 97 percent, and regularly 98 percent of traffic sent directly.

**MC:** Very good. A round of applause for Brendan.
