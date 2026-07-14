---
source: local-first-conf-recording
title: "Beyond Git: Real-Time Version Control for Godot"
date: 2026-07-12
speakers:
  - "Lilith Duncan"
source_recording: "../../recordings/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1200-beyond-git-real-time-version-control-for-godot"
source_transcript: "../raw/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.md"
cleaned_transcript: "../cleaned/2026-07-12 - Lilith Duncan - Beyond Git - Real-Time Version Control for Godot.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Beyond Git: Real-Time Version Control for Godot

**Lilith Duncan · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1200-beyond-git-real-time-version-control-for-godot) · [Raw transcript](../raw/2026-07-12%20-%20Lilith%20Duncan%20-%20Beyond%20Git%20-%20Real-Time%20Version%20Control%20for%20Godot.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Lilith%20Duncan%20-%20Beyond%20Git%20-%20Real-Time%20Version%20Control%20for%20Godot.md)

## Overview

Lilith Duncan presents Backstitch, an Ink & Switch plugin that brings real-time, local-first version control to the Godot game engine so artists, students, programmers, and other collaborators can work directly in shared projects without navigating Git's text-oriented merge workflow. Through a two-client demo and an explanation of Backstitch's Automerge-based data model, custom Godot-scene parsing, merge previews, local history, and file-system synchronization, she shows how structured, domain-aware version control can combine automatic merging with occasional human review. Her broader takeaway is that local-first capabilities can be added to established open-source applications, making powerful collaboration and versioning tools accessible beyond programmers.

## Detailed notes

### Why game development falls into “Git hell”

The MC introduces the talk by noting that game projects contain assets produced by many different roles, while version control remains a powerful capability largely restricted to developers. Duncan then introduces Backstitch, a real-time version-control plugin being developed at Ink & Switch. Rather than building another new web application, the project integrates local-first principles and Automerge-based synchronization into Godot, an existing and widely used open-source game engine.

Duncan describes Godot as an accessible editor for both scripts and visual scenes, used by commercial games and in education. Its growing popularity makes collaboration inside the engine increasingly important. Although Git versions nearly every coded project, including games, she argues that its workflow is poorly suited to Godot's structured scene files and to multidisciplinary teams.

She demonstrates the problem with a small Godot level. After editing collectibles, a collaborator tries to push changes but discovers that someone else has already pushed. Pulling produces a conflict in the `main.tscn` scene file. Git inserts conflict markers into the file, and Godot can no longer parse or open it. A technically skilled programmer could manually edit the structured text, but most artists, musicians, and other team members cannot. Resolving a conflict may take longer than recreating the discarded work.

Common workarounds reproduce the same hierarchy. Training everyone to use Git perfectly is unrealistic. Giving each discipline its own branch leaves a programmer responsible for integrating everything. Having artists and musicians work in separate applications and hand assets to a programmer prevents them from working with the assembled game and either gives programmers unwanted control over art direction or interrupts their programming work with a stream of integration requests. Even expert Git users must repeatedly commit, push, and pull just to see one another's scene changes.

Classrooms intensify this problem. Duncan describes Endless Access and its collaborative student game, Threadbare. Teaching 20 beginners to use a terminal, Git, and Godot is impractical, so students avoid collisions by duplicating files and adding their names to filenames before an instructor integrates their work. Duncan contrasts this busywork with students' expectation that collaboration should feel as direct as Google Docs.

### Building a level together with Backstitch

Duncan proposes a workflow without those team hierarchies or classroom merge procedures, then demonstrates two Godot clients building one level. Nerisse and Benjamin each have a Backstitch sidebar. Every time either person saves a file, Backstitch automatically records the change in history and synchronizes it to the other client through a real server. Although both demo clients run on one computer, Duncan emphasizes that the server round trip takes only milliseconds.

Benjamin creates a branch to decorate the white-boxed level while Nerisse continues changing its colliders on main. Backstitch's changes panel continuously compares Benjamin's branch with main, identifying modified scene files and newly added assets. Selecting an individual commit shows exactly what it changed.

Benjamin places rock textures by overlapping them with the level's blue layer rather than attaching them to the corresponding colliders. Meanwhile, Nerisse moves platforms and a coin, creating changes that will not line up cleanly with his decoration. When Benjamin tries to merge, Backstitch warns that main has changed since his branch was created. In a merge preview, hovering over each change highlights it in the scene. He spots colliders without textures and textures without colliders, corrects the layout, and accepts the merge.

Duncan next shows history and reversion. Nerisse changes a coin's color, selects an earlier commit, and enters a preview before reverting. She can preview going back to a point before all of Benjamin's art was added and cancel without changing the project. Even an accepted revert is reversible, so a user can revert a revert.

### Combining CRDT merging with domain-specific healing

Duncan places Backstitch between Git and Google Docs. Git works across many data types but sometimes requires manual conflict resolution. Google Docs resolves conflicts automatically, but only for a narrow content model. Backstitch must handle code, Godot scenes, and resources, resolving most simultaneous changes automatically while still supporting manual review in cases such as the demo's branch merge.

Backstitch uses Automerge, the CRDT library maintained by another Ink & Switch team. Because merging Godot's scene text directly does not work, Backstitch parses it into a Rust data structure, such as an array of scene nodes, and gives that structure to Automerge. Duncan illustrates two replicas independently adding nodes with the same name while one also removes another node. Automerge preserves both additions and the removal, but Godot refuses to open a scene containing duplicate node names. Before writing the merged scene back to disk, Backstitch therefore runs a custom healing process that detects duplicates and renames one of the nodes.

The application and its complete version history reside on the user's file system alongside the Godot project. Users can work offline, synchronize after reconnecting, and switch sync servers by connecting to another server and uploading their local data. Backstitch synchronizes at file-save boundaries rather than on every keystroke. Duncan says file-level sync is generally sufficient for game projects with many files, produces smaller and less frequent conflicts through rapid propagation, and avoids the difficulty of implementing keystroke-level integration in Godot.

### Early use and the case for upgrading open-source software

Backstitch was initially created for classrooms. In a session with Endless Access, Duncan observed teachers open and play students' projects immediately, replacing the previous exchange of zip archives and allowing direct critique and assistance. Students also became more willing to experiment and risk breaking a project because they knew they could revert their changes.

Development teams are using the alpha as well. Duncan mentions the game-jam project Companion Plant and says its creators joined the Backstitch Discord to share feedback. A community now answers questions and persists through the product's bugs and early-adoption difficulties, which she takes as evidence that the project is useful.

She argues that Backstitch demonstrates a broader local-first pattern: adding synchronization to established, file-system-based open-source software instead of limiting local-first work to greenfield web applications. Existing applications bring users and extension APIs, and their file-based storage can make the approach replicable. Retrofitting local-first behavior remains difficult, but Backstitch has contributed improvements back to both Automerge and Godot. Duncan concludes that versioning tools should be universal because games improve when everyone can collaborate, and she invites Godot developers and other interested people to try Backstitch and join its community.

### Questions on 3D, invariants, branches, and semantic rules

In the Q&A, Duncan says Backstitch already works with Godot 3D because Godot's 2D and 3D scene data structures are fundamentally the same. What is missing is the in-scene diff visualization available for 2D; adding it to 3D requires additional shader work. Large assets can be complicated in either mode, as a large 2D texture illustrates.

Asked about custom healing, she explains that Backstitch's parser can deserialize a Godot scene, operate on its structured representation, and serialize it to disk again. Deduplication is the main healing algorithm, though bugs occasionally reveal additional cases. The project has not produced a merged scene that Godot could not open for a long time. A scene may still look wrong after a merge, leaving the user to make a visual correction, but maintaining the invariant that Godot can open it has worked reliably.

Duncan expects Backstitch to work with other Godot extensions but cannot test every combination. She encourages users to break the alpha, report problems in Discord, and help the team make those combinations work.

Students with no Git background have understood Backstitch's simplified branch interface very quickly in the team's experiments. Branches can contain branches, but currently each branch can only merge back into its parent. Power users want more advanced merging, creating a design challenge: Backstitch must expand its capabilities without confusing students. Duncan sees exposure to concepts such as branches as valuable preparation for students who may enter professional game development, provided those concepts are introduced without a difficult terminal workflow.

Finally, Duncan says Backstitch does not currently apply semantic spatial rules such as preventing colliders from overlapping. Games permit too much variation for one built-in correction to be appropriate everywhere. She would, however, like to add an extension API through which individual projects could define their own conflict-handling rules.
