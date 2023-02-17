<template>
  <div class="navigation">
    <Navigation />
  </div>
  <div class="body">
    <Body />
  </div>
  <div class="slide">
    <Slide />
  </div>
</template>

<script setup lang="ts">
import Navigation from "../components/Navigation.vue"
import Body from "../components/Body.vue"
import Slide from "../components/Slide.vue"
</script>

<style scoped>
.navigation {
  width: 20%;
  height: 92vh;
  background: blue;
  overflow: auto;
}

.body {
  width: 60%;
  min-height: 92vh;
  background: yellow;
  overflow: auto;
}

.slide {
  width: 20%;
  min-height: 92vh;
  background: linear-gradient(#B993D6, #8CA6DB);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
}
</style>
