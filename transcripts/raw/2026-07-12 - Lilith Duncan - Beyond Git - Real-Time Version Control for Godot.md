---
source: local-first-conf-recording
title: "Beyond Git: Real-Time Version Control for Godot"
date: 2026-07-12
speakers:
  - "Lilith Duncan"
source_recording: "../../recordings/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1200-beyond-git-real-time-version-control-for-godot"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Beyond Git: Real-Time Version Control for Godot

**00:00:00**

So for our next talk, last one before lunch, I'm trying to think of how to make this intro short because it's such a perfect overlap of all my interests.

**00:00:08**

I started my career in the video game industry and I'm very aware of the problem of versioning assets in ways that are compatible with all the different roles that play with that.

**00:00:17**

But of course, in general, I think that version control is a superpower that right now would only allow to developers that go to wider people.

**00:00:24**

So Lilith Duncan's been working at Ink and Switch on some research within the Godot community, which is a wonderful game engine development environment, and I'll leave it back for both.

**00:00:35**

Thank you.

**00:00:43**

Welcome to Beyond Git: Real-Time Version Control for Godot.

**00:00:47**

I'm Lilith Duncan and I work at Ink and Switch where we're developing Backstitch, a real-time version control plugin for Godot.

**00:00:53**

Backstitch takes a different approach to a lot of local-first software, whereas local-first is dominated by brands of reveal web apps.

**00:01:03**

Backstitch asks us the question, what if we patched local-first principles into an existing, widely used piece of open-source software, such as Godot?

**00:01:13**

That's what we're doing. We're using auto-merge to put multiplayer local-first Inc. into Godot.

**00:01:19**

Why could we do this, though? What's the point? Well, let's talk about how game developers currently work.

**00:01:27**

This is Godot. It's an open-source game engine and IPB. You can edit scripts right there in the editor. You can edit your scenes visually.

**00:01:36**

And it's used to make lots of really cool games, like Slade Aspire 2, or Buckshot Roulette, or lots of these other games.

**00:01:45**

And it's getting very popular, contrasted to its main competitor, Unity, which has started us sadly in recent years.

**00:01:52**

The amount of games being released on Steam with Giddo is accelerating exponentially. It's crazy, actually.

**00:02:00**

And it's also used for education, because it's open-source and easy to run. It can run on pretty much anything.

**00:02:07**

And also, it doesn't have a very steep learning curve, so it's great for beginners.

**00:02:13**

What about Git? Well, most of us probably know what Git is, but let's review.

**00:02:18**

It lets you check in your codebase to version control and revert to any point in history or merge changes from multiple collaborators.

**00:02:26**

And in 2026, Git is used to version basically every coded project created, and Gamedev projects are no exception.

**00:02:36**

Gamedev projects are usually versioned with Git, and whenever you do this, you enter this fun place called Githell.

**00:02:45**

Now, I've been to Githell. We're going to take a tour through Githell.

**00:02:49**

To enter GitHell, we need to get a repository. So we come on our repository and open it in Githell.

**00:02:55**

And we have this nice little scene with some bushes and a flag, and making lots of coins for the player to collect.

**00:03:01**

So we add some collectibles.

**00:03:03**

And if we want to share this game with our collaborators, it's a simple job of going back to the terminal,

**00:03:08**

and staging our files, and committing our files, and pushing our files, and--oh no!

**00:03:14**

They help to push some reps to the remote.

**00:03:17**

Now, this simply means that someone else on our team has pushed their changes before we push our changes.

**00:03:23**

And usually we just "git pull" to fix that.

**00:03:26**

But, oh no! MergeConflict and main.tsen!

**00:03:31**

That means the scene file we edited was also edited by someone else.

**00:03:35**

And it instructs us to fix the conflicts and then commit the result.

**00:03:38**

So, let's do that.

**00:03:40**

We go back to Godot, and--oh no!

**00:03:42**

Error will parse in file main.tsen!

**00:03:45**

Godot sees all this git merge metadata in the file and has no idea what the hell to do.

**00:03:51**

And so, we're stuck.

**00:03:53**

Right?

**00:03:54**

We cannot open the scene file in Godot.

**00:03:56**

Now, if you really know what you're doing, maybe you've noticed that a Godot scene file is just a big old text file

**00:04:02**

a bunch of structured data, kind of like JSON.

**00:04:05**

And you can technically go in and merge it.

**00:04:08**

You can. It's hard.

**00:04:11**

But, you know, if you're willing to spend some time, maybe you can do it.

**00:04:15**

But who can actually do that?

**00:04:17**

Any teams are huge and they include lots and lots of roles that want to be working inside of Godot.

**00:04:22**

And only this very small corner is actually capable of doing this.

**00:04:26**

So, if you're anyone else, you're gonna go, "Oh no. Help me. Dear programmer, please help me. I screwed up. I have again merge conflict."

**00:04:36**

And your programmer's gonna say, "Not again. This is the third time I've had to do this this week."

**00:04:41**

And honestly, it's often easier just to trash all your work and start over.

**00:04:46**

If it takes an hour to do your work, but two hours to resolve a merge conflict, what's the point?

**00:04:52**

Obviously, this is untenable, so how do dev teams currently prevent Git hell?

**00:04:57**

Well, there's the first solution, which is you get good, right?

**00:05:02**

You teach everyone on your team to use Git perfectly, and it's really hard to teach non-technical people how to use Git.

**00:05:10**

And, you know, people are still human, you're gonna screw up.

**00:05:14**

So, what about another solution, where everyone works in a separate branch?

**00:05:18**

Where you have a branch for musicians to add some music, you have a branch for artists to add some art,

**00:05:24**

and then it's now the programmer's job to merge everything together all by themselves.

**00:05:30**

So, what about another solution, where, instead, more realistically what ends up happening is you have musicians

**00:05:39**

working in a separate application, and artists working in a separate application, all making their art assets or their music assets,

**00:05:47**

and providing these files to the programmer whose job it is to integrate all of this into the final game,

**00:05:53**

which creates this tyranny of the programmers, where programmers control the art direction.

**00:05:59**

They have access to the final game, the artists don't, and the game ends up looking worse because of it.

**00:06:05**

Or maybe if you're a programmer, you see this as a tyranny of the artists, where everyone's constantly hounding you to integrate their changes,

**00:06:13**

when you really just need to be coding some gameplay mechanics right now.

**00:06:17**

And even if everyone on the team is the Git wizard, it just isn't made for games.

**00:06:23**

People are human. You're gonna forget to pull, you're gonna forget to push, and then if you just wanna work on a scene together,

**00:06:29**

you're gonna have to commit, and push, and pull, and commit, and push, and pull, just to see each other's changes.

**00:06:35**

Which isn't good. Git isn't made for games, and it's made for programming, by programmers.

**00:06:43**

It's pretty good at home, but it's really, really bad structured data, like Godot scenes or game assets.

**00:06:51**

And, first of all, it locks artists out of Godot.

**00:06:55**

Now, if you think Git Hell is bad, try Git Hell for classrooms!

**00:07:01**

Let's talk about Endless Access.

**00:07:03**

Endless Access is a program that teaches students game development with Godot.

**00:07:07**

And they have this really cool game called Threadbearer, where it's a collaborative game that students can contribute to.

**00:07:15**

And you can play it. And it's a real game. Students are able to make their stories come to life.

**00:07:21**

And it's versioned using Git.

**00:07:25**

Now, if you think teaching a bunch of artists how to use Git is hard, try teaching in classrooms with 20 students,

**00:07:31**

none of whom have touched a terminal or Godot in their entire life.

**00:07:35**

It's not possible. You can't do it.

**00:07:37**

So, instead, Threadbearer has an interesting solution, where they ask students, before committing their files to Git,

**00:07:47**

to copy their scenes, files, and asset trees.

**00:07:50**

So, this means if I wanted to modify a texture, I would take texture.png, I would name it texture_lilith.png,

**00:07:57**

and then I would provide that to my instructor, whose job it is to then integrate that with the final game, which sucks.

**00:08:05**

And honestly, this feels like busy work. I don't want to go around renaming files when I'm wanting to do creative game development.

**00:08:12**

And students are familiar with things like Google Docs, where collaboration is just easy.

**00:08:18**

And it just feels like busy work to accommodate that.

**00:08:22**

We believe a better world is possible, where there need not be any deaf team hierarchies,

**00:08:28**

and everyone can just work together in Godot, and everyone can be friends again.

**00:08:34**

Or in a classroom, there need not be Git nightmares, merges, and renaming, and nonsense like that.

**00:08:40**

We think students should just be able to work together on their product, and work with their instructor as well.

**00:08:45**

Introducing Backstitch, the real-time version control plugin for Godot.

**00:08:50**

This is a demo where we have two Godot clients using Backstitch to build a level together.

**00:08:58**

On the left here, we have a client named Narice, and on the right, we have a client named Benjamin.

**00:09:03**

And on the right-hand side here, you can see this Backstitch sidebar.

**00:09:08**

This is Backstitch. This is our plugin right here.

**00:09:11**

As you can see, Narice editing the level.

**00:09:16**

Whenever she saves that file, it's committed to the history automatically.

**00:09:20**

And whenever Benjamin changes the file, it's committed to the history automatically,

**00:09:25**

and instantly synced to anyone else using the scene.

**00:09:29**

So in this way, we're able to use Backstitch to work on the scene in real-time together.

**00:09:36**

This is fast.

**00:09:39**

This uses Auto Merge, which, this is clearly clients both on the same computer, right?

**00:09:45**

But this is bouncing off a real server, and it takes milliseconds to do a round-trick of saving the scene.

**00:09:52**

It is blazingly fast.

**00:09:57**

Now, Benjamin here fancies himself an artist, so in a moment here, he will create a branch.

**00:10:08**

A branch in Backstitch is a branch in Git, or it is similar to a branch in Git, where you can take a section of work and work separately from someone else who is able to continue working on the main branch.

**00:10:23**

So Benjamin here is planning on making a branch where he creates a branch and then adds some art because he wants to start decorating this white-boxed scene.

**00:10:35**

And then Marisa is able to continue working on the colliders separately, on her own.

**00:10:41**

But Benjamin is able to start to add some art assets.

**00:10:48**

So I want you to pay attention to this changes panel right here.

**00:10:52**

It's a little bit hidden by the podium, but it starts to show Benjamin's changes for the branch.

**00:10:59**

This is comparing the branch domain, and you can see at any point exactly what has changed in this branch compared to main.

**00:11:06**

And so as you see Benjamin starting to add these bushes, you can see that that scene file has been modified, or the bush asset PNG has been added.

**00:11:15**

And then you can also click on individual changes in the history here.

**00:11:20**

Where Benjamin can click on this and see exactly what changes were made in that specific committee.

**00:11:27**

Now Benjamin is doing this a little weird.

**00:11:31**

As Benjamin adds these rock textures here, he's overlapping them with a blue lighter.

**00:11:38**

Right?

**00:11:39**

Now, this works just fine in the final game, but ideally you'd want it to be part of the blue layer.

**00:11:46**

And this is actually going to cause a large conflict here, so pay attention to that.

**00:11:51**

But Benjamin is naively non-lubilizer and keeps just simply overlapping these textures with the blue layers.

**00:11:59**

So he textures the flag, and then realizes that there's a couple of platforms that he missed over there.

**00:12:15**

And so, after this, Benjamin thinks things look pretty good.

**00:12:19**

But let's see what Narice has been up to.

**00:12:22**

Narice is still white boxing the level.

**00:12:25**

So she's modifying the colors to change the player group itself.

**00:12:29**

So she makes another platform, moves the platform over, and then moves the coin over as well.

**00:12:36**

And as you can probably imagine, this isn't going to be particularly compatible with Benjamin's nicely decorated scene.

**00:12:42**

But neither of them know this is happening, and so Benjamin goes, "Okay, this looks good."

**00:12:49**

And it's clear to merge.

**00:12:51**

So Benjamin presses the merge button, and immediately you get a warning.

**00:12:56**

It says, "Main has changed, since Add some art was created."

**00:13:00**

And it warns Benjamin to be careful and review his change before marching.

**00:13:04**

And Benjamin does exactly that.

**00:13:06**

He's able to go in and mouse over each change.

**00:13:09**

He highlights the change in scene.

**00:13:11**

You can see exactly what change went there.

**00:13:14**

It's really cool.

**00:13:15**

And Benjamin notices that something's wrong here.

**00:13:19**

There's some colliders that don't have textures, and some textures that don't have colliders.

**00:13:23**

Because, you know, he did it weird, and didn't connect them to the collider.

**00:13:28**

But he fixes that.

**00:13:29**

He's able to use the merge preview stage to notice that it's an issue, and then fix the issue before marching.

**00:13:37**

And once he moves that coin over, Benjamin says, "Good to go."

**00:13:41**

He accepts the merge, and everything's fine.

**00:13:46**

Back on Nerisse's stuff, Nerisse wants to mess with the coin's appearance, let's say.

**00:13:51**

So she perhaps messes with the color of the coin, makes it red.

**00:13:57**

And then let's say Nerisse wants to revert this change.

**00:14:01**

With Backstitch, she absolutely can.

**00:14:04**

So you just select the commit you want to go to, hit reset to here.

**00:14:08**

You get into a revert preview stage.

**00:14:10**

That makes sure everything looks good.

**00:14:12**

And then you hit revert.

**00:14:14**

Or let's say she wants to go back even further.

**00:14:17**

Where before Benjamin added all that art, and the art's gone.

**00:14:21**

That's what Nerisse made, and then she cancels it.

**00:14:23**

Because you don't want to delete the art, right?

**00:14:25**

But what if she did?

**00:14:27**

What if she removed all the art with the revert feature?

**00:14:30**

Well, that's fine, because you can always revert or revert.

**00:14:33**

So yeah, that's Backstitch.

**00:14:38**

How did we do this?

**00:14:47**

How did we do this? How does this work?

**00:14:49**

Well, let's walk through it.

**00:14:51**

Let's talk a little bit about conflict resolution.

**00:14:54**

So Git is pretty good at conflict resolution, as we discussed.

**00:14:59**

And it lets you know when you need a manual merge.

**00:15:02**

And contrast that with something like Google Docs, which is good at one very specific thing, which is rich text.

**00:15:09**

And that conflict resolution is completely automatic.

**00:15:12**

It happens without any user intervention.

**00:15:14**

Backstitch has to exist in kind of a weird in-between state.

**00:15:19**

Where it needs to handle multiple data types.

**00:15:21**

It needs to handle code.

**00:15:23**

It needs to handle code scenes.

**00:15:25**

It needs to handle resources.

**00:15:27**

And it needs to have automatic conflict resolution for most cases as people are committing to the same scene.

**00:15:33**

But of course, we still need that occasional manual review as we solved the merge preview.

**00:15:38**

And to do this, Backstitch uses auto-merge.

**00:15:42**

Auto-merge is a CRDT library which is maintained by another team at link and switch.

**00:15:47**

And let's go through an example.

**00:15:51**

What does it look like to merge a Windows scene with auto-merge?

**00:15:56**

Well, we know that scenes are just text on disk, right?

**00:16:00**

It's all this structured data in the form of text.

**00:16:02**

But as we've seen, if you do an automatic merge on that, it doesn't really work.

**00:16:07**

So we need to convert it to actual mergeable structure of data.

**00:16:11**

So we have a custom cursor that does this.

**00:16:14**

We parse the scene into a Rust structure.

**00:16:17**

That's a Gado scene.

**00:16:18**

And in this case, it's just represented by an array of nodes and the scene.

**00:16:22**

And we plug that directly into auto-merge, which is able to handle the rest.

**00:16:27**

So what does auto-merge do here if we have two conflicting changes?

**00:16:31**

So in this copy of the scene, someone has added 0.3.

**00:16:35**

And in this copy of the scene, someone has removed 0.1 and also added a node called 0.3.

**00:16:43**

So what does auto-merge do?

**00:16:44**

Well, auto-merge says, okay, you get a resulting array with 0.1 removed.

**00:16:49**

And then you get 0.3 and then another node that is also named 0.3.

**00:16:54**

Now, you'd think this would be fine, but Gado is a little silly and does not like it when nodes have the same name.

**00:17:03**

So Gado would not open that scene if we had 0.3 and 0.3.

**00:17:08**

But that's fine because we do a custom healing process before we write it to disk where we say, okay, we'll just check for duplicates from the merge and make sure that we rename that last 0.3 to 0.4.

**00:17:21**

And then we're cleared to write it back to disk and then Gado is happy.

**00:17:27**

Backstage is local first, believe it or not.

**00:17:31**

With a lot of CRDT-based let-ups, including some local first ones, things are stored in the browser cache or the software is served from the server itself.

**00:17:43**

But with Backstage, Backstage itself is stored on your file system, just like your Gado project.

**00:17:49**

And all of your version history is stored on your file system.

**00:17:53**

And if you want to work offline, you always can.

**00:17:56**

When you reconnect, it'll punch up.

**00:17:58**

And if you want to switch servers, then that's not a big deal at all.

**00:18:01**

You just connect to a different sync server and it automatically uploads all your data.

**00:18:06**

And speaking of the file system, Backstage uses file system sync, where when you save a senior asset, it's immediately pushed to everyone else.

**00:18:15**

And that immediate sync means that you even get smaller and less breaks of conflicts than the first ones.

**00:18:23**

And you might ask, why does Backstage use file system sync when you can do something cool and modern and fancy like Keyster sync, like most real-time collaborative applications?

**00:18:32**

Well, the reason for that is twofold.

**00:18:35**

First, Game Devils work with lots and lots of files.

**00:18:39**

And so, because of that, sync sync is usually good enough for that use case.

**00:18:43**

And sometimes Keyster sync can be not something that you want.

**00:18:47**

But also, Keyster sync is really hard to do with, you know.

**00:18:51**

It's very, very good.

**00:18:53**

And if this works good enough for now, we can wait until Backstage 5.0 to add Keyster sync support.

**00:19:00**

So, who's out there using Backstage?

**00:19:04**

Well, Classrooms is what Backstage was created for initially, and they're using Backstage.

**00:19:10**

Where I recently had a wonderful time sitting in on a session of Explore Video Live with MLS Access.

**00:19:17**

Where I watched as teachers played students' games instantly in class.

**00:19:22**

Where as before, they would have to send zip files back and forth to play student projects.

**00:19:27**

Teachers could just open it up in class and provide critique or feedback or help them with something.

**00:19:32**

And there was also an effect I didn't expect.

**00:19:35**

Where students were able to be much more aggressive with their changes and had a lot less fear about changing something that could break the game.

**00:19:43**

Because they knew that they could use Backstage to always revert before they made that change.

**00:19:49**

And we also have dev teams making Backstage.

**00:19:53**

This is a companion plan, which was a jam game made by some people that I don't know.

**00:19:59**

But they still came into our Discord.

**00:20:01**

And they were like, "We made this. Here's our feedback."

**00:20:03**

And it was amazing.

**00:20:05**

And we have a thriving Discord community where people help each other out.

**00:20:10**

They answer each other's questions sometimes even before I can get to them.

**00:20:14**

Where people are actually using this.

**00:20:17**

Even in its alpha state, there are lots and lots of bugs.

**00:20:21**

So I think users wanting to just push through that even with the initial adoption struggles of alpha.

**00:20:30**

I think that means we put out something really well.

**00:20:32**

And I think it leads to a new paradigm where rather than making a bunch of new rainfield web apps,

**00:20:39**

local-first can be integrated into old-fashioned open-source software.

**00:20:44**

And it comes with a lot of advances, right?

**00:20:46**

You get an established user base immediately.

**00:20:49**

And it's fundamentally applicable because it's all in the file system usually.

**00:20:54**

And also, you get a variety of add-on and extension APIs that these software usually have built in.

**00:21:02**

It's not easy.

**00:21:04**

It's very difficult to upgrade existing software to be local-first.

**00:21:08**

But the more we do it, the easier it gets, right?

**00:21:11**

Backstitch has been able to contribute back to auto-merge.

**00:21:14**

Backstitch has been able to contribute back to the Go.

**00:21:17**

And make both stronger as a community.

**00:21:20**

And I think the results are worth it.

**00:21:23**

So, what did we learn?

**00:21:25**

We've learned that GitPel sucks and you should use Backstitch.

**00:21:28**

We've learned that version-end tools should be universal because games aren't better when everyone can collaborate.

**00:21:34**

And we've also learned that maybe we should be adding more sync to existing open-source software,

**00:21:40**

rather than making rainfield projects.

**00:21:42**

After all, we did it.

**00:21:44**

So, if you make out games, check out Backstitch.

**00:21:48**

Our URL is backstitch.dev.

**00:21:50**

And even if you don't make games and are interested in what we do, send us up, join the server.

**00:21:56**

Yeah, that's the talk.

**00:22:08**

The new games and factories.

**00:22:10**

Two very, very different use cases.

**00:22:12**

I think we see also the, yeah, again, how different the sync layer needs to be, but also that there's some commonalities there.

**00:22:20**

So we have some time for questions.

**00:22:22**

Let me wrap around here.

**00:22:24**

So, right off the bat, does this work for Godot 3D?

**00:22:28**

It doesn't need.

**00:22:30**

We do not currently have the in-scene digital visualizer built in.

**00:22:34**

So, in 2D, you can see those changes being highlighted in your scene.

**00:22:40**

You won't see anything in 3D yet.

**00:22:42**

You just need to make a shader that visualizes that.

**00:22:45**

It does seem like the visualizations are harder, the data structures are more complex, the version.

**00:22:50**

The data structures are actually identical.

**00:22:52**

2D and 3D has no fundamental difference as far as Godot is concerned.

**00:22:56**

So, Backstitch works perfectly with 3D.

**00:22:58**

It's just simply the visualization shader that needs a little bit more.

**00:23:02**

Or scene data is more complicated, big meshes or something like that.

**00:23:06**

Assets could be more complicated, but if you think of like a giant texture, that's 2D.

**00:23:12**

That's going to be really big.

**00:23:14**

Someone wants to know more about the custom healing algorithms for scenes.

**00:23:20**

So, they said they did something similar.

**00:23:24**

So, I did.

**00:23:26**

Yeah, yeah.

**00:23:27**

So, basically what we do is we build this entire Godot scene parser, right?

**00:23:31**

Where we parse the text data and then it also supports serializing it back to disk.

**00:23:36**

So, we parse this Godot scene into a structure.

**00:23:39**

And then we do any operations we need to do on the structure to maintain things working out.

**00:23:45**

And then, you know, when we put them back on disk, we make sure to run in healing algorithms like the de-duping algorithms to make them.

**00:23:52**

And occasionally we run into a bug and that makes us do some other sort of weird thing.

**00:23:57**

But it's mainly the de-duping, to be honest.

**00:24:00**

Yeah.

**00:24:01**

Well, obviously that's highly domain specific.

**00:24:03**

Someone actually asked, um, uh, how well does Avakini work for invariants to do hidden roadblocks there?

**00:24:09**

Uh, so with the Godot scene invariant, we're able to very easily force Godot to always be able to open a scene.

**00:24:22**

Sometimes things can look a little bit off, but that's up to the user to fix, right, after merge.

**00:24:27**

Um, we haven't had an issue where Godot hasn't been able to open a scene that we merged for a very long time.

**00:24:34**

So I consider that a successful application.

**00:24:37**

Uh, is, um, let's see, does Avakini play nicely with other extensions such as GDest?

**00:24:46**

It should.

**00:24:47**

Uh, that said, I do not have the ability to test every extension under the planet, so that is your job.

**00:24:53**

Right?

**00:24:54**

I want you to go out and break this and come into our Discord server and be like, hello, hello, healthy, I wrote this, and then we can fix that so it doesn't break anymore.

**00:25:02**

Okay.

**00:25:03**

How will the users with no GIF background understand branches as a concept?

**00:25:08**

That's a great question.

**00:25:09**

Uh, we've done a lot of experiments with students to see how well they pick up on it, and the answer is, extremely well.

**00:25:17**

They get the concept almost immediately with a very simplistic branch apply.

**00:25:21**

Um, we have some limitations on branches right now, specifically for the same case, where you can create a branch and merge it back into its parent,

**00:25:29**

but there's no, like, advanced merge yet.

**00:25:33**

Branches of branches?

**00:25:34**

Uh, you can make branches of branches, but you can only merge a branch back into its parent.

**00:25:38**

But, in the, going forward, we've had a lot of, uh, power users ask us for more advanced merge support,

**00:25:44**

so we're going to have to figure out how to implement that in a way that works for them while not confusing the students.

**00:25:51**

So, that's an interesting problem.

**00:25:53**

I think we have a good writing for that.

**00:25:55**

Seems like a pretty huge spectrum if you're talking about students who are learning so much programming and video game, level design,

**00:26:02**

and how you're throwing version control in there, and there's a lot of concepts that are really simple.

**00:26:07**

But, you know, I see it as good as, exactly as you showed, is used by professional gamers.

**00:26:12**

Yes, and, exactly, because we want the, the users that are using this, the students that are using this,

**00:26:17**

we want them exposed to version control derivatives like branches, because that's an invaluable part of game development.

**00:26:24**

And, if they go to a career in game development, those are going to be skills they need to have.

**00:26:29**

So, Backstitch is able to sort of introduce that in a friendly way without it being a miserable, terminal nightmare.

**00:26:36**

For the last question, maybe I'll merge two here that I think are a little interesting.

**00:26:40**

One is basically whether Backstitch has any semantic logic on the premise to merging spatial data.

**00:26:45**

So, you know, you know, two colliders can't want to talk with each other, something like that.

**00:26:49**

Or, similarly, could you make your own rules for handling conflicts that are specific to your game?

**00:26:56**

The answer to the first question is, no, not currently, because games are, you can make anything identical, right?

**00:27:04**

And if we start doing things like moving colliders around, then maybe that works great for these people's games

**00:27:10**

and not these people's games.

**00:27:12**

That said, an extension API to be able to add rules like that would be freaking awesome.

**00:27:18**

And I want to implement something like that at some point.

**00:27:21**

Thank you, Lilith.

**00:27:23**

Thank you.

**00:27:32**

All right, it is lunchtime.

**00:27:33**

First, a quick PSA.

**00:27:34**

We did have a couple of folks who went to the UF time, some of whom I think were intending to come here to test positive for COVID.

**00:27:40**

We just put a couple of masks and literally some testing kits on a take-down with swag table.

**00:27:45**

So that's something that you want to access.

**00:27:46**

Please do that.

**00:27:47**

Of course, be responsible if you have some symptoms coming on.

**00:27:51**

Meantime, it's time for lunch.

**00:27:53**

So we've got an hour.

**00:27:54**

We've got both indoor and outdoor stations.

**00:27:56**

There's a thread with photos of menus.

**00:27:59**

You can help the line move quickly by knowing what you want ahead of time.

**00:28:02**

I think the outside has soup and something else and the inside has other things.

**00:28:07**

So read that thread so you're informed.

**00:28:09**

We also have cold drinks by the fridge that are self-served.

**00:28:11**

So put it on there.

**00:28:12**

Enjoy your lunch.

**00:28:13**

We'll see you back here one day.

**00:28:15**

Let's get back here one day.
