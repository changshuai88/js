new Promise((resolve,reject)=>{
    resolve();
})
.then(msg=>{
    throw new Error("这是then 抛出的错误");
})
.catch(()=>{
    console.log("33");  
});