---
layout: default
title: Articles
permalink: /articles/
---

<h2>Curated Cybersecurity Articles</h2>

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "article" %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> – <small>{{ post.date | date: "%B %d, %Y" }}</small>
      </li>
    {% endif %}
  {% endfor %}
</ul>
