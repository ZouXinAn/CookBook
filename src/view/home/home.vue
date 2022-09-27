<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-27 17:06:39
 * @FilePath: \CookBooks\src\view\home\home.vue
 * @Description: 
-->
<template>
  <div id="home">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <van-tabbar route @change="changePage">
      <van-tabbar-item replace to="homePage" name="homePage">
        <span>首页</span>
        <template #icon>
          <img :src="nowPage === 'homePage' ? getUrl('home') : getUrl('homeGray')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="sort" name="sort">
        <span>分类</span>
        <template #icon>
          <img :src="nowPage === 'sort' ? getUrl('classify') : getUrl('classifyGray')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="famousCook" name="famousCook">
        <span>名厨菜</span>
        <template #icon>
          <img :src="nowPage === 'famousCook' ? getUrl('famousCook') : getUrl('famousCookGray')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="my" name="my">
        <span>我的</span>
        <template #icon>
          <img :src="nowPage === 'my' ? getUrl('my') : getUrl('myGray')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
let nowPage = ref('homePage');

const getUrl = (url: string) => {
  // console.log(url);
  return new URL(`../../assets/image/${url}.png`, import.meta.url).href;
};

const changePage = (v: string): void => {
  nowPage.value = v;
};

let $route = useRoute();
nowPage.value = $route.path.replace('/', '') as string;
console.log($route);
</script>

<style lang="scss" scoped>
#home {
  > div:nth-child(1) {
    height: calc(100vh - 70px);
    overflow: hidden scroll;
  }
  .van-tabbar {
    position: fixed;
    bottom: 0;
    height: 70px;
    .van-tabbar-item {
      padding-top: 10px;
      justify-content: flex-start;
    }
  }
}
</style>
