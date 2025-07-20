import { ref, reactive, computed } from 'vue'

export function useSiteResource() {
  // State
  const siteresources = ref([])
  const currentSiteResource = ref({
  "file_name": "",
  "file_type": null,
  "status": null,
  "description": "",
  "logical_completeness_status": null
})
  const loading = ref(false)
  const error = ref(null)
  
  // Computed
  const siteresourceCount = computed(() => siteresources.value.length)
  
  // Actions
  const createSiteResource = async (data) => {
    loading.value = true
    error.value = null
    
    try {
      // Validate required fields
      if (!data.file_name) throw new Error('file_name is required')
      if (!data.description) throw new Error('description is required')
      
      const newSiteResource = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString()
      }
      
      siteresources.value.push(newSiteResource)
      return newSiteResource
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }
  
  const updateSiteResource = async (id, updates) => {
    const index = siteresources.value.findIndex(item => item.id === id)
    if (index !== -1) {
      siteresources.value[index] = { ...siteresources.value[index], ...updates }
      return siteresources.value[index]
    }
    throw new Error('SiteResource not found')
  }
  
  const deleteSiteResource = async (id) => {
    const index = siteresources.value.findIndex(item => item.id === id)
    if (index !== -1) {
      return siteresources.value.splice(index, 1)[0]
    }
    throw new Error('SiteResource not found')
  }
  
  const getSiteResourceById = (id) => {
    return siteresources.value.find(item => item.id === id)
  }
  
  const clearsiteresources = () => {
    siteresources.value = []
  }
  
  return {
    // State
    siteresources,
    currentSiteResource,
    loading,
    error,
    
    // Computed
    siteresourceCount,
    
    // Actions
    createSiteResource,
    updateSiteResource,
    deleteSiteResource,
    getSiteResourceById,
    clearsiteresources
  }
}

export function useAPMLDevSiteContent() {
  // State
  const apmldevsitecontents = ref([])
  const currentAPMLDevSiteContent = ref({
  "primary_specification": "",
  "enhanced_validator": "",
  "site_specification": "",
  "vue_app_source": "",
  "pattern_library": "",
  "single_source_of_truth": "",
  "last_updated": null
})
  const loading = ref(false)
  const error = ref(null)
  
  // Computed
  const apmldevsitecontentCount = computed(() => apmldevsitecontents.value.length)
  
  // Actions
  const createAPMLDevSiteContent = async (data) => {
    loading.value = true
    error.value = null
    
    try {
      // Validate required fields
      
      
      const newAPMLDevSiteContent = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString()
      }
      
      apmldevsitecontents.value.push(newAPMLDevSiteContent)
      return newAPMLDevSiteContent
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }
  
  const updateAPMLDevSiteContent = async (id, updates) => {
    const index = apmldevsitecontents.value.findIndex(item => item.id === id)
    if (index !== -1) {
      apmldevsitecontents.value[index] = { ...apmldevsitecontents.value[index], ...updates }
      return apmldevsitecontents.value[index]
    }
    throw new Error('APMLDevSiteContent not found')
  }
  
  const deleteAPMLDevSiteContent = async (id) => {
    const index = apmldevsitecontents.value.findIndex(item => item.id === id)
    if (index !== -1) {
      return apmldevsitecontents.value.splice(index, 1)[0]
    }
    throw new Error('APMLDevSiteContent not found')
  }
  
  const getAPMLDevSiteContentById = (id) => {
    return apmldevsitecontents.value.find(item => item.id === id)
  }
  
  const clearapmldevsitecontents = () => {
    apmldevsitecontents.value = []
  }
  
  return {
    // State
    apmldevsitecontents,
    currentAPMLDevSiteContent,
    loading,
    error,
    
    // Computed
    apmldevsitecontentCount,
    
    // Actions
    createAPMLDevSiteContent,
    updateAPMLDevSiteContent,
    deleteAPMLDevSiteContent,
    getAPMLDevSiteContentById,
    clearapmldevsitecontents
  }
}

