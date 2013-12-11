---
layout: post
title:  "Draft - Naming Things"
<!--date:   2013-09-27 22:17:04-->
categories: craft
---

Talk about the importance of naming things, especial things that are
core to a system.

Talk about using the 'Parts of speech test' to help choose names. See http://mashable.com/2010/05/28/naming-startup/

http://martinfowler.com/bliki/TwoHardThings.html

Maybe this is useful? http://diehealthy.org/software/naming-things

Also check code complete for advice

Maybe this is useful too? http://lacquer.fi/pauli/blog/2011/05/on-naming-things-and-the-ceo-programmer/

Analyse aspen code and the problems there

shorter is better

http://wickedgoodruby.com/2013/speakers/jon_yurek

http://techiferous.com/2013/12/babies-vs-zombies/

# Naming

# why

For a coder, our brains can't fit every concept of the system at once. A
good name lets us pull a concept into and out of our brains easily so we
can reason with it.

For a dev team, it provides vocabulary for communication about the software.

For a company, it provides vocabulary for communication about how the
software solves business problems.

# attributes of a good name

* It reveal what the thing is for, Its intention

* Be specific, not too general

If writing an HR system, Employee is probably a better name than
LifeForm because its more specific.

* Names can be accurate - doesn't misrepresent what a thing is

If a company providers bus routes to customers, a Bus class is natural.
If they later provider commuter rail routes too, and Bus comes to mean
buses and trains, then Bus is inaccurate. Something like Vehicle or
Conveyance would be more accurate.

* names can be precise - little ambiguity, only identifies the thing in
  question

Calling a user event class `Event` in javascript. This is not precise
because it could be confused with dom events. `UserEvent` is a better
name.

* parts of speech test

I'm not sure how this works, but the idea is that a name is better if it
can be used without awkwardness in different ways. For example as a
verb, noun, adjective etc.

Talk about using the 'Parts of speech test' to help choose names. See http://mashable.com/2010/05/28/naming-startup/

* shorter is better

Because typing is hard

# how to choose a good name

* be prepared to spend some time thinking about it
* use a thesaurus
* if its really hard to name something, then maybe its not well
  factored?

## what can help

* small classes
* small methods

