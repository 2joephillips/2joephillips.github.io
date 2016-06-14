---
layout: post
title: 'Comic Vine API &#8211; Part 1 &#8211; Basics'
author: Joseph
description:
tags:
  - API
---
I LOVE COMICS! I have a nice collection of comics, and I have been wanting to make a library resources system that can provide me some information on the comics I have.

Luckily, [Comic Vine](http://comicvine.com) has more metadata than I could ever need. Plus, they have a free [Web API](http://comicvine.com/api) that gives access to all their data, which is a perfect solution for what I am trying to accomplish.

The bad news, I am a little rusty on Web API, so I needed to find some Comic Vine API Examples to help me get started. My first idea was to check the forums to make sure they had all that I needed to get started&#8230; Good documentation, but no examples. So, then I decided to Google what I was looking for&#8230;. A little better, but that was more re-directing me back to the forums.  Lastly, I wanted to see what was already created. Two projects caught my eye: [Comic Vine Scrapper for Comicrack](https://code.google.com/p/comic-vine-scraper/) and [Sharp ComicVine](http://sharpcomicvine.codeplex.com/). Both of which had calls to the API that I could use as starting points for my system.

But, I wanted a more straight forward resource, so I decided to write one up.

This first blog covers some of the Comic Vine API  structure, basic API calls,  sorting results, and limt data returned.

For these posts, I  will use the following abbreviations for API resources.

#### Abbreviations

  * ***YOUR_APIKEY*** = Your Personal API Key. Can be acquired [here](https://auth.comicvine.com/signup/).
  * ***URL*** = The Comic Vine API address is [www.comicvine.com/api](http://www.comicvine.com/api)
  * **\<Resources>** = The Comic Vine Resources, sample below
  * **\<Field_List>** =  Any field within the resource being called

#### Sample of API Resources

Each resource as a plural and singular component. In most API calls, you will use the plural to have the call return a list of  the singular.

<p style="padding-left: 90px;" align="left">
  <a href="http://www.comicvine.com/api/documentation#toc-0-2" target="_blank">Character</a>
  <a href="http://www.comicvine.com/api/documentation#toc-0-3" target="_blank">(s)</a>        
  <a href="http://www.comicvine.com/api/documentation#toc-0-10" target="_blank">Issue</a>
  <a href="http://www.comicvine.com/api/documentation#toc-0-11" target="_blank">(s)</a>
</p>

<p style="padding-left: 90px;" align="left">
  <a href="http://www.comicvine.com/api/documentation#toc-0-26" target="_blank">Publisher</a>
  <a href="http://www.comicvine.com/api/documentation#toc-0-27" target="_blank">(s)</a>         
  <a href="http://www.comicvine.com/api/documentation#toc-0-28" target="_blank">Series</a>/
  <a href="http://www.comicvine.com/api/documentation#toc-0-29" target="_blank">Series_List</a>
</p>

<p style="padding-left: 90px;" align="left">
  <a href="http://www.comicvine.com/api/documentation#toc-0-33" target="_blank">Team</a>
  <a href="http://www.comicvine.com/api/documentation#toc-0-34" target="_blank">(s)</a>                 <a href="http://www.comicvine.com/api/documentation#toc-0-40" target="_blank">Volume</a>
  <a href="http://www.comicvine.com/api/documentation#toc-0-41" target="_blank">(s)</a>
</p>

<p style="padding-left: 90px;" align="left">
  <a href="http://www.comicvine.com/api/documentation#toc-0-30" target="_blank">Search</a>
</p>

Also before we dive into the examples, I want to mention how the <a href="http://www.comicvine.com/api/documentation#toc-0-0" target="_blank"><strong>results</strong> </a><strong>are delivered. </strong>They are arranged as<strong>; </strong>error, limit (Comic Vine caps at 100), offset, number of page results, number of total results, status code, and results. The first example will breakdown these areas in more detail
</p>

#### Okay, finally, some Comic Vine API Examples…..

<strong>First, a basic API CALL to to pull back all the data for a specific resource</strong> that is stored on Comic Vine. By design, this call will pull all issues back in a random pattern. The API call for this is:

<p align="center">
  <strong>URL/<resource>/?api_key=YOUR_APIKEY</strong>
</p>

<p align="left">
  To pull all 439,999 issues within the Comic Vine, you would use
</p>

<p align="center">
   <strong>URL/issues/?api_key=YOUR_APIKEY</strong>
</p>

<p align="left">
  <img class=" wp-image-559  aligncenter" src="http://i2.wp.com/josephephillips.com/wp-content/uploads/2015/05/Issues.png?resize=423%2C304" alt="Issues" data-recalc-dims="1" />
</p>

<p align="left">
  The response for the Issues API call is:
</p>

<pre class="lang:xhtml decode:true">This XML file does not appear to have any style information associated with it. The document tree is shown below.
     &lt;response&gt;
         &lt;error&gt;
             &lt;![CDATA[ OK ]]&gt;
         &lt;/error&gt;
         &lt;limit&gt;100&lt;/limit&gt;
         &lt;offset&gt;0&lt;/offset&gt;
         &lt;number_of_page_results&gt;100&lt;/number_of_page_results&gt;
         &lt;number_of_total_results&gt;439999&lt;/number_of_total_results&gt;
         &lt;status_code&gt;1&lt;/status_code&gt;
         &lt;results&gt;...&lt;/results&gt; //Collapsed for readability
         &lt;version&gt;1.0&lt;/version&gt;
     &lt;/response&gt;</pre>

The response shows that the API call was “OK”, meaning there were no errors. Along with showing that the limit of 100 results was reached, but there were a 439,999 results matching the Comic Vine Wiki for issues. (Later will explain the two ways, page and offset, to iterate through the results.) The results section for any API call will show all the fields that are available for a resource. In this scenario we requested all the ***issues***, and we see the ***issue*** fields. If you request volumes, you see volume in the results section.

<div class="csharpcode">
  <pre class="lang:xhtml decode:true ">&lt;results&gt;
        &lt;issue&gt;
            &lt;aliases/&gt;
            &lt;api_detail_url&gt;
                &lt;![CDATA[ http://www.comicvine.com/api/issue/4000-6/ ]]&gt;
            &lt;/api_detail_url&gt;
            &lt;cover_date&gt;
                &lt;![CDATA[ 1952-10-01 ]]&gt;
            &lt;/cover_date&gt;
            &lt;date_added&gt;2008-06-06 11:10:16&lt;/date_added&gt;
            &lt;date_last_updated&gt;2012-11-28 06:41:46&lt;/date_last_updated&gt;
            &lt;deck/&gt;
            &lt;description&gt;...&lt;/description&gt;
            &lt;has_staff_review/&gt;
            &lt;id&gt;6&lt;/id&gt;
            &lt;image&gt;
                &lt;icon_url&gt;...&lt;/icon_url&gt; // Collapsed for readability
                &lt;medium_url&gt;...&lt;/medium_url&gt; // Collapsed for readability
                &lt;screen_url&gt;...&lt;/screen_url&gt;// Collapsed for readability
                &lt;small_url&gt;...&lt;/small_url&gt;// Collapsed for readability
                &lt;super_url&gt;...&lt;/super_url&gt;// Collapsed for readability
                &lt;thumb_url&gt;...&lt;/thumb_url&gt;// Collapsed for readability
                &lt;tiny_url&gt;...&lt;/tiny_url&gt;  // Collapsed for readability
            &lt;/image&gt;
            &lt;issue_number&gt;13&lt;/issue_number&gt;
            &lt;name&gt;...&lt;/name&gt;
            &lt;site_detail_url&gt;...&lt;/site_detail_url&gt;
            &lt;store_date/&gt;
            &lt;volume&gt;
                &lt;api_detail_url&gt;...&lt;/api_detail_url&gt;
                &lt;id&gt;1487&lt;/id&gt;
                &lt;name&gt;
                    &lt;![CDATA[ Chamber of Chills Magazine ]]&gt;
                &lt;/name&gt;
                &lt;site_detail_url&gt;
                    &lt;![CDATA[
                    http://www.comicvine.com/chamber-of-chills-magazine/4050-1487/
                    ]]&gt;
                &lt;/site_detail_url&gt;
            &lt;/volume&gt;
        &lt;/issue&gt;
        &lt;issue&gt;...&lt;/issue&gt; // Collapsed for readability
        &lt;issue&gt;...&lt;/issue&gt; // Collapsed for readability
        &lt;issue&gt;...&lt;/issue&gt;  // Collapsed for readability</pre>

  <p>
    <strong>Second,  add structure to how the data is returned with a <em>sort</em>, </strong>the format for this is:
  </p>
</div>

<p align="center">
  <strong> </strong>URL/<resource>/?api_key=YOUR_APIKEY <strong>&sort=<Field_List></strong>
</p>

The Field_List for each resource is different, and you will need to <a href="http://www.comicvine.com/api/documentation#toc-0-0" target="_blank">review </a>the individual resources to determine which can be used for sorting. Below, is original issues call with a sort to return the data based on cover_date to return all issues sorted by issue name.

<p align="center">
  URL/volume/?api_key=YOUR_APIKEY <strong>&sort=cover_date: desc</strong>
</p>

<p align="center">
  <a href="http://i2.wp.com/josephephillips.com/wp-content/uploads/2015/05/Issues-Sort.png"><img class="aligncenter  wp-image-560" src="http://i2.wp.com/josephephillips.com/wp-content/uploads/2015/05/Issues-Sort.png?resize=579%2C299" alt="Issues - Sort" data-recalc-dims="1" /></a>
</p>

From looking at the wiki, the first comic book that should be returned is Edgar Wallace Comic #1, (uh! Typo, not sure, but it says 2051). The response we see is.

<pre class="lang:xhtml decode:true">//data removed for readability
&lt;issue&gt;
   &lt;aliases/&gt;
     &lt;api_detail_url&gt;
         &lt;![CDATA[ http://www.comicvine.com/api/issue/4000-386024/ ]]&gt;
     &lt;/api_detail_url&gt;
     &lt;cover_date&gt;
         &lt;![CDATA[ 2051-05-23 ]]&gt;
     &lt;/cover_date&gt;
     &lt;date_added&gt;2013-02-10 20:24:46&lt;/date_added&gt;
     &lt;date_last_updated&gt;2014-09-17 13:17:30&lt;/date_last_updated&gt;
     &lt;deck/&gt;
     &lt;description/&gt;
     &lt;has_staff_review/&gt;
     &lt;id&gt;386024&lt;/id&gt;
     &lt;image&gt;...&lt;/image&gt;
     &lt;issue_number&gt;1&lt;/issue_number&gt;
     &lt;name&gt;
        &lt;![CDATA[ When the Gangs come to London ]]&gt;
     &lt;/name&gt;</pre>

> ### Interesting side note
>
> If you call, **URL/issues/?api\_key=YOUR\_APIKEY &sort=name**, you are searching for the name of the issue. With numerous issues not having names, these nameless issues are returned, but are not in any order by volumes.

**By changing the resource you can pull different items. **

Let&#8217;s pull volumes sorted in alphabetical order:

> <p align="center">
>   URL/<strong>volumes</strong>/?api_key=YOUR_APIKEY &sort=name
> </p>

Let&#8217;s pull characters sorted in alphabetical order:

> <p align="center">
>   URL/<strong>characters</strong>/?api_key=YOUR_APIKEY &sort=name
> </p>

**Lastly, lets limit the number of fields that are returned**, to do this we add the field_list to the call.

<p align="center">
  <strong>       </strong>URL/<resource>/?api_key=YOUR_APIKEY &<strong>field_list=<field></strong>
</p>

<p align="center">
  <strong>or </strong>
</p>

<p align="center">
  <strong>       </strong>URL/<resource>/?api_key=YOUR_APIKEY &sort=<field>&<strong>field_list=<field> </strong>
</p>

<p align="left">
  <strong>To pull a list of all the Characters sorted by name with only the name field and the first issue they appeared in,  </strong>you would use:
</p>

<p align="left">
  <strong>       </strong>URL/characters/?api_key=YOUR_APIKEY &sort=name&<strong>field_list=name</strong>
</p>

<pre class="lang:xhtml decode:true">&lt;offset&gt;0&lt;/offset&gt;
&lt;number_of_page_results&gt;100&lt;/number_of_page_results&gt;
&lt;number_of_total_results&gt;95853&lt;/number_of_total_results&gt;
&lt;status_code&gt;1&lt;/status_code&gt;
&lt;results&gt;
	&lt;character&gt;
		&lt;first_appeared_in_issue/&gt;
		&lt;name&gt;
			&lt;![CDATA[ Burnbot ]]&gt;
		&lt;/name&gt;
	&lt;/character&gt;
	&lt;character&gt;
		&lt;first_appeared_in_issue&gt;
			&lt;api_detail_url&gt;
				&lt;![CDATA[
				http://www.comicvine.com/api/first_appeared_in_issue/4000-125904/
				]]&gt;
			&lt;/api_detail_url&gt;
			&lt;id&gt;125904&lt;/id&gt;
			&lt;name/&gt;
			&lt;issue_number&gt;1&lt;/issue_number&gt;
		&lt;/first_appeared_in_issue&gt;
		&lt;name&gt;
			&lt;![CDATA[ 'Breed ]]&gt;
		&lt;/name&gt;
	&lt;/character&gt;
	&lt;character&gt;</pre>

I think this is a good start, we will dive next time into filters&#8230;
