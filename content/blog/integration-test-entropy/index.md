---
title: Integration Test Entropy
date: "2020-02-12T22:00:00.284Z"
description: Why do integration tests become brittle and lose value over time?
---

## What is Entropy?

According to the Oxford Dictionary:

> gradual decline into disorder

When I think about integration or end-to-end tests I've encountered in my career, entropy definitely comes to mind.
More times than once, I've found integration tests that were written when the project was under active development, but as time went on,
these tests became more and more brittle and lost value. As a result, developers begin skipping them in CI builds and soon neglect them
altogether. In this article, I want to talk about the two main reasons I believe this entropy occurs and what can be done to make sure
well written integration tests thrive and provide value throughout the lifespan of a project.

## Data Reliance

The most common reason for brittle integration tests I've seen is a reliance on data. It's that true end-to-end tests should maniuplate data
in order to get confidence that the application is working properly. However, these tests shouldn't assume that the data will always and
forever be in the correct state for an accurate run of the test.

There are several ways to mitigate this risk. The easiest would be to write setup and tear down code for integration tests that ensures
that data is in the right state before and after the run. Of course, if integration tests can be written in a way that they are not
relient on any specific data this is even better. A more complicated but "cooler" solution could be to utilize a Docker container(s) that
contains known data specifically for integration tests.

## Business Requirements
