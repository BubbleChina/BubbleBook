<template>
  {{ s ? " " : "" }}
  {{ data }}
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from "vue"
  let s = ref<boolean>(false)
  let data = reactive({})
  onMounted(async () => {
    const res = await fetch("https://cache.video.iqiyi.com/")
    data = await res.json()
    s.value = true
  })
</script>
