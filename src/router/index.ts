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
