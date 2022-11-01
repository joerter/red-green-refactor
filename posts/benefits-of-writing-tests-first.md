---
title: Benefits of Writing Tests First
date: '2022-10-31'
description: Two benefits of writing tests first.
tags:
    - craftsmanship
---

It feels to me that TDD often has a strict, dogmatic reputation that repels many developers from ever adopting or practicing the technique. That’s a shame because I’ve seen in my own career how practicing TDD helps me write more elegant code by keeping me in flow and allowing me to get requirements out my head. I don’t believe you need to strictly adhere to all the tenets of TDD in order to realize these benefits. The simple act of writing a test before production code and then iterating on that is what I’ve found to be the most beneficial aspect of TDD. Some people will call this “Test First Development”, and that’s fine with me. 100% adherence to an ideology in software development is silly. Everyone should adopt bits and pieces of techniques that work for them and let their results speak for themselves.

Given that, in this article I wanted to briefly explain the two benefits of writing tests first that I outlined above. I feel like these are two benefits that don’t get the spotlight often or aren’t talked about as much as I think they should be. Here we go:

## In Flow
Writing tests first is one of my favorite productivity hacks for writing code. Nothing keeps me engaged and driven towards a solution like the constant cycle of writing a test, watching it fail, and then writing the code to make it pass. A fast feedback loop is essential to making progress quickly. Writing tests first gives me a small, achievable goal that I can devote 100% focus to, and then move on to the next problem once it’s been achieved.

As a developer, it’s essential to narrow your scope and focus on one problem at a time. Having too many problems in scope at one time leads to indecision because a solution for one problem inevitably makes another more complicated.

![smallsteps.svg](/benefits-of-writing-tests-first/smallsteps.svg)
*Making many small incremental steps beats a few large steps*

## Gets the Requirements Out of My Head
How many times have you been fixing a bug in some legacy code that isn’t covered with tests, trying to juggle multiple requirements all while being nested a few levels deep in if-statements and loops? As developers, we often find ourselves needing to consider multiple sets of requirements at the same time and depending on the codebase, this can be very difficult. 	

Instead of keeping those requirements in our head, we can codify them by writing tests and letting the test runner remember for us. You might say that you can achieve this benefit by writing tests after the code has been written as well, but I think the benefit is only fully realized when the tests are built up along with the code. In this way, they can act like a checklist enabling you to devote your problem solving abilities to the next task while the other requirements are still enforced. Additionally, when you see the test fail at least once, you can be more confident that the code you write is causing the test to pass.

![checklist.svg](/benefits-of-writing-tests-first/checklist.svg)
*By letting your tests keep track of requirements, you can focus on the task at hand*
