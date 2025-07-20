<template>
  <div class="registry-specification-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Playground</h1>
        <p class="page-subtitle">text required</p>
      </div>
    </header>
    <main class="page-content">
      <div class="container">
        <section  class="interface-section">
          <h2 >Registry Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Main Sections</h3>
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
    "name": "APMLRegistry",
    "properties": {
      "title": "Playground",
      "description": "text required",
      "version": "text required",
      "apml_specification_version": "0.9.0",
      "id": "unique_id",
      "category": "corporate | creative | minimal | gaming",
      "tags": "list of text",
      "file_path": "text required",
      "downloads": "number default 0",
      "name": "text required",
      "preview_url": "url required",
      "color_palette": "list of text",
      "subtitle": "Try APML live",
      "url": "/playground"
    }
  },
  "data": {
    "Component": {
      "fields": {
        "id": "unique_id"
      }
    },
    "Theme": {
      "fields": {
        "id": "unique_id"
      }
    }
  },
  "interfaces": {
    "registry_navigation": {
      "elements": {
        "main_sections": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
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
    "registry_routing": {
      "processes": {},
      "workflows": {
        "user navigates to \"/components\"": {
          "trigger": "user navigates to \"/components\"",
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
  "rawContent": "app APMLRegistry:\n  title: \"APML Component and Theme Registry\"\n  description: \"Comprehensive registry for APML components and themes\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata Component:\n  id: unique_id\n  title: text required\n  description: text required\n  category: authentication | navigation | forms | dashboards\n  tags: list of text\n  version: text required\n  file_path: text required\n  downloads: number default 0\n\ndata Theme:\n  id: unique_id\n  name: text required\n  description: text required\n  category: corporate | creative | minimal | gaming\n  preview_url: url required\n  downloads: number default 0\n  color_palette: list of text\n\ninterface registry_navigation:\n  show main_sections:\n    components_section:\n      title: \"Component Registry\"\n      subtitle: \"Production-ready APML components\"\n      url: \"/components\"\n      \n    themes_section:\n      title: \"Theme Gallery\"\n      subtitle: \"Beautiful visual themes\"\n      url: \"/themes\"\n      \n    examples_section:\n      title: \"Examples\"\n      subtitle: \"Real-world applications\"\n      url: \"/examples\"\n      \n    playground_section:\n      title: \"Playground\"\n      subtitle: \"Try APML live\"\n      url: \"/playground\"\n\nlogic registry_routing:\n  when user navigates to \"/components\":\n    load components_registry_page\n    display all_components with filtering\n    \n  when user navigates to \"/themes\":\n    load themes_gallery_page\n    display all_themes with previews\n    \n  when user clicks component_card:\n    show component_preview_modal\n    load component_source_code\n    \n  when user clicks theme_preview:\n    open theme_live_demo\n    track preview_analytics",
  "filePath": "/Users/tomcassidy/APML/website/registry-specification.apml"
}
const apmlSource = ref(`app APMLRegistry:
  title: "APML Component and Theme Registry"
  description: "Comprehensive registry for APML components and themes"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data Component:
  id: unique_id
  title: text required
  description: text required
  category: authentication | navigation | forms | dashboards
  tags: list of text
  version: text required
  file_path: text required
  downloads: number default 0

data Theme:
  id: unique_id
  name: text required
  description: text required
  category: corporate | creative | minimal | gaming
  preview_url: url required
  downloads: number default 0
  color_palette: list of text

interface registry_navigation:
  show main_sections:
    components_section:
      title: "Component Registry"
      subtitle: "Production-ready APML components"
      url: "/components"
      
    themes_section:
      title: "Theme Gallery"
      subtitle: "Beautiful visual themes"
      url: "/themes"
      
    examples_section:
      title: "Examples"
      subtitle: "Real-world applications"
      url: "/examples"
      
    playground_section:
      title: "Playground"
      subtitle: "Try APML live"
      url: "/playground"

logic registry_routing:
  when user navigates to "/components":
    load components_registry_page
    display all_components with filtering
    
  when user navigates to "/themes":
    load themes_gallery_page
    display all_themes with previews
    
  when user clicks component_card:
    show component_preview_modal
    load component_source_code
    
  when user clicks theme_preview:
    open theme_live_demo
    track preview_analytics`)

// Reactive data based on APML data models
// Data models from APML specification
const Component = ref({
  id: "",
})

const Theme = ref({
  id: "",
})



// Computed properties for interface elements
// Computed properties for interface elements
const registry_navigationElements = computed(() => ({
  main_sections: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'APMLRegistry',
  title: 'Playground',
  description: 'text required',
  version: 'text required'
}
</script>

<style scoped>
.registry-specification-page {
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