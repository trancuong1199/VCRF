<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Pagination -->
    <div
      class="pagination absolute w-full bottom-[8px] tablet:bottom-[39px] flex justify-center items-end gap-[10px] tablet:gap-[20px]"
    >
      <span
        class="dots w-[8px] tablet:w-[16px] h-[8px] tablet:h-[16px]"
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index === currentSlide - 1 }"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(true);
const timeOutDuration = ref(5000);
const goToSlide = (index) => {
  currentSlide.value = index + 1;
};
const nextSlide = () => {
  autoPlayEnabled.value = false;
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};
const autoPlay = () => {
  if (autoPlayEnabled.value) {
    setInterval(() => {
      nextSlide();
    }, timeOutDuration.value);
  }
};
autoPlay();
onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length;
  // console.log(getSlideCount.value);
});
</script>

<style scoped>
.active {
  background-color: rgba(255, 222, 47, 1);
}
</style>
