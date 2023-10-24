<template>
  <main>
    <section v-if="!loading">
      <div v-if="about[0]?.id">
        <div
          class="overlay relative h-[184px] tablet:h-[680px] flex flex-col justify-center tablet:gap-[40px]"
        >
          <div class="absolute w-full h-full -z-20">
            <img class="w-full h-full" v-lazy="loichaoImg" alt="about img" />
          </div>
          <div class="container">
            <h3
              class="text-[26px] tablet:text-[48px] text-center text-lightYellow"
            >
              LỜi CHÀO CỦA CHỦ TỊCH VCRSF
            </h3>
          </div>
          <div
            class="relative tablet:my-16 tablet:mx-[120px] py-[12px] tablet:py-[52px] px-[15px] tablet:px-[45px] w-[156px] h-[77px] tablet:w-[570px] tablet:h-[286px] bg-opacityYellow rounded-[12px] tablet:rounded-[40px]"
          >
            <img
              class="absolute -top-[30px] tablet:-top-[80px] right-[20px] w-[42px] tablet:w-[156px] h-[48px] tablet:h-[100px] z-10"
              src="@/assets/images/about-page/quotes.svg"
              alt="quotes image"
            />
            <p class="font-semibold text-[6px] tablet:text-base">
              {{ about[0]?.greeting }}
            </p>
          </div>
        </div>
        <div class="container mt-16 mb-48">
          <div class="">
            <h2>{{ about[0]?.title }}</h2>
            <div class="my-16">
              <img
                :class="`w-full h-[300px] object-contain ${
                  about[0]?.opening ? 'h-[300px]' : 'h-full'
                }`"
                v-lazy="liendoanImg"
                alt="Liên đoàn img"
              />
            </div>
          </div>
          <div v-if="about[0]?.opening">
            <div class="text-[10px] tablet:text-xl">
              <p class="my-8">
                {{ about[0]?.opening }}
              </p>
              <p class="my-8">
                {{ about[0]?.description }}
              </p>
              <p class="my-8">
                {{ about[0]?.ending }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-16" v-else>
        <NotFound />
      </div>
    </section>
    <section v-else class="flex justify-center items-center">
      <LoadingComponents />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import getAbout from '@/composables/getAbout.js';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
import loichaoImg from '@/assets/images/loi-chao.jpeg';
import liendoanImg from '@/assets/images/gioi-thieu.png';
const route = useRoute();
const aboutId = ref(route.params.id);
const { about, loading, fetchDataAbout } = getAbout(aboutId.value);
onMounted(async () => {
  await fetchDataAbout();
});
</script>

<style scoped>
nav {
  background-color: rgba(26, 30, 34, 0.95);
  color: rgba(255, 255, 255, 1);
  padding: 20px 240px;
}
ul {
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
