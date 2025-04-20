---
layout: default
title: Articles
permalink: /articles/
---

<h2>Cybersecurity Articles</h2>

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "article" %}
      <li class="fade-in fade-in-delay">
        {% if post.thumbnail %}
          <img class="post-thumb-left" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail">
        {% endif %}
        <div class="post-info">
          <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
          <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
          <p>{{ post.excerpt | strip_html | truncatewords: 24 }}</p>
          <a href="{{ post.url }}">Read more →</a>
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
