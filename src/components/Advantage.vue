<template>
  <div>
    <h3 class="title">Vue3 的优势:</h3>
    <ul class="padding-left-15">
      <li
        class="head_blue"
        v-for="(value,index) in advantages"
        :key="index"
      >{{value}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  setup () {
    let advantages = [
      "性能更好",
      "体积更小",
      "更好的代码组织",
      "更好的逻辑抽离",
      "更多的新的功能",
      "更好的TS支持"
    ]
    return {
      advantages
    }
  }
}
</script>

<style lang="scss" scoped>
</style>