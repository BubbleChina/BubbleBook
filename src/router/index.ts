import { createRouter, createWebHistory } from "vue-router"
import Index from "../pages/Index.vue"
import Dashboard from "../pages/Dashboard.vue"
import EditNote from "../pages/Note/EditNote.vue"
import ShowNote from "../pages/Note/ShowNote.vue"
import NotFound from "../pages/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   redirect: window.localStorage.getItem("token") ? "/index" : "/sign_in",
    // },
    // {
    //   path: "/index",
    //   component: Index,
    //   children: [
    //     {
    //       path: "",
    //       component: Dashboard,
    //     },
    //   ],
    // },
    // {
    //   path: "/user_center",
    //   component: Index,
    // },
    {
      path: "/",
      component: ShowNote,
    },
    {
      path: "/edit_note",
      component: EditNote,
    },
    {
      // path:"*",
      // vue-router 4.x
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
})

export default router
