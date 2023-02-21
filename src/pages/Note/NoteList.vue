<template>
  List
  <button @click.stop="toEditNote()">change</button>
  <!-- <progress :value="value"></progress> -->
</template>

<script setup lang="ts">
  import { ref, onMounted, defineProps, defineEmits, computed } from "vue"
  import { useIsShowSthStore } from "../../store/showSth"

  const { toEditNote } = useIsShowSthStore()

  const props = defineProps<{ isChange: boolean }>()
  const emit = defineEmits<{
    (): void
  }>()

  const store = ref<boolean>(props.isChange)

  // let value = ref<number>(0)
  // onMounted(() => {
  //   let timer = setInterval(() => {
  //     value.value += 0.01
  //   }, 100)
  //   setTimeout(() => {
  //     clearInterval(timer)
  //   }, 10000)
  // })
</script>

<style scoped></style>
