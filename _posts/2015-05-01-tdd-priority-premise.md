---
layout: post
title: TDD's Priority Premise
author: Joseph
img: /assets/img/blog/tdd.png
description: "Understanding TDD and the color changes!"
tags:
  - Test Driven Development
published: true
---

<img class="img-portfolio img-responsive" src="/assets/img/blog/refactor.jpg"  />

I was working through [Bowling Game Kata ](http://www.stewshack.com/bowlinggame/gutterball){:target="_blank"} trying to learn more about Test Driven Development. When I took a rabbit trail, and I found this little nugget: [Uncle Bob&#8217;s Transformation Priority Premise.](http://blog.8thlight.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html){:target="_blank"}

> As the tests get more specific, the code gets more generic.

At the heart of this article is that production code goes through a sequence of transformations. The thought being that it goes *from specific to generic*. This understanding that refactoring simply changed the structure of code without changing it&#8217;s behavior as the *transformations* used to go from Red to Green had a type of pattern.

And by going in a specific order, or has the writer says Priority Premise, these transformations would make writing tests easier.

> …the idea that transformations on the top of the list should be preferred to those that are lower. It is better (or simpler) to change a constant into a variable than it is to add an if statement. So when making a test pass, you try to do so with transformations that are simpler (higher on the list) than those that are more complex.


> What’s more, when you pose a test, you try to pose one that allows simpler transformations rather than complex transformations; since the more complexity required by the test the larger the risk you take to get that test to pass.

Overall, this is an interesting concept that quickly gives me a checklist of steps to take when starting out. Even if it is a reminder that all tests should start by failing due to an empty/null return.
