import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"
import NotFound from "../pages/NotFound.vue"
// demo
import Demo from "../demo/Index.vue"
import MDEditor from "../demo/MDEditor.vue"
import QRCode from "../demo/QRCode.vue"
import Flick from "../demo/Flick.vue"
import Crop from "../demo/Crop.vue"
import Dashboard from "../pages/Dashboard.vue"
import Note from "../pages/Note.vue"
import SignIn from "../pages/SignIn.vue"
import SignUp from "../pages/SignUp.vue"
import ForgetPwd from "../pages/ForgetPwd.vue"
import UserCenter from "../pages/UserCenter.vue"
import ToSign from "../pages/ToSign.vue"


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
      path: "/sign_up",
      component: SignUp
    },
    {
      path: "/forget_pwd",
      component: ForgetPwd
    },
    {
      path: "/user_center",
      component: UserCenter
    },
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
