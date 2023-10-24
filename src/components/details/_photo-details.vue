<template>
  <main>
    <section>
      <div v-if="photos" class="photo-modal">
        <div class="header-photo-modal">
          <div class="container flex items-center gap-[10px] tablet:gap-[40px]">
            <div class="cursor-pointer" @click="router.push({ name: 'PhotoGallery' })">
              <img v-lazy="arrowLeftIc" alt="arrow left ic" />
            </div>
            <div>
              <div>
                <h4 class="text-base tablet:text-3xl font-bold">
                  {{ photos?.name || 'Giải Rowing vô địch quốc gia năm 2023' }}
                </h4>
              </div>
              <div class="flex justify-start items-center gap-[40px] tablet:gap-[80px] mt-2">
                <p class="text-[14px] tablet:text-base">
                  21/11/2023
                </p>
                <div class="flex items-center">
                  <div class="w-[20px] h-[8px] bg-yellow mr-2"></div>
                  <p class="genre-tag-photo text-[12px] tablet:text-base text-yellow uppercase">
                    {{ photos?.category || 'Rowing' }}
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
        <div class="container main-photo-modal">
          <img v-lazy="photos?.image || photoLibrary" :alt="photos?.name" />
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
import photoLibrary from '@/assets/images/library/anh1.jpg'
import fbIc from '@/assets/images/fb-ic.svg';
import ytb from '@/assets/images/library/ytb.png';
import ig from '@/assets/images/library/ig.png';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import getPhotoDetails from '@/composables/getPhotoDetails.js';
const router = useRouter();
const route = useRoute();
const photoId = ref(route.params.id);
const shareUrl = ref(window.location.href);
const { photos, loadingPhotos, fetchDataPhotosDetails } = getPhotoDetails(
  photoId.value
);
onMounted(async () => {
  await fetchDataPhotosDetails(), console.log(photos);
});
</script>

<style scoped>
.header-photo-modal {
  background-color: var(--lightBlue);
}
</style>
