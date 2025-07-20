<template>
  <div class="research-methodology-page">
    <header class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/patterns">Pattern Library</router-link>
          <span class="separator">→</span>
          <span class="current">Research Methodology Patterns</span>
        </nav>
        <h1 class="page-title">User Research & Insight Generation</h1>
        <p class="page-subtitle">APML-based frameworks for user research, behavioral analysis, and insight transformation into actionable solutions</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="framework-overview">
          <APMLCodeBlock :code="researchCode" />
        </div>

        <div class="methods-grid">
          <router-link 
            to="/patterns/research-methodology/research-planning"
            class="method-category-card"
          >
            <div class="card-icon">📋</div>
            <h3>Research Planning & Design</h3>
            <p>Method selection, participant recruitment, research canvas, interview guide generation</p>
            <span class="method-count">5 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/research-methodology/data-collection"
            class="method-category-card"
          >
            <div class="card-icon">🔍</div>
            <h3>Data Collection Techniques</h3>
            <p>Ethnographic research, usability testing, surveys, behavioral observation</p>
            <span class="method-count">8 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/research-methodology/analysis-synthesis"
            class="method-category-card"
          >
            <div class="card-icon">🧠</div>
            <h3>Analysis & Synthesis</h3>
            <p>Thematic analysis, statistical testing, behavioral segmentation, insight transformation</p>
            <span class="method-count">6 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/research-methodology/persona-development"
            class="method-category-card"
          >
            <div class="card-icon">👤</div>
            <h3>Persona Development</h3>
            <p>User archetype synthesis, persona validation, Jobs-to-be-Done mapping</p>
            <span class="method-count">4 Methods</span>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import APMLCodeBlock from '../../components/APMLCodeBlock.vue'

const researchCode = ref(`app ResearchMethodologyPatterns:
  title: "Comprehensive User Research & Insight Generation Patterns"
  description: "APML-based frameworks for user research, behavioral analysis, and insight transformation into actionable solutions"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data ResearchMethod:
  name: text required
  type: qualitative | quantitative | mixed_methods
  participants_needed: number required
  duration: text required
  complexity: simple | moderate | complex
  output_type: insights | metrics | behaviors | attitudes
  best_used_for: list of text

interface research_planning:
  show research_method_selector:
    title: "Choose Your Research Approach"
    subtitle: "Select methods based on your questions and constraints"
    
    display method_categories:
      discovery_methods:
        title: "Discovery & Exploration"
        description: "Understand problems and opportunities"
        methods: ["Ethnographic Research", "Contextual Inquiry", "Diary Studies", "Generative Interviews"]
        
      validation_methods:
        title: "Validation & Testing"
        description: "Test concepts and measure behavior"
        methods: ["Usability Testing", "A/B Testing", "Prototype Testing", "Card Sorting"]
        
      measurement_methods:
        title: "Measurement & Analytics"
        description: "Quantify behavior and performance"
        methods: ["Analytics Analysis", "Survey Research", "Heatmap Analysis", "Conversion Funnel Analysis"]

logic research_analysis_patterns:
  pattern thematic_analysis:
    when processing_qualitative_data:
      organize raw_data:
        transcribe interviews_and_observations
        create data_inventory with participant_mapping
        establish data_quality_checks
        
      identify initial_patterns:
        code interesting_or_relevant_data_segments
        group similar_codes into_categories
        look for recurring_themes across_participants
        
      develop theme_structure:
        define clear_theme_descriptions
        collect supporting_evidence for each_theme
        identify relationships_between_themes
        validate themes_against_original_data
        
      extract actionable_insights:
        translate themes_into_design_implications
        prioritize insights_by_impact_and_frequency
        connect insights_to_business_objectives
        
  pattern behavioral_segmentation:
    when identifying_distinct_user_groups:
      analyze behavioral_data:
        usage_frequency_and_intensity
        feature_adoption_patterns
        task_completion_success_rates
        support_request_frequencies
        
      identify segmentation_variables:
        high_value_behaviors that_differentiate_users
        stable_characteristics that_predict_behavior
        actionable_segments that_can_be_targeted`)
</script>

<style scoped>
.research-methodology-page {
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
  padding: 2rem 0 4rem;
}

.breadcrumb {
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.breadcrumb a {
  color: #6366f1;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
}

.current {
  color: #f8fafc;
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
}

.page-content {
  padding-bottom: 4rem;
}

.framework-overview {
  margin-bottom: 4rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.method-category-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
}

.method-category-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.method-category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.method-category-card p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.method-count {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .methods-grid {
    grid-template-columns: 1fr;
  }
}
</style>