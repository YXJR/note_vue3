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
    name: "summary",
    component: () => import("../views/Summary.vue"),
    meta: {
      title: "Vue3概述",
    },
  },

  {
    path: "/response",

    meta: {
      title: "响应式",
      hasChild: true,
    },
    component: () => import("../views/Response.vue"),
    children: [
      {
        path: "",
        name: "responseBase",
        meta: {
          title: "响应式实现",
        },
        component: () => import("../components/Respones/Index.vue"),
      },
      {
        path: "ref",
        name: "ref",
        meta: {
          title: "ref/toRef/toRefs",
        },
        component: () => import("../components/Respones/Ref.vue"),
      },
    ],
  },

  {
    path: "/family",
    name: "family",
    meta: {
      title: "全家桶相关",
      // hasChild: true,
    },
    component: () => import("../views/Family.vue"),
    // children: [
    //   {
    //     path: "VueRouter",
    //     name: "setup",
    //     meta: {
    //       title: "setup",
    //     },
    //     component: () => import("../components/Setup.vue"),
    //   },

    //   {
    //     path: "lifecycle",
    //     name: "lifecycle",
    //     meta: {
    //       title: "生命周期",
    //     },
    //     component: () => import("../components/LifeCycles.vue"),
    //   },
    // ],
  },
]
export default routes
