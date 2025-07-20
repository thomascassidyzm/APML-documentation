// Pattern Library Routes - Generated from APML Pattern Library Routing Specification
// This file implements the complete navigation structure for the Design Intelligence Pattern Library

const PatternLibraryRoutes = [
  {
    path: '/patterns',
    name: 'PatternLibrary',
    component: () => import('../pages/patterns/PatternLibraryIndexPage.vue'),
    meta: { 
      title: 'Design Intelligence Pattern Library | APML',
      description: 'Complete methodologies for human-centered problem solving using APML',
      showInNav: true,
      navLabel: 'Pattern Library',
      icon: 'library'
    },
    children: [
      // Design Intelligence Framework Routes
      {
        path: 'design-intelligence',
        name: 'DesignIntelligence',
        component: () => import('../pages/patterns/DesignIntelligencePage.vue'),
        meta: {
          title: 'Design Intelligence Framework | APML Pattern Library',
          description: 'Comprehensive methodologies for human-centered problem solving using APML',
          navLabel: 'Design Intelligence',
          category: 'design-intelligence'
        },
        children: [
          {
            path: 'user-research',
            name: 'UserResearchMethods',
            component: () => import('../pages/patterns/UserResearchMethodsPage.vue'),
            meta: {
              title: 'User Research Methods | Design Intelligence | APML',
              description: 'User journey mapping, empathy mapping, and customer interview frameworks in APML',
              navLabel: 'User Research'
            }
          },
          {
            path: 'problem-framing',
            name: 'ProblemFraming',
            component: () => import('../pages/patterns/ProblemFramingPage.vue'),
            meta: {
              title: 'Problem Framing Techniques | Design Intelligence | APML',
              description: 'How Might We statements, Five Whys, and systems thinking approaches in APML',
              navLabel: 'Problem Framing'
            }
          },
          {
            path: 'ideation',
            name: 'IdeationMethods',
            component: () => import('../pages/patterns/IdeationMethodsPage.vue'),
            meta: {
              title: 'Ideation & Solution Generation | Design Intelligence | APML',
              description: 'Brainstorming, SCAMPER, and analogical thinking frameworks in APML',
              navLabel: 'Ideation Methods'
            }
          },
          {
            path: 'validation',
            name: 'ValidationFrameworks',
            component: () => import('../pages/patterns/ValidationFrameworksPage.vue'),
            meta: {
              title: 'Validation & Testing Frameworks | Design Intelligence | APML',
              description: 'Hypothesis-driven design and experiment frameworks in APML',
              navLabel: 'Validation & Testing'
            }
          }
        ]
      },
      
      // Business Strategy Routes
      {
        path: 'business-strategy',
        name: 'BusinessStrategy',
        component: () => import('../pages/patterns/BusinessStrategyPage.vue'),
        meta: {
          title: 'Business Strategy Patterns | APML Pattern Library',
          description: 'Strategic business design and model innovation patterns using APML',
          navLabel: 'Business Strategy',
          category: 'business-strategy'
        },
        children: [
          {
            path: 'business-models',
            name: 'BusinessModels',
            component: () => import('../pages/patterns/BusinessModelsPage.vue'),
            meta: {
              title: 'Business Model Design | Business Strategy | APML',
              description: 'Business Model Canvas, Lean Canvas, and platform strategy frameworks in APML',
              navLabel: 'Business Models'
            }
          },
          {
            path: 'competitive-analysis',
            name: 'CompetitiveStrategy',
            component: () => import('../pages/patterns/CompetitiveStrategyPage.vue'),
            meta: {
              title: 'Competitive Strategy & Analysis | Business Strategy | APML',
              description: 'Porter\'s Five Forces, Blue Ocean Strategy, and competitive positioning in APML',
              navLabel: 'Competitive Strategy'
            }
          },
          {
            path: 'digital-transformation',
            name: 'DigitalTransformation',
            component: () => import('../pages/patterns/DigitalTransformationPage.vue'),
            meta: {
              title: 'Digital Transformation Strategy | Business Strategy | APML',
              description: 'Digital business model evolution and data strategy frameworks in APML',
              navLabel: 'Digital Transformation'
            }
          }
        ]
      },
      
      // Research Methodology Routes
      {
        path: 'research-methodology',
        name: 'ResearchMethodology',
        component: () => import('../pages/patterns/ResearchMethodologyPage.vue'),
        meta: {
          title: 'Research Methodology Patterns | APML Pattern Library',
          description: 'User research and insight generation patterns using APML',
          navLabel: 'Research Methodology',
          category: 'research-methodology'
        },
        children: [
          {
            path: 'planning',
            name: 'ResearchPlanning',
            component: () => import('../pages/patterns/ResearchPlanningPage.vue'),
            meta: {
              title: 'Research Planning & Design | Research Methodology | APML',
              description: 'Research method selection and study design frameworks in APML',
              navLabel: 'Research Planning'
            }
          },
          {
            path: 'data-collection',
            name: 'DataCollection',
            component: () => import('../pages/patterns/DataCollectionPage.vue'),
            meta: {
              title: 'Data Collection Methods | Research Methodology | APML',
              description: 'Interview guides, survey design, and observation frameworks in APML',
              navLabel: 'Data Collection'
            }
          },
          {
            path: 'analysis',
            name: 'AnalysisSynthesis',
            component: () => import('../pages/patterns/AnalysisSynthesisPage.vue'),
            meta: {
              title: 'Analysis & Synthesis | Research Methodology | APML',
              description: 'Thematic analysis, statistical testing, and insight generation in APML',
              navLabel: 'Analysis & Synthesis'
            }
          },
          {
            path: 'personas',
            name: 'PersonaDevelopment',
            component: () => import('../pages/patterns/PersonaDevelopmentPage.vue'),
            meta: {
              title: 'Persona Development | Research Methodology | APML',
              description: 'User persona creation and application frameworks in APML',
              navLabel: 'Persona Development'
            }
          }
        ]
      },
      
      // Utility Routes
      {
        path: 'search',
        name: 'PatternSearch',
        component: () => import('../pages/patterns/PatternSearchPage.vue'),
        meta: {
          title: 'Search Pattern Library | APML',
          description: 'Find the right methodology for your situation',
          showInNav: false
        }
      },
      {
        path: 'builder',
        name: 'MethodologyBuilder',
        component: () => import('../pages/patterns/MethodologyBuilderPage.vue'),
        meta: {
          title: 'Custom Methodology Builder | APML',
          description: 'Create customized methodology stacks for your team',
          showInNav: false
        }
      },
      {
        path: 'contribute',
        name: 'PatternContribution',
        component: () => import('../pages/patterns/PatternContributionPage.vue'),
        meta: {
          title: 'Contribute to Pattern Library | APML',
          description: 'Share your methodology insights with the community',
          showInNav: false
        }
      }
    ]
  },
  
  // Learning Paths Routes
  {
    path: '/learning',
    name: 'LearningPaths',
    component: () => import('../pages/learning/LearningPathsIndexPage.vue'),
    meta: {
      title: 'Learning Paths | APML Pattern Library',
      description: 'Guided journeys through design intelligence methodologies',
      showInNav: true,
      navLabel: 'Learning Paths',
      icon: 'academic-cap'
    },
    children: [
      {
        path: 'design-thinking-fundamentals',
        name: 'DesignThinkingFundamentals',
        component: () => import('../pages/learning/DesignThinkingFundamentalsPath.vue'),
        meta: {
          title: 'Design Thinking Fundamentals Learning Path | APML',
          description: 'Complete beginner\'s guide to design thinking using APML methodologies',
          navLabel: 'Design Thinking Fundamentals'
        }
      },
      {
        path: 'strategic-business-design',
        name: 'StrategicBusinessDesign',
        component: () => import('../pages/learning/StrategicBusinessDesignPath.vue'),
        meta: {
          title: 'Strategic Business Design Mastery | APML Learning Paths',
          description: 'Advanced business strategy and model innovation for leaders',
          navLabel: 'Strategic Business Design'
        }
      },
      {
        path: 'research-driven-innovation',
        name: 'ResearchDrivenInnovation',
        component: () => import('../pages/learning/ResearchDrivenInnovationPath.vue'),
        meta: {
          title: 'Research-Driven Innovation | APML Learning Paths',
          description: 'Evidence-based innovation for product teams and researchers',
          navLabel: 'Research-Driven Innovation'
        }
      },
      {
        path: 'cross-functional-collaboration',
        name: 'CrossFunctionalCollaboration',
        component: () => import('../pages/learning/CrossFunctionalCollaborationPath.vue'),
        meta: {
          title: 'Cross-Functional Collaboration | APML Learning Paths',
          description: 'Integrating design, strategy, and research across teams',
          navLabel: 'Cross-Functional Collaboration'
        }
      }
    ]
  }
];

export default PatternLibraryRoutes;