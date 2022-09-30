<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 15:22:21
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 17:04:23
 * @FilePath: \CookBooks\src\components\searchCookbook.vue
 * @Description: 
-->
<template>
  <div class="searchCookBook" @click="goDetail">
    <img :class="item.photoType" :src="getUrl(item.url)" alt="" />
    <p>{{ item.title }}</p>
    <van-tag type="primary" size="large">{{ item.cookType }}</van-tag>
    <div class="seeDiv" :style="{ top: item.photoType === 'Long' ? '57%' : '50%' }">
      <img src="@/assets/image/eyeIconWhite.png" style="height: 0.2667rem; width: 0.4rem" />
      <span> {{ item.seeNo }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUrl } from '@/util/common';
import { useRouter } from 'vue-router';

interface searchItem {
  src: string;
  [propname: string]: any;
}
let $props = defineProps<{ item: searchItem }>();
// console.log($props.item.src);
// ../assets/images/${props.item.src}@2x.png
// let imgUrl = new URL(`../assets/image/${$props.item.src}`, import.meta.url).href;

const $router = useRouter();

const goDetail = () => {
  console.log('item:', $props.item);
  $router.push({ path: '/cookDetail', query: { cookId: $props.item.id } });
};
/**
 *
 * 122112
 */
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.searchCookBook {
  background: #ffffff;
  width: 4.3067rem;
  height: fit-content;
  margin: 0 0.32rem 0.32rem 0;
  position: relative;
  .seeDiv {
    position: absolute;
    top: 50%;
    left: 5%;
    color: white;
    img {
      margin-right: 0.1333rem;
    }
  }
  img {
    object-fit: cover;
  }
  .Short {
    height: 3.12rem;
    width: 4.3067rem;
  }
  .Long {
    height: 4.0133rem;
    width: 4.3067rem;
    & + .seeDiv {
      top: 40%;
    }
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
