<template>
  <div>
    <img
      :class="someOne === 23 ? '' : ''"
      :alt="someOne === 23 ? 'Anita Sherry' : 'GEM'"
      :title="someOne === 23 ? '☆*: .｡. o(≧▽≦)o .｡.:*☆' : '~~~///(^v^)\\\~~~'"
      :src="
        someOne === 1
          ? ai_1
          : someOne === 2
          ? ai_2
          : someOne === 3
          ? ai_3
          : someOne === 4
          ? ai_4
          : someOne === 5
          ? ai_5
          : someOne === 6
          ? ai_6
          : someOne === 7
          ? ai_7
          : someOne === 8
          ? ai_8
          : someOne === 9
          ? ai_9
          : someOne === 10
          ? ai_10
          : someOne === 11
          ? ai_11
          : someOne === 12
          ? ai_12
          : someOne === 13
          ? ai_13
          : someOne === 14
          ? ai_14
          : someOne === 15
          ? ai_15
          : someOne === 16
          ? ai_16
          : someOne === 17
          ? ai_17
          : someOne === 18
          ? ai_18
          : someOne === 19
          ? ai_19
          : someOne === 20
          ? ai_20
          : someOne === 21
          ? ai_21
          : someOne === 22
          ? ai_22
          : over
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import ai_1 from "../assets/ai/1.png"
  import ai_2 from "../assets/ai/2.png"
  import ai_3 from "../assets/ai/3.png"
  import ai_4 from "../assets/ai/4.png"
  import ai_5 from "../assets/ai/5.png"
  import ai_6 from "../assets/ai/6.png"
  import ai_7 from "../assets/ai/7.png"
  import ai_8 from "../assets/ai/8.png"
  import ai_9 from "../assets/ai/9.png"
  import ai_10 from "../assets/ai/10.png"
  import ai_11 from "../assets/ai/11.png"
  import ai_12 from "../assets/ai/12.png"
  import ai_13 from "../assets/ai/13.png"
  import ai_14 from "../assets/ai/14.png"
  import ai_15 from "../assets/ai/15.png"
  import ai_16 from "../assets/ai/16.png"
  import ai_17 from "../assets/ai/17.png"
  import ai_18 from "../assets/ai/18.png"
  import ai_19 from "../assets/ai/19.png"
  import ai_20 from "../assets/ai/20.png"
  import ai_21 from "../assets/ai/21.png"
  import ai_22 from "../assets/ai/22.png"
  import over from "../assets/ai/over.jpg"

  let someOne = ref<number>(1)
  let timer = setInterval(() => {
    someOne.value++
    console.log(someOne.value)
  }, 150)
  setTimeout(() => clearInterval(timer), 3300)
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
