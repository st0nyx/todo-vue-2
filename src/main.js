import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "@/backend/axios"
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

new Vue({
  router,
  axios,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
