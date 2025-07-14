import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

// 导入样式
import './assets/css/reset.min.css'
import './assets/css/bootstrap.min.css'
import 'wow.js/css/libs/animate.css'

// 导入 JS
import './assets/js/bootstrap.min.js'

// 创建应用
createApp(App).use(router).mount('#app')

