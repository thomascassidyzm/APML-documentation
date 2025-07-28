// Pattern-Based APML to Vue Compiler
// Reverse engineered from Vue target code



class PatternVueCompiler {
  constructor() {
    this.patterns = {
      form_input: this.compileFormInput,
      text_area: this.compileFormInput,
      action_list: this.compileActionList,
      conditional_content: this.compileConditionalContent,
      modal_dialog: this.compileModalDialog,
      data_table: this.compileDataTable,
      wizard_component: this.compileWizardComponent,
      welcome_card: this.compileWelcomeCard,
      scenario_card: this.compileScenarioCard,
      followup_card: this.compileFollowupCard,
      breakthrough_card: this.compileBreakthroughCard,
      results_card: this.compileResultsCard,
      email_form: this.compileEmailForm,
      thrive_card: this.compileThriveCard,
      progress_bar: this.compileProgressBar,
      card_container: this.compileCardContainer,
      scrollable_panel: this.compileScrollablePanel,
      tabbed_panel: this.compileTabbedPanel,
      
      // Business System Patterns for ADE v6
      landing_page: this.compileLandingPage,
      conversion_funnel: this.compileConversionFunnel,
      assessment_engine: this.compileAssessmentEngine,
      results_dashboard: this.compileResultsDashboard,
      email_capture: this.compileEmailCapture,
      revenue_gateway: this.compileRevenueGateway,
      coaching_portal: this.compileCoachingPortal,
      analytics_tracker: this.compileAnalyticsTracker,
      
      // Zenjin Universal Content Studio Patterns
      domain_setup_form: this.compileDomainSetupForm,
      conversational_workspace: this.compileConversationalWorkspace,
      dag_explorer: this.compileDAGExplorer,
      network_visualization: this.compileNetworkVisualization,
      atomic_statement_panel: this.compileAtomicStatementPanel,
      llm_provider_selector: this.compileLLMProviderSelector,
      chat_interface: this.compileChatInterface,
      node_details_panel: this.compileNodeDetailsPanel,
      coaching_feedback: this.compileCoachingFeedback
    };
  }

  compile(apmlContent) {
    
    const apml = { app_configuration: { title: "CityRep" } };
    
    // Extract components and their patterns
    const components = this.extractComponents(apml);
    const dataModel = this.extractDataModel(apml);
    const methods = this.extractMethods(apml);
    
    // Generate Vue app using patterns
    return this.generateVueApp(apml, components, dataModel, methods);
  }

  parseAPML(content) {
    // Enhanced APML parser for pattern-based compilation
    const apml = {
      app_configuration: {},
      data_model: {},
      ui_components: {},
      user_interactions: {},
      styling: {}
    };

    const lines = content.split('\\n');
    let currentSection = null;
    let currentComponent = null;
    let currentObject = '';
    let braceDepth = 0;
    
    for (let line of lines) {
      line = line.trim();
      
      if (line.startsWith('##')) {
        currentSection = line.substring(2).trim().toLowerCase().replace(/\\s+/g, '_');
        continue;
      }
      
      if (line.includes(': {') && currentSection === 'ui_components') {
        currentComponent = line.split(':')[0].trim();
        currentObject = line;
        braceDepth = 1;
        continue;
      }
      
      if (currentComponent && braceDepth > 0) {
        currentObject += '\\n' + line;
        braceDepth += (line.match(/\\{/g) || []).length;
        braceDepth -= (line.match(/\\}/g) || []).length;
        
        if (braceDepth === 0) {
          try {
            apml.ui_components[currentComponent] = this.parseComponentObject(currentObject);
          } catch (e) {
            console.warn(`Failed to parse component ${currentComponent}:`, e);
          }
          currentComponent = null;
          currentObject = '';
        }
      }
    }
    
    return apml;
  }

  parseComponentObject(objectString) {
    // Simple object parser for component definitions
    try {
      // Convert pseudo-JSON to actual JSON
      const jsonString = objectString
        .replace(/([a-zA-Z_][a-zA-Z0-9_]*): \{/g, '"$1": {')
        .replace(/([a-zA-Z_][a-zA-Z0-9_]*): \[/g, '"$1": [')
        .replace(/([a-zA-Z_][a-zA-Z0-9_]*): "([^"]*)"(,?)/g, '"$1": "$2"$3')
        .replace(/([a-zA-Z_][a-zA-Z0-9_]*): ([^",\]\}]+)(,?)/g, '"$1": "$2"$3')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      return JSON.parse(jsonString);
    } catch (e) {
      // Fallback to simple parsing
      return { type: 'unknown', raw: objectString };
    }
  }

  extractComponents(apml) {
    return Object.keys(apml.ui_components || {}).map(key => ({
      name: key,
      config: apml.ui_components[key]
    }));
  }

  extractDataModel(apml) {
    return apml.data_model?.app_state || {};
  }

  extractMethods(apml) {
    // Extract methods from user interactions
    const methods = {};
    
    // Add simple test method
    methods.testMethod = `testMethod() {
        console.log('Method called from Vue app');
      }`;
    
    return methods;
  }

  // Pattern Compilers
  compileFormInput(config) {
    let html = `<form @submit.prevent="${config.action || 'submitForm'}">`;
    
    // Check if this is a simple component definition
    if (config.type === 'text_area' && config.bind && config.placeholder) {
      html += `<textarea v-model="${config.bind}" placeholder="${config.placeholder}" rows="3"></textarea>`;
    } else if (config.elements && config.elements.length > 0) {
      config.elements.forEach(element => {
        switch (element.type) {
          case 'text_area':
            html += `<textarea v-model="${element.bind}" placeholder="${element.placeholder}" rows="${element.rows || 3}" ${element.required ? 'required' : ''}></textarea>`;
            break;
          case 'input':
            html += `<input v-model="${element.bind}" placeholder="${element.placeholder}" ${element.required ? 'required' : ''}>`;
            break;
          case 'button':
            html += `<button @click="${element.action}" :disabled="${element.disabled_when || 'false'}">${element.text}</button>`;
            break;
        }
      });
    }
    
    html += '</form>';
    return html;
  }

  compileActionList(config) {
    return `
      <div v-for="item in ${config.data_source}" :key="item.${config.key_field}" class="list-item">
        <span>{{ item.${config.display_field || 'text'} }}</span>
        ${config.actions?.map(action => 
          `<button @click="${action.action}(item.${config.key_field})">${action.text}</button>`
        ).join('') || ''}
      </div>
    `;
  }

  compileConditionalContent(config) {
    return `
      <div v-if="${config.condition}">
        ${this.compileElements(config.if_true?.elements || [])}
      </div>
      <div v-else>
        ${this.compileElements(config.if_false?.elements || [])}
      </div>
    `;
  }

  compileModalDialog(config) {
    return `
      <div v-if="${config.visible_when}" class="modal-overlay" @click="${config.overlay_click}">
        <div class="modal-content" @click.stop>
          <h3>{{ ${config.title} }}</h3>
          <div class="modal-body">{{ ${config.content} }}</div>
          <div class="modal-actions">
            ${config.actions?.map(action => 
              `<button @click="${action.action}" class="${action.style || 'secondary'}">${action.text}</button>`
            ).join('') || ''}
          </div>
        </div>
      </div>
    `;
  }

  compileDataTable(config) {
    return `
      <table>
        <thead>
          <tr>
            ${config.columns?.map(col => `<th>${col.label}</th>`).join('') || ''}
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in ${config.data_source}" :key="row.${config.key_field}">
            ${config.columns?.map(col => `<td>{{ row.${col.key} }}</td>`).join('') || ''}
          </tr>
        </tbody>
      </table>
    `;
  }

  compileWizardComponent(config) {
    return `
      <div class="wizard">
        <div class="steps">
          <div v-for="(step, index) in steps" :key="index" 
               :class="{ active: ${config.current_step} === index }">
            {{ step.title }}
          </div>
        </div>
        <div class="step-content">
          <component :is="steps[${config.current_step}].component" />
        </div>
        <div class="step-actions">
          <button @click="${config.navigation?.previous?.action || 'previousStep'}" 
                  :disabled="${config.navigation?.previous?.disabled_when || 'false'}">
            ${config.navigation?.previous?.text || 'Previous'}
          </button>
          <button @click="${config.navigation?.next?.action || 'nextStep'}" 
                  :disabled="${config.navigation?.next?.disabled_when || 'false'}">
            ${config.navigation?.next?.text || 'Next'}
          </button>
        </div>
      </div>
    `;
  }

  compileElements(elements) {
    return elements.map(element => {
      switch (element.type) {
        case 'heading':
          return `<h${element.level || 2}>${element.text}</h${element.level || 2}>`;
        case 'button':
          return `<button @click="${element.action}">${element.text}</button>`;
        case 'text':
          return `<p>${element.content}</p>`;
        default:
          return `<div>${element.text || element.content || ''}</div>`;
      }
    }).join('');
  }

  generateVueApp(apml, components, dataModel, methods) {
    const appName = apml.app_configuration?.name || apml.name || 'Generated App';
    
    return `
<!DOCTYPE html>
<html>
<head>
  <title>${appName}</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    ${this.generatePatternCSS()}
  </style>
</head>
<body>
  <div id="app">
    <div class="app-container">
      <h1>{{ appTitle }}</h1>
      ${this.generateComponentTemplates(components)}
    </div>
  </div>

  <script>
    // Wait for Vue to load
    function initApp() {
      if (typeof Vue === 'undefined') {
        setTimeout(initApp, 100);
        return;
      }
      
      const { createApp } = Vue;
      
      createApp({
        data() {
          return {
            appTitle: '${appName}',
            ${this.generateDataProperties(dataModel)}
          };
        },
        methods: {
          ${Object.values(methods).join(',\n')}
        },
        mounted() {
          console.log('${appName} loaded with pattern-based compilation');
        }
      }).mount('#app');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  </script>
</body>
</html>`;
  }

  generateComponentTemplates(components) {
    return components.map(component => {
      const pattern = this.patterns[component.config.type];
      if (pattern) {
        return `<div class="component ${component.name}" v-if="${component.config.visible_when || 'true'}">
          ${pattern.call(this, component.config)}
        </div>`;
      } else {
        return `<div class="component ${component.name}">
          <p>Component type '${component.config.type}' not yet implemented</p>
        </div>`;
      }
    }).join('\\n');
  }

  generateDataProperties(dataModel) {
    const properties = [];
    
    // Handle app_state properties
    if (dataModel.app_state) {
      Object.keys(dataModel.app_state).forEach(key => {
        const prop = dataModel.app_state[key];
        let defaultValue = prop.default || '';
        
        if (prop.type === 'array') {
          defaultValue = '[]';
        } else if (prop.type === 'object') {
          defaultValue = '{}';
        } else if (typeof defaultValue === 'string') {
          defaultValue = `"${defaultValue}"`;
        }
        
        properties.push(`${key}: ${defaultValue}`);
      });
    }
    
    // Handle other data model properties
    Object.keys(dataModel).forEach(key => {
      if (key !== 'app_state') {
        const prop = dataModel[key];
        let defaultValue = prop.default || '';
        
        if (prop.type === 'array') {
          defaultValue = '[]';
        } else if (prop.type === 'object') {
          defaultValue = '{}';
        } else if (typeof defaultValue === 'string') {
          defaultValue = `"${defaultValue}"`;
        }
        
        properties.push(`${key}: ${defaultValue}`);
      }
    });
    
    return properties.join(',\n        ');
  }

  generatePatternCSS() {
    return `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #0a0a0a;
        color: #ffffff;
        margin: 0;
        padding: 20px;
      }
      
      .app-container {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .component {
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
      }
      
      /* Form Pattern Styles */
      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      textarea, input {
        padding: 12px;
        border: 1px solid #333;
        border-radius: 4px;
        background: #0a0a0a;
        color: #ffffff;
        font-family: inherit;
        font-size: 16px;
      }
      
      textarea {
        resize: vertical;
        min-height: 100px;
      }
      
      button {
        background: #00ff88;
        color: #000;
        border: none;
        padding: 12px 24px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
      }
      
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      button:hover:not(:disabled) {
        opacity: 0.9;
      }
      
      button.secondary {
        background: #333;
        color: #fff;
      }
      
      /* List Pattern Styles */
      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #333;
      }
      
      .list-item:last-child {
        border-bottom: none;
      }
      
      /* Modal Pattern Styles */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      .modal-content {
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
      }
      
      .modal-actions {
        margin-top: 20px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }
      
      /* Table Pattern Styles */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #333;
      }
      
      th {
        background: #333;
        font-weight: 600;
      }
      
      /* Wizard Pattern Styles */
      .wizard {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .steps {
        display: flex;
        gap: 10px;
      }
      
      .steps > div {
        padding: 10px 20px;
        border: 1px solid #333;
        border-radius: 4px;
        background: #333;
      }
      
      .steps > div.active {
        background: #00ff88;
        color: #000;
      }
      
      .step-content {
        min-height: 200px;
        padding: 20px;
        border: 1px solid #333;
        border-radius: 4px;
      }
      
      .step-actions {
        display: flex;
        justify-content: space-between;
      }
      
      h1 {
        color: #00ff88;
        text-align: center;
        margin-bottom: 30px;
      }
      
      h2, h3 {
        color: #00ff88;
        margin-bottom: 15px;
      }
      
      /* What Are You Like? Game Styles */
      .welcome-card, .scenario-card, .followup-card, .breakthrough-card, .results-card, .email-form, .thrive-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 40px;
        margin: 20px 0;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 0.6s ease-out;
      }
      
      .welcome-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
      }
      
      .welcome-subtitle {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 20px;
        text-align: center;
      }
      
      .welcome-description {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 30px;
        text-align: center;
      }
      
      .welcome-meta {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 40px;
        text-align: center;
      }
      
      .welcome-button, .breakthrough-button, .results-button, .email-button {
        background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
        color: #000;
        border: none;
        padding: 15px 40px;
        border-radius: 30px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: block;
        margin: 0 auto;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .welcome-button:hover, .breakthrough-button:hover, .results-button:hover, .email-button:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 20px rgba(0, 255, 136, 0.4);
      }
      
      .progress-container {
        margin: 20px 0;
        text-align: center;
      }
      
      .progress-bar {
        background: rgba(255, 255, 255, 0.2);
        height: 6px;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 10px;
      }
      
      .progress-fill {
        background: linear-gradient(90deg, #00ff88, #00cc6a);
        height: 100%;
        transition: width 0.5s ease-in-out;
      }
      
      .progress-text {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
      }
      
      .scenario-title, .breakthrough-title, .results-title, .email-title, .thrive-title {
        color: #00ff88;
        font-size: 2rem;
        margin-bottom: 20px;
        text-align: center;
      }
      
      .scenario-situation, .scenario-question, .followup-question {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 25px;
        line-height: 1.6;
      }
      
      .scenario-options, .followup-options {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 30px;
      }
      
      .option-button {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 20px;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
        font-size: 1rem;
        line-height: 1.4;
      }
      
      .option-button:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: #00ff88;
        transform: translateY(-2px);
      }
      
      .previous-answer {
        background: rgba(0, 255, 136, 0.1);
        border: 1px solid rgba(0, 255, 136, 0.3);
        border-radius: 10px;
        padding: 10px 15px;
        margin-bottom: 20px;
        color: #00ff88;
        font-size: 0.9rem;
      }
      
      .breakthrough-analysis, .breakthrough-examples {
        margin: 25px 0;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        border-left: 4px solid #00ff88;
      }
      
      .gap-example {
        margin-bottom: 15px;
        padding: 10px 0;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.5;
      }
      
      .breakthrough-revelation {
        font-size: 1.2rem;
        color: #00ff88;
        text-align: center;
        font-weight: 500;
        margin: 30px 0;
      }
      
      .results-summary, .results-insights {
        margin: 25px 0;
      }
      
      .insight-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 15px;
        border-left: 4px solid #00ff88;
      }
      
      .insight-item h4 {
        color: #00ff88;
        margin-bottom: 10px;
        font-size: 1.1rem;
      }
      
      .email-form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 30px 0;
      }
      
      .email-input {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 15px 20px;
        color: #fff;
        font-size: 1rem;
        transition: border-color 0.3s ease;
      }
      
      .email-input:focus {
        outline: none;
        border-color: #00ff88;
      }
      
      .email-input::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      
      .email-privacy {
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
      }
      
      .thrive-domains {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 30px 0;
      }
      
      .domain-item {
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 20px;
      }
      
      .domain-item:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #00ff88;
        transform: translateY(-2px);
      }
      
      .domain-letter {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
        color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      
      .domain-info h4 {
        color: #00ff88;
        margin-bottom: 5px;
        font-size: 1.2rem;
      }
      
      .domain-info p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        margin: 0;
      }
      
      .thrive-question {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
        margin-top: 40px;
        font-weight: 500;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Dual APML System Styles */
      .card-container {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 30px;
        margin: 20px 0;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      
      .card-description {
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
        text-align: center;
        font-size: 1.1rem;
      }
      
      .card-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-bottom: 20px;
      }
      
      .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
        color: #000;
      }
      
      .btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .btn:hover {
        transform: scale(1.05);
      }
      
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }
      
      .feedback-area {
        background: rgba(0, 255, 136, 0.1);
        border: 1px solid rgba(0, 255, 136, 0.3);
        border-radius: 10px;
        padding: 15px;
        color: #00ff88;
        text-align: center;
      }
      
      .scrollable-panel {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 20px;
        margin: 20px 0;
        backdrop-filter: blur(10px);
        height: 500px;
        display: flex;
        flex-direction: column;
      }
      
      .scrollable-content {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.2);
      }
      
      .conversation-message {
        margin-bottom: 15px;
        padding: 12px;
        border-radius: 8px;
        border-left: 3px solid;
      }
      
      .conversation-message.user {
        background: rgba(59, 130, 246, 0.1);
        border-left-color: #3b82f6;
      }
      
      .conversation-message.assistant {
        background: rgba(107, 114, 128, 0.1);
        border-left-color: #6b7280;
      }
      
      .conversation-message.system {
        background: rgba(16, 185, 129, 0.1);
        border-left-color: #10b981;
      }
      
      .timestamp {
        font-size: 0.8rem;
        opacity: 0.7;
        margin-bottom: 5px;
      }
      
      .message-content {
        font-size: 0.9rem;
        line-height: 1.4;
      }
      
      .tabbed-panel {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 20px;
        margin: 20px 0;
        backdrop-filter: blur(10px);
      }
      
      .tab-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding-bottom: 15px;
      }
      
      .tab-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 10px 20px;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .tab-button.active {
        background: #00ff88;
        color: #000;
        border-color: #00ff88;
      }
      
      .tab-button:hover:not(.active) {
        background: rgba(255, 255, 255, 0.2);
      }
      
      .tab-content-area {
        min-height: 300px;
      }
      
      .apml-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .apml-file-item {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 20px;
      }
      
      .apml-file-item h4 {
        color: #00ff88;
        margin-bottom: 10px;
      }
      
      .apml-content {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 15px;
        font-family: 'Courier New', monospace;
        font-size: 0.8rem;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.9);
        max-height: 200px;
        overflow-y: auto;
        margin-bottom: 15px;
        white-space: pre-wrap;
      }
      
      .file-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      
      .file-actions .btn {
        padding: 8px 16px;
        font-size: 0.8rem;
      }

      @media (max-width: 768px) {
        .welcome-card, .scenario-card, .followup-card, .breakthrough-card, .results-card, .email-form, .thrive-card {
          padding: 25px;
          margin: 15px;
        }
        
        .welcome-title {
          font-size: 2.5rem;
        }
        
        .thrive-domains {
          grid-template-columns: 1fr;
        }
        
        .domain-item {
          flex-direction: column;
          text-align: center;
        }
        
        .card-buttons {
          flex-direction: column;
          align-items: center;
        }
        
        .tab-buttons {
          flex-wrap: wrap;
        }
        
        .file-actions {
          justify-content: center;
        }
      }
      
      /* ============================================
         ZENJIN UNIVERSAL CONTENT STUDIO STYLES
         ============================================ */
      
      .domain-setup-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 30px;
        margin: 20px 0;
        backdrop-filter: blur(10px);
      }
      
      .domain-title {
        color: #00ff88;
        font-size: 1.8rem;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .domain-description {
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
        text-align: center;
      }
      
      .domain-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .form-group label {
        color: #00ff88;
        font-weight: 500;
        font-size: 0.9rem;
      }
      
      .domain-input, .domain-select, .syllabus-textarea {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 12px;
        color: #fff;
        font-size: 1rem;
      }
      
      .syllabus-textarea {
        resize: vertical;
        min-height: 120px;
        font-family: 'Courier New', monospace;
      }
      
      .domain-submit-btn {
        background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
        color: #000;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        margin-top: 10px;
      }
      
      .domain-submit-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      .conversational-workspace {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      
      .workspace-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .llm-status {
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        background: rgba(255, 0, 0, 0.2);
        color: #ff6b6b;
      }
      
      .llm-status.connected {
        background: rgba(0, 255, 136, 0.2);
        color: #00ff88;
      }
      
      .workspace-layout {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 20px;
        overflow: hidden;
      }
      
      .chat-section {
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
      }
      
      .chat-history {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 10px;
      }
      
      .message {
        margin-bottom: 15px;
        padding: 12px;
        border-radius: 8px;
      }
      
      .message.user {
        background: rgba(59, 130, 246, 0.1);
        border-left: 3px solid #3b82f6;
      }
      
      .message.assistant {
        background: rgba(16, 185, 129, 0.1);
        border-left: 3px solid #10b981;
      }
      
      .message-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 0.8rem;
        opacity: 0.7;
      }
      
      .chat-input-area {
        display: flex;
        gap: 10px;
        align-items: flex-end;
      }
      
      .chat-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 12px;
        color: #fff;
        resize: vertical;
      }
      
      .send-btn {
        background: #00ff88;
        color: #000;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        white-space: nowrap;
      }
      
      .analysis-panel {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-direction: column;
      }
      
      .analysis-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 10px;
      }
      
      .analysis-tabs button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 8px 16px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
      }
      
      .analysis-tabs button.active {
        background: #00ff88;
        color: #000;
        border-color: #00ff88;
      }
      
      .analysis-content {
        flex: 1;
        overflow: hidden;
      }
      
      .network-canvas, .dag-canvas {
        width: 100%;
        height: 400px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .atoms-list {
        max-height: 400px;
        overflow-y: auto;
      }
      
      .atom-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      
      .atom-card:hover {
        border-color: #00ff88;
      }
      
      .atom-text {
        color: #fff;
        margin-bottom: 8px;
      }
      
      .atom-metrics {
        display: flex;
        gap: 15px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
      }
      
      .workspace-controls {
        display: flex;
        gap: 15px;
        padding: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .export-btn, .validate-btn {
        background: #00ff88;
        color: #000;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
      }
      
      .validate-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .dag-explorer {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .dag-controls {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        align-items: center;
      }
      
      .control-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 8px 16px;
        color: #fff;
        cursor: pointer;
        font-size: 0.9rem;
      }
      
      .layout-select {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 8px;
        color: #fff;
      }
      
      .dag-container {
        position: relative;
        height: 500px;
      }
      
      .node-inspector {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 300px;
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 20px;
        backdrop-filter: blur(10px);
      }
      
      .node-metrics {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 15px 0;
      }
      
      .metric {
        display: flex;
        justify-content: space-between;
      }
      
      .metric label {
        color: #00ff88;
        font-weight: 500;
      }
      
      .relationship-item {
        background: rgba(255, 255, 255, 0.1);
        padding: 8px;
        margin: 5px 0;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
      }
      
      .relationship-item:hover {
        background: rgba(0, 255, 136, 0.2);
      }
      
      .network-visualization {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .network-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      
      .network-stats {
        display: flex;
        gap: 20px;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
      }
      
      .network-svg {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
      }
      
      .network-edge {
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 1;
      }
      
      .network-edge.highlighted {
        stroke: #00ff88;
        stroke-width: 2;
      }
      
      .network-node {
        fill: rgba(255, 255, 255, 0.6);
        stroke: rgba(255, 255, 255, 0.8);
        stroke-width: 2;
        cursor: pointer;
      }
      
      .network-node.selected {
        fill: #00ff88;
        stroke: #00cc6a;
      }
      
      .network-node.hub {
        fill: #ff6b6b;
        stroke: #ff5252;
      }
      
      .network-node.atomic {
        fill: #4fc3f7;
        stroke: #29b6f6;
      }
      
      .node-label {
        fill: #fff;
        font-size: 10px;
        text-anchor: middle;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .node-label.visible {
        opacity: 1;
      }
      
      .node-tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 10px;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 1000;
      }
      
      .visualization-controls {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 15px;
      }
      
      .llm-provider-selector {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .provider-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .provider-select, .model-select, .api-key-input, .endpoint-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 10px;
        color: #fff;
      }
      
      .test-btn {
        background: #00ff88;
        color: #000;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
      }
      
      .connection-status {
        padding: 10px;
        border-radius: 6px;
        font-size: 0.9rem;
      }
      
      .connection-status.success {
        background: rgba(0, 255, 136, 0.2);
        color: #00ff88;
        border: 1px solid rgba(0, 255, 136, 0.3);
      }
      
      .connection-status.error {
        background: rgba(255, 107, 107, 0.2);
        color: #ff6b6b;
        border: 1px solid rgba(255, 107, 107, 0.3);
      }
      
      .atomic-statement-panel {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      
      .panel-stats {
        display: flex;
        gap: 15px;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
      }
      
      .statements-filters {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }
      
      .search-input, .filter-select {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 8px 12px;
        color: #fff;
      }
      
      .search-input {
        flex: 1;
      }
      
      .statements-list {
        max-height: 500px;
        overflow-y: auto;
      }
      
      .statement-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .statement-card:hover {
        border-color: rgba(255, 255, 255, 0.3);
      }
      
      .statement-card.selected {
        border-color: #00ff88;
        background: rgba(0, 255, 136, 0.1);
      }
      
      .statement-card.validated {
        border-color: rgba(0, 255, 136, 0.5);
      }
      
      .statement-content {
        flex: 1;
      }
      
      .statement-text {
        color: #fff;
        margin-bottom: 8px;
        font-size: 0.95rem;
      }
      
      .statement-metrics {
        display: flex;
        gap: 10px;
      }
      
      .metric-badge {
        display: flex;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 4px 8px;
        font-size: 0.75rem;
      }
      
      .metric-badge .label {
        color: #00ff88;
        font-weight: 600;
      }
      
      .metric-badge .value {
        color: #fff;
      }
      
      .statement-actions {
        display: flex;
        gap: 5px;
      }
      
      .action-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 6px 10px;
        color: #fff;
        cursor: pointer;
        font-size: 0.8rem;
      }
      
      .action-btn:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      
      .action-btn.validate {
        background: rgba(0, 255, 136, 0.2);
        border-color: rgba(0, 255, 136, 0.3);
        color: #00ff88;
      }
      
      .action-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }

  // New pattern compilers for "What Are You Like?" game
  compileWelcomeCard(config) {
    return `
      <div class="welcome-card">
        <h1 class="welcome-title">${config.title}</h1>
        <h2 class="welcome-subtitle">${config.subtitle}</h2>
        <p class="welcome-description">${config.description}</p>
        <div class="welcome-meta">${config.meta_info}</div>
        <button @click="start_game" class="welcome-button">${config.action_text}</button>
      </div>
    `;
  }

  compileScenarioCard(config) {
    return `
      <div class="scenario-card">
        <h3 class="scenario-title">{{ ${config.title_bind} }}</h3>
        <p class="scenario-situation">{{ ${config.situation_bind} }}</p>
        <p class="scenario-question">{{ ${config.question_bind} }}</p>
        <div class="scenario-options">
          <div v-for="option in ${config.options_bind}" :key="option.id" 
               class="option-button" 
               @click="answer_first_question(option.id)">
            {{ option.text }}
          </div>
        </div>
      </div>
    `;
  }

  compileFollowupCard(config) {
    return `
      <div class="followup-card">
        <div class="previous-answer">
          <small>You chose: {{ ${config.previous_answer_bind} }}</small>
        </div>
        <p class="followup-question">{{ ${config.question_bind} }}</p>
        <div class="followup-options">
          <div v-for="option in ${config.options_bind}" :key="option.id" 
               class="option-button" 
               @click="answer_followup_question(option.id)">
            {{ option.text }}
          </div>
        </div>
      </div>
    `;
  }

  compileBreakthroughCard(config) {
    return `
      <div class="breakthrough-card">
        <h2 class="breakthrough-title">${config.title}</h2>
        <div class="breakthrough-analysis">
          <p>{{ ${config.pattern_analysis_bind} }}</p>
        </div>
        <div class="breakthrough-examples">
          <div v-for="gap in ${config.gap_examples_bind}" :key="gap.id" class="gap-example">
            <strong>{{ gap.scenario }}</strong>: {{ gap.description }}
          </div>
        </div>
        <p class="breakthrough-revelation">${config.revelation_text}</p>
        <button @click="show_results" class="breakthrough-button">${config.continue_text}</button>
      </div>
    `;
  }

  compileResultsCard(config) {
    return `
      <div class="results-card">
        <h2 class="results-title">${config.title}</h2>
        <div class="results-summary">
          <p>{{ ${config.summary_bind} }}</p>
        </div>
        <div class="results-insights">
          <div v-for="insight in ${config.pattern_insights_bind}" :key="insight.id" class="insight-item">
            <h4>{{ insight.title }}</h4>
            <p>{{ insight.description }}</p>
          </div>
        </div>
        <p class="results-next-steps">${config.next_steps_text}</p>
        <button @click="show_email_capture" class="results-button">Get Full Analysis</button>
      </div>
    `;
  }

  compileEmailForm(config) {
    return `
      <div class="email-form">
        <h3 class="email-title">${config.title}</h3>
        <p class="email-description">${config.description}</p>
        <form @submit.prevent="submit_email" class="email-form-container">
          <input v-model="user_email" 
                 type="email" 
                 placeholder="${config.placeholder}" 
                 class="email-input"
                 required>
          <button type="submit" class="email-button">${config.button_text}</button>
        </form>
        <small class="email-privacy">${config.privacy_note}</small>
      </div>
    `;
  }

  compileThriveCard(config) {
    return `
      <div class="thrive-card">
        <h2 class="thrive-title">${config.title}</h2>
        <p class="thrive-description">${config.description}</p>
        <div class="thrive-domains">
          <div v-for="domain in thrive_domains" :key="domain.letter" 
               class="domain-item"
               @click="select_domain(domain.letter)">
            <div class="domain-letter">{{ domain.letter }}</div>
            <div class="domain-info">
              <h4>{{ domain.name }}</h4>
              <p>{{ domain.description }}</p>
            </div>
          </div>
        </div>
        <p class="thrive-question">${config.question}</p>
      </div>
    `;
  }

  compileProgressBar(config) {
    return `
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" 
               :style="{ width: progress_percent + '%' }"></div>
        </div>
        <div class="progress-text">
          {{ ${config.current_step} }} of ${config.total_steps}
        </div>
      </div>
    `;
  }

  compileCardContainer(config) {
    const buttonsHTML = config.buttons?.map(button => {
      const conditionalAttr = button.conditional ? `v-if="${button.conditional === 'intent_detected' ? 'buildable_intent_detected' : button.conditional}"` : '';
      const tooltipAttr = button.tooltip ? `title="${button.tooltip}"` : '';
      return `<button class="btn btn-${button.style}" 
                      @click="${button.id === 'process_apml_button' ? 'generateProcessAPML' : 'generateSolutionAPML'}()" 
                      ${conditionalAttr} 
                      ${tooltipAttr}>
                ${button.text}
              </button>`;
    }).join('\n          ') || '';

    return `
      <div class="card-container">
        <h2>${config.title}</h2>
        <p class="card-description">${config.description}</p>
        <div class="card-buttons">
          ${buttonsHTML}
        </div>
        <div class="feedback-area" v-if="feedback_message">
          {{ feedback_message }}
        </div>
      </div>
    `;
  }

  compileScrollablePanel(config) {
    return `
      <div class="scrollable-panel">
        <h2>${config.title}</h2>
        <div class="scrollable-content" id="conversationPanel">
          <div v-for="message in conversation_messages" :key="message.timestamp" 
               :class="'conversation-message ' + message.type">
            <div class="timestamp">{{ formatTime(message.timestamp) }}</div>
            <div class="message-content">{{ message.content }}</div>
          </div>
        </div>
      </div>
    `;
  }

  compileTabbedPanel(config) {
    const tabsHTML = config.tabs?.map(tab => `
      <button class="tab-button" 
              :class="{ active: active_tab === '${tab.name.toLowerCase().replace(' ', '_')}' }"
              @click="active_tab = '${tab.name.toLowerCase().replace(' ', '_')}'">
        ${tab.icon} ${tab.name}
      </button>
    `).join('') || '';

    const tabContentHTML = config.tabs?.map(tab => {
      const tabKey = tab.name.toLowerCase().replace(' ', '_');
      return `
        <div v-if="active_tab === '${tabKey}'" class="tab-content">
          <div v-if="${tabKey} === 'process_apml'" class="apml-list">
            <div v-for="file in process_apml_files" :key="file.id" class="apml-file-item">
              <h4>{{ file.id }}</h4>
              <pre class="apml-content">{{ file.content }}</pre>
              <div class="file-actions">
                <button @click="viewFile(file.id)" class="btn btn-secondary">View</button>
                <button @click="editFile(file.id)" class="btn btn-secondary">Edit</button>
              </div>
            </div>
          </div>
          <div v-if="${tabKey} === 'solution_apml'" class="apml-list">
            <div v-for="file in solution_apml_files" :key="file.id" class="apml-file-item">
              <h4>{{ file.id }}</h4>
              <pre class="apml-content">{{ file.content }}</pre>
              <div class="file-actions">
                <button @click="viewFile(file.id)" class="btn btn-secondary">View</button>
                <button @click="editFile(file.id)" class="btn btn-secondary">Edit</button>
                <button @click="compileApp(file.id)" class="btn btn-primary">Compile</button>
                <button @click="deployApp(file.id)" class="btn btn-primary">Deploy</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('') || '';

    return `
      <div class="tabbed-panel">
        <h2>${config.title}</h2>
        <div class="tab-buttons">
          ${tabsHTML}
        </div>
        <div class="tab-content-area">
          ${tabContentHTML}
        </div>
      </div>
    `;
  }

  // ============================================
  // ZENJIN UNIVERSAL CONTENT STUDIO PATTERNS
  // ============================================

  compileDomainSetupForm(config) {
    return `
      <div class="domain-setup-card">
        <h2 class="domain-title">${config.title || 'Domain Classification'}</h2>
        <p class="domain-description">${config.description || 'Define your learning domain and content level'}</p>
        
        <form @submit.prevent="processDomainSetup" class="domain-form">
          <div class="form-group">
            <label>Domain Name</label>
            <input v-model="domain_name" 
                   type="text" 
                   placeholder="${config.domain_placeholder || 'e.g. Pre-University Calculus'}"
                   class="domain-input" 
                   required>
          </div>
          
          <div class="form-group">
            <label>Subject Area</label>
            <select v-model="subject_area" class="domain-select" required>
              <option value="">Select Subject Area</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="logic">Logic</option>
              <option value="language">Language</option>
              <option value="history">History</option>
              <option value="arts">Arts</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Achievement Level</label>
            <input v-model="achievement_level" 
                   type="text" 
                   placeholder="${config.level_placeholder || 'e.g. A-Level, Grade 8, Professional Certificate'}"
                   class="domain-input" 
                   required>
          </div>
          
          <div class="form-group">
            <label>Target Audience</label>
            <input v-model="target_audience" 
                   type="text" 
                   placeholder="${config.audience_placeholder || 'e.g. Ages 16-18, All Ages, University Entry'}"
                   class="domain-input" 
                   required>
          </div>
          
          <div class="form-group">
            <label>Syllabus Content</label>
            <textarea v-model="syllabus_content" 
                      placeholder="${config.syllabus_placeholder || 'Paste syllabus content here...'}"
                      class="syllabus-textarea" 
                      rows="8" 
                      required></textarea>
          </div>
          
          <button type="submit" class="domain-submit-btn" :disabled="processing">
            {{ processing ? 'Processing...' : '${config.submit_text || 'Begin Atomic Decomposition'}' }}
          </button>
        </form>
      </div>
    `;
  }

  compileConversationalWorkspace(config) {
    return `
      <div class="conversational-workspace">
        <div class="workspace-header">
          <h2>${config.title || 'Content Analysis Workspace'}</h2>
          <div class="llm-status" :class="{ connected: llm_connected }">
            {{ llm_connected ? 'AI Connected' : 'AI Disconnected' }}
          </div>
        </div>
        
        <div class="workspace-layout">
          <div class="chat-section">
            <div class="chat-history" ref="chatHistory">
              <div v-for="message in conversation_history" :key="message.id" 
                   :class="'message ' + message.role">
                <div class="message-header">
                  <span class="role">{{ message.role }}</span>
                  <span class="timestamp">{{ formatTime(message.timestamp) }}</span>
                </div>
                <div class="message-content" v-html="formatMessage(message.content)"></div>
              </div>
            </div>
            
            <div class="chat-input-area">
              <textarea v-model="user_message" 
                        @keydown.enter.meta.prevent="sendMessage"
                        placeholder="${config.input_placeholder || 'Coach me on improving this network...'}"
                        class="chat-input" 
                        rows="3"></textarea>
              <button @click="sendMessage" 
                      :disabled="!user_message.trim() || sending" 
                      class="send-btn">
                {{ sending ? 'Sending...' : 'Send' }}
              </button>
            </div>
          </div>
          
          <div class="analysis-panel">
            <div class="analysis-tabs">
              <button :class="{ active: active_analysis_tab === 'network' }" 
                      @click="active_analysis_tab = 'network'">Network</button>
              <button :class="{ active: active_analysis_tab === 'atoms' }" 
                      @click="active_analysis_tab = 'atoms'">Atoms</button>
              <button :class="{ active: active_analysis_tab === 'reasoning' }" 
                      @click="active_analysis_tab = 'reasoning'">Reasoning</button>
            </div>
            
            <div class="analysis-content">
              <div v-if="active_analysis_tab === 'network'" class="network-view">
                <div id="networkVisualization" class="network-canvas"></div>
              </div>
              
              <div v-if="active_analysis_tab === 'atoms'" class="atoms-list">
                <div v-for="atom in atomic_statements" :key="atom.id" class="atom-card">
                  <div class="atom-text">{{ atom.statement_text }}</div>
                  <div class="atom-metrics">
                    <span>Assembly: {{ atom.assembly_index }}</span>
                    <span>Distance: {{ atom.distinction_distance }}</span>
                    <span>Complexity: {{ atom.learning_complexity }}</span>
                  </div>
                </div>
              </div>
              
              <div v-if="active_analysis_tab === 'reasoning'" class="reasoning-panel">
                <div class="reasoning-content" v-html="agent_reasoning"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="workspace-controls">
          <button @click="exportToZenjin" 
                  :disabled="!export_ready" 
                  class="export-btn">
            Export to Zenjin Learning System
          </button>
          <button @click="validateNetwork" class="validate-btn">
            Validate Logical Completeness
          </button>
        </div>
      </div>
    `;
  }

  compileDAGExplorer(config) {
    return `
      <div class="dag-explorer">
        <h3>${config.title || 'Knowledge Network Explorer'}</h3>
        
        <div class="dag-controls">
          <button @click="resetView" class="control-btn">Reset View</button>
          <button @click="fitToScreen" class="control-btn">Fit to Screen</button>
          <select v-model="layout_mode" @change="updateLayout" class="layout-select">
            <option value="hierarchical">Hierarchical</option>
            <option value="force">Force-Directed</option>
            <option value="circular">Circular</option>
          </select>
        </div>
        
        <div class="dag-container">
          <div id="dagVisualization" class="dag-canvas" @click="clearSelection"></div>
          
          <div v-if="selected_node" class="node-inspector">
            <h4>{{ selected_node.statement_text }}</h4>
            
            <div class="node-metrics">
              <div class="metric">
                <label>Assembly Index:</label>
                <span>{{ selected_node.assembly_index }} steps from atomic units</span>
              </div>
              <div class="metric">
                <label>Distinction Distance:</label>
                <span>{{ selected_node.distinction_distance }} cognitive effort</span>
              </div>
              <div class="metric">
                <label>Hub Score:</label>
                <span>{{ selected_node.hub_score }} connections</span>
              </div>
            </div>
            
            <div class="node-relationships">
              <div class="prerequisite-section">
                <h5>Prerequisites ({{ selected_node.prerequisite_nodes.length }})</h5>
                <div v-for="prereq in selected_node.prerequisite_nodes" :key="prereq.id" 
                     class="relationship-item" 
                     @click="selectNode(prereq.id)">
                  {{ prereq.statement_text }}
                </div>
              </div>
              
              <div class="dependent-section">
                <h5>Enables Learning ({{ selected_node.dependent_nodes.length }})</h5>
                <div v-for="dep in selected_node.dependent_nodes" :key="dep.id" 
                     class="relationship-item"
                     @click="selectNode(dep.id)">
                  {{ dep.statement_text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  compileNetworkVisualization(config) {
    return `
      <div class="network-visualization">
        <div class="network-header">
          <h3>${config.title || 'Distinction Network'}</h3>
          <div class="network-stats">
            <span>Nodes: {{ network_stats.total_nodes }}</span>
            <span>Edges: {{ network_stats.total_edges }}</span>
            <span>Depth: {{ network_stats.max_depth }}</span>
            <span>Completeness: {{ network_stats.completeness_score }}%</span>
          </div>
        </div>
        
        <div class="visualization-container" ref="networkContainer">
          <svg class="network-svg" :width="svg_width" :height="svg_height">
            <g class="zoom-container" :transform="zoom_transform">
              <!-- Edges -->
              <g class="edges">
                <line v-for="edge in network_edges" :key="edge.id"
                      :x1="edge.source.x" :y1="edge.source.y"
                      :x2="edge.target.x" :y2="edge.target.y"
                      class="network-edge"
                      :class="{ highlighted: isEdgeHighlighted(edge) }"></line>
              </g>
              
              <!-- Nodes -->
              <g class="nodes">
                <circle v-for="node in network_nodes" :key="node.id"
                        :cx="node.x" :cy="node.y"
                        :r="getNodeRadius(node)"
                        class="network-node"
                        :class="{ 
                          selected: selected_node_id === node.id,
                          hub: node.hub_score > 5,
                          atomic: node.is_atomic_foundation
                        }"
                        @click="selectNetworkNode(node)"
                        @mouseover="showNodeTooltip(node, $event)"
                        @mouseout="hideNodeTooltip">
                  <title>{{ node.statement_text }}</title>
                </circle>
                
                <!-- Node Labels -->
                <text v-for="node in network_nodes" :key="'label-' + node.id"
                      :x="node.x" :y="node.y + 25"
                      class="node-label"
                      :class="{ visible: show_labels || selected_node_id === node.id }">
                  {{ truncateText(node.statement_text, 20) }}
                </text>
              </g>
            </g>
          </svg>
          
          <div v-if="tooltip.visible" 
               class="node-tooltip" 
               :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
            <div class="tooltip-content">
              <strong>{{ tooltip.node.statement_text }}</strong>
              <div>Assembly: {{ tooltip.node.assembly_index }}</div>
              <div>Distance: {{ tooltip.node.distinction_distance }}</div>
              <div>Complexity: {{ tooltip.node.learning_complexity }}</div>
            </div>
          </div>
        </div>
        
        <div class="visualization-controls">
          <label>
            <input type="checkbox" v-model="show_labels"> Show Labels
          </label>
          <label>
            <input type="range" v-model="zoom_level" min="0.1" max="3" step="0.1"> Zoom
          </label>
          <button @click="centerNetwork" class="control-btn">Center</button>
        </div>
      </div>
    `;
  }

  compileLLMProviderSelector(config) {
    return `
      <div class="llm-provider-selector">
        <h4>${config.title || 'AI Provider Configuration'}</h4>
        
        <div class="provider-form">
          <div class="form-group">
            <label>Provider</label>
            <select v-model="selected_provider" @change="onProviderChange" class="provider-select">
              <option value="">Select AI Provider</option>
              <option value="claude">Claude (Anthropic)</option>
              <option value="openai">OpenAI GPT</option>
              <option value="google">Google Gemini</option>
              <option value="custom">Custom Endpoint</option>
            </select>
          </div>
          
          <div v-if="selected_provider" class="form-group">
            <label>API Key</label>
            <input v-model="api_key" 
                   type="password" 
                   :placeholder="getApiKeyPlaceholder(selected_provider)"
                   class="api-key-input">
          </div>
          
          <div v-if="selected_provider === 'custom'" class="form-group">
            <label>Endpoint URL</label>
            <input v-model="custom_endpoint" 
                   type="url" 
                   placeholder="https://api.example.com/v1/chat"
                   class="endpoint-input">
          </div>
          
          <div v-if="selected_provider" class="form-group">
            <label>Model</label>
            <select v-model="model_name" class="model-select">
              <option v-for="model in getAvailableModels(selected_provider)" 
                      :key="model.id" 
                      :value="model.id">
                {{ model.name }}
              </option>
            </select>
          </div>
          
          <button @click="testConnection" 
                  :disabled="!canTestConnection" 
                  class="test-btn">
            {{ testing_connection ? 'Testing...' : 'Test Connection' }}
          </button>
          
          <div v-if="connection_status" 
               class="connection-status" 
               :class="connection_status.type">
            {{ connection_status.message }}
          </div>
        </div>
      </div>
    `;
  }

  compileAtomicStatementPanel(config) {
    return `
      <div class="atomic-statement-panel">
        <div class="panel-header">
          <h3>${config.title || 'Atomic Statements'}</h3>
          <div class="panel-stats">
            <span>{{ atomic_statements.length }} statements</span>
            <span>{{ validated_statements_count }} validated</span>
          </div>
        </div>
        
        <div class="statements-filters">
          <input v-model="search_filter" 
                 placeholder="Search statements..." 
                 class="search-input">
          
          <select v-model="complexity_filter" class="filter-select">
            <option value="">All Complexity</option>
            <option value="low">Low (< 5)</option>
            <option value="medium">Medium (5-20)</option>
            <option value="high">High (> 20)</option>
          </select>
          
          <select v-model="validation_filter" class="filter-select">
            <option value="">All Status</option>
            <option value="validated">Validated</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        
        <div class="statements-list">
          <div v-for="statement in filteredStatements" :key="statement.id" 
               class="statement-card"
               :class="{ 
                 selected: selected_statement_id === statement.id,
                 validated: statement.logical_completeness_verified
               }"
               @click="selectStatement(statement)">
            
            <div class="statement-content">
              <div class="statement-text">{{ statement.statement_text }}</div>
              
              <div class="statement-metrics">
                <div class="metric-badge assembly">
                  <span class="label">A</span>
                  <span class="value">{{ statement.assembly_index }}</span>
                </div>
                <div class="metric-badge distance">
                  <span class="label">D</span>
                  <span class="value">{{ statement.distinction_distance.toFixed(2) }}</span>
                </div>
                <div class="metric-badge complexity">
                  <span class="label">C</span>
                  <span class="value">{{ statement.learning_complexity.toFixed(1) }}</span>
                </div>
              </div>
            </div>
            
            <div class="statement-actions">
              <button @click.stop="viewPrerequisites(statement)" 
                      class="action-btn" 
                      title="View Prerequisites">
                ← {{ statement.prerequisite_atoms.length }}
              </button>
              <button @click.stop="viewDependents(statement)" 
                      class="action-btn" 
                      title="View Dependents">
                {{ getDependentCount(statement) }} →
              </button>
              <button @click.stop="validateStatement(statement)" 
                      class="action-btn validate"
                      :disabled="statement.logical_completeness_verified">
                {{ statement.logical_completeness_verified ? '✓' : '?' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  compileChatInterface(config) {
    return `
      <div class="chat-interface">
        <div class="chat-header">
          <h4>${config.title || 'AI Learning Assistant'}</h4>
          <div class="chat-status" :class="{ active: assistant_active }">
            {{ assistant_active ? 'Connected' : 'Disconnected' }}
          </div>
        </div>
        
        <div class="chat-messages" ref="chatMessages">
          <div v-for="message in chat_messages" :key="message.id" 
               class="chat-message" 
               :class="message.role">
            
            <div class="message-avatar">
              <span v-if="message.role === 'user'">👤</span>
              <span v-else-if="message.role === 'assistant'">🤖</span>
              <span v-else>⚙️</span>
            </div>
            
            <div class="message-bubble">
              <div class="message-content" v-html="renderMessage(message.content)"></div>
              <div class="message-timestamp">
                {{ formatTimestamp(message.timestamp) }}
              </div>
              
              <div v-if="message.suggested_actions" class="message-suggestions">
                <button v-for="action in message.suggested_actions" 
                        :key="action.id"
                        @click="executeSuggestedAction(action)"
                        class="suggestion-btn">
                  {{ action.text }}
                </button>
              </div>
            </div>
          </div>
          
          <div v-if="assistant_typing" class="typing-indicator">
            <div class="message-avatar">🤖</div>
            <div class="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        
        <div class="chat-input-container">
          <div class="context-indicators" v-if="active_context">
            <div class="context-chip" v-for="context in active_context" :key="context.type">
              {{ context.label }}: {{ context.value }}
              <button @click="removeContext(context.type)" class="context-remove">×</button>
            </div>
          </div>
          
          <div class="input-area">
            <textarea v-model="user_input" 
                      @keydown.enter.meta.prevent="sendChatMessage"
                      @keydown.enter.ctrl.prevent="sendChatMessage"
                      :placeholder="input_placeholder || 'Ask about atomic statements, network structure, or learning paths...'"
                      class="chat-input"
                      rows="2"
                      :disabled="!assistant_active"></textarea>
            
            <div class="input-controls">
              <button @click="attachCurrentNetwork" 
                      title="Include current network as context"
                      class="attach-btn">
                📊
              </button>
              <button @click="attachSelectedNode" 
                      title="Include selected node as context"
                      class="attach-btn"
                      :disabled="!selected_node">
                🎯
              </button>
              <button @click="sendChatMessage" 
                      :disabled="!canSendMessage"
                      class="send-btn">
                {{ sending_message ? '⏳' : '➤' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  compileNodeDetailsPanel(config) {
    return `
      <div class="node-details-panel" v-if="selected_node">
        <div class="details-header">
          <h4>${config.title || 'Statement Analysis'}</h4>
          <button @click="closeDetails" class="close-btn">×</button>
        </div>
        
        <div class="details-content">
          <div class="statement-section">
            <h5>Statement</h5>
            <div class="statement-display" :class="{ editable: edit_mode }">
              <textarea v-if="edit_mode" 
                        v-model="selected_node.statement_text"
                        class="statement-editor"
                        rows="3"></textarea>
              <div v-else class="statement-text">{{ selected_node.statement_text }}</div>
            </div>
            
            <div class="statement-actions">
              <button @click="toggleEditMode" class="edit-btn">
                {{ edit_mode ? 'Save' : 'Edit' }}
              </button>
              <button @click="validateStatement(selected_node)" 
                      class="validate-btn"
                      :disabled="selected_node.logical_completeness_verified">
                {{ selected_node.logical_completeness_verified ? 'Validated ✓' : 'Validate' }}
              </button>
            </div>
          </div>
          
          <div class="metrics-section">
            <h5>Universal Assembly Metrics</h5>
            <div class="metrics-grid">
              <div class="metric-card assembly">
                <div class="metric-label">Assembly Index</div>
                <div class="metric-value">{{ selected_node.assembly_index }}</div>
                <div class="metric-description">
                  Steps from atomic components to construct this concept
                </div>
              </div>
              
              <div class="metric-card distance">
                <div class="metric-label">Distinction Distance</div>
                <div class="metric-value">{{ selected_node.distinction_distance.toFixed(2) }}</div>
                <div class="metric-description">
                  Cognitive effort required to distinguish this concept
                </div>
              </div>
              
              <div class="metric-card complexity">
                <div class="metric-label">Learning Complexity</div>
                <div class="metric-value">{{ selected_node.learning_complexity.toFixed(1) }}</div>
                <div class="metric-description">
                  Combined difficulty score (Assembly × Distance)
                </div>
              </div>
              
              <div class="metric-card abstraction">
                <div class="metric-label">Abstraction Factor</div>
                <div class="metric-value">{{ calculateAbstractionFactor(selected_node).toFixed(2) }}</div>
                <div class="metric-description">
                  Ratio of dependent concepts to direct dependencies
                </div>
              </div>
            </div>
          </div>
          
          <div class="relationships-section">
            <h5>Knowledge Dependencies</h5>
            
            <div class="prerequisites-subsection">
              <h6>Prerequisites ({{ selected_node.prerequisite_atoms.length }})</h6>
              <div class="relationship-list">
                <div v-for="prereq in selected_node.prerequisite_atoms" 
                     :key="prereq.id"
                     class="relationship-item prerequisite"
                     @click="navigateToNode(prereq.id)">
                  <div class="relationship-text">{{ prereq.statement_text }}</div>
                  <div class="relationship-metrics">
                    A:{{ prereq.assembly_index }} D:{{ prereq.distinction_distance.toFixed(1) }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="dependents-subsection">
              <h6>Enables Learning ({{ getDependentNodes(selected_node).length }})</h6>
              <div class="relationship-list">
                <div v-for="dependent in getDependentNodes(selected_node)" 
                     :key="dependent.id"
                     class="relationship-item dependent"
                     @click="navigateToNode(dependent.id)">
                  <div class="relationship-text">{{ dependent.statement_text }}</div>
                  <div class="relationship-metrics">
                    A:{{ dependent.assembly_index }} D:{{ dependent.distinction_distance.toFixed(1) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="learning-paths-section">
            <h5>Learning Recommendations</h5>
            <div class="recommendations">
              <div v-if="getUnmetPrerequisites(selected_node).length > 0" class="recommendation warning">
                <h6>⚠️ Prerequisites Missing</h6>
                <div>Complete these concepts first:</div>
                <ul>
                  <li v-for="missing in getUnmetPrerequisites(selected_node)" :key="missing.id">
                    {{ missing.statement_text }}
                  </li>
                </ul>
              </div>
              
              <div v-if="getNextSteps(selected_node).length > 0" class="recommendation next">
                <h6>🎯 Next Steps</h6>
                <div>Ready to learn:</div>
                <ul>
                  <li v-for="next in getNextSteps(selected_node)" :key="next.id">
                    {{ next.statement_text }}
                  </li>
                </ul>
              </div>
              
              <div class="recommendation coaching">
                <h6>💡 Learning Strategy</h6>
                <div>{{ generateLearningStrategy(selected_node) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  compileCoachingFeedback(config) {
    return `
      <div class="coaching-feedback">
        <div class="feedback-header">
          <h4>${config.title || 'AI Learning Coach'}</h4>
          <div class="coaching-mode" :class="coaching_mode">
            Mode: {{ coaching_mode.replace('_', ' ').toUpperCase() }}
          </div>
        </div>
        
        <div class="feedback-content">
          <div v-if="current_feedback" class="active-feedback">
            <div class="feedback-type" :class="current_feedback.type">
              {{ getFeedbackIcon(current_feedback.type) }} {{ current_feedback.title }}
            </div>
            
            <div class="feedback-message" v-html="formatFeedback(current_feedback.message)"></div>
            
            <div v-if="current_feedback.suggestions" class="feedback-suggestions">
              <h6>Suggested Actions:</h6>
              <div class="suggestion-list">
                <button v-for="suggestion in current_feedback.suggestions" 
                        :key="suggestion.id"
                        @click="applySuggestion(suggestion)"
                        class="suggestion-action">
                  {{ suggestion.icon }} {{ suggestion.text }}
                </button>
              </div>
            </div>
            
            <div class="feedback-actions">
              <button @click="markFeedbackHelpful(true)" class="helpful-btn" :class="{ active: current_feedback.user_rating === 'helpful' }">
                👍 Helpful
              </button>
              <button @click="markFeedbackHelpful(false)" class="not-helpful-btn" :class="{ active: current_feedback.user_rating === 'not_helpful' }">
                👎 Not Helpful
              </button>
              <button @click="dismissFeedback" class="dismiss-btn">
                Dismiss
              </button>
            </div>
          </div>
          
          <div class="feedback-history">
            <h5>Recent Coaching</h5>
            <div class="feedback-timeline">
              <div v-for="feedback in recent_feedback" 
                   :key="feedback.id"
                   class="feedback-item"
                   :class="feedback.type">
                
                <div class="feedback-timestamp">
                  {{ formatRelativeTime(feedback.timestamp) }}
                </div>
                
                <div class="feedback-summary">
                  <div class="feedback-title">
                    {{ getFeedbackIcon(feedback.type) }} {{ feedback.title }}
                  </div>
                  <div class="feedback-preview">
                    {{ truncateText(feedback.message, 100) }}
                  </div>
                </div>
                
                <button @click="expandFeedback(feedback)" class="expand-btn">
                  {{ feedback.expanded ? '▼' : '▶' }}
                </button>
              </div>
            </div>
          </div>
          
          <div class="coaching-controls">
            <h5>Coaching Preferences</h5>
            
            <div class="mode-selector">
              <label>Coaching Style:</label>
              <select v-model="coaching_mode" @change="updateCoachingMode" class="mode-select">
                <option value="supportive">Supportive - Encouraging guidance</option>
                <option value="analytical">Analytical - Logic-focused feedback</option>
                <option value="socratic">Socratic - Question-based learning</option>
                <option value="minimal">Minimal - Only when requested</option>
              </select>
            </div>
            
            <div class="feedback-frequency">
              <label>
                <input type="checkbox" v-model="auto_feedback"> 
                Automatic feedback during analysis
              </label>
              <label>
                <input type="checkbox" v-model="proactive_suggestions"> 
                Proactive learning suggestions
              </label>
              <label>
                <input type="checkbox" v-model="complexity_warnings"> 
                Warn about complexity jumps
              </label>
            </div>
            
            <div class="manual-coaching">
              <textarea v-model="coaching_request" 
                        placeholder="Ask for specific coaching help..."
                        class="coaching-input"
                        rows="2"></textarea>
              <button @click="requestCoaching" 
                      :disabled="!coaching_request.trim()"
                      class="request-btn">
                Get Coaching
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = PatternVueCompiler;