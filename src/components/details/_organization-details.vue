<template>
  <section>
    <div v-if="!loading">
      <div v-if="organizationDetails[0]?.number_group">
        <div
          class="relative h-[402px] tablet:h-[300px] flex justify-center items-center"
        >
          <div class="absolute w-full h-full -z-20">
            <img
              class="w-full h-full"
              v-lazy="organizationDetails[0]?.subject.images"
              alt="bg img"
            />
          </div>
          <div
            class="container flex flex-col-reverse tablet:flex-row justify-start items-center h-full tablet:gap-[4rem]"
          >
            <div class="mt-auto flex">
              <img
                class="w-[340px] m-auto tablet:m-0 tablet:w-[317px] h-[272px]"
                v-lazy="organizationDetails[0]?.subject.image"
                :alt="organizationDetails[0]?.name_group"
              />
            </div>
            <div
              class="flex flex-col my-4 tablet:my-0 gap-[10px] tablet:gap-[20px]"
            >
              <p class="text-yellow uppercase">
                {{ organizationDetails[0]?.subject.name }}
              </p>
              <h3 class="text-yellow text-[24px] tablet:text-4xl">
                {{ organizationDetails[0]?.name_group }}
              </h3>
              <div class="text-yellow">
                <p>Thành lập: {{ organizationDetails[0]?.year }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-16">
          <div>
            <h2>{{ t('about') }}</h2>
          </div>
          <div class="my-8">
            <p class="text-[8px] tablet:text-base">
              {{ organizationDetails[0]?.intro }}
            </p>
          </div>
        </div>
        <div class="container my-4 tablet:my-16">
          <div>
            <h2>THÀNH TÍCH NỔI BẬT</h2>
          </div>
          <div class="my-8 flex justify-between">
            <div class="w-[160px] tablet:w-auto">
              <div class="tablet:p-[1rem] text-center">
                <h4 class="text-[8px] tablet:text-2xl font-bold">GIẢI ĐẤU</h4>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[10px] tablet:text-base"
                  v-for="result in results"
                  :key="result?.event.id"
                >
                  {{ result?.event.name }}
                </p>
              </div>
            </div>
            <div class="w-[80px] tablet:w-auto text-center">
              <div class="tablet:p-[1rem]">
                <h4 class="text-[8px] tablet:text-2xl font-bold">
                  NĂM TỔ CHỨC
                </h4>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[10px] tablet:text-base"
                  v-for="result in results"
                  :key="result?.event.id"
                >
                  {{ formatDay(result?.event.times) }}
                </p>
              </div>
            </div>
            <div class="w-[80px] tablet:w-auto text-center">
              <div class="tablet:p-[1rem]">
                <h4 class="text-[8px] tablet:text-2xl font-bold">VỊ TRÍ</h4>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[10px] tablet:text-base"
                  v-for="result in results"
                  :key="result?.event.id"
                >
                  {{ result?.rank }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tablet:my-16">
          <div>
            <h2>{{ t('member') }}</h2>
          </div>
          <div class="container my-4">
            <div class="flex justify-end">
              <div class="relative">
                <input
                  class="search-item"
                  id="search"
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm"
                  v-model="searchValue"
                  @keydown.enter="() => handleSearch(searchValue)"
                />
                <img
                  class="absolute w-[12px] tablet:w-[24px] tablet:h-[24px] height-[12px] top-[0.8rem] tablet:top-[0.8rem] left-[1.25rem] z-10 cursor-pointer"
                  v-lazy="searchIc"
                  alt="search ic"
                  @click="() => handleSearch(searchValue)"
                />
              </div>
            </div>
          </div>
          <div class="container mt-8 overflow-hidden">
            <div v-if="!loadingMember">
              <transition name="fade" mode="out-in">
                <div class="list-member">
                  <div
                    class="relative w-full h-full flex items-end"
                    v-for="member in members"
                    :key="member?.id"
                  >
                    <img
                      class="absolute w-full h-full -z-10"
                      v-lazy="member?.image"
                      :alt="member?.fullname"
                    />
                    <div
                      class="w-full p-[20px] bg-black text-white flex justify-between items-center"
                    >
                      <div>
                        <h4>{{ member?.fullname }}</h4>
                        <p class="uppercase my-4">{{ member?.object.name }}</p>
                      </div>
                      <div
                        class="cursor-pointer"
                        @click="
                          () =>
                            router.push({
                              name: 'PersonalDetails',
                              params: { id: member?.number_athletes },
                            })
                        "
                      >
                        <img :src="arrowRightIc" alt="arrow right ic" />
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <div
                v-if="members.length !== 0"
                class="my-8 flex justify-center btn view-more"
              >
                <button @click="loadMore">{{ t('view-more') }}</button>
              </div>
            </div>
            <div v-else class="flex justify-center items-center">
              <LoadingComponents />
            </div>
          </div>
        </div>
        <div class="container my-16">
          <div>
            <h2>Đăng ký tham gia</h2>
          </div>
          <form
            class="w-[234px] tablet:w-[552px] h-full mx-auto my-8 flex flex-col justify-center"
            @submit.prevent="handleFormSubmit"
          >
            <label for="name">{{ t('name') }}</label>
            <input
              type="text"
              name="name"
              pattern="[a-zA-Z\s]+"
              v-model="formData.name"
              required
            />
            <p v-if="formErrors.name" class="error-message">
              {{ formErrors.name }}
            </p>
            <label for="email">{{ t('email') }}</label>
            <input
              type="email"
              name="email"
              v-model="formData.email"
              @change="handleEmailChange"
              required
            />
            <p v-if="formErrors.emial" class="error-message">
              {{ formErrors.emial }}
            </p>
            <label for="phone">{{ t('phone') }}</label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              v-model="formData.phone"
              @change="handlePhoneChange"
              required
            />
            <p v-if="formErrors.phone" class="error-message">
              {{ formErrors.phone }}
            </p>
            <button type="submit">{{ t('send') }}</button>
          </form>
          <div>
            <p class="text-gray text-center italic text-[8px] tablet:text-base">
              Hãy để lại thông tin câu lạc bộ sẽ liên hệ với bạn nhanh nhất!
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <NotFound />
      </div>
    </div>
    <div v-else class="flex justify-center items-center">
      <LoadingComponents />
    </div>
  </section>
  <transition name="modal" mode="out-in">
    <SuccessModal v-if="modalSuccess" @closeModalSuccess="closeModalSuccess" />
  </transition>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { formatDay } from '@/plugins/date-utils.js';
import searchIc from '@/assets/images/tabler_search.svg';
import arrowRightIc from '@/assets/images/arrow-right.svg';
import getOrganizationDetails from '@/composables/getOrganizationDetails.js';
import getResults from '@/composables/getResults.js';
import getMembersOfGroups from '@/composables/getMembersOfGroup.js';
import NotFound from '@/components/structure/not-found-page/_not-found.vue';
import LoadingComponents from '@/components/structure/loading-components/loading-components.vue';
import postCustomers from '@/composables/postCustomers.js';
import SuccessModal from '@/modal/success-modal.vue';
const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const organizationId = ref(route.params.id);
const searchValue = ref('');
const { organizationDetails, loading, fetchDataOrganizationDetails } =
  getOrganizationDetails(organizationId.value);
const { results, fetchDataResults } = getResults(organizationId.value);
const { members, loadingMember, fetchDataMember, handleSearch, loadMore } =
  getMembersOfGroups(organizationId.value);
const {
  formData,
  modalSuccess,
  closeModalSuccess,
  formErrors,
  handleEmailChange,
  handlePhoneChange,
  handleSubmit,
} = postCustomers();
onMounted(async () => {
  await fetchDataOrganizationDetails();
  await fetchDataResults();
  await fetchDataMember();
});

const handleFormSubmit = async () => {
  await handleSubmit();
};
</script>

<style scoped>
button {
  width: 75px;
  height: 25px;
  font-size: 12px;
  margin: 24px auto 12px;
  border-radius: 30px;
  background: #ffde2f;
}
label {
  margin: 12px 0;
  font-size: 12px;
}
input {
  width: 234px;
  height: 35px;
  padding: 1rem 1.5rem 1rem 3rem;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #dadada;
  background: rgba(165, 165, 165, 0.42);
}

@media only screen and (min-width: 480px) {
  button {
    width: 135px;
    height: 48px;
    font-size: 1rem;
  }
  input {
    width: 100%;
    height: 50px;
  }
  label {
    font-size: 1rem;
  }
}
</style>
