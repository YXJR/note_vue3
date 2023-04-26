import { createStore } from "vuex"
import { reactive } from "vue"

const store = createStore({
  state() {
    return {
      sidebars: [],
    }
  },
  mutations: {
    SET_SIDEBARS(state, payload) {
      state.sidebars = payload
    },
  },
})

export default store
