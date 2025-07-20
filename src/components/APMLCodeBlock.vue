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

// APML v0.9.0 Syntax Highlighter
const highlightAPML = (code) => {
  let highlighted = code

  // Structure keywords (purple)
  highlighted = highlighted.replace(
    /\b(app|data|interface|logic|integrations|deploy)\b/g,
    '<span class="apml-structure">$1</span>'
  )

  // Control flow keywords (pink)
  highlighted = highlighted.replace(
    /\b(if|else|when|while|for|each|in|return|break|continue|process|calculate)\b/g,
    '<span class="apml-control">$1</span>'
  )

  // Data types (cyan)
  highlighted = highlighted.replace(
    /\b(text|number|boolean|date|timestamp|email|url|unique_id|money|list|of)\b/g,
    '<span class="apml-type">$1</span>'
  )

  // Field modifiers (red)
  highlighted = highlighted.replace(
    /\b(required|optional|default|auto|unique)\b/g,
    '<span class="apml-modifier">$1</span>'
  )

  // Action keywords (yellow)
  highlighted = highlighted.replace(
    /\b(show|display|notify|send|create|read|update|delete)\b/g,
    '<span class="apml-action">$1</span>'
  )

  // Timing keywords (green)
  highlighted = highlighted.replace(
    /\b(now|today|tomorrow|daily|weekly|monthly|at|before|after)\b/g,
    '<span class="apml-timing">$1</span>'
  )

  // Property names (blue) - identifier followed by colon
  highlighted = highlighted.replace(
    /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
    '<span class="apml-property">$1</span>:'
  )

  // String literals (green)
  highlighted = highlighted.replace(
    /"([^"\\]|\\.)*"/g,
    '<span class="apml-string">$&</span>'
  )

  // Numbers and special literals
  highlighted = highlighted.replace(
    /\$[0-9]+(\.[0-9]{2})?/g,
    '<span class="apml-number">$&</span>'
  )
  highlighted = highlighted.replace(
    /[0-9]+(\.[0-9]+)?%/g,
    '<span class="apml-number">$&</span>'
  )
  highlighted = highlighted.replace(
    /\b[0-9]+(\.[0-9]+)?\b/g,
    '<span class="apml-number">$&</span>'
  )

  // Boolean literals
  highlighted = highlighted.replace(
    /\b(true|false|yes|no|on|off)\b/g,
    '<span class="apml-boolean">$1</span>'
  )

  // Union operators
  highlighted = highlighted.replace(
    /\s*\|\s*/g,
    ' <span class="apml-union">|</span> '
  )

  // Comments
  highlighted = highlighted.replace(
    /#.*$/gm,
    '<span class="apml-comment">$&</span>'
  )

  return highlighted
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