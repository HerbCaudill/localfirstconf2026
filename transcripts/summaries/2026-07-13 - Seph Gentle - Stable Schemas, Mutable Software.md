---
source: local-first-conf-recording
title: "Stable Schemas, Mutable Software"
date: 2026-07-13
speakers:
  - "Seph Gentle"
source_recording: "../../recordings/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1700-stable-schemas-mutable-software"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
source_transcript: "../raw/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.md"
cleaned_transcript: "../cleaned/2026-07-13 - Seph Gentle - Stable Schemas, Mutable Software.md"
---

# Stable Schemas, Mutable Software

**Seph Gentle · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1700-stable-schemas-mutable-software) · [Raw transcript](../raw/2026-07-13%20-%20Seph%20Gentle%20-%20Stable%20Schemas%2C%20Mutable%20Software.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Seph%20Gentle%20-%20Stable%20Schemas%2C%20Mutable%20Software.md)

## Overview

Seph Gentle argues that a local-first computing ecosystem needs self-describing, statically typed data that independent applications can inspect, edit, extend, and synchronize without centralized schema coordination. He presents Schema Boy, an experimental compact binary format that embeds its schema, merges file and application expectations, preserves unknown fields, and assigns globally unique identifiers to support backward, forward, and sideways compatibility. Through calendar and drawing examples, he frames schemas not merely as serialization machinery but as infrastructure for durable, hackable user data that can outlive and move among changing software.

## Detailed notes

### From collaborative editing to a local-first operating system

Gentle opens the conference's last talk by thanking attendees and organizers and noting how many of the day's projects did not exist a year earlier. He briefly recounts his path from Google Wave and operational transformation to CRDT research, the “CRDTs Go Brrr” paper, eg-walker, and work with Martin Kleppmann.

His broader goal is beautiful software. He contrasts Steve Jobs's “bicycle for the mind” with computers dominated by advertising platforms. Developers are often forced to choose between local software confined to one device and cloud software whose operator holds user data and collects rent. Gentle sees a local-first operating system—though he does not claim a complete definition—as a route to computing that respects users.

He compares programs to plants whose interfaces and code sit above ground while their roots extend into shared data layers. A useful computing environment is an ecosystem of many programs rather than one application's closed world. Software developers, artists, musicians, filmmakers, and office workers all combine dozens of tools. Talks on universal version control, GTK integration, and Habitat's network data layer suggest to him that the community is converging on a shared vision.

### What should a file contain?

Unix files expose binary blocks through an API that overwrites bytes. An outside program cannot understand their meaning, determine semantic changes, or safely collaborate on the same data. JSON improves this by being self-describing and representing changes to named values, which is why Automerge and Yjs use JSON-like structures.

Gentle wants a format that retains inspectability while adding strong types and better evolution. Its requirements are self-description, static type guarantees, forward and backward compatibility, preservation of fields an application does not know, network synchronization, speed, and compact storage. Self-description avoids years of insecure reverse engineering associated with proprietary formats such as Photoshop's. Static types prevent malformed data, such as a string appearing where a program expects a number, from undermining the guarantees of typed application code.

### Compatibility in three directions

A calendar illustrates backward and forward compatibility. Version one stores event time and description; version two adds color. Version two should open old events, assigning a default or null color. Version one should open new events without displaying color and must preserve that unknown field when saving rather than deleting it.

Gentle also wants “sideways” compatibility among independently developed applications. If Tristan Edwards adds a `party` flag to his text-based calendar, he should not need approval from an IETF working group, and existing calendar programs should continue to interoperate.

This constrains schema evolution. Adding optional fields is straightforward. Making an optional field required breaks old data. Program variables may be renamed without changing the persistent identifier, but renaming the schema field itself can break compatibility. Type changes are harder. Ink & Switch's Project Cambria demonstrates sophisticated lenses that can turn a scalar into a list and present the first list item to older software. Gentle does not yet know whether that complexity is worth its benefits and argues that working applications must reveal whether simpler rules suffice.

### Schema Boy's embedded schema

Gentle introduces Schema Boy, an experimental binary serialization format for local-first software. It supports primitive types, byte buffers, lists, optional values, maps, structs, and enums, with a combined struct-and-enum design inspired by Cap'n Proto.

Every file begins with a small schema describing the compact binary data that follows. A text editor cannot read the bytes directly, but generic tools can inspect and modify the file because its interpretation travels with it. On a network, peers exchange schemas when connecting, allowing each side to interpret later messages from its own application perspective.

When an application opens a file, Schema Boy merges the file's encoding schema with the application's expected schema. If the application expects a missing `stroke_width`, it can populate a declared default. If the file contains fields unknown to the application, those values remain attached as foreign data and return when the file is saved. Older software can therefore edit known portions without destroying additions made by newer or sideways-compatible applications.

### Drawing demo and coordination-free extensions

Gentle demonstrates a Rust drawing program by sketching a person and saving the file. A generic Schema Boy viewer exposes the embedded schema: a drawing contains shapes; all shapes share fields such as color, dimensions, and identifier; and each is a circle, path, or rectangle, with paths carrying lists of positions and widths. The viewer then renders the corresponding stored values.

A command-line tool prints the file and generates starter Rust code. The generated enums and structs remain ordinary editable Rust. A developer can add a field such as `stroke_width` directly.

Each persistent field receives a globally unique identifier. Unlike Protocol Buffers' coordinated integer tags, globally unique names allow independent applications to extend the same structures without requesting a central allocation or accidentally assigning different meanings and types to the same field. Gentle's goal is that anyone can consume another application's existing fields and safely add their own interface and data.

A second demo opens a drawing in two web application versions, one of which supports text notes. The views update together through a synchronous function call, which Gentle explicitly says is not yet a CRDT, though he wants the schema format integrated with CRDT libraries.

Unknown data creates a semantic problem beyond preserving bytes. An old drawing app may omit text that is essential to understanding the document. Citing Paul Frazee, Gentle compares this to a social post whose image supplies the context: an old client that displays only the text may misrepresent the author's meaning. Software may need to refuse display or warn the user when it cannot interpret important fields.

### Size, speed, and design guidance

In Gentle's benchmarks, JSON output is roughly 2.5 to four times larger than Schema Boy. The new format approaches the size of efficient binary encodings despite embedding its schema, because a few hundred schema bytes are negligible in a larger file. Encoding and decoding are also several times faster than JSON in the shown tests.

Gentle warns the audience not to use Schema Boy directly yet because it remains experimental and buggy. For others exploring the space, he recommends globally unique field identifiers and coordination-free schema evolution. Standards work should follow working implementations: his experience with the IETF is that builders should first make software work, then convene once multiple implementations expose genuine incompatibilities.

He also recommends canonical serialization. Content-addressed systems need the same logical object to produce the same hash, which fails if field order changes the byte representation.

### Why not use an existing encoding?

Asked why he created a new format rather than using Protocol Buffers or another established encoding, Gentle says he found none satisfying all requirements. Protocol Buffers uses integer identifiers that assume coordination and normally requires the schema to be shared separately. JSON is self-describing but larger, slower, and less explicit about types. He remains open to learning of an existing format that meets the full set.

On the limits of compatibility, Gentle points to email, HTTP, and HTML as examples of long-lived evolution through simple extension and progressive enhancement. Old and new browsers can interpret one another's pages within limits, and email headers evolve through additional key-value pairs. He suspects simple rules may cover many cases, as JSON's success suggests, but acknowledges that some applications may need Cambria-like migration. Only building diverse software will settle the question.

The MC connects embedded schemas to inspectability and browser developer tools: ownership includes being able to examine data after its creating software disappears or fails. Gentle adds that users should be able to edit it too. Local files can be inspected without an application-specific API, whereas cloud APIs such as Google Docs expose only what the provider chooses. Inspectable storage would let third parties build tools over Blender, DaVinci Resolve, and other data without seeking permission from the original vendor.

Finally, Gentle explains how global identifiers enable sideways compatibility. Two independent JSON extensions might both add `name`, one as a string and one as encoded numbers, making the applications incompatible. Domain-based or similarly global names enlarge the namespace at the cost of only a few extra schema bytes. An organization may safely coordinate shorter identifiers internally, but global names let unrelated developers choose field semantics independently without walking through a minefield of collisions.
