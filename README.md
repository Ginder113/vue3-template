# mail-vue

基于 Vue 3 项目模板。

## 技术栈

| 技术 | 用途 |
|------|------|
| [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) | 渐进式前端框架 |
| [Vite 6](https://vite.dev/) | 构建工具 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Element Plus 2](https://element-plus.org/) | UI 组件库 |
| [Pinia 3](https://pinia.vuejs.org/) | 状态管理 |
| [Vue Router 4](https://router.vuejs.org/) | 路由管理 |
| [Axios](https://axios-http.com/) | HTTP 请求 |
| [VueUse](https://vueuse.org/) | 组合式工具库 |
| [Sass](https://sass-lang.com/) | CSS 预处理器 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:3001）
npm run dev

# 构建测试环境
npm run build:test

# 构建生产环境
npm run build:production

# 预览构建结果
npm run preview
```

## 项目结构

```
mail-vue
├── build                     # Vite 构建配置
│   └── plugins
│       ├── index.ts          # 插件入口
│       └── auto-import.ts    # 自动导入配置
├── public
│   └── favicon.ico
├── src
│   ├── constants             # 常量配置
│   │   ├── index.ts
│   │   ├── config.ts         # 全局配置
│   │   └── element.ts        # Element Plus 配置
│   ├── directives            # 全局指令
│   │   ├── index.ts
│   │   ├── directive.ts
│   │   └── typings
│   ├── hooks                 # 组合式函数
│   │   └── index.ts
│   ├── router                # 路由配置
│   │   └── index.ts
│   ├── stores                # Pinia 状态管理
│   │   ├── index.ts
│   │   └── test
│   ├── styles                # 全局样式
│   │   ├── index.scss
│   │   ├── reset.scss
│   │   ├── var.scss
│   │   ├── animation.scss
│   │   └── element
│   ├── typings               # TypeScript 类型声明
│   │   ├── element-plus.d.ts
│   │   └── shims-vue-router.d.ts
│   ├── views                 # 页面组件
│   │   └── index.vue         # 首页
│   ├── App.vue               # 根组件
│   └── main.ts               # 应用入口
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 功能特性

- **自动导入** — Vue API 和 Element Plus 组件自动导入，无需手动 import
- **类型安全** — 全量 TypeScript 支持，配合 vue-tsc 类型检查
- **代码规范** — ESLint + Prettier 统一代码风格
- **CSS 变量主题** — 使用 Element Plus CSS 变量，支持暗色模式
- **状态持久化** — Pinia 集成 pinia-plugin-persistedstate
- **请求代理** — Vite 本地代理配置，支持腾讯地图 API 等跨域场景
- **按需加载** — 组件按需导入，生产构建自动 Tree Shaking

## 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run build:production` | 类型检查 + 生产构建 |
| `npm run build:test` | 类型检查 + 测试环境构建 |
| `npm run build:test-only` | 跳过类型检查，直接构建测试环境 |
| `npm run preview` | 预览构建结果 |
| `npm run type-check` | TypeScript 类型检查 |
| `npm run lint` | ESLint 代码检查并自动修复 |
| `npm run format` | Prettier 格式化代码 |

## 环境变量

项目支持 `.env`、`.env.development`、`.env.production`、`.env.test` 等多环境配置。

支持的变量：

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `BASE_URL` | 应用基础路径 | `/` |

## 许可

[MIT](LICENSE)
