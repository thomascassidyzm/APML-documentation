<template>
  <div class="pattern-library-index-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Design Intelligence Pattern Library - Master Index</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section pattern_discovery">
          <h2>Pattern Discovery</h2>
          <div class="element library_overview">
            <h3>Library Overview</h3>
              <div class="content-section domain_categories">
                <h4>Domain Categories</h4>
                <div class="methodology-grid">
                  <div class="methodology-card methodology-type">
                    <h5>Design Intelligence Domain</h5>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Title</h5>
                    <p class="methodology-description">User Research & Insight Generation</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Description</h5>
                    <p class="methodology-description">Evidence-based approaches to understanding users and markets</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Pattern Count</h5>
                    <p class="methodology-description">22</p>
                  </div>
                  <div class="methodology-card content-type">
                    <h5>Complexity Range</h5>
                    <p class="methodology-description">Beginner to Advanced</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Key Frameworks</h5>
                    <p class="methodology-description">[Thematic Analysis, Persona Development, Pain Point Prioritization, Behavioral Segmentation]</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Business Strategy Domain</h5>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Research Methodology Domain</h5>
                  </div>
                </div>
              </div>
          </div>
          <div class="element detailed_pattern_library">
            <h3>Detailed Pattern Library</h3>
              <div class="content-section pattern_card">
                <h4>Pattern Card</h4>
                <div class="methodology-grid">
                  <div class="methodology-card methodology-type">
                    <h5>Name</h5>
                    <p class="methodology-description">pattern.name</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Complexity Indicator</h5>
                    <p class="methodology-description">pattern.complexity_level</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Duration Estimate</h5>
                    <p class="methodology-description">pattern.time_required</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Prerequisites</h5>
                    <p class="methodology-description">pattern.required_skills</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Outcomes</h5>
                    <p class="methodology-description">pattern.expected_results</p>
                  </div>
                  <div class="methodology-card methodology-type">
                    <h5>Use Cases</h5>
                    <p class="methodology-description">pattern.best_applied_when</p>
                  </div>
                </div>
              </div>
              <div class="content-section smart_recommendation_engine">
                <h4>Smart Recommendation Engine</h4>
              </div>
          </div>
          <div class="element context_assessment">
            <h3>Context Assessment</h3>
          </div>
        </section>
        <section class="interface-section guided_learning_paths">
          <h2>Guided Learning Paths</h2>
          <div class="element curated_learning_journeys">
            <h3>Curated Learning Journeys</h3>
          </div>
          <div class="element personalized_curriculum">
            <h3>Personalized Curriculum</h3>
          </div>
        </section>
        <section class="interface-section logic-patterns">
          <h2>Methodologies & Frameworks</h2>
          <div class="patterns-section">
            <h3>Design Patterns & Methodologies</h3>
            <div class="methodology-grid">
            <div class="methodology-card pattern-type">
              <h5>Research To Strategy Pipeline</h5>
            </div>
            <div class="methodology-card pattern-type">
              <h5>Success Pattern Identification</h5>
            </div>
            </div>
          </div>
          <div class="processes-section">
            <h3>Business Processes & Workflows</h3>
            <div class="methodology-grid">
            <div class="methodology-card process-type">
              <h5>Context Analysis</h5>
            </div>
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
    "name": "PatternLibraryIndex",
    "properties": {
      "title": "APML Design Intelligence Pattern Library - Master Index"
    }
  },
  "data": {
    "PatternLibrary": {
      "fields": {
        "id": "unique_id"
      }
    },
    "LearningPath": {
      "fields": {
        "id": "unique_id"
      }
    },
    "ApplicationContext": {
      "fields": {
        "industry": "technology | healthcare | finance | retail | education | government | nonprofit"
      }
    }
  },
  "interfaces": {
    "pattern_discovery": {
      "elements": {
        "library_overview": {
          "type": "display",
          "properties": {},
          "content": {
            "domain_categories": {}
          },
          "sections": {
            "domain_categories": {
              "title": "Domain Categories",
              "items": {
                "design_intelligence_domain": {
                  "title": "Design Intelligence Domain",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "title": {
                  "title": "Title",
                  "description": "User Research & Insight Generation",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "description": {
                  "title": "Description",
                  "description": "Evidence-based approaches to understanding users and markets",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "pattern_count": {
                  "title": "Pattern Count",
                  "description": "22",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "complexity_range": {
                  "title": "Complexity Range",
                  "description": "Beginner to Advanced",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "content"
                },
                "key_frameworks": {
                  "title": "Key Frameworks",
                  "description": "[Thematic Analysis, Persona Development, Pain Point Prioritization, Behavioral Segmentation]",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "business_strategy_domain": {
                  "title": "Business Strategy Domain",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "research_methodology_domain": {
                  "title": "Research Methodology Domain",
                  "description": "",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "detailed_pattern_library": {
          "type": "display",
          "properties": {},
          "content": {
            "pattern_card": {},
            "smart_recommendation_engine": {}
          },
          "sections": {
            "pattern_card": {
              "title": "Pattern Card",
              "items": {
                "name": {
                  "title": "Name",
                  "description": "pattern.name",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "complexity_indicator": {
                  "title": "Complexity Indicator",
                  "description": "pattern.complexity_level",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "duration_estimate": {
                  "title": "Duration Estimate",
                  "description": "pattern.time_required",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "prerequisites": {
                  "title": "Prerequisites",
                  "description": "pattern.required_skills",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "outcomes": {
                  "title": "Outcomes",
                  "description": "pattern.expected_results",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                },
                "use_cases": {
                  "title": "Use Cases",
                  "description": "pattern.best_applied_when",
                  "properties": {},
                  "methodology": {},
                  "educationalContent": {},
                  "type": "methodology"
                }
              },
              "methodologies": {},
              "educationalContent": {}
            },
            "smart_recommendation_engine": {
              "title": "Smart Recommendation Engine",
              "items": {},
              "methodologies": {},
              "educationalContent": {}
            }
          },
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "context_assessment": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [
        {
          "trigger": "user",
          "action": "selects_domain",
          "type": "user_to_app"
        }
      ],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "guided_learning_paths": {
      "elements": {
        "curated_learning_journeys": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        },
        "personalized_curriculum": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [
        {
          "trigger": "user",
          "action": "selects_learning_path",
          "type": "user_to_app"
        }
      ],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    }
  },
  "logic": {
    "intelligent_pattern_matching": {
      "processes": {
        "context_analysis": {
          "steps": [],
          "conditions": [],
          "methodology": {},
          "educationalContent": {}
        }
      },
      "workflows": {},
      "patterns": {},
      "frameworks": {},
      "methodologies": {}
    },
    "cross_domain_integration": {
      "processes": {},
      "workflows": {},
      "patterns": {
        "research_to_strategy_pipeline": {
          "name": "research_to_strategy_pipeline",
          "steps": [],
          "description": "",
          "methodology": {},
          "applications": []
        }
      },
      "frameworks": {},
      "methodologies": {}
    },
    "adaptive_methodology_evolution": {
      "processes": {},
      "workflows": {},
      "patterns": {
        "success_pattern_identification": {
          "name": "success_pattern_identification",
          "steps": [],
          "description": "",
          "methodology": {},
          "applications": []
        }
      },
      "frameworks": {},
      "methodologies": {}
    }
  },
  "rawContent": "app PatternLibraryIndex:\n  title: \"APML Design Intelligence Pattern Library - Master Index\"\n  description: \"Comprehensive index and orchestration system for all design thinking, business strategy, and research methodology patterns\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata PatternLibrary:\n  id: unique_id\n  name: text required\n  domain: design_intelligence | business_strategy | research_methodology | innovation_frameworks | systems_thinking\n  complexity_level: beginner | intermediate | advanced | expert\n  prerequisites: list of text\n  learning_objectives: list of text\n  estimated_learning_time: text required\n  practical_applications: list of text\n\ndata LearningPath:\n  id: unique_id\n  name: text required\n  description: text required\n  target_audience: text required\n  total_duration: text required\n  libraries_sequence: list of PatternLibrary\n  milestones: list of text\n  assessment_criteria: list of text\n\ndata ApplicationContext:\n  industry: technology | healthcare | finance | retail | education | government | nonprofit\n  organization_size: startup | small | medium | large | enterprise\n  project_stage: discovery | definition | development | validation | launch | optimization\n  team_experience: novice | mixed | experienced | expert\n  available_resources: minimal | moderate | substantial | unlimited\n\ninterface pattern_discovery:\n  show library_overview:\n    title: \"Complete Design Intelligence Pattern Library\"\n    subtitle: \"Transform ideas into solutions using proven APML-based methodologies\"\n    \n    display domain_categories:\n      design_intelligence_domain:\n        title: \"Design Intelligence Framework\"\n        description: \"Comprehensive methodologies for human-centered problem solving\"\n        pattern_count: 25\n        complexity_range: \"Simple to Advanced\"\n        key_frameworks: [\"User Journey Mapping\", \"Jobs-to-be-Done\", \"Five Whys\", \"How Might We\"]\n        \n      business_strategy_domain:\n        title: \"Strategic Business Design\"\n        description: \"Business model innovation and competitive strategy patterns\"\n        pattern_count: 18\n        complexity_range: \"Intermediate to Expert\"\n        key_frameworks: [\"Business Model Canvas\", \"Blue Ocean Strategy\", \"Platform Strategy\", \"OKR Alignment\"]\n        \n      research_methodology_domain:\n        title: \"User Research & Insight Generation\"\n        description: \"Evidence-based approaches to understanding users and markets\"\n        pattern_count: 22\n        complexity_range: \"Beginner to Advanced\"\n        key_frameworks: [\"Thematic Analysis\", \"Persona Development\", \"Pain Point Prioritization\", \"Behavioral Segmentation\"]\n        \n  when user selects domain:\n    show detailed_pattern_library:\n      for each pattern in selected_domain.patterns:\n        display pattern_card:\n          name: pattern.name\n          complexity_indicator: pattern.complexity_level\n          duration_estimate: pattern.time_required\n          prerequisites: pattern.required_skills\n          outcomes: pattern.expected_results\n          use_cases: pattern.best_applied_when\n          \n  display smart_recommendation_engine:\n    title: \"Get Personalized Methodology Recommendations\"\n    subtitle: \"Tell us about your situation for customized guidance\"\n    \n    show context_assessment:\n      project_description: textarea required\n      industry_selector: technology | healthcare | finance | retail | education | government | nonprofit\n      organization_stage: startup | growth | established | transformation\n      team_composition: design | product | strategy | mixed | leadership\n      timeline_constraints: days | weeks | months | ongoing\n      primary_challenge: user_understanding | problem_definition | solution_generation | validation | strategy\n\ninterface guided_learning_paths:\n  show curated_learning_journeys:\n    design_thinking_fundamentals:\n      title: \"Design Thinking Fundamentals\"\n      target_audience: \"New to design thinking and human-centered design\"\n      duration: \"2-3 weeks\"\n      path_sequence: [\n        \"User Research Basics\",\n        \"Problem Framing Techniques\", \n        \"Ideation Methods\",\n        \"Prototype & Test\"\n      ]\n      \n    strategic_business_design:\n      title: \"Strategic Business Design Mastery\"\n      target_audience: \"Business leaders and strategists\"\n      duration: \"4-6 weeks\"\n      path_sequence: [\n        \"Business Model Analysis\",\n        \"Competitive Strategy\",\n        \"Innovation Frameworks\",\n        \"Digital Transformation\"\n      ]\n      \n    research_driven_innovation:\n      title: \"Research-Driven Innovation\"\n      target_audience: \"Product teams and researchers\"\n      duration: \"3-4 weeks\"\n      path_sequence: [\n        \"Research Planning\",\n        \"Data Collection Methods\",\n        \"Analysis & Synthesis\",\n        \"Insight Application\"\n      ]\n      \n  when user selects learning_path:\n    show personalized_curriculum:\n      current_step_indicator: visual progress tracking\n      recommended_daily_time_investment: \"30-60 minutes\"\n      practical_exercises: hands_on_applications\n      reflection_prompts: learning_consolidation_questions\n      peer_learning_opportunities: community_connections\n\nlogic intelligent_pattern_matching:\n  process context_analysis:\n    when user describes_their_situation:\n      extract problem_characteristics:\n        problem_type from description_keywords\n        urgency_level from timeline_language\n        complexity_indicators from scope_description\n        stakeholder_involvement from context_clues\n        \n      classify application_domain:\n        if mentions \"customer\" or \"user\":\n          weight design_intelligence_patterns higher\n        if mentions \"business model\" or \"strategy\":\n          weight business_strategy_patterns higher\n        if mentions \"research\" or \"data\":\n          weight research_methodology_patterns higher\n          \n      assess team_capabilities:\n        experience_level from stated_background\n        available_time from timeline_constraints\n        resource_availability from organization_context\n        \n  generate personalized_recommendations:\n    create methodology_stack:\n      select primary_framework based_on problem_type\n      add supporting_methods based_on context\n      sequence methods_for optimal_learning_and_application\n      \n    optimize for_constraints:\n      if timeline_is_short:\n        prioritize high_impact_quick_methods\n        suggest parallel_execution where_appropriate\n        \n      if team_experience_is_low:\n        include additional_guidance_and_templates\n        recommend starting_with_simpler_variations\n        add extra_validation_checkpoints\n        \n      if resources_are_limited:\n        focus on methods_requiring_minimal_tools\n        suggest virtual_alternatives to in_person_methods\n        \n  track learning_progress:\n    when user completes_pattern_application:\n      collect effectiveness_feedback:\n        method_ease_of_use rating\n        quality_of_outputs_generated\n        time_actual_vs_estimated\n        would_recommend_to_others rating\n        \n      update recommendation_algorithm:\n        strengthen successful_pattern_combinations\n        identify problematic_method_sequences\n        improve context_classification_accuracy\n        \n      suggest next_learning_opportunities:\n        advanced_variations of_mastered_methods\n        complementary_patterns from_other_domains\n        integration_opportunities across_frameworks\n\nlogic cross_domain_integration:\n  pattern research_to_strategy_pipeline:\n    when user_research_insights_need_strategic_application:\n      translate user_insights_to_market_opportunities\n      connect pain_points_to_value_proposition_design\n      map user_segments_to_customer_segments\n      transform behavioral_data_to_business_model_inputs\n      \n  pattern strategy_to_design_pipeline:\n    when strategic_direction_needs_design_execution:\n      translate business_objectives_to_user_experience_goals\n      convert value_propositions_to_feature_requirements\n      map strategic_positioning_to_design_principles\n      transform competitive_advantages_to_interaction_design\n      \n  pattern design_to_validation_pipeline:\n    when design_concepts_need_research_validation:\n      convert design_hypotheses_to_research_questions\n      translate prototype_features_to_usability_test_scenarios\n      map design_principles_to_measurement_criteria\n      transform user_experience_goals_to_success_metrics\n\nlogic adaptive_methodology_evolution:\n  pattern success_pattern_identification:\n    when tracking_methodology_effectiveness:\n      analyze successful_project_characteristics:\n        problem_types_where_methods_work_best\n        team_compositions_that_maximize_success\n        organizational_contexts_that_support_adoption\n        \n      identify failure_pattern_indicators:\n        warning_signs_of_methodology_mismatch\n        common_implementation_pitfalls\n        context_factors_that_reduce_effectiveness\n        \n      extract transferable_success_factors:\n        adaptation_strategies_for_different_contexts\n        scaling_approaches_for_larger_organizations\n        integration_methods_with_existing_processes\n        \n  pattern methodology_customization:\n    when standard_approaches_need_adaptation:\n      assess contextual_modification_needs:\n        industry_specific_requirements and_constraints\n        cultural_considerations_for_global_teams\n        regulatory_compliance_requirements\n        \n      generate customized_methodology_variants:\n        modified_process_steps for_specific_contexts\n        alternative_tool_recommendations\n        adapted_success_criteria and_metrics\n        \n      validate customization_effectiveness:\n        pilot_testing_with_target_organizations\n        feedback_collection_from_practitioners\n        comparative_analysis_with_standard_approaches\n\nintegrations:\n  apml_ecosystem_connection:\n    compile pattern_applications_into_working_prototypes\n    generate apml_specifications_from_methodology_outcomes\n    connect to theme_aware_compilation_for_methodology_visualization\n    integrate with ade_workflow_for_solution_development\n    \n  external_tool_integration:\n    export methodology_guides_to_collaboration_platforms\n    sync with project_management_tools_for_process_tracking\n    integrate with survey_platforms_for_research_execution\n    connect to analytics_tools_for_outcome_measurement\n    \n  community_knowledge_sharing:\n    contribute successful_applications_to_pattern_library\n    share customization_approaches_with_practitioner_community\n    collaborate on methodology_improvement_initiatives\n    build collective_intelligence_around_pattern_effectiveness\n\nvision:\n  title: \"The Future of Systematic Innovation\"\n  \n  democratized_access_to_design_intelligence:\n    \"Every team can access world-class methodology guidance\"\n    \"Complex frameworks become approachable through APML structure\"\n    \"Learning is accelerated through intelligent recommendation\"\n    \n  continuous_methodology_improvement:\n    \"Patterns evolve based on real-world application feedback\"\n    \"Success factors are automatically identified and shared\"\n    \"Customization becomes data-driven rather than intuitive\"\n    \n  seamless_integration_across_disciplines:\n    \"Design thinking flows naturally into business strategy\"\n    \"Research insights automatically inform strategic decisions\"\n    \"Cross-functional collaboration is enabled by shared frameworks\"\n    \n  \"Transforming methodology from art to science while preserving the humanity at its core\" ✨",
  "filePath": "/Users/tomcassidy/APML/website/src/patterns/pattern-library-index.apml"
}
const apmlSource = ref(`app PatternLibraryIndex:
  title: "APML Design Intelligence Pattern Library - Master Index"
  description: "Comprehensive index and orchestration system for all design thinking, business strategy, and research methodology patterns"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data PatternLibrary:
  id: unique_id
  name: text required
  domain: design_intelligence | business_strategy | research_methodology | innovation_frameworks | systems_thinking
  complexity_level: beginner | intermediate | advanced | expert
  prerequisites: list of text
  learning_objectives: list of text
  estimated_learning_time: text required
  practical_applications: list of text

data LearningPath:
  id: unique_id
  name: text required
  description: text required
  target_audience: text required
  total_duration: text required
  libraries_sequence: list of PatternLibrary
  milestones: list of text
  assessment_criteria: list of text

data ApplicationContext:
  industry: technology | healthcare | finance | retail | education | government | nonprofit
  organization_size: startup | small | medium | large | enterprise
  project_stage: discovery | definition | development | validation | launch | optimization
  team_experience: novice | mixed | experienced | expert
  available_resources: minimal | moderate | substantial | unlimited

interface pattern_discovery:
  show library_overview:
    title: "Complete Design Intelligence Pattern Library"
    subtitle: "Transform ideas into solutions using proven APML-based methodologies"
    
    display domain_categories:
      design_intelligence_domain:
        title: "Design Intelligence Framework"
        description: "Comprehensive methodologies for human-centered problem solving"
        pattern_count: 25
        complexity_range: "Simple to Advanced"
        key_frameworks: ["User Journey Mapping", "Jobs-to-be-Done", "Five Whys", "How Might We"]
        
      business_strategy_domain:
        title: "Strategic Business Design"
        description: "Business model innovation and competitive strategy patterns"
        pattern_count: 18
        complexity_range: "Intermediate to Expert"
        key_frameworks: ["Business Model Canvas", "Blue Ocean Strategy", "Platform Strategy", "OKR Alignment"]
        
      research_methodology_domain:
        title: "User Research & Insight Generation"
        description: "Evidence-based approaches to understanding users and markets"
        pattern_count: 22
        complexity_range: "Beginner to Advanced"
        key_frameworks: ["Thematic Analysis", "Persona Development", "Pain Point Prioritization", "Behavioral Segmentation"]
        
  when user selects domain:
    show detailed_pattern_library:
      for each pattern in selected_domain.patterns:
        display pattern_card:
          name: pattern.name
          complexity_indicator: pattern.complexity_level
          duration_estimate: pattern.time_required
          prerequisites: pattern.required_skills
          outcomes: pattern.expected_results
          use_cases: pattern.best_applied_when
          
  display smart_recommendation_engine:
    title: "Get Personalized Methodology Recommendations"
    subtitle: "Tell us about your situation for customized guidance"
    
    show context_assessment:
      project_description: textarea required
      industry_selector: technology | healthcare | finance | retail | education | government | nonprofit
      organization_stage: startup | growth | established | transformation
      team_composition: design | product | strategy | mixed | leadership
      timeline_constraints: days | weeks | months | ongoing
      primary_challenge: user_understanding | problem_definition | solution_generation | validation | strategy

interface guided_learning_paths:
  show curated_learning_journeys:
    design_thinking_fundamentals:
      title: "Design Thinking Fundamentals"
      target_audience: "New to design thinking and human-centered design"
      duration: "2-3 weeks"
      path_sequence: [
        "User Research Basics",
        "Problem Framing Techniques", 
        "Ideation Methods",
        "Prototype & Test"
      ]
      
    strategic_business_design:
      title: "Strategic Business Design Mastery"
      target_audience: "Business leaders and strategists"
      duration: "4-6 weeks"
      path_sequence: [
        "Business Model Analysis",
        "Competitive Strategy",
        "Innovation Frameworks",
        "Digital Transformation"
      ]
      
    research_driven_innovation:
      title: "Research-Driven Innovation"
      target_audience: "Product teams and researchers"
      duration: "3-4 weeks"
      path_sequence: [
        "Research Planning",
        "Data Collection Methods",
        "Analysis & Synthesis",
        "Insight Application"
      ]
      
  when user selects learning_path:
    show personalized_curriculum:
      current_step_indicator: visual progress tracking
      recommended_daily_time_investment: "30-60 minutes"
      practical_exercises: hands_on_applications
      reflection_prompts: learning_consolidation_questions
      peer_learning_opportunities: community_connections

logic intelligent_pattern_matching:
  process context_analysis:
    when user describes_their_situation:
      extract problem_characteristics:
        problem_type from description_keywords
        urgency_level from timeline_language
        complexity_indicators from scope_description
        stakeholder_involvement from context_clues
        
      classify application_domain:
        if mentions "customer" or "user":
          weight design_intelligence_patterns higher
        if mentions "business model" or "strategy":
          weight business_strategy_patterns higher
        if mentions "research" or "data":
          weight research_methodology_patterns higher
          
      assess team_capabilities:
        experience_level from stated_background
        available_time from timeline_constraints
        resource_availability from organization_context
        
  generate personalized_recommendations:
    create methodology_stack:
      select primary_framework based_on problem_type
      add supporting_methods based_on context
      sequence methods_for optimal_learning_and_application
      
    optimize for_constraints:
      if timeline_is_short:
        prioritize high_impact_quick_methods
        suggest parallel_execution where_appropriate
        
      if team_experience_is_low:
        include additional_guidance_and_templates
        recommend starting_with_simpler_variations
        add extra_validation_checkpoints
        
      if resources_are_limited:
        focus on methods_requiring_minimal_tools
        suggest virtual_alternatives to in_person_methods
        
  track learning_progress:
    when user completes_pattern_application:
      collect effectiveness_feedback:
        method_ease_of_use rating
        quality_of_outputs_generated
        time_actual_vs_estimated
        would_recommend_to_others rating
        
      update recommendation_algorithm:
        strengthen successful_pattern_combinations
        identify problematic_method_sequences
        improve context_classification_accuracy
        
      suggest next_learning_opportunities:
        advanced_variations of_mastered_methods
        complementary_patterns from_other_domains
        integration_opportunities across_frameworks

logic cross_domain_integration:
  pattern research_to_strategy_pipeline:
    when user_research_insights_need_strategic_application:
      translate user_insights_to_market_opportunities
      connect pain_points_to_value_proposition_design
      map user_segments_to_customer_segments
      transform behavioral_data_to_business_model_inputs
      
  pattern strategy_to_design_pipeline:
    when strategic_direction_needs_design_execution:
      translate business_objectives_to_user_experience_goals
      convert value_propositions_to_feature_requirements
      map strategic_positioning_to_design_principles
      transform competitive_advantages_to_interaction_design
      
  pattern design_to_validation_pipeline:
    when design_concepts_need_research_validation:
      convert design_hypotheses_to_research_questions
      translate prototype_features_to_usability_test_scenarios
      map design_principles_to_measurement_criteria
      transform user_experience_goals_to_success_metrics

logic adaptive_methodology_evolution:
  pattern success_pattern_identification:
    when tracking_methodology_effectiveness:
      analyze successful_project_characteristics:
        problem_types_where_methods_work_best
        team_compositions_that_maximize_success
        organizational_contexts_that_support_adoption
        
      identify failure_pattern_indicators:
        warning_signs_of_methodology_mismatch
        common_implementation_pitfalls
        context_factors_that_reduce_effectiveness
        
      extract transferable_success_factors:
        adaptation_strategies_for_different_contexts
        scaling_approaches_for_larger_organizations
        integration_methods_with_existing_processes
        
  pattern methodology_customization:
    when standard_approaches_need_adaptation:
      assess contextual_modification_needs:
        industry_specific_requirements and_constraints
        cultural_considerations_for_global_teams
        regulatory_compliance_requirements
        
      generate customized_methodology_variants:
        modified_process_steps for_specific_contexts
        alternative_tool_recommendations
        adapted_success_criteria and_metrics
        
      validate customization_effectiveness:
        pilot_testing_with_target_organizations
        feedback_collection_from_practitioners
        comparative_analysis_with_standard_approaches

integrations:
  apml_ecosystem_connection:
    compile pattern_applications_into_working_prototypes
    generate apml_specifications_from_methodology_outcomes
    connect to theme_aware_compilation_for_methodology_visualization
    integrate with ade_workflow_for_solution_development
    
  external_tool_integration:
    export methodology_guides_to_collaboration_platforms
    sync with project_management_tools_for_process_tracking
    integrate with survey_platforms_for_research_execution
    connect to analytics_tools_for_outcome_measurement
    
  community_knowledge_sharing:
    contribute successful_applications_to_pattern_library
    share customization_approaches_with_practitioner_community
    collaborate on methodology_improvement_initiatives
    build collective_intelligence_around_pattern_effectiveness

vision:
  title: "The Future of Systematic Innovation"
  
  democratized_access_to_design_intelligence:
    "Every team can access world-class methodology guidance"
    "Complex frameworks become approachable through APML structure"
    "Learning is accelerated through intelligent recommendation"
    
  continuous_methodology_improvement:
    "Patterns evolve based on real-world application feedback"
    "Success factors are automatically identified and shared"
    "Customization becomes data-driven rather than intuitive"
    
  seamless_integration_across_disciplines:
    "Design thinking flows naturally into business strategy"
    "Research insights automatically inform strategic decisions"
    "Cross-functional collaboration is enabled by shared frameworks"
    
  "Transforming methodology from art to science while preserving the humanity at its core" ✨`)

// Reactive data based on APML data models
// Data models from APML specification
const PatternLibrary = ref({
  id: "",
})

const LearningPath = ref({
  id: "",
})

const ApplicationContext = ref({
  industry: null,
})



// Computed properties for interface elements
// Computed properties for interface elements
const pattern_discoveryElements = computed(() => ({
  library_overview: {
    type: 'display',
    properties: {},
    content: {"domain_categories":{}}
  },
  detailed_pattern_library: {
    type: 'display',
    properties: {},
    content: {"pattern_card":{},"smart_recommendation_engine":{}}
  },
  context_assessment: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const guided_learning_pathsElements = computed(() => ({
  curated_learning_journeys: {
    type: 'display',
    properties: {},
    content: {}
  },
  personalized_curriculum: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'PatternLibraryIndex',
  title: 'APML Design Intelligence Pattern Library - Master Index',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.pattern-library-index-page {
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

.educational-overview {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 8px;
  border-left: 4px solid #6366f1;
}

.educational-item {
  margin-bottom: 1rem;
}

.educational-item h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.educational-item p {
  color: #cbd5e1;
  line-height: 1.5;
}

.methodology-details {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.methodology-feature {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 6px;
}

.methodology-feature strong {
  color: #6366f1;
  margin-right: 0.5rem;
}

.methodology-framework {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(168, 85, 247, 0.05);
  border-radius: 8px;
  border-left: 3px solid #a855f7;
}

.methodology-framework h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #a855f7;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.framework-element {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.framework-label {
  font-weight: 600;
  color: #a855f7;
  margin-right: 0.5rem;
  min-width: 120px;
}

.framework-value {
  color: #e2e8f0;
  flex: 1;
}

.methodology-steps {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(34, 197, 94, 0.05);
  border-radius: 8px;
  border-left: 3px solid #22c55e;
}

.methodology-steps h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.methodology-step {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
}

.methodology-step strong {
  color: #22c55e;
  margin-right: 0.5rem;
}

.methodology-type {
  border-left: 4px solid #6366f1;
}

.content-type {
  border-left: 4px solid #94a3b8;
}

.pattern-type {
  border-left: 4px solid #a855f7;
}

.process-type {
  border-left: 4px solid #22c55e;
}

.patterns-section, .processes-section {
  margin-bottom: 2rem;
}

.patterns-section h3, .processes-section h3 {
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
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