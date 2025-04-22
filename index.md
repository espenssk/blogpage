---
layout: default
title: Home
---

<!-- Flash News Rotator -->
<div class="featured-rotator">
  <a id="featured-rotator-link" href="#">
    <span id="featured-rotator-text">Loading...</span>
  </a>
</div>

## Featured Articles

<section class="hero-grid fade-in">
  <a
    href="#"
    class="hero-grid-item"
    style="background-image: url('/assets/images/zerotrust.png');"
    title="Debug Tile"
  >
    <div class="hero-category">Debug</div>
    <div class="hero-overlay">
      <span>Debug Tile Rendered</span>
    </div>
  </a>
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

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const posts = [
      {% assign featured = site.posts | sort: "date" | reverse | slice: 0, 6 %}
      {% for post in featured %}
        {
          title: "{{ post.title | escape }}",
          url: "{{ post.url }}"
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];
    let index = 0;
    const rotatorText = document.getElementById("featured-rotator-text");
    const rotatorLink = document.getElementById("featured-rotator-link");

    function rotatePost() {
      const post = posts[index];
      rotatorText.classList.remove("fade-in");
      void rotatorText.offsetWidth;
      rotatorText.textContent = post.title;
      rotatorLink.href = post.url;
      rotatorText.classList.add("fade-in");
      index = (index + 1) % posts.length;
    }

    rotatePost();
    setInterval(rotatePost, 8000);
  });
</script>
