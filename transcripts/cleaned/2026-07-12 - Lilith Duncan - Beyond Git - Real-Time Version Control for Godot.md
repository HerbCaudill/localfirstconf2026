---
source: local-first-conf-recording
title: "Beyond Git: Real-Time Version Control for Godot"
date: 2026-07-12
speakers:
  - "Lilith Duncan"
source_recording: "../../recordings/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1200-beyond-git-real-time-version-control-for-godot"
source_transcript: "../raw/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**MC:** For our next talk, the last one before lunch, I'm trying to think of how to make this intro short because it's such a perfect overlap of all my interests. I started my career in the video game industry, and I'm very aware of the problem of versioning assets in ways that are compatible with all the different roles that play with them. In general, I think version control is a superpower that right now is only available to developers, and that should go to a wider group of people.

Lilith Duncan has been working at Ink & Switch on some research within the Godot community, which is a wonderful game-engine development environment. I'll leave it at that for both. Thank you.

**Presenter:** Welcome to “Beyond Git: Real-Time Version Control for Godot.” I'm Lilith Duncan, and I work at Ink & Switch, where we're developing Backstitch, a real-time version-control plugin for Godot.

Backstitch takes a different approach from a lot of local-first software. Whereas local-first is dominated by brand-new web apps, Backstitch asks the question: what if we patched local-first principles into an existing, widely used piece of open-source software such as Godot? That's what we're doing. We're using Automerge to put multiplayer local-first sync into Godot.

Why would we do this, though? What's the point? Let's talk about how game developers currently work.

This is Godot. It's an open-source game engine and IDE. You can edit scripts right there in the editor, and you can edit your scenes visually. It's used to make lots of really cool games, like Slay the Spire 2, Buckshot Roulette, and lots of other games. It's getting very popular, in contrast to its main competitor, Unity, which has stumbled sadly in recent years. The number of games being released on Steam with Godot is accelerating exponentially. It's crazy, actually.

It's also used for education because it's open-source and easy to run. It can run on pretty much anything, and it doesn't have a very steep learning curve, so it's great for beginners.

What about Git? Most of us probably know what Git is, but let's review. It lets you check your codebase into version control, revert to any point in history, or merge changes from multiple collaborators. In 2026, Git is used to version basically every coded project created, and game-development projects are no exception. They're usually versioned with Git, and whenever you do this, you enter this fun place called Git hell.

I've been to Git hell. We're going to take a tour through Git hell. To enter, we need to get a repository. We clone our repository and open it in Godot. We have this nice little scene with some bushes, a flag, and lots of coins for the player to collect. We add some collectibles.

If we want to share this game with our collaborators, it's a simple job of going back to the terminal, staging our files, committing our files, and pushing our files—and, oh no, it failed to push some refs to the remote. This simply means that someone else on our team pushed their changes before we pushed ours. Usually, we just `git pull` to fix that. But, oh no: merge conflict in `main.tscn`. That means the scene file we edited was also edited by someone else. It instructs us to fix the conflicts and then commit the result.

Let's do that. We go back to Godot, and, oh no: error while parsing file `main.tscn`. Godot sees all this Git merge metadata in the file and has no idea what the hell to do. We're stuck. We cannot open the scene file in Godot.

If you really know what you're doing, maybe you've noticed that a Godot scene file is just a big old text file containing structured data, kind of like JSON. You can technically go in and merge it. It's hard, but if you're willing to spend some time, maybe you can do it. But who can actually do that? Game-development teams are huge and include lots and lots of roles that want to work inside Godot. Only a very small corner is actually capable of doing this.

If you're anyone else, you're going to say, “Oh no. Help me, dear programmer. I screwed up. I have another merge conflict.” Your programmer is going to say, “Not again. This is the third time I've had to do this this week.” Honestly, it's often easier just to trash all your work and start over. If it takes an hour to do your work but two hours to resolve a merge conflict, what's the point?

Obviously, this is untenable, so how do development teams currently prevent Git hell? The first solution is that you get good. You teach everyone on your team to use Git perfectly. It's really hard to teach nontechnical people how to use Git, and people are still human; you're going to screw up.

What about a solution where everyone works in a separate branch? You have a branch for musicians to add some music and a branch for artists to add some art. Now it's the programmer's job to merge everything together all by themselves.

More realistically, musicians work in a separate application and artists work in a separate application, making their art or music assets and providing those files to the programmer, whose job it is to integrate all of this into the final game. This creates a tyranny of the programmers, where programmers control the art direction. They have access to the final game, the artists don't, and the game ends up looking worse because of it. Or maybe, if you're a programmer, you see it as a tyranny of the artists, where everyone is constantly hounding you to integrate their changes when you really just need to be coding some gameplay mechanics right now.

Even if everyone on the team is a Git wizard, it just isn't made for games. People are human. You're going to forget to pull and forget to push. If you just want to work on a scene together, you're going to have to commit, push, pull, commit, push, and pull just to see each other's changes. Git is made for programming, by programmers. It's pretty good at code, but it's really, really bad at structured data such as Godot scenes or game assets. First of all, it locks artists out of Godot.

If you think Git hell is bad, try Git hell for classrooms. Let's talk about Endless Access, a program that teaches students game development with Godot. They have this really cool game called Threadbare, a collaborative game that students can contribute to. You can play it; it's a real game, and students are able to make their stories come to life. It's versioned using Git.

If you think teaching a bunch of artists how to use Git is hard, try teaching a classroom with 20 students, none of whom has touched a terminal or Godot in their entire life. It's not possible. Instead, Threadbare has an interesting solution: they ask students, before committing their files to Git, to copy their scenes, files, and asset trees. If I wanted to modify `texture.png`, I would name it `texture_lilith.png`, then provide that to my instructor, whose job is to integrate it with the final game. That sucks.

Honestly, this feels like busywork. I don't want to go around renaming files when I want to do creative game development. Students are familiar with things like Google Docs, where collaboration is just easy. This feels like busywork to accommodate Git.

We believe a better world is possible, where there need not be any development-team hierarchies, everyone can just work together in Godot, and everyone can be friends again. In a classroom, there need not be Git nightmares, merges, renaming, and nonsense like that. We think students should just be able to work together on their project and with their instructor as well.

Introducing Backstitch, the real-time version-control plugin for Godot. This is a demo where we have two Godot clients using Backstitch to build a level together. On the left, we have a client named Nerisse, and on the right, a client named Benjamin. On the right-hand side, you can see the Backstitch sidebar. This is our plugin.

As you can see, Nerisse is editing the level. Whenever she saves that file, it's committed to the history automatically. Whenever Benjamin changes the file, it's committed to the history automatically and instantly synced to anyone else using the scene. In this way, we're able to use Backstitch to work on the scene together in real time.

This is fast. These are clearly both clients on the same computer, but it's bouncing off a real server, and it takes milliseconds to do a round trip when saving the scene. It is blazingly fast.

Benjamin fancies himself an artist, so in a moment he will create a branch. A branch in Backstitch is similar to a branch in Git: you can take a section of work and work separately from someone else who can continue working on the main branch. Benjamin creates a branch and adds some art because he wants to start decorating this white-boxed scene. Nerisse can continue working on the colliders separately on her own, while Benjamin starts adding art assets.

I want you to pay attention to the changes panel. It's a little hidden by the podium, but it starts to show Benjamin's changes for the branch. It's comparing the branch to main, and you can see at any point exactly what has changed in this branch compared with main. As Benjamin starts adding bushes, you can see that the scene file has been modified or that the bush asset PNG has been added. You can also click individual changes in the history. Benjamin can click one and see exactly what changes were made in that specific commit.

Benjamin is doing this a little strangely. As he adds these rock textures, he's overlapping them with the blue layer. This works just fine in the final game, but ideally you would want them to be part of the blue layer. This is going to cause a large conflict, so pay attention to that. But Benjamin is a naive non-level-designer and keeps simply overlapping these textures with the blue layer. He textures the flag, then realizes that there are a couple of platforms he missed.

After this, Benjamin thinks things look pretty good. But let's see what Nerisse has been doing. Nerisse is still white-boxing the level. She's modifying the colors to change the player route itself. She makes another platform, moves the platform over, and then moves the coin as well. As you can imagine, this isn't going to be particularly compatible with Benjamin's nicely decorated scene. Neither of them knows this is happening, and Benjamin decides it looks good and is ready to merge.

Benjamin presses the merge button and immediately gets a warning: “Main has changed since Add some art was created.” It warns Benjamin to be careful and review his change before merging. Benjamin does exactly that. He's able to go in and mouse over each change, which highlights that change in the scene. You can see exactly what changed.

Benjamin notices that something is wrong. There are some colliders that don't have textures and some textures that don't have colliders, because he did it strangely and didn't connect them to the collider. He uses the merge-preview stage to notice the issue and fix it before merging. Once he moves that coin over, Benjamin says, “Good to go.” He accepts the merge, and everything is fine.

Back on Nerisse's client, Nerisse wants to mess with the coin's appearance. She changes its color and makes it red. Then let's say she wants to revert this change. With Backstitch, she absolutely can. You select the commit you want to go to and hit “Reset to here.” You enter a revert-preview stage that makes sure everything looks good, then hit “Revert.”

Or let's say she wants to go back even further, to before Benjamin added all that art. The art is gone. That's what Nerisse made, and then she cancels because you don't want to delete the art. But what if she did remove all the art with the revert feature? That's fine, because you can always revert a revert. That's Backstitch.

How did we do this? Let's talk a little about conflict resolution. Git is pretty good at conflict resolution, as we discussed, and it lets you know when you need a manual merge. Contrast that with something like Google Docs, which is good at one very specific thing—rich text—and where conflict resolution is completely automatic and happens without user intervention.

Backstitch has to exist in a weird in-between state. It needs to handle multiple data types: code, Godot scenes, and resources. It needs automatic conflict resolution for most cases as people commit to the same scene, but we still need occasional manual review, as we saw in the merge preview.

To do this, Backstitch uses Automerge, a CRDT library maintained by another team at Ink & Switch. Let's go through an example. What does it look like to merge a Godot scene with Automerge?

We know that scenes are just text on disk. It's all structured data in text form. But as we've seen, if you perform an automatic merge on that, it doesn't really work. We need to convert it into actual, mergeable structured data. We have a custom parser that does this. We parse the scene into a Rust structure representing a Godot scene—in this case, just an array of nodes in the scene—and plug that directly into Automerge, which is able to handle the rest.

What does Automerge do if we have two conflicting changes? In one copy of the scene, someone has added node 3. In another copy, someone has removed node 1 and also added a node called node 3. Automerge produces an array with node 1 removed, followed by node 3 and another node also named node 3. You'd think this would be fine, but Godot is a little silly and does not like nodes with the same name. Godot would not open that scene if we had node 3 and node 3.

That's fine because we do a custom healing process before writing it to disk. We check for duplicates from the merge and rename the last node 3 to node 4. Then we're clear to write it back to disk, and Godot is happy.

Backstitch is local-first, believe it or not. With a lot of CRDT-based web apps, including some local-first ones, things are stored in the browser cache or the software itself is served from a server. But Backstitch itself is stored on your file system, just like your Godot project, and all your version history is stored on your file system. If you want to work offline, you always can. When you reconnect, it'll sync up. If you want to switch servers, that's not a big deal at all: you connect to a different sync server, and it automatically uploads all your data.

Speaking of the file system, Backstitch uses file-system sync. When you save a scene or asset, it's immediately pushed to everyone else. That immediate sync means that you get smaller and fewer conflicts than the first examples.

You might ask why Backstitch uses file-system sync when you can do something cool, modern, and fancy like keystroke sync, like most real-time collaborative applications. The reason is twofold. First, game developers work with lots and lots of files, so file sync is usually good enough for that use case. Sometimes keystroke sync is not something you want. Also, keystroke sync is really hard to do with Godot. If this works well enough for now, we can wait until Backstitch 5.0 to add keystroke-sync support.

Who's using Backstitch? Classrooms are what Backstitch was created for initially, and they're using it. I recently had a wonderful time sitting in on a session with Endless Access, where I watched teachers play students' games instantly in class. Before, they would have to send zip files back and forth to play student projects. Teachers could now just open a project in class and provide critique, feedback, or help.

There was also an effect I didn't expect: students were able to be much more aggressive with their changes and had much less fear about changing something that could break the game, because they knew they could always use Backstitch to revert to before they made that change.

We also have development teams using Backstitch. This is Companion Plant, which was a game-jam game made by some people I don't know. They still came into our Discord and said, “We made this. Here's our feedback.” It was amazing. We have a thriving Discord community where people help each other out and answer each other's questions, sometimes before I can get to them. People are actually using this, even in its alpha state, when there are lots and lots of bugs. Users want to push through the initial adoption struggles of an alpha, and I think that means we put out something really good.

I think it leads to a new paradigm where, rather than making a bunch of new greenfield web apps, local-first can be integrated into old-fashioned open-source software. That comes with a lot of advantages. You get an established user base immediately. It's fundamentally replicable because it's all in the file system, usually. You also get the variety of add-on and extension APIs that this software usually has built in.

It's not easy. It's very difficult to upgrade existing software to be local-first, but the more we do it, the easier it gets. Backstitch has been able to contribute back to Automerge and Godot and make both stronger as a community. I think the results are worth it.

What did we learn? We learned that Git hell sucks and you should use Backstitch. We learned that versioning tools should be universal because games are better when everyone can collaborate. We also learned that maybe we should be adding more sync to existing open-source software rather than making greenfield projects. After all, we did it.

If you make Godot games, check out Backstitch. Our URL is backstitch.dev. Even if you don't make games and are interested in what we do, sign up and join the server. That's the talk.

**MC:** New games and factories: two very, very different use cases. I think we see again how different the sync layer needs to be, but also that there are some commonalities. We have some time for questions.

Right off the bat: does this work for Godot 3D?

**Presenter:** It does indeed. We do not currently have the in-scene diff visualizer built in. In 2D, you can see changes highlighted in your scene. You won't see anything in 3D yet. We just need to make a shader that visualizes that.

**MC:** It seems like the visualizations are harder and the data structures are more complex.

**Presenter:** The data structures are actually identical. There is no fundamental difference between 2D and 3D as far as Godot is concerned. Backstitch works perfectly with 3D; it's simply the visualization shader that needs a little more work.

**MC:** Or scene data is more complicated—big meshes or something like that.

**Presenter:** Assets could be more complicated, but if you think of a giant texture, that's 2D, and that's going to be really big.

**MC:** Someone wants to know more about the custom healing algorithms for scenes. They said they did something similar.

**Presenter:** Basically, we built this entire Godot scene parser, where we parse the text data and also support serializing it back to disk. We parse the Godot scene into a structure, perform any operations we need on the structure to keep things working, and then, when we put it back on disk, make sure to run healing algorithms such as deduplication. Occasionally we run into a bug that makes us do some other weird thing, but it's mainly deduplication, to be honest.

**MC:** Obviously, that's highly domain-specific. Someone actually asked how well Backstitch works for invariants. Are there hidden roadblocks there?

**Presenter:** With the Godot scene invariant, we're able to very easily ensure Godot can always open a scene. Sometimes things can look a little off, but that's up to the user to fix after the merge. We haven't had an issue where Godot couldn't open a scene that we merged for a very long time, so I consider that a successful application.

**MC:** Does Backstitch play nicely with other extensions such as [unclear]?

**Presenter:** It should. That said, I do not have the ability to test every extension on the planet, so that is your job. I want you to go out and break this, come into our Discord server, say, “Hello, help me, I broke this,” and then we can fix it so it doesn't break anymore.

**MC:** How will users with no Git background understand branches as a concept?

**Presenter:** That's a great question. We've done a lot of experiments with students to see how well they pick up on it, and the answer is: extremely well. They get the concept almost immediately with a very simplistic branch API.

We have some limitations on branches right now, specifically for this same case, where you can create a branch and merge it back into its parent, but there's no advanced merge yet.

**MC:** Branches of branches?

**Presenter:** You can make branches of branches, but you can only merge a branch back into its parent. Going forward, we've had a lot of power users ask us for more advanced merge support, so we're going to have to figure out how to implement that in a way that works for them without confusing the students. That's an interesting problem. I think we have a good [unclear] for that.

**MC:** It seems like a pretty huge spectrum. You're talking about students who are learning programming and video-game level design, and then you're throwing version control in there. There are a lot of concepts. But, exactly as you showed, this is also used by professional game developers.

**Presenter:** Yes, exactly. We want students to be exposed to version-control primitives like branches because that's an invaluable part of game development. If they go into a career in game development, those are skills they need to have. Backstitch can introduce that in a friendly way without it being a miserable terminal nightmare.

**MC:** For the last question, maybe I'll merge two that I think are interesting. One is whether Backstitch has any semantic logic on the premise of merging spatial data—for example, that two colliders can't overlap each other. Similarly, could you make your own rules for handling conflicts that are specific to your game?

**Presenter:** The answer to the first question is no, not currently, because you can make anything in games. If we start doing things like moving colliders around, maybe that works great for some people's games and not others'. That said, an extension API that lets you add rules like that would be freaking awesome. I want to implement something like that at some point.

**MC:** Thank you, Lilith.

**Presenter:** Thank you.
