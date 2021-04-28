new Promise((resolve,reject)=>{
    resolve({
        then(resolve,reject){
            resolve("解决状态");
        }
    });
})
.then(v=>{
    console.log(`fulfilled:${v}`);
    return{
        then(resolve,reject){
            setTimeout(() => {
                reject("失败状态");
            }, 2000);
        }
    };
})
.then(null,error=>{
    console.log(`rejected:${error}`);
});