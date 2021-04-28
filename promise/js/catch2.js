const bai=new Promise((resolve,reject)=>{
    reject(new Error("Notice:Promise Exception"));
}).catch(msg=>{
    console.error(msg);
});