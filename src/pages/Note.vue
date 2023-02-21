<template>
  <div class="container">
    <div class="navigation">
      <div><img :src="icon_logo" alt="" class="logo" /></div>
      username
    </div>
    <div class="body">
      <div v-if="isShowNote">show note</div>
      <div v-else>edit note</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import icon_logo from "../../public/Logo.svg"

  let isShowNote = ref<boolean>(false)
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  .navigation {
    width: 20%;
    text-align: center;
    background-color: red;
  }
  .logo {
    width: 50%;
    margin: 10% 0 0 0;
  }
  .body {
    width: 80%;
  }
</style>
