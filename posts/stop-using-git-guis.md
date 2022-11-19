---
title: Stop Using Git GUIs
date: '2022-11-12'
description: Abstractions come at a price. Learn the fundamentals first.
tags:
    - craftsmanship
---

How many times have you gotten your git repository tied up in knots and had to reach out to a coworker or Google for help? Do you feel fully in command when issuing git commands at the CLI or do you wince a little before hitting the return key?

## Abstractions Come at a Cost
One of my sincerest beliefs in software is that as developers, we need to invest the time into mastering our tools. Before using an abstraction over a certain tool, it is better to master the tool itself.

In this case, Git GUIs like SourceTree, Git Kraken, or the one embedded in VS Code are abstractions over the Git CLI.

Abstractions can make your workflow faster and more streamlined, but if you don’t fully understand the power of the raw tool, your knowledge will be shallow and you could be missing out on other efficiencies.

## Personalize Your Workflow
By focusing on learning the fundamentals of the raw tool, you can craft your own workflow instead of the abstraction forcing an opinionated workflow upon you. Over the years, I’ve created my own git aliases that support the most common commands I use during my git usage. Here are a few:

```bash
gs = git status
git cob = git checkout -b
git plo = git pull origin
git fom = !git fetch && git merge origin/main
git po = git push origin
```

I would much rather spend the time to build up configuration and workflow that supports how I like to work rather than learn and adopt a workflow that someone else created. You can call it “not invented here” syndrome, but I think it’s really about building a system that you fully understand because you built it yourself from scratch. That goes for git or any other developer tool out there.

## Conclusion
[This article by Adam Tal](https://www.adamtal.me/2019/05/slow-down-to-speed-up) illustrates the point I’m trying to make here. You might always be working hard - trying to accomplish the next project, story, or ticket. Don’t forget to invest in learning and mastering the foundations of the tools you use everyday. You will most definitely make mistakes along the way, but sometimes that’s the best way to learn. The knowledge and increased comfortability with such an essential tool will be well worth the cost.

