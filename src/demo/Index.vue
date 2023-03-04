<template>
  <h1 style="text-align: center">beta - demo</h1>
  <RouterLink to="/demo/drag" class="item">Drag&nbsp;</RouterLink>
  <RouterLink to="/demo/table" class="item">Table&nbsp;</RouterLink>
  <RouterLink to="/demo/fetch" class="item">Fetch&nbsp;</RouterLink>
  <RouterLink to="/demo/crop" class="item">Crop&nbsp;</RouterLink>
  <RouterLink to="/demo/qrcode" class="item">QRCode&nbsp;</RouterLink>
  <RouterLink to="/demo/full_screen" class="item"
    >FullSCreen&nbsp;</RouterLink
  >
  <RouterLink to="/demo/loading" class="item">Loading</RouterLink>
  <RouterLink to="/demo/calendar" class="item">Calendar</RouterLink>
  <RouterLink to="/demo/upload_file" class="item">UploadFile</RouterLink>
  <hr />
  <hr />
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router"
</script>

<style scoped>
  .item {
    background-color: red;
    padding: 5px;
    margin: 0 10px 0 0;
  }
</style>
