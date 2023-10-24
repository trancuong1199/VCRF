<template>
  <article class="container my-16">
    <section class="pb-4 border-b border-borderBlue">
      <div>
        <p
          class="w-[150px] h-[30px] bg-textBlue text-white flex justify-center items-center font-bold text-sm rounded-[5px]"
        >
          {{ newsDetails?.tag || 'SeaGames, Sailing' }}
        </p>
        <h1 class="my-4 text-[3rem]">{{ newsDetails?.title || 'SEA GAMES 32: ĐỘI TUYỂN SAILING VIỆT NAM CHỜ GIƯƠNG BUỒM RA BIỂN LỚN' }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <p>Ngày 23 tháng 10 năm 2023</p>
        </div>
      </div>
    </section>
    <section class="text-xl">
      <div class="font-bold my-6">
        {{ newsDetails?.header || 'SEA Games 32 là giải đấu lớn đầu tiên của đội tuyển sailing Việt Nam, nơi các VĐV được kỳ vọng sẽ thi đấu và học hỏi kinh nghiệm để trưởng thành.' }}
      </div>
      <div class="pl-2">
        {{ newsDetails?.main || 'Sailing (thuyền buồm) là môn thể thao Olympic nhưng lại rất mới mẻ ở Việt Nam. Tại SEA Games 32, đội tuyển sailing Việt Nam sẽ có lần đầu tiên tranh tài ở giải đấu quốc tế, với các tay chèo Tạ Bá Trọng, Phạm Văn Mách, Bùi Tuấn Anh, Nguyễn Thị Mỹ Hạnh, Bùi Nguyễn Lệ Hằng tham gia thi đấu. Để chuẩn bị cho SEA Games 32, toàn đội đã tới Preah Sihanouk (Campuchia) để tập huấn từ 19.4 đến 29.4, nhằm làm quen với điều kiện tại đây Chia sẻ với Thanh Niên, ông Nguyễn Hải Đường, Phó Chủ tịch kiêm Tổng thư ký Liên đoàn Đua thuyền Việt Nam khẳng định môn sailing ở Việt Nam dù tuổi đời còn non trẻ, nhưng có đầy đủ tiềm năng phát triển bởi nước ta có nhiều sông, hồ và đường bờ biển trải dài. Sailing là môn thể thao có trong chương trình thi đấu của Olympic. Do đó, phát triển đua thuyền sailing không chỉ giúp nhân rộng phong trào, mà còn tạo ra thêm một hướng đi cho thể thao Việt Nam ở sân chơi quốc tế trong tương lai gần.' }}
      </div>
      <div class="w-4/5 mx-auto my-4">
        <img
          class="w-full h-full"
          src="@/assets/images/newDetailimg.png"
          :alt="newsDetails?.title"
        />
      </div>
      <div>
        {{ newsDetails?.footer || '"Việt Nam nên phát triển môn đua thuyền buồm, bởi nước ta có lợi thế nhiều sông, hồ, biển, có sức gió, sức nước. Ngoài ra, môn sailing không đòi hỏi quá nhiều sức mạnh, mà phụ thuộc vào trí tuệ, khả năng phân tích tình huống, sự khéo léo, uyển chuyển, nhanh nhẹn của cơ thể, phối hợp tay chân, ánh mắt, điều khiển con thuyền trên ngọn sóng, cơn gió để đạt tốc độ nhanh nhất trên đường đua. Người Việt Nam đủ tố chất và có thể làm được. Đây là môn thể thao trên biển lành mạnh, hấp dẫn bởi đây không phải môn sử dụng động cơ, phương tiện, mà chỉ là con thuyền sử dụng sức gió, sức nước và sự khôn khéo của con người. Đó cũng là cơ hội để thể thao Việt Nam cạnh tranh, chiến thắng ở sân chơi quốc tế. Ngoài ra, phát triển đua thuyền sailing cũng giúp mặt biển Việt Nam sinh động hơn, quảng bá du lịch tốt hơn với những cánh buồm như đàn hải âu bay lượn trên mặt biển", ông Nguyễn Hải Đường chia sẻ.' }}
      </div>
    </section>
    <section class="my-8">
      <div class="flex justify-center">
        <h2 class="text-textBlue text-[40px]">{{ t('related-news') }}</h2>
      </div>
      <div class="my-8 recent-news">
        <div class="flex flex-wrap">
          <div v-for="newData in newsData" :key="newData.id">
            <article class="w-[290px] mx-[10px] mt-[20px] flex flex-col items-start gap-[20px] bg-lightBlue">
              <div class="w-full">
                <img class="w-full h-[100px] tablet:h-[185px] item-img" v-lazy="newData?.image || newsImage"
                  :alt="newData?.title" />
              </div>
              <div class="px-[12px] flex flex-col items-start gap-[12px] pb-4">
                <div>
                  <p class="italic text-sm">
                    {{ formatDay(newData?.publication_date) }}
                  </p>
                </div>
                <div>
                  <h3 class="text-[10px] tablet:text-[16px] text-left">
                    {{
                      newData?.title.length > 50
                      ? newData?.title.substring(0, 50) + '...'
                      : newData?.title
                    }}
                  </h3>
                </div>
                <div class="h-[57px] text-start">
                  <p class="text-[8px] tablet:text-sm">
                    {{
                      newData?.description.length > 100
                      ? newData?.description.substring(0, 100) + '...'
                      : newData?.description
                    }}
                  </p>
                </div>
                <p class="text-blue mt-3 text-sm underline underline-offset-4 cursor-pointer" @click="() =>
                      router.push({
                        name: 'NewsDetails',
                        params: { id: 1, category: 1 },
                      })
                    ">{{ t('view-detail') }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="btn view-more flex justify-center mb-5">
      <button class="bg-darkYellow w-[180px] h[40px] rounded-full font-bold">{{ t('view-more') }}</button>
    </div>
    </section>
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { formatDay } from '@/plugins/date-utils';
import { formatDate } from '@/plugins/date-utils';
import getNewsDetails from '@/composables/getNewsDetails.js';
import newsImage from '@/assets/images/default.png'
import getRelatedNews from '@/composables/getRelatedNews.js';
import NewsPreview from '@/components/preview/_news-preview.vue';
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const newsId = ref(route.params.id);
const newsCategory = ref(route.params.category);
const { newsDetails, fetchData } = getNewsDetails(newsId.value);
const { relatedNews, fetchDataRelated } = getRelatedNews(
  newsCategory.value,
  newsId.value
);
const shareUrl = ref(window.location.href);
onMounted(async () => {
  await fetchData();
  await fetchDataRelated();
});
const newsData = [{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
{ title: 'Tưng bừng lễ hội đua thuyền trên sông Cà, xuân Quý Mão ', publication_date: '11/11/1999', description: 'Chiều 23/1 (tức mùng hai Tết Nguyên đán), Lễ hội đua thuyền truyền thống trên sông Cà Ty “Mừng Đảng-Mừng Xuân Quý Mão 2023” của thành phố...' },
]
</script>

<style></style>
