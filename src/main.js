import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
// import axios from "@/backend/axios";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { securedAxiosInstance, plainAxiosInstance } from "@/backend/axios";

Vue.config.productionTip = false;
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
});

new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
