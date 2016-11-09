---
layout: kata
title: Turkey Countdown
description: Is the turkey ready, yet?
tags:
  - Test Driven Development
published: true
---

## Set-up
In honor of one of my favorite countdowns, [Slapsgiving](http://www.youtube.com/watch?v=tqpPFT-F-bs){:target="_blank"}, we will do a modified NASA Countdown, but call it Turkey Countdown for today&#8217;s Kata will also include a splash of [TDD](http://en.wikipedia.org/wiki/Test-driven_development){:target="_blank"} for extra effort. This make this a longer Kata than normal, but it is a good exercise.

### Kata &#8212; *Is the Turkey Ready yet?*

Momma wants to fry the turkey. As the official fryer of the turkey, you are very excited. So excited about this responsibility, you have decide to create an official timer.

The turkey counter will take in a  number and count down 0.(example if 11 minutes is entered: 11 10 9 8 7 6 5 4 3 2 1 0)

The way this is made hard, is that you have to follow TDD principles of Red - Green - Refactor.

## My Thoughts
This was not a quick Kata. The TDD caused me to need to do some research. The following MSDN walkthroughs were useful:
* [Creating and Running Unit Tests in Managed Code](http://msdn.microsoft.com/en-us/library/ms182532(v=vs.110).aspx){:target="_blank"}

* [Test driven development with Test Explorer](http://msdn.microsoft.com/en-us/library/hh212233(v=vs.110).aspx){:target-"_blank"}.

### Test Class Example

This is only my implementation of a Test Class for this Kata. There are numerous other possibilities, but I wanted to give you a reference point.

<pre>
<code class="csharp">
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TurkeyDayCountdown;

namespace TurkeyDayCountdown.Test
{
    [TestClass]
    public class TurkeyCountdownTest
    {
        [TestMethod]
        public void ReturnUserInputAsStartingPoint()
        {
            //arrange
            int userinput = 5;
            TurkeyCountdown turkeyCountdown = new TurkeyCountdown(userinput);

            //assert
            Assert.AreEqual(userinput, turkeyCountdown._CurrentPoint);
        }

        [TestMethod]
        public void StartingPointToZero()
        {
            //arrange
            int userinput = 5;
            int expectedResults = 0;
            TurkeyCountdown turkeyCountdown = new TurkeyCountdown(userinput);

            //act
            turkeyCountdown.CountDown();

            //assert
            Assert.AreEqual(expectedResults, turkeyCountdown._CurrentPoint);
        }
    }
}
</code>
</pre>
