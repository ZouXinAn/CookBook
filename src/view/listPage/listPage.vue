<!--
 * @Author: zoujiahao
 * @Date: 2022-09-01 15:21:43
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:28:47
 * @FilePath: \CookBooks\src\view\listPage\listPage.vue
 * @Description: 
-->
<template>
  <div id="listPage">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <img src="@/assets/image/leftArrow.png" style="height: 0.3867rem; width: 0.2267rem" alt="" />
      </template>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <img src="@/assets/image/searchIconGray.png" style="height: 0.3867rem; width: 0.3867rem" alt="" />
      </template>
    </van-nav-bar>
    <div class="allSearchContent">
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line1" :item="item" :key="i" />
      </div>
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line2" :item="item" :key="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
// @ts-ignore
import searchCookBook from '@/components/searchCookBook.vue';
import { CookDetail } from '@/util/defaultData';

// 类型枚举
enum PageType {
  One = '查看全部',
  Two = '今日推荐',
  Three = '新手不翻车',
}

const cookDetail = new CookDetail();
let $route = useRoute();
let $router = useRouter();
let tempIndex: string = '' + ($route.query.type as string);
// @ts-ignore
let title = $ref('');
// [$route.query.type];
title = PageType[tempIndex as keyof typeof PageType];

interface listItem {
  url: string;
  src: string;
  title: string;
  cookType: string;
  photoType: string;
  [proeName: string]: any;
}

// @ts-ignore
let list: listItem[] = $ref();

interface WaterFall {
  line1: listItem[];
  line2: listItem[];
}

let waterfallData: WaterFall = {
  line1: [],
  line2: [],
};

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {
  $router.push('/search');
};

// 类型获取数据
const getData = () => {
  // console.log(tempIndex);
  // 类型
  switch (tempIndex) {
    case 'One':
      list = cookDetail.getAllData();
      break;
    case 'Two':
      list = cookDetail.getTypeData('today');
      break;
    case 'Three':
      list = cookDetail.getTypeData('eazy');
      console.log(list);
      break;
    default:
      break;
  }
  if (list.length === 0) {
    return;
  }
  // 处理瀑布流数据
  let i: any = '';
  for (i in list) {
    if (Object.prototype.hasOwnProperty.call(list, i)) {
      if (i % 2 === 0) {
        waterfallData.line1.push(list[i]);
      } else waterfallData.line2.push(list[i]);
    }
  }
};

getData();
</script>

<style lang="scss" scoped>
#listPage {
  background: #f2f3f5;
  height: 100vh;
  .van-nav-bar {
    background: white;
  }
  .allSearchContent {
    height: calc(99vh - 45px);
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 0.5333rem;
    padding-right: calc(0.5333rem - 0.32rem);
    display: flex;
    flex-direction: row;
    .searchContent {
      padding-top: 0.32rem;
      display: flex;
      flex-direction: column;
    }
  }
  :deep(.van-nav-bar__content) {
    .van-icon {
      color: #989898;
    }
  }
}
</style>
