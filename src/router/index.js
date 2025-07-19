import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SpecificationPage from '../pages/SpecificationPage.vue'
import PlaygroundPage from '../pages/PlaygroundPage.vue'
import ExamplesPage from '../pages/ExamplesPage.vue'
import ToolsPage from '../pages/ToolsPage.vue'
import CommunityPage from '../pages/CommunityPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { showInNav: true, title: 'Home' }
  },
  {
    path: '/specification',
    name: 'Specification',
    component: SpecificationPage,
    meta: { showInNav: true, title: 'Specification' }
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
  },
  {
    path: '/tools',
    name: 'Tools',
    component: ToolsPage,
    meta: { showInNav: true, title: 'Tools' }
  },
  {
    path: '/community',
    name: 'Community',
    component: CommunityPage,
    meta: { showInNav: true, title: 'Community' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router