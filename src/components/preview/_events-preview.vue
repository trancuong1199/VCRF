<template>
  <article
    class="image-slider relative w-[415px] h-[280px] mx-[10px] text-white flex flex-col items-start gap-[20px] rounded-[13px] cursor-pointer"
    @click="() =>
      router.push({
        name: 'UpcomingEventsDetails',
        params: { id: 1 },
      })
      ">
    <div class="absolute w-full h-full -z-10">
      <img class="w-full h-full rounded-[13px]" v-lazy="events?.image || demoImg2" :alt="events?.name" />
    </div>
    <div class="h-full py-[26px] px-[20px] flex flex-col justify-between items-start">
      <div>
        <p class="text-blue text-sm font-bold date-highlights">
          {{ formatDay(events?.dates) }}
        </p>
      </div>
      <div class="flex flex-col items-start gap-[10px]">
        <div>
          <h4 class="min-h-[50px] text-start text-lg tablet:text-[18px]">
            {{
              events?.name.length > 60
              ? events?.name.substring(0, 60) + '...'
              : events?.name
            }}
          </h4>
        </div>
        <div class="flex items-center gap-[5px]">
          <locationIc />
          <h4 class="tablet:text-[13px]">{{ events?.address }}</h4>
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { formatDay } from '@/plugins/date-utils';
import { useRouter } from 'vue-router';
import demoImg2 from '@/assets/images/demo-2.png';
import locationIc from '@/assets/icons/location.vue';
const props = defineProps({
  events: Object,
});
const { t } = useI18n();
const router = useRouter();
</script>

<style scoped>
button::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 57px;
  height: 1px;
  background-color: #3871c1;
}

article::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  background: linear-gradient(180deg, rgba(57, 57, 57, 0) 0%, #3d3d3d 100%);
  z-index: -1;
}

.date-highlights {
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  min-width: 135px;
  padding: 3px 6px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.date-highlights::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  background-color: rgba(254, 204, 48, 1);
}
</style>
