---
layout: default
title: Home
---

## Featured Articles

{% assign featured = site.posts | slice: 0, 4 %}
<ul class="featured-articles">
{% for post in featured %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
