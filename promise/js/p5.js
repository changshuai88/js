const p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("操作成功");
    },2000);
});

const p6=new Promise((resolve,reject)=>{
    resolve(p5);
}).then(
    msg=>{
        console.log(msg);
    },
    error=>{
        console.log(error);
    }
);