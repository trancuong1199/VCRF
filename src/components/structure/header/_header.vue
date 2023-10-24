<template>
  <header
    class="flex h-[56px] tablet:h-[160px] justify-between items-center tablet:items-stretch border-b border-textBlue overflow-hidden"
  >
    <div class="order-2 tablet:order-1">
      <LogoBanner />
    </div>
    <div
      class="oder-1 tablet:order-2 tablet:w-full flex flex-row-reverse tablet:flex-col"
    >
      <div class="block tablet:hidden">
        <div
          class="w-[56px] h-[56px] tablet:hidden flex justify-center items-center cursor-pointer"
          @click="handleShow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
              fill="black"
            />
          </svg>
        </div>
        <div v-if="showNavMobile">
          <NavBannerMobile @handleShow="handleShow" />
        </div>
      </div>
      <div class="hidden tablet:block">
        <SearchBanner />
        <NavBanner />
      </div>
    </div>
    <div class="order-3 block tablet:hidden">
      <LangBanner />
    </div>
  </header>
</template>

<script setup>
import NavBanner from './components/_nav-banner.vue';
import LogoBanner from './components/_logo-banner.vue';
import SearchBanner from './components/_search-banner.vue';
import LangBanner from './components/_lang-banner.vue';
import NavBannerMobile from './components/_nav-banner-mobile.vue';
import { ref } from 'vue';

const showNavMobile = ref(false);
const handleShow = () => {
  showNavMobile.value = !showNavMobile.value;
};
</script>

<style></style>
