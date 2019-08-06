---
title: A Quick Introduction to TDD
date: "2019-08-04T22:00:00.284Z"
description: What is TDD? Learn the basics in this quick post.
---

## What is TDD?

Whether you're new to software development or have been around for awhile,
you may have heard of TDD, but have never really gotten a full explanation
of the process and benefits of adoption. The purpose of this post is to give
you a quick introduction to TDD and hopefully pique your interest if you don't
already have TDD in your arsenal of tools.

So what is TDD? To put it simply,

**TDD (Test Driven Development) is a methodology of developing software
that relies on very short feedback loops using unit tests.**

To practice TDD, start with a failing unit test.
Then write only enough code to make that test pass. Finally, refactor the
production and unit test code you've written. Repeat.
This cycle is often called Red Green Refactor and is the inspiration for the name of this blog.

[Uncle Bob Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) summarized this
process into what he calls the ["Three Rules of TDD"](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd),
which are:

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

## Why Should I Learn TDD?

Learning and practicing TDD has numerous benefits while developing software.
I'll expand on the most important ones to me here.

### The Code is Always Running

When you're in a TDD flow, the time between unit tests runs is usually no more than a few minutes.
This means that at any given point, the whole program worked at most a few minutes ago.
If you somehow make a change that breaks some part of the code, it's much easier to undo
that change and get back to a working system. This makes it much harder to have an
hours long coding session of many changes that leaves a whole program in disrepair.
And if you're being proactive during the Refactor phase of a TDD cycle,
your code is always in a clean state which makes the possibility
of creating bugs smaller.

### Saving Debugging Time

Another benefit of tighter feedback loops from unit tests is a drastically smaller
need to use the debugger. You may still need to use the debugger if a test unexpectedly fails,
but the issue should be much more apparent when there is only a small unit of code to debug.

### Easier Refactoring

After following TDD for a bit in a large system, you may have hundreds of unit tests.
These tests are your best defense against breaking the system.
If you find that the architecture is flawed in some way,
you can always rely on these tests during refactoring.
You could fearlessly delete all of your production code and start completely
from scratch while being guided buy a suite of comprehensive tests.

### Unit Tests as Documentation

Having a large suite of passing unit tests can act as living and
breathing documentation of your system. This is like a detailed specification
that is forced to stay up to date with the production code. When other developers read your code,
they can use these tests to understand the requirements of the system and the constraints.

### Gets Requirements Out of Your Head

Last, but certainly not least, is my personal favorite.
If someone asked me why I use TDD and why I am more effective as a
developer when following a TDD flow, this is the first reason I would give.
As developers, we are usually juggling so many thoughts and concerns while creating software.
Requirements, edge cases, and possible performance issues are just a few examples.
By practicing TDD, I can get those out of my head piece by piece and
build upon them bit by bit. I can solve the simplest problems first and then
move on to the more complex. TDD allows me to get out of my own way when
writing code and solve problems faster.

## Wrap Up

I hope you enjoyed this article. If you've never heard of TDD,
I hope I've inspired you to check it out. If you've tried it
and decided it's not for you, then I hope I've inspired you to give it another shot.
I'll leave you with this recent tweet from Bob Martin:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Dogmatic adherence to a practice like TDD is deeply foolish. <br><br>Dogmatic avoidance of a practice like TDD is equally foolish. <br><br>Learn the practice. Learn it well. Become skilled at it. Then apply it with your best judgement.</p>&mdash; Uncle Bob Martin (@unclebobmartin) <a href="https://twitter.com/unclebobmartin/status/1157997350347923456?ref_src=twsrc%5Etfw">August 4, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
