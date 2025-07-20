<template>
  <div class="apmldevelopmentmethodologypage">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML-First Development Methodology</h1>
        <p class="page-subtitle">Multiple developers collaborating on shared APML specifications</p>
      </div>
    </header>
    <nav class="table-of-contents">
      <div class="container">
        <h2>Contents</h2>
        <ul class="toc-list">
            <li><a href="#apml_first_principles" class="toc-link">Apml First Principles</a></li>
            <li><a href="#development_workflow" class="toc-link">Development Workflow</a></li>
            <li><a href="#methodology_benefits" class="toc-link">Methodology Benefits</a></li>
            <li><a href="#anti_patterns" class="toc-link">Anti Patterns</a></li>
            <li><a href="#tooling_ecosystem" class="toc-link">Tooling Ecosystem</a></li>
            <li><a href="#success_metrics" class="toc-link">Success Metrics</a></li>
            <li><a href="#methodology_philosophy" class="toc-link">Methodology Philosophy</a></li>
            <li><a href="#future_evolution" class="toc-link">Future Evolution</a></li>
        </ul>
      </div>
    </nav>
    <main class="page-content">
      <div class="container">
        <section id="apml_first_principles" class="content-section">
          <h2 class="section-title">Apml First Principles</h2>
          <div class="content-block">
            <h3 class="block-title">Core Principles</h3>
              <div class="subsection">
                <h4 class="subsection-title">Principle 1</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Specifications as Single Source of Truth</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">All application logic, structure, and behavior is defined in APML specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Rationale</h5>
                    <p class="item-description">Eliminates drift between documentation and implementation. Ensures systematic evolution of applications.</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Example</h5>
                    <p class="item-description">When adding a new feature, modify the APML specification and recompile - never edit generated code directly</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Anti Pattern</h5>
                    <p class="item-description">Manually editing Vue components, then trying to reverse-engineer the APML specification</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Principle 2</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Edit APML, Never Generated Code</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Generated code is read-only. All changes flow through APML specifications.</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Rationale</h5>
                    <p class="item-description">Maintains consistency between specification and implementation. Enables regeneration without losing changes.</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Example</h5>
                    <p class="item-description">To fix CSS styling, update the theme specification or compiler CSS generation logic</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Anti Pattern</h5>
                    <p class="item-description">Editing generated .vue files directly, losing changes on next compilation</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Principle 3</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Compiler-Driven Architecture</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">The Ultimate APML Compiler is the authoritative translator from specifications to applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Rationale</h5>
                    <p class="item-description">Centralizes all generation logic. Improvements to the compiler benefit all applications instantly.</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Example</h5>
                    <p class="item-description">Enhancing mobile responsiveness in the compiler improves all generated applications simultaneously</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Anti Pattern</h5>
                    <p class="item-description">Creating manual workarounds in individual components instead of systematic compiler improvements</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Principle 4</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Systematic Over Manual</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Always choose systematic solutions that work across all applications over one-off manual fixes</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Rationale</h5>
                    <p class="item-description">Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden.</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Example</h5>
                    <p class="item-description">Adding navigation logic to the compiler rather than hardcoding routes in individual files</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Anti Pattern</h5>
                    <p class="item-description">Quick manual fixes that solve immediate problems but create maintenance debt</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="development_workflow" class="content-section">
          <h2 class="section-title">Development Workflow</h2>
          <div class="content-block">
            <h3 class="block-title">Workflow Steps</h3>
              <div class="subsection">
                <h4 class="subsection-title">Step 1</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">1</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Define Application Structure in APML</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">Text editor, APML syntax</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">APML syntax validation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Complete APML specification files</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Start with app definition, define data models, create interfaces, specify logic flows</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Step 2</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">2</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Compile APML to Target Platform</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">Compilation success, generated file structure</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Complete working application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Run 'node scripts/ultimate-apml-compiler.js' to generate Vue.js application</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Step 3</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">3</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Test Generated Application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">Development server, browser testing</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">Application functionality, user experience</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Validated working application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Run 'npm run dev' and test all features in browser</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Step 4</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">4</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Identify Needed Changes</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">User feedback, testing results</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">Clear requirement definition</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Prioritized list of improvements</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Document what needs to be added, changed, or improved</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Step 5</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">5</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Modify APML Specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">Text editor, APML patterns</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">APML syntax validation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Updated APML specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Edit .apml files - never touch generated code directly</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Step 6</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Step Number</h5>
                    <p class="item-description">6</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Action</h5>
                    <p class="item-description">Recompile and Validate</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tooling</h5>
                    <p class="item-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">Successful compilation, feature verification</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Output</h5>
                    <p class="item-description">Updated working application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Details</h5>
                    <p class="item-description">Recompile and verify changes work as expected</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="methodology_benefits" class="content-section">
          <h2 class="section-title">Methodology Benefits</h2>
          <div class="content-block">
            <h3 class="block-title">Systematic Advantages</h3>
              <div class="subsection">
                <h4 class="subsection-title">Consistency Benefit</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Perfect Consistency</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">All applications follow the same patterns and standards</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Reduces learning curve, simplifies maintenance, enables team scalability</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Evolution Benefit</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Systematic Evolution</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Improvements to the compiler benefit all applications instantly</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">One fix improves hundreds of applications simultaneously</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Maintainability Benefit</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">True Maintainability</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Single source of truth eliminates synchronization problems</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">No drift between documentation and implementation</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Scalability Benefit</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Team Scalability</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">New developers work at the APML level, not platform specifics</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Faster onboarding, consistent code quality, platform independence</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="anti_patterns" class="content-section">
          <h2 class="section-title">Anti Patterns</h2>
          <div class="content-block">
            <h3 class="block-title">Common Mistakes</h3>
              <div class="subsection">
                <h4 class="subsection-title">Manual Code Editing</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Editing Generated Code</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Directly modifying .vue files, CSS, or JavaScript in generated directories</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Why Harmful</h5>
                    <p class="item-description">Changes are lost on next compilation, creates drift between spec and implementation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Correct Approach</h5>
                    <p class="item-description">Modify APML specifications or compiler logic instead</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Partial Compilation</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Selective Code Generation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Generating some components manually while others are APML-generated</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Why Harmful</h5>
                    <p class="item-description">Creates inconsistency, makes maintenance complex, loses systematic benefits</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Correct Approach</h5>
                    <p class="item-description">Convert all components to APML specifications for complete consistency</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Specification Drift</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Outdated Specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Making changes without updating corresponding APML specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Why Harmful</h5>
                    <p class="item-description">Documentation becomes unreliable, regeneration breaks functionality</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Correct Approach</h5>
                    <p class="item-description">Always update APML specifications first, then recompile</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Compiler Workarounds</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Working Around Compiler Limitations</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Creating manual solutions instead of improving the compiler</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Why Harmful</h5>
                    <p class="item-description">Loses systematic benefits, creates maintenance debt, doesn't scale</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Correct Approach</h5>
                    <p class="item-description">Enhance the compiler to handle the use case systematically</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="tooling_ecosystem" class="content-section">
          <h2 class="section-title">Tooling Ecosystem</h2>
          <div class="content-block">
            <h3 class="block-title">Development Tools</h3>
              <div class="subsection">
                <h4 class="subsection-title">Core Compiler</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Ultimate APML Compiler</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Purpose</h5>
                    <p class="item-description">Translates APML specifications into working applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Location</h5>
                    <p class="item-description">scripts/ultimate-apml-compiler.js</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Usage</h5>
                    <p class="item-description">node scripts/ultimate-apml-compiler.js</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Specification Files</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">APML Specification Files</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Purpose</h5>
                    <p class="item-description">Define application structure, data, interfaces, and logic</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Location</h5>
                    <p class="item-description">*.apml files throughout project</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Patterns</h5>
                    <p class="item-description">app, data, interface, logic sections</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Generated Output</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Generated Application Code</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Purpose</h5>
                    <p class="item-description">Complete working application in target platform</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Location</h5>
                    <p class="item-description">src/ultimate-generated/ directory</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Note</h5>
                    <p class="item-description">Read-only - never edit directly</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Development Server</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">Platform Development Tools</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Purpose</h5>
                    <p class="item-description">Testing and debugging generated applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Example</h5>
                    <p class="item-description">npm run dev for Vue.js applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Validation</h5>
                    <p class="item-description">Browser testing, feature verification</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="success_metrics" class="content-section">
          <h2 class="section-title">Success Metrics</h2>
          <div class="content-block">
            <h3 class="block-title">Methodology Effectiveness</h3>
              <div class="subsection">
                <h4 class="subsection-title">Development Speed</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Metric</h5>
                    <p class="item-description">Time from Specification to Working Application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Target</h5>
                    <p class="item-description">Minutes for simple applications, hours for complex ones</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Measurement</h5>
                    <p class="item-description">Track compilation time + testing time</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Consistency Score</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Metric</h5>
                    <p class="item-description">Cross-Application Consistency</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Target</h5>
                    <p class="item-description">100% consistency in patterns, styling, and structure</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Measurement</h5>
                    <p class="item-description">Automated analysis of generated code patterns</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Maintenance Efficiency</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Metric</h5>
                    <p class="item-description">Time to Implement Cross-Application Changes</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Target</h5>
                    <p class="item-description">Single compiler change affects all applications instantly</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Measurement</h5>
                    <p class="item-description">Track time from specification change to deployment</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Team Productivity</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Metric</h5>
                    <p class="item-description">Developer Onboarding Time</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Target</h5>
                    <p class="item-description">New developers productive within days, not weeks</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Measurement</h5>
                    <p class="item-description">Time to first meaningful contribution</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="methodology_philosophy" class="content-section">
          <h2 class="section-title">Methodology Philosophy</h2>
          <div class="content-block">
            <h3 class="block-title">Core Philosophy</h3>
              <div class="subsection">
                <h4 class="subsection-title">Conversation To Code</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Principle</h5>
                    <p class="item-description">From Conversation to Working Application</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">APML enables direct translation of human intent into functional software</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Eliminates traditional coding bottlenecks and technical debt accumulation</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Systematic Thinking</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Principle</h5>
                    <p class="item-description">Systematic Over Ad-Hoc</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Every solution should work across the entire application ecosystem</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Exponential improvement as each enhancement benefits all applications</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Human Ai Collaboration</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Principle</h5>
                    <p class="item-description">Optimal Human-AI Partnership</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Humans focus on intent and logic, AI handles implementation details</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Faster development cycles with higher quality and consistency</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Logical Completeness</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Principle</h5>
                    <p class="item-description">Logically Complete Applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Every decision path and workflow termination is explicitly handled</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Impact</h5>
                    <p class="item-description">Applications that work reliably in production from day one</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="future_evolution" class="content-section">
          <h2 class="section-title">Future Evolution</h2>
          <div class="content-block">
            <h3 class="block-title">Methodology Roadmap</h3>
              <div class="properties-list">
                <div class="property-row">
                  <dt class="property-label">Export APMLDevelopmentMethodology</dt>
                  <dd class="property-value"></dd>
                </div>
                <div class="property-row">
                  <dt class="property-label">Title</dt>
                  <dd class="property-value">APML-First Development Methodology</dd>
                </div>
                <div class="property-row">
                  <dt class="property-label">Summary</dt>
                  <dd class="property-value">The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth</dd>
                </div>
                <div class="property-row">
                  <dt class="property-label">Key Insight</dt>
                  <dd class="property-value">Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering</dd>
                </div>
                <div class="property-row">
                  <dt class="property-label">Ultimate Goal</dt>
                  <dd class="property-value">Enable any team to build world-class applications through conversation and systematic specification, regardless of technical platform expertise</dd>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Multi Platform</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Capability</h5>
                    <p class="item-description">Multi-Platform Compilation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Same APML specifications generate iOS, Android, web, and desktop applications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Timeline</h5>
                    <p class="item-description">Swift and Kotlin compilers coming Q2 2025</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Ai Enhancement</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Capability</h5>
                    <p class="item-description">AI-Assisted Specification Creation</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">AI helps write APML specifications from natural language descriptions</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Timeline</h5>
                    <p class="item-description">Integration with LLM Reference File enables conversation-driven development</p>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Collaborative Development</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Capability</h5>
                    <p class="item-description">Team-Based APML Development</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">Multiple developers collaborating on shared APML specifications</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Timeline</h5>
                    <p class="item-description">Version control integration and merge conflict resolution for APML</p>
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
      "title": "APML-First Development Methodology",
      "description": "Multiple developers collaborating on shared APML specifications",
      "version": "1.0.0",
      "apml_specification_version": "0.9.0",
      "methodology_type": "development_practice",
      "name": "Platform Development Tools",
      "rationale": "Scales improvements across entire ecosystem. Reduces technical debt and maintenance burden.",
      "example": "npm run dev for Vue.js applications",
      "anti_pattern": "Quick manual fixes that solve immediate problems but create maintenance debt",
      "step_number": "6",
      "action": "Recompile and Validate",
      "tooling": "Ultimate APML Compiler",
      "validation": "Browser testing, feature verification",
      "output": "Updated working application",
      "subtitle": "Common mistakes that break the APML-first methodology",
      "details": "Recompile and verify changes work as expected",
      "group_by_domain": "Separate business logic, UI, and data concerns",
      "use_clear_naming": "File names should reflect their purpose and scope",
      "maintain_consistency": "Follow established patterns across all specifications",
      "document_relationships": "Make inter-specification dependencies explicit",
      "test_across_applications": "Verify improvements work for all existing APML applications",
      "maintain_backward_compatibility": "Don't break existing specifications without migration path",
      "add_comprehensive_examples": "Include examples in generated code for clarity",
      "optimize_for_readability": "Generated code should be clean and understandable",
      "version_specifications": "Track changes to APML specifications over time",
      "test_compilation_pipeline": "Ensure compiler changes don't break existing applications",
      "validate_all_features": "Test complete application after specification changes",
      "document_evolution_rationale": "Record why changes were made for future reference",
      "impact": "Applications that work reliably in production from day one",
      "why_harmful": "Loses systematic benefits, creates maintenance debt, doesn't scale",
      "correct_approach": "Enhance the compiler to handle the use case systematically",
      "purpose": "Testing and debugging generated applications",
      "location": "src/ultimate-generated/ directory",
      "usage": "node scripts/ultimate-apml-compiler.js",
      "patterns": "app, data, interface, logic sections",
      "note": "Read-only - never edit directly",
      "document_gap": "Clearly describe what's missing or problematic",
      "propose_systematic_solution": "Design solution that works across all applications",
      "implement_in_compiler": "Add capability to Ultimate APML Compiler",
      "validate_across_applications": "Test solution with multiple APML applications",
      "update_methodology_documentation": "Document new patterns and practices",
      "document_in_apml": "Capture practices as APML specifications",
      "create_examples": "Provide concrete implementation examples",
      "integrate_with_compiler": "Make best practices automatic where possible",
      "share_with_community": "Contribute to APML ecosystem knowledge",
      "metric": "Developer Onboarding Time",
      "target": "New developers productive within days, not weeks",
      "measurement": "Time to first meaningful contribution",
      "principle": "Logically Complete Applications",
      "capability": "Team-Based APML Development",
      "timeline": "Version control integration and merge conflict resolution for APML",
      "summary": "The systematic approach to building maintainable, scalable applications using APML specifications as the single source of truth",
      "key_insight": "Edit APML, Never Generated Code - this simple principle transforms software development from craft to systematic engineering"
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
  description: 'Multiple developers collaborating on shared APML specifications',
  version: '1.0.0'
}
</script>

<style scoped>
.apmldevelopmentmethodologypage {
        min-height: 100vh;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
        color: #f8fafc;
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

.page-header {
        padding: 3rem 0 2rem;
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
        margin: 0;
      }

.table-of-contents {
        background: rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 2rem 0;
        margin-bottom: 2rem;
      }
      
      .table-of-contents h2 {
        font-size: 1.5rem;
        color: #6366f1;
        margin-bottom: 1rem;
      }
      
      .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 0.5rem;
      }
      
      .toc-link {
        display: block;
        color: #cbd5e1;
        text-decoration: none;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      
      .toc-link:hover {
        background: rgba(99, 102, 241, 0.1);
        color: #6366f1;
      }

.page-content {
        padding-bottom: 4rem;
      }
      
      .content-section {
        margin-bottom: 3rem;
        scroll-margin-top: 2rem;
      }
      
      .section-title {
        font-size: 2rem;
        color: #6366f1;
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(99, 102, 241, 0.3);
      }
      
      .content-block {
        margin-bottom: 2rem;
      }
      
      .block-title {
        font-size: 1.5rem;
        color: #f8fafc;
        margin-bottom: 1rem;
      }

.properties-list {
        margin: 1rem 0;
      }
      
      .property-row {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 1rem;
        margin-bottom: 0.5rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .property-label {
        font-weight: 600;
        color: #6366f1;
        font-size: 0.9rem;
      }
      
      .property-value {
        color: #cbd5e1;
      }

.definition-item {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.03);
        border-left: 4px solid #6366f1;
        border-radius: 0 8px 8px 0;
      }
      
      .definition-title {
        font-size: 1.25rem;
        color: #f8fafc;
        margin-bottom: 0.5rem;
      }
      
      .definition-description {
        color: #cbd5e1;
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      
      .definition-meta {
        margin: 0.5rem 0;
        color: #94a3b8;
        font-size: 0.9rem;
      }

.subsection {
        margin: 2rem 0;
      }
      
      .subsection-title {
        font-size: 1.25rem;
        color: #a855f7;
        margin-bottom: 1rem;
      }

.items-list {
        margin: 1rem 0;
      }
      
      .list-item {
        margin: 1.5rem 0;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 8px;
      }
      
      .item-title {
        font-size: 1.1rem;
        color: #f8fafc;
        margin-bottom: 0.5rem;
      }
      
      .item-description {
        color: #cbd5e1;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

.item-details,
      .methodology-details,
      .item-properties {
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 0.5rem 1rem;
      }
      
      .item-details dt,
      .methodology-details dt,
      .item-properties dt {
        font-weight: 600;
        color: #6366f1;
        font-size: 0.9rem;
      }
      
      .item-details dd,
      .methodology-details dd,
      .item-properties dd {
        color: #cbd5e1;
        margin: 0;
      }

.overview-text {
        margin: 1rem 0;
      }
      
      .overview-item {
        margin: 1rem 0;
      }
      
      .overview-item h5 {
        font-size: 1rem;
        color: #a855f7;
        margin-bottom: 0.5rem;
      }
      
      .overview-item p {
        color: #cbd5e1;
        line-height: 1.6;
      }

@media (max-width: 768px) {
        .toc-list {
          grid-template-columns: 1fr;
        }
        
        .property-row {
          grid-template-columns: 1fr;
          gap: 0.25rem;
        }
        
        .item-details,
        .methodology-details,
        .item-properties {
          grid-template-columns: 1fr;
          gap: 0.25rem;
        }
        
        .page-title {
          font-size: 2rem;
        }
      }


</style>