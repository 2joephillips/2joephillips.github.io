---
title: 'Comic Vine API Examples &#8230;.. Part 2'
layout: post
permalink: /comic_vine_api_examples_part2/
categories:
  - API Calls
---
Following up on <a href="http://josephephillips.com/how-to-use-comic-vine-api-part-1/" target="_blank">Part 1</a>, this is my series on learning how to use <a href="http://www.comicvine.com/api/" target="_blank">Comic Vine’s API</a>. In the first post, I talked about basic API set-up, obtaining your <a href="https://auth.comicvine.com/signup/" target="_blank">own API Key</a>, making basic API calls, sorting the data returned, and limiting fields returned using the filed list. T

Below is the information that will help you understand these posts.

<span class="collapseomatic " id="id1830"  tabindex="0" title="Formating and Resource information">Formating and Resource information</span>

<div id="target-id1830" class="collapseomatic_content ">
  <h3>
    Abbreviations
  </h3>
  
  <ul>
    <li>
      <em><strong>YOUR_APIKEY</strong></em> = Your Personal API Key. Can be acquired <a href="https://auth.comicvine.com/signup/" target="_blank">here</a>.
    </li>
    <li>
      <em><strong>URL</strong></em> = The Comic Vine API address is <a href="http://www.comicvine.com/api" target="_blank">www.comicvine.com/api</a>
    </li>
    <li>
      <strong> Resources  </strong>= The Comic Vine Resources, sample below
    </li>
    <li>
      <strong>Field_List</strong>=  Any field within the resource being called
    </li>
  </ul>
  
  <h3>
    Sample of API Resources
  </h3>
  
  <blockquote>
    <p>
      Each resource as a plural and singular component. In most API calls, you will use the plural to have the call return a list of  the singular.
    </p>
  </blockquote>
  
  <p align="left">
    <a href="http://www.comicvine.com/api/documentation#toc-0-2" target="_blank">Character</a><a href="http://www.comicvine.com/api/documentation#toc-0-3" target="_blank">(s)</a>         <a href="http://www.comicvine.com/api/documentation#toc-0-10" target="_blank">Issue</a><a href="http://www.comicvine.com/api/documentation#toc-0-11" target="_blank">(s)</a>
  </p>
  
  <p align="left">
    <a href="http://www.comicvine.com/api/documentation#toc-0-26" target="_blank">Publisher</a><a href="http://www.comicvine.com/api/documentation#toc-0-27" target="_blank">(s)</a>          <a href="http://www.comicvine.com/api/documentation#toc-0-28" target="_blank">Series</a>/<a href="http://www.comicvine.com/api/documentation#toc-0-29" target="_blank">Series_List</a>
  </p>
  
  <p align="left">
    <a href="http://www.comicvine.com/api/documentation#toc-0-33" target="_blank">Team</a><a href="http://www.comicvine.com/api/documentation#toc-0-34" target="_blank">(s)</a>                 <a href="http://www.comicvine.com/api/documentation#toc-0-40" target="_blank">Volume</a><a href="http://www.comicvine.com/api/documentation#toc-0-41" target="_blank">(s)</a>
  </p>
  
  <p align="left">
    <a href="http://www.comicvine.com/api/documentation#toc-0-30" target="_blank">Search</a>
  </p>
  
  <p align="left">
    </div> 
    
    <h3 align="left">
      Okay, finally, some Comic Vine API Examples…..
    </h3>
    
    <p align="left">
      <strong>Lets start with a basic call with a filter.</strong>
    </p>
    
    <p align="center">
      <strong>URL/<resource>/?api_key=YOUR_APIKEY&filter=<Field_List>: (filter statement)</strong>
    </p>
    
    <p align="left">
      By design, Comic Vine does not use all all fields in a resource to filter data. It is important to review the <a href="http://www.comicvine.com/api/documentation" target="_blank">API resources</a> to see which fields can be used.
    </p>
    
    <p align="left">
      Now<strong>, </strong>lets create a call to start pulling back some characters, but<strong> lets filter the data to return just the females.</strong>
    </p>
    
    <p align="center">
      <strong>URL/characters/?api_key=YOUR_APIKEY&filter=gender:female</strong>
    </p>
    
    <p>
      Our first character returned from the above call is: <em><strong><a href="http://www.comicvine.com/dream-girl/4005-1254/" target="_blank">Dream Girl</a></strong></em>
    </p>
    
    <p>
      <img class="alignleft" style="display: inline;" src="http://i1.wp.com/static.comicvine.com/uploads/scale_medium/2/29837/2422799-dreamgirl_lsh_vol7_04.jpg?resize=179%2C333" alt="" align="right" data-recalc-dims="1" />
    </p>
    
    <pre class="lang:default decode:true">&lt;response&gt;
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
            &lt;id&gt;1254&lt;/id&gt;
            &lt;image&gt;...&lt;/image&gt;
            &lt;name&gt;
                &lt;![CDATA[ Dream Girl ]]&gt;
            &lt;/name&gt;</pre>
    
    <p>
      &nbsp;
    </p>
    
    <p>
      To improve this call, <strong>lets add structure to the previous call  with a <em>sort</em>, </strong>the format for this is:
    </p>
    
    <p align="center">
      <strong> </strong>URL/<resource>/?api_key=YOUR_APIKEY&filter=<Field_List>: (filter statement)<strong>&sort=<Field_List>: (direction)</strong>
    </p>
    
    <p>
      The below call is an example for looking for males and sort them descending by name:
    </p>
    
    <p align="center">
      URL/characters/?api_key=YOUR_APIKEY&filter=gender:male<strong>&sort=name: desc</strong>
    </p>
    
    <p>
      This time our first response is <a href="http://www.comicvine.com/captain-blaze-steel/4005-90478/" target="_blank">Captain Blaze Steel</a>!
    </p>
    
    <p>
      <img class="alignleft" style="display: inline;" src="http://i1.wp.com/static.comicvine.com/uploads/scale_medium/6/69951/3135116-blaze+steel.jpg?resize=220%2C286" alt="" align="right" data-recalc-dims="1" />
    </p>
    
    <pre class="lang:default decode:true">&lt;results&gt;
    &lt;character&gt;
        &lt;aliases/&gt;
        &lt;api_detail_url&gt;...&lt;/api_detail_url&gt;
        &lt;birth/&gt;
        &lt;count_of_issue_appearances&gt;0&lt;/count_of_issue_appearances&gt;
        &lt;date_added&gt;2013-06-27 00:32:43&lt;/date_added&gt;
        &lt;date_last_updated&gt;2013-06-27 00:56:09&lt;/date_last_updated&gt;
        &lt;deck/&gt;
        &lt;description/&gt;
        &lt;first_appeared_in_issue&gt;...&lt;/first_appeared_in_issue&gt;
        &lt;gender&gt;1&lt;/gender&gt;
        &lt;id&gt;90478&lt;/id&gt;
        &lt;image&gt;...&lt;/image&gt;
        &lt;name&gt;
            &lt;![CDATA[ Captain Blaze Steel ]]&gt;
        &lt;/name&gt;</pre>
    
    <p>
      <strong>But, let’s improve this call with an additional filter. </strong>There are two make this call:
    </p>
    
    <p align="left">
      1. Adding an additional <strong>&filter=<Field_List>: (filter statement)</strong>
    </p>
    
    <p align="center">
      ….<strong>&filter=<Field_List>: (filter statement)&filter=<Field_List>: (filter statement)</strong>
    </p>
    
    <p align="center">
      or
    </p>
    
    <p align="left">
      2. Placing commas “,” between the filters
    </p>
    
    <p align="center">
      ….<strong>&filter=<Field_List>: (filter statement),<Field_List>: (filter statement)</strong>
    </p>
    
    <p align="left">
      So, lets see if we can find my favorite character <a href="http://www.comicvine.com/hawkeye/4005-1475/" target="_blank">Hawkeye</a>. We will use the below call:
    </p>
    
    <p align="center">
      URL/characters/?api_key=YOUR_APIKEY<strong>&filter=gender:male&filter=name:hawkeye</strong>
    </p>
    
    <p>
      Yep. It returned Hawkeye…. and <a href="http://www.comicvine.com/sagittarius-hawkeye-lmd/4005-89494/" target="_blank">Sagittarius (Hawkeye LMD)</a>.  Where did this other Hawkeye come from…. Oh, the <a href="http://www.comicvine.com/west-coast-avengers-26-zodiac-attack/4000-28820/" target="_blank">Zodiac</a> copy!!!
    </p>
    
    <p>
      <img class="alignleft" style="display: inline;" src="http://i0.wp.com/static.comicvine.com/uploads/scale_medium/8/84205/3051836-copy+of+5-17-2013_002.jpg?resize=194%2C475" alt="" align="right" data-recalc-dims="1" />
    </p>
    
    <pre class="lang:default decode:true">&lt;response&gt;
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
            &lt;/name&gt;</pre>
    
    <blockquote>
      <p>
        With the previous call returning both Hawkeye and Sagittarius (Hawkeye LMD), this shows that filters are not looking for exact matches. These filters are looking for the given string within the Field_List.
      </p>
    </blockquote>
    
    <p>
      <strong>Lastly, lets make a final call to pull back all the “X-Men” volumes with only the name field. </strong>To do this, we will add a <Field_List> to the call to pull back only the name.
    </p>
    
    <p align="center">
      URL/characters/?api_key=YOUR_APIKEY&filter=name: X-men<strong>&field_list=name</strong>
    </p>
    
    <p>
      <img class="alignleft" style="display: inline;" src="http://i2.wp.com/static.comicvine.com/uploads/scale_small/3/31666/3338645-1380300323.jpg?resize=326%2C497" alt="" align="right" data-recalc-dims="1" />
    </p>
    
    <pre class="lang:default decode:true">&lt;results&gt;
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
    &lt;/volume&gt;</pre>
    
    <p>
      &nbsp;
    </p>
    
    <p>
      At this point we have covered a lot of the basic components of making API calls Comic Vine’s API. We can Sort, Filter, and limit fields. The next couple posts we will start looking at pagination and maneuvering though all the data instead of just looking at the first response. To do this, we might need to start adding some programming to help with this. Versus, just typing URLs into a browser.
    </p>