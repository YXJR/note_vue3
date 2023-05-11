<template>
  <div
    class="main-left"
    v-if="isShowSidebars"
  >
    <el-menu
      :default-active="activePath"
      background-color="#909399"
      :router="true"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >

      <el-menu-item
        class="nav-list-item"
        v-for="(route,idx) in sidebars"
        :index="`${route.path}`"
        :key="idx"
      >
        {{route.meta ? route.meta.title : ''}}
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>

import { computed, watch, onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
export default {

  setup () {
    let route = useRoute()
    let store = useStore()
    let sidebars = computed(() => store.state.sidebars)
    let isShowSidebars = computed(() => store.state.isShowSidebars)
    let activePath = ref('')
    const activeMenu = computed(() => store.state.activeMenu)
    let activeSubMenu = computed(() => store.state.activeSubMenu)

    function handleSelect (path) {

      store.commit("SET_ACTIVESUBMENU", path)
    }

    onMounted(() => { //fixed - 当侧边菜单激活时赋予初始激活项，同时解决刷新时丢失激活项得问题
      let initPath = ""
      if (sidebars.value && sidebars.value.length) {
        initPath = activeSubMenu.value
      }
      activePath.value = initPath
    })

    watch(() => isShowSidebars.value, () => { //当切换导航菜单时，希望再次点击回到有侧边栏选项时，重置激活选项为第一项
      if (isShowSidebars.value) {
        store.commit("SET_ACTIVESUBMENU", sidebars.value[0].path)
      }
    })

    return {
      handleSelect,
      sidebars,
      isShowSidebars,
      activePath,
    }
  },

}
</script>

<style lang="scss" >
.main-left {
  .el-menu {
    border: none !important;
  }
}
</style>
