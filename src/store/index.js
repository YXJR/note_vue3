import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      sidebars: JSON.parse(localStorage.getItem("sidebars")) || [],
      isShowSidebars:
        JSON.parse(localStorage.getItem("isShowSidebars")) || false,
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
  },
})

export default store
