/*
 * @Author: zoujiahao
 * @Date: 2022-07-29 14:39:10
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-11 17:16:21
 * @FilePath: \introduceProject\src\util\checkPlatfrom.js
 * @Description: 
 */

import $router from "@/router/router.js";
let isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

if (isPhone) {
  sessionStorage.usedPhone = (sessionStorage.usedPhone ?? 0) - 0 + 1
}
// 路由判断
// console.log('falg', falg);
// console.log(location.pathname, isPhone);

if (isPhone) {
  // console.log('这是移动端');
  // console.log(location.pathname.indexOf('H5'));
  // 非h5页面
  if (location.pathname.indexOf('H5') < 0) {
    $router.replace('/companyH5');
  }
} else {
  // console.log('这是PC端');
  if (sessionStorage.usedPhone > 0 || location.pathname.indexOf('H5') > 0) {
    $router.replace('/');
    sessionStorage.usedPhone = 0
  }
}
