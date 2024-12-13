<!-- TimeMetricsBarChart.vue
<template>
    <div ref="chartContainer" class="bar-chart-container"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, defineProps  } from 'vue'
  import Highcharts from 'highcharts'
  
  const props = defineProps({
    runtimeInHours: {
      type: Number,
      required: true
    },
    idleTimeInHours: {
      type: Number,
      required: true
    },
    offTimeInHours: {
      type: Number,
      required: true
    }
  })
  
  const chartContainer = ref(null)
  
  const initChart = () => {
    Highcharts.chart(chartContainer.value, {
      chart: {
        type: 'bar',
        height: 200
      },
      title: {
        text: 'Time Distribution',
        align: 'left',
        style: {
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: ['Time Metrics'],
        visible: false
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Hours'
        }
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical'
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        },
        bar: {
          borderRadius: 4
        }
      },
      series: [{
        name: 'Runtime',
        data: [props.runtimeInHours],
        color: '#2563eb'
      }, {
        name: 'Idle Time',
        data: [props.idleTimeInHours],
        color: '#f59e0b'
      }, {
        name: 'Off Time',
        data: [props.offTimeInHours],
        color: '#dc2626'
      }],
      credits: {
        enabled: false
      }
    })
  }
  
  onMounted(() => {
    initChart()
  })
  
  // Watch individual props for changes
  watch(
    () => [props.runtimeInHours, props.idleTimeInHours, props.offTimeInHours],
    () => {
      initChart()
    }
  )
  </script>
  
  <style scoped>
  .bar-chart-container {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0.5rem;
    padding: 0rem;
  }
  </style> -->

  <!-- TimeMetricsBarChart.vue -->
<template>
    <div class="chart-wrapper">
        <div class="zoom-controls mb-2">
            <button @click="zoomIn" class="px-3 py-1 bg-gray-200 text-black rounded mr-2 hover:bg-gray-400">
                Zoom In
            </button>
            <button @click="zoomOut" class="px-3 py-1 bg-gray-200 text-black rounded mr-2 hover:bg-gray-400">
                Zoom Out
            </button>
            <button @click="resetZoom" class="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-400">
                Reset Zoom
            </button>
        </div>
        <div ref="chartContainer" class="bar-chart-container"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, watch, defineProps } from 'vue'
import Highcharts from 'highcharts'

const props = defineProps({
    runtimeInHours: {
        type: Number,
        required: true
    },
    idleTimeInHours: {
        type: Number,
        required: true
    },
    offTimeInHours: {
        type: Number,
        required: true
    }
})

const chartContainer = ref(null)
const chart = ref(null)

const initChart = () => {
    chart.value = Highcharts.chart(chartContainer.value, {
        chart: {
            type: 'bar',
            height: 200,
            zoomType: 'y',  // Enable vertical zooming
            panning: true,  // Enable panning
            panKey: 'shift' // Pan when shift key is pressed
        },
        title: {
            text: 'Time Distribution',
            align: 'left',
            style: {
                fontSize: '16px'
            }
        },
        xAxis: {
            categories: ['Time Metrics'],
            visible: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Hours'
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical'
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
            bar: {
                borderRadius: 4
            }
        },
        series: [{
            name: 'Runtime',
            data: [props.runtimeInHours],
            color: '#059669'
        }, {
            name: 'Idle Time',
            data: [props.idleTimeInHours],
            color: '#f59e0b'
        }, {
            name: 'Off Time',
            data: [props.offTimeInHours],
            color: '#dc2626'
        }],
        credits: {
            enabled: false
        },
        // Add tooltip formatting
        tooltip: {
            formatter: function() {
                return `<b>${this.series.name}</b>: ${this.y.toFixed(1)} hours`;
            }
        }
    })
}

// Zoom control functions
const zoomIn = () => {
    if (chart.value) {
        const yAxis = chart.value.yAxis[0];
        const currentMin = yAxis.getExtremes().min;
        const currentMax = yAxis.getExtremes().max;
        const newMin = currentMin + (currentMax - currentMin) * 0.1;
        const newMax = currentMax - (currentMax - currentMin) * 0.1;
        yAxis.setExtremes(newMin, newMax);
    }
}

const zoomOut = () => {
    if (chart.value) {
        const yAxis = chart.value.yAxis[0];
        const currentMin = yAxis.getExtremes().min;
        const currentMax = yAxis.getExtremes().max;
        const newMin = currentMin - (currentMax - currentMin) * 0.1;
        const newMax = currentMax + (currentMax - currentMin) * 0.1;
        yAxis.setExtremes(Math.max(0, newMin), newMax);
    }
}

const resetZoom = () => {
    if (chart.value) {
        chart.value.zoomOut();
    }
}

onMounted(() => {
    initChart()
})

// Watch individual props for changes
watch(
    () => [props.runtimeInHours, props.idleTimeInHours, props.offTimeInHours],
    () => {
        initChart()
    }
)
</script>
  
<style scoped>
.chart-wrapper {
    width: 100%;
 
}

.bar-chart-container {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0.5rem;
    padding: 0rem;
}

.zoom-controls {
    display: flex;
    gap: 0.5rem;
}
</style>