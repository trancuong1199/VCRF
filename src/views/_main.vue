<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <suspense>
        <template #default>
          <transition name="slide-translate" mode="out-in">
            <component :is="Component" :key="route.path"> </component>
          </transition>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </suspense>
    </template>
  </router-view>
  <Footer />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import Loading from '@/components/structure/loading/loading.vue';
const Header = defineAsyncComponent(() =>
  import('@/components/structure/header/_header.vue')
);
const Footer = defineAsyncComponent(() =>
  import('@/components/structure/footer/_footer.vue')
);
</script>

<style scoped></style>
