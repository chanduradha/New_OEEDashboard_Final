
<template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Welcome to Analytics</h1>
        <div v-if="formattedDate" class="date-display">{{ formattedDate }}</div>
        <button @click="goToDashboard" class="close-button" aria-label="Close">✕</button>
      </div>
      <div class="controls-row">
        <div class="select-wrapper">
          <select v-model="selectedMachine" class="select-control">
            <option value="" disabled>Select Machine</option>
            <option v-for="machine in machines" :key="machine" :value="machine">
              {{ machine }}
            </option>
          </select>
        </div>
        <div class="select-wrapper">
          <select v-model="selectedShift" class="select-control">
            <option value="" disabled>Select Shift</option>
            <option v-for="shift in shifts" :key="shift" :value="shift">
              {{ shift }}
            </option>
          </select>
        </div>
        <div class="date-wrapper">
          <input 
            type="date" 
            v-model="selectedDate" 
            class="date-control"
            :min="minDate"
            :max="maxDate"
          >
        </div>
      </div>
    </header>
    
    <main class="page-content">
      <div class="dashboard-layout">
        <!-- Left side container with stats and metrics -->
        <div class="metrics-container">
          <!-- Stats Cards -->
          <div class="stat-cards-row">
            <div class="stat-card" style="background-color:white">
              <h3 style="color: black;">Availability</h3>
              <p class="stat-value" style="color: black;">{{ stats.availability }}%</p>
            </div>
            <div class="stat-card" style="background-color: white">
              <h3 style="color: black;">Performance</h3>
              <p class="stat-value" style="color: black;">{{ stats.performance }}%</p>
            </div>
            <div class="stat-card" style="background-color:white">
              <h3 style="color: black;">Quality</h3>
              <p class="stat-value" style="color: black;">{{ stats.quality }}%</p>
            </div>
            <div class="stat-card" style="background-color:white">
              <h3 style="color: black;">OEE</h3>
              <p class="stat-value" style="color: black;">{{ stats.oee }}%</p>
            </div>
          </div>

          <!-- Metric Cards -->
          <div class="metric-cards-row">
            <div class="metric-card">
              <div class="metric-icon">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="metric-content">
                <h3>Runtime</h3>
                <p class="metric-value">{{ metrics.runtime }} hrs</p>
              </div>
            </div>
            
            <div class="metric-card">
              <div class="metric-icon">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="6" x2="12" y2="12"/>
                  <line x1="12" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <div class="metric-content">
                <h3>Idle Time</h3>
                <p class="metric-value">{{ metrics.idleTime }} hrs</p>
              </div>
            </div>
            
            <div class="metric-card">
              <div class="metric-icon">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="6" x2="12" y2="12"/>
                  <line x1="12" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <div class="metric-content">
                <h3>Off Time</h3>
                <p class="metric-value">{{ metrics.offTime }} hrs</p>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-icon">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: red;">
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="metric-content">
                <h3>Bad Parts</h3>
                <p class="metric-value">{{ metrics.badParts }}</p>
              </div>
            </div>
          </div>

     
        </div>

        <!-- Right side donut chart -->
        <div class="chart-container">
          <div class="donut-chart-wrapper">
            <TimeMetricsDonut
              :runtime-in-hours="metrics.runtime"
              :idle-time-in-hours="metrics.idleTime"
              :off-time-in-hours="metrics.offTime"
            />
          </div>
        </div>

        <div class="bar-chart-wrapper">
          <TimeMetricsBarChart
            :runtime-in-hours="metrics.runtime"
            :idle-time-in-hours="metrics.idleTime"
            :off-time-in-hours="metrics.offTime"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Script remains exactly the same as previous version
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import TimeMetricsDonut from '@/components/TimeMetricsDonut.vue'

import TimeMetricsBarChart from '@/components/TimeMetricsBarChart.vue'
const router = useRouter();
const selectedMachine = ref('');
const selectedShift = ref('');
const selectedDate = ref('');

const minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0];
const maxDate = new Date().toISOString().split('T')[0];

const machines = [
  'Mazak H-400',
  'HMT STALLION-200',
  'macpowermono-200',
  'AMS-VMC',
  'SCHAUBLIN-33',
  'HMT VTC 800'
];

const shifts = [
  'Morning Shift',
  'Afternoon Shift',
  'Night Shift'
];

const machineData = {
  'Mazak H-400': {
    'Morning Shift': {
      stats: { availability: 85.5, performance: 92.3, quality: 98.1, oee: 77.4 },
      metrics: { runtime: 6.5, idleTime: 1.2, offTime: 0.3, badParts: 15 }
    },
    'Afternoon Shift': {
      stats: { availability: 82.1, performance: 88.7, quality: 97.5, oee: 71.2 },
      metrics: { runtime: 5.8, idleTime: 1.8, offTime: 0.4, badParts: 22 }
    },
    'Night Shift': {
      stats: { availability: 88.9, performance: 94.1, quality: 98.8, oee: 82.6 },
      metrics: { runtime: 7.1, idleTime: 0.8, offTime: 0.1, badParts: 8 }
    }
  },
  'HMT STALLION-200': {
    'Morning Shift': {
      stats: { availability: 87.2, performance: 91.5, quality: 97.8, oee: 78.1 },
      metrics: { runtime: 6.8, idleTime: 1.0, offTime: 0.2, badParts: 12 }
    },
    'Afternoon Shift': {
      stats: { availability: 83.4, performance: 89.2, quality: 96.9, oee: 72.3 },
      metrics: { runtime: 6.0, idleTime: 1.5, offTime: 0.5, badParts: 18 }
    },
    'Night Shift': {
      stats: { availability: 89.5, performance: 93.8, quality: 98.5, oee: 82.9 },
      metrics: { runtime: 7.2, idleTime: 0.7, offTime: 0.1, badParts: 7 }
    }
  },
  'macpowermono-200': {
    'Morning Shift': {
      stats: { availability: 80.2, performance: 93.5, quality: 95.8, oee: 70.1 },
      metrics: { runtime: 6.8, idleTime: 1.0, offTime: 0.2, badParts: 12 }
    },
    'Afternoon Shift': {
      stats: { availability: 83.4, performance: 89.2, quality: 96.9, oee: 72.3 },
      metrics: { runtime: 6.0, idleTime: 1.5, offTime: 0.5, badParts: 18 }
    },
    'Night Shift': {
      stats: { availability: 75.5, performance: 70.8, quality: 80.5, oee: 75.9 },
      metrics: { runtime: 7.2, idleTime: 0.7, offTime: 0.1, badParts: 7 }
    }
  }
};

const stats = ref({
  availability: 0.00,
  performance: 0.00,
  quality: 0.00,
  oee: 0.00
});

const metrics = ref({
  runtime: 0.00,
  idleTime: 0.00,
  offTime: 0.00,
  badParts: 0
});

watch([selectedMachine, selectedShift, selectedDate], ([machine, shift, date]) => {
  if (machine && shift && date) {
    const data = machineData[machine]?.[shift];
    if (data) {
      stats.value = data.stats;
      metrics.value = data.metrics;
    } else {
      stats.value = {
        availability: 0.00,
        performance: 0.00,
        quality: 0.00,
        oee: 0.00
      };
      metrics.value = {
        runtime: 0.00,
        idleTime: 0.00,
        offTime: 0.00,
        badParts: 0
      };
    }
  }
});

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return new Date(selectedDate.value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const goToDashboard = () => {
  router.push('/dashboard');
};
// Add style for donut chart wrapper

</script>

<style scoped>
.donut-chart-wrapper {
  flex: 1;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  
}

.bar-chart-wrapper {
  flex: 1;
  background: white;
  border-radius: 0.5rem;
  padding: 0rem;

  border: 1px solid #e2e8f0;
}

/* Previous styles remain, with modifications to width and layout */
.page-container {
  padding: 1rem;
  background-color: white;
  height: 78vh;
  
}

.page-header {
  margin-bottom: 1rem;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.controls-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.select-wrapper, .date-wrapper {
  flex: 1;
}

.select-control, .date-control {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
}

.date-display {
  color: #4a5568;
  font-size: 0.875rem;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0; 
}

.stat-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  margin-left: 0; /* Ensure it starts from the left mark */
  
}

.metric-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-left: 0; /* Ensure it starts from the left mark */
}
.stat-card {
  padding: 1.25rem;
  border-radius: 0.5rem;
  color: white;
  text-align: center;
  border: 3px solid #e2e8f0;
 
}

.stat-value {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.metric-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.metric-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;

}

.metric-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #f7fafc;
  border-radius: 50%;
  color: #4a5568;
}

.metric-content h3 {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0;
}

.metric-value {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1a202c;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #ff0000;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: rgba(255, 0, 0, 0.1);
}

.close-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
}



/* New layout styles */
.dashboard-layout {
  display: grid;
  grid-template-columns: 3fr 2fr; /* Adjust ratio between metrics and chart */
  gap: 2rem;
  
  margin: 0 auto;
  padding: 0 1rem;
}

.metrics-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
 
}

.metric-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.chart-container {
  min-height: 300px; /* Adjust to match the height of metrics container */
  
}

.donut-chart-wrapper {
  height:80%;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .chart-container {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .stat-cards-row,
  .metric-cards-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .controls-row {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .stat-cards-row,
  .metric-cards-row {
    grid-template-columns: 1fr;
  }
}
</style>