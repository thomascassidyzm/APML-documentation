<template>
  <div class="home-page">
    <!-- Simplified Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-badge">
          <span>✨ APML v0.9.0 - Grammar Foundation Release</span>
        </div>
        
        <h1 class="hero-title">
          Code that reads like<br>
          <span class="highlight">conversation</span>
        </h1>
        
        <p class="hero-subtitle">
          Build applications through natural human-AI collaboration. 
          More natural than markdown, more powerful than code.
        </p>

        <!-- Simple Code Preview -->
        <div class="code-preview">
          <div class="code-tabs">
            <button class="tab active">Simple App</button>
            <button class="tab">Business Logic</button>
            <button class="tab">AI Integration</button>
            <div class="status">Compiling...</div>
          </div>
          
          <div class="code-content">
            <div class="code-input">
              <pre><code>app TaskManager:
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
        style: completed</code></pre>
            </div>
            <div class="arrow">→</div>
            <div class="code-output">
              <div class="output">Vue.js Component</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="hero-actions">
          <a href="/playground" class="btn-primary">
            🚀 Try APML Playground
          </a>
          <a href="/overview.txt" class="btn-secondary">
            📖 View Documentation
          </a>
        </div>

        <!-- Feature Pills -->
        <div class="feature-pills">
          <div class="pill">⚡ Instant Compilation</div>
          <div class="pill">🎯 Logically Complete</div>
          <div class="pill">🌐 Multi-Platform</div>
        </div>
      </div>
      
      <!-- Trinity Principle -->
      <div class="trinity-section">
        <h2>The Trinity Principle</h2>
        <div class="trinity-nodes">
          <div class="node">
            <div class="icon">👤</div>
            <div class="label">App → User</div>
            <div class="desc">Display & Output</div>
          </div>
          <div class="node">
            <div class="icon">🎯</div>
            <div class="label">User → App</div>
            <div class="desc">Input & Commands</div>
          </div>
          <div class="node">
            <div class="icon">⚙️</div>
            <div class="label">App → App</div>
            <div class="desc">Logic & Processing</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Simplified homepage - minimal JavaScript needed
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
  color: #f8fafc;
  padding: 2rem 0;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.code-preview {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.code-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.tab {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  color: #94a3b8;
  cursor: pointer;
}

.tab.active {
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
}

.status {
  color: #10b981;
  font-size: 0.875rem;
}

.code-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  padding: 1.5rem;
  align-items: center;
}

.code-input {
  text-align: left;
}

.code-input pre {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.arrow {
  font-size: 1.5rem;
  color: #6366f1;
}

.code-output {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.output {
  color: #10b981;
  font-weight: 600;
  font-size: 1.125rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.btn-secondary {
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.feature-pills {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.pill {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #94a3b8;
}

.trinity-section {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem;
}

.trinity-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.trinity-nodes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.node {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.node .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.node .label {
  font-weight: 600;
  color: #a5b4fc;
  margin-bottom: 0.5rem;
}

.node .desc {
  color: #94a3b8;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .trinity-nodes {
    grid-template-columns: 1fr;
  }
  
  .code-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-pills {
    flex-direction: column;
    align-items: center;
  }
}
</style>