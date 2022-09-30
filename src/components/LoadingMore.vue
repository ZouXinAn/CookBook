<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 16:01:48
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 17:14:30
 * @FilePath: \CookBooks\src\components\LoadingMore.vue
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
  // margin-top: 0.8rem;
  margin: 0.8rem 0;
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
    animation: rotateOne 1s infinite;
  }
}

@keyframes rotateOne {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
