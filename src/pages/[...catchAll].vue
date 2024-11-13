<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError({ error: 'Page ot found', customCode: 404 })
</script>

<template>
  <AppErrorPage />
</template>
