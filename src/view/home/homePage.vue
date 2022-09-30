<!--
 * @Author: zoujiahao
 * @Date: 2022-08-29 11:01:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 16:41:27
 * @FilePath: \CookBooks\src\view\home\homePage.vue
 * @Description: 
-->
<template>
  <div id="homePage" @scroll="handleScroll">
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
        <img src="@/assets/image/searchIcon.png" alt="" />
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
        <normal-cook-book v-for="(item, i) in hotCook" :key="i" :item="item" />
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
        <knowledge-item v-for="(item, i) in konwledgeList" :key="i" :class="{ ishaveSplit: i + 1 !== konwledgeList.length ? true : '' }" :item="item" />
      </div>
      <loading-more v-if="isHaveData" />
      <p v-else style="text-align: center; margin: 0.2667rem 0; color: rgba(159, 159, 159, 1)">别拉啦，没有数据了！</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import normalCookBook from '@/components/normalCookBook.vue';
import knowledgeItem from '@/components/knowledgeItem.vue';
import { useRouter } from 'vue-router';
import LoadingMore from '@/components/LoadingMore.vue';
import { nextTick } from '@vue/runtime-core';
import { ref } from 'vue';
import { setScorll } from '@/util/common';
import { CookDetail } from '@/util/defaultData';

// setScorll(document.querySelector('#homePage'));
// setTimeout(() => {
//   console.log(document.querySelector('#home > div:nth-child(1)'));
//   console.log(document.querySelector('#home > div:nth-child(1)')?.scrollTop);
// }, 1000);

const $router = useRouter();

setScorll();

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

let cookDetail = new CookDetail();
// @ts-ignore
let hotCook = $ref([]);
// 获取热门菜谱
hotCook = cookDetail.getHotCook();

let konwledgeList = ref([
  {
    type: 1,
    id: 101,
    url: 'knowledge/knowB1.png',
    title: '牛奶和香蕉一起吃可以减肥吗？香蕉牛奶 汁可以减肥吗？',
  },
  {
    type: 2,
    id: 102,
    url: ['knowledge/knowI1.png', 'knowledge/knowI2.png'],
    title: ['花雕酒怎么喝味道 才好的正确饮用...', '生榨胡萝卜汁 可以喝吗鲜榨胡萝汁...'],
  },
  {
    type: 3,
    id: 103,
    url: 'knowledge/knowS1.png',
    title: '番茄茄红素吸收率提升50%的4大绝招让你吃出惊人美肌力',
  },
]);

let restKnow = ref([
  {
    type: 1,
    id: 104,
    url: 'knowledge/knowB2.png',
    title: '秋季吃藕有哪些好处？为何说秋天吃藕比较好',
  },
  {
    type: 3,
    id: 105,
    url: 'knowledge/knowS2.png',
    title: '哺乳妈妈必知的黄金高品质母乳的6大关键营养素',
  },
  {
    type: 2,
    id: 106,
    url: ['knowledge/knowI3.png', 'knowledge/knowI4.png'],
    title: ['男人吃香菜好吗 男人香菜吃多了... ', '西蓝花焯水几分钟能熟 西蓝花焯水... '],
  },
]);

let isHaveData = ref(true);

const handleScroll = (e: any) => {
  const { scrollTop, clientHeight, scrollHeight } = e.target;
  if (scrollTop + clientHeight === scrollHeight) {
    // console.log('---底部了,调接口');
    setTimeout(() => {
      if (restKnow.value.length > 0) {
        // @ts-ignore
        konwledgeList.value = konwledgeList.value.concat(restKnow.value.splice(0, 2));
      } else {
        isHaveData.value = false;
      }
    }, 800);
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';
#homePage {
  > div {
    padding: 0 0.5333rem 0;
  }
  padding-bottom: 70px;
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
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
    .tipsSpan {
      display: inline-block;
      margin-top: 0.6rem;
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      width: 8.9333rem;
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
      // height: 4.2867rem;
      height: 3.5rem;
      // height: 2.7867rem;
      padding: 0.9rem 0 0 0.5333rem;
      // 670width 374height 1.78
      // 375width  209height 1.79
      p {
        font-size: 0.64rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 0.2rem;
        line-height: 1em;
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
