---
layout: post
title:  "A Vim Cheat Sheet Part Two"
categories: vim
excerpt: "description of vim features"
---

Here are some more vim features. See <a href="{{ site.url }}/vim/2013/09/29/vim_cheat_sheet_part_one.html">part one of the cheat sheet</a> here.

# record

See `:help complex-repeat`

How to edit a recorded macro:

1. First record the macro using qq
1. type `:let @q='` Then `CTRL-R CTRL-R q` which will insert the text
   under the cursor (see `:help c_CTRL-R_CTRL-R`)
1. Edit the text
1. close the quote and press enter

# preview window

The preview window is a special window to show (preview) another file.

# NERDTree

# Command line

`:help cmdline-editing`

The most useful trick is opening the Command line window. See `:help cmdline-window`

> In the command-line window the command line can be edited just like editing
> text in any window.  It is a special kind of window, because you cannot leave
> it in a normal way.

Press CTRL-f to edit the command line text in insert mode.

# TODO

* CTRLP
* Tagbar
* EasyMotion
* Fugitive
* ZoomWin

Common patterns of use:
* list and select within list
* next previous and other navigation
* delete from list
* open list window, close list window

And how I use them

