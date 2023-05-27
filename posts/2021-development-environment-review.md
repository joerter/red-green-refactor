## Introduction
I recently had this idea to write about my current dev environment every year. I thought it would be fun to keep track of how the tools I'm using every day change and evolve over time. And since it's still February 2022, I figure it's not too late for a 2021 recap post.

## My Tech Stack
This year, I transitioned to full-stack JavaScript / TypeScript development. I spend the majority of my time in Node.js and React projects deployed on serverless AWS. Prior to 2021, I spent more time in the C# / Microsoft ecosystem. C# is an amazing language and Visual Studio is a powerful IDE, but I am very happy with my new JavaScript based tech stack.

## Desktop - macOS and elementary OS

I currently split time between Linux and macOS. I've been a Linux user for years and have primarily used Ubuntu and other Ubuntu-based distros. I switched to [elementary OS](https://elementary.io/) earlier this year and have really enjoyed it. Even though I have used Linux for a long time, I don't really enjoy fighting with updates or spending lots of time configuring my desktop environment. Elementary gives me the best out of the box experience I've found on Linux so far. All that being said, my Linux laptop is getting old, and I'm planning on buying a MacBook to replace it. I've been eyeing the M1 for awhile, and I think it's the best choice for me right now. If [System 76](https://system76.com/) ever releases a laptop made in house like the [Thelio](https://system76.com/desktops/thelio-major) or [Launch Keyboard](https://system76.com/accessories/launch), I will definitely check it out. 

## Editor - NeoVim

My VIM setup with [Neovim](https://neovim.io/) has never been better. I've gone back and forth on using VsCode, Emacs, and JetBrains IDEs instead of VIM in the past, but I keep coming back. Almost every editor these days has VIM emulation, but at the end of the day **only VIM is VIM**. What I mean by that is even the best VIM emulator running in another editor falls short of the real thing in some way. I made a real effort to switch to Emacs at the end of 2021 by following [System Crafters](https://www.youtube.com/c/SystemCrafters) Emacs from Scratch series. The videos were really excellent and I learned a lot, but in the end, I couldn't quite get over the performance issues with Emacs and switched back to Neovim. I fully expect to maybe flop back and forth on this position in the future, so I'm very curious to see where I'm at a year from now.

Luckily, there is a lot of development going on in the Neovim ecosystem and many great plugins are taking advantage of the new Lua integration. I can now easily have an LSP configuration that gives great autocomplete similar to VsCode. Here are a few of my favorite plugins:

- [lspsaga](https://github.com/glepnir/lspsaga.nvim)
- [nvim-telescope](https://github.com/nvim-telescope/telescope.nvim)
- [nvim-tree](https://github.com/kyazdani42/nvim-tree.lua)
- [trouble.nvim](https://github.com/folke/trouble.nvim)
- [vim-fugitive](https://github.com/tpope/vim-fugitive)
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)
- [bufferline.nvim](https://github.com/akinsho/bufferline.nvim)

Here's a screenshot of my current Neovim session:

![nvim.png](/2021-development-environment-review/nvim.png)

I'm using the [Dracula](https://draculatheme.com/) colorscheme everywhere I can.

## Terminal - Alacritty, tmux, and zsh

[Alacritty](https://github.com/alacritty/alacritty) has been my terminal emulator of choice this year. It's easy to configure using yml files so I can share my configuration between machines. Tmux is a vital piece of my workflow for organizing my sessions and windows. 

Zsh along with [Oh My Zsh](https://ohmyz.sh/) has been my shell for years now. I make heavy use of the [cdc](https://github.com/evanthegrayt/cdc) and [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) for moving between repos.

[Link to my dotfiles repo on GitHub](https://github.com/joerter/dotfiles)

Discuss on [Hacker News](https://news.ycombinator.com/item?id=30490640) or [Dev.to](https://dev.to/joerter/2021-development-environment-review-34nl)
