<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main class="text-center h-screen max-h-screen w-full flex flex-col overflow-hidden">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </main>
</template>
