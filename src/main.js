import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
