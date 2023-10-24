<template>
  <section>
    <div
      class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="xephang" alt="Xếp hạng img" />
      </div>
      <div class="">
        <h3 class="container text-yellow">
          {{ t('athlete-ranking') }}
        </h3>
      </div>
    </div>
    <div class="container my-16">
      <div>
        <div class="flex justify-between items-center">
          <div class="relative">
            <select
              class="cursor-pointer"
              id="filter"
              v-model="filtered"
              @change="handleFiltered(filtered)"
            >
              <option value="rank">Xếp hạng</option>
              <option value="-date">Ngày</option>
            </select>
            <img
              class="absolute top-[0.8rem] right-[1rem] -z-10"
              v-lazy="downArrowIc"
              alt="down arrow ic"
            />
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
              class="absolute top-[0.8rem] left-[1.25rem] z-10 cursor-pointer"
              v-lazy="searchIc"
              alt="search ic"
              @click="() => handleSearch(searchValue)"
            />
          </div>
        </div>
      </div>
      <div class="my-8">
        <transition name="slide-translate" mode="out-in">
          <table v-if="!loadingRating">
            <tr>
              <th>{{ t('athlete-name') }}</th>
              <th>{{ t('update-day') }}</th>
              <th>{{ t('athlete-rank') }}</th>
            </tr>
            <tr v-for="(rating, index) in ratings" :key="index">
              <td>{{ rating?.name }}</td>
              <td>{{ formatDay(rating?.date) }}</td>
              <td>{{ rating?.rank }}</td>
            </tr>
          </table>
        </transition>
      </div>
      <div class="my-16">
        <VPagination
          v-if="ratings.length !== 0"
          class="flex justify-center items-center"
          v-model="count"
          :pages="total"
          :range-size="0"
          active-color="rgba(26, 30, 34, 1)"
          @update:modelValue="loadMore(count)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// import { defineAsyncComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { formatDay } from '@/plugins/date-utils.js';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import xephang from '@/assets/images/xep-hang.jpeg';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import getRating from '../../../composables/getRating';
const { t } = useI18n();
const searchValue = ref('');
const filtered = ref('rank');
const count = ref(1);
const {
  ratings,
  total,
  loadingRating,
  fetchDataRating,
  handleFiltered,
  handleSearch,
} = getRating();
onMounted(async () => {
  await fetchDataRating();
});
</script>

<style scoped></style>
