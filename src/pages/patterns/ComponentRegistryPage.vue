<template>
  <div class="component-registry-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Component Registry</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section components_registry">
          <h2>Components Registry</h2>
          <div class="element registry_header">
            <h3>Registry Header</h3>
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
    "name": "ComponentsRegistry",
    "properties": {
      "title": "APML Component Registry"
    }
  },
  "data": {
    "Component": {
      "fields": {
        "id": "unique_id"
      }
    },
    "Category": {
      "fields": {
        "id": "unique_id"
      }
    },
    "ComponentRegistry": {
      "fields": {
        "total_components": "number auto"
      }
    }
  },
  "interfaces": {
    "components_registry": {
      "elements": {
        "registry_header": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {}
    }
  },
  "logic": {
    "registry_operations": {
      "processes": {},
      "workflows": {
        "user types in search_input": {
          "trigger": "user types in search_input",
          "type": "conditional"
        }
      },
      "patterns": {}
    }
  },
  "rawContent": "app ComponentsRegistry:\n  title: \"APML Component Registry\"\n  description: \"Production-ready APML components for instant integration\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata Component:\n  id: unique_id\n  title: text required\n  description: text required\n  category: authentication | navigation | forms | dashboards\n  tags: list of text\n  version: text required\n  file_path: text required\n  author: text optional\n  downloads: number default 0\n  last_updated: timestamp auto\n\ndata Category:\n  id: unique_id\n  name: text required\n  icon: text required\n  component_count: number auto\n\ndata ComponentRegistry:\n  total_components: number auto\n  categories: list of Category\n  featured_components: list of Component\n  search_query: text optional\n  selected_category: text default \"all\"\n\ninterface components_registry:\n  show registry_header:\n    title: \"Component Registry\"\n    subtitle: \"Production-ready APML components for instant integration\"\n    \n    display registry_stats:\n      total_components_stat:\n        number: count all components\n        label: \"Components\"\n        \n      categories_stat:\n        number: count all categories\n        label: \"Categories\"\n        \n      specification_stat:\n        number: \"100%\"\n        label: \"APML v0.9.0\"\n        \n  display search_and_filters:\n    show search_input:\n      placeholder: \"Search components...\"\n      binding: registry.search_query\n      \n    show category_filters:\n      for each category in categories:\n        display filter_button:\n          icon: category.icon\n          label: category.name\n          active: when selected_category equals category.id\n          \n  show components_grid:\n    for each component in filtered_components:\n      display component_card:\n        header:\n          title: component.title\n          category_badge: component.category\n          \n        description: component.description\n        \n        tags_section:\n          for each tag in component.tags:\n            show tag_chip: tag\n            \n        footer:\n          version_info: \"v\" + component.version\n          action_buttons:\n            preview_button: \"Preview\"\n            copy_button: \"Copy APML\"\n            \nlogic registry_operations:\n  when user types in search_input:\n    filter components by title, description, or tags\n    update components_grid display\n    \n  when user clicks category_filter:\n    set selected_category to clicked category\n    filter components by category\n    update components_grid display\n    \n  when user clicks component_card:\n    navigate to component_detail_view\n    track component_view_analytics\n    \n  when user clicks preview_button:\n    open component_preview_modal\n    load component_code from file_path\n    render live_preview\n    \n  when user clicks copy_button:\n    read component_file from registry\n    copy APML_code to clipboard\n    show success_notification\n    track component_copy_analytics\n    \n  process component_loading:\n    load all_components from registry_directory\n    parse component_metadata from files\n    calculate category_counts\n    sort by popularity and last_updated",
  "filePath": "/Users/tomcassidy/APML/website/src/registry/components-registry.apml"
}
const apmlSource = ref(`app ComponentsRegistry:
  title: "APML Component Registry"
  description: "Production-ready APML components for instant integration"
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
  author: text optional
  downloads: number default 0
  last_updated: timestamp auto

data Category:
  id: unique_id
  name: text required
  icon: text required
  component_count: number auto

data ComponentRegistry:
  total_components: number auto
  categories: list of Category
  featured_components: list of Component
  search_query: text optional
  selected_category: text default "all"

interface components_registry:
  show registry_header:
    title: "Component Registry"
    subtitle: "Production-ready APML components for instant integration"
    
    display registry_stats:
      total_components_stat:
        number: count all components
        label: "Components"
        
      categories_stat:
        number: count all categories
        label: "Categories"
        
      specification_stat:
        number: "100%"
        label: "APML v0.9.0"
        
  display search_and_filters:
    show search_input:
      placeholder: "Search components..."
      binding: registry.search_query
      
    show category_filters:
      for each category in categories:
        display filter_button:
          icon: category.icon
          label: category.name
          active: when selected_category equals category.id
          
  show components_grid:
    for each component in filtered_components:
      display component_card:
        header:
          title: component.title
          category_badge: component.category
          
        description: component.description
        
        tags_section:
          for each tag in component.tags:
            show tag_chip: tag
            
        footer:
          version_info: "v" + component.version
          action_buttons:
            preview_button: "Preview"
            copy_button: "Copy APML"
            
logic registry_operations:
  when user types in search_input:
    filter components by title, description, or tags
    update components_grid display
    
  when user clicks category_filter:
    set selected_category to clicked category
    filter components by category
    update components_grid display
    
  when user clicks component_card:
    navigate to component_detail_view
    track component_view_analytics
    
  when user clicks preview_button:
    open component_preview_modal
    load component_code from file_path
    render live_preview
    
  when user clicks copy_button:
    read component_file from registry
    copy APML_code to clipboard
    show success_notification
    track component_copy_analytics
    
  process component_loading:
    load all_components from registry_directory
    parse component_metadata from files
    calculate category_counts
    sort by popularity and last_updated`)

// Reactive data based on APML data models
// Data models from APML specification
const Component = ref({
  id: "",
})

const Category = ref({
  id: "",
})

const ComponentRegistry = ref({
  total_components: 0,
})



// Computed properties for interface elements
// Computed properties for interface elements
const components_registryElements = computed(() => ({
  registry_header: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'ComponentsRegistry',
  title: 'APML Component Registry',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.component-registry-page {
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