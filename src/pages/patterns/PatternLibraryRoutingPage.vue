<template>
  <div class="pattern-library-routing-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML Pattern Library Website Routing & Navigation</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section main_navigation">
          <h2>Main Navigation</h2>
          <div class="element primary_navigation">
            <h3>Primary Navigation</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="interface-section pattern_library_navigation">
          <h2>Pattern Library Navigation</h2>
          <div class="element pattern_categories">
            <h3>Pattern Categories</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="interface-section learning_path_navigation">
          <h2>Learning Path Navigation</h2>
          <div class="element curated_journeys">
            <h3>Curated Journeys</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="interface-section utility_navigation">
          <h2>Utility Navigation</h2>
          <div class="element supporting_pages">
            <h3>Supporting Pages</h3>
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
    "name": "PatternLibraryRouting",
    "properties": {
      "title": "APML Pattern Library Website Routing & Navigation"
    }
  },
  "data": {
    "RouteDefinition": {
      "fields": {
        "path": "text required"
      }
    },
    "NavigationStructure": {
      "fields": {
        "main_sections": "list of RouteDefinition"
      }
    }
  },
  "interfaces": {
    "main_navigation": {
      "elements": {
        "primary_navigation": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    },
    "pattern_library_navigation": {
      "elements": {
        "pattern_categories": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    },
    "learning_path_navigation": {
      "elements": {
        "curated_journeys": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    },
    "utility_navigation": {
      "elements": {
        "supporting_pages": {
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
    "route_generation": {
      "processes": {},
      "workflows": {
        "compiling_apml_to_vue": {
          "trigger": "compiling_apml_to_vue",
          "type": "conditional"
        }
      },
      "patterns": {}
    },
    "intelligent_navigation": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    }
  },
  "rawContent": "app PatternLibraryRouting:\n  title: \"APML Pattern Library Website Routing & Navigation\"\n  description: \"Complete routing structure for accessing design intelligence, business strategy, and research methodology patterns\"\n  version: \"1.0.0\"\n  apml_specification_version: \"0.9.0\"\n\ndata RouteDefinition:\n  path: text required\n  name: text required\n  component_name: text required\n  meta_title: text required\n  meta_description: text required\n  show_in_navigation: boolean default true\n  navigation_label: text required\n  icon: text optional\n  parent_route: text optional\n\ndata NavigationStructure:\n  main_sections: list of RouteDefinition\n  pattern_library_sections: list of RouteDefinition\n  learning_path_sections: list of RouteDefinition\n  utility_sections: list of RouteDefinition\n\ninterface main_navigation:\n  show primary_navigation:\n    home_section:\n      path: \"/\"\n      name: \"Home\"\n      component: \"HomePage\"\n      navigation_label: \"Home\"\n      icon: \"home\"\n      \n    pattern_library_index_route:\n      path: \"/patterns\"\n      name: \"PatternLibrary\"\n      component: \"PatternLibraryIndexPage\"\n      meta_title: \"Design Intelligence Pattern Library | APML\"\n      meta_description: \"Complete methodologies for human-centered problem solving using APML\"\n      navigation_label: \"Pattern Library\"\n      icon: \"library\"\n      \n    learning_paths_section:\n      path: \"/learning\"\n      name: \"Learning Paths\"\n      component: \"LearningPathsPage\"\n      navigation_label: \"Learning Paths\"\n      icon: \"academic-cap\"\n      \n    specification_section:\n      path: \"/specification\"\n      name: \"Language Spec\"\n      component: \"SpecificationPage\"\n      navigation_label: \"APML Specification\"\n      icon: \"document-text\"\n      \n    playground_section:\n      path: \"/playground\"\n      name: \"Playground\"\n      component: \"PlaygroundPage\"\n      navigation_label: \"Try APML\"\n      icon: \"play\"\n\ninterface pattern_library_navigation:\n  show pattern_categories:\n    design_intelligence_routes:\n      index_route:\n        path: \"/patterns/design-intelligence\"\n        name: \"DesignIntelligence\"\n        component: \"DesignIntelligencePage\"\n        meta_title: \"Design Intelligence Framework | APML Pattern Library\"\n        meta_description: \"Comprehensive methodologies for human-centered problem solving using APML\"\n        navigation_label: \"Design Intelligence\"\n        parent_route: \"/patterns\"\n        \n      user_research_route:\n        path: \"/patterns/design-intelligence/user-research\"\n        name: \"UserResearchMethods\"\n        component: \"UserResearchMethodsPage\"\n        meta_title: \"User Research Methods | Design Intelligence | APML\"\n        meta_description: \"User journey mapping, empathy mapping, and customer interview frameworks in APML\"\n        navigation_label: \"User Research\"\n        parent_route: \"/patterns/design-intelligence\"\n        \n      problem_framing_route:\n        path: \"/patterns/design-intelligence/problem-framing\"\n        name: \"ProblemFraming\"\n        component: \"ProblemFramingPage\"\n        meta_title: \"Problem Framing Techniques | Design Intelligence | APML\"\n        meta_description: \"How Might We statements, Five Whys, and systems thinking approaches in APML\"\n        navigation_label: \"Problem Framing\"\n        parent_route: \"/patterns/design-intelligence\"\n        \n      ideation_methods_route:\n        path: \"/patterns/design-intelligence/ideation\"\n        name: \"IdeationMethods\"\n        component: \"IdeationMethodsPage\"\n        meta_title: \"Ideation & Solution Generation | Design Intelligence | APML\"\n        meta_description: \"Brainstorming, SCAMPER, and analogical thinking frameworks in APML\"\n        navigation_label: \"Ideation Methods\"\n        parent_route: \"/patterns/design-intelligence\"\n        \n      validation_frameworks_route:\n        path: \"/patterns/design-intelligence/validation\"\n        name: \"ValidationFrameworks\"\n        component: \"ValidationFrameworksPage\"\n        meta_title: \"Validation & Testing Frameworks | Design Intelligence | APML\"\n        meta_description: \"Hypothesis-driven design and experiment frameworks in APML\"\n        navigation_label: \"Validation & Testing\"\n        parent_route: \"/patterns/design-intelligence\"\n        \n    business_strategy_routes:\n      index_route:\n        path: \"/patterns/business-strategy\"\n        name: \"BusinessStrategy\"\n        component: \"BusinessStrategyPage\"\n        meta_title: \"Business Strategy Patterns | APML Pattern Library\"\n        meta_description: \"Strategic business design and model innovation patterns using APML\"\n        navigation_label: \"Business Strategy\"\n        parent_route: \"/patterns\"\n        \n      business_model_route:\n        path: \"/patterns/business-strategy/business-models\"\n        name: \"BusinessModels\"\n        component: \"BusinessModelsPage\"\n        meta_title: \"Business Model Design | Business Strategy | APML\"\n        meta_description: \"Business Model Canvas, Lean Canvas, and platform strategy frameworks in APML\"\n        navigation_label: \"Business Models\"\n        parent_route: \"/patterns/business-strategy\"\n        \n      competitive_strategy_route:\n        path: \"/patterns/business-strategy/competitive-analysis\"\n        name: \"CompetitiveStrategy\"\n        component: \"CompetitiveStrategyPage\"\n        meta_title: \"Competitive Strategy & Analysis | Business Strategy | APML\"\n        meta_description: \"Porter's Five Forces, Blue Ocean Strategy, and competitive positioning in APML\"\n        navigation_label: \"Competitive Strategy\"\n        parent_route: \"/patterns/business-strategy\"\n        \n      digital_transformation_route:\n        path: \"/patterns/business-strategy/digital-transformation\"\n        name: \"DigitalTransformation\"\n        component: \"DigitalTransformationPage\"\n        meta_title: \"Digital Transformation Strategy | Business Strategy | APML\"\n        meta_description: \"Digital business model evolution and data strategy frameworks in APML\"\n        navigation_label: \"Digital Transformation\"\n        parent_route: \"/patterns/business-strategy\"\n        \n    research_methodology_routes:\n      index_route:\n        path: \"/patterns/research-methodology\"\n        name: \"ResearchMethodology\"\n        component: \"ResearchMethodologyPage\"\n        meta_title: \"Research Methodology Patterns | APML Pattern Library\"\n        meta_description: \"User research and insight generation patterns using APML\"\n        navigation_label: \"Research Methodology\"\n        parent_route: \"/patterns\"\n        \n      research_planning_route:\n        path: \"/patterns/research-methodology/planning\"\n        name: \"ResearchPlanning\"\n        component: \"ResearchPlanningPage\"\n        meta_title: \"Research Planning & Design | Research Methodology | APML\"\n        meta_description: \"Research method selection and study design frameworks in APML\"\n        navigation_label: \"Research Planning\"\n        parent_route: \"/patterns/research-methodology\"\n        \n      data_collection_route:\n        path: \"/patterns/research-methodology/data-collection\"\n        name: \"DataCollection\"\n        component: \"DataCollectionPage\"\n        meta_title: \"Data Collection Methods | Research Methodology | APML\"\n        meta_description: \"Interview guides, survey design, and observation frameworks in APML\"\n        navigation_label: \"Data Collection\"\n        parent_route: \"/patterns/research-methodology\"\n        \n      analysis_synthesis_route:\n        path: \"/patterns/research-methodology/analysis\"\n        name: \"AnalysisSynthesis\"\n        component: \"AnalysisSynthesisPage\"\n        meta_title: \"Analysis & Synthesis | Research Methodology | APML\"\n        meta_description: \"Thematic analysis, statistical testing, and insight generation in APML\"\n        navigation_label: \"Analysis & Synthesis\"\n        parent_route: \"/patterns/research-methodology\"\n        \n      persona_development_route:\n        path: \"/patterns/research-methodology/personas\"\n        name: \"PersonaDevelopment\"\n        component: \"PersonaDevelopmentPage\"\n        meta_title: \"Persona Development | Research Methodology | APML\"\n        meta_description: \"User persona creation and application frameworks in APML\"\n        navigation_label: \"Persona Development\"\n        parent_route: \"/patterns/research-methodology\"\n\ninterface learning_path_navigation:\n  show curated_journeys:\n    design_thinking_fundamentals_route:\n      path: \"/learning/design-thinking-fundamentals\"\n      name: \"DesignThinkingFundamentals\"\n      component: \"DesignThinkingFundamentalsPath\"\n      meta_title: \"Design Thinking Fundamentals Learning Path | APML\"\n      meta_description: \"Complete beginner's guide to design thinking using APML methodologies\"\n      navigation_label: \"Design Thinking Fundamentals\"\n      parent_route: \"/learning\"\n      \n    strategic_business_design_route:\n      path: \"/learning/strategic-business-design\"\n      name: \"StrategicBusinessDesign\"\n      component: \"StrategicBusinessDesignPath\"\n      meta_title: \"Strategic Business Design Mastery | APML Learning Paths\"\n      meta_description: \"Advanced business strategy and model innovation for leaders\"\n      navigation_label: \"Strategic Business Design\"\n      parent_route: \"/learning\"\n      \n    research_driven_innovation_route:\n      path: \"/learning/research-driven-innovation\"\n      name: \"ResearchDrivenInnovation\"\n      component: \"ResearchDrivenInnovationPath\"\n      meta_title: \"Research-Driven Innovation | APML Learning Paths\"\n      meta_description: \"Evidence-based innovation for product teams and researchers\"\n      navigation_label: \"Research-Driven Innovation\"\n      parent_route: \"/learning\"\n      \n    cross_functional_collaboration_route:\n      path: \"/learning/cross-functional-collaboration\"\n      name: \"CrossFunctionalCollaboration\"\n      component: \"CrossFunctionalCollaborationPath\"\n      meta_title: \"Cross-Functional Collaboration | APML Learning Paths\"\n      meta_description: \"Integrating design, strategy, and research across teams\"\n      navigation_label: \"Cross-Functional Collaboration\"\n      parent_route: \"/learning\"\n\ninterface utility_navigation:\n  show supporting_pages:\n    pattern_search_route:\n      path: \"/patterns/search\"\n      name: \"PatternSearch\"\n      component: \"PatternSearchPage\"\n      meta_title: \"Search Pattern Library | APML\"\n      meta_description: \"Find the right methodology for your situation\"\n      navigation_label: \"Search Patterns\"\n      show_in_navigation: false\n      \n    methodology_builder_route:\n      path: \"/patterns/builder\"\n      name: \"MethodologyBuilder\"\n      component: \"MethodologyBuilderPage\"\n      meta_title: \"Custom Methodology Builder | APML\"\n      meta_description: \"Create customized methodology stacks for your team\"\n      navigation_label: \"Methodology Builder\"\n      show_in_navigation: false\n      \n    pattern_contribution_route:\n      path: \"/patterns/contribute\"\n      name: \"PatternContribution\"\n      component: \"PatternContributionPage\"\n      meta_title: \"Contribute to Pattern Library | APML\"\n      meta_description: \"Share your methodology insights with the community\"\n      navigation_label: \"Contribute Patterns\"\n      show_in_navigation: false\n\nlogic route_generation:\n  when compiling_apml_to_vue:\n    generate vue_router_configuration:\n      create routes_array from all_route_definitions\n      include nested_routes for hierarchical_navigation\n      add meta_information for seo_and_navigation\n      configure navigation_guards for authentication_if_needed\n      \n    generate navigation_components:\n      create main_navigation_component with primary_sections\n      create breadcrumb_component for hierarchical_navigation\n      create sidebar_navigation for pattern_library_sections\n      add mobile_responsive_navigation_drawer\n      \n    generate page_components:\n      for each route_definition:\n        create vue_component_file\n        include pattern_library_content\n        add navigation_between_related_patterns\n        include learning_objectives_and_outcomes\n        \n  process dynamic_content_loading:\n    when user navigates_to_pattern_page:\n      load corresponding_apml_pattern_file\n      parse pattern_structure for display\n      generate interactive_examples\n      include downloadable_templates\n      \n    when user searches_patterns:\n      index all_pattern_content for search\n      provide auto_complete_suggestions\n      filter by category_complexity_and_domain\n      rank results_by_relevance_and_popularity\n\nlogic intelligent_navigation:\n  pattern breadcrumb_generation:\n    when user_on_nested_pattern_page:\n      generate breadcrumb_trail from route_hierarchy\n      include contextual_links to related_patterns\n      show user_progress_through_learning_path\n      \n  pattern cross_pattern_linking:\n    when displaying_pattern_content:\n      identify related_patterns from other_domains\n      suggest logical_next_steps in methodology\n      link to prerequisite_knowledge if needed\n      recommend advanced_variations for experienced_users\n      \n  pattern personalized_recommendations:\n    when user browses_pattern_library:\n      track patterns_viewed_and_time_spent\n      identify user_interest_areas and skill_level\n      recommend complementary_patterns\n      suggest appropriate_learning_paths\n\nintegrations:\n  apml_compilation_system:\n    generate vue_routes from route_definitions\n    create navigation_components from navigation_structure\n    compile pattern_content into interactive_pages\n    \n  pattern_library_content:\n    load design_intelligence_patterns\n    load business_strategy_patterns  \n    load research_methodology_patterns\n    load pattern_library_index\n    \n  learning_management:\n    track user_progress_through_patterns\n    save completed_methodologies\n    generate learning_certificates\n    connect to community_features\n\nvision:\n  title: \"Seamless Pattern Library Navigation\"\n  \n  intuitive_discovery:\n    \"Users can easily find the right methodology for their situation\"\n    \"Clear hierarchical navigation with contextual recommendations\"\n    \"Search and filtering enable quick access to relevant patterns\"\n    \n  progressive_learning:\n    \"Guided paths take users from novice to expert\"\n    \"Cross-pattern linking reveals methodology connections\"\n    \"Personalized recommendations accelerate skill development\"\n    \n  community_contribution:\n    \"Easy contribution process for sharing new patterns\"\n    \"Collaborative improvement of existing methodologies\"\n    \"Recognition system for valuable community contributions\"\n    \n  \"Making world-class design intelligence accessible to everyone through intelligent navigation\" ✨",
  "filePath": "/Users/tomcassidy/APML/website/pattern-library-routing.apml"
}
const apmlSource = ref(`app PatternLibraryRouting:
  title: "APML Pattern Library Website Routing & Navigation"
  description: "Complete routing structure for accessing design intelligence, business strategy, and research methodology patterns"
  version: "1.0.0"
  apml_specification_version: "0.9.0"

data RouteDefinition:
  path: text required
  name: text required
  component_name: text required
  meta_title: text required
  meta_description: text required
  show_in_navigation: boolean default true
  navigation_label: text required
  icon: text optional
  parent_route: text optional

data NavigationStructure:
  main_sections: list of RouteDefinition
  pattern_library_sections: list of RouteDefinition
  learning_path_sections: list of RouteDefinition
  utility_sections: list of RouteDefinition

interface main_navigation:
  show primary_navigation:
    home_section:
      path: "/"
      name: "Home"
      component: "HomePage"
      navigation_label: "Home"
      icon: "home"
      
    pattern_library_index_route:
      path: "/patterns"
      name: "PatternLibrary"
      component: "PatternLibraryIndexPage"
      meta_title: "Design Intelligence Pattern Library | APML"
      meta_description: "Complete methodologies for human-centered problem solving using APML"
      navigation_label: "Pattern Library"
      icon: "library"
      
    learning_paths_section:
      path: "/learning"
      name: "Learning Paths"
      component: "LearningPathsPage"
      navigation_label: "Learning Paths"
      icon: "academic-cap"
      
    specification_section:
      path: "/specification"
      name: "Language Spec"
      component: "SpecificationPage"
      navigation_label: "APML Specification"
      icon: "document-text"
      
    playground_section:
      path: "/playground"
      name: "Playground"
      component: "PlaygroundPage"
      navigation_label: "Try APML"
      icon: "play"

interface pattern_library_navigation:
  show pattern_categories:
    design_intelligence_routes:
      index_route:
        path: "/patterns/design-intelligence"
        name: "DesignIntelligence"
        component: "DesignIntelligencePage"
        meta_title: "Design Intelligence Framework | APML Pattern Library"
        meta_description: "Comprehensive methodologies for human-centered problem solving using APML"
        navigation_label: "Design Intelligence"
        parent_route: "/patterns"
        
      user_research_route:
        path: "/patterns/design-intelligence/user-research"
        name: "UserResearchMethods"
        component: "UserResearchMethodsPage"
        meta_title: "User Research Methods | Design Intelligence | APML"
        meta_description: "User journey mapping, empathy mapping, and customer interview frameworks in APML"
        navigation_label: "User Research"
        parent_route: "/patterns/design-intelligence"
        
      problem_framing_route:
        path: "/patterns/design-intelligence/problem-framing"
        name: "ProblemFraming"
        component: "ProblemFramingPage"
        meta_title: "Problem Framing Techniques | Design Intelligence | APML"
        meta_description: "How Might We statements, Five Whys, and systems thinking approaches in APML"
        navigation_label: "Problem Framing"
        parent_route: "/patterns/design-intelligence"
        
      ideation_methods_route:
        path: "/patterns/design-intelligence/ideation"
        name: "IdeationMethods"
        component: "IdeationMethodsPage"
        meta_title: "Ideation & Solution Generation | Design Intelligence | APML"
        meta_description: "Brainstorming, SCAMPER, and analogical thinking frameworks in APML"
        navigation_label: "Ideation Methods"
        parent_route: "/patterns/design-intelligence"
        
      validation_frameworks_route:
        path: "/patterns/design-intelligence/validation"
        name: "ValidationFrameworks"
        component: "ValidationFrameworksPage"
        meta_title: "Validation & Testing Frameworks | Design Intelligence | APML"
        meta_description: "Hypothesis-driven design and experiment frameworks in APML"
        navigation_label: "Validation & Testing"
        parent_route: "/patterns/design-intelligence"
        
    business_strategy_routes:
      index_route:
        path: "/patterns/business-strategy"
        name: "BusinessStrategy"
        component: "BusinessStrategyPage"
        meta_title: "Business Strategy Patterns | APML Pattern Library"
        meta_description: "Strategic business design and model innovation patterns using APML"
        navigation_label: "Business Strategy"
        parent_route: "/patterns"
        
      business_model_route:
        path: "/patterns/business-strategy/business-models"
        name: "BusinessModels"
        component: "BusinessModelsPage"
        meta_title: "Business Model Design | Business Strategy | APML"
        meta_description: "Business Model Canvas, Lean Canvas, and platform strategy frameworks in APML"
        navigation_label: "Business Models"
        parent_route: "/patterns/business-strategy"
        
      competitive_strategy_route:
        path: "/patterns/business-strategy/competitive-analysis"
        name: "CompetitiveStrategy"
        component: "CompetitiveStrategyPage"
        meta_title: "Competitive Strategy & Analysis | Business Strategy | APML"
        meta_description: "Porter's Five Forces, Blue Ocean Strategy, and competitive positioning in APML"
        navigation_label: "Competitive Strategy"
        parent_route: "/patterns/business-strategy"
        
      digital_transformation_route:
        path: "/patterns/business-strategy/digital-transformation"
        name: "DigitalTransformation"
        component: "DigitalTransformationPage"
        meta_title: "Digital Transformation Strategy | Business Strategy | APML"
        meta_description: "Digital business model evolution and data strategy frameworks in APML"
        navigation_label: "Digital Transformation"
        parent_route: "/patterns/business-strategy"
        
    research_methodology_routes:
      index_route:
        path: "/patterns/research-methodology"
        name: "ResearchMethodology"
        component: "ResearchMethodologyPage"
        meta_title: "Research Methodology Patterns | APML Pattern Library"
        meta_description: "User research and insight generation patterns using APML"
        navigation_label: "Research Methodology"
        parent_route: "/patterns"
        
      research_planning_route:
        path: "/patterns/research-methodology/planning"
        name: "ResearchPlanning"
        component: "ResearchPlanningPage"
        meta_title: "Research Planning & Design | Research Methodology | APML"
        meta_description: "Research method selection and study design frameworks in APML"
        navigation_label: "Research Planning"
        parent_route: "/patterns/research-methodology"
        
      data_collection_route:
        path: "/patterns/research-methodology/data-collection"
        name: "DataCollection"
        component: "DataCollectionPage"
        meta_title: "Data Collection Methods | Research Methodology | APML"
        meta_description: "Interview guides, survey design, and observation frameworks in APML"
        navigation_label: "Data Collection"
        parent_route: "/patterns/research-methodology"
        
      analysis_synthesis_route:
        path: "/patterns/research-methodology/analysis"
        name: "AnalysisSynthesis"
        component: "AnalysisSynthesisPage"
        meta_title: "Analysis & Synthesis | Research Methodology | APML"
        meta_description: "Thematic analysis, statistical testing, and insight generation in APML"
        navigation_label: "Analysis & Synthesis"
        parent_route: "/patterns/research-methodology"
        
      persona_development_route:
        path: "/patterns/research-methodology/personas"
        name: "PersonaDevelopment"
        component: "PersonaDevelopmentPage"
        meta_title: "Persona Development | Research Methodology | APML"
        meta_description: "User persona creation and application frameworks in APML"
        navigation_label: "Persona Development"
        parent_route: "/patterns/research-methodology"

interface learning_path_navigation:
  show curated_journeys:
    design_thinking_fundamentals_route:
      path: "/learning/design-thinking-fundamentals"
      name: "DesignThinkingFundamentals"
      component: "DesignThinkingFundamentalsPath"
      meta_title: "Design Thinking Fundamentals Learning Path | APML"
      meta_description: "Complete beginner's guide to design thinking using APML methodologies"
      navigation_label: "Design Thinking Fundamentals"
      parent_route: "/learning"
      
    strategic_business_design_route:
      path: "/learning/strategic-business-design"
      name: "StrategicBusinessDesign"
      component: "StrategicBusinessDesignPath"
      meta_title: "Strategic Business Design Mastery | APML Learning Paths"
      meta_description: "Advanced business strategy and model innovation for leaders"
      navigation_label: "Strategic Business Design"
      parent_route: "/learning"
      
    research_driven_innovation_route:
      path: "/learning/research-driven-innovation"
      name: "ResearchDrivenInnovation"
      component: "ResearchDrivenInnovationPath"
      meta_title: "Research-Driven Innovation | APML Learning Paths"
      meta_description: "Evidence-based innovation for product teams and researchers"
      navigation_label: "Research-Driven Innovation"
      parent_route: "/learning"
      
    cross_functional_collaboration_route:
      path: "/learning/cross-functional-collaboration"
      name: "CrossFunctionalCollaboration"
      component: "CrossFunctionalCollaborationPath"
      meta_title: "Cross-Functional Collaboration | APML Learning Paths"
      meta_description: "Integrating design, strategy, and research across teams"
      navigation_label: "Cross-Functional Collaboration"
      parent_route: "/learning"

interface utility_navigation:
  show supporting_pages:
    pattern_search_route:
      path: "/patterns/search"
      name: "PatternSearch"
      component: "PatternSearchPage"
      meta_title: "Search Pattern Library | APML"
      meta_description: "Find the right methodology for your situation"
      navigation_label: "Search Patterns"
      show_in_navigation: false
      
    methodology_builder_route:
      path: "/patterns/builder"
      name: "MethodologyBuilder"
      component: "MethodologyBuilderPage"
      meta_title: "Custom Methodology Builder | APML"
      meta_description: "Create customized methodology stacks for your team"
      navigation_label: "Methodology Builder"
      show_in_navigation: false
      
    pattern_contribution_route:
      path: "/patterns/contribute"
      name: "PatternContribution"
      component: "PatternContributionPage"
      meta_title: "Contribute to Pattern Library | APML"
      meta_description: "Share your methodology insights with the community"
      navigation_label: "Contribute Patterns"
      show_in_navigation: false

logic route_generation:
  when compiling_apml_to_vue:
    generate vue_router_configuration:
      create routes_array from all_route_definitions
      include nested_routes for hierarchical_navigation
      add meta_information for seo_and_navigation
      configure navigation_guards for authentication_if_needed
      
    generate navigation_components:
      create main_navigation_component with primary_sections
      create breadcrumb_component for hierarchical_navigation
      create sidebar_navigation for pattern_library_sections
      add mobile_responsive_navigation_drawer
      
    generate page_components:
      for each route_definition:
        create vue_component_file
        include pattern_library_content
        add navigation_between_related_patterns
        include learning_objectives_and_outcomes
        
  process dynamic_content_loading:
    when user navigates_to_pattern_page:
      load corresponding_apml_pattern_file
      parse pattern_structure for display
      generate interactive_examples
      include downloadable_templates
      
    when user searches_patterns:
      index all_pattern_content for search
      provide auto_complete_suggestions
      filter by category_complexity_and_domain
      rank results_by_relevance_and_popularity

logic intelligent_navigation:
  pattern breadcrumb_generation:
    when user_on_nested_pattern_page:
      generate breadcrumb_trail from route_hierarchy
      include contextual_links to related_patterns
      show user_progress_through_learning_path
      
  pattern cross_pattern_linking:
    when displaying_pattern_content:
      identify related_patterns from other_domains
      suggest logical_next_steps in methodology
      link to prerequisite_knowledge if needed
      recommend advanced_variations for experienced_users
      
  pattern personalized_recommendations:
    when user browses_pattern_library:
      track patterns_viewed_and_time_spent
      identify user_interest_areas and skill_level
      recommend complementary_patterns
      suggest appropriate_learning_paths

integrations:
  apml_compilation_system:
    generate vue_routes from route_definitions
    create navigation_components from navigation_structure
    compile pattern_content into interactive_pages
    
  pattern_library_content:
    load design_intelligence_patterns
    load business_strategy_patterns  
    load research_methodology_patterns
    load pattern_library_index
    
  learning_management:
    track user_progress_through_patterns
    save completed_methodologies
    generate learning_certificates
    connect to community_features

vision:
  title: "Seamless Pattern Library Navigation"
  
  intuitive_discovery:
    "Users can easily find the right methodology for their situation"
    "Clear hierarchical navigation with contextual recommendations"
    "Search and filtering enable quick access to relevant patterns"
    
  progressive_learning:
    "Guided paths take users from novice to expert"
    "Cross-pattern linking reveals methodology connections"
    "Personalized recommendations accelerate skill development"
    
  community_contribution:
    "Easy contribution process for sharing new patterns"
    "Collaborative improvement of existing methodologies"
    "Recognition system for valuable community contributions"
    
  "Making world-class design intelligence accessible to everyone through intelligent navigation" ✨`)

// Reactive data based on APML data models
// Data models from APML specification
const RouteDefinition = ref({
  path: "",
})

const NavigationStructure = ref({
  main_sections: [],
})



// Computed properties for interface elements
// Computed properties for interface elements
const main_navigationElements = computed(() => ({
  primary_navigation: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const pattern_library_navigationElements = computed(() => ({
  pattern_categories: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const learning_path_navigationElements = computed(() => ({
  curated_journeys: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const utility_navigationElements = computed(() => ({
  supporting_pages: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'PatternLibraryRouting',
  title: 'APML Pattern Library Website Routing & Navigation',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.pattern-library-routing-page {
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