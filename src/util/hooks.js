import { getSidebar } from "../util/index.js"
import useMenuStore from "../store/index.js"

const routerHooks = {
  set_sidebar: (to, from) => {
    let sidebars = getSidebar(to.path)
    useMenuStore().$patch({ sidebars: sidebars })
  },
}

export { routerHooks }
