<template>
  <h2 style="text-align: center">DEMO</h2>
  <RouterLink to="/demo/md_editor">Markdowm Editor</RouterLink>
  <RouterLink to="/demo/qrcode">QR Code</RouterLink>
  <RouterLink to="/demo/flick">Flick</RouterLink>
  <hr />
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router"
</script>
