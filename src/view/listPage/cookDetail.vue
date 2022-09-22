<!--
 * @Author: zoujiahao
 * @Date: 2022-09-22 15:10:17
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-22 16:14:53
 * @FilePath: \CookBooks\src\view\listPage\cookDetail.vue
 * @Description: 
-->
<template>
  <div id="cookDetail">
    <van-nav-bar class="navBar" title="大显身手献厨艺，艺展天下无人敌" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>
    <img class="bigPhoto" src="@/assets/image/cookDetailBigImg.png" alt="" />
    <div class="cookInfo">
      <h2>麻婆豆腐</h2>
      <div>
        <div>
          <img src="@/assets/image/eyeIcon.png" />
          <span> 20.4W </span>
        </div>
        <div>
          <img src="@/assets/image/smileIcon.png" />
          <span> 18256 </span>
        </div>
      </div>
    </div>
    <van-share-sheet v-model:show="isShowShare" title="立即分享给好友" :options="shareOptions" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
let $route = useRoute();
let $router = useRouter();

let isShowShare = $ref(false);
let shareOptions = $ref([
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
]);

let cookId = $route.query?.cookId ?? 1000;
console.log(cookId);

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {
  // $router.push('/search');
  isShowShare = true;
};
</script>

<style lang="scss" scoped>
#cookDetail {
  .navBar {
    background: #feaa03;
    :deep(.van-nav-bar__title) {
      font-size: 0.4rem;
      color: #ffffff;
    }
  }
  :deep(.van-nav-bar) {
    .van-icon {
      color: #ffffff;
    }
  }
  .bigPhoto {
    width: 10rem;
    height: 6.4rem;
  }
  .cookInfo {
    display: flex;
    flex-direction: column;
    align-content: center;
    h2 {
      font-size: 0.5333rem;
      color: #242424;
    }
  }
}
</style>
