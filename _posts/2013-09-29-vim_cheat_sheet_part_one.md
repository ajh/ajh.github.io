---
layout: post
title:  "Vim Cheat Sheet Part One"
categories: vim
---

This is my personal vim cheatsheet. The features described here are ones
that I find most useful. I've also tried to select the best commands to
interact with a feature.

This is part one. I plan to write up more features later.

--------------------------
# buffers with buffergator

see `:help buffergator`

| command     | description         |
| -------     | -----------         |
| \<Leader\>b | open list           |
| \<Leader\>b | close list          |
| j or k      | navigate up or down |
|             | add to list         |
| d           | remove from list    |

-------
# jumps

see `:help jumps`
Each window has its own jump list.

| command  | description       |
| -------  | -----------       |
| :ju[mps] | Open list:        |
| CTRL-0   | navigate previous |
| CTRL-I   | navigate next     |

------------
# changelist

A list of cursor positions where changes (edits) were made.

See `:help changelist`

| command  | description       |
| -------  | -----------       |
| :changes | Open list:        |
| ESC      | Close list:       |
| g;       | navigate previous |
| g,       | navigate next     |

-------
# marks

Bookmarks for cursor positions in a file.

See `:help mark-motions`

Lowercase marks 'a to 'z are remembered as long as the file remains in
the buffer list. Uppercase marks 'A to 'Z include the file name.  {Vi:
no uppercase marks} You can use them to jump from file to file.

| command                             | description      |
| -------                             | -----------      |
| :marks                              | Open list        |
| ESC                                 | close list       |
| \`{marks}                           | navigate to mark |
| m{a-zA-Z}                           | Add mark         |
| :delm[arks] {marks} or :delm[arks]! | remove mark      |

-----------
# registers

See `:help copy-move`

| command                                                           | description                 |
| -------                                                           | -----------                 |
| :reg[isters]                                                      | Open list                   |
| :reg[isters] {arg} or :di[splay] {arg}                            | display context of register |
| ESC                                                               | close list                  |
| prefix a command with "{arg} like "xyy to yank line to register x | To add                      |

## types of registers

This isn't a complete list, just ones I find useful

- "0 to "9 the last 10 deletion or change text
- "a to "z and "A to "Z named registers for the user to define
- "%	Contains the name of the current file. (It can be used with "%" on the command line |:\_%|.)
-	"#	Contains the name of the alternate file.
-	":	Contains the most recent executed command-line.  Example: Use "@:" to repeat the previous command-line command.

----------------
# alternate file

The alternate is most likely the previously edited file.

| command | description                                    |
| ------- | -----------                                    |
| CTRL-^  | toggle between current file and alternate file |

------
# tags

See `:help tags`

My preferred ways to start a tag search:

- CTRL-] with cursor on keyword, goes to first match
- g CTRL-] (Like CTRL-], but opens tselect menu when more than one match)
- :tj[ump] {ident} (opens tselect menu when more than one match)

Jumping to a tag will create an item on the tag stack

| command          | description |
| -------          | ----------- |
| :tags            | Open list   |
| ESC              | close list  |
| :po[p] or CTRL-T | previous    |
| :ta[g]           | next        |

## tag-matchlist

see `:help tag-matchlist`

A search may find several matching tags. Each match is put into a match
list.

| command                        | description    |
| -------                        | -----------    |
| :ts[elect]                     | Open list      |
| ESC                            | close list     |
| typing number of desired match | navigate       |
| :tn[ext]                       | or next match  |
| :tp[revious]                   | previous match |

----------
# quickfix

Grep results are put in quickfix. Maybe someday I'll have test failures
here as well.

see `:help quickfix`

| command      | description       |
| -------      | -----------       |
| :cope[n]     | Open list:        |
| :ccl[ose]    | close list:       |
| jk           | navigate in list  |
| :cn[ext]     | navigate next     |
| :cp[revious] | navigate previous |

---------------
# undo branches

*Update: See `:help gundo` for a better way to interact with this.*

This adds branching to the basic undo (u and CTRL-R)

see `:help undo-branches`

| command     | description            |
| -------     | -----------            |
| :undol[ist] | Open list:             |
| ESC         | close list:            |
| g-          | go to older text state |
| g+          | go to newer text state |
