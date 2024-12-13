<!-- src/views/MonthlyView.vue -->
<template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Monthly Report</h1>
        <button @click="goToDashboard" class="close-button" aria-label="Close">
          ✕
        </button>
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
      <div class="monthly-content">
        <p>Monthly report content will go here</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedMachine = ref('');

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

.controls-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.select-wrapper {
  min-width: 200px;
}

.select-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 0.875rem;
  color: #4a5568;
  cursor: pointer;
}

.select-control:hover {
  border-color: #cbd5e0;
}

.select-control:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.page-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .controls-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .select-wrapper {
    width: 100%;
  }
}
</style>