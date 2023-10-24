<template>
  <main>
    <NavMember class="hidden tablet:block" />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavMember = defineAsyncComponent(() =>
  import('@/components/pages/member/_nav-member.vue')
);
</script>

<style></style>
