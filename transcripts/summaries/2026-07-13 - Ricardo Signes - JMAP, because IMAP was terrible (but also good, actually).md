---
source: local-first-conf-recording
title: "JMAP, because IMAP was terrible (but also good, actually)"
date: 2026-07-13
speakers:
  - "Ricardo Signes"
source_recording: "../../recordings/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1000-jmap-because-imap-was-terrible-but-also-good-actua"
source_transcript: "../raw/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).md"
cleaned_transcript: "../cleaned/2026-07-13 - Ricardo Signes - JMAP, because IMAP was terrible (but also good, actually).md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# JMAP, because IMAP was terrible (but also good, actually)

**Ricardo Signes · Local-First Conf 2026 · 2026-07-13**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-2/1000-jmap-because-imap-was-terrible-but-also-good-actua) · [Raw transcript](../raw/2026-07-13%20-%20Ricardo%20Signes%20-%20JMAP%2C%20because%20IMAP%20was%20terrible%20%28but%20also%20good%2C%20actually%29.md) · [Cleaned transcript](../cleaned/2026-07-13%20-%20Ricardo%20Signes%20-%20JMAP%2C%20because%20IMAP%20was%20terrible%20%28but%20also%20good%2C%20actually%29.md)

## Overview

Ricardo Signes explains that IMAP, despite its difficult syntax and accumulated complexity, established a fundamentally useful local-first-like model: clients keep offline replicas while a server coordinates synchronization. He then shows how JMAP preserves that cache-oriented architecture while replacing IMAP, DAV, and related protocols with ordinary HTTP, JSON, state-based incremental sync, patchable data, composed method calls, push notifications, and shared support for mail, calendars, and contacts. His main takeaway is that a simpler synchronization protocol makes correct, efficient clients easier to build and can support persistent local caches—even across extreme latency—without changing email's underlying replicated-data model.

## Detailed notes

### Email's replicated-data model

Signes introduces Fastmail, where he works on email, calendar, and contact software, and describes a career spanning 21 years in email, mostly programming in Perl 5 and C. He initially planned a futuristic talk about sending email to Mars, but the conference CFP's reference to Facebook, Twitter, and Instagram as the original social media redirected him toward email, which he calls the original social network.

Using an old office-mail analogy, he explains electronic mail as an inbox, outbox, post office, and filing cabinet. SMTP submission sends outgoing mail. POP once retrieved incoming mail, but its model was essentially “only local”: a downloaded message lived on one computer, which was workable when users had only one university-office machine.

IMAP changed the model by enabling the same mailbox on multiple devices. Signes corrects the common idea that those devices merely access remote data. In practice, each client maintains a local replica or complete offline cache, works against it locally, and synchronizes it with a server that acts as the source of truth. A home computer, office computer, and BlackBerry can all carry replicas of the same data.

This architecture already satisfies several goals associated with local-first software. Work is immediately present on the device, not trapped on one machine, and remains available without a network. Email supplies collaboration, has demonstrated long-term durability, and allows users to keep full replicas. Signes notes that security and privacy are more complicated, but argues that IMAP's high-level cache-management model is fundamentally good.

### Why IMAP is still terrible

The trouble lies in the protocol's implementation. IMAP dates to 1986 and uses a custom textual grammar with tagged commands, unsolicited server messages, positional lists, bracketed response codes, and extensions accumulated over 40 years. Implementers must build specialized tokenizers, lexers, and parsers before they can address email's own complexity.

Signes walks through fetching message 12. Envelope fields are positional, so a client must know which nested parenthesis corresponds to a field such as Reply-To. Fetching a body switches from a line-oriented protocol to reading an exact byte count, then back to parsing the remaining response. He jokes that every implementation has mishandled this boundary.

Deleting a message reveals IMAP's core design. A client does not directly delete it; it requests that the server store a `Deleted` flag. The server answers with a `FETCH` response because every response tells the client how to update its cache. Selecting a mailbox initializes the cache with message and flag information. Fetching fills cached records, and storing a flag produces the state the client should record locally.

Search follows the same principle. The server returns matching message IDs rather than bodies because the client may already have those messages cached. A client can fetch only what it lacks. Quick Resync lets a client supply its previous synchronization state and receive the incremental changes needed to reach a newer state. These are desirable offline-sync properties, but they are buried under awkward brackets, braces, interleaving, byte strings, and a restriction to working with one mailbox at a time.

Other personal-information protocols are not attractive replacements. DAV combines HTTP, XML, and legacy formats, while ActiveSync uses a WAP-era binary XML representation. Signes therefore turns to JMAP as a cleaner standard.

### JMAP's basic methods and state model

A JMAP request is an ordinary HTTP `POST` containing JSON method calls. Getting email requires structured data that every mainstream language can parse with standard libraries, eliminating IMAP's custom grammar. The email representation is kept as simple as the domain permits and even supplies conveniences such as a straightforward date format.

Every `GET` response includes an opaque state string. Later, `Email/changes` can ask what was created, updated, or destroyed since that state, giving a client incremental synchronization comparable to IMAP Quick Resync. The state token is not a monotonic number; clients treat it as opaque.

`Email/set` handles creation, update, and destruction. Properties can be patched at a leaf level rather than replaced wholesale. Signes uses email keywords—draft, replied, read, and similar flags—as the example: a client can turn on one keyword while leaving the others intact, reducing conflicts among multiple readers and writers. New email can be created before sending, and messages can be destroyed directly.

`Email/query` performs server-side search and returns matching IDs, after which `Email/get` retrieves the needed records. Although simpler than IMAP, performing those calls separately would still require two network round trips.

### Method composition and efficient caching

Latency matters especially to Fastmail, which was founded in Australia. JMAP lets one post contain up to 256 method calls, and a later method can use an earlier method's result as its input. A query and the corresponding `GET` can therefore execute in a single round trip. The same composition lets `Email/changes` identify changed messages and a following method retrieve them in one request.

Signes stresses that a more sophisticated client should not automatically fetch every changed record. It can mark a cached message dirty while retaining immutable fields such as its subject, then refresh mutable details when needed. A deleted message can become a tombstone so references and UI state remain valid until garbage collection. When a message is created, the client can allocate local storage and update result counts before fetching the full record. JMAP's primitives describe both object existence and property state, allowing clients to choose how eagerly to synchronize.

He then reveals the parts omitted from his abbreviated JSON examples. A complete request declares the capabilities it expects in a `using` field. The server advertises what it supports and must not apply capabilities the client did not request, so old clients remain insulated from new features. Core and mail are the minimum used in the examples, but the same request can enable contacts, calendars, and server-specific extensions.

Fastmail's Cyrus JMAP server stores email, calendar, and contact data and provides custom capabilities. JMAP can therefore synchronize the personal-information set once associated with a PalmPilot through one HTTP-and-JSON protocol, a consistent data model, patchable properties, and straightforward CRUD operations.

### Events, push, and offline webmail

Polling can resynchronize a cache but is inefficient. IMAP addressed this in 1997 with IDLE, which keeps a TCP connection open so the server can announce changes. JMAP offers an event-source stream that delivers new state tokens, allowing the client to decide whether to invalidate records, create tombstones, or fetch data.

Persistent connections work well for desktops but not for background mobile applications, which platform vendors generally prevent from holding an open TCP stream. JMAP can instead register for RFC 8030 Web Push, the foundation beneath Apple and Firebase push systems. The server deposits a notification at a registered endpoint, and the mobile client checks it when it next runs.

JMAP does not fundamentally change the relationship between clients and the email server. The server remains canonical and clients remain replicated caches. It makes that model easier to implement, more network-efficient, and more reliable on mobile.

Signes illustrates the benefit with Fastmail webmail. A traditional browser tab builds an in-memory cache, but closing the tab or rebooting destroys it, violating the goal that mail remain usable without the network. Native clients usually solve this with a custom local database and internal API. Because JMAP is already a convenient data model and API, Fastmail can instead run a small JMAP proxy with a persistent full cache inside the browser. The foreground web application talks to that local proxy, which reaches the remote Fastmail server only when necessary.

The proxy pattern can be stacked at other points in a network. It gives users immediate local data and a spinner-free interface even when the canonical server and correspondents are across a very slow or expensive connection. Signes returns to his opening idea: this is essentially the architecture for emailing Mars.

### Calendar updates and authentication

In the Q&A, Signes explains that calendar events follow the same method pattern as email. `CalendarEvent/get` retrieves events, and `CalendarEvent/set` changes them. To interoperate with other calendar systems, the server sends email containing an invitation or update attachment.

JMAP originally defined authentication inside the protocol, but its designers concluded that authentication was too large and independent a concern to bake in. JMAP is now authentication-neutral. OAuth is the common approach, and IETF work is addressing automatic discovery so an application can configure contacts and calendars from an email address. Fastmail also offers personal API tokens for software used with one's own account and dynamic OAuth client registration for applications shared with others.

The MC contrasts this with Gmail: connecting a personal mail fetcher to Fastmail through a user-generated token and JMAP felt like exercising ownership, whereas Gmail felt like being a guest who might lose access. Signes closes by offering to answer the remaining questions and help developers begin using JMAP.
