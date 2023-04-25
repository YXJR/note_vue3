<template>
  <div>
    <ul v-if="sidebarsItems.length">
      <li
        v-for="(val,index) in sidebarsItems"
        :key="index + 's'"
      >{{val.meta.title}}</li>
    </ul>
  </div>
</template>

<script>
import useMenuStore from "../../store/index"
import { reactive } from "vue"
export default {

  setup () {
    let { sidebars } = useMenuStore()
    const sidebarsItems = reactive(sidebars)
    return {
      sidebarsItems
    }
  }
}
</script>

<style lang="scss" scoped>
</style>