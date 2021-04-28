new Promise((resolve,reject)=>{
    resolve();
})
.then(()=>{
    return{
        then:"后盾人"
    };
})
.then(v=>{
    console.log(v);
});