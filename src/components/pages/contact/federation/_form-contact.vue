<template>
  <form
    class="w-full tablet:w-1/2 h-full flex flex-col"
    @submit.prevent="handleFormSubmit"
  >
    <label for="name" class="font-bold">{{ t('name') }}</label>
    <input
      type="text"
      name="name"
      v-model="formData.name"
      pattern="[a-zA-Z\s]+"
      required
    />
    <p v-if="formErrors.name" class="error-message">{{ formErrors.name }}</p>

    <label for="email" class="font-bold">{{ t('email') }}</label>
    <input
      type="email"
      name="email"
      v-model="formData.email"
      @change="handleEmailChange"
      required
    />
    <p v-if="formErrors.email" class="error-message">{{ formErrors.email }}</p>

    <label for="phone" class="font-bold">{{ t('phone') }}</label>
    <input
      type="tel"
      name="phone"
      v-model="formData.phone"
      pattern="[0-9]{10}"
      @change="handlePhoneChange"
      required
    />
    <p v-if="formErrors.phone" class="error-message">{{ formErrors.phone }}</p>

    <label for="title" class="font-bold">{{ t('title-form') }}</label>
    <input type="text" name="title" v-model="formData.title" required />

    <label for="content" class="font-bold">{{ t('content') }}</label>
    <textarea
      name="content"
      cols="30"
      rows="10"
      v-model="formData.content"
    ></textarea>

    <button type="submit" class="font-bold uppercase">{{ t('send') }}</button>
  </form>
  <transition name="modal" mode="out-in">
    <SuccessModal v-if="modalSuccess" @closeModalSuccess="closeModalSuccess" />
  </transition>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import postContact from '@/composables/postContact';
import SuccessModal from '@/modal/success-modal.vue';
const { t } = useI18n();
const {
  formData,
  modalSuccess,
  closeModalSuccess,
  formErrors,
  handleEmailChange,
  handlePhoneChange,
  handleSubmit,
} = postContact();
const handleFormSubmit = async () => {
  await handleSubmit();
};
</script>

<style scoped>
form {
  padding: 0 24px;
  border-radius: 8px;
  border: 1px solid #797979;
}

label {
  margin: 16px 0;
}
input {
  height: 64px;
}
input,
textarea {
  padding: 0 24px;
  border-radius: 30px;
  border: 1px solid #a5a5a5;
  background: #fff;
}

textarea {
  padding: 24px;
}
button {
  width: 135px;
  height: 48px;
  margin: 24px auto 12px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #ffde2f;
}
</style>
