---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-text">
    <h2>Welcome to EatherSec</h2>
    <p>Your source for insight and confidence in the world of cyber security.</p>
    <a href="/articles/">Explore Articles</a>
  </div>
  <div class="hero-image">
    <img src="https://source.unsplash.com/400x300/?cybersecurity" alt="Cyber security"/>
  </div>
</section>

<h3>Recent Posts</h3>
<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> – <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
