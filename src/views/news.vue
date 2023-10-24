<template>
  <main>
    <NavNews class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavNews = defineAsyncComponent(() =>
  import('@/components/pages/news/_nav-news.vue')
);
</script>

<style></style>
