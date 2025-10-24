<template>
  <div class="container">
    <h1>Google Analytics Test Site</h1>
    <p>Navigate to different pages to test GA pageview tracking</p>
    
    <div class="navigation">
      <h3>Test Pages:</h3>
      <ul>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Home - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}


.navigation ul {
  list-style: none;
  padding: 0;
}

.navigation li {
  margin: 0.5rem 0;
}

.navigation a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.navigation a:hover {
  text-decoration: underline;
}
</style>