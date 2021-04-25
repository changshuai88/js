let c=new Promise((resolve,reject)=>{
    resolve("resolve");
});

let d=c.then();
d.then().then(resolve=>{
    console.log(resolve);
});