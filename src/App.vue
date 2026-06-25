<script setup lang="ts">
import { ELEMENT_CONFIG } from '@/constants'
</script>

<template>
  <el-config-provider v-bind="ELEMENT_CONFIG">
    <router-view />
  </el-config-provider>
</template>
