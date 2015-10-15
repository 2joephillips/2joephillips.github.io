---
title: Code Kata + today = Kataday!
author: 2joes
layout: post
permalink: /code-kata-today-kataday/
categories:
  - KataDay
---
I originally heard of Dave Thomas&#8217; [Code Kata][1] months ago. The thought behind Code Kata is to take simple problems, and use them as a learning experience to improve ones coding/algorithm/critical thinking. At the time, I thought it would be nice idea to do, but I did not have the drive to actually proceed with doing any. Jump forward, and I have decided to revisit this subject. I hope this week is to do 5 days of Code Kata and post my experiences here. Aftwards, I will do these little Code Kata&#8217;s any day during the week. Then share what I have learned. Hence, today is my first Kataday! (*Stop Laughing! I think it is cool!*) In most cases, the solution will not be the best,but it is just what I came up with to solve the Kata

### Exercise**:**

Create a listing of all the two character combinations that exist with using only letters and numbers. {i.e. 11, 1A, A1, AA} No special characters. I used C# and Visual Studio as my IDE.

I could have made this harder by requiring myself to use any other language {i.e. PHP, JavaScript}. The premise for this was that I actually had to create this listing for a project, so it made sense for my first Kata. The code for solving this was actually straight forward. Of course, this was not a mind blowing Kata. It was just a start. Have to crawl before you can walk&#8230;. running is later.

<pre class="lang:c# decode:true prettyprint  ">using System;
using System.Diagnostics;
namespace KataDay
{
    class Program {
        static void Main(string[] args {
            for (char i = '1'; i &lt;= 'Z'; i++) {
                for (char C = '1'; C &lt;= 'Z'; C++){
                    if (char.IsLetterOrDigit(i))
                        if(char.IsLetterOrDigit(C))
                        Debug.WriteLine(i + " " + C);
                    } 
                } 
            } 
        } 
    }</pre>

 [1]: http://codekata.pragprog.com/