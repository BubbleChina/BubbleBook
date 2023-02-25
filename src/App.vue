<template>
  <Runner />
  <div style="text-align: center">
    <RouterLink to="/demo">beta - demo</RouterLink>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
  import Runner from "./pages/Runner.vue"
  import { RouterLink, RouterView } from "vue-router"
</script>

<style scoped></style>
