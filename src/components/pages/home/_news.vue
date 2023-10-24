<template>
  <section class="container flex flex-col gap-[40px]">
    <div class="flex justify-center">
      <h2>{{ t("news") }}</h2>
    </div>
    <div>
      <Carousel :breakpoints="breakpoints">
        <Slide v-for="newData in newsData" :key="newData.id">
          <NewsPreview :newData="newData" />
        </Slide>
      </Carousel>

    </div>
    <div class="flex justify-center items-center">
      <div class="flex items-center" @click="() => router.push({ name: 'News' })">
        <img src="@/assets/images/plus-circle.svg" />
        <h5 class="ml-3 text-textBlue text-lg">{{ t("view-more-news") }}</h5>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import getRelatedNews from "@/composables/getRelatedNews.js";
import NewsPreview from "@/components/preview/_news-preview.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { relatedNews, fetchDataRelated } = getRelatedNews("", "");
onMounted(async () => {
  await fetchDataRelated();
});
const { t } = useI18n();
const newsData = [{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
]
const breakpoints = {
  // 480px and up
  480: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 4,
    snapAlign: "start",
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 0;
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  /* position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;

  /* Fix iOS scrolling #22 */
  transform: translateZ(0);
}
</style>
