<!--
 * @Author: zoujiahao
 * @Date: 2022-08-31 13:52:03
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-29 17:17:28
 * @FilePath: \CookBooks\src\view\home\famousCook.vue
 * @Description: 
-->
<template>
  <div id="famousCook">
    <div class="bannerDiv">
      <span>名厨菜</span>
      <img src="@/assets/image/famousBanner.png" alt="" />
    </div>
    <div class="famousItem">
      <div class="famousTitle">高颜值酒店名菜</div>
      <div class="famousScrollDiv">
        <div>
          <div class="famousScrollItem" v-for="(item, i) in famousList.hotel.list" :key="i" @click="goToDefail(item)">
            <img :src="getUrl(item.url)" alt="" />
            <span>{{ item.title }}</span>
            <div class="itemTips">
              <div>
                <img src="@/assets/image/eyeIcon.png" style="height: 0.2667rem; width: 0.4rem" />
                <span> {{ item.seeNo }} </span>
              </div>
              <div style="margin-left: 0.6667rem">
                <img src="@/assets/image/smileIcon.png" style="height: 0.2933rem; width: 0.2933rem" />
                <span> {{ item.starNo }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="famousItem">
      <div class="famousTitle">女人美容养颜食谱</div>
      <div class="famousScrollDiv">
        <div>
          <div class="famousScrollItem" v-for="(item, i) in famousList.beautify.list" :key="i" @click="goToDefail(item)">
            <img :src="getUrl(item.url)" alt="" />
            <span>{{ item.title }}</span>
            <div class="itemTips">
              <div>
                <img src="@/assets/image/eyeIcon.png" style="height: 0.2667rem; width: 0.4rem" />
                <span> {{ item.seeNo }} </span>
              </div>
              <div style="margin-left: 0.6667rem">
                <img src="@/assets/image/smileIcon.png" style="height: 0.2933rem; width: 0.2933rem" />
                <span> {{ item.starNo }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="famousItem">
      <div class="famousTitle">煲一碗好汤，补出好气色</div>
      <div class="famousScrollDiv">
        <div>
          <div class="famousScrollItem" v-for="(item, i) in famousList.soup.list" :key="i" @click="goToDefail(item)">
            <img :src="getUrl(item.url)" alt="" />
            <span>{{ item.title }}</span>
            <div class="itemTips">
              <div>
                <img src="@/assets/image/eyeIcon.png" style="height: 0.2667rem; width: 0.4rem" />
                <span> {{ item.seeNo }} </span>
              </div>
              <div style="margin-left: 0.6667rem">
                <img src="@/assets/image/smileIcon.png" style="height: 0.2933rem; width: 0.2933rem" />
                <span> {{ item.starNo }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUrl, setScorll } from '@/util/common';
import { reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
setScorll();
// @ts-ignore
let famousList = reactive({
  hotel: {
    type: 1,
    list: [
      { parentType: 1, id: 311, url: 'famous1.png', title: '奶油香煎龙虾|浓郁的上层奶油与澳洲龙虾', seeNo: '12.4W', starNo: '18657' },
      { parentType: 1, id: 312, url: 'famous2.png', title: '养生牛油果冰淇淋', seeNo: '18.3w', starNo: '10005' },
      { parentType: 1, id: 314, url: 'famous10.jpg', title: '芝士芒果慕斯', seeNo: '10.8W', starNo: '12534' },
      { parentType: 1, id: 313, url: 'famous3.png', title: '鲜虾烧麦', seeNo: '11.5W', starNo: '13264' },
    ],
  },
  beautify: {
    type: 2,
    list: [
      { parentType: 2, id: 321, url: 'famous4.png', title: '银耳枸杞羹', seeNo: '86.9w', starNo: '56881' },
      { parentType: 2, id: 322, url: 'famous5.png', title: '冰糖燕窝|滋阴润燥的上层选择', seeNo: '46.2w', starNo: '20334' },
      { parentType: 2, id: 322, url: 'famous6.png', title: '红豆薏米粥', seeNo: '56.4w', starNo: '32564' },
    ],
  },
  soup: {
    type: 3,
    list: [
      { parentType: 3, id: 331, url: 'famous7.png', title: '人参炖鸡汤', seeNo: '16.8w', starNo: '9983' },
      { parentType: 3, id: 332, url: 'famous8.png', title: '姬松茸茶树菇汤', seeNo: '3.6w', starNo: '8885' },
      { parentType: 3, id: 333, url: 'famous9.png', title: '鲫鱼豆腐汤', seeNo: '9.5w', starNo: '7669' },
    ],
  },
});

let $router = useRouter();

const goToDefail = (item: any) => {
  // console.log(item);
  $router.push({
    path: '/famousCookDetail',
    query: { id: item.id },
  });
};
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';
#famousCook {
  height: calc(100vh - 70px);
  overflow: hidden scroll;
  .bannerDiv {
    flex-direction: column;
    @include flexOne(center);
    span {
      font-size: 0.48rem;
      font-weight: 400;
      color: #242424;
      margin: 0.5333rem 0;
    }
    img {
      width: 90vw;
      height: 4.0267rem;
    }
  }
  .famousItem {
    margin-top: 0.8rem;
    padding-left: 5vw;
    &:nth-last-child(1) {
      margin-bottom: 0.4rem;
    }
    .famousTitle {
      font-size: 0.5067rem;
      font-weight: bold;
      color: #242424;
      margin-bottom: 0.4rem;
    }
    .famousScrollDiv {
      height: 5rem;
      overflow: hidden;
      > div {
        overflow: scroll hidden;
        display: flex;
        height: 5.2rem;
        // background-color: gray;
      }
      .famousScrollItem {
        display: flex;
        flex-direction: column;
        margin-right: 0.2667rem;
        img {
          width: 4.3467rem;
          height: 3.2933rem;
        }
        font-size: 0.4rem;
        color: #242424;
        > span {
          width: 4.3467rem;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0.3067rem 0;
        }
        .itemTips {
          font-size: 0.2933rem;
          color: #a5a5a5;
          display: flex;
          > div {
            margin-right: 0.2667rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              margin-right: 0.0933rem;
            }
          }
        }
      }
    }
  }
}
</style>
