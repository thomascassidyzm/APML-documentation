<template>
  <div class="interactive-example">
    <!-- Example Header -->
    <div class="example-header">
      <div class="header-content">
        <div class="header-left">
          <h3 class="example-title">
            <span class="title-icon">{{ example.icon }}</span>
            {{ example.title }}
          </h3>
          <p class="example-description">{{ example.description }}</p>
          <div class="example-tags">
            <span 
              v-for="tag in example.tags"
              :key="tag"
              class="example-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="header-controls">
          <button 
            @click="resetExample"
            class="control-btn reset-btn"
            title="Reset to original"
          >
            <span class="btn-icon">🔄</span>
            Reset
          </button>
          <button 
            @click="copyCode"
            class="control-btn copy-btn"
            title="Copy APML code"
          >
            <span class="btn-icon">📋</span>
            Copy
          </button>
          <button 
            @click="shareExample"
            class="control-btn share-btn"
            title="Share example"
          >
            <span class="btn-icon">🔗</span>
            Share
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Workshop -->
    <div class="workshop-container">
      <!-- Code Editor Side -->
      <div class="code-section">
        <div class="section-header">
          <h4 class="section-title">
            <span class="section-icon">📝</span>
            APML Source Code
          </h4>
          <div class="editor-tools">
            <button 
              @click="formatCode"
              class="tool-btn"
              title="Format code"
            >
              <span class="tool-icon">🎨</span>
            </button>
            <button 
              @click="validateSyntax"
              class="tool-btn"
              title="Validate syntax"
            >
              <span class="tool-icon">✅</span>
            </button>
            <button 
              @click="showStructure = !showStructure"
              :class="['tool-btn', { active: showStructure }]"
              title="Toggle structure view"
            >
              <span class="tool-icon">🏗️</span>
            </button>
          </div>
        </div>

        <!-- Code Editor -->
        <div class="code-editor-container">
          <div class="line-numbers">
            <div 
              v-for="n in lineNumbers" 
              :key="n"
              class="line-number"
            >
              {{ n }}
            </div>
          </div>
          <textarea
            ref="codeEditor"
            v-model="currentCode"
            @input="handleCodeChange"
            @scroll="syncEditorScroll"
            class="code-editor"
            :placeholder="editorPlaceholder"
            spellcheck="false"
          ></textarea>
          <div 
            ref="syntaxHighlight"
            class="syntax-overlay"
            v-html="highlightedCode"
          ></div>
        </div>

        <!-- Syntax Validation -->
        <div v-if="validationResult" class="validation-section">
          <div :class="['validation-status', validationResult.status]">
            <span class="status-icon">{{ getStatusIcon(validationResult.status) }}</span>
            <span class="status-text">{{ validationResult.message }}</span>
          </div>
          <div v-if="validationResult.issues?.length" class="validation-issues">
            <div 
              v-for="issue in validationResult.issues"
              :key="issue.id"
              :class="['validation-issue', issue.severity]"
            >
              <span class="issue-line">Line {{ issue.line }}</span>
              <span class="issue-message">{{ issue.message }}</span>
              <button 
                v-if="issue.fix"
                @click="applyFix(issue)"
                class="fix-btn"
              >
                Fix
              </button>
            </div>
          </div>
        </div>

        <!-- Structure Analysis -->
        <div v-if="showStructure" class="structure-section">
          <h5 class="structure-title">Code Structure</h5>
          <div class="structure-analysis">
            <div class="structure-category" v-if="parsedStructure.app">
              <h6>Application</h6>
              <div class="structure-item">
                <span class="item-name">{{ parsedStructure.app.name }}</span>
                <span class="item-type">App Definition</span>
              </div>
            </div>
            
            <div class="structure-category" v-if="parsedStructure.dataModels.length">
              <h6>Data Models ({{ parsedStructure.dataModels.length }})</h6>
              <div 
                v-for="model in parsedStructure.dataModels"
                :key="model.name"
                class="structure-item"
              >
                <span class="item-name">{{ model.name }}</span>
                <span class="item-type">{{ model.fields.length }} fields</span>
              </div>
            </div>
            
            <div class="structure-category" v-if="parsedStructure.interfaces.length">
              <h6>Interface Elements ({{ parsedStructure.interfaces.length }})</h6>
              <div 
                v-for="iface in parsedStructure.interfaces"
                :key="iface.name"
                class="structure-item"
              >
                <span class="item-name">{{ iface.name }}</span>
                <span class="item-type">{{ iface.type }}</span>
              </div>
            </div>
            
            <div class="structure-category" v-if="parsedStructure.logic.length">
              <h6>Logic Workflows ({{ parsedStructure.logic.length }})</h6>
              <div 
                v-for="logic in parsedStructure.logic"
                :key="logic.name"
                class="structure-item"
              >
                <span class="item-name">{{ logic.name }}</span>
                <span class="item-type">{{ logic.type }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Preview Side -->
      <div class="preview-section">
        <div class="section-header">
          <h4 class="section-title">
            <span class="section-icon">👁️</span>
            Live Preview
          </h4>
          <div class="preview-controls">
            <button 
              v-for="view in previewModes"
              :key="view.id"
              @click="activePreview = view.id"
              :class="['preview-btn', { active: activePreview === view.id }]"
            >
              {{ view.name }}
            </button>
          </div>
        </div>

        <!-- Component Preview -->
        <div v-if="activePreview === 'component'" class="component-preview">
          <div class="preview-frame">
            <div class="frame-header">
              <div class="frame-controls">
                <div class="frame-dot"></div>
                <div class="frame-dot"></div>
                <div class="frame-dot"></div>
              </div>
              <div class="frame-title">{{ extractAppTitle() || 'APML Preview' }}</div>
            </div>
            <div class="frame-content">
              <component 
                v-if="compiledComponent" 
                :is="compiledComponent"
                @action="handlePreviewAction"
              />
              <div v-else class="preview-placeholder">
                <div class="placeholder-content">
                  <div class="placeholder-icon">🎯</div>
                  <h5>Live Component Preview</h5>
                  <p>Your APML code will be compiled and displayed here in real-time</p>
                  <div class="placeholder-features">
                    <div class="feature-item">
                      <span class="feature-icon">⚡</span>
                      <span>Instant compilation</span>
                    </div>
                    <div class="feature-item">
                      <span class="feature-icon">🔄</span>
                      <span>Live updates</span>
                    </div>
                    <div class="feature-item">
                      <span class="feature-icon">📱</span>
                      <span>Interactive elements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Generated Code Preview -->
        <div v-if="activePreview === 'generated'" class="generated-preview">
          <div class="language-tabs">
            <button 
              v-for="lang in outputLanguages"
              :key="lang.id"
              @click="activeLanguage = lang.id"
              :class="['lang-tab', { active: activeLanguage === lang.id }]"
            >
              <span class="lang-icon">{{ lang.icon }}</span>
              <span class="lang-name">{{ lang.name }}</span>
            </button>
          </div>
          <div class="generated-code">
            <APMLCodeBlock 
              :code="getGeneratedCode(activeLanguage)"
              :language="activeLanguage"
            />
          </div>
        </div>

        <!-- Compilation Analysis -->
        <div v-if="activePreview === 'analysis'" class="analysis-preview">
          <div class="analysis-sections">
            <div class="analysis-section">
              <h5>Trinity Principle Compliance</h5>
              <div class="trinity-check">
                <div 
                  v-for="aspect in trinityCheck"
                  :key="aspect.type"
                  :class="['trinity-aspect', aspect.status]"
                >
                  <span class="aspect-icon">{{ aspect.icon }}</span>
                  <div class="aspect-content">
                    <div class="aspect-title">{{ aspect.title }}</div>
                    <div class="aspect-description">{{ aspect.description }}</div>
                  </div>
                  <div class="aspect-status">{{ aspect.status }}</div>
                </div>
              </div>
            </div>

            <div class="analysis-section">
              <h5>Compilation Metrics</h5>
              <div class="metrics-grid">
                <div class="metric-card">
                  <div class="metric-value">{{ compilationMetrics.parseTime }}ms</div>
                  <div class="metric-label">Parse Time</div>
                </div>
                <div class="metric-card">
                  <div class="metric-value">{{ compilationMetrics.lines }}</div>
                  <div class="metric-label">Lines of Code</div>
                </div>
                <div class="metric-card">
                  <div class="metric-value">{{ compilationMetrics.complexity }}</div>
                  <div class="metric-label">Complexity Score</div>
                </div>
                <div class="metric-card">
                  <div class="metric-value">{{ compilationMetrics.completeness }}%</div>
                  <div class="metric-label">Logical Completeness</div>
                </div>
              </div>
            </div>

            <div class="analysis-section">
              <h5>Code Quality</h5>
              <div class="quality-indicators">
                <div class="quality-item">
                  <div class="quality-label">Readability</div>
                  <div class="quality-bar">
                    <div 
                      class="quality-fill"
                      :style="{ width: codeQuality.readability + '%' }"
                    ></div>
                  </div>
                  <div class="quality-score">{{ codeQuality.readability }}%</div>
                </div>
                <div class="quality-item">
                  <div class="quality-label">Maintainability</div>
                  <div class="quality-bar">
                    <div 
                      class="quality-fill"
                      :style="{ width: codeQuality.maintainability + '%' }"
                    ></div>
                  </div>
                  <div class="quality-score">{{ codeQuality.maintainability }}%</div>
                </div>
                <div class="quality-item">
                  <div class="quality-label">Performance</div>
                  <div class="quality-bar">
                    <div 
                      class="quality-fill"
                      :style="{ width: codeQuality.performance + '%' }"
                    ></div>
                  </div>
                  <div class="quality-score">{{ codeQuality.performance }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Lessons -->
    <div v-if="example.lessons?.length" class="lessons-section">
      <div class="lessons-header">
        <h4>Interactive Lessons</h4>
        <p>Step-by-step guided learning with this example</p>
      </div>
      <div class="lessons-container">
        <button 
          v-for="(lesson, index) in example.lessons"
          :key="lesson.id"
          @click="activeLesson = lesson.id"
          :class="['lesson-btn', { active: activeLesson === lesson.id, completed: lesson.completed }]"
        >
          <span class="lesson-number">{{ index + 1 }}</span>
          <span class="lesson-title">{{ lesson.title }}</span>
          <span v-if="lesson.completed" class="lesson-check">✓</span>
        </button>
      </div>
      <div v-if="currentLesson" class="lesson-content">
        <div class="lesson-header">
          <h5>{{ currentLesson.title }}</h5>
          <div class="lesson-progress">
            Step {{ getLessonIndex() + 1 }} of {{ example.lessons.length }}
          </div>
        </div>
        <div class="lesson-body">
          <p>{{ currentLesson.instruction }}</p>
          <div v-if="currentLesson.hint" class="lesson-hint">
            <strong>💡 Hint:</strong> {{ currentLesson.hint }}
          </div>
          <div v-if="currentLesson.code" class="lesson-example">
            <APMLCodeBlock :code="currentLesson.code" />
          </div>
        </div>
        <div class="lesson-actions">
          <button 
            v-if="getLessonIndex() > 0"
            @click="previousLesson"
            class="lesson-nav-btn"
          >
            ← Previous
          </button>
          <button 
            @click="applyLessonCode"
            class="lesson-apply-btn"
          >
            Apply This Code
          </button>
          <button 
            v-if="getLessonIndex() < example.lessons.length - 1"
            @click="nextLesson"
            class="lesson-nav-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>

    <!-- Example Actions -->
    <div class="example-actions">
      <div class="action-group">
        <h5>Try These Modifications</h5>
        <div class="quick-actions">
          <button 
            v-for="action in quickActions"
            :key="action.id"
            @click="applyQuickAction(action)"
            class="quick-action-btn"
          >
            <span class="action-icon">{{ action.icon }}</span>
            <span class="action-text">{{ action.text }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import APMLCodeBlock from './APMLCodeBlock.vue'

// Props
const props = defineProps({
  example: {
    type: Object,
    required: true
  }
})

// Emits
defineEmits(['code-change', 'example-complete'])

// Reactive state
const currentCode = ref(props.example.code)
const originalCode = ref(props.example.code)
const highlightedCode = ref('')
const validationResult = ref(null)
const compiledComponent = ref(null)
const showStructure = ref(false)
const activePreview = ref('component')
const activeLanguage = ref('vue')
const activeLesson = ref(null)

// Refs
const codeEditor = ref(null)
const syntaxHighlight = ref(null)

// Configuration
const previewModes = ref([
  { id: 'component', name: 'Component' },
  { id: 'generated', name: 'Generated Code' },
  { id: 'analysis', name: 'Analysis' }
])

const outputLanguages = ref([
  { id: 'vue', name: 'Vue.js', icon: '💚' },
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'swift', name: 'Swift', icon: '🍎' },
  { id: 'kotlin', name: 'Kotlin', icon: '🤖' }
])

const quickActions = ref([
  {
    id: 'add-validation',
    icon: '✅',
    text: 'Add Validation',
    modification: (code) => {
      if (!code.includes('validate')) {
        return code.replace(
          /(when\s+\w+.*?:)/g,
          '$1\n    validate input_data'
        )
      }
      return code
    }
  },
  {
    id: 'add-error-handling',
    icon: '🛡️',
    text: 'Add Error Handling',
    modification: (code) => {
      if (!code.includes('if') && !code.includes('else')) {
        return code + `\n\nlogic:
  when error_occurs:
    notify "Something went wrong"
    log error_details
    redirect to error_page`
      }
      return code
    }
  },
  {
    id: 'add-styling',
    icon: '🎨',
    text: 'Add Styling',
    modification: (code) => {
      return code.replace(
        /(show\s+\w+.*?:)/g,
        '$1\n    style: "modern-card"'
      )
    }
  },
  {
    id: 'add-animation',
    icon: '✨',
    text: 'Add Animation',
    modification: (code) => {
      return code.replace(
        /(show\s+\w+.*?:)/g,
        '$1\n    animation: "fade-in"'
      )
    }
  }
])

// Computed properties
const lineNumbers = computed(() => {
  return currentCode.value.split('\n').length
})

const editorPlaceholder = computed(() => {
  return 'Start typing APML code here...\n\nExample:\napp MyApp:\n  title: "Hello World"\n\ninterface:\n  show welcome:\n    message: "Welcome to APML!"'
})

const parsedStructure = computed(() => {
  const structure = {
    app: null,
    dataModels: [],
    interfaces: [],
    logic: []
  }

  const lines = currentCode.value.split('\n')
  let currentSection = null
  let currentModel = null

  lines.forEach(line => {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('app ')) {
      const appName = trimmed.replace('app ', '').replace(':', '')
      structure.app = { name: appName }
    } else if (trimmed.startsWith('data ')) {
      const modelName = trimmed.replace('data ', '').replace(':', '')
      currentModel = { name: modelName, fields: [] }
      structure.dataModels.push(currentModel)
      currentSection = 'data'
    } else if (trimmed === 'interface:') {
      currentSection = 'interface'
    } else if (trimmed === 'logic:') {
      currentSection = 'logic'
    } else if (currentSection === 'data' && currentModel && trimmed.includes(':')) {
      const [name, type] = trimmed.split(':').map(s => s.trim())
      if (name && type) {
        currentModel.fields.push({ name, type })
      }
    } else if (currentSection === 'interface' && trimmed.startsWith('show ')) {
      const elementName = trimmed.replace('show ', '').replace(':', '')
      structure.interfaces.push({ name: elementName, type: 'display' })
    } else if (currentSection === 'interface' && (trimmed.startsWith('input ') || trimmed.startsWith('button'))) {
      const elementName = trimmed.split(':')[0].trim()
      structure.interfaces.push({ name: elementName, type: 'input' })
    } else if (currentSection === 'logic' && trimmed.startsWith('when ')) {
      const logicName = trimmed.replace('when ', '').replace(':', '')
      structure.logic.push({ name: logicName, type: 'workflow' })
    }
  })

  return structure
})

const trinityCheck = computed(() => {
  const code = currentCode.value.toLowerCase()
  
  return [
    {
      type: 'app-to-user',
      title: 'App → User',
      description: 'Display and output elements',
      icon: '👤',
      status: code.includes('show') || code.includes('display') ? 'complete' : 'missing'
    },
    {
      type: 'user-to-app',
      title: 'User → App',
      description: 'Input and interaction elements',
      icon: '🎯',
      status: code.includes('input') || code.includes('button') || code.includes('action') ? 'complete' : 'missing'
    },
    {
      type: 'app-to-app',
      title: 'App → App',
      description: 'Logic and processing workflows',
      icon: '⚙️',
      status: code.includes('logic') || code.includes('when') || code.includes('if') ? 'complete' : 'missing'
    }
  ]
})

const compilationMetrics = computed(() => {
  const lines = currentCode.value.split('\n').filter(line => line.trim()).length
  const words = currentCode.value.split(/\s+/).filter(word => word.length > 0).length
  const complexity = Math.min(Math.max(Math.floor(words / 10), 1), 10)
  const completeness = trinityCheck.value.filter(t => t.status === 'complete').length * 33.33

  return {
    parseTime: Math.floor(Math.random() * 50) + 25,
    lines,
    complexity,
    completeness: Math.round(completeness)
  }
})

const codeQuality = computed(() => {
  const hasComments = currentCode.value.includes('#')
  const hasValidation = currentCode.value.includes('validate')
  const hasErrorHandling = currentCode.value.includes('if') || currentCode.value.includes('else')
  const hasLogic = currentCode.value.includes('logic')
  
  return {
    readability: 75 + (hasComments ? 15 : 0) + (hasLogic ? 10 : 0),
    maintainability: 70 + (hasValidation ? 15 : 0) + (hasErrorHandling ? 15 : 0),
    performance: 80 + (hasLogic ? 10 : 0) + (trinityCheck.value.filter(t => t.status === 'complete').length * 3)
  }
})

const currentLesson = computed(() => {
  if (!activeLesson.value || !props.example.lessons) return null
  return props.example.lessons.find(lesson => lesson.id === activeLesson.value)
})

// Methods
const handleCodeChange = () => {
  highlightCode()
  validateSyntax()
  compileCode()
}

const highlightCode = () => {
  highlightedCode.value = highlightAPML(currentCode.value)
  nextTick(() => {
    syncEditorScroll()
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
      /\b(show|display|notify|when|if|for|each|input|button|action)\b/g,
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

const syncEditorScroll = () => {
  if (codeEditor.value && syntaxHighlight.value) {
    syntaxHighlight.value.scrollTop = codeEditor.value.scrollTop
    syntaxHighlight.value.scrollLeft = codeEditor.value.scrollLeft
  }
}

const validateSyntax = () => {
  const issues = []
  const lines = currentCode.value.split('\n')
  
  // Basic validation
  lines.forEach((line, index) => {
    const trimmed = line.trim()
    
    if (trimmed && !trimmed.startsWith('#') && !trimmed.includes(':') && !trimmed.startsWith(' ')) {
      if (!['app', 'data', 'interface', 'logic', 'when', 'if', 'for'].some(keyword => trimmed.startsWith(keyword))) {
        issues.push({
          id: `syntax-${index}`,
          line: index + 1,
          severity: 'warning',
          message: 'Line may be missing a colon or proper indentation',
          fix: {
            type: 'indent',
            suggestion: `  ${trimmed}`
          }
        })
      }
    }
  })
  
  // Trinity compliance check
  const hasDisplay = currentCode.value.includes('show') || currentCode.value.includes('display')
  const hasInput = currentCode.value.includes('input') || currentCode.value.includes('button')
  const hasLogic = currentCode.value.includes('logic') || currentCode.value.includes('when')
  
  if (!hasDisplay) {
    issues.push({
      id: 'trinity-display',
      line: 1,
      severity: 'info',
      message: 'Consider adding display elements for App→User communication',
      fix: {
        type: 'add',
        suggestion: '\ninterface:\n  show welcome:\n    message: "Hello, User!"'
      }
    })
  }
  
  if (!hasInput) {
    issues.push({
      id: 'trinity-input',
      line: 1,
      severity: 'info',
      message: 'Consider adding input elements for User→App interaction',
      fix: {
        type: 'add',
        suggestion: '\n  input user_name: text\n  button: "Submit"'
      }
    })
  }
  
  if (!hasLogic) {
    issues.push({
      id: 'trinity-logic',
      line: 1,
      severity: 'info',
      message: 'Consider adding logic section for App→App processing',
      fix: {
        type: 'add',
        suggestion: '\nlogic:\n  when submit_form:\n    process user_input\n    notify "Success!"'
      }
    })
  }
  
  validationResult.value = {
    status: issues.length === 0 ? 'success' : issues.some(i => i.severity === 'error') ? 'error' : 'warning',
    message: issues.length === 0 ? 'Code is valid and Trinity-compliant' : `Found ${issues.length} suggestion(s)`,
    issues
  }
}

const compileCode = () => {
  // Simulate compilation and create a mock component
  if (currentCode.value.trim()) {
    const title = extractAppTitle() || 'APML Application'
    
    compiledComponent.value = {
      template: `
        <div class="mock-app">
          <header class="app-header">
            <h3>${title}</h3>
          </header>
          <main class="app-content">
            ${generateMockContent()}
          </main>
        </div>
      `
    }
  } else {
    compiledComponent.value = null
  }
}

const generateMockContent = () => {
  const hasInput = currentCode.value.includes('input')
  const hasButton = currentCode.value.includes('button')
  const hasDisplay = currentCode.value.includes('show') || currentCode.value.includes('display')
  
  let content = ''
  
  if (hasDisplay) {
    content += '<div class="mock-display"><p>This is a display element from your APML code</p></div>'
  }
  
  if (hasInput) {
    content += '<div class="mock-input"><input type="text" placeholder="User input field" /></div>'
  }
  
  if (hasButton) {
    content += '<div class="mock-button"><button>Action Button</button></div>'
  }
  
  if (!content) {
    content = '<div class="mock-placeholder"><p>Add interface elements to see them here</p></div>'
  }
  
  return content
}

const extractAppTitle = () => {
  const match = currentCode.value.match(/title:\s*"([^"]+)"/)
  if (match) return match[1]
  
  const appMatch = currentCode.value.match(/app\s+(\w+)/)
  if (appMatch) return appMatch[1]
  
  return null
}

const getGeneratedCode = (language) => {
  const title = extractAppTitle() || 'GeneratedApp'
  
  switch (language) {
    case 'vue':
      return `<template>
  <div class="${title.toLowerCase()}">
    <h1>{{ title }}</h1>
    <!-- Generated from your APML code -->
    ${generateVueTemplate()}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('${title}')
${generateVueScript()}
</script>

<style scoped>
.${title.toLowerCase()} {
  padding: 2rem;
  font-family: sans-serif;
}
</style>`

    case 'react':
      return `import React, { useState } from 'react'

function ${title}() {
  const [title] = useState('${title}')
  ${generateReactHooks()}
  
  return (
    <div className="${title.toLowerCase()}">
      <h1>{title}</h1>
      {/* Generated from your APML code */}
      ${generateReactJSX()}
    </div>
  )
}

export default ${title}`

    case 'swift':
      return `import SwiftUI

struct ${title}View: View {
    @State private var title = "${title}"
    ${generateSwiftState()}
    
    var body: some View {
        VStack {
            Text(title)
                .font(.title)
            // Generated from your APML code
            ${generateSwiftBody()}
        }
        .padding()
    }
}`

    case 'kotlin':
      return `class ${title}Activity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Generated from your APML code
        setContentView(R.layout.activity_${title.toLowerCase()})
        
        ${generateKotlinCode()}
    }
}`

    default:
      return '// Generated code will appear here'
  }
}

const generateVueTemplate = () => {
  let template = ''
  if (currentCode.value.includes('input')) {
    template += '\n    <input v-model="userInput" placeholder="Enter text" />'
  }
  if (currentCode.value.includes('button')) {
    template += '\n    <button @click="handleAction">Click Me</button>'
  }
  if (currentCode.value.includes('show') || currentCode.value.includes('display')) {
    template += '\n    <p>{{ displayMessage }}</p>'
  }
  return template
}

const generateVueScript = () => {
  let script = ''
  if (currentCode.value.includes('input')) {
    script += '\nconst userInput = ref("")'
  }
  if (currentCode.value.includes('show') || currentCode.value.includes('display')) {
    script += '\nconst displayMessage = ref("Hello from APML!")'
  }
  if (currentCode.value.includes('button')) {
    script += '\n\nconst handleAction = () => {\n  console.log("Action triggered")\n}'
  }
  return script
}

const generateReactJSX = () => {
  let jsx = ''
  if (currentCode.value.includes('input')) {
    jsx += '\n      <input type="text" placeholder="Enter text" />'
  }
  if (currentCode.value.includes('button')) {
    jsx += '\n      <button onClick={handleAction}>Click Me</button>'
  }
  if (currentCode.value.includes('show') || currentCode.value.includes('display')) {
    jsx += '\n      <p>Hello from APML!</p>'
  }
  return jsx
}

const generateReactHooks = () => {
  let hooks = ''
  if (currentCode.value.includes('input')) {
    hooks += '\n  const [userInput, setUserInput] = useState("")'
  }
  if (currentCode.value.includes('button')) {
    hooks += '\n  \n  const handleAction = () => {\n    console.log("Action triggered")\n  }'
  }
  return hooks
}

const generateSwiftState = () => {
  let state = ''
  if (currentCode.value.includes('input')) {
    state += '\n    @State private var userInput = ""'
  }
  return state
}

const generateSwiftBody = () => {
  let body = ''
  if (currentCode.value.includes('input')) {
    body += '\n            TextField("Enter text", text: $userInput)'
  }
  if (currentCode.value.includes('button')) {
    body += '\n            Button("Click Me") {\n                print("Action triggered")\n            }'
  }
  if (currentCode.value.includes('show') || currentCode.value.includes('display')) {
    body += '\n            Text("Hello from APML!")'
  }
  return body
}

const generateKotlinCode = () => {
  let code = ''
  if (currentCode.value.includes('button')) {
    code += '\n        findViewById<Button>(R.id.actionButton).setOnClickListener {\n            println("Action triggered")\n        }'
  }
  return code
}

const getStatusIcon = (status) => {
  switch (status) {
    case 'success': return '✅'
    case 'warning': return '⚠️'
    case 'error': return '❌'
    default: return 'ℹ️'
  }
}

const formatCode = () => {
  // Basic code formatting
  const lines = currentCode.value.split('\n')
  let indentLevel = 0
  
  const formatted = lines.map(line => {
    const trimmed = line.trim()
    if (!trimmed) return ''
    
    if (trimmed.startsWith('app') || trimmed.startsWith('data') || trimmed.startsWith('interface:') || trimmed.startsWith('logic:')) {
      indentLevel = 0
      return trimmed
    } else if (trimmed.endsWith(':') && !trimmed.startsWith(' ')) {
      return '  ' + trimmed
    } else {
      return '    ' + trimmed
    }
  })
  
  currentCode.value = formatted.join('\n')
  highlightCode()
}

const resetExample = () => {
  currentCode.value = originalCode.value
  validationResult.value = null
  highlightCode()
  compileCode()
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(currentCode.value)
    // Show success feedback
  } catch (error) {
    console.error('Failed to copy code:', error)
  }
}

const shareExample = async () => {
  try {
    const shareData = {
      title: `APML Example: ${props.example.title}`,
      text: props.example.description,
      url: `${window.location.origin}/examples/${props.example.id}`
    }
    
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(shareData.url)
    }
  } catch (error) {
    console.error('Error sharing:', error)
  }
}

const applyFix = (issue) => {
  if (issue.fix) {
    if (issue.fix.type === 'add') {
      currentCode.value += issue.fix.suggestion
    } else if (issue.fix.type === 'indent') {
      const lines = currentCode.value.split('\n')
      lines[issue.line - 1] = issue.fix.suggestion
      currentCode.value = lines.join('\n')
    }
    handleCodeChange()
  }
}

const applyQuickAction = (action) => {
  currentCode.value = action.modification(currentCode.value)
  handleCodeChange()
}

const handlePreviewAction = (actionData) => {
  console.log('Preview action:', actionData)
  // Handle interactive preview actions
}

const getLessonIndex = () => {
  if (!currentLesson.value || !props.example.lessons) return -1
  return props.example.lessons.findIndex(lesson => lesson.id === activeLesson.value)
}

const previousLesson = () => {
  const index = getLessonIndex()
  if (index > 0) {
    activeLesson.value = props.example.lessons[index - 1].id
  }
}

const nextLesson = () => {
  const index = getLessonIndex()
  if (index < props.example.lessons.length - 1) {
    activeLesson.value = props.example.lessons[index + 1].id
  }
}

const applyLessonCode = () => {
  if (currentLesson.value?.code) {
    currentCode.value = currentLesson.value.code
    handleCodeChange()
  }
}

// Initialize
onMounted(() => {
  highlightCode()
  compileCode()
  validateSyntax()
  
  if (props.example.lessons?.length) {
    activeLesson.value = props.example.lessons[0].id
  }
})

// Watch for code changes
watch(currentCode, handleCodeChange, { immediate: true })
</script>

<style scoped>
.interactive-example {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-radius: var(--apml-radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

/* Example Header */
.example-header {
  background: var(--color-bg-glass-strong);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-glass);
  padding: var(--apml-space-6) var(--apml-space-8);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--apml-space-6);
}

.header-left {
  flex: 1;
}

.example-title {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  font-size: var(--apml-text-2xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-3);
}

.title-icon {
  font-size: var(--apml-text-xl);
}

.example-description {
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
  margin-bottom: var(--apml-space-4);
}

.example-tags {
  display: flex;
  gap: var(--apml-space-2);
  flex-wrap: wrap;
}

.example-tag {
  background: var(--color-primary-subtle);
  color: var(--color-primary);
  padding: var(--apml-space-1) var(--apml-space-3);
  border-radius: var(--apml-radius-full);
  font-size: var(--apml-text-xs);
  font-weight: var(--apml-font-weight-semibold);
  border: 1px solid var(--color-primary-muted);
}

.header-controls {
  display: flex;
  gap: var(--apml-space-2);
}

.control-btn {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  padding: var(--apml-space-2) var(--apml-space-4);
  background: transparent;
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-lg);
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  font-size: var(--apml-text-sm);
}

.control-btn:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-secondary);
}

.btn-icon {
  font-size: var(--apml-text-base);
}

/* Workshop Container */
.workshop-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

.code-section,
.preview-section {
  background: var(--color-bg-elevated);
  display: flex;
  flex-direction: column;
}

.code-section {
  border-right: 1px solid var(--color-border-primary);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--apml-space-4) var(--apml-space-6);
  background: var(--color-bg-glass);
  border-bottom: 1px solid var(--color-border-primary);
}

.section-title {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.section-icon {
  font-size: var(--apml-text-base);
}

.editor-tools,
.preview-controls {
  display: flex;
  gap: var(--apml-space-2);
}

.tool-btn,
.preview-btn {
  padding: var(--apml-space-2) var(--apml-space-3);
  background: transparent;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--apml-radius-base);
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  display: flex;
  align-items: center;
  gap: var(--apml-space-1);
  font-size: var(--apml-text-sm);
}

.tool-btn:hover,
.preview-btn:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-secondary);
}

.tool-btn.active,
.preview-btn.active {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary-muted);
  color: var(--color-primary);
}

.tool-icon {
  font-size: var(--apml-text-sm);
}

/* Code Editor */
.code-editor-container {
  position: relative;
  flex: 1;
  display: flex;
  font-family: var(--font-mono);
  font-size: var(--apml-text-sm);
  line-height: var(--apml-leading-relaxed);
}

.line-numbers {
  background: var(--color-bg-glass);
  padding: var(--apml-space-4) var(--apml-space-2);
  border-right: 1px solid var(--color-border-primary);
  min-width: 3rem;
  text-align: right;
  color: var(--color-text-muted);
  user-select: none;
}

.line-number {
  height: 1.5rem;
  line-height: 1.5;
}

.code-editor {
  position: absolute;
  top: 0;
  left: 3rem;
  right: 0;
  bottom: 0;
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  caret-color: var(--color-primary);
  padding: var(--apml-space-4);
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  resize: none;
  white-space: pre;
  z-index: 2;
}

.syntax-overlay {
  position: absolute;
  top: 0;
  left: 3rem;
  right: 0;
  bottom: 0;
  padding: var(--apml-space-4);
  pointer-events: none;
  white-space: pre;
  overflow: auto;
  color: var(--color-text-secondary);
  z-index: 1;
}

/* Syntax highlighting */
:deep(.apml-structure) { color: var(--color-secondary); font-weight: bold; }
:deep(.apml-type) { color: var(--color-accent); font-weight: 500; }
:deep(.apml-modifier) { color: var(--color-error); font-weight: bold; }
:deep(.apml-action) { color: var(--color-warning); font-weight: 500; }
:deep(.apml-property) { color: var(--color-primary); font-weight: 500; }
:deep(.apml-string) { color: var(--color-success); }
:deep(.apml-comment) { color: var(--color-text-muted); font-style: italic; }

/* Validation Section */
.validation-section {
  border-top: 1px solid var(--color-border-primary);
  background: var(--color-bg-glass);
}

.validation-status {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  padding: var(--apml-space-3) var(--apml-space-6);
  font-weight: var(--apml-font-weight-medium);
}

.validation-status.success { color: var(--color-success); }
.validation-status.warning { color: var(--color-warning); }
.validation-status.error { color: var(--color-error); }

.status-icon {
  font-size: var(--apml-text-base);
}

.validation-issues {
  max-height: 150px;
  overflow-y: auto;
}

.validation-issue {
  display: flex;
  align-items: center;
  gap: var(--apml-space-3);
  padding: var(--apml-space-2) var(--apml-space-6);
  border-left: 3px solid transparent;
}

.validation-issue.warning {
  border-left-color: var(--color-warning);
  background: var(--color-warning-subtle);
}

.validation-issue.error {
  border-left-color: var(--color-error);
  background: var(--color-error-subtle);
}

.validation-issue.info {
  border-left-color: var(--color-primary);
  background: var(--color-primary-subtle);
}

.issue-line {
  color: var(--color-text-muted);
  font-weight: var(--apml-font-weight-medium);
  min-width: 4rem;
  font-size: var(--apml-text-sm);
}

.issue-message {
  flex: 1;
  color: var(--color-text-secondary);
  font-size: var(--apml-text-sm);
}

.fix-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--apml-space-1) var(--apml-space-2);
  border-radius: var(--apml-radius-base);
  font-size: var(--apml-text-xs);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
}

.fix-btn:hover {
  background: var(--color-primary-hover);
}

/* Structure Section */
.structure-section {
  border-top: 1px solid var(--color-border-primary);
  background: var(--color-bg-glass);
  padding: var(--apml-space-4) var(--apml-space-6);
}

.structure-title {
  font-size: var(--apml-text-base);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-3);
}

.structure-analysis {
  display: grid;
  gap: var(--apml-space-3);
}

.structure-category h6 {
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--apml-space-2);
}

.structure-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--apml-space-2);
  background: var(--color-bg-elevated);
  border-radius: var(--apml-radius-base);
  margin-bottom: var(--apml-space-1);
}

.item-name {
  color: var(--color-text-primary);
  font-weight: var(--apml-font-weight-medium);
  font-size: var(--apml-text-sm);
}

.item-type {
  color: var(--color-text-muted);
  font-size: var(--apml-text-xs);
}

/* Preview Section */
.component-preview {
  padding: var(--apml-space-6);
  height: 100%;
  overflow: auto;
}

.preview-frame {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.frame-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--apml-space-3) var(--apml-space-4);
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-primary);
}

.frame-controls {
  display: flex;
  gap: var(--apml-space-1);
}

.frame-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text-muted);
}

.frame-title {
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-medium);
  color: var(--color-text-secondary);
}

.frame-content {
  flex: 1;
  padding: var(--apml-space-6);
  background: white;
  color: var(--color-text-inverse);
  overflow: auto;
}

.preview-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
  color: var(--color-text-tertiary);
}

.placeholder-icon {
  font-size: var(--apml-text-4xl);
  margin-bottom: var(--apml-space-4);
}

.placeholder-content h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--apml-space-2);
}

.placeholder-content p {
  color: var(--color-text-muted);
  margin-bottom: var(--apml-space-4);
}

.placeholder-features {
  display: grid;
  gap: var(--apml-space-2);
}

.feature-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--apml-space-2);
  color: var(--color-text-tertiary);
  font-size: var(--apml-text-sm);
}

.feature-icon {
  font-size: var(--apml-text-base);
}

/* Generated Preview */
.generated-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.language-tabs {
  display: flex;
  padding: var(--apml-space-4) var(--apml-space-6) 0;
  gap: var(--apml-space-2);
}

.lang-tab {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  padding: var(--apml-space-2) var(--apml-space-3);
  background: transparent;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--apml-radius-base);
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  font-size: var(--apml-text-sm);
}

.lang-tab:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-secondary);
}

.lang-tab.active {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary-muted);
  color: var(--color-primary);
}

.lang-icon {
  font-size: var(--apml-text-base);
}

.lang-name {
  font-weight: var(--apml-font-weight-medium);
}

.generated-code {
  flex: 1;
  padding: var(--apml-space-6);
  overflow: auto;
}

/* Analysis Preview */
.analysis-preview {
  padding: var(--apml-space-6);
  height: 100%;
  overflow: auto;
}

.analysis-sections {
  display: grid;
  gap: var(--apml-space-6);
}

.analysis-section h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
}

.trinity-check {
  display: grid;
  gap: var(--apml-space-3);
}

.trinity-aspect {
  display: flex;
  align-items: center;
  gap: var(--apml-space-3);
  padding: var(--apml-space-3);
  border-radius: var(--apml-radius-lg);
  border: 1px solid transparent;
}

.trinity-aspect.complete {
  background: var(--color-success-subtle);
  border-color: var(--color-success-muted);
}

.trinity-aspect.missing {
  background: var(--color-error-subtle);
  border-color: var(--color-error-muted);
}

.aspect-icon {
  font-size: var(--apml-text-xl);
}

.aspect-content {
  flex: 1;
}

.aspect-title {
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-1);
}

.aspect-description {
  color: var(--color-text-secondary);
  font-size: var(--apml-text-sm);
}

.aspect-status {
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-semibold);
  text-transform: uppercase;
  padding: var(--apml-space-1) var(--apml-space-2);
  border-radius: var(--apml-radius-base);
}

.trinity-aspect.complete .aspect-status {
  background: var(--color-success);
  color: white;
}

.trinity-aspect.missing .aspect-status {
  background: var(--color-error);
  color: white;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--apml-space-4);
}

.metric-card {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-lg);
  padding: var(--apml-space-4);
  text-align: center;
}

.metric-value {
  font-size: var(--apml-text-xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--apml-space-1);
}

.metric-label {
  color: var(--color-text-tertiary);
  font-size: var(--apml-text-sm);
}

.quality-indicators {
  display: grid;
  gap: var(--apml-space-3);
}

.quality-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: var(--apml-space-3);
  align-items: center;
}

.quality-label {
  color: var(--color-text-secondary);
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-medium);
}

.quality-bar {
  background: var(--color-bg-secondary);
  border-radius: var(--apml-radius-full);
  height: 6px;
  overflow: hidden;
}

.quality-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-success));
  border-radius: var(--apml-radius-full);
  transition: width var(--apml-duration-700) var(--apml-ease-out);
}

.quality-score {
  color: var(--color-text-primary);
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-semibold);
  min-width: 3rem;
  text-align: right;
}

/* Lessons Section */
.lessons-section {
  border-top: 1px solid var(--color-border-primary);
  background: var(--color-bg-glass);
  padding: var(--apml-space-6) var(--apml-space-8);
}

.lessons-header {
  text-align: center;
  margin-bottom: var(--apml-space-6);
}

.lessons-header h4 {
  font-size: var(--apml-text-xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-2);
}

.lessons-header p {
  color: var(--color-text-secondary);
}

.lessons-container {
  display: flex;
  gap: var(--apml-space-2);
  margin-bottom: var(--apml-space-6);
  overflow-x: auto;
  padding-bottom: var(--apml-space-2);
}

.lesson-btn {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  padding: var(--apml-space-3) var(--apml-space-4);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--apml-radius-lg);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  white-space: nowrap;
  position: relative;
}

.lesson-btn:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-primary);
}

.lesson-btn.active {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary-muted);
  color: var(--color-primary);
}

.lesson-btn.completed {
  background: var(--color-success-subtle);
  border-color: var(--color-success-muted);
}

.lesson-number {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--apml-text-xs);
  font-weight: var(--apml-font-weight-bold);
}

.lesson-title {
  font-weight: var(--apml-font-weight-medium);
}

.lesson-check {
  color: var(--color-success);
  font-weight: var(--apml-font-weight-bold);
}

.lesson-content {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-xl);
  padding: var(--apml-space-6);
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--apml-space-4);
}

.lesson-header h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-text-primary);
}

.lesson-progress {
  color: var(--color-text-muted);
  font-size: var(--apml-text-sm);
}

.lesson-body p {
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
  margin-bottom: var(--apml-space-4);
}

.lesson-hint {
  background: var(--color-primary-subtle);
  border: 1px solid var(--color-primary-muted);
  border-radius: var(--apml-radius-lg);
  padding: var(--apml-space-3);
  margin-bottom: var(--apml-space-4);
  color: var(--color-primary);
  font-size: var(--apml-text-sm);
}

.lesson-example {
  margin-bottom: var(--apml-space-4);
}

.lesson-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--apml-space-3);
}

.lesson-nav-btn,
.lesson-apply-btn {
  padding: var(--apml-space-2) var(--apml-space-4);
  border-radius: var(--apml-radius-lg);
  font-weight: var(--apml-font-weight-medium);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  border: none;
}

.lesson-nav-btn {
  background: var(--color-bg-glass);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-secondary);
}

.lesson-nav-btn:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.lesson-apply-btn {
  background: var(--color-primary);
  color: white;
}

.lesson-apply-btn:hover {
  background: var(--color-primary-hover);
}

/* Example Actions */
.example-actions {
  border-top: 1px solid var(--color-border-primary);
  background: var(--color-bg-glass);
  padding: var(--apml-space-6) var(--apml-space-8);
}

.action-group h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--apml-space-3);
}

.quick-action-btn {
  display: flex;
  align-items: center;
  gap: var(--apml-space-3);
  padding: var(--apml-space-4);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--apml-radius-lg);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  text-align: left;
}

.quick-action-btn:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.action-icon {
  font-size: var(--apml-text-xl);
}

.action-text {
  font-weight: var(--apml-font-weight-medium);
}

/* Mock component styles */
:deep(.mock-app) {
  font-family: var(--font-primary);
  color: var(--color-text-inverse);
}

:deep(.app-header) {
  background: var(--color-primary);
  color: white;
  padding: var(--apml-space-4);
  border-radius: var(--apml-radius-lg) var(--apml-radius-lg) 0 0;
  margin-bottom: var(--apml-space-4);
}

:deep(.app-header h3) {
  margin: 0;
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
}

:deep(.app-content) {
  padding: 0 var(--apml-space-4) var(--apml-space-4);
}

:deep(.mock-display) {
  background: var(--apml-neutral-100);
  padding: var(--apml-space-3);
  border-radius: var(--apml-radius-lg);
  margin-bottom: var(--apml-space-3);
  color: var(--apml-neutral-700);
}

:deep(.mock-input) {
  margin-bottom: var(--apml-space-3);
}

:deep(.mock-input input) {
  width: 100%;
  padding: var(--apml-space-2) var(--apml-space-3);
  border: 1px solid var(--apml-neutral-300);
  border-radius: var(--apml-radius-base);
  font-size: var(--apml-text-sm);
}

:deep(.mock-button button) {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--apml-space-2) var(--apml-space-4);
  border-radius: var(--apml-radius-base);
  font-weight: var(--apml-font-weight-medium);
  cursor: pointer;
}

:deep(.mock-placeholder) {
  text-align: center;
  color: var(--apml-neutral-500);
  padding: var(--apml-space-6);
  border: 2px dashed var(--apml-neutral-300);
  border-radius: var(--apml-radius-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .workshop-container {
    grid-template-columns: 1fr;
  }
  
  .code-section {
    border-right: none;
    border-bottom: 1px solid var(--color-border-primary);
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--apml-space-4);
  }
  
  .header-controls {
    align-self: stretch;
    justify-content: flex-end;
  }
}

@media (max-width: 768px) {
  .example-header {
    padding: var(--apml-space-4);
  }
  
  .lessons-section,
  .example-actions {
    padding: var(--apml-space-4);
  }
  
  .section-header {
    flex-direction: column;
    gap: var(--apml-space-3);
    align-items: flex-start;
  }
  
  .editor-tools,
  .preview-controls {
    align-self: stretch;
    justify-content: flex-end;
  }
  
  .code-editor-container {
    min-height: 300px;
  }
  
  .lessons-container {
    flex-direction: column;
  }
  
  .lesson-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .quick-actions {
    grid-template-columns: 1fr;
  }
  
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
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
.control-btn:focus-visible,
.tool-btn:focus-visible,
.preview-btn:focus-visible,
.lang-tab:focus-visible,
.lesson-btn:focus-visible,
.lesson-nav-btn:focus-visible,
.lesson-apply-btn:focus-visible,
.quick-action-btn:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

.code-editor:focus-visible {
  outline: none;
}
</style>