const promise =new Promise((resolve,reject)=>{
    resolve("success");
}).then(
    value=>{
        console.log(`解决:${value}`);
    },
    reason=>{
        console.log(`拒绝:${reason}`);
    }
);