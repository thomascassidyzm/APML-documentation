import { createRouter, createWebHistory } from 'vue-router'
import APMLGeneratedRoutes from '../ultimate-generated/router/apml-generated-routes.js'

// APML-First: Everything generated from APML specifications
const routes = [
  // Add root redirect to home
  {
    path: '/',
    redirect: '/home'
  },
  // All routes generated from APML specifications
  ...APMLGeneratedRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router