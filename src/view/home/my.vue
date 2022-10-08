<!--
 * @Author: zoujiahao
 * @Date: 2022-09-01 13:58:00
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-10-07 17:46:52
 * @FilePath: \CookBooks\src\view\home\my.vue
 * @Description: 
-->
<template>
  <div id="myDiv">
    <div class="userInfo">
      <img src="@/assets/image/userIcon.png" alt="" />
      <span> 登录/注册 </span>
    </div>
    <div class="toolBar">
      <div class="toolBarItem">
        <img src="@/assets/image/starIcon.png" alt="" />
        <span>收藏</span>
      </div>
      <div class="toolBarItem">
        <img src="@/assets/image/knowIcon.png" alt="" />
        <span>知识</span>
      </div>
      <div class="toolBarItem">
        <img src="@/assets/image/historyIcon.png" style="width: 0.56rem; height: 0.6933rem" alt="" />
        <span>浏览记录</span>
      </div>
    </div>
    <div class="cellDiv">
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" class="noLineCell" is-link value="v.1.0.6" />
      <div class="splitLineDiv" style="margin-top: 0"></div>
      <van-cell title="隐私政策" is-link />
      <van-cell title="用户协议" is-link />
      <van-cell class="haveLineCell" title="更多设置" is-link />
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#myDiv {
  .userInfo {
    height: 4.6rem;
    width: 100vw;
    background: #feaa03;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 2.6667rem;
      height: 2.6667rem;
    }
    span {
      font-size: 0.56rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      margin-top: 0.2667rem;
    }
  }
  .toolBar {
    display: flex;
    justify-content: space-around;
    // width54
    .toolBarItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 1.6rem;
      img {
        width: 0.72rem;
        height: 0.6933rem;
        margin: 0.4933rem 0 0.2667rem 0;
      }
      span {
        display: block;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #242424;
        word-break: keep-all;
      }
    }
  }
  .cellDiv {
    margin-top: 0.5333rem;
    :deep(.van-cell) {
      line-height: 1.0667rem;
      .van-cell__right-icon {
        line-height: 1.0667rem;
      }
      .van-cell__title {
        font-size: 0.4rem;
        color: #242424;
        padding-left: 0.2267rem;
      }
      &:after {
        border-bottom: 2px solid var(--van-cell-border-color);
      }
    }
    :deep(.noLineCell) {
      &:after {
        content: '';
        display: none;
      }
    }
    // :deep(.haveLineCell) {
    //   position: relative;
    //   &::after {
    //     position: absolute;
    //     box-sizing: border-box;
    //     content: 'a';
    //     pointer-events: none;
    //     bottom: 0;
    //   }
    // }
  }
}
</style>
