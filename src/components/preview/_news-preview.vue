<template>
  <article
    class="w-[305px] mx-[10px] flex flex-col items-start gap-[20px] cursor-pointer"
    @click="() =>
      router.push({
        name: 'NewsDetails',
        params: { id: 1, category: 1 },
      })
      "
  >
    <div class="w-full">
      <img
        class="w-full h-[100px] tablet:h-[185px] item-img"
        v-lazy="newData?.image || newsImage"
        :alt="newData?.title"
      />
    </div>
    <div class="px-[12px] flex flex-col items-start gap-[12px] pb-4">
      <div>
        <p class="italic text-sm text-textBlue">
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
      <!-- <div class="my-[10px]">
        <button
          class="relative text-[14px] text-blue"
          @click="
            () =>
              router.push({
                name: 'NewsDetails',
                params: { id: n.id, category: n.category },
              })
          "
        >
          {{ t('read-more') }}
        </button>
      </div> -->
    </div>
  </article>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { formatDay } from '@/plugins/date-utils';
import newsImage from '@/assets/images/default.png'
import { useRouter } from 'vue-router';
const props = defineProps({
  newData: Object,
});
const { t } = useI18n();
const router = useRouter();
</script>

<style scoped>
button::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 57px;
  height: 1px;
  background-color: #3871c1;
}
</style>
