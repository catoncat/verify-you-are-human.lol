<template>
  <div class="container">
    <h1>Blog</h1>
    <p>Latest news and insights</p>
    
    <div class="blog-posts">
      <article class="post">
        <h2>Getting Started with Analytics</h2>
        <p class="date">March 15, 2024</p>
        <p>Learn how to set up Google Analytics for your website...</p>
        <NuxtLink to="/blog/analytics-guide" class="read-more">Read More</NuxtLink>
      </article>
      
      <article class="post">
        <h2>Web Performance Tips</h2>
        <p class="date">March 10, 2024</p>
        <p>Improve your website's loading speed with these proven techniques...</p>
        <NuxtLink to="/blog/performance-tips" class="read-more">Read More</NuxtLink>
      </article>
      
      <article class="post">
        <h2>SEO Best Practices</h2>
        <p class="date">March 5, 2024</p>
        <p>Essential SEO strategies every website owner should know...</p>
        <NuxtLink to="/blog/seo-guide" class="read-more">Read More</NuxtLink>
      </article>
    </div>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.blog-posts {
  margin: 3rem 0;
}

.post {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.date {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.read-more {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.back-nav {
  margin-top: 3rem;
}

.back-nav a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}
</style>