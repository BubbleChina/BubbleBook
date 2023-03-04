<template>
  <form class="contain" @submit.prevent="demo">
    <RouterLink to="/demo"
      ><img src="../../public/Logo.svg" class="logo"
    /></RouterLink>
    <div class="title">
      {{ title }}
      <span class="animation">{{ bubble < 17 ? "_" : "" }}</span>
    </div>
    <div class="body">
      <div>
        <input
          type="email"
          required
          placeholder="Email"
          v-model="email"
          class="input"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Verification code"
          required
          class="input"
          v-model="verifiedCode"
          @change="checkCode"
        />
      </div>
      <div v-if="isSubmit">
        <button type="submit" title="OK" class="submit">Sign in</button>
      </div>
      <div v-else>
        <button
          type="button"
          class="send_code"
          @click.once="verifyDemo"
          title="Please note that the verification code is only sent once."
        >
          {{
            isVerify
              ? endTime === 0
                ? "⚜️"
                : endTime
              : "Send verification code"
          }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import router from "../router"
  import { RouterLink } from "vue-router"

  let email = ref<string>("")
  let verifiedCode = ref<string | undefined>()

  let title = ref<string>("")
  let bubble = ref<number>(0)
  let isSubmit = ref<boolean>(false)
  let isVerify = ref<boolean>(false)
  let endTime = ref<any>(10)

  let red = {
    color: "red"
  }
  let green = {
    color: "green"
  }
  onMounted(() => {
    let timer = setInterval(() => {
      bubble.value += 1
      title.value = "Sign in to BUBBLE".slice(0, bubble.value)
    }, 222)
    setTimeout(() => {
      clearInterval(timer)
    }, 3774)
  })

  const checkCode = () => {
    if (verifiedCode.value === "6666") {
      isSubmit.value = true
    } else {
      isSubmit.value = false
    }
  }

  const verifyDemo = () => {
    isVerify.value = true
    let timer = setInterval(() => {
      checkCode()
      if (verifiedCode.value === "6666") {
        clearInterval(timer)
      }

      endTime.value -= 1
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
    }, 10000)
  }

  const demo = () => {
    window.localStorage.setItem("token", email.value)
    router.push("/")
  }
</script>

<style scoped>
  .contain {
    text-align: center;
  }

  .logo {
    width: 15vh;
    margin: 2% 0 2% 0;
  }

  @keyframes hidden {
    0% {
      opacity: 0.7;
    }
    16% {
      opacity: 0.4;
    }
    32% {
      opacity: 0.1;
    }
    48% {
      opacity: 0.4;
    }
    64% {
      opacity: 0.7;
    }
    80% {
      opacity: 1;
    }
  }

  .animation {
    animation-name: hidden 2531ms;
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

  .submit {
    width: 50%;
    cursor: pointer;
    font-size: 15px;
    line-height: 25px;
    background-color: black;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    margin: 0 0 15px 0;
    transition: 1.3s;
  }

  .submit:hover {
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

  .send_code {
    margin: 0 0 12px 0;
    padding: 5px;
  }
</style>
