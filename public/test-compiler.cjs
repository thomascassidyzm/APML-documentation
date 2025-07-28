const fs = require('fs');

// Minimal test to see what the actual compiler produces
function testCompiler() {
  const apmlContent = fs.readFileSync('/Users/tomcassidy/cityrep-v2/cityrep-enhanced.apml', 'utf8');
  
  // Basic pattern matching that the compiler likely does
  const hasGlassmorphism = apmlContent.includes('glassmorphism');
  const hasStyledWith = apmlContent.includes('styled_with');
  const hasBackdropFilter = apmlContent.includes('backdrop_filter');
  
  console.log('=== COMPILER INPUT ANALYSIS ===');
  console.log('APML contains glassmorphism:', hasGlassmorphism);
  console.log('APML contains styled_with:', hasStyledWith);
  console.log('APML contains backdrop_filter:', hasBackdropFilter);
  
  // What a basic compiler would output
  const basicOutput = `<template>
  <div id="app" class="app-container">
    <!-- Basic structure from APML -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() { return {}; },
  methods: {},
  mounted() { console.log('APML Generated App mounted'); }
}
</script>

<style scoped>
.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>`;

  console.log('\n=== LIKELY COMPILER OUTPUT ===');
  console.log(basicOutput);
  
  return basicOutput;
}

if (require.main === module) {
  testCompiler();
}

module.exports = testCompiler;