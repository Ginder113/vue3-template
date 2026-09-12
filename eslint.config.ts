import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      // TypeScript 相关规则
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 忽略未使用的变量前缀为 _ 的变量
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭要求明确模块边界类型的规则
      '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 `any` 类型
      '@typescript-eslint/explicit-function-return-type': 'off', // 关闭要求明确函数返回类型的规则
      '@typescript-eslint/no-empty-function': 'warn', // 警告空函数
      '@typescript-eslint/ban-ts-comment': 'off', // 关闭禁止使用 `@ts-` 注释的规则

      // Vue 相关规则
      'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }], // 单行最多允许 3 个属性，多行最多 1 个属性
      'vue/singleline-html-element-content-newline': ['error', { minItems: 1 }], // 单行 HTML 元素的内容至少要有 1 项时换行
      // 'vue/component-name-in-template-casing': ['error', 'PascalCase'], // 强制 Vue 组件名使用 PascalCase
      'vue/no-multiple-template-root': 'off', // 关闭多根模板的限制
      // 'vue/multi-word-component-names': ['off', { ignores: ['index', 'menu'] }], // 警告多单词组件名
      'vue/multi-word-component-names': 'off',

      // 一般 JavaScript 规则
      // 'no-console': 'warn', // 警告使用 `console`
      'no-debugger': 'warn', // 警告使用 `debugger`
      semi: ['error', 'always'], // 强制使用分号
      quotes: ['error', 'single'], // 强制使用单引号
      indent: ['error', 2], // 强制使用 2 个空格进行缩进
      'eol-last': ['error', 'always'], // 强制文件结尾有换行符
      'prefer-const': 'error', // 强制使用 `const` 而非 `let` 或 `var`
      'no-var': 'error', // 禁止使用 `var`
      eqeqeq: ['error', 'always'], // 强制使用全等运算符（`===`）
      complexity: ['error', 16], // 函数复杂度限制，最大允许 16 个分支
      // 'no-duplicate-imports': 'error', // 禁止重复导入
      'no-unsafe-optional-chaining': 'error' // 禁止不安全的可选链（例如 `obj?.prop?.[index]`）
    }
  },

  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/.nuxt/**',
    '**/.output/**',
    '**/node_modules/**'
  ]),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },
  skipFormatting
)
