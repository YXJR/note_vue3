import { getSidebar } from "../util/index.js"
import store from "../store/index.js"

const routerHooks = {
  // 获取sidebars
  SET_SIDEBAR: (to, from) => {
    // 修正点击子路由时sidebar无数据的状况
    let sidebars = getSidebar(to.path)
      ? getSidebar(to.path)
      : store.state.sidebars

    store.commit("SET_SIDEBARS", sidebars)
  },
  // 是否展示sidebars
  IS_SHOW_SIDEBAR: (to, from) => {
    console.log()
    let hasChild = getSidebar(to.path) ? true : false
    let flag = !hasChild && to.meta.isFirstLevel
    if (flag) {
      store.commit("SET_ISSHOWSIDEBARS", false)
    } else {
      store.commit("SET_ISSHOWSIDEBARS", true)
    }
  },
}

export { routerHooks }
