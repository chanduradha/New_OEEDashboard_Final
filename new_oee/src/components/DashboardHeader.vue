<!-- DashboardHeader.vue -->
<template>
    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="dashboard-title">Dashboard</h1>
        <div class="nav-buttons">
          <button 
            @click="navigate('/dashboard/analytics')" 
            class="nav-button"
            :class="{ active: currentPath === '/dashboard/analytics' }"
          >
            Analytics
          </button>
          <button 
            @click="navigate('/dashboard/daily')" 
            class="nav-button"
            :class="{ active: currentPath === '/dashboard/daily' }"
          >
            Daily
          </button>
          <button 
            @click="navigate('/dashboard/weekly')" 
            class="nav-button"
            :class="{ active: currentPath === '/dashboard/weekly' }"
          >
            Weekly
          </button>
          <button 
            @click="navigate('/dashboard/monthly')" 
            class="nav-button"
            :class="{ active: currentPath === '/dashboard/monthly' }"
          >
            Monthly
          </button>
          <button 
            @click="navigate('/dashboard/download')"
            class="nav-button"
            :class="{ active: currentPath === '/dashboard/download' }"
          >
            Download
          </button>
          <button 
            @click="navigate('/')" 
            class="nav-button"
          >
            Back
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  
  const currentPath = computed(() => route.path);
  
  const navigate = (path) => {
    router.push(path);
  };
  </script>
  
  <style scoped>
  .dashboard-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
  
  .dashboard-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }
  
  .nav-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-button {
    padding: 0.5rem 1rem;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    color: #4a5568;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
    cursor: pointer;
  }
  
  .nav-button:hover {
    background-color: #f7fafc;
    color: #2d3748;
  }
  
  .nav-button.active {
    background-color: #4a90e2;
    color: white;
    border-color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .nav-buttons {
      flex-wrap: wrap;
    }
  }
  
  @media (max-width: 480px) {
    .nav-button {
      width: 100%;
      text-align: center;
    }
  }
  </style>