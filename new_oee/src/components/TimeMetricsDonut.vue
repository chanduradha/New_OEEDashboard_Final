<template>
  <div class="donut-chart-container">
    <Doughnut
      :data="chartData"
      :options="chartOptions"
      class="chart"
    />
    
    <div class="center-text">
      <div class="total-minutes">{{ totalTimeInMinutes }}</div>
      <div class="minutes-label">Total Minutes</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { defineProps } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  runtimeInHours: {
    type: Number,
    required: true,
    default: 0
  },
  idleTimeInHours: {
    type: Number,
    required: true,
    default: 0
  },
  offTimeInHours: {
    type: Number,
    required: true,
    default: 0
  }
})

// Initialize chartData with transparent circle
const chartData = ref({
  labels: ['Initial'],
  datasets: [{
    data: [100],
    backgroundColor: ['rgba(226, 232, 240, 0.3)'], // Transparent gray color
    borderWidth: 0
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || ''
          const value = context.raw || 0
          return `${label}: ${value} minutes`
        }
      }
    }
  },
  cutout: '70%'
}

const updateChartData = () => {
  const runtimeMinutes = Math.round(props.runtimeInHours * 60)
  const idleTimeMinutes = Math.round(props.idleTimeInHours * 60)
  const offTimeMinutes = Math.round(props.offTimeInHours * 60)

  // Only update if there's actual data
  if (runtimeMinutes > 0 || idleTimeMinutes > 0 || offTimeMinutes > 0) {
    chartData.value = {
      labels: ['Runtime', 'Idle Time', 'Off Time'],
      datasets: [{
        data: [runtimeMinutes, idleTimeMinutes, offTimeMinutes],
        backgroundColor: [
          '#059669',  // Blue for runtime
          '#f59e0b',  // Amber for idle time
          '#dc2626'   // Red for off time
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    }
  }
}

watch(
  () => [props.runtimeInHours, props.idleTimeInHours, props.offTimeInHours],
  () => updateChartData(),
  { immediate: true }
)

const totalTimeInMinutes = computed(() => {
  return Math.round((props.runtimeInHours + props.idleTimeInHours + props.offTimeInHours) * 60)
})
</script>

<style scoped>
.donut-chart-container {
  position: relative;
  height: 220px;
  width: 100%;
}

.chart {
  position: relative;
  z-index: 1;
}

.center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.total-minutes {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
}

.minutes-label {
  font-size: 0.875rem;
  color: #4a5568;
}
</style>