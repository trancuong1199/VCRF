<template>
  <main>
    <section class="mt-10">
      <CountDownModal />
      <div class="container py-14">
        <h2 class="text-textBlue flex justify-center uppercase">THÔNG TIN SỰ KIỆN</h2>
        <div class="flex justify-between my-10">
          <div>
            <div class="flex items-center text-textBlue">
              <img src="@/assets/images/library/clock.png" class="w-5 h-5" />
              <h class="text-[16px] ml-2 font-bold">Thời gian diễn ra sự kiện</h>
            </div>
            <p class="my-5 w-[250px]">8:00 AM Ngày 23 Tháng 11 Năm 2023</p>
            <div class="bg-yellow300 w-[100px] h-[5px] rounded-xl"></div>
          </div>
          <div>
            <div class="flex items-center text-textBlue">
              <img src="@/assets/images/library/map-pin.png" class="w-5 h-5" />
              <h class="text-[16px] ml-2 font-bold">Địa điểm tổ chức</h>
            </div>
            <p class="my-5 w-[250px]">Lorem ipsum dolor sit amet consecteturdolor sit</p>
            <div class="bg-yellow300 w-[100px] h-[5px] rounded-xl"></div>
          </div>
          <div>
            <div class="flex items-center text-textBlue">
              <img src="@/assets/images/library/file-minus.png" class="w-5 h-5" />
              <h class="text-[16px] ml-2 font-bold">File đính kèm</h>
            </div>
            <p class="my-5 w-[350px]">Điều lệ và các quy định chuyên môn
              Thông báo khác của Ban tổ chức và Liên đoàn</p>
            <div class="bg-yellow300 w-[100px] h-[5px] rounded-xl"></div>
          </div>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst.
          Ornare egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu
          sapien nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie
          ipsum nullam
          <br>
          <br>
          Lorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst. Ornare
          egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu sapien
          nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie ipsum
          nullamLorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst.
          Ornare egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu
          sapien nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie
          ipsum nullam
          <br>
          <br>
          Lorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst. Ornare
          egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu sapien
          nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie ipsum
          nullamLorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst.
          Ornare egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu
          sapien nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie
          ipsum nullam
          <br>
          <br>
          Lorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst. Ornare
          egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu sapien
          nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie ipsum
          nullamLorem ipsum dolor sit amet consectetur. Scelerisque ullamcorper ac velit vulputate elementum dictumst.
          Ornare egestas nullam aliquam tortor nisl nisl semper eu. Vitae pulvinar tellus eu tellus felis morbi. Risus eu
          sapien nisl eu felis quis at. Varius neque et feugiat aliquam mi tristique consequat diam. Habitant molestie
          ipsum nullam</span>
        <h2 class="text-textBlue flex justify-center uppercase my-10">SỰ KIỆN KHÁC</h2>
        <Carousel :breakpoints="breakpoints">
          <Slide v-for="e in eventsData" :key="e.id">
            <EventsPreview :events="e" />
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>   
        <div class="flex justify-center mt-5">
          <div class="progress progress-hover"></div>
          <div class="progress"></div>
          <div class="progress"></div>
        </div>
      </div>
    </section>
    <!-- <section v-else>
      <LoadingComponents />
    </section> -->
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useI18n } from 'vue-i18n';
import EventsPreview from '@/components/preview/_events-preview.vue';
import defaultImg from '@/assets/images/default.png';
import vcrsfLogo from '@/assets/images/vcrsf_logo.svg';
import homeLogo from '@/assets/images/contact/home.png';
import emailLogo from '@/assets/images/contact/email.png';
import webIc from '@/assets/images/web-ic.svg';
import CountDownModal from '@/modal/count-down-modal.vue';
import getEventDetails from '@/composables/getEventDetails.js';
import LoadingComponents from '../structure/loading-components/loading-components.vue';
import { formatDate } from '@/plugins/date-utils.js';
const { t } = useI18n();
const route = useRoute();
const eventId = ref(route.params.id);
const { eventDetails, loadingEvent, fetchDataEventDetails } = getEventDetails(
  eventId.value
);
const eventsData = [{ name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }, { name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }, { name: 'GIẢI ĐUA THUYỀN RỒNG TRUYỀN THỐNG CÁC DÂN TỘC NĂM 2023', dates: '11/11/2023', address: 'Trường Chinh, Hà Nội' }]
const breakpoints = {
  // 480px and up
  480: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    mouseDrag: false,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    itemsToShow: 3,
    snapAlign: 'start',
  },
};
onMounted(async () => await fetchDataEventDetails());
</script>

<style></style>
