<template>
  <div>
    <input
      type="text"
      class="username"
      placeholder="--> Enter your email"
      v-model="username"
      title="trust me"
      @blur="changeUsernameStore(username)"
    />
  </div>
  <div style="display: flex; padding: 0 0 0 8%; justify-content: space-around">
    <div style="width: 50%; overflow: hidden">
      <input
        type="text"
        class="input_verify"
        :placeholder="
          verification_code.length == 0 ? 'code' : `${verification_code}`
        "
        title="Verification code"
        v-model="verification_code"
      />
    </div>
    <div style="width: 40%">
      <button class="verify" @click.prevent="verify_demo">
        {{ send_code ? `${verify_time}` : "verify" }}
      </button>
    </div>
  </div>
  <div style="text-align: right">
    <button
      class="continue"
      :disabled="username.length == 0"
      @click.prevent="next_page"
    >
      continue -->
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import router from "../../router"
  import { useUserInfoStore } from "../../store/userInfo"

  const userInfo = useUserInfoStore()
  const { changeUsernameStore } = userInfo
  let username = ref<string>("")
  let verification_code = ref<string>("")
  let verify_time = ref<number>(10)
  let send_code = ref<boolean>(false)

  const verify_demo = () => {
    if (username.value.length == 0) {
      window.alert("Please enter your email.")
    } else if (!true) {
      console.log("regular expression")
    } else {
      send_code.value = true
      const clock = setInterval(() => {
        verify_time.value--
        if (verify_time.value == 5) {
          verification_code.value = "6666"
        }
      }, 1000)
      setTimeout(() => {
        clearInterval(clock)
        verify_time.value = 10
        send_code.value = false
      }, 11000)
    }
  }

  const next_page = () => {
    if (verification_code.value.length == 0) {
      alert("Please enter your verification code.")
    } else if (verification_code.value != "6666") {
      alert("Verification code error.")
    } else if (
      window.confirm(`Are you sure to use \"${username.value}\" to sign up?`)
    ) {
      router.push("/sign_up/set_password")
    }
  }
</script>

<style scoped>
  .username {
    width: 75%;
    height: 25px;
    margin: 3px 0 10px 0;
    border-radius: 3px;
    border: 0;
    border-bottom: 1px solid whitesmoke;
    background: rgb(221, 219, 219);
    padding: 0 7% 0 3%;
    font: 15px/30px;
  }

  .username:placeholder-shown {
    text-align: left;
  }

  .sign_up {
    font-size: 13px;
    margin: 0 0 8px 0;
  }

  .input_verify {
    width: 120px;
    height: 25px;
    background-color: rgb(221, 219, 219);
    border: 0;
    border-bottom: 1px solid gray;
    text-align: center;
  }

  .input_verify:placeholder-shown {
    text-align: center;
  }

  .verify {
    width: 80%;
    border-radius: 3px;
    padding: 3px 1px 3px 1px;
    cursor: pointer;
    border: 0.1px solid green;
    transition: 1500ms;
  }

  .verify:hover {
    color: white;
    background: rgb(153, 153, 235);
  }

  .continue {
    height: 25px;
    line-height: 25px;
    margin: 15px 15px 0 0;
    border: 0;
    background: rgb(221, 219, 219);
    opacity: 0.95;
    border-left: 1px solid plum;
    cursor: pointer;
    padding: 0 0 0 3px;
    transition: 999ms;
  }

  .continue:hover {
    background: rgb(139, 164, 234);
    border-radius: 12.5px 3px 3px 12.5px;
  }

  .continue:disabled {
    border: 0;
    background-color: rgb(221, 219, 219);
    color: rgb(221, 219, 219);
  }
</style>
