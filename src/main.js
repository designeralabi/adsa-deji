import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./style.css";
import LoadScript from "vue-plugin-load-script";
import VueVideoPlayer from "@videojs-player/vue"
import 'video.js/dist/video-js.css'

const app = createApp(App);

app.use(router);
app.use(LoadScript)
app.use(VueVideoPlayer)

app.mount("#app");
