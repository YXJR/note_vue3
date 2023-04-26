import { reactive } from "vue"
/**
 * @path 即将跳转的路径
 * @returns 获取即将跳转的sideBars
 */
function getSidebar(path, routes) {
  let sideBars
  routes.forEach((element) => {
    if (element.path == path) {
      sideBars = element.children
    }
  })

  return sideBars
}

export { getSidebar }
