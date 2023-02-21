import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"
import Note from "../pages/Note.vue"
import NotFound from "../pages/NotFound.vue"

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
      // path: "*",
      // vue-router 4.x
      path: "/:catchall(.*)",
      component: NotFound,
    },
  ],
})

export default router
