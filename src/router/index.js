import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login' // 引入路由

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login', // 模块地址
    name: 'login',
    // @ 是 src 目录的别名，这是 VueCLI 项目中特殊的提供的
    component: () => import('@/views/login') // 页面模块  //按需加载
  },
  {
    path: '/', // 模块地址
    // 有默认子路由的不需要配置name
    // name:'tab-bar'
    name: 'tab-bar',
    // @ 是 src 目录的别名，这是 VueCLI 项目中特殊的提供的
    component: () => import('@/views/tab-bar'), // 页面模块  //按需加载
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home') // 组件
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import('@/views/user')
  }
]

const router = new VueRouter({
  routes
})

export default router
