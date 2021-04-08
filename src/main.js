import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
import "./main.scss";
import router from './router'
import store from './store'

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
