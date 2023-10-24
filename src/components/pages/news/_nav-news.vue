<template>
  <div>
    <nav
      class="tablet:bg-textBlue tablet:text-white tablet:px-[240px]"
    >
      <ul
        class="tablet:h-[72px] flex flex-col w-[750px] tablet:flex-row justify-start tablet:justify-end tablet:items-center gap-[20px] tablet:gap-[100px] uppercase"
      >
        <li>
          <router-link :to="{ name: 'Domestic' }" @click="emit('handleShow')" active-class="active-event-class">{{
            t('domestic')
          }}</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'International' }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t('international') }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emit = defineEmits(['handleShow']);
</script>

<style scoped></style>
