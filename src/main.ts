import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugins } from "./plugins";
import { Icon } from "@iconify/vue";
import "./plugins/vee-validate";

//Emitter config
import mitt from "mitt";
const Emitter = mitt();

import VueApexCharts from "vue3-apexcharts";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import "./assets/main.css";

plugins(app);

app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.provide("Emitter", Emitter);
app.component("Icon", Icon);

app.mount("#app");
