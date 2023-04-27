import routes from "../router/routes"
/**
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

export { getSidebar }
