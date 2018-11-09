import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import router from './router'; //專門編寫ROUTER路徑用

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');