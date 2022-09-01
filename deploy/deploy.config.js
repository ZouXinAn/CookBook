/*
 * @Author: zoujiahao
 * @Date: 2022-05-13 14:18:20
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-08-31 09:37:39
 * @FilePath: \CookBook\deploy\deploy.config.js
 * @Description: 
 */
module.exports = {
  privateKey: '', // 本地私钥地址，位置一般在C:/Users/xxx/.ssh/id_rsa，非必填，有私钥则配置
  passphrase: '', // 本地私钥密码，非必填，有私钥则配置
  projectName: 'newfx', // 项目名称
  // 根据需要进行配置，如只需部署prod线上环境，请删除其他环境配置，反之亦然，支持多环境部署
  dev: {
    name: '开发环境',
    script: 'npm run build', // 开发环境打包脚本
    host: '10.1.104.24', // 开发服务器地址
    port: 22, // ssh port，一般默认22
    username: 'web_deploy', // 登录服务器用户名
    password: 'jty123456', // 登录服务器密码
    distPath: 'dist', // 本地打包dist目录
    // TODO 根据项目名修改最后的路径
    webDir: '/home/docker/nginx/html/deploy/examchina' // 开发环境web目录
  },
  // test: {
  //   name: '测试环境',
  //   script: 'npm run build', // 开发环境打包脚本
  //   host: '10.1.104.200', // 测试服务器地址
  //   port: 22, // ssh port，一般默认22
  //   username: 'wljty', // 登录服务器用户名
  //   password: 'wljty@123', // 登录服务器密码
  //   distPath: 'dist', // 本地打包dist目录
  //   webDir: '/opt/soft/nginx/html/test/examChina/dist' // 开发环境web目录
  // },
  // line: {
  //   name: '线上环境',
  //   script: 'npm run build', // 线上环境打包脚本
  //   host: '39.103.194.250', // 线上服务器地址
  //   port: 22, // ssh port，一般默认22
  //   username: 'wljty', // 登录服务器用户名
  //   password: 'jty.Fwq2021.#abc,@#!', // 登录服务器密码
  //   distPath: 'dist', // 本地打包dist目录
  //   webDir: '/opt/soft/nginx/html/examChina/dist' // 线上环境web目录
  // }
}
