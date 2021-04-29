const qin=new Promise((resolve,reject)=>{
    reject();
})
.catch(msg=>{
    hd();
})
.then(null,error=>{
    console.log(error);
});