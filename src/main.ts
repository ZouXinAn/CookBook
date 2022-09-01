/*
 * @Author: zoujiahao
 * @Date: 2022-08-24 15:52:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-01 11:02:46
 * @FilePath: \CookBook\src\main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import './util/scaleFont'
import './util/rem'
import './style.css'
import './style/common.scss'
import router from "./router/router"
import App from './App.vue'


createApp(App).use(router).mount('#app')
