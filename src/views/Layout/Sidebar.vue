<template>
  <div>
    <ul v-if="sidebars.length">
      <li
        v-for="(val,index) in sidebars"
        :key="index + 's'"
      >{{val.meta.title}}</li>
    </ul>
    {{sidebars}}
  </div>
</template>

<script>
import useMenuStore from "../../store/index"
export default {

  setup () {
    const menu = JSON.parse(JSON.stringify(useMenuStore()))
    const sidebars = menu.sidebars
    return {
      sidebars
    }
  }
}
</script>

<style lang="scss" scoped>
</style>