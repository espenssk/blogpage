---
layout: default
title: Articles
permalink: /articles/
---

<section>
  <h2>Featured Cybersecurity Articles</h2>
  <p>Dive deeper into topics like encryption, firewalls, zero-trust architecture, and practical defense strategies.</p>
</section>

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "article" %}
      <li>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
        <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        <a href="{{ post.url }}">Read more →</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
