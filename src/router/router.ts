/*
 * @Author: zoujiahao
 * @Date: 2022-08-29 10:53:38
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-01 09:42:27
 * @FilePath: \CookBook\src\router\router.ts
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
      { path: 'sort', name: 'sort', component: () => import('@/view/home/sort.vue'), }
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
    path: '/:pathMatch(.*)*', // 不识别的path自动匹配404
    redirect: '/'
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
