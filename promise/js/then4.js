const b= new Promise((resolve,reject)=>{
    reject("is error");
}).then(null,error=>{
    console.log(`失败：${error}`);
});