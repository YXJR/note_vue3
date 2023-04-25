import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import "./assets/main.scss"
const app = createApp(App)

import { createPinia } from "pinia"
const pinia = createPinia()

app.use(pinia).use(router).use(ElementPlus)

app.mount("#app")
