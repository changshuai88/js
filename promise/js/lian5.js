new Promise((resolve,reject)=>{
    resolve();
})
.then(v=>{
    return new Promise((resolve,reject)=>{
        resolve("第二个promise");
    }).then(value=>{
        console.log(value);
        return value;  //下面的then处理的是这个then（promise）
    });
})
.then(value=>{
    console.log(value);
});

//这是对上面代码的优化，把内部的then提取出来
new Promise((resolve,reject)=>{
    resolve("libai");
})
.then(v=>{
    return new Promise((resolve,reject)=>{
        resolve("第二个promise"+v);
    });
})
.then(value=>{
    console.log(value);
    return value;
})
.then(value=>{
    console.log(value);
});