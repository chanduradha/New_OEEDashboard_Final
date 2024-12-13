<!-- MinimalGaugeChart.vue -->
<template>
    <div class="gauges-container">
      <div class="gauge-grid">
        <div v-for="metric in metrics" :key="metric.label" class="gauge-card">
          <div class="gauge">
            <svg :width="size" :height="size/2 + 20">
              <!-- Background Arc -->
              <path
                :d="createArc(100)"
                stroke="#e5e7eb"
                stroke-width="12"
                fill="none"
                stroke-linecap="round"
              />
              <!-- Value Arc -->
              <path
                :d="createArc(metric.value)"
                stroke="#0F172A"
                stroke-width="12"
                fill="none"
                stroke-linecap="round"
              />
              <!-- Value Text -->
              <text
                :x="size/2"
                :y="size/2"
                class="value-text"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                {{ metric.value }}%
              </text>
              <!-- Label -->
              <text
                :x="size/2"
                :y="size/2 + 30"
                class="label-text"
                text-anchor="middle"
              >
                {{ metric.label }}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const size = ref(200)
  const radius = computed(() => size.value * 0.4)
  
  const metrics = ref([
    { label: 'Availability', value: 90 },
    { label: 'Performance', value: 82 },
    { label: 'Quality', value: 85 },
    { label: 'OEE', value: 75 }
  ])
  
  // Convert percentage to coordinates for arc
  const percentToCoords = (percentage) => {
    // Convert percentage to angle (180 degrees max)
    const angle = (percentage / 100) * Math.PI
    const x = Math.cos(angle)
    const y = Math.sin(angle)
    
    return {
      x: x * radius.value + size.value / 2,
      y: size.value / 2 - y * radius.value
    }
  }
  
  // Create SVG arc path
  const createArc = (percentage) => {
    const end = percentToCoords(percentage)
    const largeArcFlag = percentage > 50 ? 1 : 0
    const startX = size.value / 2 - radius.value
    const startY = size.value / 2
    
    return `M ${startX} ${startY} A ${radius.value} ${radius.value} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
  }
  </script>
  
  <style scoped>
  .gauges-container {
    margin-top: 2rem;
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .gauge-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  
  .gauge-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .gauge {
    position: relative;
  }
  
  .value-text {
    font-size: 24px;
    font-weight: 600;
    fill: #0F172A;
  }
  
  .label-text {
    font-size: 14px;
    fill: #64748B;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .gauge-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .gauge-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>