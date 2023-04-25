<template>
  <div class="layouts">
    <Nav class="navs" />
    <div class="main">
      <Sidebar class="main-left" />
      <app-main class="main-right" />
    </div>
  </div>
</template>

<script>

import Nav from "./Nav.vue"
import Sidebar from "./Sidebar.vue"
import AppMain from "./AppMain.vue"
export default {
  components: {
    Nav,
    Sidebar,
    AppMain
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>