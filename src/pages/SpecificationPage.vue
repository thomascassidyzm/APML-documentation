<template>
  <div class="content-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">APML v0.9.0 Language Specification</h1>
        <p class="page-subtitle">Grammar Foundation Release - Logically Complete conversational code</p>
      </div>
    </header>
    
    <main class="page-content">
      <div class="container">
        
          <div class="content-section">
            <h2>APML v0.9.0 - Grammar Foundation Release</h2>
            <p>Complete documentation of APML syntax, semantics, Trinity Principle, and Logically Complete certification requirements.</p>
            <p><strong>Specification File:</strong> <code>APML-v0.9.0.apml</code></p>
            <p><strong>Status:</strong> Grammar stabilized, ready for production applications</p>
          </div>
          <div class="content-section">
            <h2>Logically Complete APML</h2>
            <p>The gold standard for production-ready conversational code. Applications certified as Logically Complete guarantee crash-free deployment through formal verification.</p>
            <p><strong>Certification Tool:</strong> Enhanced APML Validator v0.9.0</p>
          </div>
          <div class="content-section">
            <h2>Trinity Principle Implementation</h2>
            <p>Every APML application expresses behavior through three fundamental message types:</p>
            <ul>
              <li><strong>App→User:</strong> Display, output, communication to users</li>
              <li><strong>User→App:</strong> Interaction, input, commands from users</li>
              <li><strong>App→App:</strong> Processing, logic, internal workflows</li>
            </ul>
          </div>
          
          <div class="content-section">
            <h2>APML v0.9.0 Syntax Example</h2>
            <p>Here's a complete APML application demonstrating the Trinity Principle:</p>
            <APMLCodeBlock :code="exampleCode" />
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import APMLCodeBlock from '../components/APMLCodeBlock.vue'

const loading = ref(false)

const exampleCode = ref(`app TodoManager:
  title: "Personal Task Manager"
  description: "Complete APML application demonstrating Trinity Principle"
  version: 1.0
  apml_specification_version: "0.9.0"
  
data Task:
  id: unique_id
  title: text required
  priority: high | medium | low default medium
  status: pending | in_progress | completed default pending
  due_date: date optional
  created_at: timestamp auto
  updated_at: timestamp auto
  
data User:
  id: unique_id
  name: text required
  email: email unique
  tasks: list of Task
  
interface task_management:
  # App→User: Display information to users
  show welcome_header:
    greeting: "Welcome back, " + user.name
    task_summary: count tasks where status is pending
    
  display task_creation_form:
    title_input: text required
    priority_selector: high | medium | low
    due_date_picker: date optional
    
  # User→App: Handle user interactions  
  show task_list:
    for each task in user.tasks:
      display task_card:
        title: task.title
        priority_badge: task.priority
        status_indicator: task.status
        if task.due_date < today:
          highlight as overdue
          
logic task_operations:
  # App→App: Internal processing workflows
  when user submits task_form:
    validate task.title is not empty
    if validation_passes:
      create new_task with user_input
      add to user.tasks
      clear form_fields
      show success_notification
      
  when user marks_task_complete:
    update task.status to completed
    set task.updated_at to now
    trigger completion_animation
    calculate productivity_metrics
    
  process productivity_analytics:
    completed_this_week = count tasks where status is completed and updated_at > week_ago
    completion_rate = (completed_this_week / total_tasks) * 100
    generate weekly_insights
    
  calculate overdue_tasks:
    overdue_count = count tasks where due_date < today and status is not completed
    if overdue_count > 0:
      show overdue_warning
      suggest reschedule_options`)

onMounted(() => {
  console.log('Specification Section page loaded')
})
</script>

<style scoped>
.content-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 6rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid #334155;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin: 0;
}

.page-content {
  padding: 4rem 0;
}

.content-section {
  background: rgba(51, 65, 85, 0.3);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.content-section p {
  color: #cbd5e1;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 4rem 0 2rem;
  }
}
</style>