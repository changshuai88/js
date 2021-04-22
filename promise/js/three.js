new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("fulfilled");
    },3000);
}).then(
    msg=>{
        console.log(msg);
    },
    error=>{
        console.log(error);
    }
);