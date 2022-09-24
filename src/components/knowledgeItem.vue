<!--
 * @Author: zoujiahao
 * @Date: 2022-08-30 11:00:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-24 09:45:47
 * @FilePath: \CookBooks\src\components\knowledgeItem.vue
 * @Description: 
-->
<template>
  <div id="knowledgeItem">
    <!-- 1大图模式  2图内文模式  3左文右图模式 -->
    <div class="bigPhoto" v-if="item.type === 1">
      <p>牛奶和香蕉一起吃可以减肥吗？香蕉牛奶汁可以减肥吗？</p>
      <img src="@/assets/image/knowB1.png " alt="" />
    </div>
    <div class="photoInnerText" v-else-if="item.type === 2">
      <div>
        <img src="@/assets/image/knowI1.png " alt="" />
        <p>花雕酒怎么喝味道 才好的正确饮用...</p>
      </div>
      <div>
        <img src="@/assets/image/knowI2.png " alt="" />
        <p>生榨胡萝卜汁可以 喝吗鲜榨胡萝汁...</p>
      </div>
    </div>
    <div class="photoSplitText" v-else>
      <p>番茄茄红素吸收率提 升50%的4大绝招让 你吃出惊人美肌力</p>
      <img src="@/assets/image/knowS1.png " alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// type :1大图模式  2图内文模式  3左文右图模式
type Item = {
  type: number;
};
defineProps<{ item: Item }>();
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
