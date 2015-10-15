---
title: Transforming your code from Red to Green by always failing first.
author: 2joes
layout: post
permalink: /transforming-your-code-from-red-to-green-by-always-failing-first/
categories:
  - Programming
  - Test Driven Development
---
<img class="alignright  wp-image-510" src="http://i1.wp.com/josephephillips.com/wp-content/uploads/2015/05/tdd_flow1.gif?resize=231%2C242" alt="tdd_flow[1]" data-recalc-dims="1" />I was working through [Bowling Game Kata ][1] trying to learn more about Test Driven Development. When I took a rabbit trail, and I found this little nugget: [Uncle Bob&#8217;s Transformation Priority Premise.][2]

The heart of this article was the following statement

> **&#8220;As the tests get more specific, the code gets more generic.”**

The understanding that refactoring simple changed the structure of code without changing it&#8217;s behavior, but to read about the spectrum that t*ransformations* changed the behavior of code to get it from Red to Green. Started to make sense.

At the heart of this discussion is when using TDD, production code goes through a sequence of transformations. The thought being that it goes *from specific to generic*.<!--more-->

&nbsp;

And by going in a specific order, or has the writer says Priority Premise, using transformations writing tests would be easier. Below is the proposed order, and a quick snippet from the article.

> …the idea that transformations on the top of the list should be preferred to those that are lower. It is better (or simpler) to change a constant into a variable than it is to add an if statement. So when making a test pass, you try to do so with transformations that are simpler (higher on the list) than those that are more complex.
> 
> What’s more, when you pose a test, you try to pose one that allows simpler transformations rather than complex transformations; since the more complexity required by the test the larger the risk you take to get that test to pass.

**The Priority Premise**  
({}–>nil) no code at all->code that employs nil  
(nil->constant)  
(constant->constant+) a simple constant to a more complex constant  
(constant->scalar) replacing a constant with a variable or an argument  
(statement->statements) adding more unconditional statements.  
(unconditional->if) splitting the execution path  
(scalar->array)  
(array->container)  
(statement->recursion)  
(if->while)  
(expression->function) replacing an expression with a function or algorithm  
(variable->assignment) replacing the value of a variable.

Overall, this is an interesting concept that quickly gives me a checklist of steps to take when starting out. Even if it is a reminder that all tests should start by failing due to an empty/null return.

 [1]: http://www.stewshack.com/bowlinggame/gutterball
 [2]: http://blog.8thlight.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html