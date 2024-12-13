<!-- <template>
  <HelloWorld />

  <SideNavbar />

  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SideNavbar from './components/SideNavbar.vue'

</script> -->

<template>
  <div>
    <HelloWorld v-if="!isDashboardRoute" />
    <SideNavbar v-if="!isDashboardRoute" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SideNavbar from './components/SideNavbar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isDashboardRoute = computed(() => route.path.startsWith('/dashboard'))
</script>