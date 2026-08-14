import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build/plugins/index'
import { setupViteBuild } from './build/build'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL || '/',
    plugins: setupVitePlugins(env),
    build: setupViteBuild(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/global/index.scss" as *;
            @use "@/styles/element/index.scss" as *;
          `,
          silenceDeprecations: ['import']
        }
      }
    },
    server: {
      host: '0.0.0.0', // 允许所有设备访问
      port: 3001, // 可以选择自定义端口
      strictPort: true // 如果端口被占用，则停止启动
    }
  }
})
