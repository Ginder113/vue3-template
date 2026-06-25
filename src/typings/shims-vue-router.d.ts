import 'vue-router'

// 扩展路由元信息类型
declare module 'vue-router' {
  interface RouteMeta {
    /** 查询参数 */
    query?: Record<string, string>
  }
}
