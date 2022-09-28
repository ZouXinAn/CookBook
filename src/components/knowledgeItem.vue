<!--
 * @Author: zoujiahao
 * @Date: 2022-08-30 11:00:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-28 17:07:17
 * @FilePath: \CookBooks\src\components\knowledgeItem.vue
 * @Description: 
-->
<template>
  <div id="knowledgeItem">
    <!-- 1大图模式  2图内文模式  3左文右图模式 -->
    <div class="bigPhoto" v-if="item.type === 1" @click="goToDetail('')">
      <p>{{ item.title }}</p>
      <img :src="getUrl(item.url)" alt="" />
    </div>
    <div class="photoInnerText" v-else-if="item.type === 2">
      <div @click="goToDetail('l')">
        <img :src="getUrl(item.url[0])" alt="" />
        <p>{{ item.title[0] }}</p>
      </div>
      <div @click="goToDetail('r')">
        <img :src="getUrl(item.url[1])" alt="" />
        <p>{{ item.title[1] }}</p>
      </div>
    </div>
    <div class="photoSplitText" v-else @click="goToDetail('')">
      <p>{{ item.title }}</p>
      <img :src="getUrl(item.url)" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUrl } from '@/util/common';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
const $router = useRouter();
// type :1大图模式  2图内文模式  3左文右图模式
type Item = {
  type: number;
  title: string | string[];
  url: string | string[];
  id: number;
};
const $prop = defineProps<{ item: Item }>();

const goToDetail = (str: string) => {
  $router.push({ path: '/moreKnowledge', query: { id: `${$prop.item.type}-${$prop.item.id}${str ? '-' + str : ''}` } });
};
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
#knowledgeItem {
  margin: 0.2667rem 0;
  p {
    font-size: 0.48rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #242424;
  }
  .bigPhoto {
    img {
      margin-top: 0.3333rem;
      width: 8.9333rem;
      height: 4.9867rem;
    }
  }
  .photoInnerText {
    width: 8.9333rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      position: relative;
    }
    img {
      width: 4.2267rem;
      height: 5.64rem;
    }
    p {
      width: 4.2267rem;
      position: absolute;
      top: 0.3733rem;
      left: 0.2rem;
      font-size: 0.48rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .photoSplitText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 8.9333rem;
    p {
      width: 4.24rem;
    }
    img {
      width: 4.24rem;
      height: 3.2rem;
    }
  }
}
.ishaveSplit {
  padding-bottom: 10px;
  position: relative;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    background: rgba(35, 34, 34, 0.1);
    bottom: -5px;
  }
}
</style>
