<template>
  <div class="en container">
    <dd-banner-head></dd-banner-head>
    <dd-swiper></dd-swiper>
    <dd-feature></dd-feature>
    <dd-company></dd-company>
    <dd-download-app></dd-download-app>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "enindex" });

import DdBannerHead from "@/components/pages/m/DdBannerHead.vue";
import DdSwiper from "@/components/pages/m/DdSwiper.vue";
import DdFeature from "@/components/pages/m/DdFeature.vue";
import DdCompany from "@/components/pages/m/DdCompany.vue";
import DdDownloadApp from "@/components/pages/m/DdDownloadApp.vue";

import { useI18n } from "vue-i18n";

const i18n = useI18n();
i18n.locale.value = "en";
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(85.32deg, #eafec1 6.52%, #f5ffdc 99.27%);
}
</style>
