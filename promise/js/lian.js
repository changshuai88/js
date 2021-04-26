
let li=new Promise((resolve,reject)=>{
    resolve("fulfilled");
}).then(resolve=>{
    // return resolve;
    console.log(resolve);
}).then(resolve=>{  //每个then都是全新的promise，上一个then没有返回值，所以没有这里是undefined
    console.log(resolve);
});