import { defineStore } from "pinia"
import router from "../router/index"

const routes = router.options.routes // 拿到路由表

const useMenuStore = defineStore("menu", {
  state: () => ({
    routes: routes,
    sidebars: [],
  }),
})

export default useMenuStore
