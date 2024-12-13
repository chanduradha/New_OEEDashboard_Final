<!-- src/views/DashboardView.vue -->
<!-- <template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1 class="dashboard-title">Dashboard</h1>
    </header>
    <main class="dashboard-content">
   
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

</script>

<style scoped>
.dashboard-container {
  padding: 3rem;
  margin-left: 250px; 
  min-height: 100vh;
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .dashboard-container {
    margin-left: 0;
    padding-top: 60px; /* Add space for mobile header */
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
</style> -->
<!-- 
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
            @click="handleDownload"
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
    <main class="dashboard-content">
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

const handleDownload = () => {
  // Add download logic here
  console.log('Download initiated');
};
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
</style>  -->


<!------------ below is the corrected code --------------->
<!-- <template>
  <div class="dashboard-container">
    <div>
      <OeeHeader/>
    </div>

    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="dashboard-title">Dashboard</h1>
        <div class="nav-buttons">
          <button 
            @click="router.push('/dashboard/analytics')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/analytics' }"
          >
            Analytics
          </button>
          <button 
            @click="router.push('/dashboard/daily')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/daily' }"
          >
            Daily
          </button>
          <button 
            @click="router.push('/dashboard/weekly')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/weekly' }"
          >
            Weekly
          </button>
          <button 
            @click="router.push('/dashboard/monthly')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/monthly' }"
          >
            Monthly
          </button>
          <button 
            @click="router.push('/dashboard/download')"
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/download' }"
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
    
 
    <div v-if="$route.path === '/dashboard'" class="control-panel">
    
      <div class="part-buttons">
        <button class="control-button">Good Parts</button>
        <button class="control-button">Bad Parts</button>
        <button class="control-button">Part Count</button>
      </div>

     
      <div class="machine-input">
        <input 
          type="text" 
          placeholder="Machine ID" 
          class="input-field"
          v-model="machineId"
        >
        <input 
          type="text" 
          placeholder="Machine Name" 
          class="input-field"
          v-model="machineName"
        >
        <button class="add-button">Add Machine</button>
      </div>

      <div class="machine-dropdown">
        <select class="dropdown-field">
          <option value="" disabled selected>Select Machine</option>
          <option v-for="machine in machines" :key="machine.id" :value="machine.id">
            {{ machine.name }}
          </option>
        </select>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <main v-if="$route.path === '/dashboard'" class="dashboard-content">
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
import OeeHeader from '@/components/OeeHeader.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const machineId = ref('');
const machineName = ref('');
const machines = ref([
  { id: 1, name: 'Machine 1' },
  { id: 2, name: 'Machine 2' },
  { id: 3, name: 'Machine 3' },
]);
</script>


<style scoped>

.dashboard-container {
  padding: 5rem;
  margin-left: 0px;
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

.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.part-buttons {
  display: flex;
  gap: 1rem;
}

.control-button {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #357abd;
}

.machine-input {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.input-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 150px;
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #38a169;
}

.dropdown-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 200px;
  cursor: pointer;
}
</style>  -->



<!-- <template>
  <div class="dashboard-container">
    <div>
      <OeeHeader/>
    </div>

    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="dashboard-title">Dashboard</h1>
        <div class="nav-buttons">
          <button 
            @click="router.push('/dashboard/analytics')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/analytics' }"
          >
            Analytics
          </button>
          <button 
            @click="router.push('/dashboard/daily')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/daily' }"
          >
            Daily
          </button>
          <button 
            @click="router.push('/dashboard/weekly')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/weekly' }"
          >
            Weekly
          </button>
          <button 
            @click="router.push('/dashboard/monthly')" 
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/monthly' }"
          >
            Monthly
          </button>
          <button 
            @click="router.push('/dashboard/download')"
            class="nav-button"
            :class="{ active: $route.path === '/dashboard/download' }"
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
    
    
    <div v-if="$route.path === '/dashboard'" class="control-panel">
   
      <div class="part-buttons">
        <button class="control-button">Good Parts: 80</button>
        <button class="control-button">Bad Parts: 20</button>
        <button class="control-button">Part Count: 100 </button>
      </div>


      <div class="machine-input">
        <input 
          type="text" 
          placeholder="Machine ID" 
          class="input-field"
          v-model="machineId"
        >
        <input 
          type="text" 
          placeholder="Machine Name" 
          class="input-field"
          v-model="machineName"
        >
        <button class="add-button">Add Machine</button>
      </div>

  
      <div class="machine-dropdown">
        <select 
          class="dropdown-field"
          v-model="selectedMachineId"
          @change="handleMachineChange"
        >
          <option value="" disabled selected>Select Machine</option>
          <option v-for="machine in machines" :key="machine.id" :value="machine.id">
            {{ machine.name }}
          </option>
        </select>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <main v-if="$route.path === '/dashboard'" class="dashboard-content">
    
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

      <div class="machine-image-container">
        <h2 class="machine-title">{{ selectedMachine ? selectedMachine.name : 'Select Machine' }}</h2>
        <div class="image-box">
          <img 
            :src="machineImage" 
            :alt="selectedMachine ? selectedMachine.name : 'Default machine'"
            class="machine-image"
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import OeeHeader from '@/components/OeeHeader.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();
const machineId = ref('');
const machineName = ref('');
const selectedMachineId = ref('');


const defaultImagePath = '../machines/OEE_img.png';

const machineImage = computed(() => 
  selectedMachine.value ? selectedMachine.value.imageUrl : defaultImagePath
);

const machines = ref([
  { 
    id: 1, 
    name: 'Mazak H-400',
    imageUrl: '../machines/Mazak H-400.png'
  },
  { 
    id: 2, 
    name: 'HMT STALLION-200',
    imageUrl: '../machines/HMT STALLION-200.png'
  },
  { 
    id: 3, 
    name: 'HMT VTC 800',
    imageUrl: '../machines/HMT VTC 800.png'
  },

  { 
    id: 4, 
    name: 'HMT_STALLION-200',
    imageUrl: '../machines/HMT_STALLION-200.png'
  },
  { 
    id: 5, 
    name: 'macpowermono-200',
    imageUrl: '../machines/macpowermono-200.png'
  },
  { 
    id: 6, 
    name: 'AMS-VMC',
    imageUrl: '../machines/AMS-VMC.png'
  },
  { 
    id: 7, 
    name: 'SCHAUBLIN-33',
    imageUrl: '../machines/SCHAUBLIN-33.png'
  },

]);

const selectedMachine = computed(() => 
  machines.value.find(machine => machine.id === selectedMachineId.value)
);

const handleMachineChange = () => {
  console.log('Selected machine:', selectedMachine.value);
};
</script>

<style scoped>

.dashboard-container {
  padding: 5rem;
  margin-left: 0px;
  min-height: 100vh;
  background-color: #f5f5f5;
}


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


.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.part-buttons {
  display: flex;
  gap: 1rem;
}

.control-button {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #357abd;
}


.machine-input {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.input-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 150px;
  font-size: 0.875rem;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #38a169;
}


.machine-dropdown {
  min-width: 200px;
}

.dropdown-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 100%;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: white;
}

.dropdown-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}


.dashboard-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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


.machine-image-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 20%;
  height: 350px;
}

.machine-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;

}

.image-box {
  width: 90%;
  height: 250px;
  border: 2px solid #050505;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
}

.machine-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.machine-image:hover {
  transform: scale(1.02);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 1024px) {
  .dashboard-container {
    padding: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .machine-image-container {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    margin-left: 0;
    padding: 2rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .nav-buttons {
    flex-wrap: wrap;
  }
  
  .control-panel {
    flex-direction: column;
    gap: 1rem;
  }
  
  .part-buttons {
    width: 100%;
    justify-content: space-between;
  }
  
  .machine-input {
    width: 100%;
    flex-direction: column;
  }
  
  .input-field {
    width: 100%;
  }
  
  .machine-dropdown {
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .machine-image-container {
    width: 100%;
  }
  
  .image-box {
    width: 100%;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 1rem;
  }
  
  .nav-button {
    width: 100%;
    text-align: center;
  }
  
  .stat-card {
    padding: 1rem;
  }
}
</style> -->


<!-- below is correct code -->
<!-- <template>
  <div class="dashboard-container">
    <div>
      <OeeHeader />
    </div>
    <DashboardHeader />
    <div v-if="$route.path === '/dashboard'" class="control-panel">
      <div class="part-buttons">
        <button class="control-button">
          RunTime: {{ selectedMachineStats?.runTime || '0' }}m
        </button>
        <button class="control-button">
          Idle Time: {{ selectedMachineStats?.idleTime || '0' }}m
        </button>
        <button class="control-button">
          OFF Time: {{ selectedMachineStats?.offTime || '0' }}m
        </button>
        <button class="control-button parts-button good">
          Good Parts: {{ selectedMachineStats?.goodParts || '0' }}
        </button>
        <button class="control-button parts-button bad">
          Bad Parts: {{ selectedMachineStats?.badParts || '0' }}
        </button>
        <button class="control-button parts-button total">
          Total Parts: {{ selectedMachineStats?.totalParts || '0' }}
        </button>
    
      </div>

      <div class="machine-input">
     
  <button class="add-button" @click="openDialog">Add Machine</button>
  <MachineDialog 
  :is-open="isDialogOpen"
  :existing-machine-ids="existingMachineIds"
  @close="closeDialog"
  @save="handleSaveMachine"
/>
      </div>

      <div class="machine-dropdown">
        <select 
          class="dropdown-field"
          v-model="selectedMachineId"
          @change="handleMachineChange"
        >
          <option value="" disabled selected>Select Machine</option>
          <option 
            v-for="machine in machines" 
            :key="machine.id" 
            :value="machine.id"
          >
            {{ machine.name }}
          </option>
        </select>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <main v-if="$route.path === '/dashboard'" class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Availability</h3>
          <p class="stat-value">{{ selectedMachineStats?.availability || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.availabilityTrend)">
            {{ selectedMachineStats?.availabilityTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.availabilityTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>Performance</h3>
          <p class="stat-value">{{ selectedMachineStats?.performance || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.performanceTrend)">
            {{ selectedMachineStats?.performanceTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.performanceTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>Quality</h3>
          <p class="stat-value">{{ selectedMachineStats?.quality || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.qualityTrend)">
            {{ selectedMachineStats?.qualityTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.qualityTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>OEE</h3>
          <p class="stat-value">{{ selectedMachineStats?.oee || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.oeeTrend)">
            {{ selectedMachineStats?.oeeTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.oeeTrend || 0) }}%
          </div>
        </div>
      </div>
      <div class="machine-info-row">
      <div class="machine-image-container">
        <h2 class="machine-title">{{ selectedMachine ? selectedMachine.name : 'Select Machine' }}</h2>
        <div class="image-box">
          <img 
            :src="machineImage" 
            :alt="selectedMachine ? selectedMachine.name : 'Default machine'"
            class="machine-image"
          />
        </div>
     
      
      </div>
      
      <div class="donut-chart-container">
        <TimeDonutChart
          :runTime="Number(selectedMachineStats?.runTime || 0)"
          :idleTime="Number(selectedMachineStats?.idleTime || 0)"
          :offTime="Number(selectedMachineStats?.offTime || 0)"
        />
  
    </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import OeeHeader from '@/components/OeeHeader.vue';
import MachineDialog from '@/components/MachineDialog.vue';

import { ref, computed} from 'vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import TimeDonutChart from '@/components/TimeDonutChart.vue';

const selectedMachineId = ref('');


const defaultImagePath = '../machines/OEE_img.png';


const isDialogOpen = ref(false);


const existingMachineIds = computed(() => 
  machines.value.map(machine => machine.id)
);


const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};

const handleSaveMachine = (newMachine) => {
  
  machines.value.push({
    ...newMachine,
    imageUrl: '../machines/OEE_img.png', 
    stats: {
      availability: 0,
      performance: 0,
      quality: 0,
      oee: 0,
      availabilityTrend: 0,
      performanceTrend: 0,
      qualityTrend: 0,
      oeeTrend: 0,
      runTime: 0,
      idleTime: 0,
      offTime: 0,
      goodParts: 0,    
      badParts: 0,     
      totalParts: 0    
    }
  });
};


const machines = ref([
  { 
    id: 1, 
    name: 'Mazak H-400',
    imageUrl: '../machines/Mazak H-400.png',
    stats: {
      availability: 92,
      performance: 85,
      quality: 95,
      oee: 74,
      availabilityTrend: 2.5,
      performanceTrend: -1.2,
      qualityTrend: 1.8,
      oeeTrend: 1.0,
      runTime: 350,
      idleTime: 60,
      offTime: 20,
      goodParts: 100,    
      badParts: 50,      
      totalParts: 150   
    }
  },
  { 
    id: 2, 
    name: 'HMT STALLION-200',
    imageUrl: '../machines/HMT STALLION-200.png',
    stats: {
      availability: 88,
      performance: 82,
      quality: 90,
      oee: 65,
      availabilityTrend: -1.5,
      performanceTrend: 2.0,
      qualityTrend: -0.8,
      oeeTrend: -0.5,
      runTime: 280,
      idleTime: 45,
      offTime: 15,
      goodParts: 85,    
      badParts: 15,      
      totalParts: 100    
    }
  },
  { 
    id: 3, 
    name: 'HMT VTC 800',
    imageUrl: '../machines/HMT VTC 800.png',
    stats: {
      availability: 95,
      performance: 88,
      quality: 92,
      oee: 77,
      availabilityTrend: 3.0,
      performanceTrend: 1.5,
      qualityTrend: 2.2,
      oeeTrend: 2.5,
      runTime: 320,
      idleTime: 40,
      offTime: 25
    }
  },
  { 
    id: 4, 
    name: 'HMT_STALLION-200',
    imageUrl: '../machines/HMT_STALLION-200.png',
    stats: {
      availability: 87,
      performance: 80,
      quality: 88,
      oee: 61,
      availabilityTrend: -2.0,
      performanceTrend: -1.8,
      qualityTrend: -1.5,
      oeeTrend: -1.8,
      runTime: 290,
      idleTime: 55,
      offTime: 30
    }
  },
  { 
    id: 5, 
    name: 'macpowermono-200',
    imageUrl: '../machines/macpowermono-200.png',
    stats: {
      availability: 91,
      performance: 86,
      quality: 93,
      oee: 73,
      availabilityTrend: 1.8,
      performanceTrend: 2.2,
      qualityTrend: 1.5,
      oeeTrend: 1.9,
      runTime: 310,
      idleTime: 50,
      offTime: 22
    }
  },
  { 
    id: 6, 
    name: 'AMS-VMC',
    imageUrl: '../machines/AMS-VMC.png',
    stats: {
      availability: 89,
      performance: 83,
      quality: 91,
      oee: 67,
      availabilityTrend: 1.2,
      performanceTrend: -0.8,
      qualityTrend: 1.0,
      oeeTrend: 0.5,
      runTime: 300,
      idleTime: 48,
      offTime: 18
    }
  },
  { 
    id: 7, 
    name: 'SCHAUBLIN-33',
    imageUrl: '../machines/SCHAUBLIN-33.png',
    stats: {
      availability: 93,
      performance: 87,
      quality: 94,
      oee: 76,
      availabilityTrend: 2.8,
      performanceTrend: 1.9,
      qualityTrend: 2.5,
      oeeTrend: 2.3,
      runTime: 330,
      idleTime: 42,
      offTime: 16
    }
  }
]);

const machineImage = computed(() => 
  selectedMachine.value ? selectedMachine.value.imageUrl : defaultImagePath
);

const selectedMachine = computed(() => 
  machines.value.find(machine => machine.id === selectedMachineId.value)
);

const selectedMachineStats = computed(() => 
  selectedMachine.value ? selectedMachine.value.stats : null
);

const getTrendClass = (trend) => {
  if (!trend) return '';
  return trend > 0 ? 'trend-up' : 'trend-down';
};

const handleMachineChange = () => {
  console.log('Selected machine:', selectedMachine.value);
};
</script>

<style scoped>

.dashboard-container {
  padding: 5rem;
  margin-left: 0px;
  min-height: 100vh;
  background-color: #f5f5f5;

}

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

.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.part-buttons {
  display: flex;
  gap: 1rem;
}

.control-button {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #357abd;
}

.machine-input {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.input-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 150px;
  font-size: 0.875rem;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #38a169;
}

.machine-dropdown {
  min-width: 200px;
}

.dropdown-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 100%;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: white;
}

.dropdown-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.dashboard-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  margin: 0;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
  margin-bottom: 0.5rem;
}

.stat-trend {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.trend-up {
  color: #059669;
  background-color: #d1fae5;
}

.trend-down {
  color: #dc2626;
  background-color: #fee2e2;
}


.machine-image-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 30%;
  height: 350px;
  display: flex;
  gap: 2rem;
  background: white;
  border-radius: 0.5rem;
   
}

.machine-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}
.gears-chart {
  flex: 1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.donut-chart-container {
  flex: 1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.image-box {
  width: 300px;
  margin-top: 50px;
  height: 250px;
  border: 2px solid #050505;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
}

.machine-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  flex: 0 0 40%;
  max-width: 300px;

}

.machine-image:hover {
  transform: scale(1.02);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.donut-chart-container {
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
 
  height: 350px;
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;

}


.machine-info-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
}


@media (max-width: 1024px) {
  .dashboard-container {
    padding: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .machine-image-container {
    width: 50%;
  }

  .stat-value {
    font-size: 1.75rem;
  }
  .donut-chart-container {
    flex: 1;
    width: 100%;
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    margin-left: 0;
    padding: 2rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .nav-buttons {
    flex-wrap: wrap;
  }
  
  .control-panel {
    flex-direction: column;
    gap: 1rem;
  }
  
  .part-buttons {
    width: 100%;
    justify-content: space-between;
  }
  
  .machine-input {
    width: 100%;
    flex-direction: column;
  }
  
  .input-field {
    width: 100%;
  }
  
  .machine-dropdown {
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .machine-image-container {
    width: 100%;
  }
  
  .image-box {
    width: 100%;
    height: 250px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-trend {
    font-size: 0.75rem;
  }
  .donut-chart-container {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 1rem;
  }
  
  .nav-button {
    width: 100%;
    text-align: center;
  }
  
  .stat-card {
    padding: 1rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }
}

.donut-chart-container {
  min-height: 250px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card {
  animation: fadeIn 0.3s ease-out;
}


.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.stat-card:hover .stat-value {
  color: #4a90e2;
}


.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> -->


<!-- '''''''''''''''''''''''' -->
<!-- Below code is working using endpoint -->

<template>
  <div class="dashboard-container">
    <div>
      <OeeHeader />
    </div>
    <DashboardHeader />
    <div v-if="$route.path === '/dashboard'" class="control-panel">
      <div class="part-buttons">
        <button class="control-button">
          RunTime: {{ selectedMachineStats?.runTime || '0' }}m
        </button>
        <button class="control-button">
          Idle Time: {{ selectedMachineStats?.idleTime || '0' }}m
        </button>
        <button class="control-button">
          OFF Time: {{ selectedMachineStats?.offTime || '0' }}m
        </button>
        <button class="control-button parts-button good">
          Good Parts: {{ selectedMachineStats?.goodParts || '0' }}
        </button>
        <button class="control-button parts-button bad">
          Bad Parts: {{ selectedMachineStats?.badParts || '0' }}
        </button>
        <button class="control-button parts-button total">
          Total Parts: {{ selectedMachineStats?.totalParts || '0' }}
        </button>
      </div>

      <div class="machine-input">
        <button class="add-button" @click="openDialog">Add Machine</button>
        <MachineDialog 
          :is-open="isDialogOpen"
          :existing-machine-ids="existingMachineIds"
          @close="closeDialog"
          @save="handleSaveMachine"
        />
      </div>

      <div class="machine-dropdown">
        <select 
          class="dropdown-field"
          v-model="selectedMachineId"
          @change="handleMachineChange"
        >
          <option value="" disabled selected>Select Machine</option>
          <option 
            v-for="machine in machines" 
            :key="machine.id" 
            :value="machine.id"
          >
            {{ machine.name }}
          </option>
        </select>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <main v-if="$route.path === '/dashboard'" class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Availability</h3>
          <p class="stat-value">{{ selectedMachineStats?.availability.toFixed(2) || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.availabilityTrend)">
            {{ selectedMachineStats?.availabilityTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.availabilityTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>Performance</h3>
          <p class="stat-value">{{ selectedMachineStats?.performance.toFixed(2) || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.performanceTrend)">
            {{ selectedMachineStats?.performanceTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.performanceTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>Quality</h3>
          <p class="stat-value">{{ selectedMachineStats?.quality.toFixed(2) || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.qualityTrend)">
            {{ selectedMachineStats?.qualityTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.qualityTrend || 0) }}%
          </div>
        </div>
        <div class="stat-card">
          <h3>OEE</h3>
          <p class="stat-value">{{ selectedMachineStats?.oee.toFixed(2) || '0' }}%</p>
          <div class="stat-trend" :class="getTrendClass(selectedMachineStats?.oeeTrend)">
            {{ selectedMachineStats?.oeeTrend > 0 ? '↑' : '↓' }} 
            {{ Math.abs(selectedMachineStats?.oeeTrend || 0) }}%
          </div>
        </div>
      </div>
      
      <div class="machine-info-row">
        <div class="machine-image-container">
          <div class="machine-details">
            <h2 class="machine-title">
              {{ selectedMachine ? selectedMachine.name : 'Select Machine' }}
            </h2>
            <div class="image-box">
              <img 
                :src="selectedMachine ? selectedMachine.imageUrl : defaultImagePath"
                :alt="selectedMachine ? selectedMachine.name : 'Default machine'"
                class="machine-image"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
        
        <!-- <div class="donut-chart-container">
          <TimeDonutChart
            v-if="selectedMachineStats"
            :runTime="Number(selectedMachineStats.runTime)"
            :idleTime="Number(selectedMachineStats.idleTime)"
            :offTime="Number(selectedMachineStats.offTime)"
          />
        </div> -->

        <div class="donut-chart-container">
          <TimeDonutChart
            :runTime="Number(selectedMachineStats?.runTime || 0)"
            :idleTime="Number(selectedMachineStats?.idleTime || 0)"
            :offTime="Number(selectedMachineStats?.offTime || 0)"
          />
        </div>
      
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import OeeHeader from '@/components/OeeHeader.vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import MachineDialog from '@/components/MachineDialog.vue';
import TimeDonutChart from '@/components/TimeDonutChart.vue';


// State variables
const selectedMachineId = ref('');
const machines = ref([]);
const machineStats = ref(null);
const isLoading = ref(false);
const isDialogOpen = ref(false);
const defaultImagePath = '/machines/OEE_img.png';
const imageError = ref(false);

// Function to get machine-specific image path
const getMachineImagePath = (machineName) => {
  if (!machineName) return defaultImagePath;
  // Encode the machine name to handle spaces and special characters
  const encodedName = encodeURIComponent(machineName);
  return `/machines/${encodedName}.png`;
};

// Specific path for MCV-450
const specificMachinePath = '/machines/Mazak H-400.png';

// Computed properties
const existingMachineIds = computed(() => 
  machines.value.map(machine => machine.id)
);

const selectedMachine = computed(() => {
  const machine = machines.value.find(m => m.id === selectedMachineId.value);
  if (machine) {
    // For MCV-450, use the specific path
    const imagePath = machine.name === 'MCV-450' 
      ? specificMachinePath 
      : getMachineImagePath(machine.name);
    
    return {
      ...machine,
      imageUrl: imageError.value ? defaultImagePath : imagePath
    };
  }
  return null;
});

const selectedMachineStats = computed(() => machineStats.value);

// API calls
const fetchMachines = async () => {
  try {
    const response = await axios.get('http://172.18.100.88:3000/machineDetails');
    machines.value = response.data.map(machine => ({
      id: machine.id,
      name: machine.machine_name,
      imageUrl: machine.machine_name === 'MCV-450' 
        ? specificMachinePath 
        : getMachineImagePath(machine.machine_name)
    }));
  } catch (error) {
    console.error('Error fetching machines:', error);
  }
};

const fetchMachineStats = async (id) => {
  if (!id) return;
  
  isLoading.value = true;
  try {
    const response = await axios.get(`http://172.18.100.88:3000/history?id=${id}`);
    const data = response.data;
    
    machineStats.value = {
      // runTime: data.ProductionTime || 0,
      // idleTime: data.IdleTime || 0,
      // offTime: data.OffTime || 0,

      runTime: parseFloat(data.ProductionTime).toFixed(2),
      idleTime: parseFloat(data.IdleTime).toFixed(2),
      offTime: parseFloat(data.OffTime).toFixed(2),
      goodParts: data.GoodPart || 0,
      badParts: data.BadPart || 0,
      totalParts: data.PartCount || 0,
      availability: parseFloat(data.Availability) || 0,
      performance: parseFloat(data.Performance) || 0,
      quality: parseFloat(data.Quality) || 0,
      oee: parseFloat(data.OEE) || 0,
      availabilityTrend: 0,
      performanceTrend: 0,
      qualityTrend: 0,
      oeeTrend: 0
    };
  } catch (error) {
    console.error('Error fetching machine stats:', error);
  } finally {
    isLoading.value = false;
  }
};

// Event handlers
const getTrendClass = (trend) => {
  if (!trend) return '';
  return trend > 0 ? 'trend-up' : 'trend-down';
};

const handleMachineChange = async () => {
  imageError.value = false; // Reset image error state on machine change
  await fetchMachineStats(selectedMachineId.value);
};

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src);
  imageError.value = true;
  event.target.src = defaultImagePath;
};

const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};

const handleSaveMachine = async (machineData) => {
  try {
    await axios.post('http://172.18.100.88:3000/machineDetails', machineData);
    await fetchMachines();
    closeDialog();
  } catch (error) {
    console.error('Error saving machine:', error);
  }
};

// Polling setup
let pollInterval;

const startPolling = () => {
  pollInterval = setInterval(() => {
    if (selectedMachineId.value) {
      fetchMachineStats(selectedMachineId.value);
    }
  }, 5000);
};

const stopPolling = () => {
  if (pollInterval) {
    clearInterval(pollInterval);
  }
};

// Lifecycle hooks
onMounted(async () => {
  await fetchMachines();
  startPolling();
});

onBeforeUnmount(() => {
  stopPolling();
});
</script>
<style scoped>
/* Existing styles remain the same */
.dashboard-container {
  padding: 5rem;
  margin-left: 0px;
  min-height: 100vh;
  background-color: #f5f5f5;

}

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

.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.part-buttons {
  display: flex;
  gap: 1rem;
}

.control-button {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #357abd;
}

.machine-input {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.input-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 150px;
  font-size: 0.875rem;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #38a169;
}

.machine-dropdown {
  min-width: 200px;
}

.dropdown-field {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  width: 100%;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: white;
}

.dropdown-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.dashboard-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  margin: 0;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
  margin-bottom: 0.5rem;
}

.stat-trend {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.trend-up {
  color: #059669;
  background-color: #d1fae5;
}

.trend-down {
  color: #dc2626;
  background-color: #fee2e2;
}


.machine-image-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 30%;
  height: 350px;
  display: flex;
  gap: 2rem;
  background: white;
  border-radius: 0.5rem;
   
}

.machine-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}
.gears-chart {
  flex: 1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.donut-chart-container {
  flex: 1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.image-box {
  width: 300px;
  margin-top: 20px;
  height: 250px;
  border: 2px solid #050505;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
}

.machine-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  flex: 0 0 40%;
  max-width: 300px;

}

.machine-image:hover {
  transform: scale(1.02);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.donut-chart-container {
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
 
  height: 350px;
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;

}

/* Add a new wrapper for the machine info row */
.machine-info-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
}


@media (max-width: 1024px) {
  .dashboard-container {
    padding: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .machine-image-container {
    width: 50%;
  }

  .stat-value {
    font-size: 1.75rem;
  }
  .donut-chart-container {
    flex: 1;
    width: 100%;
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    margin-left: 0;
    padding: 2rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .nav-buttons {
    flex-wrap: wrap;
  }
  
  .control-panel {
    flex-direction: column;
    gap: 1rem;
  }
  
  .part-buttons {
    width: 100%;
    justify-content: space-between;
  }
  
  .machine-input {
    width: 100%;
    flex-direction: column;
  }
  
  .input-field {
    width: 100%;
  }
  
  .machine-dropdown {
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .machine-image-container {
    width: 100%;
  }
  
  .image-box {
    width: 100%;
    height: 250px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-trend {
    font-size: 0.75rem;
  }
  .donut-chart-container {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 1rem;
  }
  
  .nav-button {
    width: 100%;
    text-align: center;
  }
  
  .stat-card {
    padding: 1rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }
}

.donut-chart-container {
  min-height: 250px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card {
  animation: fadeIn 0.3s ease-out;
}


.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.stat-card:hover .stat-value {
  color: #4a90e2;
}


.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>