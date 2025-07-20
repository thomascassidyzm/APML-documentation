<template>
  <div class="pattern-page">
    <header class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/patterns">Pattern Library</router-link>
          <span class="separator">→</span>
          <router-link :to="categoryPath">{{ categoryName }}</router-link>
          <span class="separator">→</span>
          <span class="current">{{ patternName }}</span>
        </nav>
        <h1 class="page-title">{{ patternName }}</h1>
        <p class="page-subtitle">{{ patternDescription }}</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="coming-soon-card">
          <div class="icon">🚧</div>
          <h2>Pattern Under Development</h2>
          <p>This {{ patternName.toLowerCase() }} pattern is being developed as part of the comprehensive APML Design Intelligence Pattern Library.</p>
          <p>It will include:</p>
          <ul>
            <li>Complete APML specifications</li>
            <li>Interactive examples and templates</li>
            <li>Step-by-step implementation guides</li>
            <li>Integration with other patterns</li>
          </ul>
          <div class="actions">
            <router-link to="/patterns" class="btn-secondary">Browse Available Patterns</router-link>
            <router-link to="/patterns/contribute" class="btn-primary">Contribute to Development</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const patternName = computed(() => {
  return route.meta?.title?.split(' | ')[0] || 'Pattern'
})

const patternDescription = computed(() => {
  return route.meta?.description || 'APML-based methodology pattern'
})

const categoryName = computed(() => {
  const path = route.path
  if (path.includes('design-intelligence')) return 'Design Intelligence'
  if (path.includes('business-strategy')) return 'Business Strategy'
  if (path.includes('research-methodology')) return 'Research Methodology'
  return 'Pattern Library'
})

const categoryPath = computed(() => {
  const path = route.path
  if (path.includes('design-intelligence')) return '/patterns/design-intelligence'
  if (path.includes('business-strategy')) return '/patterns/business-strategy'
  if (path.includes('research-methodology')) return '/patterns/research-methodology'
  return '/patterns'
})
</script>

<style scoped>
.pattern-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 2rem 0 4rem;
}

.breadcrumb {
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.breadcrumb a {
  color: #6366f1;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
}

.current {
  color: #f8fafc;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
}

.page-content {
  padding-bottom: 4rem;
}

.coming-soon-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 4rem 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.icon {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.coming-soon-card h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.coming-soon-card p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.coming-soon-card ul {
  text-align: left;
  margin: 2rem 0;
  padding-left: 2rem;
}

.coming-soon-card li {
  color: #cbd5e1;
  margin-bottom: 0.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
}
</style>