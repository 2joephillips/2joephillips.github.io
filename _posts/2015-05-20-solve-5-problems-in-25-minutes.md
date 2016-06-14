---
layout: post
title: Solve 5 problems in 25 minutes
author: Joseph
description:
tags:
  - KataDay
published: false
---
The whole premise of KataDays are to take simple problems, and use them as a learning experience to improve my coding/algorithm/critical thinking. SO, to make make today interesting, I found 5 simple problems, at the end of this post , and I am giving my self 5 minutes per problem to solve each one&#8230;.

&nbsp;

Overall, this is what a great exercise, it really forced me to think on my feet. While the exercises were inherently easy, they each had their little nuances. I suggest do these Katas with one or more programmers and see what variances exists.  For example, one programmer was able to answer Exercise 5 in **ONE LINE**! It took me several more.

Below are the differences between me and a co-worker. This was based on our thought process. <!--more-->I was going for quick … Array, For Each, set surname, and print to console.log(). Co-worker was thinking about pulling from a “dictionary” so he created a separate method. Interesting differences based on such a simple process. We both completed the exercise, but essentially different processes.

My Code

<pre class="lang:c# decode:true">/////
 foreach (var item in _males)
 {
            {
                if (item == name)
                    surname = "Mr. ";
            }
            foreach (var item in _females)
            {
                if (item == name)
                    surname = "Ms. ";
            }
  }
/////</pre>

Co-workers Code

<pre class="lang:c# decode:true">/////
Console.WriteLine(Normalization(input));
/////
        private static string Normalization(string Input)
        {
            switch(Input.Trim().ToLower())
            {
                case "amy":
                    return "Ms. Amy";
                case "buffy":
                    return "Ms. Buffy";
                case "cathy":
                    return "Ms. Cathy";
                case "elroy":
                    return "Mr. Elroy";
                case "fred":
                    return "Mr. Fred";</pre>

**Exercise 1 &#8212; Apply Surname to Name**  
Write a program that asks for the user&#8217;s name and then writes that name to the monitor with either &#8220;Ms.&#8221; or &#8220;Mr.&#8221; in front, depending if the name is for a female or male.

Assume that the only female names are:  
• Amy  
• Buffy  
• Cathy  
And that the only male names are:  
• Elroy  
• Fred  
• Graham  
All other names will be echoed without a title.

**Exercise 2 &#8212; Name Echo**  
Write a program that asks for user&#8217;s name and then writes it back with the first name as entered, and the second name all in capital letters.

**Exercise 3 &#8212; Convert String to a Letter per Line**  
Write a program where the user enters a string, and the program echoes it to the monitor with one character per line.

**Exercise 4 &#8212; Area of a Circle**  
Write a program that calculates the area of a circle from its radius. The radius will be an integer read in from the keyboard.

**Exercise 5 &#8212; Title Applier**  
Write a program that reads in a number of cents. The program will write out the number of dollars and cents.

##
