<script >
import LifeCycles from "../components/LifeCycles.vue"
export default {
  components: {
    LifeCycles
  },
  data () {
    return {
      msg: '生命周期',
      Flag: true
    }
  },
  methods: {
    msgHandler () {
      this.msg = "hello,vue3" + Date.now()
    },
    lifeHandler () {
      this.flag = !this.flag
    }
  },

}
</script>

<template>
  <div>
    <LifeCycles
      :msg="msg"
      v-if="Flag"
    />
    <el-button @click="msgHandler">修改生命周期值</el-button>
    <el-button @click="lifeHandler">Flag</el-button>
  </div>
</template>




<style lang="scss" scoped>
</style>