<template>
  <div>
    鼠标位置： {{x}},{{y}}
  </div>
</template>

<script>
import useMousePosition from "./index"
export default {
  setup () {
    const { x, y } = useMousePosition()
    return {
      x, y
    }
  }
}
</script>

<style lang="scss" scoped>
</style>