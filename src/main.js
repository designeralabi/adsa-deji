import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./style.css";
import LoadScript from "vue-plugin-load-script";

const app = createApp(App);

app.use(router);
app.use(LoadScript)

app.mount("#app");
