import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import { setupVitePlugins } from './build/plugins'
import { loadEnv } from 'vite'

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
    test: {
      environment: 'happy-dom',
      globals: true
    }
  }
})
