---
layout: default
title: Articles
---

## All Articles

<ul class="all-articles">
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
