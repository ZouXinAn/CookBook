/*
 * @Author: zoujiahao
 * @Date: 2022-08-29 10:53:38
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-22 15:10:42
 * @FilePath: \CookBooks\src\router\router.ts
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/view/home/home.vue'),
    redirect: '/homePage',//页面打开重定向之此页面 默认选择
    children: [
      { path: 'homePage', name: 'home', component: () => import('@/view/home/homePage.vue'), },
      { path: 'sort', name: 'sort', component: () => import('@/view/home/sort.vue') },
      { path: 'famousCook', name: 'famousCook', component: () => import('@/view/home/famousCook.vue') },
      { path: 'my', name: 'my', component: () => import('@/view/home/my.vue') }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/view/search/search.vue')
  },
  {
    path: '/moreKnowledge',
    name: 'moreKnowledge',
    component: () => import('@/view/moreKnowledge/moreKnowledge.vue')
  },
  {
    path:'/listPage',
    name:'listPage',
    component:()=> import('@/view/listPage/listPage.vue')
  },
  {
    path:'/cookDetail',
    name:'cookDetail',
    component:()=> import('@/view/listPage/cookDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*', // 不识别的path自动匹配404
    redirect: '/'
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
