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

        <!-- APML Code Preview -->
        <div class="code-preview">
          <div class="code-header">
            <div class="status">✅ Logically Complete</div>
          </div>
          
          <div class="code-content">
            <div class="code-input">
              <pre><code><span class="keyword">app</span> <span class="app-name">CityRep</span><span class="punctuation">:</span>
  <span class="property">title</span><span class="punctuation">:</span> <span class="string">"CityRep"</span>
  <span class="property">description</span><span class="punctuation">:</span> <span class="string">"Share your experiences living in and visiting cities worldwide"</span>
  <span class="property">version</span><span class="punctuation">:</span> <span class="string">"1.0.0"</span>
  <span class="property">apml_specification_version</span><span class="punctuation">:</span> <span class="string">"0.9.0"</span>

<span class="keyword">data</span> <span class="type">User</span><span class="punctuation">:</span>
  <span class="property">id</span><span class="punctuation">:</span> <span class="type">unique_id</span>
  <span class="property">name</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">required</span>
  <span class="property">email</span><span class="punctuation">:</span> <span class="type">email</span> <span class="modifier">required unique</span>
  <span class="property">profile_photo</span><span class="punctuation">:</span> <span class="type">image_url</span> <span class="modifier">optional</span>
  <span class="property">auth_provider</span><span class="punctuation">:</span> <span class="enum">google | facebook | email</span> <span class="modifier">required</span>
  <span class="property">total_reviews</span><span class="punctuation">:</span> <span class="type">number</span> <span class="modifier">default</span> <span class="number">0</span>

<span class="keyword">data</span> <span class="type">City</span><span class="punctuation">:</span>
  <span class="property">name</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">required</span>
  <span class="property">country</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">required</span>
  <span class="property">added_by</span><span class="punctuation">:</span> <span class="type">User</span> <span class="modifier">required</span>
  <span class="property">average_rating</span><span class="punctuation">:</span> <span class="type">number</span> <span class="modifier">default</span> <span class="number">0</span>
  <span class="property">total_reviews</span><span class="punctuation">:</span> <span class="type">number</span> <span class="modifier">default</span> <span class="number">0</span>

<span class="keyword">data</span> <span class="type">Review</span><span class="punctuation">:</span>
  <span class="property">city_id</span><span class="punctuation">:</span> <span class="type">City</span> <span class="modifier">required</span>
  <span class="property">user_id</span><span class="punctuation">:</span> <span class="type">User</span> <span class="modifier">required</span>
  <span class="property">rating</span><span class="punctuation">:</span> <span class="enum">1 | 2 | 3 | 4 | 5</span> <span class="modifier">required</span>
  <span class="property">title</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">required</span>
  <span class="property">review_text</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">required</span>
  <span class="property">helpful_votes</span><span class="punctuation">:</span> <span class="type">number</span> <span class="modifier">default</span> <span class="number">0</span>

<span class="keyword">interface</span> <span class="interface-name">city_discovery</span><span class="punctuation">:</span>
  <span class="ui-keyword">show</span> <span class="ui-element">search_section</span><span class="punctuation">:</span>
    <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Find Your Next City"</span>
    <span class="property">search_input</span><span class="punctuation">:</span> <span class="type">text</span> <span class="modifier">placeholder</span> <span class="string">"Search cities, countries..."</span>
    
  <span class="ui-keyword">show</span> <span class="ui-element">featured_cities</span><span class="punctuation">:</span>
    <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Popular Destinations"</span>
    <span class="flow-keyword">for each</span> <span class="variable">city</span> <span class="flow-keyword">in</span> <span class="type">City</span> <span class="flow-keyword">order by</span> <span class="property">average_rating</span> <span class="flow-keyword">desc</span><span class="punctuation">:</span>
      <span class="ui-keyword">display</span> <span class="ui-element">city_card</span><span class="punctuation">:</span>
        <span class="property">name</span><span class="punctuation">:</span> <span class="variable">city.name</span>
        <span class="property">rating</span><span class="punctuation">:</span> <span class="variable">city.average_rating</span> <span class="modifier">stars</span>
        <span class="property">review_count</span><span class="punctuation">:</span> <span class="variable">city.total_reviews</span> <span class="modifier">reviews</span>

<span class="keyword">logic</span> <span class="logic-name">review_processing</span><span class="punctuation">:</span>
  <span class="process-keyword">process</span> <span class="process-name">submit_review</span><span class="punctuation">:</span>
    <span class="flow-keyword">when</span> <span class="variable">user</span> <span class="action">submits</span> <span class="ui-element">review_form</span><span class="punctuation">:</span>
      <span class="flow-keyword">if</span> <span class="variable">user</span> <span class="condition">is authenticated</span><span class="punctuation">:</span>
        <span class="action">validate</span> <span class="modifier">all required fields</span>
        <span class="action">create</span> <span class="type">Review</span> <span class="modifier">record</span>
        <span class="action">update</span> <span class="property">City.average_rating</span>
        <span class="action">redirect</span> <span class="flow-keyword">to</span> <span class="ui-element">city_details</span>
      <span class="flow-keyword">else</span><span class="punctuation">:</span>
        <span class="action">redirect</span> <span class="flow-keyword">to</span> <span class="ui-element">authentication</span></code></pre>
            </div>
            <div class="arrow">→</div>
            <div class="code-output">
              <div class="output">Production Vue.js App</div>
              <div class="output-details">Complete city review platform with authentication, search, and user-generated content</div>
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

.code-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.status {
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 600;
}

/* APML Syntax Highlighting */
.keyword { color: #8b5cf6; font-weight: 600; }
.app-name, .type, .interface-name, .logic-name { color: #06b6d4; font-weight: 600; }
.property { color: #f59e0b; }
.string { color: #10b981; }
.punctuation { color: #64748b; }
.modifier { color: #ec4899; font-weight: 500; }
.enum { color: #3b82f6; }
.number { color: #f97316; }
.ui-keyword { color: #8b5cf6; font-weight: 500; }
.ui-element { color: #06b6d4; }
.flow-keyword { color: #6366f1; font-weight: 500; }
.variable { color: #eab308; }
.action { color: #ef4444; font-weight: 500; }
.process-keyword { color: #8b5cf6; font-weight: 600; }
.process-name { color: #06b6d4; font-weight: 600; }
.condition { color: #10b981; }

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
  margin-bottom: 0.5rem;
}

.output-details {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.4;
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