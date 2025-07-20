import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SpecificationPage from '../pages/SpecificationPage.vue'
import AdeDocsPage from '../pages/AdeDocsPage.vue'
import LlmInstructionsPage from '../pages/LlmInstructionsPage.vue'
import PlaygroundPage from '../pages/PlaygroundPage.vue'
import ExamplesPage from '../pages/ExamplesPage.vue'
import MigrationPage from '../pages/MigrationPage.vue'

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
    path: '/ade-docs',
    name: 'ADE Compiler',
    component: AdeDocsPage,
    meta: { showInNav: true, title: 'ADE Compiler' }
  },
  {
    path: '/llm-instructions',
    name: 'LLM Instructions',
    component: LlmInstructionsPage,
    meta: { showInNav: true, title: 'LLM Instructions' }
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
    path: '/migration',
    name: 'Migration',
    component: MigrationPage,
    meta: { showInNav: true, title: 'Migration' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router