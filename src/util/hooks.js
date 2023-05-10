import { getSidebar, isShowSidebars } from "../util/index.js"
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
  IS_SHOW_SIDEBAR: (to) => {
    let flag = isShowSidebars(to.path)
    store.commit("SET_ISSHOWSIDEBARS", flag)
  },

  RESET_MENU: (to) => {
    //store.commit("SET_ACTIVEMENU", to.path)
  },
}

export { routerHooks }
