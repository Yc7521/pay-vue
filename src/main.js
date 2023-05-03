import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "virtual:windi.css";
// import "element-plus/dist/index.css";
import "./styles/theme.css";
import "./styles/element/index.scss";
import "element-plus/theme-chalk/dark/css-vars.css";

// if you're using CDN, please remove this line.
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.use(store).use(router).mount("#app");
