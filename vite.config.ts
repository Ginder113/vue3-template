import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

import { setupVitePlugins } from './build/plugins/index'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL || '/',
    plugins: setupVitePlugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    server: {
      host: '0.0.0.0', // 允许所有设备访问
      port: 3001, // 可以选择自定义端口
      strictPort: true, // 如果端口被占用，则停止启动
      // hmr: false // 关闭热更新
      // 新增：腾讯地图API跨域代理配置
      proxy: {
        // 匹配以 /api/map 开头的请求
        '/api/map': {
          // 目标服务器地址
          target: 'https://apis.map.qq.com',
          // 开启跨域（关键配置）
          changeOrigin: true,
          // 重写路径：去掉 /api/map 前缀
          rewrite: (path) => path.replace(/^\/api\/map/, '')
        }
      }
    }
  }
})
