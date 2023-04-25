import { createRouter, createWebHistory } from "vue-router"
import { routerHooks } from "../util/hooks.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/summary",
      name: "summary",
      component: () => import("../views/Summary.vue"),
      meta: {
        title: "Vue3概述",
      },
      children: [
        {
          path: "s",
          meta: {
            title: "s",
          },
        },
      ],
    },
    {
      path: "/newfunc",
      name: "newfunc",
      meta: {
        title: "Vue3新的变化",
      },
      component: () => import("../views/NewFunction.vue"),
      children: [
        {
          path: "lifecycle",
          name: "lifecycle",
          meta: {
            title: "lifecycle",
          },
        },
        {
          path: "refs",
          name: "refs",
          meta: {
            title: "refs",
          },
        },
      ],
    },
    {
      path: "/comsitionApi",
      name: "comsitionApi",
      meta: {
        title: "composition API",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompositionApi.vue"),
    },
  ],
})
for (let i in routerHooks) {
  router.beforeEach(routerHooks[i])
}

export default router
