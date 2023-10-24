<template>
  <footer class="bg-boldBlue text-white text-[10px] tablet:text-base">
    <section
      class="container py-[20px] flex items-stretch flex-col tablet:flex-row items-center justify-center tablet:justify-between"
    >
      <div>
          <img class="w-[150px] h-[190px]" v-lazy="footerLogo" alt="vcrsf logo" />
      </div>
      <div class="tablet:m-8 flex flex-col justify-center items-center">
        <div class="mt-[20px] flex flex-col gap-[12px]">
          <p>Địa chỉ: 36 Trần Phú, Hà Nội, Việt Nam</p>
          <p>Fax: (84) 4 - 3 7475909</p>
          <p>Điện thoại: (84) 4 - 3 7475908</p>
          <p>
            Email:
            <a href="#" target="_blank" rel="noopener noreferrer"
              >vcrsf@vnn.vn</a
            >
          </p>

          <div class="flex gap-[16px] justify-center tablet:justify-start">
            <img v-lazy="fbIc" alt="facebook icon" />
            <img v-lazy="insIc" alt="instagram icon" />
            <img v-lazy="ytIc" alt="youtube icon" />
          </div>
        </div>
      </div>
      <div class="m-2 tablet:m-8 flex flex-col justify-center">
        <div>
          <h5 class="text-[16px] text-center tablet:text-start font-bold">
            Menu
          </h5>
        </div>
        <div class="mt-[10px] flex gap-[20px]">
          <div class="flex flex-col gap-[12px]">
            <router-link :to="{ name: 'Home' }">{{ t("home") }}</router-link>
            <router-link :to="{ name: 'About' }">{{ t("about") }}</router-link>
            <router-link :to="{ name: 'Genre' }">{{ t("genre") }}</router-link>
            <router-link :to="{ name: 'Event' }">{{ t("event") }}</router-link>
          </div>
          <div class="flex flex-col gap-[12px]">
            <router-link :to="{ name: 'News' }">{{ t("news") }}</router-link>
            <router-link :to="{ name: 'Member' }">{{
              t("member")
            }}</router-link>
            <router-link :to="{ name: 'Library' }">{{
              t("library")
            }}</router-link>
            <router-link :to="{ name: 'Contact' }">{{
              t("contact")
            }}</router-link>
          </div>
        </div>
      </div>
    </section>
    <transition name="modal" mode="out-in">
      <SuccessModal
        v-if="modalSuccess"
        @closeModalSuccess="closeModalSuccess"
      />
    </transition>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
// import { onMounted } from 'vue';
import postCustomers from "@/composables/postCustomers";
import fbIc from "@/assets/images/fb-ic.svg";
import insIc from "@/assets/images/ins-ic.svg";
import ytIc from "@/assets/images/yt-ic.svg";
import footerLogo from "@/assets/images/vcrsf_logo_footer.svg";
import SuccessModal from "@/modal/success-modal.vue";
const { t } = useI18n();
const {
  formData,
  modalSuccess,
  closeModalSuccess,
  formErrors,
  handleEmailChange,
  handleSubmit,
} = postCustomers();
// onMounted(async () => await handleSubmit());
const handleFormSubmit = async () => {
  await handleSubmit();
};
</script>

<style></style>
