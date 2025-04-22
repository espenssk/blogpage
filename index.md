---
layout: default
title: Home
---

## Featured Articles

<section class="hero-grid fade-in">
  {% assign featured = site.posts | where_exp: "post", "post.thumbnail" %}
  {% assign featured = featured | slice: 0, 4 %}
  {% for post in featured %}
    <a
      href="{{ post.url }}"
      class="hero-grid-item"
      style="background-image: url('{{ post.thumbnail | default: '/assets/images/fallback.jpg' | relative_url }}');"
      title="{{ post.title }}"
    >
      {% if post.categories %}
        <div class="hero-category">{{ post.categories[0] }}</div>
      {% endif %}
      <div class="hero-overlay">
        <span>{{ post.title }}</span>
      </div>
    </a>
  {% endfor %}
</section>




## Recent Blog Posts

<ul class="post-list">
  {% for post in site.posts %}
    <li class="fade-in fade-in-delay">
      {% if post.thumbnail %}
        <img
          class="post-thumb-left"
          src="{{ post.thumbnail | relative_url }}"
          alt="{{ post.title }} thumbnail"
          loading="lazy"
        >
      {% endif %}
      <div class="post-info">
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
        <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
        <p>{{ post.excerpt | strip_html | truncatewords: 24 }}</p>
        <a href="{{ post.url }}">Read more →</a>
      </div>
    </li>
  {% endfor %}
</ul>
