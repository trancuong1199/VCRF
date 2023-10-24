<template>
  <section>
    <div class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center">
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="memberImg" alt="member img" />
      </div>
      <div>
        <h3 class="text-[26px] tablet:text-[48px] text-center text-lightYellow">
          {{ t(`${currSlide}`) }}
        </h3>
      </div>
    </div>
  </section>
  <section>
    <ul class="flex justify-between text-[10px] tablet:text-xl font-bold uppercase">
      <li class="w-1/3 title" :class="currSlide === 'athletes' ? 'active' : ''" @click="changeSlides('athletes')">
        {{ t('athletes') }}
      </li>
      <li class="w-1/3 title" :class="currSlide === 'coach' ? 'active' : ''" @click="changeSlides('coach')">
        {{ t('coach') }}
      </li>
      <li class="w-1/3 title" :class="currSlide === 'referees' ? 'active' : ''" @click="changeSlides('referees')">
        {{ t('referees') }}
      </li>
    </ul>
  </section>
  <section class="container mt-16 mb-5">
    <!-- <transition name="slide-translate" mode="out-in"> -->
    <AthletesPreview v-if="currSlide === 'athletes'" />
    <CoachPreview v-else-if="currSlide === 'coach'" />
    <RefereesPreview v-else-if="currSlide === 'referees'" />
    <!-- </transition> -->
  </section>
  <div class="container mb-20"> 
    <ul class="flex w-full">
      <li class="w-[30%] flex justify-center font-bold border-r-2 border-gray500 p-5">Họ và tên</li>
      <li class="w-[17%] flex justify-center font-bold border-r-2 border-gray500 p-5">Ngày sinh</li>
      <li class="w-[17%] flex justify-center font-bold border-r-2 border-gray500 p-5">Quê quán</li>
      <li class="w-[17%] flex justify-center font-bold border-r-2 border-gray500 p-5">Môn thể thao</li>
      <li class="w-[17%] flex justify-center font-bold border-r-2 border-gray500 p-5">Đơn vị</li>
    </ul>
    <div class="result">
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul>
      <ul class="flex w-full">
        <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Nguyen Van A</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10/10/2002</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Rowing</li>
        <li class="w-[17%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Don vi</li>
      </ul> 
    </div>
  </div>
  <div class="btn view-more flex justify-center mb-10">
    <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
  </div>
</template>

<script setup>
import memberImg from '@/assets/images/van-dong-vien.jpeg';
import { defineAsyncComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const AthletesPreview = defineAsyncComponent(() =>
  import('@/components/preview/_athletes-preview.vue')
);
const CoachPreview = defineAsyncComponent(() =>
  import('@/components/preview/_coach-preview.vue')
);
const RefereesPreview = defineAsyncComponent(() =>
  import('@/components/preview/_referees-preview.vue')
);
const { t } = useI18n();
const currSlide = ref('athletes');
const changeSlides = (slide) => {
  currSlide.value = slide;
};
</script>

<style scoped>
.title {
  cursor: pointer;
  padding: 25px 0 12px 0;
  display: flex;
  justify-content: center;
  transition: all 0.2s linear;
}

.title:hover {
  border-bottom: 5px solid var(--lightBlue);
  color: var(--lightBlue);
}

.active {
  border-bottom: 5px solid var(--lightBlue);
  color: var(--lightBlue);
}
</style>
