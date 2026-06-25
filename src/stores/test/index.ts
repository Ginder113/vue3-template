import { defineStore } from 'pinia'

export const useTestStore = defineStore(
  'test',
  () => {
    const name = ref('Hello Vue 3!')

    return {
      name
    }
  },
  {
    persist: true
  }
)
