<template>
  <h1>Drag....</h1>
</template>

<script setup lang="ts"></script>

<style scoped>
  #container {
    position: absolute;
    background-color: blue;
  }
  #elem {
    position: absolute;
    background-color: green;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
</style>
