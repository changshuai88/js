new Promise((resolve,reject)=>{
    reject(new Error("请求失败"));
}).then(
    msg=>{
        console.log(msg);
    },
    error=>{
        console.log(error);
    }
);