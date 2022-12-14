/*
 * @Author: zoujiahao
 * @Date: 2022-09-24 10:48:53
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 13:57:32
 * @FilePath: \CookBooks\src\util\common.ts
 * @Description: 
 */
import { onBeforeRouteLeave } from 'vue-router';
import { nextTick } from '@vue/runtime-core';


export function getUrl(url:string|string[]){
    return new URL(`../assets/image/${url}`, import.meta.url).href;
}

// export default{
//   getUrl:(url:string)=>{
//     return new URL(`../assets/image/${url}`, import.meta.url).href;
// }
// }



export function setScorll() {
    onBeforeRouteLeave(()=>{
        // console.log('onBeforeRouteLeave',document.querySelector('#home > div:nth-child(1)')?.scrollTop);
        let scrollNo :number = document.querySelector('#home > div:nth-child(1)')?.scrollTop as number
            if(scrollNo){
                sessionStorage.setItem('scroll',String(scrollNo))
            }
    })
    nextTick(()=>{
        let dom = document.querySelector('#home > div:nth-child(1)')
        if (sessionStorage.getItem('scroll')) {
            // @ts-ignore
            dom.scrollTop=Number(sessionStorage.getItem('scroll'))
            sessionStorage.removeItem('scroll')
        }
    })
}

// onBeforeRouteLeave