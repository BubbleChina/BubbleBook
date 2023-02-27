<template>
  <Cropper class="example-cropper" :src="img_test" />
</template>
<script setup lang="ts">
  import { Cropper } from "vue-advanced-cropper"
  import "vue-advanced-cropper/dist/style.css"
  import img_test from "./026.jpg"
</script>
<style scoped></style>
