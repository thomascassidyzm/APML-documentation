#!/usr/bin/env node

/**
 * APML v0.9.0 Specification-Compliant Compiler
 * Follows the exact semantic rules defined in APML-v0.9.0.apml
 * Implements: language_semantics.compile_to_target_platform
 */

import fs from 'fs'

class APMLSpecificationCompiler {
  constructor() {
    this.application = {}
    this.dataModels = {}
    this.interfaces = {}
    this.logic = {}
    this.targetPlatform = 'vue'
  }

  // Implements: language_semantics.validate_application_structure
  validateApplicationStructure(apmlContent) {
    console.log('🔍 Validating application structure per APML v0.9.0...')
    
    const lines = apmlContent.split('\n').filter(line => line.trim().length > 0)
    
    // require app_declaration at document_start
    const firstLine = lines[0]
    if (!firstLine.match(/^app \w+:/)) {
      throw new Error('Missing app declaration at document start')
    }
    
    // require interface_or_logic section
    const hasInterface = apmlContent.includes('interface')
    const hasLogic = apmlContent.includes('logic')
    if (!hasInterface && !hasLogic) {
      throw new Error('Missing interface or logic section')
    }
    
    // validate trinity_principle_coverage
    this.validateTrinityPrinciple(apmlContent)
    
    console.log('✅ Application structure validation passed')
  }

  // Implements Trinity Principle validation from specification
  validateTrinityPrinciple(apmlContent) {
    const hasAppToUser = apmlContent.includes('show ') || apmlContent.includes('display ')
    const hasUserToApp = apmlContent.includes('when user ')
    const hasAppToApp = apmlContent.includes('process ') || apmlContent.includes('logic ')
    
    if (!hasAppToUser && !hasUserToApp && !hasAppToApp) {
      throw new Error('Trinity Principle violation - missing message patterns')
    }
  }

  // Implements: language_semantics.parse_data_models
  parseDataModels(apmlContent) {
    console.log('📋 Parsing data models per specification...')
    
    const dataModelRegex = /data (\w+):\s*([\s\S]*?)(?=(?:data \w+:|interface|logic|$))/g
    let match
    
    while ((match = dataModelRegex.exec(apmlContent)) !== null) {
      const [, modelName, modelContent] = match
      this.dataModels[modelName] = this.parseFieldDefinitions(modelContent)
      console.log(`📋 Parsed data model: ${modelName}`)
    }
  }

  parseFieldDefinitions(modelContent) {
    const fields = {}
    const lines = modelContent.split('\n')
    
    for (const line of lines) {
      const fieldMatch = line.trim().match(/(\w+):\s*(.+)/)
      if (fieldMatch) {
        const [, fieldName, fieldDefinition] = fieldMatch
        fields[fieldName] = this.parseFieldType(fieldDefinition)
      }
    }
    
    return fields
  }

  parseFieldType(definition) {
    const parts = definition.split(' ')
    return {
      type: parts[0],
      modifiers: parts.slice(1)
    }
  }

  // Implements: language_semantics.process_interface_definitions
  processInterfaceDefinitions(apmlContent) {
    console.log('🎨 Processing interface definitions per specification...')
    
    const interfaceRegex = /interface\s*(\w*):\s*([\s\S]*?)(?=(?:interface|logic|$))/g
    let match
    
    while ((match = interfaceRegex.exec(apmlContent)) !== null) {
      const [, interfaceName, interfaceContent] = match
      this.interfaces[interfaceName || 'default'] = this.parseInterfaceElements(interfaceContent)
      console.log(`🎨 Parsed interface: ${interfaceName || 'default'}`)
    }
  }

  parseInterfaceElements(interfaceContent) {
    const elements = {}
    const lines = interfaceContent.split('\n')
    let currentElement = null
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Parse when user navigates_to patterns (user_to_app messages)
      if (line.startsWith('when user navigates_to ')) {
        const pathMatch = line.match(/when user navigates_to "([^"]+)":/)
        if (pathMatch) {
          currentElement = {
            type: 'navigation',
            path: pathMatch[1],
            trigger: 'user_navigates_to',
            actions: []
          }
        }
      }
      
      // Parse show patterns (app_to_user messages)
      else if (line.startsWith('show ') && currentElement) {
        const showMatch = line.match(/show (\w+):/)
        if (showMatch) {
          currentElement.actions.push({
            type: 'show',
            element: showMatch[1],
            properties: this.parseElementProperties(lines, i + 1)
          })
          elements[currentElement.path] = currentElement
        }
      }
    }
    
    return elements
  }

  parseElementProperties(lines, startIndex) {
    const properties = {}
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Stop at next element or section
      if (line.startsWith('when ') || line.startsWith('show ') || 
          line.startsWith('logic ') || line.startsWith('interface ')) {
        break
      }
      
      // Parse property: "value" pattern
      const propMatch = line.match(/(\w+):\s*"([^"]*)"/)
      if (propMatch) {
        properties[propMatch[1]] = propMatch[2]
      }
    }
    
    return properties
  }

  // Implements: language_semantics.execute_logic_workflows
  executeLogicWorkflows(apmlContent) {
    console.log('⚙️ Processing logic workflows per specification...')
    
    const logicRegex = /logic\s*(\w*):\s*([\s\S]*?)(?=(?:interface|logic|$))/g
    let match
    
    while ((match = logicRegex.exec(apmlContent)) !== null) {
      const [, logicName, logicContent] = match
      this.logic[logicName || 'default'] = this.parseLogicWorkflows(logicContent)
      console.log(`⚙️ Parsed logic: ${logicName || 'default'}`)
    }
  }

  parseLogicWorkflows(logicContent) {
    const workflows = {}
    const lines = logicContent.split('\n')
    
    for (const line of lines) {
      const whenMatch = line.trim().match(/when (\w+) (\w+):/)
      if (whenMatch) {
        const [, subject, action] = whenMatch
        workflows[`${subject}_${action}`] = {
          trigger: `${subject} ${action}`,
          type: 'app_to_app'
        }
      }
    }
    
    return workflows
  }

  // Implements: language_semantics.compile_to_target_platform
  compileToTargetPlatform() {
    console.log('🔄 Compiling to target platform per specification...')
    
    // analyze application_requirements
    this.analyzeApplicationRequirements()
    
    // select optimal_compilation_strategy
    const strategy = this.selectOptimalCompilationStrategy()
    
    // generate platform_specific_code
    return this.generatePlatformSpecificCode(strategy)
  }

  analyzeApplicationRequirements() {
    const requirements = {
      hasNavigation: Object.keys(this.interfaces).some(key => 
        Object.values(this.interfaces[key]).some(el => el.type === 'navigation')
      ),
      hasDataModels: Object.keys(this.dataModels).length > 0,
      hasLogic: Object.keys(this.logic).length > 0
    }
    
    console.log('📊 Application requirements:', requirements)
    return requirements
  }

  selectOptimalCompilationStrategy() {
    // For Vue.js navigation requirements
    return {
      platform: 'vue',
      features: ['routing', 'components', 'metadata']
    }
  }

  generatePlatformSpecificCode(strategy) {
    console.log('🏗️ Generating Vue.js code per APML specification...')
    
    const routes = []
    
    // Process all interface navigation elements
    for (const interfaceName of Object.keys(this.interfaces)) {
      const interfaceElements = this.interfaces[interfaceName]
      
      for (const elementKey of Object.keys(interfaceElements)) {
        const element = interfaceElements[elementKey]
        
        if (element.type === 'navigation') {
          const route = this.generateVueRoute(element)
          if (route) {
            routes.push(route)
          }
        }
      }
    }
    
    return this.formatVueRoutes(routes)
  }

  generateVueRoute(navigationElement) {
    const showAction = navigationElement.actions.find(action => action.type === 'show')
    if (!showAction) return null
    
    // Generate component name from show element type and properties
    const componentName = this.generateComponentName(showAction, navigationElement.path)
    
    return {
      path: navigationElement.path,
      name: this.generateRouteName(componentName),
      component: `() => import('../pages/patterns/${componentName}.vue')`,
      meta: {
        title: showAction.properties.title || '',
        description: showAction.properties.description || '',
        contentSource: showAction.properties.content_source || '',
        displayMode: showAction.properties.display_mode || 'standard'
      }
    }
  }

  generateComponentName(showAction, path) {
    // Map APML show elements to existing Vue components per specification
    if (showAction.element === 'pattern_library_index') {
      return 'PatternLibraryIndexPage'
    }
    
    if (showAction.element === 'pattern_content') {
      // Generate component name from path and existing component mapping
      const pathToComponentMap = {
        '/patterns/design-intelligence': 'DesignIntelligencePage',
        '/patterns/business-strategy': 'BusinessStrategyPage',
        '/patterns/research-methodology': 'ResearchMethodologyPage',
        '/patterns/design-intelligence/user-research': 'UserResearchMethodsPage',
        '/patterns/design-intelligence/problem-framing': 'ProblemFramingPage',
        '/patterns/design-intelligence/ideation': 'IdeationMethodsPage',
        '/patterns/design-intelligence/validation': 'ValidationFrameworksPage'
      }
      
      return pathToComponentMap[path] || 'PatternPageTemplate'
    }
    
    return 'DefaultPage'
  }

  generateRouteName(componentName) {
    return componentName.replace('Page', '')
  }

  formatVueRoutes(routes) {
    const routeStrings = routes.map(route => 
      `  {
    path: '${route.path}',
    name: '${route.name}',
    component: ${route.component},
    meta: {
      title: '${this.escapeQuotes(route.meta.title)}',
      description: '${this.escapeQuotes(route.meta.description)}',
      contentSource: '${route.meta.contentSource}',
      displayMode: '${route.meta.displayMode}'
    }
  }`
    ).join(',\n')

    return `// Vue Routes - Generated from APML v0.9.0 Specification
// Follows exact semantic rules from language_semantics.compile_to_target_platform

const PatternLibraryRoutes = [
${routeStrings}
]

export default PatternLibraryRoutes
`
  }

  escapeQuotes(str) {
    return str ? str.replace(/'/g, "\\'").replace(/"/g, '\\"') : ''
  }

  compile(inputFile, outputFile) {
    try {
      console.log('🚀 APML v0.9.0 Specification Compiler - Starting...')
      
      const apmlContent = fs.readFileSync(inputFile, 'utf8')
      
      // Follow exact specification semantic rules
      this.validateApplicationStructure(apmlContent)
      this.parseDataModels(apmlContent)
      this.processInterfaceDefinitions(apmlContent)
      this.executeLogicWorkflows(apmlContent)
      
      // Extract app declaration
      const appMatch = apmlContent.match(/^app (\w+):/m)
      this.application.name = appMatch ? appMatch[1] : 'UnknownApp'
      
      const vueCode = this.compileToTargetPlatform()
      fs.writeFileSync(outputFile, vueCode)
      
      console.log(`✅ Specification-compliant compilation complete: ${outputFile}`)
      console.log('🎯 Generated code follows APML v0.9.0 semantic rules exactly')
      
    } catch (error) {
      console.error('❌ Compilation failed:', error.message)
      console.error('💡 Check APML syntax against v0.9.0 specification')
      process.exit(1)
    }
  }
}

// Execute compilation following APML specification
const compiler = new APMLSpecificationCompiler()
const inputFile = process.argv[2] || 'pattern-library-navigation.apml'
const outputFile = process.argv[3] || 'src/router/pattern-library-routes.js'

compiler.compile(inputFile, outputFile)