<template>
  <div class="business-strategy-page">
    <header class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/patterns">Pattern Library</router-link>
          <span class="separator">→</span>
          <span class="current">Business Strategy Patterns</span>
        </nav>
        <h1 class="page-title">Strategic Business Design & Model Innovation</h1>
        <p class="page-subtitle">APML-based frameworks for business model design, competitive strategy, and organizational transformation</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="framework-overview">
          <APMLCodeBlock :code="strategyCode" />
        </div>

        <div class="methods-grid">
          <router-link 
            to="/patterns/business-strategy/business-models"
            class="method-category-card"
          >
            <div class="card-icon">📊</div>
            <h3>Business Model Design</h3>
            <p>Business Model Canvas, Lean Canvas, Platform Strategy, Ecosystem Design</p>
            <span class="method-count">6 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/business-strategy/competitive-strategy"
            class="method-category-card"
          >
            <div class="card-icon">⚔️</div>
            <h3>Competitive Strategy</h3>
            <p>Porter's Five Forces, Blue Ocean Strategy, SWOT Analysis, Competitive Positioning</p>
            <span class="method-count">5 Methods</span>
          </router-link>

          <router-link 
            to="/patterns/business-strategy/digital-transformation"
            class="method-category-card"
          >
            <div class="card-icon">🚀</div>
            <h3>Digital Transformation</h3>
            <p>Digital Business Models, Data Strategy, Agile Implementation, Innovation Management</p>
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

const strategyCode = ref(`app BusinessStrategyPatterns:
  title: "Strategic Business Design & Model Innovation Patterns"
  description: "APML-based frameworks for business model design, competitive strategy, and organizational transformation"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data BusinessModel:
  value_propositions: list of text required
  customer_segments: list of text required
  revenue_streams: list of text required
  key_partnerships: list of text
  key_resources: list of text required
  key_activities: list of text required
  cost_structure: list of text required
  channels: list of text required
  customer_relationships: list of text required

interface strategic_planning:
  show business_model_canvas:
    title: "Business Model Design Workshop"
    
    display canvas_sections:
      value_propositions_section:
        title: "Value Propositions"
        prompt: "What value do you deliver to customers?"
        examples: "Cost reduction, convenience, performance, customization"
        
      customer_segments_section:
        title: "Customer Segments"
        prompt: "Who are your most important customers?"
        examples: "Mass market, niche market, segmented, diversified"
        
      revenue_streams_section:
        title: "Revenue Streams"
        prompt: "How do you generate revenue from each segment?"
        examples: "Asset sale, subscription, licensing, advertising"

logic strategic_decision_frameworks:
  pattern swot_analysis_execution:
    when strategic_situation_assessment_needed:
      identify internal_strengths:
        core_competencies and unique_resources
        strong_brand_reputation and customer_loyalty
        operational_efficiencies and cost_advantages
        talented_team and organizational_culture
        
      identify internal_weaknesses:
        resource_constraints and capability_gaps
        operational_inefficiencies and quality_issues
        weak_brand_positioning or customer_perception
        organizational_structure_limitations
        
      identify external_opportunities:
        market_growth_trends and emerging_segments
        technological_advancements and innovations
        regulatory_changes_creating_new_possibilities
        competitor_weaknesses_to_exploit
        
      identify external_threats:
        competitive_pressure and market_saturation
        economic_downturns and regulatory_restrictions
        technological_disruption and changing_customer_preferences
        supply_chain_vulnerabilities
        
  pattern blue_ocean_strategy:
    when seeking_uncontested_market_space:
      map current_competitive_landscape:
        identify factors_industry_competes_on
        plot_competitor_positions across_these_factors
        recognize areas_of_intense_competition
        
      eliminate factors_industry_takes_for_granted:
        question_assumptions_about_necessary_features
        remove_costly_features_that_add_little_value
        challenge_traditional_industry_boundaries`)
</script>

<style scoped>
.business-strategy-page {
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