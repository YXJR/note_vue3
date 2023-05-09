<template>
  <el-menu
    default-active="0"
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
      @click="handleClick(idx)"
      :index="value"
      :key="idx"
    >{{value.meta.title}}</el-menu-item>
  </el-menu>
</template>

<script>
import { getCurrentInstance, ref } from "vue"
import { useRouter } from "vue-router"
import { mapState, useStore } from "vuex"
export default {
  setup () {
    const router = useRouter()
    let { routes } = router.options
    const store = useStore()
    const instance = getCurrentInstance()

    function handleClick (index) {
      store.commit("SET_ACTIVEMENU", index)
    }

    function handleSelect (index, indexPath, item) {

    }
    return {
      routes,
      handleSelect,
      handleClick,
    }
  },
  computed: {
    ...mapState(["activeMenu"])
  },
}
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  justify-content: flex-start;
  padding-right: 120px;
  list-style: none;
  text-align: center;
  font-weight: bold;
  color: #333;
  &-item {
    width: 128px;
  }
}
</style>