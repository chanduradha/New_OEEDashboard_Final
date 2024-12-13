<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Dashboard</h1>
          <div class="nav-buttons">
            <button 
              @click="router.push('/analytics')" 
              class="nav-button"
            >
              Analytics
            </button>
            <button 
              @click="router.push('/daily')" 
              class="nav-button"
            >
              Daily
            </button>
            <button 
              @click="router.push('/weekly')" 
              class="nav-button"
            >
              Weekly
            </button>
            <button 
              @click="router.push('/monthly')" 
              class="nav-button"
            >
              Monthly
            </button>
            <button 
             @click="router.push('/download')"
              class="nav-button"
            >
              Download
            </button>
            <button 
            @click="router.push('/')" 
              class="nav-button"
            >
              Back
            </button>
          </div>
        </div>
      </header>
      
     
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  
      
      <main v-if="$route.path === '/'" class="dashboard-content">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>Availability</h3>
            <p class="stat-value">90%</p>
          </div>
          <div class="stat-card">
            <h3>Performance</h3>
            <p class="stat-value">82%</p>
          </div>
          <div class="stat-card">
            <h3>Quality</h3>
            <p class="stat-value">85%</p>
          </div>
          <div class="stat-card">
            <h3>OEE</h3>
            <p class="stat-value">75%</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  
  </script>
  
  <style scoped>
  
  .dashboard-container {
    padding: 3rem;
    margin-left: 250px;
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
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
  
  @media (max-width: 768px) {
    .dashboard-container {
      margin-left: 0;
      padding-top: 60px;
    }
    
    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .nav-buttons {
      flex-wrap: wrap;
    }
  }
  
  .dashboard-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
  
  .dashboard-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }
  
  .dashboard-content {
    padding: 1rem;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .stat-card h3 {
    margin: 0;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>