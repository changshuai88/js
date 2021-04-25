let p1=new Promise((resolve,reject)=>{
    reject("rejected");
})
.then()  //这个then中没有处理函数，所以p1传递的值(rejected)一直向后传递，直到有处理函数处理
.then(
    null,
    f=>console.log(f)
);