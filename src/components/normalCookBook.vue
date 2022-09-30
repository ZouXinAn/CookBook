<!--
 * @Author: zoujiahao
 * @Date: 2022-08-30 11:00:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 16:52:38
 * @FilePath: \CookBooks\src\components\normalCookBook.vue
 * @Description: 
-->
<template>
  <div id="normalCookBook" @click="goToDetail">
    <img :src="getUrl(item.url)" alt="" />
    <span class="bookTitle">{{ item.title }}</span>
    <span class="bookAuthor">{{ item.author }}</span>
  </div>
</template>

<script lang="ts" setup>
import { getUrl } from '@/util/common';
import { ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
const $router = useRouter();
const $props = defineProps<{ item: any }>();

let loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);

const goToDetail = () => {
  $router.push({
    path: '/cookDetail',
    query: { cookId: $props.item.id },
  });
};
</script>

<style lang="scss" scoped>
#normalCookBook {
  margin: 0.5333rem 0 0.4rem;
  display: flex;
  flex-direction: column;

  img {
    width: 4.1333rem;
    height: 3.2rem;
  }
  .bookTitle {
    font-size: 0.48rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #242424;
    margin: 0.4rem 0;
  }
  .bookAuthor {
    font-size: 0.4rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(36, 36, 36, 0.7);
  }
}
</style>
