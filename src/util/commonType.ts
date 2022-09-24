/*
 * @Author: zoujiahao
 * @Date: 2022-09-23 11:14:01
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-23 11:18:03
 * @FilePath: \CookBooks\src\util\commonType.ts
 * @Description: 
 */
export interface listItem {
  src: string;
  cookName: string;
  labelName: string;
  itemType: string;
}


export interface WaterFall {
  line1: listItem[];
  line2: listItem[];
}


