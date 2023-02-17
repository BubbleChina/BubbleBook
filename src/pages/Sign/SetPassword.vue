<template>
  <div>
    <el-icon>
      <Lock />
    </el-icon>
    <input
      style="width: 80%"
      type="text"
      class="username"
      placeholder="password"
      v-model="password"
      title="trust me"
      @blur="changePasswordStore(password)"
    />
  </div>
  <div>
    <el-icon v-if="confirming_password.length == 0">
      <More />
    </el-icon>
    <el-icon v-else-if="confirming_password == password">
      <CircleCheck />
    </el-icon>
    <el-icon v-else>
      <CircleClose />
    </el-icon>
    <input
      type="password"
      class="input_verify"
      placeholder="confirming password"
      title="Verification code"
      v-model="confirming_password"
    />
  </div>
  <div style="text-align: right">
    <button class="submit" @click.prevent="submit">sign up</button>
  </div>
  <el-form label-width="100px" :model="formLabelAlign" style="max-width: 460px">
    <el-form-item label="password">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { reactive, ref } from "vue"
  import router from "../../router"
  import { useUserInfoStore } from "../../store/userInfo"

  const labelPosition = ref<string>("right")

  const formLabelAlign = reactive({
    name: "",
    region: "",
    type: "",
  })

  const userInfo = useUserInfoStore()
  const { usernameStore, changePasswordStore } = userInfo
  let password = ref<string>("")
  let confirming_password = ref<string>("")

  const submit = () => {
    if (password.value == "") {
      alert("Please enter your password.")
    } else if (confirming_password.value == "") {
      alert("Please enter your confirming password.")
    } else if (password.value != confirming_password.value) {
      alert("Password inconsistency.")
    } else if (confirm("Are you sure to sign up?")) {
      alert("Registered successfully.")
      window.localStorage.setItem("token", usernameStore)
      router.push("/")
    }
  }
</script>

<style scoped>
  .icon {
    background: red;
    width: 25px;
  }

  .username {
    width: 20px;
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

  .submit {
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

  .submit:hover {
    background: powderblue;
    border-radius: 12.5px 3px 3px 12.5px;
  }
</style>
