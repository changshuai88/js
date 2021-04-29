const bai=new Promise((resolve,reject)=>{
    resolve();
})
.then(()=>{
    hd();
})
.catch(msg=>{
    console.log(msg.toString());
});