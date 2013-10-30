---
layout: post
title:  "Opening buffers in vim"
categories: vim
---

How to open buffers into windows.

I use splits a lot, and I tend to create a split first, then load a
buffer into it. It'd be quicker if I got in the habit of using these
ways which do both with one command. This table boilings down the
available mappings by what are most useful.

| From where  | Open in prev window           | Open in vertical split | Open in horizontal split | Open in preview   | Open in tab         |
| ----------  | -------------------           | ---------------------- | ------------------------ | ---------------   | -----------         |
| nerdtree    | `<CR>`                        | `s`                    | `i`                      | `go`              | `t`                 |
| buffergator | `<CR>`                        | `s`, `<C-V>`           | `i`, `<C-S>`             | `go`              | `t`, `<C-T>`        |
| ctrl-p      | `<CR>`                        | `<C-V>`                | `<C-S>`                  |                   | `<C-T>`             |
| quickfix    | `<CR>`                        | `<C-W> <CR>` ?         | `<C-W> <CR>` ?           |                   |                     |
| commandline | `:e[dit] {file}`              | `:vs[plit] {file}`     | `:sp[lit] {file}`        | `:ped[it] {file}` | `:tabe[dit] {file}` |
| tags        | `:tj[ump] {ident}`, `g <C-]>` |                        | `:stj[ump] {ident}`      |                   |                     |
