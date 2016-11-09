---
layout: post
title: 'Learning Version Control &#8211; Why is it important?'
author: Joseph
img: /assets/img/blog/sourcecontrol.jpg
description: 'VC Saves lives!'
tags:
  - Version Control
published: true
---
Over the last couple months, I have been doing a lot more programming. In doing so, I have learned the importance of Version Control (Reversion Control or Source Control). So, why is this so important?

You have back-ups from before you messed up/jacked up your application!!!  To grasp these concepts, I put the below post together. A lot of this is inspired by Kalid Azad&#8217;s post [A Visual Guide to Version Control](http://betterexplained.com/articles/a-visual-guide-to-version-control/).


<img class="img-portfolio img-responsive"  src="http://i0.wp.com/betterexplained.com/wp-content/uploads/version_control/version_control_intro_small.png" />

**You always have some sort of Version Control**. Some are just better than others.

You just might have not known it. We create new copies of the same file to show different stages of the document/photos changes. That was the point of using &#8220;Save As&#8221;. Most folders end up with files like this.

  * KatyaResume112006.doc
  * KatyaResume11022007.doc
  * indexV3.png
  * indexV4.png

#### **Will this work for Coding?**

While using this system for documentation is fine. Maintaining the number of files needed for a basic Web Application, let alone a large program it will not work.

I can not imagine the developers of Angry Birds with multiple shared folders named &#8220;Angry Birds &#8211; 01012012 -New Version&#8221;. A project of this scale would have a large number of programmers that would need to access to the same files. With a sub-par naming conventions and multiple hands in the pot, this will lead to disastrous outcomes.

#### **What do we need?**
A good Version Control System(VCS) that is able to do the following:

  * **Backup and Restore.**
  * **Synchronization.**
  * **Short-term undo.**
  * **Long-term undo.**
  * **Track Changes**.
  * **Track Ownership.**
  * **Sandboxing**, or insurance against yourself. Making a big change? You can make temporary changes in an isolated area, test and work out the kinks before “checking in” your changes.
  * **Branching and merging**. A larger sandbox. You can **branch** a copy of your code into a separate area and modify it in isolation (tracking changes separately). Later, you can **merge** your work back into the common area.

Personally, I use [Git ](http://git-scm.com/)for my Version Control, and hosting all my code on [GitHub](https://github.com/).  This helps me to manage a C# applicaiton on Azure or a Laravel site on SiteGround. Also, i am able to host this site through the use of Jekyll and GitHub Pages.

#### **How would this look in the real world?**

Joseph **adds** a file javascript file (`control.js`) to the **repository**. He **checks it out**, makes a change (a really cool thing that makes it work so much better), and checks it back in with a commit message (“Added required item. COMPLETED TASK!”). The next morning, his co-worker **updates** her local copy and sees the latest revision of `contoller.js`. She can browse the **history** or **diff** to see that Joseph added “a new feature” the day before and she is in sync and does not miss Joseph's really cool thing.

#### **Take away&#8230;**
As you can see Version Control is the best and simplest solution for managing changes in a coding environment. There are a robust amount of features and options that Version Control can provide. For more detailed information, dive into [A Visual Guide to Version Control](http://betterexplained.com/articles/a-visual-guide-to-version-control/).
