<template>
  <dd-banner-head></dd-banner-head>
  <dd-swiper></dd-swiper>
  <dd-feature></dd-feature>
  <dd-company></dd-company>
  <dd-download-app></dd-download-app>
</template>

<script lang="ts" setup>
defineOptions({ name: "index" });

import DdBannerHead from "@/components/pages/m/DdBannerHead.vue";
import DdSwiper from "@/components/pages/m/DdSwiper.vue";
import DdFeature from "@/components/pages/m/DdFeature.vue";
import DdCompany from "@/components/pages/m/DdCompany.vue";
import DdDownloadApp from "@/components/pages/m/DdDownloadApp.vue";

import { useI18n } from "vue-i18n";

const i18n = useI18n();
i18n.locale.value = "zh-cn";
</script>

<style lang="scss" scoped></style>
