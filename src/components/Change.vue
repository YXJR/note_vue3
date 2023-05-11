<template>
  <div class="change">
    <div class="title padding-top-15">vue3的变化:</div>
    <ul class="change-main">
      <li class="head_blue">
        Vue3劫持数据采用了proxy,Vue2劫持数据使用的是defineProperty.defineProperty有性能问题和缺陷；
        具体见：响应式
      </li>
      <li>
        <ul>
          <span class="subTitle head_blue"> Vue3中对模板编译进行了优化,编译时生成了Block tree,可以对子节点的动态进行收集.可以减少比较,采用了patchFlag标记动态节点</span>
          <li class="head_blue padding-left-15">编译模板时，动态节点做标记</li>
          <li class="head_blue padding-left-15">标记，分为不同得类型，如TEXT PROPS</li>
          <li class="head_blue padding-left-15">diff算法时，可以区分静态节点，以及不同类型得动态节点</li>
          <li class="head_blue padding-left-15"> <a
              href="https://template-explorer.vuejs.org/"
              target="blank"
            >前往测试</a> </li>
        </ul>

      </li>
      <li class="head_blue">
        使用createApp创建一个应用,
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
                //创建于main.js
                import { createApp } from 'vue'
                createApp({
                  data() {
                    return {
                      count: 0
                    }
                  }
                }).mount('#app')
            </code>
        </pre>
      </li>
      <li class="head_blue">
        v-model得使用：代码见 src/components/V-Model
        <Parent class="padding-15" />
      </li>
      <li class="head_blue">
        emits属性使用变更
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
             //父组件上需要绑定 @onSayHello = " sayHello "
             //子组件
             export default {
                props:{
                    msg:String
                },
                emits:["sayHello"],
                setup( props, { emits } ){
                    emits("sayHello","bbb")
                }
             }
            </code>
        </pre>
      </li>
      <li class="head_blue">
        Vue3采用compositionApi进行组织功能,解决了反复横跳,优化复用的逻辑(mixin带来的数据来源不清晰,命名冲突等),相比optionsApi类型推断更加方便;<br />
        compositionApi最佳实践示例：src/components/BestUse
      </li>
      <li class="head_blue">
        组合式API入口函数: setup(props,context){ } context暴露出4个可使用的组件对象,attrs,slots,emit,expose；通过组合的方式，把零散在各个data，methods的代码，重新组合，一个功能的代码都放在一起维护，并且这些代码可以单独拆分成函数 。
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
                export default {
                    setup(props, context) {   // setup(props,{attrs,slots,emit,expose})
                      // 透传 Attributes（非响应式的对象，等价于 $attrs）
                      console.log(context.attrs)
                  
                      // 插槽（非响应式的对象，等价于 $slots）
                      console.log(context.slots)
                  
                      // 触发事件（函数，等价于 $emit）
                      console.log(context.emit)
                  
                      // 暴露公共属性（函数）
                      console.log(context.expose)    
                      return{
                      }
                    }
                  }
                /*
                *  TIPS:
                *    setup函数和其他得composition API中没有this
                *    可以通过getCurrentInstance获取当前实例
                *    若使用Options API 可照常使用this
                */
            </code>
        </pre>
      </li>
      <li class="head_blue">
        片段:一个根节点下可以包含多个组件
        <pre class="shiki material-theme-palenight">
            <code class="language-markup line-numbers" data-prismjs-copy="Copy">
                {{fragment}}
            </code>
        </pre>
      </li>
      <li class="head_blue">
        异步组件得定义
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
              import { createApp, defineAsyncComponent } from "vue"
              createApp({
                AsyncComponent: defineAsyncComponent( () => import( "./components/AsyncComponent.vue" ) )
              })
            </code>
        </pre>
      </li>
      <li class="head_blue">
        移除filter
      </li>
      <li class="head_blue">
        新增Teleport组件
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
             {{teleportFragment}}
            </code>
        </pre>
      </li>
      <li class="head_blue">
        新增Suspense组件
        <pre class="shiki material-theme-palenight">
            <code class="language-js line-numbers" data-prismjs-copy="Copy">
             {{teleportFragment}}
            </code>
        </pre>
      </li>
      <li>
        <ul>
          <span class="subTitle head_blue">CSS部分：</span>
          <li class="head_blue padding-left-15"> 变量驱动css，通过v-bind绑定setup函数变量</li>
          <li class="head_blue padding-left-15"> vue2中深度选择器 >>> ,/deep/,::v-deep都被弃用了。（原因：scoped）如果想要在当前组件内其他组件的样式采用:deep(.className){}</li>
          <li class="head_blue padding-left-15"> 插槽内容样式规则：提供了:slotted(.className)的语法，这样在子组件内控制插槽内容的css样式</li>
        </ul>
      </li>
      <li>
        <ul>
          <span class="subTitle head_blue">新的语法：</span>
          <li class="head_blue padding-left-15">
            computed以前是一个对象，现在改成了一个函数；watch也是
            <pre class="shiki material-theme-palenight">
                <code class="language-js line-numbers" data-prismjs-copy="Copy">
                    //创建一个只读的计算属性ref( 响应式 ref 对象)
                    const count = ref(1)
                    const plusOne = computed(() => count.value + 1)
                    console.log(plusOne.value) // 2

                    //创建一个可写的计算属性ref( 响应式 ref 对象)
                    const count = ref(1)
                    const plusOne = computed({
                        get: () => count.value + 1,
                        set: (val) => {
                            count.value = val - 1
                        }
                    })
                    plusOne.value = 1
                    console.log(count.value) // 0

                    //计算属性的调试
                    const plusOne = computed(() => count.value + 1, {
                        onTrack(e) {
                          // 当 count.value 被追踪为依赖时触发
                          debugger
                        },
                        onTrigger(e) {
                          // 当 count.value 被更改时触发
                          debugger
                        }
                      })
                      
                      // 访问 plusOne，会触发 onTrack
                      console.log(plusOne.value)
                      
                      // 更改 count.value，应该会触发 onTrigger
                      count.value++
                </code>
            </pre>
            <pre class="shiki material-theme-palenight">
                <code class="language-js line-numbers" data-prismjs-copy="Copy">
                    //watch():侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
                    watch(source, callback, {
                        flush: 'post',
                        onTrack(e) {
                          debugger
                        },
                        onTrigger(e) {
                          debugger
                        }
                      })

                    //侦听一个ref；如果侦听的是一个响应式的对象，侦听器会自动启用深层模式
                    const count = ref(0)
                    watch(count, (count, prevCount) => {
                          /* ... */
                    })

                    //当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值：
                    watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
                        /* ... */
                    })

                    /**
                    * 当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发；
                    * 如果你想让回调在深层级变更时也能触发，你需要使用 { deep: true } 强制侦听器进入深层级模式。
                    * 在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象
                    */
                    const state = reactive({ count: 0 })
                    watch(
                        () => state,
                        (newValue, oldValue,onCleanup) => {
                            // newValue === oldValue
                        },
                        { 
                            deep: true , //是否是深层监听
                            immediate:true, // 立即执行回调函数
                            flush: 'post', // 当你更改了响应式状态，它可能会同时触发 Vue 组件更新和侦听器回调;默认回调函数在Vue组件更新前调用，访问的也是更新前的DOM，如果想要访问更新之后的DOM，需要指定flush: 'post'
                            onTrack(e) {
                                debugger
                            },
                            onTrigger(e) {
                                debugger
                            }
                        }
                    )
                
                    // 停止监听器：
                    const stop = watch(source, callback)
                    stop()


                    // 副作用清理：
                    watch(id, async (newId, oldId, onCleanup) => {
                        const { response, cancel } = doAsyncWork(newId)
                        // 当 `id` 变化时，`cancel` 将被调用，
                        // 取消之前的未完成的请求
                        onCleanup(cancel)
                        data.value = await response
                    })
                /*
                 * tips:
                 * onCleanup:一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求。
                 * 在 setup() 或 script setup中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止
                 * 一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。如下方这个例子：
                 */

                 import { watchEffect } from 'vue'
                 // 它会自动停止
                 watchEffect(() => {})

                 // ...这个则不会！
                 setTimeout(() => {
                 watchEffect(() => {})
                 }, 100)
                </code>
            </pre>
            <pre class="shiki material-theme-palenight">
                <code class="language-js line-numbers" data-prismjs-copy="Copy">
                    /*
                     * watchEffect()：侦听器的回调使用与源完全相同的响应式状态是很常见的。
                     * 例如下面的代码，在每当 todoId 的引用发生变化时使用侦听器来加载一个远程资源
                     * 侦听器两次使用todoId，一次是作为源，另一次是在回调中。
                    */ 

                    const todoId = ref(1)
                    const data = ref(null)

                    watch(todoId, async () => {
                    const response = await fetch(
                        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
                    )
                    data.value = await response.json()
                    }, { immediate: true })
               
                    // 用watchEffect 函数 来简化上面的代码
                    watchEffect(async ( onCleanup ) => {
                        const response = await fetch(
                          `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
                        )
                        data.value = await response.json()
                    })
                    
                    // 副作用的清除
                    watchEffect(async (onCleanup) => {
                        const { response, cancel } = doAsyncWork(id.value)
                        // `cancel` 会在 `id` 更改时调用
                        // 以便取消之前
                        // 未完成的请求
                        onCleanup(cancel)
                        data.value = await response
                    })

                    /*  
                    * TIPS:
                    *  watchEffect()：更适合监听多个数据源；或者侦听一个嵌套数据结构中的几个属性
                    *
                    *  watch和watchEffect的区别：
                    *  watch只有设置了immediate属性为true,才会在页面初始化的时候去执行函数，watchEffect则是立即执行函数；
                    *  watchEffect无法获取修改后的数据及上一次的值；只要引用了响应式的变量，变量发生改变了就会触发watchEffect
                   */ 
                </code>
            </pre>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Code from "../components/Code.vue"
import Parent from "../components/V-Model/parent.vue"
export default {
  components: {
    Code,
    Parent
  },
  setup () {

    return {
      fragment: `<template>
                    <div>组件1</div>
                    <div>组件2</div>
                 </template>`,
      teleportFragment: `
                 <button @click="modalOpen = true">open full screen modal ( with teleport )</button>
                 <teleport to="body">
                    <div v-if="modalOpen" class="modal">
                        <div>
                            teleport 弹框（父元素是body）   
                            <button @click="modalOpen = false"> close </button>
                        </div>
                    </div>
                 </teleport>
        `,
      suspenseFragment: `
                
                 <Suspense>

                    <template>
                       <Test1 />   <!-- 这是一个异步组件 -->
                    </template>

                    <!-- #fallback 就是一个具名插槽，即Suspense组件内部，有2个slot，其中一个具名为fallback -->
                    <template #fallback>
                        Loading...
                    </template>
                 </Suspense>
        `

    }
  },
  mounted () {
    Prism.highlightAll()
  },
}
</script>

