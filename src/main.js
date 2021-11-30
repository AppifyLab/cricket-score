import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*custom common methods*/
import common from './common';
Vue.mixin(common);
//import axios from 'axios'
window.axios = require('axios');
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  routes: []
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')