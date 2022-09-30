<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 13:31:28
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:27:24
 * @FilePath: \CookBooks\src\view\moreKnowledge\moreKnowledge.vue
 * @Description: 
-->
<template>
  <!-- <span>home</span>
  <p>homeee</p> -->
  <div id="moreKnowledge">
    <van-nav-bar class="navBar" title="涨知识" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <img src="@/assets/image/leftArrow.png" style="height: 0.3867rem; width: 0.2267rem" alt="" />
      </template>
      <template #right>
        <img src="@/assets/image/shareIconGray.png" style="height: 0.3867rem; width: 0.3867rem" alt="" />
      </template>
    </van-nav-bar>
    <div v-if="isHaveData" class="knowledgeItem">
      <span class="itemTitle">{{ knowItem.title }}</span>
      <p class="itemInfo">
        <span>{{ knowItem.time }}</span> <span>图文来源：{{ knowItem.source }}</span>
      </p>
      <div class="knowContent" v-for="(item, i) in knowItem.contentList" :key="i">
        <span v-if="item.type === 'text'">
          {{ item.content }}
        </span>
        <img v-else :src="getUrl(item.content)" alt="" />
      </div>
    </div>
    <div v-else>暂无数据!</div>

    <div class="starDiv" @click="starEvent">
      <img v-if="isStar" src="@/assets/image/knowIconFill.png" alt="" />
      <img v-else src="@/assets/image/knowIconNoContent.png" alt="" />
      <span>知识</span>
    </div>
    <van-share-sheet v-model:show="isShowShare" title="立即分享给好友" :options="shareOptions" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { getUrl } from '@/util/common';
import { knowItemType, KnowItem } from '@/util/commonType';
import { knowItemData } from '@/util/defaultData';
const $route = useRoute();
const $router = useRouter();
let isShowShare = ref(false);
let isHaveData = ref<boolean>();
let knowItem = ref<KnowItem>({
  title: '',
  time: '',
  source: '',
  contentList: [{ type: '', content: '' }],
});

let shareOptions = reactive([
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

let isStar = ref<boolean>(false);
let queryId: string = $route.query.id as string;

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {
  // $router.push('/search');
  isShowShare.value = true;
};

const getItem = () => {
  console.log($route.query.id as string);
  knowItem.value = knowItemData.find((item) => item.id == queryId) as knowItemType;
  // console.log(knowItem.value);
  // Object.prototype.hasOwnProperty.call(knowItem.value, 'id')
  if (knowItem.value) {
    isHaveData.value = true;
  } else isHaveData.value = false;
};
getItem();

const starEvent = () => {
  isStar.value = !isStar.value;
  let local = localStorage.getItem('starList');
  // 添加状态
  if (isStar.value) {
    if (local) {
      if (local.indexOf(queryId) === -1) {
        localStorage.setItem('starList', local + ',' + queryId);
      }
    } else {
      localStorage.setItem('starList', queryId);
    }
  } else {
    // 删除状态
    if (local?.indexOf(queryId) !== -1) {
      let id = queryId;
      console.log(local?.indexOf(queryId));
      if (local?.indexOf(queryId) !== 0) {
        id = ',' + id;
      }
      console.log(id);
      let temp = local?.replace(id, '');
      localStorage.setItem('starList', String(temp));
    }
  }
};

const checkStar = () => {
  if (localStorage.getItem('starList')?.indexOf(queryId) !== -1) {
    isStar.value = true;
  } else {
    isStar.value = false;
  }
};
checkStar();
</script>

<style lang="scss" scoped>
#moreKnowledge {
  height: 100%;
  .knowledgeItem {
    padding: 0 0.5rem;
    margin-top: 0.2667rem;
    height: calc(100% - 46px);
    overflow: hidden scroll;
    .itemTitle {
      font-size: 0.64rem;
      font-weight: 400;
      color: #242424;
    }
    .itemInfo {
      margin-top: 0.6667rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.32rem;
      color: #242424;
    }
    .knowContent {
      margin: 0.66rem 0;
      font-size: 0.48rem;
      font-weight: 400;
      color: #242424;
      line-height: 0.75rem;
      letter-spacing: 1.5px;
      width: 9rem;
      text-align: justify;
      img {
        // 681 353
        width: 9rem;
        height: 4.7067rem;
        object-fit: cover;
      }
    }
  }
  :deep(.van-nav-bar__content) {
    .van-icon {
      color: #989898;
    }
  }
  .starDiv {
    position: fixed;
    width: 2.5067rem;
    height: 1.04rem;
    background: #fef2df;
    top: 50%;
    right: 0px;
    border-radius: 39px 0 0 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.4rem;
    font-weight: 400;
    color: #feaa03;
    img {
      height: 0.56rem;
      width: 0.6133rem;
      margin-right: 0.2rem;
    }
  }
}
</style>
