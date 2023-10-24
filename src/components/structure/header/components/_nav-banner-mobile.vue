<template>
  <section>
    <div class="nav-mobile py-[60px] flex flex-col gap-[40px]">
      <div class="container flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          @click="emit('handleShow')"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#1A1E22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9L9 15"
            stroke="#1A1E22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9L15 15"
            stroke="#1A1E22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          @click="handleShowNav('search')"
        >
          <path
            d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
            stroke="#1A1E22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="container">
        <transition name="slide-translate" mode="out-in">
          <ul
            v-if="NavComponents === ''"
            class="text-2xl font-bold flex flex-col gap-[20px]"
          >
            <li>
              <router-link :to="{ name: 'Home' }">{{ t('home') }}</router-link>
            </li>
            <li @click="handleShowNav('about')">
              <h5>
                {{ t('about') }}
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('genre')">
              <h5>{{ t('genre') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('event')">
              <h5>{{ t('event') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('news')">
              <h5>{{ t('news') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('member')">
              <h5>{{ t('member') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('library')">
              <h5>{{ t('library') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="handleShowNav('contact')">
              <h5>{{ t('contact') }}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'about'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('about') }}
              </h5>
            </div>
            <NavAbout @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'genre'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('genre') }}
              </h5>
            </div>
            <NavGenre @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'event'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('event') }}
              </h5>
            </div>
            <NavEvent @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'news'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('news') }}
              </h5>
            </div>
            <NavNews @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'member'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('member') }}
              </h5>
            </div>
            <NavMember @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'library'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('library') }}
              </h5>
            </div>
            <NavLibrary @handleShow="emit('handleShow')" />
          </div>
          <div
            class="flex flex-col gap-[40px]"
            v-else-if="NavComponents === 'contact'"
          >
            <div class="show-nav-text flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                @click="handleShowNav('')"
              >
                <path
                  d="M15.0039 6L9.00391 12L15.0039 18"
                  stroke="#1A1E22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 class="text-2xl font-bold uppercase">
                {{ t('contact') }}
              </h5>
            </div>
            <NavContact @handleShow="emit('handleShow')" />
          </div>
          <div
            v-else-if="NavComponents === 'search'"
            class="search-mobile py-[60px]"
          >
            <SearchMobile
              @closeSearch="handleShowNav('')"
              @handleShow="emit('handleShow')"
            />
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import NavAbout from '@/components/pages/about/_nav-about.vue';
import NavGenre from '@/components/pages/genre/_nav-genre.vue';
import NavEvent from '@/components/pages/event/_nav-event.vue';
import NavNews from '@/components/pages/news/_nav-news.vue';
import NavMember from '@/components/pages/member/_nav-member.vue';
import NavLibrary from '@/components/pages/library/_nav-library.vue';
import NavContact from '@/components/pages/contact/_nav-contact.vue';
import SearchMobile from './_search-mobile.vue';
import { ref } from 'vue';
const { t } = useI18n();
const props = defineProps(['handleShow']);
const NavComponents = ref('');
const emit = defineEmits(['handleShow']);
const handleShowNav = (nav) => {
  NavComponents.value = nav;
};
</script>
<style scoped>
.nav-mobile {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* gap: 10px; */
}
li > h5 {
  width: 150px;
}
.show-nav-text {
  position: relative;
}
.show-nav-text::before {
  position: absolute;
  content: '';
  bottom: -10px;
  width: 100%;
  height: 1px;
  background: #000;
}
.search-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(26, 30, 34, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 999;
}
</style>
