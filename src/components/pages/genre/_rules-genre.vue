<template>
  <div>
    <div class="my-16">
      <h2>{{ t('rules') }}</h2>
    </div>
    <div class="text-xl">
      <p>
        {{ props.summary }}
      </p>
    </div>
    <div class="btn view-more my-8 flex justify-center">
      <button>{{ t('view-more') }}</button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps(['summary']);
</script>
