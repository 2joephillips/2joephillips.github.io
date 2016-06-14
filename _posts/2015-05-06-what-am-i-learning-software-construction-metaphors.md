---
layout: post
title: Understanding Software Construction Metaphors
author: Joseph
description: "Notes from Code Complete - Software Metaphors"
tags:
  - My Takeaways
published: true
---
*My Takeaways,* are a collection of information and concepts that I learn through books, programming, and work experiences. In some cases these posts will be just my personal notes. While they may not give you the audience much pleasure in reading, they will serve as my digital resource library.

The Software Contstruction section will extract information from the book <a href="http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_2?s=books&ie=UTF8&qid=1404135814&sr=1-2&keywords=software+construction" target="_blank">Code Complete </a>by <a href="http://www.amazon.com/Steve-McConnell/e/B000APETRK/ref=ntt_athr_dp_pel_1" target="_blank">Steve McConnell</a>.  This book is still one of the most regarded books on this subject. As these notes are coming from the fore-mentioned book ***credit is given to the author***.

#### **Why use Metaphors**

By comparing a topic you understand poorly to something you understand better, you come up with insights that result in a better understand of the less-familiar. This use of metaphor is called “modeling”.

A good metaphor is simple, relates well to other relevant metaphors, and explains much of the experimental evidence and other observed phenomena.

Software development is not yet mature enough to have a set of standard metaphors. Consequently, it has profusion of complementary and conflicting metaphors. Some are better than others. Some are worse.

#### **How to use Metaphors**

A metaphor serves more as a heuristic than it does as an algorithm.

An algorithm is a set of well-defined instruction for carrying out a particular task. A heuristic is a technique that helps you look for an answer.

  * Use them to give you insight into your programming problems and processes.
  * Use them to help you think about programming activates and to help you imagine better ways of doing things.

#### **What are some Common Software Metaphors**

**Software Penmanship: Writing Code**

The most primitive metaphor. The writing metaphor suggests that developing a program is like writing a causal letter – you sit down with pen, ink, and paper and write from start to finish. It doesn’t’ require any formal planning, and you figure out what you want to say as you go.

For small projects, the letter writing metaphor works adequately, but for other purposes it leaves the party early – it does not describe software development fully or adequately. A software project involves many people with many different responsibilities.

Fred Brooks’ *The Mythical Man-Month* (1995) says, “Plan to throw on away: you will, anyhow.” This conjures up an image of a pile of half-written drafts thrown into a wastebasket. But extending this writing metaphor to Software development is poor advice. The trick is to get it right the first time around (reducing costs) – or to take several chances when they’re cheapest.

**Software Farming: Growing a System**

The farming metaphor suggest that developing a program is like planting seeds and growing crops – you design a piece, code a piece, test a piece, and add it to the system a little bit at a time. The incremental technique of this metaphor is valuable, but the farming metaphor is terrible.

The farming analogy is weak and uninformative, and it’s easy to replace with better metaphors. It’s hard to extend the farming metaphor beyond the simple idea of doing things a little bit at a time – fertilizing the system plan, thinning the detailed design, increasing code yields through effective land management, and harvesting the code itself.

The weakness in the software-farming metaphor is it suggestion that you do not have any direct control over how the software develops.

**Software Oyster Farming: System Accretion**

The two metaphors, growing software and software accretion, are closely related. Software accretion is the more insightful. “Accretion” means any growth or increase in size by a gradual external addition or inclusion.

This metaphor better encompass incremental development. You first make the simplest possible version of the system that will run. Then little by little you add to it.

  * You change each of the dummy classes to real classes.
  * You drop in code that accepts real input, versus pretend input.
  * You drop in code that produces real output, versus pretend output.
  * You add a little bit of code at a time until you have a fully working system.
