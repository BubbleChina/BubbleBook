import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router"
import NotFound from "../pages/NotFound.vue"
import Dashboard from "../pages/Dashboard.vue"
import Note from "../pages/Note.vue"
import SignIn from "../pages/SignIn.vue"
import UserCenter from "../pages/UserCenter.vue"
import ToSign from "../pages/ToSign.vue"
// demo
import Index from "../demo/Index.vue"
import FullScreen from "../demo/FullScreen.vue"
import Drag from "../demo/Drag.vue"
import Table from "../demo/Table.vue"
import Fetch from "../demo/Fetch.vue"
import QRCode from "../demo/QRCode.vue"
import Crop from "../demo/Crop.vue"
import Loading from "../demo/Loading.vue"
import Calendar from "../demo/Calendar.vue"
import UploadFile from "../demo/UploadFile.vue"

const router = createRouter({
  // hash router /#/
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // component: window.localStorage.getItem("token") ? Dashboard : ToSign,
      component: Dashboard
    },
    {
      path: "/sign_in",
      component: SignIn
    },
    {
      path: "/user_center",
      component: UserCenter
    },
    {
      path: "/note",
      component: Note,
      name: "show and edit note"
    },
    {
      // path: "*",
      // vue-router 4.x
      path: "/:catchall(.*)",
      component: NotFound
    },
    {
      path: "/demo",
      component: Index,
      children: [
        {
          path: "drag",
          component: Drag
        },
        {
          path: "full_screen",
          component: FullScreen
        },
        {
          path: "table",
          component: Table
        },
        {
          path: "crop",
          component: Crop
        },
        {
          path: "fetch",
          component: Fetch
        },
        {
          path: "qrcode",
          component: QRCode
        },
        {
          path: "loading",
          component: Loading
        },
        {
          path: "calendar",
          component: Calendar
        },
        {
          path: "upload_file",
          component: UploadFile
        }
      ]
    }
  ]
})

export default router
