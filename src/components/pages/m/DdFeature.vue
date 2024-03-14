<template>
  <div class="pd">
    <dd-module-card title="宝藏功能" direction="right">
      <div class="feature-list dd-flex dd-flex-warp">
        <div
          v-for="(item, index) in featureList"
          :key="`item-${index}`"
          class="feature-item dd-flex dd-flex-center dd-align-center dd-flex-column"
        >
          <div class="feature-row">
            <vite-img :src="`@/assets/images/${item.icon}`"></vite-img>
          </div>
          <div class="feature-text">{{ $t(`common.${item.name}`) }}</div>
        </div>
      </div>
    </dd-module-card>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdFeature" });
import DdModuleCard from "../common/DdModuleCard.vue";
import ViteImg from "../common/ViteImg.vue";
const featureList = [
  {
    icon: "1.svg",
    name: "定制计划",
  },
  {
    icon: "2.svg",
    name: "断食追踪",
  },
  {
    icon: "3.svg",
    name: "食谱推荐",
  },
  {
    icon: "4.svg",
    name: "热量查询",
  },
  {
    icon: "5.svg",
    name: "喝水提醒",
  },
  {
    icon: "6.svg",
    name: "饮食记录",
  },
  {
    icon: "7.svg",
    name: "数据分析",
  },
  {
    icon: "8.svg",
    name: "断食知识",
  },
];
</script>

<style lang="scss" scoped>
.pd {
  padding: 0 5.3vw;
  padding-top: 10vw;
}
.feature-list {
  margin-bottom: 9vw;
  .feature-item {
    width: 25%;
    margin-bottom: 6.67vw;
    .feature-row {
      width: 13.86vw;
      height: 13.86vw;
      background: white;
      border-radius: 15px;
      margin-bottom: 2.6vw;
      padding: 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .feature-text {
      width: 100%;
      padding: 0 8px;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
