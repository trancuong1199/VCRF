<template>
  <section class="mb-16">
    <div class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center">
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" v-lazy="thuvienanhImg" alt="Thư viện ảnh img" />
      </div>
      <div class="container">
        <h3 class="text-[26px] tablet:text-[48px] text-center text-lightYellow uppercase">
          {{ t('photo') }}
        </h3>
      </div>
    </div>
  </section>
  <section class="container my-16">
    <div>
      <div class="flex justify-between items-center">
        <div class="flex gap-[40px]">
          <div class="relative">
            <select id="filter" v-model="filtered" @change="handleFiltered(filtered)">
              <option value="">Tất cả</option>
              <option v-for="genre in genres" :key="genre.name" :value="genre.name">
                {{ genre.name }}
              </option>
            </select>
            <img class="down-arrow-ic" v-lazy="downArrowIc" alt="down arrow ic" />
          </div>
          <div class="relative">
            <select class="cursor-pointer" id="filter" v-model="arrangeValue" @change="handleArrange(arrangeValue)">
              <option value="-">Mới nhất</option>
              <option value="+">Cũ nhất</option>
            </select>
            <img class="down-arrow-ic" v-lazy="downArrowIc" alt="down arrow ic" />
          </div>
        </div>
        <div class="relative">
          <input class="search-item" id="search" type="text" placeholder="Nhập từ khóa tìm kiếm" v-model="searchValue"
            @keydown.enter="() => handleSearch(searchValue)" />
          <img class="search-img" v-lazy="searchIc" alt="search ic" @click="() => handleSearch(searchValue)" />
        </div>
      </div>
    </div>
  </section>
  <transition name="slide-translate" mode="out-in">
    <section class="container photo-gallery">
      <div class="flex items-end" v-for="photo in dataPhotos" :key="photo.id">
        <div class="absolute w-full h-full -z-10">
          <img class="w-full h-full" v-lazy="photo?.image || photoLibrary" :alt="photos?.name" />
        </div>
        <div class="w-full p-[20px] text-white">
          <div>
            <p class="text-2xl font-bold">20/11/2023</p>
          </div>
          <div class="flex items-center mt-4 mb-8 ">
            <div class="w-[20px] h-[8px] bg-yellow300 mr-2"></div>
            <p class="text-yellow font-bold uppercase">
              {{ photo?.category }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <div class="w-2/3">
              <h4 class="text-2xl font-bold">
                {{ photo?.name }}
              </h4>
            </div>
            <div class="w-1/3 m-auto flex justify-center items-center gap-[10px] cursor-pointer" @click="
              router.push({
                name: 'PhotoGalleryDetails',
                params: { id: 1 },
              })
              ">
              <p class="text-yellow font-bold">{{ t('view-full') }}</p>
              <img class="cursor-pointer" v-lazy="arrowRightIc" alt="arrow right ic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
  <section v-if="photos.length" class="my-16">
    <VPagination class="flex justify-center items-center" v-model="count" :pages="total" :range-size="0"
      active-color="rgba(26, 30, 34, 1)" @update:modelValue="loadMore(count)" />
  </section>
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
import thuvienanhImg from '@/assets/images/thu-vien-anh.jpeg';
import arrowRightIc from '@/assets/images/arrow-right.svg';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import photoLibrary from '@/assets/images/library/anh1.jpg'
import getPhotos from '@/composables/getPhotos.js';
import getGenres from '@/composables/getGenres.js';
const { t } = useI18n();
const router = useRouter();
const arrangeValue = ref('-');
const filtered = ref('');
const searchValue = ref('');
const count = ref(1);
const {
  photos,
  total,
  loadingPhotos,
  fetchDataPhotos,
  handleFiltered,
  handleArrange,
  handleSearch,
  loadMore,
} = getPhotos();
const { genres, fetchDataGenres } = getGenres('');
const dataPhotos = [{ name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing' }, { name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing' }, { name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing' }, { name: 'Giải Rowing vô địch quốc gia năm 2023', category: 'rowing' },]
onMounted(async () => {
  await fetchDataPhotos();
  await fetchDataGenres();
});
</script>

<style></style>
