<template>
  <section>
    <div
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img
          class="w-full h-full"
          :src="sukienImg"
          alt="Sự kiện sắp diễn ra img"
        />
      </div>
      <div>
        <h3 class="container text-yellow">
          {{ t('upcoming-events') }}
        </h3>
      </div>
    </div>
  </section>
  <Events :newStatus="'Sắp diễn ra'" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import sukienImg from '@/assets/images/su-kien-sap-dien-ra.jpeg';
const Events = defineAsyncComponent(() => import('./events.vue'));
const { t } = useI18n();
</script>

<style scoped></style>
