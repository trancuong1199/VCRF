<template>
  <section
    class="container my-16 flex flex-col tablet:flex-row justify-between"
  >
    <div
      class="tablet:w-1/2 border border-darkGray rounded-t-[5px] tablet:rounded-tr-[0px] tablet:rounded-l-[5px]"
    >
      <div
        class="py-4 px-10 h-[90px] flex justify-between items-center border-b border-darkGray  "
      >
        <div class="month flex items-center gap-[20px]">
          <p class="month-year text-[16px] tablet:text-2xl font-bold">
            {{ currentDate.toLocaleString('vi-VI', { month: 'long' }) }}
          </p>
        </div>
        <div class="flex justify-center">
          <div class="btn left" @click="previousMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1268_6645)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.52779 8.47133C5.40281 8.34632 5.3326 8.17678 5.3326 8C5.3326 7.82323 5.40281 7.65369 5.52779 7.52867L9.29912 3.75733C9.36062 3.69366 9.43418 3.64287 9.51552 3.60793C9.59685 3.57299 9.68433 3.5546 9.77285 3.55383C9.86137 3.55307 9.94916 3.56993 10.0311 3.60345C10.113 3.63697 10.1875 3.68648 10.2501 3.74907C10.3126 3.81167 10.3621 3.8861 10.3957 3.96803C10.4292 4.04996 10.4461 4.13775 10.4453 4.22627C10.4445 4.31479 10.4261 4.40227 10.3912 4.4836C10.3562 4.56494 10.3055 4.6385 10.2418 4.7L6.94179 8L10.2418 11.3C10.3632 11.4257 10.4304 11.5941 10.4289 11.7689C10.4274 11.9437 10.3573 12.1109 10.2337 12.2345C10.1101 12.3582 9.94285 12.4283 9.76805 12.4298C9.59326 12.4313 9.42485 12.3641 9.29912 12.2427L5.52779 8.47133Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1268_6645">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="matrix(-1 0 0 -1 16 16)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="btn right" @click="nextMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1268_6641)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4722 7.52867C10.5972 7.65368 10.6674 7.82322 10.6674 8C10.6674 8.17677 10.5972 8.34631 10.4722 8.47133L6.70088 12.2427C6.63938 12.3063 6.56582 12.3571 6.48448 12.3921C6.40315 12.427 6.31567 12.4454 6.22715 12.4462C6.13863 12.4469 6.05084 12.4301 5.96891 12.3965C5.88698 12.363 5.81254 12.3135 5.74995 12.2509C5.68735 12.1883 5.63785 12.1139 5.60433 12.032C5.57081 11.95 5.55394 11.8623 5.55471 11.7737C5.55548 11.6852 5.57387 11.5977 5.60881 11.5164C5.64375 11.4351 5.69454 11.3615 5.75821 11.3L9.05821 8L5.75821 4.7C5.63677 4.57426 5.56958 4.40586 5.5711 4.23106C5.57262 4.05627 5.64273 3.88906 5.76633 3.76545C5.88994 3.64185 6.05715 3.57173 6.23195 3.57022C6.40674 3.5687 6.57515 3.63589 6.70088 3.75733L10.4722 7.52867Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1268_6641">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div
          class="relative px-2 text-[16px] tablet:text-2xl font-bold cursor-pointer"
        >
          <select class="w-full" v-model="selectedYear" @change="changeYear">
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <img
            class="absolute -top-1 tablet:top-1 -right-3 tablet:-right-1 -z-10 cursor-pointer"
            v-lazy="downArrowIc"
            alt="down arrow ic"
          />
        </div>
      </div>
      <div class="p-[3rem] rounded-[20px]">
        <p class="month-year text-center text-2xl font-bold">
          {{ currentDate.toLocaleString('vi-VI', { month: 'long' }) }}
        </p>
        <div class="my-4 flex justify-between items-center gap-[10px]">
          <div
            v-for="day in daysInWeek"
            :key="day"
            class="day text-[14px] tablet:text-base"
          >
            {{ day }}
          </div>
        </div>
        <div
          v-for="(week, index) in weeks"
          :key="index"
          class="flex justify-between items-center gap-[10px]"
        >
          <button
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="[
              'calendar-day w-[33px] tablet:w-[54px] h-[27px] tablet:h-[44px] rounded-[5px] tablet:rounded-[8px]',
              {
                today: isToday(day),
                disabled: !isCurrentMonth(day),
                selected: isSameDay(selectedDate, day),
              },
            ]"
            @click="selectDate(day)"
          >
            {{ day.getDate() }}
          </button>
        </div>
      </div>
    </div>
    <div
      class="tablet:w-1/2 border border-darkGray border-l-0 rounded-b-[5px] tablet:rounded-bl-[0px] tablet:rounded-r-[5px]"
    >
      <div
        class="h-[90px] p-[20px] flex flex-col items-center border-b uppercase border-darkGray"
      >
        <h4 class="text-center font-bold">
          {{ t('event-today') }}
        </h4>
      </div>
      <div class="container py-[20px]">
        <div v-if="!loading">
          <transition name="slide-translate" mode="out-in">
            <div
              v-if="events.length !== 0 && selectedDate"
              class="flex flex-col justify-between gap-[20px] overflow-hidden"
            >
              <div class="flex flex-col gap-[40px]">
                <div v-for="event in events" :key="event?.fields.id">
                  <p class="font-bold">{{ event?.fields.name }}</p>
                  <div class="flex justify-end my-4">
                    <button
                      class="w-[180px] h-[56px] rounded-[30px] font-bold event-btn"
                      :class="
                        event?.fields.status === 'Đã diễn ra'
                          ? 'result'
                          : event?.fields.status === 'Đang diễn ra'
                          ? 'happening  text-lightYellow'
                          : 'view-detail'
                      "
                      @click="
                        () => linkToComponents(event?.fields.status, event?.pk)
                      "
                    >
                      {{
                        event?.fields.status === 'Đã diễn ra'
                          ? t('view-result')
                          : event?.fields.status === 'Đang diễn ra'
                          ? t('happening')
                          : t('view-detail')
                      }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p v-else class="text-2xl text-center mt-2">
              Không có sự kiện cho ngày này.
            </p>
          </transition>
        </div>
        <div v-else class="flex justify-center items-center">
          <LoadingComponents />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watchEffect, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import downArrowIc from '@/assets/images/down-line.svg';
import getEvents from '@/composables/getEvents.js';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
const { t } = useI18n();
const router = useRouter();
const currentDate = ref(new Date());
const { events, loading, fetchDataEvents, selectedEvents } = getEvents('');
onMounted(async () => {
  await fetchDataEvents();
});
const linkToComponents = (status, id) => {
  if (status === 'Sắp diễn ra') {
    router.push({ name: 'UpcomingEventsDetails', params: { id: id } });
  } else if (status === 'Đã diễn ra') {
    router.push({ name: 'CompetitionResultsDetails', params: { id: id } });
  } else {
    return;
  }
};
const daysInWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const days = computed(() => {
  const firstDay = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    1
  ).getDay();
  const lastDate = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    0
  ).getDate();

  const daysArray = [];
  for (let i = 1; i <= lastDate; i++) {
    daysArray.push(
      new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i)
    );
  }

  // Thêm các ngày trống từ tháng trước vào
  for (let i = 0; i < firstDay; i++) {
    const prevMonthDate = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth(),
      0 - i
    );
    daysArray.unshift(prevMonthDate);
  }

  // Thêm các ngày trống từ tháng sau vào
  const totalDays = daysArray.length;
  const remainingDays = 42 - totalDays;
  for (let i = 1; i <= remainingDays; i++) {
    const nextMonthDate = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth() + 1,
      i
    );
    daysArray.push(nextMonthDate);
  }

  return daysArray;
});

// Các tuần trong tháng
const weeks = computed(() => {
  const weeksArray = [];
  const daysArray = days.value;
  for (let i = 0; i < daysArray.length; i += 7) {
    weeksArray.push(daysArray.slice(i, i + 7));
  }
  return weeksArray;
});

// Kiểm tra xem ngày có phải là ngày hiện tại hay không
const isToday = (day) => {
  const today = new Date();
  return (
    day.getFullYear() === today.getFullYear() &&
    day.getMonth() === today.getMonth() &&
    day.getDate() === today.getDate()
  );
};

// Kiểm tra xem ngày có thuộc tháng hiện tại hay không
const isCurrentMonth = (day) => {
  return day.getMonth() === currentDate.value.getMonth();
};

// Kiểm tra xem hai ngày có cùng một ngày không (không xem xét giờ)
const isSameDay = (date1, date2) => {
  return (
    date1 &&
    date2 &&
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

// Các hàm xử lý sự kiện cho chọn tháng, năm
const previousMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
  changeYear();
};

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
  changeYear();
};

const selectedYear = ref(currentDate.value.getFullYear());

const changeYear = () => {
  selectedYear.value = currentDate.value.getFullYear();
};

const years = reactive(
  Array.from({ length: 101 }, (_, index) => selectedYear.value - 50 + index)
);
const selectedDate = ref(null);
const selectDate = async (date) => {
  selectedDate.value = date;
  const selectedDay = selectedDate.value.getDate();
  const selectedMonth = selectedDate.value.getMonth() + 1;
  const selectedYear = selectedDate.value.getFullYear();
  await selectedEvents(selectedDay, selectedMonth, selectedYear);
};
watchEffect(async () => {
  // Cập nhật năm hiện tại thành tháng 1 của năm mới khi selectedYear thay đổi
  currentDate.value = new Date(
    selectedYear.value,
    currentDate.value.getMonth(),
    1
  );

  // Đảm bảo rằng events đã được tải trước khi hiển thị
  if (selectedDate.value) {
    const selectedDay = selectedDate.value.getDate();
    const selectedMonth = selectedDate.value.getMonth() + 1;
    const selectedYear = selectedDate.value.getFullYear();
    await selectedEvents(selectedDay, selectedMonth, selectedYear);
  }
});
</script>
<style scoped>
.btn {
  cursor: pointer;
  display: flex;
  width: 45px;
  height: 25px;
  padding: 7px 11px 7px 13px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #ffde2f;
}
.btn.left {
  border-right: 1px solid var(--white);
  border-radius: 16px 0px 0px 16px;
  background-color: #539DDB;
}
.btn.right {
  border-radius: 0px 16px 16px 0px;
  background-color: #539DDB;
}
select {
  all: unset;
  padding: 0 1rem;
}

/* CSS cho các ngày trong lịch */
.calendar-day {
  text-align: center;
  cursor: pointer;
}

/* CSS cho ngày hiện tại */
.calendar-day.today {
  background-color: #539DDB;
  color: var(--white);
  font-weight: bold;
}

/* CSS cho các ngày không thuộc tháng */
.calendar-day.disabled {
  opacity: 0.3;
  pointer-events: none;
}

/* CSS cho ngày được chọn */
.calendar-day.selected {
  background-color: #539DDB;
  color: var(--white);
}

/* CSS để căn giữa lịch */
.month {
  display: flex;
  align-items: center;
}

/* Tùy chỉnh style cho các ngày trong tuần */
.day {
  width: 54px;
  height: 44px;
  text-align: center;
}
</style>
