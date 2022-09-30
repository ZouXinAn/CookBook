<!--
 * @Author: zoujiahao
 * @Date: 2022-09-22 15:10:17
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 16:39:35
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
    <img class="bigPhoto" :src="getUrl(cookDetailItem.bigUrl)" alt="" />
    <!-- 基础信息区域 -->
    <div class="cookInfo">
      <h2>{{ cookDetailItem.title }}</h2>
      <div class="overviewDiv">
        <div>
          <img src="@/assets/image/eyeIcon.png" style="height: 0.28rem; width: 0.4267rem" />
          <span> {{ cookDetailItem.seeNo }} </span>
        </div>
        <div style="margin-left: 0.6667rem">
          <img src="@/assets/image/smileIcon.png" style="height: 0.32rem; width: 0.32rem" />
          <span> {{ cookDetailItem.starNo }} </span>
        </div>
      </div>
      <div>
        <img src="@/assets/image/splitLine.png" style="width: 1.2rem; height: 0.0933rem" alt="" />
      </div>
      <span class="authorSpan"> 作者: {{ cookDetailItem.author }} </span>
      <div class="cookSimpleInfo">
        {{ cookDetailItem.desc }}
      </div>
    </div>
    <!-- 分割线 -->
    <div class="splitLineDiv"></div>

    <!-- 准备 -->
    <div class="perpareDiv">
      <span class="fontTitle">需要食材</span>
      <div v-for="(item, i) in cookDetailItem.perpareList" :key="i">
        <span>{{ item.name }}</span>
        <span>{{ item.num }}{{ item.unit }}</span>
      </div>
    </div>
    <div class="splitLineDiv" style="margin-top: 0"></div>
    <div class="cookStepDiv">
      <span class="fontTitle">烹饪步骤</span>
      <div class="cookStepItem" v-for="(item, i) in cookDetailItem.cookStep" :key="i">
        <p>
          <img class="stepIcon" src="@/assets/image/stepIcon.png" alt="" />
          <span>步骤{{ i + 1 }}</span>
        </p>
        <img :src="getUrl(item.url)" alt="" />
        <span class="stepDesc"> {{ item.desc }}</span>
      </div>
    </div>
    <div class="splitLineDiv" style="margin-top: 0"></div>
    <tips />
    <van-share-sheet v-model:show="isShowShare" title="立即分享给好友" :options="shareOptions" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { getUrl } from '@/util/common';
import tips from '@/components/tips.vue';
import { CookDetail } from '@/util/defaultData';

let $route = useRoute();
let $router = useRouter();

// @ts-ignore
let isShowShare = $ref(false);
// @ts-ignore
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
// @ts-ignore
let cookDetailItem = $ref({});

let cookId = $route.query?.cookId ?? 101;

if ($route.query.cookId) {
  let cookDetail = new CookDetail();
  let id = Number(cookId);
  cookDetailItem = cookDetail.getDataById(id);
  // console.log($route.query.cookId, cookDetailItem);
}

const onClickLeft = () => {
  $router.back();
};

const onClickRight = () => {
  isShowShare = true;
};
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';
#cookDetail {
  overflow: hidden scroll;
  height: 100%;
  color: #242424;
  .fontTitle {
    font-size: 0.48rem;
    font-weight: 600;
    color: #242424;
  }
  .navBar {
    background: #feaa03;
    :deep(.van-nav-bar__title) {
      font-size: 0.4rem;
      color: #ffffff;
      max-width: 80%;
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
    object-fit: cover;
  }
  .cookInfo {
    display: flex;
    flex-direction: column;
    // align-content: center;
    text-align: center;
    h2 {
      font-size: 0.5333rem;
      color: #242424;
      margin: 0.5067rem 0 0.2667rem;
    }
    .overviewDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5333rem;
      img {
        vertical-align: middle;
      }
      > div {
        @include flexOne(center);
        img {
          margin-right: 0.0933rem;
        }
      }
    }
    .authorSpan {
      margin-top: 0.2267rem;
      font-size: 0.3733rem;
      font-weight: 500;
    }
    .cookSimpleInfo {
      font-size: 0.3467rem;
      font-weight: 400;
      margin-top: 0.4533rem;
      padding: 0 0.6rem;
      text-align: start;
    }
  }

  .perpareDiv {
    padding: 0.4rem 0.5333rem;
    > div {
      height: 1.2933rem;
      width: calc(100% - 1.2rem);
      display: flex;
      align-items: center;
      border-bottom: 2px solid #efefef;
      padding-left: 0.6667rem;
      span {
        font-size: 0.4rem;
        font-weight: 400;
        color: #242424;
      }
      span:nth-child(1) {
        display: inline-block;
        width: 4.5333rem;
      }
    }
    > div:nth-last-child(1) {
      border-bottom: 0;
    }
  }
  .cookStepDiv {
    padding: 0.4rem 0.5333rem;
    .cookStepItem {
      font-size: 0.4rem;
      color: #242424;
      margin-top: 0.5rem;
      > p {
        margin-bottom: 0.3333rem;
        display: flex;
        align-items: center;
        .stepIcon {
          width: 0.44rem;
          height: 0.4667rem;
          margin-right: 0.1067rem;
        }
      }
      > img {
        width: 9rem;
        height: 5.28rem;
        margin-bottom: 0.3333rem;
        object-fit: cover;
      }
      .stepDesc {
        font-size: 0.4rem;
        font-weight: 400;
        color: #242424;
      }
    }
  }
}
</style>
