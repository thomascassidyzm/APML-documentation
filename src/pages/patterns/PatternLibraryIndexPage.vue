<template>
  <div class="pattern-library-index">
    <header class="pattern-hero">
      <div class="container">
        <h1 class="hero-title">Design Intelligence Pattern Library</h1>
        <p class="hero-subtitle">Complete methodologies for human-centered problem solving using APML</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">65+</span>
            <span class="stat-label">Methodologies</span>
          </div>
          <div class="stat">
            <span class="stat-number">3</span>
            <span class="stat-label">Domains</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">APML Native</span>
          </div>
        </div>
      </div>
    </header>

    <main class="pattern-content">
      <div class="container">
        <div class="domains-grid">
          <router-link 
            to="/patterns/design-intelligence" 
            class="domain-card design-intelligence"
          >
            <div class="card-icon">🧠</div>
            <h3 class="card-title">Design Intelligence Framework</h3>
            <p class="card-description">User research, problem framing, ideation, and validation methodologies</p>
            <div class="card-stats">
              <span class="method-count">25+ Methods</span>
              <span class="complexity">Simple → Advanced</span>
            </div>
            <div class="card-methods">
              <span class="method-tag">User Journey Mapping</span>
              <span class="method-tag">Jobs-to-be-Done</span>
              <span class="method-tag">Five Whys</span>
              <span class="method-tag">How Might We</span>
            </div>
          </router-link>

          <router-link 
            to="/patterns/business-strategy" 
            class="domain-card business-strategy"
          >
            <div class="card-icon">📈</div>
            <h3 class="card-title">Business Strategy Patterns</h3>
            <p class="card-description">Strategic business design and competitive positioning frameworks</p>
            <div class="card-stats">
              <span class="method-count">18+ Methods</span>
              <span class="complexity">Intermediate → Expert</span>
            </div>
            <div class="card-methods">
              <span class="method-tag">Business Model Canvas</span>
              <span class="method-tag">Blue Ocean Strategy</span>
              <span class="method-tag">Platform Strategy</span>
              <span class="method-tag">OKR Alignment</span>
            </div>
          </router-link>

          <router-link 
            to="/patterns/research-methodology" 
            class="domain-card research-methodology"
          >
            <div class="card-icon">🔬</div>
            <h3 class="card-title">Research Methodology</h3>
            <p class="card-description">Evidence-based user research and insight generation patterns</p>
            <div class="card-stats">
              <span class="method-count">22+ Methods</span>
              <span class="complexity">Beginner → Advanced</span>
            </div>
            <div class="card-methods">
              <span class="method-tag">Thematic Analysis</span>
              <span class="method-tag">Persona Development</span>
              <span class="method-tag">Pain Point Prioritization</span>
              <span class="method-tag">Behavioral Segmentation</span>
            </div>
          </router-link>
        </div>

        <div class="quick-access-section">
          <h2 class="section-title">Quick Access</h2>
          <div class="quick-access-grid">
            <router-link to="/patterns/search" class="quick-access-card">
              <div class="quick-icon">🔍</div>
              <h4>Search Patterns</h4>
              <p>Find the right methodology for your situation</p>
            </router-link>
            
            <router-link to="/patterns/builder" class="quick-access-card">
              <div class="quick-icon">🛠️</div>
              <h4>Methodology Builder</h4>
              <p>Create custom methodology stacks</p>
            </router-link>
            
            <router-link to="/learning" class="quick-access-card">
              <div class="quick-icon">🎓</div>
              <h4>Learning Paths</h4>
              <p>Guided journeys through methodologies</p>
            </router-link>
            
            <router-link to="/patterns/contribute" class="quick-access-card">
              <div class="quick-icon">💡</div>
              <h4>Contribute</h4>
              <p>Share your insights with the community</p>
            </router-link>
          </div>
        </div>

        <div class="featured-patterns-section">
          <h2 class="section-title">Featured Patterns</h2>
          <div class="featured-patterns-grid">
            <div class="featured-pattern">
              <h4>User Journey Mapping</h4>
              <p>Visualize user experience across touchpoints</p>
              <span class="pattern-category">Design Intelligence</span>
            </div>
            <div class="featured-pattern">
              <h4>Business Model Canvas</h4>
              <p>Design and analyze business models</p>
              <span class="pattern-category">Business Strategy</span>
            </div>
            <div class="featured-pattern">
              <h4>Jobs-to-be-Done</h4>
              <p>Understand user motivations and context</p>
              <span class="pattern-category">Research Methodology</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  console.log('Pattern Library Index loaded')
})
</script>

<style scoped>
.pattern-library-index {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.pattern-hero {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  padding: 4rem 0;
  text-align: center;
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #6366f1;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.pattern-content {
  padding: 4rem 0;
}

.domains-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.domain-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
}

.domain-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.card-description {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.method-count, .complexity {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.method-tag {
  background: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quick-access-section {
  margin-bottom: 4rem;
}

.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.quick-access-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  text-align: center;
}

.quick-access-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.quick-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.quick-access-card h4 {
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.quick-access-card p {
  color: #94a3b8;
  font-size: 0.875rem;
  margin: 0;
}

.featured-patterns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.featured-pattern {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}

.featured-pattern h4 {
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.featured-pattern p {
  color: #cbd5e1;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.pattern-category {
  background: rgba(168, 85, 247, 0.2);
  color: #a855f7;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .domains-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .quick-access-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>