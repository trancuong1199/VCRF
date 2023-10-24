<template>
  <main>
    <section>
      <div v-if="video" class="video-modal">
        <div class="header-video-modal">
          <div class="container flex items-center gap-[10px] tablet:gap-[40px]">
            <div class="cursor-pointer" @click="router.push({ name: 'VideoGallery' })">
              <img v-lazy="arrowLeftIc" alt="arrow left ic" />
            </div>
            <div>
              <div>
                <h4 class="text-base tablet:text-3xl font-bold">
                  {{ video?.name || 'Giải Rowing vô địch quốc gia năm 2023' }}
                </h4>
              </div>
              <div class="flex justify-start items-center gap-[40px] tablet:gap-[80px] mt-2">
                <p class="text-[14px] tablet:text-base">
                  21/11/2023
                </p>
                <div class="flex items-center">
                  <div class="w-[20px] h-[8px] bg-yellow mr-2"></div>
                  <p class="genre-tag-video text-[12px] tablet:text-base text-yellow uppercase">
                    {{ video?.category || 'Rowing' }}
                  </p>
                </div>
              </div>
            </div>
            <div class="ml-auto flex items-center gap-[10px]">
              <div>
                <p class="font-bold">Chia sẻ</p>
              </div>
              <div>
                <span class="font-bold">:</span>
              </div>
              <div>
                <ShareNetwork network="facebook" :url="shareUrl" hashtags="liendoanduathuyenvietnam,duathuyen">
                  <div class="flex">
                    <img v-lazy="fbIc" class="mr-2" alt="facebook icon" />
                    <img v-lazy="ytb" class="mr-2" alt="ig icon" />
                    <img v-lazy="ig" alt="ytb icon" />
                  </div>
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
        <div class="container relative main-video-modal">
          <video controls :src="video?.video || videoTest"></video>
        </div>
      </div>
      <div v-else>
        <NotFound />
      </div>
    </section>
    <!-- <section v-else>
      <LoadingComponents />
    </section> -->
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { formatDay } from '@/plugins/date-utils.js';
import arrowLeftIc from '@/assets/images/library/arrow-left.svg';
import fbIc from '@/assets/images/fb-ic.svg';
import ytb from '@/assets/images/library/ytb.png';
import ig from '@/assets/images/library/ig.png';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import getVideoDetails from '@/composables/getVideoDetails.js';
import videoTest from '@/assets/images/library/video.mp4'
const router = useRouter();
const route = useRoute();
const videoId = ref(route.params.id);
const shareUrl = ref(window.location.href);
const { video, loadingVideos, fetchDataVideoDetails } = getVideoDetails(
  videoId.value
);
onMounted(async () => await fetchDataVideoDetails());
</script>

<style scoped>
.header-video-modal {
  background-color: var(--lightBlue);
}
</style>
