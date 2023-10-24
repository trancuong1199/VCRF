<template>
  <section class="hidden w-full tablet:flex flex-col justify-start">
    <div class="w-full pr-[120px] flex justify-end items-center">
      <div class="border-r border-borderBlue modal-search">
        <img
          class="w-[24] mx-2 h-[24px]"
          src="@/assets/images/facebook.svg"
          alt="search"
        />
        <img
          class="w-[24] mx-2 h-[24px]"
          src="@/assets/images/instagram.svg"
          alt="search"
        />
        <img
          class="w-[24px] mx-2 h-[18px]"
          src="@/assets/images/youtube.svg"
          alt="search"
        />
      </div>
      <LangBanner />
    </div>
  </section>
</template>

<script setup>
import LangBanner from "./_lang-banner.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const searchValue = ref("");
const toggleSearch = ref(false);
const handleSearch = () => {
  router.push({ name: "Search", query: { s: searchValue.value } });
  toggleSearch.value = false;
  searchValue.value = "";
};
</script>

<style scoped>
.modal-search {
  width: 150px;
  height: 60px;
  padding: 18px;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
}
.modal-search.search-active {
  width: 100%;
}
input {
  border: none;
  outline: none;
}
input:focus {
  outline: none;
}
</style>
