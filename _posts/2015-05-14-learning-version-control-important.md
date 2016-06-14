---
layout: post
title: 'Learning Version Control &#8211; Why is it important?'
author: Joseph
description: 'VC Saves lives!'
tags:
  - Version Control
published: true
---
Over the last couple months, I have been doing a lot more  programming. Doing so, I have learned the importance of Version Control (Reversion Control or Source Control). So, why is this so important?

It lets you easily fix your messed up/jacked up mistake!!!  To grasp these concepts, I but the below post together. A lot of what I have below has been inspired by  Kalid Azad&#8217;s post [A Visual Guide to Version Control](http://betterexplained.com/articles/a-visual-guide-to-version-control/).

<img  src="http://i0.wp.com/betterexplained.com/wp-content/uploads/version_control/version_control_intro_small.png?resize=786%2C350" alt="Version Control Image" align="center" />


**You always have some sort of Version Control**. Some are just better than others.

You just might have not known it. We create new copies of the same file to show different stages of the document/photos changes. That was the point of using &#8220;Save As&#8221;. Most folders end up with files like this.

  * KatyaResume112006.doc
  * KatyaResume11022007.doc
  * indexV3.png
  * indexV4.png

#### **Will this work for Coding?**

While using this system for documentation is fine. Maintaining the number of files needed for a basic Web Application, let alone a large program it will not work.

I can not imagine the developers of Angry Birds with multiple shared folders named &#8220;Angry Birds &#8211; 01012012 -New Version&#8221;. A project of this scale would have a large number of programmers that would need to access to the same files. With a sub-par naming conventions and multiple hands in the pot, this will lead to disastrous outcomes.

This is where a Version Control System(VCS) comes into place. A good VCS does the following:

  * **Backup and Restore.**
  * **Synchronization.**
  * **Short-term undo.**
  * **Long-term undo.**
  * **Track Changes**.
  * **Track Ownership.**
  * **Sandboxing**, or insurance against yourself. Making a big change? You can make temporary changes in an isolated area, test and work out the kinks before “checking in” your changes.
  * **Branching and merging**. A larger sandbox. You can **branch** a copy of your code into a separate area and modify it in isolation (tracking changes separately). Later, you can **merge** your work back into the common area.

#### **First, learn the lingo for some concepts and actions**

Personally, I use [Git ](http://git-scm.com/)for my Version Control, and hosting all my code on [GitHub](https://github.com/).  This could be to deploy a C# applicaiton on Azure or a Laravel site on SiteGround. All VCSs have the same basic concepts:

#### **Concepts**

<div id="target-id7306" class="collapseomatic_content ">
  <ul>
    <li>
      <strong>Repository (repo)</strong>: A repository contains the history, the different versions over time and all different branches and tags. In Git each copy of the repository is a complete repository. The repository allows you to retrieve revisions into your working copy.
    </li>
    <li>
      <strong>Branches : </strong>A branch is a separate code line with its own history. You can create a new branch from an existing one and change the code independently from other branches. One of the branches is the default (normally named master). The user selects a branch and works in this selected branch, which is called the &#8220;working copy&#8221;. Selecting a branch is called &#8220;checkout a branch&#8221;.
    </li>
    <li>
      <strong>Commit: </strong>You commit your changes into a repository. This creates a new revision which can be retrieved later, for example if you want to see the source code of an older version. Each commit contains the author and committer, thus making it possible to identify the source of the change. The author and committer might be different people.
    </li>
    <li>
      <strong>Revision : </strong>Represents a version of the source code.
    </li>
    <li>
      <strong>Head</strong>: The latest revision in the repo.
    </li>
  </ul>
</div>

#### **Basic Actions**

<div id="target-id9796" class="collapseomatic_content ">
  <ul>
    <li>
      <strong>Add</strong>: Put a file into the repo for the first time, i.e. begin tracking it with Version Control.
    </li>
    <li>
      <strong>Check out</strong>: Download a file from the repo.
    </li>
    <li>
      <strong>Check in</strong>: Upload a file to the repository (if it has changed). The file gets a new revision number, and people can “check out” the latest one.
    </li>
    <li>
      <strong>Checkin Message</strong>: A short message describing what was changed.
    </li>
    <li>
      <strong>Changelog/History</strong>: A list of changes made to a file since it was created.
    </li>
    <li>
      <strong>Update/Sync</strong>: Synchronize your files with the latest from the repository. This lets you grab the latest revisions of all files.
    </li>
    <li>
      <strong>Revert</strong>: Throw away your local changes and reload the latest version from the repository.
    </li>
  </ul>
</div>

#### **Advanced Actions**

<div id="target-id9051" class="collapseomatic_content ">
  <ul>
    <li>
      <strong>Branch</strong>: Create a separate copy of a file/folder for private use (bug fixing, testing, etc). Branch is both a verb (“branch the code”) and a noun (“Which branch is it in?”).
    </li>
    <li>
      <strong>Diff/Change/Delta</strong>: Finding the differences between two files. Useful for seeing what changed between revisions.
    </li>
    <li>
      <strong>Merge (or patch)</strong>: Apply the changes from one file to another, to bring it up-to-date. For example, you can merge features from one branch into another. (At Microsoft this was called <a href="http://blogs.msdn.com/larryosterman/archive/2005/02/01/364840.aspx" target="_blank" shape="rect">Reverse Integrate and Forward Integrate</a>)
    </li>
    <li>
      <strong>Conflict</strong>: When pending changes to a file contradict each other (both changes cannot be applied).
    </li>
    <li>
      <strong>Resolve</strong>: Fixing the changes that contradict each other and checking in the correct version.
    </li>
    <li>
      <strong>Locking</strong>: Taking control of a file so nobody else can edit it until you unlock it. Some version control systems use this to avoid conflicts.
    </li>
    <li>
      <strong>Breaking the lock</strong>: Forcibly unlocking a file so you can edit it. It may be needed if someone locks a file and goes on vacation (or “calls in sick” the day Halo 3 comes out).
    </li>
    <li>
      <strong>Check out for edit</strong>: Checking out an “editable” version of a file. Some VCSes have editable files by default, others require an explicit command.
    </li>
  </ul>
</div>

**Let&#8217;s put these concepts and actions to practice:**

Joseph **adds** a file (`HoneyDoes.txt`) to the **repository**. He **checks it out**, makes a change (puts “Cut Grass” on the list), and checks it back in with a checkin message (“Added required item.”). The next morning, Katya **updates** her local cop sees the latest revision of HoneyDoes`.txt`, which contains Joseph&#8217;s addition. She can browse the **changelog** or **diff** to see that Joseph put “Cut Grass” the day before.

#### Take away&#8230;

As you can see Version Control is the best and simplest solution for managing changes in a coding environment. There are a robust amount of features and options that Version Control can provide. Over the next couple weeks, I will provide more solutions and tutorials on setting up Git and GitHub, and using on a daily basis.

&nbsp;
