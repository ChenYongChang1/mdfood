<template>
  <div class="download-box">
    <div class="download">
      {{ $t("common.立即领取减肥计划") }}
      <img class="to-right" src="@/assets/images/right.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdDownloadApp" });
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
    .to-right {
      width: 4.8vw;
    }
  }
}
</style>
