<template>
  <div v-for="i in 50">
    <div :id="`#${i}`">{{ 50 - i }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
