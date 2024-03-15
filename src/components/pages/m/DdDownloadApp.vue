<template>
  <div v-if="btn.showDownLoadBtn" class="download-box">
    <a class="download" :href="btn.downLoadUrl" target="_blank">
      {{ $t("common.立即领取减肥计划") }}
      <img class="to-right" src="@/assets/images/right.svg" alt="" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdDownloadApp" });
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const btn = window.__config[i18n.locale.value];
</script>

<style lang="scss" scoped>
@keyframes scale-animation {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
.download-box {
  width: 69.6vw;
  height: 16vw;
  margin: auto;
  position: relative;
  margin-bottom: 13.3vw;
  .download {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(93.62deg, #5be260 4.47%, #4fdc54 92.28%);
    border-radius: 13.3vw;
    font-size: 5.33vw;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: scale-animation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    outline: none;
    text-decoration: none;
    .to-right {
      width: 4.8vw;
    }
  }
}
</style>
