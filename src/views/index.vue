<script setup lang="ts">
import { useTestStore } from '@/stores'

const testStore = useTestStore()

interface Feature {
  title: string
  desc: string
  icon: string
  tag: string
  tagType: 'success' | 'primary' | 'warning' | 'info'
  bgColor: string
  link: string
}

const features = reactive<Feature[]>([
  {
    title: '响应式布局',
    desc: '基于 Element Plus 的栅格系统，适配桌面端与移动端，开箱即用。',
    icon: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z',
    tag: 'Layout',
    tagType: 'primary',
    bgColor: '#ecf5ff',
    link: 'https://element-plus.org/zh-CN/component/layout.html'
  },
  {
    title: '状态管理',
    desc: '使用 Pinia 进行全局状态管理，支持持久化存储，开发体验流畅。',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    tag: 'Pinia',
    tagType: 'warning',
    bgColor: '#fdf6ec',
    link: 'https://pinia.vuejs.org/'
  },
  {
    title: '类型安全',
    desc: '全量 TypeScript 支持，配合 vue-tsc 类型检查，减少运行时错误。',
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.43-2.86 8.52-7 9.64V3.18z',
    tag: 'TypeScript',
    tagType: 'info',
    bgColor: '#f0f5ff',
    link: 'https://www.typescriptlang.org/'
  },
  {
    title: '工程化配置',
    desc: '集成 ESLint + Prettier 代码规范，Sass 预处理器，自动导入等。',
    icon: 'M19.14 12.94a7.07 7.07 0 0 0 .06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a6.93 6.93 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z',
    tag: 'Tooling',
    tagType: 'success',
    bgColor: '#f0f9eb',
    link: 'https://vite.dev/'
  }
])

const handleCardClick = (item: Feature) => {
  window.open(item.link, '_blank')
}
</script>

<template>
  <div class="welcome-page">
    <div class="welcome-content">
      <!-- Logo -->
      <div class="logo-wrapper">
        <div class="logo-icon">
          <span class="logo-v">V</span>
          <span class="logo-e">E</span>
        </div>
      </div>

      <!-- Title -->
      <h1 class="welcome-title">{{ testStore.name }}</h1>
      <p class="welcome-subtitle">基于 Vue 3 + Element Plus + TypeScript 构建</p>

      <!-- Quick Actions -->
      <div class="actions">
        <el-button type="primary" size="large" round>
          <template #icon>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </template>
          快速开始
        </el-button>
        <el-button size="large" round plain @click="testStore.name = 'Hello Vue 3!'">
          重置
        </el-button>
      </div>

      <!-- Feature Cards -->
      <el-row :gutter="24" class="feature-grid">
        <el-col :xs="24" :sm="12" :md="6" v-for="(item, index) in features" :key="index">
          <el-card shadow="hover" class="feature-card" @click="handleCardClick(item)">
            <div class="card-icon" :style="{ backgroundColor: item.bgColor }">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path :d="item.icon" />
              </svg>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.desc }}</p>
            <el-tag size="small" :type="item.tagType" effect="plain" class="card-tag">
              {{ item.tag }}
            </el-tag>
          </el-card>
        </el-col>
      </el-row>

      <!-- Footer links -->
      <div class="footer-links">
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3 文档</a>
        <span class="dot">·</span>
        <a href="https://element-plus.org/" target="_blank" rel="noopener">Element Plus</a>
        <span class="dot">·</span>
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
        <span class="dot">·</span>
        <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a>
      </div>

      <p class="footer-tip">
        在 <code>src/views/index.vue</code> 开始你的项目
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

.welcome-content {
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logo */
.logo-wrapper {
  margin-bottom: 24px;
}

.logo-icon {
  display: flex;
  gap: 4px;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
}

.logo-v {
  color: var(--el-color-primary);
  text-shadow: 0 2px 12px rgba(64, 158, 255, 0.3);
}

.logo-e {
  color: var(--el-color-success);
  text-shadow: 0 2px 12px rgba(103, 194, 58, 0.3);
}

/* Titles */
.welcome-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--el-text-color-primary);
  margin: 0 0 12px;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 16px;
  color: var(--el-text-color-secondary);
  margin: 0 0 36px;
  line-height: 1.5;
}

/* Actions */
.actions {
  display: flex;
  gap: 16px;
  margin-bottom: 56px;
}

/* Feature Grid */
.feature-grid {
  width: 100%;
  margin-bottom: 48px;
}

.feature-card {
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border-radius: 12px;
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-4px);
  }

  :deep(.el-card__body) {
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-color-primary);
  margin-bottom: 16px;
  flex-shrink: 0;

  svg {
    width: 26px;
    height: 26px;
  }
}

.card-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 8px;
  line-height: 1.4;
}

.card-desc {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 14px;
  line-height: 1.6;
}

.card-tag {
  margin-top: auto;
}

/* Footer */
.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: var(--el-color-primary);
    text-decoration: none;
    font-size: 14px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.75;
      text-decoration: underline;
    }
  }

  .dot {
    color: var(--el-border-color);
  }
}

.footer-tip {
  font-size: 13px;
  color: var(--el-text-color-placeholder);
  margin: 0;

  code {
    background-color: var(--el-fill-color-light);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 13px;
    color: var(--el-color-primary);
  }
}
</style>
