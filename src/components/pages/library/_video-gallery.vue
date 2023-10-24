<template>
  <section class="mb-16">
    <div
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img
          class="w-full h-full"
          v-lazy="thuvienvideoImg"
          alt="Thư viện video img"
        />
      </div>
      <div class="container">
        <h3
          class="text-[26px] tablet:text-[48px] text-center text-lightYellow uppercase"
        >
          {{ t('video') }}
        </h3>
      </div>
    </div>
  </section>
  <section class="container my-16">
    <div>
      <div class="flex justify-between items-center">
        <div class="flex gap-[40px]">
          <div class="relative">
            <select
              id="filter"
              v-model="filtered"
              @change="handleFiltered(filtered)"
            >
              <option value="">Tất cả</option>
              <option
                v-for="genre in genres"
                :key="genre.name"
                :value="genre.name"
              >
                {{ genre.name }}
              </option>
            </select>
            <img
              class="down-arrow-ic"
              v-lazy="downArrowIc"
              alt="down arrow ic"
            />
          </div>
          <div class="relative">
            <select
              id="filter"
              v-model="arrangeValue"
              @change="handleArrange(arrangeValue)"
            >
              <option value="-">Mới nhất</option>
              <option value="+">Cũ nhất</option>
            </select>
            <img
              class="down-arrow-ic"
              v-lazy="downArrowIc"
              alt="down arrow ic"
            />
          </div>
        </div>
        <div class="relative">
          <input
            class="search-item"
            id="search"
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            v-model="searchValue"
            @keydown.enter="() => handleSearch(searchValue)"
          />
          <img
            class="search-img"
            v-lazy="searchIc"
            alt="search ic"
            @click="() => handleSearch(searchValue)"
          />
        </div>
      </div>
    </div>
  </section>
  <transition name="slide-translate" mode="out-in">
    <section class="container video-gallery">
      <div class="flex items-end" v-for="video in dataPhotos" :key="video.id">
        <div class="absolute w-full h-full -z-10">
          <img
            class="w-full h-full"
            v-lazy="video?.background || photoLibrary"
            :alt="videos?.name"
          />
        </div>
        <div class="w-full p-[20px] text-white">
          <div>
            <p class="text-2xl font-bold">23/10/2023</p>
          </div>
          <div>
            <p class="mt-4 mb-8 text-yellow font-bold uppercase">
              {{ video?.category }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h4 class="text-2xl font-bold">
                {{ video?.name }}
              </h4>
            </div>
          </div>
          <div
            class="absolute top-1/2 left-1/2 w-[30px] h-[42px] tablet:w-[60px] tablet:h-[70px]"
          >
            <img
              class="cursor-pointer"
              v-lazy="playImg"
              alt="play image"
              @click="
                router.push({
                  name: 'VideoGalleryDetails',
                  params: { id: 1 },
                })
              "
            />
          </div>
        </div>
      </div>
    </section>
  </transition>
    <div class="btn view-more flex justify-center mb-20">
      <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { formatDay } from '@/plugins/date-utils.js';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import thuvienvideoImg from '@/assets/images/thu-vien-video.jpeg';
import playImg from '@/assets/images/library/play.svg';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import getVideos from '@/composables/getVideos.js';
import photoLibrary from '@/assets/images/library/anh1.jpg'
import getGenres from '@/composables/getGenres.js';
const { t } = useI18n();
const router = useRouter();
const arrangeValue = ref('-');
const filtered = ref('');
const searchValue = ref('');
const dataPhotos = [{name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing'},{name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing'},{name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing'},{name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing'},]
const count = ref(1);
const {
  videos,
  total,
  loadingVideos,
  fetchDataVideos,
  handleFiltered,
  handleArrange,
  handleSearch,
  loadMore,
} = getVideos();
const { genres, fetchDataGenres } = getGenres('');
onMounted(async () => {
  await fetchDataVideos();
  await fetchDataGenres();
});
</script>

<style></style>
