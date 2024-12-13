<!-- TimeDonutChart.vue -->
<template>
    <div class="donut-chart-container">
      <h3 class="chart-title">Time Distribution</h3>
      <div class="chart-wrapper">
        <svg :width="size" :height="size" class="donut-chart">
          <!-- Background circle -->
          <circle
            :cx="center"
            :cy="center"
            :r="radius"
            fill="transparent"
            :stroke="backgroundColor"
            :stroke-width="strokeWidth"
          />
          
          <!-- Runtime Arc -->
          <path
            :d="getArcPath(0, runTimeAngle)"
            :stroke="colors.runtime"
            fill="transparent"
            :stroke-width="strokeWidth"
          />
          
          <!-- Idle Time Arc -->
          <path
            :d="getArcPath(runTimeAngle, runTimeAngle + idleTimeAngle)"
            :stroke="colors.idleTime"
            fill="transparent"
            :stroke-width="strokeWidth"
          />
          
          <!-- Off Time Arc -->
          <path
            :d="getArcPath(runTimeAngle + idleTimeAngle, runTimeAngle + idleTimeAngle + offTimeAngle)"
            :stroke="colors.offTime"
            fill="transparent"
            :stroke-width="strokeWidth"
          />
  
          <!-- Center text showing total time -->
          <text
            :x="center"
            :y="center"
            text-anchor="middle"
            alignment-baseline="middle"
            class="total-time"
          >
            {{ totalTime }}
          </text>
          <text
            :x="center"
            :y="center + 20"
            text-anchor="middle"
            alignment-baseline="middle"
            class="total-label"
          >
            Total Minutes
          </text>
        </svg>
  
        <!-- Legend -->
        <div class="chart-legend">
          <div class="legend-item">
            <span class="legend-color" :style="{ backgroundColor: colors.runtime }"></span>
            <span class="legend-label">Runtime: {{ runTime }}m</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" :style="{ backgroundColor: colors.idleTime }"></span>
            <span class="legend-label">Idle Time: {{ idleTime }}m</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" :style="{ backgroundColor: colors.offTime }"></span>
            <span class="legend-label">Off Time: {{ offTime }}m</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    runTime: {
      type: Number,
      default: 0
    },
    idleTime: {
      type: Number,
      default: 0
    },
    offTime: {
      type: Number,
      default: 0
    }
  });
  
  // Chart configuration
  const size = 200;
  const strokeWidth = 20;
  const radius = 80;
  const center = size / 2;
  const backgroundColor = '#f1f5f9';
  const colors = {
    runtime: '#38a169',   // Blue
    idleTime: '#f97316',  // Orange
    offTime: '#ef4444'    // Red
  };
  
  // Computed values
  const totalTime = computed(() => props.runTime + props.idleTime + props.offTime);
  
  const runTimeAngle = computed(() => (props.runTime / totalTime.value) * 360);
  const idleTimeAngle = computed(() => (props.idleTime / totalTime.value) * 360);
  const offTimeAngle = computed(() => (props.offTime / totalTime.value) * 360);
  
  // Helper function to create arc paths
  const getArcPath = (startAngle, endAngle) => {
    const start = polarToCartesian(center, center, radius, startAngle);
    const end = polarToCartesian(center, center, radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 1, end.x, end.y
    ].join(' ');
  };
  
  // Helper function to convert polar coordinates to cartesian
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };
  </script>
  
  <style scoped>
  .donut-chart-container {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1rem;


  }
  
  .chart-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .donut-chart {
    transform: rotate(-90deg);
  }
  
  .total-time {
    transform: rotate(90deg);
    font-size: 24px;
    font-weight: bold;
    fill: #1a1a1a;
  }
  
  .total-label {
    transform: rotate(90deg);
    font-size: 12px;
    fill: #666;
  }
  
  .chart-legend {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }
  
  .legend-label {
    font-size: 0.875rem;
    color: #666;
  }
  
  @media (max-width: 768px) {
    .donut-chart-container {
      padding: 1rem;
    }
    
    .chart-wrapper {
      gap: 1rem;
    }
  }
  </style>