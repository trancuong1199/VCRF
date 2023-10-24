<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="relative">
        <select
          class="cursor-pointer"
          id="filter"
          v-model="arrangeValue"
          @change="handleArrange(arrangeValue)"
        >
          <option value="-">Mới nhất</option>
          <option value="+">Cũ nhất</option>
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
    <div class="mt-8 overflow-hidden">
      <transition name="fade" mode="out-in">
        <div class="flex flex-wrap">
          <div v-for="newData in newsData" :key="newData.id">
            <article class="w-[290px] mx-[10px] mt-[20px] flex flex-col items-start gap-[20px] bg-lightBlue">
              <div class="w-full">
                <img class="w-full h-[100px] tablet:h-[185px] item-img" v-lazy="newData?.image || newsImage"
                  :alt="newData?.title" />
              </div>
              <div class="px-[12px] flex flex-col items-start gap-[12px] pb-4">
                <div>
                  <p class="italic text-sm">
                    {{ formatDay(newData?.publication_date) }}
                  </p>
                </div>
                <div>
                  <h3 class="text-[10px] tablet:text-[16px] text-left">
                    {{
                      newData?.title.length > 50
                      ? newData?.title.substring(0, 50) + '...'
                      : newData?.title
                    }}
                  </h3>
                </div>
                <div class="h-[57px] text-start">
                  <p class="text-[8px] tablet:text-sm">
                    {{
                      newData?.description.length > 100
                      ? newData?.description.substring(0, 100) + '...'
                      : newData?.description
                    }}
                  </p>
                </div>
                <p class="text-blue mt-3 text-sm underline underline-offset-4 cursor-pointer" @click="() =>
                      router.push({
                        name: 'NewsDetails',
                        params: { id: 1, category: 1 },
                      })
                    ">{{ t('view-detail') }}</p>
              </div>
            </article>
          </div>
        </div>
      </transition>
    </div>
    <!-- <div class="my-16">
      <VPagination
        class="flex justify-center items-center"
        v-model="count"
        :pages="total"
        :range-size="0"
        active-color="rgba(26, 30, 34, 1)"
        @update:modelValue="loadMore(count)"
      />
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { formatDay } from '@/plugins/date-utils';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import downArrowIc from '@/assets/images/down-line.svg';
import newsImage from '@/assets/images/default.png'
import searchIc from '@/assets/images/tabler_search.svg';
import NewsPreview from '../../preview/_news-preview.vue';
import getNews from '@/composables/getNews.js';
const { t } = useI18n();
const router = useRouter();
const arrangeValue = ref('-');
const searchValue = ref('');
const count = ref(1);
const {
  news,
  total,
  loadingNews,
  fetchDataNews,
  loadMore,
  handleArrange,
  handleSearch,
} = getNews('Tin tức quốc tế');
onMounted(async () => await fetchDataNews());
const newsData = [{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
]
</script>

<style scoped></style>
