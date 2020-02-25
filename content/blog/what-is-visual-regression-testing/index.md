---
title: What is Visual Regression Testing?
date: "2020-02-24T22:00:00.284Z"
description: What is visual regression testing and how can it help you deliver quality websites faster?
---

Today, I want to talk about a fantastic new tool I've discovered recently for
building quality web applications. That tool is visual regression testing. In
this article, I want to give a short introduction to visual regression testing
that hopefully inspires readers to utilize it in their own projects.

In simple terms, visual regression works by tracking UI changes over time. The
usual means of doing this is by taking screenshots of webpages and doing a pixel
by pixel comparison. This is done in an automated fashion, and enables you to
check many webpages at once. I'm currently working on a design system at work,
and visual regression testing has helped me catch bugs and inadvertant breaking
changes before release.

I've included a screenshot from
[BackstopJS](https://github.com/garris/BackstopJS) which is the tool I use (more
on that later).

## When Should I Use Visual Regression Testing?

In my experinece, visual regression testing is best suited towards _static
content sites_. These are sites that may not have a lot of interactivity, but
need to be aestetically pleasing. Earlier in my career I worked on Wordpress
sites at a digital agency, and I so wish that I knew about visual testing at
that time. Instead of manually clicking through the website after each
deployment, I could have let a visual testing tool automatically compare what I
had just deployed to a known state. What a time saver!

The other area that I find is particularly well suited for visual testing is the
development of design systems. As I said above, I am currently working on a
design system, and am using BackstopJS for visual testing. What I've done is
create simple "sink" pages for each component. These pages contain that
component in every state possible. For example, in my button sink page, I have
buttons rendered for each variant (primary, secondary, destructive, etc.). Then
I have BackstopJS run every time code is committed to the master branch. This
ensures that each component is not inadveratnly changed or impacted by changes
in another component.

## What Tools Should I Use for Visual Regression Testing?

I've already mentioned BackstopJS a couple of times in this post. This is the
main tool that I've used, and I've had a great experience with it. The main
features that I enjoy are quick setup time, easy configuration, and reporting.

BackstopJS is an open source package, but there are products that you can
utilize for you project as well. The two main ones I know about are Percy and
Happo. I have not used either one, but from scanning their feature list, I'm
sure they're worth the money if you plan to make heavy use of visual testing. If
you've used either of these products

- Automates checking for UI changes that may break functionality for users
- It is different from functional testing because it tests the visual appearance
  instead of functionality
  - It doesn't replace functional testing, however.
- Visual regression testing is especially useful for static sites, but certainly
  has a place in applications as well.
- Include a screenshot of backstop js

## Examples

- Design system example
- Static website example
- Web application example

## Tools

- Percy.io
- Backstop.js
