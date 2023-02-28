import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"
import NotFound from "../pages/NotFound.vue"
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
      component: Dashboard,
    },
    {
      path: "/sign_in",
      component: SignIn,
    },
    {
      path: "/sign_up",
      component: SignUp,
    },
    {
      path: "/forget_password",
      component: ForgetPwd,
    },
    {
      path: "/user_center",
      component: UserCenter,
    },
    {
      path: "/note",
      component: Note,
      name: "show and edit note",
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
