# vue3-template

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

### 从模板创建新项目

```bash
# 使用 degit 克隆（不保留 git 历史）
npx degit Ginder113/vue3-template <新项目名>
cd <新项目名>

# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:3001）
pnpm dev
```

### 可用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:3001）
pnpm dev

# 构建测试环境
pnpm build:test

# 构建生产环境
pnpm build:production

# 预览构建结果
pnpm preview
```

## 项目结构

```
vue3-template
├── build                     # Vite 构建配置
│   ├── build.ts              # 构建输出配置（资源分类、分包）
│   └── plugins
│       ├── index.ts          # 插件入口
│       ├── auto-import.ts    # 自动导入配置
│       └── inject-seo.ts     # SEO 元数据注入
├── public
│   └── favicon.ico
├── src
│   ├── assets                # 静态资源
│   │   └── images
│   ├── components            # 通用组件
│   │   └── common
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
│   ├── layouts               # 布局组件
│   │   └── index.ts
│   ├── plugins               # 插件
│   │   └── index.ts
│   ├── router                # 路由配置
│   │   └── index.ts
│   ├── service               # 请求服务
│   │   ├── api               # API 定义
│   │   │   ├── interface
│   │   │   ├── typings
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── stores                # Pinia 状态管理
│   │   ├── index.ts
│   │   └── test
│   ├── styles                # 全局样式
│   │   ├── global            # 全局 SCSS（自动导入）
│   │   │   ├── index.scss
│   │   │   ├── utils.scss    # 工具函数（vw/em/rem/size）
│   │   │   └── variables.scss
│   │   ├── element           # Element Plus 样式
│   │   │   ├── index.scss
│   │   │   └── reset.scss
│   │   ├── index.scss
│   │   ├── reset.scss
│   │   ├── var.scss
│   │   └── animation.scss
│   ├── typings               # TypeScript 类型声明
│   │   ├── element-plus.d.ts
│   │   ├── global.d.ts
│   │   └── shims-vue-router.d.ts
│   ├── utils                 # 工具函数
│   │   └── index.ts
│   ├── views                 # 页面组件
│   │   └── index.vue         # 首页
│   ├── App.vue               # 根组件
│   └── main.ts               # 应用入口
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

## 功能特性

- **自动导入** — Vue API 和 Element Plus 组件自动导入，无需手动 import
- **类型安全** — 全量 TypeScript 支持，配合 vue-tsc 类型检查
- **代码规范** — ESLint + Prettier 统一代码风格
- **CSS 变量主题** — 使用 Element Plus CSS 变量，支持暗色模式
- **状态持久化** — Pinia 集成 pinia-plugin-persistedstate
- **按需加载** — 组件按需导入，生产构建自动 Tree Shaking
- **SEO 注入** — 构建时根据环境变量注入站点标题、关键词、描述
- **SCSS 工具函数** — 内置 vw/em/rem/size 单位换算与媒体查询 mixin，全局自动可用
- **构建产物分类** — 按 js/css/images/fonts 等分类输出，支持路由懒加载分包

## 可用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本（默认 mode） |
| `pnpm build:development` | 类型检查 + 开发环境构建（`--mode development`） |
| `pnpm build:development-only` | 跳过类型检查，直接构建开发环境 |
| `pnpm build:production` | 类型检查 + 生产环境构建（`--mode production`） |
| `pnpm build:production-only` | 跳过类型检查，直接构建生产环境 |
| `pnpm build:test` | 类型检查 + 测试环境构建（`--mode test`） |
| `pnpm build:test-only` | 跳过类型检查，直接构建测试环境 |
| `pnpm preview` | 预览构建结果 |
| `pnpm type-check` | TypeScript 类型检查 |
| `pnpm lint` | ESLint 代码检查并自动修复 |
| `pnpm format` | Prettier 格式化代码 |

## 环境变量

项目支持 `.env`、`.env.development`、`.env.production`、`.env.test` 等多环境配置。环境变量文件已被 `.gitignore` 忽略，需自行创建（可参考根目录 `.env`）。

支持的变量：

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `BASE_URL` | 应用基础路径 | `/` |
| `VITE_SERVER_URL` | 后端服务器地址 | 空 |
| `VITE_API_URL` | API 请求前缀 | `/api` |
| `VITE_IMAGE_URL` | 图片资源前缀 | `/images` |
| `VITE_SITE_DEFAULT_TITLE` | 站点默认标题（SEO） | 空 |
| `VITE_SITE_DEFAULT_KEYWORDS` | 站点默认关键词（SEO） | 空 |
| `VITE_SITE_DEFAULT_DESCRIPTION` | 站点默认描述（SEO） | 空 |

## 许可

[MIT](LICENSE)
