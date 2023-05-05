<template>
  <ul>
    <li ref="eleRef">
      <span class="head_blue"> ref demo :{{state.name}}, {{ageRef}}</span>
      <ul class="padding-left-15">
        <li class="head_blue">
          <span>如下实现代码：</span>
          <pre
            class="shiki material-theme-palenight"
            style="padding-left:0"
          >
                      <code class="language-js line-numbers" data-prismjs-copy="Copy">
                          setup () {
                              /*
                              * 接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value
                              * 可用于模板和reactive
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

  </ul>
</template>

<script>
import { ref, reactive, onMounted } from "vue"

export default {
  name: 'Ref',
  setup () {
    const nameRef = ref("Adele")
    const ageRef = ref(20)
    const state = reactive({
      name: nameRef
    })

    const eleRef = ref(null)

    setTimeout(() => {
      ageRef.value = 25
      nameRef.value = "Bob"
    }, 1500);

    onMounted(() => {
      console.log(`ref template`, eleRef.value.innerHTML, eleRef.value);
    })
    return {
      ageRef,
      state,
      eleRef
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