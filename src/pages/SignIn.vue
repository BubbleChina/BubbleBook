<template>
  <form class="contain" @submit.prevent="demo">
    <img src="../../public/Logo.svg" class="logo" />
    <div class="title">{{ title }}{{ bubble < 17 ? "_" : "" }}</div>
    <div class="body">
      <div>
        <input type="text" placeholder="Email" required class="input" />
      </div>
      <div>
        <input type="password" placeholder="Password" required class="input" />
      </div>
      <div>
        <button>Sign in</button>
      </div>
      <div>
        <RouterLink to="/forget_password" style="text-decoration: none"
          >Forget password?</RouterLink
        >
      </div>
      <div style="font-size: 14px; margin: 0 0 15px 0">
        New to BUBBLE?
        <RouterLink to="/sign_up" class="link">Create an account.</RouterLink>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"

  let title = ref<string>("")
  let bubble = ref<number>(0)
  onMounted(() => {
    let timer = setInterval(() => {
      bubble.value += 1
      title.value = "Sign in to BUBBLE".slice(0, bubble.value)
    }, 222)
    setTimeout(() => {
      clearInterval(timer)
    }, 3774)
  })
  const demo = () => {}
</script>

<style scoped>
  .contain {
    text-align: center;
  }

  .logo {
    width: 15vh;
    margin: 2% 0 2% 0;
  }

  .title {
    font-size: 30px;
    font-weight: lighter;
    margin: 0 0 1% 0;
  }

  .body {
    background: rgb(226, 223, 223);
    width: 30%;
    margin: 1% 35% 0 35%;
    border-radius: 10px;
    border: 1px solid darkgray;
  }

  .input {
    width: 80%;
    height: 30px;
    margin: 3% 0 3% 0;
    border: 0 solid;
    background-color: rgb(226, 223, 223);
    border-bottom: 1px solid black;
    text-align: center;
  }

  button {
    width: 50%;
    cursor: pointer;
    font-size: 15px;
    line-height: 25px;
    background-color: black;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    transition: 1.3s;
  }

  button:hover {
    background-color: #e6dada;
    color: black;
    font-weight: lighter;
    border: 1px solid;
  }

  .link {
    color: rgba(240, 68, 68, 0.613);
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>
