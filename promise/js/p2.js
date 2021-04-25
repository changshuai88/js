const p3=new Promise((resolve,reject)=>{
    resolve(
        new Promise((s,e)=>{  //p4
            s("成功");
        })
    );
}).then(msg=>{
     console.log(msg);
});