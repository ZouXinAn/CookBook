/*
 * @Author: zoujiahao
 * @Date: 2022-09-23 11:14:01
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:05:53
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


export interface KnowItemContent{
  type:string,
  content:string,
}

export interface KnowItem{
  title:string,
  time:string,
  source:string,
  contentList:KnowItemContent[],
}

export interface knowItemType {
  id: number | string;
  title: string;
  time: string;
  source: string;
  contentList: [];
}


export interface FamousItemType{
  id:number,
    url:string,
    title:string,
    seeNo:string,
    starNo:string,
    videoUrl:string,
    videoPoster:string,
    videoTime:string,
    chefName:string,
    chefurl:string,
    chefTag:number,
    chefDesc:string,
    paperList : {
        name: string,
        num: string,
        unit: string,
      }[]
    cookStep:string[]
}