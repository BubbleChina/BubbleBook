import { reactive } from "vue"
import { defineStore } from "pinia"
import { filter } from "lodash"

interface TEXT {
  id: string
  title: string
  date: string
  content: string
}

export const useTextStore = defineStore("text", () => {
  let text = reactive<TEXT[]>([])

  const updateText = (target: TEXT) => {
    text[text.length] = target
    console.log("Success!")
  }

  const deleteText = (id: string) => {
    let newText = filter(() => {
      for (let i = 0; i < text.length; i++) {
        return text[i].id != id
      }
    })
    return newText
  }

  return {
    text,
    updateText,
  }
})
