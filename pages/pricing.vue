<template>
  <div class="container">
    <h1>Pricing Plans</h1>
    <p>Choose the plan that works best for you</p>
    
    <div class="pricing-grid">
      <div class="plan">
        <h3>Basic</h3>
        <div class="price">$9/mo</div>
        <ul>
          <li>Up to 5 projects</li>
          <li>Basic support</li>
          <li>1GB storage</li>
        </ul>
        <button class="btn">Choose Basic</button>
      </div>
      
      <div class="plan featured">
        <div class="badge">Popular</div>
        <h3>Pro</h3>
        <div class="price">$29/mo</div>
        <ul>
          <li>Unlimited projects</li>
          <li>Priority support</li>
          <li>10GB storage</li>
          <li>Advanced analytics</li>
        </ul>
        <button class="btn primary">Choose Pro</button>
      </div>
      
      <div class="plan">
        <h3>Enterprise</h3>
        <div class="price">$99/mo</div>
        <ul>
          <li>Unlimited everything</li>
          <li>24/7 phone support</li>
          <li>100GB storage</li>
          <li>Custom integrations</li>
        </ul>
        <button class="btn">Choose Enterprise</button>
      </div>
    </div>

    <div class="back-nav">
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Pricing - GA Test'
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.plan {
  position: relative;
  padding: 2rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  text-align: center;
}

.plan.featured {
  border-color: #3b82f6;
  transform: scale(1.05);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 1rem 0;
}

.plan ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.plan li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.btn {
  width: 100%;
  padding: 12px 24px;
  border: 2px solid #3b82f6;
  background: white;
  color: #3b82f6;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
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