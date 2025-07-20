#!/usr/bin/env node

/**
 * APML Router Compiler
 * Converts pattern-library-routing.apml to Vue router configuration
 */

import fs from 'fs'
import path from 'path'

class APMLRouterCompiler {
  constructor() {
    this.routes = []
  }

  parseAPMLRouting(apmlContent) {
    // Simple APML parser for routing specifications
    const lines = apmlContent.split('\n')
    let currentSection = null
    let currentRoute = {}
    
    for (let line of lines) {
      line = line.trim()
      
      // Skip comments and empty lines
      if (!line || line.startsWith('#')) continue
      
      // Detect route sections
      if (line.endsWith('_route:')) {
        if (Object.keys(currentRoute).length > 0) {
          this.routes.push(currentRoute)
        }
        currentRoute = {}
        currentSection = 'route'
        continue
      }
      
      // Parse route properties
      if (currentSection === 'route') {
        const match = line.match(/(\w+):\s*"([^"]*)"/)
        if (match) {
          const [, key, value] = match
          currentRoute[key] = value
        }
      }
    }
    
    // Add the last route
    if (Object.keys(currentRoute).length > 0) {
      this.routes.push(currentRoute)
    }
  }

  generateVueRoutes() {
    // Filter to only include pattern library routes, not main navigation
    const patternRoutes = this.routes.filter(route => 
      route.path && (route.path.startsWith('/patterns') || route.path.startsWith('/learning'))
    )
    
    // Add the main patterns index route manually for now
    const indexRoute = `  {
    path: '/patterns',
    name: 'PatternLibrary',
    component: () => import('../pages/patterns/PatternLibraryIndexPage.vue'),
    meta: {
      title: 'Design Intelligence Pattern Library | APML',
      description: 'Complete methodologies for human-centered problem solving using APML',
      navLabel: 'Pattern Library'
    }
  }`
    
    const routeConfigs = patternRoutes.map(route => {
      // Escape quotes properly for JavaScript strings
      const escapeQuotes = (str) => str.replace(/'/g, "\\'").replace(/"/g, '\\"')
      
      // Determine correct component path
      let componentPath = '../pages/patterns/'
      if (route.path.startsWith('/learning/')) {
        componentPath = '../pages/learning/'
      }
      
      return `  {
    path: '${route.path}',
    name: '${route.name}',
    component: () => import('${componentPath}${route.component}.vue'),
    meta: {
      title: '${escapeQuotes(route.meta_title)}',
      description: '${escapeQuotes(route.meta_description)}',
      navLabel: '${escapeQuotes(route.navigation_label)}'
    }
  }`
    }).join(',\n')
    
    const allRoutes = [indexRoute, routeConfigs].join(',\n')

    return `// Pattern Library Routes - Generated from APML Pattern Library Routing Specification
// This file is auto-generated. Do not edit manually.

const PatternLibraryRoutes = [
${allRoutes}
]

export default PatternLibraryRoutes
`
  }

  compile(inputFile, outputFile) {
    try {
      console.log('🔄 Compiling APML routing specification...')
      
      const apmlContent = fs.readFileSync(inputFile, 'utf8')
      this.parseAPMLRouting(apmlContent)
      
      console.log(`📋 Found ${this.routes.length} route definitions`)
      
      const vueRouterCode = this.generateVueRoutes()
      fs.writeFileSync(outputFile, vueRouterCode)
      
      console.log(`✅ Generated Vue router configuration: ${outputFile}`)
      console.log('🚀 Routes:')
      this.routes.forEach(route => {
        console.log(`   ${route.path} → ${route.component}`)
      })
      
    } catch (error) {
      console.error('❌ APML compilation failed:', error.message)
      process.exit(1)
    }
  }
}

// Execute compilation
const compiler = new APMLRouterCompiler()
const inputFile = path.join(process.cwd(), 'pattern-library-routing.apml')
const outputFile = path.join(process.cwd(), 'src/router/pattern-library-routes.js')

compiler.compile(inputFile, outputFile)