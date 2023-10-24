<template>
  <section>
    <nav
      class="tablet:bg-textBlue tablet:text-white tablet:px-[240px]"
    >
      <ul
        class="tablet:h-[72px] flex flex-col w-[1250px] tablet:flex-row justify-start tablet:justify-end tablet:items-center gap-[20px] tablet:gap-[100px] uppercase"
      >
        <li>
          <router-link
            :to="{
              name: 'Federation',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('federation') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'Alliance',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('alliance') }}</router-link
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

<style scoped></style>
