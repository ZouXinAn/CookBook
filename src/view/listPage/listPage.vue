<!--
 * @Author: zoujiahao
 * @Date: 2022-09-01 15:21:43
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-01 16:15:52
 * @FilePath: \CookBooks\src\view\listPage\listPage.vue
 * @Description: 
-->
<template>
  <div id="listPage">
    <van-nav-bar :title="$route.query.type" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="allSearchContent">
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in list" :item="{ ...item }" :key="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import searchCookBook from '@/components/searchCookBook.vue';

let $route = useRoute();
let $router = useRouter();
// console.log($route.query);

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

const onClickLeft = () => {
  $router.back();
};
const onClickRight = () => {};
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
    .searchContent {
      padding-top: 0.32rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      // display: flex;
      // flex-direction: row;
      // flex-wrap: wrap;
    }
  }
}
</style>
