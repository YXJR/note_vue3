/***
 * Proxy实现响应式：
 * 深度监听，性能更好
 * 可监听新增/删除属性
 * 可监听数组得变化
 * 兼容性得问题，无法polyfill
 */

function reactive(target) {
  if (typeof target !== "object" || target == null) {
    // 不是对象或者数组则直接返回
    return target
  }

  //代理配置
  const proxyConf = {
    get(target, key, receiver) {
      //只处理本身（非原型上得）属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log("get", key)
      }
      const result = Reflect.get(target, key, receiver)

      return reactive(result) //返回结果 深度监听

      /**
       *  性能提升得表现：
       *   Vue2中得defineReactive函数是在一开始就递归响应，vue3是在proxy得get中递归响应得，即访问到对象哪一个层级，就递归到对象哪个层级
       */
    },

    set(target, key, val, receiver) {
      //重复得数据不处理
      if (val == target[key]) {
        return true
      }

      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log("已有得属性", key)
      } else {
        console.log("新增得属性", key)
      }

      const result = Reflect.set(target, key, receiver)
      console.log("set", key)
      console.log("result", result)
      return result // 是否设置成功
    },

    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log("delete property", key)
      console.log("result", result)
      return result // 是否删除成功
    },
  }

  //生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

//测试数据
const data = {
  name: "Adele",
  age: 20,
}

const proxyData = reactive(data)
