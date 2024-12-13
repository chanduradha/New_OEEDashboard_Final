<!-- Navbar.vue -->
 <!-- <template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
          <router-link to="/" class="nav-item">
            <i class="nav-icon">📊</i>
            <span class="nav-text">Dashboard</span>
          </router-link>
          
          <router-link to="/profile" class="nav-item">
            <i class="nav-icon">👤</i>
            <span class="nav-text">User Profile</span>
          </router-link>
          
          <router-link to="/tables" class="nav-item">
            <i class="nav-icon">📋</i>
            <span class="nav-text">Regular Tables</span>
          </router-link>
          
          <router-link to="/typography" class="nav-item">
            <i class="nav-icon">📝</i>
            <span class="nav-text">Typography</span>
          </router-link>
          
          <router-link to="/icons" class="nav-item">
            <i class="nav-icon">🎨</i>
            <span class="nav-text">Icons</span>
          </router-link>
          
          <router-link to="/maps" class="nav-item">
            <i class="nav-icon">🗺️</i>
            <span class="nav-text">Google Maps</span>
          </router-link>
          
          <router-link to="/notifications" class="nav-item">
            <i class="nav-icon">🔔</i>
            <span class="nav-text">Notifications</span>
          </router-link>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isCollapsed = ref(false)
  const MOBILE_BREAKPOINT = 768
  
  const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const handleResize = () => {
    isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .nav-container {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .vertical-nav {
    width: 250px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  
  .nav-collapsed .vertical-nav {
    width: 60px;
  }
  
  .nav-header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nav-icon {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .nav-collapsed .nav-text {
    display: none;
  }
  
  .nav-collapsed .nav-icon {
    margin-right: 0;
  }
  
  .toggle-btn {
    position: absolute;
    right: -40px;
    top: 1rem;
    background: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    display: none;
  }
  
  .hamburger {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    position: relative;
  }
  
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
  }
  
  .hamburger::before {
    top: -6px;
  }
  
  .hamburger::after {
    bottom: -6px;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      transform: translateX(0);
    }
    
    .nav-collapsed {
      transform: translateX(-100%);
    }
    
    .toggle-btn {
      display: block;
    }
    
    .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .nav-text {
      display: inline;
    }
  }
  </style>  -->


  <!-- src/components/SideNavbar.vue -->
  <!-- <template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
          <router-link 
            v-for="route in routes" 
            :key="route.path"
            :to="{ name: route.name }"
            class="nav-item"
            active-class="active"
          >
            <i class="nav-icon">{{ route.meta.icon }}</i>
            <span class="nav-text">{{ route.meta.title }}</span>
          </router-link>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isCollapsed = ref(false)
  const MOBILE_BREAKPOINT = 768
  
  // Get routes from router instead of defining them inline
  const routes = router.options.routes
  
  const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const handleResize = () => {
    isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  /* Previous styles remain the same */
  
  /* Add active route styling */
  .nav-item.active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .nav-item.active:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .nav-container {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .vertical-nav {
    width: 250px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  
  .nav-collapsed .vertical-nav {
    width: 60px;
  }
  
  .nav-header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nav-icon {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .nav-collapsed .nav-text {
    display: none;
  }
  
  .nav-collapsed .nav-icon {
    margin-right: 0;
  }
  
  .toggle-btn {
    position: absolute;
    right: -40px;
    top: 1rem;
    background: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    display: none;
  }
  
  .hamburger {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    position: relative;
  }
  
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
  }
  
  .hamburger::before {
    top: -6px;
  }
  
  .hamburger::after {
    bottom: -6px;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      transform: translateX(0);
    }
    
    .nav-collapsed {
      transform: translateX(-100%);
    }
    
    .toggle-btn {
      display: block;
    }
    
    .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .nav-text {
      display: inline;
    }
  }
  </style> -->

  <!-- below is correct code -->
<!-- 
<template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/dashboard" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
          <template v-for="route in routes" :key="route.path">
        
            <a
              v-if="route.meta.external"
              :href="route.meta.external"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item"
            >
              <i class="nav-icon">{{ route.meta.icon }}</i>
              <span class="nav-text">{{ route.meta.title }}</span>
              <i class="external-icon">↗</i>
            </a>
            
          
            <router-link
              v-else
              :to="route.name === 'home' ? '/dashboard' : { name: route.name }"
              class="nav-item"
              active-class="active"
            >
              <i class="nav-icon">{{ route.meta.icon }}</i>
              <span class="nav-text">{{ route.meta.title }}</span>
            </router-link>
          </template>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isCollapsed = ref(false)
  const MOBILE_BREAKPOINT = 768
  
  
  const routes = router.options.routes
  
  const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const handleResize = () => {
    isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .nav-container {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .vertical-nav {
    width: 250px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  
  .nav-collapsed .vertical-nav {
    width: 60px;
  }
  
  .nav-header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nav-icon {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .external-icon {
    margin-left: auto;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  
  .nav-collapsed .nav-text,
  .nav-collapsed .external-icon {
    display: none;
  }
  
  .nav-collapsed .nav-icon {
    margin-right: 0;
  }
  
  .toggle-btn {
    position: absolute;
    right: -40px;
    top: 1rem;
    background: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    display: none;
  }
  
  .hamburger {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    position: relative;
  }
  
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
  }
  
  .hamburger::before {
    top: -6px;
  }
  
  .hamburger::after {
    bottom: -6px;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      transform: translateX(0);
    }
    
    .nav-collapsed {
      transform: translateX(-100%);
    }
    
    .toggle-btn {
      display: block;
    }
    
    .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .nav-text {
      display: inline;
    }
    
    .nav-collapsed .external-icon {
      display: block;
    }
  }
  
 
  .nav-item.active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .nav-item.active:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  </style>   -->



  <template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/dashboard" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
          <template v-for="route in routes" :key="route.path">
        
            <a
              v-if="route.meta.external"
              :href="route.meta.external"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item"
            >
              <i class="nav-icon">{{ route.meta.icon }}</i>
              <span class="nav-text">{{ route.meta.title }}</span>
              <i class="external-icon">↗</i>
            </a>
            
            <router-link
              v-else
              :to="route.path"
              class="nav-item"
              active-class="active"
            >
              <i class="nav-icon">{{ route.meta.icon }}</i>
              <span class="nav-text">{{ route.meta.title }}</span>
            </router-link>
          </template>
        </div>
      </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapsed = ref(false)
const MOBILE_BREAKPOINT = 768

const routes = router.options.routes.filter(route => route.name !== 'home') // Filter out the empty home route

const toggleNav = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleResize = () => {
  isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.nav-container {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #1a1a1a;
  transition: all 0.3s ease;
  z-index: 1000;
}

.vertical-nav {
  width: 250px;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.nav-collapsed .vertical-nav {
  width: 60px;
}

.nav-header {
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  margin-bottom: 1rem;
}

.nav-brand {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-icon {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.external-icon {
  margin-left: auto;
  font-size: 0.8rem;
  opacity: 0.7;
}

.nav-collapsed .nav-text,
.nav-collapsed .external-icon {
  display: none;
}

.nav-collapsed .nav-icon {
  margin-right: 0;
}

.toggle-btn {
  position: absolute;
  right: -40px;
  top: 1rem;
  background: #1a1a1a;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0 0.25rem 0.25rem 0;
  display: none;
}

.hamburger {
  display: block;
  width: 20px;
  height: 2px;
  background: white;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  left: 0;
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  bottom: -6px;
}

@media (max-width: 768px) {
  .nav-container {
    transform: translateX(0);
  }
  
  .nav-collapsed {
    transform: translateX(-100%);
  }
  
  .toggle-btn {
    display: block;
  }
  
  .vertical-nav {
    width: 250px;
  }
  
  .nav-collapsed .vertical-nav {
    width: 250px;
  }
  
  .nav-collapsed .nav-text {
    display: inline;
  }
  
  .nav-collapsed .external-icon {
    display: block;
  }
}


.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.nav-item.active:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style> 



   <!-- <template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
  
          <template v-for="route in routes" :key="route.path">
          
            <a
              v-if="route.meta?.external"
              :href="route.meta.external"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-item"
            >
              <i class="nav-icon">{{ route.meta.icon }}</i>
              <span class="nav-text">{{ route.meta.title }}</span>
              <i class="external-icon">↗</i>
            </a>
            
         
            <div v-else-if="route.children" class="nav-group">
              <router-link
                :to="route.path"
                class="nav-item parent-item"
                :class="{ active: isParentActive(route.path) }"
              >
                <i class="nav-icon">{{ route.meta?.icon }}</i>
                <span class="nav-text">{{ route.meta?.title }}</span>
              </router-link>
             
              <div class="nav-children" :class="{ 'show': isParentActive(route.path) }">
                <router-link
                  v-for="child in route.children"
                  :key="child.path"
                  :to="`${route.path}/${child.path}`"
                  class="nav-item child-item"
                  active-class="active"
                >
                  <i class="nav-icon">{{ child.meta?.icon }}</i>
                  <span class="nav-text">{{ child.meta?.title }}</span>
                </router-link>
              </div>
            </div>
            
           
            <router-link
              v-else
              :to="route.path"
              class="nav-item"
              active-class="active"
            >
              <i class="nav-icon">{{ route.meta?.icon }}</i>
              <span class="nav-text">{{ route.meta?.title }}</span>
            </router-link>
          </template>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'  
  import { useRouter, useRoute } from 'vue-router'
  
  const router = useRouter()
  const route = useRoute()
  const isCollapsed = ref(false)
  const MOBILE_BREAKPOINT = 768
  

  const routes = router.options.routes
  
  const isParentActive = (parentPath) => {
    return route.path.startsWith(parentPath)
  }
  
  const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const handleResize = () => {
    isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .nav-container {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .vertical-nav {
    width: 250px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow-y: auto;
  }
  
  .nav-collapsed .vertical-nav {
    width: 60px;
  }
  
  .nav-header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .parent-item {
    font-weight: 500;
  }
  
  .nav-children {
    margin-left: 1rem;
    display: none;
  }
  
  .nav-children.show {
    display: block;
  }
  
  .child-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .nav-icon {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .external-icon {
    margin-left: auto;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  
  .nav-collapsed .nav-text,
  .nav-collapsed .external-icon {
    display: none;
  }
  
  .nav-collapsed .nav-icon {
    margin-right: 0;
  }
  
  .nav-collapsed .nav-children {
    display: none;
  }
  
  .toggle-btn {
    position: absolute;
    right: -40px;
    top: 1rem;
    background: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    display: none;
  }
  
  .hamburger {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    position: relative;
  }
  
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
  }
  
  .hamburger::before {
    top: -6px;
  }
  
  .hamburger::after {
    bottom: -6px;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      transform: translateX(0);
    }
    
    .nav-collapsed {
      transform: translateX(-100%);
    }
    
    .toggle-btn {
      display: block;
    }
    
    .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .nav-text {
      display: inline;
    }
    
    .nav-collapsed .external-icon {
      display: block;
    }
    
    .nav-collapsed .nav-children.show {
      display: block;
    }
  }
  
 
  .nav-item.active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .nav-item.active:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  </style> -->

  <!-- <template>
    <div class="nav-container" :class="{ 'nav-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      
      <nav class="vertical-nav">
        <div class="nav-header">
          <router-link to="/" class="nav-brand">
            CMTI
          </router-link>
        </div>
        
        <div class="nav-items">
          <template v-for="route in filteredRoutes" :key="route.path">
           
            <template v-if="route.meta?.external">
              <a
                :href="route.meta.external"
                target="_blank"
                rel="noopener noreferrer"
                class="nav-item"
              >
                <i class="nav-icon">{{ route.meta.icon }}</i>
                <span class="nav-text">{{ route.meta.title }}</span>
                <i class="external-icon">↗</i>
              </a>
            </template>

            <template v-else>
             
              <router-link
                :to="route.path"
                class="nav-item"
                active-class="active"
              >
                <i class="nav-icon">{{ route.meta?.icon }}</i>
                <span class="nav-text">{{ route.meta?.title }}</span>
              </router-link>
              
            
              <template v-if="route.children && route.children.length">
                <router-link
                  v-for="child in filteredChildren(route.children)"
                  :key="child.path"
                  :to="`${route.path}${child.path ? `/${child.path}` : ''}`"
                  class="nav-item nav-item-child"
                  active-class="active"
                >
                  <i class="nav-icon">{{ child.meta?.icon }}</i>
                  <span class="nav-text">{{ child.meta?.title }}</span>
                </router-link>
              </template>
            </template>
          </template>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isCollapsed = ref(false)
  const MOBILE_BREAKPOINT = 768
  
  
  const filteredRoutes = computed(() => {
    return router.options.routes
  })
  

  const filteredChildren = (children) => {
    return children.filter(child => child.meta)
  }
  
  const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const handleResize = () => {
    isCollapsed.value = window.innerWidth <= MOBILE_BREAKPOINT
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .nav-container {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .vertical-nav {
    width: 250px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  
  .nav-collapsed .vertical-nav {
    width: 60px;
  }
  
  .nav-header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nav-item-child {
    padding-left: 2rem;
    font-size: 0.9em;
    background: rgba(255, 255, 255, 0.05);
  }
  
  .nav-icon {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  .external-icon {
    margin-left: auto;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  
  .nav-collapsed .nav-text,
  .nav-collapsed .external-icon {
    display: none;
  }
  
  .nav-collapsed .nav-icon {
    margin-right: 0;
  }
  
  .toggle-btn {
    position: absolute;
    right: -40px;
    top: 1rem;
    background: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    display: none;
  }
  
  .hamburger {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    position: relative;
  }
  
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
  }
  
  .hamburger::before {
    top: -6px;
  }
  
  .hamburger::after {
    bottom: -6px;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      transform: translateX(0);
    }
    
    .nav-collapsed {
      transform: translateX(-100%);
    }
    
    .toggle-btn {
      display: block;
    }
    
    .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .vertical-nav {
      width: 250px;
    }
    
    .nav-collapsed .nav-text {
      display: inline;
    }
    
    .nav-collapsed .external-icon {
      display: block;
    }
    
    .nav-item-child {
      padding-left: 2.5rem;
    }
  }
  
  .nav-item.active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .nav-item.active:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  
  .nav-item-child.active {
    background: rgba(255, 255, 255, 0.15);
  }
  </style> -->