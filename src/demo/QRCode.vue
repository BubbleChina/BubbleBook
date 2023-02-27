<template>
  <div class="contain">
    <div class="title">QR Code</div>
    <div style="text-align: right">
      view source on
      <a href="https://github.com/scopewu/qrcode.vue" target="_blank">github</a>
    </div>
    <div class="install">npm install qrcode.vue</div>
    <div>value:<input type="text" v-model="value"/></div>
    <div>Size:<input type="range" v-model="size"/></div>
    <div>
      Margin:
      <input type="range" v-model="margin" @blur="checkValue"/>
    </div>
    <div>
      Level:
      <label>
        <input type="radio" name="level" value="L" v-model="level"/>L
      </label>
      <label>
        <input type="radio" name="level" value="M" v-model="level"/>M
      </label>
      <label>
        <input type="radio" name="level" value="Q" v-model="level"/>Q
      </label>
      <label>
        <input type="radio" name="level" value="H" v-model="level" checked/>H
      </label>
    </div>
    <div>
      renderAs:
      <label>
        <input
          type="radio"
          name="render"
          value="canvas"
          v-model="render"
          checked
        />canvas
      </label>
      <label>
        <input type="radio" name="render" value="svg" v-model="render"/>svg
      </label>
    </div>

    <div>
      background:<input type="color" v-model="background" @blur="checkValue"/>
    </div>
    <div>
      foreground:<input type="color" v-model="foreground" @blur="checkValue"/>
    </div>
    <div>
      <QRCodeVue
        :value="value"
        :size="size"
        :margin="margin"
        :level="level"
        :render-as="render"
        :background="background"
        :foreground="foreground"
        class=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import QRCodeVue from "qrcode.vue"

let value = ref<string>("")
let size = ref<number>(100)
let margin = ref<number>(0)
let level = ref<any>("H")
type Render = "canvas" | "svg" | undefined
let render = ref<Render>("canvas")
let background = ref<string>("#ffffff")
let foreground = ref<string>("#000000")

const checkValue = () => {
}
</script>

<style scoped>
.contain {
  width: 60%;
  height: 100vh;
  overflow: auto;
  margin: 0 20% 0 20%;
  text-align: center;
}

.title {
  font-size: 20px;
  line-height: 60px;
  text-align: center;
}

a {
  text-decoration: none;
}

.install {
  text-align: center;
  background-color: aliceblue;
  width: 60%;
  margin: 2% 20% 5% 20%;
  padding: 10px 0 10px 0;
}
</style>
