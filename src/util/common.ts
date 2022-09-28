/*
 * @Author: zoujiahao
 * @Date: 2022-09-24 10:48:53
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-28 17:23:00
 * @FilePath: \CookBooks\src\util\common.ts
 * @Description: 
 */
import { onBeforeRouteLeave } from 'vue-router';

export function getUrl(url:string){
    return new URL(`../assets/image/${url}`, import.meta.url).href;
}

// export default{
//   getUrl:(url:string)=>{
//     return new URL(`../assets/image/${url}`, import.meta.url).href;
// }
// }

export function initScorll() {
    
}

export function setScorll() {
    if (sessionStorage.getItem('scroll')) {
        console.log(sessionStorage.getItem('scroll'));
        document.querySelector('#home > div:nth-child(1)')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    
    onBeforeRouteLeave(()=>{
        // console.log(document.querySelector('#home > div:nth-child(1)')?.scrollTop);
        let scrollNo :number = document.querySelector('#home > div:nth-child(1)')?.scrollTop as number
        if(scrollNo){
            sessionStorage.setItem('scroll',String(scrollNo))
        }
    })
}

// onBeforeRouteLeave