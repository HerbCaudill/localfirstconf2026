---
source: local-first-conf-recording
title: "Local-first from the factory floor"
date: 2026-07-12
speakers:
  - "Jeremy Theocharis"
source_recording: "../../recordings/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1030-local-first-from-the-factory-floor"
source_transcript: "../raw/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.md"
cleaned_transcript: "../cleaned/2026-07-12 - Jeremy Theocharis - Local-first from the factory floor.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Local-first from the factory floor

**Jeremy Theocharis · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1030-local-first-from-the-factory-floor) · [Raw transcript](../raw/2026-07-12%20-%20Jeremy%20Theocharis%20-%20Local-first%20from%20the%20factory%20floor.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20Jeremy%20Theocharis%20-%20Local-first%20from%20the%20factory%20floor.md)

## Overview

Jeremy Theocharis explains how the constraints of factory infrastructure led his company to build a local-first industrial data platform: an open-source data plane that remains on customer infrastructure, paired with a remote management console. He evaluates that architecture against local-first ideals, argues that ownership and agency transfer well from personal apps to critical infrastructure, and identifies five industrial requirements that existing sync tools did not satisfy.

## Detailed notes

### Factory floors as distributed systems

Theocharis opens by saying his team arrived at what the community calls local-first through necessity rather than choice. He organizes the talk around the industrial world that forced this architecture, the system they built, and an assessment of how local-first it actually is.

He describes a production line as a distributed system made from roughly a dozen machines controlling one another. Its basic unit is a control loop, illustrated through a thermostat: a measured temperature is compared with a target, the controller adjusts heating, and disturbances such as an open window feed back into the loop. He notes that Kubernetes also uses control-loop mechanisms.

In a factory, these loops form an automation pyramid. Sensors and actuators sit at the bottom; programmable logic controllers, or PLCs, control them; higher systems coordinate multiple PLCs, production lines, and sites. A higher layer can accept an order, assign it to a line according to capacity, and receive production results back for possible rescheduling. These loops operate concurrently and in real time, with safety expectations closer to mechanical engineering than ordinary IT: a failure that prevents an emergency control from working can endanger people.

Theocharis asks the audience whether such a system is maintained by distributed-systems specialists or by two electricians from a nearby town. The answer is the electricians, trained through a three-and-a-half-year apprenticeship in an operational-technology ecosystem with its own computers, programming languages, and practices. The term “distributed system” may never appear in their training. PLCs are programmed in a form resembling electrical circuit diagrams, and the cost of changing the large surrounding ecosystem has left much of it similar to technology developed in the 1990s. Even new production lines continue to use it because the existing workforce knows it. He adds that similar SCADA systems can control anything from bottling lines to nuclear reactors.

### Remote access, security, and data constraints

Reaching factory systems from outside is cumbersome. Theocharis describes installing custom VPN software, logging into a browser-based remote desktop, using RDP to reach a segregated jump host, and only then using SSH to reach the target machine. Latency can make a mouse movement take seconds, so companies often fly specialists to the factory instead and effectively avoid software updates.

Enterprise security adds another intermediary. A security department may decrypt, inspect, and re-encrypt traffic using a root certificate trusted by every client, while introducing dropped packets and latency. Because internal IT is treated as a cost center and measured through ticket handling, even creating a virtual machine can take six months.

Configuration is only the beginning. A plant manager who wants to know expected production by the end of the day may otherwise have to phone people to locate an order. Extracting the required data means connecting through more than 50 protocols, modeling that data, and only then building applications.

Theocharis outlines two conventional options. A company can commission custom on-site software and fly someone in for updates, or send production data to a SaaS cloud, often in the United States. He says the second option commonly fails in Europe because production data can embody a manufacturer's central intellectual property, such as the temperature curve that gives a metal its required strength. German KRITIS rules and similar critical-infrastructure regimes also make risk audits easier when the company retains control and ownership of its data. These constraints create the need for a third approach, which his team later recognized as local-first.

### The data plane and management console

The system has two parts. A fully open-source data plane remains on the customer's infrastructure, while a management console permits remote access through a small relay backend that does not store the production data. Theocharis frames the design choices as deciding where data should live and whether to build or buy the system. Keeping sensitive production data locally and using an open-source core reduces vendor lock-in and allows the critical system to continue running even if the vendor disappears.

The data layer begins with a UMH Core instance packaged as a single Docker container. In a brief demonstration, Theocharis adds an instance in the management console, receives a `docker run` command, and notes that it can instead be deployed through Docker Compose or Kubernetes. He quickly deletes the displayed instance because its authentication token was visible.

Instances can be deployed in individual network zones and stacked along the automation pyramid. A production-line instance extracts and models data, forwards it to a site-level instance, and a higher customer-cloud layer can aggregate it for a data lake or warehouse. The resulting fleet creates a management problem, so the console presents all instances, their connections, flowing data, and individual data points, and provides the configuration surface from which customers build applications. Sync connects this management layer to the distributed data layer.

### Five requirements for industrial sync

Theocharis says his team initially hoped the local-first tool ecosystem would let them delete their sync code, but no tool they found covered five requirements. He is careful not to present this as criticism and invites the audience to correct him if a suitable tool exists.

First is a language boundary: many tools assume JavaScript or TypeScript at both ends, while UMH Core is written in Go and must interoperate with a browser frontend.

Second is the variety of access patterns. A conventional document, such as a Linear issue, supports optimistic updates and background synchronization. The industrial system instead has three kinds of objects. Integrations behave like documents and may be written by browsers, multiple users, UMH Core, or GitOps. Observations represent sensor values: only UMH Core should write them, while browsers can only read them. Actions model commands such as deploying a configuration. The frontend emits a command object, UMH Core reads and executes it, the core appends intermediate results, and the frontend reads those results.

Third is data merging. Each instance is authoritative for its own network zone, but monitoring an end-to-end path requires aggregating data from several instances. With no central backend, the browser must merge real-time streams reaching 10,000 updates per second and insert them into IndexedDB. Multiple open tabs require a shared worker to centralize reading and merging. Theocharis says a major improvement was arranging data from UMH Core so browser-side logic could merge and index it efficiently.

Fourth is partial subscription. A browser must request only a subset of a large collection of data points to avoid overload; Theocharis notes that most tools appear to support this.

Fifth is operation across hostile enterprise networks. WebSockets can be difficult to authorize and troubleshoot, and even HTTP/2 may be too complex in these environments. His team therefore chose a deliberately simple transport: HTTP long polling with GET and POST over a single outbound port, 443.

### An extended form of local-first

Theocharis concludes that the system is local-first in an extended sense. Although the term developed around personal applications, his team applied its values of ownership and agency to factory infrastructure. He assesses the system in two pieces against the original seven local-first ideals.

The open-source, headless UMH Core data infrastructure does not have a user experience to which every ideal can apply, but it is strong in offline operation, longevity, privacy, and control. Critical processing continues if links between core instances—or the internet connection itself—are disconnected.

The commercial management console supplies a fast, multi-device, multi-browser experience without spinners, but does not yet offer proper offline or collaboration support. Its longevity is intentionally limited because it is the commercial component. If the company disappeared, the critical infrastructure would continue operating and customers could still configure it through GitOps or other means, though the management console would no longer be available.

### What works and what remains difficult

Theocharis highlights the user experience and suitability for critical infrastructure as the approach's strengths. He recalls industrial developers being surprised that one Docker command can make 100,000 live tags available in a browser. He says the ownership model fits manufacturing and related fields such as pharmaceuticals, energy, and oil and gas, where regulation requires control of data. He cautiously suggests healthcare might be another application while noting that he is not an expert in that field.

The approach remains unfamiliar to newer engineers, who expect a backend to which they can post data, and LLMs likewise need to be guided into the model. Although the local-first ecosystem is growing, his team wants business value rather than to become a sync-engine company, and substantial custom engineering is still required. He closes by returning to the concrete setting: the juice in an attendee's refrigerator was made on a production line like the one he described, kept running by two electricians from a nearby town.
