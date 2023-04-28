import store from "../store/index"
//import Layout from "../views/Layout/Layout.vue"
const routes = [
  {
    path: "/",
    component: () => import("../views/Index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/summary",
    component: () => import("../views/Summary.vue"),
    meta: {
      title: "Vue3概述",
      hasChild: true,
    },

    // redirect: "/summary/advantage",
    children: [
      {
        path: "advantage",
        name: "advantage",
        meta: {
          title: "vue3的优势",
        },
        component: () => import("../components/Advantage.vue"),
      },
      {
        path: "change",
        name: "change",
        meta: {
          title: "vue3的变化",
        },
        component: () => import("../components/Change.vue"),
      },
    ],
  },

  {
    path: "/newfunc",
    name: "newfunc",
    meta: {
      title: "Vue3新的功能",
    },
    component: () => import("../views/NewFunction.vue"),
  },

  {
    path: "/compsitionApi",
    meta: {
      title: "composition API",
      hasChild: true,
    },
    component: () => import("../views/CompositionApi.vue"),
    children: [
      {
        path: "lifecycle",
        name: "lifecycle",
        meta: {
          title: "生命周期",
        },
      },
      {
        path: "refs",
        name: "refs",
        meta: {
          title: "响应式:核心",
        },
      },
    ],
  },
]
export default routes
