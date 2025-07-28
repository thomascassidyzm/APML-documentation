<template>
  <div class="content-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Development Engine (ADE)</h1>
        <p class="page-subtitle">From Conversation to Deployed App in Minutes</p>
      </div>
    </header>
    
    <main class="page-content">
      <div class="container">
        
        <div class="content-section">
          <h2>🚀 Quick Start</h2>
          <p>The APML Development Engine (ADE) is a complete ecosystem for creating, visualizing, and deploying applications from pure intent.</p>
          
          <div class="quick-start-steps">
            <div class="step">
              <h3>1. Generate APML (2 minutes)</h3>
              <p>Use any LLM with our <a href="/llm-reference.txt" target="_blank">LLM Reference Guide</a></p>
            </div>
            <div class="step">
              <h3>2. Visualize (30 seconds)</h3>
              <p>Paste APML into <a href="https://ade.apml.dev" target="_blank">ADE</a> for interactive mockups</p>
            </div>
            <div class="step">
              <h3>3. Deploy (30 seconds)</h3>
              <p>One-click deployment to Netlify with our deployment system</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2>📚 Documentation</h2>
          <div class="doc-links">
            <div class="doc-card">
              <h3>🤖 LLM Reference Guide</h3>
              <p>Complete reference for any LLM to generate APML specifications</p>
              <a href="/llm-reference.txt" target="_blank" class="doc-link">View Guide →</a>
            </div>
            
            <div class="doc-card">
              <h3>🏗️ ADE Ecosystem</h3>
              <p>Complete technical specification of the ADE ecosystem</p>
              <a href="/ade-ecosystem.txt" target="_blank" class="doc-link">View Ecosystem →</a>
            </div>
            
            <div class="doc-card">
              <h3>🚀 Deployment Guide</h3>
              <p>Step-by-step guide to deploy APML apps to live websites</p>
              <a href="/ade-deployment-guide.txt" target="_blank" class="doc-link">View Guide →</a>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2>🔄 The Complete Workflow</h2>
          <div class="workflow">
            <div class="phase">
              <h3>Phase 1: LLM Generation</h3>
              <p><strong>Any LLM</strong> (Claude, ChatGPT, Gemini) + Reference Guide → APML</p>
            </div>
            <div class="arrow">→</div>
            <div class="phase">
              <h3>Phase 2: ADE Visualization</h3>
              <p><strong>ade.apml.dev</strong> → Interactive mockups + testing + deployment</p>
            </div>
            <div class="arrow">→</div>
            <div class="phase">
              <h3>Phase 3: Live Iteration</h3>
              <p><strong>Live Site</strong> → User feedback → LLM updates → Redeploy</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2>✨ Key Features</h2>
          <div class="features-grid">
            <div class="feature">
              <h4>🎨 Interactive Mockups</h4>
              <p>See your APML as beautiful mobile interfaces</p>
            </div>
            <div class="feature">
              <h4>📊 Flow Diagrams</h4>
              <p>Visualize user journeys with Mermaid diagrams</p>
            </div>
            <div class="feature">
              <h4>🧪 Automated Testing</h4>
              <p>Test all possible user paths automatically</p>
            </div>
            <div class="feature">
              <h4>📝 Change Requests</h4>
              <p>Easy feedback loop with any LLM</p>
            </div>
            <div class="feature">
              <h4>⚡ One-Click Deploy</h4>
              <p>Deploy to Netlify in under 30 seconds</p>
            </div>
            <div class="feature">
              <h4>🔄 Continuous Iteration</h4>
              <p>Live site feedback directly to LLMs</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2>🎯 Success Metrics</h2>
          <div class="metrics">
            <div class="metric">
              <strong>< 5 minutes</strong>
              <span>Conversation to live website</span>
            </div>
            <div class="metric">
              <strong>< 30 seconds</strong>
              <span>APML to visualization</span>
            </div>
            <div class="metric">
              <strong>< 30 seconds</strong>
              <span>Deploy to production</span>
            </div>
            <div class="metric">
              <strong>100%</strong>
              <span>Mobile responsive</span>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2>🚀 Get Started</h2>
          <div class="cta-section">
            <p>Ready to build your first APML application?</p>
            <div class="cta-buttons">
              <a href="https://ade.apml.dev" target="_blank" class="primary-button">Launch ADE →</a>
              <a href="/llm-reference.txt" target="_blank" class="secondary-button">View LLM Guide</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(false)

onMounted(() => {
  console.log('ADE Documentation page loaded')
})
</script>

<style scoped>
.content-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.page-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.page-content {
  padding: 4rem 0;
}

.content-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.quick-start-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  padding: 1.5rem;
  border: 2px solid #f3f4f6;
  border-radius: 0.5rem;
  text-align: center;
}

.step h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.doc-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.doc-card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.doc-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.doc-link {
  display: inline-block;
  margin-top: 1rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.doc-link:hover {
  text-decoration: underline;
}

.workflow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.phase {
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  text-align: center;
}

.phase h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.arrow {
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
}

.feature h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.metric {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 0.75rem;
}

.metric strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-section {
  text-align: center;
  margin-top: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.primary-button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
}

.secondary-button {
  background: white;
  color: #667eea;
  padding: 1rem 2rem;
  border: 2px solid #667eea;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .workflow {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}
</style>

<style scoped>
.content-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 6rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid #334155;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin: 0;
}

.page-content {
  padding: 4rem 0;
}

.content-section {
  background: rgba(51, 65, 85, 0.3);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.content-section p {
  color: #cbd5e1;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 4rem 0 2rem;
  }
}
</style>