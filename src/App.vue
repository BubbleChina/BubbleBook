<template>
  <Runner/>
  <RouterView/>
</template>

<script setup lang="ts">
import Runner from "./pages/Runner.vue"
import {RouterView} from "vue-router"

console.log("Hello")
</script>

<style scoped></style>
