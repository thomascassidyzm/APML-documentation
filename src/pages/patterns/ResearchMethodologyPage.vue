<template>
  <div class="research-methodology-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Comprehensive User Research & Insight Generation Patterns</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section research_planning">
          <h2>Research Planning</h2>
          <div class="element research_method_selector">
            <h3>Research Method Selector</h3>
          </div>
        </section>
        <section class="interface-section research_execution">
          <h2>Research Execution</h2>
          <div class="element interview_guide_generator">
            <h3>Interview Guide Generator</h3>
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
    "name": "ResearchMethodologyPatterns",
    "properties": {
      "title": "Comprehensive User Research & Insight Generation Patterns"
    }
  },
  "data": {
    "ResearchParticipant": {
      "fields": {
        "id": "unique_id"
      }
    },
    "ResearchMethod": {
      "fields": {
        "name": "text required"
      }
    },
    "Insight": {
      "fields": {
        "source_method": "text required"
      }
    },
    "UserPersona": {
      "fields": {
        "name": "text required"
      }
    }
  },
  "interfaces": {
    "research_planning": {
      "elements": {
        "research_method_selector": {
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
    "research_execution": {
      "elements": {
        "interview_guide_generator": {
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
    "research_analysis_patterns": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "insight_transformation": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "persona_development": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    }
  },
  "rawContent": "app ResearchMethodologyPatterns:\n  title: \"Comprehensive User Research & Insight Generation Patterns\"\n  description: \"APML-based frameworks for user research, behavioral analysis, and insight transformation into actionable solutions\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata ResearchParticipant:\n  id: unique_id\n  demographic_profile: text required\n  behavioral_characteristics: list of text\n  pain_points: list of text\n  motivations: list of text\n  context_of_use: text required\n  technology_comfort_level: low | medium | high\n\ndata ResearchMethod:\n  name: text required\n  type: qualitative | quantitative | mixed_methods\n  participants_needed: number required\n  duration: text required\n  complexity: simple | moderate | complex\n  output_type: insights | metrics | behaviors | attitudes\n  best_used_for: list of text\n\ndata Insight:\n  source_method: text required\n  insight_statement: text required\n  evidence_supporting: list of text\n  confidence_level: low | medium | high\n  impact_potential: low | medium | high\n  actionability: immediate | short_term | long_term\n  related_insights: list of text\n\ndata UserPersona:\n  name: text required\n  demographic_summary: text required\n  goals_and_motivations: list of text\n  pain_points_and_frustrations: list of text\n  behavioral_patterns: list of text\n  technology_usage: text required\n  preferred_channels: list of text\n  quote_that_represents_them: text required\n\ninterface research_planning:\n  show research_method_selector:\n    title: \"Choose Your Research Approach\"\n    subtitle: \"Select methods based on your questions and constraints\"\n    \n    display method_categories:\n      discovery_methods:\n        title: \"Discovery & Exploration\"\n        description: \"Understand problems and opportunities\"\n        methods: [\"Ethnographic Research\", \"Contextual Inquiry\", \"Diary Studies\", \"Generative Interviews\"]\n        \n      validation_methods:\n        title: \"Validation & Testing\"\n        description: \"Test concepts and measure behavior\"\n        methods: [\"Usability Testing\", \"A/B Testing\", \"Prototype Testing\", \"Card Sorting\"]\n        \n      measurement_methods:\n        title: \"Measurement & Analytics\"\n        description: \"Quantify behavior and performance\"\n        methods: [\"Analytics Analysis\", \"Survey Research\", \"Heatmap Analysis\", \"Conversion Funnel Analysis\"]\n        \n    when user selects research_question_type:\n      if question_type is \"what_are_user_needs\":\n        recommend discovery_methods\n        suggest qualitative_approaches\n        \n      if question_type is \"does_this_solution_work\":\n        recommend validation_methods\n        suggest usability_testing_and_metrics\n        \n      if question_type is \"how_much_improvement\":\n        recommend measurement_methods\n        suggest quantitative_approaches\n        \n  display research_planning_canvas:\n    research_objectives_section:\n      primary_questions: \"What do you need to learn?\"\n      success_criteria: \"How will you know you've learned it?\"\n      decision_points: \"What decisions will this research inform?\"\n      \n    participant_criteria:\n      target_audience: \"Who do you need to talk to?\"\n      recruitment_strategy: \"How will you find them?\"\n      sample_size: \"How many participants do you need?\"\n      \n    methodology_design:\n      selected_methods: \"What research methods will you use?\"\n      data_collection_plan: \"How will you gather information?\"\n      analysis_approach: \"How will you make sense of the data?\"\n\ninterface research_execution:\n  show interview_guide_generator:\n    when qualitative_research_selected:\n      display guide_structure:\n        warm_up_questions:\n          \"Tell me about yourself and your role\"\n          \"Walk me through a typical day\"\n          \n        context_exploration:\n          \"Describe the last time you [relevant_activity]\"\n          \"What challenges do you face when [context]?\"\n          \n        deep_dive_questions:\n          \"Why is that important to you?\"\n          \"What would make that easier?\"\n          \"What's the biggest frustration about [topic]?\"\n          \n        closing_questions:\n          \"What haven't I asked that I should have?\"\n          \"What would you want designers to know about [topic]?\"\n          \n  show survey_design_assistant:\n    when quantitative_research_selected:\n      display survey_structure:\n        screening_questions:\n          demographic_qualifiers\n          behavioral_qualifiers\n          \n        core_measurement_questions:\n          satisfaction_scales: 1-7 likert_scales\n          behavioral_frequency: \"How often do you...\"\n          preference_rankings: \"Rank these in order of importance\"\n          \n        open_ended_insights:\n          \"What's your biggest challenge with [topic]?\"\n          \"If you could change one thing, what would it be?\"\n          \n  display observation_framework:\n    when behavioral_research_needed:\n      show observation_categories:\n        task_completion_behaviors:\n          successful_completion_patterns\n          error_recovery_strategies\n          workaround_development\n          \n        emotional_responses:\n          frustration_indicators\n          confidence_moments\n          satisfaction_expressions\n          \n        contextual_factors:\n          environmental_influences\n          social_dynamics\n          technology_constraints\n\nlogic research_analysis_patterns:\n  pattern thematic_analysis:\n    when processing_qualitative_data:\n      organize raw_data:\n        transcribe interviews_and_observations\n        create data_inventory with participant_mapping\n        establish data_quality_checks\n        \n      identify initial_patterns:\n        code interesting_or_relevant_data_segments\n        group similar_codes into_categories\n        look for recurring_themes across_participants\n        \n      develop theme_structure:\n        define clear_theme_descriptions\n        collect supporting_evidence for each_theme\n        identify relationships_between_themes\n        validate themes_against_original_data\n        \n      extract actionable_insights:\n        translate themes_into_design_implications\n        prioritize insights_by_impact_and_frequency\n        connect insights_to_business_objectives\n        \n  pattern statistical_significance_testing:\n    when analyzing_quantitative_results:\n      establish baseline_metrics:\n        current_performance_levels\n        historical_trend_data\n        industry_benchmark_comparisons\n        \n      calculate statistical_confidence:\n        determine sample_size_adequacy\n        apply appropriate_statistical_tests\n        account for multiple_comparison_corrections\n        \n      interpret practical_significance:\n        assess real_world_impact_of_changes\n        consider cost_benefit_of_improvements\n        evaluate sustainability_of_changes\n        \n  pattern behavioral_segmentation:\n    when identifying_distinct_user_groups:\n      analyze behavioral_data:\n        usage_frequency_and_intensity\n        feature_adoption_patterns\n        task_completion_success_rates\n        support_request_frequencies\n        \n      identify segmentation_variables:\n        high_value_behaviors that_differentiate_users\n        stable_characteristics that_predict_behavior\n        actionable_segments that_can_be_targeted\n        \n      create segment_profiles:\n        behavioral_characteristics for each_segment\n        needs_and_motivations_driving_behavior\n        preferred_solutions_and_approaches\n        communication_preferences_and_channels\n\nlogic insight_transformation:\n  pattern jobs_to_be_done_mapping:\n    when understanding_user_motivations:\n      identify functional_jobs:\n        practical_tasks_users_need_to_accomplish\n        performance_metrics that_matter_most\n        time_and_effort_constraints\n        \n      identify emotional_jobs:\n        feelings_users_want_to_experience\n        social_perceptions they_want_to_create\n        personal_identity_aspects_involved\n        \n      identify social_jobs:\n        how_users_want_to_be_perceived\n        community_belonging_and_status\n        relationship_building_and_maintenance\n        \n      map job_context:\n        circumstances_that_trigger_job_need\n        competing_solutions_users_consider\n        obstacles_preventing_job_completion\n        \n  pattern pain_point_prioritization:\n    when determining_what_problems_to_solve:\n      assess pain_point_frequency:\n        how_often_users_experience_this_problem\n        number_of_users_affected_by_issue\n        consistency_across_different_user_segments\n        \n      evaluate pain_point_intensity:\n        severity_of_impact_on_user_experience\n        emotional_response_and_frustration_level\n        whether_pain_point_prevents_task_completion\n        \n      analyze solution_feasibility:\n        technical_complexity_of_addressing_pain_point\n        resource_requirements_for_solution_development\n        timeline_for_solution_implementation\n        \n      calculate pain_point_priority_score:\n        frequency_score multiplied_by intensity_score\n        adjusted_for solution_feasibility\n        weighted_by business_impact_potential\n        \n  pattern opportunity_identification:\n    when looking_for_innovation_possibilities:\n      map current_solution_landscape:\n        existing_approaches_users_employ\n        workarounds_and_hacks_people_create\n        tools_and_services_currently_available\n        \n      identify unmet_needs:\n        gaps_in_current_solution_offerings\n        underserved_user_segments_or_contexts\n        emerging_needs_from_changing_behaviors\n        \n      explore adjacent_possibilities:\n        solutions_successful_in_related_domains\n        emerging_technologies_that_enable_new_approaches\n        changing_social_or_economic_conditions\n        \n      design opportunity_statements:\n        clear_problem_definition_with_evidence\n        target_user_segment_and_context\n        success_criteria_and_measurement_approach\n\nlogic persona_development:\n  pattern persona_synthesis:\n    when creating_user_representations:\n      aggregate research_findings:\n        behavioral_patterns_from_observations\n        quoted_statements_from_interviews\n        demographic_data_from_surveys\n        pain_points_from_multiple_sources\n        \n      identify persona_archetypes:\n        distinct_behavioral_clusters\n        different_motivation_patterns\n        varying_context_and_constraint_factors\n        \n      develop persona_narratives:\n        realistic_background_and_context\n        specific_goals_and_motivations\n        detailed_pain_points_and_frustrations\n        preferred_solutions_and_approaches\n        \n      validate persona_accuracy:\n        test personas_against_new_research_data\n        verify personas_help_make_better_design_decisions\n        ensure personas_represent_actual_users_not_assumptions\n        \n  pattern persona_application:\n    when using_personas_for_design_decisions:\n      create design_scenarios:\n        realistic_situations_personas_would_encounter\n        specific_goals_they_would_want_to_accomplish\n        constraints_and_contexts_they_operate_within\n        \n      evaluate solutions_against_personas:\n        how_well_does_solution_meet_persona_needs\n        what_barriers_might_persona_encounter\n        how_does_solution_fit_persona_context\n        \n      identify persona_specific_optimizations:\n        features_that_would_delight_specific_personas\n        communication_approaches_that_resonate\n        onboarding_flows_that_match_persona_expectations\n\nintegrations:\n  design_intelligence_framework:\n    connect research_insights_to_problem_framing\n    feed persona_development_into_ideation_processes\n    integrate validation_methods_with_testing_frameworks\n    \n  business_strategy_patterns:\n    align research_objectives_with_business_goals\n    connect user_insights_to_market_opportunities\n    validate business_assumptions_through_user_research\n    \n  apml_ecosystem:\n    generate user_research_applications\n    compile research_findings_into_actionable_specifications\n    integrate with theme_aware_compilation for research_reporting",
  "filePath": "/Users/tomcassidy/APML/website/src/patterns/research-methodology-patterns.apml"
}
const apmlSource = ref(`app ResearchMethodologyPatterns:
  title: "Comprehensive User Research & Insight Generation Patterns"
  description: "APML-based frameworks for user research, behavioral analysis, and insight transformation into actionable solutions"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data ResearchParticipant:
  id: unique_id
  demographic_profile: text required
  behavioral_characteristics: list of text
  pain_points: list of text
  motivations: list of text
  context_of_use: text required
  technology_comfort_level: low | medium | high

data ResearchMethod:
  name: text required
  type: qualitative | quantitative | mixed_methods
  participants_needed: number required
  duration: text required
  complexity: simple | moderate | complex
  output_type: insights | metrics | behaviors | attitudes
  best_used_for: list of text

data Insight:
  source_method: text required
  insight_statement: text required
  evidence_supporting: list of text
  confidence_level: low | medium | high
  impact_potential: low | medium | high
  actionability: immediate | short_term | long_term
  related_insights: list of text

data UserPersona:
  name: text required
  demographic_summary: text required
  goals_and_motivations: list of text
  pain_points_and_frustrations: list of text
  behavioral_patterns: list of text
  technology_usage: text required
  preferred_channels: list of text
  quote_that_represents_them: text required

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
        
    when user selects research_question_type:
      if question_type is "what_are_user_needs":
        recommend discovery_methods
        suggest qualitative_approaches
        
      if question_type is "does_this_solution_work":
        recommend validation_methods
        suggest usability_testing_and_metrics
        
      if question_type is "how_much_improvement":
        recommend measurement_methods
        suggest quantitative_approaches
        
  display research_planning_canvas:
    research_objectives_section:
      primary_questions: "What do you need to learn?"
      success_criteria: "How will you know you've learned it?"
      decision_points: "What decisions will this research inform?"
      
    participant_criteria:
      target_audience: "Who do you need to talk to?"
      recruitment_strategy: "How will you find them?"
      sample_size: "How many participants do you need?"
      
    methodology_design:
      selected_methods: "What research methods will you use?"
      data_collection_plan: "How will you gather information?"
      analysis_approach: "How will you make sense of the data?"

interface research_execution:
  show interview_guide_generator:
    when qualitative_research_selected:
      display guide_structure:
        warm_up_questions:
          "Tell me about yourself and your role"
          "Walk me through a typical day"
          
        context_exploration:
          "Describe the last time you [relevant_activity]"
          "What challenges do you face when [context]?"
          
        deep_dive_questions:
          "Why is that important to you?"
          "What would make that easier?"
          "What's the biggest frustration about [topic]?"
          
        closing_questions:
          "What haven't I asked that I should have?"
          "What would you want designers to know about [topic]?"
          
  show survey_design_assistant:
    when quantitative_research_selected:
      display survey_structure:
        screening_questions:
          demographic_qualifiers
          behavioral_qualifiers
          
        core_measurement_questions:
          satisfaction_scales: 1-7 likert_scales
          behavioral_frequency: "How often do you..."
          preference_rankings: "Rank these in order of importance"
          
        open_ended_insights:
          "What's your biggest challenge with [topic]?"
          "If you could change one thing, what would it be?"
          
  display observation_framework:
    when behavioral_research_needed:
      show observation_categories:
        task_completion_behaviors:
          successful_completion_patterns
          error_recovery_strategies
          workaround_development
          
        emotional_responses:
          frustration_indicators
          confidence_moments
          satisfaction_expressions
          
        contextual_factors:
          environmental_influences
          social_dynamics
          technology_constraints

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
        
  pattern statistical_significance_testing:
    when analyzing_quantitative_results:
      establish baseline_metrics:
        current_performance_levels
        historical_trend_data
        industry_benchmark_comparisons
        
      calculate statistical_confidence:
        determine sample_size_adequacy
        apply appropriate_statistical_tests
        account for multiple_comparison_corrections
        
      interpret practical_significance:
        assess real_world_impact_of_changes
        consider cost_benefit_of_improvements
        evaluate sustainability_of_changes
        
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
        actionable_segments that_can_be_targeted
        
      create segment_profiles:
        behavioral_characteristics for each_segment
        needs_and_motivations_driving_behavior
        preferred_solutions_and_approaches
        communication_preferences_and_channels

logic insight_transformation:
  pattern jobs_to_be_done_mapping:
    when understanding_user_motivations:
      identify functional_jobs:
        practical_tasks_users_need_to_accomplish
        performance_metrics that_matter_most
        time_and_effort_constraints
        
      identify emotional_jobs:
        feelings_users_want_to_experience
        social_perceptions they_want_to_create
        personal_identity_aspects_involved
        
      identify social_jobs:
        how_users_want_to_be_perceived
        community_belonging_and_status
        relationship_building_and_maintenance
        
      map job_context:
        circumstances_that_trigger_job_need
        competing_solutions_users_consider
        obstacles_preventing_job_completion
        
  pattern pain_point_prioritization:
    when determining_what_problems_to_solve:
      assess pain_point_frequency:
        how_often_users_experience_this_problem
        number_of_users_affected_by_issue
        consistency_across_different_user_segments
        
      evaluate pain_point_intensity:
        severity_of_impact_on_user_experience
        emotional_response_and_frustration_level
        whether_pain_point_prevents_task_completion
        
      analyze solution_feasibility:
        technical_complexity_of_addressing_pain_point
        resource_requirements_for_solution_development
        timeline_for_solution_implementation
        
      calculate pain_point_priority_score:
        frequency_score multiplied_by intensity_score
        adjusted_for solution_feasibility
        weighted_by business_impact_potential
        
  pattern opportunity_identification:
    when looking_for_innovation_possibilities:
      map current_solution_landscape:
        existing_approaches_users_employ
        workarounds_and_hacks_people_create
        tools_and_services_currently_available
        
      identify unmet_needs:
        gaps_in_current_solution_offerings
        underserved_user_segments_or_contexts
        emerging_needs_from_changing_behaviors
        
      explore adjacent_possibilities:
        solutions_successful_in_related_domains
        emerging_technologies_that_enable_new_approaches
        changing_social_or_economic_conditions
        
      design opportunity_statements:
        clear_problem_definition_with_evidence
        target_user_segment_and_context
        success_criteria_and_measurement_approach

logic persona_development:
  pattern persona_synthesis:
    when creating_user_representations:
      aggregate research_findings:
        behavioral_patterns_from_observations
        quoted_statements_from_interviews
        demographic_data_from_surveys
        pain_points_from_multiple_sources
        
      identify persona_archetypes:
        distinct_behavioral_clusters
        different_motivation_patterns
        varying_context_and_constraint_factors
        
      develop persona_narratives:
        realistic_background_and_context
        specific_goals_and_motivations
        detailed_pain_points_and_frustrations
        preferred_solutions_and_approaches
        
      validate persona_accuracy:
        test personas_against_new_research_data
        verify personas_help_make_better_design_decisions
        ensure personas_represent_actual_users_not_assumptions
        
  pattern persona_application:
    when using_personas_for_design_decisions:
      create design_scenarios:
        realistic_situations_personas_would_encounter
        specific_goals_they_would_want_to_accomplish
        constraints_and_contexts_they_operate_within
        
      evaluate solutions_against_personas:
        how_well_does_solution_meet_persona_needs
        what_barriers_might_persona_encounter
        how_does_solution_fit_persona_context
        
      identify persona_specific_optimizations:
        features_that_would_delight_specific_personas
        communication_approaches_that_resonate
        onboarding_flows_that_match_persona_expectations

integrations:
  design_intelligence_framework:
    connect research_insights_to_problem_framing
    feed persona_development_into_ideation_processes
    integrate validation_methods_with_testing_frameworks
    
  business_strategy_patterns:
    align research_objectives_with_business_goals
    connect user_insights_to_market_opportunities
    validate business_assumptions_through_user_research
    
  apml_ecosystem:
    generate user_research_applications
    compile research_findings_into_actionable_specifications
    integrate with theme_aware_compilation for research_reporting`)

// Reactive data based on APML data models
// Data models from APML specification
const ResearchParticipant = ref({
  id: "",
})

const ResearchMethod = ref({
  name: "",
})

const Insight = ref({
  source_method: "",
})

const UserPersona = ref({
  name: "",
})



// Computed properties for interface elements
// Computed properties for interface elements
const research_planningElements = computed(() => ({
  research_method_selector: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const research_executionElements = computed(() => ({
  interview_guide_generator: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'ResearchMethodologyPatterns',
  title: 'Comprehensive User Research & Insight Generation Patterns',
  description: '',
  version: '1.0.0'
}
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