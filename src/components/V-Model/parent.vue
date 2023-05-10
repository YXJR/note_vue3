<template>
  <div>
    <p>父组件：名字：{{name}},年龄:{{age}}</p>
    <Child
      v-model:name="name"
      v-model:age="age"
    />
  </div>
</template>

<script>
import Child from "./child.vue"
import { reactive, toRefs } from "vue"
export default {
  components: { Child },
  setup () {
    const info = reactive({
      name: "Adele",
      age: '20'
    })

    return toRefs(info)
  }
}
</script>

<style lang="scss" scoped>
</style>