<template>
  <div class="feature-showcase">
    <!-- Showcase Header -->
    <div class="showcase-header">
      <div class="header-content">
        <h2 class="showcase-title">
          <span class="title-icon">✨</span>
          Why APML Changes Everything
        </h2>
        <p class="showcase-subtitle">
          Discover the features that make APML the future of conversational programming
        </p>
      </div>
    </div>

    <!-- Feature Tabs -->
    <div class="feature-tabs">
      <div class="tabs-container">
        <button 
          v-for="feature in features"
          :key="feature.id"
          @click="activeFeature = feature.id"
          :class="['tab-button', { active: activeFeature === feature.id }]"
        >
          <span class="tab-icon">{{ feature.icon }}</span>
          <span class="tab-label">{{ feature.name }}</span>
        </button>
      </div>
    </div>

    <!-- Active Feature Display -->
    <div class="feature-display">
      <div class="feature-content">
        <!-- Feature Info -->
        <div class="feature-info">
          <div class="feature-header">
            <h3 class="feature-title">{{ currentFeature.title }}</h3>
            <div class="feature-badges">
              <span 
                v-for="badge in currentFeature.badges"
                :key="badge.text"
                :class="['feature-badge', badge.type]"
              >
                {{ badge.text }}
              </span>
            </div>
          </div>
          
          <p class="feature-description">{{ currentFeature.description }}</p>
          
          <div class="feature-benefits">
            <h4>Key Benefits</h4>
            <ul class="benefits-list">
              <li 
                v-for="benefit in currentFeature.benefits"
                :key="benefit"
                class="benefit-item"
              >
                <span class="benefit-icon">✓</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="feature-stats" v-if="currentFeature.stats">
            <div 
              v-for="stat in currentFeature.stats"
              :key="stat.label"
              class="stat-item"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Feature Demo -->
        <div class="feature-demo">
          <!-- Trinity Principle Demo -->
          <div v-if="activeFeature === 'trinity'" class="trinity-demo">
            <div class="demo-title">Trinity Principle in Action</div>
            <div class="trinity-flow">
              <div class="flow-step" v-for="(step, index) in trinitySteps" :key="index">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <div class="step-icon">{{ step.icon }}</div>
                  <div class="step-info">
                    <h5>{{ step.title }}</h5>
                    <p>{{ step.description }}</p>
                    <div class="step-code">
                      <APMLCodeBlock :code="step.code" />
                    </div>
                  </div>
                </div>
                <div v-if="index < trinitySteps.length - 1" class="flow-arrow">→</div>
              </div>
            </div>
          </div>

          <!-- Logical Completeness Demo -->
          <div v-else-if="activeFeature === 'logical'" class="logical-demo">
            <div class="demo-title">Logical Completeness Validation</div>
            <div class="validation-flow">
              <div class="validation-input">
                <h5>APML Code Input</h5>
                <APMLCodeBlock :code="logicalExample.input" />
              </div>
              <div class="validation-process">
                <div class="process-step" v-for="step in validationSteps" :key="step.id">
                  <div :class="['step-status', step.status]">
                    <span class="status-icon">{{ step.icon }}</span>
                  </div>
                  <div class="step-label">{{ step.label }}</div>
                </div>
              </div>
              <div class="validation-result">
                <div class="result-header">
                  <span class="result-icon">✅</span>
                  <span class="result-text">Logically Complete</span>
                </div>
                <div class="result-details">
                  <div class="detail-item">
                    <span class="detail-label">Trinity Compliance:</span>
                    <span class="detail-value success">100%</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Decision Paths:</span>
                    <span class="detail-value success">All Handled</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Termination:</span>
                    <span class="detail-value success">Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- AI Integration Demo -->
          <div v-else-if="activeFeature === 'ai'" class="ai-demo">
            <div class="demo-title">Natural AI Collaboration</div>
            <div class="conversation-flow">
              <div class="conversation-step" v-for="step in aiConversation" :key="step.id">
                <div :class="['message', step.type]">
                  <div class="message-avatar">
                    <span>{{ step.avatar }}</span>
                  </div>
                  <div class="message-content">
                    <div class="message-header">
                      <span class="message-author">{{ step.author }}</span>
                      <span class="message-time">{{ step.time }}</span>
                    </div>
                    <div class="message-text">{{ step.message }}</div>
                    <div v-if="step.code" class="message-code">
                      <APMLCodeBlock :code="step.code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Multi-Platform Demo -->
          <div v-else-if="activeFeature === 'platform'" class="platform-demo">
            <div class="demo-title">One APML, Multiple Platforms</div>
            <div class="platform-grid">
              <div class="source-apml">
                <h5>Source APML</h5>
                <APMLCodeBlock :code="platformExample.source" />
              </div>
              <div class="compilation-arrow">
                <div class="arrow-icon">⚡</div>
                <span>Compiles to</span>
              </div>
              <div class="target-platforms">
                <div 
                  v-for="platform in platformExample.targets"
                  :key="platform.name"
                  class="platform-output"
                >
                  <div class="platform-header">
                    <span class="platform-icon">{{ platform.icon }}</span>
                    <span class="platform-name">{{ platform.name }}</span>
                  </div>
                  <div class="platform-code">
                    <pre><code>{{ platform.code }}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Real-time Demo -->
          <div v-else-if="activeFeature === 'realtime'" class="realtime-demo">
            <div class="demo-title">Real-time Development Experience</div>
            <div class="realtime-editor">
              <div class="editor-pane">
                <h5>Live APML Editor</h5>
                <div class="live-editor">
                  <textarea 
                    v-model="realtimeCode"
                    class="live-textarea"
                    placeholder="Type APML code here..."
                  ></textarea>
                  <div class="editor-overlay" v-html="highlightedRealtimeCode"></div>
                </div>
              </div>
              <div class="preview-pane">
                <h5>Instant Preview</h5>
                <div class="live-preview">
                  <div class="preview-header">
                    <span class="compilation-status">
                      <span class="status-dot success"></span>
                      Compiled successfully
                    </span>
                  </div>
                  <div class="preview-content">
                    <div class="mock-component">
                      <h6>{{ extractTitle(realtimeCode) || 'My APML App' }}</h6>
                      <p>Interactive component generated from your APML code</p>
                      <button class="mock-button">Example Action</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Demo -->
          <div v-else-if="activeFeature === 'performance'" class="performance-demo">
            <div class="demo-title">Blazing Fast Performance</div>
            <div class="performance-metrics">
              <div class="metric-category">
                <h5>Compilation Speed</h5>
                <div class="metrics-grid">
                  <div class="metric-item">
                    <div class="metric-value">
                      <AnimatedNumber :value="147" />ms
                    </div>
                    <div class="metric-label">Average compile time</div>
                  </div>
                  <div class="metric-item">
                    <div class="metric-value">
                      <AnimatedNumber :value="23" />KB
                    </div>
                    <div class="metric-label">Bundle size</div>
                  </div>
                  <div class="metric-item">
                    <div class="metric-value">
                      <AnimatedNumber :value="99.8" />%
                    </div>
                    <div class="metric-label">Success rate</div>
                  </div>
                </div>
              </div>
              
              <div class="metric-category">
                <h5>Runtime Performance</h5>
                <div class="performance-chart">
                  <div class="chart-bars">
                    <div 
                      v-for="benchmark in performanceBenchmarks"
                      :key="benchmark.name"
                      class="benchmark-bar"
                    >
                      <div class="bar-container">
                        <div 
                          class="bar-fill"
                          :style="{ width: benchmark.percentage + '%' }"
                        ></div>
                      </div>
                      <div class="bar-label">{{ benchmark.name }}</div>
                      <div class="bar-value">{{ benchmark.value }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Comparison -->
    <div class="feature-comparison">
      <div class="comparison-header">
        <h3>APML vs Traditional Development</h3>
      </div>
      <div class="comparison-table">
        <div class="comparison-row header-row">
          <div class="comparison-cell"></div>
          <div class="comparison-cell">Traditional Code</div>
          <div class="comparison-cell">APML</div>
        </div>
        <div 
          v-for="comparison in comparisons"
          :key="comparison.aspect"
          class="comparison-row"
        >
          <div class="comparison-cell aspect">{{ comparison.aspect }}</div>
          <div class="comparison-cell traditional">
            <span class="comparison-icon">{{ comparison.traditional.icon }}</span>
            <span>{{ comparison.traditional.text }}</span>
          </div>
          <div class="comparison-cell apml">
            <span class="comparison-icon">{{ comparison.apml.icon }}</span>
            <span>{{ comparison.apml.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import APMLCodeBlock from './APMLCodeBlock.vue'

// Components
const AnimatedNumber = {
  props: ['value'],
  template: `<span>{{ animatedValue }}</span>`,
  setup(props) {
    const animatedValue = ref(0)
    
    const animate = () => {
      const start = animatedValue.value
      const end = props.value
      const duration = 1000
      const startTime = Date.now()
      
      const update = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        
        animatedValue.value = Math.round(start + (end - start) * eased)
        
        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }
      
      requestAnimationFrame(update)
    }
    
    animate()
    return { animatedValue }
  }
}

// Reactive data
const activeFeature = ref('trinity')
const realtimeCode = ref(`app TodoApp:
  title: "My Tasks"

interface:
  show task_list:
    title: "Your Tasks"
    for each task:
      display task.name`)

// Feature definitions
const features = ref([
  {
    id: 'trinity',
    name: 'Trinity Principle',
    icon: '🔺',
    title: 'The Trinity Principle',
    description: 'Every application is expressed through exactly three message types: App→User (display), User→App (input), and App→App (logic). This creates perfect logical completeness and eliminates complexity.',
    badges: [
      { text: 'Core Concept', type: 'primary' },
      { text: 'Mathematically Proven', type: 'success' }
    ],
    benefits: [
      'Eliminates architectural complexity',
      'Guarantees logical completeness',
      'Prevents feature creep and scope drift',
      'Creates predictable, maintainable applications',
      'Enables automatic validation and testing'
    ],
    stats: [
      { value: '3', label: 'Message Types' },
      { value: '100%', label: 'Coverage' },
      { value: '0', label: 'Ambiguity' }
    ]
  },
  {
    id: 'logical',
    name: 'Logical Completeness',
    icon: '✅',
    title: 'Guaranteed Logical Completeness',
    description: 'APML applications are mathematically verified to be logically complete - all decision paths are handled, all workflows terminate, and no edge cases are left unhandled.',
    badges: [
      { text: 'Crash-Free', type: 'success' },
      { text: 'Production Ready', type: 'primary' }
    ],
    benefits: [
      'Zero runtime crashes from logic errors',
      'All decision paths explicitly handled',
      'Automatic edge case detection',
      'Mathematical proof of termination',
      'Built-in validation and verification'
    ],
    stats: [
      { value: '100%', label: 'Logic Coverage' },
      { value: '0%', label: 'Crash Rate' },
      { value: '∞', label: 'Reliability' }
    ]
  },
  {
    id: 'ai',
    name: 'AI Integration',
    icon: '🤖',
    title: 'Natural AI Collaboration',
    description: 'APML reads like natural conversation, making it perfect for human-AI collaboration. AIs can understand, write, and modify APML code as naturally as humans.',
    badges: [
      { text: 'AI Native', type: 'accent' },
      { text: 'Future Ready', type: 'primary' }
    ],
    benefits: [
      'Natural language-like syntax',
      'Perfect for AI code generation',
      'Seamless human-AI collaboration',
      'Self-documenting applications',
      'Easy to learn and teach'
    ],
    stats: [
      { value: '95%', label: 'AI Accuracy' },
      { value: '3x', label: 'Faster Development' },
      { value: '90%', label: 'Less Training Time' }
    ]
  },
  {
    id: 'platform',
    name: 'Multi-Platform',
    icon: '🌐',
    title: 'Write Once, Run Everywhere',
    description: 'Single APML source code compiles to multiple platforms - Vue.js, React, Swift, Kotlin, and more. True platform independence with native performance.',
    badges: [
      { text: 'Cross-Platform', type: 'accent' },
      { text: 'Native Performance', type: 'success' }
    ],
    benefits: [
      'Single source code for all platforms',
      'Native performance on each platform',
      'Reduced development and maintenance costs',
      'Consistent behavior across platforms',
      'Future-proof architecture'
    ],
    stats: [
      { value: '5+', label: 'Target Platforms' },
      { value: '1', label: 'Source Codebase' },
      { value: '70%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'realtime',
    name: 'Real-time Development',
    icon: '⚡',
    title: 'Instant Feedback Loop',
    description: 'See your changes instantly with real-time compilation and preview. APML\'s fast parser provides immediate feedback as you type.',
    badges: [
      { text: 'Live Preview', type: 'accent' },
      { text: 'Hot Reload', type: 'success' }
    ],
    benefits: [
      'Instant compilation and preview',
      'Real-time syntax validation',
      'Live error detection and fixing',
      'Hot reload during development',
      'Interactive debugging tools'
    ],
    stats: [
      { value: '<100ms', label: 'Compile Time' },
      { value: 'Real-time', label: 'Preview' },
      { value: '10x', label: 'Faster Iteration' }
    ]
  },
  {
    id: 'performance',
    name: 'High Performance',
    icon: '🚀',
    title: 'Blazing Fast Execution',
    description: 'APML compiles to highly optimized native code with minimal overhead. Logical completeness enables aggressive optimizations.',
    badges: [
      { text: 'Optimized', type: 'success' },
      { text: 'Zero Overhead', type: 'primary' }
    ],
    benefits: [
      'Near-native execution speed',
      'Minimal runtime overhead',
      'Automatic optimization opportunities',
      'Efficient memory usage',
      'Battery-friendly mobile apps'
    ],
    stats: [
      { value: '99.9%', label: 'Native Speed' },
      { value: '23KB', label: 'Runtime Size' },
      { value: '40%', label: 'Less Memory' }
    ]
  }
])

// Current feature
const currentFeature = computed(() => {
  return features.value.find(f => f.id === activeFeature.value) || features.value[0]
})

// Trinity Principle demo data
const trinitySteps = ref([
  {
    icon: '👤',
    title: 'App → User',
    description: 'Display information and output to users',
    code: `interface:
  show welcome_message:
    title: "Welcome to APML"
    message: "Start building amazing apps"`
  },
  {
    icon: '🎯',
    title: 'User → App',
    description: 'Capture user input and interactions',
    code: `interface:
  input user_name: text required
  button: "Get Started"
  action: process_user_input`
  },
  {
    icon: '⚙️',
    title: 'App → App',
    description: 'Process logic and internal workflows',
    code: `logic:
  when process_user_input:
    validate user_name
    create user_session
    redirect to dashboard`
  }
])

// Logical completeness demo
const logicalExample = ref({
  input: `app UserRegistration:
  title: "Sign Up"

data User:
  email: email required unique
  password: text required

logic:
  when register_user:
    validate email_format
    check password_strength
    if email_exists:
      notify "Email already registered"
      show login_option
    else:
      create new_user
      send welcome_email
      grant user_session`
})

const validationSteps = ref([
  { id: 1, label: 'Parse Syntax', status: 'success', icon: '✅' },
  { id: 2, label: 'Check Trinity Compliance', status: 'success', icon: '✅' },
  { id: 3, label: 'Validate Decision Paths', status: 'success', icon: '✅' },
  { id: 4, label: 'Verify Termination', status: 'success', icon: '✅' },
  { id: 5, label: 'Generate Proof', status: 'success', icon: '✅' }
])

// AI conversation demo
const aiConversation = ref([
  {
    id: 1,
    type: 'human',
    author: 'Developer',
    avatar: '👨‍💻',
    time: '2:34 PM',
    message: 'I need to build a todo app with user authentication'
  },
  {
    id: 2,
    type: 'ai',
    author: 'AI Assistant',
    avatar: '🤖',
    time: '2:34 PM',
    message: 'I\'ll help you create that! Here\'s the APML structure:',
    code: `app TodoApp:
  title: "Secure Todo Manager"

data User:
  email: email required unique
  password: text required private

data Task:
  title: text required
  completed: boolean default false
  user: User required

interface:
  show login_form:
    input email: email
    input password: text private
    button: "Sign In"

logic:
  when user_signs_in:
    validate credentials
    if valid:
      grant user_session
      show user_tasks
    else:
      notify "Invalid credentials"`
  },
  {
    id: 3,
    type: 'human',
    author: 'Developer',
    avatar: '👨‍💻',
    time: '2:35 PM',
    message: 'Perfect! Can you add task categories?'
  },
  {
    id: 4,
    type: 'ai',
    author: 'AI Assistant',
    avatar: '🤖',
    time: '2:35 PM',
    message: 'Absolutely! I\'ll extend the Task model:',
    code: `data Task:
  title: text required
  completed: boolean default false
  category: work | personal | shopping | health
  user: User required
  created_at: timestamp auto

interface:
  show task_form:
    input title: text
    select category: work | personal | shopping | health
    button: "Add Task"`
  }
])

// Multi-platform demo
const platformExample = ref({
  source: `app WeatherApp:
  title: "Weather Today"

data Weather:
  temperature: number
  condition: text
  location: text

interface:
  show weather_display:
    display weather.location
    display weather.temperature
    display weather.condition
    button: "Refresh"`,
  targets: [
    {
      name: 'Vue.js',
      icon: '💚',
      code: `<template>
  <div class="weather-app">
    <h1>{{ weather.location }}</h1>
    <div class="temp">{{ weather.temperature }}°</div>
    <p>{{ weather.condition }}</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>`
    },
    {
      name: 'React',
      icon: '⚛️',
      code: `function WeatherApp() {
  return (
    <div className="weather-app">
      <h1>{weather.location}</h1>
      <div className="temp">{weather.temperature}°</div>
      <p>{weather.condition}</p>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}`
    },
    {
      name: 'Swift',
      icon: '🍎',
      code: `struct WeatherView: View {
  var body: some View {
    VStack {
      Text(weather.location)
        .font(.title)
      Text("\\(weather.temperature)°")
        .font(.largeTitle)
      Text(weather.condition)
      Button("Refresh", action: refresh)
    }
  }
}`
    }
  ]
})

// Performance benchmarks
const performanceBenchmarks = ref([
  { name: 'First Paint', value: '127ms', percentage: 92 },
  { name: 'Interactive', value: '0.8s', percentage: 88 },
  { name: 'Bundle Size', value: '23KB', percentage: 95 },
  { name: 'Memory Usage', value: '2.1MB', percentage: 90 }
])

// Feature comparisons
const comparisons = ref([
  {
    aspect: 'Learning Curve',
    traditional: { icon: '📈', text: 'Steep, requires expertise' },
    apml: { icon: '📉', text: 'Natural, conversational syntax' }
  },
  {
    aspect: 'Code Maintenance',
    traditional: { icon: '🔧', text: 'Complex, error-prone' },
    apml: { icon: '✨', text: 'Self-documenting, logical' }
  },
  {
    aspect: 'Platform Support',
    traditional: { icon: '🏗️', text: 'Separate codebases' },
    apml: { icon: '🌐', text: 'Write once, run everywhere' }
  },
  {
    aspect: 'AI Integration',
    traditional: { icon: '🤔', text: 'Complex, requires translation' },
    apml: { icon: '🤖', text: 'Native AI collaboration' }
  },
  {
    aspect: 'Quality Assurance',
    traditional: { icon: '🐛', text: 'Manual testing, bugs' },
    apml: { icon: '✅', text: 'Mathematically verified' }
  },
  {
    aspect: 'Development Speed',
    traditional: { icon: '🐌', text: 'Slow iteration cycles' },
    apml: { icon: '⚡', text: 'Real-time development' }
  }
])

// Computed properties
const highlightedRealtimeCode = computed(() => {
  return highlightAPML(realtimeCode.value)
})

// Methods
const extractTitle = (code) => {
  const match = code.match(/title:\s*"([^"]+)"/)
  return match ? match[1] : null
}

const highlightAPML = (code) => {
  if (!code) return ''
  
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
      /^(\s*)(app|data|interface|logic)\b/,
      '$1<span class="apml-structure">$2</span>'
    )
    
    highlighted = highlighted.replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
      '<span class="apml-property">$1</span>:'
    )
    
    highlighted = highlighted.replace(
      /\b(show|display|input|button|when|if|for|each)\b/g,
      '<span class="apml-action">$1</span>'
    )
    
    highlighted = highlighted.replace(
      /\b(text|number|boolean|email|required|default)\b/g,
      '<span class="apml-type">$1</span>'
    )
    
    strings.forEach((str, index) => {
      highlighted = highlighted.replace(`__STRING_${index}__`, str)
    })
    
    return highlighted
  })
  
  return highlightedLines.join('\n')
}

// Watch for realtime code changes
watch(realtimeCode, () => {
  // Simulate real-time compilation feedback
}, { immediate: true })
</script>

<style scoped>
.feature-showcase {
  background: linear-gradient(135deg, var(--color-bg-primary), var(--color-bg-secondary));
  color: var(--color-text-primary);
  min-height: 100vh;
}

/* Showcase Header */
.showcase-header {
  text-align: center;
  padding: var(--apml-space-16) var(--apml-space-8) var(--apml-space-12);
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-glass);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.showcase-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--apml-space-3);
  font-size: var(--apml-text-4xl);
  font-weight: var(--apml-font-weight-bold);
  margin-bottom: var(--apml-space-6);
  color: var(--color-text-primary);
}

.title-icon {
  font-size: var(--apml-text-3xl);
}

.showcase-subtitle {
  font-size: var(--apml-text-xl);
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
  margin: 0;
}

/* Feature Tabs */
.feature-tabs {
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-primary);
  padding: var(--apml-space-6) var(--apml-space-8);
}

.tabs-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: var(--apml-space-3);
  overflow-x: auto;
  padding-bottom: var(--apml-space-2);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  padding: var(--apml-space-3) var(--apml-space-5);
  background: transparent;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--apml-radius-lg);
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: all var(--apml-duration-300) var(--apml-ease-out);
  white-space: nowrap;
  font-weight: var(--apml-font-weight-medium);
}

.tab-button:hover {
  background: var(--color-bg-glass);
  border-color: var(--color-border-focus);
  color: var(--color-text-secondary);
}

.tab-button.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-glow);
}

.tab-icon {
  font-size: var(--apml-text-lg);
}

.tab-label {
  font-size: var(--apml-text-sm);
}

/* Feature Display */
.feature-display {
  padding: var(--apml-space-12) var(--apml-space-8);
}

.feature-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: var(--apml-space-12);
  align-items: start;
}

/* Feature Info */
.feature-info {
  background: var(--color-bg-glass-strong);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-2xl);
  padding: var(--apml-space-8);
  box-shadow: var(--shadow-glass);
  position: sticky;
  top: var(--apml-space-8);
}

.feature-header {
  margin-bottom: var(--apml-space-6);
}

.feature-title {
  font-size: var(--apml-text-2xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-3);
}

.feature-badges {
  display: flex;
  gap: var(--apml-space-2);
  flex-wrap: wrap;
}

.feature-badge {
  padding: var(--apml-space-1) var(--apml-space-3);
  border-radius: var(--apml-radius-full);
  font-size: var(--apml-text-xs);
  font-weight: var(--apml-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feature-badge.primary {
  background: var(--color-primary-subtle);
  color: var(--color-primary);
  border: 1px solid var(--color-primary-muted);
}

.feature-badge.success {
  background: var(--color-success-subtle);
  color: var(--color-success);
  border: 1px solid var(--color-success-muted);
}

.feature-badge.accent {
  background: var(--color-accent-subtle);
  color: var(--color-accent);
  border: 1px solid var(--color-accent-muted);
}

.feature-description {
  font-size: var(--apml-text-base);
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
  margin-bottom: var(--apml-space-6);
}

.feature-benefits h4 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-3);
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--apml-space-6) 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: var(--apml-space-2);
  margin-bottom: var(--apml-space-2);
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
}

.benefit-icon {
  color: var(--color-success);
  font-weight: var(--apml-font-weight-bold);
  margin-top: var(--apml-space-0-5);
}

.feature-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--apml-space-4);
  padding: var(--apml-space-4);
  background: var(--color-bg-glass);
  border-radius: var(--apml-radius-lg);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: var(--apml-text-2xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
}

.stat-label {
  font-size: var(--apml-text-sm);
  color: var(--color-text-tertiary);
  margin-top: var(--apml-space-1);
}

/* Feature Demo */
.feature-demo {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-2xl);
  padding: var(--apml-space-8);
  box-shadow: var(--shadow-lg);
}

.demo-title {
  font-size: var(--apml-text-xl);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-6);
  text-align: center;
}

/* Trinity Demo */
.trinity-flow {
  display: grid;
  gap: var(--apml-space-6);
}

.flow-step {
  display: flex;
  align-items: center;
  gap: var(--apml-space-4);
}

.step-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--apml-font-weight-bold);
  font-size: var(--apml-text-sm);
}

.step-content {
  flex: 1;
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-xl);
  padding: var(--apml-space-6);
}

.step-icon {
  font-size: var(--apml-text-2xl);
  margin-bottom: var(--apml-space-3);
}

.step-info h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-2);
}

.step-info p {
  color: var(--color-text-secondary);
  margin-bottom: var(--apml-space-4);
  line-height: var(--apml-leading-relaxed);
}

.step-code {
  margin-top: var(--apml-space-4);
}

.flow-arrow {
  align-self: center;
  color: var(--color-primary);
  font-size: var(--apml-text-2xl);
  font-weight: var(--apml-font-weight-bold);
}

/* Logical Demo */
.validation-flow {
  display: grid;
  gap: var(--apml-space-8);
}

.validation-input h5,
.validation-result .result-header {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
}

.validation-process {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--apml-space-4);
  padding: var(--apml-space-6);
  background: var(--color-bg-glass);
  border-radius: var(--apml-radius-xl);
}

.process-step {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
}

.step-status {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--apml-text-sm);
}

.step-status.success {
  background: var(--color-success-subtle);
  color: var(--color-success);
}

.step-label {
  font-size: var(--apml-text-sm);
  color: var(--color-text-secondary);
}

.validation-result {
  background: var(--color-success-subtle);
  border: 1px solid var(--color-success-muted);
  border-radius: var(--apml-radius-xl);
  padding: var(--apml-space-6);
}

.result-header {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  margin-bottom: var(--apml-space-4);
}

.result-icon {
  font-size: var(--apml-text-xl);
}

.result-text {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-success);
}

.result-details {
  display: grid;
  gap: var(--apml-space-2);
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-label {
  color: var(--color-text-secondary);
}

.detail-value.success {
  color: var(--color-success);
  font-weight: var(--apml-font-weight-semibold);
}

/* AI Demo */
.conversation-flow {
  display: grid;
  gap: var(--apml-space-4);
  max-height: 600px;
  overflow-y: auto;
}

.message {
  display: flex;
  gap: var(--apml-space-3);
}

.message.human {
  flex-direction: row;
}

.message.ai {
  flex-direction: row-reverse;
}

.message-avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-bg-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--apml-text-lg);
}

.message-content {
  flex: 1;
  max-width: 80%;
}

.message.ai .message-content {
  background: var(--color-primary-subtle);
  border: 1px solid var(--color-primary-muted);
}

.message.human .message-content {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
}

.message-content {
  border-radius: var(--apml-radius-xl);
  padding: var(--apml-space-4);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--apml-space-2);
}

.message-author {
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  font-size: var(--apml-text-sm);
}

.message-time {
  color: var(--color-text-muted);
  font-size: var(--apml-text-xs);
}

.message-text {
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
  margin-bottom: var(--apml-space-3);
}

.message-code {
  margin-top: var(--apml-space-3);
}

/* Platform Demo */
.platform-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--apml-space-6);
  align-items: center;
}

.source-apml h5,
.platform-header {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
}

.compilation-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--apml-space-2);
  color: var(--color-primary);
}

.arrow-icon {
  font-size: var(--apml-text-2xl);
  animation: pulse 2s infinite;
}

.target-platforms {
  display: grid;
  gap: var(--apml-space-4);
}

.platform-output {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-lg);
  padding: var(--apml-space-4);
}

.platform-icon {
  font-size: var(--apml-text-lg);
}

.platform-code {
  background: var(--color-bg-secondary);
  border-radius: var(--apml-radius-base);
  padding: var(--apml-space-3);
  overflow-x: auto;
}

.platform-code pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--apml-text-sm);
  color: var(--color-text-secondary);
  line-height: var(--apml-leading-relaxed);
}

/* Real-time Demo */
.realtime-editor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--apml-space-6);
  height: 400px;
}

.editor-pane h5,
.preview-pane h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
}

.live-editor {
  position: relative;
  height: 300px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-lg);
  overflow: hidden;
}

.live-textarea {
  position: absolute;
  inset: 0;
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  caret-color: var(--color-primary);
  padding: var(--apml-space-4);
  font-family: var(--font-mono);
  font-size: var(--apml-text-sm);
  line-height: var(--apml-leading-relaxed);
  resize: none;
  z-index: 2;
}

.editor-overlay {
  position: absolute;
  inset: 0;
  padding: var(--apml-space-4);
  font-family: var(--font-mono);
  font-size: var(--apml-text-sm);
  line-height: var(--apml-leading-relaxed);
  color: var(--color-text-secondary);
  pointer-events: none;
  white-space: pre;
  overflow: auto;
  z-index: 1;
}

.live-preview {
  height: 300px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-lg);
  display: flex;
  flex-direction: column;
}

.preview-header {
  padding: var(--apml-space-3) var(--apml-space-4);
  background: var(--color-bg-glass);
  border-bottom: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-lg) var(--apml-radius-lg) 0 0;
}

.compilation-status {
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  font-size: var(--apml-text-sm);
  color: var(--color-success);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-success);
}

.preview-content {
  flex: 1;
  padding: var(--apml-space-6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mock-component {
  text-align: center;
  background: white;
  color: var(--color-text-inverse);
  padding: var(--apml-space-6);
  border-radius: var(--apml-radius-lg);
  box-shadow: var(--shadow-md);
  min-width: 200px;
}

.mock-component h6 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  margin-bottom: var(--apml-space-3);
}

.mock-component p {
  color: var(--apml-neutral-600);
  margin-bottom: var(--apml-space-4);
  font-size: var(--apml-text-sm);
}

.mock-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--apml-space-2) var(--apml-space-4);
  border-radius: var(--apml-radius-base);
  font-weight: var(--apml-font-weight-medium);
  cursor: pointer;
}

/* Performance Demo */
.performance-metrics {
  display: grid;
  gap: var(--apml-space-8);
}

.metric-category h5 {
  font-size: var(--apml-text-lg);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--apml-space-4);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--apml-space-4);
}

.metric-item {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-lg);
  padding: var(--apml-space-4);
  text-align: center;
}

.metric-value {
  font-size: var(--apml-text-2xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
}

.metric-label {
  font-size: var(--apml-text-sm);
  color: var(--color-text-tertiary);
  margin-top: var(--apml-space-2);
}

.performance-chart {
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border-glass);
  border-radius: var(--apml-radius-lg);
  padding: var(--apml-space-6);
}

.chart-bars {
  display: grid;
  gap: var(--apml-space-4);
}

.benchmark-bar {
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: var(--apml-space-3);
  align-items: center;
}

.bar-container {
  background: var(--color-bg-secondary);
  border-radius: var(--apml-radius-full);
  height: 8px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: var(--apml-radius-full);
  transition: width var(--apml-duration-700) var(--apml-ease-out);
}

.bar-label {
  font-size: var(--apml-text-sm);
  color: var(--color-text-secondary);
}

.bar-value {
  font-size: var(--apml-text-sm);
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  text-align: right;
}

/* Feature Comparison */
.feature-comparison {
  margin-top: var(--apml-space-16);
  padding: var(--apml-space-12) var(--apml-space-8);
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px);
}

.comparison-header {
  text-align: center;
  margin-bottom: var(--apml-space-8);
}

.comparison-header h3 {
  font-size: var(--apml-text-3xl);
  font-weight: var(--apml-font-weight-bold);
  color: var(--color-text-primary);
}

.comparison-table {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--apml-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.comparison-row {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}

.comparison-row.header-row {
  background: var(--color-bg-glass);
}

.comparison-row:not(.header-row):nth-child(even) {
  background: var(--color-bg-glass);
}

.comparison-cell {
  padding: var(--apml-space-4) var(--apml-space-6);
  display: flex;
  align-items: center;
  gap: var(--apml-space-2);
  border-right: 1px solid var(--color-border-primary);
}

.comparison-cell:last-child {
  border-right: none;
}

.comparison-cell.aspect {
  font-weight: var(--apml-font-weight-semibold);
  color: var(--color-text-primary);
  background: var(--color-bg-glass);
}

.comparison-cell.traditional {
  color: var(--color-text-secondary);
}

.comparison-cell.apml {
  color: var(--color-success);
  font-weight: var(--apml-font-weight-medium);
}

.comparison-icon {
  font-size: var(--apml-text-lg);
}

/* Syntax highlighting for embedded code */
:deep(.apml-structure) { color: var(--color-secondary); font-weight: bold; }
:deep(.apml-type) { color: var(--color-accent); font-weight: 500; }
:deep(.apml-action) { color: var(--color-warning); font-weight: 500; }
:deep(.apml-property) { color: var(--color-primary); font-weight: 500; }
:deep(.apml-string) { color: var(--color-success); }
:deep(.apml-comment) { color: var(--color-text-muted); font-style: italic; }

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .feature-content {
    grid-template-columns: 1fr;
    gap: var(--apml-space-8);
  }
  
  .feature-info {
    position: static;
  }
  
  .platform-grid {
    grid-template-columns: 1fr;
    gap: var(--apml-space-4);
  }
  
  .compilation-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 768px) {
  .showcase-header {
    padding: var(--apml-space-8) var(--apml-space-4) var(--apml-space-6);
  }
  
  .showcase-title {
    font-size: var(--apml-text-2xl);
    flex-direction: column;
    gap: var(--apml-space-2);
  }
  
  .feature-display {
    padding: var(--apml-space-6) var(--apml-space-4);
  }
  
  .tabs-container {
    gap: var(--apml-space-2);
  }
  
  .tab-button {
    padding: var(--apml-space-2) var(--apml-space-3);
  }
  
  .tab-label {
    display: none;
  }
  
  .realtime-editor {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .comparison-table {
    font-size: var(--apml-text-sm);
  }
  
  .comparison-row {
    grid-template-columns: 1fr;
  }
  
  .comparison-cell {
    padding: var(--apml-space-3) var(--apml-space-4);
    border-right: none;
    border-bottom: 1px solid var(--color-border-primary);
  }
  
  .comparison-cell.aspect {
    background: var(--color-primary-subtle);
    font-weight: var(--apml-font-weight-bold);
  }
  
  .flow-step {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .flow-arrow {
    align-self: center;
    transform: rotate(90deg);
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
.tab-button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

.live-textarea:focus-visible {
  outline: none;
}
</style>