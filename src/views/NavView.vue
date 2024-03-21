<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar />
    <div class="pt-16 px-4">
      <slot />
    </div>
  </div>
</template>
