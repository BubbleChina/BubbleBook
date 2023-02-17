<template>
  <div class="container">
    <div><img :src="icon_logo" alt="" class="logo" /></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from "vue-router"
  import { ref } from "vue"
  import icon_logo from "../../public/Logo.svg"
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    line-height: 100%;
    display: flex;
    flex-direction: row;
  }

  .logo {
    height: 8vh;
  }
</style>
