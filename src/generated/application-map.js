// Application Map - Conversation to Feature Mapping
// Conservation of Conversation: Complete Intent Preservation

export const ApplicationMap = {
  "conversationToFeature": {
    "registry-specification": {
      "primaryConversation": "",
      "educationalGoal": "",
      "userExperience": "",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "event_driven",
          "functionality": "user navigates to \"/components\"",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user navigates to \"/themes\"",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks component_card",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks theme_preview",
          "trigger": "conditional_logic"
        }
      ]
    },
    "pattern-library-routing": {
      "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
      "educationalGoal": "Complete training system for design intelligence",
      "userExperience": "Interactive learning with real-world application",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "dynamic_content_loading",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "compiling_apml_to_vue",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user navigates_to_pattern_page",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user searches_patterns",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user_on_nested_pattern_page",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "displaying_pattern_content",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user browses_pattern_library",
          "trigger": "conditional_logic"
        }
      ]
    },
    "site-specification": {
      "primaryConversation": "I want a complete learning platform for human-AI collaboration",
      "educationalGoal": "Train humans and LLMs to build sophisticated apps from conversations",
      "userExperience": "Seamless journey from conversation to working application",
      "requiredComponents": [
        "contact_form"
      ],
      "applicableThemes": [],
      "functionalRequirements": []
    },
    "APML-v0.9.0": {
      "primaryConversation": "",
      "educationalGoal": "",
      "userExperience": "",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "workflow_name",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user_action",
          "trigger": "conditional_logic"
        },
        {
          "type": "app_to_app",
          "functionality": "workflow",
          "trigger": "internal_processing"
        },
        {
          "type": "app_to_app",
          "functionality": "data_workflow",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user_action",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks button",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user types text",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user says command",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "data_model_declared",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "logic_section_defined",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user submits task_form",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user marks_task_complete",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "condition",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "new_use_cases_discovered",
          "trigger": "conditional_logic"
        }
      ]
    },
    "pattern-library-navigation": {
      "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
      "educationalGoal": "Complete training system for design intelligence",
      "userExperience": "Interactive learning with real-world application",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "apml_content for display\n    apply syntax_highlighting\n    render pattern_page_template\n    \n  when pattern_file loads_successfully",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user requests_pattern_page",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "pattern_file loads_successfully",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "pattern_file fails_to_load",
          "trigger": "conditional_logic"
        }
      ]
    },
    "research-methodology-patterns": {
      "primaryConversation": "What research methods will give me the insights I need?",
      "educationalGoal": "Make research methodology accessible and systematic",
      "userExperience": "Context-aware research planning and execution",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "event_driven",
          "functionality": "processing_qualitative_data",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "analyzing_quantitative_results",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "identifying_distinct_user_groups",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "understanding_user_motivations",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "determining_what_problems_to_solve",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "looking_for_innovation_possibilities",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "creating_user_representations",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "using_personas_for_design_decisions",
          "trigger": "conditional_logic"
        }
      ]
    },
    "pattern-library-index": {
      "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
      "educationalGoal": "Complete training system for design intelligence",
      "userExperience": "Interactive learning with real-world application",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "context_analysis",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user describes_their_situation",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user completes_pattern_application",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user_research_insights_need_strategic_application",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "strategic_direction_needs_design_execution",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "design_concepts_need_research_validation",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "tracking_methodology_effectiveness",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "standard_approaches_need_adaptation",
          "trigger": "conditional_logic"
        }
      ]
    },
    "design-intelligence": {
      "primaryConversation": "How do I solve complex problems systematically using proven methodologies?",
      "educationalGoal": "Teach human-centered problem solving through executable patterns",
      "userExperience": "Guided methodology selection and intelligent execution",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "context_analysis",
          "trigger": "internal_processing"
        },
        {
          "type": "app_to_app",
          "functionality": "pattern_learning",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "multiple_methods_in_stack",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user describes problem_context",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "methodology_completed",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user_research reveals journey_pain_points",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "users struggle_to_articulate_needs",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "surface_problem_symptoms_appear",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "problem_statement_is_too_broad",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "business_strategy_needs_clarification",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "customer_experience_spans_multiple_touchpoints",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "assumptions_need_testing",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "problem_complexity_is_unclear",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "problems_have_multiple_interconnected_causes",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "addressing_recurring_problems",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "seeking breakthrough_solutions",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "existing_solutions_need_enhancement",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "future_proofing_solutions",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user_behavior_change_is_needed",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "building_sticky_user_experiences",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "decisions_affected_by_systematic_biases",
          "trigger": "conditional_logic"
        }
      ]
    },
    "business-strategy-patterns": {
      "primaryConversation": "How do I turn insights into successful business strategy?",
      "educationalGoal": "Codify business strategy frameworks into reusable patterns",
      "userExperience": "Strategic decision-making with intelligent recommendations",
      "requiredComponents": [],
      "applicableThemes": [
        "corporate_confidence"
      ],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "to demonstrate_value_quickly\n        engagement_mechanisms to increase_usage\n        retention_strategies to reduce_churn\n        expansion_opportunities to increase_revenue_per_customer\n        \n  pattern ecosystem_business_model",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "strategic_situation_assessment_needed",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "organizational_goal_setting_required",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "seeking_uncontested_market_space",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "connecting_multiple_customer_groups",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "transitioning_from_transactional_to_recurring_revenue",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "creating_interconnected_value_networks",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "traditional_business_needs_digital_enhancement",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "leveraging_data_as_strategic_asset",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "operating_in_uncertain_environments",
          "trigger": "conditional_logic"
        }
      ]
    },
    "APML-SPECIFICATION": {
      "primaryConversation": "",
      "educationalGoal": "",
      "userExperience": "",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "user_intent",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks \"Add Task\"",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user says \"create a blog about {topic}\"",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user types search_query",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "any user edits shared_document",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "developers use generated_apps",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "users describe new_concepts",
          "trigger": "conditional_logic"
        }
      ]
    },
    "components-registry": {
      "primaryConversation": "I need production-ready UI components that work out of the box",
      "educationalGoal": "Demonstrate conversational component specifications",
      "userExperience": "Instant functionality with intelligent defaults",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "component_loading",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user types in search_input",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks category_filter",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks component_card",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks preview_button",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks copy_button",
          "trigger": "conditional_logic"
        }
      ]
    },
    "themes-gallery": {
      "primaryConversation": "Make my application beautiful and on-brand",
      "educationalGoal": "Show how visual design can be expressed conversationally",
      "userExperience": "Professional aesthetics that enhance usability",
      "requiredComponents": [],
      "applicableThemes": [],
      "functionalRequirements": [
        {
          "type": "app_to_app",
          "functionality": "theme_installation",
          "trigger": "internal_processing"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks live_preview",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks download_theme",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user clicks theme_card",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "user downloads theme",
          "trigger": "conditional_logic"
        },
        {
          "type": "event_driven",
          "functionality": "theme_preview_loads",
          "trigger": "conditional_logic"
        }
      ]
    }
  },
  "userJourneys": {},
  "functionalArchitecture": {},
  "educationalFlows": {
    "beginner_to_expert": {
      "conversation": "Take me from knowing nothing to building sophisticated apps",
      "stages": [
        "Understanding APML basics and Trinity Principle",
        "Learning pattern libraries and methodologies",
        "Building first components and themes",
        "Creating complete applications",
        "Advanced integration and optimization"
      ],
      "userExperience": "Progressive learning with hands-on practice",
      "functionalRequirements": [
        "progress tracking",
        "guided tutorials",
        "practice environments"
      ]
    },
    "conversation_to_app": {
      "conversation": "Turn my idea into a working application in 15 minutes",
      "stages": [
        "Capture intent through natural conversation",
        "Validate and refine APML specification",
        "Select appropriate components and themes",
        "Compile to production-ready Vue application",
        "Deploy and iterate based on user feedback"
      ],
      "userExperience": "Seamless transformation from idea to deployed app",
      "functionalRequirements": [
        "APML validation",
        "component selection",
        "theme application",
        "compilation",
        "deployment"
      ]
    }
  }
}

export const ConversationalIntent = {
  "/Users/tomcassidy/APML/website/registry-specification.apml": {
    "primaryConversation": "",
    "educationalGoal": "",
    "userExperience": "",
    "functionalRequirements": [
      {
        "type": "event_driven",
        "functionality": "user navigates to \"/components\"",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user navigates to \"/themes\"",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks component_card",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks theme_preview",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "main_sections",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/pattern-library-routing.apml": {
    "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
    "educationalGoal": "Complete training system for design intelligence",
    "userExperience": "Interactive learning with real-world application",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "dynamic_content_loading",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "compiling_apml_to_vue",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user navigates_to_pattern_page",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user searches_patterns",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user_on_nested_pattern_page",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "displaying_pattern_content",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user browses_pattern_library",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "primary_navigation",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_categories",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "curated_journeys",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "supporting_pages",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/site-specification.apml": {
    "primaryConversation": "I want a complete learning platform for human-AI collaboration",
    "educationalGoal": "Train humans and LLMs to build sophisticated apps from conversations",
    "userExperience": "Seamless journey from conversation to working application",
    "functionalRequirements": [],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "hero_section",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/APML-v0.9.0.apml": {
    "primaryConversation": "",
    "educationalGoal": "",
    "userExperience": "",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "workflow_name",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user_action",
        "trigger": "conditional_logic"
      },
      {
        "type": "app_to_app",
        "functionality": "workflow",
        "trigger": "internal_processing"
      },
      {
        "type": "app_to_app",
        "functionality": "data_workflow",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user_action",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks button",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user types text",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user says command",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "data_model_declared",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "logic_section_defined",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user submits task_form",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user marks_task_complete",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "condition",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "new_use_cases_discovered",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "language_overview",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "syntax_patterns",
        "trigger": "display_content"
      },
      {
        "type": "user_to_app",
        "conversation": "clicks submit",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "welcome_message",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "complete_todo_example",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "task_input_form",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "task_filters",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "section_links",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/pattern-library-navigation.apml": {
    "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
    "educationalGoal": "Complete training system for design intelligence",
    "userExperience": "Interactive learning with real-world application",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "apml_content for display\n    apply syntax_highlighting\n    render pattern_page_template\n    \n  when pattern_file loads_successfully",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user requests_pattern_page",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "pattern_file loads_successfully",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "pattern_file fails_to_load",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/design-intelligence\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/business-strategy\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/research-methodology\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/design-intelligence/user-research\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/design-intelligence/problem-framing\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/design-intelligence/ideation\"",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "navigates_to \"/patterns/design-intelligence/validation\"",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_library_index",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "pattern_content",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/patterns/research-methodology-patterns.apml": {
    "primaryConversation": "What research methods will give me the insights I need?",
    "educationalGoal": "Make research methodology accessible and systematic",
    "userExperience": "Context-aware research planning and execution",
    "functionalRequirements": [
      {
        "type": "event_driven",
        "functionality": "processing_qualitative_data",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "analyzing_quantitative_results",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "identifying_distinct_user_groups",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "understanding_user_motivations",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "determining_what_problems_to_solve",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "looking_for_innovation_possibilities",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "creating_user_representations",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "using_personas_for_design_decisions",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "user_to_app",
        "conversation": "selects research_question_type",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "research_method_selector",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "interview_guide_generator",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "survey_design_assistant",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "observation_categories",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/patterns/pattern-library-index.apml": {
    "primaryConversation": "I want to learn and apply proven methodologies to my challenges",
    "educationalGoal": "Complete training system for design intelligence",
    "userExperience": "Interactive learning with real-world application",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "context_analysis",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user describes_their_situation",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user completes_pattern_application",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user_research_insights_need_strategic_application",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "strategic_direction_needs_design_execution",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "design_concepts_need_research_validation",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "tracking_methodology_effectiveness",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "standard_approaches_need_adaptation",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "user_to_app",
        "conversation": "selects domain",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "selects learning_path",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "library_overview",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "detailed_pattern_library",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "context_assessment",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "curated_learning_journeys",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "personalized_curriculum",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/patterns/design-intelligence.apml": {
    "primaryConversation": "How do I solve complex problems systematically using proven methodologies?",
    "educationalGoal": "Teach human-centered problem solving through executable patterns",
    "userExperience": "Guided methodology selection and intelligent execution",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "context_analysis",
        "trigger": "internal_processing"
      },
      {
        "type": "app_to_app",
        "functionality": "pattern_learning",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "multiple_methods_in_stack",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user describes problem_context",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "methodology_completed",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user_research reveals journey_pain_points",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "users struggle_to_articulate_needs",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "surface_problem_symptoms_appear",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "problem_statement_is_too_broad",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "business_strategy_needs_clarification",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "customer_experience_spans_multiple_touchpoints",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "assumptions_need_testing",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "problem_complexity_is_unclear",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "problems_have_multiple_interconnected_causes",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "addressing_recurring_problems",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "seeking breakthrough_solutions",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "existing_solutions_need_enhancement",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "future_proofing_solutions",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user_behavior_change_is_needed",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "building_sticky_user_experiences",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "decisions_affected_by_systematic_biases",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "user_to_app",
        "conversation": "clicks category_section",
        "trigger": "user_action"
      },
      {
        "type": "user_to_app",
        "conversation": "submits context_form",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "framework_library",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "detailed_methods",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "context_analyzer",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "personalized_stack\n\ninterface methodology_execution",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "selected_framework_guide",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "process_steps",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/patterns/business-strategy-patterns.apml": {
    "primaryConversation": "How do I turn insights into successful business strategy?",
    "educationalGoal": "Codify business strategy frameworks into reusable patterns",
    "userExperience": "Strategic decision-making with intelligent recommendations",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "to demonstrate_value_quickly\n        engagement_mechanisms to increase_usage\n        retention_strategies to reduce_churn\n        expansion_opportunities to increase_revenue_per_customer\n        \n  pattern ecosystem_business_model",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "strategic_situation_assessment_needed",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "organizational_goal_setting_required",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "seeking_uncontested_market_space",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "connecting_multiple_customer_groups",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "transitioning_from_transactional_to_recurring_revenue",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "creating_interconnected_value_networks",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "traditional_business_needs_digital_enhancement",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "leveraging_data_as_strategic_asset",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "operating_in_uncertain_environments",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "user_to_app",
        "conversation": "completes canvas_section",
        "trigger": "user_action"
      },
      {
        "type": "app_to_user",
        "conversation": "business_model_canvas",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "problem_solution_fit_focus",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "metrics_and_validation",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "competitive_analysis",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/APML-SPECIFICATION.apml": {
    "primaryConversation": "",
    "educationalGoal": "",
    "userExperience": "",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "user_intent",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks \"Add Task\"",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user says \"create a blog about {topic}\"",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user types search_query",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "any user edits shared_document",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "developers use generated_apps",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "users describe new_concepts",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "title",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "subtitle",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "trinity_principle",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "input for new_task_title\n          button \"Add Task\"\n          display task_list",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/registry/components-registry.apml": {
    "primaryConversation": "I need production-ready UI components that work out of the box",
    "educationalGoal": "Demonstrate conversational component specifications",
    "userExperience": "Instant functionality with intelligent defaults",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "component_loading",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user types in search_input",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks category_filter",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks component_card",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks preview_button",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks copy_button",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "registry_header",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "search_input",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "category_filters",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "components_grid",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "tag_chip",
        "trigger": "display_content"
      }
    ]
  },
  "/Users/tomcassidy/APML/website/src/registry/themes-gallery.apml": {
    "primaryConversation": "Make my application beautiful and on-brand",
    "educationalGoal": "Show how visual design can be expressed conversationally",
    "userExperience": "Professional aesthetics that enhance usability",
    "functionalRequirements": [
      {
        "type": "app_to_app",
        "functionality": "theme_installation",
        "trigger": "internal_processing"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks live_preview",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks download_theme",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user clicks theme_card",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "user downloads theme",
        "trigger": "conditional_logic"
      },
      {
        "type": "event_driven",
        "functionality": "theme_preview_loads",
        "trigger": "conditional_logic"
      }
    ],
    "themeContributions": {},
    "componentContributions": {},
    "conversationFlows": [
      {
        "type": "app_to_user",
        "conversation": "gallery_header",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "featured_themes_section",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "theme_hero_card",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "category_section",
        "trigger": "display_content"
      },
      {
        "type": "app_to_user",
        "conversation": "color_swatch",
        "trigger": "display_content"
      }
    ]
  }
}

export const ThemeSystem = {
  "conversationalThemes": {
    "corporate_confidence": {
      "conversation": "Make this look professional and trustworthy",
      "visualIdentity": "Clean lines, professional colors, confident typography",
      "experiencePattern": "Clear hierarchy, obvious actions, reassuring feedback",
      "brandPersonality": "Authoritative, reliable, sophisticated"
    },
    "creative_studio": {
      "conversation": "Make this feel creative and inspiring",
      "visualIdentity": "Bold colors, expressive typography, artistic layouts",
      "experiencePattern": "Playful interactions, creative freedom, inspiring content",
      "brandPersonality": "Innovative, artistic, boundary-pushing"
    },
    "zen_garden": {
      "conversation": "Make this feel calm and focused",
      "visualIdentity": "Minimal palette, spacious layouts, gentle transitions",
      "experiencePattern": "Mindful interactions, focused content, peaceful navigation",
      "brandPersonality": "Serene, thoughtful, intentional"
    }
  },
  "visualIdentity": {},
  "experiencePatterns": {},
  "brandPersonalities": {}
}

export const ComponentLibrary = {
  "conversationalComponents": {
    "signup_flow": {
      "conversation": "I want users to sign up easily and securely",
      "functionalPattern": "Multi-step registration with validation and email verification",
      "userExperience": "Guided signup with clear progress and helpful feedback",
      "vueImplementation": "SignupFlowComponent with stepper, validation, and success states"
    },
    "contact_form": {
      "conversation": "I need a contact form that converts visitors to leads",
      "functionalPattern": "Smart form with spam protection and auto-response",
      "userExperience": "Intuitive form with real-time validation and confirmation",
      "vueImplementation": "ContactFormComponent with validation, submission, and success handling"
    },
    "sidebar_navigation": {
      "conversation": "I want navigation that works on all devices and guides users",
      "functionalPattern": "Responsive sidebar with progressive disclosure",
      "userExperience": "Clear wayfinding with contextual navigation aids",
      "vueImplementation": "SidebarNavComponent with mobile-responsive behavior"
    },
    "analytics_dashboard": {
      "conversation": "I need to see my data in a way that helps me make decisions",
      "functionalPattern": "Interactive dashboard with real-time data and insights",
      "userExperience": "Scannable metrics with drill-down capabilities",
      "vueImplementation": "AnalyticsDashboardComponent with charts and filters"
    }
  },
  "functionalPatterns": {},
  "userExperienceFlows": {}
}
