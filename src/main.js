import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "virtual:windi.css";
// import "element-plus/dist/index.css";
import "./styles/theme.css";
import "./styles/element/index.scss";

createApp(App).use(store).use(router).mount("#app");
