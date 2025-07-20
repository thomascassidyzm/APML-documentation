<template>
  <div class="design-intelligence-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Complete Pattern Library for Design Thinking & Solution Generation</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section methodology_discovery">
          <h2>Methodology Discovery</h2>
          <div class="element framework_library">
            <h3>Framework Library</h3>
          </div>
        </section>
        <section class="interface-section methodology_execution">
          <h2>Methodology Execution</h2>
          <div class="element selected_framework_guide">
            <h3>Selected Framework Guide</h3>
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
    "name": "DesignIntelligenceFramework",
    "properties": {
      "title": "Complete Pattern Library for Design Thinking & Solution Generation"
    }
  },
  "data": {
    "DesignMethod": {
      "fields": {
        "id": "unique_id"
      }
    },
    "TransformationPattern": {
      "fields": {
        "id": "unique_id"
      }
    },
    "UserContext": {
      "fields": {
        "problem_type": "customer_experience | business_strategy | product_innovation | service_improvement | organizational_change"
      }
    },
    "MethodologyStack": {
      "fields": {
        "primary_framework": "DesignMethod required"
      }
    }
  },
  "interfaces": {
    "methodology_discovery": {
      "elements": {
        "framework_library": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {}
    },
    "methodology_execution": {
      "elements": {
        "selected_framework_guide": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {}
    }
  },
  "logic": {
    "intelligent_recommendation_engine": {
      "processes": {
        "context_analysis": {
          "steps": [],
          "conditions": []
        }
      },
      "workflows": {},
      "patterns": {}
    },
    "framework_transformation_patterns": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "complexity_navigation": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "innovation_acceleration": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "behavioral_design_patterns": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    }
  },
  "rawContent": "app DesignIntelligenceFramework:\n  title: \"Complete Pattern Library for Design Thinking & Solution Generation\"\n  description: \"Comprehensive APML-based methodologies for human-centered problem solving and innovation\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata DesignMethod:\n  id: unique_id\n  name: text required\n  category: user_research | problem_framing | ideation | validation | business_model | service_design | systems_thinking\n  complexity_level: simple | intermediate | advanced\n  time_required: quick | medium | extensive\n  team_size: individual | small_team | large_team\n  required_skills: list of text\n  tools_needed: list of text\n  expected_outcomes: list of text\n\ndata TransformationPattern:\n  id: unique_id\n  trigger_condition: text required\n  input_requirements: list of text\n  process_steps: list of text\n  decision_points: list of text\n  expected_outputs: list of text\n  success_criteria: list of text\n  failure_modes: list of text\n  iteration_triggers: list of text\n\ndata UserContext:\n  problem_type: customer_experience | business_strategy | product_innovation | service_improvement | organizational_change\n  urgency_level: exploratory | standard | urgent | crisis\n  resources_available: minimal | adequate | abundant\n  team_experience: novice | intermediate | expert\n  stakeholder_involvement: low | medium | high\n  constraints: list of text\n\ndata MethodologyStack:\n  primary_framework: DesignMethod required\n  supporting_methods: list of DesignMethod\n  sequence_order: list of text\n  integration_points: list of text\n  customization_notes: text optional\n\ninterface methodology_discovery:\n  show framework_library:\n    title: \"Design Intelligence Pattern Library\"\n    subtitle: \"Choose methodologies based on your context and goals\"\n    \n    display category_overview:\n      user_research_section:\n        title: \"Understanding Users & Context\"\n        methods_count: count methods where category is user_research\n        complexity_range: \"Simple to Advanced\"\n        \n      problem_framing_section:\n        title: \"Defining & Framing Problems\"\n        methods_count: count methods where category is problem_framing\n        complexity_range: \"Intermediate to Advanced\"\n        \n      ideation_section:\n        title: \"Generating Solutions\"\n        methods_count: count methods where category is ideation\n        complexity_range: \"Simple to Intermediate\"\n        \n      validation_section:\n        title: \"Testing & Validation\"\n        methods_count: count methods where category is validation\n        complexity_range: \"Intermediate to Advanced\"\n        \n      business_model_section:\n        title: \"Strategic Business Design\"\n        methods_count: count methods where category is business_model\n        complexity_range: \"Advanced\"\n        \n  when user clicks category_section:\n    show detailed_methods:\n      for each method in selected_category.methods:\n        display method_card:\n          name: method.name\n          description: method.description\n          time_estimate: method.time_required\n          team_size: method.team_size\n          complexity_indicator: method.complexity_level\n          preview_button: \"Learn More\"\n          \n  show context_analyzer:\n    title: \"Smart Methodology Recommendation\"\n    subtitle: \"Tell us about your situation for personalized guidance\"\n    \n    display context_form:\n      problem_description: textarea required\n      problem_type_selector: customer_experience | business_strategy | product_innovation | service_improvement | organizational_change\n      timeline_selector: days | weeks | months\n      team_size_input: number required\n      experience_level: novice | intermediate | expert\n      budget_constraints: text optional\n      \n  when user submits context_form:\n    analyze user_context\n    generate methodology_recommendations\n    show personalized_stack\n\ninterface methodology_execution:\n  show selected_framework_guide:\n    when framework_selected:\n      title: \"Step-by-Step Guide: {selected_method.name}\"\n      \n      display preparation_phase:\n        required_materials: selected_method.tools_needed\n        team_preparation: \"Roles and responsibilities\"\n        time_allocation: selected_method.time_required\n        success_metrics: selected_method.success_criteria\n        \n      show process_steps:\n        for each step in selected_method.process_steps:\n          display step_card:\n            step_number: auto-increment\n            instruction: step.description\n            time_estimate: step.duration\n            deliverable: step.expected_output\n            next_action: step.transition_logic\n            \n      display integration_guidance:\n        when multiple_methods_in_stack:\n          show handoff_points:\n            \"How outputs from this method feed into next methodology\"\n          show synthesis_opportunities:\n            \"Where insights can be combined across methods\"\n            \n  show progress_tracking:\n    current_step_indicator: visual progress bar\n    completed_deliverables: checklist of outputs\n    team_feedback_collection: quick polls and observations\n    adaptation_suggestions: \"Based on your progress, consider these adjustments\"\n\nlogic intelligent_recommendation_engine:\n  process context_analysis:\n    when user describes problem_context:\n      extract key_characteristics:\n        complexity_indicators from problem_description\n        stakeholder_involvement from context\n        time_constraints from timeline\n        resource_availability from team_and_budget\n        \n      classify problem_type:\n        if mentions \"customer satisfaction\" or \"user experience\":\n          set primary_focus to customer_experience\n        if mentions \"revenue\" or \"growth\" or \"market\":\n          set primary_focus to business_strategy\n        if mentions \"new features\" or \"innovation\":\n          set primary_focus to product_innovation\n          \n      assess team_readiness:\n        match experience_level to method_complexity\n        validate team_size against method_requirements\n        identify skill_gaps and training_needs\n        \n  generate methodology_recommendation:\n    create base_stack:\n      if problem_type is customer_experience:\n        recommend user_research_methods first\n        add validation_methods for testing\n        include service_design for implementation\n        \n      if problem_type is business_strategy:\n        recommend business_model_methods first\n        add systems_thinking for complexity\n        include validation for market_testing\n        \n      if problem_type is product_innovation:\n        recommend ideation_methods first\n        add user_research for insight\n        include validation for concept_testing\n        \n    optimize_for_constraints:\n      if timeline is short:\n        prefer quick_methods over extensive_methods\n        suggest parallel_execution where_possible\n        \n      if team_experience is novice:\n        include guided_templates and examples\n        recommend simpler_variations of complex_methods\n        add checkpoint_reviews for course_correction\n        \n      if resources_are_minimal:\n        prioritize high_impact_low_cost methods\n        suggest virtual_alternatives to in_person_methods\n        \n  process pattern_learning:\n    when methodology_completed:\n      collect outcome_metrics:\n        time_actual vs time_estimated\n        quality_of_insights generated\n        stakeholder_satisfaction scores\n        implementation_success_rate\n        \n      identify pattern_improvements:\n        if time_exceeded_estimate:\n          update method.time_required with realistic_duration\n        if insights_quality_low:\n          enhance method.preparation_requirements\n        if stakeholder_satisfaction_low:\n          improve method.communication_guidance\n          \n      update recommendation_algorithm:\n        strengthen successful_pattern_matches\n        flag problematic_combinations\n        enhance context_classification_accuracy\n\nlogic framework_transformation_patterns:\n  pattern user_journey_to_solution:\n    when user_research reveals journey_pain_points:\n      identify friction_moments in current_experience\n      map emotional_states at each_touchpoint\n      prioritize improvement_opportunities by impact_and_effort\n      generate solution_concepts targeting highest_priority_friction\n      \n  pattern jobs_to_be_done_analysis:\n    when users struggle_to_articulate_needs:\n      focus on job_context rather than demographics\n      identify functional_emotional_social jobs\n      map job_executor_journey from awareness_to_completion\n      design solutions that help_users_accomplish_jobs_better\n      \n  pattern five_whys_root_cause:\n    when surface_problem_symptoms_appear:\n      ask \"why does this problem occur\" five_times_minimum\n      document each_layer of causation\n      identify systemic_vs_symptomatic_issues\n      target solutions at root_cause_level\n      \n  pattern how_might_we_generation:\n    when problem_statement_is_too_broad:\n      rephrase as \"How might we...\" question\n      generate multiple_variations with different_perspectives\n      balance specificity_with_openness for solution_space\n      use as_launching_point for ideation_sessions\n      \n  pattern business_model_canvas:\n    when business_strategy_needs_clarification:\n      map value_propositions to customer_segments\n      identify key_partnerships and resources_required\n      design revenue_streams and cost_structure\n      validate assumptions_through_customer_development\n      \n  pattern service_blueprint_design:\n    when customer_experience_spans_multiple_touchpoints:\n      map customer_actions across_entire_journey\n      identify frontstage_employee_actions visible_to_customers\n      document backstage_processes supporting_frontstage\n      highlight failure_points and improvement_opportunities\n      \n  pattern hypothesis_driven_validation:\n    when assumptions_need_testing:\n      convert assumptions_into_testable_hypotheses\n      design minimum_viable_experiments\n      define success_metrics and learning_goals\n      implement build_measure_learn cycle\n      \nlogic complexity_navigation:\n  pattern cynefin_framework_application:\n    when problem_complexity_is_unclear:\n      assess if situation_is simple_complicated_complex_or_chaotic\n      \n      if simple:\n        apply best_practices and proven_solutions\n      if complicated:\n        bring_in_experts and analyze_thoroughly\n      if complex:\n        run safe_to_fail_experiments and probe_sense_respond\n      if chaotic:\n        act_immediately to stabilize then_assess\n        \n  pattern systems_thinking_approach:\n    when problems_have_multiple_interconnected_causes:\n      map system_boundaries and key_stakeholders\n      identify feedback_loops and delay_patterns\n      look for leverage_points where small_changes_create_big_impact\n      consider unintended_consequences of interventions\n      \n  pattern iceberg_model_analysis:\n    when addressing_recurring_problems:\n      observe events_and_patterns at surface_level\n      identify underlying_structures causing_patterns\n      examine mental_models and assumptions_driving_structures\n      address systemic_issues not_just_symptoms\n\nlogic innovation_acceleration:\n  pattern analogical_thinking:\n    when seeking breakthrough_solutions:\n      look for similar_problems in different_industries\n      identify successful_solution_patterns from other_domains\n      adapt and customize_solutions for current_context\n      combine multiple_analogies for novel_approaches\n      \n  pattern scamper_methodology:\n    when existing_solutions_need_enhancement:\n      substitute components_with_alternatives\n      combine with other_solutions or approaches\n      adapt solutions_from_other_contexts\n      modify existing_elements\n      put to other_uses\n      eliminate unnecessary_components\n      reverse or rearrange_solution_elements\n      \n  pattern trend_analysis_integration:\n    when future_proofing_solutions:\n      identify emerging_technology_trends\n      analyze demographic_and_social_shifts\n      map regulatory_and_economic_changes\n      design solutions that_leverage_trends rather_than_resist_them\n\nlogic behavioral_design_patterns:\n  pattern nudge_technique_application:\n    when user_behavior_change_is_needed:\n      design choice_architecture that guides_good_decisions\n      use defaults_that_favor_desired_outcomes\n      provide timely_feedback on user_actions\n      make desired_behaviors_easier and undesired_behaviors_harder\n      \n  pattern habit_formation_design:\n    when building_sticky_user_experiences:\n      identify trigger_that_initiates_behavior\n      design simple_action users_can_complete\n      provide variable_reward that_satisfies_user_motivation\n      increase investment_user_makes in_product_over_time\n      \n  pattern cognitive_bias_mitigation:\n    when decisions_affected_by_systematic_biases:\n      identify confirmation_bias and availability_heuristic_impacts\n      design processes_that_surface_contrary_evidence\n      use structured_decision_frameworks\n      implement devil's_advocate and red_team_reviews\n\nintegrations:\n  apml_ecosystem_connection:\n    generate_apml_applications from methodology_outcomes\n    compile design_artifacts into working_prototypes\n    connect to theme_aware_compilation for visual_design\n    integrate with ade_workflow for solution_development\n    \n  external_tool_compatibility:\n    export methodology_guides to project_management_tools\n    integrate with survey_platforms for user_research\n    connect to analytics_tools for validation_metrics\n    sync with collaboration_platforms for team_coordination",
  "filePath": "/Users/tomcassidy/APML/website/src/patterns/design-intelligence.apml"
}
const apmlSource = ref(`app DesignIntelligenceFramework:
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

data TransformationPattern:
  id: unique_id
  trigger_condition: text required
  input_requirements: list of text
  process_steps: list of text
  decision_points: list of text
  expected_outputs: list of text
  success_criteria: list of text
  failure_modes: list of text
  iteration_triggers: list of text

data UserContext:
  problem_type: customer_experience | business_strategy | product_innovation | service_improvement | organizational_change
  urgency_level: exploratory | standard | urgent | crisis
  resources_available: minimal | adequate | abundant
  team_experience: novice | intermediate | expert
  stakeholder_involvement: low | medium | high
  constraints: list of text

data MethodologyStack:
  primary_framework: DesignMethod required
  supporting_methods: list of DesignMethod
  sequence_order: list of text
  integration_points: list of text
  customization_notes: text optional

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
        
      business_model_section:
        title: "Strategic Business Design"
        methods_count: count methods where category is business_model
        complexity_range: "Advanced"
        
  when user clicks category_section:
    show detailed_methods:
      for each method in selected_category.methods:
        display method_card:
          name: method.name
          description: method.description
          time_estimate: method.time_required
          team_size: method.team_size
          complexity_indicator: method.complexity_level
          preview_button: "Learn More"
          
  show context_analyzer:
    title: "Smart Methodology Recommendation"
    subtitle: "Tell us about your situation for personalized guidance"
    
    display context_form:
      problem_description: textarea required
      problem_type_selector: customer_experience | business_strategy | product_innovation | service_improvement | organizational_change
      timeline_selector: days | weeks | months
      team_size_input: number required
      experience_level: novice | intermediate | expert
      budget_constraints: text optional
      
  when user submits context_form:
    analyze user_context
    generate methodology_recommendations
    show personalized_stack

interface methodology_execution:
  show selected_framework_guide:
    when framework_selected:
      title: "Step-by-Step Guide: {selected_method.name}"
      
      display preparation_phase:
        required_materials: selected_method.tools_needed
        team_preparation: "Roles and responsibilities"
        time_allocation: selected_method.time_required
        success_metrics: selected_method.success_criteria
        
      show process_steps:
        for each step in selected_method.process_steps:
          display step_card:
            step_number: auto-increment
            instruction: step.description
            time_estimate: step.duration
            deliverable: step.expected_output
            next_action: step.transition_logic
            
      display integration_guidance:
        when multiple_methods_in_stack:
          show handoff_points:
            "How outputs from this method feed into next methodology"
          show synthesis_opportunities:
            "Where insights can be combined across methods"
            
  show progress_tracking:
    current_step_indicator: visual progress bar
    completed_deliverables: checklist of outputs
    team_feedback_collection: quick polls and observations
    adaptation_suggestions: "Based on your progress, consider these adjustments"

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
        
  generate methodology_recommendation:
    create base_stack:
      if problem_type is customer_experience:
        recommend user_research_methods first
        add validation_methods for testing
        include service_design for implementation
        
      if problem_type is business_strategy:
        recommend business_model_methods first
        add systems_thinking for complexity
        include validation for market_testing
        
      if problem_type is product_innovation:
        recommend ideation_methods first
        add user_research for insight
        include validation for concept_testing
        
    optimize_for_constraints:
      if timeline is short:
        prefer quick_methods over extensive_methods
        suggest parallel_execution where_possible
        
      if team_experience is novice:
        include guided_templates and examples
        recommend simpler_variations of complex_methods
        add checkpoint_reviews for course_correction
        
      if resources_are_minimal:
        prioritize high_impact_low_cost methods
        suggest virtual_alternatives to in_person_methods
        
  process pattern_learning:
    when methodology_completed:
      collect outcome_metrics:
        time_actual vs time_estimated
        quality_of_insights generated
        stakeholder_satisfaction scores
        implementation_success_rate
        
      identify pattern_improvements:
        if time_exceeded_estimate:
          update method.time_required with realistic_duration
        if insights_quality_low:
          enhance method.preparation_requirements
        if stakeholder_satisfaction_low:
          improve method.communication_guidance
          
      update recommendation_algorithm:
        strengthen successful_pattern_matches
        flag problematic_combinations
        enhance context_classification_accuracy

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
      target solutions at root_cause_level
      
  pattern how_might_we_generation:
    when problem_statement_is_too_broad:
      rephrase as "How might we..." question
      generate multiple_variations with different_perspectives
      balance specificity_with_openness for solution_space
      use as_launching_point for ideation_sessions
      
  pattern business_model_canvas:
    when business_strategy_needs_clarification:
      map value_propositions to customer_segments
      identify key_partnerships and resources_required
      design revenue_streams and cost_structure
      validate assumptions_through_customer_development
      
  pattern service_blueprint_design:
    when customer_experience_spans_multiple_touchpoints:
      map customer_actions across_entire_journey
      identify frontstage_employee_actions visible_to_customers
      document backstage_processes supporting_frontstage
      highlight failure_points and improvement_opportunities
      
  pattern hypothesis_driven_validation:
    when assumptions_need_testing:
      convert assumptions_into_testable_hypotheses
      design minimum_viable_experiments
      define success_metrics and learning_goals
      implement build_measure_learn cycle
      
logic complexity_navigation:
  pattern cynefin_framework_application:
    when problem_complexity_is_unclear:
      assess if situation_is simple_complicated_complex_or_chaotic
      
      if simple:
        apply best_practices and proven_solutions
      if complicated:
        bring_in_experts and analyze_thoroughly
      if complex:
        run safe_to_fail_experiments and probe_sense_respond
      if chaotic:
        act_immediately to stabilize then_assess
        
  pattern systems_thinking_approach:
    when problems_have_multiple_interconnected_causes:
      map system_boundaries and key_stakeholders
      identify feedback_loops and delay_patterns
      look for leverage_points where small_changes_create_big_impact
      consider unintended_consequences of interventions
      
  pattern iceberg_model_analysis:
    when addressing_recurring_problems:
      observe events_and_patterns at surface_level
      identify underlying_structures causing_patterns
      examine mental_models and assumptions_driving_structures
      address systemic_issues not_just_symptoms

logic innovation_acceleration:
  pattern analogical_thinking:
    when seeking breakthrough_solutions:
      look for similar_problems in different_industries
      identify successful_solution_patterns from other_domains
      adapt and customize_solutions for current_context
      combine multiple_analogies for novel_approaches
      
  pattern scamper_methodology:
    when existing_solutions_need_enhancement:
      substitute components_with_alternatives
      combine with other_solutions or approaches
      adapt solutions_from_other_contexts
      modify existing_elements
      put to other_uses
      eliminate unnecessary_components
      reverse or rearrange_solution_elements
      
  pattern trend_analysis_integration:
    when future_proofing_solutions:
      identify emerging_technology_trends
      analyze demographic_and_social_shifts
      map regulatory_and_economic_changes
      design solutions that_leverage_trends rather_than_resist_them

logic behavioral_design_patterns:
  pattern nudge_technique_application:
    when user_behavior_change_is_needed:
      design choice_architecture that guides_good_decisions
      use defaults_that_favor_desired_outcomes
      provide timely_feedback on user_actions
      make desired_behaviors_easier and undesired_behaviors_harder
      
  pattern habit_formation_design:
    when building_sticky_user_experiences:
      identify trigger_that_initiates_behavior
      design simple_action users_can_complete
      provide variable_reward that_satisfies_user_motivation
      increase investment_user_makes in_product_over_time
      
  pattern cognitive_bias_mitigation:
    when decisions_affected_by_systematic_biases:
      identify confirmation_bias and availability_heuristic_impacts
      design processes_that_surface_contrary_evidence
      use structured_decision_frameworks
      implement devil's_advocate and red_team_reviews

integrations:
  apml_ecosystem_connection:
    generate_apml_applications from methodology_outcomes
    compile design_artifacts into working_prototypes
    connect to theme_aware_compilation for visual_design
    integrate with ade_workflow for solution_development
    
  external_tool_compatibility:
    export methodology_guides to project_management_tools
    integrate with survey_platforms for user_research
    connect to analytics_tools for validation_metrics
    sync with collaboration_platforms for team_coordination`)

// Reactive data based on APML data models
// Data models from APML specification
const DesignMethod = ref({
  id: "",
})

const TransformationPattern = ref({
  id: "",
})

const UserContext = ref({
  problem_type: null,
})

const MethodologyStack = ref({
  primary_framework: null,
})



// Computed properties for interface elements
// Computed properties for interface elements
const methodology_discoveryElements = computed(() => ({
  framework_library: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const methodology_executionElements = computed(() => ({
  selected_framework_guide: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'DesignIntelligenceFramework',
  title: 'Complete Pattern Library for Design Thinking & Solution Generation',
  description: '',
  version: '1.0.0'
}
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

.property-item {
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

.methodology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.methodology-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.methodology-card:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
}

.methodology-card h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.methodology-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 6px;
}

.stat-label {
  font-weight: 500;
  color: #cbd5e1;
}

.stat-value {
  font-weight: 600;
  color: #6366f1;
}

.methodology-description {
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.methodology-description strong {
  color: #e2e8f0;
}

.element-properties {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.element-properties h4 {
  font-size: 1.125rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

.simple-content {
  margin-top: 1rem;
}

.content-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.content-item h5 {
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.content-item p {
  color: #94a3b8;
  line-height: 1.5;
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