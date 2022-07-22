---
layout: page
permalink: /publications/
title: Publications
description: The following is a complete list of my publications.
years: [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2005]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

___

<h2>Preprints</h2>

<div class="publications">

{% bibliography -f preprints %}

</div>

___

<h2>Articles and Conferences</h2>

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
