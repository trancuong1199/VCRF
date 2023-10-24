<template>
  <section class="h-[184px] tablet:h-[680px] text-white">
    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="slide in carouselSlides" :key="slide.id">
        <div v-show="currentSlide === slide.id" class="slide">
          <div class="slide-info">
            <img
              class="w-full h-full"
              v-lazy="slide.imgUrl"
              :alt="`slide images ${slide.imgUrl}`"
            />
          </div>
          <div class="absolute w-full h-full -z-10">
            <img
              class="w-full h-full"
              v-lazy="linearImg"
              :alt="`slide images`"
            />
          </div>
          <div
            class="container h-full flex flex-col justify-center items-start gap-[20px] mt-20"
          >
            <h1 class="2/3">
              {{ slide.name }}
            </h1>
            <button class="my-[20px] btn btn-view-more">
              {{ t('view-more') }}
            </button>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
import Carousel from './carousel/carousel.vue';
import Slide from './carousel/slide.vue';
import defaultImg from '@/assets/images/_Banner.png';
import linearImg from '@/assets/images/linear.png';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const carouselSlides = [
  {
    id: 1,
    imgUrl: defaultImg,
    name: 'JUNE 2023: RAPHAEL AHUMADA IRELAND',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis sit risus ipsum cursus nulla fringilla risus vitae et. Vitae sapien odio tristique.Lorem ipsum dolor sit amet consectetur. Turpis sit risus ipsum cursus nulla fringilla risus vitae et. Vitae sapien odio tristique.',
  },
  {
    id: 2,
    imgUrl: defaultImg,
    name: 'JUNE 2024: RAPHAEL AHUMADA',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis sit risus ipsum cursus nulla fringilla risus vitae et. Vitae sapien odio tristique.',
  },
  {
    id: 3,
    imgUrl: defaultImg,
    name: 'JUNE 2025: RAPHAEL AHUMADA IRELAND',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis sit risus ipsum cursus nulla fringilla risus vitae et. Vitae sapien odio tristique.Lorem ipsum dolor sit amet consectetur. Turpis sit risus ipsum cursus nulla fringilla risus vitae et. Vitae sapien odio tristique.',
  },
];
</script>

<style scoped>
.carousel {
  position: relative;
  height: 100%;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.slide-info {
  background: linear-gradient(
    90deg,
    rgba(16, 86, 184, 0.9) 0%,
    rgba(56, 113, 193, 0.2) 52.08%,
    rgba(56, 113, 193, 0) 99.48%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -20;
}
</style>
