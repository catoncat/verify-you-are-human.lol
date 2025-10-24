<template>
  <div class="container">
    <h1>Our Services</h1>
    <p>Discover what we can do for you</p>
    
    <div class="services-grid">
      <div class="service-card">
        <h3>Web Development</h3>
        <p>Custom websites built with modern technologies</p>
      </div>
      <div class="service-card">
        <h3>Mobile Apps</h3>
        <p>iOS and Android applications</p>
      </div>
      <div class="service-card">
        <h3>Consulting</h3>
        <p>Technical consulting and architecture</p>
      </div>
      <div class="service-card">
        <h3>Support</h3>
        <p>24/7 customer support and maintenance</p>
      </div>
    </div>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Services - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service-card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  text-align: center;
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