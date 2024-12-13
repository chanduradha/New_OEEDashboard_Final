<!-- <template>
  <div class="h-screen w-full bg-blue-600">
    <h1 class="text-3xl font-bold text-center text-red-800 py-8 bg-blue-400">
     Welcome to vue wolrd
    </h1>
  </div>
</template>

<script setup>
// script setup syntax - no need to export anything
// you can directly use composition API here
</script> -->

<!-- <template>
  <header class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
         Logo and Company Name -->
        <!-- <div class="flex items-center">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span class="text-white text-xl font-bold">V</span>
          </div>
          <h1 class="ml-3 text-xl font-bold text-gray-800 hidden sm:block">Vue Company</h1>
        </div> -->

        <!-- Desktop Navigation -->
        <!-- <nav class="hidden sm:flex items-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" class="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" class="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </nav> -->

        <!-- Mobile menu button -->
        <!-- <div class="flex items-center sm:hidden">
          <button 
            @click="isOpen = !isOpen" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100"
          >
            Menu Icon when closed -->
            <!-- <svg 
              v-if="!isOpen"
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> --> 
            <!-- X Icon when open -->
            <!-- <svg 
              v-else
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div> -->

    <!-- Mobile menu -->
    <!-- <div 
      v-show="isOpen" 
      class="sm:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          href="#" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-100"
        >
          Home
        </a>
        <a 
          href="#" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-100"
        >
          About
        </a>
        <a 
          href="#" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-100"
        >
          Services
        </a>
        <a 
          href="#" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </div>
  </header>
</template> --> 

<!-- <script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script> -->

<!-- <style scoped>
/* Optional: Add transition for mobile menu */
.sm\:hidden {
  transition: all 0.3s ease-in-out;
}
</style> -->


<template>
  <header class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-full px-4 sm:px-6 lg:px-8"> <!-- Changed from max-w-7xl to max-w-full -->
      <div class="flex justify-between items-center h-16 relative">
        <!-- Empty div for left side spacing -->
        <div class="flex-1"></div>

        <!-- Centered Main Dashboard -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <h1 class="text-xl font-bold text-gray-800">MAIN DASHBOARD</h1>
        </div>

        <!-- Right CMTI -->
        <div class="flex-1 flex justify-end mr-2"> <!-- Added mr-2 for slight padding from edge -->
          <div class="w-auto px-7 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white text-lg font-bold tracking-wider">CMTI</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="sm:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Add mobile menu content here if needed -->
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