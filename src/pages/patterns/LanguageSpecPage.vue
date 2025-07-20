<template>
  <div class="language-spec-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML v0.9.0 - Complete Language Specification</h1>
        <p class="page-subtitle">Generated from APML specification</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <section class="interface-section complete_specification">
          <h2>Complete Specification</h2>
          <div class="element language_overview">
            <h3>Language Overview</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="interface-section example_showcase">
          <h2>Example Showcase</h2>
          <div class="element complete_todo_example">
            <h3>Complete Todo Example</h3>
            <div class="element-content">
              <p>Element type: display</p>
            </div>
          </div>
        </section>
        <section class="interface-section specification_navigation">
          <h2>Specification Navigation</h2>
          <div class="element section_links">
            <h3>Section Links</h3>
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
import APMLCodeBlock from '../components/APMLCodeBlock.vue'

// APML Specification Data
const apmlSpec = {
  "app": {
    "name": "APML_Language_Specification",
    "properties": {
      "title": "APML v0.9.0 - Complete Language Specification"
    }
  },
  "data": {
    "LanguageCore": {
      "fields": {
        "name": "\"APML\""
      }
    },
    "DesignPrinciple": {
      "fields": {
        "grandmother_test": "\"Readable aloud to non-technical person\""
      }
    },
    "TrinityPrinciple": {
      "fields": {
        "app_to_user": "\"Display, output, communication to users\""
      }
    },
    "SyntaxFoundation": {
      "fields": {
        "application_declaration": "\"app ApplicationName:\""
      }
    },
    "DataType": {
      "fields": {
        "primitives": "\"text, number, boolean, date, timestamp, email, url, unique_id, money\""
      }
    },
    "FieldModifier": {
      "fields": {
        "required": "\"Field must have value\""
      }
    },
    "ControlFlow": {
      "fields": {
        "conditional": "\"if condition: ... else: ...\""
      }
    },
    "ExampleApplication": {
      "fields": {
        "name": "\"TodoManager\""
      }
    },
    "VersionHistory": {
      "fields": {
        "v0_9_0": "\"Grammar Foundation Release - Core syntax stabilized\""
      }
    },
    "GrammarRules": {
      "fields": {
        "application_declaration": "\"app identifier:\""
      }
    },
    "ReservedKeywords": {
      "fields": {
        "structure": "\"app, data, interface, logic, integrations, deploy\""
      }
    },
    "CompilationProcess": {
      "fields": {
        "lexical_analysis": "\"Tokenize APML source into meaningful units\""
      }
    },
    "QualityAssurance": {
      "fields": {
        "syntax_validation": "\"Grammar compliance checking\""
      }
    },
    "SpecificationMeta": {
      "fields": {
        "document_format": "\"Self-documenting APML\""
      }
    }
  },
  "interfaces": {
    "complete_specification": {
      "elements": {
        "language_overview": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    },
    "example_showcase": {
      "elements": {
        "complete_todo_example": {
          "type": "display",
          "properties": {},
          "content": {}
        }
      },
      "flows": [],
      "content": {}
    },
    "specification_navigation": {
      "elements": {
        "section_links": {
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
    "language_semantics": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    },
    "specification_evolution": {
      "processes": {},
      "workflows": {},
      "patterns": {}
    }
  },
  "rawContent": "app APML_Language_Specification:\n  title: \"APML v0.9.0 - Complete Language Specification\"\n  description: \"The Universal Language for Human-AI-Machine Collaboration\"\n  version: \"0.9.0\"\n  status: \"Grammar Foundation Release\"\n  self_documenting: true\n  \ndata LanguageCore:\n  name: \"APML\"\n  full_name: \"Application Programming Markup Language\"\n  philosophy: \"Conversational code that feels like magic\"\n  mission: \"Bridge human intent with machine execution\"\n  \ndata DesignPrinciple:\n  grandmother_test: \"Readable aloud to non-technical person\"\n  llm_test: \"Any AI can generate valid APML from conversation\"\n  developer_test: \"Immediate implementation understanding\"\n  compiler_test: \"Unambiguous compilation to working code\"\n  evolution_test: \"Graceful handling of future concepts\"\n  \ndata TrinityPrinciple:\n  app_to_user: \"Display, output, communication to users\"\n  user_to_app: \"Interaction, input, commands from users\"\n  app_to_app: \"Processing, logic, internal workflows\"\n  universality: \"Every application behavior maps to these three patterns\"\n  \ndata SyntaxFoundation:\n  application_declaration: \"app ApplicationName:\"\n  data_model_declaration: \"data ModelName:\"\n  interface_declaration: \"interface optional_name:\"\n  logic_declaration: \"logic optional_name:\"\n  field_definition: \"field_name: data_type modifiers\"\n  \ndata DataType:\n  primitives: \"text, number, boolean, date, timestamp, email, url, unique_id, money\"\n  collections: \"list of DataType\"\n  unions: \"type1 | type2 | type3\"\n  references: \"ModelName\"\n  \ndata FieldModifier:\n  required: \"Field must have value\"\n  optional: \"Field may be empty\"\n  default_value: \"default literal_value\"\n  auto_generated: \"auto (for timestamps, ids)\"\n  unique_constraint: \"unique (for identifiers, emails)\"\n  \ndata ControlFlow:\n  conditional: \"if condition: ... else: ...\"\n  iteration: \"for each item in collection: ...\"\n  temporal: \"when user_action: ...\"\n  processing: \"process workflow_name: ...\"\n  \ninterface complete_specification:\n  \n  show language_overview:\n    title: \"APML v0.9.0 Complete Specification\"\n    subtitle: \"Foundation Release - Grammar Stabilized\"\n    \n  display core_concepts:\n    trinity_principle: \"Three fundamental message types\"\n    conversational_syntax: \"Natural language patterns\"\n    compilation_certainty: \"Unambiguous code generation\"\n    universal_compatibility: \"All platforms, all LLMs, all complexity levels\"\n    \n  show syntax_patterns:\n    title: \"Core Syntax Patterns\"\n    \n    application_structure_example:\n      app_declaration: \"app TodoManager:\"\n      metadata: \"title, description, version\"\n      data_models: \"data Task: ...\"\n      interface_definition: \"interface task_management: ...\"\n      business_logic: \"logic task_operations: ...\"\n      \n    data_modeling_example:\n      basic_model: \"data User:\"\n      fields: \"name: text required, email: email unique\"\n      relationships: \"tasks: list of Task\"\n      \n    interface_patterns_example:\n      display_elements: \"show welcome_message:\"\n      user_interactions: \"when user clicks submit:\"\n      dynamic_content: \"for each task in tasks:\"\n      \n    logic_workflows_example:\n      event_handling: \"when user_action:\"\n      data_processing: \"process workflow:\"\n      calculations: \"calculate total_score:\"\n      \n  display message_type_patterns:\n    title: \"Trinity Principle Implementation\"\n    \n    app_to_user_messages:\n      display_pattern: \"show element_name:\"\n      notification_pattern: \"notify user:\"\n      output_pattern: \"display results:\"\n      \n    user_to_app_messages:\n      interaction_pattern: \"when user clicks button:\"\n      input_pattern: \"when user types text:\"\n      command_pattern: \"when user says command:\"\n      \n    app_to_app_messages:\n      processing_pattern: \"process data_workflow:\"\n      calculation_pattern: \"calculate business_metrics:\"\n      integration_pattern: \"sync with external_service:\"\n      \n  show compilation_targets:\n    title: \"Universal Compilation Support\"\n    \n    web_platforms:\n      frontend: \"React, Vue, Svelte with TypeScript\"\n      backend: \"Node.js, Python, Go REST APIs\"\n      database: \"PostgreSQL, MongoDB with auto-schemas\"\n      \n    mobile_platforms:\n      react_native: \"iOS/Android shared logic\"\n      flutter: \"Cross-platform native performance\"\n      pwa: \"Progressive Web App experiences\"\n      \n    desktop_platforms:\n      electron: \"Windows/Mac/Linux compatibility\"\n      tauri: \"Secure, lightweight desktop apps\"\n      native: \"Platform-specific optimization\"\n      \nlogic language_semantics:\n  \n  validate_application_structure:\n    require app_declaration at document_start\n    allow zero_or_more data_models\n    require interface_or_logic section\n    validate trinity_principle_coverage\n    \n  parse_data_models:\n    when data_model_declared:\n      extract model_name from declaration\n      parse field_definitions with types_and_modifiers\n      validate field_syntax and type_compatibility\n      ensure unique_field_names within model\n      \n  process_interface_definitions:\n    when interface_section_encountered:\n      parse display_elements and interaction_handlers\n      validate user_experience_completeness\n      ensure accessibility_compliance\n      map to target_platform_components\n      \n  execute_logic_workflows:\n    when logic_section_defined:\n      parse event_handlers and business_rules\n      validate workflow_completeness\n      ensure error_handling_coverage\n      generate executable_implementation\n      \n  compile_to_target_platform:\n    analyze application_requirements\n    select optimal_compilation_strategy\n    generate platform_specific_code\n    apply security_and_performance_optimizations\n    create deployment_configurations\n    \ndata ExampleApplication:\n  name: \"TodoManager\"\n  demonstrates: \"Complete APML application showcasing all language features\"\n  \ninterface example_showcase:\n  \n  show complete_todo_example:\n    title: \"Complete APML Application Example\"\n    \n    example_code: \"\"\"\n    app TodoManager:\n      title: \"Personal Task Manager\"\n      description: \"Simple todo list with priorities and deadlines\"\n      version: 1.0\n      \n    data Task:\n      id: unique_id\n      title: text required\n      description: text optional\n      priority: high | medium | low default medium\n      status: pending | in_progress | completed default pending\n      due_date: date optional\n      created_at: timestamp auto\n      \n    data User:\n      id: unique_id\n      name: text required\n      email: email unique\n      tasks: list of Task\n      \n    interface task_management:\n      show task_input_form:\n        title: \"Add New Task\"\n        placeholder: \"What needs to be done?\"\n        \n      display task_list:\n        task_content: \"Dynamic task list with filtering\"\n            \n      show task_filters:\n        filter_by_status: pending | in_progress | completed\n        filter_by_priority: high | medium | low\n        \n    logic task_operations:\n      when user submits task_form:\n        validate task.title is not empty\n        if valid:\n          create new_task with user_input\n          add to user.tasks\n          clear form_fields\n          show success_message\n          \n      when user marks_task_complete:\n        update task.status to completed\n        trigger completion_animation\n        update progress_statistics\n        \n      calculate productivity_score:\n        completed_tasks = count tasks where status is completed\n        total_tasks = count all user.tasks\n        if total_tasks > 0:\n          return (completed_tasks / total_tasks) * 100\n        else:\n          return 0\n    \"\"\"\n    \ndata VersionHistory:\n  v0_9_0: \"Grammar Foundation Release - Core syntax stabilized\"\n  future_v0_10_0: \"Advanced Features - ML integration, real-time collaboration\"\n  future_v0_11_0: \"Platform Extensions - Mobile, desktop, voice interfaces\"\n  future_v1_0_0: \"Production Ready - Complete specification stabilized\"\n  \ndata GrammarRules:\n  application_declaration: \"app identifier:\"\n  data_model: \"data identifier: field_list\"\n  field_definition: \"identifier: data_type optional_modifiers\"\n  interface_section: \"interface optional_identifier: element_list\"\n  logic_section: \"logic optional_identifier: workflow_list\"\n  event_handler: \"when condition: action_list\"\n  conditional: \"if condition: action_list optional_else\"\n  iteration: \"for each identifier in collection: action_list\"\n  \ndata ReservedKeywords:\n  structure: \"app, data, interface, logic, integrations, deploy\"\n  control: \"if, else, when, while, for, each, in, return, break, continue\"\n  data_types: \"text, number, boolean, date, timestamp, email, url, unique_id, money\"\n  modifiers: \"required, optional, default, auto, unique, list, of\"\n  actions: \"show, display, notify, send, create, read, update, delete\"\n  timing: \"now, today, tomorrow, daily, weekly, monthly, at, before, after\"\n  \ndata CompilationProcess:\n  lexical_analysis: \"Tokenize APML source into meaningful units\"\n  syntax_parsing: \"Build abstract syntax tree from tokens\"\n  semantic_analysis: \"Validate types, references, workflow completeness\"\n  code_generation: \"Transform to target platform implementation\"\n  optimization: \"Apply performance and security enhancements\"\n  \ndata QualityAssurance:\n  syntax_validation: \"Grammar compliance checking\"\n  semantic_validation: \"Type safety and logic consistency\"\n  trinity_validation: \"Message pattern completeness\"\n  compilation_validation: \"Guaranteed successful code generation\"\n  \ninterface specification_navigation:\n  show section_links:\n    core_concepts: \"Language fundamentals and philosophy\"\n    syntax_reference: \"Complete grammar and patterns\"\n    example_applications: \"Real-world APML implementations\"\n    compilation_targets: \"Platform support and generation\"\n    \nlogic specification_evolution:\n  \n  maintain_backward_compatibility:\n    preserve existing_syntax in new_versions\n    provide migration_guides for deprecated_features\n    use semantic_versioning for change_communication\n    \n  extend_language_capabilities:\n    when new_use_cases_discovered:\n      analyze pattern_requirements\n      design syntax_extensions\n      validate against design_principles\n      implement with_compiler_support\n      \n  continuous_improvement:\n    collect community_feedback\n    analyze real_world_usage\n    identify optimization_opportunities\n    evolve specification_iteratively\n    \ndata SpecificationMeta:\n  document_format: \"Self-documenting APML\"\n  demonstrates: \"Language capability by example\"\n  recursive_nature: \"APML specification written in APML\"\n  validation_status: \"Compiler-validated and executable\"\n  \nfinal_statement:\n  \"APML v0.9.0 represents the stabilized grammar foundation\"\n  \"Core syntax patterns established and compiler-validated\"\n  \"Ready for real-world application development\"\n  \"Path to v1.0 production release clearly defined\"\n  \"The universal language for collaborative intelligence begins here\" ✨",
  "filePath": "/Users/tomcassidy/APML/website/APML-v0.9.0.apml"
}
const apmlSource = ref(`app APML_Language_Specification:
  title: "APML v0.9.0 - Complete Language Specification"
  description: "The Universal Language for Human-AI-Machine Collaboration"
  version: "0.9.0"
  status: "Grammar Foundation Release"
  self_documenting: true
  
data LanguageCore:
  name: "APML"
  full_name: "Application Programming Markup Language"
  philosophy: "Conversational code that feels like magic"
  mission: "Bridge human intent with machine execution"
  
data DesignPrinciple:
  grandmother_test: "Readable aloud to non-technical person"
  llm_test: "Any AI can generate valid APML from conversation"
  developer_test: "Immediate implementation understanding"
  compiler_test: "Unambiguous compilation to working code"
  evolution_test: "Graceful handling of future concepts"
  
data TrinityPrinciple:
  app_to_user: "Display, output, communication to users"
  user_to_app: "Interaction, input, commands from users"
  app_to_app: "Processing, logic, internal workflows"
  universality: "Every application behavior maps to these three patterns"
  
data SyntaxFoundation:
  application_declaration: "app ApplicationName:"
  data_model_declaration: "data ModelName:"
  interface_declaration: "interface optional_name:"
  logic_declaration: "logic optional_name:"
  field_definition: "field_name: data_type modifiers"
  
data DataType:
  primitives: "text, number, boolean, date, timestamp, email, url, unique_id, money"
  collections: "list of DataType"
  unions: "type1 | type2 | type3"
  references: "ModelName"
  
data FieldModifier:
  required: "Field must have value"
  optional: "Field may be empty"
  default_value: "default literal_value"
  auto_generated: "auto (for timestamps, ids)"
  unique_constraint: "unique (for identifiers, emails)"
  
data ControlFlow:
  conditional: "if condition: ... else: ..."
  iteration: "for each item in collection: ..."
  temporal: "when user_action: ..."
  processing: "process workflow_name: ..."
  
interface complete_specification:
  
  show language_overview:
    title: "APML v0.9.0 Complete Specification"
    subtitle: "Foundation Release - Grammar Stabilized"
    
  display core_concepts:
    trinity_principle: "Three fundamental message types"
    conversational_syntax: "Natural language patterns"
    compilation_certainty: "Unambiguous code generation"
    universal_compatibility: "All platforms, all LLMs, all complexity levels"
    
  show syntax_patterns:
    title: "Core Syntax Patterns"
    
    application_structure_example:
      app_declaration: "app TodoManager:"
      metadata: "title, description, version"
      data_models: "data Task: ..."
      interface_definition: "interface task_management: ..."
      business_logic: "logic task_operations: ..."
      
    data_modeling_example:
      basic_model: "data User:"
      fields: "name: text required, email: email unique"
      relationships: "tasks: list of Task"
      
    interface_patterns_example:
      display_elements: "show welcome_message:"
      user_interactions: "when user clicks submit:"
      dynamic_content: "for each task in tasks:"
      
    logic_workflows_example:
      event_handling: "when user_action:"
      data_processing: "process workflow:"
      calculations: "calculate total_score:"
      
  display message_type_patterns:
    title: "Trinity Principle Implementation"
    
    app_to_user_messages:
      display_pattern: "show element_name:"
      notification_pattern: "notify user:"
      output_pattern: "display results:"
      
    user_to_app_messages:
      interaction_pattern: "when user clicks button:"
      input_pattern: "when user types text:"
      command_pattern: "when user says command:"
      
    app_to_app_messages:
      processing_pattern: "process data_workflow:"
      calculation_pattern: "calculate business_metrics:"
      integration_pattern: "sync with external_service:"
      
  show compilation_targets:
    title: "Universal Compilation Support"
    
    web_platforms:
      frontend: "React, Vue, Svelte with TypeScript"
      backend: "Node.js, Python, Go REST APIs"
      database: "PostgreSQL, MongoDB with auto-schemas"
      
    mobile_platforms:
      react_native: "iOS/Android shared logic"
      flutter: "Cross-platform native performance"
      pwa: "Progressive Web App experiences"
      
    desktop_platforms:
      electron: "Windows/Mac/Linux compatibility"
      tauri: "Secure, lightweight desktop apps"
      native: "Platform-specific optimization"
      
logic language_semantics:
  
  validate_application_structure:
    require app_declaration at document_start
    allow zero_or_more data_models
    require interface_or_logic section
    validate trinity_principle_coverage
    
  parse_data_models:
    when data_model_declared:
      extract model_name from declaration
      parse field_definitions with types_and_modifiers
      validate field_syntax and type_compatibility
      ensure unique_field_names within model
      
  process_interface_definitions:
    when interface_section_encountered:
      parse display_elements and interaction_handlers
      validate user_experience_completeness
      ensure accessibility_compliance
      map to target_platform_components
      
  execute_logic_workflows:
    when logic_section_defined:
      parse event_handlers and business_rules
      validate workflow_completeness
      ensure error_handling_coverage
      generate executable_implementation
      
  compile_to_target_platform:
    analyze application_requirements
    select optimal_compilation_strategy
    generate platform_specific_code
    apply security_and_performance_optimizations
    create deployment_configurations
    
data ExampleApplication:
  name: "TodoManager"
  demonstrates: "Complete APML application showcasing all language features"
  
interface example_showcase:
  
  show complete_todo_example:
    title: "Complete APML Application Example"
    
    example_code: """
    app TodoManager:
      title: "Personal Task Manager"
      description: "Simple todo list with priorities and deadlines"
      version: 1.0
      
    data Task:
      id: unique_id
      title: text required
      description: text optional
      priority: high | medium | low default medium
      status: pending | in_progress | completed default pending
      due_date: date optional
      created_at: timestamp auto
      
    data User:
      id: unique_id
      name: text required
      email: email unique
      tasks: list of Task
      
    interface task_management:
      show task_input_form:
        title: "Add New Task"
        placeholder: "What needs to be done?"
        
      display task_list:
        task_content: "Dynamic task list with filtering"
            
      show task_filters:
        filter_by_status: pending | in_progress | completed
        filter_by_priority: high | medium | low
        
    logic task_operations:
      when user submits task_form:
        validate task.title is not empty
        if valid:
          create new_task with user_input
          add to user.tasks
          clear form_fields
          show success_message
          
      when user marks_task_complete:
        update task.status to completed
        trigger completion_animation
        update progress_statistics
        
      calculate productivity_score:
        completed_tasks = count tasks where status is completed
        total_tasks = count all user.tasks
        if total_tasks > 0:
          return (completed_tasks / total_tasks) * 100
        else:
          return 0
    """
    
data VersionHistory:
  v0_9_0: "Grammar Foundation Release - Core syntax stabilized"
  future_v0_10_0: "Advanced Features - ML integration, real-time collaboration"
  future_v0_11_0: "Platform Extensions - Mobile, desktop, voice interfaces"
  future_v1_0_0: "Production Ready - Complete specification stabilized"
  
data GrammarRules:
  application_declaration: "app identifier:"
  data_model: "data identifier: field_list"
  field_definition: "identifier: data_type optional_modifiers"
  interface_section: "interface optional_identifier: element_list"
  logic_section: "logic optional_identifier: workflow_list"
  event_handler: "when condition: action_list"
  conditional: "if condition: action_list optional_else"
  iteration: "for each identifier in collection: action_list"
  
data ReservedKeywords:
  structure: "app, data, interface, logic, integrations, deploy"
  control: "if, else, when, while, for, each, in, return, break, continue"
  data_types: "text, number, boolean, date, timestamp, email, url, unique_id, money"
  modifiers: "required, optional, default, auto, unique, list, of"
  actions: "show, display, notify, send, create, read, update, delete"
  timing: "now, today, tomorrow, daily, weekly, monthly, at, before, after"
  
data CompilationProcess:
  lexical_analysis: "Tokenize APML source into meaningful units"
  syntax_parsing: "Build abstract syntax tree from tokens"
  semantic_analysis: "Validate types, references, workflow completeness"
  code_generation: "Transform to target platform implementation"
  optimization: "Apply performance and security enhancements"
  
data QualityAssurance:
  syntax_validation: "Grammar compliance checking"
  semantic_validation: "Type safety and logic consistency"
  trinity_validation: "Message pattern completeness"
  compilation_validation: "Guaranteed successful code generation"
  
interface specification_navigation:
  show section_links:
    core_concepts: "Language fundamentals and philosophy"
    syntax_reference: "Complete grammar and patterns"
    example_applications: "Real-world APML implementations"
    compilation_targets: "Platform support and generation"
    
logic specification_evolution:
  
  maintain_backward_compatibility:
    preserve existing_syntax in new_versions
    provide migration_guides for deprecated_features
    use semantic_versioning for change_communication
    
  extend_language_capabilities:
    when new_use_cases_discovered:
      analyze pattern_requirements
      design syntax_extensions
      validate against design_principles
      implement with_compiler_support
      
  continuous_improvement:
    collect community_feedback
    analyze real_world_usage
    identify optimization_opportunities
    evolve specification_iteratively
    
data SpecificationMeta:
  document_format: "Self-documenting APML"
  demonstrates: "Language capability by example"
  recursive_nature: "APML specification written in APML"
  validation_status: "Compiler-validated and executable"
  
final_statement:
  "APML v0.9.0 represents the stabilized grammar foundation"
  "Core syntax patterns established and compiler-validated"
  "Ready for real-world application development"
  "Path to v1.0 production release clearly defined"
  "The universal language for collaborative intelligence begins here" ✨`)

// Reactive data based on APML data models
// Data models from APML specification
const LanguageCore = ref({
  name: null,
})

const DesignPrinciple = ref({
  grandmother_test: null,
})

const TrinityPrinciple = ref({
  app_to_user: null,
})

const SyntaxFoundation = ref({
  application_declaration: null,
})

const DataType = ref({
  primitives: "",
})

const FieldModifier = ref({
  required: null,
})

const ControlFlow = ref({
  conditional: null,
})

const ExampleApplication = ref({
  name: null,
})

const VersionHistory = ref({
  v0_9_0: null,
})

const GrammarRules = ref({
  application_declaration: null,
})

const ReservedKeywords = ref({
  structure: null,
})

const CompilationProcess = ref({
  lexical_analysis: null,
})

const QualityAssurance = ref({
  syntax_validation: null,
})

const SpecificationMeta = ref({
  document_format: null,
})



// Computed properties for interface elements
// Computed properties for interface elements
const complete_specificationElements = computed(() => ({
  language_overview: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const example_showcaseElements = computed(() => ({
  complete_todo_example: {
    type: 'display',
    properties: {},
    content: {}
  },
}))

const specification_navigationElements = computed(() => ({
  section_links: {
    type: 'display',
    properties: {},
    content: {}
  },
}))



// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'APML_Language_Specification',
  title: 'APML v0.9.0 - Complete Language Specification',
  description: '',
  version: '1.0.0'
}
</script>

<style scoped>
.language-spec-page {
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