---
layout: post
title: My Set-up for Sublime Text 3
author: Joseph
tags:
  - Set-up
  - IDE
published: true
---
I have been using Sublime Text 2 for so long I got comfortable with it, and it is my favorite text editor. I knew there was a new version, but I never crossed over.  So, I upgraded and I have been using it. I am going to compile  a couple quick hit items for setting up Sublime Text 3.

## Basic Installation

Use the link below to access the download page. From there, download the version for your correct operating system.

[Sublime Text 3 Download Page](http://www.sublimetext.com/3)

As a reminder Sublime Text has a $70.00 license fee. You are able to use it without purchasing, but if you are going to use if for active development pay the license. *Support the Developers.*

## Install Package Control

Once you have Sublime Text installed, you are going to want to [install package control](https://packagecontrol.io/installation). Reference the most current process from the installation link as this may change over time.

To access Sublime Texts console use the shortcut  <kbd>ctrl+'</kbd> or View > Show Console menu. Once open, paste the appropriate Python code from the installation site into the console.

## Install Some Great Packages

To get started you will need to bring up the Package Control by pressing CMD + SHIFT + P.

From here you can install, list, and remove packages. For a more comprehensive list of [Sublime Text 3  packages](https://packagecontrol.io/).

To start installing. Type &#8220;Install&#8221; then select Package Control: Install Package. You will then be able to search and install packages.

####My favorites so far&#8230;.

##### [TOMORROW COLOR SCHEMES](https://packagecontrol.io/packages/Tomorrow%20Color%20Schemes)

I&#8217;ve found Tomorrow Night to be my favourite color scheme for editing code for Sublime . Search for `Tomorrow Color Schemes`.<!--more-->

After installation the theme should be added to Sublime, and should be accessible through:

<pre xml:space="preserve"><code>    Sublime Text / Preferences… / Color Scheme / Tomorrow Color Schemes</code></pre>

##### [ SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)

Interactive code linting framework for Sublime Text 2 (works with 3).

##### [GIT](https://packagecontrol.io/packages/Git)

[Must have version control,][7] and this packages integrates my favorite one.

##### [Emmet](https://packagecontrol.io/packages/Emmet)

Emmet provides you will automatic browser prefixes on CSS properties, a colour gradient generator, a lorem ipsum generator, new keyboard shortcuts and many more features that will speed up your development.

##### [Sidebar Enhancements](https://packagecontrol.io/packages/SideBarEnhancements)

The packages improves the usability of the sidebar by giving you more options on new files, moving files, copying files and opening files in another program.

##### [jQuery](https://packagecontrol.io/packages/jQuery)  

This jQuery package comes with loads of code snippets for help with your jQuery development.

##### [HTML5](https://packagecontrol.io/packages/HTML5)

A <a title="What Is HTML5?" href="http://www.paulund.co.uk/what-is-html5" target="_blank">HTML5</a> package of HTML5 snippets for quicker HTML development.

## Change Preferences

Sublime Text 3 does not allow you to change default settings in the `Settings - Default` file. This is because this file gets overwritten each time the program is upgraded, losing all of your settings. To change settings, choose `Preferences -> Settings - User`, create an empty array if the file has no contents:

    {

    }


and put your settings in it, with a comma after each one but the last. Below, are my settings.

    {
        "trim_trailing_white_space_on_save": true,
        "word_wrap": true,
        "save_on_focus_lost": true,
        "bold_folder_labels": true,
        "highlight_modified_tabs": true,
        "scroll_past_end": true,
    }

## Learn Some Shortcuts and Save KeyStrokes

All of the Sublime Text keyboard shortcuts are located in Preferences -> Key Bindings Default.

Here&#8217;s a example of some of the keyboard shortcuts you can use inside Sublime.

  * **ctrl+k, ctrl+b** &#8211; Toggle the sidebar
  * **f11** &#8211; Toggle Full Screen
  * **shift+f11** &#8211; Toggle Distraction Free
  * **alt+.** &#8211; Close Tag
  * **ctrl+p** &#8211; Show the go to overlay panel
  * **ctrl+shift+p** &#8211; Show the command overlay panel
  * **ctrl+alt+p** &#8211; Show the project selector panel
  * **ctrl+r** &#8211; Show the go to overlay panel default to method selector
  * **ctrl+g** &#8211; Show the go to overlay panel default to go to line selector
  * **ctrl+;** &#8211; Show the go to overlay panel default to variable selector
  * **ctrl+shift+up** &#8211; Swap with the line above
  * **ctrl+shift+down** &#8211; Swap with the line below
  * **ctrl+/** &#8211; Toggle a comment
  * **ctrl+shift+/** &#8211; Toggle a comment block
  * **ctrl+shift+d** &#8211; Duplicate a line
  * **ctrl+\`** &#8211; Display console panel
  * **ctrl+space** &#8211; Auto complete the current selected snippet
  * **ctrl+k, ctrl+u** &#8211; Toggle upper case
  * **ctrl+k, ctrl+l** &#8211; Toggle lower case

If you want to add your own keyboard shortcuts or override the default shortcuts you should use the user specific keyboard shortcut file.

Preferences -> Key Bindings User.

&nbsp;
