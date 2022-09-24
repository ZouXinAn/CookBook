export function getUrl(url:string){
    return new URL(`../assets/image/${url}`, import.meta.url).href;
}

// export default{
//   getUrl:(url:string)=>{
//     return new URL(`../assets/image/${url}`, import.meta.url).href;
// }
// }