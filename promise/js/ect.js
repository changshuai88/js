let a=new Promise(resolve=>{
    resolve();
});
let b=a.then(()=>{
    return b;
});