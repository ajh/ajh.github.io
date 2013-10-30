---
layout: post
title:  "Opening buffers in vim"
categories: vim
---

How to open buffers into windows.

| from where  | open in prev window           | open in vertical split | open in horizontal split   | open in preview   | open in tab         |
| ----------  | -------------------           | ---------------------- | ------------------------   | ---------------   | -----------         |
| nerdtree    | `o`, `<CR>`                   | `s`                    | `i`                        | `go`              | `t`                 |
| buffergator | `o`, `<CR>`                   | `s`, `<C-V>`           | `i`, `<C-S>`               | `O`, `go`         | `t`, `<C-T>`        |
| ctrl-p      | `<CR>`                        | `<C-V>`                | `<C-X>`, `<C-CR>`, `<C-S>` |                   | `<C-T>`             |
| quickfix    | `<CR>`                        | `<C-W> <CR>` ?         | `<C-W> <CR>` ?             |                   |                     |
| commandline | `:e[dit] {file}`              | `:vs[plit] {file}`     | `:sp[lit] {file}`          | `:ped[it] {file}` | `:tabe[dit] {file}` |
| tags        | `:tj[ump] {ident}`, `g <C-]>` |                        | `:stj[ump] {ident}`        |                   |                     |
