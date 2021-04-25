const promise1 =new Promise((resolve,reject)=>{
    reject("success");
}).then(
    value=>{
        console.log(`解决:${value}`);
    },
    reason=>{
        console.log(`拒绝:${reason}`);
    }
);