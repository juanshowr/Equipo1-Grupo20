import Vue from "vue";
import App from "./App.vue";
import appPie from "./appPie.vue"
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  router,
  render: (h) => h(appPie),
}).$mount("#pie");

