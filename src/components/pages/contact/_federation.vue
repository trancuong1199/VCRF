<template>
  <section
    class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center"
  >
    <div class="absolute w-full h-full -z-20">
      <img class="w-full h-full" v-lazy="contactImg" alt="contact img" />
    </div>
    <div>
      <h3 class="container text-yellow">{{ t('title') }}</h3>
    </div>
  </section>
  <section
    class="container my-16 tablet:flex justify-between items-stretch gap-[40px]"
  >
    <ContactInformation />
    <FormContact />
  </section>
</template>

<script setup>
import contactImg from '@/assets/images/contact/contact.jpg';
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
const ContactInformation = defineAsyncComponent(() =>
  import('./federation/_contact-information.vue')
);
const FormContact = defineAsyncComponent(() =>
  import('./federation/_form-contact.vue')
);
const { t } = useI18n();
</script>

<style></style>
