<template>
  <div class="pattern-library-navigation-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Pattern Library Navigation</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section navigation">
          <h2>Navigation</h2>
          <div class="element pattern_library_index">
            <h3>Pattern Library Index</h3>
          </div>
          <div class="element pattern_content">
            <h3>Pattern Content</h3>
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
    "name": "PatternLibraryNavigation",
    "properties": {
      "title": "APML Pattern Library Navigation"
    }
  },
  "data": {
    "PatternContent": {
      "fields": {
        "file_path": "text required"
      }
    }
  },
  "interfaces": {
    "navigation": {
      "elements": {
        "pattern_library_index": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "pattern_content": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [
        {
          "trigger": "user",
          "action": "navigates_to_patterns",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_design_intelligence",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_business_strategy",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_research_methodology",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_design_intelligence_user_research",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_design_intelligence_problem_framing",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_design_intelligence_ideation",
          "type": "user_to_app"
        },
        {
          "trigger": "user",
          "action": "navigates_to_patterns_design_intelligence_validation",
          "type": "user_to_app"
        }
      ],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    }
  },
  "logic": {
    "route_handling": {
      "processes": {},
      "workflows": {
        "user requests_pattern_page": {
          "trigger": "user requests_pattern_page",
          "type": "conditional",
          "methodology": {},
          "steps": []
        }
      },
      "patterns": {},
      "frameworks": {},
      "methodologies": {}
    }
  },
  "rawContent": "app PatternLibraryNavigation:\n  title: \"APML Pattern Library Navigation\"\n  description: \"Natural routing for design intelligence, business strategy, and research methodology patterns\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata PatternContent:\n  file_path: text required\n  display_title: text required\n  description: text required\n\ninterface navigation:\n  when user navigates_to \"/patterns\":\n    show pattern_library_index:\n      title: \"Design Intelligence Pattern Library\"\n      subtitle: \"Complete methodologies for human-centered problem solving using APML\"\n      \n  when user navigates_to \"/patterns/design-intelligence\":\n    show pattern_content:\n      title: \"Design Intelligence Framework\"\n      content_source: \"src/patterns/design-intelligence.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n      \n  when user navigates_to \"/patterns/business-strategy\":\n    show pattern_content:\n      title: \"Business Strategy Patterns\"\n      content_source: \"src/patterns/business-strategy-patterns.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n      \n  when user navigates_to \"/patterns/research-methodology\":\n    show pattern_content:\n      title: \"Research Methodology Patterns\"\n      content_source: \"src/patterns/research-methodology-patterns.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n\n  when user navigates_to \"/patterns/design-intelligence/user-research\":\n    show pattern_content:\n      title: \"User Research Methods\"\n      content_source: \"src/patterns/user-research-methods.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n\n  when user navigates_to \"/patterns/design-intelligence/problem-framing\":\n    show pattern_content:\n      title: \"Problem Framing Techniques\"\n      content_source: \"src/patterns/problem-framing.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n\n  when user navigates_to \"/patterns/design-intelligence/ideation\":\n    show pattern_content:\n      title: \"Ideation Methods\"\n      content_source: \"src/patterns/ideation-methods.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n\n  when user navigates_to \"/patterns/design-intelligence/validation\":\n    show pattern_content:\n      title: \"Validation Frameworks\"\n      content_source: \"src/patterns/validation-frameworks.apml\"\n      display_mode: \"apml_with_syntax_highlighting\"\n\nlogic route_handling:\n  when user requests_pattern_page:\n    load pattern_file from content_source\n    process apml_content for display\n    apply syntax_highlighting\n    render pattern_page_template\n    \n  when pattern_file loads_successfully:\n    display pattern_content with beautiful_apml_highlighting\n    show navigation_links to related_patterns\n    \n  when pattern_file fails_to_load:\n    show error_message: \"Pattern content not found\"\n    display fallback_content",
  "filePath": "/Users/tomcassidy/APML/website/pattern-library-navigation.apml"
}
const apmlSource = ref(`app PatternLibraryNavigation:
  title: "APML Pattern Library Navigation"
  description: "Natural routing for design intelligence, business strategy, and research methodology patterns"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data PatternContent:
  file_path: text required
  display_title: text required
  description: text required

interface navigation:
  when user navigates_to "/patterns":
    show pattern_library_index:
      title: "Design Intelligence Pattern Library"
      subtitle: "Complete methodologies for human-centered problem solving using APML"
      
  when user navigates_to "/patterns/design-intelligence":
    show pattern_content:
      title: "Design Intelligence Framework"
      content_source: "src/patterns/design-intelligence.apml"
      display_mode: "apml_with_syntax_highlighting"
      
  when user navigates_to "/patterns/business-strategy":
    show pattern_content:
      title: "Business Strategy Patterns"
      content_source: "src/patterns/business-strategy-patterns.apml"
      display_mode: "apml_with_syntax_highlighting"
      
  when user navigates_to "/patterns/research-methodology":
    show pattern_content:
      title: "Research Methodology Patterns"
      content_source: "src/patterns/research-methodology-patterns.apml"
      display_mode: "apml_with_syntax_highlighting"

  when user navigates_to "/patterns/design-intelligence/user-research":
    show pattern_content:
      title: "User Research Methods"
      content_source: "src/patterns/user-research-methods.apml"
      display_mode: "apml_with_syntax_highlighting"

  when user navigates_to "/patterns/design-intelligence/problem-framing":
    show pattern_content:
      title: "Problem Framing Techniques"
      content_source: "src/patterns/problem-framing.apml"
      display_mode: "apml_with_syntax_highlighting"

  when user navigates_to "/patterns/design-intelligence/ideation":
    show pattern_content:
      title: "Ideation Methods"
      content_source: "src/patterns/ideation-methods.apml"
      display_mode: "apml_with_syntax_highlighting"

  when user navigates_to "/patterns/design-intelligence/validation":
    show pattern_content:
      title: "Validation Frameworks"
      content_source: "src/patterns/validation-frameworks.apml"
      display_mode: "apml_with_syntax_highlighting"

logic route_handling:
  when user requests_pattern_page:
    load pattern_file from content_source
    process apml_content for display
    apply syntax_highlighting
    render pattern_page_template
    
  when pattern_file loads_successfully:
    display pattern_content with beautiful_apml_highlighting
    show navigation_links to related_patterns
    
  when pattern_file fails_to_load:
    show error_message: "Pattern content not found"
    display fallback_content`)

// Reactive data based on APML data models
// Data models from APML specification
const PatternContent = ref({
  file_path: "",
})



// Computed properties for interface elements
// Computed properties for interface elements
const navigationElements = computed(() => ({
  pattern_library_index: {
    type: 'display',
    properties: {},
    content: {}
  },
  pattern_content: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'PatternLibraryNavigation',
  title: 'APML Pattern Library Navigation',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.pattern-library-navigation-page {
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