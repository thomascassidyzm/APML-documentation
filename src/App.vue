<template>
  <div id="app" class="app-container">
    <!-- Glassmorphism Navigation -->
    <header class="nav-glass" v-if="showHeader">
      <div class="nav-content">
        <router-link to="/" class="logo-link">
          <div class="logo-container">
            <div class="logo-icon"></div>
            <h1 class="app-title">{{ title }}</h1>
          </div>
        </router-link>
        
        <nav class="nav-links" v-if="hasNavigation">
          <router-link 
            v-for="route in navRoutes" 
            :key="route.path" 
            :to="route.path" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === route.path }"
          >
            <span class="nav-link-text">{{ route.meta?.title || route.name }}</span>
            <div class="nav-link-indicator"></div>
          </router-link>
        </nav>
      </div>
    </header>
    
    <!-- Main Content Area -->
    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Beautiful Footer -->
    <footer class="app-footer" v-if="showFooter">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-title">{{ title }}</h3>
          <p class="footer-tagline">✨ Powered by APML - Logically Complete conversational code</p>
        </div>
        <div class="footer-meta">
          <p>&copy; {{ new Date().getFullYear() }} {{ title }}</p>
          <p class="footer-version">v{{ version }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// App metadata
const title = ref('APML - The Universal Language for Human-AI Collaboration')
const description = ref('Official home of APML v0.9.0 - Logically Complete conversational code')
const version = ref('1.0.0')

// Navigation
const router = useRouter()
const navRoutes = computed(() => router.getRoutes().filter(route => route.meta?.showInNav))
const hasNavigation = computed(() => navRoutes.value.length > 1)

// UI state
const showHeader = ref(true)
const showFooter = ref(true)

// Enhanced lifecycle
onMounted(() => {
  document.title = title.value
  if (description.value) {
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.content = description.value
  }
  
  // Add beautiful loading animation
  document.body.classList.add('loaded')
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import './styles/design-system.css';

/* Enhanced App Styles */
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  background-attachment: fixed;
  color: #f8fafc;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
}

/* Glassmorphism Navigation */
.nav-glass {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 4px;
  opacity: 0.9;
}

.app-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  position: relative;
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover::before,
.nav-link-active::before {
  opacity: 1;
}

.nav-link:hover {
  color: #f8fafc;
  transform: translateY(-1px);
}

.nav-link-active {
  color: #6366f1;
}

.nav-link-indicator {
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #6366f1;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link-active .nav-link-indicator {
  opacity: 1;
}

/* Main Content */
.app-main {
  margin-top: 80px;
  min-height: calc(100vh - 160px);
}

/* Page Transitions */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.4s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Beautiful Footer */
.app-footer {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.footer-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
}

.footer-tagline {
  margin: 0;
  color: #94a3b8;
  font-size: 0.875rem;
}

.footer-meta {
  text-align: right;
  color: #64748b;
  font-size: 0.875rem;
}

.footer-meta p {
  margin: 0.25rem 0;
}

.footer-version {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  opacity: 0.7;
}

/* Loading Animation */
body:not(.loaded) .app-container {
  opacity: 0;
  transform: scale(0.98);
}

body.loaded .app-container {
  opacity: 1;
  transform: scale(1);
  transition: all 0.6s ease;
}

/* Responsive Design */
/* Enhanced Mobile Navigation */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem;
  }
  
  .logo-container {
    align-self: center;
  }
  
  .nav-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    text-align: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
  }
  
  .nav-link:hover {
    background: rgba(99, 102, 241, 0.15);
  }
  
  .app-main {
    margin-top: 140px;
  }
}

@media (max-width: 480px) {
  .nav-links {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  
  .nav-link {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
  }
  
  .app-main {
    margin-top: 160px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
  
  .footer-meta {
    text-align: center;
  }
}
</style>