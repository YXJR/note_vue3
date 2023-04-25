import useMenuStore from "../store/index.js"

/**
 * @path 即将跳转的路径
 * @returns 获取即将跳转的sideBars
 */
function getSidebar(path) {
  const routes = JSON.parse(JSON.stringify(useMenuStore()))["routes"]
  let sideBars
  if (!path) {
    //给一个默认值
    sideBars = routes[0].children
  } else {
    routes.forEach((element) => {
      if (element.path == path) {
        sideBars = element.children
      }
    })
  }
  return sideBars
}

export { getSidebar }
