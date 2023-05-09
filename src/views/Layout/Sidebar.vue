<template>
  <div
    class="main-left"
    v-if="isShowSidebars"
  >
    <el-menu
      :default-active="activeSubMenu"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >

      <el-menu-item
        class="nav-list-item"
        v-for="(route,idx) in sidebars"
        :index="route.path"
        @click="handleClick(route)"
        :key="idx"
      >
        {{route.meta.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>

import { computed } from "vue"
import { mapState, useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
export default {

  setup () {
    let router = useRouter()
    let route = useRoute()
    let store = useStore()
    let activeSubMenu = computed(() => store.state.activeSubMenu)

    function handleClick () {
      store.commit("SET_ACTIVESUBMENU", route.path)
      console.dir(route.path)

    }
    function handleSelect (route) {
      router.push({
        name: route.name
      })
    }
    return {

      handleSelect,
      handleClick,
      activeSubMenu
    }
  },
  computed: mapState(["sidebars", "isShowSidebars"]),
}
</script>

<style lang="scss" >
.el-menu {
  border: none !important;
}
</style>
