import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      sidebars: JSON.parse(localStorage.getItem("sidebars")) || [],
      isShowSidebars: localStorage.getItem("isShowSidebars") || false,
      activeMenu: localStorage.getItem("activeMenu") || "/",
      activeSubMenu: localStorage.getItem("activeSubMenu"),
    }
  },
  mutations: {
    SET_SIDEBARS(state, payload) {
      state.sidebars = payload
      localStorage.setItem("sidebars", JSON.stringify(payload))
    },
    SET_ISSHOWSIDEBARS(state, payload) {
      state.isShowSidebars = payload
      localStorage.setItem("isShowSidebars", payload)
    },
    SET_ACTIVEMENU(state, payload) {
      state.activeMenu = payload
      localStorage.setItem("activeMenu", payload)
    },
    SET_ACTIVESUBMENU(state, payload) {
      state.activeSubMenu = payload
      localStorage.setItem("activeSubMenu", payload)
    },
  },
})

export default store
