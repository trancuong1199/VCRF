<template>
  <div class="w-full tablet:w-1/2 flex flex-col justify-between">
    <div>
      <h4 class="text-3xl font-bold">{{ t('contact-information') }}</h4>
    </div>
    <div class="flex flex-col gap-[10px] py-[20px] border-b border-gray">
      <div class="flex justify-start items-center gap-[10px] ml-[-4px]">
        <img v-lazy="homeIc" alt="home icon" />
        <p>36 Trần Phú, Hà Nội, Việt Nam</p>
      </div>
      <div class="flex justify-start items-center gap-[10px]">
        <img v-lazy="basePhoneIc" alt="base phone icon" />
        <p>(84) 4 - 3 7475908</p>
      </div>
      <div class="flex justify-start items-center gap-[10px]">
        <img v-lazy="phoneIc" alt="phone icon" />
        <p>(84) 4 - 3 7475909</p>
      </div>
      <div class="flex justify-start items-center gap-[10px]">
        <img v-lazy="emailIc" alt="email icon" />
        <p>vcrsf@vnn.vn</p>
      </div>
    </div>
    <div class="my-8">
      <img class="object-cover w-full" v-lazy="map" alt="map image" />
    </div>
  </div>
</template>

<script setup>
import homeIc from '@/assets/images/contact/home.png';
import basePhoneIc from '@/assets/images/contact/phone1.png';
import phoneIc from '@/assets/images/contact/phone2.png';
import emailIc from '@/assets/images/contact/email.png';
import map from '@/assets/images/contact/map.png';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style></style>
