<template>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <h3 class="stat-title">Availability</h3>
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div class="stat-value">{{ currentStats.availability.toFixed(1) }}%</div>
      </div>
  
      <div class="stat-card">
        <div class="stat-header">
          <h3 class="stat-title">Performance</h3>
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
        <div class="stat-value">{{ currentStats.performance.toFixed(1) }}%</div>
      </div>
  
      <div class="stat-card">
        <div class="stat-header">
          <h3 class="stat-title">Quality</h3>
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </div>
        <div class="stat-value">{{ currentStats.quality.toFixed(1) }}%</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <h3 class="stat-title">OEE</h3>
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
     
     
        </div>
        <div class="stat-value">{{ currentStats.oee.toFixed(1) }}%</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed,defineProps } from 'vue';
  
  const props = defineProps({
    selectedMachine: {
      type: String,
      default: ''
    },
    selectedDate: {
      type: String,
      default: ''
    }
  });
  
  // Default static stats
  const defaultStats = {
    availability: 0,
    performance: 0,
    quality: 0,
    oee: 0 // (85 * 90 * 95) / 10000
  };
  
  const weeklyStats = ref(null);
  
  // Computed property to determine which stats to show
  const currentStats = computed(() => {
    return weeklyStats.value || defaultStats;
  });
  
  // Watch for changes in selected machine or date
  watch(
    [() => props.selectedMachine, () => props.selectedDate],
    async ([newMachine, newDate]) => {
      if (newMachine && newDate) {
        await calculateWeeklyStats(newMachine, newDate);
      }
    }
  );
  
  // Function to calculate weekly stats
  const calculateWeeklyStats = async (machine, date) => {
    // Get the date range (selected date to 6 days before)
    const endDate = new Date(date);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6);
    
    // In a real application, you would fetch this data from an API
    // For demonstration, we'll generate mock data
    const mockWeeklyData = Array.from({ length: 7 }, () => ({
      availability: Math.random() * (100 - 75) + 75, // Random between 75-100
      performance: Math.random() * (100 - 80) + 80,  // Random between 80-100
      quality: Math.random() * (100 - 90) + 90,      // Random between 90-100
    }));
  
    // Calculate averages
    const availability = mockWeeklyData.reduce((sum, day) => sum + day.availability, 0) / 7;
    const performance = mockWeeklyData.reduce((sum, day) => sum + day.performance, 0) / 7;
    const quality = mockWeeklyData.reduce((sum, day) => sum + day.quality, 0) / 7;
    
    // Calculate OEE (Overall Equipment Effectiveness)
    const oee = (availability * performance * quality) / 10000; // Divide by 10000 since each is a percentage
  
    weeklyStats.value = {
      availability,
      performance,
      quality,
      oee
    };
  };
  </script>
  
  
  <style scoped>
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .stat-card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .stat-title {
    font-size: 1rem;
    font-weight: 600;
    color: #4a5568;
    margin: 0;
  }
  
  .stat-icon {
    color: #4299e1;
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #2d3748;
  }
  
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>