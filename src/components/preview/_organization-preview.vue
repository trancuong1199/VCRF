<template>
  <section class="flex justify-between items-center">
    <div class="relative">
      <select class="cursor-pointer" id="filter" v-model="filtered" @change="handleFiltered(filtered)">
        <option value="">Tất Cả</option>
        <option v-for="genre in genres" :key="genre.name" :value="genre.name">
          {{ genre.name }}
        </option>
      </select>
      <img class="down-arrow-ic" v-lazy="downArrowIc" alt="down arrow ic" />
    </div>
    <div class="relative">
      <input class="search-item" id="search" type="text" placeholder="Tìm kiếm thông tin..." v-model="searchValue"
        @keydown.enter="() => handleSearch(searchValue)" />
      <img class="search-img" v-lazy="searchIc" alt="search ic" @click="() => handleSearch(searchValue)" />
    </div>
  </section>
  <section class="mt-8 overflow-hidden">
    <transition name="slide-translate" mode="out-in">
      <div class="container mt-10">
        <ul class="flex w-full">
          <li class="w-[80%] flex justify-center font-bold border-r-2 border-gray500 p-5">Tên tổ chức</li>
          <li class="w-[20%] flex justify-center font-bold border-r-2 border-gray500 p-5">Danh sách thành viên</li>
        </ul>
        <div class="result">
          <ul class="flex w-full">
            <li class="w-[80%] p-5 border-t-2 border-r-2 border-gray500">
              <p class="text-textBlue text-[28px] mb-2">Câu lạc bộ Rowing Hà Nội</p>
              <p>Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate sed etiam
                mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim mauris. Velit
                purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Vel Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate
                sed etiam mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Velit purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia
                ut eu enim mauris. Vel</p>
            </li>
            <li class="w-[20%] p-5 flex items-center justify-center border-t-2 border-r-2 border-gray500">
              <img class="w-6 h-6" src="@/assets/images/library/downloadIcon.png" /></li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[80%] p-5 border-t-2 border-r-2 border-gray500">
              <p class="text-textBlue text-[28px] mb-2">Câu lạc bộ Rowing Hà Nội</p>
              <p>Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate sed etiam
                mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim mauris. Velit
                purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Vel Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate
                sed etiam mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Velit purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia
                ut eu enim mauris. Vel</p>
            </li>
            <li class="w-[20%] p-5 flex items-center justify-center border-t-2 border-r-2 border-gray500">
              <img class="w-6 h-6" src="@/assets/images/library/downloadIcon.png" /></li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[80%] p-5 border-t-2 border-r-2 border-gray500">
              <p class="text-textBlue text-[28px] mb-2">Câu lạc bộ Rowing Hà Nội</p>
              <p>Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate sed etiam
                mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim mauris. Velit
                purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Vel Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate
                sed etiam mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Velit purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia
                ut eu enim mauris. Vel</p>
            </li>
            <li class="w-[20%] p-5 flex items-center justify-center border-t-2 border-r-2 border-gray500">
              <img class="w-6 h-6" src="@/assets/images/library/downloadIcon.png" /></li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[80%] p-5 border-t-2 border-r-2 border-gray500">
              <p class="text-textBlue text-[28px] mb-2">Câu lạc bộ Rowing Hà Nội</p>
              <p>Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate sed etiam
                mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim mauris. Velit
                purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Vel Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate
                sed etiam mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Velit purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia
                ut eu enim mauris. Vel</p>
            </li>
            <li class="w-[20%] p-5 flex items-center justify-center border-t-2 border-r-2 border-gray500">
              <img class="w-6 h-6" src="@/assets/images/library/downloadIcon.png" /></li>
          </ul>
          <ul class="flex w-full">
            <li class="w-[80%] p-5 border-t-2 border-r-2 border-gray500">
              <p class="text-textBlue text-[28px] mb-2">Câu lạc bộ Rowing Hà Nội</p>
              <p>Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate sed etiam
                mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim mauris. Velit
                purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Vel Lorem ipsum dolor sit amet consectetur. Scelerisque semper etiam in dolor in. Nulla vulputate
                sed etiam mauris leo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia ut eu enim
                mauris. Velit purus nam id cras. eo elementum elementum cursus urna. Duis in pulvinar eget pretium lacinia
                ut eu enim mauris. Vel</p>
            </li>
            <li class="w-[20%] p-5 flex items-center justify-center border-t-2 border-r-2 border-gray500">
              <img class="w-6 h-6" src="@/assets/images/library/downloadIcon.png" /></li>
          </ul>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import arrowRightIc from '@/assets/images/arrow-right.svg';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
import getOrganization from '@/composables/getOrganization';
import getGenres from '@/composables/getGenres.js';
const { t } = useI18n();
const router = useRouter();
const filtered = ref('');
const searchValue = ref('');
const count = ref(1);
const {
  organizations,
  total,
  loadingOrganization,
  fetchDataOrganization,
  handleFiltered,
  handleSearch,
  loadMore,
} = getOrganization();
const { genres, fetchDataGenres } = getGenres('');
onMounted(async () => {
  await fetchDataOrganization();
  await fetchDataGenres();
});
</script>

<style scoped></style>
