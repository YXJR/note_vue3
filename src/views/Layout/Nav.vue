<template>
  <el-menu
    :default-active="activeMenu"
    class="nav-list"
    mode="horizontal"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item
      class="nav-list-item"
      v-for="(value,idx) in routes"
      @click="handleClick(value.path)"
      :index="value.path"
      :key="idx"
    >{{value.meta.title}}</el-menu-item>
  </el-menu>
</template>

<script>
import { computed } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

export default {
  setup () {
    const router = useRouter()
    let { routes } = router.options
    const store = useStore()

    const activeMenu = computed(() => store.state.activeMenu)

    function handleClick (path) {
    }
    function handleSelect (index) {
      store.commit("SET_ACTIVEMENU", index)
    }

    return {
      routes,
      handleSelect,
      handleClick,
      activeMenu
    }
  },

}
</script>

<style lang="scss" scoped>
.nav-list {
  &-item {
    width: 128px;
  }
}
</style>