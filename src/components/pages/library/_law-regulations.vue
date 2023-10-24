<template>
  <section>
    <div class="mb-16">
      <div
        class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
      >
        <div class="absolute w-full h-full -z-20">
          <img
            class="w-full h-full"
            v-lazy="luatdieuleImg"
            alt="Luật và điều lệ img"
          />
        </div>
        <div class="container">
          <h3
            class="text-[26px] tablet:text-[48px] text-center text-lightYellow uppercase"
          >
            {{ t('law-regulations') }}
          </h3>
        </div>
      </div>
    </div>
    <div class="container my-16">
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
            <img
              class="down-arrow-ic"
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
              class="search-img"
              v-lazy="searchIc"
              alt="search ic"
              @click="() => handleSearch(searchValue)"
            />
          </div>
        </div>
      </div>
      <div class="my-8">
        <transition name="slide-translate" mode="out-in">
          <table class="text-[10px] tablet:text-base">
            <tr>
              <th>{{ t('doc-name') }}</th>
              <th>{{ t('update-day') }}</th>
              <th>{{ t('attached-file') }}</th>
            </tr>
            <tr v-for="doc in docsData" :key="doc.id">
              <td class="flex justify-center">
                {{ doc.name }}
              </td>
              <td>{{ doc.create_at }}</td>
              <td>
                <img
                  class="cursor-pointer w-[12px] tablet:w-[24px] h-[12px] tablet:h-[24px]"
                  v-lazy="downLoadFileIc"
                  alt="download file"
                  @click="() => handleDownload(doc.uploaded_file, doc.name)"
                />
              </td>
            </tr>
          </table>
        </transition>
      </div>
      <div class="btn view-more flex justify-center">
        <button @click="loadMore" class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import luatdieuleImg from '@/assets/images/luat-dieu-le.jpeg';
import downArrowIc from '@/assets/images/down-line.svg';
import searchIc from '@/assets/images/tabler_search.svg';
import downLoadFileIc from '@/assets/images/library/downloadIcon.png';
import getDocs from '@/composables/getDocs.js';
import handleDownload from '@/composables/downloadFile.js';
const { t } = useI18n();
const arrangeValue = ref('-');
const searchValue = ref('');
const docsData = [{ name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' }, { name: 'Lorem ipsum dolor sit amet consectetur.', create_at: '30/12/2023' },]
const {
  docs,
  loadingDocs,
  fetchDataDocs,
  loadMore,
  handleArrange,
  handleSearch,
} = getDocs('laws');
onMounted(async () => {
  await fetchDataDocs();
});
</script>

<style>
</style>
