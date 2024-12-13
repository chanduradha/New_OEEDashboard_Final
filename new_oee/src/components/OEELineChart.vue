<!-- OEELineChart.vue -->
<template>
    <div class="metrics-chart-container">
      <h2 class="metrics-title">OEE Metrics Over Time</h2>
      <div class="chart-wrapper">
        <v-chart class="chart" :option="chartOption" autoresize />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import VChart from 'vue-echarts';
  import { use } from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
  } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  
  // Register ECharts components
  use([
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
  ]);
  
  const props = defineProps({
    selectedMachineId: {
      type: [Number, String],
      default: null
    }
  });
  
  // Generate sample time series data
  const generateTimeSeriesData = (machineId) => {
    const data = [];
    const baseDate = new Date('2024-08-14T10:03:57');
    
    for (let i = 0; i < 24; i++) {
      const timestamp = new Date(baseDate.getTime() + i * 3600000);
      data.push({
        timestamp: timestamp.toISOString(),
        Quality: Math.round((0.4 + Math.random() * 0.6) * 100),
        Availability: Math.round((0.4 + Math.random() * 0.6) * 100),
        Performance: Math.round((0.4 + Math.random() * 0.6) * 100),
        OEE: Math.round((0.4 + Math.random() * 0.6) * 100)
      });
    }
    return data;
  };
  
  const timeseriesData = ref([]);
  
  // Update data when machine changes
  watch(() => props.selectedMachineId, (newId) => {
    if (newId) {
      timeseriesData.value = generateTimeSeriesData(newId);
    }
  }, { immediate: true });
  
  // Prepare chart options
  const chartOption = computed(() => ({
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        const time = new Date(params[0].value[0]).toLocaleTimeString();
        let result = `${time}<br/>`;
        params.forEach(param => {
          result += `${param.seriesName}: ${param.value[1]}%<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: ['Quality', 'Availability', 'Performance', 'OEE'],
      top: 10
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisLabel: {
        formatter: (value) => {
          const date = new Date(value);
          return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        }
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'Quality',
        type: 'line',
        smooth: true,
        lineStyle: { width: 2 },
        color: '#4a90e2',
        data: timeseriesData.value.map(item => [item.timestamp, item.Quality])
      },
      {
        name: 'Availability',
        type: 'line',
        smooth: true,
        lineStyle: { width: 2 },
        color: '#48bb78',
        data: timeseriesData.value.map(item => [item.timestamp, item.Availability])
      },
      {
        name: 'Performance',
        type: 'line',
        smooth: true,
        lineStyle: { width: 2 },
        color: '#ed64a6',
        data: timeseriesData.value.map(item => [item.timestamp, item.Performance])
      },
      {
        name: 'OEE',
        type: 'line',
        smooth: true,
        lineStyle: { width: 2 },
        color: '#ecc94b',
        data: timeseriesData.value.map(item => [item.timestamp, item.OEE])
      }
    ]
  }));
  </script>
  
  <style scoped>
  .metrics-chart-container {
    width: 75%;
    height: 350px;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }
  
  .metrics-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .chart-wrapper {
    width: 100%;
    height: calc(100% - 3rem);
  }
  
  .chart {
    width: 100%;
    height: 100%;
  }
  </style>