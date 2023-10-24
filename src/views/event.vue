<template>
  <main>
    <NavEvent class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavEvent = defineAsyncComponent(() =>
  import('@/components/pages/event/_nav-event.vue')
);
</script>

<style></style>
