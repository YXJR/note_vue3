<template>
  <div class="change">
    <div class="title padding-top-15">vue3的变化:</div>
    <ul class="change-main">
      <li class="head_blue">Vue3劫持数据采用了proxy,Vue2劫持数据使用的是defineProperty.defineProperty有性能问题和缺陷</li>
      <li class="head_blue">Vue3中对模板编译进行了优化,编译时生成了Block tree,可以对子节点的动态进行收集.可以减少比较,并采用了patchFlag标记动态节点</li>
      <li class="head_blue">Vue3采用compositionApi进行组织功能,解决了反复横跳,优化复用的逻辑(mixin带来的数据来源不清晰,命名冲突等),相比optionsApi类型推断更加方便</li>
      <li>
        <ul>
          <template class="subTitle">CSS部分：</template>
          <li class="head_blue"> 变量驱动css，通过v-bind绑定setup函数变量</li>
          <li class="head_blue"> vue2中深度选择器 >>> ,/deep/,::v-deep都被弃用了。（原因：scoped）如果想要在当前组件内其他组件的样式采用:deep(.className){}</li>
          <li class="head_blue"> 插槽内容样式规则：提供了:slotted(.className)的语法，这样在子组件内控制插槽内容的css样式</li>
        </ul>
      </li>
      <li class="head_blue">
        使用createApp创建一个应用
        <Code codes="import { createApp } from 'vue'"></Code>
      </li>
      <li class="head_blue">
        组合式API: setup(props,context){ } context暴露出4个可使用的组件对象,attrs,slots,emit,expose；通过组合的方式，把零散在各个data，methods的代码，重新组合，一个功能的代码都放在一起维护，并且这些代码可以单独拆分成函数 。
      </li>
      <li class="head_blue">
        片段:一个根节点下可以包含多个组件
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
                {{fragment}}
            </code>
        </pre>
      </li>
    </ul>
  </div>
</template>

<script>
import Code from "../components/Code.vue"
export default {
  components: {
    Code,
  },
  setup () {

    return {
      fragment: `<template>
                    <div>组件1</div>
                    <div>组件2</div>
                 </template>`
    }
  },
  mounted () {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
</style>