import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login' // 引入路由

Vue.use(VueRouter)

// 配置路由表
const routes = [{
  path: '/login', // 模块地址
  name: 'login',
  component: () => import('@/views/login') // 页面模块  //按需加载
}]

const router = new VueRouter({
  routes
})

export default router
