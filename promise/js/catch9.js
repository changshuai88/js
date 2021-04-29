const li=new Promise((resolve,reject)=>{
    try{
        throw new Error("fail");
    }catch(error){
        reject(error);
    }
}).catch(msg=>{
    console.log(msg.toString());
});