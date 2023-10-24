<template>
  <main>
    <NavAbout class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavAbout = defineAsyncComponent(() =>
  import('@/components/pages/about/_nav-about.vue')
);
</script>
<style scoped></style>
