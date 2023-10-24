<template>
  <main>
    <section v-if="!loading">
      <div v-if="genres[0]?.name">
        <div class="mb-16">
          <div
            class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
          >
            <div class="absolute w-full h-full -z-20">
              <img
                class="w-full h-full"
                v-lazy="genres[0]?.images"
                alt="bg img"
              />
            </div>
            <div class="container">
              <h3
                class="text-[24px] tablet:text-[48px] text-center text-lightYellow uppercase"
              >
                {{ genres[0]?.name }}
              </h3>
            </div>
          </div>
        </div>
        <div class="container">
          <div
            class="flex flex-col tablet:flex-row justify-between items-stretch"
          >
            <div class="tablet:w-1/2">
              <img
                class="w-full tablet:h-full h-[270px]"
                v-lazy="genres[0]?.image"
                :alt="genres[0]?.name"
              />
            </div>
            <div class="tablet:w-1/2 flex flex-col justify-between font-bold">
              <button
                class="tablet:h-[200px] h-[85px] text-[24px] tablet:text-[40px]"
                :class="currSlide === 'about' ? 'active' : ''"
                @click="changeSlides('about')"
              >
                {{ t('about') }}
              </button>
              <button
                class="tablet:h-[200px] h-[85px] text-[24px] tablet:text-[40px]"
                :class="currSlide === 'rules' ? 'active' : ''"
                @click="changeSlides('rules')"
              >
                {{ t('rules') }}
              </button>
              <button
                class="tablet:h-[200px] h-[85px] text-[24px] tablet:text-[40px]"
                @click="() => router.push({ name: 'Member' })"
              >
                {{ t('member') }}
              </button>
            </div>
          </div>
        </div>
        <div class="container mb-32">
          <transition name="slide-translate" mode="out-in">
            <AboutGenre
              v-if="currSlide === 'about'"
              :intro="genres[0]?.intro"
            />
            <RulesGenre
              v-else-if="currSlide === 'rules'"
              :summary="genres[0]?.summary"
            />
          </transition>
        </div>
      </div>
      <NotFound v-else />
    </section>
    <section v-else class="flex justify-center">
      <LoadingComponents />
    </section>
  </main>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import getGenres from '@/composables/getGenres.js';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
const AboutGenre = defineAsyncComponent(() =>
  import('@/components/pages/genre/_about-genre.vue')
);
const RulesGenre = defineAsyncComponent(() =>
  import('@/components/pages/genre/_rules-genre.vue')
);
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const genreId = ref(route.params.id);
const { genres, loading, fetchDataGenres } = getGenres(genreId.value);
const currSlide = ref('about');
const changeSlides = (slide) => {
  currSlide.value = slide;
};
// watch(currSlide.value, (newVal) => {
//   currSlide.value = newVal;
// });
onMounted(async () => await fetchDataGenres());
</script>
<style scoped>
button {
  color: rgba(26, 30, 34, 1);
  border-bottom: 1px solid rgba(197, 197, 197, 1);
}

.active {
  background-color: rgba(227, 190, 40, 1);
}
</style>
