import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-message.css'
import '@/styles/index.scss'

import { setupDirectives } from '@/directives'
import { setupRouter } from './router'
import { setupStore } from './stores'
import App from './App.vue'

const app = createApp(App)

;(async () => {
  // 注册pinia
  setupStore(app)
  // 注册路由
  await setupRouter(app)

  // 挂载根组件
  app.mount('#app')

  // 注册全局指令
  setupDirectives(app)
})()
