<template>
  <div class="pd">
    <div class="head-title">{{ $t(`common.宝藏功能`) }}</div>
    <div class="feature-img">
      <div class="head-img">
        <img src="@/assets/images/right-header.svg" alt="" />
      </div>
      <div class="close-icon dd-flex">
        <div class="ff"></div>
        <div class="fe"></div>
        <div class="e3"></div>
      </div>
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
      <dd-comment></dd-comment>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdFeature" });

import ViteImg from "../common/ViteImg.vue";
import DdComment from "./DdComment.vue";
const featureList = [
  {
    icon: "1.png",
    name: "定制计划",
  },
  {
    icon: "2.png",
    name: "断食追踪",
  },
  {
    icon: "3.png",
    name: "食谱推荐",
  },
  {
    icon: "4.png",
    name: "热量查询",
  },
  {
    icon: "5.png",
    name: "喝水提醒",
  },
  {
    icon: "6.png",
    name: "饮食记录",
  },
  {
    icon: "7.png",
    name: "数据分析",
  },
  {
    icon: "8.png",
    name: "断食知识",
  },
];
</script>

<style lang="scss" scoped>
.en {
  .pd {
    .head-title {
      font-size: 4.26vw;
      word-break: break-word;
      padding-left: 10vw;
      line-height: 15px;
      font-weight: 600;
      padding-top: 2vw;
    }
  }
}
.pd {
  padding: 0 2.1vw;
  padding-top: 21vw;
  position: relative;
  .head-title {
    width: 42.9vw;
    height: 15.2vw;
    position: absolute;
    z-index: 0;
    background: linear-gradient(92.44deg, #5aee5f 0.93%, #0fc615 95.81%);
    top: 10vw;
    right: 2.3vw;
    border-radius: 3.67vw 3.67vw 0 3.67vw;
    padding: 0 4.5vw 0 1vw;
    font-size: 5.86vw;
    font-weight: 600;
    color: white;
    line-height: 12vw;
    text-align: right;
  }
}
.feature-img {
  width: 100%;
  // background-image: url("@/assets/images/more-feature.svg");
  // background-size: 100%;
  // background-repeat: no-repeat;
  background: linear-gradient(180deg, #fef7db 0%, #fefcf8 100%);
  box-shadow: 0px 4px 12px 0px #0000000f;
  box-shadow: 0px -4px 12px 0px #0000000f;
  border: solid 2px #fff;
  position: relative;
  z-index: 1;
  border-radius: 0 4vw 4vw 4vw;
  margin-bottom: 10vw;
  .head-img {
    position: absolute;
    top: -9vw;
    width: 101%;
    left: -2px;
    z-index: -1;
  }

  .close-icon {
    position: absolute;
    top: -4vw;
    left: 4vw;
    z-index: 3;
    > div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 4px;
    }
    > .ff {
      background: #ff6960;
      box-shadow: 2px 2px 4px 0px #ff696045;
    }
    > .fe {
      background: #febe44;
      box-shadow: 2px 2px 4px 0px #febf434f;
    }
    > .e3 {
      background: #3ee43a;
      box-shadow: 2px 2px 4px 0px #4bef4e38;
    }
  }
}
.feature-list {
  padding: 6vw 3.2vw 0 3.2vw;
  .feature-item {
    width: 25%;
    margin-bottom: 6.67vw;
    .feature-row {
      width: 13.86vw;
      height: 13.86vw;
      position: relative;
      // background: white;
      border-radius: 15px;
      margin-bottom: 2.6vw;
      // padding: 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .feature-text {
      width: 100%;
      padding: 0 8px;
      color: #333;
      font-size: 3.73vw;
      text-align: center;
    }
  }
}
</style>
