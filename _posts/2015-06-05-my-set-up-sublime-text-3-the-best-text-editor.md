---
title: My Set-up Sublime Text 3 the Best Text Editor
author: 2joes
layout: post
permalink: /my-set-up-sublime-text-3-the-best-text-editor/
categories:
  - Programming
---
I have been using Sublime Text 2 for so long I got comfortable with it, and it is my favorite text editor. I knew there was a new version, but I never crossed over.  So, I upgraded and I have been using it. I am going to compile  a couple quick hit items for setting up Sublime Text 3*.*

## [<img class="alignleft wp-image-572 size-full" src="http://i1.wp.com/josephephillips.com/wp-content/uploads/2015/06/sublime-logo.jpg?fit=200%2C200" alt="sublime-logo" data-recalc-dims="1" />][1]Basic Installation

Use one of the two links, below to access the download page. From there, it is SIMPLE.

Sublime Tex 3 [Download Page][2]

As a reminder Sublime Text (either version) has a $70.00 license fee. You are able to use it without purchasing, but if you are going to use if for development pay the license. *Support the Developers.*

## Install Package Control

Once you have Sublime Text installed, you are going to want to <a href="Installing Sublime Text 3 is SIMPLE use a link below to head to the download page to install. As an FYI, Sublime Text 3 is currently still in development, so you could use version 2 if you would like something more stable. I just like to use the newest version. Just personal preference. " target="_blank">install package control</a> and <a href="https://sublime.wbond.net/browse" target="_blank">start downloading some packages</a>.

The simplest method of installation is through the Sublime Text console. The console is accessed via the shortcut  <kbd>ctrl+'</kbd> or View > Show Console menu. Once open, paste the appropriate Python code for your version of Sublime Text into the console. Since the code changes with each release you will need to pull it from the [Installation Page.][3]

## Install Some Great Packages

To get started you will need to bring up the Package Control by pressing CMD + SHIFT + P or ALT + SHIFT + P.

From here you can install, list, and remove packages. For a more comprehensive list of Sublime Text 3 compatible packages <a href="https://github.com/wbond/sublime_package_control/wiki/Sublime-Text-3-Compatible-Packages" target="_blank">visit this page</a>.

To start installing. Type &#8220;Install&#8221; then select Package Control: Install Package. You will then be able to search and install packages.

### Below are some of my favorites so far&#8230;.

### [TOMORROW COLOR SCHEMES][4]

I&#8217;ve found Tomorrow Night to be my favourite color scheme for editing code for Sublime . Search for `Tomorrow Color Schemes`.<!--more-->

After installation the theme should be added to Sublime, and should be accessible through:

<pre xml:space="preserve"><code>    Sublime Text / Preferences… / Color Scheme / Tomorrow Color Schemes</code></pre>

### [ SublimeLint][5]

Interactive code linting framework for Sublime Text 2 (works with 3).

### [GIT][6]

[Must have version control,][7] and this packages integrates my favorite one.

### [Emmet][8]

Emmet provides you will automatic browser prefixes on CSS properties, a colour gradient generator, a lorem ipsum generator, new keyboard shortcuts and many more features that will speed up your development.

### [Sidebar Enhancements][9]

The packages improves the usability of the sidebar by giving you more options on new files, moving files, copying files and opening files in another program.

### [jQuery][10]

This jQuery package comes with loads of code snippets for help with your jQuery development.

### [HTML5][11]

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

 [1]: http://i1.wp.com/josephephillips.com/wp-content/uploads/2015/06/sublime-logo.jpg
 [2]: http://www.sublimetext.com/3
 [3]: https://sublime.wbond.net/installation#st2
 [4]: https://sublime.wbond.net/packages/Tomorrow%20Color%20Schemes
 [5]: https://sublime.wbond.net/packages/sublimelint
 [6]: https://sublime.wbond.net/packages/Git
 [7]: http://josephephillips.com/learning-version-control-important/ "Learning Version Control – Why is it important?"
 [8]: https://sublime.wbond.net/packages/Emmet
 [9]: https://sublime.wbond.net/packages/SideBarEnhancements
 [10]: https://sublime.wbond.net/packages/jQuery
 [11]: https://sublime.wbond.net/packages/HTML5