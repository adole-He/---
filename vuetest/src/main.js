import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
require('./mock/mock')
require('./mock/charts')
require('./mock/table')
require('./mock/monitor')

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
