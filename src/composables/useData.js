import { ref, reactive, computed } from 'vue'

// Enhanced data composables with beautiful forms and interactions
export function useAppData() {
  const loading = ref(false)
  const error = ref(null)
  
  return {
    loading,
    error
  }
}