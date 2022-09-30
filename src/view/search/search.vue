<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:31:57
 * @FilePath: \CookBooks\src\view\search\search.vue
 * @Description: 
-->
<template>
  <!-- <span>home</span>
  <p>homeee</p> -->
  <!-- <span>search</span> -->
  <div id="search" :style="{ background: !isShowItem ? '#f2f3f5' : 'white' }">
    <div class="searchTop">
      <!-- <van-icon name="arrow-left" @click="getBack" /> -->
      <img src="@/assets/image/leftArrow.png" style="height: 0.3867rem; width: 0.2267rem" alt="" @click="getBack" />

      <!-- <img src="@/assets/image/searchIconGray.png" alt="" /> -->
      <van-search v-model="searchValue" placeholder="搜索食材、菜谱" @change="searchAdd">
        <template #left-icon>
          <img src="@/assets/image/searchIconGray.png" style="height: 0.3867rem; width: 0.3867rem" alt="" />
        </template>
      </van-search>

      <span @click="searchAdd">搜索</span>
    </div>
    <div v-show="isShowItem" class="searchBox">
      <div class="searchHistory">
        <p class="secondTitle">历史搜索</p>
        <span
          v-show="allHistoryLength > 6"
          @click="
            () => {
              isShowAll = !isShowAll;
              getHistorySearch();
            }
          "
          >{{ isShowAll ? '收起' : '展开' }}</span
        >
      </div>
      <div class="searchItem">
        <div v-for="(item, i) in search.history" :key="i" @click="searchOne(item)">{{ item }}</div>
      </div>
      <p v-if="search.history.length === 0" style="text-align: center; color: rgb(143, 143, 143); margin-bottom: 0.3rem">暂无数据，请搜索!</p>
      <p
        v-else
        style="margin: 0.4667rem 0 0.6667rem; text-align: center; font-size: 0.3467rem; color: rgba(143, 143, 143, 1); display: flex; justify-content: center; align-items: center"
        @click="clearHistory"
      >
        <!-- <van-icon name="delete-o" style="margin-right: 0.1333rem" /> -->
        <img src="@/assets/image/cashIcon.png" style="margin-right: 0.1333rem; width: 0.3467rem; height: 0.4rem" alt="" />
        清空历史搜索
      </p>
      <div class="searchGuess">
        <p class="secondTitle">猜你想搜</p>
        <span @click="getGuessSearch">
          <img style="width: 0.4533rem; height: 0.3467rem; vertical-align: middle; margin-right: 0.1333rem" src="@/assets/image/load.png " alt="" />
          换一换
        </span>
      </div>
      <div class="searchItem">
        <div v-for="(item, i) in search.guess" :key="i" @click="searchOne(item)">
          {{ item }}
        </div>
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
    <div v-show="!isShowItem" style="height: 0.1333rem; width: 100vw">a</div>
  </div>

  <!-- <router-view /> -->
</template>

<script lang="ts" setup>
import { WaterFall } from '@/util/commonType';
import { CookDetail } from '@/util/defaultData';
import { computed, onMounted, ref, watch } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
// import searchCookBook from '@/components/searchCookBook.vue';
const searchValue = ref('');
// @ts-ignore
let list = $ref();
// @ts-ignore
let search = $ref({
  history: [],
  guess: '',
});
let waterfallData: WaterFall = {
  line1: [],
  line2: [],
};

let allHistoryLength = ref<Number>(0);
let isShowAll = ref<boolean>(false);

let i: any;
// 处理瀑布流数据
for (i in list) {
  if (i % 2 === 0) {
    waterfallData.line1.push(list[i]);
  } else waterfallData.line2.push(list[i]);
}

let isShowItem = computed({
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

// 搜索添加
const searchAdd = () => {
  let localHistory = localStorage.getItem('history');
  if (localHistory) {
    if (localHistory.indexOf(searchValue.value) === -1) {
      localStorage.setItem('history', localHistory + ',' + searchValue.value);
    }
  } else {
    localStorage.setItem('history', searchValue.value);
  }
  getHistorySearch();
};
// 获取搜索记录
const getHistorySearch = () => {
  if (localStorage.getItem('history')) {
    let storge = String(localStorage.getItem('history')).split(',');
    allHistoryLength.value = storge.length;
    if (!isShowAll.value) {
      search.history = storge.splice(0, 6);
    } else {
      search.history = storge;
    }
  } else {
    allHistoryLength.value = 0;
    search.history = [];
  }
};

const $route = useRoute();
if ($route.query.value) {
  searchValue.value = $route.query.value as string;
  searchAdd();
}

// 类型获取数据
const getData = () => {
  const cookDetail = new CookDetail();
  // 类型
  list = cookDetail.getAllData();
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

// 随机搜索
const getGuessSearch = () => {
  if (localStorage.getItem('guessSearch')) {
    search.guess = localStorage
      .getItem('guessSearch')
      ?.split(',')
      .sort(() => 0.5 - Math.random())
      .splice(0, 8);
    // console.log(search.guess);
  } else {
    localStorage.setItem('guessSearch', '下酒,宝宝辅食,美容养颜饮品,鲫鱼烧豆腐,糖水,水晶虾饺,豆角,懒人食物,麻辣烫,养生,美食,土匪猪肝,红烧甲鱼,韭菜,心肺');
  }
};

getHistorySearch();
getGuessSearch();

const clearHistory = () => {
  localStorage.removeItem('history');
  getHistorySearch();
};

const searchOne = (item: string) => {
  searchValue.value = item;
  searchAdd();
};
</script>

<style lang="scss" scoped>
#search {
  height: 100%;
  > div {
    padding: 0 0.36rem;
  }
  .searchTop {
    display: flex;
    align-items: center;
    background: white;
    :deep(.van-search) {
      width: 7.2rem;
      margin-left: 0.2667rem;
      .van-search__content {
        background: #f2f3f5 !important;
        border-radius: 0.1333rem;
        .van-cell {
          background: transparent;
        }
        .van-field__left-icon {
          height: 0.42rem;
        }
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
    height: calc(100% - 54px);
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
      height: fit-content;
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
