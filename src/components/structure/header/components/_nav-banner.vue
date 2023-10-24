<template>
  <nav
    class="hidden tablet:block pt-[24px] pl-[38px] pr-[120px] border-t border-borderBlue"
  >
    <ul class="flex justify-between text-xl font-semibold gap-[20px] uppercase text-textBlue">
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'About' }"
          >{{ t('about') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          active-class="active-nav-class"
          :to="{ name: 'Event' }"
          >{{ t('event') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'Genre' }"
          active-class="active-nav-class"
          >{{ t('genre') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'News' }"
          active-class="active-nav-class"
          >{{ t('news') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'Member' }"
          active-class="active-nav-class"
          >{{ t('member') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'Library' }"
          active-class="active-nav-class"
          >{{ t('library') }}</router-link
        >
      </li>
      <li>
        <router-link
          class="transition-colors inline-block hover:bg-textBlue hover:text-white p-4"
          :to="{ name: 'Contact' }"
          active-class="active-nav-class"
          >{{ t('contact') }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style></style>
