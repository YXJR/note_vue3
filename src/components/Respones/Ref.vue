<template>
  <ul>
    <li>
      <span class="head_blue title">最佳使用方式：</span>
      <ul class="padding-left-25 margin-top-15">
        <li class="head_blue">
          用reactive做对象得响应式，用ref做值类型得响应式
        </li>
        <li class="head_blue">
          setup中返回toRefs(state),或者toRef(state,'xxx')
        </li>
        <li class="head_blue">
          ref得变量命名都用xxxRef
        </li>
        <li class="head_blue">
          合成函数返回响应式对象的时候，使用toRefs
        </li>
      </ul>
    </li>
    <li ref="eleRef">
      <span class="head_blue title">Ref:接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value</span>
      <ul class="padding-left-25 margin-top-15">
        <li class="head_blue">
          <span>如下实现代码：</span>
          <pre
            class="shiki material-theme-palenight"
            style="padding-left:0"
          >
                      <code class="language-js line-numbers" data-prismjs-copy="Copy">
                          setup () {
                              /*
                                * 值类型不具备响应式，所以需要ref
                                * ref是一个对象，value存储值
                                * 通过.value属性得get和set实现响应式
                                * 可用于模板和reactive；这个时候不需要.value,其他情况都是需要得
                                * 也可以用来获取一个DOM元素
                              */
                              <!-- <li ref="eleRef"> ref demo :{{state.name}}, {{ageRef}}</li>  -->
                              const nameRef = ref("Adele")
                              const ageRef = ref(20)
                              const state = reactive({
                                name: nameRef
                              })
                              setTimeout(() => {
                                ageRef.value = 25
                                nameRef.value = "Bob"
                              }, 1500);
                          
                              return {
                                ageRef,
                                state
                              }
                            }
                      </code>
                  </pre>
        </li>
        <li class="head_blue">
          <span>配合onMounted生命周期获取DOM元素，如下实现代码：</span>
          <pre
            class="shiki material-theme-palenight language-js line-numbers"
            style="padding-left:0"
          >
                        <code data-prismjs-copy="Copy">
                            <!-- <li ref="eleRef"> ref demo :{{state.name}}, {{ageRef}}</li>  -->
                            setup () {
                              const eleRef = ref(null)
                              onMounted(() => {
                                console.log(`ref template`, eleRef.value.innerHTML, eleRef.value);
                              })
                              return {
                                eleRef
                              }
                     },
             </code>
          </pre>
        </li>
      </ul>
    </li>
    <li>
      <span class="head_blue title">toRef:基于响应式对象上的一个属性，创建一个对应的 ref</span>
      <ul class="padding-left-25 margin-top-15">
        <li>
          <pre
            class="shiki material-theme-palenight"
            style="padding-left:0"
          >
                <code class="language-js line-numbers" data-prismjs-copy="Copy">
                    setup () {
                        const state = reactive({
                          name: "Adele",
                          age: 20
                        })
                        
                        /*
                        *  这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。
                        *  toRef如果用于普通对象（非响应式对象），产出的结果也不具备响应式
                        */
                        const ageRef = toRef(state, 'age')
                        return {
                          ageRef
                        }
                    },
                </code>
              </pre>
        </li>
      </ul>
    </li>
    <li>
      <span class="head_blue title">toRefs:将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的</span>
      <ul class="padding-left-25 margin-top-15">
        <li>
          <pre
            class="shiki material-theme-palenight"
            style="padding-left:0"
          >
                  <code class="language-js line-numbers" data-prismjs-copy="Copy">
                     /**
                      * 将响应式对象（reactive封装）转换为普通对象
                      * 对象的每个属性都是对应的ref
                      * 两者保持引用关系
                      * toRefs 在调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，需要改用 toRef。
                     */
                    // 例
                     setup () {
                        const state = reactive({
                          name: "Adele",
                          age: 20
                        })
                        const stateRefs = toRefs(state)
                        return {
                          stateRefs,
                          //...state  如果将state结构返回，state将失去响应式
                        }
                      },
                  </code>
                  <code class="language-js line-numbers" data-prismjs-copy="Copy">
                    // 合成函数返回响应式对象
                    function useFeatureX() {
                        const state = reactive({
                          foo: 1,
                          bar: 2
                        })
                      
                        // ...基于状态的操作逻辑
                      
                        // 在返回时都转为 ref
                        return toRefs(state)
                      }
                      

                      setup () {
                        // 可以解构而不会失去响应性
                        const { foo, bar } = useFeatureX()
                        return {
                            foo, 
                            bar
                        }
                      },
                    
                 </code>
                </pre>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { ref, toRef, toRefs, reactive, onMounted } from "vue"

export default {
  name: 'Ref',
  setup () {
    const state = reactive({
      name: "Adele",
      age: 20
    })
    const stateRefs = toRefs(state)
    return {
      stateRefs,
      //...state  如果将state结构返回，state将失去响应式
    }
  },
  mounted () {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
:deep(pre[class*="language-"].line-numbers) {
  padding-left: -100px !important;
}
</style>