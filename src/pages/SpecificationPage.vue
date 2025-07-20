<template>
  <div class="specification-page">
    <header class="spec-hero">
      <div class="container">
        <h1 class="spec-title">APML v0.9.0 Specification</h1>
        <p class="spec-subtitle">The Universal Language for Human-AI Collaboration</p>
        <div class="spec-badges">
          <span class="badge grammar-foundation">Grammar Foundation Release</span>
          <span class="badge logically-complete">Logically Complete</span>
        </div>
      </div>
    </header>

    <main class="spec-content">
      <div class="container">
        <!-- Core Principles -->
        <section class="content-section">
          <h2>Design Principles</h2>
          <p>APML follows five fundamental principles that ensure clarity, reliability, and universal adoption:</p>
          
          <APMLCodeBlock :code="designPrinciplesCode" />
          
          <div class="principle-grid">
            <div class="principle-card">
              <h3>👵 Grandmother Test</h3>
              <p>Readable aloud to non-technical person</p>
            </div>
            <div class="principle-card">
              <h3>🤖 LLM Test</h3>
              <p>Any AI can generate valid APML from conversation</p>
            </div>
            <div class="principle-card">
              <h3>👨‍💻 Developer Test</h3>
              <p>Immediate implementation understanding</p>
            </div>
            <div class="principle-card">
              <h3>⚙️ Compiler Test</h3>
              <p>Unambiguous compilation to working code</p>
            </div>
            <div class="principle-card">
              <h3>🚀 Evolution Test</h3>
              <p>Graceful handling of future concepts</p>
            </div>
          </div>
        </section>

        <!-- Trinity Principle -->
        <section class="content-section">
          <h2>Trinity Principle</h2>
          <p>Every application behavior maps to one of three fundamental message patterns:</p>
          
          <APMLCodeBlock :code="trinityPrincipleCode" />
          
          <div class="trinity-grid">
            <div class="trinity-card app-to-user">
              <h3>App → User</h3>
              <p>Display, output, communication to users</p>
              <code>show, display, notify</code>
            </div>
            <div class="trinity-card user-to-app">
              <h3>User → App</h3>
              <p>Interaction, input, commands from users</p>
              <code>when user clicks, when user enters</code>
            </div>
            <div class="trinity-card app-to-app">
              <h3>App → App</h3>
              <p>Processing, logic, internal workflows</p>
              <code>process, calculate, integrate</code>
            </div>
          </div>
        </section>

        <!-- Basic Syntax -->
        <section class="content-section">
          <h2>Basic Syntax Foundation</h2>
          <p>APML's syntax is designed to feel natural while being completely unambiguous for compilation:</p>
          
          <APMLCodeBlock :code="basicSyntaxCode" />
        </section>

        <!-- Data Types -->
        <section class="content-section">
          <h2>Data Types & Modifiers</h2>
          <p>Rich type system with clear, domain-friendly primitives:</p>
          
          <APMLCodeBlock :code="dataTypesCode" />
        </section>

        <!-- Complete Example -->
        <section class="content-section">
          <h2>Complete Application Example</h2>
          <p>A full APML application demonstrating core concepts:</p>
          
          <APMLCodeBlock :code="completeExampleCode" />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import APMLCodeBlock from '../components/APMLCodeBlock.vue'

const designPrinciplesCode = `data DesignPrinciple:
  grandmother_test: "Readable aloud to non-technical person"
  llm_test: "Any AI can generate valid APML from conversation" 
  developer_test: "Immediate implementation understanding"
  compiler_test: "Unambiguous compilation to working code"
  evolution_test: "Graceful handling of future concepts"`

const trinityPrincipleCode = `data TrinityPrinciple:
  app_to_user: "Display, output, communication to users"
  user_to_app: "Interaction, input, commands from users"  
  app_to_app: "Processing, logic, internal workflows"
  universality: "Every application behavior maps to these three patterns"`

const basicSyntaxCode = `data SyntaxFoundation:
  application_declaration: "app ApplicationName:"
  data_model_declaration: "data ModelName:"
  interface_declaration: "interface optional_name:"
  logic_declaration: "logic optional_name:"
  field_definition: "field_name: data_type modifiers"`

const dataTypesCode = `data DataType:
  primitives: "text, number, boolean, date, timestamp, email, url, unique_id, money"
  collections: "list of DataType"
  unions: "type1 | type2 | type3"
  references: "ModelName"

data FieldModifier:
  required: "Field must have value"
  optional: "Field may be empty"
  default_value: "default literal_value"
  auto_generated: "auto (for timestamps, ids)"
  unique_constraint: "unique (for identifiers, emails)"`

const completeExampleCode = `app TaskManager:
  title: "Personal Task Management System"
  description: "Organize and track daily tasks with AI assistance"
  version: "1.0.0"

data Task:
  title: text required
  description: text optional
  due_date: date optional
  priority: urgent | normal | low default normal
  status: pending | in_progress | completed default pending
  created_at: timestamp auto

interface task_management:
  show task_dashboard:
    title: "My Tasks"
    
  display task_list:
    for each task in tasks:
      show task_card:
        title: task.title
        priority: task.priority
        status: task.status
  
  when user clicks "Add Task":
    show task_form:
      fields: title, description, due_date, priority
      
  when user submits task_form:
    create new_task from form_data
    notify user: "Task created successfully"
    
logic task_operations:
  when task.due_date is today:
    notify user: "Task due today: {task.title}"
    
  when task.status becomes completed:
    calculate completion_rate for user
    if completion_rate > 80%:
      notify user: "Great productivity streak!"`

</script>

<style scoped>
.specification-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.spec-hero {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  padding: 4rem 0;
  text-align: center;
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.spec-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.spec-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
}

.spec-badges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
}

.grammar-foundation {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.logically-complete {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #6366f1;
}

.spec-content {
  padding: 4rem 0;
}

.content-section {
  margin-bottom: 4rem;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-section p {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.principle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.principle-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.principle-card h3 {
  color: #f8fafc;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.principle-card p {
  color: #94a3b8;
  font-size: 0.875rem;
  margin: 0;
}

.trinity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.trinity-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid;
}

.app-to-user {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.05);
}

.user-to-app {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.05);
}

.app-to-app {
  border-color: rgba(168, 85, 247, 0.3);
  background: rgba(168, 85, 247, 0.05);
}

.trinity-card h3 {
  color: #f8fafc;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.trinity-card p {
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.trinity-card code {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  color: #22c55e;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .spec-hero {
    padding: 2rem 0;
  }
  
  .spec-content {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>