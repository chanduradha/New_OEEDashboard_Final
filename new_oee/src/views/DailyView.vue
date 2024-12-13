<!-- src/views/DailyView.vue -->
<!-- <template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Daily Report</h1>
        <button @click="goToDashboard" class="close-button" aria-label="Close">
          ✕
        </button>
      </div>
    </header>
    <main class="page-content">
      <div class="metrics-row">
        <div class="metric-card" v-for="(metric, index) in metrics" :key="index">
          <div class="donut-chart">
            <svg viewBox="0 0 120 120" class="donut">
              
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e2e8f0"
                stroke-width="12"
              />
            
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                :stroke="metric.color"
                stroke-width="12"
                stroke-linecap="round"
                :stroke-dasharray="`${(metric.value / 100) * 339.292} 339.292`"
                transform="rotate(-90 60 60)"
                class="donut-segment"
              />
            
              <text
                x="60"
                y="55"
                text-anchor="middle"
                class="percentage"
                :fill="metric.color"
              >
                {{ Math.round(metric.value) }}%
              </text>
             
              <text
                x="60"
                y="75"
                text-anchor="middle"
                class="label"
                fill="#4a5568"
              >
                {{ metric.label }}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const metrics = ref([
  { 
    label: 'Availability', 
    value: 85, 
    color: '#3B82F6',
    min: 75,
    max: 95
  },
  { 
    label: 'Performance', 
    value: 78, 
    color: '#10B981',
    min: 70,
    max: 90
  },
  { 
    label: 'Quality', 
    value: 92, 
    color: '#F59E0B',
    min: 85,
    max: 98
  },
  { 
    label: 'OEE', 
    value: 82, 
    color: '#6366F1',
    min: 65,
    max: 88
  }
]);

let intervalId;


const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

const updateMetrics = () => {
  metrics.value = metrics.value.map(metric => ({
    ...metric,
    value: getRandomValue(metric.min, metric.max)
  }));
};


const goToDashboard = () => {
  router.push('/dashboard');
};

onMounted(() => {
 
  intervalId = setInterval(updateMetrics, 2000);
});

onUnmounted(() => {

  clearInterval(intervalId);
});
</script>

<style scoped>

.page-container {
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.page-header {
  margin-bottom: 2rem;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1a1a1a;
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

.page-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metrics-row {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
}

.metric-card {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.donut-chart {
  width: 100%;
  max-width: 200px;
}

.donut {
  width: 100%;
  height: auto;
}

.donut-segment {
  transition: stroke-dasharray 0.5s ease-in-out;
}

.percentage {
  font-size: 24px;
  font-weight: bold;
}

.label {
  font-size: 14px;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .metrics-row {
    flex-direction: column;
    align-items: center;
  }
  
  .metric-card {
    width: 100%;
  }
}
</style> -->

<!-- src/views/DailyView.vue -->
<!-- src/views/DailyView.vue -->
<template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Daily Report</h1>
        <button @click="goToDashboard" class="close-button" aria-label="Close">
          ✕
        </button>
      </div>
      <!-- Machine Selector -->
      <div class="machine-selector-container">
        <select 
          v-model="selectedMachine" 
          class="machine-selector"
          @change="updateMetricsForMachine"
        >
          <option value="">Select Machine</option>
          <option 
            v-for="machine in machines" 
            :key="machine.id" 
            :value="machine.id"
          >
            {{ machine.name }}
          </option>
        </select>
      </div>
    </header>
    <main class="page-content">
      <div class="metrics-row">
        <div class="metric-card" v-for="(metric, index) in metrics" :key="index">
          <div class="donut-chart">
            <svg viewBox="0 0 120 120" class="donut">
              <!-- Background circle -->
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e2e8f0"
                stroke-width="12"
              />
              <!-- Foreground circle -->
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                :stroke="metric.color"
                stroke-width="12"
                stroke-linecap="round"
                :stroke-dasharray="`${(metric.value / 100) * 339.292} 339.292`"
                transform="rotate(-90 60 60)"
                class="donut-segment"
              />
              <!-- Percentage text -->
              <text
                x="60"
                y="55"
                text-anchor="middle"
                class="percentage"
                :fill="metric.color"
              >
                {{ Math.round(metric.value) }}%
              </text>
              <!-- Label text -->
              <text
                x="60"
                y="75"
                text-anchor="middle"
                class="label"
                fill="#4a5568"
              >
                {{ metric.label }}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedMachine = ref('');

// Machine data with static values - replace with your actual machine data
const machines = ref([
  { 
    id: 'Mazak H-400', 
    name: 'Mazak H-400',
    metrics: {
      availability: 85,
      performance: 78,
      quality: 92,
      oee: 82
    }
  },
  { 
    id: 'machine2', 
    name: 'Machine 2',
    metrics: {
      availability: 90,
      performance: 85,
      quality: 95,
      oee: 88
    }
  },
  { 
    id: 'machine3', 
    name: 'Machine 3',
    metrics: {
      availability: 75,
      performance: 70,
      quality: 88,
      oee: 72
    }
  }
]);

// Initial metrics state
const metrics = ref([
  { 
    label: 'Availability', 
    value: 0, 
    color: '#3B82F6'
  },
  { 
    label: 'Performance', 
    value: 0, 
    color: '#10B981'
  },
  { 
    label: 'Quality', 
    value: 0, 
    color: '#F59E0B'
  },
  { 
    label: 'OEE', 
    value: 0, 
    color: '#6366F1'
  }
]);

// Function to update metrics based on selected machine
const updateMetricsForMachine = () => {
  if (!selectedMachine.value) {
    // Reset metrics if no machine is selected
    metrics.value = metrics.value.map(metric => ({
      ...metric,
      value: 0
    }));
    return;
  }
  
  const machine = machines.value.find(m => m.id === selectedMachine.value);
  if (!machine) return;

  metrics.value = [
    {
      label: 'Availability',
      value: machine.metrics.availability,
      color: '#3B82F6'
    },
    {
      label: 'Performance',
      value: machine.metrics.performance,
      color: '#10B981'
    },
    {
      label: 'Quality',
      value: machine.metrics.quality,
      color: '#F59E0B'
    },
    {
      label: 'OEE',
      value: machine.metrics.oee,
      color: '#6366F1'
    }
  ];
};

// Navigation function using Vue Router
const goToDashboard = () => {
  router.push('/dashboard');
};
</script>

<style scoped>
.page-container {
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.page-header {
  margin-bottom: 2rem;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1a1a1a;
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

.machine-selector-container {
  margin-bottom: 1.5rem;
}

.machine-selector {
  width: 100%;
  max-width: 300px;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.2s;
}

.machine-selector:hover {
  border-color: #3B82F6;
}

.machine-selector:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.page-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metrics-row {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
}

.metric-card {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.donut-chart {
  width: 100%;
  max-width: 200px;
}

.donut {
  width: 100%;
  height: auto;
}

.donut-segment {
  transition: stroke-dasharray 0.5s ease-in-out;
}

.percentage {
  font-size: 24px;
  font-weight: bold;
}

.label {
  font-size: 14px;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .metrics-row {
    flex-direction: column;
    align-items: center;
  }
  
  .metric-card {
    width: 100%;
  }
  
  .machine-selector {
    max-width: 100%;
  }
}
</style>