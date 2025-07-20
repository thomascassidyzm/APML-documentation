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
              <div class="content-section registry_stats">
                <h4>Registry Stats</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Total Components Stat</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Number</h5>
                    <p class="methodology-description">100%</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Label</h5>
                    <p class="methodology-description">APML v0.9.0</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Categories Stat</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Specification Stat</h5>
                  </div>
                </div>
              </div>
              <div class="content-section search_and_filters">
                <h4>Search And Filters</h4>
              </div>
          </div>
          <div class="element search_input">
            <h3>Search Input</h3>
          </div>
          <div class="element category_filters">
            <h3>Category Filters</h3>
              <div class="content-section filter_button">
                <h4>Filter Button</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Icon</h5>
                    <p class="methodology-description">category.icon</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Label</h5>
                    <p class="methodology-description">category.name</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Active</h5>
                    <p class="methodology-description">when selected_category equals category.id</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="element components_grid">
            <h3>Components Grid</h3>
              <div class="content-section component_card">
                <h4>Component Card</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Header</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Title</h5>
                    <p class="methodology-description">component.title</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Category Badge</h5>
                    <p class="methodology-description">component.category</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">component.description</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Tags Section</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>For Each Tag In Component.Tags</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="element tag_chip">
            <h3>Tag Chip</h3>
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
          "content": {
            "registry_stats": {},
            "search_and_filters": {}
          },
          "sections": {
            "registry_stats": {
              "title": "Registry Stats",
              "items": {
                "total_components_stat": {
                  "title": "Total Components Stat",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "number": {
                  "title": "Number",
                  "description": "100%",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "label": {
                  "title": "Label",
                  "description": "APML v0.9.0",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "categories_stat": {
                  "title": "Categories Stat",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "specification_stat": {
                  "title": "Specification Stat",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "search_and_filters": {
              "title": "Search And Filters",
              "items": {},
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "search_input": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "category_filters": {
          "type": "display",
          "properties": {},
          "content": {
            "filter_button": {}
          },
          "sections": {
            "filter_button": {
              "title": "Filter Button",
              "items": {
                "icon": {
                  "title": "Icon",
                  "description": "category.icon",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "label": {
                  "title": "Label",
                  "description": "category.name",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "active": {
                  "title": "Active",
                  "description": "when selected_category equals category.id",
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
        },
        "components_grid": {
          "type": "display",
          "properties": {},
          "content": {
            "component_card": {}
          },
          "sections": {
            "component_card": {
              "title": "Component Card",
              "items": {
                "header": {
                  "title": "Header",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "title": {
                  "title": "Title",
                  "description": "component.title",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "category_badge": {
                  "title": "Category Badge",
                  "description": "component.category",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "component.description",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "tags_section": {
                  "title": "Tags Section",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "for each tag in component.tags": {
                  "title": "For Each Tag In Component.Tags",
                  "description": "",
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
        },
        "tag_chip": {
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
    "registry_operations": {
      "processes": {},
      "workflows": {
        "user types in search_input": {
          "trigger": "user types in search_input",
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
    content: {"registry_stats":{},"search_and_filters":{}}
  },
  search_input: {
    type: 'display',
    properties: {},
    content: {}
  },
  category_filters: {
    type: 'display',
    properties: {},
    content: {"filter_button":{}}
  },
  components_grid: {
    type: 'display',
    properties: {},
    content: {"component_card":{}}
  },
  tag_chip: {
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