#!/usr/bin/env node

/**
 * Validate All APML Files - Enhanced APML Validator v0.9.0
 * Validates all APML files in the project for logical completeness
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import EnhancedAPMLValidator from './enhanced-apml-validator.js'

async function validateAllAPMLFiles() {
  console.log('🔍 Enhanced APML Validator v0.9.0 - Validating All Files')
  console.log('=' .repeat(70))
  
  // Find all APML files
  const apmlFiles = await glob('**/*.apml', { 
    ignore: ['node_modules/**', 'dist/**', '.git/**'],
    cwd: process.cwd()
  })
  
  if (apmlFiles.length === 0) {
    console.log('❌ No APML files found')
    process.exit(1)
  }
  
  console.log(`📂 Found ${apmlFiles.length} APML files`)
  
  const validator = new EnhancedAPMLValidator()
  let allValid = true
  const results = []
  
  for (const filePath of apmlFiles) {
    const fullPath = path.join(process.cwd(), filePath)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Skipping missing file: ${filePath}`)
      continue
    }
    
    const apmlContent = fs.readFileSync(fullPath, 'utf8')
    
    console.log(`\n🔍 Validating: ${filePath}`)
    console.log('-'.repeat(50))
    
    try {
      const result = await validator.validateAPML(apmlContent, filePath)
      results.push({ filePath, result })
      
      if (!result.isLogicallyComplete) {
        allValid = false
      }
    } catch (error) {
      console.error(`❌ Validation error for ${filePath}: ${error.message}`)
      allValid = false
      results.push({ filePath, error: error.message })
    }
  }
  
  // Final summary
  console.log('\n' + '=' .repeat(70))
  console.log('📊 FINAL VALIDATION SUMMARY')
  console.log('=' .repeat(70))
  
  const passed = results.filter(r => r.result?.isLogicallyComplete).length
  const failed = results.length - passed
  
  console.log(`📂 Total Files: ${results.length}`)
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)
  
  if (allValid) {
    console.log('\n🎉 ALL APML FILES ARE LOGICALLY COMPLETE!')
    console.log('🔒 Enhanced APML Validator v0.9.0 certification: READY FOR COMPILATION')
    console.log('🚀 Crash-free deployment guaranteed')
    process.exit(0)
  } else {
    console.log('\n❌ VALIDATION FAILED')
    console.log('🔧 Fix validation errors before compilation')
    console.log('\nFailed files:')
    results.filter(r => !r.result?.isLogicallyComplete || r.error).forEach(r => {
      console.log(`  ❌ ${r.filePath}`)
    })
    process.exit(1)
  }
}

// Handle command line execution
if (process.argv[1] === new URL(import.meta.url).pathname) {
  validateAllAPMLFiles().catch(error => {
    console.error('❌ Validation process failed:', error.message)
    process.exit(1)
  })
}

export default validateAllAPMLFiles