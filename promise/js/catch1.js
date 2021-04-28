let li=new Promise((resolve,reject)=>{
    throw new Error("fail");
});
let p2=li.then();
p2.then().then(null,resolve=>{
    console.log(resolve+",后盾人"); //then 的两个参数，由于上面的promise抛出异常，这里接受到错误选择了异常
});