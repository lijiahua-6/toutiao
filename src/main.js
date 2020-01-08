import Vue from 'vue' // 引入vue
import App from './App.vue'
import router from './router'
import store from './store'

// REM适配，动态设置html 标签字体大小
import 'amfe-flexible'

import './utils/register-vant.js' // 加载执行注册模块

import 'normalize.css' // Normalize.css 只是一个很小的CSS文件

// 一定把我们自己的样式引到第三方组件样式之后  会出现层叠
import './styles/index.less' // 加载全局样式

// 注册需要的组件 先引入过来

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
