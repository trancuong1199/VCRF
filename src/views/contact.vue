<template>
  <main>
    <NavContact class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavContact = defineAsyncComponent(() =>
  import('@/components/pages/contact/_nav-contact.vue')
);
</script>

<style></style>
