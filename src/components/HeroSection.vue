<template>
  <section class="enhanced-hero-section">
    <!-- Animated Background Elements -->
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
      <div class="floating-particles">
        <div v-for="i in 15" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="hero-container">
      <!-- Main Content -->
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">✨</span>
          <span>APML v0.9.0 - Grammar Foundation Release</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-line">Code that reads like</span>
          <span class="title-highlight">conversation</span>
        </h1>
        
        <p class="hero-subtitle">
          Build applications through natural human-AI collaboration. 
          More natural than markdown, more powerful than code.
        </p>

        <!-- Interactive APML Preview -->
        <div class="hero-code-preview">
          <div class="code-header">
            <div class="code-tabs">
              <button 
                v-for="(example, key) in codeExamples" 
                :key="key"
                @click="activeExample = key"
                :class="['tab', { active: activeExample === key }]"
              >
                {{ example.title }}
              </button>
            </div>
            <div class="compilation-status">
              <div class="status-indicator" :class="compilationStatus"></div>
              <span>{{ compilationMessage }}</span>
            </div>
          </div>
          <div class="code-content">
            <div class="code-input">
              <APMLCodeBlock :code="currentExample.code" />
            </div>
            <div class="compilation-arrow">
              <div class="arrow-icon">→</div>
              <span>Compiles to</span>
            </div>
            <div class="code-output">
              <div class="output-format">{{ currentExample.output }}</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="hero-actions">
          <button class="cta-primary" @click="$emit('try-playground')">
            <span class="button-icon">🚀</span>
            Try APML Playground
            <div class="button-glow"></div>
          </button>
          <button class="cta-secondary" @click="$emit('view-docs')">
            <span class="button-icon">📖</span>
            View Documentation
          </button>
        </div>

        <!-- Feature Highlights -->
        <div class="feature-highlights">
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <span>Instant Compilation</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <span>Logically Complete</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🌐</div>
            <span>Multi-Platform</span>
          </div>
        </div>
      </div>

      <!-- Trinity Principle Visualization -->
      <div class="trinity-visualization">
        <div class="trinity-title">The Trinity Principle</div>
        <div class="trinity-diagram">
          <div class="trinity-node app-to-user">
            <div class="node-icon">👤</div>
            <div class="node-label">App → User</div>
            <div class="node-desc">Display & Output</div>
          </div>
          <div class="trinity-node user-to-app">
            <div class="node-icon">🎯</div>
            <div class="node-label">User → App</div>
            <div class="node-desc">Input & Commands</div>
          </div>
          <div class="trinity-node app-to-app">
            <div class="node-icon">⚙️</div>
            <div class="node-label">App → App</div>
            <div class="node-desc">Logic & Processing</div>
          </div>
          <div class="trinity-connections">
            <div class="connection connection-1"></div>
            <div class="connection connection-2"></div>
            <div class="connection connection-3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import APMLCodeBlock from './APMLCodeBlock.vue'

// Emits
defineEmits(['try-playground', 'view-docs'])

// Reactive data
const activeExample = ref('simple')
const compilationStatus = ref('success')
const compilationMessage = ref('Logically Complete ✓')

// Code examples for interactive preview
const codeExamples = ref({
  simple: {
    title: 'Simple App',
    code: `app TaskManager:
  title: My Tasks
  
data Task:
  name: text required
  completed: boolean default false
  
interface:
  show task_list:
    title: "Your Tasks"
    for each task:
      display task.name
      when task.completed:
        style: completed`,
    output: 'Vue.js Component'
  },
  business: {
    title: 'Business Logic',
    code: `data Customer:
  email: email required unique
  subscription: basic | premium | enterprise
  
logic:
  when customer.subscription is premium:
    grant access_to_advanced_features
    notify "Welcome to Premium!"
    
  when customer.payment_failed:
    send payment_reminder_email
    schedule retry_payment in 3_days`,
    output: 'Business Workflow'
  },
  ai: {
    title: 'AI Integration',
    code: `interface:
  show ai_assistant:
    title: "AI Content Generator"
    
    when user.asks_question:
      process with llm_model
      display generated_response
      save to conversation_history
      
    when user.requests_summary:
      analyze conversation_history
      generate intelligent_summary`,
    output: 'AI-Powered Feature'
  }
})

const currentExample = computed(() => codeExamples.value[activeExample.value])

// Particle animation styles
const getParticleStyle = (index) => {
  const delay = index * 0.2
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const duration = Math.random() * 10 + 15
  
  return {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

// Simulate compilation status changes
onMounted(() => {
  setInterval(() => {
    const statuses = [
      { status: 'success', message: 'Logically Complete ✓' },
      { status: 'validating', message: 'Validating...' },
      { status: 'compiling', message: 'Compiling...' }
    ]
    
    const current = statuses[Math.floor(Math.random() * statuses.length)]
    compilationStatus.value = current.status
    compilationMessage.value = current.message
    
    if (current.status !== 'success') {
      setTimeout(() => {
        compilationStatus.value = 'success'
        compilationMessage.value = 'Logically Complete ✓'
      }, 1500)
    }
  }, 8000)
})
</script>

<style scoped>
.enhanced-hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #374151 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

/* Animated Background */
.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  top: 50%;
  right: -150px;
  animation-delay: -5s;
}

.orb-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
  bottom: -150px;
  left: 50%;
  animation-delay: -10s;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
  background-size: 50px 50px;
  animation: gridMove 30s linear infinite;
}

.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: rgba(99, 102, 241, 0.6);
  border-radius: 50%;
  animation: particleFloat 15s ease-in-out infinite;
}

/* Hero Container */
.hero-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

/* Main Content */
.hero-content {
  max-width: 800px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: #a5b4fc;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  animation: glow 2s ease-in-out infinite alternate;
}

.badge-icon {
  font-size: 1rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #f8fafc;
}

.title-line {
  display: block;
  color: #e2e8f0;
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
}

/* Interactive Code Preview */
.hero-code-preview {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  margin-bottom: 3rem;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.code-tabs {
  display: flex;
  gap: 0.5rem;
}

.tab {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  color: #94a3b8;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab.active,
.tab:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

.compilation-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #10b981;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
}

.status-indicator.validating {
  background: #f59e0b;
  animation: pulse 1s infinite;
}

.status-indicator.compiling {
  background: #06b6d4;
  animation: pulse 1s infinite;
}

.code-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  padding: 1.5rem;
  align-items: center;
}

.code-input {
  min-height: 200px;
}

.compilation-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  font-weight: 500;
}

.arrow-icon {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

.code-output {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.output-format {
  color: #10b981;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
}

/* Action Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  overflow: hidden;
}

.cta-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
}

.button-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-primary:hover .button-glow {
  opacity: 1;
}

.cta-secondary {
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.cta-secondary:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  transform: translateY(-1px);
}

.button-icon {
  font-size: 1.125rem;
}

/* Feature Highlights */
.feature-highlights {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
}

.feature-icon {
  font-size: 1.125rem;
}

/* Trinity Visualization */
.trinity-visualization {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.trinity-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 2rem;
}

.trinity-diagram {
  position: relative;
  height: 300px;
}

.trinity-node {
  position: absolute;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  width: 120px;
  transition: all 0.3s ease;
}

.trinity-node:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: scale(1.05);
}

.app-to-user {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.user-to-app {
  bottom: 0;
  left: 0;
}

.app-to-app {
  bottom: 0;
  right: 0;
}

.node-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.node-label {
  font-weight: 600;
  color: #a5b4fc;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.node-desc {
  color: #94a3b8;
  font-size: 0.75rem;
}

.trinity-connections {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.connection {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
  border-radius: 1px;
}

.connection-1 {
  top: 50%;
  left: 25%;
  width: 50%;
  transform: translateY(-50%) rotate(25deg);
}

.connection-2 {
  top: 50%;
  left: 25%;
  width: 50%;
  transform: translateY(-50%) rotate(-25deg);
}

.connection-3 {
  bottom: 60px;
  left: 15%;
  width: 70%;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(1deg); }
  66% { transform: translateY(10px) rotate(-1deg); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes glow {
  0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.2); }
  100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
  50% { transform: translateY(-100px) translateX(50px); opacity: 1; }
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .trinity-visualization {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }
  
  .code-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .compilation-arrow {
    transform: rotate(90deg);
  }
  
  .arrow-icon {
    transform: rotate(-90deg);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .feature-highlights {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .trinity-diagram {
    height: 400px;
  }
  
  .app-to-user {
    top: 0;
  }
  
  .user-to-app {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
  .app-to-app {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
.tab:focus-visible,
.cta-primary:focus-visible,
.cta-secondary:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}
</style>