<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 16:01:48
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-31 16:05:51
 * @FilePath: \CookBook\src\components\LoadingMore.vue
 * @Description: 
-->
<template>
  <div id="loadingNow">
    <img src="@/assets/image/loadingIcon.png " alt="" />
    <span>努力加载中..... </span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#loadingNow {
  text-align: center;
  margin-top: 0.8rem;
  span {
    font-size: 0.3733rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #818181;
    margin-left: 0.2667rem;
  }
  img {
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: middle;
  }
}
</style>
