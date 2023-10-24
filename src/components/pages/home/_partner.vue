<template>
  <section class="container flex flex-col gap-[40px]">
    <div class="flex justify-between">
      <div></div>
      <h2>{{ t('partner') }}</h2>
      <div class="flex">
        <arrow-right-ic @click="prev()" class="mr-10 arrowLeftPartner"/>
        <arrow-left-ic @click="next()" class="arrowRightPartner"/>
      </div>
    </div>
    <div>
      <Carousel :breakpoints="breakpoints">
        <Slide v-for="partner in partnerData" :key="partner.id">
          <img class="partner img w-[300px] h-[120px]" :key="partner?.id" v-lazy="partner?.image" :alt="partner?.name" />
          <template #addons>
            <Navigation />
          </template>
        </Slide>
      </Carousel>
      <div class="flex justify-center my-8">
        <div class="progress progress-hover"></div>
        <div class="progress"></div>
        <div class="progress"></div>
      </div>
    </div>
    <!-- <transition name="slide-translate" mode="out-in">
      <div
        v-if="!loadingPartners"
        class="flex justify-between items-center flex-wrap gap-[10px] tablet:gap-[40px]"
      >
        <img
          class="partner img w-[100px] tablet:w-[200px] h-[100px] tablet:h-[200px] rounded-full object-contain"
          v-for="partner in fakeData"
          :key="partner?.id"
          v-lazy="partner?.image"
          :alt="partner?.name"
        />
      </div>
    </transition> -->
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import getPartners from '@/composables/getPartners.js';
import arrowLeftIc from '@/assets/icons/arrow-left.vue';
import arrowRightIc from '@/assets/icons/arrow-right.vue';
const { t } = useI18n();
const activeSlide = ref(1);
const { partners, total, loadingPartners, fetchDataPartners, loadMore } =
  getPartners(4);
onMounted(async () => {
  await fetchDataPartners();
});
const partnerData = [{ image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vietnam_Television_logo_from_2013.svg/1200px-Vietnam_Television_logo_from_2013.svg.png' }, { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vietnam_Television_logo_from_2013.svg/1200px-Vietnam_Television_logo_from_2013.svg.png' }, { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vietnam_Television_logo_from_2013.svg/1200px-Vietnam_Television_logo_from_2013.svg.png' }, { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vietnam_Television_logo_from_2013.svg/1200px-Vietnam_Television_logo_from_2013.svg.png' }]

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

const prev = async () => {
  if (activeSlide.value === 1) {
    return;
  } else {
    activeSlide.value -= 1;
  }
  await loadMore(activeSlide.value);
};
const next = async () => {
  if (activeSlide.value === total.value) {
    return;
  } else {
    activeSlide.value += 1;
  }
  await loadMore(activeSlide.value);
};
</script>

<style scoped></style>
