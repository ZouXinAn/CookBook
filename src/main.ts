/*
 * @Author: zoujiahao
 * @Date: 2022-09-21 17:24:13
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-24 10:49:21
 * @FilePath: \CookBooks\src\main.ts
 * @Description: 
 */
/*
 * @Author: zoujiahao
 * @Date: 2022-08-24 15:52:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-24 10:48:19
 * @FilePath: \CookBooks\src\main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import './util/scaleFont'
import './util/rem'
import './style.css'
import './style/common.scss'
import router from "./router/router"
import App from './App.vue'

let app= createApp(App).use(router).mount('#app')
