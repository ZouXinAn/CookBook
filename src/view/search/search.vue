<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-26 15:23:11
 * @FilePath: \CookBooks\src\view\search\search.vue
 * @Description: 
-->
<template>
  <!-- <span>home</span>
  <p>homeee</p> -->
  <!-- <span>search</span> -->
  <div id="search" :style="{ background: !isShowItem ? '#f2f3f5' : 'white' }">
    <div class="searchTop">
      <van-icon name="arrow-left" @click="getBack" />
      <van-search v-model="searchValue" placeholder="搜索食材、菜谱" />
      <span>搜索</span>
    </div>
    <div v-show="isShowItem" class="searchBox">
      <div class="searchHistory">
        <p class="secondTitle">历史搜索</p>
        <span>展开</span>
      </div>
      <div class="searchItem">
        <div>四味香肠</div>
        <div>莲藕海带汤</div>
        <div>花椒</div>
        <div>猪蹄</div>
        <div>糖醋脆皮豆腐</div>
        <div>凉拌秋葵</div>
        <div>青椒肉丝饼</div>
      </div>
      <p style="margin: 0.4667rem 0 0.6667rem; text-align: center; font-size: 0.3467rem; color: rgba(143, 143, 143, 1)"><van-icon name="delete-o" style="margin-right: 0.1333rem" />清空历史搜索</p>
      <div class="searchGuess">
        <p class="secondTitle">猜你想搜</p>
        <span>
          <img style="width: 0.4533rem; height: 0.3467rem; vertical-align: middle; margin-right: 0.1333rem" src="@/assets/image/load.png " alt="" />
          换一换
        </span>
      </div>
      <div class="searchItem">
        <div>下酒</div>
        <div>宝宝辅食</div>
        <div>美容养颜饮品</div>
        <div>鲫鱼烧豆腐</div>
        <div>糖水</div>
        <div>水晶虾饺</div>
        <div>豆角</div>
      </div>
    </div>
    <!-- DO瀑布流 -->
    <div v-show="!isShowItem" class="allSearchContent">
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line1" :item="item" :key="i" />
      </div>
      <div class="searchContent">
        <search-cookbook v-for="(item, i) in waterfallData.line2" :item="item" :key="i" />
      </div>
    </div>
  </div>

  <!-- <router-view /> -->
</template>

<script lang="ts" setup>
import { WaterFall } from '@/util/commonType';
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
// import searchCookBook from '@/components/searchCookBook.vue';
const searchValue = ref('');
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
  {
    src: 'searchitemShort1.png',
    cookName: '麻婆豆腐',
    labelName: '家常菜',
    itemType: 'shortImg',
  },
  {
    src: 'searchitemLong2.png',
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

let waterfallData: WaterFall = {
  line1: [],
  line2: [],
};

let i: any;
// 处理瀑布流数据
for (i in list) {
  if (i % 2 === 0) {
    waterfallData.line1.push(list[i]);
  } else waterfallData.line2.push(list[i]);
}

const isShowItem = computed({
  get: () => {
    if (searchValue.value === '') return true;
    else return false;
  },
  set: (v) => {
    return v;
  },
});

const $router = useRouter();
const getBack = () => {
  $router.back();
  // $router.go(-1);
};
const $route = useRoute();
if ($route.query.value) {
  searchValue.value = $route.query.value as string;
}
</script>

<style lang="scss" scoped>
#search {
  > div {
    padding: 0 0.36rem;
  }
  .searchTop {
    display: flex;
    align-items: center;
    background: white;
    .van-search {
      width: 7.2rem;
      margin-left: 0.2667rem;
      .van-search__content {
        background: #f2f3f5;
        border-radius: 0.1333rem;
      }
    }
    > span {
      margin-left: 0.4rem;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #feaa03;
      white-space: nowrap;
    }
  }
  .allSearchContent {
    height: calc(99vh - 45px);
    // background: #f2f3f5;
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

  .searchHistory {
    margin-top: 0.4rem;
  }
  .searchHistory,
  .searchGuess {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    span {
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #8f8f8f;
    }
  }
  .searchItem {
    display: flex;
    flex-wrap: wrap;
    > div {
      background: #f2f3f5;
      border-radius: 0.1333rem;
      font-size: 0.3733rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #242424;
      padding: 0.24rem 0.4133rem;
      margin: 0 0.2rem 0.2267rem 0;
    }
  }
}
</style>
