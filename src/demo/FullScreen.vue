<template>
  <button @click="screen()">
    {{ flag === false ? "全屏" : "退出全屏" }}
  </button>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  let flag = ref<boolean>(false)
  const screen = () => {
    let element: HTMLElement = document.documentElement
    flag.value = document.fullscreenElement === null ? false : true
    if (flag.value) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      }
    }
    flag.value = !flag.value
  }
</script>

<style scoped></style>
