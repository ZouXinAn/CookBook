<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 13:52:03
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-29 10:58:59
 * @FilePath: \CookBooks\src\view\home\sort.vue
 * @Description: 
-->
<template>
  <div id="sortDiv">
    <div class="inputSearch">
      <div class="searchBar" @click="goSearch">
        <img src="@/assets/image/searchIcon.png" alt="" />
        <span style="margin-left: 0.2rem"> 搜索食材食谱 </span>
      </div>
    </div>
    <div class="treeSelect">
      <van-tree-select v-model:main-active-index="activeIndex" height="100%" :items="sortTree" @click-nav="getTreeData">
        <template #content>
          <div class="selectItem" v-for="(item, i) in treeSelectList" :key="i">
            <span class="itemTitle">{{ item.title }}</span>
            <div class="itemContet">
              <div v-for="(itChild, j) in item.child" :key="j" :style="{ 'margin-right': (j + 1) % 3 === 0 ? '0' : '' }" @click="treeItemEvent(itChild)">{{ itChild.name }}</div>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { setScorll } from '@/util/common';
import { treeSelectData } from '@/util/defaultData';
import { useRouter } from 'vue-router';
const $router = useRouter();
// @ts-ignore
let activeIndex = $ref(0);
// @ts-ignore
const sortTree = $ref([
  { text: '菜系菜品', id: 1 },
  { text: '时令食材', id: 2 },
  { text: '功效', id: 3 },
]);
const goSearch = () => {
  $router.push('/search');
};
// @ts-ignore
let treeSelectList = $ref([]);

// 获取选择树数据
const getTreeData = (v: number) => {
  treeSelectList = treeSelectData.filter((item) => item.typeId === sortTree[v].id);
};

const treeItemEvent = (item: { name: string }) => {
  $router.push({ path: '/search', query: { value: item.name } });
};

getTreeData(0);

setScorll();
</script>

<style lang="scss" scoped>
#sortDiv {
  background: #f2f3f5;
  // height: 100vh;
  .inputSearch {
    height: 1.1333rem;
    width: 100vw;
    background: #ffffff;
    margin-bottom: 0.2933rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .searchBar {
      width: 7.3733rem;
      height: 0.8667rem;
      background: #f2f3f5;
      border-radius: 0.1333rem;
      display: flex;
      align-items: center;
      padding-left: 0.1867rem;
      margin-top: 0;
      img {
        height: 0.3867rem;
        width: 0.3867rem;
      }
      font-size: 0.3733rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(107, 107, 107, 0.6);
    }
  }
  .treeSelect {
    height: calc(100% - 1.1333rem - 0.2933rem);

    :deep(.van-tree-select__content) {
      flex: 2.7;
    }
    :deep(.van-tree-select__nav-item) {
      padding: 0.4533rem 0.4933rem;
      text-align: center;
      font-size: 0.4267rem;
      font-family: Source Han Sans CN;
      color: #a5a5a5;
      .van-sidebar-item__text {
        word-break: keep-all;
      }
    }
    :deep(.van-sidebar-item--select) {
      color: #242424;
    }
    :deep(.van-sidebar-item--select:before) {
      height: 100%;
      width: 0.1733rem;
    }
    .selectItem {
      padding: 0.5333rem 0.4rem;
      padding-bottom: 0.3rem;
      .itemTitle {
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        color: #a5a5a5;
      }
      .itemContet {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.7333rem;
        > div {
          background: #f7f7f7;
          border-radius: 0.1333rem;
          padding: 0.24rem 0.2rem;
          font-size: 0.3733rem;
          font-family: Source Han Sans CN;
          color: #242424;
          margin-right: 0.24rem;
          margin-bottom: 0.2rem;
          width: 1.5rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
