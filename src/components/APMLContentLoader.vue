<template>
  <div class="apml-content-loader">
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading APML content...</p>
    </div>
    
    <div v-else-if="error" class="error-state">
      <p>Failed to load APML content: {{ error }}</p>
    </div>
    
    <div v-else-if="apmlContent" class="apml-content">
      <APMLCodeBlock 
        :code="apmlContent" 
        :syntax-highlighting="displayMode === 'apml_with_syntax_highlighting'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import APMLCodeBlock from './APMLCodeBlock.vue'

const props = defineProps({
  contentSource: {
    type: String,
    required: true
  },
  displayMode: {
    type: String,
    default: 'standard'
  }
})

const route = useRoute()
const loading = ref(true)
const error = ref(null)
const apmlContent = ref('')

const loadAPMLContent = async () => {
  try {
    loading.value = true
    error.value = null
    
    // Load APML file content
    const response = await fetch(`/${props.contentSource}`)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const content = await response.text()
    apmlContent.value = content
    
  } catch (err) {
    console.error('Failed to load APML content:', err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Load content when component mounts or contentSource changes
onMounted(() => {
  if (props.contentSource) {
    loadAPMLContent()
  }
})

watch(() => props.contentSource, () => {
  if (props.contentSource) {
    loadAPMLContent()
  }
})
</script>

<style scoped>
.apml-content-loader {
  width: 100%;
  min-height: 200px;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #94a3b8;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(99, 102, 241, 0.1);
  border-left: 4px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state {
  padding: 2rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  color: #fca5a5;
  text-align: center;
}

.apml-content {
  width: 100%;
}
</style>