<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-headline">Code that reads like conversation</h1>
          <p class="hero-subheadline">Build applications through natural human-AI collaboration</p>
          <p class="hero-tagline">More natural than markdown, more powerful than code</p>
          
          <div class="hero-actions">
            <button class="btn-primary">Try APML Playground</button>
            <button class="btn-secondary">Read Specification</button>
          </div>
        </div>
        
        <div class="hero-demo">
          <div class="code-block">
            <pre><code>app RestaurantFinder:
  title: "Find Great Food"
  
  interface:
    show search_form:
      placeholder: "What are you craving?"
      location: "Near me"
      
    display restaurant_grid:
      for each restaurant in results:
        show restaurant_card:
          name: restaurant.name
          rating: restaurant.stars
          distance: restaurant.distance</code></pre>
          </div>
          <div class="arrow">→</div>
          <div class="preview">Working Vue.js app in seconds</div>
        </div>
      </div>
    </section>

    <!-- Trinity Principle -->
    <section class="trinity-section">
      <div class="container">
        <h2>The Trinity Principle</h2>
        <p class="section-subtitle">Every application expressed through three message types</p>
        
        <div class="trinity-grid">
          <div class="trinity-card">
            <div class="trinity-icon">📱</div>
            <h3>App → User</h3>
            <p>Display, output, communication to users</p>
            <code>show welcome_message: "Hello, world!"</code>
          </div>
          
          <div class="trinity-card">
            <div class="trinity-icon">👆</div>
            <h3>User → App</h3>
            <p>Interaction, input, commands from users</p>
            <code>when user clicks "submit": validate form</code>
          </div>
          
          <div class="trinity-card">
            <div class="trinity-icon">⚡</div>
            <h3>App → App</h3>
            <p>Processing, logic, internal workflows</p>
            <code>sync with external_api: fetch latest_data</code>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <h3>Interactive Specification</h3>
            <p>Explore every aspect of APML syntax and semantics</p>
          </div>
          
          <div class="feature-card">
            <h3>APML Playground</h3>
            <p>Interactive editor with real-time compilation</p>
          </div>
          
          <div class="feature-card">
            <h3>Real-world Examples</h3>
            <p>See APML in action across different industries</p>
          </div>
          
          <div class="feature-card">
            <h3>Tools & Compilers</h3>
            <p>Vue compiler stable, Swift & Kotlin coming Q2 2025</p>
          </div>
          
          <div class="feature-card">
            <h3>APML Community</h3>
            <p>GitHub, Discord, and forum with 500+ developers</p>
          </div>
          
          <div class="feature-card">
            <h3>Production Ready</h3>
            <p>Take APML to the next level with ADE platform</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Build Production Apps?</h2>
        <p>Take APML to the next level with ADE</p>
        <button class="btn-cta">Try ADE Free</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  console.log('APML.dev homepage loaded')
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  padding: 8rem 0;
  text-align: center;
}

.hero-headline {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheadline {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #cbd5e1;
}

.hero-tagline {
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: #94a3b8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.btn-primary, .btn-secondary, .btn-cta {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.btn-secondary {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border: 1px solid #6366f1;
}

.btn-secondary:hover {
  background: rgba(99, 102, 241, 0.2);
}

.hero-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}

.code-block {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.75rem;
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  text-align: left;
  flex: 1;
  max-width: 400px;
}

.arrow {
  font-size: 2rem;
  color: #6366f1;
}

.preview {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid #6366f1;
  border-radius: 0.75rem;
  padding: 2rem;
  font-weight: 600;
  color: #6366f1;
  flex: 1;
  max-width: 200px;
}

/* Trinity Section */
.trinity-section {
  padding: 6rem 0;
  background: rgba(30, 41, 59, 0.5);
}

.trinity-section h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 4rem;
}

.trinity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.trinity-card {
  background: rgba(51, 65, 85, 0.3);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.trinity-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.trinity-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.trinity-card p {
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.trinity-card code {
  background: #1e293b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  color: #6366f1;
  font-size: 0.875rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(51, 65, 85, 0.3);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.feature-card p {
  color: #cbd5e1;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  text-align: center;
  background: rgba(99, 102, 241, 0.1);
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.btn-cta {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 1.125rem;
  padding: 1.25rem 3rem;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-headline {
    font-size: 2.5rem;
  }
  
  .hero-demo {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .trinity-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>