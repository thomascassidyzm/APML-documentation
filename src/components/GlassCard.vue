<template>
  <div class="glass-card" :class="{ 'glow-on-hover': hoverGlow }">
    <div class="card-icon" v-if="icon">{{ icon }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  hoverGlow: Boolean
})
</script>

<style scoped>
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-neutral-100);
  margin-bottom: 1rem;
}

.card-description {
  color: var(--color-neutral-300);
  line-height: 1.6;
  margin: 0;
}
</style>