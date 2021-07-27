import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routes from './router'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false
const router = new VueRouter({ routes }); 
const vm =  new Vue({
  render: h => h(App),
  router
}).$mount('#app')
console.info(vm)