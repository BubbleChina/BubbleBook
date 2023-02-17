import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserInfoStore = defineStore("userInfo", () => {
  let usernameStore = ref<string>("")
  let passwordStore = ref<string>("")

  const changeUsernameStore = (target: string): void => {
    usernameStore.value = target
    console.log("Store of username: ", usernameStore.value)
  }
  const changePasswordStore = (target: string): void => {
    passwordStore.value = target
    console.log("Store of password: ", passwordStore.value)
  }

  return {
    usernameStore,
    passwordStore,
    changeUsernameStore,
    changePasswordStore,
  }
})
