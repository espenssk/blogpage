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
      <li>
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
        <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
      </li>
    {% endfor %}
  </ul>
</section>
