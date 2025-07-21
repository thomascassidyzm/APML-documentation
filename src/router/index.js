import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import APMLGeneratedRoutes from '../ultimate-generated/router/apml-generated-routes.js'

// APML-First: Everything generated from APML specifications
const routes = [
  // Enhanced home page with our beautiful components
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home',
      showInNav: true,
      enhanced: true
    }
  },
  // Other generated routes (filter out the old home)
  ...APMLGeneratedRoutes.filter(route => route.path !== '/home')
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router