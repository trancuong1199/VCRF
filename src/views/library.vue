<template>
  <main>
    <NavLibrary class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavLibrary = defineAsyncComponent(() =>
  import('@/components/pages/library/_nav-library.vue')
);
</script>

<style></style>
