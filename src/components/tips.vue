<!--
 * @Author: zoujiahao
 * @Date: 2022-09-29 15:25:53
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:22:38
 * @FilePath: \CookBooks\src\components\tips.vue
 * @Description: 
-->
<template>
  <div class="tips">
    <span class="fontTitle">小贴士</span>
    <p style="margin-top: 0.44rem; line-height: 0.5333rem">烹饪一定要注意安全哦</p>
    <p>
      祝您用餐愉快
      <img src="@/assets/image/smileIconYellow.png" style="height: 0.4533rem; width: 0.4533rem; vertical-align: middle; margin-left: 0.08rem" />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.tips {
  padding: 0.4rem 0.5333rem;
  span {
    font-size: 0.48rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.4rem;
    font-weight: 400;
    color: #242424;
  }
}
</style>
