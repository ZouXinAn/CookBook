/*
 * @Author: zoujiahao
 * @Date: 2022-08-01 11:09:17
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-01 17:00:01
 * @FilePath: \introduceProject\src\util\scaleFont.js
 * @Description:  主要解决微信等浏览器缩放字体对页面的影响
 */
(function () { // android
  if (
    typeof WeixinJSBridge === 'object' &&
    typeof WeixinJSBridge.invoke === 'function'
  ) {
    handleFontSize()
  } else {
    if (document.addEventListener) {
      document.addEventListener(
        'WeixinJSBridgeReady',
        handleFontSize,
        false
      )
    } else if (document.attachEvent) {
      document.attachEvent(
        'WeixinJSBridgeReady',
        handleFontSize
      )
      document.attachEvent(
        'onWeixinJSBridgeReady',
        handleFontSize
      )
    }
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', {
      fontSize: 0
    })
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function () {
      WeixinJSBridge.invoke('setFontSizeCallback', {
        fontSize: 0
      })
    })
  }
})()
