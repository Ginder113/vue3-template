import type { BuildOptions } from 'vite'

/**
 * 构建配置
 * @param isSplit 是否分割代码（true 时开启 CSS 代码分割与路由懒加载分包）
 */
export const setupViteBuild = (isSplit = false): BuildOptions => {
  return {
    // 是否开启 CSS 代码分割（false 时所有样式合并为一个 css 文件）
    cssCodeSplit: isSplit,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        // 是否内联所有动态导入（false 时开启路由懒加载分包）
        inlineDynamicImports: !isSplit,
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          const ext = name.split('.').pop()
          // 图片（保留原文件名，不加 hash）
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(name)) {
            return 'images/[name][extname]'
          }
          // 视频
          if (/\.(mp4|webm|ogv|ogg|avi|mov|flv)$/i.test(name)) {
            return 'videos/[name][extname]'
          }
          // 字体
          if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
            return 'fonts/[name][extname]'
          }
          // 样式（打包产出的 css）
          if (ext === 'css') {
            return 'style/[name][extname]'
          }
          // 其他资源
          return 'assets/[name][extname]'
        }
      }
    }
  }
}
