<!-- MachineDialog.vue -->
<!-- <template>
    <div v-if="isOpen" class="dialog-overlay">
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Add New Machine</h2>
          <button class="close-button" @click="closeDialog">&times;</button>
        </div>
        <div class="dialog-body">
          <div class="form-group">
            <label>Machine ID</label>
            <input 
              type="text" 
              :value="nextMachineId"
              class="input-field" 
              disabled
            />
          </div>
          <div class="form-group">
            <label>Machine Name</label>
            <input 
              type="text" 
              v-model="localMachineName"
              class="input-field"
              placeholder="Enter machine name"
            />
          </div>
          <div class="form-group">
            <label>Machine URL</label>
            <input 
              type="text" 
              v-model="machineUrl"
              class="input-field"
              placeholder="opc.tcp://172.18.28.35"
            />
          </div>
        </div>
        <div class="dialog-footer">
          <button class="cancel-button" @click="closeDialog">Cancel</button>
          <button class="save-button" @click="handleSave">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: Boolean,
    existingMachineIds: {
      type: Array,
      default: () => []
    }
  });
  
  const emit = defineEmits(['close', 'save']);
  
  const localMachineName = ref('');
  const machineUrl = ref('');
  const nextMachineId = ref(2);
  
  // Function to find the next sequential ID
  const findNextSequentialId = (existingIds) => {
    if (!existingIds || existingIds.length === 0) return 2;
    
    // Sort existing IDs in ascending order
    const sortedIds = [...existingIds].sort((a, b) => a - b);
    
    // If the first valid ID is greater than 2, return 2
    if (sortedIds[0] > 2) return 2;
    
    // Find the first gap in the sequence starting from 2
    let expectedId = 2;
    for (const id of sortedIds) {
      if (id < 2) continue; // Skip IDs less than 2
      if (id > expectedId) return expectedId;
      expectedId = id + 1;
    }
    
    return expectedId;
  };
  
  // Watch for dialog open/close
  watch(() => props.isOpen, (newIsOpen) => {
    if (newIsOpen) {
      // Set the next sequential ID when dialog opens
      nextMachineId.value = findNextSequentialId(props.existingMachineIds);
    }
    // Reset other fields
    localMachineName.value = '';
    machineUrl.value = '';
  });
  
  const closeDialog = () => {
    emit('close');
  };
  
  const handleSave = () => {
    if (!localMachineName.value || !machineUrl.value) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!machineUrl.value.startsWith('opc.tcp://')) {
      alert('Machine URL must start with "opc.tcp://"');
      return;
    }
  
    emit('save', {
      id: nextMachineId.value,
      name: localMachineName.value,
      url: machineUrl.value
    });
  
    closeDialog();
  };
  </script>
  
  <style scoped>
  /* Styles remain unchanged */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .dialog-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .dialog-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  }
  
  .dialog-body {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a1a1a;
  }
  
  .input-field {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .input-field:disabled {
    background-color: #f5f5f5;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .cancel-button, .save-button {
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .cancel-button {
    background-color: #e2e8f0;
    border: none;
    color: #4a5568;
  }
  
  .save-button {
    background-color: #4a90e2;
    border: none;
    color: white;
  }
  
  .cancel-button:hover {
    background-color: #cbd5e0;
  }
  
  .save-button:hover {
    background-color: #357abd;
  }
  </style> -->


  <template>
    <div v-if="isOpen" class="dialog-overlay">
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Add New Machine</h2>
          <button class="close-button" @click="closeDialog">&times;</button>
        </div>
        <div class="dialog-body">
          <div class="form-group">
            <label>Machine ID</label>
            <input 
              type="number" 
              v-model="machineId"
              class="input-field" 
              placeholder="Enter machine ID"
            />
          </div>
          <div class="form-group">
            <label>Machine Name</label>
            <input 
              type="text" 
              v-model="localMachineName"
              class="input-field"
              placeholder="Enter machine name"
            />
          </div>
          <div class="form-group">
            <label>Machine URL</label>
            <input 
              type="text" 
              v-model="machineUrl"
              class="input-field"
              placeholder="opc.tcp://172.18.28.35"
            />
          </div>
        </div>
        <div class="dialog-footer">
          <button class="cancel-button" @click="closeDialog">Cancel</button>
          <button class="save-button" @click="handleSave">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: Boolean
  });
  
  const emit = defineEmits(['close', 'save']);
  
  const machineId = ref('');
  const localMachineName = ref('');
  const machineUrl = ref('');
  
  // Watch for dialog open/close
  watch(() => props.isOpen, (newIsOpen) => {
    if (newIsOpen) {
      // Reset all fields when dialog opens
      machineId.value = '';
      localMachineName.value = '';
      machineUrl.value = '';
    }
  });
  
  const closeDialog = () => {
    emit('close');
  };
  
  const handleSave = () => {
    if (!machineId.value || !localMachineName.value || !machineUrl.value) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!machineUrl.value.startsWith('opc.tcp://')) {
      alert('Machine URL must start with "opc.tcp://"');
      return;
    }
  
    emit('save', {
      id: Number(machineId.value),
      name: localMachineName.value,
      url: machineUrl.value
    });
  
    closeDialog();
  };
  </script>
  
  <style scoped>
  /* Styles remain unchanged */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .dialog-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .dialog-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  }
  
  .dialog-body {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a1a1a;
  }
  
  .input-field {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .input-field:disabled {
    background-color: #f5f5f5;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .cancel-button, .save-button {
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .cancel-button {
    background-color: #e2e8f0;
    border: none;
    color: #4a5568;
  }
  
  .save-button {
    background-color: #4a90e2;
    border: none;
    color: white;
  }
  
  .cancel-button:hover {
    background-color: #cbd5e0;
  }
  
  .save-button:hover {
    background-color: #357abd;
  }
  </style>