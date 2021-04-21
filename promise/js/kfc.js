let kfc=new Promise(
    (resolve,reject)=>{
        console.log("肯德基厨房开始做饭");
        resolve("我是肯德基，您的餐已经做好");
    }
);
let dad=kfc.then(msg=>{
    console.log(`收到肯德基消息：${msg}`);
    return {
        then(resolve){
            setTimeout(()=>{
                resolve("孩子，我吃了两秒了，不辣，你可以吃了");
            },2000);
        }
    };
});
let son=dad.then(msg=>{
    return new Promise((resolve,reject)=>{
        console.log(`收到爸爸消息：${msg}`);
        setTimeout(()=>{
            resolve("妈妈，我和爸爸吃完饭了");
        },2000);
    });
});
let ma=son.then(msg=>{
    console.log(`收到孩子消息:${msg},事情结束`);
});