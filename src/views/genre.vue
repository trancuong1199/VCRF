<template>
  <main>
    <NavGenre class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const NavGenre = defineAsyncComponent(() =>
  import('@/components/pages/genre/_nav-genre.vue')
);
</script>

<style scoped></style>
