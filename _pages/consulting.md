---
layout: page
title: Professional services
permalink: /consulting/
description: Some I+D projects I've worked on...
nav: true
nav_order: 5
---


<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
    {%- assign news = site.consulting | reverse -%}
    {% for item in news %}
      <tr>
        <th scope="row">{{ item.date | date: "%Y" }}</th>
        {% if item.media -%}
          <td>
            {{item.media}}
          </td>
        {%- endif %}
        <td>
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
        </td>
      </tr>
    {%- endfor %}
    </table>
  </div>
</div>

