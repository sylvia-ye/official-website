import { createRouter, createWebHashHistory } from 'vue-router'

// 简化的路由配置
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/PageView.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

