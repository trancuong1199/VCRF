<template>
  <section>
    <div class="overlay relative h-[100px] tablet:h-[300px] flex justify-center items-center">
      <div class="absolute w-full h-full -z-20">
        <img class="w-full h-full" :src="aboutImg" alt="Giới thiệu liên đoàn img" />
      </div>
      <div>
        <h3 class="container text-yellow">
          {{ t('about-titleImg') }}
        </h3>
      </div>
    </div>
    <div class="container">
      <h3 class="flex justify-center text-textBlue my-10">LIÊN ĐOÀN ĐUA THUYỀN VIỆT NAM</h3>
      <span>Lorem ipsum dolor sit amet consectetur. Ipsum ornare molestie bibendum mauris pharetra cras sagittis tristique
        lacus. Id in ultricies neque euismod nulla eget nunc. Leo nulla nibh lacinia feugiat. Dictum hendrerit urna
        viverra
        ornare aenean urna scelerisque est. Curabitur volutpat egestas augue pharetra purus. Pharetra suspendisse cras
        vitae
        libero at proin tellus id sit. Nisi posuere id eget feugiat sed nunc posuere pulvinar integer. Nam mauris augue
        donec ultrices posuere. Tempor lobortis odio senectus duis eleifend vitae at feugiat. Magna scelerisque nunc amet
        fames tortor nunc. At orci blandit hac neque lectus interdum gravida. Etiam massa in id elit interdum nulla
        consectetur egestas.
        Eget sodales sed arcu velit ut faucibus. Quam id gravida mauris mi nunc elit a arcu. Tristique id integer
        tincidunt
        etiam ultrices. Enim amet vulputate turpis euismod. Cras quisque aenean at ipsum purus. Ipsum purus nec ac
        pharetra
        ultricies massa quam gravida. Orci porttitor integer phasellus diam felis tempor sagittis amet. Ut at habitant
        pellentesque faucibus augue erat. A tincidunt feugiat id quis vulputate tristique libero. Gravida id sagittis
        gravida nibh faucibus. Gravida dignissim aliquam id sem.
        Ornare et nibh risus tortor fringilla ac facilisis mattis. Morbi arcu nulla scelerisque faucibus vulputate et
        feugiat dignissim suscipit. Consectetur orci sit pretium arcu nisl sapien nunc. Lacus euismod mattis non iaculis
        pellentesque. Id duis eros sit ullamcorper. Sapien pretium leo dapibus pulvinar massa odio vitae nulla
        pellentesque.
        Eu vel a quam sed. Lectus enim congue eu lectus mattis aliquet pulvinar viverra. Tortor tristique sit ultricies
        eu.</span>
      <div class="h-[1px] bg-textBlue mt-10"></div>
      <h3 class="flex justify-center text-textBlue my-10">THÀNH VIÊN BAN LÃNH ĐẠO</h3>
      <div class="flex px-60">
        <img src="@/assets/images/imageAbout1.png" class="mr-10" />
        <div class="py-10">
          <p>“ Lorem ipsum dolor sit amet consectetur. Cum sed netus suspendisse ullamcorper. Amet turpis suspendisse ut
            bibendum viverra venenatis odio. Amet turpis suspendisse ut bibendum viverra venenatis odio ”</p>
          <p class="flex mt-20 mb-5 text-[25px]">Ông<span class="text-[25px] font-bold">&nbsp; Nguyễn Văn A</span></p>
          <p>Chủ tịch Liên đoàn, Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div class="info-leader p-10 flex justify-between my-[35px]">
        <div>
          <img src="@/assets/images/imageAbout2.png" />
          <p class="flex mt-5 mb-1 text-[25px]">Ông<span class="text-[25px] font-bold">&nbsp; Nguyễn Văn A</span></p>
          <p class="w-[200px]">Phó Chủ tịch Liên đoàn,
            Tổng thư kí Liên đoàn</p>
        </div>
        <div>
          <img src="@/assets/images/imageAbout2.png" />
          <p class="flex mt-5 mb-1 text-[25px]">Ông<span class="text-[25px] font-bold">&nbsp; Nguyễn Văn A</span></p>
          <p class="w-[200px]">Phó Chủ tịch Liên đoàn,
            Tổng thư kí Liên đoàn</p>
        </div>
        <div>
          <img src="@/assets/images/imageAbout2.png" />
          <p class="flex mt-5 mb-1 text-[25px]">Ông<span class="text-[25px] font-bold">&nbsp; Nguyễn Văn A</span></p>
          <p class="w-[200px]">Phó Chủ tịch Liên đoàn,
            Tổng thư kí Liên đoàn</p>
        </div>
        <div>
          <img src="@/assets/images/imageAbout2.png" />
          <p class="flex mt-5 mb-1 text-[25px]">Ông<span class="text-[25px] font-bold">&nbsp; Nguyễn Văn A</span></p>
          <p class="w-[200px]">Phó Chủ tịch Liên đoàn,
            Tổng thư kí Liên đoàn</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import aboutImg from '@/assets/images/about-page/aboutBanner.jpg';
import { useI18n } from 'vue-i18n';
const emit = defineEmits(['handleShow']);
const { t } = useI18n();
</script>

<style scoped>
  .info-leader {
    background-color: #ebf6fb;
  }
</style>
