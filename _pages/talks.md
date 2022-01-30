---
layout: page
permalink: /talks/
title: Talks
description: Some recent talks about my research.
nav: true
#display_categories: [conference, seminar]
horizontal: true
---

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
    {%- assign news = site.talks | reverse -%}
    {% for item in news %}
      <tr>
        <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
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
