<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 15:22:21
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-22 15:20:22
 * @FilePath: \CookBooks\src\components\searchCookbook.vue
 * @Description: 
-->
<template>
  <div class="searchCookBook" @click="goDetail">
    <img :class="item.itemType" :src="imgUrl" alt="" />
    <p>麻婆豆腐</p>
    <van-tag type="primary" size="large">家常菜</van-tag>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

interface searchItem {
  src: string;
  [propname: string]: any;
}
let $props = defineProps<{ item: searchItem }>();
// console.log($props.item.src);
// ../assets/images/${props.item.src}@2x.png
let imgUrl = new URL(`../assets/image/${$props.item.src}`, import.meta.url).href;

const $router = useRouter();

const goDetail = () => {
  console.log('item:', $props.item);
  $router.push({ path: '/cookDetail', query: { cookId: 1003 } });
};
/**
 *
 * 122112
 */
</script>

<style lang="scss" scoped>
.searchCookBook {
  background: #ffffff;
  width: 4.3067rem;
  height: fit-content;
  margin: 0 0.32rem 0.32rem 0;
  .shortImg {
    height: 3.12rem;
    width: 4.3067rem;
  }
  .longImg {
    height: 4.0133rem;
    width: 4.3067rem;
  }
  p {
    margin: 0.36rem 0 0.1733rem 0.2933rem;
  }
  .van-tag {
    margin: 0 0 0.2667rem 0.2933rem;
    background: #feaa03;
    border-radius: 0.1333rem;
  }
}
</style>
