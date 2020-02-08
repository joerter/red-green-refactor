---
title: Learning to Love Testing Library
date: "2020-02-07T22:00:00.284Z"
description: How angular-testing-library and react-testing-library changed the way I think about UI tests.
---

# Learning to Love Testing Library

When I first started using Angular, I found the built in testing tools awkward to use and slow to run.
In order to write unit tests and get into a TDD flow, I turned to
[isolated class tests](https://angular.io/guide/testing#component-class-testing). I really enjoyed this technique
because it let me write tests for Angular components in the same fashion that I would write tests for C# classes.
I even made a [simple function](https://medium.com/@john_oerter/simple-typescript-stubs-5bc9fdf0b808) to create typed
stubs of dependencies to inject into tested classes.

I use to test directly on the component in angular and scoffed at the testing library, but I was foolish. It's great!

Brings up an interesting thought about integration vs unit tests. Is testing a parent component an integration test? i used to say yes, but now I say no. Bob martin talks about this.
