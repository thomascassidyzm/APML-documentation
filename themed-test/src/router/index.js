import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SpecificationPage from '../pages/SpecificationPage.vue'
import PlaygroundPage from '../pages/PlaygroundPage.vue'
import ExamplesPage from '../pages/ExamplesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { showInNav: true, title: 'Home' }
  },
  {
    path: '/specification',
    name: 'Language Spec',
    component: SpecificationPage,
    meta: { showInNav: true, title: 'Language Spec' }
  },
  {
    path: '/playground',
    name: 'Playground',
    component: PlaygroundPage,
    meta: { showInNav: true, title: 'Playground' }
  },
  {
    path: '/examples',
    name: 'Examples',
    component: ExamplesPage,
    meta: { showInNav: true, title: 'Examples' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router