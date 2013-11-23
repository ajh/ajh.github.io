---
layout: post
title:  "A Vim Cheat Sheet Part Three"
categories: vim
excerpt: "Description of CtrlP, Tagbar, NERDTree, ZoomWin and more."
---

# CtrlP

See `:help ctrlp`

| command          | description                                                                         |
| ---              | -------                                                                             |
| `<C-P><C-P>`     | Open CtrlP window in find file mode                                                 |
| `<C-P><C-U>`     | Open CtrlP window in find buffer mode                                               |
| :CtrlPClearCache | Clear caches. Useful when using find file mode if files have been added or removed. |

#### Opening buffers

Once inside the a CtrlP window, these keys open buffers.

| Open in prev window           | Open in vertical split | Open in horizontal split | Open in preview   | Open in tab         |
| -------------------           | ---------------------- | ------------------------ | ---------------   | -----------         |
| `<CR>`                        | `<C-V>`                | `<C-S>`                  |                   | `<C-T>`             |


There are also a bunch of extensions that I don't use currently, but can
be enabled. They allow fuzzy finding for bookmarkdir, buffertag,
changes, dir, line, mixed, quickfix, rtscript, tag, and undo.

# EasyMotion

See `:help easymotion`

Prefix any motion (like w, E) with `<leader><leader>` and it'll
highlight text to show possible destinations of the motion and allow
selecting them.

| command                  | description                        |
| ---                      | -------                            |
| `<leader><leader>motion` | highlight destinations of _motion_ |


# Fugitive

See `:help fugitive`

There are a bunch of commands. I only use a few currently.

| command  | description         |
| ---      | -------             |
| `:Ggrep` | grep using git-grep |

# indent-object

See `:help indent-object`

| text object keys | description                                        |
| ---              | -------                                            |
| `<count>ai`      | (A)n (I)ndentation level and line above            |
| `<count>ii`      | (I)nner (I)ndentation level (no line above)        |
| `<count>aI`      | (A)n (I)ndentation level and lines above/below     |
| `<count>iI`      | (I)nner (I)ndentation level (no lines above/below) |

# Tagbar

See `:help tagbar`

| command | description          |
| ---     | -------              |
| `<M-A>` | Toggle tagbar window |

# NERDTree

See `:help NERDTree`

| command      | description                                            |
| ---          | -------                                                |
| `<M-R><M-R>` | Toggle nerdtree window                                 |
| `<M-R><M-F>` | Toggle nerdtree window focused on current windows file |
| `?`          | Open help                                              |

#### Opening buffers

| Open in prev window | Open in vertical split | Open in horizontal split | Open in preview | Open in tab |
| ------------------- | ---------------------- | ------------------------ | --------------- | ----------- |
| `<CR>`              | `s`                    | `i`                      | `go`            | `t`         |

# Preview window

The preview window is a special window to show (preview) another file.

# Redir

See `:help redir`

Besides its use when vimscripting, this is mostly useful for
capturing the output of commands that echo a bunch of stuff like `:map`.

This'll write all the configure maps to a file:

{% highlight vim %}
:redir > maps.txt
:map
:redir END
{% endhighlight %}

# Rspec Tools

See `:help rspec-tools`

| command | description                                                 |
| ---     | -------                                                     |
| `[[`    | motion to previous `describe`, `context`, `module`, `class` |
| `]]`    | motion to next `describe`, `context`, `module`, `class`     |
| `[m`    | motion to previous `it`, `its`, `def`                       |
| `]m`    | motion to next `it`, `its`, `def`                           |

# spell

See `:help spell`

| command        | description                                 |
| ---            | -------                                     |
| `:set spell`   | turn on spell checking                      |
| `:set nospell` | turn it off                                 |
| `[s`           | move to previous misspelled word            |
| `]s`           | move to next misspelled word                |
| `z=`           | find suggestions for misspelled word        |
| `zg`           | add word under cursor to list of good words |

# ZoomWin

See `:help zoomwin`

| command    | description                       |
| ---        | -------                           |
| <C-W><C-M> | Toggle zooming for current window |
