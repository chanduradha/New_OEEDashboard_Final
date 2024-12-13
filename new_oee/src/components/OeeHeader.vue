<template>
    <header class="bg-gray-900 shadow-lg fixed w-full top-0 z-50 left-0">
      <div class="h-16 relative flex items-center justify-between px-4">
        <!-- CMTI Logo - Left Aligned -->
        <div class="absolute left-4">
            <div class="w-auto px-4 h-10 bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span class="text-white text-lg  font-extrabold tracking-wider">CMTI</span>
          </div>
        </div>
  
        <!-- OEE DASHBOARD - Centered -->
        <div class="flex-1 flex justify-center">
          <h1 class="text-xl font-bold text-white">OEE DASHBOARD</h1>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div 
        v-show="isOpen" 
        class="sm:hidden bg-gray-900 py-2"
      >
        <div class="px-2 space-y-1">
          <!-- Mobile menu content -->
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  </script>
  
  <style scoped>
  /* Optional: Add transition for mobile menu */
  .sm\:hidden {
    transition: all 0.3s ease-in-out;
  }
  </style>