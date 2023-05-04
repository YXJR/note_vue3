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
    children: [
      {
        path: "", //默认显示这个子路由
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
    path: "/response",
    name: "response",
    meta: {
      title: "响应式",
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
        path: "",
        name: "setup",
        meta: {
          title: "setup",
        },
        component: () => import("../components/Setup.vue"),
      },
      ,
      {
        path: "lifecycle",
        name: "lifecycle",
        meta: {
          title: "生命周期",
        },
        component: () => import("../components/LifeCycles.vue"),
      },
    ],
  },
]
export default routes
