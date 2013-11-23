---
layout: post
title: My vim maps
categories: vim
excerpt:
  Explains the way I configure my maps and lists them for reference
---

# Introduction

Once a bunch of plugins are loaded, looking at their default mappings
shows a few problems. First they don't follow each others conventions.
Some use control characters, some use leaders. Also, they often don't
provide mappings to secondary features which I would like to have, like
NERDTreeFind, and it can difficult to choose a good mapping.

So I set out to reconceptualize my mappings. This page explains that and lists my maps for reference.

## Map namespaces

First of all, I can think of mapping keys as in different namespaces:

* `<leader>` + keys
* Control keys (like `<C-P>` for CtrlP)
* Alt keys
* `[` and `]` (used by motions)
* Ctrl-W window commands
* no-prefix, like `i` in normal mode to enter insert mode

The **leader** space is good because it's a known convention for user maps
and vim doesn't define any by default. My leader is ",". A practical
issue is left hand keys are easier to type after "," than right hand
keys.

**Control keys** are not so good because vim defines a lot of them and the
namespace is very crowed. Also, some have meaning for terminals like
`<C-S>` to suspend. My research found that only the following are
safe to use in normal mode:

    h, i, j, m, n, p, k.

I couldn't find any maps defined with **Alt keys**. The drawback I found
is that vim won't see them as `<M-X>` or `<A-X>` on OS X. Instead OS X
interprets them as international characters like `ñ`. But they can be used
if the maps are defined with these characters, like this:

    :map œ :echom 'alt q pressed'<CR>

Also on OS X, some alt characters modify the next character, by adding a
tilde for example. These are \`, e, u, i, n. I also found others that don't seem to work: b, t.

In sum, avoid these:

    `, b, e, i, n, t, u

**Motion keys** are great but should only be used by motions.

**Ctrl-W window keys** are like `<C-W>v` which creates a vertical split.
These keys all modify windows. Many keys are already defined.

**No-prefix keys** are used by vim. I'm not sure if any are available
for maps.

## map scopes

I haven't needed this for my customizations, but maps can be scoped to a
buffer and to a mode like normal or visual.

## types of plugins

I can categorize plugin features into a few types:

* motion
* navigation
* text transform (selected with a motion or visual mode)
* window related (I include features which open in a window, like NERDTree)
* fuzzy find

## my concept

Here's what I'm going with:

1. Window related functions use alt keys.
2. Plugins with multiple maps all start with a common prefix. Nerdtree uses
`<M-R>` as a prefix for example.

# Buffergator

Prefix is `<M-F>`, categories *change window*, *navigate*

TODO: I'm missing [b and ]b maps

| map     | command                    |
| ---     | -------                    |
| `<M-F>` | `:BuffergatorToggle()<CR>` |

# CtrlP

Prefix is `<C-P>`, categories are *change window*, *fuzzy find*.

| map          | command            |
| ---          | -------            |
| `<C-P><C-P>` | `:CtrlP<CR>`       |
| `<C-P><C-U>` | `:CtrlPBuffer<CR>` |

# Easy Motion

Prefix is `<leader><leader>`, category is *motion*

| map    | command                               |
| ---    | -------                               |
| `,,w`  | `* :call EasyMotion#WB(0, 0)<CR>`     |
| `,,t`  | `* :call EasyMotion#T(0, 0)<CR>`      |
| `,,n`  | `* :call EasyMotion#Search(0, 0)<CR>` |
| `,,k`  | `* :call EasyMotion#JK(0, 1)<CR>`     |
| `,,j`  | `* :call EasyMotion#JK(0, 0)<CR>`     |
| `,,gE` | `* :call EasyMotion#EW(0, 1)<CR>`     |
| `,,f`  | `* :call EasyMotion#F(0, 0)<CR>`      |
| `,,e`  | `* :call EasyMotion#E(0, 0)<CR>`      |
| `,,b`  | `* :call EasyMotion#WB(0, 1)<CR>`     |
| `,,W`  | `* :call EasyMotion#WBW(0, 0)<CR>`    |
| `,,T`  | `* :call EasyMotion#T(0, 1)<CR>`      |
| `,,N`  | `* :call EasyMotion#Search(0, 1)<CR>` |
| `,,ge` | `* :call EasyMotion#E(0, 1)<CR>`      |
| `,,F`  | `* :call EasyMotion#F(0, 1)<CR>`      |
| `,,E`  | `* :call EasyMotion#EW(0, 0)<CR>`     |
| `,,B`  | `* :call EasyMotion#WBW(0, 1)<CR>`    |

# Fugitive

Prefix is `<leader>g`

TODO: add a map to Ggrep which I use most often

| map   | command         |
| ---   | -------         |
| `,gp` | `:Git push<CR>` |
| `,gc` | `:Gcommit<CR>`  |
| `,gl` | `:Glog<CR>`     |
| `,gd` | `:Gdiff<CR>`    |
| `,gs` | `:Gstatus<CR>`  |
| `,gb` | `:Gblame<CR>`   |

# gundo

Categories are *opens a window*, *navigate*

| map     | command            |
| ---     | -------            |
| `<M-G>` | `:GundoToggle<CR>` |

# indent object

Category is *motion*

| map  | command                                                                                                           |
| ---  | -------                                                                                                           |
| `aI` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(0, 1, 1, [line("'<"), line("'>"), col("'<"), col("'>")])<CR><Esc>gv` |
| `aI` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(0, 1, 0, [line("."), line("."), col("."), col(".")])<CR>`            |
| `ai` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(0, 0, 1, [line("'<"), line("'>"), col("'<"), col("'>")])<CR><Esc>gv` |
| `ai` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(0, 0, 0, [line("."), line("."), col("."), col(".")])<CR>`            |
| `iI` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(1, 1, 1, [line("'<"), line("'>"), col("'<"), col("'>")])<CR><Esc>gv` |
| `iI` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(1, 1, 0, [line("."), line("."), col("."), col(".")])<CR>`            |
| `ii` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(1, 0, 1, [line("'<"), line("'>"), col("'<"), col("'>")])<CR><Esc>gv` |
| `ii` | `* :<C-U>cal <SNR>61_HandleTextObjectMapping(1, 0, 0, [line("."), line("."), col("."), col(".")])<CR>`            |

# Inflector (my plugin)

Prefix is `<leader>i`, category is *text transform*

| map   | command             |
| ---   | -------             |
| `,ii` | `:call Inflector()` |

# janus

| map        | command                             |
| ---        | -------                             |
| `<C-W>!`   | `Kwbd`                              |
| `,=`       | `<C-W>=`                            |
| `,hs`      | `:set hlsearch! hlsearch?<CR>`      |
| `,fc`      | `<Esc>/\v^[<=>]{7}( .*`             |
| `,tw`      | `:set invwrap<CR>:set wrap?<CR>`    |
| `,ul`      | `:t.<CR>Vr=`                        |
| `,et`      | `:tabe <C-R>=expand('%:h').'/'<CR>` |
| `,ev`      | `:vsp <C-R>=expand('%:h').'/'<CR>`  |
| `,es`      | `:sp <C-R>=expand('%:h').'/'<CR>`   |
| `,ew`      | `:e <C-R>=expand('%:h').'/'<CR>`    |
| `,md`      | `:!mkdir -p %:p:h<CR>`              |
| `,cd`      | `:lcd %:h<CR>`                      |
| `,L`       | `mQgewvu`Q`                         |
| `,U`       | `mQgewvU`Q`                         |
| `,l`       | `mQviwu`Q`                          |
| `,u`       | `mQviwU`Q`                          |
| `,fef`     | `* :normal! gg=G``<CR>`             |
| `<F4>`     | `:set invpaste<CR>:set paste?<CR>`  |
| `<D-9>`    | `9gt`                               |
| `<D-8>`    | `8gt`                               |
| `<D-7>`    | `7gt`                               |
| `<D-6>`    | `6gt`                               |
| `<D-5>`    | `5gt`                               |
| `<D-4>`    | `4gt`                               |
| `<D-3>`    | `3gt`                               |
| `<D-2>`    | `2gt`                               |
| `<D-1>`    | `1gt`                               |
| `<D-0>`    | `0gt`                               |
| `<D-j>`    | `]egv`                              |
| `<D-k>`    | `[egv`                              |
| `<D-Down>` | `* <C-End>`                         |
| `<D-Up>`   | `* <C-Home>`                        |
| `<D-j>`    | `]e`                                |
| `<D-k>`    | `[e`                                |
| `<D-[>`    | `<<`                                |
| `<D-]>`    | `>>`                                |
| `<D-[>`    | `<<`                                |
| `<D-]>`    | `>>`                                |
| `<D-[>`    | `<gv`                               |
| `<D-]>`    | `>gv`                               |
| `<Up>`     | `gk`                                |
| `<Down>`   | `gj`                                |
| `<BS>`     | `"-d`                               |

# matchit

Category is *motion*

| map  | command                                                   |
| ---  | -------                                                   |
| `[%` | `* v:<C-U>call <SNR>63_MultiMatch("bW", "o") <CR>`        |
| `[%` | `<Esc>[%m'gv`                                           |
| `[%` | `* :<C-U>call <SNR>63_MultiMatch("bW", "n") <CR>`         |
| `]%` | `* v:<C-U>call <SNR>63_MultiMatch("W",  "o") <CR>`        |
| `]%` | `<Esc>]%m'gv`                                           |
| `]%` | `* :<C-U>call <SNR>63_MultiMatch("W",  "n") <CR>`         |
| `g%` | `* v:<C-U>call <SNR>63_Match_wrapper('',0,'o') <CR>`      |
| `g%` | `* :<C-U>call <SNR>63_Match_wrapper('',0,'v') <CR>m'gv`   |
| `g%` | `* :<C-U>call <SNR>63_Match_wrapper('',0,'n') <CR>`       |

# my settings

## motions

| map                | command                               |
| ---                | -------                               |
| `<C-K>`            | `10k`                                 |
| `<C-J> (aka <NL>)` | `10j`                                 |

## text transforms

| map                | command                               |
| ---                | -------                               |
| `,$`               | `:call Preserve("%s/\\s\\+$//e")<CR>` |

# NERDCommenter

Prefix is `<leader>c`, category is *text transform*

| map         | command                    |
| ---         | -------                    |
| `,cc`       | `NERDCommenterComment`     |
| `,cu`       | `NERDCommenterUncomment`   |
|             | **below I use less often** |
| `,ca`       | `NERDCommenterAltDelims`   |
| `,cb`       | `NERDCommenterAlignBoth`   |
| `,cl`       | `NERDCommenterAlignLeft`   |
| `,cA`       | `NERDCommenterAppend`      |
| `,cy`       | `NERDCommenterYank`        |
| `,cs`       | `NERDCommenterSexy`        |
| `,ci`       | `NERDCommenterInvert`      |
| `,c$`       | `NERDCommenterToEOL`       |
| `,cn`       | `NERDCommenterNested`      |
| `,cm`       | `NERDCommenterMinimal`     |
| `,c<Space>` | `NERDCommenterToggle`      |
| `<D-/k>`    | `NERDCommenterToggle<CR>`  |

# NERDTree

Prefix is `<M-R>`, categories are *change window*, *navigate*.

| map          | command               |
| ---          | -------               |
| `<M-R><M-R>` | `:NERDTreeToggle<CR>` |
| `<M-R><M-F>` | `:NERDTreeFind<CR>`   |

# Surround

Category: *text transform*

TODO: consider using a `<leader>s` prefix for all of these

| map   | command      |
| ---   | -------      |
| `cs`  | `Csurround`  |
| `ds`  | `Dsurround`  |
| `gS`  | `VgSurround` |
| `ySS` | `YSsurround` |
| `ySs` | `YSsurround` |
| `yss` | `Yssurround` |
| `yS`  | `YSurround`  |
| `ys`  | `Ysurround`  |
| `S`   | `VSurround`  |

# Tagbar

Category is *opens a window*

| map   | command             |
| ---   | -------             |
| `<M-A>` | `:TagbarToggle<CR>` |

# unimpaired

| map        | command                                                 |
| ---        | -------                                                 |
| `<P`       | `* :call <SNR>99_putline('[p')<CR><']`                  |
| `<p`       | `* :call <SNR>99_putline(']p')<CR><']`                  |
| `=P`       | `* :call <SNR>99_putline('[p')<CR>=']`                  |
| `=p`       | `* :call <SNR>99_putline(']p')<CR>=']`                  |
| `>P`       | `* :call <SNR>99_putline('[p')<CR>>']`                  |
| `>p`       | `* :call <SNR>99_putline(']p')<CR>>']`                  |
| `[<C-L>`   | `unimpairedLPFile`                                      |
| `[<C-Q>`   | `unimpairedQPFile`                                      |
| `[<Space>` | `unimpairedBlankUp`                                     |
| `[A`       | `unimpairedAFirst`                                      |
| `[B`       | `unimpairedBFirst`                                      |
| `[L`       | `unimpairedLFirst`                                      |
| `[Q`       | `unimpairedQFirst`                                      |
| `[T`       | `unimpairedTFirst`                                      |
| `[a`       | `unimpairedAPrevious`                                   |
| `[b`       | `unimpairedBPrevious`                                   |
| `[e`       | `unimpairedMoveUp`                                      |
| `[f`       | `unimpairedDirectoryPrevious`                           |
| `[l`       | `unimpairedLPrevious`                                   |
| `[n`       | `unimpairedContextPrevious`                             |
| `[o`       | `unimpairedOPrevious`                                   |
| `[oc`      | `* :set cursorline<CR>`                                 |
| `[od`      | `* :diffthis<CR>`                                       |
| `[oh`      | `* :set hlsearch<CR>`                                   |
| `[oi`      | `* :set ignorecase<CR>`                                 |
| `[ol`      | `* :set list<CR>`                                       |
| `[on`      | `* :set number<CR>`                                     |
| `[or`      | `* :set relativenumber<CR>`                             |
| `[os`      | `* :set spell<CR>`                                      |
| `[ou`      | `* :set cursorcolumn<CR>`                               |
| `[ow`      | `* :set wrap<CR>`                                       |
| `[ox`      | `* :set cursorline cursorcolumn<CR>`                    |
| `[p`       | `unimpairedPutAbove`                                    |
| `[q`       | `unimpairedQPrevious`                                   |
| `[t`       | `unimpairedTPrevious`                                   |
| `[u`       | `unimpaired_url_encode`                                 |
| `[uu`      | `unimpaired_line_url_encode`                            |
| `[x`       | `unimpaired_xml_encode`                                 |
| `[xx`      | `unimpaired_line_xml_encode`                            |
| `[y`       | `unimpaired_string_encode`                              |
| `[yy`      | `unimpaired_line_string_encode`                         |
| `]<C-L>`   | `unimpairedLNFile`                                      |
| `]<C-Q>`   | `unimpairedQNFile`                                      |
| `]<Space>` | `unimpairedBlankDown`                                   |
| `]A`       | `unimpairedALast`                                       |
| `]B`       | `unimpairedBLast`                                       |
| `]L`       | `unimpairedLLast`                                       |
| `]Q`       | `unimpairedQLast`                                       |
| `]T`       | `unimpairedTLast`                                       |
| `]a`       | `unimpairedANext`                                       |
| `]b`       | `unimpairedBNext`                                       |
| `]e`       | `unimpairedMoveDown`                                    |
| `]f`       | `unimpairedDirectoryNext`                               |
| `]l`       | `unimpairedLNext`                                       |
| `]n`       | `unimpairedContextNext`                                 |
| `]o`       | `unimpairedONext`                                       |
| `]oc`      | `* :set nocursorline<CR>`                               |
| `]od`      | `* :diffoff<CR>`                                        |
| `]oh`      | `* :set nohlsearch<CR>`                                 |
| `]oi`      | `* :set noignorecase<CR>`                               |
| `]ol`      | `* :set nolist<CR>`                                     |
| `]on`      | `* :set nonumber<CR>`                                   |
| `]or`      | `* :set norelativenumber<CR>`                           |
| `]os`      | `* :set nospell<CR>`                                    |
| `]ou`      | `* :set nocursorcolumn<CR>`                             |
| `]ow`      | `* :set nowrap<CR>`                                     |
| `]ox`      | `* :set nocursorline nocursorcolumn<CR>`                |
| `]p`       | `unimpairedPutBelow`                                    |
| `]q`       | `unimpairedQNext`                                       |
| `]t`       | `unimpairedTNext`                                       |
| `]u`       | `unimpaired_url_decode`                                 |
| `]uu`      | `unimpaired_line_url_decode`                            |
| `]x`       | `unimpaired_xml_decode`                                 |
| `]xx`      | `unimpaired_line_xml_decode`                            |
| `]y`       | `unimpaired_string_decode`                              |
| `]yy`      | `unimpaired_line_string_decode`                         |
| `coc`      | `* :set <C-R>=<SNR>99_toggle("cursorline")<CR><CR>`     |
| `coh`      | `* :set <C-R>=<SNR>99_toggle("hlsearch")<CR><CR>`       |
| `coi`      | `* :set <C-R>=<SNR>99_toggle("ignorecase")<CR><CR>`     |
| `col`      | `* :set <C-R>=<SNR>99_toggle("list")<CR><CR>`           |
| `con`      | `* :set <C-R>=<SNR>99_toggle("number")<CR><CR>`         |
| `cor`      | `* :set <C-R>=<SNR>99_toggle("relativenumber")<CR><CR>` |
| `cos`      | `* :set <C-R>=<SNR>99_toggle("spell")<CR><CR>`          |
| `cou`      | `* :set <C-R>=<SNR>99_toggle("cursorcolumn")<CR><CR>`   |
| `cow`      | `* :set <C-R>=<SNR>99_toggle("wrap")<CR><CR>`           |
| `yA`       | `* :call <SNR>99_setup_paste()<CR>A`                    |
| `yI`       | `* :call <SNR>99_setup_paste()<CR>I`                    |
| `yO`       | `* :call <SNR>99_setup_paste()<CR>O`                    |
| `yP`       | `* :call <SNR>99_setup_paste()<CR>i`                    |
| `ygI`      | `* :call <SNR>99_setup_paste()<CR>gI`                   |
| `ygi`      | `* :call <SNR>99_setup_paste()<CR>gi`                   |
| `yo`       | `* :call <SNR>99_setup_paste()<CR>o`                    |
| `yp`       | `* :call <SNR>99_setup_paste()<CR>a`                    |

# ZoomWin

Category is *opens a window*

| map          | command        |
| ---          | -------        |
| `<C-W><C-M>` | `:ZoomWin<CR>` |

# Notes

## How to see all mappings

    :redir > maps.txt
    :silent map
    :redir END
    :e maps.txt
