<template>
  <div class="container">
    <h1>Contact Us</h1>
    <p>Get in touch with our team</p>
    
    <div class="contact-content">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> hello@example.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
      </div>
      
      <div class="contact-form">
        <h3>Send us a message</h3>
        <form>
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 3rem 0;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info p {
  margin: 1rem 0;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
}

.contact-form button {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
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