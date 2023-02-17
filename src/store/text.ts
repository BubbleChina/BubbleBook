import { reactive } from "vue"
import { defineStore } from "pinia"

interface TEXT {
  title?: string
  date?: string
  content?: string
}

export const useTextStore = defineStore("text", () => {
  let text = reactive<TEXT[]>([])
})
