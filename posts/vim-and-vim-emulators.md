---
title: Vim and Vim Emulators
date: '2020-11-16'
description: Why I use Vim emulators instead of pure vim.
coverImagePath: '/vim-and-vim-emulators/cover.png'
tags:
    - vim
---

## Introduction

I recently scored a license to the [Rider IDE](https://www.jetbrains.com/rider/) from JetBrains through work. 
I've been a Resharper user for years, but this is the first time I've used a full JetBrains IDE. 
I have to say that I'm really enjoying it. This is also my first experience with JetBrains' Vim emulator,
[IdeaVim](https://plugins.jetbrains.com/plugin/164-ideavim).

I've been a Vim user since being required to use it in my intro to programming course in college.
Like many Vim users, I've gone back and forth between using and believing in a pure Vim setup, and using
the Vim emulators that are available for pretty much every IDE and editor.

Today, I believe I have settled on using Vim emulators. Here's why:

## IDE-like Vim Configuration Is Hard

I've spent a good chunk of time fine-tuning my [.vimrc](https://github.com/joerter/vim), 
but there have always been a few
features that seem just out of my reach to get working perfectly. Auto-completion is a perfect example. 
I've tried [coc.nvim](https://github.com/neoclide/coc.nvim) and others, but I still can't seem to 
achieve the level of auto completion that comes out of the box in VSCode, Visual Studio, or the JetBrains products.

This isn't because these Vim plugins are buggy or low quality, it's just that the amount
of work it takes to install the plugins, learn how to use them effectively, and maintain
them across updates is really hard to stomach when I can download any of the IDEs I mentioned
earlier and get this functionality working almost perfectly without any extra work.

It's the struggle between taking the time build a setup that is made specifically for my needs and tastes versus
accepting an environment that may not check all the boxes, but allows me to be productive from day one.

## Vim Emulators Are Good and Getting Better

The three main Vim emulators I've used are [VsVim for Visual Studio](https://github.com/VsVim/VsVim),
[VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim), 
and [IdeaVim](https://plugins.jetbrains.com/plugin/164-ideavim). I've had generally good experiences with all of them,
and they can all effectively emulate the main features of Vim that I find useful. As long as I can use the standard
motions and keybindings and create some simple `imap` and `nmap` rules, I'm happy. If the emulator supports macros and 
relative line numbers that's even better.

One of the most important features to me is the ability to switch from INSERT mode to NORMAL mode easily by typing
"jk". I made the switch to this a long time ago to save myself the time of reaching for the ESCAPE key or 
using the CTRL-[ shortcut. I would suspect this is a difficult effect to achieve in an editor that doesn't 
support modal editing natively, but all the emulators above are able to mimic this flawlessly.

![vim.gif](/vim-and-vim-emulators/vim.gif)

## Conclusion

I still see myself dropping into Vim if I need to quickly edit a file, but I believe the days of
making constant tweaks to my .vimrc are over. Vim (including emulators) continues to be highly relevant to today's
 developers, and offers a substantial productivity boost to those that take the time to learn to use it effectively.
 If you're interested in taking the plunge to learn Vim, I would recommend checking out 
 [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/) and [Vimcasts](http://vimcasts.org/).
 However, I think the best way is the old fashioned one of starting up [Vim Tutor](https://linux.die.net/man/1/vimtutor)
 and practicing regularly with code katas until the keybindings become second nature.

