let promise=new Promise((resolve,reject)=>{
    resolve("fulfilled");
    console.log("后盾人");
});
promise.then(msg=>{
    console.log(msg);
});
console.log("houdunren.com");