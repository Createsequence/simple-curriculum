import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

// 引入font-awesome
import FA from 'font-awesome/css/font-awesome.min.css';
Vue.use(FA);

//引入主css
require('./assets/css/index.css');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
