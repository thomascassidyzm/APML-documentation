<template>
  <div id="app" class="app-container">
    <header class="app-header" v-if="showHeader">
      <h1 class="app-title">{{ title }}</h1>
      <nav class="app-nav" v-if="hasNavigation">
        <router-link v-for="route in routes" :key="route.path" :to="route.path" class="nav-link">
          {{ route.name }}
        </router-link>
      </nav>
    </header>
    
    <main class="app-main">
      <router-view />
    </main>
    
    <footer class="app-footer" v-if="showFooter">
      <p>&copy; {{ new Date().getFullYear() }} {{ title }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// App metadata
const title = ref('Ready to Build Production Apps?')
const description = ref('Official home of APML language - Code that reads like conversation')
const version = ref('1.0.0')

// Navigation
const router = useRouter()
const routes = computed(() => router.getRoutes().filter(route => route.meta?.showInNav))
const hasNavigation = computed(() => routes.value.length > 1)

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
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.app-title {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.app-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255,255,255,0.2);
  color: white;
}

.app-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.app-footer {
  background: #f8f9fa;
  color: #6c757d;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
  }
  
  .app-title {
    font-size: 1.5rem;
  }
  
  .app-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .app-main {
    padding: 1rem;
  }
}
</style>