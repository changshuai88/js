const promise=new Promise((resolve,reject)=>{
    throw new Error("fail");
}).catch(msg=>{
    console.log(msg.toString()+"后盾人");
});