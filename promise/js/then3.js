const a=new Promise((resolve,reject)=>{
    resolve("success");
});

a.then(msg=>{
    console.log(`成功：${msg}`);
});