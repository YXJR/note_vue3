<template>
  <div>
    {{msg}} 生命周期
  </div>
</template>

<script>
// options API 和 composition API 的方式都是可以用的
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue"
export default {
  props: {
    msg: String
  },
  // setup 整合了beforeCreate 和 created
  setup (props) {
    console.log("setup")
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log("onMounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })
    onMounted(() => {
      console.log("onMounted")
    })
  },
  beforeCreate () {
    console.log("beforeCreate")
  },
  created () {
    console.log("created")
  },
  beforeMount () {
    console.log("beforeMount")
  },
  mounted () {
    console.log("mounted")
  },
  beforeUpdate () {
    console.log("beforeUpdate")
  },
  updated () {
    console.log("updated")
  },
  // beforeDestroy和destroyed改名字了
  beforeUnmount () {
    console.log("beforeUnmount")
  },
  onUnmounted () {
    console.log("onUnmounted")
  },
}
</script>

<style lang="scss" scoped>
</style>