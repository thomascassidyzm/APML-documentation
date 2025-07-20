<template>
  <div class="components-page">
    <header class="components-hero">
      <div class="container">
        <h1 class="hero-title">Component Registry</h1>
        <p class="hero-subtitle">Production-ready APML components for instant integration</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">{{ componentCount }}</span>
            <span class="stat-label">Components</span>
          </div>
          <div class="stat">
            <span class="stat-number">4</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">APML v0.9.0</span>
          </div>
        </div>
      </div>
    </header>

    <main class="components-content">
      <div class="container">
        <div class="components-filter">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search components..." 
            class="search-input"
          />
          <div class="category-filters">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="['filter-btn', { active: selectedCategory === category.id }]"
            >
              <span class="category-icon">{{ category.icon }}</span>
              {{ category.name }}
            </button>
          </div>
        </div>

        <div class="components-grid">
          <div 
            v-for="component in filteredComponents" 
            :key="component.id"
            class="component-card"
            @click="viewComponent(component)"
          >
            <div class="card-header">
              <h3 class="component-title">{{ component.title }}</h3>
              <div class="component-category">{{ component.category }}</div>
            </div>
            <p class="component-description">{{ component.description }}</p>
            <div class="component-tags">
              <span 
                v-for="tag in component.tags" 
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
            <div class="card-footer">
              <span class="version">v{{ component.version }}</span>
              <div class="card-actions">
                <button class="btn-preview">Preview</button>
                <button class="btn-copy">Copy APML</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = ref([
  { id: 'all', name: 'All', icon: '📦' },
  { id: 'authentication', name: 'Authentication', icon: '🔐' },
  { id: 'navigation', name: 'Navigation', icon: '🧭' },
  { id: 'forms', name: 'Forms', icon: '📝' },
  { id: 'dashboards', name: 'Dashboards', icon: '📊' }
])

const components = ref([
  {
    id: 'signup-flow',
    title: 'Signup Flow',
    description: 'Complete user registration with validation and email verification',
    category: 'authentication',
    tags: ['signup', 'registration', 'validation'],
    version: '1.0.0',
    file: 'auth/signup-flow.apml'
  },
  {
    id: 'login-modal',
    title: 'Login Modal',
    description: 'Secure login modal with social auth and password recovery',
    category: 'authentication',
    tags: ['login', 'modal', 'social-auth'],
    version: '1.0.0',
    file: 'auth/login-modal.apml'
  },
  {
    id: 'password-reset',
    title: 'Password Reset',
    description: 'Secure password recovery with email verification',
    category: 'authentication',
    tags: ['password', 'reset', 'security'],
    version: '1.0.0',
    file: 'auth/password-reset.apml'
  },
  {
    id: 'sidebar-nav',
    title: 'Sidebar Navigation',
    description: 'Collapsible sidebar with nested navigation and user profile',
    category: 'navigation',
    tags: ['sidebar', 'navigation', 'responsive'],
    version: '1.0.0',
    file: 'navigation/sidebar-nav.apml'
  },
  {
    id: 'tab-nav',
    title: 'Tab Navigation',
    description: 'Dynamic tab navigation with overflow handling',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'overflow'],
    version: '1.0.0',
    file: 'navigation/tab-nav.apml'
  },
  {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    description: 'Smart breadcrumb navigation with auto-collapse',
    category: 'navigation',
    tags: ['breadcrumbs', 'navigation', 'seo'],
    version: '1.0.0',
    file: 'navigation/breadcrumbs.apml'
  },
  {
    id: 'contact-form',
    title: 'Contact Form',
    description: 'Multi-step contact form with file uploads and validation',
    category: 'forms',
    tags: ['contact', 'multi-step', 'validation'],
    version: '1.0.0',
    file: 'forms/contact-form.apml'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics with interactive charts and widgets',
    category: 'dashboards',
    tags: ['analytics', 'charts', 'real-time'],
    version: '1.0.0',
    file: 'dashboards/analytics-dashboard.apml'
  }
])

const componentCount = computed(() => components.value.length)

const filteredComponents = computed(() => {
  let filtered = components.value

  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(comp => comp.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(comp => 
      comp.title.toLowerCase().includes(query) ||
      comp.description.toLowerCase().includes(query) ||
      comp.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

const viewComponent = (component) => {
  // Navigate to component detail view
  console.log('Viewing component:', component.id)
}

onMounted(() => {
  console.log('Components Registry loaded')
})
</script>

<style scoped>
.components-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.components-hero {
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

.components-content {
  padding: 4rem 0;
}

.components-filter {
  margin-bottom: 3rem;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #f8fafc;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.search-input::placeholder {
  color: #64748b;
}

.category-filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  color: #cbd5e1;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.filter-btn.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  color: #6366f1;
}

.category-icon {
  font-size: 1rem;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.component-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.component-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.component-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
}

.component-category {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.component-description {
  color: #cbd5e1;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.component-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.version {
  color: #64748b;
  font-size: 0.875rem;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-preview, .btn-copy {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-preview {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.btn-copy {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.btn-preview:hover {
  background: rgba(99, 102, 241, 0.2);
}

.btn-copy:hover {
  background: rgba(34, 197, 94, 0.2);
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .category-filters {
    justify-content: center;
  }
}
</style>