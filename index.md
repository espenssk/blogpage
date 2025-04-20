---
layout: default
title: Home
---

<section class="hero-card fade-in">
  <div class="hero-card-content">
    <h2>Welcome to EatherSec</h2>
    <p>Your source for insight and confidence in the world of cyber security.</p>
    <p>From articles to resources — stay ahead of threats with practical knowledge and trustworthy insights.</p>
    <a href="/blogpage/articles/">Explore Articles</a>
  </div>
</section>


<ul class="post-list">
  {% for post in site.posts %}
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
  {% endfor %}
</ul>



</section>

