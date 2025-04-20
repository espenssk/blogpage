---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-text">
    <h2>Welcome to EatherSec</h2>
    <p>Your source for insight and confidence in the world of cyber security. From articles to resources — stay ahead of threats.</p>
    <a href="/blogpage/articles/">Explore Articles</a>
  </div>
  <div class="hero-image">
    <img src="https://source.unsplash.com/400x300/?cybersecurity" alt="Cyber Security">
  </div>
</section>

<section>
  <h3>Recent Blog Posts</h3>
  <ul class="post-list">
    {% for post in site.posts limit:5 %}
      <li class="fade-in fade-in-delay">
        {% if post.thumbnail %}
          <img class="post-thumb" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail">
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
</section>

