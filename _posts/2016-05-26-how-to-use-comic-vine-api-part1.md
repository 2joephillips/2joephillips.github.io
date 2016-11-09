---
layout: post
title: 'Comic Vine API &#8211; Part 1 &#8211; Basics'
author: Joseph
img: /assets/img/blog/comicvine1.jpg
tags:
  - API
published: true
---
I LOVE COMICS! I have a nice collection of comics, and I have been wanting to make a library resources system that can provide me some information on the comics I have.

Luckily, [Comic Vine](http://comicvine.com){:target="_blank"} has more metadata than I could ever need. Plus, they have a free [Web API](http://comicvine.com/api){:target="_blank"} that gives access to all their data, which is a perfect solution for what I am trying to accomplish.

First the forums had all that I needed to get started&#8230; Good documentation, but no examples.  I wanted to see what was already created. Two projects caught my eye: [Comic Vine Scrapper for Comicrack](https://code.google.com/p/comic-vine-scraper/){:target="_blank"} and [Sharp ComicVine](http://sharpcomicvine.codeplex.com/){:target="_blank"}. Both of which had calls to the API that I could use as starting points for my API calls.

But, I wanted a more straight forward resource, so I decided to write one up.

This first blog covers the Comic Vine API  structure, basic API calls, sorting results, and limiting data returned.

For this posts, I  will use the following abbreviations.

__url__ = The Comic Vine API address is [http://comicvine.gamespot.com/api](http://www.comicvine.com/api){:target="_blank"}

__your_apikey__ = Your Personal API Key. Can be acquired [here](https://auth.comicvine.com/signup/){:target="_blank"}.

__&lt;resource&gt;__ = The Comic Vine Resources, sample below

__&lt;field_list&gt;__ = Any field within the resource being called

### Offical documentation for the API Resources

>Each resource as a plural and singular component. In most API calls, you will use the plural to have the call return a list of the singular.

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

Also before we dive into the examples, I want to mention how the __[results](http://www.comicvine.com/api/documentation#toc-0-0) are delivered.__ They are returned in XML format with the following fields: error, limit (Comic Vine caps at 100), offset, number of page results, number of total results, status code, and results. The first example will breakdown these areas in more detail. If you would rather return JSON, you can add __&format=json__ to your call.

### Okay, finally, some Comic Vine API Examples…..

First, a basic API call to __pull back all the data for a specific resource__ that is stored on Comic Vine. By design, this call will pull all issues back in a random pattern. To pull all 506,911 issues within the Comic Vine, you would use:

> url/issues/?api_key=your_apikey

The response for the Issues API call is:

<pre>
<code class="json">
{
    "error": "OK",
    "limit": 100,
    "offset": 0,
    "number_of_page_results": 100,
    "number_of_total_results": 506911,
    "status_code": 1,
    "results": [],
    "version": "1.0"
}
</code>
</pre>

<img class="img-portfolio img-responsive"  src="/img/blog/Issues.png" />

The response shows that the API call was “OK”, meaning there were no errors. Along with showing that the limit of 100 results was reached, but there were a 506,911 results matching the Comic Vine Wiki for issues. (Later will explain the two ways, page and offset, to iterate through the results.) The results section for any API call will show all the fields that are available for a resource. In this scenario we requested all the **issues**, and see the **issue** fields.

If you request volumes, you will return 100 volumes and see that there are 80,007 total.

> url/volumes/?api_key=your_apikey

### Lets add some structure with a *sort*.

The field_list for each resource is different, and you will need to [review](http://www.comicvine.com/api/documentation#toc-0-0){:target="_blank"} the individual resources to determine which can be used for sorting. Below, is original issues call with a sort to return the data based on cover_date to return all issues sorted by issue name.

> url/issues/?api_key=your_apikey&__sort=cover_date: desc__

From looking at the returned JSON, the first comic book that returned was Clumsy Child #1, (uh! Typo, not sure, but it says 2023). The response we see is.

<pre>
<code class="json">
{
  "error": "OK",
  "limit": 100,
  "offset": 0,
  "number_of_page_results": 100,
  "number_of_total_results": 506918,
  "status_code": 1,
  "results": [
      {
        "aliases": null,
        "api_detail_url": "http://comicvine.gamespot.com/api/issue/4000-409326/",
        "cover_date": "2023-06-05",
        "date_added": "2013-06-05 18:54:42",
        "date_last_updated": "2013-06-05 19:11:33",
        "deck": null,
        "description": "",
        "has_staff_review": false,
        "id": 409326,
        "image": {},
        "issue_number": "1",
        "name": "Vol. 1",
</code>
</pre>

> ### Interesting side note
> If you call, url/issues/?api_key=your_apikey&**sort=name**. With numerous issues not having names, these nameless issues are returned, but are not in any order by volumes.

By changing the resource you can pull different items.

Let&#8217;s pull volumes sorted in alphabetical order:

> url/__volumes__/?api_key=your_apikey&sort=name

Let&#8217;s pull characters sorted in alphabetical order:

> url/__characters__/?api_key=your_apikey&sort=name

### Lastly, lets limit the number of fields that are returned
To do this we will add a field_list to the call.

> url/__&lt;resource&gt;__/?api_key=your_apikey&__field_list=&lt;field_list&gt;__

or

> url/__&lt;resource&gt;__/?api_key=your_apikey&sort=&lt;field_list&gt;& __field_list=&lt;field_list&gt;__

To pull a list of all the Characters sorted by name with only the name field and the first issue they appeared in,  you would use:

> url/characters/?api_key=your_apikey &sort=name&__field_list=name__


<pre>
<code class="json">
"error": "OK",
"limit": 100,
"offset": 0,
"number_of_page_results": 100,
"number_of_total_results": 110909,
"status_code": 1,
"results": [
  {
    "name": " Fred Haprele  "
  },
  {
    "name": " Master Fu "
  },
  {
    "name": "'Breed"
  },
  {
    "name": "'Gajat"
  },
  {
    "name": "'Lectron"
</code>
</pre>

That does not look, right... But, it is correct due to the names starting with spaces or special characters.
Okay, I think this is a good start, we will dive next time into filters&#8230;
