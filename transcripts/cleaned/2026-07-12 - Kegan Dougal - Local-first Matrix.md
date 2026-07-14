---
source: local-first-conf-recording
title: "Local-first Matrix"
date: 2026-07-12
speakers:
  - "Kegan Dougal"
source_recording: "../../recordings/2026-07-12 - Kegan Dougal - Local-first Matrix.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1445-local-first-matrix"
source_transcript: "../raw/2026-07-12 - Kegan Dougal - Local-first Matrix.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Hi again. My name's Kegan. I've been part of the core team at Matrix since its inception. I'll spend some time today talking about how we're trying to move Matrix from a federated model to a peer-to-peer model, and some of the issues we've had.

If you don't know Matrix, Matrix is a decentralized network. It's federated, like email or Mastodon, so users register on a particular server, and those servers communicate with each other using the federation protocol. The important thing is that you don't need all servers to be online in order to communicate. If you create a group chat and you can't talk to the other servers, users on your own server can continue communicating. It's very resilient to network partitions.

The user who creates the room is the administrator of the room. They're able to manage the room, promote other people to be administrators, demote users, kick or ban them, and things like that.

The unique relation between Matrix and local-first is that a Matrix room is a CRDT. Each server is a replica, and, if you know CRDT merge functions, the state-resolution algorithm in Matrix is the merge function. This is specifically focused on the federation side, not the client-server API side. We'll talk about that a little later. You can see the [unclear] paper here, which analyzed Matrix to determine that, yes, it is a replicated data type.

You have a Matrix federated model where many users exist on a single replica and these replicas talk to each other. In a local-first model, a replica is directly tied to one user, and those users communicate with each other via some peer-to-peer protocol. These are very similar models. The only real difference is that in the local-first model, network partitions are much longer-lasting and more severe. It's likely that you won't be able to talk to all phones at the same time, whereas in the federated model you can be reasonably sure that most servers in the group are online at the same time.

To give you an intuition for what these CRDTs look like: if Alice creates the room, this is just a JSON object. You hash that JSON object, get a unique ID, and that is the event ID. If Bob joins the room, Bob needs to say, “I'm joining after Alice created the room.” We represent that with a field in the JSON object for previous events, where you specify the creation event's ID. It points back to the creation event. Bob's event gets its own ID because the previous events also form part of that hash structure.

You can continue this operation and sometimes end up with a fork, because multiple servers can write to this data structure. Alice and Bob may be unaware of each other's concurrent updates. This is okay because you can merge the forks together. The CRDT merge is represented by putting multiple IDs in the previous-events field.

This merge function is the state-resolution algorithm. It can be tricky to implement. In this example it's simple, and you can add the operations together. If they're conflicting operations and you have to choose the winner and handle the fork sensibly, it gets very difficult. The Byzantine aspects of this were covered nicely in the [unclear] paper. This state structure is good at handling Byzantine replicas: even Byzantine replicas can't really corrupt the state structure, unlike other forms of causality representation such as vector clocks.

Time for a live problem. If you want to design a local-first chat app—or a file, document, or whiteboard—you need some notion of three things. You need to synchronize your message data, perhaps using CRDTs. You need a way to identify users globally and route traffic, generally some overlay network such as Iroh, Reticulum, or Yggdrasil. There are many overlay networks; you can talk to me afterward about them. Third, you need to decide who is authorized to perform which operation.

Suppose the admin group contains Alice and the normal-user group contains Bob. Bob tries to remove Alice from the room. What stops that? Who enforces it? There are a few options. It could be server-enforced: a central server says, “No, Bob, you're not allowed to remove Alice because Alice is an admin.” You could use capability tokens, where Bob physically doesn't possess a token that could convince other people he can remove Alice. Or you could use CRDTs to try to solve the problem.

Why not server enforcement? It seems like the easiest option, and it is; many applications do this. But fundamentally, you have all these CRDT replicas that can accept reads and writes at any time, even during a partition. If you gate writes on reaching the authorization server, you can't accept writes when you can't reach that server. If the authorization server disappears, the entire system can't accept writes at all. Although the replicas could theoretically synchronize, it isn't safe to accept writes because no one can enforce group permissions.

Capability tokens are good for certain things, particularly live data access. If you have an API that you need to protect, you can use them. But they struggle with historical data. In a local-first setting, imagine that I walk past Alice's phone. We're in the same group with other people, and Alice has a week's worth of new group-chat information I haven't seen. During the brief moment when we pass, I synchronize that traffic. It includes information saying Alice banned Bob five days ago. Alice isn't an admin now, but she was a week ago. Was the ban authorized? It's difficult to represent that with capability tokens because they tend to track the current state of the live system.

The other alternative is to use CRDTs. Then you encounter the dueling-admins problem. Alice creates a room, Bob joins it, and Alice promotes Bob to admin. Then two things happen concurrently: Alice demotes Bob, and Bob demotes Alice. What does the merge function do? You have to decide who wins.

I like to think of implementing these merge functions as sorting events into an execution order. The question is how these two events are ordered with respect to each other. That matters because the validity of one event depends on the other. Bob's demotion of Alice is authorized only if Alice's demotion of Bob has not already executed. For this example, assume Alice wins the tie-break because she joined first. We'll say the most senior user wins.

Now imagine another scenario with no concurrency. Alice joins the room as its first admin. She promotes Bob to admin. Bob demotes Alice, so only Bob is now an admin. Several days pass and everything is fine. Then Alice decides she wants to be an admin again and maliciously sends a backdated demotion.

The problem is that this graph is exactly the same as the previous graph. Any deterministic rule that guarantees Alice wins in the legitimate concurrent case also guarantees that Alice wins in the malicious backdated case, because the graphs are identical.

You might say ordering by users is wrong and propose using hashes, because you can't predict them. But you can perform hash grinding. If the demotion event has an ID ending in 567, you can keep making demotion events until one hashes to a lower value, send that one, and discard the rest. You can't rely on hashes. You can say the most senior user wins, but that has the vulnerability we just saw: the most senior user can perform this attack.

You could say events shouldn't be ordered at all and use a concurrent specification: when events are concurrent, apply them all or have them cancel out. Cancellation doesn't make sense because it lets you cancel your own demotion, so you can't enforce access control. Enforcing both demotions means that any time in the future Alice could retaliate after Bob demotes her, maliciously sending a demotion of Bob even though she is no longer authorized. Alice and Bob might also both be locked out, leaving no admins in the room.

You might think consensus will save us. But identities in a local-first setting are very cheap; typically, you only need a public-private key pair, so you can create many identities. When I synchronize a week's traffic from Alice, nothing stops it from saying Alice 2, Alice 3, Alice 4, and Alice 5 are also in the room and happen to be controlled by Alice. She has stacked the odds in her favor and can win a consensus vote. This is a Sybil attack.

You might say blockchain will save us through proof of work or proof of stake, but this has similar problems to the most-senior-user rule: the user with more resources can perform the attack. It also assumes some kind of blockchain. I will partially concede that if you used the global Ethereum network, in theory it could solve this problem, because Alice or Bob probably couldn't muster the resources for a reorganization attack. But that's not really local-first because you need to talk to the global Ethereum network.

Maybe we can change the rules and forbid demotions and bans. You can't have dueling admins if you can't demote anyone. A system without demotions can avoid these problems, but in practice mistakes happen and devices get compromised. I don't think a production system can lack any way to demote someone.

Maybe we can forbid same-level demotions. This is what Matrix does today: two admins at the same level can't demote each other. The rules do not allow it. But you can still backdate events to do the same thing.

In this scenario, Alice and Bob are both admins. Alice maliciously backdates events: one promotes Alice Prime, a sock-puppet account that retains access to the room, and then Alice self-demotes. She crafts these events so that, when merged, they are ordered before Bob joins the room. The resulting order is: Alice joins, promotes the sock-puppet account to admin, and self-demotes; Bob joins; then Alice tries to promote Bob to admin. That last event is no longer authorized, because Alice Prime is the admin, not Alice.

You might think we could detect and forbid Alice doing things on forks. This is precisely what the [unclear] paper proposes, but the same thing can happen innocently. If you dropped your phone into the sea and loaded a backup, you may have forgotten that you promoted Bob to admin, so you start sending events on the fork. Again, I don't think forbidding that is practical for a production system.

What can we do? We need three things. We need more information to distinguish between these graph shapes. That information must be created by an independent party, not Alice or Bob. Then we use that information to control the event execution order. That's the subject of an academic paper I wrote earlier this year. I'll explain a little about how it works.

The idea is to have a third entity responsible only for saying, “These are the latest events I've seen.” That's it. In this scenario, Alice has promoted Bob to admin, and Bob has demoted Alice, so only Bob is an admin. Finality arbiters come in and say, “The latest event I've seen is this one.” They do that by sending an epoch event.

This locks in the history. Because all of these events point backward through their previous-events field, you can't add to the epoch. It's a closed set. When Alice tries to backdate a demotion, it is not part of that epoch and can never become part of it. It becomes part of the pending epoch. The execution rule is to execute everything inside the finalized epoch before anything outside it. If the epoch had been finalized the other way around, Alice would have won. Critically, it is not up to Alice or Bob to decide who creates it.

As you get more events, you get onion-ring-like layers. Bob might write “Hello,” and another epoch is made. Alice may be doing her own thing without having seen any of this. Effectively, Alice's demotion of Bob gets rebased after the first epoch, and Alice's write gets rebased after all the epochs. There may still be concurrent events within an epoch, but that's fine; some tie-breaker determines what comes first.

This may sound like the central authorization server from the beginning, but it isn't the same because it does not synchronously block anything. One replica can accept a write and communicate it to all other replicas, including the finality arbiter, which is itself a replica. The arbiter's job is effectively to clear the buffer of pending events. If the arbiter disappears, you can still accept writes and communicate normally, but with an unstable sequence. Anything in the pending epoch is potentially vulnerable to the backdating attacks I described.

What about trust? The arbiter's role is only to order concurrent events. It can't promote or demote people or forge events. If you're using end-to-end encryption, you can potentially encrypt event contents from the arbiter, so it is sorting ciphertexts. If it equivocates by sending concurrent epoch events, that behavior can be detected and the finality arbiter flagged as malicious.

The lesson I've learned is that essentially all authorization assumes some trusted sequencing that users can't manipulate, such as the order in which requests hit a server. When you go entirely local-first and remove that server, you're trusting all peers to be honest about when they sent things.

Alice can say in real time, “I'm banning you, Bob.” Bob can maliciously respond, “Sorry, Alice, didn't you know I banned you a while ago? Let's cancel that ban of me.” You can never prove whether Bob's event was merely delayed in the network or was created in retaliation, because ultimately data is timeless.

In a local-first world, signaling servers already exist and are trusted with availability operations such as store-and-forward and NAT traversal. They could potentially serve as finality arbiters. When you create a document or chat group, you could nominate and hence trust one signaling server to emit epoch events and provide protection against backdating.

In recent Matrix room versions, the group creator is an immutable, all-powerful entity in the group. We don't need to add an external arbiter; we can use the group creator for that role.

How does this relate to peer-to-peer Matrix? We're taking the servers that federate and putting them onto the client, then using an overlay network to communicate client-to-client through the federation API. We've designed a very small embedded home server in Rust for [unclear]. It's extremely alpha and fresh code, but there are links to peer-to-peer work that give you a status update on our progress.

The main utility, at least from my perspective, is that it gives us a way to evaluate Matrix under the harsh peer-to-peer conditions of long-lasting network partitions.

I'll show a little demo of local-first Matrix. It uses Bluetooth to communicate directly between phones. We're using Iroh as the overlay network, with a custom Bluetooth transport and modifications to make it more robust.

If you're keen and willing to run sideloaded APKs, you're welcome to scan the QR code, download the APKs, and try them. In this scenario, I'm loading Element X and registering three accounts: Alice, Bob, and Charlie. I'm registering them with the local server. All three phones are in airplane mode, so there is no network access, just Bluetooth enabled.

The reason I ask for a display name on startup is so you can type a friendly, human-readable name. We use Bluetooth advertising packets to advertise that there is a device called Bob or Charlie. Alice creates a group and invites Bob and Charlie. That establishes a Bluetooth connection with L2CAP, puts Iroh over the top, and sends federation requests over that using CoAP and [unclear].

It does that serially, so it goes to Bob first and Charlie a few seconds later. This is a multi-party chat. Bob and Charlie accept. It's all using Bluetooth, with no public internet or even LAN access. It's still at a very rough stage and there are a fair number of bugs, but there is something to try. I send a little reaction. It appears later on Bob's device because Charlie and Bob might not have an active connection, so it takes a few seconds for the reaction to land. There we go.

Where do we go from here? We don't have a store-and-forward layer, so devices need to be online at the same time. If they're not, nothing will happen. It relies on the two phones being online together, so it isn't very practical yet. Matrix already has many home servers running, and perhaps we can use them for store-and-forward.

We would like it to interoperate with normal Matrix. This green version uses a collection of custom MSCs and doesn't interoperate with the normal Matrix federation network. We'd also like to add many features. There are no EDUs: no typing indicators, receipts, or related ephemeral data. The main thing is to use it as a test bed for the year and for finalizing the [unclear] implementation.

My final thought is that data is timeless. You don't really know when a piece of data was created. You can't trust a timestamp, a vector-clock position, or a position on a graph. The only way to rule out the past is to have a trusted timekeeper say that a certain time has passed. That is essentially what the arbiter does.

There is a trifecta among having a trusted third-party timekeeper, the ability to perform demotions, and protection against backdating. You can choose two of those when, ideally, you want all three. Because the latest Matrix version already has an immutable trusted creator whom everyone trusts and who cannot be demoted, we effectively have that trusted party, so the choice is obvious for us.

But what about you? If you have a local-first application with group permissions, where multiple people can perform these kinds of operations, you need to consider what trade-offs you really want to make. Thank you very much.
