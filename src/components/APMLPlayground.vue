<template>
  <div class="apml-playground">
    <!-- Playground Header -->
    <div class="playground-header">
      <div class="header-content">
        <div class="header-left">
          <h2 class="playground-title">
            <span class="title-icon">🎮</span>
            APML Playground
          </h2>
          <p class="playground-subtitle">
            Write, compile, and test APML code in real-time
          </p>
        </div>
        <div class="header-controls">
          <button 
            @click="compileCode" 
            :disabled="isCompiling"
            class="compile-btn"
          >
            <span class="btn-icon">⚡</span>
            {{ isCompiling ? 'Compiling...' : 'Compile' }}
          </button>
          <button @click="shareCode" class="share-btn">
            <span class="btn-icon">🔗</span>
            Share
          </button>
          <button @click="resetCode" class="reset-btn">
            <span class="btn-icon">🔄</span>
            Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Example Templates -->
    <div class="template-section">
      <div class="template-header">
        <h3>Quick Start Templates</h3>
        <button 
          @click="showAllTemplates = !showAllTemplates"
          class="expand-btn"
        >
          {{ showAllTemplates ? 'Show Less' : 'Show More' }}
        </button>
      </div>
      <div class="template-grid" :class="{ expanded: showAllTemplates }">
        <div
          v-for="template in (showAllTemplates ? allTemplates : featuredTemplates)"
          :key="template.id"
          @click="loadTemplate(template)"
          class="template-card"
        >
          <div class="template-icon">{{ template.icon }}</div>
          <div class="template-info">
            <h4>{{ template.name }}</h4>
            <p>{{ template.description }}</p>
            <div class="template-tags">
              <span 
                v-for="tag in template.tags" 
                :key="tag" 
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Playground Area -->
    <div class="playground-main">
      <!-- Code Editor -->
      <div class="editor-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">📝</span>
            APML Code Editor
          </div>
          <div class="editor-tools">
            <button @click="formatCode" class="tool-btn">
              <span class="tool-icon">🎨</span>
              Format
            </button>
            <button @click="validateCode" class="tool-btn">
              <span class="tool-icon">✅</span>
              Validate
            </button>
          </div>
        </div>
        <div class="editor-container">
          <div class="line-numbers">
            <div 
              v-for="n in lineCount" 
              :key="n" 
              class="line-number"
            >
              {{ n }}
            </div>
          </div>
          <textarea
            ref="codeEditor"
            v-model="editorCode"
            @input="handleCodeChange"
            @scroll="syncScroll"
            class="code-textarea"
            placeholder="Start writing your APML code here..."
            spellcheck="false"
          ></textarea>
          <div 
            ref="syntaxHighlight"
            class="syntax-highlight"
            v-html="highlightedCode"
          ></div>
        </div>
        
        <!-- Validation Results -->
        <div v-if="validationResult" class="validation-panel">
          <div class="validation-header">
            <span :class="['validation-status', validationResult.status]">
              {{ validationResult.status === 'success' ? '✅' : validationResult.status === 'warning' ? '⚠️' : '❌' }}
              {{ validationResult.message }}
            </span>
          </div>
          <div v-if="validationResult.issues.length" class="validation-issues">
            <div 
              v-for="issue in validationResult.issues" 
              :key="issue.id"
              :class="['issue-item', issue.severity]"
            >
              <span class="issue-line">Line {{ issue.line }}:</span>
              <span class="issue-message">{{ issue.message }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Preview -->
      <div class="preview-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">👁️</span>
            Live Preview
          </div>
          <div class="preview-controls">
            <button 
              v-for="view in previewViews"
              :key="view.id"
              @click="activePreviewView = view.id"
              :class="['view-btn', { active: activePreviewView === view.id }]"
            >
              {{ view.name }}
            </button>
          </div>
        </div>
        
        <div class="preview-content">
          <!-- Component Preview -->
          <div v-if="activePreviewView === 'component'" class="component-preview">
            <div v-if="compiledComponent" class="preview-frame">
              <component :is="compiledComponent" />
            </div>
            <div v-else class="preview-placeholder">
              <div class="placeholder-icon">🎯</div>
              <p>Write some APML code to see the live preview</p>
            </div>
          </div>

          <!-- Generated Code View -->
          <div v-if="activePreviewView === 'code'" class="generated-code">
            <div class="code-tabs">
              <button 
                v-for="lang in supportedLanguages"
                :key="lang.id"
                @click="activeLanguage = lang.id"
                :class="['lang-tab', { active: activeLanguage === lang.id }]"
              >
                {{ lang.name }}
              </button>
            </div>
            <div class="generated-output">
              <APMLCodeBlock 
                :code="getGeneratedCode(activeLanguage)" 
                :language="activeLanguage"
              />
            </div>
          </div>

          <!-- Structure Analysis -->
          <div v-if="activePreviewView === 'structure'" class="structure-analysis">
            <div class="analysis-section">
              <h4>Data Models</h4>
              <div class="data-models">
                <div 
                  v-for="model in parsedStructure.dataModels" 
                  :key="model.name"
                  class="model-card"
                >
                  <h5>{{ model.name }}</h5>
                  <div class="model-fields">
                    <div 
                      v-for="field in model.fields" 
                      :key="field.name"
                      class="field-item"
                    >
                      <span class="field-name">{{ field.name }}</span>
                      <span class="field-type">{{ field.type }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="analysis-section">
              <h4>Interfaces</h4>
              <div class="interfaces">
                <div 
                  v-for="iface in parsedStructure.interfaces" 
                  :key="iface.name"
                  class="interface-card"
                >
                  <h5>{{ iface.name }}</h5>
                  <div class="interface-elements">
                    <div 
                      v-for="element in iface.elements" 
                      :key="element.name"
                      class="element-item"
                    >
                      <span class="element-type">{{ element.type }}</span>
                      <span class="element-name">{{ element.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="analysis-section">
              <h4>Trinity Compliance</h4>
              <div class="trinity-analysis">
                <div 
                  v-for="aspect in trinityAnalysis" 
                  :key="aspect.type"
                  :class="['trinity-item', aspect.status]"
                >
                  <span class="trinity-icon">{{ aspect.icon }}</span>
                  <span class="trinity-label">{{ aspect.label }}</span>
                  <span class="trinity-status">{{ aspect.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Compilation Status -->
    <div class="status-bar">
      <div class="status-left">
        <div :class="['compilation-status', compilationStatus.type]">
          <span class="status-icon">{{ compilationStatus.icon }}</span>
          <span class="status-text">{{ compilationStatus.message }}</span>
        </div>
        <div class="code-stats">
          <span>{{ lineCount }} lines</span>
          <span>{{ wordCount }} words</span>
          <span>{{ charCount }} characters</span>
        </div>
      </div>
      <div class="status-right">
        <div class="performance-metrics">
          <span>Compile time: {{ compileTime }}ms</span>
          <span>Logical completeness: {{ logicalCompleteness }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import APMLCodeBlock from './APMLCodeBlock.vue'

// Reactive data
const editorCode = ref('')
const highlightedCode = ref('')
const isCompiling = ref(false)
const validationResult = ref(null)
const compiledComponent = ref(null)
const activePreviewView = ref('component')
const activeLanguage = ref('vue')
const showAllTemplates = ref(false)
const compileTime = ref(0)
const logicalCompleteness = ref(100)

// Refs
const codeEditor = ref(null)
const syntaxHighlight = ref(null)

// Template data
const featuredTemplates = ref([
  {
    id: 'hello-world',
    name: 'Hello World',
    description: 'Basic APML application structure',
    icon: '👋',
    tags: ['beginner', 'basic'],
    code: `app HelloWorld:
  title: "Hello, APML!"
  version: 1.0.0

interface:
  show welcome_message:
    title: "Welcome to APML"
    message: "The future of conversational programming"
    button: "Get Started"`
  },
  {
    id: 'todo-app',
    name: 'Todo Application',
    description: 'Complete task management app',
    icon: '📝',
    tags: ['intermediate', 'crud'],
    code: `app TodoApp:
  title: "My Tasks"

data Task:
  id: unique_id auto
  title: text required
  completed: boolean default false
  created_at: timestamp auto

interface:
  show task_list:
    title: "Your Tasks"
    for each task:
      display task.title
      when task.completed:
        style: completed
      show toggle_button:
        action: toggle_task_status
        
  show add_task_form:
    input new_task_title: text
    button: "Add Task"
    action: create_new_task

logic:
  when create_new_task:
    create Task with title: new_task_title
    clear new_task_title
    
  when toggle_task_status:
    update task.completed: not task.completed`
  },
  {
    id: 'user-auth',
    name: 'User Authentication',
    description: 'Login and registration system',
    icon: '🔐',
    tags: ['intermediate', 'auth'],
    code: `app UserAuth:
  title: "User Authentication"

data User:
  id: unique_id auto
  email: email required unique
  password: text required private
  name: text required
  created_at: timestamp auto

interface:
  show login_form:
    input email: email
    input password: text private
    button: "Sign In"
    action: authenticate_user
    
  show register_form:
    input name: text
    input email: email
    input password: text private
    input confirm_password: text private
    button: "Sign Up"
    action: create_user_account

logic:
  when authenticate_user:
    verify user.email and user.password
    if valid:
      grant user_session
      redirect to dashboard
    else:
      notify "Invalid credentials"
      
  when create_user_account:
    validate email format
    check password strength
    verify confirm_password matches password
    create User with provided data
    send welcome_email`
  }
])

const allTemplates = ref([
  ...featuredTemplates.value,
  {
    id: 'blog-platform',
    name: 'Blog Platform',
    description: 'Content management system',
    icon: '📚',
    tags: ['advanced', 'cms'],
    code: `app BlogPlatform:
  title: "My Blog"

data Post:
  id: unique_id auto
  title: text required
  content: text required
  author: User required
  published: boolean default false
  created_at: timestamp auto
  updated_at: timestamp auto

data Comment:
  id: unique_id auto
  post: Post required
  author: User required
  content: text required
  created_at: timestamp auto

interface:
  show post_editor:
    input title: text
    textarea content: text
    checkbox published: boolean
    button: "Save Post"
    action: save_post
    
  show post_list:
    for each post where published is true:
      display post.title
      display post.author.name
      display post.created_at
      link: view_post

logic:
  when save_post:
    if post.id exists:
      update post with new data
    else:
      create new Post
    notify "Post saved successfully"`
  },
  {
    id: 'e-commerce',
    name: 'E-commerce Store',
    description: 'Online shopping platform',
    icon: '🛒',
    tags: ['advanced', 'commerce'],
    code: `app EcommerceStore:
  title: "Online Store"

data Product:
  id: unique_id auto
  name: text required
  description: text
  price: money required
  stock: number default 0
  category: Category required

data Order:
  id: unique_id auto
  customer: User required
  items: list of OrderItem
  total: money auto
  status: pending | processing | shipped | delivered

interface:
  show product_catalog:
    for each product:
      display product.name
      display product.price
      display product.stock
      button: "Add to Cart"
      action: add_to_cart
      
  show shopping_cart:
    for each cart_item:
      display item.product.name
      input quantity: number
      display subtotal
    button: "Checkout"
    action: proceed_to_checkout

logic:
  when add_to_cart:
    if product.stock > 0:
      add product to cart
      update product.stock: product.stock - 1
    else:
      notify "Product out of stock"`
  },
  {
    id: 'ai-chat',
    name: 'AI Chat Assistant',
    description: 'Intelligent conversation interface',
    icon: '🤖',
    tags: ['advanced', 'ai'],
    code: `app AIChatAssistant:
  title: "AI Assistant"

data Conversation:
  id: unique_id auto
  user: User required
  messages: list of Message
  created_at: timestamp auto

data Message:
  id: unique_id auto
  sender: user | assistant
  content: text required
  timestamp: timestamp auto

interface:
  show chat_interface:
    display conversation_history:
      for each message:
        display message.content
        display message.timestamp
        style based on message.sender
        
    input user_message: text
    button: "Send"
    action: send_message

logic:
  when send_message:
    create Message with:
      sender: user
      content: user_message
    add to conversation.messages
    
    process user_message with ai_model
    create Message with:
      sender: assistant
      content: ai_response
    add to conversation.messages
    
    clear user_message
    scroll to bottom`
  }
])

const previewViews = ref([
  { id: 'component', name: 'Component' },
  { id: 'code', name: 'Generated Code' },
  { id: 'structure', name: 'Structure' }
])

const supportedLanguages = ref([
  { id: 'vue', name: 'Vue.js' },
  { id: 'react', name: 'React' },
  { id: 'swift', name: 'Swift' },
  { id: 'kotlin', name: 'Kotlin' }
])

// Computed properties
const lineCount = computed(() => {
  return editorCode.value.split('\n').length
})

const wordCount = computed(() => {
  return editorCode.value.trim().split(/\s+/).filter(word => word.length > 0).length
})

const charCount = computed(() => {
  return editorCode.value.length
})

const compilationStatus = computed(() => {
  if (isCompiling.value) {
    return {
      type: 'compiling',
      icon: '⚡',
      message: 'Compiling APML code...'
    }
  }
  
  if (validationResult.value) {
    switch (validationResult.value.status) {
      case 'success':
        return {
          type: 'success',
          icon: '✅',
          message: 'Code compiled successfully'
        }
      case 'warning':
        return {
          type: 'warning',
          icon: '⚠️',
          message: 'Compiled with warnings'
        }
      case 'error':
        return {
          type: 'error',
          icon: '❌',
          message: 'Compilation failed'
        }
    }
  }
  
  return {
    type: 'idle',
    icon: '⏸️',
    message: 'Ready to compile'
  }
})

const parsedStructure = computed(() => {
  // Parse APML code structure
  const lines = editorCode.value.split('\n')
  const structure = {
    dataModels: [],
    interfaces: [],
    logic: []
  }
  
  let currentSection = null
  let currentModel = null
  
  lines.forEach(line => {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('data ')) {
      const modelName = trimmed.replace('data ', '').replace(':', '')
      currentModel = { name: modelName, fields: [] }
      structure.dataModels.push(currentModel)
      currentSection = 'data'
    } else if (trimmed.startsWith('interface:')) {
      currentSection = 'interface'
    } else if (trimmed.startsWith('logic:')) {
      currentSection = 'logic'
    } else if (currentSection === 'data' && currentModel && trimmed.includes(':')) {
      const [name, type] = trimmed.split(':').map(s => s.trim())
      if (name && type) {
        currentModel.fields.push({ name, type })
      }
    }
  })
  
  return structure
})

const trinityAnalysis = computed(() => {
  const code = editorCode.value.toLowerCase()
  
  return [
    {
      type: 'app-to-user',
      label: 'App → User (Display)',
      icon: '👤',
      status: code.includes('show') || code.includes('display') ? 'complete' : 'missing'
    },
    {
      type: 'user-to-app',
      label: 'User → App (Input)',
      icon: '🎯',
      status: code.includes('input') || code.includes('button') ? 'complete' : 'missing'
    },
    {
      type: 'app-to-app',
      label: 'App → App (Logic)',
      icon: '⚙️',
      status: code.includes('logic') || code.includes('when') ? 'complete' : 'missing'
    }
  ]
})

// Methods
const handleCodeChange = () => {
  highlightCode()
  validateCodeDebounced()
}

const highlightCode = () => {
  // Use the same highlighting logic as APMLCodeBlock
  const highlighted = highlightAPML(editorCode.value)
  highlightedCode.value = highlighted
  
  nextTick(() => {
    syncScroll()
  })
}

const highlightAPML = (code) => {
  const lines = code.split('\n')
  
  const highlightedLines = lines.map(line => {
    let highlighted = line
    
    if (!line.trim()) return line
    
    if (line.trim().startsWith('#')) {
      return `<span class="apml-comment">${line}</span>`
    }
    
    const strings = []
    highlighted = highlighted.replace(/"([^"\\]|\\.)*"/g, (match) => {
      const index = strings.length
      strings.push(`<span class="apml-string">${match}</span>`)
      return `__STRING_${index}__`
    })
    
    highlighted = highlighted.replace(
      /^(\s*)(app|data|interface|logic|component|theme)\b/,
      '$1<span class="apml-structure">$2</span>'
    )
    
    highlighted = highlighted.replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
      '<span class="apml-property">$1</span>:'
    )
    
    highlighted = highlighted.replace(
      /\b(show|display|notify|when|if|for|each)\b/g,
      '<span class="apml-action">$1</span>'
    )
    
    highlighted = highlighted.replace(
      /\b(text|number|boolean|date|timestamp|email|url|unique_id|money|list|of)\b/g,
      '<span class="apml-type">$1</span>'
    )
    
    highlighted = highlighted.replace(
      /\b(required|optional|default|auto|unique)\b/g,
      '<span class="apml-modifier">$1</span>'
    )
    
    strings.forEach((str, index) => {
      highlighted = highlighted.replace(`__STRING_${index}__`, str)
    })
    
    return highlighted
  })
  
  return highlightedLines.join('\n')
}

const syncScroll = () => {
  if (codeEditor.value && syntaxHighlight.value) {
    syntaxHighlight.value.scrollTop = codeEditor.value.scrollTop
    syntaxHighlight.value.scrollLeft = codeEditor.value.scrollLeft
  }
}

let validateTimeout
const validateCodeDebounced = () => {
  clearTimeout(validateTimeout)
  validateTimeout = setTimeout(validateCode, 500)
}

const validateCode = () => {
  if (!editorCode.value.trim()) {
    validationResult.value = null
    return
  }
  
  const issues = []
  const lines = editorCode.value.split('\n')
  
  // Basic validation rules
  lines.forEach((line, index) => {
    const trimmed = line.trim()
    
    // Check for common syntax issues
    if (trimmed && !trimmed.startsWith('#') && !trimmed.includes(':') && !trimmed.startsWith(' ')) {
      if (!['app', 'data', 'interface', 'logic', 'when', 'if', 'for'].some(keyword => trimmed.startsWith(keyword))) {
        issues.push({
          id: `syntax-${index}`,
          line: index + 1,
          severity: 'warning',
          message: 'Line may be missing a colon or proper indentation'
        })
      }
    }
  })
  
  // Check Trinity Principle compliance
  const hasDisplay = editorCode.value.includes('show') || editorCode.value.includes('display')
  const hasInput = editorCode.value.includes('input') || editorCode.value.includes('button')
  const hasLogic = editorCode.value.includes('logic') || editorCode.value.includes('when')
  
  if (!hasDisplay) {
    issues.push({
      id: 'trinity-display',
      line: 1,
      severity: 'warning',
      message: 'Consider adding display elements (show/display) for App→User communication'
    })
  }
  
  if (!hasInput) {
    issues.push({
      id: 'trinity-input',
      line: 1,
      severity: 'warning',
      message: 'Consider adding input elements for User→App interaction'
    })
  }
  
  if (!hasLogic) {
    issues.push({
      id: 'trinity-logic',
      line: 1,
      severity: 'warning',
      message: 'Consider adding logic section for App→App processing'
    })
  }
  
  validationResult.value = {
    status: issues.length === 0 ? 'success' : issues.some(i => i.severity === 'error') ? 'error' : 'warning',
    message: issues.length === 0 ? 'Code is valid and Trinity-compliant' : `Found ${issues.length} issue(s)`,
    issues
  }
}

const compileCode = async () => {
  if (!editorCode.value.trim()) return
  
  isCompiling.value = true
  const startTime = Date.now()
  
  try {
    // Simulate compilation process
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    // Update metrics
    compileTime.value = Date.now() - startTime
    logicalCompleteness.value = Math.floor(Math.random() * 30) + 70
    
    // Validate code
    validateCode()
    
    // Generate mock component for preview
    compiledComponent.value = {
      template: '<div class="mock-component"><h3>Generated Component</h3><p>This would be your compiled APML application</p></div>'
    }
  } catch (error) {
    console.error('Compilation error:', error)
  } finally {
    isCompiling.value = false
  }
}

const formatCode = () => {
  // Basic code formatting
  const lines = editorCode.value.split('\n')
  let indentLevel = 0
  
  const formatted = lines.map(line => {
    const trimmed = line.trim()
    if (!trimmed) return ''
    
    if (trimmed.startsWith('app') || trimmed.startsWith('data') || trimmed.startsWith('interface') || trimmed.startsWith('logic')) {
      indentLevel = 0
      return trimmed
    } else if (trimmed.includes(':') && !trimmed.startsWith(' ')) {
      return '  ' + trimmed
    } else {
      return '    ' + trimmed
    }
  })
  
  editorCode.value = formatted.join('\n')
  highlightCode()
}

const shareCode = async () => {
  try {
    const shareData = {
      title: 'APML Code Snippet',
      text: 'Check out this APML code:',
      url: `${window.location.origin}/playground?code=${encodeURIComponent(editorCode.value)}`
    }
    
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(shareData.url)
      // Show toast notification
      console.log('URL copied to clipboard')
    }
  } catch (error) {
    console.error('Error sharing:', error)
  }
}

const resetCode = () => {
  editorCode.value = ''
  validationResult.value = null
  compiledComponent.value = null
  highlightedCode.value = ''
}

const loadTemplate = (template) => {
  editorCode.value = template.code
  highlightCode()
  validateCode()
}

const getGeneratedCode = (language) => {
  switch (language) {
    case 'vue':
      return `<template>
  <div class="generated-app">
    <!-- Generated from APML -->
    <h1>{{ title }}</h1>
    <!-- Component structure based on your APML code -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Generated Vue Component')
// Data models and logic from APML
</script>`
    case 'react':
      return `import React, { useState } from 'react'

function GeneratedComponent() {
  // Generated from APML
  const [title] = useState('Generated React Component')
  
  return (
    <div className="generated-app">
      <h1>{title}</h1>
      {/* Component structure based on your APML code */}
    </div>
  )
}

export default GeneratedComponent`
    case 'swift':
      return `import SwiftUI

struct GeneratedView: View {
    // Generated from APML
    @State private var title = "Generated Swift View"
    
    var body: some View {
        VStack {
            Text(title)
                .font(.title)
            // UI structure based on your APML code
        }
        .padding()
    }
}`
    case 'kotlin':
      return `// Generated from APML
class GeneratedActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // UI and logic based on your APML code
        setContentView(R.layout.activity_generated)
    }
}`
    default:
      return '// Code generation for this language is coming soon!'
  }
}

// Initialize with a default template
onMounted(() => {
  loadTemplate(featuredTemplates.value[0])
})

// Watch for code changes to update highlighting
watch(editorCode, highlightCode, { immediate: true })
</script>

<style scoped>
.apml-playground {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Header */
.playground-header {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  padding: 1.5rem 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.playground-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
}

.title-icon {
  font-size: 1.25rem;
}

.playground-subtitle {
  color: #94a3b8;
  margin: 0;
}

.header-controls {
  display: flex;
  gap: 0.75rem;
}

.compile-btn,
.share-btn,
.reset-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.compile-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.compile-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.compile-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.share-btn {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
}

.reset-btn {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.btn-icon {
  font-size: 1rem;
}

/* Template Section */
.template-section {
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  padding: 1.5rem 2rem;
}

.template-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.template-header h3 {
  color: #f8fafc;
  margin: 0;
}

.expand-btn {
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.expand-btn:hover {
  background: rgba(99, 102, 241, 0.1);
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  max-height: 200px;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.template-grid.expanded {
  max-height: none;
}

.template-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  gap: 1rem;
}

.template-card:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
}

.template-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.template-info {
  flex: 1;
}

.template-info h4 {
  color: #f8fafc;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.template-info p {
  color: #94a3b8;
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  line-height: 1.4;
}

.template-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(99, 102, 241, 0.2);
  color: #a5b4fc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Main Playground */
.playground-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  gap: 1px;
  background: rgba(99, 102, 241, 0.1);
}

.editor-panel,
.preview-panel {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #f8fafc;
}

.panel-icon {
  font-size: 1.125rem;
}

.editor-tools,
.preview-controls {
  display: flex;
  gap: 0.5rem;
}

.tool-btn,
.view-btn,
.lang-tab {
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #94a3b8;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.tool-btn:hover,
.view-btn:hover,
.lang-tab:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

.view-btn.active,
.lang-tab.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  color: #c7d2fe;
}

.tool-icon {
  font-size: 1rem;
}

/* Code Editor */
.editor-container {
  position: relative;
  flex: 1;
  display: flex;
  font-family: 'JetBrains Mono', 'Fira Code', Monaco, Consolas, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.line-numbers {
  background: rgba(30, 41, 59, 0.5);
  padding: 1rem 0.5rem;
  border-right: 1px solid rgba(99, 102, 241, 0.1);
  min-width: 3rem;
  text-align: right;
  color: #64748b;
  user-select: none;
}

.line-number {
  height: 1.6em;
  line-height: 1.6;
}

.code-textarea {
  position: absolute;
  top: 0;
  left: 3rem;
  right: 0;
  bottom: 0;
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  caret-color: #6366f1;
  resize: none;
  padding: 1rem;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: auto;
  z-index: 2;
}

.syntax-highlight {
  position: absolute;
  top: 0;
  left: 3rem;
  right: 0;
  bottom: 0;
  padding: 1rem;
  pointer-events: none;
  white-space: pre;
  overflow-wrap: normal;
  overflow: auto;
  color: #e2e8f0;
  z-index: 1;
}

/* Syntax highlighting styles */
:deep(.apml-structure) { color: #8b5cf6; font-weight: bold; }
:deep(.apml-type) { color: #06b6d4; font-weight: 500; }
:deep(.apml-modifier) { color: #ef4444; font-weight: bold; }
:deep(.apml-action) { color: #eab308; font-weight: 500; }
:deep(.apml-property) { color: #3b82f6; font-weight: 500; }
:deep(.apml-string) { color: #10b981; }
:deep(.apml-comment) { color: #6b7280; font-style: italic; }

/* Validation Panel */
.validation-panel {
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  background: rgba(30, 41, 59, 0.5);
}

.validation-header {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.validation-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.validation-status.success { color: #10b981; }
.validation-status.warning { color: #f59e0b; }
.validation-status.error { color: #ef4444; }

.validation-issues {
  max-height: 150px;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.issue-item {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-left: 3px solid transparent;
}

.issue-item.warning {
  border-left-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

.issue-item.error {
  border-left-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.issue-line {
  color: #64748b;
  font-weight: 500;
  min-width: 4rem;
}

.issue-message {
  color: #e2e8f0;
}

/* Preview Panel */
.preview-content {
  flex: 1;
  overflow: auto;
}

.component-preview {
  padding: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-frame {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  color: #1e293b;
  min-width: 300px;
  text-align: center;
}

.preview-placeholder {
  text-align: center;
  color: #64748b;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.generated-code {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.code-tabs {
  display: flex;
  padding: 1rem 1.5rem 0;
  gap: 0.5rem;
}

.generated-output {
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
}

/* Structure Analysis */
.structure-analysis {
  padding: 1.5rem;
  height: 100%;
  overflow: auto;
}

.analysis-section {
  margin-bottom: 2rem;
}

.analysis-section h4 {
  color: #f8fafc;
  margin-bottom: 1rem;
  font-weight: 600;
}

.data-models,
.interfaces {
  display: grid;
  gap: 1rem;
}

.model-card,
.interface-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  padding: 1rem;
}

.model-card h5,
.interface-card h5 {
  color: #a5b4fc;
  margin: 0 0 0.75rem 0;
}

.model-fields,
.interface-elements {
  display: grid;
  gap: 0.5rem;
}

.field-item,
.element-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 4px;
}

.field-name,
.element-name {
  color: #e2e8f0;
  font-weight: 500;
}

.field-type,
.element-type {
  color: #06b6d4;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}

.trinity-analysis {
  display: grid;
  gap: 0.75rem;
}

.trinity-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid transparent;
}

.trinity-item.complete {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
}

.trinity-item.missing {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.trinity-icon {
  font-size: 1.25rem;
}

.trinity-label {
  flex: 1;
  color: #e2e8f0;
  font-weight: 500;
}

.trinity-status {
  color: #64748b;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 600;
}

.trinity-item.complete .trinity-status {
  color: #10b981;
}

.trinity-item.missing .trinity-status {
  color: #ef4444;
}

/* Status Bar */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: rgba(15, 23, 42, 0.9);
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  font-size: 0.875rem;
}

.status-left,
.status-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.compilation-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.compilation-status.success { color: #10b981; }
.compilation-status.warning { color: #f59e0b; }
.compilation-status.error { color: #ef4444; }
.compilation-status.compiling { color: #06b6d4; }
.compilation-status.idle { color: #64748b; }

.status-icon {
  font-size: 1rem;
}

.code-stats,
.performance-metrics {
  display: flex;
  gap: 1rem;
  color: #64748b;
}

.code-stats span,
.performance-metrics span {
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .playground-main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .header-controls {
    align-self: stretch;
    justify-content: flex-end;
  }
}

@media (max-width: 768px) {
  .playground-header {
    padding: 1rem;
  }
  
  .template-section {
    padding: 1rem;
  }
  
  .template-grid {
    grid-template-columns: 1fr;
  }
  
  .status-bar {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .status-left,
  .status-right {
    width: 100%;
    justify-content: space-between;
  }
  
  .code-stats,
  .performance-metrics {
    flex-wrap: wrap;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles */
.compile-btn:focus-visible,
.share-btn:focus-visible,
.reset-btn:focus-visible,
.tool-btn:focus-visible,
.view-btn:focus-visible,
.template-card:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

.code-textarea:focus-visible {
  outline: none;
  caret-color: #6366f1;
}
</style>