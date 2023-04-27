<template>
  <div class="main-left">
    <ul>
      <li
        v-for="(val,index) in sidebars"
        :key="index + 's'"
      >{{val.meta.title}}</li>
    </ul>
  </div>
</template>

<script>


import { computed } from "vue"
import { mapState } from "vuex"
export default {
  computed: mapState(["sidebars"])
}
</script>

<style lang="scss" scoped>
</style>
