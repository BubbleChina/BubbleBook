<template>
  <div v-for="i in 50">
    <div>
      <a :href="`#${i}`">{{ i }}</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
