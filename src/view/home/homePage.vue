<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-24 09:40:46
 * @FilePath: \CookBooks\src\view\home\homePage.vue
 * @Description: 
-->
<template>
  <div id="homePage">
    <!-- <span>home</span>
  <p>homeee</p> -->
    <!-- <span>homePage</span>
  <router-link to="/moreKnowledge">跳转</router-link> -->
    <div id="homeTop">
      <p>Today</p>
      <p>
        <span>17:18</span>
        <span style="margin: 0 0.24rem">/</span>
        <span>周一</span>
      </p>
      <div class="searchBar" @click="goSearch">
        <van-icon name="search" />
        <span style="margin-left: 0.2rem"> 搜索食材食谱 </span>
      </div>
      <span class="tipsSpan"> 对美食的爱，往往是发自内心的，从心出发，美味无处不在 </span>
    </div>
    <div class="hotBook">
      <div class="titlebar">
        <span class="bigTitle"> 热门菜谱 </span>
        <span class="checkAll" @click="checkMore('One')"
          >查看全部
          <img style="height: 0.2933rem; width: 0.1733rem; margin-left: 0.1333rem" src="@/assets/image/rightArrow.png" alt="" />
        </span>
      </div>
      <div class="hotContent">
        <normal-cook-book v-for="(item, i) in 4" :key="i" />
      </div>
    </div>
    <div class="todayRecommond">
      <span class="bigTitle"> 今日推荐 </span>
      <div class="recommondContent" @click="checkMore('Two')">
        <p>温暖·好味</p>
        <p>快来露一手~</p>
        <div class="lineDiv"></div>
        <div class="checkNow">
          <span>点击查看</span>
          <img style="height: 0.2933rem; width: 0.1733rem; margin-left: 0.16rem" src="@/assets/image/rightArrow.png" alt="" />
        </div>
      </div>
    </div>
    <div class="todayRecommond eazyCook">
      <span class="bigTitle"> 新手不翻车 </span>
      <div class="recommondContent" @click="checkMore('Three')">
        <p>有手就会</p>
        <p>美味简单做~</p>
        <div class="lineDiv"></div>
        <div class="checkNow">
          <span>点击查看</span>
          <img style="height: 0.2933rem; width: 0.1733rem; margin-left: 0.16rem" src="@/assets/image/rightArrow.png" alt="" />
        </div>
      </div>
    </div>
    <div class="moreKnowledge">
      <span class="bigTitle"> 涨知识 </span>
      <div class="knowledgeContent">
        <knowledge-item :class="{ ishaveSplit: true }" :item="{ type: 1 }" />
        <knowledge-item :class="{ ishaveSplit: true }" :item="{ type: 2 }" />
        <knowledge-item :class="{ ishaveSplit: true }" :item="{ type: 3 }" />
        <knowledge-item :class="{ ishaveSplit: true }" :item="{ type: 1 }" />
        <knowledge-item :class="{ ishaveSplit: true }" :item="{ type: 3 }" />
        <knowledge-item :class="{ ishaveSplit: false }" :item="{ type: 2 }" />
        <!-- <knowledge-item :type="2"></knowledge-item>
        <knowledge-item :type="3"></knowledge-item> -->
      </div>
      <!-- <div class="loadingNow">
        <img src="@/assets/image/loadingIcon.png " alt="" />
        <span>努力加载中..... </span>
      </div> -->
      <loading-more />
    </div>
  </div>
</template>

<script lang="ts" setup>
import normalCookBook from '@/components/normalCookBook.vue';
import knowledgeItem from '@/components/knowledgeItem.vue';
import { useRouter } from 'vue-router';
import LoadingMore from '@/components/LoadingMore.vue';

const $router = useRouter();

const checkMore = (type: string) => {
  // console.log(type);
  $router.push({
    path: 'listPage',
    query: { type },
  });
};

const goSearch = () => {
  $router.push('/search');
};
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';
#homePage {
  > div {
    padding: 0 0.5333rem 0;
  }
  padding-bottom: 60px;
  #homeTop {
    background: url('@/assets/image/homeTitleBcg.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 5.4rem;
    padding: 0.2667rem 0.5333rem 0;
    > p {
      margin: 0;
      font-size: 0.6933rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
    }
    span {
      font-size: 0.4267rem;
      font-family: Source Han Sans CN;
      font-weight: normal;
      color: #ffffff;
    }
    .searchBar {
      margin-top: 0.6667rem;
      width: 8.9333rem;
      height: 1.12rem;
      background: rgba(246, 249, 252, 0.3);
      border-radius: 0.1333rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .van-icon,
      span {
        font-size: 0.48rem;
        color: rgba(255, 255, 255, 0.6);
      }
      .van-icon {
        font-size: 0.52rem;
        color: rgba(255, 255, 255, 1);
      }
    }
    .tipsSpan {
      display: inline-block;
      margin-top: 0.6rem;
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .hotBook {
    margin-top: 1.1733rem;
    .checkAll {
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(36, 36, 36, 0.6);
    }

    .titlebar {
      @include flexOne(center);
    }
    .hotContent {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .todayRecommond {
    margin-top: 0.5333rem;
    .recommondContent {
      margin-top: 0.5333rem;
      background: url('@/assets/image/todayRecommond.png') no-repeat;
      background-size: 100% 100%;
      width: calc(88vw - 0.2667rem);
      height: 4.2867rem;
      padding: 1.3333rem 0 0 0.5333rem;
      p {
        font-size: 0.64rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 0.2rem;
      }
      .lineDiv {
        width: 3.72rem;
        height: 0.0533rem;
        background: #ffffff;
        margin-bottom: 0.2667rem;
      }
      .checkNow {
        width: 3.3333rem;
        height: 0.7333rem;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 0.1333rem;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 0.4rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(36, 36, 36, 0.5);
        }
      }
    }
  }
  .eazyCook {
    .recommondContent {
      background: url('@/assets/image/eazyCook.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .moreKnowledge {
    margin-top: 1.0667rem;
    .knowledgeContent {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
