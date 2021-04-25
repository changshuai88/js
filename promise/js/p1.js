const p1=new Promise((resolve,reject)=>{
    // reject("rejected");
    resolve("fulfilled");
});
const p2=new Promise(resolve=>{  //由于这里是resolve所以只能执行resolve，不能执行reject。而且不论p1是resolve还是reject都按照resolve执行。
    resolve(p1); //resolve(p1)==resolve("fulfilled")
   
}).then(
    value=>{
        console.log(value);
    },
    reason=>{
        console.log(reason);
    }
);