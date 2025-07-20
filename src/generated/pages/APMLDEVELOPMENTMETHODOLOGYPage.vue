<template>
  <div class="apmldevelopmentmethodologypage">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML-First Development Methodology</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section apml_first_principles">
          <h2>Apml First Principles</h2>
          <div class="element core_principles">
            <h3>Core Principles</h3>
              <div class="content-section principle_1">
                <h4>Principle 1</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Specifications as Single Source of Truth</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">All application logic, structure, and behavior is defined in APML specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Rationale</h5>
                    <p class="methodology-description">Eliminates drift between documentation and implementation. Ensures systematic evolution of applications.</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Example</h5>
                    <p class="methodology-description">When adding a new feature, modify the APML specification and recompile - never edit generated code directly</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Anti Pattern</h5>
                    <p class="methodology-description">Manually editing Vue components, then trying to reverse-engineer the APML specification</p>
                  </div>
                </div>
              </div>
              <div class="content-section principle_2">
                <h4>Principle 2</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Edit APML, Never Generated Code</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Generated code is read-only. All changes flow through APML specifications.</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Rationale</h5>
                    <p class="methodology-description">Maintains consistency between specification and implementation. Enables regeneration without losing changes.</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Example</h5>
                    <p class="methodology-description">To fix CSS styling, update the theme specification or compiler CSS generation logic</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Anti Pattern</h5>
                    <p class="methodology-description">Editing generated .vue files directly, losing changes on next compilation</p>
                  </div>
                </div>
              </div>
              <div class="content-section principle_3">
                <h4>Principle 3</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Compiler-Driven Architecture</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">The Ultimate APML Compiler is the authoritative translator from specifications to applications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Rationale</h5>
                    <p class="methodology-description">Centralizes all generation logic. Improvements to the compiler benefit all applications instantly.</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Example</h5>
                    <p class="methodology-description">Enhancing mobile responsiveness in the compiler improves all generated applications simultaneously</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Anti Pattern</h5>
                    <p class="methodology-description">Creating manual workarounds in individual components instead of systematic compiler improvements</p>
                  </div>
                </div>
              </div>
              <div class="content-section principle_4">
                <h4>Principle 4</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Systematic Over Manual</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Always choose systematic solutions that work across all applications over one-off manual fixes</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Rationale</h5>
                    <p class="methodology-description">Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden.</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Example</h5>
                    <p class="methodology-description">Adding navigation logic to the compiler rather than hardcoding routes in individual files</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Anti Pattern</h5>
                    <p class="methodology-description">Quick manual fixes that solve immediate problems but create maintenance debt</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section development_workflow">
          <h2>Development Workflow</h2>
          <div class="element workflow_steps">
            <h3>Workflow Steps</h3>
              <div class="content-section step_1">
                <h4>Step 1</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">1</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Define Application Structure in APML</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">Text editor, APML syntax</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">APML syntax validation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Complete APML specification files</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Start with app definition, define data models, create interfaces, specify logic flows</p>
                  </div>
                </div>
              </div>
              <div class="content-section step_2">
                <h4>Step 2</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">2</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Compile APML to Target Platform</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">Compilation success, generated file structure</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Complete working application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Run 'node scripts/ultimate-apml-compiler.js' to generate Vue.js application</p>
                  </div>
                </div>
              </div>
              <div class="content-section step_3">
                <h4>Step 3</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">3</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Test Generated Application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">Development server, browser testing</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">Application functionality, user experience</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Validated working application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Run 'npm run dev' and test all features in browser</p>
                  </div>
                </div>
              </div>
              <div class="content-section step_4">
                <h4>Step 4</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">4</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Identify Needed Changes</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">User feedback, testing results</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">Clear requirement definition</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Prioritized list of improvements</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Document what needs to be added, changed, or improved</p>
                  </div>
                </div>
              </div>
              <div class="content-section step_5">
                <h4>Step 5</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">5</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Modify APML Specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">Text editor, APML patterns</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">APML syntax validation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Updated APML specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Edit .apml files - never touch generated code directly</p>
                  </div>
                </div>
              </div>
              <div class="content-section step_6">
                <h4>Step 6</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Step Number</h5>
                    <p class="methodology-description">6</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Action</h5>
                    <p class="methodology-description">Recompile and Validate</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Tooling</h5>
                    <p class="methodology-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">Successful compilation, feature verification</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Output</h5>
                    <p class="methodology-description">Updated working application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Details</h5>
                    <p class="methodology-description">Recompile and verify changes work as expected</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section methodology_benefits">
          <h2>Methodology Benefits</h2>
          <div class="element systematic_advantages">
            <h3>Systematic Advantages</h3>
              <div class="content-section consistency_benefit">
                <h4>Consistency Benefit</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Perfect Consistency</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">All applications follow the same patterns and standards</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Reduces learning curve, simplifies maintenance, enables team scalability</p>
                  </div>
                </div>
              </div>
              <div class="content-section evolution_benefit">
                <h4>Evolution Benefit</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Systematic Evolution</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Improvements to the compiler benefit all applications instantly</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">One fix improves hundreds of applications simultaneously</p>
                  </div>
                </div>
              </div>
              <div class="content-section maintainability_benefit">
                <h4>Maintainability Benefit</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">True Maintainability</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Single source of truth eliminates synchronization problems</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">No drift between documentation and implementation</p>
                  </div>
                </div>
              </div>
              <div class="content-section scalability_benefit">
                <h4>Scalability Benefit</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Team Scalability</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">New developers work at the APML level, not platform specifics</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Faster onboarding, consistent code quality, platform independence</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section anti_patterns">
          <h2>Anti Patterns</h2>
          <div class="element common_mistakes">
            <h3>Common Mistakes</h3>
              <div class="content-section manual_code_editing">
                <h4>Manual Code Editing</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Editing Generated Code</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Directly modifying .vue files, CSS, or JavaScript in generated directories</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Why Harmful</h5>
                    <p class="methodology-description">Changes are lost on next compilation, creates drift between spec and implementation</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Correct Approach</h5>
                    <p class="methodology-description">Modify APML specifications or compiler logic instead</p>
                  </div>
                </div>
              </div>
              <div class="content-section partial_compilation">
                <h4>Partial Compilation</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Selective Code Generation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Generating some components manually while others are APML-generated</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Why Harmful</h5>
                    <p class="methodology-description">Creates inconsistency, makes maintenance complex, loses systematic benefits</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Correct Approach</h5>
                    <p class="methodology-description">Convert all components to APML specifications for complete consistency</p>
                  </div>
                </div>
              </div>
              <div class="content-section specification_drift">
                <h4>Specification Drift</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Outdated Specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Making changes without updating corresponding APML specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Why Harmful</h5>
                    <p class="methodology-description">Documentation becomes unreliable, regeneration breaks functionality</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Correct Approach</h5>
                    <p class="methodology-description">Always update APML specifications first, then recompile</p>
                  </div>
                </div>
              </div>
              <div class="content-section compiler_workarounds">
                <h4>Compiler Workarounds</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Working Around Compiler Limitations</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Creating manual solutions instead of improving the compiler</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Why Harmful</h5>
                    <p class="methodology-description">Loses systematic benefits, creates maintenance debt, doesn't scale</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Correct Approach</h5>
                    <p class="methodology-description">Enhance the compiler to handle the use case systematically</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section tooling_ecosystem">
          <h2>Tooling Ecosystem</h2>
          <div class="element development_tools">
            <h3>Development Tools</h3>
              <div class="content-section core_compiler">
                <h4>Core Compiler</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Purpose</h5>
                    <p class="methodology-description">Translates APML specifications into working applications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Location</h5>
                    <p class="methodology-description">scripts/ultimate-apml-compiler.js</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Usage</h5>
                    <p class="methodology-description">node scripts/ultimate-apml-compiler.js</p>
                  </div>
                </div>
              </div>
              <div class="content-section specification_files">
                <h4>Specification Files</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">APML Specification Files</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Purpose</h5>
                    <p class="methodology-description">Define application structure, data, interfaces, and logic</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Location</h5>
                    <p class="methodology-description">*.apml files throughout project</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Patterns</h5>
                    <p class="methodology-description">app, data, interface, logic sections</p>
                  </div>
                </div>
              </div>
              <div class="content-section generated_output">
                <h4>Generated Output</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Generated Application Code</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Purpose</h5>
                    <p class="methodology-description">Complete working application in target platform</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Location</h5>
                    <p class="methodology-description">src/ultimate-generated/ directory</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Note</h5>
                    <p class="methodology-description">Read-only - never edit directly</p>
                  </div>
                </div>
              </div>
              <div class="content-section development_server">
                <h4>Development Server</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">Platform Development Tools</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Purpose</h5>
                    <p class="methodology-description">Testing and debugging generated applications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Example</h5>
                    <p class="methodology-description">npm run dev for Vue.js applications</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Validation</h5>
                    <p class="methodology-description">Browser testing, feature verification</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section success_metrics">
          <h2>Success Metrics</h2>
          <div class="element methodology_effectiveness">
            <h3>Methodology Effectiveness</h3>
              <div class="content-section development_speed">
                <h4>Development Speed</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Metric</h5>
                    <p class="methodology-description">Time from Specification to Working Application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Target</h5>
                    <p class="methodology-description">Minutes for simple applications, hours for complex ones</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Measurement</h5>
                    <p class="methodology-description">Track compilation time + testing time</p>
                  </div>
                </div>
              </div>
              <div class="content-section consistency_score">
                <h4>Consistency Score</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Metric</h5>
                    <p class="methodology-description">Cross-Application Consistency</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Target</h5>
                    <p class="methodology-description">100% consistency in patterns, styling, and structure</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Measurement</h5>
                    <p class="methodology-description">Automated analysis of generated code patterns</p>
                  </div>
                </div>
              </div>
              <div class="content-section maintenance_efficiency">
                <h4>Maintenance Efficiency</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Metric</h5>
                    <p class="methodology-description">Time to Implement Cross-Application Changes</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Target</h5>
                    <p class="methodology-description">Single compiler change affects all applications instantly</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Measurement</h5>
                    <p class="methodology-description">Track time from specification change to deployment</p>
                  </div>
                </div>
              </div>
              <div class="content-section team_productivity">
                <h4>Team Productivity</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Metric</h5>
                    <p class="methodology-description">Developer Onboarding Time</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Target</h5>
                    <p class="methodology-description">New developers productive within days, not weeks</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Measurement</h5>
                    <p class="methodology-description">Time to first meaningful contribution</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section methodology_philosophy">
          <h2>Methodology Philosophy</h2>
          <div class="element core_philosophy">
            <h3>Core Philosophy</h3>
              <div class="content-section conversation_to_code">
                <h4>Conversation To Code</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Principle</h5>
                    <p class="methodology-description">From Conversation to Working Application</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">APML enables direct translation of human intent into functional software</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Eliminates traditional coding bottlenecks and technical debt accumulation</p>
                  </div>
                </div>
              </div>
              <div class="content-section systematic_thinking">
                <h4>Systematic Thinking</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Principle</h5>
                    <p class="methodology-description">Systematic Over Ad-Hoc</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Every solution should work across the entire application ecosystem</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Exponential improvement as each enhancement benefits all applications</p>
                  </div>
                </div>
              </div>
              <div class="content-section human_ai_collaboration">
                <h4>Human Ai Collaboration</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Principle</h5>
                    <p class="methodology-description">Optimal Human-AI Partnership</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Humans focus on intent and logic, AI handles implementation details</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Faster development cycles with higher quality and consistency</p>
                  </div>
                </div>
              </div>
              <div class="content-section logical_completeness">
                <h4>Logical Completeness</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Principle</h5>
                    <p class="methodology-description">Logically Complete Applications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Every decision path and workflow termination is explicitly handled</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Impact</h5>
                    <p class="methodology-description">Applications that work reliably in production from day one</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section future_evolution">
          <h2>Future Evolution</h2>
          <div class="element methodology_roadmap">
            <h3>Methodology Roadmap</h3>
            <div class="element-properties">
              <h4>Overview</h4>
              <div class="property-item">
                <span class="property-label">Export APMLDevelopmentMethodology:</span>
                <span class="property-value"></span>
              </div>
              <div class="property-item">
                <span class="property-label">Title:</span>
                <span class="property-value">APML-First Development Methodology</span>
              </div>
              <div class="property-item">
                <span class="property-label">Summary:</span>
                <span class="property-value">The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth</span>
              </div>
              <div class="property-item">
                <span class="property-label">Key Insight:</span>
                <span class="property-value">Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering</span>
              </div>
              <div class="property-item">
                <span class="property-label">Ultimate Goal:</span>
                <span class="property-value">Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise</span>
              </div>
            </div>
              <div class="content-section multi_platform">
                <h4>Multi Platform</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Capability</h5>
                    <p class="methodology-description">Multi-Platform Compilation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Same APML specifications generate iOS, Android, web, and desktop applications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Timeline</h5>
                    <p class="methodology-description">Swift and Kotlin compilers coming Q2 2025</p>
                  </div>
                </div>
              </div>
              <div class="content-section ai_enhancement">
                <h4>Ai Enhancement</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Capability</h5>
                    <p class="methodology-description">AI-Assisted Specification Creation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">AI helps write APML specifications from natural language descriptions</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Timeline</h5>
                    <p class="methodology-description">Integration with LLM Reference File enables conversation-driven development</p>
                  </div>
                </div>
              </div>
              <div class="content-section collaborative_development">
                <h4>Collaborative Development</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Capability</h5>
                    <p class="methodology-description">Team-Based APML Development</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Multiple developers collaborating on shared APML specifications</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Timeline</h5>
                    <p class="methodology-description">Version control integration and merge conflict resolution for APML</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section class="interface-section logic-patterns">
          <h2>Methodologies & Frameworks</h2>
          <div class="processes-section">
            <h3>Business Processes & Workflows</h3>
            <div class="methodology-grid">
            <div class="methodology-card process-type">
              <h5>Specification Organization</h5>
            </div>
            <div class="methodology-card process-type">
              <h5>Continuous Improvement</h5>
            </div>
            </div>
          </div>
        </section>
        <section class="apml-source">
          <h2>APML Source</h2>
          <APMLCodeBlock :code="apmlSource" />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import APMLCodeBlock from '../../components/APMLCodeBlock.vue'

// APML Specification Data
const apmlSpec = {
  "app": {
    "name": "APMLDevelopmentMethodology",
    "properties": {
      "title": "APML-First Development Methodology"
    }
  },
  "data": {
    "DevelopmentPrinciple": {
      "fields": {
        "name": "text required"
      }
    },
    "WorkflowStep": {
      "fields": {
        "step_number": "number required"
      }
    }
  },
  "interfaces": {
    "apml_first_principles": {
      "elements": {
        "core_principles": {
          "type": "display",
          "properties": {},
          "content": {
            "principle_1": {},
            "principle_2": {},
            "principle_3": {},
            "principle_4": {}
          },
          "sections": {
            "principle_1": {
              "title": "Principle 1",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Specifications as Single Source of Truth",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "All application logic, structure, and behavior is defined in APML specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "rationale": {
                  "title": "Rationale",
                  "description": "Eliminates drift between documentation and implementation. Ensures systematic evolution of applications.",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "example": {
                  "title": "Example",
                  "description": "When adding a new feature, modify the APML specification and recompile - never edit generated code directly",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "anti_pattern": {
                  "title": "Anti Pattern",
                  "description": "Manually editing Vue components, then trying to reverse-engineer the APML specification",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "principle_2": {
              "title": "Principle 2",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Edit APML, Never Generated Code",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Generated code is read-only. All changes flow through APML specifications.",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "rationale": {
                  "title": "Rationale",
                  "description": "Maintains consistency between specification and implementation. Enables regeneration without losing changes.",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "example": {
                  "title": "Example",
                  "description": "To fix CSS styling, update the theme specification or compiler CSS generation logic",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "anti_pattern": {
                  "title": "Anti Pattern",
                  "description": "Editing generated .vue files directly, losing changes on next compilation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "principle_3": {
              "title": "Principle 3",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Compiler-Driven Architecture",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "The Ultimate APML Compiler is the authoritative translator from specifications to applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "rationale": {
                  "title": "Rationale",
                  "description": "Centralizes all generation logic. Improvements to the compiler benefit all applications instantly.",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "example": {
                  "title": "Example",
                  "description": "Enhancing mobile responsiveness in the compiler improves all generated applications simultaneously",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "anti_pattern": {
                  "title": "Anti Pattern",
                  "description": "Creating manual workarounds in individual components instead of systematic compiler improvements",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "principle_4": {
              "title": "Principle 4",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Systematic Over Manual",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Always choose systematic solutions that work across all applications over one-off manual fixes",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "rationale": {
                  "title": "Rationale",
                  "description": "Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden.",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "example": {
                  "title": "Example",
                  "description": "Adding navigation logic to the compiler rather than hardcoding routes in individual files",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "anti_pattern": {
                  "title": "Anti Pattern",
                  "description": "Quick manual fixes that solve immediate problems but create maintenance debt",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "development_workflow": {
      "elements": {
        "workflow_steps": {
          "type": "display",
          "properties": {},
          "content": {
            "step_1": {},
            "step_2": {},
            "step_3": {},
            "step_4": {},
            "step_5": {},
            "step_6": {}
          },
          "sections": {
            "step_1": {
              "title": "Step 1",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "1",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Define Application Structure in APML",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "Text editor, APML syntax",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "APML syntax validation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Complete APML specification files",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Start with app definition, define data models, create interfaces, specify logic flows",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "step_2": {
              "title": "Step 2",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "2",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Compile APML to Target Platform",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "Ultimate APML Compiler",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "Compilation success, generated file structure",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Complete working application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Run 'node scripts/ultimate-apml-compiler.js' to generate Vue.js application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "step_3": {
              "title": "Step 3",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "3",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Test Generated Application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "Development server, browser testing",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "Application functionality, user experience",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Validated working application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Run 'npm run dev' and test all features in browser",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "step_4": {
              "title": "Step 4",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "4",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Identify Needed Changes",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "User feedback, testing results",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "Clear requirement definition",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Prioritized list of improvements",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Document what needs to be added, changed, or improved",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "step_5": {
              "title": "Step 5",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "5",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Modify APML Specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "Text editor, APML patterns",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "APML syntax validation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Updated APML specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Edit .apml files - never touch generated code directly",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "step_6": {
              "title": "Step 6",
              "items": {
                "step_number": {
                  "title": "Step Number",
                  "description": "6",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "action": {
                  "title": "Action",
                  "description": "Recompile and Validate",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tooling": {
                  "title": "Tooling",
                  "description": "Ultimate APML Compiler",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "Successful compilation, feature verification",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "output": {
                  "title": "Output",
                  "description": "Updated working application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "details": {
                  "title": "Details",
                  "description": "Recompile and verify changes work as expected",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "methodology_benefits": {
      "elements": {
        "systematic_advantages": {
          "type": "display",
          "properties": {},
          "content": {
            "consistency_benefit": {},
            "evolution_benefit": {},
            "maintainability_benefit": {},
            "scalability_benefit": {}
          },
          "sections": {
            "consistency_benefit": {
              "title": "Consistency Benefit",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Perfect Consistency",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "All applications follow the same patterns and standards",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Reduces learning curve, simplifies maintenance, enables team scalability",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "evolution_benefit": {
              "title": "Evolution Benefit",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Systematic Evolution",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Improvements to the compiler benefit all applications instantly",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "One fix improves hundreds of applications simultaneously",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "maintainability_benefit": {
              "title": "Maintainability Benefit",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "True Maintainability",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Single source of truth eliminates synchronization problems",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "No drift between documentation and implementation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "scalability_benefit": {
              "title": "Scalability Benefit",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Team Scalability",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "New developers work at the APML level, not platform specifics",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Faster onboarding, consistent code quality, platform independence",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "anti_patterns": {
      "elements": {
        "common_mistakes": {
          "type": "display",
          "properties": {},
          "content": {
            "manual_code_editing": {},
            "partial_compilation": {},
            "specification_drift": {},
            "compiler_workarounds": {}
          },
          "sections": {
            "manual_code_editing": {
              "title": "Manual Code Editing",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Editing Generated Code",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Directly modifying .vue files, CSS, or JavaScript in generated directories",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "why_harmful": {
                  "title": "Why Harmful",
                  "description": "Changes are lost on next compilation, creates drift between spec and implementation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "correct_approach": {
                  "title": "Correct Approach",
                  "description": "Modify APML specifications or compiler logic instead",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "partial_compilation": {
              "title": "Partial Compilation",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Selective Code Generation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Generating some components manually while others are APML-generated",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "why_harmful": {
                  "title": "Why Harmful",
                  "description": "Creates inconsistency, makes maintenance complex, loses systematic benefits",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "correct_approach": {
                  "title": "Correct Approach",
                  "description": "Convert all components to APML specifications for complete consistency",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "specification_drift": {
              "title": "Specification Drift",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Outdated Specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Making changes without updating corresponding APML specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "why_harmful": {
                  "title": "Why Harmful",
                  "description": "Documentation becomes unreliable, regeneration breaks functionality",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "correct_approach": {
                  "title": "Correct Approach",
                  "description": "Always update APML specifications first, then recompile",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "compiler_workarounds": {
              "title": "Compiler Workarounds",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Working Around Compiler Limitations",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Creating manual solutions instead of improving the compiler",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "why_harmful": {
                  "title": "Why Harmful",
                  "description": "Loses systematic benefits, creates maintenance debt, doesn't scale",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "correct_approach": {
                  "title": "Correct Approach",
                  "description": "Enhance the compiler to handle the use case systematically",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "tooling_ecosystem": {
      "elements": {
        "development_tools": {
          "type": "display",
          "properties": {},
          "content": {
            "core_compiler": {},
            "specification_files": {},
            "generated_output": {},
            "development_server": {}
          },
          "sections": {
            "core_compiler": {
              "title": "Core Compiler",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Ultimate APML Compiler",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "purpose": {
                  "title": "Purpose",
                  "description": "Translates APML specifications into working applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "location": {
                  "title": "Location",
                  "description": "scripts/ultimate-apml-compiler.js",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "usage": {
                  "title": "Usage",
                  "description": "node scripts/ultimate-apml-compiler.js",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "specification_files": {
              "title": "Specification Files",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "APML Specification Files",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "purpose": {
                  "title": "Purpose",
                  "description": "Define application structure, data, interfaces, and logic",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "location": {
                  "title": "Location",
                  "description": "*.apml files throughout project",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "patterns": {
                  "title": "Patterns",
                  "description": "app, data, interface, logic sections",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "generated_output": {
              "title": "Generated Output",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Generated Application Code",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "purpose": {
                  "title": "Purpose",
                  "description": "Complete working application in target platform",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "location": {
                  "title": "Location",
                  "description": "src/ultimate-generated/ directory",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "note": {
                  "title": "Note",
                  "description": "Read-only - never edit directly",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "development_server": {
              "title": "Development Server",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "Platform Development Tools",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "purpose": {
                  "title": "Purpose",
                  "description": "Testing and debugging generated applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "example": {
                  "title": "Example",
                  "description": "npm run dev for Vue.js applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "validation": {
                  "title": "Validation",
                  "description": "Browser testing, feature verification",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "success_metrics": {
      "elements": {
        "methodology_effectiveness": {
          "type": "display",
          "properties": {},
          "content": {
            "development_speed": {},
            "consistency_score": {},
            "maintenance_efficiency": {},
            "team_productivity": {}
          },
          "sections": {
            "development_speed": {
              "title": "Development Speed",
              "items": {
                "metric": {
                  "title": "Metric",
                  "description": "Time from Specification to Working Application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "target": {
                  "title": "Target",
                  "description": "Minutes for simple applications, hours for complex ones",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "measurement": {
                  "title": "Measurement",
                  "description": "Track compilation time + testing time",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "consistency_score": {
              "title": "Consistency Score",
              "items": {
                "metric": {
                  "title": "Metric",
                  "description": "Cross-Application Consistency",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "target": {
                  "title": "Target",
                  "description": "100% consistency in patterns, styling, and structure",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "measurement": {
                  "title": "Measurement",
                  "description": "Automated analysis of generated code patterns",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "maintenance_efficiency": {
              "title": "Maintenance Efficiency",
              "items": {
                "metric": {
                  "title": "Metric",
                  "description": "Time to Implement Cross-Application Changes",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "target": {
                  "title": "Target",
                  "description": "Single compiler change affects all applications instantly",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "measurement": {
                  "title": "Measurement",
                  "description": "Track time from specification change to deployment",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "team_productivity": {
              "title": "Team Productivity",
              "items": {
                "metric": {
                  "title": "Metric",
                  "description": "Developer Onboarding Time",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "target": {
                  "title": "Target",
                  "description": "New developers productive within days, not weeks",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "measurement": {
                  "title": "Measurement",
                  "description": "Time to first meaningful contribution",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "methodology_philosophy": {
      "elements": {
        "core_philosophy": {
          "type": "display",
          "properties": {},
          "content": {
            "conversation_to_code": {},
            "systematic_thinking": {},
            "human_ai_collaboration": {},
            "logical_completeness": {}
          },
          "sections": {
            "conversation_to_code": {
              "title": "Conversation To Code",
              "items": {
                "principle": {
                  "title": "Principle",
                  "description": "From Conversation to Working Application",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "APML enables direct translation of human intent into functional software",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Eliminates traditional coding bottlenecks and technical debt accumulation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "systematic_thinking": {
              "title": "Systematic Thinking",
              "items": {
                "principle": {
                  "title": "Principle",
                  "description": "Systematic Over Ad-Hoc",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Every solution should work across the entire application ecosystem",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Exponential improvement as each enhancement benefits all applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "human_ai_collaboration": {
              "title": "Human Ai Collaboration",
              "items": {
                "principle": {
                  "title": "Principle",
                  "description": "Optimal Human-AI Partnership",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Humans focus on intent and logic, AI handles implementation details",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Faster development cycles with higher quality and consistency",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "logical_completeness": {
              "title": "Logical Completeness",
              "items": {
                "principle": {
                  "title": "Principle",
                  "description": "Logically Complete Applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Every decision path and workflow termination is explicitly handled",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "impact": {
                  "title": "Impact",
                  "description": "Applications that work reliably in production from day one",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "future_evolution": {
      "elements": {
        "methodology_roadmap": {
          "type": "display",
          "properties": {
            "export APMLDevelopmentMethodology": "",
            "title": "APML-First Development Methodology",
            "summary": "The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth",
            "key_insight": "Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering",
            "ultimate_goal": "Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise"
          },
          "content": {
            "multi_platform": {},
            "ai_enhancement": {},
            "collaborative_development": {}
          },
          "sections": {
            "multi_platform": {
              "title": "Multi Platform",
              "items": {
                "capability": {
                  "title": "Capability",
                  "description": "Multi-Platform Compilation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Same APML specifications generate iOS, Android, web, and desktop applications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "timeline": {
                  "title": "Timeline",
                  "description": "Swift and Kotlin compilers coming Q2 2025",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "ai_enhancement": {
              "title": "Ai Enhancement",
              "items": {
                "capability": {
                  "title": "Capability",
                  "description": "AI-Assisted Specification Creation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "AI helps write APML specifications from natural language descriptions",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "timeline": {
                  "title": "Timeline",
                  "description": "Integration with LLM Reference File enables conversation-driven development",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "collaborative_development": {
              "title": "Collaborative Development",
              "items": {
                "capability": {
                  "title": "Capability",
                  "description": "Team-Based APML Development",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Multiple developers collaborating on shared APML specifications",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "timeline": {
                  "title": "Timeline",
                  "description": "Version control integration and merge conflict resolution for APML",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    }
  },
  "logic": {
    "development_best_practices": {
      "processes": {
        "specification_organization": {
          "steps": [],
          "conditions": [],
          "methodology": {},
          "educationalContent": {}
        }
      },
      "workflows": {},
      "patterns": {},
      "frameworks": {},
      "methodologies": {}
    },
    "methodology_evolution": {
      "processes": {
        "continuous_improvement": {
          "steps": [],
          "conditions": [],
          "methodology": {},
          "educationalContent": {}
        }
      },
      "workflows": {},
      "patterns": {},
      "frameworks": {},
      "methodologies": {}
    }
  },
  "rawContent": "app APMLDevelopmentMethodology:\n  title: \"APML-First Development Methodology\"\n  description: \"The systematic approach to building applications using APML specifications as the single source of truth\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n  methodology_type: development_practice\n\ndata DevelopmentPrinciple:\n  name: text required\n  description: text required\n  rationale: text required\n  example: text optional\n  anti_pattern: text optional\n\ndata WorkflowStep:\n  step_number: number required\n  action: text required\n  tooling: text required\n  validation: text required\n  output: text required\n\ninterface apml_first_principles:\n  show core_principles:\n    title: \"APML-First Development Principles\"\n    subtitle: \"The foundational practices that make APML development systematic and maintainable\"\n    \n    display principle_1:\n      name: \"Specifications as Single Source of Truth\"\n      description: \"All application logic, structure, and behavior is defined in APML specifications\"\n      rationale: \"Eliminates drift between documentation and implementation. Ensures systematic evolution of applications.\"\n      example: \"When adding a new feature, modify the APML specification and recompile - never edit generated code directly\"\n      anti_pattern: \"Manually editing Vue components, then trying to reverse-engineer the APML specification\"\n    \n    display principle_2:\n      name: \"Edit APML, Never Generated Code\"\n      description: \"Generated code is read-only. All changes flow through APML specifications.\"\n      rationale: \"Maintains consistency between specification and implementation. Enables regeneration without losing changes.\"\n      example: \"To fix CSS styling, update the theme specification or compiler CSS generation logic\"\n      anti_pattern: \"Editing generated .vue files directly, losing changes on next compilation\"\n    \n    display principle_3:\n      name: \"Compiler-Driven Architecture\"\n      description: \"The Ultimate APML Compiler is the authoritative translator from specifications to applications\"\n      rationale: \"Centralizes all generation logic. Improvements to the compiler benefit all applications instantly.\"\n      example: \"Enhancing mobile responsiveness in the compiler improves all generated applications simultaneously\"\n      anti_pattern: \"Creating manual workarounds in individual components instead of systematic compiler improvements\"\n    \n    display principle_4:\n      name: \"Systematic Over Manual\"\n      description: \"Always choose systematic solutions that work across all applications over one-off manual fixes\"\n      rationale: \"Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden.\"\n      example: \"Adding navigation logic to the compiler rather than hardcoding routes in individual files\"\n      anti_pattern: \"Quick manual fixes that solve immediate problems but create maintenance debt\"\n\ninterface development_workflow:\n  show workflow_steps:\n    title: \"APML-First Development Workflow\"\n    subtitle: \"The step-by-step process for building and evolving APML applications\"\n    \n    display step_1:\n      step_number: 1\n      action: \"Define Application Structure in APML\"\n      tooling: \"Text editor, APML syntax\"\n      validation: \"APML syntax validation\"\n      output: \"Complete APML specification files\"\n      details: \"Start with app definition, define data models, create interfaces, specify logic flows\"\n    \n    display step_2:\n      step_number: 2\n      action: \"Compile APML to Target Platform\"\n      tooling: \"Ultimate APML Compiler\"\n      validation: \"Compilation success, generated file structure\"\n      output: \"Complete working application\"\n      details: \"Run 'node scripts/ultimate-apml-compiler.js' to generate Vue.js application\"\n    \n    display step_3:\n      step_number: 3\n      action: \"Test Generated Application\"\n      tooling: \"Development server, browser testing\"\n      validation: \"Application functionality, user experience\"\n      output: \"Validated working application\"\n      details: \"Run 'npm run dev' and test all features in browser\"\n    \n    display step_4:\n      step_number: 4\n      action: \"Identify Needed Changes\"\n      tooling: \"User feedback, testing results\"\n      validation: \"Clear requirement definition\"\n      output: \"Prioritized list of improvements\"\n      details: \"Document what needs to be added, changed, or improved\"\n    \n    display step_5:\n      step_number: 5\n      action: \"Modify APML Specifications\"\n      tooling: \"Text editor, APML patterns\"\n      validation: \"APML syntax validation\"\n      output: \"Updated APML specifications\"\n      details: \"Edit .apml files - never touch generated code directly\"\n    \n    display step_6:\n      step_number: 6\n      action: \"Recompile and Validate\"\n      tooling: \"Ultimate APML Compiler\"\n      validation: \"Successful compilation, feature verification\"\n      output: \"Updated working application\"\n      details: \"Recompile and verify changes work as expected\"\n\nlogic development_best_practices:\n  process specification_organization:\n    when organizing_apml_files:\n      group_by_domain: \"Separate business logic, UI, and data concerns\"\n      use_clear_naming: \"File names should reflect their purpose and scope\"\n      maintain_consistency: \"Follow established patterns across all specifications\"\n      document_relationships: \"Make inter-specification dependencies explicit\"\n  \n  process compiler_enhancement:\n    when improving_compiler_logic:\n      test_across_applications: \"Verify improvements work for all existing APML applications\"\n      maintain_backward_compatibility: \"Don't break existing specifications without migration path\"\n      add_comprehensive_examples: \"Include examples in generated code for clarity\"\n      optimize_for_readability: \"Generated code should be clean and understandable\"\n  \n  process change_management:\n    when evolving_applications:\n      version_specifications: \"Track changes to APML specifications over time\"\n      test_compilation_pipeline: \"Ensure compiler changes don't break existing applications\"\n      validate_all_features: \"Test complete application after specification changes\"\n      document_evolution_rationale: \"Record why changes were made for future reference\"\n\ninterface methodology_benefits:\n  show systematic_advantages:\n    title: \"Why APML-First Development Works\"\n    \n    display consistency_benefit:\n      name: \"Perfect Consistency\"\n      description: \"All applications follow the same patterns and standards\"\n      impact: \"Reduces learning curve, simplifies maintenance, enables team scalability\"\n    \n    display evolution_benefit:\n      name: \"Systematic Evolution\"\n      description: \"Improvements to the compiler benefit all applications instantly\"\n      impact: \"One fix improves hundreds of applications simultaneously\"\n    \n    display maintainability_benefit:\n      name: \"True Maintainability\"\n      description: \"Single source of truth eliminates synchronization problems\"\n      impact: \"No drift between documentation and implementation\"\n    \n    display scalability_benefit:\n      name: \"Team Scalability\"\n      description: \"New developers work at the APML level, not platform specifics\"\n      impact: \"Faster onboarding, consistent code quality, platform independence\"\n\ninterface anti_patterns:\n  show common_mistakes:\n    title: \"APML Development Anti-Patterns\"\n    subtitle: \"Common mistakes that break the APML-first methodology\"\n    \n    display manual_code_editing:\n      name: \"Editing Generated Code\"\n      description: \"Directly modifying .vue files, CSS, or JavaScript in generated directories\"\n      why_harmful: \"Changes are lost on next compilation, creates drift between spec and implementation\"\n      correct_approach: \"Modify APML specifications or compiler logic instead\"\n    \n    display partial_compilation:\n      name: \"Selective Code Generation\"\n      description: \"Generating some components manually while others are APML-generated\"\n      why_harmful: \"Creates inconsistency, makes maintenance complex, loses systematic benefits\"\n      correct_approach: \"Convert all components to APML specifications for complete consistency\"\n    \n    display specification_drift:\n      name: \"Outdated Specifications\"\n      description: \"Making changes without updating corresponding APML specifications\"\n      why_harmful: \"Documentation becomes unreliable, regeneration breaks functionality\"\n      correct_approach: \"Always update APML specifications first, then recompile\"\n    \n    display compiler_workarounds:\n      name: \"Working Around Compiler Limitations\"\n      description: \"Creating manual solutions instead of improving the compiler\"\n      why_harmful: \"Loses systematic benefits, creates maintenance debt, doesn't scale\"\n      correct_approach: \"Enhance the compiler to handle the use case systematically\"\n\ninterface tooling_ecosystem:\n  show development_tools:\n    title: \"APML Development Toolchain\"\n    \n    display core_compiler:\n      name: \"Ultimate APML Compiler\"\n      purpose: \"Translates APML specifications into working applications\"\n      location: \"scripts/ultimate-apml-compiler.js\"\n      usage: \"node scripts/ultimate-apml-compiler.js\"\n    \n    display specification_files:\n      name: \"APML Specification Files\"\n      purpose: \"Define application structure, data, interfaces, and logic\"\n      location: \"*.apml files throughout project\"\n      patterns: \"app, data, interface, logic sections\"\n    \n    display generated_output:\n      name: \"Generated Application Code\"\n      purpose: \"Complete working application in target platform\"\n      location: \"src/ultimate-generated/ directory\"\n      note: \"Read-only - never edit directly\"\n    \n    display development_server:\n      name: \"Platform Development Tools\"\n      purpose: \"Testing and debugging generated applications\"\n      example: \"npm run dev for Vue.js applications\"\n      validation: \"Browser testing, feature verification\"\n\nlogic methodology_evolution:\n  process continuous_improvement:\n    when methodology_gaps_identified:\n      document_gap: \"Clearly describe what's missing or problematic\"\n      propose_systematic_solution: \"Design solution that works across all applications\"\n      implement_in_compiler: \"Add capability to Ultimate APML Compiler\"\n      validate_across_applications: \"Test solution with multiple APML applications\"\n      update_methodology_documentation: \"Document new patterns and practices\"\n  \n  process knowledge_capture:\n    when discovering_best_practices:\n      document_in_apml: \"Capture practices as APML specifications\"\n      create_examples: \"Provide concrete implementation examples\"\n      integrate_with_compiler: \"Make best practices automatic where possible\"\n      share_with_community: \"Contribute to APML ecosystem knowledge\"\n\ninterface success_metrics:\n  show methodology_effectiveness:\n    title: \"Measuring APML-First Development Success\"\n    \n    display development_speed:\n      metric: \"Time from Specification to Working Application\"\n      target: \"Minutes for simple applications, hours for complex ones\"\n      measurement: \"Track compilation time + testing time\"\n    \n    display consistency_score:\n      metric: \"Cross-Application Consistency\"\n      target: \"100% consistency in patterns, styling, and structure\"\n      measurement: \"Automated analysis of generated code patterns\"\n    \n    display maintenance_efficiency:\n      metric: \"Time to Implement Cross-Application Changes\"\n      target: \"Single compiler change affects all applications instantly\"\n      measurement: \"Track time from specification change to deployment\"\n    \n    display team_productivity:\n      metric: \"Developer Onboarding Time\"\n      target: \"New developers productive within days, not weeks\"\n      measurement: \"Time to first meaningful contribution\"\n\ninterface methodology_philosophy:\n  show core_philosophy:\n    title: \"The Philosophy Behind APML-First Development\"\n    \n    display conversation_to_code:\n      principle: \"From Conversation to Working Application\"\n      description: \"APML enables direct translation of human intent into functional software\"\n      impact: \"Eliminates traditional coding bottlenecks and technical debt accumulation\"\n    \n    display systematic_thinking:\n      principle: \"Systematic Over Ad-Hoc\"\n      description: \"Every solution should work across the entire application ecosystem\"\n      impact: \"Exponential improvement as each enhancement benefits all applications\"\n    \n    display human_ai_collaboration:\n      principle: \"Optimal Human-AI Partnership\"\n      description: \"Humans focus on intent and logic, AI handles implementation details\"\n      impact: \"Faster development cycles with higher quality and consistency\"\n    \n    display logical_completeness:\n      principle: \"Logically Complete Applications\"\n      description: \"Every decision path and workflow termination is explicitly handled\"\n      impact: \"Applications that work reliably in production from day one\"\n\ninterface future_evolution:\n  show methodology_roadmap:\n    title: \"Evolution of APML-First Development\"\n    \n    display multi_platform:\n      capability: \"Multi-Platform Compilation\"\n      description: \"Same APML specifications generate iOS, Android, web, and desktop applications\"\n      timeline: \"Swift and Kotlin compilers coming Q2 2025\"\n    \n    display ai_enhancement:\n      capability: \"AI-Assisted Specification Creation\"\n      description: \"AI helps write APML specifications from natural language descriptions\"\n      timeline: \"Integration with LLM Reference File enables conversation-driven development\"\n    \n    display collaborative_development:\n      capability: \"Team-Based APML Development\"\n      description: \"Multiple developers collaborating on shared APML specifications\"\n      timeline: \"Version control integration and merge conflict resolution for APML\"\n\nexport APMLDevelopmentMethodology:\n  title: \"APML-First Development Methodology\"\n  summary: \"The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth\"\n  key_insight: \"Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering\"\n  ultimate_goal: \"Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise\"",
  "filePath": "/Users/tomcassidy/APML/website/src/APML-DEVELOPMENT-METHODOLOGY.apml"
}
const apmlSource = ref(`app APMLDevelopmentMethodology:
  title: "APML-First Development Methodology"
  description: "The systematic approach to building applications using APML specifications as the single source of truth"
  version: "1.0.0"
  apml_specification_version: "0.9.0"
  methodology_type: development_practice

data DevelopmentPrinciple:
  name: text required
  description: text required
  rationale: text required
  example: text optional
  anti_pattern: text optional

data WorkflowStep:
  step_number: number required
  action: text required
  tooling: text required
  validation: text required
  output: text required

interface apml_first_principles:
  show core_principles:
    title: "APML-First Development Principles"
    subtitle: "The foundational practices that make APML development systematic and maintainable"
    
    display principle_1:
      name: "Specifications as Single Source of Truth"
      description: "All application logic, structure, and behavior is defined in APML specifications"
      rationale: "Eliminates drift between documentation and implementation. Ensures systematic evolution of applications."
      example: "When adding a new feature, modify the APML specification and recompile - never edit generated code directly"
      anti_pattern: "Manually editing Vue components, then trying to reverse-engineer the APML specification"
    
    display principle_2:
      name: "Edit APML, Never Generated Code"
      description: "Generated code is read-only. All changes flow through APML specifications."
      rationale: "Maintains consistency between specification and implementation. Enables regeneration without losing changes."
      example: "To fix CSS styling, update the theme specification or compiler CSS generation logic"
      anti_pattern: "Editing generated .vue files directly, losing changes on next compilation"
    
    display principle_3:
      name: "Compiler-Driven Architecture"
      description: "The Ultimate APML Compiler is the authoritative translator from specifications to applications"
      rationale: "Centralizes all generation logic. Improvements to the compiler benefit all applications instantly."
      example: "Enhancing mobile responsiveness in the compiler improves all generated applications simultaneously"
      anti_pattern: "Creating manual workarounds in individual components instead of systematic compiler improvements"
    
    display principle_4:
      name: "Systematic Over Manual"
      description: "Always choose systematic solutions that work across all applications over one-off manual fixes"
      rationale: "Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden."
      example: "Adding navigation logic to the compiler rather than hardcoding routes in individual files"
      anti_pattern: "Quick manual fixes that solve immediate problems but create maintenance debt"

interface development_workflow:
  show workflow_steps:
    title: "APML-First Development Workflow"
    subtitle: "The step-by-step process for building and evolving APML applications"
    
    display step_1:
      step_number: 1
      action: "Define Application Structure in APML"
      tooling: "Text editor, APML syntax"
      validation: "APML syntax validation"
      output: "Complete APML specification files"
      details: "Start with app definition, define data models, create interfaces, specify logic flows"
    
    display step_2:
      step_number: 2
      action: "Compile APML to Target Platform"
      tooling: "Ultimate APML Compiler"
      validation: "Compilation success, generated file structure"
      output: "Complete working application"
      details: "Run 'node scripts/ultimate-apml-compiler.js' to generate Vue.js application"
    
    display step_3:
      step_number: 3
      action: "Test Generated Application"
      tooling: "Development server, browser testing"
      validation: "Application functionality, user experience"
      output: "Validated working application"
      details: "Run 'npm run dev' and test all features in browser"
    
    display step_4:
      step_number: 4
      action: "Identify Needed Changes"
      tooling: "User feedback, testing results"
      validation: "Clear requirement definition"
      output: "Prioritized list of improvements"
      details: "Document what needs to be added, changed, or improved"
    
    display step_5:
      step_number: 5
      action: "Modify APML Specifications"
      tooling: "Text editor, APML patterns"
      validation: "APML syntax validation"
      output: "Updated APML specifications"
      details: "Edit .apml files - never touch generated code directly"
    
    display step_6:
      step_number: 6
      action: "Recompile and Validate"
      tooling: "Ultimate APML Compiler"
      validation: "Successful compilation, feature verification"
      output: "Updated working application"
      details: "Recompile and verify changes work as expected"

logic development_best_practices:
  process specification_organization:
    when organizing_apml_files:
      group_by_domain: "Separate business logic, UI, and data concerns"
      use_clear_naming: "File names should reflect their purpose and scope"
      maintain_consistency: "Follow established patterns across all specifications"
      document_relationships: "Make inter-specification dependencies explicit"
  
  process compiler_enhancement:
    when improving_compiler_logic:
      test_across_applications: "Verify improvements work for all existing APML applications"
      maintain_backward_compatibility: "Don't break existing specifications without migration path"
      add_comprehensive_examples: "Include examples in generated code for clarity"
      optimize_for_readability: "Generated code should be clean and understandable"
  
  process change_management:
    when evolving_applications:
      version_specifications: "Track changes to APML specifications over time"
      test_compilation_pipeline: "Ensure compiler changes don't break existing applications"
      validate_all_features: "Test complete application after specification changes"
      document_evolution_rationale: "Record why changes were made for future reference"

interface methodology_benefits:
  show systematic_advantages:
    title: "Why APML-First Development Works"
    
    display consistency_benefit:
      name: "Perfect Consistency"
      description: "All applications follow the same patterns and standards"
      impact: "Reduces learning curve, simplifies maintenance, enables team scalability"
    
    display evolution_benefit:
      name: "Systematic Evolution"
      description: "Improvements to the compiler benefit all applications instantly"
      impact: "One fix improves hundreds of applications simultaneously"
    
    display maintainability_benefit:
      name: "True Maintainability"
      description: "Single source of truth eliminates synchronization problems"
      impact: "No drift between documentation and implementation"
    
    display scalability_benefit:
      name: "Team Scalability"
      description: "New developers work at the APML level, not platform specifics"
      impact: "Faster onboarding, consistent code quality, platform independence"

interface anti_patterns:
  show common_mistakes:
    title: "APML Development Anti-Patterns"
    subtitle: "Common mistakes that break the APML-first methodology"
    
    display manual_code_editing:
      name: "Editing Generated Code"
      description: "Directly modifying .vue files, CSS, or JavaScript in generated directories"
      why_harmful: "Changes are lost on next compilation, creates drift between spec and implementation"
      correct_approach: "Modify APML specifications or compiler logic instead"
    
    display partial_compilation:
      name: "Selective Code Generation"
      description: "Generating some components manually while others are APML-generated"
      why_harmful: "Creates inconsistency, makes maintenance complex, loses systematic benefits"
      correct_approach: "Convert all components to APML specifications for complete consistency"
    
    display specification_drift:
      name: "Outdated Specifications"
      description: "Making changes without updating corresponding APML specifications"
      why_harmful: "Documentation becomes unreliable, regeneration breaks functionality"
      correct_approach: "Always update APML specifications first, then recompile"
    
    display compiler_workarounds:
      name: "Working Around Compiler Limitations"
      description: "Creating manual solutions instead of improving the compiler"
      why_harmful: "Loses systematic benefits, creates maintenance debt, doesn't scale"
      correct_approach: "Enhance the compiler to handle the use case systematically"

interface tooling_ecosystem:
  show development_tools:
    title: "APML Development Toolchain"
    
    display core_compiler:
      name: "Ultimate APML Compiler"
      purpose: "Translates APML specifications into working applications"
      location: "scripts/ultimate-apml-compiler.js"
      usage: "node scripts/ultimate-apml-compiler.js"
    
    display specification_files:
      name: "APML Specification Files"
      purpose: "Define application structure, data, interfaces, and logic"
      location: "*.apml files throughout project"
      patterns: "app, data, interface, logic sections"
    
    display generated_output:
      name: "Generated Application Code"
      purpose: "Complete working application in target platform"
      location: "src/ultimate-generated/ directory"
      note: "Read-only - never edit directly"
    
    display development_server:
      name: "Platform Development Tools"
      purpose: "Testing and debugging generated applications"
      example: "npm run dev for Vue.js applications"
      validation: "Browser testing, feature verification"

logic methodology_evolution:
  process continuous_improvement:
    when methodology_gaps_identified:
      document_gap: "Clearly describe what's missing or problematic"
      propose_systematic_solution: "Design solution that works across all applications"
      implement_in_compiler: "Add capability to Ultimate APML Compiler"
      validate_across_applications: "Test solution with multiple APML applications"
      update_methodology_documentation: "Document new patterns and practices"
  
  process knowledge_capture:
    when discovering_best_practices:
      document_in_apml: "Capture practices as APML specifications"
      create_examples: "Provide concrete implementation examples"
      integrate_with_compiler: "Make best practices automatic where possible"
      share_with_community: "Contribute to APML ecosystem knowledge"

interface success_metrics:
  show methodology_effectiveness:
    title: "Measuring APML-First Development Success"
    
    display development_speed:
      metric: "Time from Specification to Working Application"
      target: "Minutes for simple applications, hours for complex ones"
      measurement: "Track compilation time + testing time"
    
    display consistency_score:
      metric: "Cross-Application Consistency"
      target: "100% consistency in patterns, styling, and structure"
      measurement: "Automated analysis of generated code patterns"
    
    display maintenance_efficiency:
      metric: "Time to Implement Cross-Application Changes"
      target: "Single compiler change affects all applications instantly"
      measurement: "Track time from specification change to deployment"
    
    display team_productivity:
      metric: "Developer Onboarding Time"
      target: "New developers productive within days, not weeks"
      measurement: "Time to first meaningful contribution"

interface methodology_philosophy:
  show core_philosophy:
    title: "The Philosophy Behind APML-First Development"
    
    display conversation_to_code:
      principle: "From Conversation to Working Application"
      description: "APML enables direct translation of human intent into functional software"
      impact: "Eliminates traditional coding bottlenecks and technical debt accumulation"
    
    display systematic_thinking:
      principle: "Systematic Over Ad-Hoc"
      description: "Every solution should work across the entire application ecosystem"
      impact: "Exponential improvement as each enhancement benefits all applications"
    
    display human_ai_collaboration:
      principle: "Optimal Human-AI Partnership"
      description: "Humans focus on intent and logic, AI handles implementation details"
      impact: "Faster development cycles with higher quality and consistency"
    
    display logical_completeness:
      principle: "Logically Complete Applications"
      description: "Every decision path and workflow termination is explicitly handled"
      impact: "Applications that work reliably in production from day one"

interface future_evolution:
  show methodology_roadmap:
    title: "Evolution of APML-First Development"
    
    display multi_platform:
      capability: "Multi-Platform Compilation"
      description: "Same APML specifications generate iOS, Android, web, and desktop applications"
      timeline: "Swift and Kotlin compilers coming Q2 2025"
    
    display ai_enhancement:
      capability: "AI-Assisted Specification Creation"
      description: "AI helps write APML specifications from natural language descriptions"
      timeline: "Integration with LLM Reference File enables conversation-driven development"
    
    display collaborative_development:
      capability: "Team-Based APML Development"
      description: "Multiple developers collaborating on shared APML specifications"
      timeline: "Version control integration and merge conflict resolution for APML"

export APMLDevelopmentMethodology:
  title: "APML-First Development Methodology"
  summary: "The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth"
  key_insight: "Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering"
  ultimate_goal: "Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise"`)

// Reactive data based on APML data models
// Data models from APML specification
const DevelopmentPrinciple = ref({
  name: "",
})

const WorkflowStep = ref({
  step_number: 0,
})



// Computed properties for interface elements
// Computed properties for interface elements
const apml_first_principlesElements = computed(() => ({
  core_principles: {
    type: 'display',
    properties: {},
    content: {"principle_1":{},"principle_2":{},"principle_3":{},"principle_4":{}}
  },
}))

const development_workflowElements = computed(() => ({
  workflow_steps: {
    type: 'display',
    properties: {},
    content: {"step_1":{},"step_2":{},"step_3":{},"step_4":{},"step_5":{},"step_6":{}}
  },
}))

const methodology_benefitsElements = computed(() => ({
  systematic_advantages: {
    type: 'display',
    properties: {},
    content: {"consistency_benefit":{},"evolution_benefit":{},"maintainability_benefit":{},"scalability_benefit":{}}
  },
}))

const anti_patternsElements = computed(() => ({
  common_mistakes: {
    type: 'display',
    properties: {},
    content: {"manual_code_editing":{},"partial_compilation":{},"specification_drift":{},"compiler_workarounds":{}}
  },
}))

const tooling_ecosystemElements = computed(() => ({
  development_tools: {
    type: 'display',
    properties: {},
    content: {"core_compiler":{},"specification_files":{},"generated_output":{},"development_server":{}}
  },
}))

const success_metricsElements = computed(() => ({
  methodology_effectiveness: {
    type: 'display',
    properties: {},
    content: {"development_speed":{},"consistency_score":{},"maintenance_efficiency":{},"team_productivity":{}}
  },
}))

const methodology_philosophyElements = computed(() => ({
  core_philosophy: {
    type: 'display',
    properties: {},
    content: {"conversation_to_code":{},"systematic_thinking":{},"human_ai_collaboration":{},"logical_completeness":{}}
  },
}))

const future_evolutionElements = computed(() => ({
  methodology_roadmap: {
    type: 'display',
    properties: {"export APMLDevelopmentMethodology":"","title":"APML-First Development Methodology","summary":"The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth","key_insight":"Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering","ultimate_goal":"Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise"},
    content: {"multi_platform":{},"ai_enhancement":{},"collaborative_development":{}}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'APMLDevelopmentMethodology',
  title: 'APML-First Development Methodology',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.apmldevelopmentmethodologypage {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 3rem 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
}

.page-content {
  padding-bottom: 4rem;
}

.interface-section {
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.interface-section h2 {
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 2rem;
}

.element {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.element h3 {
  font-size: 1.5rem;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.content-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.content-section h4 {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.property-item {
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.property-label {
  font-weight: 600;
  color: #6366f1;
  margin-right: 1rem;
  min-width: 120px;
}

.property-value {
  color: #f8fafc;
  flex: 1;
}

.methodology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.methodology-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.methodology-card:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
}

.methodology-card h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.methodology-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 6px;
}

.stat-label {
  font-weight: 500;
  color: #cbd5e1;
}

.stat-value {
  font-weight: 600;
  color: #6366f1;
}

.methodology-description {
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.methodology-description strong {
  color: #e2e8f0;
}

.educational-overview {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 8px;
  border-left: 4px solid #6366f1;
}

.educational-item {
  margin-bottom: 1rem;
}

.educational-item h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.educational-item p {
  color: #cbd5e1;
  line-height: 1.5;
}

.methodology-details {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.methodology-feature {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 6px;
}

.methodology-feature strong {
  color: #6366f1;
  margin-right: 0.5rem;
}

.methodology-framework {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(168, 85, 247, 0.05);
  border-radius: 8px;
  border-left: 3px solid #a855f7;
}

.methodology-framework h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #a855f7;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.framework-element {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.framework-label {
  font-weight: 600;
  color: #a855f7;
  margin-right: 0.5rem;
  min-width: 120px;
}

.framework-value {
  color: #e2e8f0;
  flex: 1;
}

.methodology-steps {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(34, 197, 94, 0.05);
  border-radius: 8px;
  border-left: 3px solid #22c55e;
}

.methodology-steps h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.methodology-step {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.methodology-step strong {
  color: #22c55e;
  margin-right: 0.5rem;
}

.methodology-type {
  border-left: 4px solid #6366f1;
}

.content-type {
  border-left: 4px solid #94a3b8;
}

.pattern-type {
  border-left: 4px solid #a855f7;
}

.process-type {
  border-left: 4px solid #22c55e;
}

.patterns-section, .processes-section {
  margin-bottom: 2rem;
}

.patterns-section h3, .processes-section h3 {
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

.element-properties {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.element-properties h4 {
  font-size: 1.125rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

.simple-content {
  margin-top: 1rem;
}

.content-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.content-item h5 {
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.content-item p {
  color: #94a3b8;
  line-height: 1.5;
}

.apml-source {
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.apml-source h2 {
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

/* Enhanced Mobile Responsiveness */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .page-subtitle {
    font-size: 1rem;
    line-height: 1.4;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .interface-section {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .methodology-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .methodology-card {
    padding: 1rem;
  }
  
  .methodology-card h5 {
    font-size: 1rem;
    line-height: 1.3;
  }
  
  .methodology-description {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .element h3 {
    font-size: 1.25rem;
    line-height: 1.3;
  }
  
  .content-section h4 {
    font-size: 1.125rem;
    line-height: 1.3;
  }
}

/* Enhanced Text Readability */
@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .methodology-card {
    padding: 0.875rem;
  }
  
  .methodology-card h5 {
    font-size: 0.95rem;
  }
  
  .methodology-description {
    font-size: 0.8rem;
  }
}
</style>