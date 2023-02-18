import { createApp } from "vue"
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import "./style.css"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router"

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount("#root")
