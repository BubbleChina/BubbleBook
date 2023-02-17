<template>
  <div class="container">
    <img src="../../public/Logo.svg" class="logo" />
    <div class="title">Sign in to Bubble</div>
    <form class="form" :style="form_style" @submit.prevent="submit">
      <label>
        <div style="text-align: left; margin: 0 0 0 15px">Email address</div>
        <input
          type="text"
          placeholder="Email address"
          v-model="username"
          required
        />
      </label>
      <label>
        <div style="text-align: left; margin: 0 0 0 15px">Password</div>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </label>
      <div class="forgot">Forget password?</div>
      <div class="sign_up">
        New to Bubble?
        <RouterLink to="/sign_up" style="text-decoration: none">
          Create an account.
        </RouterLink>
      </div>
      <button type="submit" style="text-align: center">Sign in</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue"
  import type { Ref } from "vue"
  import { RouterLink } from "vue-router"
  import router from "../../router"

  // window.localStorage.removeItem("token")
  // window.localStorage.clear()

  let form_width = ref<number>()
  form_width.value = window.innerWidth
  let form_style = reactive({
    width: `${form_width.value * 0.25}px`,
  })

  let username = ref<string>("")
  let password: Ref<string> = ref<string>("")

  const submit = () => {
    if (window.confirm("Are your sure to sign in ?")) {
      window.localStorage.setItem("token", username.value)
      // window.location.href = "/"
      // router.push({ path: "/", replace: true })
      router.replace({ path: "/" })
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .logo {
    width: 60px;
    margin: 30px 30px 10px 30px;
  }

  .title {
    font-size: 25px;
    margin: 0 0 15px 0;
    font-weight: lighter;
  }

  .form {
    margin: 0 auto;
    background: rgb(221, 219, 219);
    padding: 15px 0 15px 0;
    border-radius: 10px;
  }

  input {
    width: 75%;
    height: 25px;
    margin: 3px 0 10px 0;
    border-radius: 3px;
    border: 1px solid gray;
    padding: 0 7% 0 7%;
    font: 15px/30px;
  }

  input:placeholder-shown {
    text-align: left;
  }

  input:focus {
    border: 3px solid darkred;
  }

  .forgot {
    text-align: right;
    margin: 0 15px 5px 0;
    font-size: 12px;
    color: rgb(23, 133, 243);
  }

  .sign_up {
    font-size: 13px;
    margin: 0 0 8px 0;
  }

  button {
    width: 80%;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    border: 0.1px solid green;
    transition: 1500ms;
  }
  button:hover {
    color: white;
    background: black;
  }
</style>
