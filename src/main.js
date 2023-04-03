import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@/assets/Css/index.css";
import router from "./Router";
import pinia from "./Store";
// import "amfe-flexible";
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
