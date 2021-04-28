new Promise((resolve,reject)=>{
    reject(new Error("请求失败"));
})
.then(msg=>{})
.then(msg=>{})
.catch(error=>{
    console.log(error);
});