---
title: 'Kataday &#8230; Turkey Countdown'
layout: post
permalink: /kataday-turkey-countdown/
categories:
  - KataDay
  - Test Driven Development
---
In honor of one of my favorite countdowns, [Slapsgiving][1], we will do a modified NASA Countdown, but call it Turkey Countdown for today&#8217;s KataDay and add a splash of <a href="http://en.wikipedia.org/wiki/Test-driven_development" target="_blank">TDD </a>for extra effort.

## **Code Kata:**

Momma wants to fry yet another turkey. As the official fryer of the turkey, you are very excited. So excited that about this responsibility you decide to create your one timer.

But **the frying is only minutes away**. You have to create the timer in 5 minutes – or the turkey will be over cooked and lost!<!--more-->

**The turkey counter  will tell you where to start – then count to 0 and test yourself with TDD (bonus points).** (example for ’11’: 11 10 9 8 7 6 5 4 3 2 1 0)

## **Lessons Learned:**

Since I wanted this to be based on TDD, I did find the following MSDN walkthroughs that were pretty quick and gave a good <a href="http://msdn.microsoft.com/en-us/library/ms182532(v=vs.110).aspx" target="_blank">Walkthrough </a>and <a href="http://msdn.microsoft.com/en-us/library/hh212233(v=vs.110).aspx" target="_blank">Quick Start</a>. Trying to use console.read or console.writeline caused a major rabbit trail, and taught me that testing is all simulated. That is the purpose of test cases. testing user input is usually done through the application and test functionality. Although, there are some interesting postings on using StringWriter and StringReader to help with this (Example <a href="http://blogs.msdn.com/b/ploeh/archive/2006/10/21/consoleunittesting.aspx" target="_blank">1</a> and <a href="http://www.softwareandi.com/2012/02/how-to-write-automated-tests-for.html" target="_blank">2</a>), I did not get any of them to work.

## **Final Solution:**

As always, these are not the perfect or most correct solutions. This is just where I landed.

### Testing Class

<pre class="lang:c# decode:true ">using System;
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
        public void DescUserInputToZero()
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
}</pre>

###  TurkeyCountdown Class

<pre class="lang:c# decode:true">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TurkeyDayCountdown
{
    public class TurkeyCountdown
    {
       public int _startingPoint {get; set;}
       public int _CurrentPoint;

       public  TurkeyCountdown(int startingPoint)
       {
           _startingPoint = startingPoint;
           _CurrentPoint = startingPoint;
       }

       public void CountDown()
       {
           for (int i = 0; i &lt;= _startingPoint; _startingPoint--)
           {
               _CurrentPoint = _startingPoint;
               DisplayMessage(_CurrentPoint);
           }
       }

       private void DisplayMessage(int _CurrentPoint)
       {
           Console.WriteLine(_CurrentPoint);
           if (_CurrentPoint == 0)
           {
               Console.WriteLine("Fry that TURKEY!");
           }
       }
    }
}</pre>

&nbsp;

&nbsp;

 [1]: http://www.youtube.com/watch?v=tqpPFT-F-bs