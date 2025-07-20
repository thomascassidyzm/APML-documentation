<template>
  <div id="app" class="app-container">
    <header class="app-header" v-if="showHeader">
      <div class="header-content">
        <router-link to="/" class="logo">
          <h1 class="app-title">{{ title }}</h1>
        </router-link>
        <nav class="app-nav" v-if="hasNavigation">
          <router-link 
            v-for="route in navRoutes" 
            :key="route.path" 
            :to="route.path" 
            class="nav-link"
            :class="{ active: $route.path === route.path }"
          >
            {{ route.meta?.title || route.name }}
          </router-link>
        </nav>
      </div>
    </header>
    
    <main class="app-main">
      <router-view />
    </main>
    
    <footer class="app-footer" v-if="showFooter">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} {{ title }}</p>
        <p class="footer-tagline">Self-documented with APML</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// App metadata
const title = ref('APML - The Universal Language for Human-AI Collaboration')
const description = ref('Complete APML developer hub - Code that reads like conversation')
const version = ref('2.0.0')

// Navigation
const router = useRouter()
const navRoutes = computed(() => router.getRoutes().filter(route => route.meta?.showInNav))
const hasNavigation = computed(() => navRoutes.value.length > 1)

// UI state
const showHeader = ref(true)
const showFooter = ref(true)

// Lifecycle
onMounted(() => {
  document.title = title.value
  if (description.value) {
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.content = description.value
  }
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0f172a;
}

.app-header {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
  color: inherit;
}

.app-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.app-nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  font-weight: 500;
  position: relative;
}

.nav-link:hover {
  color: #f8fafc;
  background: rgba(99, 102, 241, 0.1);
}

.nav-link.active {
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #6366f1;
  border-radius: 50%;
}

.app-main {
  flex: 1;
  min-height: calc(100vh - 120px);
}

.app-footer {
  background: rgba(30, 41, 59, 0.8);
  border-top: 1px solid rgba(51, 65, 85, 0.5);
  padding: 2rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: #94a3b8;
}

.footer-content p {
  margin: 0.5rem 0;
}

.footer-tagline {
  font-style: italic;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .app-nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}
</style>