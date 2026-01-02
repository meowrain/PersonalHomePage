import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import 'uno.css';
import { FontAwesomeIcon } from './plugins/fontawesome';

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
