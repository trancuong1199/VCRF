<template>
  <div @click="toggleLang" class="ml-4">
    <img
      class="w-[24px] h-[24px] cursor-pointer"
      src="@/assets/images/languageIcon.svg"
      alt="search"
    />
  </div>
</template>

<script setup>
import i18n from "@/plugins/i18n";
import { ref } from "vue";

const currLang = ref(window.localStorage.getItem("lang") || "vi");

const toggleLang = () => {
  currLang.value = currLang.value === "vi" ? "en" : "vi";
  i18n.global.locale.value = currLang.value;
  window.localStorage.setItem("lang", i18n.global.locale.value);
};
</script>

<style scoped>
button {
  border: none;
}
</style>
