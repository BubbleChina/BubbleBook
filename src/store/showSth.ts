import { ref } from "vue"
import { defineStore } from "pinia"

export const useIsShowSthStore = defineStore("isShowMsg", () => {
  let isShowMsgStore = ref<boolean>(true)
  const closeMsg = (): void => {
    isShowMsgStore.value = false
  }

  let isShowNoteStore = ref<boolean>(true)
  const toEditNote = (): void => {
    isShowNoteStore.value = false
  }
  const toShowNote = (): void => {
    isShowNoteStore.value = true
  }

  return {
    isShowMsgStore,
    closeMsg,
    isShowNoteStore,
    toEditNote,
    toShowNote,
  }
})
