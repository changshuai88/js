new Promise((resolve,reject)=>{
    resolve(
        new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("解决状态");
            }, 2000);
        })
    );
})
.then(
    v=>{
        console.log(`fulfilled:${v}`);
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("失败状态");
            }, 2000);
        });
    },
    v=>{
        console.log(`rejected:${v}`);
    }
)
.catch(error=>console.log(`rejected:${error}`));