import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    }
  ]
})

export const setupRouter = async (app: App) => {
  app.use(router)
  await router.isReady()
}
