const du=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        throw new Error("fail");  //程序走到这里就抛出错误，就不执行了
    },2000);
}).catch(msg=>{
    console.log(msg+"后盾人");
});