---
title: Learning to Love Testing Library
date: "2020-02-07T22:00:00.284Z"
description: How angular-testing-library and react-testing-library changed the way I think about UI tests.
---

When I first started using Angular, I found the built in testing tools awkward to use and slow to run.
In order to write unit tests and get into a TDD flow, I turned to
[isolated class tests](https://angular.io/guide/testing#component-class-testing). I really enjoyed this technique
because it let me write tests for Angular components in the same fashion that I would write tests for C# classes.
I even made a [simple function](https://medium.com/@john_oerter/simple-typescript-stubs-5bc9fdf0b808) to create typed
stubs of dependencies to inject into tested classes.

This method worked, but I've now learned that there's a better way. I've been playing with [angular-testing-library](https://testing-library.com/docs/react-testing-library/intro)
and [react-testing-library](https://testing-library.com/docs/angular-testing-library/intro) recently, and they've completely changed the way I think about UI tests. If you're not familiar, these libraries are a part of a family of
libraries built for writing maintainable tests in several different JavaScript libraries. This can be explained by one of the guiding principles
of Testing Library:

> The more your tests resemble the way your software is used, the more confidence they can give you.

This means that all the implementations of Testing Library
only expose ways to assert against the DOM. In `angular-testing-library` for example, there is no way to assert against properties or methods
on the component itself. You must query the DOM in the way a user would interact with your application.

My first reaction to this philosophy was a negative one. I thought that this was too limiting, and would make writing unit tests very difficult.
But I was very wrong! I've been using Testing Library more and more and I've found that the guiding principle is 100% correct. But it also has me
wondering, are tests writtien with Testing Library Unit tests or Integration tests?

At first, I thought of them as integration tests because of two reasons:

1. Tests written with Testing Library interact with apps in the way a user would - through the DOM. This style is often associated with other
   end-to-end test frameworks like Cypress or Selenium.
2. I find myself testing features of an app that may involve a parent and many child components instead of writing 1 to 1 tests for each component.

The more I think about it, however, I'm not sure this distinction really matters and I'm comfortable with either classification.

Going back to #1 above, the DOM really is the public API of my UI components just like the public properties and methods are the public API of
classes and interfaces in C#. Therefore, it makes sense to test UI components only through the DOM and not through the "implementation details" of
their component properties, even if these properties are accessible "in code".

For #2, this is a pattern that I'm adopting more and more for C# as well. Unit tests don't have to be - and probably shouldn't be - written
1 to 1 for classes. Instead, I've begun writing tests for a top level class that may depend on other helper classes whose functionality is tested
through the public API of the top level class. This leads to far less mocking and more maintainable tests.

This is how Testing Library has changed the way I think about testing for the better. If you haven't tried it out yet, you should check it out in
your framework of choice! There are flavors for React, Angular, Svelte, and more.
