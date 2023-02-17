<template>
  <div class="header"><Header /></div>
  <QRCodeVue value="Hello World" level="H" foreground="#ed9db2" />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Header from "../components/Header.vue"
  import QRCodeVue from "qrcode.vue"
</script>

<style scoped>
  .header {
    height: 8vh;
    width: 100%;
    background: red;
  }
  .container {
    height: 92vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>
