---
layout: post
title: 'Comic Vine API &#8211; Part 2 &#8211; Advanced Filters'
author: Joseph
img: /assets/img/blog/comicvine2.jpg
tags:
  - API
published: true
---
Following up on [Part 1](/blog/how-to-use-comic-vine-api-part-1 "Part 1"), this is my series on learning how to use [Comic Vine API](http://www.comicvine.com/api/){:target="_blank"}. In the first post, I talked about basic API set-up, obtaining your [own API key](https://auth.comicvine.com/signup/){:target="_blank"}, making basic API calls, sorting the data returned, and limiting fields returned using the filed list. T

Below is the information that will help you understand these posts.

### Formatting and Resource information

###  Abbreviations
__url__ = The Comic Vine API address is [http://comicvine.gamespot.com/api](http://comicvine.gamespot.com/api){:target="_blank"}

__your_apikey__ = Your Personal API Key. Can be acquired [here](https://auth.comicvine.com/signup/){:target="_blank"}.

__&lt;resource&gt;__ = The Comic Vine Resources, sample below

__&lt;field_list&gt;__ = Any field within the resource being called


### Sample of API Resources

>Each resource as a plural and singular component. In most API calls, you will use the plural to have the call return a list of  the singular.

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
    <a href="http://www.comicvine.com/api/documentation#toc-0-34" target="_blank">(s)</a>                
    <a href="http://www.comicvine.com/api/documentation#toc-0-40" target="_blank">Volume</a>
    <a href="http://www.comicvine.com/api/documentation#toc-0-41" target="_blank">(s)</a>
  </p>

  <p style="padding-left: 90px;" align="left">
    <a href="http://www.comicvine.com/api/documentation#toc-0-30" target="_blank">Search</a>
  </p>


### Okay, finally, some Comic Vine API Examples…..
Lets start with a basic call with a filter.

> url/&lt;resource&gt;/?api_key=your_apikey __&filter=&lt;field_list&gt;: (filter statement)__

By design, Comic Vine does not use all fields in a resource to filter data. It is important to review the [API resources](http://www.comicvine.com/api/documentation){:target="_blank"}  to see which fields can be used.

Now, lets create a call to start pulling back some characters. Lets filter the data to return just the females.

> url/__characters__/?api_key=your_apikey&__filter=gender:female__

Our first character returned from the above call is: [Dream Girl](http://www.comicvine.com/dream-girl/4005-1254/){:target="_blank"}

<img class="img-portfolio img-responsive" src="http://static6.comicvine.com/uploads/original/9/92932/2120994-dg11.jpg"  />

<pre>
<code class="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
    &lt;response&gt;
    &lt;error&gt;
    &lt;![CDATA[ OK ]]&gt;
    &lt;/error&gt;
    &lt;limit&gt;100&lt;/limit&gt;
    &lt;offset&gt;0&lt;/offset&gt;
    &lt;number_of_page_results&gt;100&lt;/number_of_page_results&gt;
    &lt;number_of_total_results&gt;18430&lt;/number_of_total_results&gt;
    &lt;status_code&gt;1&lt;/status_code&gt;
    &lt;results&gt;
        &lt;character&gt;
            &lt;aliases&gt;...&lt;/aliases&gt;
            &lt;api_detail_url&gt;...&lt;/api_detail_url&gt;
            &lt;birth/&gt;     &lt;count_of_issue_appearances&gt;341&lt;/count_of_issue_appearances&gt;
            &lt;date_added&gt;2008-06-06 11:27:38&lt;/date_added&gt;
            &lt;date_last_updated&gt;2013-03-20 20:06:16&lt;/date_last_updated&gt;
            &lt;deck&gt;...&lt;/deck&gt;
            &lt;description&gt;...&lt;/description&gt;
            &lt;first_appeared_in_issue&gt;...&lt;/first_appeared_in_issue&gt;
            &lt;gender&gt;2&lt;/gender&gt;
            &lt;id1254&lt;/id&gt;
            &lt;image&gt;...&lt;/image&gt;
            &lt;name&gt;
                &lt;[CDATA[ Dream Girl ]]&gt;
            &lt;/name&gt;
</code>
</pre>

To improve this call, __lets add structure to the previous call  with a *sort*,__ the format for this is:

> url/&lt;resource&gt;/?api_key=your_apikey&filter=&lt;field_list&gt;:(filter statement)&__sort=&lt;field_list&gt;: (direction)__

The below call is an example for looking for males and sort them descending by name:

> url/characters/?api_key=YOUR_APIKEY&filter=gender:female&__sort=name: desc__

This time our first response is [ZZasha!?!](http://comicvine.gamespot.com/zzasha/4005-32696/){:target="_blank"}

<pre>
<code class="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
        &lt;gender&gt;2&lt;/gender&gt;
        &lt;id&gt;32696&lt;/id&gt;
        &lt;image&gt;...&lt;/image&gt;
        &lt;name&gt;
            &lt;[<![CDATA[ Zzasha ]]>&gt;
        &lt;/name&gt;
</code>
</pre>

__But, let’s improve this call with an additional filter.__ There are two ways we can do this:

Adding an additional filter statement

> &filter=&lt;field_list&gt;: (filter statement) __&__ filter=&lt;field_list&gt;: (filter statement)

Placing commas “,” between the filters

> &filter=&lt;field_list&gt;: (filter statement) __,__ &lt;field_list&gt;: (filter statement)


So, lets see if we can find my favorite character [Hawkeye](http://www.comicvine.com/hawkeye/4005-1475/){:target="_blank"}. We will use the below call:

> url/characters/?api_key=your_apikey& __filter=gender:male,name:hawkeye__

Yep. It returned Hawkeye…. and [Sagittarius (Hawkeye LMD)](http://www.comicvine.com/sagittarius-hawkeye-lmd/4005-89494/){:target="_blank"}.  Where did this other Hawkeye come from…. Oh, the [Zodiac](http://www.comicvine.com/west-coast-avengers-26-zodiac-attack/4000-28820/){:target="_blank"} copy!!!

<img class="img-portfolio img-responsive" src="http://static8.comicvine.com/uploads/original/8/84205/3106326-copy+of+6-13-2013_001.jpg"  />

<pre>
<code class="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
    &lt;response&gt;
    &lt;error&gt;
        &lt;![CDATA[ OK ]]&gt;
    &lt;/error&gt;
    &lt;limit&gt;100&lt;/limit&gt;
    &lt;offset&gt;0&lt;/offset&gt;
    &lt;number_of_page_results&gt;2&lt;/number_of_page_results&gt;
    &lt;number_of_total_results&gt;2&lt;/number_of_total_results&gt;
    &lt;status_code&gt;1&lt;/status_code&gt;
    &lt;results&gt;
        &lt;character&gt;...&lt;/character&gt;
        &lt;character&gt;
            &lt;aliases/&gt;
            &lt;api_detail_url&gt;...&lt;/api_detail_url&gt;
            &lt;birth/&gt;
            &lt;count_of_issue_appearances&gt;4&lt;/count_of_issue_appearances&gt;
            &lt;date_added&gt;2013-05-17 20:10:07&lt;/date_added&gt;
            &lt;date_last_updated&gt;2013-05-17 21:49:04&lt;/date_last_updated&gt;
            &lt;deck&gt;...&lt;/deck&gt;
            &lt;description&gt;...&lt;/description&gt;
            &lt;first_appeared_in_issue&gt;...&lt;/first_appeared_in_issue&gt;
            &lt;gender&gt;1&lt;/gender&gt;
            &lt;id&gt;89494&lt;/id&gt;
            &lt;image&gt;...&lt;/image&gt;
            &lt;name&gt;
                &lt;![CDATA[ Sagittarius (Hawkeye LMD) ]]&gt;
            &lt;/name&gt;
</code>
</pre>


>*With the previous call returning both Hawkeye and Sagittarius (Hawkeye LMD), this shows that filters are not looking for exact matches. These filters are looking for the given string within the Field_List.*


__Lastly, lets make a final call to pull back all the “X-Men” volumes with only the name field.__ To do this, we will add a <Field_List> to the call to pull back only the name.


> url/characters/?api_key=your_apikey& __filter=name: X-men__&field_list=name

<img class="img-portfolio img-responsive" src="http://i2.wp.com/static.comicvine.com/uploads/scale_small/3/31666/3338645-1380300323.jpg?resize=326%2C497" />

<pre>
<code class="xml">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
    &lt;results&gt;
    &lt;volume&gt;
        &lt;name&gt;
            &lt;![CDATA[ The X-Men ]]&gt;
        &lt;/name&gt;
    &lt;/volume&gt;
    &lt;volume&gt;
        &lt;name&gt;
            &lt;![CDATA[ Giant-Size X-Men ]]&gt;
        &lt;/name&gt;
    &lt;/volume&gt;
    &lt;volume&gt;
        &lt;name&gt;
            &lt;![CDATA[ The Uncanny X-Men ]]&gt;
        &lt;/name&gt;
    &lt;/volume&gt;
    &lt;volume&gt;
        &lt;name&gt;
            &lt;![CDATA[ X-Men Classics Starring the X-Men ]]&gt;
        &lt;/name&gt;
    &lt;/volume&gt;
    &lt;volume&gt;
        &lt;name&gt;
            &lt;![CDATA[ The X-Men and The Micronauts ]]&gt;
        &lt;/name&gt;
    &lt;/volume&gt;
</code>
</pre>

At this point we have covered a lot of the basic components of making API calls Comic Vine’s API. We can Sort, Filter, and limit fields. The next couple posts we will start looking at pagination and maneuvering though all the data instead of just looking at the first response. To do this, we might need to start adding some programming to help with this. Versus, just typing URLs into a browser.
