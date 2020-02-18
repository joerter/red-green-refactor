---
title: Integration Test Entropy
date: "2020-02-12T22:00:00.284Z"
description: Why do integration tests become brittle and lose value over time?
---

## What is Entropy?

According to the Oxford Dictionary, entropy can be defined as:

> gradual decline into disorder

When I think about integration or end-to-end tests I've encountered in my
career, entropy definitely comes to mind. More times than once, I've found
integration tests that were written when the project was under active
development, but as time went on, these tests became more and more brittle and
lost value. As a result, developers begin skipping them in CI builds and soon
neglect them altogether. In this article, I want to talk about the two main
reasons I believe this entropy occurs and what can be done to make sure
integration tests thrive and provide value throughout the lifespan of a project.

_Note: Integration tests could have many different meanings to different
developers. For the purposes of this article I'm referring specifically to end
to end tests that either test a UI (Selenium, Cypress, etc.) or test the data
returned by a REST API._

## Data Reliance

The most common reason for brittle integration tests I've seen is a reliance on
data. I do believe that end-to-end tests should maniuplate data all the way to
the data store in order to assure stakeholders that the application is working
properly. However, these tests shouldn't assume that the data will always and
forever be in the correct state for an accurate run of the test. Data change is
inevitable and no one wants to waste hours trying to diagnose a failing test
because of a change in data.

There are several ways to mitigate this risk. The easiest would be to write
setup and tear down code for integration tests that ensure that data is in the
right state before and after the run. Of course, if integration tests can be
written in a way that they are not relient on any specific data this is even
better. A more complicated solution could be to utilize a Docker container that
contains known data specifically for integration tests.

## Business Requirements

In my opinion, every integration test should be tied to a business requirement
and this link should be immediately obvious to anyone who encounters the test.
Unfortunately, this doesn't always happen. Tests that make an HTTP request to an
API endpoint and assert against data or tests that look for a specific element
to appear on a UI don't necessarily meet this need. If you encounter the test
