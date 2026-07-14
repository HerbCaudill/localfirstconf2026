---
source: local-first-conf-recording
title: "Local Digital Objects using Zero-knowledge Cryptography"
date: 2026-07-13
speakers:
  - "Rob Knight"
source_recording: "../../recordings/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1400-local-digital-objects-using-zero-knowledge-cryptog"
source_transcript: "../raw/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**MC:** This sort of comes out of the Web3 world, and I think we're going to hear about it. Give it up for Rob, please.

**Presenter:** Bold choice of typeface. Thank you. Before I start, my presentation is using tldraw. I think most of you saw Steve's presentation yesterday. I was really inspired by it, particularly the ability to connect agents to tldraw. I thought that was really cool, so I got Claude to port my slides from Keynote to tldraw. Porting your JavaScript runtime from Zig to Rust—that's last week's thing.

I'm an engineer at 0xPARC. The name is a direct inspiration from Xerox PARC. We looked at the history of that organization and what they did: inventing the desktop metaphor, Ethernet, and all these concepts that we've lived with for our entire computing lives. They didn't appear from nowhere. They had to be invented and iterated on, and huge amounts of that legacy came out of Xerox PARC.

We wanted to do something similar in the field we call programmable cryptography. You can think of it as taking work done by various people and teams and conceptualizing it as a related field.

In traditional cryptography, you can do things like sign or encrypt a message. In programmable cryptography, you can transform data. You can perform those transformations on encrypted data, as in homomorphic encryption, or prove that a transformation of data was done according to a particular program. That's what you get with zero-knowledge proofs. My work is mostly focused on zero-knowledge proofs, and that's what I'll discuss.

Over the last few years, I've worked on projects including Zupass, a web-based, end-to-end encrypted secret store. In the browser, you have pieces of identity information, event tickets, and identity documents you've collected. You can make zero-knowledge proofs about those things. You can prove that you attended an event or collected an item in a game without sending a copy of the item or the object's full state to the person you're proving it to.

To explain this properly, I need to explain zero-knowledge proofs. They have a complicated mathematical explanation but a fairly simple conceptual one.

We have a circuit verifying a mathematical proof. The proof establishes a relationship among three pieces of data: public inputs, private inputs, and public outputs. By public, I mean something you're happy to share. You can think of the circuit as a function that takes the public and private inputs and returns the public output. At the end, we get the public outputs and a proof, and discard the private inputs.

Your counterparty receives the public inputs, public outputs, and proof, but not the private inputs. They don't know what those private inputs contained. They do know that an input existed which satisfies the mathematical proof—that something had the correct relationship to the public inputs and outputs as mediated by the circuit.

That's abstract, so here's age verification. We have a circuit encoding the age-verification logic. Its public inputs are today's date and a set of government public keys accepted as passport signers. Its private input is my passport data—the thing I don't want anybody else to see. The public output is a single bit. If the bit is one, I presented a passport for somebody born more than 18 years ago. The proof is the cryptographic object that lets you verify this is true.

We've reduced my complicated passport, with lots of information about me, to one bit: am I over 18? The recipient gets only that bit. They can trust it because they know the circuit's structure. The circuit can produce that answer only if I provided private data satisfying its constraints.

This idea has existed since the 1980s or early 1990s, but has become much more widespread recently because it is useful for efficient blockchains. Blockchains duplicate computation across every network node and circulate all the inputs so everybody can re-derive the result. That's expensive and slow.

Instead, a smaller number of nodes can perform the computation once, discard input data that is no longer needed, and share only the outputs and proof. Verifying that proof is much cheaper than re-deriving every computation. This created a flywheel: better zero-knowledge proofs produce more efficient blockchains, which make money that funds more research, leading to better proofs. We suddenly became very good at zero-knowledge proofs after starting from something slow and esoteric.

One major recent improvement is recursive proofs. An earlier proof can be an input to a new proof, allowing proofs to compose. Instead of taking only signed data or another original source, you can take a proof made by somebody else, or one you made earlier, and feed it into the next proof.

We built a general-purpose circuit. The earlier age-verification circuit was hard-coded to that problem. Our general circuit performs a small number of logical operations: greater than, less than, equals, not equals, set membership, array membership, dictionary membership, and so forth.

Instead of passing specific arguments to a specific computation, you pass in the structure of a program. The circuit verifies that the public and private arguments satisfy that program's constraints. It becomes a general-purpose artifact rather than something specific to one use case.

This is useful because circuit development is hard—it's in the “don't roll your own crypto” category. A general-purpose circuit performing a small kernel of trusted operations lets people write their own code on top. We call this system POD, partly for historical reasons and partly because it sounds good. It stands for Provable Object Data.

Internally, POD operates on facts and logic. It is a logic-programming model containing proven statements. A statement might say that 42 equals 42. That sounds trivial, but I'll explain why it matters. We can prove that 41 is less than 42, or that a dictionary contains the key `foo` and value `bar`. These are fundamental building blocks—axiomatically true statements. You can't lie in this system because you can only say things that are logically true.

We take complex structures such as arrays, sets, and dictionaries and create Merkle trees from them. Merkle trees are extremely useful, and everybody should know about them. You hash the leaf nodes in an object, then hash adjacent pairs, continuing up the tree until you produce one root hash for the entire data structure. If you know the path of hashes from a leaf to that root, you can prove that the field is contained in the structure. This provides set and dictionary inclusion proofs.

We can use a data structure's root hash as an identifier or address. For example, `0x1234.foo` means the value at key `foo` inside the dictionary whose root hash is `0x1234`. We can point into an object and refer to where a value lives.

Now we have indirection and can perform substitution. The statement “42 equals 42” seemed pointless, but we can rewrite it as “`0x1234.foo` equals 42.” We privately know that value and can produce a statement proving it. From that, we can deduce that `0x1234.foo` is greater than 10.

Those are trivial steps, but something interesting has happened. We moved from having the full dictionary to a statement that this dictionary contains a `foo` key whose value is greater than 10. We've thrown away information and produced a broader statement. This is the beginning of hiding what you don't want someone to see and revealing only the information you're willing to share.

Some statements are public and some private. “42 equals 42” is private, as is “`0x1234.foo` equals 42.” We publish only “`0x1234.foo` is greater than 10.” I can take private state and make a public statement about it with a logical proof chain while hiding that derivation from the recipient. They can't trace it back to the original data, but can completely trust the statement about data they never saw.

We extend this with a logic-programming language called Podlang. If you've used Prolog or Datalog, the principles will be familiar. You define statement templates—individual logical statements—and populate their arguments from a custom predicate. The age-verification example, which previously required a custom circuit, can be written in Podlang, and the generic circuit generates the equivalent proof.

We can also compose proofs. Custom predicates are recursive: they can call themselves and each other, building complex networks of statements.

For example, I can prove that I attended Local-First Conf. A friend did not attend, so I'm inside and they're outside. If I send them proofs that I attended and that I'm their friend, they can prove they have a friend who attended. That's not as good as attending, but they can prove a degree of separation from the community. The system's recursive and compositional design makes this seamless. It lets people build collaborative networks where they make statements about each other or one another's data and help others produce desired statements.

Recursion also lets you use old proofs as inputs to new proofs, which is useful for modeling state transitions over time. I have data at time `t`; at `t + 1` it changed. I want to prove that it changed in a particular valid way according to a state machine.

Imagine a membership list. You can initialize a list or add an admin. Other transitions could promote an admin, remove somebody, or let a person leave voluntarily. State can live on a machine, yet someone who didn't observe the transitions can verify that all were valid. Nobody can appear as a member unless an admin added them. According to these rules, you either start the group or are added by an admin.

Once proofs compose, you can build large proof networks. This diagram ends in a statement that a transaction is finalized. Every preceding claim must be true for that final statement to hold. It illustrates the depth and complexity composition can create.

All of this is complicated, so I'll reduce it to something practical: digital objects. The premise is simple. What if you had a file containing JSON data but could prove where that data came from?

We export and generate JSON from systems, tables, and APIs all the time, but generally have no proof of its origin. What if we could prove not only its source signature, but also how it was derived and what computation produced it? If data represents an object, can we prove its type or class? Can we do that for data living on my computer?

This is the important local-first part: there is no privileged handler of state. No computer in the network has the exclusive right to declare data valid or invalid. Every computer can create these proofs. Your computer can make them, mine can make them, and anybody can verify them universally.

Can I put the proof, data, and type information in a file and send it to somebody? Yes.

This example is a wood pick from a crafting game. It has metadata and a content hash. Its type is the hash of the program used to create it. In JavaScript, Java, or another object-oriented language, imagine being able to refer from any object back to the source code that produced it with complete confidence that this was the code used to manage the object. That's what this does.

The wood pick has state fields, including durability. It starts at 100, and every use to mine something decrements it. It has a stable identifier and a secret key. You can share information about it, but as long as the secret key remains private, recipients can't mutate the object; they can only learn about it.

These are locally computed, content-addressed objects identified by the hash of their current state. They are independently verifiable and private by default. You don't need to publish information about objects you create. If you choose to publish a proof, anyone can immediately verify it. They're secured by cryptography and shareable: put an object in a file, send it, and the recipient can use it.

They're also programmable. You can build objects that consume, link to, or manipulate other objects as part of their own actions, creating object graphs. I think of this as creating an objective reality: a shared set of objects that need no authority to tell us they exist. Anybody can create and participate in them.

To build a network, the other thing you need is some notion of consensus or canonical object state. Suppose an object represents a membership list. Other people need to know it exists if they trust it as the source of group membership, and the group may need to share the fact that an update happened. That requires some consensus system.

You absolutely don't need a blockchain. You could use one, but could use any other consensus system. Kegan discussed Matrix yesterday and its solution for arbitrating conflicting messages. A similar solution could establish the membership list's current hash.

You only need to share the hash. Publish it to announce that something changed. If anyone questions the update, provide a proof that it was a valid transition. There are many ways to handle that problem.

This is the dangerous part: I said I would do a demo. Unfortunately, it relies on sync and the Wi-Fi may not be up to it. There are some error messages. It might work.

I have a crafting demo. I click “Find log,” which generates a proof. It does proof-of-work hash mining to verify I've done some work and found a log. The proof finishes. The next part talks to a network, which may not work, but the log has appeared in my object collection.

Up here, a file was created. Opened as text, it isn't very readable, but it's basically JSON with its type and other information. Because it's a file, I can email it or send it over any channel. The log goes from my computer to yours, and you can use it in your own crafting—for instance, to craft a wood pick. The game contains many craftable types.

What's cool is that nobody can cheat. If it's just JSON, what stops people making their own files? The cryptographic proof tells us that every object created in this game is real. You can make protocols that are games, with no central server knowing the game logic and everything happening on people's computers, while still guaranteeing nobody cheats.

In conclusion, we can generate local data with universal meaning without a centralized coordinator. We can share it and build and extend on top of it.

The caveat is that this is research-grade, not production-grade, and slow. Generating a proof takes a few seconds; a very large proof might take a minute. It gets faster all the time. If you're interested, look at the digital objects on GitHub, where we have prototype code, and come talk to me. Even if you think it sucks, I want to hear that. For more background, there is the Programmable Cryptography essay that helped kick off this field a few years ago. I'm probably a little over time, so thank you.

**MC:** One quick question. There are many in Discord, and I hope you'll answer some directly. What performance can you expect? If you do this on a small database, what is the scale of the capabilities?

**Presenter:** Our current prototype's performance is not optimal. We haven't optimized for the fastest possible performance. At about 50 logical statements, it takes roughly six seconds. You can't do very much; it's like programming a computer from the 1950s. It's really slow. But the latest systems other people have produced are much faster than our research prototype. The general principle of zero-knowledge proofs now performs considerably faster than that.

**MC:** Wonderful. A round of applause for Rob.
