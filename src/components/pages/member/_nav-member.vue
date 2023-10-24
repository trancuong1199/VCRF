<template>
  <section>
    <nav
      class="tablet:bg-textBlue tablet:text-white tablet:px-[220px]"
    >
      <ul
        class="tablet:h-[72px] w-[900px] flex flex-col tablet:flex-row justify-start tablet:justify-end tablet:items-center gap-[20px] tablet:gap-[100px] uppercase"
      >
        <li>
          <router-link
            :to="{
              name: 'Personal',
            }"
            @click="emit('handleShow')"
            active-class="active-event-class"
            >{{ t('personal') }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'Organization',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('organization') }}</router-link
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
