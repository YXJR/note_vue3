<template>
  <div
    class="main-left"
    v-if="isShowSidebars"
  >
    <el-menu
      :default-active="0"
      :router="true"
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
export default {

  setup () {
    function handleSelect (index) {
    }
    return {
      handleSelect,
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
