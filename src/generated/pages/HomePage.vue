<template>
  <div class="home-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APMLDevSite</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
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
    "name": "APMLDevSite",
    "properties": {}
  },
  "data": {
    "SiteResource": {
      "fields": {
        "file_name": "text required"
      }
    },
    "APMLDevSiteContent": {
      "fields": {
        "primary_specification": "\"APML-v0.9.0.apml\""
      }
    }
  },
  "interfaces": {},
  "logic": {},
  "rawContent": "app APMLDevSite:\n  title: APML - The Universal Language for Human-AI Collaboration\n  description: Official home of APML v0.9.0 - Logically Complete conversational code\n  version: 1.0.0\n  apml_specification_version: \"0.9.0\"\n  logical_completeness_certified: true\n\ndata SiteResource:\n  file_name: text required\n  file_type: specification | validator | documentation | example\n  status: current | deprecated | draft\n  description: text required\n  logical_completeness_status: logically_complete | pending | not_applicable\n\ndata APMLDevSiteContent:\n  primary_specification: \"APML-v0.9.0.apml\"\n  enhanced_validator: \"src/enhanced-validator.apml\"\n  site_specification: \"site-specification.apml\"\n  vue_app_source: \"src/\"\n  pattern_library: \"src/patterns/\"\n  single_source_of_truth: true\n  last_updated: timestamp auto\n  \n  interface:\n    show hero_section:\n      headline: Code that reads like conversation\n      subheadline: Build applications through natural human-AI collaboration\n      tagline: More natural than markdown, more powerful than code\n      \n    display trinity_principle:\n      title: The Trinity Principle\n      subtitle: Every application expressed through three message types\n      app_to_user: Display, output, communication to users\n      user_to_app: Interaction, input, commands from users  \n      app_to_app: Processing, logic, internal workflows\n      \n    show specification_section:\n      title: APML v0.9.0 Language Specification\n      subtitle: Grammar Foundation Release - Complete syntax and semantics\n      content: Official specification with Trinity Principle and logical completeness requirements\n      specification_file: APML-v0.9.0.apml\n      \n    display logical_completeness_section:\n      title: Logically Complete APML\n      subtitle: The gold standard for production-ready conversational code\n      definition: Applications where all logical workflows terminate, decision paths are handled, and Trinity Principle compliance is mathematically verified\n      guarantee: Logically Complete APML guarantees crash-free deployment\n      certification_tool: Enhanced APML Validator v0.9.0\n      \n    display playground_section:\n      title: Try APML Playground\n      subtitle: Interactive editor with real-time compilation\n      features: Live editor, real-time preview, example templates\n      \n    show pattern_library:\n      title: Design Intelligence Pattern Library\n      subtitle: Complete methodologies for human-centered problem solving\n      categories: Design Intelligence, Business Strategy, Research Methodology\n      features: Interactive frameworks, guided learning paths, intelligent recommendations\n      \n    show component_registry:\n      title: Component Registry\n      subtitle: Production-ready APML components for instant integration\n      categories: Authentication, Navigation, Forms, Dashboards\n      features: Live previews, one-click copy, semantic search\n      \n    display themes_gallery:\n      title: Theme Gallery\n      subtitle: Beautiful visual themes with live previews\n      categories: Corporate, Creative, Minimal, Gaming, Educational\n      features: Live demos, instant download, color palettes\n      \n    show examples_gallery:\n      title: Real-world Examples\n      subtitle: See APML in action across different industries\n      categories: Simple apps, business applications, enterprise solutions\n      \n    display llm_reference_section:\n      title: LLM Reference File\n      subtitle: Complete APML knowledge for AI-assisted development\n      description: Comprehensive plain text reference enabling AI assistants to help developers build APML applications\n      file_url: /llm-reference.txt\n      features: Complete syntax reference, business patterns, best practices, integration examples\n      purpose: Enables conversation-driven development with any AI assistant\n      download_link: View LLM Reference File\n      human_note: This is what AI assistants use to help you build APML applications\n      \n    display tools_ecosystem:\n      title: Tools and Compilers\n      subtitle: Complete development ecosystem for APML v0.9.0\n      enhanced_validator: Enhanced APML Validator v0.9.0 - Certifies Logically Complete status\n      vue_compiler: Stable and ready for production - Logically Complete applications supported\n      swift_compiler: Coming Q2 2025\n      kotlin_compiler: Coming Q2 2025\n      validation_guarantee: All tools ensure Logically Complete certification\n      \n    show community_section:\n      title: Join the APML Community\n      subtitle: Connect with developers building the future\n      github: GitHub organization with 500+ members\n      discord: Discord community with 1200+ developers\n      forum: Community forum with 2500+ posts\n      \n    display commercial_bridge:\n      title: Ready to Build Production Apps?\n      subtitle: Take APML to the next level with ADE\n      call_to_action: Try ADE Free",
  "filePath": "/Users/tomcassidy/APML/website/site-specification.apml"
}
const apmlSource = ref(`app APMLDevSite:
  title: APML - The Universal Language for Human-AI Collaboration
  description: Official home of APML v0.9.0 - Logically Complete conversational code
  version: 1.0.0
  apml_specification_version: "0.9.0"
  logical_completeness_certified: true

data SiteResource:
  file_name: text required
  file_type: specification | validator | documentation | example
  status: current | deprecated | draft
  description: text required
  logical_completeness_status: logically_complete | pending | not_applicable

data APMLDevSiteContent:
  primary_specification: "APML-v0.9.0.apml"
  enhanced_validator: "src/enhanced-validator.apml"
  site_specification: "site-specification.apml"
  vue_app_source: "src/"
  pattern_library: "src/patterns/"
  single_source_of_truth: true
  last_updated: timestamp auto
  
  interface:
    show hero_section:
      headline: Code that reads like conversation
      subheadline: Build applications through natural human-AI collaboration
      tagline: More natural than markdown, more powerful than code
      
    display trinity_principle:
      title: The Trinity Principle
      subtitle: Every application expressed through three message types
      app_to_user: Display, output, communication to users
      user_to_app: Interaction, input, commands from users  
      app_to_app: Processing, logic, internal workflows
      
    show specification_section:
      title: APML v0.9.0 Language Specification
      subtitle: Grammar Foundation Release - Complete syntax and semantics
      content: Official specification with Trinity Principle and logical completeness requirements
      specification_file: APML-v0.9.0.apml
      
    display logical_completeness_section:
      title: Logically Complete APML
      subtitle: The gold standard for production-ready conversational code
      definition: Applications where all logical workflows terminate, decision paths are handled, and Trinity Principle compliance is mathematically verified
      guarantee: Logically Complete APML guarantees crash-free deployment
      certification_tool: Enhanced APML Validator v0.9.0
      
    display playground_section:
      title: Try APML Playground
      subtitle: Interactive editor with real-time compilation
      features: Live editor, real-time preview, example templates
      
    show pattern_library:
      title: Design Intelligence Pattern Library
      subtitle: Complete methodologies for human-centered problem solving
      categories: Design Intelligence, Business Strategy, Research Methodology
      features: Interactive frameworks, guided learning paths, intelligent recommendations
      
    show component_registry:
      title: Component Registry
      subtitle: Production-ready APML components for instant integration
      categories: Authentication, Navigation, Forms, Dashboards
      features: Live previews, one-click copy, semantic search
      
    display themes_gallery:
      title: Theme Gallery
      subtitle: Beautiful visual themes with live previews
      categories: Corporate, Creative, Minimal, Gaming, Educational
      features: Live demos, instant download, color palettes
      
    show examples_gallery:
      title: Real-world Examples
      subtitle: See APML in action across different industries
      categories: Simple apps, business applications, enterprise solutions
      
    display llm_reference_section:
      title: LLM Reference File
      subtitle: Complete APML knowledge for AI-assisted development
      description: Comprehensive plain text reference enabling AI assistants to help developers build APML applications
      file_url: /llm-reference.txt
      features: Complete syntax reference, business patterns, best practices, integration examples
      purpose: Enables conversation-driven development with any AI assistant
      download_link: View LLM Reference File
      human_note: This is what AI assistants use to help you build APML applications
      
    display tools_ecosystem:
      title: Tools and Compilers
      subtitle: Complete development ecosystem for APML v0.9.0
      enhanced_validator: Enhanced APML Validator v0.9.0 - Certifies Logically Complete status
      vue_compiler: Stable and ready for production - Logically Complete applications supported
      swift_compiler: Coming Q2 2025
      kotlin_compiler: Coming Q2 2025
      validation_guarantee: All tools ensure Logically Complete certification
      
    show community_section:
      title: Join the APML Community
      subtitle: Connect with developers building the future
      github: GitHub organization with 500+ members
      discord: Discord community with 1200+ developers
      forum: Community forum with 2500+ posts
      
    display commercial_bridge:
      title: Ready to Build Production Apps?
      subtitle: Take APML to the next level with ADE
      call_to_action: Try ADE Free`)

// Reactive data based on APML data models
// Data models from APML specification
const SiteResource = ref({
  file_name: "",
})

const APMLDevSiteContent = ref({
  primary_specification: null,
})



// Computed properties for interface elements
// Computed properties for interface elements


// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'APMLDevSite',
  title: '',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.home-page {
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