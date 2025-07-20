<template>
  <div class="home-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Ready to Build Production Apps?</h1>
        <p class="page-subtitle">Comprehensive plain text reference enabling AI assistants to help developers build APML applications</p>
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
    "properties": {
      "title": "Ready to Build Production Apps?",
      "description": "Comprehensive plain text reference enabling AI assistants to help developers build APML applications",
      "version": "1.0.0",
      "apml_specification_version": "0.9.0",
      "theme": "minimal-documentation",
      "logical_completeness_certified": "true",
      "file_name": "text required",
      "file_type": "specification | validator | documentation | example",
      "status": "current | deprecated | draft",
      "logical_completeness_status": "logically_complete | pending | not_applicable",
      "primary_specification": "APML-v0.9.0.apml",
      "enhanced_validator": "Enhanced APML Validator v0.9.0 - Certifies Logically Complete status",
      "site_specification": "site-specification.apml",
      "vue_app_source": "src/",
      "pattern_library": "src/patterns/",
      "single_source_of_truth": "true",
      "last_updated": "timestamp auto",
      "headline": "Code that reads like conversation",
      "subheadline": "Build applications through natural human-AI collaboration",
      "tagline": "More natural than markdown, more powerful than code",
      "subtitle": "Take APML to the next level with ADE",
      "app_to_user": "Display, output, communication to users",
      "user_to_app": "Interaction, input, commands from users",
      "app_to_app": "Processing, logic, internal workflows",
      "content": "Official specification with Trinity Principle and logical completeness requirements",
      "specification_file": "APML-v0.9.0.apml",
      "definition": "Applications where all logical workflows terminate, decision paths are handled, and Trinity Principle compliance is mathematically verified",
      "guarantee": "Logically Complete APML guarantees crash-free deployment",
      "certification_tool": "Enhanced APML Validator v0.9.0",
      "features": "Complete syntax reference, business patterns, best practices, integration examples",
      "categories": "Simple apps, business applications, enterprise solutions",
      "file_url": "/llm-reference.txt",
      "purpose": "Enables conversation-driven development with any AI assistant",
      "download_link": "View LLM Reference File",
      "human_note": "This is what AI assistants use to help you build APML applications",
      "vue_compiler": "Stable and ready for production - Logically Complete applications supported",
      "swift_compiler": "Coming Q2 2025",
      "kotlin_compiler": "Coming Q2 2025",
      "validation_guarantee": "All tools ensure Logically Complete certification",
      "github": "GitHub organization with 500+ members",
      "discord": "Discord community with 1200+ developers",
      "forum": "Community forum with 2500+ posts"
    }
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
  "rawContent": "app APMLDevSite:\n  title: APML - The Universal Language for Human-AI Collaboration\n  description: Official home of APML v0.9.0 - Logically Complete conversational code\n  version: 1.0.0\n  apml_specification_version: \"0.9.0\"\n  theme: minimal-documentation\n  logical_completeness_certified: true\n\ndata SiteResource:\n  file_name: text required\n  file_type: specification | validator | documentation | example\n  status: current | deprecated | draft\n  description: text required\n  logical_completeness_status: logically_complete | pending | not_applicable\n\ndata APMLDevSiteContent:\n  primary_specification: \"APML-v0.9.0.apml\"\n  enhanced_validator: \"src/enhanced-validator.apml\"\n  site_specification: \"site-specification.apml\"\n  vue_app_source: \"src/\"\n  pattern_library: \"src/patterns/\"\n  single_source_of_truth: true\n  last_updated: timestamp auto\n  \n  interface:\n    show hero_section:\n      headline: Code that reads like conversation\n      subheadline: Build applications through natural human-AI collaboration\n      tagline: More natural than markdown, more powerful than code\n      \n    display trinity_principle:\n      title: The Trinity Principle\n      subtitle: Every application expressed through three message types\n      app_to_user: Display, output, communication to users\n      user_to_app: Interaction, input, commands from users  \n      app_to_app: Processing, logic, internal workflows\n      \n    show specification_section:\n      title: APML v0.9.0 Language Specification\n      subtitle: Grammar Foundation Release - Complete syntax and semantics\n      content: Official specification with Trinity Principle and logical completeness requirements\n      specification_file: APML-v0.9.0.apml\n      \n    display logical_completeness_section:\n      title: Logically Complete APML\n      subtitle: The gold standard for production-ready conversational code\n      definition: Applications where all logical workflows terminate, decision paths are handled, and Trinity Principle compliance is mathematically verified\n      guarantee: Logically Complete APML guarantees crash-free deployment\n      certification_tool: Enhanced APML Validator v0.9.0\n      \n    display playground_section:\n      title: Try APML Playground\n      subtitle: Interactive editor with real-time compilation\n      features: Live editor, real-time preview, example templates\n      \n    show pattern_library:\n      title: Design Intelligence Pattern Library\n      subtitle: Complete methodologies for human-centered problem solving\n      categories: Design Intelligence, Business Strategy, Research Methodology\n      features: Interactive frameworks, guided learning paths, intelligent recommendations\n      \n    show component_registry:\n      title: Component Registry\n      subtitle: Production-ready APML components for instant integration\n      categories: Authentication, Navigation, Forms, Dashboards\n      features: Live previews, one-click copy, semantic search\n      \n    display themes_gallery:\n      title: Theme Gallery\n      subtitle: Beautiful visual themes with live previews\n      categories: Corporate, Creative, Minimal, Gaming, Educational\n      features: Live demos, instant download, color palettes\n      \n    show examples_gallery:\n      title: Real-world Examples\n      subtitle: See APML in action across different industries\n      categories: Simple apps, business applications, enterprise solutions\n      \n    display llm_reference_section:\n      title: LLM Reference File\n      subtitle: Complete APML knowledge for AI-assisted development\n      description: Comprehensive plain text reference enabling AI assistants to help developers build APML applications\n      file_url: /llm-reference.txt\n      features: Complete syntax reference, business patterns, best practices, integration examples\n      purpose: Enables conversation-driven development with any AI assistant\n      download_link: View LLM Reference File\n      human_note: This is what AI assistants use to help you build APML applications\n      \n    display tools_ecosystem:\n      title: Tools and Compilers\n      subtitle: Complete development ecosystem for APML v0.9.0\n      enhanced_validator: Enhanced APML Validator v0.9.0 - Certifies Logically Complete status\n      vue_compiler: Stable and ready for production - Logically Complete applications supported\n      swift_compiler: Coming Q2 2025\n      kotlin_compiler: Coming Q2 2025\n      validation_guarantee: All tools ensure Logically Complete certification\n      \n    show community_section:\n      title: Join the APML Community\n      subtitle: Connect with developers building the future\n      github: GitHub organization with 500+ members\n      discord: Discord community with 1200+ developers\n      forum: Community forum with 2500+ posts\n      \n    display commercial_bridge:\n      title: Ready to Build Production Apps?\n      subtitle: Take APML to the next level with ADE\n      call_to_action: Try ADE Free",
  "filePath": "/Users/tomcassidy/APML/website/site-specification.apml"
}
const apmlSource = ref(`app APMLDevSite:
  title: APML - The Universal Language for Human-AI Collaboration
  description: Official home of APML v0.9.0 - Logically Complete conversational code
  version: 1.0.0
  apml_specification_version: "0.9.0"
  theme: minimal-documentation
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
  title: 'Ready to Build Production Apps?',
  description: 'Comprehensive plain text reference enabling AI assistants to help developers build APML applications',
  version: '1.0.0'
}
</script>

<style scoped>
.home-page {
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
        padding: 2rem 0 1.5rem;
        text-align: center;
        background: rgba(99, 102, 241, 0.02);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .page-title {
        font-size: 2.5rem;
        font-weight: 600;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }
      
      .page-subtitle {
        font-size: 1.125rem;
        color: #cbd5e1;
        margin: 0;
        max-width: 800px;
        margin: 0 auto;
      }

.table-of-contents {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(168, 85, 247, 0.02));
        border-left: 4px solid #6366f1;
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
      }
      
      .table-of-contents h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #6366f1;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
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
        padding: 0.625rem 1rem;
        border-radius: 6px;
        transition: all 0.15s ease;
        border-left: 3px solid transparent;
        font-weight: 500;
      }
      
      .toc-link:hover {
        background: rgba(99, 102, 241, 0.08);
        color: #6366f1;
        border-left-color: #6366f1;
        transform: translateX(4px);
      }

.page-content {
        padding: 1.5rem 0 3rem;
      }
      
      .content-section {
        margin-bottom: 2rem;
        scroll-margin-top: 1.5rem;
      }
      
      .section-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #6366f1;
        margin-bottom: 1.25rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(99, 102, 241, 0.3);
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .section-title::before {
        content: '';
        width: 4px;
        height: 1.5rem;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        border-radius: 2px;
      }
      
      .content-block {
        margin-bottom: 1.5rem;
      }
      
      .block-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.75rem;
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
        margin: 0.75rem 0;
        display: grid;
        gap: 1rem;
      }
      
      .list-item {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        transition: all 0.15s ease;
        position: relative;
      }
      
      .list-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        border-radius: 0 2px 2px 0;
        opacity: 0;
        transition: opacity 0.15s ease;
      }
      
      .list-item:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(99, 102, 241, 0.3);
        transform: translateY(-2px);
      }
      
      .list-item:hover::before {
        opacity: 1;
      }
      
      .item-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .item-description {
        color: #cbd5e1;
        margin-bottom: 0.75rem;
        line-height: 1.5;
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

/* Trinity Principle Layout Patterns */
      .trinity-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
        margin: 2rem 0;
        padding: 1.5rem;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.03));
        border-radius: 12px;
        border: 1px solid rgba(99, 102, 241, 0.2);
      }
      
      .trinity-card {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
        padding: 1.25rem;
        border-left: 4px solid transparent;
        transition: all 0.2s ease;
      }
      
      .trinity-card.app-to-user {
        border-left-color: #3b82f6;
      }
      
      .trinity-card.user-to-app {
        border-left-color: #10b981;
      }
      
      .trinity-card.app-to-app {
        border-left-color: #f59e0b;
      }
      
      .trinity-card:hover {
        background: rgba(255, 255, 255, 0.06);
        transform: translateY(-2px);
      }
      
      .trinity-title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .trinity-card.app-to-user .trinity-title {
        color: #3b82f6;
      }
      
      .trinity-card.user-to-app .trinity-title {
        color: #10b981;
      }
      
      .trinity-card.app-to-app .trinity-title {
        color: #f59e0b;
      }
      
      .apml-source {
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin: 2rem 0;
        position: relative;
        overflow: hidden;
      }
      
      .apml-source::before {
        content: 'APML SOURCE';
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: #6366f1;
        opacity: 0.7;
        letter-spacing: 0.1em;
      }

@media (max-width: 768px) {
        .trinity-section {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1rem;
        }
        
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
        
        .container {
          padding: 0 1rem;
        }
      }


</style>