new Promise((resolve,reject)=>{
    resolve();
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        reject(".then");
    });
})
.then(()=>{})
.catch(msg=>{
    console.log(msg);
});