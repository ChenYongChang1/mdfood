<template>
  <div class="dd-comments">
    <div class="comment-row dd-flex dd-flex-space left">
      <div class="user-cover">
        <img src="@/assets/images/user-cover.svg" alt="" />
      </div>
      <div class="user-content">
        <div class="sanjiao">
          <img src="@/assets/images/sanjiao.svg" alt="" />
        </div>
        <div class="wujiao dd-flex">
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
        </div>
        <div class="text-content">
          宝藏APP，怎么才发现
          规划很合理，用了2周，减重3公斤，给了我极大的信心，会继续使用下去，减肥塑性增肌人群都适合，都快去冲。
        </div>
        <div class="by-user">— 来自AppStore用户 看鲁班七号超神</div>
      </div>
    </div>
    <div class="comment-row dd-flex dd-flex-space right">
      <div class="user-cover">
        <img src="@/assets/images/user-cover.svg" alt="" />
      </div>
      <div class="user-content">
        <div class="sanjiao">
          <img src="@/assets/images/sanjiao.svg" alt="" />
        </div>
        <div class="wujiao dd-flex">
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
          <img src="@/assets/images/wujiaoxing.svg" alt="" />
        </div>
        <div class="text-content">
          这个APP真的挺好用的，帮你定制个人的断食计划，还能跟踪你的每一天进展，不用特备节食或者天天去健身房，跟着APP计划走，轻轻松松就能忘健康瘦身的路上迈进。页面也挺清晰的，用起来很方便，想要减肥又怕麻烦的朋友们，这个APP绝对可以值得一试。
        </div>
        <div class="by-user">— 来自AppStore用户 胖达PandaQ</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "DdComment" });
</script>

<style lang="scss" scoped>
.dd-comments {
  width: 100%;
  padding: 0 5.2vw;
  margin-bottom: 10vw;
  .comment-row {
    margin-bottom: 9.3vw;
  }
  .right {
    flex-direction: row-reverse;
    .sanjiao {
      transform: rotateY(180deg);
      right: -14px;
    }
  }
  .left {
    .sanjiao {
      left: -14px;
    }
  }
  .user-cover {
    width: 7.4vw;
    height: 7.4vw;
    border-radius: 50%;
    position: relative;
    top: 3.6vw;
  }
  .user-content {
    border: solid 1px #b2fe59;
    width: calc(100% - 7.4vw - 5.3vw);
    min-height: 100px;
    border-radius: 8px;
    padding: 2.6vw;
    background-color: white;
    position: relative;
    .sanjiao {
      position: absolute;
      top: 3vw;
      width: 14px;
    }
    .wujiao {
      margin-bottom: 2.1vw;
      > img {
        width: 3.7vw;
      }
    }
    .text-content {
      font-size: 14px;
      color: #4f4426;
      margin-bottom: 3.2vw;
    }
    .by-user {
      color: #a49f92;
      text-align: right;
      font-size: 12px;
    }
  }
}
</style>
