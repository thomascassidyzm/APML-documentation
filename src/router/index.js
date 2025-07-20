import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SpecificationPage from '../pages/SpecificationPage.vue'  
import PlaygroundPage from '../pages/PlaygroundPage.vue'
import ExamplesPage from '../pages/ExamplesPage.vue'
import PatternLibraryRoutes from './pattern-library-routes.js'
import ConversationRoutes from './conversation-routes.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { showInNav: true, title: 'Home', icon: 'home' }
  },
  {
    path: '/specification',
    name: 'Language Spec',
    component: SpecificationPage,
    meta: { showInNav: true, title: 'Language Spec', icon: 'document-text' }
  },
  {
    path: '/playground',
    name: 'Playground',
    component: PlaygroundPage,
    meta: { showInNav: true, title: 'Playground', icon: 'play' }
  },
  {
    path: '/examples',
    name: 'Examples',
    component: ExamplesPage,
    meta: { showInNav: true, title: 'Examples', icon: 'light-bulb' }
  },
  // Pattern Library Routes  
  ...PatternLibraryRoutes,
  // Conversation-Preserving Routes
  ...ConversationRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router