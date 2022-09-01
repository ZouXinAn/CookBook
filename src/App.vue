<!--
 * @Author: zoujiahao
 * @Date: 2022-08-24 15:52:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-01 14:17:09
 * @FilePath: \CookBooks\src\App.vue
 * @Description: 
-->
<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import './util/checkPlatfrom.js';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
