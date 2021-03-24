const site ="天地玄黄";
const func =function(){
    console.log("宇宙洪荒");
};
export default class{
    static show(){
        console.log("ren.js的默认导出");
    }
}
export{site,func};
//一下与上面效果一样//--------------------------------------
// const site ="天地玄黄";
// const func =function(){
//     console.log("宇宙洪荒");
// };
// class User{
//     static show(){
//         console.log("ren.js的默认导出");
//     }
// }
// export{site,func,User as default};