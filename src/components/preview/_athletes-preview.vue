<template>
  <section>
    <div class="flex justify-between items-center">
      <div class="relative">
        <select
          id="filter"
          v-model="filtered"
          @change="handleFiltered(filtered)"
        >
          <option value="">Tất Cả</option>
          <option v-for="genre in genres" :key="genre.name" :value="genre.name">
            {{ genre.name }}
          </option>
        </select>
        <img class="down-arrow-ic" v-lazy="downArrowIc" alt="down arrow ic" />
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
  </section>
  <section class="mt-8 overflow-hidden">
    <transition name="slide-translate" mode="out-in">
      <div v-if="!loadingMember" class="list-member">
        <div
          class="relative w-full h-full flex items-end"
          v-for="athlete in members"
          :key="athlete?.id"
        >
          <img
            class="absolute w-full h-full -z-10"
            v-lazy="athlete?.image"
            :alt="athlete?.fullname"
          />
          <div
            class="w-full p-[10px] tablet:p-[20px] bg-black text-white flex justify-between items-center"
          >
            <div>
              <h4 class="text-[14px] tablet:text-[20px]">
                {{ athlete?.fullname }}
              </h4>
              <p class="uppercase tablet:my-4 text-[10px] tablet:text-base">
                {{ athlete?.object.name }}
              </p>
            </div>
            <div
              class="cursor-pointer"
              @click="
                () =>
                  router.push({
                    name: 'PersonalDetails',
                    params: { id: athlete?.number_athletes },
                  })
              "
            >
              <img :src="arrowRightIc" alt="arrow right ic" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
  <section v-if="members.length !== 0" class="my-16">
    <VPagination
      class="flex justify-center items-center"
      v-model="count"
      :pages="total"
      :range-size="0"
      active-color="rgba(26, 30, 34, 1)"
      @update:modelValue="loadMore(count)"
    />
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import arrowRightIc from '@/assets/images/arrow-right.svg';
import getMember from '@/composables/getMember.js';
import getGenres from '@/composables/getGenres.js';
const { t } = useI18n();
const router = useRouter();
const filtered = ref('');
const searchValue = ref('');
const count = ref(1);
const {
  members,
  total,
  loadingMember,
  fetchDataMember,
  loadMore,
  handleFiltered,
  handleSearch,
} = getMember('Vận động viên');
const { genres, fetchDataGenres } = getGenres('');
onMounted(async () => {
  await fetchDataMember();
  console.log(members);
  await fetchDataGenres();
});
</script>

<style scoped></style>
