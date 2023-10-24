<template>
  <section>
    <div
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="memberImg" alt="member img" />
      </div>
      <div class="">
        <h3 class="text-[26px] tablet:text-[48px] text-center text-lightYellow">
          {{ t('organization') }}
        </h3>
      </div>
    </div>
  </section>
  <section class="container my-16">
    <OrganizationPreview />
  </section>
  <div class="btn view-more flex justify-center mb-20">
      <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
    </div>
</template>

<script setup>
import memberImg from '@/assets/images/van-dong-vien.jpeg';
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
const OrganizationPreview = defineAsyncComponent(() =>
  import('@/components/preview/_organization-preview.vue')
);
const { t } = useI18n();
</script>

<style scoped>
li {
  cursor: pointer;
  padding: 25px 0 12px 0;
  display: flex;
  justify-content: center;
  transition: all 0.2s linear;
}
li:hover {
  border-bottom: 5px solid rgba(255, 222, 47, 1);
  color: rgba(255, 222, 47, 1);
}
.active {
  border-bottom: 5px solid rgba(255, 222, 47, 1);
  color: rgba(255, 222, 47, 1);
}
</style>
