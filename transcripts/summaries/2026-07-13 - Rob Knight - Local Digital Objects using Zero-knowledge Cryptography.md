---
source: local-first-conf-recording
title: "Local Digital Objects using Zero-knowledge Cryptography"
date: 2026-07-13
speakers:
  - "Rob Knight"
source_recording: "../../recordings/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1400-local-digital-objects-using-zero-knowledge-cryptog"
source_transcript: "../raw/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.md"
cleaned_transcript: "../cleaned/2026-07-13 - Rob Knight - Local Digital Objects using Zero-knowledge Cryptography.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Local Digital Objects using Zero-knowledge Cryptography

**Rob Knight · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1400-local-digital-objects-using-zero-knowledge-cryptog) · [Raw transcript](../raw/2026-07-13%20-%20Rob%20Knight%20-%20Local%20Digital%20Objects%20using%20Zero-knowledge%20Cryptography.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Rob%20Knight%20-%20Local%20Digital%20Objects%20using%20Zero-knowledge%20Cryptography.md)

## Overview

Rob Knight presents a way to make locally stored, shareable digital objects universally meaningful without a central authority. Using a general-purpose recursive zero-knowledge proof system called POD, a logic language called Podlang, and Merkle-addressed data, computers can prove an object's origin, type, properties, and valid state transitions while keeping underlying data private; a crafting-game demo shows ordinary JSON files carrying cryptographic proof that they were legitimately created.

## Detailed notes

### Programmable cryptography and zero knowledge

Knight opens with slides ported from Keynote into tldraw after Steve Ruiz's demonstration the previous day. He works at 0xPARC, whose name and research ambition draw from Xerox PARC's invention of foundational computing concepts. His field, programmable cryptography, extends beyond signing and encryption: it transforms encrypted data through homomorphic encryption or proves that data was transformed according to a program through zero-knowledge proofs.

Knight cites Zupass, a browser-based, end-to-end encrypted secret store for identity information, tickets, and other collected credentials. A user can prove that they attended an event or acquired a game item without sending the item or revealing its full state.

Conceptually, a zero-knowledge circuit relates public inputs, private inputs, and public outputs. The prover discards the private inputs and gives a recipient only the public inputs, output, and cryptographic proof. The recipient learns that some hidden input satisfied the circuit's constraints, not what that input contained.

For age verification, the public inputs are today's date and accepted government passport-signing keys. The private input is the passport. The public output is one bit indicating whether the subject is over 18. The circuit and proof let the recipient trust that bit without learning the passport's other contents.

Zero-knowledge proofs have existed for decades but improved rapidly through blockchain investment. Instead of every blockchain node repeating a computation from all its inputs, a smaller set can compute once and distribute the result with a proof that is cheaper to verify. More efficient proofs enabled more efficient systems and funded further research, creating a development flywheel.

### General-purpose, recursive proofs

Recursive proofs let a proof become an input to a later proof. Knight's team used this capability to build a general-purpose circuit implementing a small trusted kernel of operations: comparisons, equality, and membership in sets, arrays, and dictionaries. Rather than writing a new cryptographic circuit for each application—an error-prone “roll your own crypto” exercise—a developer supplies a program and arguments to the generic circuit.

The system is called POD, for Provable Object Data. It uses logic programming based on proven statements, beginning with axiomatic facts such as `42 = 42`, `41 < 42`, or a dictionary containing a particular key-value pair. The system permits only logically true statements.

Arrays, sets, and dictionaries are represented with Merkle trees. Hashing leaves and then successive pairs produces one root hash for the structure. A path of sibling hashes proves that a value is included under that root. The root also becomes the object's content address, so notation such as `0x1234.foo` can refer to a field inside a particular dictionary.

This indirection enables selective disclosure. A private proof chain can establish that `0x1234.foo = 42`, then publicly reveal only that `0x1234.foo > 10`. The recipient verifies the broader claim without seeing either the exact value or the derivation.

Podlang, a logic language resembling Prolog or Datalog, defines reusable predicates from statement templates. The earlier age-verification example can be expressed in Podlang rather than requiring a custom circuit. Predicates can call themselves and each other, creating recursive networks of proof.

For example, Knight can prove he attended Local-First Conf and prove a friendship. His friend can then prove they know an attendee without learning or publishing all the underlying credentials. Recursive composition supports collaborative claims about people and their data.

The same mechanism represents state machines. A new proof consumes an old state proof and establishes a permitted transition at the next time step. A group-membership object can prove that every member was included either at initialization or through a valid action by an administrator, even to someone who did not observe the intermediate transitions. Large networks of claims can accumulate beneath a final result such as “transaction finalized.”

### Proof-carrying digital objects

Knight reduces the research to a practical question: what if an ordinary JSON file could prove where it came from, how it was derived, which program produced it, and what type of object it represents?

The local-first property is the absence of a privileged state handler. Any participating computer can produce proofs, and anyone can verify them. Data, proof, and type information can travel together in a file over any channel.

His example is a wood pick in a crafting game. The object contains metadata, state, a stable identifier, a secret key, and a type equal to the hash of the program that created it. That type links the instance to its governing source code. Durability begins at 100 and declines when the pick is used. Other people can inspect shared claims about the object, but without its secret key they cannot mutate it.

These objects are locally computed, content-addressed by current state, independently verifiable, private by default, and cryptographically secured. They can be emailed as files and programmed to consume, reference, or manipulate other objects, producing object graphs. Knight describes this as an objective shared reality whose existence requires no central authority.

Some applications still need consensus on an object's canonical current hash. A shared membership list, for example, must announce updates to its group. That consensus need not be a blockchain; another arbiter, such as the Matrix approach discussed by Kegan Dougal, could establish the latest hash. Only the hash needs to be published. If challenged, its owner can supply proof that the transition was valid.

### Crafting demo and performance

In the demo, Knight's application creates game resources. Clicking “Find log” performs proof-of-work hash mining and generates a proof that a log was legitimately found. Although conference Wi-Fi threatens the synchronization step, the log appears in his collection as a JSON file containing its type and proof data.

Because it is just a file, the log can be sent by email or any other channel and used on another computer to craft a wood pick or other item. Editing JSON by hand cannot produce a convincing counterfeit: every accepted object must carry a valid cryptographic proof. The game's logic can therefore execute entirely on participants' computers without a central server while still preventing cheating.

Knight concludes that local data can have universal meaning without centralized coordination and can be shared, extended, and used as a foundation for other systems. He cautions that the implementation is research-grade. Proofs take seconds, and large ones may take a minute. In the Q&A he quantifies the current prototype at roughly six seconds for 50 logical statements, comparing it to programming a 1950s computer. He notes that newer zero-knowledge systems are substantially faster and invites feedback and experimentation with the prototype on GitHub.
