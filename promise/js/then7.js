let li=new Promise((resolve,reject)=>{
    reject("李白");
});

let du=li.then(()=>{});
du.then(null,null).then(null,reject=>{
    console.log(reject);
});