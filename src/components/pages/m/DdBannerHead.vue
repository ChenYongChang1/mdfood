<template>
  <div class="pd">
    <dd-module-card title="减肥食谱">
      <div class="content">
        <div class="dd-flex content-title">
          <div class="head-icon">
            <img src="@/assets/images/app-icon.svg" alt="" />
          </div>
          <div class="head-title-name">
            {{ $t("common.小主轻断食") }}
          </div>
        </div>
        <div class="content-text">
          {{ $t("common.小主轻断食描述文案") }}
        </div>
        <div class="xiaoju">
          <img src="@/assets/images/xiaoju.png" alt="" />
        </div>
      </div>
    </dd-module-card>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdBannerHead" });
import DdModuleCard from "../common/DdModuleCard.vue";
</script>

<style lang="scss" scoped>
.pd {
  padding: 0 5.3vw;
  padding-top: 10vw;
  margin-bottom: 10vw;
}
.content {
  width: 100%;
  min-height: 54vw;
  background: linear-gradient(180deg, #fef4d0 0%, rgba(255, 255, 255, 0) 100%);

  position: relative;
  border-radius: 13px;
  padding: 15px;

  &::after {
    content: "";
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%);
    z-index: -1;
    position: absolute;
    border-radius: 13px;
    left: -2px;
    top: -2px;
  }

  .head-icon {
    width: 17.1vw;
    height: 17.1vw;
    border-radius: 2.4vw;
  }
  .head-title-name {
    height: 17.1vw;
    line-height: 17.1vw;
    font-weight: 700;
    font-size: 4.8vw;
    padding-left: 4vw;
  }
}
.content-title {
  margin-bottom: 4.8vw;
}
.content-text {
  width: 62.9vw;
  color: $base-color;
  font-size: 3.73vw;
  font-weight: 400;
}
.xiaoju {
  position: absolute;
  right: 0;
  bottom: 3%;
  width: 20vw;
}
.en {
  .xiaoju {
    bottom: 17%;
  }
}
</style>
