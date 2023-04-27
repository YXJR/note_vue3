import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      sidebars: [],
      isShowSidebars: true,
    }
  },
  mutations: {
    SET_SIDEBARS(state, payload) {
      state.sidebars = payload
    },
    SET_ISSHOWSIDEBARS(state, payload) {
      state.isShowSidebars = payload
    },
  },
})

export default store
