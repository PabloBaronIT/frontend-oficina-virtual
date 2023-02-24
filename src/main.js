import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { plugin, defaultConfig } from "@formkit/vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "@formkit/themes/genesis";

import "bootstrap-icons/font/bootstrap-icons.css";
createApp(App).use(plugin, defaultConfig).use(store).use(router).mount("#app");
