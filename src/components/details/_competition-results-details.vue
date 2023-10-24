<template>
  <main>
    <section v-if="!loadingResults">
      <div v-if="results[0]?.id">
        <div>
          <div class="relative h-[300px] flex justify-center items-center">
            <div class="absolute w-full h-full -z-20">
              <img class="w-full h-full" :src="defaultImg" alt="df img" />
            </div>
            <div class="">
              <h3 class="container text-yellow uppercase">
                {{ t('competition-results') }}
              </h3>
            </div>
          </div>
        </div>
        <div class="container py-16">
          <div class="flex justify-between items-stretch">
            <div class="w-2/3 pt-4 pr-8">
              <div>
                <h5 class="text-2xl text-yellow font-bold">
                  {{ results[0]?.event.name }}
                </h5>
              </div>
              <table class="my-4 text-center">
                <tr class="flex justify-between">
                  <th>{{ t('athlete-rank') }}</th>
                  <th>{{ t('team') }}</th>
                </tr>
                <tr>
                  <td>{{ results[0]?.rank }}</td>
                  <td>{{ results[0]?.team }}</td>
                </tr>
              </table>
            </div>
            <div class="w-1/3 border-l border-borderGray">
              <div>
                <div class="p-4 flex flex-col gap-[10px]">
                  <h6 class="text-xl font-bold">Ngày diễn ra sự kiện</h6>
                  <p>{{ formatDate(results[0]?.event.dates) }}</p>
                  <p class="text-red">{{ results[0]?.event.status }}</p>
                </div>
              </div>
              <div class="border-y border-borderGray">
                <div class="p-4 flex flex-col gap-[20px]">
                  <h6 class="text-xl font-bold">Vị trí</h6>
                  <p>{{ results[0]?.event.address }}</p>
                </div>
              </div>
              <div>
                <div class="py-8">
                  <img class="m-auto" v-lazy="vcrsfLogo" alt="vcrsf logo" />
                </div>
                <div class="px-4 flex flex-col gap-[20px]">
                  <div class="flex justify-start items-center gap-[20px]">
                    <img v-lazy="homeLogo" alt="home logo" />
                    <p>36 Trần Phú, Hà Nội, Việt Nam</p>
                  </div>
                  <div class="flex justify-start items-center gap-[20px]">
                    <img v-lazy="phoneLogo" alt="phone logo" />
                    <p>(84) 4 - 3 7475908</p>
                  </div>
                  <div class="flex justify-start items-center gap-[20px]">
                    <img v-lazy="emailLogo" alt="email logo" />
                    <p>vcrsf@vnn.vn</p>
                  </div>
                  <div class="flex justify-start items-center gap-[20px]">
                    <img v-lazy="webIc" alt="web logo" />
                    <p>Liên Đoàn Đua thuyền Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <NotFound />
      </div>
    </section>
    <section v-else>
      <LoadingComponents />
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { formatDate } from '@/plugins/date-utils.js';
import defaultImg from '@/assets/images/default.png';
import vcrsfLogo from '@/assets/images/vcrsf_logo.svg';
import homeLogo from '@/assets/images/contact/home.png';
import phoneLogo from '@/assets/images/contact/baseline-phone.png';
import emailLogo from '@/assets/images/contact/email.png';
import webIc from '@/assets/images/web-ic.svg';
import getResults from '@/composables/getResults';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import LoadingComponents from '../structure/loading-components/loading-components.vue';
const { t } = useI18n();
const route = useRoute();
const resultsId = ref(route.params.id);
const { results, loadingResults, fetchDataResults } = getResults(
  resultsId.value
);
onMounted(async () => {
  await fetchDataResults();
  console.log(results);
});
</script>

<style scoped>
table {
  border: 1px solid #dadada;
}
th:first-child,
td:first-child {
  width: 25% !important;
}

th:nth-child(2),
td:nth-child(2) {
  width: 75% !important;
}
</style>
