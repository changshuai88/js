let qin=new Promise(resolve=>{
    resolve();
});
let han=qin.then(()=>{
    return new Promise(r=>{
            r("houdunren.com");
        });
});
han.then(v=>{
    console.log(v);
});