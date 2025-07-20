// Vue Routes - Generated from APML v0.9.0 Specification
// Follows exact semantic rules from language_semantics.compile_to_target_platform

const PatternLibraryRoutes = [
  {
    path: '/patterns',
    name: 'PatternLibraryIndex',
    component: () => import('../pages/patterns/PatternLibraryIndexPage.vue'),
    meta: {
      title: 'Design Intelligence Pattern Library',
      description: '',
      contentSource: '',
      displayMode: 'standard'
    }
  },
  {
    path: '/patterns/design-intelligence',
    name: 'DesignIntelligence',
    component: () => import('../pages/patterns/DesignIntelligencePage.vue'),
    meta: {
      title: 'Design Intelligence Framework',
      description: '',
      contentSource: 'src/patterns/design-intelligence.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/business-strategy',
    name: 'BusinessStrategy',
    component: () => import('../pages/patterns/BusinessStrategyPage.vue'),
    meta: {
      title: 'Business Strategy Patterns',
      description: '',
      contentSource: 'src/patterns/business-strategy-patterns.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/research-methodology',
    name: 'ResearchMethodology',
    component: () => import('../pages/patterns/ResearchMethodologyPage.vue'),
    meta: {
      title: 'Research Methodology Patterns',
      description: '',
      contentSource: 'src/patterns/research-methodology-patterns.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/design-intelligence/user-research',
    name: 'UserResearchMethods',
    component: () => import('../pages/patterns/UserResearchMethodsPage.vue'),
    meta: {
      title: 'User Research Methods',
      description: '',
      contentSource: 'src/patterns/user-research-methods.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/design-intelligence/problem-framing',
    name: 'ProblemFraming',
    component: () => import('../pages/patterns/ProblemFramingPage.vue'),
    meta: {
      title: 'Problem Framing Techniques',
      description: '',
      contentSource: 'src/patterns/problem-framing.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/design-intelligence/ideation',
    name: 'IdeationMethods',
    component: () => import('../pages/patterns/IdeationMethodsPage.vue'),
    meta: {
      title: 'Ideation Methods',
      description: '',
      contentSource: 'src/patterns/ideation-methods.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  },
  {
    path: '/patterns/design-intelligence/validation',
    name: 'ValidationFrameworks',
    component: () => import('../pages/patterns/ValidationFrameworksPage.vue'),
    meta: {
      title: 'Validation Frameworks',
      description: '',
      contentSource: 'src/patterns/validation-frameworks.apml',
      displayMode: 'apml_with_syntax_highlighting'
    }
  }
]

export default PatternLibraryRoutes
