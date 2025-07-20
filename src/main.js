import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import UnoCSS
import 'uno.css'

// Import design system
import './styles/design-system.css'

const app = createApp(App)

app.use(router)

// Global properties for enhanced features
app.config.globalProperties.$designSystem = {
  version: '1.0.0',
  theme: 'dark',
  animations: true
}

app.mount('#app')