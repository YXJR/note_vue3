import { getSidebar, isShowSidebars, isFirstRoute } from "../util/index.js"
import store from "../store/index.js"

const routerHooks = {
  // 获取sidebars
  SET_SIDEBAR: (to, from) => {
    // 修正点击子路由时sidebar无数据的状况
    let path = to.redirectedFrom ? to.redirectedFrom.path : to.path
    let sidebars = getSidebar(path)
    if (sidebars) {
      store.commit("SET_SIDEBARS", sidebars)
    }
  },
  // 是否展示sidebars
  IS_SHOW_SIDEBAR: (to) => {
    let path = to.redirectedFrom ? to.redirectedFrom.path : to.path
    let flag = isShowSidebars(path)
    store.commit("SET_ISSHOWSIDEBARS", flag)
  },
}

export { routerHooks }
