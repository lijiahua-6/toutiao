import Vue from 'vue' // 引入vue
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/register-vant.js' // 加载执行注册模块
// 注册需要的组件 先引入过来

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
