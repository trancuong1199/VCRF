<template>
  <div class="container">
    <div class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center mt-10 mb-5">
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="canoeingImg" alt="Canoeing img" />
      </div>
      <div>
        <h3 class="container text-yellow">
          {{ t('genre-canoeing') }}
        </h3>
      </div>
    </div>
    <section>
      <ul class="flex justify-between text-[12px] tablet:text-2xl uppercase">
        <li class="w-1/2" :class="currSlide === 'canoeing' ? 'active' : ''" @click="changeSlides('canoeing')">
          Canoeing
        </li>
        <li class="w-1/2" :class="currSlide === 'boat-racing' ? 'active' : ''" @click="changeSlides('boat-racing')">
          Dragon Boat Racing
        </li>
        <li class="w-1/2" :class="currSlide === 'up-padling' ? 'active' : ''" @click="changeSlides('up-padling')">
          Stand Up Padling
        </li>
      </ul>
    </section>
    <div class="my-10">
      <div class="flex justify-between h-[300px] mb-14">
        <img src="@/assets/images/canoeing2.png" />
        <div class="w-[100%]">
          <p class="bg-gray300">{{ t('genre-about') }}
          </p>
          <p class="bg-gray300">{{ t('genre-rule') }}</p>
          <p class="bg-gray300">{{ t('genre-member') }}
          </p>
        </div>
      </div>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).<br>
        <br>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
        using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
        purpose (injected humour and the like).</span>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import canoeingImg from '@/assets/images/canoeing.png';
import { defineAsyncComponent, ref, watch } from 'vue';

const { t } = useI18n();
const props = defineProps(['intro']);
const currSlide = ref('canoeing');
const changeSlides = (event) => {
  currSlide.value = event;
};
watch(currSlide.value, (newVal) => {
  currSlide.value = newVal;
});
</script>
<style scoped>
li {
  cursor: pointer;
  padding: 15px 0 12px 0;
  display: flex;
  justify-content: center;
  transition: all 0.2s linear;
}

li:hover {
  border-bottom: 5px solid #539DDB;
  color: #539DDB;
}

.active {
  border-bottom: 5px solid #539DDB;
  color: #539DDB;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 20px;
  height: 100px;
  border-top: .5px solid #dadada;
  border-bottom: .5px solid #dadada;
  font-weight: bold;
  transition: .2s ease-in;
}

p:hover {
  background-color: var(--lightBlue);
  color: var(--white);
  cursor: pointer;
  border-top: .5px solid var(--lightBlue);
  border-bottom: .5px solid var(--lightBlue);
  transition: .2s ease-in;
}</style>