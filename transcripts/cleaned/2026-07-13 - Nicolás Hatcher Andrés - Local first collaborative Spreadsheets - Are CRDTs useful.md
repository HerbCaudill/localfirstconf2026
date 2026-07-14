---
source: local-first-conf-recording
title: "Local first collaborative Spreadsheets. Are CRDTs useful?"
date: 2026-07-13
speakers:
  - "Nicolás Hatcher Andrés"
source_recording: "../../recordings/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-2/1430-local-first-collaborative-spreadsheets-are-crdts-u"
source_transcript: "../raw/2026-07-13 - Nicolás Hatcher Andrés - Local first collaborative Spreadsheets - Are CRDTs useful.md"
artifact_type: cleaned_transcript
transcription_model: large-v3-turbo-q5_0
---

**Presenter:** Thank you. My name is Nicolás Hatcher. I'm going to talk about IronCalc and whether we can use CRDTs for collaborative spreadsheets—whether they're useful or not. I'm going to answer that question right away.

I've been thinking about all the possibilities and all the blog posts I've read in the last few months saying you don't really need CRDTs and can do without them. All of that is true. You don't need CRDTs in every situation. But if you want to build a scalable collaborative spreadsheet system, CRDTs are very, very useful. Let's see.

IronCalc is a product I've been working on mostly as a side project for the last year and a half. Lately, my partner Danny, over there, and I have been working on it full-time for the past couple of months. We don't have much people power; it's still a very small project. But we do have a proof of concept. If you go to ironcalc.com, you'll see a very sleek, fast, functional spreadsheet engine and application with many of the things a spreadsheet should have.

We have 500 functions. That's a lot. Any kind of Excel function you might think of is probably there. We can use defined names and conditional formatting in many ways. We can do really nice things with conditional formatting these days. We can use the `LAMBDA` function, which is a favorite of mine. It's a Turing-complete language now.

It's a real spreadsheet. We have dynamic arrays—formulas that spill into other cells beyond the cell containing the formula. We have named cell styles, internationalization to a point, and many other things.

We know how to build the product. I think we have a clear roadmap for the next couple of years. Thanks very much to NLnet, which started all of this; without their help, we couldn't do it. And thank you now to the Horizon Europe program. We have a good grant together with [unclear], some members here, and other people from the [unclear] consortium.

We're pretty sure we can build a nice product, but it's not collaborative. That's probably the single biggest mistake I made when I started doing this. I thought I could make it collaborative in a couple of months. It turns out that's really difficult.

I've been in the business for 15 years, believe it or not, building spreadsheets like this one for many companies. I always made them collaborative to some extent, but not at a scale that mattered. I didn't know it was going to be this difficult.

I'm in good hands. I just met fantastic people who know what they're doing. People from the Yjs ecosystem are around, and others will be working alongside us to make this happen. I'm pretty sure we can do it, although it isn't going to be easy.

First, I'd like to tell you what we need. I'm a very practical person, although I'm a mathematician and physicist by training. In this case, I really want to build something that works. I want to give you the best spreadsheet software I can so you can do whatever you want with it. I want to give it the most permissive license. I want you to read it, copy it, modify it, or do whatever you want with it.

I think spreadsheets are a building block of modern software. There are many others that are also very important, such as email—of course, way more important—operating systems, and many other things. But spreadsheets are something I can do and contribute.

I want to give you a spreadsheet that can be used collaboratively and has eventual consistency, where everybody working on that spreadsheet ends up with the same spreadsheet. But I want to preserve intent, which is a key word when people talk about CRDTs. Intent is what the user wants to do when they make changes.

I absolutely don't want merge conflicts. I don't want to give a spreadsheet user a Git interface with all the weird details they would have to fight against.

Do we need a server? Being practical, I split this into two scenarios. One is the classic real-time collaborative application, like Google Sheets or Microsoft 365, where people collaborate on a document—in this case, a spreadsheet—at the same time.

The slightly different, though related, problem is what happens when I want to work offline for a while because I don't want to be interrupted, I'm on a plane, I don't have internet, or for any other reason. These are slightly different problems and might be solved with different tools. That's something I was thinking about while building all this.

For example, I could solve 90% of the first problem with very quick synchronization among different users working on the same spreadsheet. If I can sync everything as fast as possible, I don't need many algorithms, which is what I was doing five or 10 years ago.

I want to highlight some common spreadsheet problems. You all know what CRDTs are. They apply very well to text. When it comes to two-dimensional things, they apply, but it's not so straightforward.

When you're editing a cell, you're not necessarily editing only that cell. You might change its shape or the shape of its row, for example. When you're deleting a cell, many other cells might refer to it, and all of a sudden those references are broken.

What if you're styling a cell? If you're putting borders here, it turns out that, in spreadsheet applications, the left border of one cell is the right border of its neighbor. This kind of coupling makes things difficult.

Inserting columns and rows is a pain because it can move the whole spreadsheet. You need to be smart about how you do that. Moving is another difficulty and is not solved by deleting and inserting. You can create merged ranges and have complex computations. As I said before, dynamic arrays contain formulas written in one cell that spill into many other cells.

This is taken from a paper. I don't know if Julian is around here, but one of the paper's authors is here, and I copied it without permission. It's very nice. They performed several of these operations to see how they work in Google Sheets. They actually did it in Notion too, but I'm skipping that one.

You can see green rectangles, which mean the result is probably optimal; yellow ones, which are somewhat suboptimal; and red ones, which mean data was actually lost. If two people edit the same cell, you may have a problem. That's an easy-to-understand problem. What happens if somebody deletes a column while somebody else edits a cell within that column? Conflicts like these make life difficult for any algorithm you use to synchronize spreadsheets.

Can we do better? I'm told Google Sheets uses something called operational transformation. I'm not completely sure whether that's true; I haven't seen it myself. They did start with that and did publish the work. It was the winning algorithm at least through the mid-2000s.

As I said, CRDTs are very, very useful. But the implementation, as far as I can understand—I'm a newbie and a rookie—is fairly involved. It's not going to be a walk in the park. There are many things to consider. All these different operations you can perform on a spreadsheet may conflict and make things difficult.

One intuition I'm building around CRDTs is that, if you can make these operations commute, you're in good shape. That's not the definition of a CRDT and not all of what it is. But if you can say what happens with two different conflicting operations, specify their combined result, and make that result independent of the order in which the operations arrive, you're on a good path toward something that works. I think that's one of the first things I'm trying to do.

CRDTs and spreadsheets are pretty much a research project at the moment. I don't know of any production spreadsheet software using CRDTs, unlike the different text editors that use them.

These are three pieces of work that are important to me. I think Annette is here from the first paper. As I mentioned, Julian is here from the second one. Bartosz is not here; the third is not a paper but a really nice blog post from Bartosz about the problems of using CRDTs in spreadsheets.

I want to give you one quick example. Somebody deletes a column, and somebody else edits a cell in that column. The way I did this 10 years ago was that whoever arrived at the server first was right. If the other operation conflicted, there would be a hard error in the browser, and that was the end of the story. We don't want that because it won't work offline and won't be local-first.

The path to solving this begins by naming columns and cells. It can't be column D or cell D3 anymore because those names can change when things move. We need stable names. This can be column Chandra, and this cell can be Surya, for example.

Then Bob deletes column Chandra. What happens when the delete and edit operations arrive in different orders? In this case, we forget the delete operation. We ignore the fact that we deleted the column and bring everything back. We can do that, and it makes the process commutative.

We have this result in one of the papers: with CRDTs, they managed to make everything green, meaning optimal and not losing data. That's a fairly good outcome for CRDTs.

That's what I would like to build and will be building in the next four to six months. Hopefully, you'll have a spreadsheet engine you can use wherever you want that is collaborative and local-first out of the box. Thank you.

**MC:** I like that, in all three years of this event, we've had both “Look what I've built and the problems I've solved” and “Look at the problems we're in the process of solving that aren't finished yet.” In this case, you're outlining problems to be solved. Is that an invitation for collaboration?

**Presenter:** Yes, that's definitely an invitation for collaboration. I would very much like to form a community around spreadsheets. This is done in Rust. If somebody wants to learn Rust or CRDTs, please talk to me. Thank you.

**MC:** One quick question. You mentioned two modes: real-time collaboration and offline. Have you explored a sideline with a collaborative document edited by people with devices on a LAN without access to a remote server? You can imagine that as a network partition: you and I are offline doing things together, far away from the server, and might connect to it later.

**Presenter:** I have a simple answer: no. I don't know. We haven't written a single line of code yet. At this exploration stage, I think everything is possible.

**MC:** At this point, you're still getting the shape of the problem, but you can already see why spreadsheets, as two-dimensional data, are a very different challenge from rich text, for example.

**Presenter:** Correct.

**MC:** Wonderful. Please give Nicolás a hand.
