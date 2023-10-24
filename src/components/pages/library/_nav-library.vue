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
              name: 'LegalDocument',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('legal-doc') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'LawRegulations',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('law-regulations') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'References',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('references') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'PhotoGallery',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('photo') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'VideoGallery',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('video') }}</router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emit = defineEmits(['handleShow']);
</script>

<style></style>
