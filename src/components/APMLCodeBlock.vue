<template>
  <pre class="apml-code-block"><code class="language-apml" v-html="highlightedCode"></code></pre>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

// Clean APML v0.9.0 Syntax Highlighter
const highlightAPML = (code) => {
  // Use a line-by-line approach to avoid conflicts
  const lines = code.split('\n')
  
  const highlightedLines = lines.map(line => {
    let highlighted = line
    
    // Skip empty lines
    if (!line.trim()) return line
    
    // Comments first (entire line)
    if (line.trim().startsWith('#')) {
      return `<span class="apml-comment">${line}</span>`
    }
    
    // String literals (protect from other replacements)
    const strings = []
    highlighted = highlighted.replace(/"([^"\\]|\\.)*"/g, (match) => {
      const index = strings.length
      strings.push(`<span class="apml-string">${match}</span>`)
      return `__STRING_${index}__`
    })
    
    // Structure keywords at start of line
    highlighted = highlighted.replace(
      /^(\s*)(app|data|interface|logic|component|theme)\b/,
      '$1<span class="apml-structure">$2</span>'
    )
    
    // Property names (word followed by colon)
    highlighted = highlighted.replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
      '<span class="apml-property">$1</span>:'
    )
    
    // Action keywords
    highlighted = highlighted.replace(
      /\b(show|display|notify|when|if|for|each)\b/g,
      '<span class="apml-action">$1</span>'
    )
    
    // Data types
    highlighted = highlighted.replace(
      /\b(text|number|boolean|date|timestamp|email|url|unique_id|money|list|of)\b/g,
      '<span class="apml-type">$1</span>'
    )
    
    // Field modifiers
    highlighted = highlighted.replace(
      /\b(required|optional|default|auto|unique)\b/g,
      '<span class="apml-modifier">$1</span>'
    )
    
    // Numbers (simple patterns only)
    highlighted = highlighted.replace(
      /\b\d+(\.\d+)?\b/g,
      '<span class="apml-number">$&</span>'
    )
    
    // Union operators
    highlighted = highlighted.replace(
      /\s\|\s/g,
      ' <span class="apml-union">|</span> '
    )
    
    // Restore strings
    strings.forEach((str, index) => {
      highlighted = highlighted.replace(`__STRING_${index}__`, str)
    })
    
    return highlighted
  })
  
  return highlightedLines.join('\n')
}

const highlightedCode = computed(() => {
  return highlightAPML(props.code)
})
</script>

<style scoped>
.apml-code-block {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e2e8f0;
}

/* APML Syntax Highlighting Colors */
:deep(.apml-structure) {
  color: #8b5cf6;
  font-weight: bold;
}

:deep(.apml-control) {
  color: #ec4899;
  font-weight: bold;
}

:deep(.apml-type) {
  color: #06b6d4;
  font-weight: 500;
}

:deep(.apml-modifier) {
  color: #ef4444;
  font-weight: bold;
}

:deep(.apml-action) {
  color: #eab308;
  font-weight: 500;
}

:deep(.apml-timing) {
  color: #10b981;
  font-weight: 500;
}

:deep(.apml-property) {
  color: #3b82f6;
  font-weight: 500;
}

:deep(.apml-string) {
  color: #10b981;
}

:deep(.apml-number) {
  color: #f59e0b;
}

:deep(.apml-boolean) {
  color: #ec4899;
  font-weight: 500;
}

:deep(.apml-union) {
  color: #f59e0b;
  font-weight: bold;
}

:deep(.apml-comment) {
  color: #6b7280;
  font-style: italic;
}

.apml-code-block:hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.apml-code-block::-webkit-scrollbar {
  height: 8px;
}

.apml-code-block::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 4px;
}

.apml-code-block::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.5);
  border-radius: 4px;
}

.apml-code-block::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.7);
}
</style>