---
layout: post
title:  "A Vim Cheat Sheet Part Two"
categories: vim
excerpt: "Description of command line, record, and help grep"
---

This is a continuation of my cheat sheet. Here are descriptions of the way I use some more vim features.

Also see <a href="{{ site.url }}/vim/2013/09/29/vim_cheat_sheet_part_one.html">Vim Cheat Sheet Part One</a>.

# command line

`:help cmdline-editing`

The most useful trick is opening the Command line window. See `:help cmdline-window`

> In the command-line window the command line can be edited just like editing
> text in any window.  It is a special kind of window, because you cannot leave
> it in a normal way.

Press `<C-f>` to edit the command line text in insert mode.

# record

See `:help complex-repeat`

Since recording a macro is kinda simple, I'll omit that. The biggest
thing to remember is how to edit a recorded macro:

1. First record the macro using qq
1. Type `:let @q='` Then `<C-R><C-R>q` which will insert the text
   under the cursor (see `:help c_CTRL-R_CTRL-R`)
1. Edit the text
1. Close the quote and press enter

Note: `<C-R><C-R>` can also be used in the command line window.

# helpgrep

See `:help :helpgrep`

Greps through the help and builds a quickfix list of matches. Works
better than :help when trying to find something without knowing its
name. Or when there's a name conflict. If neither work just google it.
