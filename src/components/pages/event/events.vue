<template>
  <section class="min-h-[50vh] flex flex-col">
    <div>
      <div class="container py-8 flex justify-between items-center">
        <div class="month flex items-center gap-[20px]">
          <p class="month-year text-2xl font-bold">
            {{ currentDate.toLocaleString('vi-VI', { month: 'long' }) }}
          </p>
          <div class="flex justify-center">
            <div class="btn-month left" @click="previousMonth">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_1268_6645)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.52779 8.47133C5.40281 8.34632 5.3326 8.17678 5.3326 8C5.3326 7.82323 5.40281 7.65369 5.52779 7.52867L9.29912 3.75733C9.36062 3.69366 9.43418 3.64287 9.51552 3.60793C9.59685 3.57299 9.68433 3.5546 9.77285 3.55383C9.86137 3.55307 9.94916 3.56993 10.0311 3.60345C10.113 3.63697 10.1875 3.68648 10.2501 3.74907C10.3126 3.81167 10.3621 3.8861 10.3957 3.96803C10.4292 4.04996 10.4461 4.13775 10.4453 4.22627C10.4445 4.31479 10.4261 4.40227 10.3912 4.4836C10.3562 4.56494 10.3055 4.6385 10.2418 4.7L6.94179 8L10.2418 11.3C10.3632 11.4257 10.4304 11.5941 10.4289 11.7689C10.4274 11.9437 10.3573 12.1109 10.2337 12.2345C10.1101 12.3582 9.94285 12.4283 9.76805 12.4298C9.59326 12.4313 9.42485 12.3641 9.29912 12.2427L5.52779 8.47133Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1268_6645">
                    <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="btn-month right" @click="nextMonth">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_1268_6641)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.4722 7.52867C10.5972 7.65368 10.6674 7.82322 10.6674 8C10.6674 8.17677 10.5972 8.34631 10.4722 8.47133L6.70088 12.2427C6.63938 12.3063 6.56582 12.3571 6.48448 12.3921C6.40315 12.427 6.31567 12.4454 6.22715 12.4462C6.13863 12.4469 6.05084 12.4301 5.96891 12.3965C5.88698 12.363 5.81254 12.3135 5.74995 12.2509C5.68735 12.1883 5.63785 12.1139 5.60433 12.032C5.57081 11.95 5.55394 11.8623 5.55471 11.7737C5.55548 11.6852 5.57387 11.5977 5.60881 11.5164C5.64375 11.4351 5.69454 11.3615 5.75821 11.3L9.05821 8L5.75821 4.7C5.63677 4.57426 5.56958 4.40586 5.5711 4.23106C5.57262 4.05627 5.64273 3.88906 5.76633 3.76545C5.88994 3.64185 6.05715 3.57173 6.23195 3.57022C6.40674 3.5687 6.57515 3.63589 6.70088 3.75733L10.4722 7.52867Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1268_6641">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="relative px-2 text-2xl font-bold cursor-pointer">
          <select class="w-full" v-model="selectedYear" @change="changeYear">
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <img class="absolute top-1 -right-1 -z-10 cursor-pointer" v-lazy="downArrowIc" alt="down arrow ic" />
        </div>
      </div>
    </div>
    <transition name="slide-translate" mode="out-in">
      <div class="px-32">
        <div v-if="eventsData.length">
          <div class="py-8 border-t border-textBlue test" :class="e.status === 'Đã diễn ra' ? 'text-gray' : 'text-black'"
            v-for="e in eventsData" :key="e.pk">
            <div class="container flex justify-between items-center">
              <div class="w-1/3 flex justify-start items-start gap-[10px]">
                <div class="uppercase text-center">
                  <h5 class="text-4xl font-bold">
                    {{ formatDate(e.fields.dates) || '23' }}
                  </h5>
                  <p class="text-lg font-bold">
                    {{ formatDayOfWeek(e.fields.dates) || '2'}}
                  </p>
                </div>
                <div class="mt-4 uppercase">
                  <h5>Tháng {{ formatMonth(e.fields.dates) || '10'}}</h5>
                </div>
              </div>
              <div class="w-2/3">
                <p class="my-4 text-2xl font-bold w-[484px]">{{ e.fields.name }}</p>
                <p class="text-gray">{{ e.fields.address }}</p>
              </div>
              <div class="w-1/3 flex justify-center items-center">
                <button class="w-[180px] h-[56px] text-white bg-textBlue rounded-[30px] font-bold" :class="e.status === 'Đã diễn ra'
                  ? 'result'
                  : e.status === 'Đang diễn ra'
                    ? 'happening'
                    : 'view-detail'
                  " @click="() =>
                    router.push({
                      name: 'UpcomingEventsDetails',
                      params: { id: 1 },
                    })
                  ">
                  {{
                    e.fields.status === 'Đã diễn ra'
                    ? t('view-result')
                    : e.fields.status === 'Đang diễn ra'
                      ? t('happening')
                      : t('view-detail')
                  }}

                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-32" v-else>
          <h3 class="text-6xl text-center font-bold">{{ t('no-events') }}</h3>
        </div>
      </div>
    </transition>
    <div v-if="events.length" class="my-16">
      <VPagination class="flex justify-center items-center" v-model="count" :pages="total" :range-size="0"
        active-color="rgba(26, 30, 34, 1)" @update:modelValue="loadMore(count)" />
    </div>
    <div class="btn view-more flex justify-center my-10">
      <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, reactive, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import downArrowIc from '@/assets/images/down-line.svg';
import getEvents from '@/composables/getEvents.js';
const { t } = useI18n();
const props = defineProps(['newStatus']);
const newStatus = props.newStatus || '';
const router = useRouter();
const eventsData = [{ fields: { name: 'Giải đua thuyền Rowing và Canoeing vô địch trẻ quốc gia 2022', address: 'Hồ Đồng Nghệ , xã Hoà Khương, huyện Hoà Vang' } }, { fields: { name: 'Giải đua thuyền Rowing và Canoeing vô địch trẻ quốc gia 2022', address: 'Hồ Đồng Nghệ , xã Hoà Khương, huyện Hoà Vang' } }, { fields: { name: 'Giải đua thuyền Rowing và Canoeing vô địch trẻ quốc gia 2022', address: 'Hồ Đồng Nghệ , xã Hoà Khương, huyện Hoà Vang' } }, { fields: { name: 'Giải đua thuyền Rowing và Canoeing vô địch trẻ quốc gia 2022', address: 'Hồ Đồng Nghệ , xã Hoà Khương, huyện Hoà Vang' } }, { fields: { name: 'Giải đua thuyền Rowing và Canoeing vô địch trẻ quốc gia 2022', address: 'Hồ Đồng Nghệ , xã Hoà Khương, huyện Hoà Vang' } }]
const count = ref(1);
const currentDate = ref(new Date());
const selectedMonth = ref(currentDate.value.getMonth() + 1);
const selectedYear = ref(currentDate.value.getFullYear());
const {
  events,
  total,
  loadingEvent,
  fetchDataEvents,
  selectedEvents,
  loadMore,
} = getEvents(newStatus);
const daysOfWeek = [
  'Chủ nhật',
  'Thứ hai',
  'Thứ ba',
  'Thứ tư',
  'Thứ năm',
  'Thứ sáu',
  'Thứ bảy',
];
const formatDate = (date) => {
  const dateObj = new Date(date);
  const newDate = dateObj.getDate();
  return newDate;
};
const formatMonth = (date) => {
  const dateObj = new Date(date);
  const newMonth = dateObj.getMonth() + 1;
  return newMonth;
};
const formatDayOfWeek = (date) => {
  const dateObj = new Date(date);
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  return dayOfWeek;
};
onMounted(async () => {
  await fetchDataEvents();
});
const linkToComponents = async (status, id) => {
  if (status === 'Sắp diễn ra') {
    await router.push({ name: 'UpcomingEventsDetails', params: { id: id } });
  } else if (status === 'Đã diễn ra') {
    await router.push({
      name: 'CompetitionsResultsDetails',
      params: { id: id },
    });
  } else {
    return;
  }
};
const years = reactive(
  Array.from({ length: 101 }, (_, index) => selectedYear.value - 50 + index)
);
const changeYear = async () => {
  selectedYear.value = currentDate.value.getFullYear();
  await selectedEvents('', selectedMonth.value, selectedYear.value);
};
const previousMonth = async () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
  selectedMonth.value = currentDate.value.getMonth() + 1;
  selectedYear.value = currentDate.value.getFullYear();
  changeYear();
};

const nextMonth = async () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
  selectedMonth.value = currentDate.value.getMonth() + 1;
  selectedYear.value = currentDate.value.getFullYear();
  changeYear();
};
watchEffect(() => {
  currentDate.value = new Date(
    selectedYear.value,
    currentDate.value.getMonth(),
    1
  );
});
</script>

<style scoped>
button:focus {
  border: none;
}

.btn-month {
  cursor: pointer;
  display: flex;
  width: 45px;
  height: 30px;
  padding: 7px 11px 7px 13px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #539DDB;
}

.btn-month.left {
  border-right: 1px solid var(--white);
  border-radius: 16px 0px 0px 16px;
}

.btn-month.right {
  border-radius: 0px 16px 16px 0px;
}

select {
  all: unset;
  padding: 0 1rem;
}

.test:last-child {
  border-bottom: 1px solid #359CD6;
}
</style>
