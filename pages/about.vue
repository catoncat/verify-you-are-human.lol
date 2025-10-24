<template>
  <div class="container">
    <h1>About Us</h1>
    <p>Learn more about our company and mission.</p>
    
    <section>
      <h2>Our Story</h2>
      <p>Founded in 2020, we've been serving customers with quality products and excellent service.</p>
    </section>
    
    <section>
      <h2>Our Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <h3>John Smith</h3>
          <p>CEO & Founder</p>
        </div>
        <div class="team-member">
          <h3>Sarah Johnson</h3>
          <p>CTO</p>
        </div>
        <div class="team-member">
          <h3>Mike Davis</h3>
          <p>Head of Sales</p>
        </div>
      </div>
    </section>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

section {
  margin: 3rem 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.team-member {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
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