---
layout: post
title:  "My vim map configuration"
categories: vim
---

I'm starting to have more plugins loaded, and am puzzled how to
configure maps for their commands. Seems like most of the plugins try to
configure one letter maps, like `<leader>n`. I'm now thinking
something...

map namespaces:

* none
* `<leader>` (in my case comma)
* Control (like `<c-p>` for CtrlP)
* [ and ] for motions

Also modes can come into play and maps can be scoped to a buffer.

# Philosophy

Theres the big topic of configuring keybindings. I could have a table of
`<leader>[a-zA-Z]` and map which plugin owns each letter. I think I'm
going to have to move to a two letter keybinding system.

For leader maps, I'm thinking of using two letter names. Each plugins
gets its own prefix, like `<leader>c` for NERDCommenter, and the second
letter specifies the command. If there is a primary command for the
plugin, that would be called by a repetition of the first letter
`<leader>cc` for NERDCommenter's Toggle for instance.

plugin gets its own first letter, and the second letter chooses the
command within that plugin.

# My settings

| map                | command                               |
| ---                | -------                               |
| `<C-K>`            | `10k`                                 |
| `<C-J> (aka <NL>)` | `10j`                                 |
| `,$`               | `:call Preserve("%s/\\s\\+$//e")<CR>` |
| `,s`               | `:sp<CR>`                             |
| `,v`               | `:vsp<CR>`                            |

# CtrlP

| map     | command      |
| ---     | -------      |
| `<C-P>` | `:CtrlP`     |
|         | :CtrlPBuffer |
| `<D-t>` | `:CtrlP<CR>` |

# NERDTree

| map  | command                                   |
| ---  | -------                                   |
| `,f` | `:NERDTreeFind<CR>`                       |
| `,n` | `:NERDTreeToggle<CR> :NERDTreeMirror<CR>` |

# NERDCommenter

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

# ZoomWin

| map      | command        |
| ---      | -------        |
| `,zw`    | `:ZoomWin<CR>` |
| `<C-W>o` | `ZoomWin`      |

# Tagbar

| map   | command             |
| ---   | -------             |
| `,rt` | `:TagbarToggle<CR>` |

# Fugitive

| map   | command         |
| ---   | -------         |
| `,gp` | `:Git push<CR>` |
| `,gc` | `:Gcommit<CR>`  |
| `,gl` | `:Glog<CR>`     |
| `,gd` | `:Gdiff<CR>`    |
| `,gs` | `:Gstatus<CR>`  |
| `,gb` | `:Gblame<CR>`   |

# Inflector (my plugin)

| map   | command             |
| ---   | -------             |
| `,ii` | `:call Inflector()` |

# Easy Motion

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

# Buffergator

| map          | command                                                  |
| ---          | -------                                                  |
| `,<S-Down>`  | `* :BuffergatorMruCycleNext rightbelow sbuffer<CR>`      |
| `,<S-Right>` | `* :BuffergatorMruCycleNext rightbelow vert sbuffer<CR>` |
| `,<S-Up>`    | `* :BuffergatorMruCycleNext leftabove sbuffer<CR>`       |
| `,<S-Left>`  | `* :BuffergatorMruCycleNext leftabove vert sbuffer<CR>`  |
| `,<Down>`    | `* :BuffergatorMruCyclePrev rightbelow sbuffer<CR>`      |
| `,<Right>`   | `* :BuffergatorMruCyclePrev rightbelow vert sbuffer<CR>` |
| `,<Up>`      | `* :BuffergatorMruCyclePrev leftabove sbuffer<CR>`       |
| `,<Left>`    | `* :BuffergatorMruCyclePrev leftabove vert sbuffer<CR>`  |
| `,T`         | `* :BuffergatorTabsClose<CR>`                            |
| `,t`         | `* :BuffergatorTabsOpen<CR>`                             |
| `,B`         | `* :BuffergatorClose<CR>`                                |
| `,b`         | `* :BuffergatorOpen<CR>`                                 |
| `Â`          | `* :BuffergatorMruCycleNext<CR>`                         |
| `â`          | `* :BuffergatorMruCyclePrev<CR>`                         |

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

# Surround


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

# matchit

| map  | command                                                   |
| ---  | -------                                                   |
| `[%` | `* v:<C-U>call <SNR>63_MultiMatch("bW", "o") <CR>`        |
| `[%` | `<Esc>[%m'gv```                                           |
| `[%` | `* :<C-U>call <SNR>63_MultiMatch("bW", "n") <CR>`         |
| `]%` | `* v:<C-U>call <SNR>63_MultiMatch("W",  "o") <CR>`        |
| `]%` | `<Esc>]%m'gv```                                           |
| `]%` | `* :<C-U>call <SNR>63_MultiMatch("W",  "n") <CR>`         |
| `g%` | `* v:<C-U>call <SNR>63_Match_wrapper('',0,'o') <CR>`      |
| `g%` | `* :<C-U>call <SNR>63_Match_wrapper('',0,'v') <CR>m'gv``` |
| `g%` | `* :<C-U>call <SNR>63_Match_wrapper('',0,'n') <CR>`       |

# indent object

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

# gundo

| map    | command            |
| ---    | -------            |
| `<F5>` | `:GundoToggle<CR>` |
