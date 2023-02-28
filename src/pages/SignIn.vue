<template>
  <div>Sign in to BUBBLE</div>
  <div><label>Email:<input/></label></div>
  <div><label>Password:<input/></label></div>
  <div>
    <RouterLink to="/sign_up">Sign up</RouterLink>
  </div>
  <div>
    <RouterLink to="/sign_in">Sign in</RouterLink>
  </div>
  <div>
    <RouterLink to="/forget_pwd">Forget password</RouterLink>
  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>