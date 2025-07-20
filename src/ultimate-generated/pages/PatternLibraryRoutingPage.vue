<template>
  <div class="pattern-library-routing-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Seamless Pattern Library Navigation</h1>
        <p class="page-subtitle">Complete routing structure for accessing design intelligence, business strategy, and research methodology patterns</p>
      </div>
    </header>
    <nav class="table-of-contents">
      <div class="container">
        <h2>Contents</h2>
        <ul class="toc-list">
            <li><a href="#main_navigation" class="toc-link">Main Navigation</a></li>
            <li><a href="#pattern_library_navigation" class="toc-link">Pattern Library Navigation</a></li>
            <li><a href="#learning_path_navigation" class="toc-link">Learning Path Navigation</a></li>
            <li><a href="#utility_navigation" class="toc-link">Utility Navigation</a></li>
        </ul>
      </div>
    </nav>
    <main class="page-content">
      <div class="container">
        <section id="main_navigation" class="interface-section">
          <h2 >Main Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Primary Navigation</h3>
          </div>
        </section>
        <section id="pattern_library_navigation" class="interface-section">
          <h2 >Pattern Library Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Pattern Categories</h3>
          </div>
        </section>
        <section id="learning_path_navigation" class="interface-section">
          <h2 >Learning Path Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Curated Journeys</h3>
          </div>
        </section>
        <section id="utility_navigation" class="interface-section">
          <h2 >Utility Navigation</h2>
          <div class="content-block">
            <h3 class="block-title">Supporting Pages</h3>
          </div>
        </section>
        <section class="interface-section logic-patterns">
          <h2>Methodologies & Frameworks</h2>
          <div class="patterns-section">
            <h3>Design Patterns & Methodologies</h3>
            <div class="methodology-grid">
            <div class="methodology-card pattern-type">
              <h5>Breadcrumb Generation</h5>
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
    "name": "PatternLibraryRouting",
    "properties": {
      "title": "Seamless Pattern Library Navigation",
      "description": "Complete routing structure for accessing design intelligence, business strategy, and research methodology patterns",
      "version": "1.0.0",
      "apml_specification_version": "0.9.0",
      "path": "/patterns/contribute",
      "name": "PatternContribution",
      "component_name": "text required",
      "meta_title": "Contribute to Pattern Library | APML",
      "meta_description": "Share your methodology insights with the community",
      "show_in_navigation": "false",
      "navigation_label": "Contribute Patterns",
      "icon": "play",
      "parent_route": "/learning",
      "main_sections": "list of RouteDefinition",
      "pattern_library_sections": "list of RouteDefinition",
      "learning_path_sections": "list of RouteDefinition",
      "utility_sections": "list of RouteDefinition",
      "component": "PatternContributionPage"
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
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "pattern_library_navigation": {
      "elements": {
        "pattern_categories": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "learning_path_navigation": {
      "elements": {
        "curated_journeys": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    },
    "utility_navigation": {
      "elements": {
        "supporting_pages": {
          "type": "display",
          "properties": {},
          "content": {},
          "sections": {},
          "methodologies": {},
          "educationalFrameworks": {}
        }
      },
      "flows": [],
      "content": {},
      "methodologies": {},
      "frameworks": {},
      "patterns": {},
      "educationalContent": {}
    }
  },
  "logic": {
    "route_generation": {
      "processes": {},
      "workflows": {
        "compiling_apml_to_vue": {
          "trigger": "compiling_apml_to_vue",
          "type": "conditional",
          "methodology": {},
          "steps": []
        }
      },
      "patterns": {},
      "frameworks": {},
      "methodologies": {}
    },
    "intelligent_navigation": {
      "processes": {},
      "workflows": {},
      "patterns": {
        "breadcrumb_generation": {
          "name": "breadcrumb_generation",
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
  title: 'Seamless Pattern Library Navigation',
  description: 'Complete routing structure for accessing design intelligence, business strategy, and research methodology patterns',
  version: '1.0.0'
}
</script>

<style scoped>
.pattern-library-routing-page {
        min-height: 100vh;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
        color: #f8fafc;
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

.page-header {
        padding: 2rem 0 1.5rem;
        text-align: center;
        background: rgba(99, 102, 241, 0.02);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .page-title {
        font-size: 2.5rem;
        font-weight: 600;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }
      
      .page-subtitle {
        font-size: 1.125rem;
        color: #cbd5e1;
        margin: 0;
        max-width: 800px;
        margin: 0 auto;
      }

.table-of-contents {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(168, 85, 247, 0.02));
        border-left: 4px solid #6366f1;
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
      }
      
      .table-of-contents h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #6366f1;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 0.5rem;
      }
      
      .toc-link {
        display: block;
        color: #cbd5e1;
        text-decoration: none;
        padding: 0.625rem 1rem;
        border-radius: 6px;
        transition: all 0.15s ease;
        border-left: 3px solid transparent;
        font-weight: 500;
      }
      
      .toc-link:hover {
        background: rgba(99, 102, 241, 0.08);
        color: #6366f1;
        border-left-color: #6366f1;
        transform: translateX(4px);
      }

.page-content {
        padding: 1.5rem 0 3rem;
      }
      
      .content-section {
        margin-bottom: 2rem;
        scroll-margin-top: 1.5rem;
      }
      
      .section-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #6366f1;
        margin-bottom: 1.25rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(99, 102, 241, 0.3);
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .section-title::before {
        content: '';
        width: 4px;
        height: 1.5rem;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        border-radius: 2px;
      }
      
      .content-block {
        margin-bottom: 1.5rem;
      }
      
      .block-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.75rem;
      }

.properties-list {
        margin: 1rem 0;
      }
      
      .property-row {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 1rem;
        margin-bottom: 0.5rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .property-label {
        font-weight: 600;
        color: #6366f1;
        font-size: 0.9rem;
      }
      
      .property-value {
        color: #cbd5e1;
      }

.definition-item {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.03);
        border-left: 4px solid #6366f1;
        border-radius: 0 8px 8px 0;
      }
      
      .definition-title {
        font-size: 1.25rem;
        color: #f8fafc;
        margin-bottom: 0.5rem;
      }
      
      .definition-description {
        color: #cbd5e1;
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      
      .definition-meta {
        margin: 0.5rem 0;
        color: #94a3b8;
        font-size: 0.9rem;
      }

.subsection {
        margin: 2rem 0;
      }
      
      .subsection-title {
        font-size: 1.25rem;
        color: #a855f7;
        margin-bottom: 1rem;
      }

.items-list {
        margin: 0.75rem 0;
        display: grid;
        gap: 1rem;
      }
      
      .list-item {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        transition: all 0.15s ease;
        position: relative;
      }
      
      .list-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        border-radius: 0 2px 2px 0;
        opacity: 0;
        transition: opacity 0.15s ease;
      }
      
      .list-item:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(99, 102, 241, 0.3);
        transform: translateY(-2px);
      }
      
      .list-item:hover::before {
        opacity: 1;
      }
      
      .item-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .item-description {
        color: #cbd5e1;
        margin-bottom: 0.75rem;
        line-height: 1.5;
      }

.item-details,
      .methodology-details,
      .item-properties {
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 0.5rem 1rem;
      }
      
      .item-details dt,
      .methodology-details dt,
      .item-properties dt {
        font-weight: 600;
        color: #6366f1;
        font-size: 0.9rem;
      }
      
      .item-details dd,
      .methodology-details dd,
      .item-properties dd {
        color: #cbd5e1;
        margin: 0;
      }

.overview-text {
        margin: 1rem 0;
      }
      
      .overview-item {
        margin: 1rem 0;
      }
      
      .overview-item h5 {
        font-size: 1rem;
        color: #a855f7;
        margin-bottom: 0.5rem;
      }
      
      .overview-item p {
        color: #cbd5e1;
        line-height: 1.6;
      }

/* Trinity Principle Layout Patterns */
      .trinity-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
        margin: 2rem 0;
        padding: 1.5rem;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.03));
        border-radius: 12px;
        border: 1px solid rgba(99, 102, 241, 0.2);
      }
      
      .trinity-card {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
        padding: 1.25rem;
        border-left: 4px solid transparent;
        transition: all 0.2s ease;
      }
      
      .trinity-card.app-to-user {
        border-left-color: #3b82f6;
      }
      
      .trinity-card.user-to-app {
        border-left-color: #10b981;
      }
      
      .trinity-card.app-to-app {
        border-left-color: #f59e0b;
      }
      
      .trinity-card:hover {
        background: rgba(255, 255, 255, 0.06);
        transform: translateY(-2px);
      }
      
      .trinity-title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .trinity-card.app-to-user .trinity-title {
        color: #3b82f6;
      }
      
      .trinity-card.user-to-app .trinity-title {
        color: #10b981;
      }
      
      .trinity-card.app-to-app .trinity-title {
        color: #f59e0b;
      }
      
      .apml-source {
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin: 2rem 0;
        position: relative;
        overflow: hidden;
      }
      
      .apml-source::before {
        content: 'APML SOURCE';
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: #6366f1;
        opacity: 0.7;
        letter-spacing: 0.1em;
      }

@media (max-width: 768px) {
        .trinity-section {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1rem;
        }
        
        .toc-list {
          grid-template-columns: 1fr;
        }
        
        .property-row {
          grid-template-columns: 1fr;
          gap: 0.25rem;
        }
        
        .item-details,
        .methodology-details,
        .item-properties {
          grid-template-columns: 1fr;
          gap: 0.25rem;
        }
        
        .page-title {
          font-size: 2rem;
        }
        
        .container {
          padding: 0 1rem;
        }
      }


</style>