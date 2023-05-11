import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import Cookies from "js-cookie"

import "./assets/main.scss"
import store from "./store/index.js"

import Prism from "prismjs"
import "prismjs/components/prism-markup.min.js"
import "prismjs/themes/prism-okaidia.css"
import "prismjs/plugins/toolbar/prism-toolbar.min.js"
import "prismjs/plugins/toolbar/prism-toolbar.css"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css"

//import "vue-markdown/dist/vue-markdown.css"
//import VueMarkdown from "vue-markdown"

const app = createApp(App)

app.use(store).use(router).use(ElementPlus)

app.mount("#app")
