let a=new Promise((resolve,reject)=>{
    hd;
}).then(
    value=>console.log(value),
    reason=>console.log(reason)   //由于hd未定义，所以触发失败，调用了这里。
);