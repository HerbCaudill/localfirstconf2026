---
source: local-first-conf-recording
title: "Plaintext-first apps in the age of agents"
date: 2026-07-12
speakers:
  - "Tristan Edwards"
source_recording: "../../recordings/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1400-plaintext-first-apps-in-the-age-of-agents"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-12 - Tristan Edwards - Plaintext-first apps in the age of agents.md"
---

**Presenter:** I've been obsessed with storing all my data in simple plain-text files on my computer. This obsession started about five years ago when I read a blog post by a guy called Jeff Wang. In it, he talked about how his whole productivity system was just one text file on his computer, which he'd been using for 14 years.

I thought this was really cool and inspiring. I was already a Vim user, so obviously if I see an interface like this, I think it's the best thing ever and I have to try it. I threw away my old fancy to-do app and replaced it with this. I really liked it; it was so simple.

It was almost a gateway drug for thinking about all the other software I was using. I started wondering: why are apps today so bloated? Why do I need an internet connection just to update an item in my to-do list? Why do we send so much of our data to companies like Google? I felt very strongly about this, became increasingly radicalized, and decided I was going to use plain text for everything.

I wrote all my documents in Markdown. I started using plain-text accounting tools—really cool—and even dabbled in things like Org mode and Emacs. I loved it so much. I thought, this is obviously what computing should be: Unix philosophy, local-first, own your data.

I started telling all my friends, “Don't you know that Google is spying on you? Don't you want to own your data? Have you used Vim, by the way?” Unfortunately, most of these arguments didn't work very well. Some were a little curious, but then they asked what my tools looked like. I showed them this, they weren't that enthusiastic, and they stuck to what they had.

For a long time, I felt like a lonely enthusiast. I thought this ancient art of storing files in plain text might remain a niche interest and that, in the future, it might be inevitable that we'd store more and more files inside a cloud provider's silo. I just had to accept it.

But then something happened. AI became this huge thing everyone was talking about. More importantly, Claude Code and coding agents showed everyone that the best way to use AI is not actually to use some cloud-based AI app or connect to a million MCP services. It turns out the best way is to install an agent on your computer and let it read all your plain-text files.

This was an amazing turn of events. Suddenly, all these friends I'd tried to convert for so long started getting interested. Even with no programming experience, they were learning to use the terminal, writing Markdown files, installing [unclear] on their Mac minis, and using newer tools that I thought were really cool. One of them was Obsidian.

It was like everyone realized that the best way to give AI the context it needs is to have a big directory of Markdown files. Obsidian is great for that. It's funny, because Obsidian doesn't describe itself as an AI note-taking app or a note app for agents. If you go to its website, there's not a single mention of AI agents anywhere. All it talks about is the value of owning your plain-text files.

That's especially interesting compared with other companies. Microsoft can't stop talking about AI. Every day they're trying to shove it down your throat: “Please, please click the Copilot button.” The user is like, “No, I don't want a Copilot. I fucking know about that, okay?”

There's a curious paradox. A lot of the best tools for AI—or the AI tools that people are really enthusiastic about—are the ones with zero AI features. Apps like Obsidian don't have a special purple magic AI button, a sparkle emoji, or a sidebar with a chat assistant that bugs you all the time. Instead, they return to the very old-school principle of being plaintext-first.

I think this is exciting because, if you want the best AI workflows today, you're naturally going to gravitate to tools that are more like this. They come with obvious benefits: you can bring your own agents and use Git for version control. You can send your AI off to do something, and if it messes up, just Git revert. It's great. The tools we have now are actually really nice; we have a lot of control and freedom over them.

But it might not stay this way forever. Big Tech is working very hard to make sure the best way to use AI is to stay in its closed ecosystem. If you want cool AI information, why not connect everything to Google? Put all your data there, then use Google's AI and it will have all the context. It will be super convenient.

I don't like this. If that's the future of computing, I think it could be very disturbing. We have a choice right now. If people value local-first, I think we almost have a duty to build out the plaintext-first ecosystem as quickly as we can.

When I say build the ecosystem, I don't mean just building more Markdown-based note apps. I mean building everything: all the apps we use in daily life that have valuable context an agent might want. One of the most important, in my opinion, is the calendar. A calendar knows who you are, who you meet, and what you're working on. That's exactly the kind of context an AI would want.

What I've been working on recently is an open-source, plaintext-first calendar called Calvia. You might think a plaintext-first calendar sounds weird. Aren't the data structures for a calendar much more complicated than Markdown notes? That's true, but calendars already have a plain-text format that everyone uses, called ICS. All calendars support it. Whenever you're invited to an event and get a notification, behind the scenes it's usually just an ICS file attached to an email.

I wondered what it would look like if we stopped treating ICS as merely a format to import and export, and made it the source of truth. If you connect your calendar with Calvia, it takes all the data from your calendar app, converts it into human-readable ICS files, and puts them in a directory on your computer.

Now you can manage your calendar more like a Git repo. My Google Calendar is just a remote. If someone invites my Google user to an event, I can pull it into my local directory and see the diff clearly. It works the other way too. If I create a local event on my computer, I can choose which remote to push it to—maybe Google Calendar, maybe a self-hosted calendar instance. It's up to me. My data is no longer locked to one provider in one ecosystem.

I think this is really cool, but my friends probably wouldn't. It's still a bit nerdy. What they might find interesting is that, because my calendar is now just plain-text files, I can use it with my agents.

A few months ago, I had to renew my visa. For that, I needed to determine how many days I'd spent abroad in the last three years. Normally, that would be annoying to track down. Now I can ask my agent, “How many days did I spend abroad in the last three years?” The agent reads the Calvia directory, looks at the ICS files, filters them, finds events related to travel or with locations abroad, and gives me an answer. Boom: 87 days. So much time saved, so easy.

Here's another example. A few days ago, I went to the Local-First Conf website and saw that the schedule had been published. I wanted to put it in my calendar, but there was no download. I could bring up my agent, copy the conference URL, and say, “Add these talks to my calendar.” It goes to the website, parses the HTML, and starts creating ICS files for me. Because my calendar app reads from the same calendar directory, as soon as the files are created, they appear in my calendar. Really nice.

These workflows can feel really magical. What I want to emphasize is that I'm not building a special AI calendar to get them. There's no magic AI button and no LLM API integration. All I'm doing is building a calendar that's plaintext-first. Just by doing that, I get all this AI functionality for free, basically.

To me, this seems like the biggest opportunity for local-first software right now. Thinking in terms of plaintext-first can be a bridge that makes your local-first apps agent-first too. Maybe Jeff Wang wasn't wrong after all. Maybe he was just early to a trend and getting ready for the age of AI.

Hopefully we'll all go out and build really cool plaintext-first apps. Let's make sure this exciting agentic future stays open and doesn't get captured by Big Tech. Thank you.

**MC:** One quick question for you. A calendar is obviously a naturally spatial format. How do you see that fitting into your universe? The data part makes sense, but do you see plain text fundamentally as a substrate on which we can build UIs? Or are you terminal TUIs forever—maybe, if you're lucky, with some stuff blocked out—and fine with reading text?

**Presenter:** Maybe it wasn't clear from my demo, but the calendar I showed is actually powered by Calvia. This is the absolute simplest data format, but you can use all those abstractions in a really nice GUI app and get all the calendar features you normally have in something like Notion Calendar or Google Calendar. I built this as a proof of concept to show that this is possible. It doesn't have to stop at the terminal; it can go all the way to everything you want. It's pretty good.

**MC:** Thank you, Tristan.
