<template>
  <section v-if="!loadingMember">
    <div
      class="relative h-[402px] tablet:h-[300px] flex justify-center items-center"
    >
      <div class="absolute w-full h-full -z-20">
        <img
          class="w-full h-full"
          v-lazy="membersDetails[0]?.background"
          alt="bg image"
        />
      </div>
      <div
        class="container flex flex-col-reverse tablet:flex-row justify-start items-center h-full tablet:gap-[4rem]"
      >
        <div class="mt-auto flex">
          <img
            class="w-[340px] m-auto tablet:m-0 tablet:w-[317px] h-[272px]"
            v-lazy="membersDetails[0]?.image"
            :alt="membersDetails[0]?.fullname"
          />
        </div>
        <div
          class="flex flex-col my-4 tablet:my-0 gap-[10px] tablet:gap-[20px]"
        >
          <p class="text-yellow uppercase">
            {{ membersDetails[0]?.object.name }}
          </p>
          <h3 class="text-yellow text-[24px] tablet:text-4xl">
            {{ membersDetails[0]?.fullname }}
          </h3>
          <div class="text-yellow flex gap-5">
            <p>{{ formatDay(membersDetails[0]?.date_of_birth) }}</p>
            <p>Giới tính: {{ membersDetails[0]?.sex }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-4 tablet:my-16">
      <div>
        <h2>Thông tin chi tiết</h2>
      </div>
    </div>
    <div
      class="container py-4 flex justify-start items-center gap-3 text-center border-b border-borderGray"
    >
      <div class="w-[60px] tablet:w-1/4 tablet:p-[2.5rem]">
        <h4
          class="w-[60px] tablet:w-[150px] text-[10px] tablet:text-2xl font-bold uppercase"
        >
          Thông tin cơ bản
        </h4>
      </div>
      <div
        class="w-[100px] tablet:w-1/4 tablet:p-[2.5rem] border-r border-l border-borderGray flex flex-col justify-center tablet:gap-[20px]"
      >
        <h5 class="h-[27px] font-semibold text-[8px] tablet:text-base">
          NGÀY SINH
        </h5>
        <p class="min-h-[27px] font-medium text-[10px] tablet:text-base">
          {{ formatDay(membersDetails[0]?.date_of_birth) }}
        </p>
      </div>
      <div
        class="w-[100px] tablet:w-1/4 tablet:p-[2.5rem] flex flex-col justify-center tablet:gap-[20px]"
      >
        <h5 class="h-[27px] font-semibold text-[8px] tablet:text-base">
          QUÊ QUÁN
        </h5>
        <p class="min-h-[27px] font-medium text-[10px] tablet:text-base">
          {{ membersDetails[0]?.home_live }}
        </p>
      </div>
    </div>
    <div
      class="container py-4 flex justify-start items-center gap-3 text-center border-b border-borderGray"
    >
      <div class="w-[60px] tablet:w-1/4 tablet:p-[2.5rem]">
        <h4
          class="w-[60px] tablet:w-[150px] text-[10px] tablet:text-2xl font-bold uppercase"
        >
          Sự nghiệp
        </h4>
      </div>
      <div class="w-3/4 tablet:p-[2.5rem] border-l border-borderGray">
        <p class="font-semibold text-[10px] tablet:text-base capitalize">
          {{ membersDetails[0]?.clb.subject.name }}
        </p>
        <p class="font-medium text-[10px] tablet:text-base">
          {{ membersDetails[0]?.clb.year }}
        </p>
      </div>
    </div>
    <div
      class="container mb-16 py-4 flex justify-start gap-3 items-center text-center border-b border-borderGray"
    >
      <div class="w-[60px] tablet:w-1/4 tablet:p-[2.5rem]">
        <h4
          class="w-[60px] tablet:w-[150px] text-[10px] tablet:text-2xl font-bold uppercase"
        >
          Thành tích nổi bật
        </h4>
      </div>
      <div class="w-1/4 tablet:p-[2.5rem] border-l border-borderGray">
        <h5 class="text-[10px] tablet:text-xl font-semibold mb-4">GIẢI ĐẤU</h5>
        <p
          class="text-[8px] tablet:text-base font-medium"
          v-for="achier in achierDetails"
          :key="achier?.tournament"
        >
          {{ achier?.tournament }}
        </p>
      </div>
      <div class="w-1/4 tablet:p-[2.5rem]">
        <h5 class="text-[10px] tablet:text-xl font-semibold mb-4">
          NĂM TỔ CHỨC
        </h5>
        <p
          class="text-[8px] tablet:text-base font-medium"
          v-for="achier in achierDetails"
          :key="achier?.tournament"
        >
          {{ achier?.year }}
        </p>
      </div>
      <div class="w-1/4 tablet:p-[2.5rem]">
        <h5 class="text-[10px] tablet:text-xl font-semibold mb-4">VỊ TRÍ</h5>
        <p
          class="text-[8px] tablet:text-base font-medium"
          v-for="achier in achierDetails"
          :key="achier?.tournament"
        >
          {{ achier?.location }}
        </p>
      </div>
    </div>
  </section>
  <section v-else>
    <LoadingComponents />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { formatDay } from '@/plugins/date-utils.js';
import getMemberDetails from '@/composables/getMemberDetails.js';
import getAchierDetails from '@/composables/getAchierDetails';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
const route = useRoute();
const personalId = ref(route.params.id);
const { membersDetails, loadingMember, fetchDataPersonal } = getMemberDetails(
  personalId.value
);
const { achierDetails, fetchDataAchierDetails } = getAchierDetails(
  personalId.value
);
onMounted(async () => {
  await fetchDataPersonal();
  console.log(membersDetails.value[0]);
  await fetchDataAchierDetails();
});
</script>

<style></style>
