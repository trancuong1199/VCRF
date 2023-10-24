<template>
  <section class="container min-h-content">
    <transition name="slide-translate" mode="out-in">
      <div v-if="!loadingSearch" class="my-16">
        <div>
          <h2>{{ t('search') }}</h2>
          <p class="my-8 tablet:text-3xl text-center font-bold">
            "{{ searchValue }}" - {{ search.length }} Kết quả được tìm thấy
          </p>
        </div>
        <div class="list-search">
          <article v-for="item in search" :key="item?.id">
            <div>
              <img class="w-full item-img" v-lazy="defaultImg" alt="" />
            </div>
            <div>
              <div class="mt-4 mb-2 flex justify-between items-center">
                <h4
                  class="w-[76px] tablet:w-[150px] h-[16px] tablet:h-[30px] px-0 tablet:px-[12px] text-[8px] tablet:text-sm text-yellow flex justify-center items-center rounded-[5px] overflow-hidden"
                >
                  lorem
                </h4>
                <p class="italic text-sm">Lorem ipsum</p>
              </div>
              <div>
                <h3 class="item-title text-[20px] tablet:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  aspernatur amet molestiae voluptatibus blanditiis et
                  consequatur labore, eius placeat rem obcaecati impedit sit,
                  non voluptate voluptatem. Consectetur facilis quis similique.
                </h3>
              </div>
              <div class="item-content my-4 text-[14px] tablet:text-base">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit sequi sunt illo, dolore a harum et ex nostrum
                  asperiores saepe rem modi cumque assumenda expedita? Itaque
                  beatae perspiciatis nobis iure?
                </p>
              </div>
              <div class="flex justify-end items-end mt-auto">
                <button
                  class="relative text-yellow text-[14px] tablet:text-base"
                >
                  {{ t('read-more') }}
                </button>
              </div>
            </div>
          </article>
        </div>
        <div class="my-16">
          <VPagination
            class="flex justify-center items-center"
            v-model="count"
            :pages="total"
            :range-size="0"
            active-color="rgba(26, 30, 34, 1)"
            @update:modelValue="loadMore(count)"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import defaultImg from '@/assets/images/default.png';
import getSearch from '@/composables/getSearch';
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const searchValue = ref(route.query.s || '');
const count = ref(1);
const { search, total, loadingSearch, fetchDataSearch, loadMore } = getSearch(
  searchValue.value
);
watchEffect(() => {
  searchValue.value = route.query.s || '';
});
onMounted(async () => {
  await fetchDataSearch();
});
</script>

<style scoped>
h4 {
  background: rgba(26, 30, 34, 0.7);
}
</style>
