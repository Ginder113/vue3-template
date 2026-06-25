import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

/** 自动导入函数 */
export const setupAutoImport = () => {
  return AutoImport({
    // 自动导入
    imports: ['vue'],
    // 自动导入目录
    dirs: ['element-plus'],
    // 解析器
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    // ts文件生成路径
    dts: path.resolve('./src/typings', 'auto-import-function.d.ts'),
    // 开启 Vue 模板中的自动导入
    vueTemplate: true
  })
}

/** 自动导入组件 */
export const setupComponents = () => {
  return Components({
    // 自动导入目录
    dirs: ['src/components/layout', 'src/components/common'],
    // 解析器
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    // 同时扫描 .tsx 文件中的组件
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    // 生成组件类型声明
    dts: path.resolve('./src/typings', 'auto-import-component.d.ts')
  })
}
