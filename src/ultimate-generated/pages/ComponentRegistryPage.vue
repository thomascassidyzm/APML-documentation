<template>
  <div class="component-registry-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">component.title</h1>
        <p class="page-subtitle">component.description</p>
      </div>
    </header>
    <main class="page-content">
      <div class="container">
        <section id="components_registry" class="interface-section">
          <h2 >Components Registry</h2>
          <div class="content-block">
            <h3 class="block-title">Registry Header</h3>
              <div class="subsection">
                <h4 class="subsection-title">Registry Stats</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Total Components Stat</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Number</h5>
                    <p class="item-description">100%</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Label</h5>
                    <p class="item-description">APML v0.9.0</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Categories Stat</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Specification Stat</h5>
                  </div>
                </div>
              </div>
              <div class="subsection">
                <h4 class="subsection-title">Search And Filters</h4>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Search Input</h3>
          </div>
          <div class="content-block">
            <h3 class="block-title">Category Filters</h3>
              <div class="subsection">
                <h4 class="subsection-title">Filter Button</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Icon</h5>
                    <p class="item-description">category.icon</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Label</h5>
                    <p class="item-description">category.name</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Active</h5>
                    <p class="item-description">when selected_category equals category.id</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Components Grid</h3>
              <div class="subsection">
                <h4 class="subsection-title">Component Card</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Header</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Title</h5>
                    <p class="item-description">component.title</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Category Badge</h5>
                    <p class="item-description">component.category</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Description</h5>
                    <p class="item-description">component.description</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Tags Section</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">For Each Tag In Component.Tags</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Tag Chip</h3>
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
      "title": "component.title",
      "description": "component.description",
      "version": "text required",
      "apml_specification_version": "0.9.0",
      "id": "unique_id",
      "category": "authentication | navigation | forms | dashboards",
      "tags": "list of text",
      "file_path": "text required",
      "author": "text optional",
      "downloads": "number default 0",
      "last_updated": "timestamp auto",
      "name": "text required",
      "icon": "category.icon",
      "component_count": "number auto",
      "total_components": "number auto",
      "categories": "list of Category",
      "featured_components": "list of Component",
      "search_query": "text optional",
      "selected_category": "text default \"all\"",
      "subtitle": "Production-ready APML components for instant integration",
      "number": "100%",
      "label": "category.name",
      "placeholder": "Search components...",
      "binding": "registry.search_query",
      "active": "when selected_category equals category.id",
      "category_badge": "component.category",
      "tag_chip": "tag",
      "version_info": "v",
      "preview_button": "Preview",
      "copy_button": "Copy APML"
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
  title: 'component.title',
  description: 'component.description',
  version: 'text required'
}
</script>

<style scoped>
.component-registry-page {
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