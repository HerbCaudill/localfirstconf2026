---
source: local-first-conf-recording
title: "Panel: Data Ownership Beyond Local First"
date: 2026-07-12
speakers:
  - "Eileen Wagner"
  - "Robin Berjon"
  - "Paul Frazee"
  - "Boris Mann"
  - "Zenna Fiscella"
source_recording: "../../recordings/2026-07-12 - Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella - Panel - Data Ownership Beyond Local First.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1545-panel-data-ownership-beyond-local-first"
source_transcript: "../raw/2026-07-12 - Eileen Wagner, Robin Berjon, Paul Frazee, Boris Mann, and Zenna Fiscella - Panel - Data Ownership Beyond Local First.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** I need to build toward the internet being an incredibly beautiful world. My deep concern is creating open access and, as Brewster likes to say, a locked-open commons that preserves that access for everybody, so that we can continue to learn from each other, access the networks that connect us, build things for ourselves, and have the opportunity to participate in the place where our lives are unfolding—which nowadays is on the internet as well.

**Presenter:** That's brilliant. I've been working to give people access to tools without having to own a radio station, newspaper, or television channel for almost 25 years. We did some really interesting things around, “Look, there's this cool blogging thing.” I was involved with the Drupal open-source CMS, and we saw the work we were doing as creating equality of access. You don't have access to these other, very expensive channels, but you can own a website, and you can make it simple enough that anyone can post to it.

I thought we would be done by now, so we had to work on a few other things in between. I get involved in things very, very early and use the technologist side of my brain to guide them all the way down. As other people come along, I switch into trying to explain to everyone what might be interesting about this thing.

We're nowhere close. In fact, I think we need to consider techniques other than saying “data ownership,” because it's not a conversation you can have on the side of the street. I'm thinking a lot about the context, the importance of these things, digital literacy at a level where people can reach it, and designing things that fit into people's lives. For those of you who might have played Civilization, I want us all to start practicing cultural victory as an approach.

**Presenter:** The way I tend to think about data ownership is to bring it back to intuitive notions of ownership for real-world stuff. If I give you a bicycle, but it's in a box and you can't take it out, do you actually own a bicycle? The idea is similar here. It's switching from the abstract idea of rights to the idea of actual capabilities to do things in the real world.

The example often used for capabilities is voting rights. If I give you the right to vote, but on voting day you have to travel 200 miles on a common workday and you're not allowed to stop working, you don't actually have the right to vote. You have some kind of fake democracy. If I make it so that you can actually exercise your right, then you have the capability to vote, and that's what matters.

When it comes to data, we're in a similar situation. Here in Europe, for instance, you have GDPR data rights. Whatever service you're using, if it has your personal data, you can request that data. Try doing that. The data usually looks like some vague JSON file with hard-to-parse names that are meaningless outside their context. It's absolutely useless because you cannot do anything with it. You have data rights, but they're fake. The idea that you own data has to come with the ability to do something with that data. Otherwise, it's just not that.

**MC:** I love that framing. From a designer's perspective, if it's not usable or livable, what good is the data to you? You can own a lot of things and not do anything with them. Martin mentioned Our Incredible Journey this morning. We can have a lot of data, but if it's not actually workable, it's bad data. That's also why we've heard so much about plain-text files; maybe that's where the industry is going forward.

What I notice between your answers is that one of you is interested in securing data and making it access-controlled and usable by the people who are supposed to have it, while the other approach is a little more open. It's interesting because local-first software sits in the middle. When we talk about local-first software and applications, the inherent assumption I often hear is that they'll be used by five to 20 people collaborating in high-trust environments, whereas atproto is used by millions of people.

How is atproto going to be used—or not used, or perhaps misused—on the local-first cluster as infrastructure that's actually missing for many of these things?

**Presenter:** First of all, I did come from the local-first community with Secure Scuttlebutt and then Beaker Browser for a while, which appeared here. I kept running into use cases predicated on relatively high scale. Eventually, it clicked: if I wanted to do public social, which was what I kept gravitating toward, what makes it fun is being connected to the wider world. You're able to see something reaching a large volume of people, at least approximately represented by the number of likes it has and things like that.

The shift was about preserving what we're trying to accomplish with an open system, in the same way that we have local-first, but adapting for scale instead. AT is part of a continuum, and the question is simply what is technically correct for the scale of the thing you're trying to build. I still love local-first and peer-to-peer even though the AT Protocol is neither.

It can be an exceptionally useful tool for bootstrapping and dealing with some challenges in local-first, where you still need to find the person you're trying to establish a local-first connection with. You can use the identity system and published keys to help bootstrap a connection, perhaps using Iroh or something similar. You can use username search to find your friend in the first place, then get out of there and do your local thing. That infrastructure is probably the most direct use. As permissioned data begins to land, that's somewhere in the middle. As Jake demonstrated earlier today, bootstrapping to WebRTC is exactly the kind of thing I mean.

**MC:** Maybe a question for you, Boris. Do you think the reason so many people are building on AT Protocol is that the local-first community doesn't have good primitives itself, or are we using it because it is actually the best solution?

**Presenter:** How many people in the room have built their very own special CRDT? A couple of hands are going up. We have a problem of subscale. Long before atproto, I worked on many of the same problems. The challenge is that you end up spending innovation points on an identity system, accounts, and other things that are not at all what you want to be working on, but you look around and nothing quite fits.

With atproto, we have scale as well. From that scale, we have a bunch of people paying attention and trying things, and that gives us more and more use cases. Someone is building email on atproto—actually shared email, where you use the web of trust or atproto accounts to share sending email that already has warmed-up IPs and other things like that. I would never have thought of that at all.

In some ways, it starts by saying, “Okay, this shape of an account”—which is really a person. I do say an account is an identifier. In many other local-first projects, we haven't solved the “you failed to show someone a hash or raw data” problem. Atproto pragmatically says, “We're actually going to use DNS.” That came from my previous startup, where Daniel worked. We figured out one little piece, and Daniel took it back and said, “Here's a little of this.” There is an unbroken chain from all his experience and everything else he's done, both positive and negative. We learn along the way and have been iterating toward this.

The invitation of us being here is to ask what problems other adjacent things have, as a shared community working toward user agency, and what goals we're facing. No person is an island, and no community needs to be an island either.

**MC:** Martin this morning outlined the current geopolitical moment and suggested that maybe this is a time for us to have an answer to some of these challenges. At the same time, everyone on this panel is admitting that it's not quite there yet. It's almost perfect, but not quite. What would it take for us to get there?

**Presenter:** For the next four hours, I'm going to discuss the problem there. It would take a lot, but constraining this to this community, I think the local-first community has a lot to bring to questions of technological sovereignty and independence, as Martin outlined excellently this morning.

One thing I find frustrating with this community—and I love you all—is that “local-first” tends to apply to the idea of invention. It has to be locally invented; otherwise, I'm not interested. Maybe we should reuse one another's stuff a little more. I'd like to say standards—no one's dream—would be really good.

Seriously, one important thing Martin said this morning was about commoditization. A lot of the reason the cloud sucks today is not just that it's in the hands of big providers, but also that it's not commoditized. Most of it is not standardized, and switching is complicated. If we don't commoditize local-first, we're just going to bring cloud suck to the local laptop. It's going to be local suckiness. I don't think that's the thing.

Standards organizations suck. I spend a lot of my life in them. I know they suck more than they do, and I know it more than they do. They suck a lot more than you do, trust me. But better standards are possible, and we can figure out a standard for sync that's broadly related in many ways to AT.

Once we have standards, just having standards is not enough. We need to operate infrastructure. The kind of work that Eurosky and many others have been doing to operate independent AT infrastructure is also key. You can have the best protocol in the world, but if it's only operated by a single company, you don't actually have the best protocol in the world. Standards and infrastructure are absolutely key steps toward helping develop that foundation for a sovereign internet.

**MC:** Thank you. I believe Robin has just committed to countless years of standardizing protocol. I don't recall; I should have heard that backstage. But you also called for reusing different things. Zenna, you've seen a lot of development in your career as a community activist. What are some drawbacks from standardizing this way?

**Presenter:** If we skip over the well-known suspects, I think something very clear from the peer-to-peer community and the more decentralized aspects of the web is that many different ecosystems emerge and shape themselves around the community and where they are localized. The technology itself carries the values of these communities, and those values aren't necessarily global.

An example would be in Aotearoa, where Māori indigenous communities are working around an identity system that localizes who is part of what tribe. That contrasts with an identity system centralized in the regional government. This is an example of how the technology we use and the way it's framed in each context are unique to the values of those communities.

**Presenter:** That's a super-concrete example. I want to give another that very much supports it. I've been attempting to build spaces for people to have discussions, including conferences like Puzzle Islands, which was about coming off your island and everything else like that. There are holes in this where it's like, no, you can't call it private data analysis and then the cryptographic input is addressed. Totally there, right? You can choose to design a system to be safe and safe. I have not put my hand into that room because it's really hard, with real consequences. But that is a real and valid baseline need.

I'm very happy that there's a highly usable messaging app in Signal that we can recommend to a wide group of people. I'm really scared that it is effectively a single point of failure within one organization. I would really like more distributed or federated and then encrypted systems to happen. That's not going to happen by accident. In fact, it's going to come from a community that really needs it.

One more: I spent some time in Uganda, and we helped build a local engineering community. The context is wildly different. You're not going to go down there and teach people Haskell. One might say other things about who should learn Haskell, but that's not what we're on right now. We ended up, about 10 years ago, choosing a pretty simple PHP Laravel stack because it was conceptually simple and could be maintained locally afterward.

That's what I mean by cultural victory. There's one more piece I heard about at [unclear], from [unclear], talking about a federated event platform built in a squat in Italy. It has been adopted in the punk community and has a massive number of events on it in Italy and Spain. It totally works for them. It's awesome. That's also what I mean by cultural victory.

We have to think about the Lego blocks we have and ideally converge on fewer Lego blocks, especially around hard infrastructure, then put together appropriate solutions for highly localized contexts. We need to look for ways to bridge or interoperate. All of this is incredibly hard work, most of which isn't technical standards, so we also need the different layers between things like nations or organizations.

**Presenter:** You said a key word there: bridge. I think the original question we started with was also about missing pieces. Bridges are an essential missing piece for creating ecosystems that can reflect the local values of communities. Currently, there are multiple aspects to bridging, and you can see bridges in a vague way.

Let's say you have an application and want to reuse it with another protocol. You could disconnect it and build a bridge between that protocol and the application. That's one way to create reuse. Bridges between protocols could also create broader capabilities. I think it's essential both for the ecosystem we're looking for and for where we would like to go.

How do we ensure the values are local but also build an ecosystem that represents everyone? I think that's the point.

**MC:** I think that's the dream, too. Everyone here would sign up to underwrite that. It is obviously important to build technology for the communities we're trying to serve and their value systems. I wonder sometimes, though—and I'm looking at you, Paul—if we all optimized for that, would Bluesky or atproto exist? If we made sure everything was exactly right according to our highest values and convictions, would atproto and Bluesky as a company exist if you'd done things perfectly according to the way we think about an ecosystem of communities?

**Presenter:** I would say that we have been intensely pragmatic as much as we can and made a number of decisions. Even the decision to introduce servers, the decision to form a public-benefit corporation, and taking funding were all very pragmatic choices, quite different from choices I made seven or eight years prior.

There are a couple of reasons why we did that and ways we focused on counterbalancing it. When it came to technical decisions, we knew this had to be a high-scale system. I'm going to ruin my talk if I keep talking about it as well. Twitter initially started this project, and the idea was that this is a protocol Twitter was supposed to adopt. Twitter had 240 million daily active users in 2022 when we started. That's the requirement. Now you have to figure out how to preserve the important properties while meeting it.

Regarding the structure of the company and the approach we took, our culture document contains the statement that “the company is the future adversary.” That was our decision about what to put in the document, based on watching all the tech companies rise and fall. They have wonderful intentions in the early days, then they just become companies, and eventually they become even less than that.

Organizations come and go. You want to create something that lives within a context that can survive and replace them as this occurs. The public-benefit part of the corporation is focused on keeping our eye on that goal and making Bluesky knowing that—I hope it is a very successful company that has a great life and tenure—but knowing where it's going to go. It is ultimately intended to be a cocoon for something it needs to help bootstrap.

For the scale of who we're trying to reach, we needed to make it a successful commercial product and use many of the same techniques. That's why we focused on account portability and the credible-exit properties of the product. We hope they work, and I think there are good indications. The growth of Eurosky, Blacksky, and other systems has been wonderful because those are users starting out in Bluesky and then migrating away. Please keep making those things and stealing users away from us so we can keep having that happen. We don't own you in the first place.

**MC:** Thank you. I have a question for you, Robin. I think this approach has drawn a lot of attention from policymakers. I hear Bluesky and the fediverse mentioned more and more frequently, especially in the context of digital sovereignty and thinking about what we can do to promote those technologies.

There is a small risk that our version of sovereignty is just hosting a giant cloud in five years, putting Microsoft on it, and saying we did it. Or we could seize the moment, do something with the current situation, and promote the kinds of technologies, interactions, and alliances we want to see. Why should European policymakers pay attention to what's happening here?

**Presenter:** Because it's so handsome. Beyond that, honestly, they should pay attention because that's the only way democracy remains in the moment and in the future. Period. The internet is the infrastructure of infrastructure, and that infrastructure is being captured and used.

If you live under captured infrastructure, and that infrastructure is run in an authoritarian way, then you live in an authoritarian society, which is not the one I would like to live in. The challenge is switching people's mental models from where they are today to where we need them to be. They don't need to understand the technology, but they need to understand what it enables in terms of governance models and democracy.

I think we see that very clearly with Mew Social. If you haven't tried it, try it. We have all these nontechnical people who come and say, “I would like to try this thing. I've heard about it. It's this cool new social thing. Where do I create an account?” We're like, “You have an account. You're talking to people from Bluesky. Just log into it.” They say, “But it's a different app.” They log in and say, “Oh my God, all my stuff is there! What happened?”

People don't have the mental model that you can live outside the app that would take them somewhere else. At the political level, we're facing a similar issue. People are so used to these vertically integrated monsters that they don't understand you can unbundle them. I think the best thing we've brought to the world is this unbundling model, where different responsibilities are scattered and allow for different governance.

Trying to explain that you can have shared infrastructure with many more players competing on top is the step forward. You could call it the European model of tech. It doesn't have to be huge and happy for that—the middle powers, the small powers, the rest of us. I'm just a cute little guy. We need to break the idea that the Silicon Valley model is the only way to do things and that if you don't have a local product, you're out. That's the current challenge. It might be a little wide-view.

**Presenter:** I was just going to say Mew Social has a little kitty cat that walks around the bottom of the screen if you turn it on.

**Presenter:** It now has dogs too.

**Presenter:** It's felines. You can't do better.

**Presenter:** Think about the shape. We're using atproto as an example brought to a certain scale. Think of that same picture and start thinking: if we had pieces of sync standards that you didn't have to implement from scratch, you could do that.

Then there's the other side: I'm logging into my next local-first app. I have a cool new local-first thing. I'm just going to log in and have all my stuff from flavor A, then go to flavor B. Instead, it's in a really great local-first silo with disconnected accounts—but don't worry, we're using the same thing for them all.

It's a really hard problem because we have to pick and choose where these things happen. But those are some areas. I want to see people look around and say, if we had a shared end-to-end-encrypted layer, that's really hard to build from scratch alone. How do we look across the layers of what we're doing and find places where we can come together? We actually have to try and put time into this in different ways. Local-first can be a little bigger tent, bringing in different directions and looking at what the principles are.

I'll give you one experimental example. My colleague, who's now an intern at [unclear], looked at some of the Automerge work, the shapes of data, and atproto, and used lexicons as a way to store local-first data. It was a completely separate system linked through an atproto login that you could operate offline: create things, create notes, post them, and save bookmarks. When you came online, you could publish, and that would be the public version. This was long before any of the permissioned data was close.

You could have this collaborative, multiplayer, local-first model where sharing the shape of the data meant it could be transferred. You could do a little transformation and store it completely separately. But all of a sudden, we have a shared layer we can do some things with. We need to do work to create a map of local-first and look at those different areas, whether encryption, accounts, or other things, so we have some hope of interoperating together at a larger scale.

**Presenter:** That's right. I will add, though, that I don't want this to turn into a million user choices that have to happen. The more we can make this interoperable—

**Presenter:** You see, you choose your [unclear], and then next to that you'll get a [unclear]. I think three new [unclear] go on talking. It's really quite an easy choice to find.

**MC:** I think you're touching on what I really wanted to ask you all. You are in local-first, you are adjacent to local-first, and you have a room full of local-first people. Hello; we love you all. Given the data-ownership battle we share, what is one thing you would ask people to build, maybe steal from other communities, or stop doing to make data ownership an achievable path?

**Presenter:** I've already said standards, so I'm not going to say it again. Standards. But I really think one thing we're missing in going from local-only to something better is collective tooling, or tooling for collective work, because empowerment is never individual. We need better ways of sharing and making collective decisions about data, because ownership is not just mine. Sometimes it belongs to the community, the city, or the wider world. We need ways of figuring out how people as a whole determine certain important things.

**MC:** Do you mean governance?

**Presenter:** Governance.

**Presenter:** I think I'll put my answer to the side. What I'll focus on is getting out of your community and starting to tell a story, bringing us a little bit behind the scenes. For us, it is building awareness. We're keen to set up actual structures for this to happen and more community actions to start happening. Hopefully, we'll be seeing some of that quite soon.

From the outward-facing perspective, that means helping the Atmosphere as a concept get out there, so we can do things like “log in with the Atmosphere,” and you say, “I know what that is; that's the cool thing that I love.” Beyond that, I have a few thoughts about generalizing, of course. But the big thing for us right now is: let's get the message out, and let's do it not from a Bluesky perspective, but from what we're doing across this ecosystem.

**Presenter:** There are so many things; it's difficult to choose. We've already touched on bridges, so I don't want to dive too much into that, but that's definitely an interesting part, especially for allowing multiplicity to flourish through an ecosystem approach.

I think sharing and collaboration among each other means moving in the direction where something is not in isolation and an application is not in isolation for the user. Rather, we're collectively embedded in networks of applications that we collaborate over together. I would like to see that from the protocol layer and the application layer.

Something we've been exploring is integration into operating systems. This also comes from a peer-to-peer perspective: the importance of mesh and how routing-agnostic systems can work.

**Presenter:** I want all of you to get prepared, because we're actually going to have to rebuild large parts of the internet. I'm not joking. I realized the other day that Google Search has a bias, and I don't mean the version where it does AI summaries. I literally sat down, stroked my long red beard from 25 years ago, and went, “I'm only going to see the parts of the internet that happen to match the algorithm that comes up at Google.” I'm sorry. I thought that kind of user contract would hold up a little longer.

Operating systems are the other thing that I may end up getting more into. My time in atproto has been because I've needed something that is iCloud-shaped. I'm not joking. I think identifiers—but more correctly, accounts with storage attached—are a minimum primitive. That's from my work and experience. It solves a lot of user and developer problems. If, as a developer, you know that your thing's storage doesn't have to come from somewhere else, that bootstraps a lot. Look at the way iOS works with apps. We also have a whole post-apps world in town.

It would be very challenging, and you cannot do it alone as individuals. The operating system is huge. GNOME OS is a distro-less thing. [Unclear] is a [unclear]. Who cares about [unclear]? There's also an atproto [unclear]. It's a Dutch foundation and is actually the [unclear] behind Eurosky. We screwed up on name collision already. Good job, everyone.

The Atmosphere community, just this year after our second conference, came back inspired and started regional events. At this conference, I've already had people ask, “Could we do a local-first meetup in Berlin? Could I do a local-first meetup in Lisbon?” Yes. Talk to Patak, who's like, “npmx is the friend to everyone.” We can do some of these joint things.

A bad version of this in the early days of meetups was the PHP meetup, the Python meetup, and other things like that. It also comes through venture-funded things, maybe crypto, that have their own meetups. We don't have that. I would say that “work together” is a pretty common theme.

One more thing: if we're going to rebuild operating systems, we're also going to have to do the basics—contacts, calendars, and email. That is what resonates with people as being their stuff. Those three things are people's lives and organizations' lives. We're going to have a talk on JMAP tomorrow. I'm a big JMAP fan. I would love to do a little app session with JMAP because it is at the IETF. A ton of work has gone into it, and we need to start looking at it as one more piece.

There's a lot of fun stuff to do. There's a lot of hard stuff to do. We have many excellent colleagues to do it together. Let's go.

**MC:** I will also follow suit and advertise a couple of upcoming talks and sessions. Desktop UX will be a talk later today about some of the desktop things happening right now. There's a talk tomorrow that will answer all of the linguistics in the community. Boris and I are going to run lab day, which is an unconference.

It really is the third day, and it's going to be unconference-y. Ink & Switch has a bunch of things to share, literally from the lab. We have three separate spaces: scheduled talks, open discussions, future Git origins, local AI, and lots of other spaces in the room to learn from each other. It really is the open day, and we haven't shared anything about it on purpose. After sitting in a lot of talks, that's where we're going to start preparing for all the other things we're going to do together.

With that, thank you so much. Thank you, panelists, for joining this conversation, and thank you, [unclear], for asking that.
