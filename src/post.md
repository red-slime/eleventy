---
eleventyComputed:
  title: { { post.attributes.Title } }
layout: default.liquid
pagination:
  data: posts.data
  size: 1
  alias: post
permalink: "posts/{{ post.id }}/"
---

<div class="single-post">
<img src="{{ post.attributes.Featured_Image.data.attributes.formats.small.url }}" />

# {{ post.attributes.Title }}

{{ post.attributes.Content }}

</div>
