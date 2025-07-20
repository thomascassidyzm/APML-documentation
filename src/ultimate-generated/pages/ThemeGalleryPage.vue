<template>
  <div class="theme-gallery-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Themes Gallery</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section themes_gallery">
          <h2>Themes Gallery</h2>
          <div class="element gallery_header">
            <h3>Gallery Header</h3>
              <div class="content-section gallery_stats">
                <h4>Gallery Stats</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Themes Stat</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Number</h5>
                    <p class="methodology-description">sum all theme downloads</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Label</h5>
                    <p class="methodology-description">Total Downloads</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Categories Stat</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Downloads Stat</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="element featured_themes_section">
            <h3>Featured Themes Section</h3>
              <div class="content-section featured_carousel">
                <h4>Featured Carousel</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>For Each Theme In Top Rated Themes</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="element theme_hero_card">
            <h3>Theme Hero Card</h3>
              <div class="content-section theme_categories">
                <h4>Theme Categories</h4>
              </div>
          </div>
          <div class="element category_section">
            <h3>Category Section</h3>
              <div class="content-section theme_card">
                <h4>Theme Card</h4>
                <div class="methodology-grid">
                  <div class="methodology-card content-type">
                    <h5>Preview Image</h5>
                    <p class="methodology-description">theme.screenshots[0]</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Theme Info</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Name</h5>
                    <p class="methodology-description">theme.name</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Author</h5>
                    <p class="methodology-description">theme.author</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Downloads</h5>
                    <p class="methodology-description">theme.downloads +  downloads</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Color Palette</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>For Each Color In Theme.Color Palette</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="element color_swatch">
            <h3>Color Swatch</h3>
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
    "name": "ThemesGallery",
    "properties": {
      "title": "APML Themes Gallery"
    }
  },
  "data": {
    "Theme": {
      "fields": {
        "id": "unique_id"
      }
    },
    "ThemeCategory": {
      "fields": {
        "id": "unique_id"
      }
    }
  },
  "interfaces": {
    "themes_gallery": {
      "elements": {
        "gallery_header": {
          "type": "display",
          "properties": {},
          "content": {
            "gallery_stats": {}
          },
          "sections": {
            "gallery_stats": {
              "title": "Gallery Stats",
              "items": {
                "themes_stat": {
                  "title": "Themes Stat",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "number": {
                  "title": "Number",
                  "description": "sum all theme downloads",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "label": {
                  "title": "Label",
                  "description": "Total Downloads",
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
                "downloads_stat": {
                  "title": "Downloads Stat",
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
        "featured_themes_section": {
          "type": "display",
          "properties": {},
          "content": {
            "featured_carousel": {}
          },
          "sections": {
            "featured_carousel": {
              "title": "Featured Carousel",
              "items": {
                "for each theme in top_rated_themes": {
                  "title": "For Each Theme In Top Rated Themes",
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
        "theme_hero_card": {
          "type": "display",
          "properties": {},
          "content": {
            "theme_categories": {}
          },
          "sections": {
            "theme_categories": {
              "title": "Theme Categories",
              "items": {},
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "category_section": {
          "type": "display",
          "properties": {},
          "content": {
            "theme_card": {}
          },
          "sections": {
            "theme_card": {
              "title": "Theme Card",
              "items": {
                "preview_image": {
                  "title": "Preview Image",
                  "description": "theme.screenshots[0]",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "theme_info": {
                  "title": "Theme Info",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "name": {
                  "title": "Name",
                  "description": "theme.name",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "author": {
                  "title": "Author",
                  "description": "theme.author",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "downloads": {
                  "title": "Downloads",
                  "description": "theme.downloads +  downloads",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "color_palette": {
                  "title": "Color Palette",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "for each color in theme.color_palette": {
                  "title": "For Each Color In Theme.Color Palette",
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
        "color_swatch": {
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
    "gallery_operations": {
      "processes": {},
      "workflows": {
        "user clicks live_preview": {
          "trigger": "user clicks live_preview",
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
  "rawContent": "app ThemesGallery:\n  title: \"APML Themes Gallery\"\n  description: \"Visual theme library with live previews and one-click downloads\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata Theme:\n  id: unique_id\n  name: text required\n  description: text required\n  category: corporate | creative | minimal | gaming | educational\n  preview_url: url required\n  download_url: url required\n  author: text required\n  downloads: number default 0\n  rating: number default 0\n  screenshots: list of url\n  color_palette: list of text\n  created_at: timestamp auto\n  last_updated: timestamp auto\n\ndata ThemeCategory:\n  id: unique_id\n  name: text required\n  description: text required\n  icon: text required\n  theme_count: number auto\n\ninterface themes_gallery:\n  show gallery_header:\n    title: \"Theme Gallery\"\n    subtitle: \"Beautiful, ready-to-use themes for your APML applications\"\n    \n    display gallery_stats:\n      themes_stat:\n        number: count all themes\n        label: \"Themes Available\"\n        \n      categories_stat:\n        number: count all categories\n        label: \"Style Categories\"\n        \n      downloads_stat:\n        number: sum all theme downloads\n        label: \"Total Downloads\"\n        \n  show featured_themes_section:\n    title: \"Featured Themes\"\n    \n    display featured_carousel:\n      for each theme in top_rated_themes:\n        show theme_hero_card:\n          large_preview: theme.screenshots[0]\n          overlay_info:\n            name: theme.name\n            description: theme.description\n            author: theme.author\n            rating: theme.rating stars\n            \n          action_buttons:\n            live_preview: \"View Live Demo\"\n            download_theme: \"Download Theme\"\n            \n  display theme_categories:\n    for each category in theme_categories:\n      show category_section:\n        header:\n          icon: category.icon\n          title: category.name\n          description: category.description\n          theme_count: category.theme_count + \" themes\"\n          \n        theme_grid:\n          for each theme in category.themes:\n            display theme_card:\n              preview_image: theme.screenshots[0]\n              \n              theme_info:\n                name: theme.name\n                author: theme.author\n                downloads: theme.downloads + \" downloads\"\n                \n              color_palette:\n                for each color in theme.color_palette:\n                  show color_swatch: color\n                  \n              card_actions:\n                preview_button: \"Live Preview\"\n                download_button: \"Download\"\n                details_link: \"View Details\"\n\nlogic gallery_operations:\n  when user clicks live_preview:\n    open preview_modal with theme.preview_url\n    track theme_preview_analytics\n    \n  when user clicks download_theme:\n    initiate theme_download from theme.download_url\n    increment theme.downloads count\n    track download_analytics\n    show download_instructions\n    \n  when user clicks theme_card:\n    navigate to theme_detail_page\n    show full_screenshots_gallery\n    display theme_specifications\n    show installation_instructions\n    \n  process theme_installation:\n    when user downloads theme:\n      provide APML_theme_file\n      include installation_guide\n      show integration_examples\n      offer support_resources\n      \n  calculate theme_ratings:\n    average user_ratings for each theme\n    weight by download_count and usage_time\n    update featured_themes based on popularity\n    \n  when theme_preview_loads:\n    render live_application using theme\n    allow user_interaction within preview\n    show theme_customization_options",
  "filePath": "/Users/tomcassidy/APML/website/src/registry/themes-gallery.apml"
}
const apmlSource = ref(`app ThemesGallery:
  title: "APML Themes Gallery"
  description: "Visual theme library with live previews and one-click downloads"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data Theme:
  id: unique_id
  name: text required
  description: text required
  category: corporate | creative | minimal | gaming | educational
  preview_url: url required
  download_url: url required
  author: text required
  downloads: number default 0
  rating: number default 0
  screenshots: list of url
  color_palette: list of text
  created_at: timestamp auto
  last_updated: timestamp auto

data ThemeCategory:
  id: unique_id
  name: text required
  description: text required
  icon: text required
  theme_count: number auto

interface themes_gallery:
  show gallery_header:
    title: "Theme Gallery"
    subtitle: "Beautiful, ready-to-use themes for your APML applications"
    
    display gallery_stats:
      themes_stat:
        number: count all themes
        label: "Themes Available"
        
      categories_stat:
        number: count all categories
        label: "Style Categories"
        
      downloads_stat:
        number: sum all theme downloads
        label: "Total Downloads"
        
  show featured_themes_section:
    title: "Featured Themes"
    
    display featured_carousel:
      for each theme in top_rated_themes:
        show theme_hero_card:
          large_preview: theme.screenshots[0]
          overlay_info:
            name: theme.name
            description: theme.description
            author: theme.author
            rating: theme.rating stars
            
          action_buttons:
            live_preview: "View Live Demo"
            download_theme: "Download Theme"
            
  display theme_categories:
    for each category in theme_categories:
      show category_section:
        header:
          icon: category.icon
          title: category.name
          description: category.description
          theme_count: category.theme_count + " themes"
          
        theme_grid:
          for each theme in category.themes:
            display theme_card:
              preview_image: theme.screenshots[0]
              
              theme_info:
                name: theme.name
                author: theme.author
                downloads: theme.downloads + " downloads"
                
              color_palette:
                for each color in theme.color_palette:
                  show color_swatch: color
                  
              card_actions:
                preview_button: "Live Preview"
                download_button: "Download"
                details_link: "View Details"

logic gallery_operations:
  when user clicks live_preview:
    open preview_modal with theme.preview_url
    track theme_preview_analytics
    
  when user clicks download_theme:
    initiate theme_download from theme.download_url
    increment theme.downloads count
    track download_analytics
    show download_instructions
    
  when user clicks theme_card:
    navigate to theme_detail_page
    show full_screenshots_gallery
    display theme_specifications
    show installation_instructions
    
  process theme_installation:
    when user downloads theme:
      provide APML_theme_file
      include installation_guide
      show integration_examples
      offer support_resources
      
  calculate theme_ratings:
    average user_ratings for each theme
    weight by download_count and usage_time
    update featured_themes based on popularity
    
  when theme_preview_loads:
    render live_application using theme
    allow user_interaction within preview
    show theme_customization_options`)

// Reactive data based on APML data models
// Data models from APML specification
const Theme = ref({
  id: "",
})

const ThemeCategory = ref({
  id: "",
})



// Computed properties for interface elements
// Computed properties for interface elements
const themes_galleryElements = computed(() => ({
  gallery_header: {
    type: 'display',
    properties: {},
    content: {"gallery_stats":{}}
  },
  featured_themes_section: {
    type: 'display',
    properties: {},
    content: {"featured_carousel":{}}
  },
  theme_hero_card: {
    type: 'display',
    properties: {},
    content: {"theme_categories":{}}
  },
  category_section: {
    type: 'display',
    properties: {},
    content: {"theme_card":{}}
  },
  color_swatch: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'ThemesGallery',
  title: 'APML Themes Gallery',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.theme-gallery-page {
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