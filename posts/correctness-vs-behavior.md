---
title: Correctness vs. Behavior
date: '2019-08-11'
description: Dueling mentalities when it comes to writing unit tests
tags:
    - general
---

I recently read [this excellent blog post](https://blog.cleancoder.com/uncle-bob/2019/06/08/TestsAndTypes.html) by Bob Martin about an interesting
debate he had on Twitter with Mark Seeman. The debate centered around
testing in static vs. dynamically typed languages. Uncle Bob made the assertion
that using a statically typed language does not reduce the number of tests
one needs to write because one must still execute the tests to prove that
the system has the correct **behavior**. Mark Seeman made the point via one of
his past blog posts that languages like Haskell that don't have nulls eliminate a
whole class of tests one would need to write in a dynamically typed language or one that allows nulls.

In his article, Martin runs through the same problem that Seeman solves in his blog using
Clojure, a LISP-style dynamic functional language.

Near the end of the article, Uncle Bob makes the following statement:

> This is the crux of the argument between Mark and I. I claim that the number
> of tests required are only those tests that are necessary to describe the correct
> behavior of the system. If the behavior of each element of the system is correct,
> then no element of the system will pass invalid arguments to any other.
> Invalid states will be unrepresented.

I was so happy when I read this because it made an idea clear in my head that
I've been feeling for years, but didn't have the words to express. I now call it
**Correctness vs. Behavior**. I've felt that some developers approach tests in a
similar fashion as Mark Seeman, and feel they need to prove the "correctness" of
their systems by testing that it correctly handles every possible input.
This is why they often prefer statically typed languages. To varying degrees,
these languages are able to guarantee some kind of safety and eliminate
the need for some kinds of tests.

I agree more with Bob Martin's line of thinking. If the whole system is well tested,
why should I feel the need to write tests for states that are never going to happen?
I prefer to focus on the **behavior** of the area of code I'm testing.
In this way, the difference between statically and dynamically typed languages doesn't matter much
at all to me.

I wonder if this different way of thinking is something that turns developers off from TDD.
I wonder if developers that feel they need to cover every invalid argument or state in
their system don't see the benefits of driving the correct behavior of a system with tests.
This mentality could be why many developers prefer to write their production code first and
then use tests to prove **correctness**.

This article is not meant to spark debate about which way of thinking is better or more effective.
I have simply found joy in being able to finally express this dichotomy and expand on it here.
