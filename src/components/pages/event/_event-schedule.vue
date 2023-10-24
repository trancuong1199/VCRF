<template>
  <section>
    <div
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img
          class="w-full h-full"
          v-lazy="lichsukienImg"
          alt="Lịch sự kiện img"
        />
      </div>
      <div>
        <h3 class="container text-yellow">
          {{ t('event-schedule') }}
        </h3>
      </div>
    </div>
  </section>
  <section>
    <ul class="flex justify-between text-[12px] tablet:text-2xl uppercase">
      <li
        class="w-1/2"
        :class="currSlide === 'event-schedule' ? 'active' : ''"
        @click="changeSlides('event-schedule')"
      >
        {{ t('event-schedule') }}
      </li>
      <li
        class="w-1/2"
        :class="currSlide === 'all-events' ? 'active' : ''"
        @click="changeSlides('all-events')"
      >
        {{ t('all-events') }}
      </li>
    </ul>
  </section>
  <section>
    <transition name="slide-translate" mode="out-in">
      <Calendar v-if="currSlide === 'event-schedule'"/>
      <Events v-else-if="currSlide === 'all-events'"/>
    </transition>
  </section>
</template>
<script setup>
import { defineAsyncComponent, ref, watch } from 'vue';
import lichsukienImg from '@/assets/images/lich-su-kien.jpeg';
import { useI18n } from 'vue-i18n';
const Calendar = defineAsyncComponent(() => import('./calendar.vue'));
const Events = defineAsyncComponent(() => import('./events.vue'));
const { t } = useI18n();
const currSlide = ref('event-schedule');
const changeSlides = (event) => {
  currSlide.value = event;
};
watch(currSlide.value, (newVal) => {
  currSlide.value = newVal;
});
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
  border-bottom: 5px solid #539DDB;
  color: #539DDB;
}
.active {
  border-bottom: 5px solid #539DDB;
  color: #539DDB;
}
</style>
