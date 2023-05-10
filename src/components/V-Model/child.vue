<template>
  <div>
    子组件：
    姓名：<input
      :value="name"
      @input="$emit('update:name',$event.target.value)"
    />
    年龄：<input
      :value="age"
      @input="$emit('update:age',$event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    age: String
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>