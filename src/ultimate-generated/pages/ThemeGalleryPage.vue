<template>
  <div class="theme-gallery-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">category.name</h1>
        <p class="page-subtitle">category.description</p>
      </div>
    </header>
    <main class="page-content">
      <div class="container">
        <section id="themes_gallery" class="interface-section">
          <h2 >Themes Gallery</h2>
          <div class="content-block">
            <h3 class="block-title">Gallery Header</h3>
              <div class="subsection">
                <h4 class="subsection-title">Gallery Stats</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Themes Stat</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Number</h5>
                    <p class="item-description">sum all theme downloads</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Label</h5>
                    <p class="item-description">Total Downloads</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Categories Stat</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Downloads Stat</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Featured Themes Section</h3>
              <div class="subsection">
                <h4 class="subsection-title">Featured Carousel</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">For Each Theme In Top Rated Themes</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Theme Hero Card</h3>
              <div class="subsection">
                <h4 class="subsection-title">Theme Categories</h4>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Category Section</h3>
              <div class="subsection">
                <h4 class="subsection-title">Theme Card</h4>
                <div class="items-list">
                  <div class="list-item">
                    <h5 class="item-title">Preview Image</h5>
                    <p class="item-description">theme.screenshots[0]</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Theme Info</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Name</h5>
                    <p class="item-description">theme.name</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Author</h5>
                    <p class="item-description">theme.author</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Downloads</h5>
                    <p class="item-description">theme.downloads +  downloads</p>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">Color Palette</h5>
                  </div>
                  <div class="list-item">
                    <h5 class="item-title">For Each Color In Theme.Color Palette</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="content-block">
            <h3 class="block-title">Color Swatch</h3>
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
      "title": "category.name",
      "description": "category.description",
      "version": "1.0.0",
      "apml_specification_version": "0.9.0",
      "id": "unique_id",
      "name": "theme.name",
      "category": "corporate | creative | minimal | gaming | educational",
      "preview_url": "url required",
      "download_url": "url required",
      "author": "theme.author",
      "downloads": "theme.downloads + \" downloads\"",
      "rating": "theme.rating stars",
      "screenshots": "list of url",
      "color_palette": "list of text",
      "created_at": "timestamp auto",
      "last_updated": "timestamp auto",
      "icon": "category.icon",
      "theme_count": "category.theme_count + \" themes\"",
      "subtitle": "Beautiful, ready-to-use themes for your APML applications",
      "number": "sum all theme downloads",
      "label": "Total Downloads",
      "large_preview": "theme.screenshots[0]",
      "live_preview": "View Live Demo",
      "download_theme": "Download Theme",
      "preview_image": "theme.screenshots[0]",
      "color_swatch": "color",
      "preview_button": "Live Preview",
      "download_button": "Download",
      "details_link": "View Details"
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
  title: 'category.name',
  description: 'category.description',
  version: '1.0.0'
}
</script>

<style scoped>
.theme-gallery-page {
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