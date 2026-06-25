import type { App } from 'vue'
import * as directives from './directive'
export const setupDirectives = (app: App) => {
  for (const [, item] of Object.entries(directives)) {
    app.directive(item.name, item.directive)
  }
}
