/**
 *  合成函数一般使用ref或者toRefs得方式实现
 *
 *  Composition API实现逻辑复用步骤：
 *   1.抽离逻辑代码到一个函数
 *   2.函数命名约定为useXxx格式（React Hooks也是）
 *   3.在setup中引用useXxx函数
 */

import { ref, onMounted, onUnmounted } from "vue"
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    console.log("useMousePosition mounted")
    window.addEventListener("mousemove", update)
  })

  onUnmounted(() => {
    console.log("useMousePosition onUnmounted")
    window.removeEventListener("mousemove", update)
  })

  return {
    x,
    y,
  }
}

export default useMousePosition
