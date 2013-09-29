---
layout: post
title:  "Vim Cheat Sheet Part One"
categories: vim
excerpt: "description of vim features"
---

# Vim Cheat Sheet Part One

As great as vim's text editing ability is, many other features are as
difficult to use and understand.

Even after a decade of use there are features that I know I should use
yet don't. I'll learn a feature, not use it in the heat of coding, then
forget what I learned. For a feature like jumplists, I've repeated this
process 10 times maybe.

Or I'll learn a useful fact but won't find it in help when I need
reminding. Like the `%` register. I've used it and its useful but if I
don't know to `:help register` then eventually I'll forget it.

What follows is a cheatsheet of vim features that I use most often so I
don't forget. Or they're some I aspire to use.

# Vim has a lot of lists

Like buffer lists, change lists, jump lists etc. These all need a
similar set of features and its important to know the commands for them.
Here's some common features:

- How to open list?
- close list?
- navigate list?
- Add to list?
- Remove from list?

# buffers with buffergator

see `:help buffergator`

- Open list: <Leader>b
- Close list: <Leader>b
- Navigate up down: j or k
- Add to list: n/a
- Remove from list: d

# jumps

see `:help jumps`
Each window has its own jump list.

- Open list: :ju[mps]
- navigate previous CTRL-0
- navigate next CTRL-I
- Add to list: n/a
- Remove from list: ?

# changelist

A list of cursor positions where changes (edits) were made.

See `:help changelist`

- Open list: changes
- Close list: ESC
- navigate previous g;
- navigate next g,
- Add to list
- Remove from list: ?

# marks

Bookmarks for cursor positions in a file.

See `:help mark-motions`

Lowercase marks 'a to 'z are remembered as long as the file remains in
the buffer list. Uppercase marks 'A to 'Z include the file name.  {Vi:
no uppercase marks} You can use them to jump from file to file.

- Open list :marks
- close list ESC
- navigate to mark \`{marks}
- Add mark m{a-zA-Z}
- remove mark :delm[arks] {marks} or :delm[arks]!

# registers

See `:help copy-move`

- Open list :reg[isters]
- display context of register :reg[isters] {arg} or :di[splay] {arg}
- close list ESC
- navigate
- To add prefix a command with "{arg} like "xyy to yank line to register
  x
- remove

## types of registers

This isn't a complete list, just ones I find useful

- "0 to "9 the last 10 deletion or change text
- "a to "z and "A to "Z named registers for the user to define
- "%	Contains the name of the current file. (It can be used with "%" on the command line |:\_%|.)
-	"#	Contains the name of the alternate file.
-	":	Contains the most recent executed command-line.  Example: Use "@:" to repeat the previous command-line command.

# alternate file

The alternate is most likely the previously edited file.

- toggle between current file and alternate file CTRL-^

# tags

My prefered ways to start a tag search:

- CTRL-] with cursor on keyword, goes to first match
- g CTRL-] (Like CTRL-], but opens tselect menu when more than one match)
- :tj[ump] {ident} (opens tselect menu when more than one match)

Jumping to a tag will create an item on the tag stack

- Open list :tags
- close list ESC
- previous :po[p] or CTRL-T
- next :ta[g]
- remove mark ?

## tag-matchlist

see `:help tag-matchlist`

A search may find several matching tags. Each match is put into a match
list.

- Open list :ts[elect]
- close list ESC
- navigate by typing number of desired match
- or next match :tn[ext], previous match :tp[revious]

# quickfix

Grep results are put in quickfix. Maybe someday I'll have test failures
here as well.

see `:help quickfix`

- Open list: :cope[n]
- close list: :ccl[ose]
- navigate in list jk
- navigate next :cn[ext]
- navigate previous :cp[revious]
- Add to list: n/a
- Remove from list: n/a

# undo branches

This adds branching to the basic undo (u and CTRL-R)

see `:help undo-branches`

- Open list: :undol[ist]
- close list: ESC
- go to older text state g-
- go to newer text state g+
