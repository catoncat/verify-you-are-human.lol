<template>
  <div class="container">
    <h1>Our Products</h1>
    
    <div class="product-grid">
      <div 
        v-for="product in products" 
        :key="product.id"
        class="product-card"
      >
        <div class="product-image">📱</div>
        <h3>{{ product.name }}</h3>
        <p class="price">${{ product.price }}</p>
        <p class="category">{{ product.category }}</p>
      </div>
    </div>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const products = ref([
  { id: 1, name: 'Smartphone Pro', price: 999, category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 299, category: 'Electronics' },
  { id: 3, name: 'Running Shoes', price: 149, category: 'Sports' },
  { id: 4, name: 'Coffee Maker', price: 199, category: 'Home' }
])

useHead({
  title: 'Products - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.product-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.product-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #059669;
  margin: 0.5rem 0;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin: 0.25rem;
}

.primary { background: #3b82f6; color: white; }
.secondary { background: #6b7280; color: white; }

.filters {
  margin: 3rem 0;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
}

.back-nav {
  margin-top: 2rem;
}

.back-nav a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}
</style>