<template>
  <div class="h-full">
    <section
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="tintucImg" alt="Tin tức img" />
      </div>
      <div>
        <h3 class="text-[26px] tablet:text-[48px] text-center text-lightYellow">
          {{ t('domestic') }}
        </h3>
      </div>
    </section>
    <section class="container my-16">
      <DomesticList />
    </section>
    <div class="btn view-more flex justify-center mb-20">
      <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
    </div>
  </div>
</template>

<script setup>
import tintucImg from '@/assets/images/tin-tuc.jpeg';
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
const DomesticList = defineAsyncComponent(() => import('./_domestic-list.vue'));
const { t } = useI18n();
</script>

<style></style>
