<!--
 * @Author: zoujiahao
 * @Date: 2022-08-24 15:52:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-29 10:03:14
 * @FilePath: \CookBook\src\components\HelloWorld.vue
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="message">{{ msg }}</h1>
  <van-button type="danger">危险按钮</van-button>

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
