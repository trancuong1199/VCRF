<template>
  <section>
    <nav
      class="tablet:bg-textBlue tablet:text-white tablet:px-[240px]"
    >
      <ul
        class="tablet:h-[72px] flex flex-col tablet:flex-row justify-start w-[600px] tablet:justify-between tablet:items-center gap-[20px] tablet:gap-0 uppercase"
      >
        <li>
          <router-link
            :to="{
              name: 'EventSchedule',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("event-schedule") }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'UpcomingEvents',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("upcoming-events") }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'CompetitionResults',
            }"
            active-class="active-event-class"
            @click="emit('handleShow')"
            >{{ t("competition-results") }}</router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const emit = defineEmits(["handleShow"]);
</script>
<style scoped>
</style>
