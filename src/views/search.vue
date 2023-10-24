<template>
  <main>
    <SearchList />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const SearchList = defineAsyncComponent(() =>
  import('@/components/pages/search/_search-list.vue')
);
</script>

<style></style>
