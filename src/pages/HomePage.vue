<template>
  <div class="enhanced-home">
    <!-- Beautiful Hero Section -->
    <HeroSection 
      title="Welcome to the Future"
      subtitle="Experience the power of APML - where conversation becomes code"
      :animated="true"
    />
    
    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title text-gradient">Powerful Features</h2>
        <div class="features-grid">
          <GlassCard 
            v-for="feature in features" 
            :key="feature.id"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :hover-glow="true"
          />
        </div>
      </div>
    </section>
    
    <!-- Interface Elements -->
    <section class="interface-section">
      <div class="container">
        <div class="card-glass">hero_section</div>
        <div class="card-glass">trinity_principle</div>
        <div class="card-glass">specification_section</div>
        <div class="card-glass">logical_completeness_section</div>
        <div class="card-glass">playground_section</div>
        <div class="card-glass">examples_gallery</div>
        <div class="card-glass">tools_ecosystem</div>
        <div class="card-glass">community_section</div>
        <div class="card-glass">commercial_bridge</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import GlassCard from '../components/GlassCard.vue'

const features = ref([
  {
    id: 1,
    title: 'Conversational Syntax',
    description: 'Write applications using natural language that feels like conversation',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Logically Complete',
    description: 'Mathematical verification ensures crash-free deployment',
    icon: '✅'
  },
  {
    id: 3,
    title: 'Trinity Principle',
    description: 'Every app expressed through app→user, user→app, app→app patterns',
    icon: '🔺'
  },
  {
    id: 4,
    title: 'Beautiful Output',
    description: 'Generated applications look professionally designed by default',
    icon: '✨'
  }
])
</script>

<style scoped>
.enhanced-home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features-section {
  padding: 6rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.interface-section {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>