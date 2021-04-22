new Promise((resolve,reject)=>{
    resolve("操作成功");
    rejected(new Error("请求失败"));
}).then(
    msg=>{
        console.log(msg);
    },
    error=>{
        console.log(error);
    }
);