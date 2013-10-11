---
layout: post
title:  "A Vim Cheat Sheet Part Three"
categories: vim
excerpt: "description of vim features"
---

Here are some more vim features. See <a href="{{ site.url }}/vim/2013/09/29/vim_cheat_sheet_part_one.html">part one of the cheat sheet</a> here.

*TODO*: add link to part two.

# preview window

The preview window is a special window to show (preview) another file.

# NERDTree

# Configuration

Theres the big topic of configuring keybindings. I could have a table of
<leader>[a-zA-Z] and map which plugin owns each letter. I think I'm
going to have to move to a two letter keybinding system.

# Redir

Besides its use when vimscripting, this is mostly useful for
capturing the output of commands that echo a bunch of stuff like `:map`.

This'll write all the configure maps to a file:

{% highlight vim %}
:redir > maps.txt
:map
:redir END
{% endhighlight %}

# Lists and how I interact with them

Opening files:

* navigate with NERDTree
* fuzzy match with CtrlP

Switching buffers:

* navigate with buffergator
* don't have fuzzy match, although this could be built
* switch to alternate file
* jumplist

Both files and buffers can be opened by:

* search with grep
* search with tags

# TODO

* CTRLP
* Tagbar
* EasyMotion
* indent-object
* Fugitive
* ZoomWin
* my vim plugins
* motions like [[ and [m

Common patterns of use:
* list and select within list
* next previous and other navigation
* delete from list
* open list window, close list window

And how I use them

Questions:
* Why does indent-object only work to select text in visual mode? But
  the ruby plugin adds motions like [m. Are they interchangable.

