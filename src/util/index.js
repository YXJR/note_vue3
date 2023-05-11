import routes from "../router/routes"
/**
 * 默认路由嵌套2级
 * @path 即将跳转的路径
 * @routes 路由表
 * @returns 获取即将跳转至的路径下的sideBars
 */
function getSidebar(path) {
  let sideBars
  routes.forEach((element) => {
    if (element.path == path) {
      sideBars = element.children
    }
  })
  return sideBars
}

let showHasNoChildRoutes = routes.filter((route) => !route.meta.hasChild)
function isShowSidebars(toPath) {
  let flags = false
  flags = showHasNoChildRoutes.every((item) => toPath !== item.path)
  return flags
}
/**
 * 清除缓存
 */
function resetInfo() {
  localStorage.removeItem("activeMenu")
  localStorage.removeItem("activeSubMenu")
  localStorage.removeItem("isShowSidebars")
  localStorage.removeItem("sidebars")
}

/**
 * 检测当前是否是一级路由
 * @param {当前得路径} path
 */

function isFirstRoute(path) {
  if (path.indexof("/") > -1) {
    //如果大于-1就是一级
    return true
  } else {
    return false
  }
}

export { getSidebar, isShowSidebars, resetInfo, isFirstRoute }
