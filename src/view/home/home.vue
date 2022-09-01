<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-29 14:00:15
 * @FilePath: \CookBook\src\view\home\home.vue
 * @Description: 
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <van-tabbar route>
    <van-tabbar-item replace to="homePage" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="sort" icon="search">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
