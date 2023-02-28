<script setup lang="ts">
import {watchEffect} from "vue"
import router from "../router"

watchEffect(() => {
  router.push("/sign_in")
})
</script>
