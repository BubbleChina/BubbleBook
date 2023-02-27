import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"
import Note from "../pages/Note.vue"
import NotFound from "../pages/NotFound.vue"
// demo
import Demo from "../demo/Index.vue"
import MDEditor from "../demo/MDEditor.vue"
import QRCode from "../demo/QRCode.vue"
import Flick from "../demo/Flick.vue"
import Crop from "../demo/Crop.vue"

const router = createRouter({
  // hash router /#/
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: "/note",
      component: Note,
      name: "show and edit note",
    },
    {
      path: "/demo",
      component: Demo,
      children: [
        {
          path: "md_editor",
          component: MDEditor,
        },
        {
          path: "qrcode",
          component: QRCode,
        },
        {
          path: "flick",
          component: Flick,
        },
        {
          path: "crop",
          component: Crop
        }
      ],
    },
    {
      // path: "*",
      // vue-router 4.x
      path: "/:catchall(.*)",
      component: NotFound,
    },
  ],
})

export default router
