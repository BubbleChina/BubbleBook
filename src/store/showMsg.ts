import { ref } from "vue"
import { defineStore } from "pinia"

export const useIsShowMsgStore = defineStore("isShowMsg", () => {
  let isShowMsgStore = ref<boolean>(true)

  const closeMsg = (): void => {
    isShowMsgStore.value = false
    console.log("Is show msg? ", isShowMsgStore.value)
  }

  return {
    isShowMsgStore,
    closeMsg,
  }
})
