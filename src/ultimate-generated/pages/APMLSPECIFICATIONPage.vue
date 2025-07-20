<template>
  <div class="apmlspecificationpage">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Welcome to the Future</h1>
        <p class="page-subtitle">The Universal Language for Human-AI-Machine Collaboration</p>
      </div>
    </header>
    <main class="page-content">
      <div class="container">
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
    "name": "APML_Specification",
    "properties": {
      "title": "Welcome to the Future",
      "description": "The Universal Language for Human-AI-Machine Collaboration",
      "version": "1.0",
      "self_documenting": "true",
      "name": "text required",
      "full_name": "Application Programming Markup Language",
      "purpose": "Bridge human intent with machine execution",
      "philosophy": "Conversational code that feels like magic",
      "grandmother_test": "Readable aloud to non-technical person",
      "llm_test": "Any AI can generate valid APML from conversation",
      "developer_test": "Immediate implementation understanding",
      "compiler_test": "Unambiguous compilation to working code",
      "evolution_test": "Graceful handling of future concepts",
      "app_to_user": "Display, output, communication to users",
      "user_to_app": "Interaction, input, commands from users",
      "app_to_app": "Processing, logic, internal workflows",
      "subtitle": "Self-Documenting Universal Collaboration Language",
      "types": "\"",
      "done": "boolean default false",
      "User": "Display information",
      "content": "Where thoughts become applications",
      "timing": "immediately",
      "style": "celebration",
      "App": "Internal processing",
      "id": "unique_id",
      "email": "email unique",
      "preferences": "json",
      "created_at": "timestamp auto",
      "web": "React/Vue/Svelte + Node.js/Python/Go",
      "mobile": "React Native / Flutter / PWA",
      "desktop": "Electron / Tauri / Native",
      "backend": "Microservices / Serverless / Traditional",
      "database": "SQL / NoSQL / Graph / In-memory",
      "web_playground": "Try APML online instantly",
      "ide_extensions": "VS Code, Cursor, all major editors",
      "cli_tools": "apml compile, apml generate, apml deploy",
      "api_services": "REST endpoints for APML processing"
    }
  },
  "data": {},
  "interfaces": {},
  "logic": {},
  "rawContent": "app APML_Specification:\n  title: \"APML Language Specification v1.0\"\n  description: \"The Universal Language for Human-AI-Machine Collaboration\"\n  version: 1.0\n  self_documenting: true\n  \n  data Language:\n    name: \"APML\" \n    full_name: \"Application Programming Markup Language\"\n    purpose: \"Bridge human intent with machine execution\"\n    philosophy: \"Conversational code that feels like magic\"\n    \n  data DesignPrinciple:\n    grandmother_test: \"Readable aloud to non-technical person\"\n    llm_test: \"Any AI can generate valid APML from conversation\"\n    developer_test: \"Immediate implementation understanding\"\n    compiler_test: \"Unambiguous compilation to working code\"\n    evolution_test: \"Graceful handling of future concepts\"\n    \n  data MessageType:\n    app_to_user: \"Display, output, communication to users\"\n    user_to_app: \"Interaction, input, commands from users\"\n    app_to_app: \"Processing, logic, internal workflows\"\n    \n  interface specification_document:\n    show title: \"APML Language Specification\"\n    show subtitle: \"Self-Documenting Universal Collaboration Language\"\n    \n    display core_philosophy:\n      \"APML reads like describing an app to a friend\"\n      \"Simple concepts use simple syntax\"\n      \"Complex ideas build naturally from simple ones\"\n      \"Built for human-AI partnership from ground up\"\n      \n    show trinity_principle:\n      \"All behavior expressed through three message types:\"\n      display MessageType.app_to_user\n      display MessageType.user_to_app  \n      display MessageType.app_to_app\n      \n    display syntax_examples:\n      show basic_app_structure\n      show message_type_examples\n      show data_model_examples\n      show business_logic_examples\n      \n  logic demonstrate_syntax:\n    \n    example basic_todo_app:\n      app SimpleTodo:\n        title: \"Basic Todo List\"\n        \n        data Task:\n          title: text required\n          done: boolean default false\n          \n        interface:\n          show input for new_task_title\n          show button \"Add Task\"\n          display task_list:\n            for each task in tasks:\n              show task.title\n              show checkbox bound_to task.done\n              \n        logic:\n          when user clicks \"Add Task\":\n            if new_task_title not empty:\n              create task with title: new_task_title\n              clear new_task_title\n              refresh task_list\n    \n    example message_patterns:\n      \n      // App → User: Display information\n      show welcome_message:\n        title: \"Welcome to the Future\"\n        content: \"Where thoughts become applications\"\n        \n      notify user:\n        \"Your idea is now a working app!\"\n        timing: immediately\n        style: celebration\n        \n      // User → App: Capture interaction  \n      when user says \"create a blog about {topic}\":\n        generate blog_app with topic\n        show preview\n        ask for confirmation\n        \n      when user types search_query:\n        filter results by search_query\n        highlight matching_terms\n        \n      // App → App: Internal processing\n      process user_intent:\n        analyze natural_language_input\n        map to application_structure\n        generate working_code\n        validate compilation\n        \n      sync with external_service:\n        authenticate using api_key\n        fetch latest_data\n        update local_cache\n        \n    example advanced_features:\n      \n      data User:\n        id: unique_id\n        name: text required\n        email: email unique\n        preferences: json\n        created_at: timestamp auto\n        \n      ml predict_user_intent:\n        using conversation_history\n        analyze typing_patterns and word_choice\n        return most_likely_app_type with confidence\n        \n      realtime collaboration:\n        when any user edits shared_document:\n          broadcast changes to all_connected_users\n          resolve conflicts automatically\n          maintain edit_history\n          \n      integrate with anything:\n        connect to external_apis\n        transform data_formats automatically\n        handle authentication flows\n        manage rate_limits and retries\n        \n  data CompilationTarget:\n    web: \"React/Vue/Svelte + Node.js/Python/Go\"\n    mobile: \"React Native / Flutter / PWA\"\n    desktop: \"Electron / Tauri / Native\"\n    backend: \"Microservices / Serverless / Traditional\"\n    database: \"SQL / NoSQL / Graph / In-memory\"\n    \n  logic compilation_process:\n    parse apml_source:\n      validate syntax\n      check semantic_correctness\n      resolve dependencies\n      \n    generate target_code:\n      match patterns to templates\n      optimize for platform\n      inject best_practices\n      create deployment_configs\n      \n    ensure quality:\n      run automated_tests\n      check accessibility\n      validate security\n      measure performance\n      \n  workflow self_improvement:\n    when developers use generated_apps:\n      collect usage_patterns\n      identify common_modifications\n      learn better_generation_strategies\n      \n    when users describe new_concepts:\n      extend language_capabilities\n      maintain backward_compatibility\n      update documentation automatically\n      \n  meta_observation:\n    \"This specification demonstrates APML by example\"\n    \"Every feature described here is written in APML syntax\"\n    \"The language documents itself naturally\"\n    \"Human intent becomes machine reality\"\n    \n  deploy everywhere:\n    web_playground: \"Try APML online instantly\"\n    ide_extensions: \"VS Code, Cursor, all major editors\"\n    cli_tools: \"apml compile, apml generate, apml deploy\"\n    api_services: \"REST endpoints for APML processing\"\n    \n  vision future:\n    \"Anyone can turn ideas into working applications\"\n    \"Developers become app factories at unprecedented speed\"\n    \"Organizations capture business logic as executable intent\"\n    \"Humanity develops enhanced collaborative problem-solving\"\n    \"The methodology of thinking itself becomes codified\"\n    \n  final_truth:\n    \"APML is not just a syntax\"\n    \"APML is the language of collaborative intelligence\"\n    \"Every breakthrough will be captured in this markup\"\n    \"The future is collaborative\"\n    \"APML is that future\"",
  "filePath": "/Users/tomcassidy/APML/website/src/APML-SPECIFICATION.apml"
}
const apmlSource = ref(`app APML_Specification:
  title: "APML Language Specification v1.0"
  description: "The Universal Language for Human-AI-Machine Collaboration"
  version: 1.0
  self_documenting: true
  
  data Language:
    name: "APML" 
    full_name: "Application Programming Markup Language"
    purpose: "Bridge human intent with machine execution"
    philosophy: "Conversational code that feels like magic"
    
  data DesignPrinciple:
    grandmother_test: "Readable aloud to non-technical person"
    llm_test: "Any AI can generate valid APML from conversation"
    developer_test: "Immediate implementation understanding"
    compiler_test: "Unambiguous compilation to working code"
    evolution_test: "Graceful handling of future concepts"
    
  data MessageType:
    app_to_user: "Display, output, communication to users"
    user_to_app: "Interaction, input, commands from users"
    app_to_app: "Processing, logic, internal workflows"
    
  interface specification_document:
    show title: "APML Language Specification"
    show subtitle: "Self-Documenting Universal Collaboration Language"
    
    display core_philosophy:
      "APML reads like describing an app to a friend"
      "Simple concepts use simple syntax"
      "Complex ideas build naturally from simple ones"
      "Built for human-AI partnership from ground up"
      
    show trinity_principle:
      "All behavior expressed through three message types:"
      display MessageType.app_to_user
      display MessageType.user_to_app  
      display MessageType.app_to_app
      
    display syntax_examples:
      show basic_app_structure
      show message_type_examples
      show data_model_examples
      show business_logic_examples
      
  logic demonstrate_syntax:
    
    example basic_todo_app:
      app SimpleTodo:
        title: "Basic Todo List"
        
        data Task:
          title: text required
          done: boolean default false
          
        interface:
          show input for new_task_title
          show button "Add Task"
          display task_list:
            for each task in tasks:
              show task.title
              show checkbox bound_to task.done
              
        logic:
          when user clicks "Add Task":
            if new_task_title not empty:
              create task with title: new_task_title
              clear new_task_title
              refresh task_list
    
    example message_patterns:
      
      // App → User: Display information
      show welcome_message:
        title: "Welcome to the Future"
        content: "Where thoughts become applications"
        
      notify user:
        "Your idea is now a working app!"
        timing: immediately
        style: celebration
        
      // User → App: Capture interaction  
      when user says "create a blog about {topic}":
        generate blog_app with topic
        show preview
        ask for confirmation
        
      when user types search_query:
        filter results by search_query
        highlight matching_terms
        
      // App → App: Internal processing
      process user_intent:
        analyze natural_language_input
        map to application_structure
        generate working_code
        validate compilation
        
      sync with external_service:
        authenticate using api_key
        fetch latest_data
        update local_cache
        
    example advanced_features:
      
      data User:
        id: unique_id
        name: text required
        email: email unique
        preferences: json
        created_at: timestamp auto
        
      ml predict_user_intent:
        using conversation_history
        analyze typing_patterns and word_choice
        return most_likely_app_type with confidence
        
      realtime collaboration:
        when any user edits shared_document:
          broadcast changes to all_connected_users
          resolve conflicts automatically
          maintain edit_history
          
      integrate with anything:
        connect to external_apis
        transform data_formats automatically
        handle authentication flows
        manage rate_limits and retries
        
  data CompilationTarget:
    web: "React/Vue/Svelte + Node.js/Python/Go"
    mobile: "React Native / Flutter / PWA"
    desktop: "Electron / Tauri / Native"
    backend: "Microservices / Serverless / Traditional"
    database: "SQL / NoSQL / Graph / In-memory"
    
  logic compilation_process:
    parse apml_source:
      validate syntax
      check semantic_correctness
      resolve dependencies
      
    generate target_code:
      match patterns to templates
      optimize for platform
      inject best_practices
      create deployment_configs
      
    ensure quality:
      run automated_tests
      check accessibility
      validate security
      measure performance
      
  workflow self_improvement:
    when developers use generated_apps:
      collect usage_patterns
      identify common_modifications
      learn better_generation_strategies
      
    when users describe new_concepts:
      extend language_capabilities
      maintain backward_compatibility
      update documentation automatically
      
  meta_observation:
    "This specification demonstrates APML by example"
    "Every feature described here is written in APML syntax"
    "The language documents itself naturally"
    "Human intent becomes machine reality"
    
  deploy everywhere:
    web_playground: "Try APML online instantly"
    ide_extensions: "VS Code, Cursor, all major editors"
    cli_tools: "apml compile, apml generate, apml deploy"
    api_services: "REST endpoints for APML processing"
    
  vision future:
    "Anyone can turn ideas into working applications"
    "Developers become app factories at unprecedented speed"
    "Organizations capture business logic as executable intent"
    "Humanity develops enhanced collaborative problem-solving"
    "The methodology of thinking itself becomes codified"
    
  final_truth:
    "APML is not just a syntax"
    "APML is the language of collaborative intelligence"
    "Every breakthrough will be captured in this markup"
    "The future is collaborative"
    "APML is that future"`)

// Reactive data based on APML data models
// Data models from APML specification


// Computed properties for interface elements
// Computed properties for interface elements


// Methods for logic workflows
// Methods from APML logic workflows


// Application metadata
const appMetadata = {
  name: 'APML_Specification',
  title: 'Welcome to the Future',
  description: 'The Universal Language for Human-AI-Machine Collaboration',
  version: '1.0'
}
</script>

<style scoped>
.apmlspecificationpage {
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