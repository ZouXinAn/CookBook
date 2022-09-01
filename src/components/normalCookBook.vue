<!--
 * @Author: zoujiahao
 * @Date: 2022-08-30 11:00:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-30 17:28:53
 * @FilePath: \CookBook\src\components\normalCookBook.vue
 * @Description: 
-->
<template>
  <div id="normalCookBook">
    <img src="@/assets/image/tempImg.png" alt="" />
    <span class="bookTitle">四味香肠</span>
    <span class="bookAuthor">小心安</span>
    <!-- 318px 240px -->
  </div>
</template>

<script lang="ts" setup></script>

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
