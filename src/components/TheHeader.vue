<script setup lang="ts">
const endDate = new Date('2023-12-31T07:00:00.000Z')
</script>

<template>
  <div class="sticky top-0">
    <div class="pt-4">
      <div class="">Let's read</div>
      <div class="text-3xl">The Book of Mormon</div>
    </div>
    <div class="py-4">
      <div><span class="font-bold">Finish by:</span> {{ endDate.toDateString() }}</div>
    </div>
  </div>
</template>
