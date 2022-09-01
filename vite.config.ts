/*
 * @Author: zoujiahao
 * @Date: 2022-08-24 15:52:31
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-01 13:43:13
 * @FilePath: \CookBooks\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import { resolve } from 'path' // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      // 开启$ref转换
      reactivityTransform: true
    }
  ),
  Components({
      resolvers: [VantResolver()],
  })],
  resolve:{
    alias:
    [
    {find:'@',replacement:resolve(__dirname, '.', 'src')},
    {find:'/image',replacement:'src/assets/image'}
    ]
  },
  server:{
    host:'0.0.0.0',
    port:8080,
    strictPort:false,
    open:true,
    // proxy:{
    //    '/api': {
    //     target: 'http://10.1.104.24:1099',
    //     changeOrigin: true,
    //     secure: false,
    //     // rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // }
  }
})
