<template>
  <section>
    <div class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center">
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="ketquaImg" alt="Kết quả thi đấu img" />
      </div>
      <div class="">
        <h3 class="container text-yellow">
          {{ t('competition-results') }}
        </h3>
      </div>
    </div>
    <div class="container">
      <h2 class="text-textBlue flex justify-center uppercase mt-10 mb-5">GIẢI ĐUA THUYỀN CANOEING VÔ ĐỊCH QUỐC GIA 2023
      </h2>
      <div class="flex justify-center items-center mb-10">
        <div class="flex items-center mr-40">
          <img src="@/assets/images/library/map-pin2.png" class="w-5 h-5" />
          <h class="text-[16px] ml-2">Địa điểm tổ chức</h>
        </div>
        <div class="flex items-center">
          <img src="@/assets/images/library/clock2.png" class="w-5 h-5" />
          <h class="text-[16px] ml-2">8:00 Ngày 23 Tháng 11 Năm 2023</h>
        </div>
      </div>
      <div>
        <ul class="flex w-full">
          <li class="w-[10%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('ordinal-number') }}</li>
          <li class="w-[30%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('unit') }}</li>
          <li class="w-[15%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('gold-medal') }}</li>
          <li class="w-[15%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('silver-medal') }}</li>
          <li class="w-[15%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('bronze-medal') }}</li>
          <li class="w-[15%] flex justify-center font-bold border-r-2 border-gray500 p-5">{{ t('rank-organization') }}
          </li>
        </ul>
        <div class="result">
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">3</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">4</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[10%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">6</li>
            <li class="w-[30%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">Ha Noi</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">10</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">5</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">2</li>
            <li class="w-[15%] p-5 flex justify-center border-t-2 border-r-2 border-gray500">1</li>
          </ul>
        </div>
      </div>
      <div class="my-10">
        <div class="flex items-center text-textBlue">
          <img src="@/assets/images/library/file-minus.png" class="w-5 h-5" />
          <h class="text-[16px] ml-2 font-bold">File đính kèm</h>
        </div>
        <p class="underline mt-2">Kết quả thi đấu</p>
        <p class="underline mt-2">Xếp hạng đẳng cấp vận động viên</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import ketquaImg from '@/assets/images/su-kien-sap-dien-ra.jpeg';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.result:last-child {
  border-bottom: 2px solid #DDDDDD;
}
</style>
