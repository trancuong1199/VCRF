<template>
  <section class="container flex flex-col gap-[40px]">
    <div class="flex justify-center">
      <h2>{{ t('upcoming-events') }}</h2>
    </div>
    <div>
      <Carousel :breakpoints="breakpoints">
        <Slide v-for="e in eventsData" :key="e.id">
          <EventsPreview :events="e" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="flex justify-center mt-5">
        <div class="progress progress-hover"></div>
        <div class="progress"></div>
        <div class="progress"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import getRelatedEvents from '@/composables/getRelatedEvents.js';
import EventsPreview from '@/components/preview/_events-preview.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { relatedEvents, fetchDataRelated } = getRelatedEvents();
const eventsData = [{ name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }, { name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }, { name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }]
onMounted(async () => {
  await fetchDataRelated();
  console.log(relatedEvents);
});
const { t } = useI18n();
const breakpoints = {
  // 480px and up
  480: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 3,
    snapAlign: 'start',
  },

  
};
</script>

<style scoped>
</style>
