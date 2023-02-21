<template>
  <div class="navigation" @click.stop="toShowNote()">
    <NoteList :isChange="isChange" />
  </div>
  <div class="body">
    <div v-if="1">Show note....</div>
    <div v-else>Edit note....</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onUpdated, onMounted } from "vue"
  import NoteList from "./NoteList.vue"
  import { useIsShowSthStore } from "../../store/showSth"

  const { isShowNoteStore, toShowNote } = useIsShowSthStore()

  let isChange = ref<boolean>(false)
</script>

<style scoped></style>
