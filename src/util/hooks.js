import { getSidebar } from "../util/index.js"
import store from "../store/index.js"

const routerHooks = {
  SET_SIDEBAR: (to, from) => {
    let sidebars = getSidebar(to.path)
    store.commit("SET_SIDEBARS", sidebars)
  },
}

export { routerHooks }
