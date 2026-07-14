---
source: local-first-conf-recording
title: "Stable Schemas, Mutable Software"
date: 2026-07-13
speakers:
  - "Seph Gentle"
source_recording: "../../recordings/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1700-stable-schemas-mutable-software"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.md"
---

**Presenter:** It was a lot of fun. I was going to wear it for the entire talk and not acknowledge it. If anyone asked, I'd say, “What puppet?”

Thank you, everybody, for hanging around. What an amazing session. I feel like I've learned so many things, and there have been so many wild technologies. I was here last year, and I think almost none of the projects I saw today existed then.

Can I get a show of hands: who's local? Who flew at least five hours to get here? That's a lot of people. That's wild. Thank you all for coming. Before I start my talk, can we have a round of applause for everyone who organized this? I was helped beautifully backstage by a whole bunch of people who wanted to make sure this event happened. I have no idea how much effort it takes to put on an event like this, but I bet it's huge. I've never done it because it's scary, even though making CRDTs is my thing.

I'm here to talk about schemas, which are obviously so hot right now. Thank you for staying until the last talk. I hope I can entertain you and inspire you to make cool software.

I'm Seph. This is a bad picture of me that I drew. I've done a bunch of things. Who still remembers Google Wave? Oh, that's great. These numbers are going up. I don't know what we did, but it's exciting.

I worked on Google Wave in 2011 at Google. It inspired me and sent me down the road of real-time collaborative software, starting with operational transformation and eventually CRDT research. I wrote the “CRDTs Go Brrr” paper that makes people come up to me and say, “Oh, you're that guy.” I wrote eg-walker at Diamond Types. Martin Kleppmann and I wrote a beautiful paper on making CRDTs better, but I'm not here to talk about any of that.

I want to write beautiful software. I've been programming since I was a little kid. Back then, programming was inspiring because I could make anything I imagined, and that was huge. I still love Steve Jobs's quote about computers being a bicycle for the mind. These days, with the hours people spend on Instagram and other services, computers feel like vessels for ad-tech companies to advertise to us.

As a software engineer, I have to make a horrible choice between local software that works on only one device and cloud software where I become a rent seeker, holding people's data so I can charge them money. I want something better.

I was going to take a sidetrack into why a local-first operating system is important, but many speakers have already covered it. Who has some idea what I mean by “local-first operating system”? Great, almost everybody. I still don't know 100 percent what I mean, but I feel that putting these principles deep into our operating systems is the only way to create a beautiful computing environment that really respects the user.

I think of a program as a tree. Above the earth's surface are the user interface, code, and everything else. Beneath it is a root structure that reaches deep into our systems' data layers. What I want is an ecosystem of plants, bushes, and trees whose roots can communicate because they're part of the same system.

Practically, I have a file system. I open an editor and write Rust code, then send it to the Rust compiler. The compiler saves an executable in the file system, which I run. I interact with all these tools. Software developers aren't special in using many pieces of software; this is a small part of my work, and I may use 20 or 30 programs in an average day. Artists, musicians, filmmakers, and people at any company also use large suites of software.

There's something myopic about engineers thinking their program is the most important thing in the world. The whole ecosystem working together produces a beautiful computing experience.

I loved many talks that made this point. Lilith said version control should be universal. Tobias and Andreas discussed building this into GTK. Habitat showed how we might put a data model into the network. I feel that we're slowly converging as a community on a shared vision of how computing should work. That's the vision I want us to work together to bring into the world.

But we're here to talk about schemas. I promised schemas, and I will deliver. If we have files and are storing data, what should that data be?

In Unix, files are big binary blocks. Anyone who's caught me at this conference has probably heard me rant that the API is terrible. It says only, “Overwrite these bytes with these other bytes.” As an external user, I don't know what those bytes are. In a program, I can't determine what changed, and I can't have two programs interacting with the data simultaneously.

Maybe JSON solves this. Automerge and Yjs both interact with JSON-like data. JSON is self-describing: I can open any JSON document, look inside, see what's there, and interact with it. It also lets us describe semantic changes. In collaborative software, I can say, “Modify this number and change it to three.” That's the change we want to propagate to other computers, programs, and users, rather than overwriting two bytes.

But maybe we can do better than JSON, with strong types that give better guarantees and capacity for evolution. What would I want from such a format?

Like JSON, it should be self-describing. I should be able to look at any file on my computer, see exactly what's inside, and write any program using any piece of that data. A fabulous blog post once described Adobe Photoshop's binary format as nightmare fuel full of inconsistencies and confusion. People spend years reverse-engineering binary formats and still produce incorrect implementations that may contain security bugs. A self-describing format avoids giving anyone that work.

I want static types. I think about extending the program all the way down into the operating system, so the types I use when programming become part of how the computer understands files and data. I don't want security vulnerabilities or a user changing a number into a string and leaving the program to guess what to do. With static types, opening the file guarantees what the types will be.

I want forward and backward compatibility, foreign-data preservation, network synchronization, performance, and low disk usage. I think we can do all of this, and I don't think it's that hard.

Consider compatibility. In version one of a calendar program, an event struct has a time and description. In version two, we add a color. Opening a version-one event in version two should obviously work; that's backward compatibility. Opening a version-two event in version one should also work, simply without showing colors.

To make that happen, version one must not accidentally delete the color when it opens and saves the event. It has to preserve unknown data. We need to describe which fields each application understands. When version two opens an older event, the missing color can receive a default or null value.

I also want sideways compatibility. I want to open a file from the 1970s in a modern email client and read the email—which, by the way, works with email and HTTP. Yesterday, Tristan presented a text-based calendar. Suppose he adds a `party` Boolean to his calendar events. He shouldn't need to talk to the IETF calendar working group. He should add arbitrary fields or modifications while remaining interoperable with existing software.

That raises an obvious question: which schema and data-model changes are allowed, and which break everything? I may not agree with everyone in the room.

We obviously need to add optional struct fields. A good schema format should support enums; I've spent enough time with Rust that I can't give them up. Should a previously optional field become required? That breaks backward compatibility because older files won't contain it, so perhaps not. Should fields be renamed? I want to rename variables inside my program, but the schema shouldn't break compatibility for no reason. Should a field's type change?

Ink & Switch explored this in Project Cambria, a complicated and sophisticated schema-migration system that supports type changes. A single value can become a list, and an older view can interpret the first list item as the original scalar. It's worth investigating.

But how much juice do we want, and is it worth the squeeze? That's an old Australian saying. I don't know how much complexity our systems need to be useful. We'll have to build things and find out with our feet: see whether something simple is sufficient or whether we need something more complicated.

That brings me to what I've done. I made a schema system for local-first software called Schema Boy. This is obviously the Schema Boy, I guess.

It's a simple binary serialization format supporting primitive types, including a byte buffer or blob that JSON lacks; lists; optional values; maps from primitive types to other values; structs; and enums. I combined structs and enums, taking inspiration from Cap'n Proto, which was made by the original Protocol Buffers developer.

The format is self-describing. This seems obvious, and I'm surprised I haven't seen it more. The first few hundred bytes of a file—schemas are usually tiny—describe how the rest is stored. The schema might say this is a drawing with particular fields, structured and encoded in a particular way, after which the rest of the data is packed very compactly.

You can't open the files in a text editor, but because the schema is present, we can build tools to open, edit, and modify them. This works over a network too. When peers A and B first connect, they exchange expected schemas. Every following message can be interpreted by both sides in its own context.

Opening a file requires a schema merge. The file's encoding schema describes the stored data, while the application schema describes the fields the program expects. We merge the perspectives. If the application knows about a `stroke_width` field absent from the file and knows it defaults to one, we populate one for all values. If the file contains fields the application doesn't understand, we store them alongside known data to preserve foreign information and avoid breaking another application. When saving, the merged schema includes those fields in the file.

Let's see a demo. This is a real little Rust drawing project that I made for fun—and by “made,” I mean asked Claude Code to make, which I have complicated opinions about. I draw a little person with a nose and rectangular ears, then save it as “cool guy.”

I open the file in the Schema Boy viewer. The raw storage is impossible to read, but the viewer shows the embedded schema. It says the root is a drawing containing a list of shapes. Every shape has common fields such as color, width, height, and identifier, and is one of several variants: circle, path, or rectangle. A path contains a list of tuples for path position and width. The viewer then displays all the data.

I also have a CLI tool that prints the file in the terminal. It can generate starter Rust code for interacting with the shapes. Unlike some code generators, the generated code isn't untouchable. The drawing program uses real Rust enums and structs, populated normally. I can add a field such as `stroke_width: f64` directly.

Every field needs a unique identifier. If I'm adding fields to an application while the chef puppet is building another application using the same struct, our fields must not collide. Protocol Buffers assigns each field an incrementing integer, but in a local-first context we want to modify structs without coordination or conversation.

Anyone should be able to build a program using data created by my applications. I should be able to take files created by your application, use your existing fields however you've defined them, and add them to my interface.

Here's another demo. This is the same drawing program in a web version. A new version also supports text notes. I load the same file into both versions, and drawing in one updates the other live. This is cheating: I'm not using a CRDT, only a synchronous function call. But I'd love to connect it to a CRDT. The same schema format should work with any CRDT if its library implements the integration.

Version one doesn't understand the new text field. There's an open question about what old programs should do with unknown data. Perhaps the drawing only makes sense with the text, in which case the old version should fail to display it.

Paul Frazee once gave a wonderful talk about this. If a tweet contains an image but an older client doesn't understand images, displaying only the text may remove its context and disrespect the author, who assumed people would see the image. It might be better not to show the tweet or to put it behind a warning. These are questions we should think about as a community.

Schema Boy is fast. In a benchmark, JSON files are between two and a half and four times larger than Schema Boy files. Schema Boy is similar in size to efficient binary formats, even though it stores the entire schema in every file. For a one-megabyte file with a 200-byte schema, that overhead doesn't matter. Encoding and decoding are several times faster than JSON across the benchmarks.

That's everything I wanted to discuss. Sorry, I lied; I have two more slides. First, don't use Schema Boy directly. It's experimental. I want to get it into a working state soon, but it has bugs.

For anyone working in this space, here are some tips. Use globally unique field names. Coordination-free schema evolution is important. I love coordination and standards committees. I've been to the IETF many times, and people who spend their lives on standards will be the first to tell you: get your software working before you go to the IETF. Build it, make it work, and only once multiple people have built incompatible software will they give you a room to discuss it.

I also love serialization formats with a canonical representation. Some people are cheering because they know the horror of content-addressable data when you want a hash for an object but field order changes and therefore changes the hash.

Vielen Dank, Deutschland, and lots of beautiful software. Thank you. Let's take questions.

**MC:** I love the vision of a local-first OS. It feels like the end state of all of this, but I realized years ago that it will take more than one team or project. We're iterating toward it, sometimes divergently and sometimes convergently.

Several people are asking variations of this question: there are many good existing data-encoding formats, with Protocol Buffers as an obvious example that you already referenced. What made you lean toward something new?

**Presenter:** I couldn't find anything that met all my needs. I want globally unique identifiers rather than incrementing integers that only one organization can coordinate, which puts Protocol Buffers out of the running. I want something self-describing. With Protocol Buffers and many other formats, you have to share the schema ahead of time before interacting with the data. Compared with JSON, I want something smaller, faster, and more explicit about stored types.

I examined many serialization formats. Unfortunately, I think we may need our own to solve this problem, but if there are formats I don't know about that could work, I'm all ears.

**MC:** You referenced Cambria. Someone asked about backward compatibility and cases where old versions have fundamental problems, even security issues. Cambria's lens-based approach tried to handle every possibility in real time. Another approach to schema design is to break things deliberately. How far is it important to stretch compatibility, and when do you say, “This isn't a drawing anymore; it's Drawing 2”?

**Presenter:** That's a tough one. I don't know, and I don't think anyone in the room knows. Email, HTTP, and HTML are the golden children of long-term compatibility. A modern browser can open a website from the 1990s, and a browser from the 1990s can open a modern site as long as you get through TLS. It uses progressive enhancement. If an old browser doesn't understand CSS, the site won't look pretty, but it works.

Those systems work with key-value pairs. Email headers are keys and values, and email has evolved its schema by adding more pairs. When I worked at Google, Google was very focused on Protocol Buffers. Even with a central source of truth for schema evolution, Google gave everyone strict guidance around fields [unclear], and that seemed to work.

I think something simple may suffice. We should learn from JSON's popularity, which probably comes from its simplicity. But some cases may need Project Cambria's features. We have to build many applications to find out.

**MC:** The self-describing aspect—which I'd also call inspectability—is important. The first version of Automerge had a document inspector. Browser developer tools were one of the biggest breakthroughs for the sense of hackability they created. Data ownership isn't only being able to copy a file, leave with it, or give it to someone; it's being able to look inside even if the original software is gone, buggy, or the data is corrupted. That's more a statement than a question. Now I'm that guy.

**Presenter:** And edit your data. The fact that I can open a terminal and hack any file on my computer is great. Programs don't need to provide a special API or permission for that. I don't need permission from DaVinci Resolve to inspect how it stores data.

That's something we've lost in the cloud era. The Google Docs API doesn't give access to all the data Google Docs stores, which is horrific to me. Applications shouldn't have to build an API if we can read the actual stored data and see it in its full glory. If you're using Blender, you could build a third-party tool that scripts movement or object creation. I want to open the door to that kind of computer hackability.

**MC:** Last one before we wrap. Are globally unique schema keys intended to enable sideways compatibility? Protocol Buffers has incrementing numbers, and you propose unique names, but what happens when two people choose the same “unique” name?

**Presenter:** To be clear about the danger, suppose we're using JSON and I add a `name` field to an object while you independently add a `name` field. Mine is a string and yours is a list of numbers encoding something. Suddenly our applications are incompatible.

Globally unique field names provide a larger namespace. I can give mine a domain-based name, and you can do the same. The only real cost is slightly longer strings in the schema at the top of every file, but it's a few bytes, which we can afford.

Within a larger organization, we can probably reuse keys, but it's more dangerous. It feels like walking through landmines: make sure you don't put the wrong field name in the wrong place. Global identifiers let you remain completely independent in the semantics of your fields without worrying about other people.

**MC:** Thank you, Seph.
