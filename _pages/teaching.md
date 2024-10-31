---
layout: page
permalink: /teaching/
title: Teaching
description: Material for courses
nav: true
display_categories: [graduate,undergraduate]
horizontal: true
nav_order: 3
---

All of my teaching is given in spanish, so most of the materials here are in spanish.
I like to use [jupyter notebooks](https://jupyter.org/) whenever possible for courses, since that enables to mix math and code easily, and give nice presentations via the [`rise`](https://rise.readthedocs.io/en/latest/) plugin.


<!-- pages/teaching.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.teaching | where: "category", category -%}
  {%- assign sorted_courses = categorized_courses | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_courses -%}
      {% include projects_horizontal.liquid %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_courses -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_courses = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_courses -%}
      {% include projects_horizontal.liquid %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_courses -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
