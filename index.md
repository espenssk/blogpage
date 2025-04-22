---
layout: default
title: Home
---

## Featured Articles

<div class="featured-divider"></div>

<section style="height: 300px; background-image: url('https://placehold.co/600x300'); background-size: cover;">
  <h2 style="color: white; padding: 2rem;">Hero Test</h2>
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
