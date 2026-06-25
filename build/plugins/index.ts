import type { PluginOption } from 'vite'
import { setupAutoImport, setupComponents } from './auto-import'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export const setupVitePlugins = (): PluginOption[] => {
  const plugins: PluginOption[] = [
    // Vue 插件
    vue(),
    // Vue JSX 插件
    vueJsx(),
    // 扩展浏览器自带的 Vue DevTools 功能
    vueDevTools(),
    // 自动导入函数
    setupAutoImport(),
    // 自动导入组件
    setupComponents()
  ]

  return plugins
}
