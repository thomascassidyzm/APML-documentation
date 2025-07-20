<template>
  <div class="design-intelligence-page">
    <header class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/patterns">Pattern Library</router-link>
          <span class="separator">→</span>
          <span class="current">Design Intelligence Framework</span>
        </nav>
        <h1 class="page-title">Design Intelligence Framework</h1>
        <p class="page-subtitle">Comprehensive methodologies for human-centered problem solving</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="framework-overview">
          <APMLCodeBlock :code="frameworkCode" />
        </div>

        <div class="methods-grid">
          <router-link 
            to="/patterns/design-intelligence/user-research"
            class="method-category-card"
          >
            <div class="card-icon">👥</div>
            <h3>User Research & Empathy</h3>
            <p>User journey mapping, Jobs-to-be-done, persona generation, empathy mapping</p>
            <span class="method-count">8 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/design-intelligence/problem-framing"
            class="method-category-card"
          >
            <div class="card-icon">🎯</div>
            <h3>Problem Definition & Framing</h3>
            <p>How Might We statements, Five Whys, systems thinking, constraint analysis</p>
            <span class="method-count">6 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/design-intelligence/ideation"
            class="method-category-card"
          >
            <div class="card-icon">💡</div>
            <h3>Ideation & Solution Generation</h3>
            <p>Brainstorming, SCAMPER, analogical thinking, affinity mapping</p>
            <span class="method-count">7 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/design-intelligence/validation"
            class="method-category-card"
          >
            <div class="card-icon">✅</div>
            <h3>Validation & Testing</h3>
            <p>Hypothesis-driven design, prototyping, A/B testing, learning validation</p>
            <span class="method-count">5 Methods</span>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import APMLCodeBlock from '../../components/APMLCodeBlock.vue'

const frameworkCode = ref(`app DesignIntelligenceFramework:
  title: "Complete Pattern Library for Design Thinking & Solution Generation"
  description: "Comprehensive APML-based methodologies for human-centered problem solving and innovation"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data DesignMethod:
  id: unique_id
  name: text required
  category: user_research | problem_framing | ideation | validation | business_model | service_design | systems_thinking
  complexity_level: simple | intermediate | advanced
  time_required: quick | medium | extensive
  team_size: individual | small_team | large_team
  required_skills: list of text
  tools_needed: list of text
  expected_outcomes: list of text

interface methodology_discovery:
  show framework_library:
    title: "Design Intelligence Pattern Library"
    subtitle: "Choose methodologies based on your context and goals"
    
    display category_overview:
      user_research_section:
        title: "Understanding Users & Context"
        methods_count: count methods where category is user_research
        complexity_range: "Simple to Advanced"
        
      problem_framing_section:
        title: "Defining & Framing Problems"
        methods_count: count methods where category is problem_framing
        complexity_range: "Intermediate to Advanced"
        
      ideation_section:
        title: "Generating Solutions"
        methods_count: count methods where category is ideation
        complexity_range: "Simple to Intermediate"
        
      validation_section:
        title: "Testing & Validation"
        methods_count: count methods where category is validation
        complexity_range: "Intermediate to Advanced"

logic intelligent_recommendation_engine:
  process context_analysis:
    when user describes problem_context:
      extract key_characteristics:
        complexity_indicators from problem_description
        stakeholder_involvement from context
        time_constraints from timeline
        resource_availability from team_and_budget
        
      classify problem_type:
        if mentions "customer satisfaction" or "user experience":
          set primary_focus to customer_experience
        if mentions "revenue" or "growth" or "market":
          set primary_focus to business_strategy
        if mentions "new features" or "innovation":
          set primary_focus to product_innovation
          
      assess team_readiness:
        match experience_level to method_complexity
        validate team_size against method_requirements
        identify skill_gaps and training_needs

logic framework_transformation_patterns:
  pattern user_journey_to_solution:
    when user_research reveals journey_pain_points:
      identify friction_moments in current_experience
      map emotional_states at each_touchpoint
      prioritize improvement_opportunities by impact_and_effort
      generate solution_concepts targeting highest_priority_friction
      
  pattern jobs_to_be_done_analysis:
    when users struggle_to_articulate_needs:
      focus on job_context rather than demographics
      identify functional_emotional_social jobs
      map job_executor_journey from awareness_to_completion
      design solutions that help_users_accomplish_jobs_better
      
  pattern five_whys_root_cause:
    when surface_problem_symptoms_appear:
      ask "why does this problem occur" five_times_minimum
      document each_layer of causation
      identify systemic_vs_symptomatic_issues
      target solutions at root_cause_level`)
</script>

<style scoped>
.design-intelligence-page {
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