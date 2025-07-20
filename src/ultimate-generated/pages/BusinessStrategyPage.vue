<template>
  <div class="business-strategy-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Strategic Business Design & Model Innovation Patterns</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section strategic_planning">
          <h2>Strategic Planning</h2>
          <div class="element business_model_canvas">
            <h3>Business Model Canvas</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="apml-source">
          <h2>APML Source</h2>
          <APMLCodeBlock :code="apmlSource" />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import APMLCodeBlock from '../../components/APMLCodeBlock.vue'

// APML Specification Data
const apmlSpec = {
  "app": {
    "name": "BusinessStrategyPatterns",
    "properties": {
      "title": "Strategic Business Design & Model Innovation Patterns"
    }
  },
  "data": {
    "BusinessModel": {
      "fields": {
        "value_propositions": "list of text required"
      }
    },
    "CompetitiveStrategy": {
      "fields": {
        "market_position": "cost_leader | differentiator | focused_niche"
      }
    },
    "StrategicObjective": {
      "fields": {
        "goal": "text required"
      }
    }
  },
  "interfaces": {
    "strategic_planning": {
      "elements": {
        "business_model_canvas": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    }
  },
  "logic": {
    "strategic_decision_frameworks": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "business_model_innovation": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "digital_transformation_strategy": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    }
  },
  "rawContent": "app BusinessStrategyPatterns:\n  title: \"Strategic Business Design & Model Innovation Patterns\"\n  description: \"APML-based frameworks for business model design, competitive strategy, and organizational transformation\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata BusinessModel:\n  value_propositions: list of text required\n  customer_segments: list of text required\n  revenue_streams: list of text required\n  key_partnerships: list of text\n  key_resources: list of text required\n  key_activities: list of text required\n  cost_structure: list of text required\n  channels: list of text required\n  customer_relationships: list of text required\n\ndata CompetitiveStrategy:\n  market_position: cost_leader | differentiator | focused_niche\n  competitive_advantages: list of text required\n  barrier_strategies: list of text\n  market_entry_approach: text required\n  value_chain_optimization: list of text\n\ndata StrategicObjective:\n  goal: text required\n  success_metrics: list of text required\n  timeline: text required\n  resource_requirements: list of text\n  risk_factors: list of text\n  dependencies: list of text\n\ninterface strategic_planning:\n  show business_model_canvas:\n    title: \"Business Model Design Workshop\"\n    \n    display canvas_sections:\n      value_propositions_section:\n        title: \"Value Propositions\"\n        prompt: \"What value do you deliver to customers?\"\n        examples: \"Cost reduction, convenience, performance, customization\"\n        \n      customer_segments_section:\n        title: \"Customer Segments\"\n        prompt: \"Who are your most important customers?\"\n        examples: \"Mass market, niche market, segmented, diversified\"\n        \n      revenue_streams_section:\n        title: \"Revenue Streams\"\n        prompt: \"How do you generate revenue from each segment?\"\n        examples: \"Asset sale, subscription, licensing, advertising\"\n        \n    when user completes canvas_section:\n      validate completeness_and_consistency\n      highlight potential_conflicts_or_gaps\n      suggest optimization_opportunities\n      \n  display lean_canvas:\n    when startup_or_new_product_context:\n      show problem_solution_fit_focus:\n        problems_section: \"Top 3 problems you solve\"\n        solutions_section: \"Top 3 features addressing problems\"\n        unique_value_proposition: \"Single compelling message\"\n        unfair_advantage: \"Something that cannot be easily copied\"\n        \n      show metrics_and_validation:\n        key_metrics: \"Numbers that tell you how your business is doing\"\n        channels: \"Path to customers\"\n        cost_structure: \"Customer acquisition costs, distribution costs\"\n        revenue_streams: \"Revenue model, lifetime value\"\n        \n  show competitive_analysis:\n    title: \"Strategic Positioning & Competitive Advantage\"\n    \n    display porter_five_forces:\n      threat_of_new_entrants:\n        barriers_to_entry: list of industry_specific_barriers\n        capital_requirements: assessment of_financial_barriers\n        brand_loyalty: evaluation of_customer_switching_costs\n        \n      bargaining_power_of_suppliers:\n        supplier_concentration: analysis of_supplier_market_structure\n        switching_costs: cost_to_change_suppliers\n        availability_of_substitutes: alternative_supplier_options\n        \n      bargaining_power_of_buyers:\n        buyer_concentration: analysis of_customer_market_structure\n        price_sensitivity: how_price_affects_purchase_decisions\n        switching_costs: cost_for_customers_to_change_providers\n        \n      threat_of_substitute_products:\n        substitute_availability: alternative_solutions_in_market\n        relative_price_performance: value_comparison_with_substitutes\n        switching_costs: effort_required_to_adopt_substitutes\n        \n      competitive_rivalry:\n        number_of_competitors: market_concentration_analysis\n        growth_rate: industry_growth_trends\n        differentiation: uniqueness_of_products_and_services\n\nlogic strategic_decision_frameworks:\n  pattern swot_analysis_execution:\n    when strategic_situation_assessment_needed:\n      identify internal_strengths:\n        core_competencies and unique_resources\n        strong_brand_reputation and customer_loyalty\n        operational_efficiencies and cost_advantages\n        talented_team and organizational_culture\n        \n      identify internal_weaknesses:\n        resource_constraints and capability_gaps\n        operational_inefficiencies and quality_issues\n        weak_brand_positioning or customer_perception\n        organizational_structure_limitations\n        \n      identify external_opportunities:\n        market_growth_trends and emerging_segments\n        technological_advancements and innovations\n        regulatory_changes_creating_new_possibilities\n        competitor_weaknesses_to_exploit\n        \n      identify external_threats:\n        competitive_pressure and market_saturation\n        economic_downturns and regulatory_restrictions\n        technological_disruption and changing_customer_preferences\n        supply_chain_vulnerabilities\n        \n  pattern okr_strategic_alignment:\n    when organizational_goal_setting_required:\n      define objectives:\n        inspirational_and_significant_goals\n        qualitative_and_time_bound_targets\n        aligned_with_company_mission_and_vision\n        \n      create key_results:\n        measurable_and_specific_outcomes\n        numeric_targets_with_clear_success_criteria\n        ambitious_but_achievable_within_timeframe\n        \n      cascade objectives_through_organization:\n        align_team_okrs with company_objectives\n        ensure_individual_contributions_support_team_goals\n        create_transparency_and_accountability_mechanisms\n        \n  pattern blue_ocean_strategy:\n    when seeking_uncontested_market_space:\n      map current_competitive_landscape:\n        identify factors_industry_competes_on\n        plot_competitor_positions across_these_factors\n        recognize areas_of_intense_competition\n        \n      eliminate factors_industry_takes_for_granted:\n        question_assumptions_about_necessary_features\n        remove_costly_features_that_add_little_value\n        challenge_traditional_industry_boundaries\n        \n      reduce factors_below_industry_standard:\n        identify_over_served_customer_needs\n        simplify_offerings_to_reduce_costs\n        focus_resources_on_differentiation_areas\n        \n      raise factors_above_industry_standard:\n        enhance_features_that_truly_matter_to_customers\n        exceed_expectations_in_key_value_areas\n        create_superior_customer_experience\n        \n      create factors_industry_has_never_offered:\n        introduce_entirely_new_value_elements\n        combine_features_from_different_industries\n        address_unmet_customer_needs\n\nlogic business_model_innovation:\n  pattern platform_strategy_design:\n    when connecting_multiple_customer_groups:\n      identify platform_participants:\n        producers_who_create_value\n        consumers_who_use_value\n        third_party_developers_who_extend_platform\n        \n      design network_effects:\n        direct_network_effects between_same_user_groups\n        indirect_network_effects between_different_groups\n        data_network_effects from_usage_insights\n        \n      create platform_governance:\n        rules_for_participation and quality_standards\n        pricing_strategies for different_participant_types\n        conflict_resolution_mechanisms\n        innovation_incentive_structures\n        \n  pattern subscription_model_optimization:\n    when transitioning_from_transactional_to_recurring_revenue:\n      design tiered_offering_structure:\n        basic_tier with essential_features\n        premium_tiers with advanced_capabilities\n        enterprise_tier with custom_solutions\n        \n      optimize customer_lifecycle:\n        acquisition_strategies to attract_subscribers\n        onboarding_process to demonstrate_value_quickly\n        engagement_mechanisms to increase_usage\n        retention_strategies to reduce_churn\n        expansion_opportunities to increase_revenue_per_customer\n        \n  pattern ecosystem_business_model:\n    when creating_interconnected_value_networks:\n      map ecosystem_participants:\n        core_partners providing_essential_capabilities\n        complementary_partners adding_adjacent_value\n        customer_partners co_creating_solutions\n        \n      design value_exchange_mechanisms:\n        revenue_sharing_across_ecosystem_partners\n        data_sharing_for_mutual_benefit\n        customer_sharing_and cross_referrals\n        joint_innovation_and_co_development\n\nlogic digital_transformation_strategy:\n  pattern digital_business_model_evolution:\n    when traditional_business_needs_digital_enhancement:\n      assess digital_maturity:\n        current_technology_capabilities\n        digital_customer_touchpoints\n        data_utilization_sophistication\n        organizational_digital_skills\n        \n      identify digitization_opportunities:\n        process_automation_potential\n        customer_experience_digital_enhancement\n        new_digital_revenue_streams\n        data_monetization_possibilities\n        \n      design transformation_roadmap:\n        quick_wins_for_immediate_impact\n        medium_term_capability_building\n        long_term_business_model_innovation\n        change_management_and_skill_development\n        \n  pattern data_strategy_integration:\n    when leveraging_data_as_strategic_asset:\n      inventory data_assets:\n        customer_behavior_and_preference_data\n        operational_efficiency_metrics\n        market_and_competitive_intelligence\n        product_usage_and_performance_data\n        \n      design data_value_creation:\n        personalization_and_customization_capabilities\n        predictive_analytics_for_decision_making\n        new_data_driven_products_and_services\n        operational_optimization_insights\n        \n  pattern agile_strategy_implementation:\n    when operating_in_uncertain_environments:\n      implement strategy_experimentation:\n        hypothesis_driven_strategic_initiatives\n        rapid_prototyping_of_strategic_options\n        portfolio_approach_to_strategic_bets\n        \n      create adaptive_planning_processes:\n        quarterly_strategy_reviews_and_adjustments\n        scenario_planning_for_multiple_futures\n        option_value_thinking_for_strategic_investments\n\nintegrations:\n  design_intelligence_connection:\n    use user_research_patterns for customer_insight\n    apply validation_frameworks for strategy_testing\n    leverage systems_thinking for ecosystem_design\n    \n  apml_ecosystem_integration:\n    generate business_applications from strategic_frameworks\n    compile strategic_plans into executable_roadmaps\n    connect to theme_aware_compilation for strategic_communication\n    integrate with ade_workflow for strategy_implementation",
  "filePath": "/Users/tomcassidy/APML/website/src/patterns/business-strategy-patterns.apml"
}
const apmlSource = ref(`app BusinessStrategyPatterns:
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

data CompetitiveStrategy:
  market_position: cost_leader | differentiator | focused_niche
  competitive_advantages: list of text required
  barrier_strategies: list of text
  market_entry_approach: text required
  value_chain_optimization: list of text

data StrategicObjective:
  goal: text required
  success_metrics: list of text required
  timeline: text required
  resource_requirements: list of text
  risk_factors: list of text
  dependencies: list of text

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
        
    when user completes canvas_section:
      validate completeness_and_consistency
      highlight potential_conflicts_or_gaps
      suggest optimization_opportunities
      
  display lean_canvas:
    when startup_or_new_product_context:
      show problem_solution_fit_focus:
        problems_section: "Top 3 problems you solve"
        solutions_section: "Top 3 features addressing problems"
        unique_value_proposition: "Single compelling message"
        unfair_advantage: "Something that cannot be easily copied"
        
      show metrics_and_validation:
        key_metrics: "Numbers that tell you how your business is doing"
        channels: "Path to customers"
        cost_structure: "Customer acquisition costs, distribution costs"
        revenue_streams: "Revenue model, lifetime value"
        
  show competitive_analysis:
    title: "Strategic Positioning & Competitive Advantage"
    
    display porter_five_forces:
      threat_of_new_entrants:
        barriers_to_entry: list of industry_specific_barriers
        capital_requirements: assessment of_financial_barriers
        brand_loyalty: evaluation of_customer_switching_costs
        
      bargaining_power_of_suppliers:
        supplier_concentration: analysis of_supplier_market_structure
        switching_costs: cost_to_change_suppliers
        availability_of_substitutes: alternative_supplier_options
        
      bargaining_power_of_buyers:
        buyer_concentration: analysis of_customer_market_structure
        price_sensitivity: how_price_affects_purchase_decisions
        switching_costs: cost_for_customers_to_change_providers
        
      threat_of_substitute_products:
        substitute_availability: alternative_solutions_in_market
        relative_price_performance: value_comparison_with_substitutes
        switching_costs: effort_required_to_adopt_substitutes
        
      competitive_rivalry:
        number_of_competitors: market_concentration_analysis
        growth_rate: industry_growth_trends
        differentiation: uniqueness_of_products_and_services

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
        
  pattern okr_strategic_alignment:
    when organizational_goal_setting_required:
      define objectives:
        inspirational_and_significant_goals
        qualitative_and_time_bound_targets
        aligned_with_company_mission_and_vision
        
      create key_results:
        measurable_and_specific_outcomes
        numeric_targets_with_clear_success_criteria
        ambitious_but_achievable_within_timeframe
        
      cascade objectives_through_organization:
        align_team_okrs with company_objectives
        ensure_individual_contributions_support_team_goals
        create_transparency_and_accountability_mechanisms
        
  pattern blue_ocean_strategy:
    when seeking_uncontested_market_space:
      map current_competitive_landscape:
        identify factors_industry_competes_on
        plot_competitor_positions across_these_factors
        recognize areas_of_intense_competition
        
      eliminate factors_industry_takes_for_granted:
        question_assumptions_about_necessary_features
        remove_costly_features_that_add_little_value
        challenge_traditional_industry_boundaries
        
      reduce factors_below_industry_standard:
        identify_over_served_customer_needs
        simplify_offerings_to_reduce_costs
        focus_resources_on_differentiation_areas
        
      raise factors_above_industry_standard:
        enhance_features_that_truly_matter_to_customers
        exceed_expectations_in_key_value_areas
        create_superior_customer_experience
        
      create factors_industry_has_never_offered:
        introduce_entirely_new_value_elements
        combine_features_from_different_industries
        address_unmet_customer_needs

logic business_model_innovation:
  pattern platform_strategy_design:
    when connecting_multiple_customer_groups:
      identify platform_participants:
        producers_who_create_value
        consumers_who_use_value
        third_party_developers_who_extend_platform
        
      design network_effects:
        direct_network_effects between_same_user_groups
        indirect_network_effects between_different_groups
        data_network_effects from_usage_insights
        
      create platform_governance:
        rules_for_participation and quality_standards
        pricing_strategies for different_participant_types
        conflict_resolution_mechanisms
        innovation_incentive_structures
        
  pattern subscription_model_optimization:
    when transitioning_from_transactional_to_recurring_revenue:
      design tiered_offering_structure:
        basic_tier with essential_features
        premium_tiers with advanced_capabilities
        enterprise_tier with custom_solutions
        
      optimize customer_lifecycle:
        acquisition_strategies to attract_subscribers
        onboarding_process to demonstrate_value_quickly
        engagement_mechanisms to increase_usage
        retention_strategies to reduce_churn
        expansion_opportunities to increase_revenue_per_customer
        
  pattern ecosystem_business_model:
    when creating_interconnected_value_networks:
      map ecosystem_participants:
        core_partners providing_essential_capabilities
        complementary_partners adding_adjacent_value
        customer_partners co_creating_solutions
        
      design value_exchange_mechanisms:
        revenue_sharing_across_ecosystem_partners
        data_sharing_for_mutual_benefit
        customer_sharing_and cross_referrals
        joint_innovation_and_co_development

logic digital_transformation_strategy:
  pattern digital_business_model_evolution:
    when traditional_business_needs_digital_enhancement:
      assess digital_maturity:
        current_technology_capabilities
        digital_customer_touchpoints
        data_utilization_sophistication
        organizational_digital_skills
        
      identify digitization_opportunities:
        process_automation_potential
        customer_experience_digital_enhancement
        new_digital_revenue_streams
        data_monetization_possibilities
        
      design transformation_roadmap:
        quick_wins_for_immediate_impact
        medium_term_capability_building
        long_term_business_model_innovation
        change_management_and_skill_development
        
  pattern data_strategy_integration:
    when leveraging_data_as_strategic_asset:
      inventory data_assets:
        customer_behavior_and_preference_data
        operational_efficiency_metrics
        market_and_competitive_intelligence
        product_usage_and_performance_data
        
      design data_value_creation:
        personalization_and_customization_capabilities
        predictive_analytics_for_decision_making
        new_data_driven_products_and_services
        operational_optimization_insights
        
  pattern agile_strategy_implementation:
    when operating_in_uncertain_environments:
      implement strategy_experimentation:
        hypothesis_driven_strategic_initiatives
        rapid_prototyping_of_strategic_options
        portfolio_approach_to_strategic_bets
        
      create adaptive_planning_processes:
        quarterly_strategy_reviews_and_adjustments
        scenario_planning_for_multiple_futures
        option_value_thinking_for_strategic_investments

integrations:
  design_intelligence_connection:
    use user_research_patterns for customer_insight
    apply validation_frameworks for strategy_testing
    leverage systems_thinking for ecosystem_design
    
  apml_ecosystem_integration:
    generate business_applications from strategic_frameworks
    compile strategic_plans into executable_roadmaps
    connect to theme_aware_compilation for strategic_communication
    integrate with ade_workflow for strategy_implementation`)

// Reactive data based on APML data models
// Data models from APML specification
const BusinessModel = ref({
  value_propositions: "",
})

const CompetitiveStrategy = ref({
  market_position: null,
})

const StrategicObjective = ref({
  goal: "",
})



// Computed properties for interface elements
// Computed properties for interface elements
const strategic_planningElements = computed(() => ({
  business_model_canvas: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'BusinessStrategyPatterns',
  title: 'Strategic Business Design & Model Innovation Patterns',
  description: '',
  version: '1.0.0'
}
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
  padding: 3rem 0;
  text-align: center;
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
  margin-bottom: 2rem;
}

.page-content {
  padding-bottom: 4rem;
}

.interface-section {
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.interface-section h2 {
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 2rem;
}

.element {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.element h3 {
  font-size: 1.5rem;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.content-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.content-section h4 {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.property {
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.property-label {
  font-weight: 600;
  color: #6366f1;
  margin-right: 1rem;
  min-width: 120px;
}

.property-value {
  color: #f8fafc;
  flex: 1;
}

.apml-source {
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.apml-source h2 {
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .interface-section {
    padding: 1rem;
  }
}
</style>