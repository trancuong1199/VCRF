<template>
  <section
    class="container my-8 h-full flex flex-col tablet:flex-row justify-center tablet:justify-between items-center"
  >
    <div class="flex flex-col justify-center items-center tablet:items-start">
      <h3 class="text-4xl">404</h3>
      <h4 class="text-4xl">Ooops!</h4>
      <p class="w-[329px] text-[#797979]">
        {{ t('not-found') }}
      </p>
      <div class="my-16">
        <button @click="router.push({ name: 'Home' })">
          {{ t('back-home') }}
        </button>
      </div>
    </div>
    <div>
      <img v-lazy="notFoundImg" alt="not found img" />
    </div>
  </section>
</template>

<script setup>
import notFoundImg from '@/assets/images/404.png';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter();
const { t } = useI18n();
</script>

<style scoped>
button {
  width: 180px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #ffde2f;
}
</style>
