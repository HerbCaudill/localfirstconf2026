---
source: local-first-conf-recording
title: "Towards a Local-First Desktop"
date: 2026-07-13
speakers:
  - "Tobias Bernard"
  - "Andreas Dzialocha"
source_recording: "../../recordings/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1200-towards-a-local-first-desktop"
source_transcript: "../raw/2026-07-13 - Tobias Bernard and Andreas Dzialocha - Towards a Local-First Desktop.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Hi, everyone. We're here to tell you about local-first on the Linux desktop. A few words about us: I'm Tobias. I work on the GNOME project, which is a very large project making an entire computing stack. Not everyone is in this photo; it's only a small percentage of the project. I didn't have one with everyone.

**Presenter:** But we have a much better photo with everyone. We're the whole p2panda team in this picture. This is me, Andreas, Glyph, Sam, and Gray. Together, we started p2panda in 2020, and we all work to maintain our software project.

**Presenter:** Together, we're part of a new structure, a collective called MOLA, which is a joint effort by people across the free-software landscape, including not just p2panda but also, for example, systemd, postmarketOS, GNOME, Flatpak, and many others.

What brings us together is a general feeling that everything about computing kind of sucks right now. For the non-German speakers, I'm going to teach you a great German word: [unclear]. It's the idea that everything sucks and it's all connected. Between resurgent global fascism, imperial war, everything becoming really expensive, and everything going in the wrong direction, computers are part of the problem rather than the solution.

Maybe some movements we've had in the past to address issues in computing are no longer enough. Software freedom is still very important, but we need a little more than that. We've started calling this “emancipatory computing.” It includes software freedom, but it also needs to be designed first. It needs to take sustainability and resilience seriously. It needs to be much more paranoid because everything is much more dangerous. It needs to account for the fact that all the supply chains we rely on for hardware are more fragile than ever, as is the internet. We need a much more realistic look at the actual risks we're facing if we want to do computing in this context.

For us, the place where all of that comes together is an end-user operating system. There are many other important parts of this landscape. Many questions we're facing are policy or general political questions. But when it comes to the basic infrastructure people use, the OS on your computer is very important.

For those of you who aren't familiar with the Linux landscape, I want to give a rough idea of what it entails by comparing it with macOS. macOS has around 30 preinstalled apps for managing files, connecting to Wi-Fi, managing color, and so on. We have that too: a pretty solid and well-maintained set of programs.

You need a developer platform, widget toolkit, design guidelines, developer tools, debugging tools, and so on. We have that too. Built on those, we have a pretty amazing app ecosystem nowadays. There are hundreds of apps built on the GTK and libadwaita stack. Most of them are very well designed because the widgets do a lot of the work for you.

When you have these apps, you need an app store to ship them to people. We have that as well. Flatpak as an app format has worked out amazingly in this regard. We have Flatpak as the format, Flathub as the app store, and various frontends that consume it.

If you want to do this, you also need a way to manage permissions and system resources. We have that as well. It's called Portals: the sandbox APIs we use to access system resources. All of this works quite well on desktop. It's much less mature on mobile, but it's also not that far off.

One thing we don't have that macOS and other proprietary platforms have is built-in sync. As an app developer, you can't just say, “I'm making this little to-do app and want to sync it between all the user's devices.” That's for a reason. Structurally, free-software projects aren't set up to do server operations. There's no support staff and not really any money beyond donations and people's free time. You can't do the things needed for cloud sync.

Our thesis for the last several years has been that maybe local-first makes this feasible and changes the game. We've been exploring how to do that. At a high level, you have a huge stack—an actual Linux OS and developer platform—with applications built on top. Somewhere on the developer-platform side, you need to insert primitives for networking, sync, and CRDTs. We need to determine which architecture makes the most sense and how, as a development ecosystem, we can get there.

**Presenter:** Bringing a local-first system into an operating system is not a simple task. Obviously, we don't know exactly how to do it yet. We end up in a vicious circle: you need app developers to tell you what they need, but they don't want to build anything while the local-first stack isn't ready. It's an infinite loop that never gets anywhere.

We tried to break that by thinking about something we really want to use that should be very stable and that we would rely on every day. This is Reflection, our note-taking tool. We're in meetings every day and constantly write background documents; many people in other communities do the same. We decided our first local-first tool should be that, and it became our ground for exploration.

You can already download it from Flathub. There's even an experimental macOS build. It's still in beta because all the lower layers are also in beta, and we can't promise there won't be breaking changes until then.

This kicked off a series of workshops and developer events over the last two years where we've explored what it means to build a local-first application in this stack. This informed all the development in p2panda as well. These applications use our new high-level API, which we call the p2panda node. It gives us a more stable API surface on which we can express bindings, so application developers who usually work with the GTK ecosystem can rely on other programming languages.

A few words about p2panda: it has been around for a while, and we've worked on small modules that solve peer-to-peer problems. How do you agree on a group key? How do we manage multiple devices? How do we sync? How do we connect two computers? These are independent Rust crates that you can use.

The issue is that you need to be a p2panda expert. You need to know what causal ordering, hole punching, and other concepts are. That's not great for application developers. We've finally released a higher-level API. You can think of it as something like NATS JetStream or Kafka, but with causal ordering and eventual consistency. All of this is plugged together behind one event-streaming interface. You can put whatever database or CRDT you want on top.

Underneath, we're currently working with Iroh for the internet protocol. We're also interested in something we call the walk-away stack: allowing applications to continue functioning even when the connectivity substrate changes. We're specifically interested in mesh-networking topologies over Bluetooth Low Energy and LoRa, even toward packet radio. We're trying to cover quite a lot on the event-delivery layer.

The Reflection research is about much more than underlying peer-to-peer stacks. It also uncovers many UX problems. We're very happy to work with people like Tobias because we have a designer on board. Through this process, we identified shared patterns, and questions slowly arose about what we can eventually move into the operating system.

**Presenter:** We're going to talk through a few research areas we've discussed over the past few years and explored more concretely as part of Reflection. They're indicative of the things we're interested in, but there are obviously many more.

One big area is identity. How do you invite people? That's immediately a question once you want collaboration. There are questions even at the highest theoretical level. Our good friend [unclear] from the New Design Congress is also part of the MOLA collective, and we've talked about this quite a bit. There aren't many good overall solutions to impersonation attacks, especially peer-to-peer.

You want to encourage in-person verification as much as possible and use pet names on the client side. For Reflection, we decided for now to sidestep the issue and use pseudonyms—color-plus-animal identities—because at least that way we're not doing harm. Long term, we're thinking about what a full solution should look like.

As a rough idea, this is a wireframe for how verification might work. It strongly pushes you toward doing this in person, but you can also do it by voice call. It guides you through the process, and in the end you decide the other person's name, not the other side. That sidesteps some impersonation problems.

In the technical model, apps in our ecosystem are sandboxed and generally don't have access to system resources. If you want access, you go through a portal. Here, you click the button in the app, which requests contacts from the portal. The portal has the contacts and pet names and syncs them to your devices. A system dialog asks which contacts you want to give the app. That shares public keys and pet names. The app can then use them however it wants, but access remains scoped.

In a farther-future vision, the regular system Contacts app could contain phone numbers, email addresses, and peer-to-peer contacts, including their public-key IDs.

Another interesting question is how to remove old devices. Even if you're only syncing between your own devices or within small groups and think you don't care about access controls, you usually want to remove devices that were stolen or lost. It turns out you need access controls.

Luckily, p2panda already has a primitive: the p2panda auth CRDT, which is essentially a system of nested groups. Your devices form one group, and that group represents your user. Other groups are groups of these device groups. They can be added to documents, or individual groups can be added directly, and they can have different levels of access.

This is another UI wireframe. If you're an admin, you can change members' access. In this case, the members are actually groups of devices. You can remove or block them, downgrade them to read-only, and so on.

**Presenter:** The next problem is synchronization when the peers aren't present. We've all written our meeting documents and had a meeting. Someone who didn't attend wants to catch up, but everyone is offline. How do we sync?

p2panda is working on what we call support nodes. These are more available nodes in the network. We see them as equals; they aren't necessary. Regular nodes that can decrypt the data push encrypted versions to support nodes, which don't know what they contain.

There are differences from a typical cloud provider. We push fully encrypted blocks into support nodes with almost no metadata attached. You can perhaps observe connection patterns, but not much more. That's different from many cloud providers where data lies in plain text. Support nodes should also be easy to host. Underneath, they're powered by Iroh, so we can run them on old smartphones or a Raspberry Pi.

The idea is simple: we use a key-value store, something like Redis but even simpler. We need an API to put and get items with a prefix. That's enough to issue a token to any client, independent of protocol; it doesn't have to be p2panda. That client can put data into the store. The access token is not tied to an identifier. It can expire and specify a time-to-live and storage allocation, for example 512 megabytes.

With p2panda, we use an adapter that translates our append-only log data type, which can extend to a multi-writer DAG. We sign every entry, and the payloads are completely opaque. We use only the identifier as the key, with a prefix path for easier retrieval and traversal back into the decryption buffer. That buffer has to do more work because items can arrive out of order. This is the tradeoff when you don't attach enough metadata, but we want to focus on privacy.

How do we do group encryption? Last year, we worked on our p2panda encryption, heavily inspired by a 2021 paper from people in this community. Whenever two peers meet for the first time, they use Signal's X3DH as an initial key agreement. Then we add forward secrecy and continue introducing new keys with the paper's two-party protocol.

On top, we developed a simple group key-agreement scheme. It allows you to decrypt old data when you enter a document, which is useful for a wiki: you enter the group and want to catch up on all the old state encrypted in the past. Right now, we rotate the key only on removal, which is good for post-compromise security.

If you want to get really fancy, we also implemented full double ratcheting, open-first and decentralized, using Signal's Double Ratchet. One team right now, the Dash Chat messenger, is building a peer-to-peer chat messenger on top of that.

We can now manage support nodes at the operating-system layer. These are still wireframes; this is what we're going to work on next. I add support nodes because I have the token and access. My applications can then leverage that capability in the background, including full end-to-end encryption.

What's next? For p2panda, we have a grant from NLnet to bring this sync service into the operating-system layer as an experimental project. We understand that p2panda has a unique position to do this for the first time, but it's all an exploration. We hope to bring more protocols into this space so we can think about unified layers for different strategies, such as optimizing for file sync.

We already work on the encryption and data-management parts and the auth CRDT. The next step is bringing all of this into the event-processing API, so you get a nice high-level interface with all the guarantees. Then we'll work with the community to build the UI, system services, and portal APIs needed to experiment with these goals.

Another grant we're working with came from the German government through Prototype Fund. This is our collaboration with the Dash Chat team, another project building on p2panda. They're interested in resilience and encrypted communication in situations where there's no internet. We're looking into mesh-routing protocols and strategies for efficiently delivering messages to groups. This remains an unsolved research subject.

This work lets us propagate p2panda data over Bluetooth Low Energy and LoRa with full eventual consistency. For the encryption scheme, we think about it as broadcast or multicast transport encryption: agreeing on a group key not only for storing encrypted data on support nodes, but also for a store-and-forward, replicating mesh protocol.

That was one more slide from me. These are a lot of features, but they're the last ones. We can slowly look toward p2panda version one. It's too early to announce, but we can see the end because all the hard parts have been engineered and tested. We need to bring them into our high-level APIs and continue conversations with partners about improving them.

p2panda version one means continuing to work on backward and forward compatibility of data types so changes can happen in the future. There's more fuzz testing to do, and we want to extend our network simulations, publish our specifications, and eventually provide developers a stable Rust API without breaking changes for a while.

Maybe the most important thing is our new website. Our current website isn't a great introduction to p2panda, partly because we work so closely with partners. That needs to change, and we want more accessible getting-started guides.

**Presenter:** Beyond maturing the lower layers, we're still experimenting with the GNOME app-developer community. A recent example was a friend's calendar application, which added an experimental p2panda backend as a hack a few weeks ago. Another example was a collaborative video player whose developer was also experimenting with it.

We've been doing workshops where, in an hour, we start with an empty app template and make something that syncs. That has opened interesting doors for learning about the newcomer developer experience. At one point, for example, we built a tic-tac-toe application as a quick, short way to see the smallest version of this kind of product.

We have an event series here in Berlin where we've run these kinds of workshops on many occasions. It's called Boiling the Ocean because all the problems we bring are 10-year problems or longer, and the ocean is literally being boiled and we need to protect it. We do all kinds of things: hacking, talks, and threaded discussions. It's always a fun time. If you're in Berlin in late August, maybe come. We usually discuss these or similar topics.

If you're interested in learning more, the p2panda and MOLA websites have blogs. The MOLA website also has an events page. We're always happy about people getting involved.

A few closing words. It's clear that where we're coming from is a little different from some other talks on this stage, but we thought it was nevertheless an interesting perspective and a concrete example that you can do things differently.

You don't have to use a big-tech platform. GNOME proves you can make a good end-user OS and stack that's fully in the commons. You don't have to use web technology. You don't have to ship a 400-megabyte Chromium to everyone. You can use a nice, small native app that's faster and cooler, ship it via Flatpak, and have the whole thing be only 15 megabytes.

You don't have to use the cloud. This move toward peer-to-peer and support-node infrastructure is gaining momentum. It's part of a change in how we think about power and how we want to do things. It also applies to how we organize ourselves. Startups are one way; open-source communities are another. Sometimes the latter is more fun.

As a parting thought, we can build real alternatives at the end of capitalism. Thank you very much.

**MC:** Very inspiring. The idea of a sync layer built into the operating system, with these primitives of identity and connected people, support nodes, and other ideas we've seen in a few other systems—you are in a position to actually build it into the operating system. That gets me really excited. GNOME is compelling enough for me to consider switching my own Linux, so I don't know if other people feel the same.

Just a couple of quick questions, because I know everyone is hungry for lunch. A few people want to know: are support nodes shared infrastructure that you can donate to a pool, or are they intended to be private, like your own personal NAS shared with your family or work?

**Presenter:** I think both. It's possible to share a support node with your family or collective or keep it for yourself. That's the intention. Obviously, there are still questions around governance. Right now, we have a simple access-control scheme where you give people access. If that's their family, that's their family. If things get larger, we may need more patterns around the steps for a better experience.

**MC:** Why push identity verification in person? It seems like a step back in UX.

**Presenter:** It is a step back in UX. It's a question of the parameters you're considering. If you talk to experts on identity-system issues, they'll say to do it. With everything that's happening, this is the only thing we can provide that we know is safe. Large systems don't have a solution to this either.

There's a difference between a small group of collaborators, where this can exist, and the wider world, where it really falls down because you can't know who it is, and it could pretend to be your mom at any time.

**MC:** If you have voice calls, of course voices can be spoofed, but that seems like a possible intermediary.

**Presenter:** Right. Although nowadays it's very easy to deepfake voices too. We're going to have to learn in practice how some of these things work as we start building the systems. It's still a research area at every level.

**MC:** One question was how you solve a mutual-removal problem. What do you do right now?

**Presenter:** I mentioned the auth CRDT, and there are many nasty edge cases. One is the mutual removal of two group admins. In p2panda's auth code, this is pluggable. You can inject your own logic as a Rust trait.

By default, we do mutual removal: you nuke both admins. It's very extreme. We talked to activists, and they said that in an adversarial environment, with a fully peer-to-peer system, no consensus, and no threshold signing, this is the best effort you can give.

Another solution is simply to allow the fork. This came up during the DWeb Seminar, and Christine proposed it. I think that's also valid. These are things we can do right now in a very decentralized p2panda world.

Later, we might use a soft form of consensus, such as requiring three of five people to sign and acknowledge that an action happened before we take it. These things may help stabilize the system even better.

**MC:** Wonderful. Round of applause.
