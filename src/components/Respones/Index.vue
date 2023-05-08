<template>
  <div>
    <div class="title"> Object.defineProperty得缺点：</div>
    <ul>
      <li
        class="head_blue"
        v-for="(value,index) in shortcoming"
        :key="index"
      >{{value}}</li>
    </ul>
  </div>
  <div>
    <div class="title"> Proxy得基本使用：</div>
    <pre class="shiki material-theme-palenight">
        <code class="language-js line-numbers" data-prismjs-copy="Copy">
                const proxyData = new Proxy(data,{
                   get( target, key, receiver ){
                    const result = Reflect.get( target, key, receiver )
                    console.log("get",key)
                    return result  //返回结果
                   },
                   set( target, key, receiver ){
                    const result = Reflect.set( target, key, receiver )
                    console.log("set", key)
                    console.log("result", result)
                    return result  // 是否设置成功
                   },
                   deleteProperty( target, key ){
                     const result = Reflect.deleteProperty( target, key )
                     console.log( "delete property", key )
                     console.log( "result", result )
                     return result  // 是否删除成功
                   }
                })
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  setup () {
    let shortcoming = [
      '深度监听需要一次性得递归',
      '无法监听新增/删除属性（Vue.set Vue.delete）',
      ' 无法原生监听数组，需要特殊得处理'
    ]

    return {
      shortcoming
    }
  },
  mounted () {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
</style>