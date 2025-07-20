<template>
  <div class="pattern-library-navigation-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Validation Frameworks</h1>
        <p class="page-subtitle">text required</p>
      </div>
    </header>
    <main class="page-content">
      <div class="container">
        <section id="navigation" class="interface-section">
          <h2 >Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Pattern Library Index</h3>
          </div>
          <div class="content-block">
            <h3 class="block-title">Pattern Content</h3>
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
      "title": "Validation Frameworks",
      "description": "text required",
      "version": "1.0.0",
      "apml_specification_version": "0.9.0",
      "file_path": "text required",
      "display_title": "text required",
      "subtitle": "Complete methodologies for human-centered problem solving using APML",
      "content_source": "src/patterns/validation-frameworks.apml",
      "display_mode": "apml_with_syntax_highlighting",
      "error_message": "Pattern content not found"
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
  title: 'Validation Frameworks',
  description: 'text required',
  version: '1.0.0'
}
</script>

<style scoped>
.pattern-library-navigation-page {
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