<template>
  <section>
    <nav
      class="tablet:bg-textBlue tablet:text-white tablet:px-[240px]"
    >
      <ul
        class="tablet:h-[72px] flex flex-col tablet:flex-row justify-start tablet:justify-between tablet:items-center gap-[20px] tablet:gap-0 uppercase"
      >
        <li>
          <router-link
            :to="{
              name: 'GenreCanoeing',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("genre-canoeing") }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'GenreRowing',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("genre-rowing") }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'GenreSailing',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("genre-sailing") }}</router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import getGenres from '@/composables/getGenres';
import { onMounted } from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const emit = defineEmits(['handleShow']);
const { genres, fetchDataGenres } = getGenres('');
onMounted(async () => {
  await fetchDataGenres();
});
</script>

<style scoped></style>
