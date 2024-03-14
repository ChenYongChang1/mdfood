<template>
  <div>
    <dd-banner-head></dd-banner-head>
    <dd-swiper></dd-swiper>
    <dd-feature></dd-feature>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "index" });
import DdBannerHead from "@/components/pages/m/DdBannerHead.vue";
import DdSwiper from "@/components/pages/m/DdSwiper.vue";
import DdFeature from "@/components/pages/m/DdFeature.vue";
</script>

<style lang="scss" scoped></style>
