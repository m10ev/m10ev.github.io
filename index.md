---
layout: default
title: Home
---

# Welcome to My Projects

Here are my latest projects:

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%B %d, %Y" }})</small>
    </li>
  {% endfor %}
</ul>
