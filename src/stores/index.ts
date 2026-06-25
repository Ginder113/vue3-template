import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPersistedState)

export const setupStore = (app: App) => app.use(pinia)

export * from './test'
