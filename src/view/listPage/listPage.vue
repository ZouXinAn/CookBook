<!--
 * @Author: zoujiahao
 * @Date: 2022-09-01 15:21:43
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-22 14:51:51
 * @FilePath: \CookBooks\src\view\listPage\listPage.vue
 * @Description: 
-->
<template>
  <div id="listPage">
    <van-nav-bar :title="PGAETYPE[$route.query.type]" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="allSearchContent">
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line1" :item="{ ...item }" :key="i" />
      </div>
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line2" :item="{ ...item }" :key="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import searchCookBook from '@/components/searchCookBook.vue';

// 类型枚举
enum PGAETYPE {
  '查看全部',
  '今日推荐',
  '新手不翻车',
}

let $route = useRoute();
let $router = useRouter();

// console.log(PGAETYPE[$route.query.type]);

// @ts-ignore
let list = $ref([
  {
    src: 'searchitemShort1.png',
    cookName: '麻婆豆腐',
    labelName: '家常菜',
    itemType: 'shortImg',
  },
  {
    src: 'searchitemLong1.png',
    cookName: '麻婆豆腐',
    labelName: '家常菜',
    itemType: 'longImg',
  },
  {
    src: 'searchitemLong2.png',
    cookName: '麻婆豆腐',
    labelName: '家常菜',
    itemType: 'longImg',
  },
  {
    src: 'searchitemShort1.png',
    cookName: '麻婆豆腐',
    labelName: '家常菜',
    itemType: 'shortImg',
  },
]);

let waterfallData = {
  line1: [],
  line2: [],
};

// 处理瀑布流数据
for (const i in list) {
  if (i % 2 === 0) {
    waterfallData.line1.push(list[i]);
  } else waterfallData.line2.push(list[i]);
}

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {
  $router.push('/search');
};
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
}
</style>
