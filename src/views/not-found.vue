<template>
  <main>
    <ErrPage />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const ErrPage = defineAsyncComponent(() =>
  import('@/components/structure/not-found-page/_not-found.vue')
);
</script>

<style scoped>
main {
  min-height: auto;
}
</style>
