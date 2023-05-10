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
                    //只处理本身（非原型上得）属性
                    const ownKeys = Reflect.ownKeys(target)
                    if(ownKeys.includes(key)){
                        console.log("get",key)
                    }
                    const result = Reflect.get( target, key, receiver )          
                    return result  //返回结果  
                   },

                   set( target, key,val, receiver ){
                    //重复得数据不处理
                    if(val == target[key] ){
                        return true  
                    }
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
                /*
                * Reflect作用：
                * 和Proxy能力一一对应
                * 将在未来一步一步得替代掉Object上得工具函数
                */
        </code>
    </pre>
  </div>
  <div>
    <div class="title"> Proxy实现响应式：</div>
    代码：src/components/Response/proxy-observe.js
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