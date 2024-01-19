import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}

