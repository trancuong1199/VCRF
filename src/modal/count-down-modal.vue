<template>
  <section class="container flex justify-between relative">
    <div class="imageCountDown">
      <img class="w-full h-auto" src="@/assets/images/home-page/imgCountdown.svg" alt="countdown svg" />
    </div>
    <div class="absolute z-10 w-full py-14">
      <h2 class="uppercase text-darkYellow mb-5 flex justify-center">
        {{ t("title-countdown") }}
      </h2>
      <div class="container justify-center py-[4px] flex tablet:py-auto items-center text-white">
        <img src="@/assets/images/home-page/countdown.svg" class="w-6 h-6" />
        <h class="text-[20px] uppercase ml-8 font-medium">
          {{ t("time-remain") }}
        </h>
      </div>
      <!-- <p class="flex justify-end text-white pr-[80px] text-[8px] tablet:text-2xl h-[50px]">{{ formattedCountdown }}</p> -->
      <div>
        <div class="font-medium text-white justify-center flex">
          <p class="text-[24px] tablet:text-6xl tracking-[2px] tablet:tracking-[16px]">
            {{ countdown }}
          </p>
        </div>
        <div class="flex justify-center">
          <img class="mr-6" src="@/assets/images/path.svg" />
          <img class="mr-6" src="@/assets/images/path.svg" />
          <img class="mr-6" src="@/assets/images/path.svg" />
          <img class="mr-6" src="@/assets/images/path.svg" />
        </div>
        <div class="tablet:mt-4 justify-center flex uppercase text-white tablet:gap-[80px]">
          <p>{{ t("day") }}</p>
          <p class="mx-[20px]">{{ t("hours") }}</p>
          <p class="mx-[5px] tablet:mx-0">{{ t("minutes") }}</p>
          <p class="mx-[20px] block">{{ t("seconds") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { formatDate, formatNumber } from "@/plugins/date-utils.js";
import getEvents from "@/composables/getEvents.js";
const { t } = useI18n();
const targetDate = ref(null);
const countdown = ref("");
const formattedCountdown = ref("");
const { events, fetchDataEvents } = getEvents("");

const updateCountdown = () => {
  const now = new Date();
  const eventDate = '12/25/2023'; // events.value[0]?.fields.dates
  if (!eventDate || new Date(eventDate) - now < 0) {
    countdown.value = "00 00:00:00";
  } else {
    const diff = new Date(eventDate) - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdown.value = `${formatNumber(days, 2)} ${formatNumber(
      hours,
      2
    )}:${formatNumber(minutes, 2)}:${formatNumber(seconds, 2)}`;
    formattedCountdown.value = formatDate(eventDate);
  }
};
setInterval(updateCountdown, 1000);
onMounted(async () => {
  await fetchDataEvents();
  const date = events.value[0]?.times;
  targetDate.value = new Date(date);
  updateCountdown(); // Call the function once to initialize the countdown
});
</script>

<style scoped>
.count-down.title {
  background-color: rgba(249, 247, 240, 1);
  fill: #f9f7f0;
}

.imageCountDown {
  position: relative;
  display: inline-block;
}

.imageCountDown::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  z-index: 1;
}
</style>
