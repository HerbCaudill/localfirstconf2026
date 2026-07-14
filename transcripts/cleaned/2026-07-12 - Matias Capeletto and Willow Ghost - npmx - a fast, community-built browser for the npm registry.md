---
source: local-first-conf-recording
title: "npmx: a fast, community-built browser for the npm registry"
date: 2026-07-12
speakers:
  - "Matias Capeletto"
  - "Willow Ghost"
source_recording: "../../recordings/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1330-npmx-a-fast-community-built-browser-for-the-npm-re"
source_transcript: "../raw/2026-07-12 - Matias Capeletto and Willow Ghost - npmx - a fast, community-built browser for the npm registry.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** The open-source community is about building bridges. We are ourselves part of many communities: Willow, for example, with the Svelte community, who are known for innovating a lot. We are together also part of the Vite community that grew to the place it is now. It took us six years to get to where webpack was, but now I hope there are some of you using Vite here in the audience.

Vite is a story of building bridges. Vite is where it is because a lot of projects, like Svelte, Nuxt, a lot of frameworks, and even the plugin platform came together and said, “Let's build this shared piece together.” Daniel started the project with Nuxt, and he's right there. Lovely framework, if you haven't used it.

Another very big example of a community that is building bridges is e18e, Ecosystem Performance. If you have an npm package around, they probably go around fixing its performance and making it leaner.

The talk today is about npm, the largest JavaScript and TypeScript registry in the world. This graph was from the middle of last year. I really want to see it next year, because things have gone completely bananas. I don't know what happened in January this year—maybe you have some ideas about who is actually using npm—but it grew fourfold in six months. In previous years, when we said it was growing a lot, it was doubling in a year.

npm is an interesting story because at this point it is owned by Microsoft, a very large company, and all the data is managed by them. It connects nicely to how this conference started: how can we assure the long term? npm was a startup at first, and it almost went under. Microsoft was there to keep it running. Since then, that is basically what they have done: keep it running. This is one tool that we all use to share and to build bridges between our projects, and we really need it to innovate.

Because it wasn't innovative enough, people have been doing things in three different parts: the registry, the CLI, and the website we use to browse, find packages, and get information about them. The registry has seen innovation with projects like JSR and [unclear]. One problem those projects have is that the network effect of something like npm is huge. It's very difficult to compete. If we want even to think about decentralizing something like npm, we need to start thinking about how we work around those network effects and what we can do to help. In the CLI there are very interesting projects like Yarn and pnpm, which we use a lot in our ecosystems.

On the website side, there were not many things—some little websites showing information. This was the website. I cannot show it in dark mode now because the colors aren't working. There was a lot to want from this website. Daniel posted on Bluesky asking, “What are your pain points?” There was a huge thread of people asking for things: “Please, dark mode,” better surfacing of maintainers, and many other things we could build. A lot of people used this page just as a trampoline: you get to npmjs.com and then go to GitHub or the package website. We were not really using the website, and that is something we wanted to change.

We had this pain point. We were all complaining about it. If you go to npmx right now, you can see what we ended up doing as a community. We got npmx.dev going. Now you can go to npmx.dev for Automerge, for example, and not only see the information displayed before, but much more. You can filter by version, and there is automatic documentation generation.

The main thing is that now, as a community, we have this tool in our hands. We don't have to complain anymore. We can say, “Hey, I want to add things too.” If you want to put in the work, you are invited to help us build it.

The way we built it is very interesting. It ended up being the top fastest-growing emerging open-source project in Q1. On GitHub, by contributors, it was the top one, and it was the only one in the top ten that was not AI-related. Everything else was AI.

These are the people building npmx right now—almost. I think there must be many of you there, I hope. When we work in community, there are things that need access control and decision-making. We quickly needed to put up governance and organize it. This project started five months ago, in January. We already have more than 22 maintainers recognized for the work they have done, and our core team already has 11 members. Several are here in the audience. This has been an amazing journey with the community.

For example, we launched the alpha with 15 blog posts from people in the community—sorry for the flashes. For many of them, it was their first open-source project or contribution, and they were writing a blog post about their own experience. npmx is serving as a community that helps new people get involved in open source, and we love that part.

This is a very interesting example of software that is now in the hands of the community. We have these [unclear] that we just put in; there are already six and they are working on the next one. This detail shows we can do whatever we want with the website. We are building it for us. A lot of people are finding it useful: I see 200,000 unique users right now, after five months, which is quite a number. But we are building it for us, and you are more than invited to build it with us.

Why work with us? First, we really care about empowering people who care, from the accessibility community to internationalization. One reason we think it is good to be here today is that we need people from local-first communities in our communities. It is sometimes a little hard because a lot of the projects we work on are not directly local-first. But they are probably never going to be if there are no people there working with us. This is a big invitation to join us and make it yours—make it an example of a good application that you want to show others.

We really optimize for adoption with a pragmatic approach. We didn't like the URL shape with `/package`, but we maintained it anyway because we care about these little details. We are trying to get a lot of adoption, and once we have adoption, we can do things with that.

We are building an ecosystem by building bridges. Working in communities is extremely important for us. Local-first is human-first. We have stickers saying that around. Everybody is using tools, but they are working for us; we are not working for them. Everybody who shares our values is welcome. This is not carte blanche, but if you share our values, you are more than welcome to work with us. New contributors are treated as peers, and new contributors, as Charles started, have a lot to give to the project. It's always about community. We normally do these npmx talks together, so I'll pass.

**Presenter:** Hi. I want to start with a little anecdote. I got my real start in my tech career through meetups. I've been going to them since 2021, and I think that without that, I wouldn't be standing here today.

There's a thing somewhere about the four types of luck, one of which is luck from motion. I say I'm lucky to be here not because it randomly happened, but because I joined a community and, through that, I was heading in the right direction. Things happened along the way, like giving this talk and npmx.

Before this, I was talking to someone called Mateo, who will show their project soon. They shared that npmx helped them overcome burnout they had felt for a couple of years with open source, because the missing piece they didn't have was community. The point isn't that npmx is some magical thing. Communities exist everywhere, and you just have to find them. The people in this room are one.

npmx is built on the shoulders of giants. These are just some of the most visible projects we depend on, but there are hundreds of dependencies under these that make it possible. All of them have communities. As Matias mentioned earlier, a lot of us are part of the Vite or Nuxt communities, but we've been able to build bridges to things like the atproto community.

I thought it was interesting to see how much activity we've had in the npmx repository just over the last month. I wouldn't say npmx is one of the most active, but this is incredible. All of these are human-driven contributions, regardless of whether they use AI or not. We can use their voice.

These are some statistics from a project called AgentScan, which is by Mateo. Its goal is to help reduce spam. We've had about two instances of people coming and spamming a dozen PRs that are fine, but where they are not interacting with us. Daniel Roe, the oldest contributor to npmx, wrote a blog post about never letting AI speak for you or think for you. We don't mind whether you use AI, but we want you to interact with us in a PR. We want to build a community with people, not clankers.

This also makes me think of Bluesky. I know a lot of you here will be using Bluesky in part because of atproto, but I think the platform would have succeeded without that. The reason a lot of us left X and went to Mastodon or Bluesky isn't because the platform idea itself is bad; it's because the people running it are. They took an idea that I think is fundamentally great: that we can write our thoughts online and reach other people. I currently have about 500 bookmarks on Bluesky, all blog posts with incredible ideas that I hope I can read one day.

These are two examples. One, which Matias shared at the beginning, was the start of npmx. The other is from Mateo and shows that AgentScan was born through a conversation on Bluesky.

That leads us to the obvious: Bluesky is built on atproto, which is a wonderful decision, and we can have a PDS. For those who don't know, a PDS is essentially your own database with all your data, such as your Bluesky likes and posts. The way Bluesky is designed allows it to be largely decentralized. You can take your data and put it on a server Bluesky doesn't control, whether that is something you run yourself or, more likely, something like npmx Social. We already have nearly 600 people migrated, and it's super easy to move. Bailey, who runs this and is also known as pds.dad, also makes PDS Mover, which makes it super easy.

npmx is why I took the time to learn about atproto, and moving my account away from Bluesky was part of that. We're also working with EuroSky. Their mission is to create a European PDS to help digital sovereignty.

It has always been in the back of our minds that over-reliance on foreign clouds is a terrible idea. Governments that rely on them have lost a lot of power to countries that have complete control over the data, and we as individuals have no direct say over how our data is handled. If our country or the European Union holds our data, then theoretically we have the power to help keep that data safe by voting. But we don't have any say about what America does with our data.

If you take a short train or bicycle ride, you can end up at Hetzner's data center in Nuremberg, which is where the PDS is running. All of the data on npmx Social is in Germany, in the EU, and is much safer than in Bluesky.

The interesting thing is that everything on the PDS is open. There are ideas and RFCs about private data. But the most interesting part here is that we can see our handle and our ID, which is effectively an address for finding us. We can change our handle or move our data without losing our followers and interactions with other people.

Taproot, this website, or this PDS explorer, also lets you see a little timeline. You can see that we signed up as `npmx.bsky.social`, then quickly changed our handle to `npmx.dev`. This can be changed at any time without losing anything. Later, we moved to npmx Social.

From there, we started to ask what having our data in atproto unlocks for us. The most fun thing we could think of was likes. Here you can see me liking the Automerge package, with a nice little animation. This data is actually stored in your PDS.

This is mine. You can see that I have a collection grouping data together called `dev.npmx.feed.like`. We can look inside and see that we have this pointing to Automerge, which we just liked. It is a link instead of just a string because another community tool from Microcosm called Constellation automatically indexes every link it sees.

Part of the protocol is a live event log of everything that happens in the network. We can ask Constellation for everything that points to this link. We use the API, pass in the `dev.npmx.feed.like` collection, the field we're looking for—in this case, `subject.ref`—and the subject, which is our URL. We get back a total number of records, four in this case, and the individual records, which our platform does not currently look at unless it's your like.

From this we can build fun things, such as a leaderboard. [Unclear.] We can also build other cool things. This is a PR from Philippe, where he is playing with streaming likes live on the website. You can see that when you turn on relative dates, the [unclear] likes are shown here.

We can also integrate with other communities. You might have seen warnings on the website saying that you might not need a dependency. This comes from the e18e community, who maintain a list of module replacements suggesting modules that can be replaced with faster or smaller ones, or even native code.

You might be using something like Chalk, which can color text in JavaScript. But Node added a built-in way to do that—I think it was Node 20. You can also read the website. For example, `fast-glob` can be replaced with `tinyglobby`, and now it can also be replaced with a Node native built-in. The e18e community has had a good amount of success helping packages migrate to smaller and faster alternatives according to their needs, improving the performance of the ecosystem overall. We integrate with this data to make it more visible to users and to show what is changing.

The last thing we've done with e18e is add a package timeline, which can show the package's size as well as interesting events. You can see that `date-fns` has shrunk over time. It's important to remember that package size and dependencies aren't all bad; it's about being mindful of them. I'm a bit biased here because I'm part of the e18e team, but it's very fun to build these things. Thank you.

**Presenter:** Where do we go from here? npmx is as much a community as it is a website. We have other pain points, and we like working together, so let's see what else we can do. We don't need npmx itself to do everything, but let's build bridges, help others, and get help from others.

To do that, I think this is one of the things the local-first community has a lot to give—not only on the data side, but on long-term sustainability. You have to really care about this for local-first. You can help us understand better how to do governance, funding, and healthy long-term communities so our tools can last and our data can be accessed forever.

We have some examples of where we can go from here. If you are around and want to talk with us, several of us can talk about these. One of the first things we can do is keep improving npmx and focus on making it the best browser for the npm registry.

Maybe the browser idea can help us in other ways. It could be a neutral layer over JavaScript registries. We could include JSR or a future decentralized npm registry and help with discoverability, with search that shows packages across all registries rather than only one. Or we could expand into other registries and provide a unified browser experience across PyPI or crates. Those have other foundations, but there are still things we can do there.

Maybe we can extend the browser idea wider, such as a browser for notifications. People from Tangle are here. There is a lot of innovation on software forges right now, and we are going to have notifications in several windows. It would be nice to have a unified experience over them. Maybe we can innovate by showing the security of dependencies and things like that. Daniel is playing with a proof of concept for this. There is an [unclear] store that is a data layer native to you, and maybe it is interesting for people here to discuss.

For me, one very exciting area is all the atproto work. One interesting project is Keytrace, which Orta, one of the npmx maintainers, is also working on. It puts all the claims in your own PDS, so it is very stable. You can later move your domain, identity, or data anywhere, but can still prove that this domain is this user on npm, this user on GitHub, and this user elsewhere.

We could use this information to ask where our project data actually is. These are, for example, our sponsors and our team, but every open-source project has its own ad hoc data. If we could start having lexicons and conventions for these things, we could do so much. We could show sponsors a little more and maybe get more funding, or show who is really behind a package. The maintainers you see in npm are only the people who have permission, not all the real people behind it.

Let's build for the long term and gain control over our data and our tools. I agree data is more important, but building tools in a communal way is also extremely important. We have more agency when we work in community and learn from each other. We build bridges all around and all work together.

Let's raise new bridges. If you want to build with us, go to `build.npmx.dev`. The repository and social link are there. We have a meetup on Wednesday; if you go to `social.npmx.dev`, you can see the details. Thank you.

**MC:** Time for one quick question. Obviously you're building this frontend, but you don't control the registry itself. I can imagine that creates challenges: maybe there are features you want that would be easier or possible if you controlled the registry. But there are also platform risks. Maybe at some point the registry controller decides it doesn't like what you're doing and cuts you off. How do you think about those pieces?

**Presenter:** There is a lot we can do with the registry. We're playing around with analyzing it and trying to normalize the data because there's no structure to it. I think the best we can do from the website—we are not going to make a registry ourselves—but if somebody here wants to make a decentralized registry and we can help in any way to get you adoption, then let's talk.

**MC:** Let's give Matias and Willow a hand.
