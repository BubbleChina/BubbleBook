<template>
  <div>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/user_center">User Center</RouterLink>
  </div>
  <div>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
import {watchEffect} from "vue"

import router from "../router"

watchEffect(() => {
  if (!window.localStorage.getItem("token")) {
    router.push("/sign_in")
  }
})


</script>

<style scoped>

</style>