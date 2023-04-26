import { getSidebar } from "../util/index.js"
import routes from "../router/routes"
import store from "../store/index.js"

const routerHooks = {
  SET_SIDEBAR: (to, from) => {
    let sidebars = getSidebar(to.path, routes)
    store.commit("SET_SIDEBARS", sidebars)
  },
}

export { routerHooks }
