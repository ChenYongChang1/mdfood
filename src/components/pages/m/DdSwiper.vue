<template>
  <div class="swiper-box">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :loop="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in swiperList"
        :key="`swiper-${index}`"
      >
        <vite-img
          :src="item"
          :cover="item.replace('/images/', '/images/copy/')"
        ></vite-img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdSwiper" });
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";

// import "./style.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import ViteImg from "../common/ViteImg.vue";
const modules = [EffectCoverflow];
const swiperList = [
  "@/assets/images/lun-1.png",
  "@/assets/images/lun-2.png",
  "@/assets/images/lun-3.png",
  "@/assets/images/lun-4.png",
  "@/assets/images/lun-5.png",
  "@/assets/images/lun-6.png",
  "@/assets/images/lun-7.png",
];
</script>

<style lang="scss" scoped>
.swiper-box {
  width: 140vw;
  position: relative;
  left: -20vw;
}
</style>
