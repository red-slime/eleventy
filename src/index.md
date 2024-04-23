---
title: Posts
layout: default.liquid
pagination:
  data: posts.data
  size: 100
  alias: posts
---

# Welcome, Atomic 👋

### View posts published on Strapi 👇

<div class="container">
    {%- for post in posts -%}
        <div class="post-container">
            <img src="{{ post.attributes.Featured_Image.data.attributes.formats.small.url }}" />
            <a href="/posts/{{ post.id }}/">{{ post.attributes.Title }}</a>
            <p>
        </div>
    {%- endfor -%}
</div>
