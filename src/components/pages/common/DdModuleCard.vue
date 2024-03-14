<template>
  <div class="banner-head" :class="direction">
    <div class="head-title">{{ $t(`common.${title}`) }}</div>
    <div class="close-icon dd-flex">
      <div class="ff"></div>
      <div class="fe"></div>
      <div class="e3"></div>
    </div>
    <div class="inner-content">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdModuleCard" });
defineProps({
  title: {
    type: String,
    default: "",
  },
  direction: {
    type: String,
    default: "left",
  },
});
</script>

<style lang="scss" scoped>
.banner-head.left {
  .head-title {
  }
  .inner-content {
    background-image: url("@/assets/images/banner.svg");
  }
  .close-icon {
    right: 4vw;
  }
}
.banner-head.right {
  .head-title {
    right: 1px;
    text-align: right;
    padding: 0 4.5vw 0 1vw;
  }
  .close-icon {
    left: 4vw;
  }
  .inner-content {
    background-image: url("@/assets/images/banner-right.svg");
    // transform: rotateY(180deg);
    // > div {
    //   transform: rotateY(-180deg);
    // }
  }
  &::after {
    display: none;
  }
}
.banner-head {
  position: relative;
  .close-icon {
    position: absolute;
    top: 4vw;
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
  .head-title {
    width: 42.9vw;
    height: 15.2vw;
    position: absolute;
    z-index: 0;
    background: linear-gradient(92.44deg, #5aee5f 0.93%, #0fc615 95.81%);
    top: -3vw;
    border-radius: 3.67vw 3.67vw 3.67vw 0;
    padding: 0 1vw 0 4.5vw;
    font-size: 22px;
    font-weight: 600;
    color: white;
    line-height: 12vw;
  }
  .inner-content {
    position: relative;
    z-index: 1;
    padding: 0 4vw;
    width: 100%;
    background-image: url("@/assets/images/banner.svg");
    background-repeat: no-repeat;
    padding-top: 12vw;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background: #e9fec1;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    z-index: 0;
    transform: translate(50%, -36%);
  }
}
</style>
