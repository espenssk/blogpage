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


<section class="hero-grid fade-in">
  {% assign featured = site.posts | slice: 0, 4 %}
  {% for post in featured %}
    <a href="{{ post.url }}" class="hero-grid-item" style="background-image: url('{{ post.thumbnail | relative_url }}');">
      <div class="hero-overlay">
        <span>{{ post.title }}</span>
      </div>
    </a>
  {% endfor %}
</section>


</section>

