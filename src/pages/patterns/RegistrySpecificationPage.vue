<template>
  <div class="registry-specification-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Component and Theme Registry</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section registry_navigation">
          <h2>Registry Navigation</h2>
          <div class="element main_sections">
            <h3>Main Sections</h3>
            <div class="element-content">
              <p>Element type: display</p>
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
import APMLCodeBlock from '../components/APMLCodeBlock.vue'

// APML Specification Data
const apmlSpec = {
  "app": {
    "name": "APMLRegistry",
    "properties": {
      "title": "APML Component and Theme Registry"
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
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    }
  },
  "logic": {
    "registry_routing": {
      "processes": {},
      "workflows": {
        "user navigates to \"/components\"": {
          "trigger": "user navigates to \"/components\"",
          "type": "conditional"
        }
      },
      "patterns": {}
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
  title: 'APML Component and Theme Registry',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.registry-specification-page {
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

.property {
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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .interface-section {
    padding: 1rem;
  }
}
</style>