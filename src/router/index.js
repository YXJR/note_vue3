import { createRouter, createWebHistory } from "vue-router"
import { routerHooks } from "../util/hooks.js"
import routes from "../router/routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

for (let i in routerHooks) {
  router.beforeEach(routerHooks[i])
}

export default router
