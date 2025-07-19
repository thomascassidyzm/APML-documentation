import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { showInNav: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router