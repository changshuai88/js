console.log(
    new Promise((resolve, reject)=>{
        resolve("fulfilled");
    })
);

console.log(
    new Promise((resolve,reject)=>{
        reject("rejected");
    })
);
