---

layout: post
title: 'KataDay &#8211; StringCalculator'
author: Joseph
description:
categories:
  - KataDay
  - Test Driven Development
published: false
---
For my last day of KataDay, I thought would continue on my TDD Kata&#8217;s and decided to do, [Roy Osherove&#8217;s String Calculator][1].

This is a kata that allows you work through the steps of refactoring and testing first.

### Instructions from Roy&#8217;s Kata:

Before you start:

  * Try not to read ahead.
  * Do one task at a time. The trick is to learn to work incrementally.
  * Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata.

<!--more-->

String Calculator

  1. Create a simple String calculator with a method int Add(string numbers) 1.The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
  2. Start with the simplest test case of an empty string and move to 1 and two numbers
  3. Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
  4. Remember to refactor after each passing test.
      1. Allow the Add method to handle an unknown amount of numbers
      2. Allow the Add method to handle new lines between numbers (instead of commas). 1.the following input is ok:  “1\n2,3”  (will equal 6)
      3. the following input is NOT ok:  “1,\n” (not need to prove it &#8211; just clarifying)
  5. Support different delimiters [1.to][2] change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
  6. the first line is optional. all existing scenarios should still be supported
  7. Calling Add with a negative number will throw an exception “negatives not allowed” &#8211; and the negative that was passed.if there are multiple negatives, show all of them in the exception message

> &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;
>
> stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.
>
> &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;

  1. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
  2. Delimiters can be of any length with the following format:  “//[delimiter]\n” for example: “//[\*\\*\*]\n1\*\*\*2\***3” should return 6
  3. Allow multiple delimiters like this:  “//\[delim1\]\[delim2\]\n” for example “//\[\*\]\[%\]\n1\*2%3” should return 6.
  4. make sure you can also handle multiple delimiters with length longer than one char

## Lessons Learned:

The ternary (?) is a good way to limit Code. Example below.

<pre class="lang:default decode:true" title="IF Statement">private char UserInputDelimiter(string userInput)
{
     if (userInput.Contains("//"))
     {
           return char.Parse(userInput.Substring(2, 1));
     }
     else
     {
           return ',';
     }
}</pre>

VS.

<pre class="lang:default decode:true">private char UserInputDelimiter(string userInput)
{
      return   userInput.Contains("//") ?  char.Parse(userInput.Substring(2, 1)) : ',';
}</pre>

I started to wonder are my Test Method names getting an out of control (too long)?

I don’t think so. The detailed names helped me figure out where my issues where. Example below, shows the results when  something went wrong with testing my

<span style="color: #ff0000;">ReturnExceptionMessageforMultipleNegativeNumbersAndWholeNumbersWithDifferentDelimiters</span>() &#8212;- *Yep, that is long.*

Not sure if there is a specific naming convention for Test Methods, but I think I will use:

“**Return <expected type> for <input type/data>”**

Also, my re-factoring between testing needs to improve…. Just being honest with myself.

## Final Solution:

With the length of the Kata code… I might need to start posting them to GitHub.

Today, is a reminder to refactor. Below is my final StringCalculator Class&#8230;. Re-factor! Make it easy to read, and more concise.

<pre class="lang:default decode:true" title="Example to refactor">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace KataDay_3_StringCalculator
{
	public class StringCalculator
	{
        bool negativeUsed = false;

        String negativeNumber;

		public object Add(string userInput)
		{

                return string.IsNullOrEmpty(userInput) ? 0 : ConvertUserInput(userInput);
		}

		private int ConvertUserInput(string userInput)
		{
			int parseResult;
			int result = 0;
                        string[] userInputArray = formatUserInput(userInput);
			foreach (var item in userInputArray)
			{

                           if (int.TryParse(item, out parseResult) &&  parseResult &gt;= 0)
                          {
                              result += parseResult;
                          }
                          else
	                 {
                               negativeUsed = true;
                               negativeNumber += item + " ";
	                 }
		     }
            if (negativeUsed)
            {
                 throw new System.ArgumentException("Negatives not allowed" + negativeNumber.ToString());
            }
            else
            {
                return result;
            }
		}

        private string[] formatUserInput(string userInput)
        {
            char delimiter = UserInputDelimiter(userInput);
            if (delimiter == ',')
            {
               return userInput.Split(UserInputDelimiter(userInput));
            }
            else
            {
                //userInput = userInput.Substring(4);
                return userInput.Split(delimiter);
            }
        }

		private char UserInputDelimiter(string userInput)
		{
            return	userInput.Contains("//") ?  char.Parse(userInput.Substring(2, 1)) : ',';
		}

	}
}</pre>

&nbsp;

 [1]: http://osherove.com/tdd-kata-1/
 [2]: http://1.to/
