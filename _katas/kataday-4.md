---
layout: kata
title: StringCalculator - TDD Style
description: tst4
categories:
  - Test Driven Development
published: true
---

## Set-up
This Kata comes from [Roy Osherove&#8217;s String Calculator](http://osherove.com/tdd-kata-1/){:target="_blank"}. This is similar to the last kata in that it allows you to work through the steps of refactoring through TDD.

### Instructions from Roy&#8217;s Kata:

Before you start:

  * Try not to read ahead.
  * Do one task at a time. The trick is to learn to work incrementally.
  * Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata.

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
> If you would like to see the rest of the Kata check it out [here](http://osherove.com/tdd-kata-1/){:target="_blank"}
>
> &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;

## My Thoughts

The ternary (?) is a good way to limit Code.

<pre>
<code class="csharp">
private char UserInputDelimiter(string userInput)
{
     if (userInput.Contains("//"))
     {
           return char.Parse(userInput.Substring(2, 1));
     }
     else
     {
           return ',';
     }
}
</code>
</pre>

VS.

<pre>
<code class="csharp">
private char UserInputDelimiter(string userInput)
{
      return   userInput.Contains("//") ?  char.Parse(userInput.Substring(2, 1)) : ',';
}
</code>
</pre>

I started to wonder are my Test Method names getting an out of control (too long)?

<span style="color: #ff0000;">
ReturnExceptionMessageforMultipleNegativeNumbersAndWholeNumbersWithDifferentDelimiters
</span>() &#8212;- *Yep, that is long.*

I don’t think so. The detailed names helped me figure out where my issues where. Not sure if there is a specific naming convention for Test Methods, but I think I will continue to use detailed names.

Also, re-factoring between testing is important, and I should think about it more. Just being honest with myself.
