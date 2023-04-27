<template>
  <div
    class="main-left"
    v-if="isShowSidebars"
  >
    <el-menu
      :default-active="0"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item
        class="nav-list-item"
        v-for="(value,idx) in sidebars"
        :index="value.path"
      >{{value.meta.title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>


import { computed } from "vue"
import { mapState } from "vuex"
import { useRoute, useRouter } from "vue-router"
export default {

  setup () {
    let route = useRoute()
    let router = useRouter()

    function handleSelect (path) {
      //拼接子路由完整路径
      let toPath = `${route.fullPath}/${path}`
      router.push({
        path: toPath
      })
    }
    return {
      handleSelect,
    }
  },
  computed: mapState(["sidebars", "isShowSidebars"]),
  beforeRouteEnter (to, from, next) {
    console.log(to)
  }

}
</script>

<style lang="scss" >
.el-menu {
  border: none !important;
}
</style>
