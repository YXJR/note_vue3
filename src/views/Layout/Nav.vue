<template>
  <el-menu
    :default-active="0"
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
      :index="value.path"
    >{{value.meta.title}}</el-menu-item>
  </el-menu>
</template>

<script>
import { useRouter } from "vue-router"
export default {
  setup () {
    const router = useRouter()
    let { routes } = router.options
    function handleSelect (index, indexPath) {
      //路由跳转
    }
    return {
      routes,
      handleSelect
    }
  }
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