import type { Directive } from 'vue'

interface directive {
  name: string
  directive: Directive
}

export const testDirective: directive = {
  name: 'test',
  directive: {
    mounted(el: HTMLElement) {
      console.log(el)
    }
  }
}
