---
source: local-first-conf-recording
title: "Local Digital Objects using Zero-knowledge Cryptography"
date: 2026-07-13
speakers:
  - "Rob Knight"
source_recording: "../../recordings/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1400-local-digital-objects-using-zero-knowledge-cryptog"
artifact_type: raw_transcript
transcription_model: large-v3-turbo-q5_0
---

# Local Digital Objects using Zero-knowledge Cryptography

**00:00:00**

...to sort of come out of the Web3 world, and I think we're going to hear about it. Give it up for Rob, please.

**00:00:30**

No. Should we switch to handheld, maybe?

**00:00:43**

Bold choice of typeface.

**00:00:51**

Okay. Ah, not too much about it. Okay.

**00:00:58**

Thank you. So, I just want to say before I start with my last presentation, I'm using tldraw.

**00:01:04**

I think most of you will have seen Steve's presentation on this yesterday. I was really inspired by that.

**00:01:09**

And particularly the ability to connect agents to tldraw. I thought that was really cool.

**00:01:14**

And so I thought maybe I could use this. And so I got called to port my slides from keynotes to tldraw.

**00:01:22**

So, kind of porting your JavaScript runtime from zig to rust, that's last week's thing.

**00:01:27**

So, I'm an engineer at Xerox PARC. The name is a direct kind of inspiration from Xerox PARC.

**00:01:33**

We looked at the history of that organization and what they did in terms of inventing the desktop metaphor and inventing things like Ethernet.

**00:01:39**

In all of these concepts that we've basically been living in and living with for our entire computing lives.

**00:01:45**

They didn't just appear from nowhere. They had to be invented. They had to be iterated on.

**00:01:47**

And a lot of that really huge amounts of that legacy comes out of Xerox PARC.

**00:01:53**

So, we wanted to do something similar. And we wanted to do this in the field of what we call programmable cryptography.

**00:01:59**

And you can think of this in some ways as kind of taking work that has been done by various people, various teams, and then kind of conceptualizing this as being a lot of other people.

**00:02:07**

And so, we wanted to do this in the field of what we call programmable cryptography.

**00:02:13**

And you can think of this in some ways as kind of taking work that has been done by various people, various teams, and then kind of conceptualizing this as being kind of a related thing.

**00:02:30**

It is kind of a field where in traditional cryptography you have the ability to do things like signing a message or encrypting a message.

**00:02:40**

In programmable cryptography you can perform transformations of data.

**00:02:46**

And you can either perform those transformations on encrypted data, as in homomorphic encryption.

**00:02:53**

Or you can do things like prove that some transformation of some pieces of data was done according to a particular program.

**00:03:01**

And that's what you get in zero-knowledge proofs.

**00:03:04**

So, my work is mostly focused on zero-knowledge proofs, and that's what I'm going to be talking about.

**00:03:09**

And over the last few years I've worked on a few different projects, one of which is ZooPass, which is a web-based, end-to-end encrypted secret store.

**00:03:19**

So, in the browser you have these pieces of identity information, you have event tickets, you have identity documents that you've collected, and then you can make zero-knowledge proofs about those things.

**00:03:33**

You can prove to somebody that you attended an event, or prove to somebody that you collected an item in a game without needing to send a copy of that item or the full state of that object to the person you want to prove it to.

**00:03:47**

So, to explain this properly, I think I'm going to have to explain what zero-knowledge proofs are.

**00:03:54**

And zero-knowledge proofs have complicated mathematical explanation, but actually a fairly simple, conceptual explanation.

**00:04:02**

We have this thing, which is a circuit, and this is verifying a mathematical proof.

**00:04:09**

And the mathematical proof is establishing the relationship between three different variables, three pieces of data.

**00:04:17**

The most pieces of data are the public inputs.

**00:04:20**

When I say public, I mean something you're happy to share with somebody else.

**00:04:24**

So, public inputs, private inputs, and public outputs.

**00:04:29**

And you can think of the circuit as kind of like being a function that takes these two inputs and returns this output.

**00:04:36**

And then what we get at the end is the public outputs and a proof, and we discard, we throw away the private inputs.

**00:04:45**

So, what your counterparty receives, the person you're sending this proof to, they receive the public inputs, the public outputs, and the proof, but they don't receive the private inputs.

**00:04:56**

So, they don't know what was in those private inputs.

**00:04:58**

They do know that some input existed which satisfies the mathematical proof.

**00:05:05**

So, there's something that has the correct relationship to those public inputs and public outputs as mediated by the circuit.

**00:05:13**

And if that sounds a bit too abstract, which I think it probably is, I'll give you a more direct example.

**00:05:19**

This is an example of age verification.

**00:05:24**

So, we have a circuit that kind of has the logic of age verification encoded into it.

**00:05:31**

And we have as our public inputs, today's date, a set of public keys, government public keys, which are the kind of keys of the governments that can be accepted as signers and passports.

**00:05:46**

That goes to public inputs, the private input is my passport data.

**00:05:51**

So, that's the things I don't want anybody else to see.

**00:05:53**

The public output is a single bit.

**00:05:56**

If that bit is one, then I presented a passport for somebody who was born more than 18 years ago.

**00:06:03**

And then the proof, which is the mathematical cryptographic object, which tells you that this is true, that you can verify.

**00:06:13**

So, we've gone from having my passport, which is this complicated document, lots of data about me, lots of information.

**00:06:22**

And we've shrunk that down to one bit, which is am I over 18 or not?

**00:06:27**

And when I share that, the recipient only gets that one bit.

**00:06:32**

And we know that this, the recipient knows that they can trust this because they know the structure of the circuit.

**00:06:40**

They know that the only way the circuit would be giving them that answer is if I really did present that private data that satisfies the constraints set up in the circuit.

**00:06:51**

So, this is cool. And this is kind of an idea that's been around for actually quite a long time.

**00:06:58**

It's been around since I think the 1980s or early 90s.

**00:07:01**

But it's become much more widespread and widely used in the last few years because it turns out that this kind of thing is super useful if you want to build efficient blockchains.

**00:07:14**

And so, the blockchain people realize that they have all of these computations going on and they're having to duplicate all of this computation across all of the nodes in the network and send all of the inputs around to everybody so everybody can re-derive these computations.

**00:07:28**

This is very expensive and it's very slow.

**00:07:31**

But in fact, you could have a much smaller number of nodes perform the computation once, throw away all of the input data that's no longer needed and produce only the outputs and then share those outputs along with the proof.

**00:07:45**

And verifying that proof is much cheaper than re-derive all of the computations.

**00:07:50**

This created a kind of five-wheel effect where if you can get good at zero-knowledge proofs, you can make a more efficient blockchain, which means you make money, which means you can spend more money on research and to make you better at zero-knowledge proofs.

**00:08:01**

And so we got suddenly very, very good zero-knowledge proofs despite kind of starting from a position where these were kind of quite slow and esoteric.

**00:08:08**

In the last few years, there's been some other kind of big improvements and one of those has been recursive proofs.

**00:08:17**

So in a recursive proof, you can take an earlier proof as an input.

**00:08:22**

So you can kind of compose proofs together.

**00:08:24**

So rather than taking some signed data or some data from some other source, you can actually take some proof that was made by somebody else or proof that you made yourself earlier

**00:08:35**

and use that as an input into the next proof that you're going to make.

**00:08:41**

So what we did was we built a general purpose circuit.

**00:08:46**

So in our earlier example, we had an age verification circuit that's kind of hard coded to the problem of age verification.

**00:08:54**

What we built was a general purpose circuit that could perform a small number of logical operations.

**00:09:00**

So things like greater than, less than, equals, not equals, set membership, array membership, dictionary membership, and so forth.

**00:09:09**

And now, instead of passing in the specific arguments to a specific computation, you can pass in a program, the structure of a program.

**00:09:18**

And what gets verified is that the public arguments and private arguments satisfy the constraints that are in that program.

**00:09:26**

And the circuit becomes basically a kind of general purpose artifact that's not specific to any particular use case.

**00:09:32**

And this is really, really useful because circuit development is quite hard.

**00:09:37**

It's basically in that category of don't rule your own crypto.

**00:09:41**

So having a general purpose circuit that just does a small kernel of trusted operations is really useful.

**00:09:48**

And then people can then just write their own code that runs on top of that.

**00:09:52**

And we call this system P.O.D., partly for historical reasons, partly because it sounds like a good name.

**00:09:58**

And it stands for provable object data.

**00:10:01**

So the way that this works internally is it all runs on kind of facts and logic.

**00:10:08**

So this is a logic programming model.

**00:10:11**

You have statements, and those statements are proven.

**00:10:15**

So those statements are things like the number 42 is equal to 42.

**00:10:20**

Which I know will sound very trivial, but I'll explain why that's important in a moment.

**00:10:24**

We can prove that 41 is less than 42.

**00:10:27**

We can prove that if we have a dictionary, kind of an object, with the key foo and the value bar,

**00:10:34**

that it does in fact contain the key foo and the value bar.

**00:10:37**

So these are the most kind of fundamental building blocks of this programming model.

**00:10:41**

Kind of like axiomatically true statements.

**00:10:44**

You can't lie in this system, partly because you can only say things that are logically true.

**00:10:54**

And then we take that and we say, let's take these kind of complex data structures like arrays and sets and dictionaries

**00:11:03**

and create merkeltrees from them.

**00:11:06**

So merkeltrees are super, super cool data structure.

**00:11:08**

I really think everybody should know about merkeltrees.

**00:11:11**

What you do with a merkeltree is you take the kind of the leaf nodes.

**00:11:16**

You take the kind of the nodes in your object and you hash them.

**00:11:21**

And then you hash the siblings.

**00:11:23**

You hash each adjacent field until you get kind of all of your leaf nodes.

**00:11:28**

And then you hash each pair together until you build all the way up to the top of the tree

**00:11:34**

where you have a single root hash for that whole data structure.

**00:11:38**

Now if you know the path of hashes from any leaf node up to that root,

**00:11:43**

you can prove that that field, that value is contained somewhere inside that data structure.

**00:11:49**

So this allows us to do really interesting things like inclusion proofs for sets and for dictionaries.

**00:11:58**

Then we can take that ability to create a root hash from a data structure,

**00:12:03**

say like a dictionary, we can use that as a kind of identifier.

**00:12:08**

So we can use that as an address.

**00:12:10**

We can say in this case 0x1234.foo means the value at or refers to the value at the key foo

**00:12:19**

inside the dictionary with the root hash 0x1234.

**00:12:23**

So we can kind of point into an object and refer to a place where a value lives.

**00:12:28**

But now we have kind of indirection.

**00:12:31**

So then we can do this kind of substitution.

**00:12:33**

So I said before we can say 42 equals 42 and that seems kind of pointless.

**00:12:38**

But we can rewrite that statement to say that 0x1234.foo equals 42.

**00:12:44**

Because like we have that knowledge, like that's a private input to the computation.

**00:12:48**

But we have that knowledge, now we can produce a statement that proves that it's true.

**00:12:53**

And from that, we know 0x1234.foo equals 42.

**00:12:57**

We can then deduce that 0x1234.foo is greater than 10.

**00:13:03**

So again, these are all kind of trivial steps.

**00:13:06**

But you can see that we've done something slightly interesting here.

**00:13:08**

We've gone from a situation where you have the plain data available,

**00:13:12**

the full thing, the dictionary itself,

**00:13:15**

to a statement which merely says that this dictionary contains a key .foo.

**00:13:21**

And in that value slot is a number that is greater than 10.

**00:13:26**

So we've thrown away some information.

**00:13:29**

And we now have this much more general, this much broader statement.

**00:13:33**

So this is the beginning of being able to hide information

**00:13:36**

that you don't want somebody else to see

**00:13:39**

and reveal only the level of information that you're happy for them to see.

**00:13:45**

And this works because some of the statements that we make are public

**00:13:48**

and some of them are private.

**00:13:50**

So in this case, we have 42 equals 42.

**00:13:53**

Well, that's private.

**00:13:54**

And then we have this statement which says that 0x1234.foo equals 42.

**00:13:59**

That's also private.

**00:14:00**

But then we publish this statement which says 0x1234.foo is greater than 10.

**00:14:06**

So now I can take my private state.

**00:14:10**

I can make a public statement about it that has this logical proof chain.

**00:14:14**

It has a logical kind of derivation.

**00:14:16**

But I hide the logical derivation from the person that I'm sending it to.

**00:14:20**

So they can't trace back to what the original data was.

**00:14:23**

But they can completely trust and completely believe the statement

**00:14:27**

that I'm making about that data that they never saw.

**00:14:34**

And we further extend that by having our programming language for this,

**00:14:38**

which we call Podlang.

**00:14:39**

This is a kind of logic programming language.

**00:14:41**

So if you've ever used a prolog or data log,

**00:14:44**

you'll be familiar with the basic principles.

**00:14:47**

You have a bunch of what we call statement templates.

**00:14:53**

So these are individual logical statements.

**00:14:56**

And then we have these arguments.

**00:14:59**

And we populate some arguments to the logical statements

**00:15:02**

with the arguments to the custom predicate.

**00:15:04**

So this allows us to reimplement the example that I gave before,

**00:15:08**

the age verification example which previously would have required a custom circuit.

**00:15:12**

You can now just write this in Podlang

**00:15:14**

and our generic circuit will generate the equivalent proof for you.

**00:15:24**

What we can also do is compose these proofs together.

**00:15:30**

So the custom predicates that I just showed you,

**00:15:35**

these are recursive, so they can call themselves,

**00:15:39**

they can also call each other,

**00:15:41**

which allows you to build complex networks of statements.

**00:15:47**

So this might be, for example,

**00:15:50**

I can prove that I attended the local first conference.

**00:15:55**

And I have a friend who didn't attend the conference.

**00:15:58**

And so I'm on the inside and they're on the outside.

**00:16:02**

But if I send them a proof that I attended the conference

**00:16:05**

and that I am their friend,

**00:16:07**

well then they can prove that they have a friend who attended the conference.

**00:16:10**

And maybe that's not quite as good as attending it yourself.

**00:16:13**

But you can prove that you know someone who didn't attend.

**00:16:16**

So you can prove your degrees of separation from that community.

**00:16:20**

And this works seamlessly because the system is designed to be recursive and compositional.

**00:16:26**

So this allows you to build these collaborative networks

**00:16:31**

where people can make statements about each other

**00:16:33**

or make statements about each other's data

**00:16:35**

and can help each other to make the statements that they want to make.

**00:16:39**

The other thing that you get with recursion is the ability to take your own old proofs

**00:16:45**

and use them as inputs into new proofs.

**00:16:48**

And this is very useful when you want to model state transitions over time.

**00:16:53**

So I have some data at time t and then at t plus one that data has changed.

**00:16:58**

So I want to prove that it has changed in a particular way.

**00:17:02**

And to prove that this state change is in fact part of a state machine.

**00:17:08**

There is in fact a set of state transitions that can happen which are kind of valid.

**00:17:17**

So this is a kind of quick sketch of what a state machine would look like.

**00:17:20**

We have say a membership list.

**00:17:22**

And we can initialize that as a new membership list.

**00:17:26**

Or we can add an admin to the list.

**00:17:30**

And obviously we could have other state transitions for instance

**00:17:32**

to promote somebody to being an admin,

**00:17:34**

to remove somebody from a group,

**00:17:36**

for somebody to voluntarily leave the group,

**00:17:38**

and so forth.

**00:17:39**

But this allows us to have some state on a machine somewhere

**00:17:45**

where we can prove, even if you didn't see what those actual state transitions are yourself,

**00:17:51**

you could know that all of those state transitions were valid.

**00:17:54**

So in this case, it's not possible for somebody to be listed as a member of the group

**00:17:59**

unless they were added by an admin.

**00:18:01**

That is the only way to count.

**00:18:02**

You either start the group or you are added by an admin according to these rules.

**00:18:11**

So I think I missed, oh yes, I did miss this thing that I was going to show you earlier.

**00:18:20**

Which is just to get a feel for what this looks like once you have this compositional property,

**00:18:28**

you can end up with these very large networks of proofs where all of these things are claims that need to be true

**00:18:35**

in order to make up this statement down here, transaction finalized.

**00:18:40**

In order to finalize the transaction, all of these other things need to be true.

**00:18:44**

So this is kind of an example of the degree of composition and the depth and complexity that you can build up.

**00:18:56**

So all of this is kind of complicated.

**00:18:59**

I'm going to try to simplify this down to a kind of more practical thing that people could use.

**00:19:05**

And what we designed is this thing that we call digital objects.

**00:19:09**

And the premise here is kind of simple.

**00:19:12**

What if you had a file with some JSON data, but you could prove where that JSON data came from?

**00:19:18**

So we'll have lots of files with JSON data in.

**00:19:20**

You know, you're exporting them from systems all the time.

**00:19:23**

You're generating them.

**00:19:24**

You can generate them from database tables or from APIs.

**00:19:28**

You don't generally have any proof about where that thing came from.

**00:19:31**

Maybe it really did come from this API, but you know, it's very hard to prove.

**00:19:35**

Well, what if we could prove not only where that JSON data came from in terms of a signature,

**00:19:41**

but how was it derived?

**00:19:43**

What was the computation that produced this?

**00:19:45**

If we have data representing an object, can we prove what type of object this is?

**00:19:51**

Can we prove what class it is?

**00:19:53**

Can we do this for data that lives on my computer?

**00:19:58**

And I think this is the important part that's really relevant for a local first conversation.

**00:20:04**

There is no privileged handler of state.

**00:20:08**

There is no computer in the network that has the right to say which data is valid and which data is invalid.

**00:20:15**

Every computer in the network can make these kinds of proofs.

**00:20:18**

Your computer can make them.

**00:20:19**

My computer can make them.

**00:20:20**

And anybody can verify them.

**00:20:22**

They're universally verifiable.

**00:20:24**

So if I take the proof, I take the data and I take the proof and I take the type information.

**00:20:31**

Can I put this in a file and send it to somebody?

**00:20:34**

And the answer is yes, I can.

**00:20:37**

So this is an example here of an object which is a type of woodpick.

**00:20:44**

This is some metadata at the top.

**00:20:45**

It's a woodpick from a crafting game.

**00:20:48**

It has a content hash.

**00:20:50**

It has a type.

**00:20:52**

And this type is the hash of the program that was used to create it.

**00:20:57**

So if you think of like a classic JavaScript or in Java or in kind of OOP programming language,

**00:21:03**

imagine that you could, for any object in the UX code, you could reference back to the source code that produced it

**00:21:10**

with 100% confidence that that is in fact the source code that was used to manage that object.

**00:21:14**

That's what this is doing.

**00:21:16**

You have certain state fields.

**00:21:18**

So for example here, this woodpick has a durability field.

**00:21:21**

It starts out at 100 and every time you use the woodpick to mine something, the durability is decremented.

**00:21:29**

It has a stable identifier.

**00:21:31**

And it has a secret key.

**00:21:33**

The idea is that you can share information about the woodpick with other people.

**00:21:38**

But as long as you keep the secret key private, they won't be able to mutate that object.

**00:21:42**

They will only be able to kind of learn about it.

**00:21:51**

So what you have is these kind of locally computed objects.

**00:21:54**

They are content addressed.

**00:21:56**

They're identified by the hash of their current state.

**00:22:00**

They're independently verifiable.

**00:22:02**

They're private by default.

**00:22:03**

You don't need to publish any information about the objects that you've created.

**00:22:08**

But if you do choose to publish a proof about them, that proof is immediately verifiable by anybody else.

**00:22:15**

It's secure by photography.

**00:22:17**

It's shareable.

**00:22:18**

You can put your object in a file and send it to someone else and they can use that object.

**00:22:23**

And they're programmable.

**00:22:25**

So you can build your own objects.

**00:22:27**

You can build objects that consume other objects or link to other objects or manipulate other objects as part of their own actions.

**00:22:33**

You can build your own object graphs.

**00:22:35**

And the way I think about this is that it creates a kind of objective kind of reality.

**00:22:45**

It creates this sort of shared set of objects that no authority needs to tell us that they really exist.

**00:22:52**

They just become things that anybody can create and anybody can participate in.

**00:23:01**

The only other thing that you need to add to this if you want to build up a network is some notion of consensus or the sort of canonical state of an object.

**00:23:11**

So let's say I have an object locally and it represents let's say a membership list.

**00:23:17**

Other people need to know that that membership list exists if they want to trust that as a source of information about who belongs to a group.

**00:23:26**

So there are cases where you might have a group that needs to share the fact that an update has happened to the membership list.

**00:23:33**

So for that you need some kind of consensus system.

**00:23:36**

You absolutely don't need a blockchain for that.

**00:23:38**

You could use a blockchain for that.

**00:23:40**

But you could use any other consensus system.

**00:23:42**

I think we saw for instance Keegan yesterday talking about Matrix and the solution that they found to kind of arbitrating between different messages that might conflict with each other.

**00:23:54**

You could easily use a solution like that to establish what is the current hash of the membership list.

**00:24:01**

The great thing about that is that you only need to share the hash.

**00:24:05**

So you publish the hash to say that something has changed.

**00:24:08**

And if anybody wants to question you about that change you can provide a proof which says that this was a valid transition.

**00:24:14**

This is garbage data.

**00:24:16**

This is valid.

**00:24:17**

So there's lots of different ways that you might want to handle that problem.

**00:24:22**

This is the dangerous part.

**00:24:25**

This is where I said I was going to do a demo.

**00:24:27**

And I think unfortunately because this demo relies on sync and the wifi is maybe not up to it.

**00:24:34**

I, well, there are some error messages.

**00:24:39**

It might work.

**00:24:41**

Okay, so I have here an application which is a demo application we use for crafting.

**00:24:51**

So for instance I'm going to find a log.

**00:24:54**

If I click find log, it's going to generate a proof.

**00:24:58**

It's doing some kind of proof of work, hash mining there to verify that I've done some work and I've really kind of found a log.

**00:25:08**

And now it's generating the proof.

**00:25:11**

It's finished generating the proof.

**00:25:15**

And now this is the bit where it talks to a network.

**00:25:17**

And so this is the bit that might not work.

**00:25:19**

But you can see that the log has been added here.

**00:25:22**

I have this log now in my object collection.

**00:25:25**

If I go up here, I can see that there is this file that has been created.

**00:25:30**

And if I open this file with text, I don't believe in this form.

**00:25:39**

It's not very easy to read, but you can see that there is this, it is basically a JSON file.

**00:25:43**

I have this JSON file which has the type, it has various other pieces of information.

**00:25:50**

And because it's just a file, I can just email it to you.

**00:25:53**

I can send it over any channel that I want.

**00:25:56**

And now this log has gone from my computer to your computer.

**00:26:00**

And you can use that in your own crafting.

**00:26:04**

So you can use that to, for instance, craft a wood pick, which is one of the example objects that we have.

**00:26:10**

And we have in this game, we have a whole bunch of different types of things that you can craft.

**00:26:16**

What's really cool is that nobody can cheat.

**00:26:18**

So we have this thing that's just a JSON file.

**00:26:21**

How can you avoid people just making their own JSON files?

**00:26:26**

With this cryptographic proof, we know that every object that's created in this game is real.

**00:26:33**

And so this allows you to have these protocols that are games that people can play.

**00:26:38**

Well, even though there's no central server that knows anything about the game logic,

**00:26:42**

and everything is happening on people's own computers, you can still guarantee that nobody cheats.

**00:26:48**

So the conclusion is, you know, we can generate local data that has universal meaning without the centralized coordinator.

**00:26:55**

We can share it with each other, and we can build an extent on top of it.

**00:26:59**

The caveat that I would give is that this is currently kind of research-grade work rather than production-grade,

**00:27:04**

and it's kind of slow, so generating a proof takes maybe a few seconds, maybe for a very large proof.

**00:27:11**

It might take up to a minute.

**00:27:13**

But this is getting faster all the time.

**00:27:17**

So if you're interested, you can check out the digital objects in GitHub.

**00:27:22**

This is where we have some more prototype code.

**00:27:25**

I would really encourage you to come and talk to me about it as well.

**00:27:28**

I think that I'm really interested to hear what people think about this.

**00:27:32**

Even if you think it sucks, I'm really interested in hearing that.

**00:27:35**

And if you have more background on the field in general,

**00:27:39**

there is the Programmeral Photography Essay,

**00:27:41**

which kind of kicked off this field a few years ago.

**00:27:44**

I think I'm probably running a little bit over time, so thank you very much.

**00:27:57**

Yes, one quick question.

**00:28:04**

So many questions in the Discord here.

**00:28:06**

I hope you jump in there to answer some of those directly.

**00:28:09**

But one is about just performance.

**00:28:11**

What level of performance can you expect with this?

**00:28:15**

If you do this on a small database, what's the scale of the capabilities?

**00:28:18**

So right now for our current prototype,

**00:28:21**

I would say probably the performance is not optimal.

**00:28:25**

We haven't been optimizing necessarily for the fastest possible performance that you could get.

**00:28:29**

So I think this runs at a level of 50 logical statements.

**00:28:35**

It takes about 6 seconds.

**00:28:37**

So you have to work out on that.

**00:28:39**

You can't do that much.

**00:28:40**

It's like programming on a computer from maybe the 1950s.

**00:28:44**

It's really quite slow.

**00:28:46**

I would say though that the latest and greatest systems that people have produced are much, much faster than our research prototype.

**00:28:55**

So I think the general principle of zero knowledge proofs is that they are now considerably faster than that.

**00:29:02**

Wonderful.

**00:29:03**

So a round of applause for Rob.

**00:29:05**

Okay, who here likes spreadsheets?

**00:29:14**

I think one of the best, simplest, but best tools ever created.
