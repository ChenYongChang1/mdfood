import { createApp } from "vue";
import "@/assets/css/reset.scss";
import router from "./router/index";
import i18n from "@/lang/index";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
