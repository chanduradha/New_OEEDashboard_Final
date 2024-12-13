<!-- src/views/DailyView.vue -->
<!-- <template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Download Report</h1>
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
        <div class="select-wrapper">
          <select v-model="selectedShift" class="select-control">
            <option value="" disabled>Select Shift</option>
            <option v-for="shift in shifts" :key="shift" :value="shift">
              {{ shift }}
            </option>
          </select>
        </div>
      </div>
    </header>
    <main class="page-content">
      <div class="daily-content">
        <p>download report content will go here</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedMachine = ref('');
const selectedShift = ref('');

const machines = [
  'Machine 1',
  'Machine 2',
  'Machine 3',
  'Machine 4',
  'Machine 5'
];

const shifts = [
  'Morning Shift',
  'Afternoon Shift',
  'Night Shift'
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
</style> -->

<!-- <template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Download Report</h1>
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
        <div class="date-controls">
          <input
            type="date"
            v-model="startDate"
            class="date-input"
            :max="endDate"
          />
          <input
            type="date"
            v-model="endDate"
            class="date-input"
            :min="startDate"
          />
        </div>
        <button @click="fetchData" class="fetch-button">Fetch Data</button>
        <button @click="downloadExcel" class="download-button">
          Download Excel
        </button>
      </div>
    </header>
    <main class="page-content">
      <div class="table-container">
        <table v-if="tableData.length" class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Machine Name</th>
              <th>Shift</th>
              <th>Operation Mode</th>
              <th>Machine Status</th>
              <th>Production Time</th>
              <th>Planned Down Time</th>
              <th>Operating Time</th>
              <th>Availability</th>
              <th>Performance</th>
              <th>Quality</th>
              <th>OEE</th>
              <th>Good Parts</th>
              <th>Bad Parts</th>
              <th>Part Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in paginatedData" :key="index">
              <td>{{ row.timestamp }}</td>
              <td>{{ row.machineName }}</td>
              <td>{{ row.shift }}</td>
              <td>{{ row.operationMode }}</td>
              <td>
                <span :class="['status-badge', row.machineStatus.toLowerCase()]">
                  {{ row.machineStatus }}
                </span>
              </td>
              <td>{{ row.productionTime }}</td>
              <td>{{ row.plannedDownTime }}</td>
              <td>{{ row.operatingTime }}</td>
              <td>{{ row.availability }}%</td>
              <td>{{ row.performance }}%</td>
              <td>{{ row.quality }}%</td>
              <td>{{ row.oee }}%</td>
              <td>{{ row.goodParts }}</td>
              <td>{{ row.badParts }}</td>
              <td>{{ row.partCount }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="no-data">No data available</div>
      </div>
      <div v-if="tableData.length" class="pagination">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="pagination-button"
        >
          Previous
        </button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="pagination-button"
        >
          Next
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import * as XLSX from 'xlsx';

const router = useRouter();
const selectedMachine = ref('');
const startDate = ref('2024-10-30');
const endDate = ref('2024-10-30');
const tableData = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;

const machines = [
  'MazakH_400',
  'HMT STALLION-200',
  'macpowermono-200',
  'AMS-VMC',
  'SCHAUBLIN-33',
  'HMT VTC 800'
];

const shifts = ['Morning', 'Afternoon', 'Night'];
const operationModes = ['Auto', 'Manual', 'Setup'];
const machineStatuses = ['Running', 'Idle', 'Down', 'Maintenance'];

// Generate random time between two dates
const randomTime = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Generate dummy data with additional columns
const generateDummyData = () => {
  const data = [];
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  
  for (let i = 0; i < 50; i++) {
    const goodParts = Math.floor(Math.random() * 900);
    const badParts = Math.floor(Math.random() * 100);
    const totalParts = goodParts + badParts;
    const performance = (Math.random() * (100 - 70) + 70).toFixed(2);
    const quality = ((goodParts / totalParts) * 100).toFixed(2);
    const availability = (Math.random() * (100 - 70) + 70).toFixed(2);
    const oee = ((parseFloat(availability) * parseFloat(performance) * parseFloat(quality)) / 10000).toFixed(2);
    
    const timestamp = randomTime(start, end);
    data.push({
      timestamp: timestamp.toLocaleString(),
      machineName: selectedMachine.value,
      shift: shifts[Math.floor(Math.random() * shifts.length)],
      operationMode: operationModes[Math.floor(Math.random() * operationModes.length)],
      machineStatus: machineStatuses[Math.floor(Math.random() * machineStatuses.length)],
      productionTime: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`,
      plannedDownTime: `${Math.floor(Math.random() * 5)}:${Math.floor(Math.random() * 60)}`,
      operatingTime: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`,
      availability: availability,
      performance: performance,
      quality: quality,
      oee: oee,
      goodParts: goodParts,
      badParts: badParts,
      partCount: totalParts
    });
  }
  return data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

const totalPages = computed(() => Math.ceil(tableData.value.length / itemsPerPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return tableData.value.slice(start, end);
});

const fetchData = () => {
  if (!selectedMachine.value) {
    alert('Please select a machine');
    return;
  }
  tableData.value = generateDummyData();
  currentPage.value = 1;
};

const downloadExcel = () => {
  if (!tableData.value.length) {
    alert('No data to download');
    return;
  }

  // Create worksheet from the current table data
  const worksheet = XLSX.utils.json_to_sheet(tableData.value);
  
  // Create workbook and append worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Machine Data');
  
  // Generate filename with machine name and date range
  const fileName = `${selectedMachine.value}_${startDate.value}_to_${endDate.value}.xlsx`;
  
  // Write and download the file
  XLSX.writeFile(workbook, fileName);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

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

.controls-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.select-wrapper {
  min-width: 200px;
}

.date-controls {
  display: flex;
  gap: 1rem;
}

.date-input,
.select-control {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.fetch-button,
.download-button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
}

.fetch-button {
  background-color: #3182ce;
}

.download-button {
  background-color: #38a169;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  background-color: #f8fafc;
  font-weight: 600;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.running {
  background-color: #c6f6d5;
  color: #22543d;
}

.idle {
  background-color: #fefcbf;
  color: #744210;
}

.down {
  background-color: #fed7d7;
  color: #822727;
}

.maintenance {
  background-color: #e9d8fd;
  color: #553c9a;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  cursor: pointer;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.875rem;
  color: #4a5568;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #4a5568;
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

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .controls-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .select-wrapper,
  .date-controls {
    width: 100%;
  }
  
  .date-controls {
    flex-direction: column;
  }
  
  .date-input {
    width: 100%;
  }
  
  .data-table {
    font-size: 0.875rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
}
</style> -->



<!-- old code dummy data displaying code -->
<!-- <template>
  <div class="page-container">
 
    <header class="page-header">
      <div class="header-row">
        <h1 class="page-title">Download Report</h1>
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
        <div class="date-controls">
          <input
            type="date"
            v-model="startDate"
            class="date-input"
            :max="endDate"
          />
          <input
            type="date"
            v-model="endDate"
            class="date-input"
            :min="startDate"
          />
        </div>
        <button @click="fetchData" class="fetch-button">Fetch Data</button>
        <button @click="downloadExcel" class="download-button">
          Download Excel
        </button>
      </div>
    </header>
    <main class="page-content">
      <div class="table-container">
        <table v-if="tableData.length" class="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Run Time</th>
              <th>Idle Time</th>
              <th>ON Time</th>
              <th>OFF Time</th>
              <th>Production Print ON (m)</th>
              <th>Bad Part (m)</th>
              <th>Production Print OFF (m)</th>
              <th>Availability (%)</th>
              <th>Performance (%)</th>
              <th>Quality (%)</th>
              <th>OEE (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in paginatedData" :key="index">
              <td>{{ row.date }}</td>
              <td>{{ row.runTime }}</td>
              <td>{{ row.idleTime }}</td>
              <td>{{ row.onTime }}</td>
              <td>{{ row.offTime }}</td>
              <td>{{ row.productionPrintOn }}</td>
              <td>{{ row.badPart }}</td>
              <td>{{ row.productionPrintOff }}</td>
              <td>{{ row.availability }}</td>
              <td>{{ row.performance }}</td>
              <td>{{ row.quality }}</td>
              <td>{{ row.oee }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="no-data">No data available</div>
      </div>
   
      <div v-if="tableData.length" class="pagination">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="pagination-button"
        >
          Previous
        </button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="pagination-button"
        >
          Next
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import * as XLSX from 'xlsx';

const router = useRouter();
const selectedMachine = ref('');
const startDate = ref('2024-10-30');
const endDate = ref('2024-10-30');
const tableData = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;

const machines = [
  'MazakH_400',
  'HMT STALLION-200',
  'macpowermono-200',
  'AMS-VMC',
  'SCHAUBLIN-33',
  'HMT VTC 800'
];


const generateMeters = () => {
  return Math.floor(90000 + Math.random() * 5000) + ' m';
};


const generateDummyData = () => {
  const data = [];
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  
  let currentDate = new Date(start);
  
  while (currentDate <= end) {
    const availability = 76;
    const performance = Math.floor(83 + Math.random() * 2);
    const quality = Math.floor(97 + Math.random() * 2);
    const oee = Math.floor((availability * performance * quality) / 10000);

    data.push({
      date: currentDate.toISOString().split('T')[0],
      runTime: '18:22 hr',
      idleTime: '02:38 hr',
      onTime: '24:00 hr',
      offTime: '02:59 hr',
      productionPrintOn: generateMeters(),
      badPart: Math.floor(1500 + Math.random() * 500) + ' m',
      productionPrintOff: Math.floor(1300 + Math.random() * 700) + ' m',
      availability: `${availability} %`,
      performance: `${performance} %`,
      quality: `${quality} %`,
      oee: `${oee} %`
    });
    
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return data;
};

const totalPages = computed(() => Math.ceil(tableData.value.length / itemsPerPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return tableData.value.slice(start, end);
});

const fetchData = () => {
  if (!selectedMachine.value) {
    alert('Please select a machine');
    return;
  }
  tableData.value = generateDummyData();
  currentPage.value = 1;
};

const downloadExcel = () => {
  if (!tableData.value.length) {
    alert('No data to download');
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(tableData.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Machine Data');
  
  const fileName = `${selectedMachine.value}_${startDate.value}_to_${endDate.value}.xlsx`;
  XLSX.writeFile(workbook, fileName);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

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

.controls-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.select-wrapper {
  min-width: 200px;
}

.date-controls {
  display: flex;
  gap: 1rem;
}

.date-input,
.select-control {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.fetch-button,
.download-button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
}

.fetch-button {
  background-color: #3182ce;
}

.download-button {
  background-color: #38a169;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  background-color: #f8fafc;
  font-weight: 600;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  cursor: pointer;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.875rem;
  color: #4a5568;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #4a5568;
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

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .controls-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .select-wrapper,
  .date-controls {
    width: 100%;
  }
  
  .date-controls {
    flex-direction: column;
  }
  
  .date-input {
    width: 100%;
  }
  
  .data-table {
    font-size: 0.875rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
}
</style> -->


<template>
  <div style="max-width: 1024px; margin: 0 auto; padding: 1.5rem;">
    <div style="background-color: white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); border-radius: 0.5rem; padding: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">Production Report</h2>
      
      <div style="display: flex; flex-direction: column; space-y: 1rem;">
        <div style="display: flex; space-x: 1rem; items-center;">
          <!-- Machine Dropdown -->
          <select 
            v-model="selectedMachine" 
            style="width: 16rem; padding: 0.5rem; border: 1px solid #D1D5DB; border-radius: 0.5rem;"
            placeholder="Select Machine"
          >
            <option value="" disabled>Select Machine</option>
            <option 
              v-for="machine in machineNames" 
              :key="machine.id" 
              :value="machine.id"
            >
              {{ machine.machine_name }}
            </option>
          </select>

          <!-- Display Selected Machine Name -->
          <div style="font-weight: medium; color: #333;">
            {{ selectedMachineName }}
          </div>

          <!-- Date Pickers -->
          <input 
            type="date" 
            v-model="startDate" 
            style="width: 12rem; padding: 0.5rem; border: 1px solid #D1D5DB; border-radius: 0.5rem;"
            :max="endDate || ''"
          />
          
          <input 
            type="date" 
            v-model="endDate" 
            style="width: 12rem; padding: 0.5rem; border: 1px solid #D1D5DB; border-radius: 0.5rem;"
            :min="startDate || ''"
          />

          <!-- Generate Report Button -->
          <button 
            @click="fetchReportData" 
            :disabled="loading"
            style="background-color: #4169E1; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; opacity: loading ? 0.5 : 1;"
          >
            {{ loading ? 'Generating...' : 'Generate Report' }}
          </button>

          <!-- Download Button -->
          <button 
            v-if="reportData.length > 0"
            @click="downloadExcel"
            style="background-color: #4CAF50; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer;"
          >
            Download Excel
          </button>
        </div>

        <!-- Data Table -->
        <div style="overflow-x: auto;">
          <table 
            style="width: 100%; background-color: white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); border-radius: 0.5rem; overflow: hidden;"
            v-if="reportData.length"
          >
            <thead style="background-color: #F9FAFB;">
              <tr>
                <th v-for="column in columns" :key="column.key" 
                    style="padding: 0.75rem 1rem; text-align: left; font-size: 0.75rem; font-weight: 500; color: #6B7280; text-transform: uppercase; letter-spacing: 0.05em;"
                >
                  {{ column.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in reportData" :key="index" 
                  style="border-bottom: 1px solid #E5E7EB; background-color: #F9FAFB; transition: background-color 0.3s ease;"
              >
                <td v-for="column in columns" :key="column.key" 
                    style="padding: 0.75rem 1rem; font-size: 0.875rem; color: #374151;"
                >
                  {{ 
                    column.render 
                    ? column.render(row[column.dataIndex]) 
                    : row[column.dataIndex] 
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// State declarations
const startDate = ref(null)
const endDate = ref(null)
const reportData = ref([])
const loading = ref(false)
const machineNames = ref([])
const selectedMachine = ref(null)

// Computed property to get selected machine name
const selectedMachineName = computed(() => {
  const selectedMachineObj = machineNames.value.find(m => m.id === selectedMachine.value)
  return selectedMachineObj ? selectedMachineObj.machine_name : ''
})

// Table columns configuration
const columns = [
  { 
    title: 'Date', 
    dataIndex: 'date', 
    key: 'date' 
  },
  { 
    title: 'Production Time', 
    dataIndex: 'productionTime', 
    key: 'productionTime' 
  },
  { 
    title: 'Idle Time', 
    dataIndex: 'idleTime', 
    key: 'idleTime' 
  },
  { 
    title: 'Off Time', 
    dataIndex: 'offTime', 
    key: 'offTime' 
  },
  { 
    title: 'Good Parts', 
    dataIndex: 'goodParts', 
    key: 'goodParts' 
  },
  { 
    title: 'Bad Parts', 
    dataIndex: 'badParts', 
    key: 'badParts' 
  },
  { 
    title: 'Part Count', 
    dataIndex: 'partCount', 
    key: 'partCount' 
  },
  { 
    title: 'Availability (%)', 
    dataIndex: 'availability', 
    key: 'availability',
    render: (value) => value.toFixed(1)
  },
  { 
    title: 'Performance (%)', 
    dataIndex: 'performance', 
    key: 'performance',
    render: (value) => value.toFixed(1)
  },
  { 
    title: 'Quality (%)', 
    dataIndex: 'quality', 
    key: 'quality',
    render: (value) => value.toFixed(1)
  },
  { 
    title: 'OEE (%)', 
    dataIndex: 'oee', 
    key: 'oee',
    render: (value) => value.toFixed(1)
  }
]

// Fetch machine names on component mount
onMounted(async () => {
  try {
    const response = await axios.get('http://172.18.100.88:3000/machineDetails')
    machineNames.value = response.data
  } catch (err) {
    console.error('Failed to fetch machine names:', err)
    alert('Failed to load machine names')
  }
})

// Fetch report data
const fetchReportData = async () => {
  // Validate inputs
  if (!startDate.value || !endDate.value) {
    alert('Please select both start and end dates')
    return
  }

  if (new Date(endDate.value) < new Date(startDate.value)) {
    alert('End date cannot be before start date')
    return
  }

  if (!selectedMachine.value) {
    alert('Please select a machine')
    return
  }

  loading.value = true
  try {
    const response = await axios.get('http://172.18.100.88:3000/analytics', {
      params: {
        machineId: selectedMachine.value,
        startDate: startDate.value,
        endDate: endDate.value
      }
    })
    
    // Transform the single object into an array with one item
    const formattedData = [{
      date: startDate.value,
      productionTime: response.data.ProductionTime,
      idleTime: response.data.IdleTime,
      offTime: response.data.OffTime,
      goodParts: response.data.GoodPart,
      badParts: response.data.BadPart,
      partCount: response.data.PartCount,
      availability: parseFloat(response.data.Availability),
      performance: parseFloat(response.data.Performance),
      quality: parseFloat(response.data.Quality),
      oee: parseFloat(response.data.OEE)
    }]
    
    reportData.value = formattedData
  } catch (err) {
    console.log(err)
    alert('Failed to fetch data')
  } finally {
    loading.value = false
  }
}

// Excel/CSV download
const downloadExcel = () => {
  const BOM = "\uFEFF"
  
  const headers = [
    'Date', 'Production Time', 'Idle Time', 'Off Time', 
    'Good Parts', 'Bad Parts', 'Part Count', 
    'Availability (%)', 'Performance (%)', 'Quality (%)', 'OEE (%)'
  ]

  const csvContent = BOM + [
    headers.join(','),
    ...reportData.value.map(row => [
      `="${row.date}"`,
      row.productionTime,
      row.idleTime,
      row.offTime,
      row.goodParts,
      row.badParts,
      row.partCount,
      row.availability.toFixed(1),
      row.performance.toFixed(1),
      row.quality.toFixed(1),
      row.oee.toFixed(1)
    ].join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', 'production_report.csv')
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>