<!--
 * @Author: zoujiahao
 * @Date: 2022-09-29 11:25:25
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 16:36:33
 * @FilePath: \CookBooks\src\view\home\famousCookDetail.vue
 * @Description: 
-->
<template>
  <div id="famousCookDetail">
    <van-nav-bar :title="famousItemData.title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>
    <div class="videoItem">
      <video ref="nowVideo" :src="famousItemData.videoUrl" :controls="isShowControl" :poster="getUrl(famousItemData.videoPoster)"></video>
      <div class="playItem" @click="nowPlay" v-show="!isShowControl">
        <img src="@/assets/image/playIcon.png" />
        <span>{{ famousItemData.videoTime }}</span>
      </div>
    </div>
    <div class="cookInfo">
      <span class="bigTitle">{{ famousItemData.title }}</span>
      <!-- 浏览量 -->
      <div class="overviewDiv">
        <div>
          <img src="@/assets/image/eyeIcon.png" style="height: 0.28rem; width: 0.4267rem" />
          <span> {{ famousItemData.seeNo }} </span>
        </div>
        <div style="margin-left: 0.6667rem">
          <img src="@/assets/image/smileIcon.png" style="height: 0.32rem; width: 0.32rem" />
          <span> {{ famousItemData.starNo }} </span>
        </div>
      </div>
      <!-- 厨师简介 -->
      <div class="chefInfo">
        <span class="secondTitle"> 厨师简介 </span>
        <div class="infoDiv">
          <div class="simpleInfo">
            <img :src="getUrl(famousItemData.chefurl)" />
            <span>{{ famousItemData.chefName }} </span>
            <span class="infoTag" :style="{ background: getChefColor(famousItemData.chefTag) }">{{ getchefType(famousItemData.chefTag) }}</span>
          </div>
          <div class="infoDesc">{{ famousItemData.chefDesc }}</div>
        </div>
      </div>
    </div>
    <div class="splitLineDiv"></div>
    <!-- 准备 -->
    <div class="perpareDiv">
      <span class="fontTitle">需要食材</span>
      <div v-for="(item, i) in famousItemData.paperList" :key="i">
        <span>{{ item.name }}</span>
        <span>{{ item.num }}{{ item.unit }}</span>
      </div>
    </div>
    <div class="splitLineDiv"></div>
    <div class="cookStep">
      <span class="fontTitle"
        >烹饪步骤 (<span style="font-size: 0.32rem">共{{ famousItemData.cookStep.length }}步</span>)</span
      >
      <div v-for="(item, i) in famousItemData.cookStep" :key="i">
        <p>
          <img src="@/assets/image/stepIcon.png" alt="" />
          <span>步骤{{ i + 1 }}</span>
        </p>
        <p>{{ item }}</p>
      </div>
    </div>
    <div class="splitLineDiv"></div>
    <tips />
  </div>
  <van-share-sheet v-model:show="isShowShare" title="立即分享给好友" :options="shareOptions" />
</template>

<script lang="ts" setup>
import { getUrl } from '@/util/common';
import { getCurrentInstance, ref } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import tips from '@/components/tips.vue';
import { FamousData } from '@/util/defaultData';
import { FamousItemType } from '@/util/commonType';
// getUrl
let $route = useRoute();
let $router = useRouter();
let isShowControl = ref<boolean>(false);
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
const { proxy } = getCurrentInstance();
// @ts-ignore
// let perpareList = $ref();
let famousItemData = ref<FamousItemType>({
  id: 1,
  url: '',
  title: '',
  seeNo: '',
  starNo: '',
  videoUrl: '',
  videoPoster: '',
  videoTime: '',
  chefName: '',
  chefurl: '',
  chefTag: 1,
  chefDesc: '',
  paperList: [
    {
      name: '',
      num: '',
      unit: '',
    },
  ],
  cookStep: [''],
});

if ($route.query.id) {
  let famous = new FamousData();
  let id = Number($route.query.id);
  famousItemData.value = famous.getDataById(id);
  console.log($route.query.id, famousItemData);

  // perpareList = famousItemData.value.paperList;
}

const nowPlay = () => {
  proxy.$refs.nowVideo.play();
  isShowControl.value = true;
};

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {
  isShowShare = true;
};

const getchefType = (tag: number) => {
  switch (tag) {
    case 1:
      return '金牌厨师';
    case 2:
      return '银牌厨师';
    case 3:
      return '铜牌厨师';
    default:
      break;
  }
};

const getChefColor = (tag: number) => {
  switch (tag) {
    case 1:
      return 'rgba(254, 170, 3, 1)';
    case 2:
      return '#969696';
    case 3:
      return '#d8a634';
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
#famousCookDetail {
  overflow: hidden scroll;
  height: 100%;
  .fontTitle {
    font-size: 0.48rem;
    font-weight: 600;
    color: #242424;
  }
  :deep(.van-nav-bar__content) {
    .van-icon {
      color: #989898;
    }
  }
  .videoItem {
    position: relative;
    video {
      width: 100vw;
      height: 6.4rem;
      object-fit: cover;
    }
    .playItem {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1.8667rem;
      height: 1.8667rem;
      background: rgba(27, 26, 26, 0.69);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 0.88rem;
        height: 0.7733rem;
      }
      span {
        margin-top: 0.1333rem;
        font-size: 0.2933rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .cookInfo {
    padding: 0 0.5333rem;
    .overviewDiv {
      margin-top: 0.3333rem;
      font-size: 0.4rem;
      color: #a5a5a5;
      display: flex;
      img {
        margin-right: 0.1333rem;
      }
    }
    .chefInfo {
      margin-top: 0.5333rem;
      .infoDiv {
        margin: 0.4267rem 0;
        padding: 0 0.5333rem;
        display: flex;
        width: 8.9333rem;
        height: 3.52rem;
        background: #ffffff;
        box-shadow: 1px 5px 13px 0px rgba(40, 39, 38, 0.2);
        border-radius: 10px;
        box-sizing: border-box;
        .simpleInfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            height: 1.3333rem;
            width: 1.3333rem;
            border-radius: 10px;
          }
          span {
            font-size: 0.4rem;
            font-weight: 500;
            color: #242424;
          }
          .infoTag {
            font-size: 0.28rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #ffffff;
            display: inline-block;
            padding: 0.0933rem 0.1067rem;
          }
        }
        .infoDesc {
          width: 5.88rem;
          font-size: 0.3467rem;
          font-weight: 400;
          color: #242424;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.5333rem;
        }
      }
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
  .cookStep {
    padding: 0.4rem 0.5333rem;
    img {
      height: 0.44rem;
      width: 0.44rem;
      margin-right: 0.1067rem;
    }
    > div {
      margin: 0.9733rem 0 0.4267rem;
      p,
      span {
        font-size: 0.4rem;
        font-weight: 400;
        color: #242424;
      }
      p:nth-child(1) {
        margin-bottom: 0.2667rem;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
