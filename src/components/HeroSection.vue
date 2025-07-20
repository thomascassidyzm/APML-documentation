<template>
  <section class="hero-section" :class="heroClass">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle" v-if="subtitle">{{ subtitle }}</p>
      <div class="hero-actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="hero-decoration" v-if="animated"></div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  type: {
    type: String,
    default: 'gradient',
    validator: (value) => ['gradient', 'glass', 'animated'].includes(value)
  },
  animated: Boolean
})

const heroClass = computed(() => `hero-${props.type}`)
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 8rem 2rem;
  text-align: center;
  border-radius: 24px;
  margin: 2rem 0;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: rgba(248, 250, 252, 0.8);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 4s infinite;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>