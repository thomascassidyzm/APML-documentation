#!/usr/bin/env node

/**
 * APML v0.9.0 Validator
 * Validates APML files according to specification
 */

import fs from 'fs'

function validateAPML(apmlContent, filename) {
  const errors = []
  const warnings = []
  const lines = apmlContent.split('\n')
  
  console.log(`🔍 Validating ${filename}...`)
  
  // Rule 1: require app_declaration at document_start
  const firstNonEmptyLine = lines.find(line => line.trim().length > 0)
  if (!firstNonEmptyLine || !firstNonEmptyLine.match(/^app \w+:/)) {
    errors.push('Missing app declaration at document start')
  }
  
  // Rule 2: validate trinity_principle_coverage
  const hasInterface = apmlContent.includes('interface')
  const hasLogic = apmlContent.includes('logic')
  if (!hasInterface && !hasLogic) {
    errors.push('Missing interface or logic section (Trinity Principle violation)')
  }
  
  // Rule 3: Check for proper structure
  let inDataBlock = false
  let inInterfaceBlock = false
  let inLogicBlock = false
  
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    
    // Track sections
    if (trimmed.startsWith('data ')) inDataBlock = true
    if (trimmed.startsWith('interface')) inInterfaceBlock = true  
    if (trimmed.startsWith('logic')) inLogicBlock = true
    
    // Check for missing colons on declarations
    if (trimmed.match(/^(app|data|interface|logic)\s+\w+$/) && !trimmed.endsWith(':')) {
      errors.push(`Line ${i+1}: Missing colon after declaration: ${trimmed}`)
    }
  })
  
  return { errors, warnings }
}

// Validate the routing file
const filename = process.argv[2] || 'pattern-library-routing.apml'
const content = fs.readFileSync(filename, 'utf8')
const result = validateAPML(content, filename)

if (result.errors.length === 0) {
  console.log('✅ APML VALIDATION PASSED - Logically Complete')
  if (result.warnings.length > 0) {
    console.log('⚠️  Warnings:')
    result.warnings.forEach(warning => console.log('  ⚠️  ' + warning))
  }
  console.log('🚀 Ready for compilation')
} else {
  console.log('❌ APML VALIDATION FAILED:')
  result.errors.forEach(error => console.log('  ❌ ' + error))
  console.log('')
  console.log('❌ Fix validation errors before compilation')
  process.exit(1)
}